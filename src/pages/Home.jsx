import FlipCard from "../components/FlipCard";
import video2 from "../assets/videos/video2.mp4"; 
import image1 from "../assets/elite_team_img.png"
import image2 from "../assets/recreational_team_img.png"
import image3 from "../assets/private_training_img.png"

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-center min-h-[55vh] flex flex-col justify-center items-center px-4 relative">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover object-[center_30%] opacity-70"
        >
          <source src={video2} type="video/mp4" />
        </video>
        <div className="relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Train. Compete. Thrive.
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join TKT’s premier programs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/registration"
              className="bg-white text-[#000709] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Register Now
            </a>
            <a
              href="/programs"
              className="bg-white text-[#000709] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              View Programs
            </a>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative z-20 -mt-16 mb-16">
        <div className="w-full">
          <div className="flex justify-center gap-[4rem] overflow-x-auto max-w-none px-6 pb-10">
            {[
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
                link: "/programs#recreational",
              },
              {
                title: "Elite Men's Team",
                desc: "Competitive team with tournaments and advanced-level training.",
                image: image2,
                link: "/programs#elite",
              },
            ].map(({ title, desc, image, link }) => (
              <div
                key={title}
                className="bg-white rounded-[1.5rem] flex flex-col min-h-[40rem] w-full md:w-[32rem] shadow-[0_0_10px_rgba(0,0,0,0.1)]"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-60 object-cover p-2 rounded-[10%] mt-8 pr-8 pl-8"
                />
                <div className="flex flex-col flex-grow p-8">
                  <h3
                    className="text-[2rem] font-bold mb-2"
                    style={{ color: "#000709" }}
                  >
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{desc}</p>
                  <a
                    href={link}
                    className="inline-block mt-auto bg-[#000709] text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
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