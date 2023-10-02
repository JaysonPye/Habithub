<script>
    import { jwt, loggedIn } from '../stores'
    import { beforeUpdate, onMount } from "svelte";
    import { base } from '$app/paths'
    export let id

    let logInOutText
    let logInOutUrl

    // do not remove this or the code breaks the {#key} has to stay as well -EW
    let loggedInVar
    loggedIn.subscribe((data) => { loggedInVar = data })

    beforeUpdate(() => {
    })

    onMount(() => {
        loggedIn.subscribe((value) => localStorage.setItem('loggedIn', value))

        updateLogout()

    })

    function updateLogout() {
        let logInOutIconClass
        let logInOutIconRemove

        const loginLink = document.getElementById('loginLink')
        const loginText = document.getElementById('loginText')
        const loginIcon = document.getElementById('loginIcon')
        const menuLinks = document.getElementById('menu-links')

        const loggedInC = localStorage.getItem('loggedIn')

        // would've thought login means show logout option but it just works like this
        // i do not understand -EW
        if (loggedInC) {
            logInOutUrl = '/login'
            logInOutText = 'Log In'
            logInOutIconClass = 'bx-log-in'
            logInOutIconRemove = 'bx-log-out'
            menuLinks.classList.add('hidden')
        } else {
            logInOutUrl = '/logout'
            logInOutText = 'Log Out'
            logInOutIconClass = 'bx-log-out'
            logInOutIconRemove = 'bx-log-in'
            menuLinks.classList.remove('hidden')
        }

        loginLink.setAttribute('href', logInOutUrl)
        loginText.innerHTML = logInOutText
        loginIcon.classList.replace(logInOutIconRemove, logInOutIconClass)

    }
</script>

<!-- This component was created with the help of a YouTube tutorial.
https://youtu.be/bFvfqUMjvsA?list=PL4EfZpbcgnsDzLMCKqb1poI8m1Gbd_CXO -->
<nav class="sidebar close" id={id}>
    <header>
        <div class="image-text">
            <span class="image">
                <img src="{base}/images/logo_app.png" alt="Logo">
            </span>
            <div class="text header-text">
                <span class="name">Habit Hub</span>
            </div>
        </div>
        <i class='bx bx-chevron-right toggle'></i>
    </header>
    <div class="menu-bar">
        { #key loggedInVar }
        <div class="menu">
            <ul class="menu-links" id="menu-links">
                <li class="nav-link">
                    <a href="/">
                        <i class='bx bx-home-alt icon'></i>
                        <span class="text nav-text">Dashboard</span>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="/habits">
                        <i class='bx bx-list-check icon'></i>
                        <span class="text nav-text">Habits</span>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="/statistics">
                        <i class='bx bx-line-chart icon'></i>
                        <span class="text nav-text">Statistics</span>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="/settings">
                        <i class='bx bx-cog icon'></i>
                        <span class="text nav-text">Settings</span>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="/guide">
                        <i class='bx bx-help-circle icon'></i>
                        <span class="text nav-text">Help/Guide</span>
                    </a>
                </li>
            
            </ul>
        </div>
        { /key }
        { #key loggedInVar }
        <div class="bottom-content">
            <ul class="menu-links">
                <li class="">
                    <a id="loginLink" href="/logout">
                        <i id="loginIcon" class='bx bx-log-out icon'></i>
                        <span id="loginText" class="text nav-text">Log Out</span>
                    </a>
                </li>
            </ul>
        </div>
        { /key }
    </div>
</nav>

<style lang="scss">
    @mixin flex-column {
        display: flex;
        flex-direction: column;
    }

    @mixin flex-center {
        display: flex;
        align-items: center;
    }

    .sidebar {
        position: fixed;
        top: 10px;
        left: 10px;
        height: 100%;
        width: 250px;
        background: $black;
        padding: 10px 14px;
        z-index: 100;
        color: $light-grey;
        border-radius: $card-radius;
        transition: $trans-05;
        &.close {
            width: 88px;
            .text {
                opacity: 0;
            }
            .toggle {
                transform: translateY(-50%);
            }
        }
    }

    header {
        position: relative;
    }

    img {
        width: 40px;
        border-radius: $card-radius;
    }

    .image-text {
        @include flex-center;
    }

    .text {
        font-size: 16px;
        font-weight: 400;
        transition: $trans-04;
        white-space: nowrap;
        opacity: 1;
    }

    .image {
        min-width: 60px;
        @include flex-center;
    }

    .header-text {
        @include flex-column;
    }


    .toggle {
        position: absolute;
        top: 50%;
        right: -25px;
        transform: translateY(-50%) rotate(180deg);
        height: 25px;
        width: 25px;
        background: $red;
        @include flex-center;
        justify-content: center;
        border-radius: 50%;
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
        transition: $trans-03;
    }

    li {
        height: 50px;
        margin-top: 10px;
        list-style: none;
        @include flex-center;
    }

    .icon {
        font-size: 23px;
        color: $red;
        min-width: 60px;
        @include flex-center;
        justify-content: center;
    }

    a {
        font-size: 16px;
        width: 100%;
        color: $light-grey;
        text-decoration: none;
        height: 100%;
        @include flex-center;
        border-radius: $card-radius;
        transition: $trans-04;
        &:hover {
            background: $light-grey;
            color: $black;
        }
    }

    .menu-bar {
        height: calc(100% - 50px);
        @include flex-column;
        justify-content: space-between;
    }
</style>