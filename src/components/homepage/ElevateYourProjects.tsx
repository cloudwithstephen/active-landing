import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../formComponents/Button";
import { FadeInUp } from "../AnimationWrapper";

export default function ElevateProjects() {
  return (
    <div className="lgMobile:px-7 py-12 md:py-20">
      <motion.div
        className="max-w-[60rem] mx-auto bg-dark dark:bg-secondary/10 lgMobile:rounded-2xl px-5 py-20 xxmd:py-12 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src="/Images/top-right-vector.png"
          alt="Active Tech Vectors"
          className="w-[7rem] lgMobile:w-[10rem] md:w-[15rem] laptop:w-[18rem] absolute top-0 right-0 lgMobile:rounded-tr-2xl"
          initial={{ opacity: 0, x: 50, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.img
          src="/Images/bottom-left-vector.png"
          alt="Active Tech Vectors"
          className="w-[10rem] lgMobile:w-[14rem] md:w-[18rem] absolute bottom-0 left-0"
          initial={{ opacity: 0, x: -50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <FadeInUp className="max-w-[35rem] mx-auto text-center text-white relative z-10">
          <div className="section-heading">Ready to Elevate Your Projects?</div>
          <motion.div
            className="my-6 max-xxmd:text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Reach out to us today and let's embark on a journey of excellence
            together. Your next project deserves the best!
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className="mt-6 inline-block" to={"/hire-a-talent"}>
              <Button className="mx-auto lgMobile:!text-base h-12 px-5 lgMobile:px-8 font-bold">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </FadeInUp>
      </motion.div>
    </div>
  );
}
