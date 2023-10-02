<script>
    import { onMount } from 'svelte'
    import Button from "../../components/Button.svelte"
  import TextInput from '../../components/TextInput.svelte';
    import { jwt, loggedIn, userFirstName } from './../../stores'

    onMount(() => {
        const btn = document.getElementById('login_button')
        btn.addEventListener('click', loginClick)
        function loginClick() {
            try {
                loginUser()
            } catch(err) {
                console.log(err)
            }
        }

        // method for sending login form data
        // based on answer here: https://stackoverflow.com/questions/68389117/using-fetch-api-to-create-a-login-form

        // TODO: update url, change body content to email/password, stop form default behaviour
        async function loginUser() {
            const response = await fetch('https://habithub-backend.herokuapp.com/auth/signin', { //API base url should be stored somewhere for the whole site
                method: 'POST',
                headers: {
                    'Accept': 'application.json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: 'ella@watts.com.au',
                    password: 'ella1234'
                })
            })

            const data = await response.json()

            if (!response.ok) {
                localStorage.clear()
                const message = 'A problem occured while logging in: ' + response.status + ' ' + response.statusText
                throw new Error(message)
            }

            // add JWT to session if good
            // ideally this should be put somewhere other than localStorage: https://auth0.com/docs/secure/security-guidance/data-security/token-storage#don-t-store-tokens-in-local-storage
            localStorage.setItem('jwt', data.accessToken)
            localStorage.setItem('loggedIn', true)
            localStorage.setItem('userID', data.user._id)

            // $jwt = data.accessToken
            // $loggedIn = true
            // $userFirstName = data.user.firstName
            loggedIn.set(true)
            jwt.set(data.accessToken)
            userFirstName.set(data.user.firstName)
            let loggedInVar
            loggedIn.subscribe((data) => loggedInVar = data)

            //NOTE - remove
            console.log("logged in successfully")
            window.location.href = '/'


            // put message somewhere if response bad
        }
    })
</script>

<div class="body">
    <img src="./images/logo_web.png" alt="">
    <h1>Welcome back!</h1>
    <p>It's so good to see you again!</p>
    <Button id="login_button">Test a login</Button>
</div>

<style lang="scss">
    img {
        width: 300px;
        height: auto;
    }

    .body {
        padding: 0 40px;
        margin-top: 0;
        text-align: center;
    }

    h1 {
        font-size: 20px;
    }
</style>