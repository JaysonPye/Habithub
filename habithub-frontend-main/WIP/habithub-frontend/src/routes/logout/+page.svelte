<script>
    import { onMount } from "svelte";
    import { signout } from "../../utils";

    onMount(() => {
        signout()
        window.location.href = '/login'
    })
</script>

<div></div>

<style lang="scss"></style>