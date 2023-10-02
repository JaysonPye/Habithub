<script>
  import { slide } from "svelte/transition";
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";

  export let showPopup;
  export let icon;
  export let button_name;

  const dispatch = createEventDispatcher();

  if (!showPopup) showPopup = false;

  export function togglePopup() {
    showPopup = !showPopup;
    if (!showPopup) dispatch("popupClosed");
  }

  function handleKeydown(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      togglePopup();
    }
  }
</script>

<Button on:click={togglePopup}>
  <i class="bx {icon}" />
  {button_name}
</Button>

{#key showPopup}
  {#if showPopup == true}
    <div class="popup-wrapper" transition:slide={{ duration: 300, y: -50 }}>
      <div class="popup">
        <div class="btn" on:click={togglePopup} on:keydown={handleKeydown}>
          <i class="bx bx-x" />
        </div>
        <div class="slot">
          <slot />
        </div>
      </div>
    </div>
  {/if}
{/key}

<style lang="scss">
  .popup-wrapper {
    z-index: 4000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(83, 83, 83, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
  }

  .popup {
    width: 50%;
    background-image: linear-gradient(
      to bottom right,
      #fdf4ee,
      #fcf6ee,
      #fdf1ed,
      $light-grey
    );
    background-attachment: fixed;
    padding: 20px;
    border-radius: $card-radius;
    position: relative;
    transition: $trans-05;
    .btn {
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 5px;
      border-radius: $card-radius;
      transition: $trans-05;
      i {
        font-size: 22px;
        color: $black;
      }
      &:hover {
        background: $red;
        i {
          color: $white;
        }
      }
    }
    @media all and (max-width: 900px) {
      width: 80%;
    }
    @media all and (max-width: 500px) {
      width: 90%;
    }
  }

  :global(body.darkmode) .popup {
    background: #1d2021;
    i {
      color: $base-txt-color-light;
    }
  }

  .slot {
    margin: 30px 0 30px 0;
  }
</style>
