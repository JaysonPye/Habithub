<script>
    export let id;
</script>

<button on:click id={id}>
    <slot></slot>
</button>



<style lang="scss">
    button {
        border: none;
        background-image: radial-gradient($red, $yellow);
        padding: 10px 35px;
        border-radius: $card-radius;
        color: $white;
        box-shadow: $button-shadow;
        font-size: 14px;
        transition: $trans-03;
        &:hover {
            font-size: 16px;
        }
        &:focus {
             background: $red;
        color: $white;
        border: none;
        }
    }

    slot {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
    }
</style>