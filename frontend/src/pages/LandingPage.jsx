import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import HERO_IMG from "../assets/interview_prep_3.jpg";
import IMG1 from "../assets/interview_prep_2.jpg";
import IMG2 from "../assets/interview_prep_3.jpg";
import IMG3 from "../assets/interview_prep_4.jpg";
import IMG4 from "../assets/interview_prep_1.jpg";
import ABHISHEK from "../assets/abhishek.jpg";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";
import ShowcsdeGallery from "../components/ShowcseGallery";
import AnimatedButton from "../components/AnimatedButton";
import LOGO from "../assets/LOGO.png";

const screenshots = [IMG1, IMG2, IMG3, IMG4];

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="w-full min-h-full bg-[#FFFCEF]">
        <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0" />

        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-16">
            <div className="flex items-center">
              <img src={LOGO} alt="Logo" className="w-10 h-10 rounded-full" />
              <span className="text-xl text-black font-bold">
                InterviewIQ AI
              </span>
            </div>

            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="bg-gradient-to-r from-[#FF9324] to-[#e99a4b] 
             text-white 
             px-5 py-2 
             rounded-full 
             transition-all duration-300 
             hover:shadow-lg hover:shadow-orange-400/60"
                onClick={() => setOpenAuthModal(true)}
              >
                Login
              </button>
            )}
          </header>

          {/* Hero Content */}
          {/* Hero Content */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full mb-8">
              <div className="flex justify-center mb-2">
                <div className="flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  <LuSparkles /> AI Powered
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl text-black font-medium mb-6 leading-tight">
                Ace Interviews with <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                  AI-Powered
                </span>{" "}
                Learning
              </h1>
            </div>

            <div className="w-full max-w-2xl">
              <p className="text-[17px] text-gray-900 mb-6">
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
                From preparation to mastery — your ultimate interview toolkit is
                here.
              </p>

              <AnimatedButton text="Get Started" onClick={handleCTA} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-full relative z-10">
        <div>
          <section className="flex items-center justify-center -mt-36">
            <img
              src={HERO_IMG}
              alt="Hero Image"
              className="w-[80vw] rounded-lg"
            />
          </section>
        </div>
        <div className="w-full min-h-full bg-[#FFFCEF] mt-10">
          <div className="container mx-auto px-4 pt-10 pb-20">
            <section className="mt-5">
              <h2 className="text-2xl font-medium text-center mb-12">
                Features That Make You Shine
              </h2>

              <div className="flex flex-col items-center gap-8">
                {/* First 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {APP_FEATURES.slice(0, 3).map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs transition-all border border-amber-100 
                     hover:shadow-[0_0_15px_4px_rgba(255,147,36,0.5)]"
                    >
                      <h3 className="text-base font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Remaining 2 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs transition-all border border-amber-100 
                     hover:shadow-[0_0_15px_4px_rgba(255,147,36,0.5)]"
                    >
                      <h3 className="text-base font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
        <div>
          <ShowcsdeGallery images={screenshots} />
        </div>
        {/* footer */}

        <footer className="bg-orange-200 text-gray-700 px-6 py-6 mt-10 border-t">
          <div className="container mx-auto flex flex-col gap-8 sm:gap-6 sm:flex-col md:flex-row md:justify-between md:items-center relative">
            {/* Left */}
            <div className="flex items-center">
              <img src={LOGO} alt="Logo" className="w-12 h-12 rounded-full" />
              <span className="text-xl text-black font-bold">
                InterviewIQ AI
              </span>
            </div>

            {/* Scroll-to-Top Arrow */}
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex flex-col items-center cursor-pointer text-gray-700 hover:text-black transition order-3 md:order-none"
            >
              <FaArrowUp className="text-2xl" />
              <span className="text-xs mt-1">Click to roll back</span>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center md:items-end text-sm">
              <div className="font-bold mb-3">About Developer</div>
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={ABHISHEK}
                  alt="Abhishek Shah"
                  className="w-10 h-10 rounded-full object-cover border-2 border-orange-400"
                />
                <span className="font-medium text-gray-800">Abhishek Shah</span>
              </div>
              <div className="flex gap-4 text-xl text-gray-600">
                <a
                  href="https://github.com/Abhishek-2610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/abhishek-shah-3262ba275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
