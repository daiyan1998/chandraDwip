import productsAndServices from "@/components/constants/product-services";
import Banner from "@/components/shared/Banner";
import DynamicBtn from "@/components/ui/DynamicBtn";
import Image from "next/image";
import Link from "next/link";


export default function page() {
  const products = productsAndServices;
  // console.log(products);

  const props = {
    // title: 'All kind of jute goods under one roof',
    // description: 'Chandradwip Group is a well-established and reputed business house in the country.',
    // btn: 'Learn More'
    title: 'Products & Services',
    // description: 'Home / Products & Services',
    // btn: '',
    currentRoute: 'products-and-services',
    routeTitle: 'Products & Services'
  }
  return (
    <main className="">
      {/* ---------- Dynamic Banner Section Start---------- */}
      <Banner {...props} />
      {/* ---------- Dynamic Banner Section End---------- */}
      <div className="max-w-[1180px] mx-auto my-20">
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
                      <h1 className="uppercase font-semibold">{service.title}</h1>
                      <div className="text-xs normal-case mt-1.5 mb-1"><p className="line-clamp-3">{service.description}</p></div>
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
