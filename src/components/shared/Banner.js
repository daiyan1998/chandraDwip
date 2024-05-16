import Link from "next/link";
import DynamicBtn from "../ui/DynamicBtn";

export default function Banner({title, description, currentRoute, routeTitle, btn}) {
  return(
    <section className="bg-banner-img bg-cover bg-center">
      <div className="banner">
        <h1 className="banner-title">
          {title}
        </h1>
        {
          description? 
            <p className="banner-description">
              {description}
            </p>
            :
            <div className="banner-route">
              <Link href='/' className="hover:underline">Home</Link> / <Link href={`/${currentRoute}`} className="hover:underline">{routeTitle}</Link>
            </div>
        }
        {
          btn?
            <DynamicBtn btnClass='place-self-center'>{btn}</DynamicBtn>
            :
            <></>
        }
      </div>
    </section>
  );
};