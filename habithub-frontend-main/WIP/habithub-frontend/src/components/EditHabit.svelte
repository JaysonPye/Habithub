<script>
    import TextInput from './TextInput.svelte'
    import Button from './Button.svelte'
    // develop based on: https://javascript.info/formdata
    // & https://svelte.dev/repl/74685aa8b4374c4c8f395ce643fee7b6?version=3.48.0
    const handleSubmit = async e => {
        const ACTION_URL = e.target.action

        const formData = new FormData(e.target)
        const data = new FormData(form)
        console.log(data)

        let response = await fetch(ACTION_URL, {
            method: 'POST',
            body: data
        })

        let result = await response.json()

        // DO SOMETHING WITH THE RESPONSE
    }

    export let type
    export let h_title
    export let h_description
    export let h_id
    export let submitText
</script>

<div>
    <form id="form" class="habit-form" action="https://habithub-backend.herokuapp.com/habit" on:submit|preventDefault={handleSubmit}>
        <TextInput classs="" id="" name="title" value="" placeholder="title" label="Title"/>
        <TextInput classs="description" id="" name="description" value="" placeholder="description" label="Description" />
        <div class="btn">
            <Button id="" on:click(handleSubmit)>{submitText}</Button>
        </div>
    </form>
</div>

<style lang="scss">
    .btn {
        margin-top: 1.5em;
    }
</style>