<script>
  export let habit_title;
  export let icon;
  export let reminder;
  export let frequency;
  export let time;
</script>

<div class="container notification">
  <div class="title">
    <i class="bx {icon}" />
    <h2>{habit_title}</h2>
  </div>
  <hr />
  <div class="wrapper">
    <h3>Reminders</h3>
    <p>{reminder}</p>
  </div>
  <div class="wrapper">
    <h3>Reminder Frequency</h3>
    <p>{frequency}</p>
  </div>
  <div class="wrapper">
    <h3>Reminder Time</h3>
    <p>{time}</p>
  </div>
</div>

<style lang="scss">
  .container {
    width: 300px;
    height: auto;
    background: $white;
    border-radius: $card-radius;
    box-shadow: $card-shadow;
    padding: 16px;
    margin-top: 30px;
    h2 {
      font-size: 17px;
    }
    h3 {
      font-size: 15px;
    }
    @media all and (max-width: 900px) {
      width: 100%;
    }
  }

  :global(body.darkmode) .container {
    background: $black;
    box-shadow: none;
    border: 0.1px $dark-grey solid;
  }

  .notification {
    width: auto;
    margin-top: 15px;
    .wrapper {
      position: relative;
    }
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

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row wrap;
    gap: 15px;
    margin: 20px 5px;
  }

  p,
  h3,
  h2 {
    margin: 0;
  }

  hr {
    margin-top: 16px;
  }
</style>
