<script>
  import { onMount } from "svelte";
  import Button from "../../../components/Button.svelte";
  import TextInput from "../../../components/TextInput.svelte";
  import { base } from "$app/paths";
  import Tagline from "../../../components/Tagline.svelte";
  import Toast from "../../../components/Toast.svelte";

  let toast;
  let toastObj = {
    message: "",
    description: "",
  };
  let toastError = false;

  // this is literally the most convoluted way to achieve this (I built it) but I
  // cannot be bothered fixing it now - EW
  const formSubmit = (event) => {
    event.preventDefault();
  };

  onMount(() => {
    if (localStorage.getItem("loggedIn") == "true") {
      window.location.href = "/dashboard";
    }
    const btn = document.getElementById("login_button");
    btn.addEventListener("click", loginClick);
    function loginClick() {
      try {
        loginUser();
      } catch (err) {
        toastError = true;
        toastObj.message = "A problem occured while logging in.";
        toast.showToastNow(4000);
      }
    }

    // method for sending login form data
    // based on answer here: https://stackoverflow.com/questions/68389117/using-fetch-api-to-create-a-login-form

    // TODO: update url, stop form default behavior
    async function loginUser() {
      const emailField = document.getElementById("email");
      const passwordField = document.getElementById("password");

      const response = await fetch(
        "https://habithub-api.herokuapp.com/auth/signin",
        {
          //API base url should be stored somewhere for the whole site
          method: "POST",
          headers: {
            Accept: "application.json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailField.value,
            password: passwordField.value,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        localStorage.clear();
        const message =
          "A problem occured while logging in: " +
          response.status +
          " " +
          response.statusText;
        if (response.status == 400) {
          toastError = true;
          toastObj.message = "Email or password incorrect.";
          toast.showToastNow(4000);
          return;
        } else {
          throw new Error(message);
        }
      }

      // add JWT to session if good
      localStorage.setItem("jwt", data.accessToken);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("userID", data.user._id);
      localStorage.setItem("darkTheme", data.user.colourScheme == "dark");

      if (data.user.firstTime) {
        window.location.href = "/guide";
      } else {
        window.location.href = "/dashboard";
      }
    }
  });

  function showForgotPassword() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("reset-form").style.display = "flex";
  }

  function showLoginForm() {
    document.getElementById("reset-form").style.display = "none";
    document.getElementById("login-form").style.display = "flex";
  }

  async function resetSubmit() {
    const resetEmail = document.getElementById("reset-email").value;
    const response = await fetch(
      "https://habithub-api.herokuapp.com/auth/reset",
      {
        //API base url should be stored somewhere for the whole site
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: resetEmail,
        }),
      }
    );

    if (!response.ok) {
      toastError = true;
      toastObj.message = "Problem resetting password";
      toast.showToastNow(4000);
    } else {
      toastError = false;
      toastObj.message =
        "If that account exists, you should receive a reset email soon";
      toast.showToastNow(4000);
    }
  }
</script>

<div class="body">
  <div class="slogan">
    <Tagline />
  </div>
  <Toast
    bind:this={toast}
    bind:message={toastObj.message}
    bind:description={toastObj.description}
    showToast=""
    bind:error={toastError}
  />
  <div class="rest">
    <img class="logo" src="{base}/images/logo_web.png" alt="Habit Hub logo" />
    <h1>Welcome Back!</h1>
    <form class="form" on:submit={formSubmit} id="login-form">
      <p>It's so good to see you again!</p>
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
        placeholder="Enter your password here"
        label="Password"
        input_type="password"
      >
        <div class="forgot">
          <p
            on:click|preventDefault={showForgotPassword}
            on:keydown={showForgotPassword}
          >
            Forgot password
          </p>
        </div>
      </TextInput>

      <div class="btn">
        <Button id="login_button">Login</Button>
      </div>
    </form>
    <form class="form" on:submit={resetSubmit} id="reset-form">
      <p>
        Enter your email address.<br /> We'll send you an email with a password reset
        link shortly.
      </p>
      <TextInput
        id="reset-email"
        value=""
        name="reset-email"
        placeholder="Email address"
        label="Email address"
        input_type="text"
      >
        <div class="forgot">
          <p on:click|preventDefault={showLoginForm} on:keydown={showLoginForm}>
            Back to login
          </p>
        </div>
      </TextInput>
      <div class="btn">
        <Button id="reset_button">Reset Password</Button>
      </div>
    </form>
    <p class="p">Don't have an account? <a href="/signup">Sign Up</a></p>
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

  #reset-form {
    display: none;
  }

  .forgot {
    display: flex;
    justify-content: end;
    margin-top: 0.2em;
    & > p {
      border: none;
      color: $dark-grey;
      background: none;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
</style>
