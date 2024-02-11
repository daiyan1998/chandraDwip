import Image from "next/image";

const strength = [
    "Extensive entrepreneurial experience",
    "Chandradwip International",
    "Farisa Trade Center",
    "Renu Construction",
    "Dristi Traders",
    "Arian Construction And Supplier",
    
  ];


const DynamicSection = () => {
    return (
        <section className="bg-green-600 py-20">
        <div className="flex justify-between items-center">
          <div className="basis-1/3">
            <h2 className="text-4xl font-bold mb-6 text-center text-white">
            Strength of <br /> Chandradwip <br /> Construction
            </h2>
          </div>
          <div className="basis-2/3 grid grid-cols-3 gap-6">
            {strength.map((member) => (
              <div className="flex flex-col justify-center gap-3 bg-green-700 rounded-md p-4">
                <Image
                  src="/homeIcon.png"
                  height={50}
                  width={50}
                  alt="icon"
                  className="mx-auto"
                />
                <p className="text-center text-white">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default DynamicSection;