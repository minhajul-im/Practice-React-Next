import { motion } from "framer-motion";

const Text = () => {
  const title = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure assumenda tenetur rtis numquam libero?`;

  return (
    <div>
      <p className="text-3xl font-bold text-center text-blue-800">
        {title.split(" ").map((word, index) => (
          <motion.span
            key={word + index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index / 10 }}
          >
            {word + " "}{" "}
          </motion.span>
        ))}
      </p>
    </div>
  );
};

export default Text;
