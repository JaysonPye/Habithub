<script>
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import Button from "../../../components/Button.svelte";
  import TextInput from "../../../components/TextInput.svelte";
  import Tagline from "../../../components/Tagline.svelte";
  import Toast from "../../../components/Toast.svelte";

  let user = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    passwordConfirm: "",
  };
  let toast;
  let toastObj = {
    message: "",
    description: "",
  };
  let toastError = false;

  onMount(() => {
    if (localStorage.getItem("loggedIn") == "true") {
      window.location.href = "/dashboard";
    }
  });

  async function handleSignup() {
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;
    user.firstName = document.getElementById("firstName").value;
    user.lastName = document.getElementById("lastName").value;
    user.passwordConfirm = document.getElementById("passwordConfirm").value;

    if (user.password != user.passwordConfirm) {
      toastError = true;
      toastObj.message = "Passwords must match.";
      toast.showToastNow(4000);
      return;
    }

    const response = await fetch("https://habithub-api.herokuapp.com/user", {
      //API base url should be stored somewhere for the whole site
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      }),
    });

    if (!response.ok) {
      toastError = true;
      const data = await response.json();
      if (data.error_code && data.error_code == "#1BE") {
        toastObj.message = `'${user.email}' is already in use.`;
        toast.showToastNow(4000);
      } else {
        toastObj.message = "Something went wrong.";
        toast.showToastNow(4000);
      }
      return;
    }

    toastError = false;
    toastObj.message = "Account created successfully. Please sign in.";
    toast.showToastNow(4000);
    // window.location.href = "/login";
  }
</script>

<div class="body">
  <div class="slogan">
    <Tagline />
  </div>
  <div class="rest">
    <Toast
      bind:this={toast}
      bind:message={toastObj.message}
      bind:description={toastObj.description}
      showToast=""
      bind:error={toastError}
    />
    <img class="logo" src="{base}/images/logo_web.png" alt="Habit Hub logo" />
    <h1>Sign Up</h1>
    <form class="form">
      <TextInput
        id="firstName"
        value=""
        name="FirstName"
        placeholder="Enter your first name here"
        label="First Name"
        input_type="text"
      />
      <TextInput
        id="lastName"
        value=""
        name="LastName"
        placeholder="Enter your last name here"
        label="Last Name"
        input_type="text"
      />
      <TextInput
        id="email"
        value=""
        name="Email"
        placeholder="Enter your email address here"
        label="Email"
        input_type="email"
      />
      <TextInput
        id="password"
        value=""
        name="Password"
        placeholder="Enter the password here"
        label="Password"
        input_type="password"
      />
      <TextInput
        id="passwordConfirm"
        value=""
        name="PasswordConfirm"
        placeholder="Re-enter the password here"
        label="Confirm Password"
        input_type="password"
      />
      <div class="btn">
        <Button on:click={handleSignup}>Signup</Button>
      </div>
    </form>
    <p class="p">
      Already have an account? <a href="/login">Log In</a>
    </p>
  </div>
</div>

<style lang="scss">
  .body {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    @media all and (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 0;
    }
  }

  .slogan {
    width: 50%;
    @media all and (max-width: 900px) {
      display: none;
    }
  }

  .rest {
    width: 50%;
    transition: $trans-05;
    @media all and (max-width: 900px) {
      width: 80%;
    }
    @media all and (max-width: 500px) {
      width: 90%;
    }
    @media all and (max-width: 300px) {
      width: 98%;
    }
  }

  .logo {
    width: 250px;
    margin: 0 0 20px -20px;
    @media only screen and (max-width: 278px) {
      width: 100%;
      margin: 0;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  a {
    color: $red;
    text-decoration: none;
    transition: $trans-05;
    &:hover {
      color: $white;
      background-color: $red;
      padding: 5px 10px;
      border-radius: $card-radius;
    }
  }

  .btn {
    margin: 10px 0;
  }
</style>
