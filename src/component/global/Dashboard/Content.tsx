// ContentComponent.js
import React from "react";
import { useLocation } from "react-router-dom";

import About from "../../pages/About/About";
import BannerCreate from "../../pages/Home/Banner/BannerCreate/BannerCreate";
import BannerPage from "../../pages/Home/Banner/Banner";
import BannerEdit from "../../pages/Home/Banner/BannerEdit/BannerEdit";

import SolutionPage from "../../pages/Home/Solution/Solution";
import SolutionEdit from "../../pages/Home/Solution/SolutionEdit/SolutionEdit";
import ContactPage from "../../pages/Home/Contact/Contact";

const ContentComponent = () => {
  const location = useLocation();

  switch (location.pathname) {
    case "/":
      return null;
    case "/Home/Banner":
      return <BannerPage />;
    case "/Home/Banner/Create":
      return <BannerCreate />;
    case "/Home/Banner/Edit":
      return <BannerEdit />;

    case "/Home/Solution":
      return <SolutionPage />;
    case "/Home/Solution/Create":
      return <SolutionEdit />;
    case "/Home/Solution/Edit":
      return <SolutionEdit />;

    case "/Home/Contact":
      return <ContactPage />;
    case "/about":
      return <About />;

    default:
      return null;
  }
};

export default ContentComponent;
