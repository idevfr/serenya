import { motion } from "motion/react";
type AnimatedLayoutProps = {
  className?: string;
};
import type { PropsWithChildren } from "react";
function AnimatedLayout({
  className,
  children,
}: PropsWithChildren<AnimatedLayoutProps>) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className || ""}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedLayout;
