import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Counter = () => {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });

    return animation.stop;
  }, [count]);

  return (
    <motion.div className="text-center text-4xl font-bold text-red-700">
      {roundedValue}
    </motion.div>
  );
};

export default Counter;
