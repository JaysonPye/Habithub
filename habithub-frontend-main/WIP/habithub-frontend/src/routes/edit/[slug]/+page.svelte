<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    import EditHabit from '../../../components/EditHabit.svelte'
    import { validateToken } from '../../../utils.js'
    import { onMount } from 'svelte'

    onMount(async () => {
        const validToken = await validateToken()
        if (!validToken) {
            window.location.href = '/login'
        }
    })
</script>

<div class="body">
    { #if data.type ==  'new' }
    <h1>Add a habit</h1>
    <EditHabit type="new" h_title="" h_description="" h_id="" submitText="+ Add Habit"/>
    { :else }
    <h1>Edit habit</h1>
    <EditHabit type="edit" h_title={data.h_title} h_description={data.h_description} h_id={data.h_id} submitText="Update Habit"/>
    { /if }
    
</div>

<style lang="scss"></style>