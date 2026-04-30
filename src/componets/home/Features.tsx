import ContainerLayout from "../../Layout/ContainerLayout";
import { motion } from "motion/react";
import FeaturesCard from "./FeaturesCard";
import FeaturesItems from "./FeaturesItems";
import FeaturesCTA from "./FeaturesCTA";
function Features() {
  return (
    <ContainerLayout>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className="h-px bg-gray-400"
      ></motion.div>
      <div className="space-y-32">
        <FeaturesItems />
        <FeaturesCard />
        <FeaturesCTA />
      </div>
    </ContainerLayout>
  );
}

export default Features;
