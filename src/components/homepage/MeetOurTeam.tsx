import { Link } from "react-router-dom";
import Button from "../formComponents/Button";
import MemberCard from "../MemberCard";
import { membersList } from "../../constants/member";
import { FadeInUp, StaggerContainer, StaggerItem } from "../AnimationWrapper";

export default function MeetOurTeamSection() {
  return (
    <div id="team-section" className="general-padding py-12 md:py-20">
      <FadeInUp className="max-w-[40rem] md:mx-auto md:text-center">
        <h3 className="section-heading">Meet Our Team</h3>
        <p className="max-xxmd:text-sm">
          Exceptional Talents, Exceptional Results
        </p>

        <p className="mt-6 max-xxmd:text-sm md:mt-10">
          Get to know the faces behind our success. Our diverse team of software
          engineers, designers, and project managers is committed to delivering
          excellence.
        </p>
      </FadeInUp>

      <div className="mt-12 w-full max-w-[70rem] mx-auto overflow-x-hidden">
        <StaggerContainer className="grid grid-cols-1 xmd:grid-cols-3 gap-2 laptop:gap-4 max-xmd:px-1">
          {membersList.slice(0, 6).map((member, idx) => {
            return (
              <StaggerItem key={idx}>
                <MemberCard member={member} />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
        <FadeInUp
          delay={0.3}
          className="flex justify-center xmd:justify-start mt-4 max-xmd:px-1"
        >
          <Link to={"/members"}>
            <Button className="font-bold transition-transform hover:scale-105">
              See more
            </Button>
          </Link>
        </FadeInUp>
      </div>
    </div>
  );
}
