import { motion } from "framer-motion";

const TransitionType = () => {
  return (
    <div className="m-8">
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-2xl font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          sit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta animi
          corrupti quam magnam hic iste tenetur velit, optio repellat ipsam iure
          nam dolore tempore repellendus quasi explicabo, rem praesentium
          veritatis necessitatibus architecto labore repudiandae fuga enim
          voluptatibus. Nihil, aliquam harum?
        </p>
      </motion.div>
      <br />
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <h1 className="text-2xl font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          sit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta animi
          corrupti quam magnam hic iste tenetur velit, optio repellat ipsam iure
          nam dolore tempore repellendus quasi explicabo, rem praesentium
          veritatis necessitatibus architecto labore repudiandae fuga enim
          voluptatibus. Nihil, aliquam harum?
        </p>
      </motion.div>
      <br />
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, type: "spring", bounce: 0.5 }}
      >
        <h1 className="text-2xl font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          sit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta animi
          corrupti quam magnam hic iste tenetur velit, optio repellat ipsam iure
          nam dolore tempore repellendus quasi explicabo, rem praesentium
          veritatis necessitatibus architecto labore repudiandae fuga enim
          voluptatibus. Nihil, aliquam harum?
        </p>
      </motion.div>
    </div>
  );
};

export default TransitionType;
