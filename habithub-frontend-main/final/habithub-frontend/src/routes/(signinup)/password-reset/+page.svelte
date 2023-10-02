<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import Tagline from "../../../components/Tagline.svelte";
  import TextInput from "../../../components/TextInput.svelte";
  import Toast from "../../../components/Toast.svelte";
  import Button from "../../../components/Button.svelte";

  let toast;
  let toastObj = {
    message: "",
    description: "",
  };
  let toastError = false;
  let password;
  let passwordConfirm;

  onMount(() => {
    if ($page.url.searchParams.get("token") == null) {
      toastObj.message = "Invalid password reset link.";
      toast.showToastNow(4000);
    }
  });

  async function passwordSubmit() {
    if ($page.url.searchParams.get("token") == null) {
      toastError = true;
      toastObj.message = "Invalid password reset link.";
      toast.showToastNow(4000);
      return;
    }

    if (password != passwordConfirm) {
      toastError = true;
      toastObj.message = "Passwords must match.";
      toast.showToastNow(4000);
      return;
    }
    const response = await fetch(
      `https://habithub-api.herokuapp.com/auth/reset/${$page.url.searchParams.get(
        "token"
      )}`,
      {
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
        }),
      }
    );

    if (!response.ok) {
      toastError = true;
      if (response.status == 401) toastObj.message = "Unauthorised";
      else toastObj.message = "Problem resetting password";
      toast.showToastNow(4000);
    } else {
      const data = await response.json();
      toastError = false;
      toastObj.message = `Password for ${data.email} reset successfully.`;
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
    bind:error={toastError}
  />
  <div class="rest">
    <img class="logo" src="{base}/images/logo_web.png" alt="Habit Hub logo" />
    <h1>Password Reset</h1>
    <form class="form" on:submit|preventDefault={passwordSubmit}>
      <p>Enter your new password.</p>
      <TextInput
        id="password"
        bind:value={password}
        name="password"
        placeholder="new password"
        label="New Password"
        input_type="password"
      />
      <TextInput
        id="passwordConfirm"
        bind:value={passwordConfirm}
        name="passwordConfirm"
        placeholder="confirm password"
        label="Confirm Password"
        input_type="password"
      />
      <div class="btn">
        <Button id="submitButton">Reset Password</Button>
      </div>
    </form>
    <p class="p">Return to <a href="/login">login</a></p>
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
    @media all and (max-width: 800px) {
      margin-left: -60px;
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
