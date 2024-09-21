import React from "react";

function Footer() {
  return (
    <div className="h-96 bg-blue-900">
      <footer className="footer w-full h-96 flex justify-center items-center p-12 gap-10 ">
        <div className="w-56 company flex flex-col mr-12">
        <img
                className="w-full "
                src="https://i-tech.net.in/wp-content/uploads/2023/05/logo.png"
                alt=""
              ></img>
              <div className="w-56 mt-4 flex justify-evenly">
                <p><i class="fa-brands fa-facebook-f"></i></p>
                <p><i class="fa-brands fa-instagram"></i></p>
                <p><i class="fa-brands fa-youtube"></i></p>
              </div>
        </div>
        <div className="w-full address flex justify-end  text-left ml-7">
            <ul className="w-full">
            <h1 className="font-semibold text-lg">Address</h1>
                <li>Head Office - Office. no.1, Civic Center, Opp. Panchmukhi Hanuman Temple, Station Road, Nalasopara West</li>
                <li>+91 911 211 4411 </li>
                <li>info@i-tech.net.in</li>
                <li>Nallasopara west (401209)</li>
            </ul>
            <ul className="w-full flex justify-start flex-col items-center text-left">
                <h1 className="font-semibold text-lg">Company</h1>
                <li>Home</li>
                <li>About Us</li>
                <li>Centers</li>
            </ul>
            <ul className="w-full flex justify-start flex-col items-center text-left ">
                <h1 className="font-semibold text-lg">Information</h1>
                <li>Courses</li>
                <li>Blog</li>
                <li>Privacy Statement</li>
            </ul>
        </div>
      </footer>
        <h1 className="bg-blue-950 p-2">© 2010 Created by I-Tech Computer Education</h1>
    </div>
  );
}

export default Footer;
