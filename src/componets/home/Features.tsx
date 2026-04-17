import AnimatedLayout from "../../Layout/AnimatedLayout";
import ContainerLayout from "../../Layout/ContainerLayout";
import { motion } from "motion/react";
import mindfulnessIcon from "../../assets/icons/mindfullnessIcon.svg";
import balanceIcon from "../../assets/icons/balanceIcon.svg";
import communityIcon from "../../assets/icons/communityIcon.svg";
import emotionalHealthIcon from "../../assets/icons/emotionalHealthIcon.svg";
import growthIcon from "../../assets/icons/growthIcon.svg";
import wellnessIcon from "../../assets/icons/wellnessIcon.svg";
import FeaturesItem from "./FeaturesItem";
function Features() {
  return (
    <ContainerLayout>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className="h-px bg-gray-400"
      ></motion.div>

      <div className="grid grid-cols-3 place-items-center justify-center gap-y-20 p-10">
        <FeaturesItem
          icon={mindfulnessIcon}
          title="Mindfulness"
          description="Learn to reconnect with the present moment through calming breath."
        />
        <FeaturesItem
          icon={wellnessIcon}
          title="Wellness Coaching"
          description="One-on-one sessions tailored to your unique needs, helping you build."
        />
        <FeaturesItem
          icon={emotionalHealthIcon}
          title="Emotional Healing"
          description="Safe, compassionate space to explore emotions, release old."
        />
        <FeaturesItem
          icon={growthIcon}
          title="Growth"
          description="Support through life transitions, identity shifts, or burnout recovery."
        />
        <FeaturesItem
          icon={communityIcon}
          title="Community"
          description="Group circles, workshops, and guided practices to remind you."
        />
        <FeaturesItem
          icon={balanceIcon}
          title="Balance & Longevity"
          description="Wellness routines and rituals that promote long-term harmony between."
        />
      </div>
    </ContainerLayout>
  );
}

export default Features;
