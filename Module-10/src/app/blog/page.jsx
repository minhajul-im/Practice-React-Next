import Card from "@/components/Card";
import fetchData from "@/utils/fetchData";

const Page = async () => {
  const data = await fetchData("post-newest");

  return (
    <div>
      <h1 className="text-4xl text-center py-8">Hello blog page</h1>
      <Card data={data} />
    </div>
  );
};

export default Page;
