import ImageForService from "./ImageForService";
import { getApiCalledFunc } from "@/utilities/getApiCalledFunc";

const AllServicesSection = async () => {
  const services = await getApiCalledFunc("AllService");

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
      {services.map((service) => (
        <div key={service?.id} className="p-5 shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold uppercase">{service?.title}</h2>
          <p className="text-gray-400 py-4 text-[15px]">{service?.des}</p>
          <div className="grid grid-cols-6 gap-4  ">
            <ImageForService
              divStyle={"w-full h-[240px] col-span-4"}
              src={service?.image1}
              imgStyle={"h-full  rounded-lg"}
            />
            <ImageForService
              divStyle={"w-full h-[240px] col-span-2"}
              src={service?.image2}
              imgStyle={"h-full rounded-lg"}
            />
            <ImageForService
              divStyle={"w-full h-[240px] col-span-3"}
              src={service?.image3}
              imgStyle={"h-full rounded-lg"}
            />
            <ImageForService
              divStyle={"w-full h-[240px] col-span-3"}
              src={service?.image4}
              imgStyle={"h-full rounded-lg"}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default AllServicesSection;
