<script>
  import { base } from "$app/paths";
  export let id;

  function toAbout() {
    window.location.href = "/";
  }
</script>

<!-- This component was created with the help of a YouTube tutorial.
https://youtu.be/bFvfqUMjvsA?list=PL4EfZpbcgnsDzLMCKqb1poI8m1Gbd_CXO -->
<nav class="sidebar close" {id}>
  <header>
    <div class="image-text">
      <span class="image">
        <a href="/" on:click|preventDefault={toAbout}>
          <img src="{base}/images/logo_app.png" alt="Logo" />
        </a>
      </span>
      <div class="text header-text">
        <span class="name">Habit Hub</span>
      </div>
    </div>
    <i class="bx bx-chevron-right toggle" />
  </header>
  <div class="menu-bar">
    <div class="menu">
      <ul class="menu-links" id="menu-links">
        <li class="nav-link">
          <a href="/dashboard" class="text-link">
            <i class="bx bx-home-alt icon" />
            <span class="text nav-text">Dashboard</span>
          </a>
        </li>
        <li class="nav-link">
          <a href="/habits" class="text-link">
            <i class="bx bx-list-check icon" />
            <span class="text nav-text">Habits</span>
          </a>
        </li>
        <li class="nav-link">
          <a href="/statistics" class="text-link">
            <i class="bx bx-line-chart icon" />
            <span class="text nav-text">Statistics</span>
          </a>
        </li>
        <li class="nav-link">
          <a href="/settings" class="text-link">
            <i class="bx bx-cog icon" />
            <span class="text nav-text">Settings</span>
          </a>
        </li>
        <li class="nav-link">
          <a href="/guide" class="text-link">
            <i class="bx bx-help-circle icon" />
            <span class="text nav-text">Help/Guide</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="bottom-content">
      <ul class="menu-links">
        <li class="">
          <a id="loginLink" href="/logout" class="text-link">
            <i id="loginIcon" class="bx bx-log-out icon" />
            <span id="loginText" class="text nav-text">Log Out</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style lang="scss">
  @mixin flex-column {
    display: flex;
    flex-direction: column;
  }

  @mixin flex-center {
    display: flex;
    align-items: center;
  }

  .sidebar {
    position: fixed;
    top: 10px;
    left: 10px;
    height: 100%;
    width: 250px;
    background: $black;
    padding: 10px 14px;
    z-index: 100;
    color: $light-grey;
    border-radius: $card-radius;
    transition: $trans-05;
    &.close {
      width: 88px;
      .text {
        opacity: 0;
      }
      .toggle {
        transform: translateY(-50%);
      }
    }
    @media all and (max-width: 800px) {
      top: 0;
      left: 0;
      bottom: 0;
      border-radius: 0 6px 6px 0;
      padding: 10px 8px;
      &.close {
        width: 60px;
      }
    }
  }

  :global(body.darkmode) .sidebar {
    background: $light-grey;
    .text {
      color: $black;
    }
  }

  header {
    position: relative;
  }

  img {
    width: 40px;
    border-radius: $card-radius;
  }

  .image-text {
    @include flex-center;
  }

  .text {
    font-size: 16px;
    font-weight: 400;
    transition: $trans-01;
    white-space: nowrap;
    opacity: 1;
  }

  .image {
    min-width: 60px;
    @include flex-center;
  }

  .header-text {
    @include flex-column;
  }

  .toggle {
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%) rotate(180deg);
    height: 25px;
    width: 25px;
    background: $red;
    @include flex-center;
    justify-content: center;
    border-radius: 50%;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
    transition: $trans-03;
  }

  li {
    height: 50px;
    margin-top: 10px;
    list-style: none;
    @include flex-center;
    @media all and (max-width: 800px) {
      margin-left: -6px;
    }
  }

  .icon {
    font-size: 23px;
    color: $red;
    min-width: 60px;
    @include flex-center;
    justify-content: center;
  }

  .text-link {
    font-size: 16px;
    width: 100%;
    color: $light-grey;
    text-decoration: none;
    height: 100%;
    @include flex-center;
    border-radius: $card-radius;
    transition: $trans-04;
    &:hover {
      background: $light-grey;
      color: $black;
    }
  }

  :global(body.darkmode) .text-link {
    color: $black;
    &:hover {
      background: $black;
      color: $light-grey;
    }
  }

  .menu-bar {
    height: calc(100% - 50px);
    @include flex-column;
    justify-content: space-between;
  }
</style>
