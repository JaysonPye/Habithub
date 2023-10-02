<script>
  export let id;
  import { onMount } from "svelte";
  import { loadUserData, loadUserPic } from "../utils";

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  onMount(() => {
    if (localStorage.getItem("loggedIn")) {
      loadProfile();
      loadName();
    }
  });

  async function loadProfile() {
    const data = await loadUserPic(
      localStorage.getItem("userID"),
      localStorage.getItem("jwt")
    );
    const picImg = document.getElementById("pic-img");
    const picIcon = document.getElementById("pic-icon");

    if (data && data.pic) {
      picImg.src = `data:${data.pic.mimetype};base64,${data.pic.buffer64}`;

      // sometimes the natural height / width are not set fast enough,
      // resulting in a buggy load. if so, a delay is set to let the DOM
      // load the img properly
      // NOTE - this should probably be in a while loop with a set number
      // of attempts on delays
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
    }
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

  async function loadName() {
    const data = await loadUserData(
      localStorage.getItem("userID"),
      localStorage.getItem("jwt")
    );
    document.getElementById(
      "name"
    ).innerHTML = `${data.firstName} ${data.lastName}`;
  }
</script>

<!-- This component was created with the help of a YouTube tutorial.
https://youtu.be/ybXulmeilFM -->
<nav {id}>
  <div
    class="user-pic"
    id="user-pic"
    on:click={toggleMenu}
    on:keydown={toggleMenu}
  >
    <i id="pic-icon" class="bx bxs-user profile" />
    <img id="pic-img" src="" alt="user-avatar" />
  </div>
  <div class={isMenuOpen ? "sub-menu-wrap" : "sub-menu-wrap close-menu"}>
    <div class="sub-menu"
      on:click={toggleMenu}
      on:keydown={toggleMenu}
    >
      <div class="user-info">
        <i class="bx bxs-user" />
        <h2 id="name">Name LastName</h2>
      </div>
      <hr />
      <a href="/settings" class="sub-menu-link">
        <i class="bx bx-cog img" />
        <p>Settings</p>
        <i class="bx bx-chevron-right arrow" />
      </a>
      <a href="/guide" class="sub-menu-link">
        <i class="bx bx-help-circle img" />
        <p>Help/Guide</p>
        <i class="bx bx-chevron-right arrow" />
      </a>
      <a href="/logout" class="sub-menu-link">
        <i class="bx bx-log-out img" />
        <p>Logout</p>
        <i class="bx bx-chevron-right arrow" />
      </a>
    </div>
  </div>
</nav>

<style lang="scss">
  @mixin flex {
    display: flex;
    align-items: center;
  }

  nav {
    height: 80px;
    width: 100%;
    border-bottom: solid 0.01px $light-grey;
    padding: 10px 2%;
    @include flex;
    justify-content: flex-end;
    position: relative;
    flex-direction: row;
    column-gap: 25px;
  }

  .user-pic {
    width: 60px;
    height: 60px;
    background-color: $dark-grey;
    border-radius: 100%;
    @include flex;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
  }

  #pic-img {
    display: none;
  }

  i {
    font-size: 20px;
    color: $red;
  }

  .arrow {
    color: $black;
    font-size: 20px;
    transition: $trans-05;
  }

  .profile {
    font-size: 35px;
    color: $light-grey;
  }

  .sub-menu-wrap {
    position: absolute;
    top: 100%;
    right: 1.5%;
    width: 240px;
    z-index: 101;
    max-height: 400px;
    overflow: hidden;
    transition: $trans-05;
  }

  .sub-menu-wrap.close-menu {
    max-height: 0px;
  }

  .sub-menu {
    background: $light-grey;
    padding: 20px;
    margin: 10px;
    border-radius: $card-radius;
    box-shadow: $card-shadow;
  }

  :global(body.darkmode) .sub-menu {
    color: $black;
  }

  .user-info {
    @include flex;
  }

  h2 {
    font-size: 15px;
    margin-bottom: 0;
  }

  p {
    margin-bottom: 0;
    width: 100%;
    transition: $trans-05;
  }

  .user-info i {
    margin-right: 15px;
  }

  .sub-menu-link {
    @include flex;
    text-decoration: none;
    color: $black;
    margin: 12px 0;
    &:hover {
      p {
        font-weight: bolder;
      }
      .arrow {
        transform: translateX(5px);
      }
    }
  }

  .img {
    margin-right: 15px;
  }

  hr {
    margin: 15px 0 10px;
  }
</style>
