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
    // -webkit-animation:cloud_one 50s linear infinite;
    // -moz-animation:cloud_one 50s linear infinite;
    // -o-animation:cloud_one 50s linear infinite;
    // -webkit-transform:translate3d(0,0,0);
    // -moz-transform:translate3d(0,0,0);
    // -o-transform:translate3d(0,0,0)
  },
  // '@keyframes cloud_one': {
  //   from: {left: "0"},
  //   to: {left: "-200%"}
  // },

  cloudsTwo: {
    backgroundImage: "url(" + cloudTwo + ")",
    position:"absolute",
    left:"0",
    top:"0",
    height:"100%",
    width:"300%",
    animation:`$cloud_two 50s linear infinite`
    // -webkit-animation:cloud_one 50s linear infinite;
    // -moz-animation:cloud_one 50s linear infinite;
    // -o-animation:cloud_one 50s linear infinite;
    // -webkit-transform:translate3d(0,0,0);
    // -moz-transform:translate3d(0,0,0);
    // -o-transform:translate3d(0,0,0)
  },
  // '@keyframes cloud_two': {
  //   from: {left: "0"},
  //   to: {left: "-200%"}
  // },
  cloudsThree: {
    backgroundImage: "url(" + cloudThree + ")",
    position:"absolute",
    left:"0",
    top:"0",
    height:"100%",
    width:"300%",
    animation:`$cloud_three 50s linear infinite`
    // -moz-animation:cloud_one 50s linear infinite;
    // -o-animation:cloud_one 50s linear infinite;
    // -webkit-transform:translate3d(0,0,0);
    // -moz-transform:translate3d(0,0,0);
    // -o-transform:translate3d(0,0,0)
  },
  // '@keyframes cloud_three': {
  //   from: {left: "0"},
  //   to: {left: "-200%"}
  // },
  
  // .clouds_two {
  //   background:url("../images/cloud_two.png");
  //   position:absolute;
  //   left:0;
  //   top:0;
  //   height:100%;
  //   width:300%;
  //   -webkit-animation:cloud_two 75s linear infinite;
  //   -moz-animation:cloud_two 75s linear infinite;
  //   -o-animation:cloud_two 75s linear infinite;
  //   -webkit-transform:translate3d(0,0,0);
  //   -moz-transform:translate3d(0,0,0);
  //   -o-transform:translate3d(0,0,0)
  // }
  
  // .clouds_three {
  //   background:url("../images/cloud_three.png");
  //   position:absolute;
  //   left:0;
  //   top:0;
  //   height:100%;
  //   width:300%;
  //   -webkit-animation:cloud_three 100s linear infinite;
  //   -moz-animation:cloud_three 100s linear infinite;
  //   -o-animation:cloud_three 100s linear infinite;
  //   -webkit-transform:translate3d(0,0,0);
  //   -moz-transform:translate3d(0,0,0);
  //   -o-transform:translate3d(0,0,0)
  // }
};

export default componentsStyle;
