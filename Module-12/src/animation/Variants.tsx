import { motion } from "framer-motion";

const variantsX = {
  initial: {
    opacity: 0,
    x: "+100vh",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
};

const variantsY = {
  initial: {
    opacity: 0,
    y: "+100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 2,
      type: "spring",
      bounce: 0.5,
    },
  },
};

const Variants = () => {
  return (
    <div className="m-10">
      <motion.div
        variants={variantsX}
        initial={"initial"}
        animate={"animate"}
        className="flex flex-col justify-end bg-purple-400 rounded"
      >
        <h1 className="p-2 rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ratione?
        </h1>
        <p className="p-2 rounded">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quos
          rem aspernatur delectus alias quas voluptas, blanditiis necessitatibus
          unde accusamus natus quisquam sit, ut optio?
        </p>
      </motion.div>
      <motion.div
        variants={variantsY}
        initial={"initial"}
        animate={"animate"}
        className="w-40 h-40 rounded-full bg-yellow-700"
      >
        🟢
      </motion.div>
    </div>
  );
};

export default Variants;
