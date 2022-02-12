import React from "react";
import {
  FaGithubSquare,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "/profile",
    text: "profile",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com/nastya.tsalkina",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://twitter.com/home",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/anastasiia-kolomiiets-frontend-developer",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://github.com/anastasia1756",
    icon: <FaGithubSquare />,
  },
];
