<div class="spinner">
  <div class="square" />
</div>

<style lang="scss">
  .spinner {
    display: inline-block;
    position: relative;
    width: 25px;
    height: 25px;
  }
  .square {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
    animation: spinner 1s linear infinite;
  }
  .square:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, #e4b363, $red);
    border-radius: $card-radius;
    animation: spinner-before 1s linear infinite;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes spinner-before {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
