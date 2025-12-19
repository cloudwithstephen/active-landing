import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useDimension from "../../hooks/useDimension";
import Button from "../formComponents/Button";
import { FadeInUp, SlideIn } from "../AnimationWrapper";

export default function HeroSection() {
  const { width } = useDimension();
  const isMobile = width < 560;

  const heroSrc = isMobile
    ? "/Images/mobileHero.png"
    : "/Images/desktopHero.png";

  return (
    <div className="">
      <div className="flex max-laptop:flex-col mt-3 xmd:mt-6 laptop:mt-12 general-padding  max-laptop:gap-4 max-xlaptop:items-center">
        <FadeInUp className="w-full text-left mobile:text-center laptop:text-left max-laptop:max-w-[45rem] max-laptop:mx-auto laptop:w-[60%] xlaptop:flex-1 desktop:w-[55%] mt-5 xmd:mt-10 ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[2.4rem] mobile:text-[2.75rem] lgMobile:text-5xl desktop:text-6xl lgDesktop:text-7xl leading-tight desktop:leading-none lgDesktop:leading-tight font-bold"
          >
            Turn Your <span className="text-primary">Idea</span> into a Thriving{" "}
            <span className="text-primary">Business.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="my-6 max-lgMobile:text-sm font-medium"
          >
            At Active Technologies, we provide the tech needed to transform
            ideas into thriving enterprises. We make the process efficient and
            cost-effective with our experienced team of engineers and project
            managers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 laptop:mt-6 flex max-mobile:flex-col max-mobile:space-y-4 max-mobile:max-w-[12rem] max-laptop:justify-center mobile:space-x-5 mb-10"
          >
            <Link to={"/hire-a-talent"}>
              <Button className="h-12 !px-3 mobile:!px-7 text-base transition-transform hover:scale-105">
                Get Started
              </Button>
            </Link>

            <Link to={"/#testimonials"}>
              <Button
                variant="outline"
                className="h-12 !px-3 mobile:!px-7 text-base transition-transform hover:scale-105"
              >
                See Success Stories
              </Button>
            </Link>
          </motion.div>
        </FadeInUp>

        <SlideIn direction="right" delay={0.3} className="flex-1 h-full">
          <motion.img
            src={heroSrc}
            alt="Active Tech"
            className="w-[24rem] xxmd:w-[30rem] laptop:w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </SlideIn>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="py-4 bg-pale-sky general-padding flex items-center"
      >
        <div className="hidden mobile:block italic max-lgMobile:text-xs max-md:text-sm max-w-[18rem] font-semibold">
          We're proud to be trusted by reputable businesses.
        </div>

        <div className="flex justify-between items-center max-w-[50rem] mx-auto w-full">
          <motion.img
            src="/Images/companies/buzzme.png"
            alt="Active Tech Customers/Business"
            className="w-20 xmd:w-28 md:w-36 bg-dark dark:bg-transparent"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="/Images/companies/ilerah_logo.png"
            alt="Active Tech Customers/Business"
            className="w-20 xmd:w-28 md:w-36  dark:bg-transparent"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/Images/companies/logo.webp"
              alt="Eduvacity logo"
              className="w-3 xmd:w-4 md:w-5"
            />
            <span className="text-sm md:text-base font-semibold">Livemore</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
