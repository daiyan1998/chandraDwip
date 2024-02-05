import productService from "@/components/constants/product-services";
import Image from "next/image";

export default function page() {
  const products = productService;
  console.log(products);
  return (
    <main className="max-w-[1180px] mx-auto">
      <h1 className="py-20 text-center border">Products & Services</h1>

      <div className="my-20">
        {products.map((product) => (
          <div className="" key={product.id}>
            <h2 className="text-center my-10">{product.title}</h2>
            <div className="grid  grid-cols-4 gap-8 justify-items-center">
              {product.services.map((service) => (
                <div key={service.id}>
                  <Image
                    src={service.imgFile}
                    // placeholder="blur
                    width={270}
                    height={330}
                    quality={100}
                    alt="Raw jute"
                  />
                  <p className="text-dark text-center">{service.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
