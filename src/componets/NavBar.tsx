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
  }, []);
  console.log(isScrolled);
  return (
    <nav
      ref={navRef}
      className={`${isScrolled ? "sticky bg-transparent shadow-xl backdrop-blur-sm" : "relative"} top-0 z-50 flex max-w-screen items-center justify-between overflow-hidden px-4 py-2 transition-all duration-300 sm:px-10 sm:py-6`}
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "decay", duration: 0.2, ease: "easeIn" }}
            className="bg-background absolute top-full right-0 -z-10 h-120 w-full"
          >
            <ul className="flex h-full w-full flex-col items-center justify-center gap-6 text-xl font-semibold text-gray-500">
              <li className="hover:text-gray-950">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "text-gray-950" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-gray-950">
                {" "}
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive ? "text-gray-950" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="hover:text-gray-950">
                {" "}
                <NavLink
                  to={"/blog"}
                  className={({ isActive }) =>
                    isActive ? "text-gray-950" : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="hover:text-gray-950">
                {" "}
                <NavLink
                  to={"/contact"}
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
    </nav>
  );
}

export default NavBar;
