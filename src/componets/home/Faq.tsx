import { PlusCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import ContainerLayout from "../../Layout/ContainerLayout";
import { useState } from "react";
import AnimatedLayout from "../../Layout/AnimatedLayout";

// header Questions? We’re Here to Help you get started.
// p Whether you’re new to wellness or exploring deeper support, we know you may have questions.
// p Can’t find the answer you’re looking for? Please chat to our friendly team. contact us button

const items = [
  {
    id: 1,
    title: "What can I expect during a session?",
    description:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    title: "Do I need prior experience with meditation or coaching?",
    description:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 3,
    title: "Are sessions online or in-person?",
    description:
      "Our sessions are primarily conducted online, allowing you to join from the comfort of your home. In-person sessions may be available depending on your location and coach availability.",
  },
  {
    id: 4,
    title: "How long is each session?",
    description:
      "Each session typically lasts between 45 to 60 minutes, giving you enough time to explore your goals, reflect, and receive personalized guidance.",
  },
  {
    id: 5,
    title: "What can I expect during a session?",
    description:
      "During each session, you'll engage in guided conversations, practical exercises, and reflection techniques tailored to your personal goals and challenges.",
  },
];
function Faq() {
  const [curActive, setCurActive] = useState<number>();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <AnimatedLayout>
      <ContainerLayout>
        <div className="space-y-20">
          <div className="w-full space-y-6 md:w-100">
            <h2 className="font-lora text-4xl italic">
              Questions? We're Here to Help you get started.
            </h2>
            <p className="ml-4 text-gray-600">
              Whether you’re new to wellness or exploring deeper support, we
              know you may have questions.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <ul className="flex w-full flex-col items-start gap-6">
              {items.map((item, i) => {
                const isOdd = i % 2 === 0;
                return (
                  <AnimatePresence key={item.id} mode="popLayout">
                    <motion.li
                      layout={"preserve-aspect"}
                      onClick={() => {
                        setCurActive(item.id);
                        setOpen((open) => !open);
                      }}
                      className={`w-full ${isOdd ? "bg-white/50" : ""} cursor-pointer rounded-xl border border-gray-300 px-4 py-4 md:py-10`}
                    >
                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-lg font-semibold">
                          <PlusCircle className="h-6 w-6" /> {item.title}
                        </h4>
                        {curActive === item.id && open && (
                          <motion.p
                            layout
                            className="text-md pl-6 text-gray-600"
                          >
                            {item.description}
                          </motion.p>
                        )}
                      </div>
                    </motion.li>
                  </AnimatePresence>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between md:gap-0 lg:px-10">
            <p className="text-center text-gray-600">
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
            <button className="text-background rounded-lg bg-green-950 px-3 py-2">
              Contact us
            </button>
          </div>
        </div>
      </ContainerLayout>
    </AnimatedLayout>
  );
}

export default Faq;
