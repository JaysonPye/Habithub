<script>
    import EditHabit from '../../components/EditHabit.svelte'
    import HabitCard from '../../components/HabitCard.svelte'
    import Button from '../../components/Button.svelte'
    import { redirectToLocation } from './../../utils'
    import { validateToken } from './../../utils'
    import { onMount } from 'svelte'

    onMount(async () => {
        const validToken = await validateToken()
        if (!validToken) {
            window.location.href = '/login'
        }
    })

    const newHabit = () => {
        redirectToLocation('/edit/new')
    }

</script>


<div class="body">
    <div class="heading">
        <h1>My Habits</h1>
        <Button id="newHabit" on:click={newHabit}>
            <div class="innerBtn">
                <i class='bx bx-plus'></i>
                <!-- <span class="bigger">+</span> -->
                Add Habit
            </div>
        </Button>    
    </div>
    <div class="card-container">
        <HabitCard classs="flex" name="My New Habit" description="This is the habit that I am going to do all the time" streak="2" h_id="some:j94k905630l00dn3"/>
        <HabitCard classs="flex" name="My New Habit" description="This is the habit that I am going to do all the time" streak="2" h_id="some:j94k905630l00dn3"/>
        <HabitCard classs="flex" name="My New Habit" description="This is the habit that I am going to do all the time" streak="2" h_id="some:j94k905630l00dn3"/>
        <HabitCard classs="dud-card" name="" description="" streak="" h_id="" />
    </div>
</div>

<style lang="scss">
    .card-container {
        display: flex;
        flex-wrap: wrap;
        align-content: stretch;
        gap: 1em;
    }

    .heading {
        display: flex;
        width: 100%;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
    }

    .innerBtn {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-right: 0.3em;
    }
</style>