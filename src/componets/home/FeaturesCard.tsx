import { motion, stagger, type Variants } from "motion/react";
import FeatureCardItem from "./FeatureCardItem";
const container: Variants = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: stagger(0.15, { startDelay: 0.4 }) },
  },
  viewport: {},
};
const item: Variants = {
  initial: { opacity: 0, rotateX: 100, scale: 0.8 },
  visible: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
const items = [
  {
    id: 1,
    title: "Clients Guided",
    description: "60k",
  },
  {
    id: 2,
    title: "Success Rate",
    description: "70%",
  },
  {
    id: 3,
    title: "Minutes of Mindfulness",
    description: "200M",
  },
];

function FeaturesCard() {
  return (
    <motion.div
      variants={container}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col items-center justify-between gap-6 text-white md:flex-row md:gap-0"
    >
      {items.map((i) => (
        <FeatureCardItem
          key={i.id}
          variant={item}
          title={i.title}
          description={i.description}
        />
      ))}
    </motion.div>
  );
}

export default FeaturesCard;
