<script>
  import Button from "../../../components/Button.svelte";
  import Loader from "../../../components/Loader.svelte";
  import { onMount } from "svelte";
  import {
    validateToken,
    signout,
    redirectToLocation,
    loadUserData,
  } from "../../../utils";
  import DashboardHabit from "../../../components/DashboardHabit.svelte";
  import { loggedIn } from "../../../stores";

  let jwt;
  let userID;
  let completedHabits = [{}];
  let uncompletedHabits = [{}];
  let userFirstName;
  let completedHabitCount;
  let totalHabitCount;
  let noHabits = true;

  onMount(async () => {
    let validToken = false;
    validToken = await validateToken();
    if (!validToken) {
      signout();
      redirectToLocation("/login");
    }

    jwt = localStorage.getItem("jwt");
    userID = localStorage.getItem("userID");

    const userData = await loadUserData(userID, jwt);
    userFirstName = userData.firstName;

    fetchHabits(userID, jwt);
  });

  const newHabit = () => {
    // redirectToLocation('/habits?new=true')
    redirectToLocation("/habits?new=true");
  };

  // fetch habits should become a utils function (matching /habits)
  async function fetchHabits(userID, jwt) {
    let response = await fetch(
      `https://habithub-api.herokuapp.com/habit/user/${userID}?category=completed`,
      {
        method: "GET",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
          Authorization: "BEARER " + jwt,
        },
      }
    );

    if (!response.ok) {
      // set a problem message
      return;
    }

    let data = await response.json();
    completedHabits = data.completed;
    uncompletedHabits = data.uncompleted;
    completedHabitCount = completedHabits.length;
    totalHabitCount = completedHabits.length + uncompletedHabits.length;
    if (totalHabitCount > 0) noHabits = false;

    document.getElementById("content").style.visibility = "visible";
    document.querySelector(".heading").style.visibility = "visible";
    document.querySelector(".container").style.visibility = "visible";
    document.getElementById("spinner").style.display = "none";
  }

  var streak;

  async function habitCompleteEvent(e) {
    if (e.detail.completed) {
      uncompletedHabits.forEach((habit) => {
        if (habit._id == e.detail.h_id) {
          const index = uncompletedHabits.indexOf(habit);
          habit.streak += 1;
          completedHabits.push(habit);
          completedHabits = completedHabits;
          uncompletedHabits.splice(index, 1);
          uncompletedHabits = uncompletedHabits;
        }
      });
    } else {
      completedHabits.forEach((habit) => {
        if (habit._id == e.detail.h_id) {
          const index = completedHabits.indexOf(habit);
          habit.streak -= 1;
          uncompletedHabits.push(habit);
          uncompletedHabits = uncompletedHabits;
          completedHabits.splice(index, 1);
          completedHabits = completedHabits;
        }
      });
    }

    completedHabitCount = completedHabits.length;
    totalHabitCount = completedHabits.length + uncompletedHabits.length;

    // Can be plus/minus because this event can only fire on
    // completing / uncompleting a habit
    streak = e.detail.completed ? 1 : -1;
    // send PUT /habit/habit/:id request to API to update streak
    let response = await fetch(
      `https://habithub-api.herokuapp.com/habit/habit/${e.detail.h_id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
          Authorization: "BEARER " + jwt,
        },
        body: JSON.stringify({
          streak: streak,
        }),
      }
    );

    // do something if response good
    // do something if response bad
  }
</script>

<div class="body">
  <Loader id="spinner" />
  <div class="heading">
    <h1>Hello, {userFirstName}!</h1>
    <div class="btn">
      <Button on:click={newHabit}>
        <i class="bx bx-plus" />
        Add Habit
      </Button>
    </div>
  </div>
  <div class="container">
    <div class="content" id="content">
      {#key noHabits}
        {#if noHabits}
          <p>
            You haven't added any habits yet. When you do, they will appear
            here. Click the 'Add Habit' button to get started.
          </p>
        {:else}
          <p>
            You have completed <i class="italics">
              <b>{completedHabitCount}</b> out of {totalHabitCount}</i
            > of today's scheduled habits. Good job! Keep going!
          </p>
          <div class="habit-lists">
            <div class="list">
              <h2>Upcoming Habits</h2>
              <div class="list-items">
                {#key uncompletedHabits}
                  {#each uncompletedHabits as h}
                    <DashboardHabit
                      h_id={h._id}
                      title={h.title}
                      icon={h.icon}
                      streak={h.streak}
                      completed="false"
                      on:habitCompleteEvent={habitCompleteEvent}
                    />
                  {/each}
                {/key}
              </div>
            </div>
            <div class="list">
              <h2>Completed Habits</h2>
              <div class="list-items">
                {#key completedHabits}
                  {#each completedHabits as h}
                    <DashboardHabit
                      h_id={h._id}
                      title={h.title}
                      icon={h.icon}
                      streak={h.streak}
                      completed="true"
                      on:habitCompleteEvent={habitCompleteEvent}
                    />
                  {/each}
                {/key}
              </div>
            </div>
          </div>
        {/if}
      {/key}
    </div>
    <div class="man">
      <object
        title="Man waving hand"
        type="image/svg+xml"
        data="./images/waving.svg"
      >
        <img src="./images/waving.svg" alt="Man waving his hand" />
      </object>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    column-gap: 5px;
    transition: $trans-05;
    visibility: hidden;
    @media all and (max-width: 900px) {
      flex-flow: column nowrap;
      align-items: center;
    }
  }

  .man {
    width: calc(20% + 60px);
    transition: $trans-05;
    @media all and (max-width: 900px) {
      width: calc(25% + 60px);
    }
    @media all and (max-width: 600px) {
      width: calc(40% + 60px);
    }
    @media all and (max-width: 400px) {
      width: calc(100% + 60px);
    }
  }

  .content {
    width: 75%;
    transition: $trans-05;
    @media all and (max-width: 900px) {
      width: 100%;
    }
    visibility: hidden;
  }

  .list-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  h2 {
    font-size: 16px;
  }

  .list {
    width: 46%;
    margin: 10px 0;
    @media all and (max-width: 1000px) {
      width: 100%;
    }
  }

  .habit-lists {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
    width: 100%;
    transition: $trans-05;
    @media all and (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
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
    column-gap: 20px;
    visibility: hidden;
  }

  .btn {
    margin: 10px 0 20px 0;
  }
</style>
