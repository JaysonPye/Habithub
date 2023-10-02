<script>
  import "../app.scss";
  import Navbar from "../components/Navbar.svelte"
  import Footer from "../components/Footer.svelte"
  import Header from "../components/Header.svelte"
  import { onMount } from 'svelte'
  import { validateToken } from '../utils'

  let validToken
 
  onMount(async () => {
    const sidebar = document.querySelector(".sidebar"),
          toggle = document.querySelector(".toggle"),
          userPic = document.querySelector(".user-pic"),
          subMenuWrap = document.querySelector(".sub-menu-wrap")

    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close")
    })

    userPic.addEventListener("click", () => {
      subMenuWrap.classList.toggle("close-menu")
    })

    console.log(userPic,subMenuWrap)

    const header = document.getElementById('header')
    const navbar = document.getElementById('navbar')

    validToken = await validateToken();

    header.classList.add("hidden")

    if (validToken) {
      header.classList.remove("hidden")
    }
  })
  
</script>

<Header id="header"/>
<Navbar id="navbar"/>
<slot />
<Footer />

<style lang="scss"></style>
