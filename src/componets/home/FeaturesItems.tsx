import FeaturesItem from "./FeaturesItem";
import mindfulnessIcon from "../../assets/icons/mindfullnessIcon.svg";
import balanceIcon from "../../assets/icons/balanceIcon.svg";
import communityIcon from "../../assets/icons/communityIcon.svg";
import emotionalHealthIcon from "../../assets/icons/emotionalHealthIcon.svg";
import growthIcon from "../../assets/icons/growthIcon.svg";
import wellnessIcon from "../../assets/icons/wellnessIcon.svg";
function FeaturesItems() {
  return (
    <div className="grid w-full grid-cols-1 place-items-center justify-between p-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-y-20">
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
  );
}

export default FeaturesItems;
