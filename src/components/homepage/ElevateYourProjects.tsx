import { Link } from 'react-router-dom';
import Button from '../formComponents/Button';

export default function ElevateProjects() {
  return (
    <div className='lgMobile:px-7 py-12 md:py-20'>
      <div className='max-w-[60rem] mx-auto bg-dark dark:bg-secondary/10 lgMobile:rounded-2xl px-5 py-20 xxmd:py-12 relative'>
        <img
          src='/Images/top-right-vector.png'
          alt='Active Tech Vectors'
          className='w-[7rem] lgMobile:w-[10rem] md:w-[15rem] laptop:w-[18rem] absolute top-0 right-0 lgMobile:rounded-tr-2xl'
        />
        <img
          src='/Images/bottom-left-vector.png'
          alt='Active Tech Vectors'
          className='w-[10rem] lgMobile:w-[14rem] md:w-[18rem] absolute bottom-0 left-0'
        />

        <div className='max-w-[35rem] mx-auto text-center text-white'>
          <div className='section-heading'>Ready to Elevate Your Projects?</div>
          <div className='my-6 max-xxmd:text-sm'>
            Reach out to us today and let's embark on a journey of excellence
            together. Your next project deserves the best!
          </div>

          <Link className='mt-6' to={'/hire-a-talent'}>
            <Button className=' mx-auto lgMobile:!text-base h-12 px-5 lgMobile:px-8 font-bold'>
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
