import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SiteMap from "./components/sitemap/SiteMap";
import CGV from "./components/legalMentions/CGV";
import ContactPage from "./components/contact/ContactPage";
import Confidentiality from "./components/legalMentions/Confidentiality";
import CGU from "./components/legalMentions/CGU";
import LegalMentions from "./components/legalMentions/LegalMentions";
import { ToastContainer } from 'react-toastify';
import InformationPage from "./informationPage/Information";
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container!);
import {Box, ThemeProvider} from "@mui/material";
import theme from './theme';

import BlogPost from './Blog/BlogPost';
import './index.css'
import Navbar from "./components/navbar/Navbar";
import Forbidden from "./components/forbidden/Forbidden";
import Footer from "./Footer";
import Chat from "./components/chatbot/MyChatbot";

function isPhone() {
    return window.innerWidth <= 768;
}

const AppWithRouter = () => (
    <Router>
        <Navbar />
        <Footer />
        <Routes>
            <Route path="/" element={isPhone() ? <></> : <InformationPage />} />
            <Route path="/information" element={<InformationPage />} />

            <Route path="/siteMap" element={<SiteMap />} />
            <Route path="/legalMentions" element={<LegalMentions />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="/confidentiality" element={<Confidentiality />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/blog" element={<BlogPost />} />
            <Route path="/*" element={<Forbidden />} />
            <Route path="/404" element={<Forbidden />} />
        </Routes>
    </Router>);

root.render(<React.StrictMode>
    <ThemeProvider theme={theme}>
        <AppWithRouter />
        <Chat/>
        <ToastContainer />
    </ThemeProvider>
</React.StrictMode>,);

reportWebVitals();
