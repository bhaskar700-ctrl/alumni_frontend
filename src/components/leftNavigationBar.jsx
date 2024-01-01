import React, { useState } from "react";
import { LayoutDashboard, HelpCircleIcon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCalendarDays,
  faCalendarPlus,
  faCircleInfo,
  faSuitcase,
  faHandHoldingHeart
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import RightArrowIcon from "./../assets/icons/rightArrow.svg";
import { Link } from "react-router-dom";
import UserProfileCard from "./profileCard";
import AlumniProfiles from "./alumniProfiles";
import MyProfile from "./myprofile";
import axios from 'axios';
import Contact from "./Contact";

import { useEffect } from "react";

const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};

function LeftNavbar({ user }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const [isAdmin, setIsAdmin] = useState(false); 

  useEffect(() => {

    // Make an API call to fetch user information based on email
    const fetchUserRole = async () => {
      try {
        // Replace 'your-backend-endpoint' with the actual endpoint
        const response = await axios.get(`http://localhost:5000/users?id=${user._id}`);
        if(response.data.role === "admin")
        {
          setIsAdmin(true)
        }
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };

      if(user._id){
        fetchUserRole();
      }


  }, []);




  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex flex-col border border-r-1 bg-[#FDFDFD] relative" +
        (isExpanded ? " px-10" : " px-6")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
      >
        <img src={RightArrowIcon} className="w-2" alt="Right Arrow" />
      </div>

      <div className="flex space-x-4 items-center">
        <span className={!isExpanded ? "hidden" : "block"}>
          <Link to="/profile">My Profile</Link>
        </span>
      </div>

      <div className="flex flex-col space-y-8 mt-12">
        <div className="nav-links w-full">
          <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
            <LayoutDashboard />
            <span className={!isExpanded ? "hidden" : "block"}>
              <Link to="/dashboard">Dashboard</Link>
            </span>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
            <FontAwesomeIcon icon={faUsers} flip="horizontal" size="xl" />
            <Link
              to="/alumniProfiles"
              className={!isExpanded ? "hidden" : "block"}
            >
              Alumni Profiles
            </Link>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
            <FontAwesomeIcon icon={faCalendarDays} className="fa-1x" size="xl" />
            <Link to="/events" className={!isExpanded ? "hidden" : "block"}>
              Events
            </Link>
          </div>
        </div>

        {isAdmin && (
          <div className="nav-links w-full">
            <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
              <FontAwesomeIcon icon={faCalendarPlus} size="xl" />
              <Link
                to="/manage-events"
                className={!isExpanded ? "hidden" : "block"}
              >
                Manage Events
              </Link>
            </div>
          </div>
        )}

        {isAdmin && (
          <div className="nav-links w-full">
            <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
              <FontAwesomeIcon icon={faSuitcase} size="xl" />
              <Link
                to="/manage-jobs"
                className={!isExpanded ? "hidden" : "block"}
              >
                Manage Jobs
              </Link>
            </div>
          </div>
        )}


        <div className="nav-links w-full">
          <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
            <FontAwesomeIcon icon={faHandHoldingHeart} className="fa-1x" size="xl" />
            <Link to="/donation" className={!isExpanded ? "hidden" : "block"}>
              Donations
            </Link>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
            <FontAwesomeIcon icon={faSuitcase} className="fa-1x" size="xl" />
            <Link to="/job" className={!isExpanded ? "hidden" : "block"}>
              Job Posts
            </Link>
          </div>
        </div>

        {isAdmin && (
          <div className="nav-links w-full">
            <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
              <FontAwesomeIcon icon={faCircleInfo} size="xl" />
              <span className={!isExpanded ? "hidden" : "block"}>
                <Link to="/uploadAllowedUser">Upload Allowed Users</Link>
              </span>
            </div>
          </div>
        )}

        <div className="nav-links w-full">
          <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
            <HelpCircleIcon />
            <span className={!isExpanded ? "hidden" : "block"}>
              <Link to="/contact">Help Center</Link>
            </span>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
            <FontAwesomeIcon icon={faCircleInfo} size="xl" />
            <span className={!isExpanded ? "hidden" : "block"}>
              <Link to="/about">About</Link>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LeftNavbar;