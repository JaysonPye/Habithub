<script>
  export let message;
</script>

<div class="warning">
  <i class="bx bx-error" />
  <p>{message}</p>
</div>

<style lang="scss">
  .warning {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    background: rgb(255, 254, 227);
    border-radius: $card-radius;
    box-shadow: $card-shadow;
    padding: 15px 20px;
    margin-bottom: 30px;
    i {
      color: $yellow;
      font-size: 30px;
    }
    @media all and (max-width: 500px) {
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
    }
  }

  :global(body.darkmode) .warning {
    background: #555;
  }

  p {
    margin: 0;
  }
</style>
