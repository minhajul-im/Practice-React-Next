import TeamMemberProfile from "@/components/team/TeamMemberProfile";
import SubCategoryLink from "@/components/reuseable/SubCategoryLink";
import HeaderDownTitleSection from "@/components/reuseable/HeaderDownTitleSection";

export const metadata = {
  title: "Team",
  description: "This is Team Page!",
};

const TeamPanel = () => {
  return (
    <main className="w-5/6 mx-auto">
      <h1 className="text-2xl font-bold pt-10 pb-5"> Team</h1>

      <SubCategoryLink url={"/team"} name={"Team"} />

      <HeaderDownTitleSection
        category={"out team members"}
        title={" Check our awesome team members"}
      />

      <TeamMemberProfile />
    </main>
  );
};

export default TeamPanel;
