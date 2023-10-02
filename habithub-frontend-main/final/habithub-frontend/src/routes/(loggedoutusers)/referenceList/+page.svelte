<script>
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { onMount } from "svelte";

  onMount(() => {
    AOS.init({});
  });
</script>

<div class="reference" aos>
  <div
    class="content"
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <h1>Reference List</h1>
    <div class="section">
      <h2>Svg and Images</h2>
      <p>
        The visual elements featured on this website, including all SVGs and
        images, were sourced from Adobe Stock Images. Our authors have made
        modifications to the images and SVGs to align them with the overall
        theme of the website.
      </p>
      <ul>
        <li>
          Adobe Stock. n.d. “Find the perfect stock asset for your next creative
          project.” Adobe.
          <a href="https://stock.adobe.com/au/">https://stock.adobe.com/au/</a>.
        </li>
      </ul>
    </div>
    <div class="section">
      <h2>Website Components</h2>
      <p>
        The incorporation of certain components, such as the footer, throughout
        the website was achieved through the utilisation of YouTube tutorials.
        These tutorials have been properly referenced within the code comments
        for ease of review and transparency. Kindly refer to the code comments
        for further information.
      </p>
    </div>
    <div class="section">
      <h2>Animations</h2>
      <p>
        The animated depictions of the young man utilised throughout the website
        were created utilising the tool known as SVGator.
      </p>
      <ul>
        <li>
          SVGator. n.d. “The Easiest Way to Animate SVG.” SVGator.
          <a href="https://www.svgator.com/">https://www.svgator.com/</a>.
        </li>
      </ul>
    </div>
    <div class="section">
      <h2>JavaScript</h2>
      <p>
        Several websites have been used to solve JavaScript problems and bugs.
      </p>
      <ul>
        <li>
          Ahmed, I. 2021. “Using Fetch API to create a Login form.” Stack
          Overflow.
          <a
            href="https://stackoverflow.com/questions/68389117/using-fetch-api-to-create-a-login-form"
          >
            https://stackoverflow.com/questions/68389117/using-fetch-api-to-create-a-login-form
          </a>
        </li>
        <li>
          Kantor, I. 2021. “FormData.” JavaScript.Info.
          <a href="https://javascript.info/formdata">
            https://javascript.info/formdata
          </a>
        </li>
        <li>
          Mozilla. n.d. “History.replaceState().” Mozilla.
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState"
          >
            https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
          </a>
        </li>
        <li>
          Mozilla. n.d. “Using the Fetch API.” Mozilla.
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
          >
            https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
          </a>
        </li>
        <li>
          u/SillyFreak. 2022. “Best way to change URL (in SvelteKit) in a
          multi-step process without resetting the page.” Reddit.
          <a
            href="https://www.reddit.com/r/sveltejs/comments/t2oeqg/best_way_to_change_url_in_sveltekit_in_a/"
          >
            https://www.reddit.com/r/sveltejs/comments/t2oeqg/best_way_to_change_url_in_sveltekit_in_a/
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div
    class="man"
    data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <object title="Man typing" type="image/svg+xml" data="./images/typing.svg">
      <img src="./images/typing.svg" alt="Man typing" />
    </object>
  </div>
</div>

<style lang="scss">
  a {
    color: $red;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h2 {
    font-size: 17px;
    margin-bottom: 5px;
  }

  .reference {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    .content {
      margin: 80px 20px 20px 20px;
      padding: 20px;
      width: 60%;
    }
    .man {
      width: 28%;
    }
    @media only screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      .man {
        width: 70%;
      }
      .content {
        width: 100%;
      }
    }
  }

  .section {
    margin-bottom: 20px;
    ul {
      margin: -10px 0 0 30px;
      li {
        padding-top: 10px;
        &:first-of-type {
          padding-top: 0;
        }
      }
    }
  }
</style>
