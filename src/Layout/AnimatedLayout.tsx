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
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={className || ""}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedLayout;
