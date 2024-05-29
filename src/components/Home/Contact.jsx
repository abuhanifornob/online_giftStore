import { IoIosWalk } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
const Contact = () => {
  return (
    <div className="bg-red-400 flex justify-center items-center h-32 px-10">
      <div className="w-1/4 text-center">
        <p className="text-center flex justify-center text-rose-700 text-3xl font-bold">
          <IoIosWalk />
        </p>
        <p className="text-xl font-bold ">FAST DELIVERY</p>
        <p className="text-xl font-semibold">We deliver gifts all over India</p>
      </div>
      <div className="w-1/4 text-center">
        <p className="text-center flex justify-center text-rose-700 text-3xl font-bold">
          {" "}
          <GiSelfLove />
        </p>{" "}
        <p className="text-xl font-bold">MADE IN Bangladesh</p>
        <p className="text-xl font-semibold">
          All our products are made in Bangladesh.
        </p>
      </div>
      <div className="w-1/4">
        <p className="text-center">
          {" "}
          <IoIosWalk />
        </p>
        <h3>SECURE PAYMENT</h3>
        <p>Your payment information is processed securely.</p>
      </div>
      <div className="w-1/4">
        <IoIosWalk />
        <h3>CONTACT US</h3>
        <p>
          Need to contact us? Just send us an e-mail at hanifcse90@gmail.com or
          call us at +01716203929
        </p>
      </div>
    </div>
  );
};

export default Contact;
