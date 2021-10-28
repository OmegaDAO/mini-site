import * as React from "react"
import {
    FaMedium as Medium,
    FaTwitter as Twitter,
    FaDiscord as Discord,
    FaGithub as Github,
} from "react-icons/fa"

export const menuItems = [
    {
        path: "/",//"https://staging.omegadao.finance",
        text: "app",
    },
    {
        path: "/",//"https://omegadao.medium.com",
        text: "medium",
    },
    {
        path: "/",//"https://twitter.com/omegadaofi",
        text: "twitter",
    },
    {
        path: "/",//"https://discord.com",
        text: "discord",
    },
    {
        path: "/",//"https://github.com/OmegaDAO",
        text: "github",
    },

]

export const socialItems = [
    {
        path: "/",//"https://omegadao.medium.com",
        icon: <Medium />,
    },
    {
        path: "/",//"https://twitter.com/omegadaofi",
        icon: <Twitter />,
    },
    {
        path: "/",//"https://discord.com",
        icon: <Discord />,
    },
    {
        path: "/",//"https://github.com/OmegaDAO",
        icon: <Github />,
    },
]
