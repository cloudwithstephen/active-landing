import { Link } from 'react-router-dom';
import Button from '../formComponents/Button';
import MemberCard from '../MemberCard';
import { membersList } from '../../constants/member';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function MeetOurTeamSection() {
  return (
    <div id='team-section' className='general-padding py-12 md:py-20'>
      <div className='max-w-[40rem] md:mx-auto md:text-center'>
        <h3 className='section-heading'>Meet Our Team</h3>
        <p className='max-xxmd:text-sm'>
          Exceptional Talents, Exceptional Results
        </p>

        <p className='mt-6 max-xxmd:text-sm md:mt-10'>
          Get to know the faces behind our success. Our diverse team of software
          engineers, designers, and project managers is committed to delivering
          excellence.
        </p>
      </div>

      <div className='mt-12 md:flex grid grid-cols-1  w-full items-center gap-8 md:gap-2 laptop:gap-4 max-w-[70rem] mx-auto'>
        <div className='flex xmd:grid xmd:grid-cols-3 gap-2 laptop:gap-4 flex-1 max-xmd:px-1'>
          {membersList.slice(0, 6).map((member, idx) => {
            return <MemberCard member={member} key={idx} />;
          })}

<div className='flex xmd:grid xmd:grid-cols-3 gap-2 laptop:gap-4 flex-1 max-xmd:px-1'>
        <Link to={'/members'}>
            <Button className='mt-4 font-bold'>See more</Button>
          </Link>
        </div>
        </div>
       
        
      </div>
     
    </div>
  );
}
