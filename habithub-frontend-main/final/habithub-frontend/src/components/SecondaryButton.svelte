<script>
  export let id;
</script>

<button on:click {id} class="gradient-border">
  <slot />
</button>

<style lang="scss">
  button {
    font-weight: bold;
    border: none;
    background-image: $white;
    padding: 10px 35px;
    border-radius: $card-radius;
    color: $red;
    box-shadow: $button-shadow;
    font-size: 14px;
    transition: $trans-03;
    &:hover {
      font-size: 16px;
      cursor: pointer;
    }
    &:focus {
      background: $red;
      color: $white;
      border: none;
    }
  }

  slot {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }

  .gradient-border {
    border: 2px solid transparent;
    background: linear-gradient(to right, $red, $red, $yellow);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease;
  }
</style>
