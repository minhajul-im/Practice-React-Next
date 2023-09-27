import Image from "next/image";
import { worksIconFunc } from "@/utilities/worksIconFunc";

const WorkListSection = async () => {
  const workLists = await worksIconFunc();

  return (
    <section className="">
      <div className="w-5/6 mx-auto flex justify-evenly py-10">
        {workLists.map((item) => (
          <div key={item?.id}>
            <Image
              className="m-4 p-6 rounded-lg bg-green-100 shadow-md"
              src={item?.img}
              alt={item?.title}
              height={90}
              width={90}
            />
            <h2 className="text-2xl font-bold py-4">{item?.title}</h2>
            <p className="text-sm">{item?.des}</p>
            <div className="flex gap-2 items-baseline py-8">
              <span>Learn more</span>
              <Image src={item?.arrow} alt="arrow" height={10} width={10} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkListSection;
