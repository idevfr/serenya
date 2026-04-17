import { motion } from "motion/react";
import type { PropsWithChildren } from "react";
const style = `text-background cursor-pointer rounded-lg bg-green-950 px-6 py-3 text-lg tracking-wide`;

function Button({ children }: PropsWithChildren) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, y: -1 }}
      whileTap={{ scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`${style} transition-colors duration-300 hover:bg-green-900 active:bg-green-950`}
    >
      {children}
    </motion.button>
  );
}

export default Button;
