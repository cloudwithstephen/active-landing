import { navLinks } from '../../constants/navLinks';
import Button from '../Button';
import { IoCloseOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useTheme } from '../../context/theme-provider';
import { CiMenuFries } from 'react-icons/ci';
import { useState } from 'react';
import { scrollToSectionWithOffset } from '../../helpers/scrollHelper';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const [openMenu, setOpenMenu] = useState(false);

  const logoSrc =
    theme === 'dark' ? '/Images/darkLogo.png' : '/Images/lightLogo.png';

  return (
    <div className='sticky z-20 bg-white/90 dark:bg-dark/80 backdrop-blur-sm top-0 h-20 smLaptop:h-24 flex justify-between items-center general-padding'>
      <img
        src={logoSrc}
        alt='Active Tech Logo'
        className='w-32 smLaptop:w-40'
      />

      <div className='hidden md:flex items-center space-x-4 smLaptop:space-x-6 max-smLaptop:text-xs max-desktop:text-sm desktop:space-x-8'>
        {navLinks.map((link, idx) => {
          return (
            <div
              onClick={() => scrollToSectionWithOffset(link.selector)}
              key={idx}
              className='whitespace-nowrap'
            >
              {link.label}
            </div>
          );
        })}
      </div>

      <div className='flex relative justify-end space-x-2 md:space-x-4'>
        <Button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          variant='outline'
          className='!px-2 max-smLaptop:h-8'
        >
          {theme === 'dark' ? (
            <IoMoonOutline className='text-xl' />
          ) : (
            <IoSunnyOutline className='text-xl' />
          )}
        </Button>

        <Button
          onClick={() => setOpenMenu(!openMenu)}
          variant='ghost'
          className='!px-2 max-smLaptop:h-8 md:hidden block'
        >
          <CiMenuFries className='text-2xl' />
        </Button>

        <Button className='hidden md:block max-smLaptop:h-8'>
          Hire A Talent
        </Button>
      </div>

      <MobileNav
        isMenuOpen={openMenu}
        toggleMenu={() => setOpenMenu(!openMenu)}
      />
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
    <div
      className={`overflow-hidden transition-all ease-in  ${
        isMenuOpen
          ? 'fixed top-0 left-0 !h-[100dvh] dark:bg-dark/50 bg-dark/20 backdrop-blur-sm w-full z-30 duration-500'
          : 'h-0 hidden'
      }`}
      onClick={toggleMenu}
    >
      <div className='h-fit bg-base p-5' onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-end dark:text-white text-black-font'>
          <div
            onClick={toggleMenu}
            className='cursor-pointer p-[6px] mobile:p-[10px] md:hidden flex h-fit justify-center dark:text-white text-black'
          >
            <IoCloseOutline className='text-2xl' />
          </div>
        </div>
        <div className='grid gap-5 place-content-center font-semibold max-mobile:text-sm text-center'>
          {navLinks.map((link, idx) => {
            return (
              <div
                onClick={() => {
                  toggleMenu();
                  scrollToSectionWithOffset(link.selector);
                }}
                // href={link.selector}
                // onClick={toggleMenu}
                key={idx}
                className='whitespace-nowrap'
              >
                {link.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
