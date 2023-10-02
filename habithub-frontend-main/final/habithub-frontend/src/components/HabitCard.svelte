<script>
  export let name;
  export let description;
  export let h_id;
  export let streak;
  export let classs;
  export let jwt;
  export let userID;
  export let icon;
  export let category;
  export let goal;
  export let editing;

  import PopUp from "./PopUp.svelte";
  import EditHabit from "./EditHabit.svelte";
  import { createEventDispatcher, onMount } from "svelte";
  import Button from "./Button.svelte";
  import SecondaryButton from "./SecondaryButton.svelte";

  let showEditPopup = editing;
  let showDeletePopup = false;

  const dispatch = createEventDispatcher();

  if (icon == undefined || icon == null) {
    icon = "bx-list-check";
  }

  onMount(() => {});

  function closePopup() {
    showEditPopup = false;
    dispatch("submitEvent", {
      type: "update",
      title: name,
    });
    // if (editing) window.location.href = '/dashboard';
  }

  function closeDeletePopup() {
    showDeletePopup = false;
  }

  async function deleteHabit() {
    // NOTE - need to delete the habit and refresh the page
    let response = await fetch(
      `https://habithub-api.herokuapp.com/habit/habit/${h_id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
          Authorization: "BEARER " + jwt,
        },
      }
    );

    if (!response.ok) {
      // NOTE - need to show a failure message
    } else {
      showDeletePopup = false;
      dispatch("submitEvent", {
        type: "delete",
      });
    }
  }

  function editPopupClosed() {
    dispatch("popupclosed");
  }
</script>

<div class="parent {classs}">
  <div class="title">
    <i class="bx {icon}" />
    <h2>{name}</h2>
  </div>
  <p>{description}</p>
  <div class="bottom">
    <div class="start">
      <i class="bx bxs-hot icon" />
      <span class="body-content">{streak} days streak!</span>
    </div>
    <div class="end">
      <PopUp
        icon="bx-edit"
        button_name="Edit"
        bind:showPopup={showEditPopup}
        on:popupClosed={editPopupClosed}
      >
        <EditHabit
          bind:jwt
          bind:userID
          type="edit"
          submitText="Save"
          {h_id}
          bind:h_description={description}
          bind:h_title={name}
          on:submitEvent={closePopup}
          {category}
          {goal}
        />
      </PopUp>
      <PopUp
        icon="bx-trash"
        button_name="Delete"
        bind:showPopup={showDeletePopup}
      >
        <div class="delete-form">
          <p>Are you sure you want to delete "{name}"?</p>
          <div>
            <SecondaryButton on:click={closeDeletePopup}>Cancel</SecondaryButton
            >
            <Button on:click={deleteHabit}>Delete</Button>
          </div>
        </div>
      </PopUp>
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
    min-width: 200px;
  }

  :global(body.darkmode) .parent {
    background-color: $black;
    box-shadow: none;
  }

  p {
    width: 100%;
  }

  h1 {
    font-size: 17px;
  }

  .flex {
    flex-grow: 1;
  }

  .dud-card {
    @extend .flex;
    visibility: hidden;
    @media screen and (max-width: 1210px) {
      flex-basis: 100%;
    }
  }

  .bottom {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 10px;
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

  .end {
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
  }

  .delete-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h2 {
    font-size: 16px;
    margin: 0;
  }

  .title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    column-gap: 16px;
    margin-bottom: 10px;
    i {
      font-size: 25px;
      color: $red;
    }
  }
</style>
