import { motion } from "framer-motion";
import { MemberProps } from "../constants/member";

export default function MemberCard({ member }: { member?: MemberProps }) {
  return (
    <motion.div className="rounded-2xl w-full max-xmd:min-w-[13rem] bg-grey dark:bg-secondary/10 px-3 py-4 h-full xmd:h-fit">
      <div className="h-fit w-fit mx-auto my-7 flex justify-center">
        <motion.img
          src={`/Images/members/${member?.imageUrl || "profile.png"}`}
          alt={`${member?.name} in Active Tech`}
          className="w-24 md:w-[9.5rem] xlaptop:w-[12rem] aspect-square object-cover rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="mt-4">
        <div className="md:text-lg font-semibold">{member?.name}</div>
        <div className="max-laptop:text-sm my-1 opacity-50">Expertise</div>
        <div className="text-sm flex items-center">
          {member?.skills.join(" | ")}
        </div>
      </div>
      {/* <div className='flex space-x-5 items-center mt-3'>
        {member?.github && (
          <Link
            to={`https://github.com/${member?.github}`}
            target='_blank'
            className='hover:text-secondary duration-300 transition-colors ease-in-out'
          >
            <FaGithub className='text-2xl cursor-pointer' />
          </Link>
        )}

        {member?.email && (
          <Link
            to={`mailto:${member?.email}`}
            target='_blank'
            className='hover:text-secondary duration-300 transition-colors ease-in-out'
          >
            <SiGmail className='text-2xl cursor-pointer' />
          </Link>
        )}

        {member?.linkedin && (
          <Link
            to={`https://www.linkedin.com/in/${member?.linkedin}`}
            target='_blank'
            className='hover:text-secondary duration-300 transition-colors ease-in-out'
          >
            <FaLinkedin className='text-2xl cursor-pointer' />
          </Link>
        )}
      </div> */}
    </motion.div>
  );
}
