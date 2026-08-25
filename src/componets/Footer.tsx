import ButtonCTA from "@/utils/ui/ButtonCTA";

function Footer() {
  return (
    <div className="">
      <div className="relative h-dvh bg-[url(/footer-cta-bg.avif)] bg-cover bg-center">
        <div className="absolute inset-0 bg-green-950/20"></div>
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-6">
            <h3 className="font-lora text-center text-4xl/10 font-semibold text-white">
              Start Your Healing <br /> Journey Today...
            </h3>
            <p className="text-center tracking-wide text-white">
              Let’s take the first step together toward clarity, calm, <br />
              and personal growth.
            </p>
            <ButtonCTA />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-50 bg-linear-to-b from-white to-transparent"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-100 bg-linear-to-t from-green-950 to-transparent"></div>
      </div>
      <div>Footer</div>
    </div>
  );
}

export default Footer;
