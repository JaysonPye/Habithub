<script>
    import Button from "../components/Button.svelte"
    import { onMount } from 'svelte'
    import { validateToken } from "../utils"
    import { signout } from "../utils";
    import { redirectToLocation } from "../utils";
    import DashboardHabit from "../components/DashboardHabit.svelte";

    onMount(async () => {
        let validToken = false;
        validToken = await validateToken()
        if (!validToken) {
            signout()
            redirectToLocation('/login')
        }
        const button = document.querySelector("button")

        
    })

    const newHabit = () => {
        redirectToLocation('/edit/new')
    }

</script>

<div class="body">
    <div class="heading">
        <h1>Hello, Name LastName!</h1>
         <Button on:click={newHabit}>
            <div class="innerBtn">
                <i class='bx bx-plus'></i>
                Add Habit
            </div>
        </Button>
    </div>
    <p>You have completed <i class="italics"> <b>4</b> out of 5</i> of today's 
    scheduled habits. Good job! Keep going!</p>
    <div class="habit-lists">
        <div class="list">
            <h2>Upcoming Habits</h2>
            <DashboardHabit />
        </div>
        <div class="list">
            <h2>Completed Habits</h2>
            <DashboardHabit />
        </div>
    </div>
</div>

<style lang="scss">
    h2 {
        font-size: 16px;
    }

    .habit-lists {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        gap: 60px;
        margin-top: 40px;
    }

    .italics {
        text-decoration: underline;
    }

    b {
        color: $red;
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

