import { motion } from "framer-motion";

const Button = () => {
  return (
    <div>
      <motion.button
        whileHover={{
          scale: 0.8,
          transition: { yoyo: Infinity },
        }}
        className="py-2 px-4 rounded bg-purple-600 text-white"
      >
      while hover
      </motion.button>
      {"    "}
      <motion.button
        whileTap={{ scale: 0.6, transition: { duration: 1 } }}
        className="py-2 px-4 rounded bg-purple-600 text-white"
      >
       while tab
      </motion.button>
    </div>
  );
};

export default Button;
