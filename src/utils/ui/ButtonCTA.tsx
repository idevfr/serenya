import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
const button: Variants = {
  initial: {
    backgroundColor: "#fff",
  },
  hover: { y: 1, scale: 1.02 },
  tap: {
    y: -1,
    scale: 0.95,
    transition: { type: "spring", damping: 20, stiffness: 300 },
    backgroundColor: "oklch(98.7% 0.022 95.277) ",
  },
};
const itemLeft: Variants = {
  initial: { x: -10, opacity: 0 },
  hover: { x: 0, opacity: 1 },
  tap: {},
};
const itemMiddle: Variants = {
  initial: { x: -20 },
  hover: { x: 20 },
  tap: {},
};
const itemRight: Variants = {
  initial: { x: 0, opacity: 1 },
  hover: { x: 10, opacity: 0 },
  tap: {},
};

function ButtonCTA() {
  return (
    <motion.button
      variants={button}
      initial="initial"
      whileHover={"hover"}
      whileTap={"tap"}
      className="group flex w-fit cursor-pointer items-center gap-2 rounded-xl border-2 px-4 py-3 text-lg tracking-wide hover:shadow-md hover:shadow-amber-100 active:bg-amber-50"
    >
      <motion.span
        variants={itemLeft}
        className="bg-primary rounded-xl p-2 text-white"
      >
        <ArrowRight />
      </motion.span>
      <motion.span variants={itemMiddle}>Book free consultation</motion.span>
      <motion.span
        variants={itemRight}
        className="bg-primary rounded-xl p-2 text-white"
      >
        <ArrowRight />
      </motion.span>
    </motion.button>
  );
}

export default ButtonCTA;
