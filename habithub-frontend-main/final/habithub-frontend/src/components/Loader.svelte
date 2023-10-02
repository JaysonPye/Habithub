<script>
  export let id;
</script>

<!-- Component made with the help of 
https://codepen.io/ahmadbassamemran/pen/bXRPdr -->
<div class="wrapper" {id}>
  <div class="circle" />
  <div class="circle" />
  <div class="circle" />
  <div class="shadow" />
  <div class="shadow" />
  <div class="shadow" />
  <span><p>Loading</p></span>
</div>

<style lang="scss">
  .wrapper {
    width: 200px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 38%;
    transform: translate(-50%, -50%);
    margin: 20px;
    p {
      position: absolute;
      top: 75px;
      font-size: 23px;
      letter-spacing: 10px;
      color: $red;
      left: 15%;
      margin: 0;
    }
    margin-top: 80px;
  }

  .circle {
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 10%;
    background: radial-gradient(circle, $red, $yellow);
    left: 15%;
    transform-origin: 50%;
    animation: circle 0.5s alternate infinite ease;
    &:nth-child(2) {
      left: 45%;
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }
  }

  @keyframes circle {
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }
    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }
    100% {
      top: 0%;
    }
  }

  .shadow {
    width: 20px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 62px;
    transform-origin: 50%;
    z-index: -1;
    left: 15%;
    filter: blur(1px);
    animation: shadow 0.5s alternate infinite ease;
    &:nth-child(4) {
      left: 45%;
      animation-delay: 0.2s;
    }
    &:nth-child(5) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }
  }

  @keyframes shadow {
    0% {
      transform: scaleX(1.5);
    }
    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }
    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  }
</style>
