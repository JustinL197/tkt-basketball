const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-center py-16 px-4">
        <h1 className="text-4xl font-black text-red-600 uppercase italic">
          Spring Youth Program Open Now!
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Register today to join our exciting youth basketball sessions.
        </p>
        <a
          href="/programs"
          className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Learn More
        </a>
      </section>

      {/* Core Programs */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 uppercase tracking-wide">
          Our Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Program Card Template */}
          {[
            {
              title: "Private Sessions",
              desc: "One-on-one or small group skill training with our experienced coaches.",
              anchor: "#private",
            },
            {
              title: "Recreational Team",
              desc: "Weekly practices in a low-pressure environment focused on fun and development.",
              anchor: "#recreational",
            },
            {
              title: "Elite Men's Team",
              desc: "Competitive team for advanced players participating in tournaments and leagues.",
              anchor: "#elite",
            },
          ].map(({ title, desc, anchor }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center border-t-4 border-red-600 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-800 uppercase">
                {title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">{desc}</p>
              <a
                href={`/programs${anchor}`}
                className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition self-center mt-auto"
              >
                More Info
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 uppercase tracking-wide">
          Upcoming Events
        </h2>
        <p className="text-gray-600">Stay tuned for announcements!</p>
      </section>
    </div>
  );
};

export default Home;
