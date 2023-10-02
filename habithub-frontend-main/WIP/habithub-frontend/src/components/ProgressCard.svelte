<script>
    export let habit_title
    export let icon
    export let current_streak
    export let best_streak
    export let progress
</script>

<div class="column">
    <div class="new-container">
        <div class="title">
             <i class='bx {icon}'></i>
            <h2>{habit_title}</h2>
        </div>
    <hr>
    <div class="variable-row">
        <div class="variable-column">
            <h4>Current Streak</h4>
            <p>{current_streak} days</p>
        </div>
        <div class="variable-column">
            <h4>Best Streak</h4>
            <p>{best_streak} days</p>
        </div>
        <div class="variable-column">
            <h4>Overall Progress</h4>
            <p>{progress} days achieved</p>
        </div>
    </div>
    </div>
</div>

<style lang="scss">
    @mixin flex {
        display: flex;
        align-items: center;
    }

    .column {
        width: 70%;
        transition: $trans-05;
        @media all and (max-width: 900px)  {
            width: 100%;
        }
    }

    .new-container {
        background: $white;
        border-radius: $card-radius;
        box-shadow: $card-shadow;
        margin-bottom: 20px;
        padding: 16px;
    }

    .title {
        @include flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        column-gap: 16px;
        i {
            font-size: 29px;
            color: $red;
        }
    }

    h4 {
        margin: 0;
    }

    h2 {
        @extend h4;
        font-size: 19px;
    }

    hr {
        margin: 15px 0;
    }

    .variable-row {
        @include flex;
        flex-flow: row wrap;
        justify-content: space-between;
        padding: 0 15px;
        gap: 30px;
    }
</style>