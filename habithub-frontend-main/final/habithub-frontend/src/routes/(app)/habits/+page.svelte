<script>
  import EditHabit from "../../../components/EditHabit.svelte";
  import HabitCard from "../../../components/HabitCard.svelte";
  import PopUp /*{ togglePopup }*/ from "../../../components/PopUp.svelte";
  import Loader from "../../../components/Loader.svelte";
  import Toast from "../../../components/Toast.svelte";
  import { validateToken, signout, redirectToLocation } from "./../../../utils";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let jwt;
  let userID;
  let habits = [{}];
  let showNewPopup = false;
  let toast;
  let toastObj = {
    message: "",
    description: ""
  }
  let toastError = false;
  let noHabits = true;
  let editing = false;
  let editingID = "";

  if ($page.url.searchParams.get("new") == "true") showNewPopup = true;
  if ($page.url.searchParams.get("id")) {
    editing = true;
    editingID = $page.url.searchParams.get("id")
  }

  onMount(async () => {
    const validToken = await validateToken();
    if (!validToken) {
      signout();
      redirectToLocation("/login");
    }

    jwt = localStorage.getItem("jwt");
    userID = localStorage.getItem("userID");

    fetchHabits(userID, jwt, true);
  });

  // fetch habits should become a utils function (matching dashboard / )
  async function fetchHabits(userID, jwt, isPageLoad) {
    let response = await fetch(
      `https://habithub-api.herokuapp.com/habit/user/${userID}`,
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
      toastError = true;
      toastObj.message = "Problem getting habits."
      toast.showToastNow(4000)
      return;
    }

    let data = await response.json();
    habits = data;
    if (habits.length > 0) noHabits = false;
    
    editingHabit(habits, isPageLoad)

    document.getElementById("card-container").style.visibility = "visible";
    document.querySelector(".man").style.visibility = "visible";
    document.getElementById("spinner").style.display = "none";
  }

  async function closePopup() {
    await fetchHabits(userID, jwt, false)
    toastError = false;
    toastObj.message = "Habit created successfully"
    toast.showToastNow(4000)
    showNewPopup = false;
    // usage of history.replaceState based on question and answer by user u/Silly-Freak:
    // https://www.reddit.com/r/sveltejs/comments/t2oeqg/best_way_to_change_url_in_sveltekit_in_a/
    // and Mozilla documentation:
    // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
    history.replaceState(null, '', '/habits')
  }

  async function habitSubmitEvent(e) {
    await fetchHabits(userID, jwt, false)
    if (e.detail.type == "update") {
      toastError = false;
      toastObj.message = "Habit updated"
      toast.showToastNow(4000)
    } else if (e.detail.type == "delete") {
      toastError = false;
      toastObj.message = "Habit deleted"
      toast.showToastNow(4000)
      await fetchHabits(userID, jwt)
    }
  }

  async function editingHabit(habits, isPageLoad) {
    if (isPageLoad) {
      habits.forEach(habit => {
        if (habit._id == editingID) habit.editing = true;
        else habit.editing = false;
      })
    } else {
      habits.forEach(habit => {
        habit.editing = false;
      })
    }
    

    history.replaceState(null, '', '/habits')
  }

  async function editPopupClosed() {
    await fetchHabits(userID, jwt, false)
    toastError = false;
    toastObj.message = "Changes have not been saved.";
    toast.showToastNow(4000)
  }
</script>

<div class="body">
  <Toast 
    bind:this={toast} 
    bind:message={toastObj.message} 
    bind:description={toastObj.description} 
    bind:error={toastError}
  />
  <div class="heading">
    <h1>My Habits</h1>
    <PopUp icon="bx-plus" button_name="Add Habit" bind:showPopup={showNewPopup}>
      <EditHabit
        {jwt}
        {userID}
        type="new"
        submitText="Add Habit"
        h_id=""
        h_description=""
        h_title=""
        category=""
        goal=""
        on:submitEvent={closePopup}
      />
    </PopUp>
  </div>
  <Loader id="spinner" />
  <div class="container">
    <div class="content">
      <div class="card-container" id="card-container">
      {#key noHabits}
        {#if noHabits}
          <p>You haven't added any habits yet. When you do, they will appear here. Click the 'Add Habit' button to get started.</p>
        {:else}
          {#key habits}
            {#each habits as habit}
              <HabitCard
                classs="flex"
                name={habit.title}
                description={habit.description}
                streak={habit.streak}
                h_id={habit._id}
                {jwt}
                {userID}
                icon={habit.icon}
                category={habit.category}
                goal={habit.totalGoal}
                on:submitEvent={habitSubmitEvent}
                on:popupclosed={editPopupClosed}
                editing={habit.editing}
              />
            {/each}
            <HabitCard
              classs="dud-card flex"
              name="" description="" streak="" jwt=""
              userID="" icon="" category="" goal=""
            />
          {/key}
        {/if}
      {/key}
      </div>
    </div>
    <div class="man">
      <object
        title="Man running"
        type="image/svg+xml"
        data="./images/running.svg"
      >
        <img src="./images/running.svg" alt="Man running" />
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
    @media all and (max-width: 900px) {
      flex-flow: column nowrap;
      align-items: center;
      margin-top: 20px;
    }
  }

  .man {
    width: calc(20% + 60px);
    transition: $trans-05;
    visibility: hidden;
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

  .card-container {
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    column-gap: 20px;
    row-gap: 10px;
    visibility: hidden;
  }

  .heading {
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }
</style>
