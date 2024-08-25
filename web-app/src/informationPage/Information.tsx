import React from 'react';
import {Box, Stack, styled, TextField, Typography} from "@mui/material";
import localShirtFullLogoGreen from '../assets/green_logo.svg';
import clsx from "clsx";
import PresentationExtension from "./PresentationExtension";
import ProjectObjective from "./ProjectObjective";
import ScorePresentation from "./ScorePresentation";
import PartnerList from "./PartnerList";
import GroupMemberList from "./GroupMemberList";
import BackgroundSlider from "./BackgroundSlider";
import Loading from '../components/loading/Loading';
import LinkAnalyze from './LinkAnalize';
import SlideDots from './slideDots';
import { useRef } from 'react';

export const Center = styled(Box)(({theme}) => ({
    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
}));

export const SearchInputField = styled(TextField)(({theme}) => ({
    width: '100%', fieldset: {
        border: 'none'
    }, input: {
        color: theme.palette.gray.dark,
    },
}));


/*const useStyles = makeStyles(theme => ({
    horizontalScrollContainer: {
        overflowX: "scroll",
        overflowY: "hidden",
        width: "100vw",
        height: "100vh",
        scrollSnapType: "x mandatory",
        position: "relative",
        scrollBehavior: "smooth",
    }
}));*/

const InformationPage = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    return (
      <>
          <PresentationExtension/>
        <ProjectObjective/>
        <ScorePresentation/>
              <GroupMemberList/>
              <BackgroundSlider/>
      </>
    )
/*    return (<Stack direction={'row'} className={clsx(classes.horizontalScrollContainer)} ref={scrollContainerRef}
    sx={{'&::-webkit-scrollbar': {display: 'none'}}}>
        <SlideDots containerRef={scrollContainerRef}/>
        <PresentationExtension/>
        <LinkAnalyze/>
        <ProjectObjective/>
        <ScorePresentation/>
        {/!*<PartnerList/>*!/}
        <GroupMemberList/>
        <BackgroundSlider/>
    </Stack>);*/
};

export default InformationPage;
