import { agileProcesses, whyChooseAgile } from '../../constants/homepage';
import { useTheme } from '../../context/theme-provider';
import useDimension from '../../hooks/useDimension';

export default function AgileProcessSection() {
  const { theme } = useTheme();

  const { width } = useDimension();

  const isTabletView = width < 840;

  const logoSrc =
    theme === 'dark' ? '/Images/darkLogo.png' : '/Images/lightLogo.png';
  return (
    <div id='agile-process-section' className='general-padding py-12 md:py-20'>
      <div className='max-w-[100rem]'>
        <h3 className='section-heading'>Our Methodology</h3>
        <h4 className='max-xxmd:text-sm'>We're Lean and Agile</h4>

        <p className='mt-6 max-xxmd:text-sm'>
        We embrace the Lean methodology to deliver maximum value with minimal waste, focusing on rapid iterations and continuous improvement. Our Agile approach ensures flexibility and collaboration, allowing us to adapt quickly to your needs and deliver high-quality solutions efficiently.
         By combining these methodologies, we streamline the development process, enhance communication, and drive successful outcomes for your projects.
        </p>
      </div>

      {!isTabletView ? (
        <div className='w-full mt-20 mb-48'>
          <div className='max-w-[37rem] xlaptop:max-w-[45rem] desktop:max-w-[60rem] w-full mx-auto h-[850px] desktop:h-[1000px] border border-black dark:border-pale-sky/50 rounded-[12rem] flex justify-center items-center relative'>
            <img
              src={logoSrc}
              alt='Active Tech Logo'
              className='w-44 desktop:w-56'
            />

            {agileProcesses.map((process, idx) => {
              return (
                <div
                  key={idx}
                  className={`absolute ${process.containerStyle}  text-center max-w-[15rem] smLaptop:max-w-[20rem] desktop:max-w-[25rem]`}
                >
                  {idx !== 0 && idx !== 3 && (
                    <svg
                      className={`w-2 h-2 absolute ${process.iconStyle}`}
                      viewBox='0 0 10 10'
                      fill='currentColor'
                    >
                      <polygon points='0,10 10,5 0,0' />
                    </svg>
                  )}
                  <div className='mx-auto bg-base px-14 py-2 smLaptop:py-4 w-fit relative'>
                    {(idx === 0 || idx === 3) && (
                      <svg
                        className={`w-2 h-2 absolute ${process.iconStyle}`}
                        viewBox='0 0 10 10'
                        fill='currentColor'
                      >
                        <polygon points='0,10 10,5 0,0' />
                      </svg>
                    )}
                    <img
                      src='/Images/normalOverlay.png'
                      alt='Active Tech Vector'
                      className='w-8 smLaptop:w-10 desktop:w-12 -rotate-45 '
                    />
                  </div>
                  <div className='smLaptop:text-xl text-lg font-bold'>
                    {process.title}
                  </div>
                  <div className='mt-2 grid gap-2'>
                    {process.desc.map((text, index) => {
                      return (
                        <div key={index} className='max-desktop:text-sm'>
                          {text}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className='mt-20 grid grid-cols-1 xmd:grid-cols-2 gap-x-5 smLaptop:gap-x-10'>
          {agileProcesses.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`ml-5 relative ${idx === 5 && '!border-none'} ${
                  idx === 4 && '!border-l  xmd:!border-none'
                } border-l dark:border-pale-sky/50 border-dashed pl-8 smLaptop:pl-12 md:pr-4 desktop:px-16 pb-8 xmd:pb-14 md:pb-20 xlaptop:pb-28`}
              >
                <img
                  src='/Images/normalOverlay.png'
                  alt='Active Tech Vector'
                  className='w-10 smLaptop:w-12 absolute top-0 left-0 -translate-x-1/2 -rotate-45'
                />
                <div className='card-heading'>{item.title}</div>
                <div className='mt-2 xmd:mt-4 grid gap-2'>
                  {item.desc.map((text, index) => {
                    return (
                      <div key={index} className='max-smLaptop:text-sm'>
                        {text}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className='mt-10 mobile:mt-16'>
        <h3 className='section-heading'>Why Choose Agile with Active Tech</h3>
        <div className='my-5 grid grid-cols-1 mobile:grid-cols-2 smLaptop:grid-cols-3 gap-4 relative overflow-hidden'>
          <div className='absolute rounded-md z-10 inset-0 bg-gradient-to-r from-transparent via-white/80 dark:via-black/60 to-transparent bg-no-repeat animate-slide'></div>
          {[...Array(3)].map((_, idx) => {
            return (
              <div
                key={idx}
                className={` 
                ${idx === 0 && 'bg-primary max-smLaptop:hidden'} 
                ${idx === 1 && 'bg-gradient-to-r from-primary to-secondary'} 
                ${idx === 2 && 'bg-secondary max-mobile:hidden'}
                   h-2 rounded-md relative overflow-hidden `}
              ></div>
            );
          })}
        </div>

        <div className='mt-6 mobile:mt-10 grid grid-cols-1 mobile:grid-cols-2 smLaptop:grid-cols-3 gap-4 gap-y-6 xxmd:gap-y-10'>
          {whyChooseAgile.map((item, idx) => {
            return (
              <div
                key={idx}
                className='p-[1.5px] bg-gradient-to-r from-primary to-secondary rounded-2xl'
              >
                <div className='bg-white dark:bg-dark rounded-2xl h-full p-5'>
                  <div className='card-heading'>{item.title}</div>

                  <div className='mt-2 xxmd:mt-4 max-xxmd:text-sm'>
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
