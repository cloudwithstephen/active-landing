import { motion } from "framer-motion";
import { whyChooseActiveTech } from '../../constants/homepage';
import { useTheme } from '../../context/theme-provider';
import { FadeInUp, StaggerContainer, StaggerItem } from '../AnimationWrapper';

export default function WhyChooseSection() {
  const { theme } = useTheme();
  return (
    <div id='why-choose-us-section' className='general-padding py-12 md:py-20'>
      <FadeInUp className='max-w-[35rem]'>
        <h3 className='section-heading'>Why Choose Active Tech</h3>
        <p className='max-xxmd:text-sm'>
          At Active Tech, we prioritize delivering performant software solutions
          without breaking the bank. Here's why you should choose us
        </p>
      </FadeInUp>

      <StaggerContainer className='mt-14 xmd:mt-24 smLaptop:mt-32 grid md:grid-cols-3 gap-10 md:gap-2'>
        {whyChooseActiveTech.map((item, idx) => {
          return (
            <StaggerItem key={idx}>
              <motion.div
                className='bg-pale-sky rounded-lg relative p-5'
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={theme === 'dark' ? item.darkImgSrc : item.lightImgSrc}
                  alt='Active Tech vectors'
                  className='w-16 md:w-20 smLaptop:w-24 -mt-12 md:-mt-16'
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                />
                <h6 className='mt-2 card-heading'>{item.title}</h6>
                <p className='mt-4 max-md:text-sm'>{item.desc}</p>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}
