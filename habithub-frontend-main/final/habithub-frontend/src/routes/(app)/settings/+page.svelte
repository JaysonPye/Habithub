<script>
  import {
    validateToken,
    loadUserData,
    loadUserPic,
    signout,
    redirectToLocation,
  } from "../../../utils";
  import { onMount } from "svelte";
  import TextInput from "../../../components/TextInput.svelte";
  import NotificationCard from "../../../components/NotificationCardInner.svelte";
  import Button from "../../../components/Button.svelte";
  import PopUp from "../../../components/PopUp.svelte";
  import ImageUpload from "../../../components/ImageUpload.svelte";
  import Warning from "../../../components/Warning.svelte";
  import Toast from "../../../components/Toast.svelte";
  import Spinner from "../../../components/Spinner.svelte";
  import SecondaryButton from "../../../components/SecondaryButton.svelte";

  let firstName = "Name";
  let lastName = "Last name";
  let email = "example@mail.com";
  let userID;
  let jwt;
  let files;
  let showSettingsPopup = false;
  let showDeletePopup = false;
  let toast;
  let toastObj = {
    message: "",
    description: "",
  };
  let toastError = false;

  onMount(async () => {
    const validToken = await validateToken();
    if (!validToken) {
      signout();
      redirectToLocation("/login");
    }

    jwt = localStorage.getItem("jwt");
    userID = localStorage.getItem("userID");
    if (localStorage.getItem("darkTheme") == "true") {
      document.getElementById("theme").checked = true;
    }

    setUserData(userID, jwt);

    const picData = await loadUserPic(
      localStorage.getItem("userID"),
      localStorage.getItem("jwt")
    );
    const picImg = document.getElementById("pic-img-settings");
    const picIcon = document.getElementById("pic-icon-settings");

    if (picData) {
      picImg.src = `data:${picData.pic.mimetype};base64,${picData.pic.buffer64}`;

      // display as crop
      var height = picImg.naturalHeight;
      var width = picImg.naturalWidth;
      if (picImg.naturalWidth > picImg.naturalHeight) {
        picImg.style.height = "60px";
        var styleWidth = (width / height) * 60;
        picImg.style.width = `${styleWidth}px`;
      } else {
        picImg.style.width = "60px";
        var styleHeight = (height / width) * 60;
        picImg.style.height = `${styleHeight}px`;
      }

      picImg.style.display = "block";
      picIcon.style.display = "none";
    }
  });

  async function setUserData(userID, jwt) {
    const data = await loadUserData(userID, jwt);
    firstName = data.firstName;
    lastName = data.lastName;
    email = data.email;
  }

  async function settingsSubmit() {
    document.getElementById("submit").style.display = "none";
    document.getElementById("spinner").style.display = "block";
    const response = await fetch(
      `https://habithub-api.herokuapp.com/user/${userID}`,
      {
        method: "PUT",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
          Authorization: "BEARER " + jwt,
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
        }),
      }
    );

    // Thanks to this: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
    // somehow this all worked really easily, which is suspicious
    if (files) {
      const formData = new FormData();
      formData.append("profilepic", files[0]);
      const fileResponse = await fetch(
        `https://habithub-api.herokuapp.com/pic/${userID}`,
        {
          method: "POST",
          headers: {
            Authorization: "BEARER " + jwt,
          },
          body: formData,
        }
      );

      // do something with fileResponse
      if (fileResponse.ok) {
        const fileData = await fileResponse.json();
        const picImg = document.getElementById("pic-img-settings");
        const picIcon = document.getElementById("pic-icon-settings");

        picImg.style.display = "none";
        picIcon.style.display = "block";
        picImg.src = `data:${fileData.mimetype};base64,${fileData.buffer64}`;

        if (picImg.naturalHeight == 0) {
          setTimeout(() => {
            setPic(picImg);
            picImg.style.display = "block";
            picIcon.style.display = "none";
          }, 1000);
        } else {
          setPic(picImg);
          picImg.style.display = "block";
          picIcon.style.display = "none";
        }

        picImg.style.display = "block";
        picIcon.style.display = "none";

        toastError = false;
        toastObj.message = "Profile pic updated!";
        toastObj.description =
          "You may need to reload the page to see the profile pic.";
        toast.showToastNow(4000);
        setTimeout(() => {
          toastObj.description = "";
        }, 5000);
      } else {
        toastError = true;
        toastObj.message = "Profile pic update failed.";
        toast.showToastNow(4000);
      }
    }

    if (!response.ok) {
      const data = await response.json();
      if (data.error_code == "#1BE") {
        toastObj.message = "Email already in use.";
      } else {
        toastObj.message = "Problem updating settings.";
      }
      toastError = true;
      toast.showToastNow(4000);
    } else {
      showSettingsPopup = false;
      toastError = false;
      toastObj.message = "Settings updated!";
      toast.showToastNow(4000);
    }

    files = null;
    document.getElementById("spinner").style.display = "none";
    document.getElementById("submit").style.display = "block";
  }

  async function popupClosed() {
    setUserData(userID, jwt);
    files = null;
  }

  function closeDeletePopup() {
    showDeletePopup = false;
  }

  async function deleteUser() {
    // NOTE - need to delete the habit and refresh the page
    let response = await fetch(
      `https://habithub-api.herokuapp.com/user/${userID}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
          Authorization: "BEARER " + jwt,
        },
      }
    );

    if (!response.ok) {
      toastError = true;
      toastObj.message = "Problem deleting account.";
      toast.showToastNow(4000);
    } else {
      window.location.href = "/logout";
    }
  }

  async function changeTheme() {
    const checkbox = document.getElementById("theme").checked;
    document.body.classList.toggle("darkmode");
    localStorage.setItem("darkTheme", checkbox);
    const response = await fetch(
      `https://habithub-api.herokuapp.com/user/${userID}`,
      {
        method: "PUT",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
          Authorization: "BEARER " + jwt,
        },
        body: JSON.stringify({
          settings: {
            colourScheme: checkbox ? "dark" : "light",
          },
        }),
      }
    );
  }

  function setPic(picImg) {
    // display as crop
    var height = picImg.naturalHeight;
    var width = picImg.naturalWidth;
    if (picImg.naturalWidth > picImg.naturalHeight) {
      picImg.style.height = "60px";
      var styleWidth = (width / height) * 60;
      picImg.style.width = `${styleWidth}px`;
    } else {
      picImg.style.width = "60px";
      var styleHeight = (height / width) * 60;
      picImg.style.height = `${styleHeight}px`;
    }
  }
