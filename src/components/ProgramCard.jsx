const ProgramCard = ({ title, desc, image, link, isContact }) => (
  <div className="bg-white rounded-[1.5rem] flex flex-col min-h-[32rem] w-full md:w-[21rem] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
    <div className="mx-4 mt-5 rounded-[1.5rem] overflow-hidden">
      <img src={image} alt={title} className="w-full h-[180px] object-cover" />
    </div>
    <div className="flex flex-col flex-grow pt-4 p-6">
      <h3 className="text-[20px] font-bold mb-2" style={{ color: "#000709" }}>
        {title}
      </h3>
      <p className="text-gray-600 mb-4 flex-grow">{desc}</p>
      <a
        href={link}
        className="inline-block mt-auto text-center bg-[#000709] text-white px-4 py-2 rounded-xl hover:bg-[#1a1f2e] transition"
      >
        {isContact ? "Contact Us" : "Learn More"}
      </a>
    </div>
  </div>
);

export default ProgramCard;
