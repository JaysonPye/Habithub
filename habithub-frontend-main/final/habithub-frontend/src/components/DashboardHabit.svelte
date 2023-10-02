<script>
  import { createEventDispatcher } from "svelte";
  let yes = false;

  export let h_id;
  export let completed;
  export let title;
  export let icon;
  export let streak; //= int

  if (completed == true || completed == "true") {
    yes = true;
  }

  if (icon == undefined || icon == null) {
    icon = "bx-list-check";
  }

  const dispatch = createEventDispatcher();

  function handleCheckboxChange() {
    streak = yes ? parseInt(streak) + 1 : parseInt(streak) - 1;
    dispatch("habitCompleteEvent", {
      h_id: h_id,
      completed: yes,
    });
  }

  function editHabit() {
    window.location.href = `/habits?id=${h_id}`;
  }
</script>

<div class="habit-card {yes ? 'complete' : ''}">
  <div class="wrapper" on:click={editHabit} on:keydown={editHabit}>
    <div class="title">
      <i class="bx {icon}" />
      <h2>{title}</h2>
    </div>
    <i class="bx {yes ? 'bx-check-circle' : 'bx-chevron-right'}" />
  </div>
  <hr />
  <div class="wrapper card-info">
    <div class="streak">
      <i class="bx bxs-hot" />
      <p>{streak} day streak</p>
    </div>
    <label>
      <input
        type="checkbox"
        bind:checked={yes}
        on:change={handleCheckboxChange}
      />
      {#if yes}
        Completed
      {:else}
        Incomplete
      {/if}
    </label>
  </div>
</div>

<style lang="scss">
  label {
    cursor: pointer;
  }

  .habit-card {
    width: 100%;
    background: $white;
    border-radius: $card-radius;
    box-shadow: $card-shadow;
    transition: $trans-05;
    &.complete {
      background: rgb(251, 255, 239);
    }
    &:hover {
      .bx-chevron-right {
        transform: translateX(5px);
      }
    }
  }

  :global(body.darkmode) .habit-card {
    background: $black;
    box-shadow: none;
  }

  .bx-chevron-right {
    font-size: 20px;
    transition: $trans-02;
  }

  .bx-check-circle {
    color: rgb(76, 123, 0);
    font-size: 25px;
  }

  h2 {
    font-size: 16px;
    margin: 0;
  }

  .wrapper {
    padding: 15px 25px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    &:hover {
      cursor: pointer;
    }
  }

  .card-info {
    flex-wrap: wrap;
  }

  .title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    column-gap: 16px;
    i {
      font-size: 25px;
      color: $red;
    }
  }

  .streak {
    @extend .title;
    column-gap: 7px;
    i {
      color: $yellow;
      font-size: 20px;
    }
  }

  p {
    margin: 0;
  }
</style>
