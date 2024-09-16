import HireTalentForm from '../components/forms/HireTalent';

export default function HireATalentPage() {
  return (
    <div className='py-12 md:py-20 general-padding'>
      <div className='flex max-laptop:flex-col items-center max-laptop:space-y-6 '>
        <div className='max-w-[35rem] max-laptop:mx-auto max-laptop:text-center'>
          <div className='text-2xl lgMobile:text-3xl xxmd:text-4xl font-bold mb-3'>
          Get in Touch with Us
          </div>
          <div className='my-3 lgMobile:my-6 max-xxmd:text-sm'>
          Have a project in mind or need more information? Fill out the form below, and our team will get back to you promptly. We’re here to help you turn your ideas into reality with expert support and cutting-edge technology.
          </div>
        </div>

        <div className=' flex-1'>
          <HireTalentForm />
        </div>
      </div>
    </div>
  );
}
