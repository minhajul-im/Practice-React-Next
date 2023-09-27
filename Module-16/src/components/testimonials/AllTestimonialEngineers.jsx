import Image from "next/image";
import { getApiCalledFunc } from "@/utilities/getApiCalledFunc";

const AllTestimonialEngineers = async () => {
  const testimonials = await getApiCalledFunc("TestimonialList");
  testimonials.push(testimonials.at(2));

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center mt-10">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial?.id}
          className="shadow-lg p-5 rounded-lg text-center hover:bg-[#3bd378] transition ease-linear delay-15  "
        >
          <Image
            className="mx-auto"
            src={testimonial?.image}
            width={400}
            height={400}
            alt="Picture of the author"
          />
          <p className="my-5 text-[14px">{testimonial?.mgs}</p>
          <h1 className="my-3 font-bold">{testimonial?.name}</h1>
          <p className="font-semibold text-[15px]">
            {testimonial?.designation}
          </p>
        </div>
      ))}
    </section>
  );
};

export default AllTestimonialEngineers;
