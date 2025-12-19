import AgileProcessSection from "../components/homepage/AgileProcess";
import ElevateProjects from "../components/homepage/ElevateYourProjects";
import ExploreSection from "../components/homepage/Explore";
import HeroSection from "../components/homepage/Hero";
import HiringMadeEasySection from "../components/homepage/HiringMadeEasy";
import MeetOurTeamSection from "../components/homepage/MeetOurTeam";
import Testimonials from "../components/homepage/Testimonials";
import TrustedBySection from "../components/homepage/TrustedBy";
import WhyChooseSection from "../components/homepage/WhyChoose";
import YouTubeVideoSection from "../components/homepage/YouTubeVideo";
import SEO from "../components/SEO";

export default function Homepage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Active Technologies",
    url: "https://activetech.com",
    description:
      "Expert software engineers and tech talent in Nigeria providing development, design, and project management services",
    logo: "https://activetech.com/Images/darkLogo.png",
    sameAs: [
      "https://www.facebook.com/active-technologies",
      "https://www.twitter.com/active-technologies",
      "https://www.linkedin.com/company/active-technologies",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "",
      contactType: "Customer Service",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
      addressRegion: "Lagos",
    },
  };

  return (
    <>
      <SEO
        title="Active Technologies - Hire Expert Software Engineers Globally"
        description="Turn your idea into a thriving business with Active Technologies. We provide highly skilled software engineers, developers, designers, and project managers in Nigeria. Expert tech talent for all your development needs."
        keywords="software engineers Nigeria, hire developers, tech talent, outsource project, software development services, product management, design services"
        url="/"
        type="website"
        structuredData={organizationSchema}
      />
      <HeroSection />
      <ExploreSection />
      <YouTubeVideoSection
        videoUrl="https://youtu.be/XVDXlmtoEAk?si=lS_G5Cfy2whomHnU"
        title="Watch Our Story"
        description="Discover how we help businesses transform their ideas into thriving enterprises."
      />
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
