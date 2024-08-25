import {Box} from "@mui/material";
import clsx from "clsx";
import wave from "../assets/wave.svg";
import React from "react";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    wave: {
        animation: `$waveEffect 100s linear infinite`,
        zIndex: -10
    },
    "@keyframes waveEffect": {
        "0%": {
            transform: "translateX(0%)"
        },
        "100%": {
            transform: "translateX(0%)"
        },
        "50%": {
            transform: "translateX(-10%)"
        }
    }
}));
export default function BackgroundSlider() {
    const classes = useStyles();
    return <Box>
        <Box className={clsx(classes.wave)} position={'absolute'} left={'0vw'} width={'400vw'} height={'100%'}
             top={'11.3vh'} sx={{'&::-webkit-scrollbar': {display: 'none'}}}>
            <img src={wave}/>
        </Box>
        <Box className={clsx(classes.wave)} position={'absolute'} left={'399.925vw'} width={'400vw'} height={'100%'}
             top={'10vh'} sx={{'&::-webkit-scrollbar': {display: 'none'}}}>
            <img src={wave}/>
        </Box>
        <Box position={'absolute'} left={'0vw'} width={'800vw'} height={'100vh'} top={'0vh'} bgcolor={'#FCF9F7'}
             zIndex={-15}>
        </Box>
    </Box>
}