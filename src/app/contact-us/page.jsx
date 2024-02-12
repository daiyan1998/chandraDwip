import Form from "@/components/shared/Form";
import GetinTouch from "@/components/shared/GetinTouch";

const Contactpage = () => {
  return (
    <div>
      <section className="h-[60vh] flex justify-center items-center bg-footer-texture bg-cover">
        <div className="text-white flex flex-col gap-6 text-center md:w-[40%]">
          <h1 className="text-6xl font-bold ">Contact Us</h1>
          <p className="text-lg">Home / Contact-Us</p>
        </div>
      </section>
      <div className="grid lg:grid-cols-2 my-10 max-w-7xl mx-auto">
        <Form></Form>
        <GetinTouch></GetinTouch>
      </div>
      <div className="my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14609.409802059195!2d90.39194770755131!3d23.734807851846575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b94800370d23%3A0x4d912e204c495066!2sEastern%20Arzoo%20Tower!5e0!3m2!1sen!2sbd!4v1707397445925!5m2!1sen!2sbd"
          style={{ border: "" }}
          className="rounded-lg px-4 w-[100%] h-[300px]  "
        ></iframe>
      </div>
    </div>
  );
};

export default Contactpage;