</script>

<div class="body">
  <Toast
    bind:this={toast}
    bind:message={toastObj.message}
    bind:description={toastObj.description}
    showToast=""
    bind:error={toastError}
  />
  <Warning
    message="The notification feature is still under construction.
      We apologise for any inconveniences caused by this.
      This will be updated soon. Thank you for your patience."
  />
  <h1>Settings</h1>
  <section>
    <!-- This is temporary & will be changed to a component soon. -AB -->
    <div class="container">
      <h2>Profile</h2>
      <hr />
      <div class="wrapper">
        <h3>First Name</h3>
        <p id="firstName">{firstName}</p>
      </div>
      <div class="wrapper">
        <h3>Last Name</h3>
        <p id="lastName">{lastName}</p>
      </div>
      <div class="wrapper email">
        <h3>Email</h3>
        <p id="email">{email}</p>
      </div>
      <div class="wrapper">
        <h3>Profile Picture</h3>
        <div class="user-pic">
          <i id="pic-icon-settings" class="bx bxs-user profile" />
          <img id="pic-img-settings" src="" alt="user-avatar" />
        </div>
      </div>
      <div class="popups">
        <PopUp
          icon="bx-trash"
          button_name="Delete Profile"
          bind:showPopup={showDeletePopup}
        >
          <div class="delete-form">
            <p>
              Are you sure you want to delete your account? This will remove all
              data associated with this account, and cannot be undone.
            </p>
            <div>
              <SecondaryButton on:click={closeDeletePopup}
                >Cancel</SecondaryButton
              >
              <Button on:click={deleteUser}>Delete</Button>
            </div>
          </div>
        </PopUp>
        <PopUp
          icon="bx-edit"
          button_name="Edit Profile"
          bind:showPopup={showSettingsPopup}
          on:popupClosed={popupClosed}
        >
          <form action="" on:submit={settingsSubmit}>
            <h2>Edit Profile</h2>
            <p>Please enter your new profile information here</p>
            <TextInput
              id="firstName"
              bind:value={firstName}
              name="FirstName"
              placeholder="Enter your first name here"
              label="First Name"
              input_type="text"
            />
            <TextInput
              id="lastName"
              bind:value={lastName}
              name="LastName"
              placeholder="Enter your last name here"
              label="Last Name"
              input_type="text"
            />
            <TextInput
              id="email"
              bind:value={email}
              name="Email"
              placeholder="Enter your email address here"
              label="Email"
              input_type="email"
            />
            <ImageUpload bind:file={files} />
            <Button id="submit">
              <i class="bx bx-save" />
              Save Profile
            </Button>
            <div id="spinner">
              <Spinner />
            </div>
          </form>
        </PopUp>
      </div>
    </div>
    <div class="container">
      <div class="error">
        <h2>Notification settings</h2>
        <i class="bx bx-error" />
      </div>
      <hr />
      <NotificationCard
        habit_title="Workout"
        icon="bx-dumbbell"
        reminder="On"
        frequency="Daily"
        time="09:00 AM"
      />
      <NotificationCard
        habit_title="Sleep early"
        icon="bx-bed"
        reminder="On"
        frequency="Daily"
        time="09:00 PM"
      />
    </div>
    <div class="container">
      <div class="error">
        <h2>Colour scheme</h2>
      </div>
      <hr />
      <div class="wrapper">
        <h3>Dark mode</h3>
        <input id="theme" type="checkbox" on:input={changeTheme} />
      </div>
    </div>
  </section>
