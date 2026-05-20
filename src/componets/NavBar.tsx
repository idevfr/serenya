import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../utils/ui/Button";
function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    if (navRef.current !== null) {
      setNavHeight(navRef.current.offsetHeight);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > navHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navHeight]);
  return (
    <>
      <nav
        ref={navRef}
        className={`${isScrolled ? "sticky bg-transparent shadow-xl backdrop-blur-sm" : "relative"} top-0 z-50 flex max-w-screen items-center justify-between px-4 py-2 transition-all duration-300 sm:px-10 sm:py-6`}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          <img src="/logo.svg" alt="" className="h-6 sm:h-auto" />
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="hidden sm:block"
        >
          <ul className="flex items-center gap-4 text-lg font-semibold text-gray-600">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "text-gray-950" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "text-gray-950" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "text-gray-950" : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "text-gray-950" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="hidden sm:block"
        >
          <Button>Contact Us</Button>
        </motion.div>
        <motion.div className="block sm:hidden">
          <button
            onClick={() => setIsOpen((open) => !open)}
            className={`${isOpen ? "bg-primary text-white" : "text-black"} rotate-none cursor-pointer rounded-lg px-2 py-2 transition-all duration-300 hover:rotate-180`}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </motion.div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              backdropFilter: "grayscale(0%) blur(0px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              backdropFilter: "grayscale(70%) blur(6px)",
            }}
            exit={{
              opacity: 0,
              scale: 1,
              backdropFilter: "grayscale(0%) blur(0px)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-[${navHeight}px] z-50 flex h-screen w-full max-w-dvw items-center justify-center bg-transparent p-0`}
          >
            <ul className="flex flex-col items-center gap-6 text-2xl font-semibold tracking-wider text-gray-800 italic">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "text-gray-950" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive ? "text-gray-950" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive ? "text-gray-950" : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive ? "text-gray-950" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
