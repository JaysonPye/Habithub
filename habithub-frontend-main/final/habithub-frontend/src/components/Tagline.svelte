<div class="slogan">
  <h1>Kill bad habits, ignite positive change!</h1>
  <object
    title="Man slashing cigarette"
    type="image/svg+xml"
    data="./images/sword.svg"
  >
    <img src="./images/sword.svg" alt="Man slashing cigarette" />
  </object>
</div>

<style lang="scss">
  .slogan {
    background: linear-gradient(to bottom, $black, $dark-grey, $light-grey);
    color: $white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }

  h1 {
    text-align: left;
    margin: 100px 0;
    font-size: 50px;
    z-index: 200;
    width: 77%;
  }

  object {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 60%;
  }
</style>
