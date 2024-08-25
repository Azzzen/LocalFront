import { Box } from "@mui/material";
import wave from "../assets/wave.svg";
import React from "react";

export default function BackgroundSlider() {
    return (
      <Box>
          <Box
            sx={{
                position: 'absolute',
                left: '0vw',
                width: '400vw',
                height: '100%',
                top: '11.3vh',
                zIndex: -10,
                animation: 'waveEffect 100s linear infinite',
                '&::-webkit-scrollbar': { display: 'none' },
                '@keyframes waveEffect': {
                    '0%': { transform: 'translateX(0%)' },
                    '50%': { transform: 'translateX(-10%)' },
                    '100%': { transform: 'translateX(0%)' }
                }
            }}
          >
              <img src={wave} />
          </Box>
          <Box
            sx={{
                position: 'absolute',
                left: '399.925vw',
                width: '400vw',
                height: '100%',
                top: '10vh',
                zIndex: -10,
                animation: 'waveEffect 100s linear infinite',
                '&::-webkit-scrollbar': { display: 'none' },
                '@keyframes waveEffect': {
                    '0%': { transform: 'translateX(0%)' },
                    '50%': { transform: 'translateX(-10%)' },
                    '100%': { transform: 'translateX(0%)' }
                }
            }}
          >
              <img src={wave} />
          </Box>
          <Box
            sx={{
                position: 'absolute',
                left: '0vw',
                width: '800vw',
                height: '100vh',
                top: '0vh',
                bgcolor: '#FCF9F7',
                zIndex: -15
            }}
          />
      </Box>
    );
}
