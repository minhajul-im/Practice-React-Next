import SubCategoryLink from "@/components/reuseable/SubCategoryLink";
import AllServicesSection from "@/components/service/AllServicesSection";
import HeaderDownTitleSection from "@/components/reuseable/HeaderDownTitleSection";

export const metadata = {
  title: "Service",
  description: "this is Service Page!",
};

const ServicePage = () => {
  return (
    <main className="w-5/6 mx-auto">
      <h1 className="text-2xl font-bold pt-10 pb-5"> Our Services</h1>

      <SubCategoryLink url={"/service"} name={"Service"} />

      <HeaderDownTitleSection
        category={"our all services"}
        title={"We provide best web design services!"}
      />

      <AllServicesSection />
    </main>
  );
};

export default ServicePage;
