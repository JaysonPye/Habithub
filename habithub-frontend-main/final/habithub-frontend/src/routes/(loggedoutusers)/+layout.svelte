<script>
  import "../../loggedOut.scss";
  import LoggedOutHeader from "../../components/LoggedOutHeader.svelte";
  import Footer from "../../components/Footer.svelte";
</script>

<LoggedOutHeader />
<slot />
<Footer />
