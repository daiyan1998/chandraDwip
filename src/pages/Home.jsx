import { Button } from "@/components/ui/button";
// images
import Image from "next/image";
import indentingAgent from "@/assets/certificates/indentingAgent.png";
import commerece from "@/assets/certificates/commerece&industry.png";
import juteGoods from "@/assets/certificates/juteGoods.png";
import contactImg from "@/assets/contactUs.png";
// shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Form from "@/components/shared/Form";
import Banner from "@/components/shared/Banner";

const members = [
  "Chandradwip Construction",
  "Chandradwip International",
  "Farisa Trade Center",
  "Renu Construction",
  "Dristi Traders",
  "Arian Construction And Supplier",
  "Shoukhin Enterprise",
  "Kallal Corporation",
];

const Home = () => {
  return (
    <div className="">
      {/* Banner */}
      <section className="h-[60vh] flex justify-center items-center bg-footer-texture bg-cover">
        <div className="text-white flex flex-col gap-6 text-center md:w-[40%]">
          <h1 className="text-6xl font-bold ">
            All kind of jute goods under one roof
          </h1>
          <p className="text-lg">
            Chandradwip Group is a well-established and reputed business house
            in the country.
          </p>
          <Button className="mx-auto">Learn More</Button>
        </div>
      </section>

      {/* clients */}
      <section className="py-10 container mx-auto">
        <div className="px-8 ">
          <h2 className="text-4xl font-bold text-center mb-9">Clients</h2>
          <Carousel className="w-">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className=" md:basis-1/5 sm:basis-1/3 basis-full"
                >
                  <div className="p-1">
                    <Image
                      className="mx-auto"
                      src="/clients/dfg.png"
                      alt=""
                      height={100}
                      width={100}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* About */}
      <section className="container mx-auto flex flex-col md:flex-row items-center gap-6 py-20 mb-12">
        <div className="basis-3/5">
          <h2 className="text-4xl font-bold mb-6">About Chandradwip Group</h2>
          <p className="mb-9">
            Chandradwip Group is a well-established and reputed business house
            in the country. Chandradwip Construction is an active member of the
            Dhaka Chamber of Commerce & Industry, Bangladesh Jute Goods
            Exporters’ Association, Bangladesh Indenting Agents’ Association and
            also enlisted with Directorate General of Food (DGF), Bangladesh
            Police. It has gained substantial success in dealing with the Civil
            & Defense sector. It offers a comprehensive inventory for the Jute
            Goods, Grains, Construction, Law Enforcement & Defense industry
            including a wide range of products for the diversified sector.
          </p>
          <Button>About Us</Button>
        </div>
        <div className="md:basis-2/5 grid md:grid-cols-2 gap-4 relative w-full">
          <div className="relative h-[150px]">
            <Image src="/home/wheat.png" fill alt="about" />
          </div>
          <div className="relative h-[150px]">
            <Image src="/home/oil.png" fill alt="about" />
          </div>
          <div className="relative h-[150px]">
            <Image src="/home/car.png" fill alt="about" />
          </div>
          <div className="relative h-[150px]">
            <Image src="/home/lentils.png" fill alt="about" />
          </div>
          <div className="relative col-span-2 h-[150px] object-contain">
            <Image src="/home/fireBus.png" fill alt="about" />
          </div>
        </div>
      </section>

      {/* members */}
      <section className="bg-green py-20">
        <div className="container mx-auto md:flex items-center gap-10">
          <div className="basis-1/3">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Members Of Chandradwip Group
            </h2>
          </div>
          <div className="basis-2/3 grid md:grid-cols-4 grid-cols-2 gap-4">
            {members.map((member) => (
              <div
                key={member}
                className="flex flex-col justify-center gap-3 bg-dark_green rounded-md p-4"
              >
                <Image
                  src="/homeIcon.png"
                  height={50}
                  width={50}
                  alt="icon"
                  className="mx-auto"
                />
                <p className="text-center text-white">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* certificates */}
      <section className="py-20">
        <h2 className="text-4xl font-bold mb-6  text-center">Certificate</h2>
        <div className="flex flex-wrap justify-center md:gap-10">
          <Image src={indentingAgent} height={400} width={400} alt="" />
          <Image src={commerece} height={400} width={400} alt="" />
          <Image src={juteGoods} height={400} width={400} alt="" />
        </div>
      </section>

      {/* Contact us */}
      <section>
        <h2 className="text-4xl font-bold mb-6  text-center">Contact us</h2>
        <div className=" flex flex-col md:flex-row justify-center gap-16 md:py-20">
          <Image
            src={contactImg}
            height={500}
            width={500}
            alt=""
            className="md:block hidden"
          />
          <Form />
        </div>
      </section>
      {/*  */}
    </div>
  );
};

export default Home;
