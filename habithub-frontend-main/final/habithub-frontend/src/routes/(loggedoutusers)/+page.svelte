<script>
  import Button from "../../components/Button.svelte";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css";

  function buttonClick() {
    goto("/signup");
  }

  onMount(() => {
    AOS.init({});
  });
</script>

<section class="landing" aos>
  <div
    class="landing-txt"
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <h1>
      <b>Transform</b> your habits, <br />
      organise <b>your life</b> with Habit Hub!
    </h1>
    <p>
      Empower your growth,<br />Track your progress, achieve your goals!
    </p>
    <Button on:click={buttonClick}>Get Started</Button>
  </div>
  <div
    class="img"
    data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <img src="./images/landing.png" alt="People doing good habits" />
  </div>
</section>
<div class="features" aos>
  <section
    data-aos="zoom-in"
    data-aos-offset="200"
    data-aos-delay="100"
    data-aos-duration="1000"
  >
    <img src="./images/intiutive-icon.png" alt="icon" />
    <h1>Intuitive Interface</h1>
    <p>
      With Habit Hub, say goodbye to cluttered interfaces and hello to a sleek
      and intuitive app designed to help you form good habits. Our beautiful
      animations featuring lovable characters will motivate you on your journey
      to reaching your goals. Get started today and experience the ease of
      habit-forming with Habit Hub.
    </p>
  </section>
  <section
    data-aos="zoom-in"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <img src="./images/customise.png" alt="icon" />
    <h1>Customise your Journey</h1>
    <p>
      Unleash your unique potential with Habit Hub's personalised habits. Say
      goodbye to generic habit tracking apps and hello to a tailored experience
      that caters to your specific goals and aspirations. Habit Hub gives you
      the power to create and customise your own habits, ensuring that you are
      on the right track towards reaching your full potential. Start taking
      control of your life with Habit Hub today!
    </p>
  </section>
  <section
    data-aos="zoom-in"
    data-aos-offset="200"
    data-aos-delay="100"
    data-aos-duration="1000"
  >
    <img src="./images/progress.png" alt="icon" />
    <h1>Track Your Progress</h1>
    <p>
      Experience the satisfaction of watching your habits grow with Habit Hub's
      statistics page! Keep track of your streaks and see your progress over
      time with a visual representation of your hard work. See just how far
      you've come and stay motivated to continue forming those positive habits.
      Join the habit-forming community and see the difference for yourself!
    </p>
  </section>
</div>

<style lang="scss">
  @mixin padding {
    padding: 40px;
  }

  .landing {
    height: calc(100vh - 70px);
    margin-top: 70px;
    @include padding;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    h1 {
      font-size: 40px;
      line-height: 1.7em;
      b {
        color: $red;
      }
    }
    p {
      font-size: 20px;
      margin-bottom: 30px;
    }
    @media only screen and (max-width: 900px) {
      flex-direction: column;
      height: fit-content;
    }
  }

  .landing-txt {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40%;
    @media only screen and (max-width: 900px) {
      width: 100%;
    }
  }

  .img {
    width: 55%;
    img {
      width: 100%;
    }
    @media only screen and (max-width: 900px) {
      width: 100%;
    }
  }

  .features {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 30px;
    transition: $trans-05;
    section {
      background: $white;
      width: 30%;
      padding: 20px;
      margin: 10px;
      text-align: center;
      border-radius: $card-radius;
      box-shadow: $card-shadow;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
      transition: $trans-05;
      @media only screen and (max-width: 900px) {
        width: 100%;
      }
      img {
        width: 120px;
      }
      h1 {
        font-size: 20px;
        color: $red;
      }
    }
    @media only screen and (max-width: 900px) {
      flex-direction: column;
    }
  }
</style>
