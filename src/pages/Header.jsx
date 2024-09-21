import React from "react";
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import Centers from "./Centers";
import Gallery from "./Gallery";
import Blog from "./Blog";
import { Routes, Route, NavLink } from "react-router-dom";
import Events from "./Events"
import Achievements from "./Achievements"
import Projects from "./Projects"
import Staff from "./Staff";

function Header() {
  return (
    <>
      <nav className=" bg-blue-950  p-2 px-4">
        <ul className="flex justify-evenly  text-lg items-center">
          <li className=" mr-3 ">
            <NavLink to="/">
              <img
                className="w-44 logo"
                src="https://i-tech.net.in/wp-content/uploads/2023/05/logo.png"
                alt=""
              ></img>
            </NavLink>
          </li>
          <li className="navbars flex justify-evenly items-center gap-4 ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/centers">Centers</NavLink>
            </li>
            <li className="navhover relative">
              <NavLink to=" ">
                Gallery
                <ul className="dropdown w-fit rounded-sm  transition-all  absolute top-7 bg-blue-900  ">
                    <NavLink to="/events"><p>Events</p></NavLink>
                    <NavLink to="/staff"><p>Our Staff</p></NavLink>
                    <NavLink to="/achievements"><p>Student Achievements</p></NavLink>
                    <NavLink to="/projects"><p>Student Projects</p></NavLink>
                </ul>
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </li>
          <li className="contactnumber">
            <NavLink to="">9326810212</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="centers" element={<Centers />} />
        {/* <Route path="gallery" element={<Gallery />} /> */}
        <Route path="blog" element={<Blog />} />
        <Route path="events" element={<Events/>} />
        <Route path="staff" element={<Staff/>} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="projects" element={<Projects />} />

      </Routes>
    </>
  );
}

export default Header;
