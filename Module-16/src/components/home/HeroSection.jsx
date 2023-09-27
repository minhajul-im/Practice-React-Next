import Image from "next/image";
import { getApiCalledFunc } from "@/utilities/getApiCalledFunc";

const HeroSection = async () => {
  const hero = await getApiCalledFunc("HeroList");
  return (
    <header className="w-5/6 mx-auto">
      <div
        className="grid grid-cols-1 md:grid-cols-2 place-items-center 
      min-h-[75vh] mt-10"
      >
        <section className="max-w-2xl lg:-ml-[155px]  md-ml-0 break-words">
          <h1 className="text-3xl md:text-5xl font-bold font-serif  mb-10">
            Increase Your <br /> Customers Loyalty <br /> and Satisfaction
          </h1>
          <p className="font-semibold mb-5">
            We help businesses like yours earn more customers, <br /> standout
            from competitors, make more money
          </p>
          <button
            className="py-4 px-7 font-bold font-mono border bg-green-400 text-white border-green-500 hover:border-white-500 rounded-md hover:bg-white 
          hover:text-green-500 text-xl mt-8"
          >
            Get Started
          </button>
        </section>

        <section className="grid grid-cols-6 gap-5   ">
          <div className="col-span-4 w-full h-full">
            <Image
              className="h-[200px] md:h-[267px] rounded"
              src={hero?.image1}
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>
          <div className="col-span-2">
            <Image
              className="w-full object-cover h-[200px] md:h-[267px] rounded"
              src={hero?.image2}
              width={500}
              height={200}
              alt="Picture of the author"
            />
          </div>
          <div className="col-span-3">
            <Image
              className="rounded h-[165px]"
              src={hero?.image3}
              width={500}
              height={200}
              alt="Picture of the author"
            />
          </div>
          <div className="col-span-3">
            <Image
              className="rounded h-[165px]"
              src={hero?.image4}
              width={500}
              height={200}
              alt="Picture of the author"
            />
          </div>
        </section>
      </div>
    </header>
  );
};

export default HeroSection;
