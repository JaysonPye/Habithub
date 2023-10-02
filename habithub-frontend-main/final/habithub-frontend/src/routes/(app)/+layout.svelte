<script>
  import "../../app.scss";
  import Navbar from "../../components/Navbar.svelte";
  import Footer from "../../components/Footer.svelte";
  import Header from "../../components/Header.svelte";
  import { onMount } from "svelte";
  import { loadUserData } from "../../utils";

  onMount(async () => {
    if (localStorage.getItem("darkTheme") == "true") {
      document.body.classList.add("darkmode");
    }
    document.getElementById("page-content").style.visibility = "visible";

    const sidebar = document.querySelector(".sidebar"),
      toggle = document.querySelector(".toggle");

    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });
  });
</script>

<div class="page-content" id="page-content">
  <Header id="header" />
  <Navbar id="navbar" />
  <slot />
  <Footer />
</div>

<style lang="scss">
  .page-content {
    visibility: hidden;
  }
</style>
