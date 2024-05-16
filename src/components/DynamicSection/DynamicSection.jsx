import Image from "next/image";

const strengths = [
  "Extensive entrepreneurial experience",
  "Efficient and quality services",
  "Vast network in national andinternational business arena",
  "Experienced and committed work force",
  "Enriched understanding of local market andstronger relationship with clients",
  "Competence in customer relationshipmanagement",
];

const DynamicSection = () => {
  return (
    <section className="bg-green  my-5 py-10 lg:py-20 rounded-xl ">
      <div className="lg:flex justify-between items-center ">
        <div className=" lg:w-1/3 ">
          <h2 className=" text-4xl lg:text-5xl font-extrabold mb-6 text-center text-white">
            Strength of <br /> Chandradwip <br /> Construction
          </h2>
        </div>
        <div className=" lg:w-2/3 grid grid-cols-1  lg:grid-cols-3 gap-5 ">
          {strengths.map((strength,i) => (
            <div key={i} className="flex flex-col justify-center mt-2 w-60 mx-auto bg-green-700 rounded-md p-4">
              <Image
                src="/homeIcon.png"
                height={50}
                width={50}
                alt="icon"
                className="mx-auto"
              />
              <p className="text-center  text-white">{strength}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicSection;
