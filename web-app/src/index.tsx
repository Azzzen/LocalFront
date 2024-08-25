import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import SiteMap from "./components/sitemap/SiteMap";
import Catalog from "./pages/catalog/Catalog";
import CGV from "./components/legalMentions/CGV";
import ContactPage from "./components/contact/ContactPage";
import Confidentiality from "./components/legalMentions/Confidentiality";
import CGU from "./components/legalMentions/CGU";
import LegalMentions from "./components/legalMentions/LegalMentions";
import AddArticle from "./components/addArticlePage/AddArticle";
import MyAccount from "./components/myAccount/MyAccount";
import { ToastContainer } from 'react-toastify';
import DevConfirmation from "./devConfirmation/devConfirmation";
import RegistrationConfirmation from "./RegistrationConfirmation/RegistrationConfirmation";
import InformationPage from "./informationPage/Information";
import ModifyLocalScoreData from "./ModifyLocalScoreData";
import { createRoot } from 'react-dom/client';
import Admin from './components/admin/Admin';
import ChangePassword from './components/password/ChangePassword';


const container = document.getElementById('root');
const root = createRoot(container!);
import {Box, ThemeProvider} from "@mui/material";
import theme from './theme';

import BlogPost from './Blog/BlogPost';
import ForgotPassword from './components/password/ForgotPassword';
import './index.css'
import Navbar from "./components/navbar/Navbar";
import Forbidden from "./components/forbidden/Forbidden";
import Footer from "./Footer";
import RegisterConfirmation from "./components/register/RegisterConfirmation";
import Chat from "./components/chatbot/MyChatbot";
import AdminPage from "./pages/admin/Admin";

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
            <Route path="/login" element={<Login />} />
            <Route path="/mon-compte" element={<MyAccount />} />
            <Route path="/password/:emails" element={<ChangePassword />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/forgotPasswordEmail" element={<ForgotPassword />} />
            <Route path="/addArticle" element={<AddArticle />} />
            <Route path="/register" element={<Register />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/siteMap" element={<SiteMap />} />
            <Route path="/legalMentions" element={<LegalMentions />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="/confidentiality" element={<Confidentiality />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/confirm" element={<RegistrationConfirmation />} />
            <Route path="/modify_database" element={<ModifyLocalScoreData />} />
            <Route path="/confirm_dev" element={<DevConfirmation />} />
            <Route path="/confirm_registration" element={<RegisterConfirmation />} />
            <Route path="/mobile" element={<></>} />
            <Route path="/blog" element={<BlogPost />} />
            <Route path="/admin" element={<AdminPage />} />
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
