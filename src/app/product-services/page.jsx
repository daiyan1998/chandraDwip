import productsAndServices from "@/components/constants/product-services";
import DynamicBtn from "@/components/ui/DynamicBtn";
import Image from "next/image";
import Link from "next/link";


export default function page() {
  const products = productsAndServices;
  // console.log(products);
  return (
    <main className="max-w-[1180px] mx-auto">
      {/* ---------- Dynamic Banner Section Start---------- */}
      {/* ---------- Dynamic Banner Section End---------- */}
      <div className="my-20">
        {products.map((product) => (
          <div key={product.id}>
            <h2 className="categories-h2">{product.category}</h2>
            <div className="products-grid">
              {product.services.map((service) => (
                <div key={service.id}>
                  <div className="card">
                    <Image
                      src={service.src}
                      placeholder="blur"
                      quality={100}
                      alt={service.title}
                      // className="rounded-xl shadow-lg hover:scale-105 duration-500"
                      className="object-cover rounded-2xl"
                    />
                    <div className="card-body">
                      <h1 className="uppercase font-semibold text-xl">{service.title}</h1>
                      <p className="text-sm normal-case my-4">{service.description}</p>
                      <Link href='/contact-us'><DynamicBtn btnClass='w-full'>Contact Us</DynamicBtn></Link>
                    </div>
                  </div>
                  <p className="card-title">{service.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
