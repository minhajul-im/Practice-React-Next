import Card from "@/components/Card";
import fetchData from "@/utils/fetchData";

const Page = async () => {
  const data = await fetchData("post-newest");
  console.log(data);
  return (
    <div>
      <h1 className="text-4xl text-cyan-300 text-center py-8">
        Hello Home page
      </h1>
      <Card data={data} />
    </div>
  );
};

export default Page;
