<script>
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { onMount } from "svelte";

  onMount(() => {
    AOS.init({});
  });
</script>

<div class="contact-us" aos>
  <div
    class="content"
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <h1>Contact Us</h1>
    <p>
      This website has been created as part of an assignment in an approved
      course of study for Curtin University and contains copyright material not
      created by the author. All copyright material used remains copyright of
      the respective owners and has been used here pursuant to Section 40 of the
      Copyright Act 1968 (Commonwealth of Australia). No part of this work may
      be reproduced without consent of the original copyright owners. See code
      comments for references.
    </p>
    <p>
      The contact information listed on this page belongs to Curtin University
      in Australia. Additionally, the email addresses of several contributors to
      this website have been made available for your convenience. Should you
      require additional information, please don’t hesitate to get in touch with
      us.<br /> We appreciate your use of our services.
    </p>
    <h2>Curtin Contact Details</h2>
    <div class="info">
      <i class="bx bx-map" />
      <p>Curtin University, Kent Street, WA, Bently, Australia</p>
    </div>
    <div class="info">
      <i class="bx bx-phone" />
      <p><a href="tel:61892669266">+6 189 266 9266</a></p>
    </div>
    <div class="info">
      <i class="bx bx-envelope" />
      <p>
        <a href="mailto: info@curtincollege.edu.au">
          info@curtincollege.edu.au</a
        >
      </p>
    </div>
    <h2>Authors' Details</h2>
    <div class="info">
      <i class="bx bx-envelope" />
      <p>
        <a href="mailto: 20443119@student.curtin.edu.au">
          20443119@student.curtin.edu.au</a
        > (Ayesha Babar)
      </p>
    </div>
    <div class="info">
      <i class="bx bx-envelope" />
      <p>
        <a href="mailto: 20418395@student.curtin.edu.au">
          20418395@student.curtin.edu.au</a
        > (Ella Watts)
      </p>
    </div>
  </div>
  <div
    class="man"
    data-aos="fade-left"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <object title="Man calling" type="image/svg+xml" data="./images/phone.svg">
      <img src="./images/phone.svg" alt="Man calling" />
    </object>
  </div>
</div>

<style lang="scss">
  h2 {
    font-size: 17px;
  }

  .contact-us {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 20px;
    .content {
      margin: 80px 20px 20px 20px;
      padding: 20px;
      width: 60%;
    }
    .man {
      width: 28%;
    }
    @media only screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      .man {
        width: 70%;
      }
      .content {
        width: 100%;
      }
    }
  }

  a {
    color: $red;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .info {
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 7px;
    &:last-of-type {
      margin-bottom: 20px;
    }
    p {
      margin: 0;
    }
  }
</style>
