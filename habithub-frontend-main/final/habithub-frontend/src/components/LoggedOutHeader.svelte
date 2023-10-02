<script>
  import Button from "./Button.svelte";
  import { goto } from "$app/navigation";
  import { validateToken } from "../utils";

  let showMenu = false;

  function signupButtonClick() {
    goto("/signup");
  }

  function toggleMenu() {
    showMenu = !showMenu;
  }

  function loginOverride() {
    if (
      localStorage.getItem("loggedIn") == "true" &&
      validateToken(localStorage.getItem("jwt"))
    ) {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/login";
    }
  }
</script>

<nav>
  <div class="logo">
    <img src="./images/logo_web.png" alt="Logo" />
  </div>
  <div class="hamburger" on:click={toggleMenu} on:keydown={toggleMenu}>
    {#if showMenu}
      <p><i class="bx bx-x" /></p>
    {:else}
      <p><i class="bx bx-menu-alt-right" /></p>
    {/if}
  </div>
  <div class="links {showMenu ? 'active' : ''}">
    <ul>
      <li><a href="/">About Us</a></li>
      <li><a href="/contactUs">Contact Us</a></li>
      <li><a href="/referenceList">Reference List</a></li>
      <li>
        <a href="/login" on:click|preventDefault={loginOverride}>Login</a>
      </li>
      <li>
        <Button on:click={signupButtonClick}>
          <i class="bx bx-plus" />
          Sign Up
        </Button>
      </li>
    </ul>
  </div>
</nav>

<style lang="scss">
  nav {
    height: 70px;
    width: 100%;
    padding: 10px 2%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-direction: row wrap;
    column-gap: 25px;
    position: fixed;
    z-index: 1000;
    margin-bottom: 70px;
    background-color: rgba(252, 246, 238, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: $card-shadow;
    @media only screen and (max-width: 900px) {
      justify-content: space-between;
    }
  }

  img {
    width: 140px;
  }

  .hamburger {
    display: none;
    cursor: pointer;
    @media only screen and (max-width: 900px) {
      display: block;
    }
    .bx {
      font-size: 30px;
      color: $black;
    }
    p {
      line-height: 0;
      margin: 0;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: 25px;
    li {
      list-style: none;
      &:hover a {
        color: $red;
      }
    }
    a {
      text-decoration: none;
      color: $black;
    }
  }

  .links {
    display: flex;
    @media only screen and (max-width: 900px) {
      display: none;
    }
  }

  .active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    background: linear-gradient(to bottom right, #fdf4ee, #fcf6ee, #fdf1ed);
    height: calc(100vh - 70px);
    border-radius: 0 6px 6px 6px;
    width: 50%;
    box-shadow: $card-shadow;
    z-index: 1001;
    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      gap: 0;
    }
    li {
      text-align: center;
      padding: 20px;
      width: 100%;
      &:hover {
        background: $red;
        a {
          color: $white;
        }
      }
    }
    @media only screen and (min-width: 900px) {
      display: none;
    }
    @media only screen and (max-width: 500px) {
      width: 100%;
    }
  }
</style>
