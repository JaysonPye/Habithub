<script>
  import { validateToken, signout, redirectToLocation } from "../../../utils";
  import Button from "../../../components/Button.svelte";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let userID;
  let jwt;

  onMount(async () => {
    let validToken = false;
    validToken = await validateToken();
    if (!validToken) {
      signout();
      redirectToLocation("/login");
    }

    jwt = localStorage.getItem("jwt");
    userID = localStorage.getItem("userID");

    guideFinished();
  });

  async function guideFinished() {
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
          firstTime: false,
        }),
      }
    );
  }
</script>

<div class="body">
  <div class="content">
    <h1>Welcome to Habit Hub!</h1>
    <p>This is a quick guide to show you what you can do with Habit Hub!</p>
    <div class="step">
      <h2>Add/edit/delete habits</h2>
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/Ia1mNH83pLg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
    </div>
    <div class="step">
      <h2>Check completed habits</h2>
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/iUKvpbjbudI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
    </div>
    <div class="step">
      <h2>View habit stats</h2>
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/3AMMtyo4gvo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
    </div>
    <div class="step">
      <h2>Enable dark mode</h2>
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/G9IPAxXJZVU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
    </div>
    <div class="btn">
      <Button on:click={() => goto("/dashboard")}>Okay, got it!</Button>
    </div>
  </div>
  <div class="man">
    <object title="Man nodding" type="image/svg+xml" data="./images/okay.svg">
      <img src="./images/okay.svg" alt="Man nodding" />
    </object>
  </div>
</div>

<style lang="scss">
  .body {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    column-gap: 50px;
    transition: $trans-05;
    @media all and (max-width: 900px) {
      flex-flow: column nowrap;
      align-items: center;
    }
  }

  .man {
    width: 20%;
    transition: $trans-05;
    @media all and (max-width: 900px) {
      width: 25%;
    }
    @media all and (max-width: 600px) {
      width: 40%;
    }
    @media all and (max-width: 400px) {
      width: 100%;
    }
  }

  .content {
    width: 75%;
    transition: $trans-05;
    @media all and (max-width: 900px) {
      width: 100%;
    }
  }

  h2 {
    font-size: 17px;
  }

  .step {
    margin-bottom: 50px;
    img {
      width: 100%;
      height: 400px;
      border-radius: $card-radius;
    }
  }

  .btn {
    margin-bottom: 20px;
  }

  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    border-radius: $card-radius;
    border: 0.1px solid $yellow;
    iframe {
      border-radius: $card-radius;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
