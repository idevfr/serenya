import ButtonCTA from "@/utils/ui/ButtonCTA";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="">
      <div className="relative h-dvh bg-[url(/footer-cta-bg.avif)] bg-cover bg-center">
        <div className="absolute inset-0 bg-green-950/20"></div>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
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
      <div className="flex h-auto flex-col items-center justify-between gap-10 bg-green-950 px-10 py-30 text-white sm:h-100 sm:flex-row sm:items-baseline sm:justify-end sm:px-30">
        <div className="w-full space-y-6 sm:w-[40%]">
          <p className="font-lora text-xl tracking-wider">
            Join our newsletter.
          </p>

          <div className="flex flex-col gap-3.5">
            <input
              className="bg-background h-12 w-full rounded-sm px-2.5 text-xl text-black sm:w-80"
              type="text"
            />
            <button className="h-10 w-32 rounded-sm border-white bg-green-800 p-2 text-black">
              Sign Up
            </button>
          </div>
          <div className="space-x-2.5 text-white">
            <Link to={"#"}>In</Link>
            <Link to={"#"}>Twi</Link>
            <Link to={"#"}>Mail</Link>
          </div>
        </div>
        <div className="font-lora flex h-auto w-full flex-col gap-6 sm:h-full sm:flex-1 sm:flex-row sm:justify-end sm:gap-32">
          <div className="space-y-4">
            <p className="text-xl">Company</p>
            <div className="ml-1 flex flex-col gap-0.5">
              <Link to={"#"}>Home</Link>
              <Link to={"#"}>About</Link>
              <Link to={"#"}>Blog</Link>
              <Link to={"#"}>Contact</Link>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xl">Social media</p>
            <div className="ml-1 flex flex-col gap-0.5">
              <Link to={"#"}>Facebook</Link>
              <Link to={"#"}>Instagram</Link>
              <Link to={"#"}>Twitter</Link>
              <Link to={"#"}>Linkedin</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
