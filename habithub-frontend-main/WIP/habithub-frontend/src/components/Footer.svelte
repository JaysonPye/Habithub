<!-- This component was created with the help of a YouTube tutorial.
https://youtu.be/B4KZYsyuVOE -->
<div class="footer">
    <footer>
        <div class="container">
            <div class="sec statement">
                <h1>Copyright Statement</h1>
                    <p>This website has been created as part of an assignment in 
                    an approved course of study for Curtin University and 
                    contains copyright material not created by the author. 
                    All copyright material used remains copyright of the 
                    respective owners and has been used here pursuant to Section
                    40 of the Copyright Act 1968 (Commonwealth of Australia). 
                    No part of this work may be reproduced without consent of 
                    the original copyright owners. See code comments for 
                    references.</p>
                    <ul class="sci">
                        <li>
                            <a href="https://www.facebook.com/curtinuniversity">
                                <i class='bx bxl-facebook'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/CurtinUni">
                                <i class='bx bxl-twitter'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/curtinuniversity/">
                                <i class='bx bxl-instagram'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@curtinuniversity">
                                <i class='bx bxl-youtube'></i>
                            </a>
                        </li>
                    </ul>
            </div>
            <div class="sec quicklinks">
                <h1>Quick Links</h1>
                <ul>
                    <li><a href="https://www.topuniversities.com/universities/curtin-university#:~:text=We%20are%20Western%20Australia%27s%20top,the%20Good%20Universities%20Guide%202021.&text=As%20a%20university%20with%20an,people%20all%20over%20the%20world.">About</a></li>
                    <li><a href="/guide">Help</a></li>
                    <li><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi6mJTP1rr8AhV03TgGHVfuCNUQFnoECAgQAw&url=https%3A%2F%2Finformationmanagement.curtin.edu.au%2Flocal%2Fdocs%2FPrivacyStatement.pdf&usg=AOvVaw32ACqZL8ziEiAoaJO6xCpH">Privacy Policy</a></li>
                    <li><a href="https://www.curtincollege.edu.au/about/contact#:~:text=If%20you%20are%20a%20current,Questions%20before%20sending%20your%20enquiry.">Contact Us</a></li>
                </ul>
            </div>
            <div class="sec contact">
                <h1>Contact Info</h1>
                <ul class="info">
                    <li>
                        <span>
                            <i class='bx bx-map' ></i>
                        </span>
                        <span>Curtin University<br/>
                        Kent Street, WA, Bently<br/>
                        Australia</span>
                    </li>
                    <li>
                        <span>
                            <i class='bx bx-phone' ></i>
                        </span>
                        <p><a href="tel:61892669266">+6 189 266 9266</a></p>
                    </li>
                    <li>
                        <span>
                            <i class='bx bx-envelope' ></i>
                        </span>
                        <p><a href="mailto: info@curtincollege.edu.au"> info@curtincollege.edu.au</a></p>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    <div class="copyright">
        <p>Copyright © 2023 The WebDevs. All rights reserved.</p>
    </div>
</div>

<style lang="scss">
   .footer {
    bottom: 0;
    margin-top: 40px;
    footer {
        position: relative;
        width: 100%;
        height: auto;
        padding: 50px 100px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
        @media (max-width: 991px) {
            padding: 40px;
        }
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: row;
        @media (max-width: 991px) {
            flex-direction: column;
        }
    }
   }

   .sec {
    margin-right: 30px;
    @media (max-width: 991px) {
        margin-right: 0;
        margin-bottom: 40px;
    }
   }

   .statement {
    width: 40%;
    @media (max-width: 991px) {
        width: 100%;
    }
   }

   h1 {
    position: relative;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 15px;
    &::before {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 50px;
        height: 2px;
        background: $red;
    }
   }

   li {
    font-size: 12px;
    margin-bottom: 10px;
    list-style: none;
    a {
        color: $black;
        text-decoration: none;
        &:hover {
            color: $red;
        }
    }
   }

   p {
    font-size: 12px;
    margin-bottom: 10px;
   }

   .sci {
    margin-top: 20px;
    display: flex;
    li a {
        display: inline-block;
        width: 40px;
        height: 40px;
        background-color: $light-grey;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        &:hover {
            background: $red;
            i {
                color: $light-grey;
            }
        }
        i {
            color: $black;
            font-size: 25px;
        }
    }
   }

   .quicklinks {
    position: relative;
    width: 25%;
    @media (max-width: 991px) {
        width: 100%;
    }
   }

   .contact {
    width: calc(35% - 60px);
    margin-right: 0 !important;
    @media (max-width: 991px) {
        width: 100%;
    }
   }

   .info {
    position: relative;
    li {
        display: flex;
        margin-bottom: 16px;
    }
    i {
        font-size: 20px;
    margin-right: 10px;
    }
   }

   .copyright {
    width: 100%;
    background: $light-grey;
    padding: 8px 100px;
    text-align: center;
     @media (max-width: 991px) {
        padding: 8px 40px;
     }
   }
</style>