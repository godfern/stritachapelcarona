import {
    container,
    title
} from "assets/jss/material-kit-react.js";

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
    textCenter: {
        textAlign: "center"
    },
    prayerSection: {
        textAlign: "center",
        background: "#F5FAFD",
        padding: "15px",
        marginTop: "20px"
    },
    prayerTitle: {
        marginBottom: "20px",
        marginTop: "0"
    },
    prayerContent: {
        fontStyle: "italic",
        fontSize: "16px",
        lineHeight: "2"
    },
    playerWrapper: {
        display: "flex",
        width: "30%",
        justifyContent: "flex-end"
    }
};

const playerStyles = {
    root: {
        background: 'transparent',
        boxShadow: 'none'
    },
    loopIcon: {
        color: '#3f51b5',
        '&.selected': {
            color: '#0921a9'
        },
        '&:hover': {
            color: '#7986cb'
        }
    },
    volumeIcon: {
        color: 'rgba(0, 0, 0, 0.54)'
    },
    volumeSlider: {
        color: '#3f51b5'
    },
    progressTime: {
        color: 'rgba(0, 0, 0, 0.54)'
    },
    mainSlider: {
        color: '#3f51b5',
        '& .MuiSlider-rail': {
            color: '#7986cb'
        },
        '& .MuiSlider-track': {
            color: '#3f51b5'
        },
        '& .MuiSlider-thumb': {
            color: '#303f9f'
        }
    }
};

export { basicsStyle as default  , playerStyles};