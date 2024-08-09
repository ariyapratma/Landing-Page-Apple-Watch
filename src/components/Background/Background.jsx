import { motion } from "framer-motion";

export default function Background({ children }) {
  return (
    <motion.div
      className="flex flex-col h-screen"
      initial={{ backgroundPosition: "0% 0%" }}
      animate={{ backgroundPosition: "100% 100%" }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        background:
          "linear-gradient(45deg, #C8DCE5, #B6CCDA, #6a82fb, #fc5c7d)",
        backgroundSize: "400% 400%",
      }}
    >
      {children}
    </motion.div>
  );
}
