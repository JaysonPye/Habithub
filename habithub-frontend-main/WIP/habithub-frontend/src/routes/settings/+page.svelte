<script>
  import { validateToken } from './../../utils'
  import { onMount } from 'svelte'
  import Button from '../../components/Button.svelte';
  import NotificationCard from '../../components/NotificationCardInner.svelte';

  onMount(async () => {
      const validToken = await validateToken()
      if (!validToken) {
          window.location.href = '/login'
      }

      const fetchURL = 'https://habithub-backend.herokuapp.com/user/' + localStorage.getItem('userID')
      
      const response = await fetch(fetchURL, {
        method: 'GET',
        headers: {
          'Accept': 'application.json',
          'Content-Type': 'application/json',
          'Authorization': 'BEARER ' + localStorage.getItem('jwt')
        }
      })
      
      const data = await response.json()

      document.getElementById('email').innerHTML = data.email
      document.getElementById('firstName').innerHTML = data.firstName
      document.getElementById('lastName').innerHTML = data.lastName
      if (data.settings != null) document.getElementById('colourScheme').innerHTML = data.settings.colourScheme

      
  })
</script>

<div class="body">
  <h1>Settings</h1>
    <section>
      <!-- This is temporary & will be changed to a component soon. -AB -->
        <div class="container">
          <h2>Profile</h2>
          <hr>
          <div class="wrapper">
            <h3>First Name</h3>
            <p id="firstName">Name</p>
          </div>
          <div class="wrapper">
            <h3>Last Name</h3>
            <p id="lastName">LastName</p>
          </div>
          <div class="wrapper">
            <h3>Email</h3>
            <p id="email">example@mail.com</p>
          </div>
          <div class="wrapper">
            <h3>Profile Picture</h3>
            <div class="user-pic">
              <i class='bx bxs-user profile'></i>
            </div>
          </div>
          <Button>
            <i class='bx bx-edit' ></i>
            Edit Profile
          </Button>
        </div>
        <div class="container">
          <h2>Notification settings</h2>
          <hr>
          <NotificationCard habit_title="Workout" icon="bx-dumbbell" reminder="On" frequency="Daily" time="09:00 AM"/>
          <NotificationCard habit_title="Sleep early" icon="bx-bed" reminder="On" frequency="Daily" time="09:00 PM"/>
        </div>
        <div class="container">
          <h2>Colour Scheme</h2>
          <hr>
          <div class="wrapper">
            <h3>Colour Scheme</h3>
            <p id="colourScheme">Light</p>
          </div>
        </div>
    </section>
</div>

<style lang="scss">
  @mixin flex {
    display: flex;
    align-items: center;
    }

  .user-pic {
    width: 60px;
    height: 60px;
    background-color: $dark-grey;
    border-radius: 100%;
    @include flex;
    justify-content: center;
    i {
      font-size: 35px;
      color: $light-grey;
    }
    }

    .wrapper {
      @include flex;
      justify-content: space-between;
      flex-flow: row wrap;
      gap: 15px;
      margin: 20px 5px;
    }

    p, h3, h2 {
      margin: 0;
    }

    hr {
      margin-top: 16px;
    }

    .container {
      width: 300px;
      height: auto;
      background: $white;
      border-radius: $card-radius;
      box-shadow: $card-shadow;
      padding: 16px;
      margin-top: 30px;
      h2 {
        font-size: 20px;
      }
      h3 {
        font-size: 15px;
      }
      @media all and (max-width:900px) {
        width: 100%;
      }
    }

    section {
      display: flex;
      flex-flow: row wrap;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 30px;
      width: 100%;
      transition: $trans-05;
      @media all and (max-width: 900px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
</style>