import ButtonBuyNow from "../ButtonBuyNow/ButtonBuyNow";
import { motion } from "framer-motion";

export default function Title() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-full p-4 md:p-8 lg:p-16">
      {/* Text Section */}
      <div className="flex flex-col max-w-xl text-center md:text-left">
        <h1 className="text-3xl md:text-5xl lg:text-5xl text-white font-poppins font-bold mb-2 md:mb-4 pt-24">
          The Perfect Moment
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-5xl text-white font-poppins font-regular mb-2 md:mb-4">
          Between Past And <br /> Future.
        </h1>

        {/* Button placed directly under the text */}
        <div className="flex justify-center md:justify-start mt-8">
          <ButtonBuyNow />
        </div>
      </div>

      <div className="flex items-center mt-4 md:mt-0 relative">
        <motion.img
          src="/public/Watch.png"
          alt="Watch"
          className="w-auto md:w-64 lg:w-auto"
          initial={{ filter: "brightness(0.8)" }}
          whileHover={{
            scale: 1.05,
            filter:
              "brightness(1.2) drop-shadow(0px 0px 10px rgba(0, 255, 255, 0.5))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>
    </div>
  );
}
