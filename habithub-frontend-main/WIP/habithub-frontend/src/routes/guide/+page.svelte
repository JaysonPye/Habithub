<script>
    import Button from "../../components/Button.svelte";
</script>

<div class="body">
    <h1>Welcome to Habit Hub!</h1>
    <p>This is a quick guide to show you what you can do with Habit Hub!</p>
    <div class="step">
        <h2>Add/delete/edit habits</h2>
        <!-- Placeholder from Adobe Stock Images:
        https://stock.adobe.com/au/search?k=image+placeholder&search_type=usertyped&asset_id=268556012 -->
    <img src="./images/img_placeholder.jpeg" alt="Placeholder">
    </div>
    <div class="step">
        <h2>View daily/weekly/monthly stats</h2>
        <!-- Placeholder from Adobe Stock Images:
        https://stock.adobe.com/au/search?k=image+placeholder&search_type=usertyped&asset_id=268556012 -->
    <img src="./images/img_placeholder.jpeg" alt="Placeholder">
    </div>
    <div class="btn">
        <Button>Okay, got it!</Button>
    </div>
</div>

<style lang="scss">
    h2 {
        font-size: 17px;
    }    

    .step {
        margin-bottom: 50px;
        img {
        width: 600px;
        height: 400px;
        border-radius: $card-radius;
        }
    }

    .btn {
        margin-bottom: 20px;
    }
</style>