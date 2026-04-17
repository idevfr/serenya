import AnimatedLayout from "../../Layout/AnimatedLayout";
type FeaturesItemProps = {
  icon: string;
  title: string;
  description: string;
};
function FeaturesItem({ icon, title, description }: FeaturesItemProps) {
  return (
    <AnimatedLayout>
      <div className="flex h-60 w-80 flex-col items-center justify-center gap-2">
        <img src={icon} alt="icon-mindfulness" />
        <h3 className="text-xl">{title}</h3>
        <p className="text-center tracking-wide text-gray-600">{description}</p>
      </div>
    </AnimatedLayout>
  );
}

export default FeaturesItem;
