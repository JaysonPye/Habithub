<script>
  import Button from "../../components/Button.svelte";
  import { validateToken } from './../../utils'
  import { onMount } from 'svelte'
  import ProgressCard from "../../components/ProgressCard.svelte";

  onMount(async () => {
      const validToken = await validateToken()
      if (!validToken) {
          window.location.href = '/login'
      }
  })
</script>

<div class="body">
  <div>
    <h1>Overall Progress</h1>
  </div>
  <div class="statistics-button">
    <Button class="range-selector">
      <i class='bx bx-calendar'></i>
      Data Range Selector
    </Button>
  </div>
  <div class="progress-cards">
    <ProgressCard habit_title="Workout" icon="bx-dumbbell" current_streak="30" best_streak="30" progress="30/60"/>
    <ProgressCard habit_title="Sleep Early" icon="bx-bed" current_streak="1" best_streak="1" progress="1/60"/>
    <ProgressCard habit_title="Wake-up Early" icon="bx-sun" current_streak="1" best_streak="1" progress="1/60"/>
    <ProgressCard habit_title="Drink Water" icon="bx-droplet" current_streak="20" best_streak="45" progress="50/60"/>
  </div>
</div>

<style lang="scss">
  .statistics-button {
    float: right;
  }

  i {
    font-size: 20px;
    margin-right: 7px;
  }

  .progress-cards {
    margin-top: 30px;
  }
</style>