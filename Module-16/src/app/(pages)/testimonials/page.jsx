import SubCategoryLink from "@/components/reuseable/SubCategoryLink";
import HeaderDownTitleSection from "@/components/reuseable/HeaderDownTitleSection";
import AllTestimonialEngineers from "@/components/testimonials/AllTestimonialEngineers";

export const metadata = {
  title: "Testimonials",
  description: "this is Testimonials Page!",
};

const TestimonialsPage = () => {
  return (
    <main className="w-5/6 mx-auto">
      <h1 className="text-2xl font-bold pt-10 pb-5"> Testimonials List</h1>

      <SubCategoryLink url={"/testimonials"} name={"Testimonials"} />

      <HeaderDownTitleSection
        category={"Testimonials List"}
        title={"Better Agency/SEO Solution At Your Fingertips"}
      />

      <AllTestimonialEngineers />
    </main>
  );
};

export default TestimonialsPage;
