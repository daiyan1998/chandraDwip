import { Button } from "@/components/ui/button";
// images
import Image from "next/image";
import indentingAgent from "@/assets/certificates/indentingAgent.png";
import commerece from "@/assets/certificates/commerece&industry.png";
import juteGoods from "@/assets/certificates/juteGoods.png";
import contactImg from "@/assets/contactUs.png";
// import rope from "@/assets/rope.png";
// import br from "/home/br.png";
// import dgf from "/home/dgf.png";
// import dgdp from "/home/dgdp.png";
// import hed from "/home/hed.png";
// import nsc from "/home/nsc.png";
// import tcb from "/home/tcb.png";
// shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Form from "@/components/shared/Form";

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
    <>
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
        <div className="md:basis-2/5 md:grid md:grid-cols-2 gap-4 relative">
          <div className="relative md:h-[150px]">
            <Image
              className=""
              src="/home/wheat.png"
              sizes="(min-width: 808px) 50vw, 100vw"
              fill
              alt="about"
            />
          </div>
          <div className="relative h-[150px]">
            <Image
              className=""
              src="/home/oil.png"
              sizes="(min-width: 808px) 50vw, 100vw"
              fill
              alt="about"
            />
          </div>
          <div className="relative h-[150px]">
            <Image
              className=""
              src="/home/car.png"
              sizes="(min-width: 808px) 50vw, 100vw"
              fill
              alt="about"
            />
          </div>
          <div className="relative h-[150px]">
            <Image
              className=""
              src="/home/lentils.png"
              sizes="(min-width: 808px) 50vw, 100vw"
              fill
              alt="about"
            />
          </div>
          <div className="relative col-span-2 h-[150px]">
            <Image
              className="object-contain"
              src="/home/fireBus.png"
              sizes="(min-width: 808px) 50vw, 100vw"
              fill
              alt="about"
            />
          </div>
        </div>
      </section>

      {/* clients */}
      <section className="py-10">
        <h2 className="text-4xl font-bold text-center mb-9">Clients</h2>
        <Carousel className="container mx-auto">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/5 lg:basis-1/5"
              >
                <div className="p-1">
                  <Image
                    className="mx-auto"
                    src="/clients/dfg.png"
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
      </section>

      {/* members */}
      <section className="bg-green-600 py-20">
        <div className="container mx-auto md:flex items-center">
          <div className="basis-1/3">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Members Of Chandradwip Group
            </h2>
          </div>
          <div className="basis-2/3 grid md:grid-cols-4 grid-cols-2 gap-4">
            {members.map((member) => (
              <div className="flex flex-col justify-center gap-3 bg-green-700 rounded-md p-4">
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
          <Image src={indentingAgent} height={400} width={400} />
          <Image src={commerece} height={400} width={400} />
          <Image src={juteGoods} height={400} width={400} />
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
            className="md:block hidden"
          />
          <Form />
        </div>
      </section>
      {/*  */}
    </>
  );
};

export default Home;
