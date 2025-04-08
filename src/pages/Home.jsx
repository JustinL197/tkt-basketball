import video2 from "../assets/videos/video2.mp4"; 
import image1 from "../assets/elite_team_img.png"
import image2 from "../assets/recreational_team_img.png"
import image3 from "../assets/private_training_img.png"
import image4 from "../assets/youth_program_img.png"

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-cards";

import ProgramCard from "../components/ProgramCard";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const programs = [
    {
      title: "Dream Big Basketball Camp",
      desc: "Inspiring the youth to develop their fundamentals of basketball while emphasizing teamwork, respect, hardowrk, and a positive attitude!",
      image: image4,
      link: "/programs#dreambig",
    },
    {
      title: "Private Sessions",
      desc: "1-on-1 or small group training sessions tailored to individual skill levels.",
      image: image3,
      link: "/programs#private",
    },
    {
      title: "Recreational Team",
      desc: "Fun-focused weekly practices in a team setting to build skills and confidence.",
      image: image1,
      link: "mailto:tktbasketball@gmail.com",
    },
    {
      title: "Elite Men's Team",
      desc: "Competitive team with tournaments and advanced-level training.",
      image: image2,
      link: "mailto:tktbasketball@gmail.com",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-white text-center min-h-[60vh] flex flex-col justify-center items-center px-4 relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="pointer-events-none absolute top-0 left-0 w-full h-full object-cover object-[center_30%] opacity-70"
        >
          <source src={video2} type="video/mp4" />
        </video>

        <div className="relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Teamwork. Respect. Positivity. Hard Work
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl mx-auto mb-6"
          >
            <p className="text-sm md:text-lg italic text-white opacity-90">
              Toronto Korean Tigers Basketball is a non-profit uniting the
              Korean community through basketball and shared growth.
            </p>
            <div className="w-16 h-[2px] bg-white/50 mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-[#000709] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Register Now
            </Link>
            <Link
              to="/programs"
              className="bg-white text-[#000709] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative z-20 -mt-16 mb-16">
        <div className="w-full">
          {isMobile ? (
            <div className="relative">
              {/* Swipeable Cards */}
              <Swiper
                effect="cards"
                grabCursor={true}
                modules={[EffectCards]}
                className="w-[75%] max-w-[90%] mx-auto overflow-hidden rounded-[1.5rem]"
              >
                {programs.map(({ title, desc, image, link }, index) => {
                  const isContact =
                    title.includes("Recreational") || title.includes("Elite");
                  return (
                    <SwiperSlide
                      key={title}
                      className="!flex justify-center rounded-[1.5rem] bg-[#858585] relative"
                    >
                      {/* Swipe label on first card only */}
                      {index === 0 && (
                        <span className="absolute top-2 right-2 text-xs text-white bg-black/40 px-2 py-1 rounded-full z-10">
                          Swipe →
                        </span>
                      )}

                      <ProgramCard
                        {...{ title, desc, image, link, isContact }}
                        mobileShrink
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          ) : (
            <div className="flex justify-center gap-[3rem] flex-wrap px-6 pb-10">
              {programs.map(({ title, desc, image, link }) => {
                const isContact =
                  title.includes("Recreational") || title.includes("Elite");
                return (
                  <ProgramCard
                    key={title}
                    {...{ title, desc, image, link, isContact }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 px-6 bg-white text-center">
        <h2
          className="text-2xl font-bold mb-4 uppercase tracking-wide"
          style={{ color: "#000709" }}
        >
          Upcoming Events
        </h2>
        <p className="text-gray-600">Stay tuned for announcements!</p>
      </section>
    </div>
  );
};

export default Home;