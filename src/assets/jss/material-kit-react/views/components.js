import { container } from "assets/jss/material-kit-react.js";
import cloudOne from "assets/img/cloud_one.png";
import cloudTwo from "assets/img/cloud_two.png";
import cloudThree from "assets/img/cloud_three.png";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },

  cloudsOne: {
    backgroundImage: "url(" + cloudOne + ")",
    position:"absolute",
    left:"0",
    top:"0",
    height:"100%",
    width:"300%",
    animation:`$cloud_one 50s linear infinite`
  },

  cloudsTwo: {
    backgroundImage: "url(" + cloudTwo + ")",
    position:"absolute",
    left:"0",
    top:"0",
    height:"100%",
    width:"300%",
    animation:`$cloud_two 50s linear infinite`
  },
  
  cloudsThree: {
    backgroundImage: "url(" + cloudThree + ")",
    position:"absolute",
    left:"0",
    top:"0",
    height:"100%",
    width:"300%",
    animation:`$cloud_three 50s linear infinite`
  }
};

export default componentsStyle;
