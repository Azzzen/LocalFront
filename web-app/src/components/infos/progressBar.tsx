import * as React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const determineColor = (value: number) => {
    value = Math.min(100, Math.max(0, value));
  
    const red = Math.round((100 - value) * 255 / 100);
    const green = Math.round((value) * 255 / 100);
  
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
  
    return `#${redHex}${greenHex}00`;
  };

export const ColoredScoreBar = styled(LinearProgress)(({ theme, value = 0}) => ({
    height: 10,
    borderRadius: 10,  
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      background: determineColor(value),
    },
  }));
