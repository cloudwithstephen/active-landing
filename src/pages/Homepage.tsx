import AgileProcessSection from '../components/homepage/AgileProcess';
import ElevateProjects from '../components/homepage/ElevateYourProjects';
import ExploreSection from '../components/homepage/Explore';
import HeroSection from '../components/homepage/Hero';
import HiringMadeEasySection from '../components/homepage/HiringMadeEasy';
import MeetOurTeamSection from '../components/homepage/MeetOurTeam';
import Testimonials from '../components/homepage/Testimonials';
import TrustedBySection from '../components/homepage/TrustedBy';
import WhyChooseSection from '../components/homepage/WhyChoose';

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <ExploreSection />
      <WhyChooseSection />
      <HiringMadeEasySection />
      <MeetOurTeamSection />
      {/* <TrustedBySection /> */}
      <AgileProcessSection />
      <Testimonials />
      <ElevateProjects />
    </>
  );
}
