import icon1 from "../../assets/icons/cta-icon-1.svg";
import icon2 from "../../assets/icons/cta-icon-2.svg";
import image1 from "../../assets/images/features-cta-image-1.avif";
import image2 from "../../assets/images/features-cta-image-2.avif";
import AnimatedLayout from "../../Layout/AnimatedLayout";
function FeaturesCTA() {
  return (
    <AnimatedLayout>
      <div className="flex w-full flex-col items-center justify-between gap-20 md:flex-row">
        <div className="h-full w-full space-y-10">
          <h1 className="font-lora text-4xl/relaxed italic">
            Your Safe Space for Calm & Clarity
          </h1>
          <p className="text-gray-600">
            We believe that true healing starts with presence. <br /> Whether
            you're new to mindfulness or looking to deepen <br /> your journey,
            our space is open to you — online or in person.
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <span>
                <img src={icon1} alt="cta-icon" />
              </span>
              <span>
                Open daily from <b>7:00 AM</b> to <b>6:00 PM</b>
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <img src={icon2} alt="cta-icon" />
              </span>
              <span>Available during all open hours</span>
            </p>
            <button className="cursor-pointer rounded-lg bg-green-950 px-4 py-2 text-white">
              learn more
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center md:flex-col">
          <img
            className="w-full rounded-2xl md:w-[80%]"
            src={image1}
            alt="image of women breathing and smiling"
          />
          <img
            className="z-10 hidden w-[80%] rounded-2xl md:block md:-translate-x-72 md:-translate-y-20"
            src={image2}
            alt="image of women breathing and smiling"
          />
        </div>
      </div>
    </AnimatedLayout>
  );
}

export default FeaturesCTA;
