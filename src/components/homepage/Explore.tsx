import { motion } from "framer-motion";
import { capabilities } from "../../constants/homepage";
import { FadeInUp, StaggerContainer, StaggerItem } from "../AnimationWrapper";

export default function ExploreSection() {
  return (
    <div id="services-section" className="general-padding py-20">
      <FadeInUp className="max-w-[40rem] md:mx-auto md:text-center">
        <h3 className="section-heading">Explore Our Capabilities</h3>
        <p className="max-xxmd:text-sm">
          Discover a world of possibilities with our diverse range of services.
          From software development to creative design, product management to
          project oversight, we've got you covered.
        </p>
      </FadeInUp>

      <StaggerContainer className="mt-14 max-w-[55rem] mx-auto grid grid-cols-1 lgMobile:grid-cols-2 gap-3 lgMobile:gap-y-1">
        {capabilities.map((item, idx) => {
          return (
            <StaggerItem key={idx}>
              <motion.div
                className={` ${
                  idx === 0 ? "bg-primary text-white" : "bg-pale-sky"
                } ${
                  (idx === 1 || idx === 3) && "lgMobile:mt-3"
                } rounded-lg min-h-[9rem] lgMobile:min-h-[12rem] p-5 cursor-pointer`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h5 className="card-heading mb-4">{item.title}</h5>
                <p className="max-xxmd:text-sm">{item.description}</p>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}