</div>

<style lang="scss">
  .error {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    i {
      color: $yellow;
      font-size: 25px;
    }
  }
  @mixin flex {
    display: flex;
    align-items: center;
  }

  form {
    @include flex;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }

  .email {
    word-break: break-all;
  }

  .popups {
    @include flex;
    gap: 15px;
    flex-direction: row wrap;
    justify-content: flex-start;
    @media only screen and (max-width: 500px) {
      flex-direction: column;
    }
  }

  .user-pic {
    width: 60px;
    height: 60px;
    background-color: $dark-grey;
    border-radius: 100%;
    @include flex;
    justify-content: center;
    overflow: hidden;
    i {
      font-size: 35px;
      color: $light-grey;
    }
  }

  #pic-img-settings {
    display: none;
  }

  .wrapper {
    @include flex;
    justify-content: space-between;
    flex-flow: row wrap;
    gap: 15px;
    margin: 20px 5px;
  }

  p,
  h3,
  h2 {
    margin: 0;
  }

  hr {
    margin-top: 16px;
  }

  .container {
    width: 31%;
    height: auto;
    background: $white;
    border-radius: $card-radius;
    box-shadow: $card-shadow;
    padding: 16px;
    margin-top: 30px;
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 15px;
    }
    @media all and (max-width: 1097px) {
      width: 100%;
    }
  }

  :global(body.darkmode) .container {
    background: $black;
    box-shadow: none;
  }

  section {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 30px;
    width: 100%;
    margin-bottom: 20px;
    transition: $trans-05;
    @media all and (max-width: 1137px) {
      justify-content: flex-start;
      gap: 10px;
    }
    @media all and (max-width: 1097px) {
      width: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  #spinner {
    display: none;
  }

  .delete-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    & > p {
      margin-bottom: 0.5em;
    }
  }
</style>
