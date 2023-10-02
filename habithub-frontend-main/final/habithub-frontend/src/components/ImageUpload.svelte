<script>
  export let file = null;

  // NOTE - should be checking for filetype before allowing file upload
  // only really want to allow png/jpeg
  // might also be worth restricting file size
</script>

<div class="input_container">
  <label for="file" class="custom-file-upload">Upload profile picture</label>
  <input type="file" id="file" bind:files={file} accept="image/*" />
  {#key file}
    <p>Selected file: {file ? file[0].name : "none"}</p>
  {/key}
</div>

<style lang="scss">
  .input_container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 0;
    transition: $trans-05;
    p {
      margin: 0;
    }
  }

  input[type="file"] {
    visibility: hidden;
  }

  .custom-file-upload {
    cursor: pointer;
    display: inline-block;
    padding: 8px 12px;
    border: 2px solid $orange;
    border-radius: 4px;
  }
</style>
