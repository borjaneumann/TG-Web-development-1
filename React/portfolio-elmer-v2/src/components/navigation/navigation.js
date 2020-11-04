import Navbar from "reactjs-navbar";
// import About from '../about';
import { Refresh } from "../../Refresh";
import { useState } from "react";

// import logo from "../../logo.svg";

import {
  faPaperPlane,
  faUser,
  faLink

} from "@fortawesome/free-solid-svg-icons";
 
// import "reactjs-navbar/dist/index.css";

import './_navigation.scss'
 

function Navigation() {
    const [count, setCount] = useState(0);
    return (

      

      <Navbar
      //  logo={logo}
       // loader={<Loader type="Puff" color="#D85B5B" height={25} width={25} />}
        // isLoading={this.state.isLoading}
        // helpCallback={() => {
        //   alert("I need help... and coffee...");
        // }}
        menuItems={[
          {
            title: "About me",
            icon: faUser,
            isAuth: true,
            onClick: () => {
              window.location = "#about";   
            },
          },
          {
            title: "Contact",
            icon: faPaperPlane,
            isAuth: true,
            onClick: () => {
              window.location = "#contact";
            },
          },
          {
            title: null,
            icon: faLink,
            isAuth: true,
            onClick: () => {
              window.location = "www.linkedin.com";
              return true;
            },
          }
          ,
          {
            title: null,
            icon: faLink,
            isAuth: true,
            onClick: () => {
              <Refresh />
             
              return true;
            },
          }
        ]}
     />
    );
  }
  
  export default Navigation;

