import { motion, type Variants } from "motion/react";
type FeatureCardItemProps = {
  variant: Variants;
  title: string;
  description: string;
};
function FeatureCardItem({
  variant,
  title,
  description,
}: FeatureCardItemProps) {
  return (
    <motion.div
      variants={variant}
      className="flex h-85 w-100 flex-col items-center justify-between rounded-lg bg-green-950 p-10"
    >
      <h3 className="text-lg tracking-wider">{title}</h3>
      <p className="text-5xl font-semibold tracking-tight">{description}</p>
    </motion.div>
  );
}

export default FeatureCardItem;
