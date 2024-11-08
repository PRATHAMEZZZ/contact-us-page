import Cards from "../shared/Cards";

const AboutUs = () => {
  const data = [
    { title: "Clients Worldwide", number: "350" },
    { title: "Team Members", number: "20" },
    { title: "Projects Completed", number: "100" },
    { title: "Revenue Generated", number: "85M" },
  ];

  return (
    <div className="bg-neutral-900 my-10 sm:my-20 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-8 lg:gap-8 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-full"
            >
              <div className="w-full sm:w-3/4 md:w-1/2 lg:w-full flex justify-center">
                <Cards title={item.title} number={item.number} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
