import AllProjects from "@/components/project/AllProjects";
import SubCategoryLink from "@/components/reuseable/SubCategoryLink";
import HeaderDownTitleSection from "@/components/reuseable/HeaderDownTitleSection";

export const metadata = {
  title: "Project",
  description: "this is Project Page!",
};

const ProjectPage = async () => {
  return (
    <main className="w-5/6 mx-auto">
      <h1 className="text-2xl font-bold pt-10 pb-5"> Our Services</h1>

      <SubCategoryLink url={"/project"} name={"Project"} />

      <HeaderDownTitleSection
        category={"All Projects"}
        title={"Better Agency/SEO Solution At Your Fingertips"}
      />

      <AllProjects />
    </main>
  );
};

export default ProjectPage;
