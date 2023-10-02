<script>
  import { fade } from "svelte/transition";
  export let showToast
  export let error = false;

  export let message;
  export let description;

  if (showToast == "true") {
    showToast = true    
    setTimeout(() => {
      showToast = false;
    }, 2000);
  } 
  else showToast = false


  export function showToastNow(timeout = 2000) {
    if (timeout == NaN || timeout <=0) timeout = 2000
    showToast = true
    setTimeout(() => {
      showToast = false;
    }, timeout);
  }

</script>

{#key showToast}
{#if showToast}
  <div
    class="toast {error ? 'error' : ''}"
    transition:fade|local={{ duration: 300 }}
  >
    <div class="toast-header">
      <p><b>{message}</b> {description}</p>
      <i
        class="bx bx-x toast-close"
        on:click={() => (showToast = false)}
        on:keydown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            showToast = false;
          }
        }}
      />
    </div>
  </div>
{/if}
{/key}

<style lang="scss">
  .toast {
    position: fixed;
    top: 20px;
    left: 0;
    right: 0;
    margin: auto;
    width: 80%;
    max-width: 300px;
    background: $white;
    box-shadow: $card-shadow;
    padding: 10px 20px;
    border-radius: $card-radius;
    z-index: 4001;
    transition: top 0.3s ease-in-out;
    &.error {
      background: $red;
      color: $white;
    }
    @media (max-width: 576px) {
      width: 90%;
    }
    @media (min-width: 577px) and (max-width: 768px) {
      width: 70%;
    }
    @media (min-width: 769px) and (max-width: 992px) {
      width: 60%;
    }
  }

  :global(body.darkmode) .toast {
    color: $black;
    &.error {
      background: $red;
      color: $white;
    }
  }

  .toast-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .toast-close {
    font-size: 18px;
    cursor: pointer;
  }

  p {
    margin: 0;
  }
</style>
