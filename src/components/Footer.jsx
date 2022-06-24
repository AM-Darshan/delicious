/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import {AiFillInstagram,AiFillTwitterCircle,AiFillLinkedin,AiFillGithub} from  "react-icons/ai";

const Footer = () => {
  return (
      <SiteFooter>
        <footer>
            <hr />
            <div class="social">
            <a href="#"><AiFillInstagram/></a>
            <a href="#"><AiFillTwitterCircle/></a>
            <a href="#"><AiFillLinkedin/></a>
            <a href="#"><AiFillGithub/></a>
            </div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">AMD © 2022</p>
        </footer>
    </SiteFooter>

  )
}

const SiteFooter = styled.div`
  margin-top:140px;
  padding:40px 0;
  background-color:#ffffff;
  color:#24262b;
  hr{
    margin-bottom:30px;
    height: 2px;
    background: #24262b;
  }
ul {
  padding:0;
  display:flex;
  justify-content:center;
  list-style:none;
  text-align:center;
  font-size:18px;
  line-height:1.6;
  margin-bottom:0;
}
li {
  padding:0 10px;
}
ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}
 ul a:hover {
  opacity:1;
  color: #e91e63;
}
 .social {
  text-align:center;
  padding-bottom:25px;
  
}
 .social > a {
  font-size:24px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:1px solid #ccc;
  margin:0 8px;
  color:inherit;
  opacity:0.75;
  background-color:rbga(255,255,255,0.2);
}

 .social > a:hover {
  opacity:0.9;
  color: #e91e63;
}
 .copyright {
  margin-top:15px;
  text-align:center;
  font-size:13px;
  color: #24262b;
  margin-bottom:0;
}


`
export default Footer