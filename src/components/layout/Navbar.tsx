import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../constants/navLinks";
import Button from "../formComponents/Button";
import { IoCloseOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "../../context/theme-provider";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";
import { scrollToSectionWithOffset } from "../../helpers/scrollHelper";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const [openMenu, setOpenMenu] = useState(false);

  const logoSrc =
    theme === "dark" ? "/Images/darkLogo.png" : "/Images/lightLogo.png";

  const location = useLocation();

  useEffect(() => {
    // Extract the hash from the location (removing the '#' symbol)
    const hash = location.hash.replace("#", "");

    if (hash) {
      setTimeout(() => {
        scrollToSectionWithOffset(hash);
      }, 100);
    }
  }, [location]);

  return (
    <div className="sticky z-20 bg-white/90 dark:bg-dark/80 backdrop-blur-sm top-0 h-20 smLaptop:h-24 flex justify-between items-center general-padding">
      <Link to={"/"}>
        <img
          src={logoSrc}
          alt="Active Tech Logo"
          className="w-32 smLaptop:w-40"
        />
      </Link>

      <div className="hidden md:flex items-center space-x-4 smLaptop:space-x-6 max-smLaptop:text-xs max-desktop:text-sm desktop:space-x-8">
        {navLinks.map((link, idx) => {
          if ((link as any).href) {
            return (
              <a
                href={(link as any).href}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className="whitespace-nowrap cursor-pointer"
              >
                {link.label}
              </a>
            );
          }

          return (
            <Link
              to={`/#${(link as any).selector}`}
              key={idx}
              className="whitespace-nowrap cursor-pointer"
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="flex relative justify-end space-x-2 md:space-x-4">
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant="outline"
          className="!px-2 max-smLaptop:h-8"
        >
          {theme === "dark" ? (
            <IoMoonOutline className="text-xl" />
          ) : (
            <IoSunnyOutline className="text-xl" />
          )}
        </Button>

        <Button
          onClick={() => setOpenMenu(!openMenu)}
          variant="ghost"
          className="!px-2 max-smLaptop:h-8 md:hidden block"
        >
          <CiMenuFries className="text-2xl" />
        </Button>

        <Link to={"/hire-a-talent"}>
          <Button className="hidden md:block max-smLaptop:h-8">
            Hire A Talent
          </Button>
        </Link>
      </div>

      <AnimatePresence>
        {openMenu && (
          <MobileNav
            isMenuOpen={openMenu}
            toggleMenu={() => setOpenMenu(!openMenu)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNav({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 h-[100dvh] dark:bg-dark/50 bg-dark/20 backdrop-blur-sm w-full z-30"
      onClick={toggleMenu}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="h-fit bg-base p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end dark:text-white text-black-font">
          <motion.div
            onClick={toggleMenu}
            className="cursor-pointer p-[6px] mobile:p-[10px] md:hidden flex h-fit justify-center dark:text-white text-black"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <IoCloseOutline className="text-2xl" />
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid gap-5 place-content-center font-semibold max-mobile:text-sm text-center"
        >
          {navLinks.map((link, idx) => {
            if ((link as any).href) {
              return (
                <motion.a
                  href={(link as any).href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                  key={idx}
                  className="whitespace-nowrap"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.label}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={`/#${(link as any).selector}`}
                  onClick={toggleMenu}
                  className="whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
