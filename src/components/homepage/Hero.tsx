import { Link } from 'react-router-dom';
import useDimension from '../../hooks/useDimension';
import Button from '../formComponents/Button';

export default function HeroSection() {
  const { width } = useDimension();
  const isMobile = width < 560;

  const heroSrc = isMobile
    ? '/Images/mobileHero.png'
    : '/Images/desktopHero.png';

  return (
    <div className=''>
      <div className='flex max-laptop:flex-col mt-3 xmd:mt-6 laptop:mt-12 general-padding  max-laptop:gap-4 max-xlaptop:items-center'>
        <div className='w-full text-left mobile:text-center laptop:text-left max-laptop:max-w-[45rem] max-laptop:mx-auto laptop:w-[60%] xlaptop:flex-1 desktop:w-[55%] mt-5 xmd:mt-10 '>
          <h1 className='text-[2.4rem] mobile:text-[2.75rem] lgMobile:text-5xl desktop:text-6xl lgDesktop:text-7xl leading-tight desktop:leading-none lgDesktop:leading-tight font-bold'>
            Tech <span className='text-primary'>Innovation</span> Knows No
            Boundaries
          </h1>
          <p className='my-6 max-lgMobile:text-sm font-medium'>
            Active tech is your gateway to highly skilled software engineers in
            Nigeria. We specialize in providing top-tier talent for a variety of
            services, including development, design, product management, project
            management, and more.
          </p>

          <div className='mt-8 laptop:mt-6 flex max-mobile:flex-col max-mobile:space-y-4 max-mobile:max-w-[12rem] max-laptop:justify-center mobile:space-x-5 mb-10'>
            <Link to={'/hire-a-talent'}>
              <Button className='h-12 !px-3 mobile:!px-7 text-base'>
                Hire A Talent Now
              </Button>
            </Link>

            <Link to={'/outsource-project'}>
              <Button variant='link' className='text-base'>
                Outsource Project
              </Button>
            </Link>
          </div>
        </div>

        <div className='flex-1 h-full'>
          <img
            src={heroSrc}
            alt='Active Tech'
            className='w-[24rem] xxmd:w-[30rem] laptop:w-full'
          />
        </div>
      </div>

      <div className='py-4 bg-pale-sky general-padding flex items-center'>
        <div className='hidden mobile:block italic max-lgMobile:text-xs max-md:text-sm max-w-[18rem] font-semibold'>
          We're proud to be trusted by reputable businesses.
        </div>

        <div className='flex justify-between items-center max-w-[50rem] mx-auto w-full'>
          <img
            src='/Images/companies/buzzme.png'
            alt='Active Tech Customers/Business'
            className='w-20 xmd:w-28 md:w-36 bg-dark dark:bg-transparent'
          />
          {[...Array(2)].map((_, idx) => {
            return (
              <img
                key={idx}
                src='/Images/company.png'
                alt='Active Tech Customers/Business'
                className='w-20 xmd:w-28 md:w-36'
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
