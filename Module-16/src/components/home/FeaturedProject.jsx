import { getApiCalledFunc } from "@/utilities/getApiCalledFunc";
import Image from "next/image";

const FeaturedProject = async () => {
  const features = await getApiCalledFunc("FeaturedProject");
  const singleFeature = features.shift();

  const clock = (str) => str.split(".").at([0]);

  return (
    <section className=" bg-green-100/50">
      <div className="w-5/6 mx-auto py-20">
        <p className="uppercase text-green-600 font-semibold pb-5">
          Featured project
        </p>
        <h1 className="capitalize text-3xl text-gray-800 pb-10 font-bold">
          We Provide the Perfect Solution to your business growth!
        </h1>
        <div className="flex p-4">
          <div key={singleFeature?.id} className="basis-1/2 pt-8">
            <Image
              className="rounded"
              src={singleFeature?.image}
              width={600}
              height={700}
              alt={singleFeature?.title}
            />
            <div>
              <p className="text-gray-500 text-[10px]">
                {clock(singleFeature?.created_at)}
              </p>
              <h2 className="card-title">{singleFeature?.title}</h2>
            </div>
          </div>
          <div className="flex basis-1/2 flex-wrap">
            {features.splice(1, 4).map((feature) => (
              <div key={feature?.key} className="basis-1/2 pb-2">
                <Image
                  className="rounded"
                  src={feature?.image}
                  width={295}
                  height={210}
                  alt={feature?.title}
                />
                <div>
                  <p className="text-gray-500 text-[10px]">
                    {clock(feature?.created_at)}
                  </p>
                  <h2 className="card-title">{feature?.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
