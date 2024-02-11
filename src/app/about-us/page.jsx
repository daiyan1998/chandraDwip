import DynamicSection from "@/components/DynamicSection/DynamicSection";
import ReverseProfile from "@/components/ReverseProfile/ReverseProfile";
import { ceo, coo, director, dristy, renu, shokhin } from "@/components/constants/constants";
import ProfileCard from "@/components/profileCard/ProfileCard";

const page = () => {
  return <div>
    <div className="max-w-7xl  border-2 mx-auto space-y-10">
      <ProfileCard profileObject={ceo}></ProfileCard>
    <ReverseProfile profileObject={director}> </ReverseProfile>
    <ProfileCard profileObject={dristy}></ProfileCard>
    <ReverseProfile profileObject={renu}></ReverseProfile>
    <ProfileCard profileObject={shokhin}></ProfileCard>
    <ReverseProfile profileObject={coo}></ReverseProfile>
    </div>
    <DynamicSection></DynamicSection>
    
    
  </div>;
};

export default page;
