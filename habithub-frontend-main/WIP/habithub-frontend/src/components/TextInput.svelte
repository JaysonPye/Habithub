<script>
    export let id
    export let value
    export let name
    export let placeholder
    export let classs
    export let label
</script>

<div class="parent {classs}">
    <label for={name}>{label}</label>
    <input type="text" id={id} value={value} name={name} placeholder={placeholder} class="input">
</div>

<style lang="scss">
.input {
    font-family: "Questrial", sans-serif;
    font-size: 16px;
    padding: 15px 20px;
    box-shadow: none;
    border:none;
    border-radius: $card-radius;
    width: 100%;
    max-width: 500px;
    min-width: 11.5em;
    &:hover, &:focus, &:focus-visible {
        border-color: $light-grey;
        box-shadow: inset rgba(0, 0, 0, 0.14) 0px 0px 8px;
    }
}

label {
    display: block;
    margin-bottom: 5px;
}

.parent {
    margin-bottom: 20px;
    margin-top: 0.5em;
}
</style>