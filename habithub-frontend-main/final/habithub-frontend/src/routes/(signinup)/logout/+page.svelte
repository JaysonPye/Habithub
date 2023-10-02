<script>
  import { onMount } from "svelte";
  import { signout } from "../../../utils";
  import { base } from "$app/paths";

  onMount(() => {
    signout();
    window.location.href = "/login";
  });

  const handleLogin = () => {
    window.location.href = "/login";
  };
</script>
