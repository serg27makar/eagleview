import {BsFillCameraVideoFill} from "react-icons/bs";
import {IoIosSettings, IoIosStats} from "react-icons/io";
import {FaUserAlt} from "react-icons/fa";
import React from "react";

const toolBarButtons = [
    {
        page: "camera",
        linkPath: "/camera",
        linkIcon: <BsFillCameraVideoFill/>,
        linkName: "Camera",
        linkActive: false,
    },
    {
        page: "settings",
        linkPath: "/settings",
        linkIcon: <IoIosSettings/>,
        linkName: "Customization",
        linkActive: false,
    },
    {
        page: "statistic",
        linkPath: "/statistic",
        linkIcon: <IoIosStats/>,
        linkName: "Statistics",
        linkActive: false,
    },
    {
        page: "cabinet",
        linkPath: "/cabinet",
        linkIcon: <FaUserAlt/>,
        linkName: "Cabinet",
        linkActive: false,
    }
];

export default toolBarButtons;
