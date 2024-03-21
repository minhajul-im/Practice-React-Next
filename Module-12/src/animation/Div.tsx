import { motion } from "framer-motion";

const Div = () => {
  return (
    <div>
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{
          scale: 1,
        }}
        transition={{ duration: 2 }}
        className="w-52 h-52 rounded-full bg-red-500 text-yellow-500 flex justify-center items-center"
      >
        <h1 className="font-bold text-2xl">Hello Motions</h1>
      </motion.div>
      <motion.div
        animate={{
          borderRadius: ["15%", "30%", "45%", "60%", "75%", "90%", "100%"],
          scale: [0.5, 0.7, 0.9, 1, 0.9, 0.7, 0.5],
          rotate: [90, 120, 160, 180, 220, 260, 360],
        }}
        transition={{ duration: 2 }}
        className="w-52 h-52 rounded-full bg-red-500 text-yellow-500 flex justify-center items-center"
      >
        <h1 className="font-bold text-2xl">Hello Motions</h1>
      </motion.div>
    </div>
  );
};

export default Div;
