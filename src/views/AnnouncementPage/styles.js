import { container, title } from "assets/jss/material-kit-react.js";

const basicsStyle = {
  sections: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  sectionHeader: {
      textAlign: "center"
  },
  subTitle: {
    fontWeight: "bold"
  },
  massTitle: {
    width: "80%"
  },
  massTime: {
    width: "20%",
    fontSize: "1.125rem",
    lineHeight: "1.5em",
    marginTop: "10px",
    marginBottom: "10px",
    textAlign: "right"
  }
};

export default basicsStyle;
