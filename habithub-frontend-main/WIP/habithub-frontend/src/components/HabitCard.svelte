<script>
    export let name
    export let description
    export let h_id
    export let streak
    export let classs

    import Button from './Button.svelte'
    import { redirectToLocation } from './../utils'

    const redirect = (route) => {
        const location = route + h_id
        redirectToLocation(location)
    }

</script>

<div class="parent {classs}">
    <!-- Insert Icon -->
    <span class="body-content">{name}</span>
    <p>{description}</p>
    <div class="bottom">
        <div class="start">
            <i class='bx bxs-hot icon'></i>
            <span class="body-content">{streak} days!</span>
        </div>
        <div class="end">
            <Button on:click={() => {redirect('/edit/')}}>
                <i class='bx bx-edit'></i>
                Edit
            </Button>
            <Button on:click={() => {redirect('/delete/')}}>
                <i class='bx bx-trash'></i>
                Delete
            </Button>
        </div>
    </div>
    
</div>

<style lang="scss">
.parent {
    border-radius: $card-radius;
    margin: 0.5em 0;
    padding: 1em;
    box-shadow: $card-shadow;
    background-color: $white;
    min-width: 25em;
}

p {
    width: 100%;
}

.flex {
    flex-grow: 1;
}

.dud-card {
    @extend .flex;
    visibility: hidden;
}

.bottom {
    display: flex;
    justify-content: space-between;
}

.start {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.3em;
    i {
        font-size: 20px;
        color: $yellow;
    }
}
</style>