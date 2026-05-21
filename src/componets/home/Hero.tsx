import AnimatedLayout from "../../Layout/AnimatedLayout";
import ButtonCTA from "../../utils/ui/ButtonCTA";
import heroImage from "../../assets/images/hero-image.jpg";
function Hero() {
  return (
    <div className="flex flex-col items-center gap-10 px-10 py-10 sm:px-16 md:flex-row md:gap-20 lg:px-32">
      <AnimatedLayout className="flex-1 space-y-10 px-0 lg:px-20">
        <div className="flex flex-col gap-4 px-0 md:gap-6">
          <h1 className="font-lora text-5xl sm:text-2xl md:text-5xl">
            <em>Embrace</em> Your Journey to <em>Inner Peace</em>
          </h1>
          <p className="text-lg text-gray-600">
            Personalized wellness coaching to help you find balance, clarity,
            and vitality in everyday life.
          </p>
        </div>
        <ButtonCTA />
      </AnimatedLayout>
      <AnimatedLayout className="flex-1">
        <img
          className="flex h-fit w-auto items-center justify-center rounded-2xl md:h-full"
          src={heroImage}
          alt="women smiling at camera"
        />
      </AnimatedLayout>
    </div>
  );
}

export default Hero;
