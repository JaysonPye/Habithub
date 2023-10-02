<svelte:options accessors={true} />

<!-- Styled with the../routes/(app)/dashboard/+page.svelteXUfcujpsk -->
<script>
  export let id;
  export let value;
  export let name;
  export let placeholder;
  export let classs;
  export let label;

  function focus() {
    document.getElementById(id).focus();
  }
</script>

<div class="input-container {classs}">
  <input
    required
    type="number"
    {id}
    bind:value
    {name}
    {placeholder}
    class="text-input"
  />
  <label class="label" for={name} on:click={focus} on:keydown={focus}
    >{label}</label
  >
  <slot />
</div>

<style lang="scss">
  .input-container {
    width: 70%;
    position: relative;
    transition: $trans-05;
    @media all and (max-width: 900px) {
      width: 100%;
    }
  }

  .label {
    position: absolute;
    left: 10px;
    top: 14px;
    transition: $trans-02;
    padding: 0 2px;
    z-index: 1;
    &::before {
      content: "";
      height: 5px;
      background-color: $white;
      position: absolute;
      left: 0;
      top: 10px;
      width: 100%;
      z-index: -1;
    }
    &:hover {
      cursor: text;
    }
  }

  .text-input {
    padding: 0.8rem;
    border-radius: $card-radius;
    width: 100%;
    height: 100%;
    border: 1px solid $light-grey;
    background: $white;
    font-size: 15px;
    outline: none;
    transition: $trans-03;
    color: $black;
    &:focus {
      border: 1px solid $red;
      & + .label {
        top: -10px;
        color: $red;
        font-size: 14px;
      }
    }
    &::placeholder {
      font-size: 15px;
      opacity: 0;
      transition: $trans-03;
    }
    &:focus::placeholder {
      opacity: 1;
      animation-delay: 0.2s;
    }
    &:focus + label,
    &:valid + label {
      top: -10px;
      color: $red;
      font-size: 14px;
    }
  }

  :global(body.darkmode) .text-input {
    background-color: $black;
    color: $white;
    border: 1px solid rgb(67, 67, 67);
    &:focus {
      & + .label {
        color: $red;
        font-weight: bold;
        font-size: 15px;
      }
    }
    &:focus + label,
    &:valid + label {
      color: $red;
      font-weight: bold;
      font-size: 15px;
    }
  }

  :global(body.darkmode) .label {
    color: $dark-grey;
    &::before {
      background-color: $black;
    }
  }
</style>
