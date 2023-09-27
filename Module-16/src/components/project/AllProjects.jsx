import Link from "next/link";
import Image from "next/image";
import { getApiCalledFunc } from "@/utilities/getApiCalledFunc";

const AllProjects = async () => {
  const projects = await getApiCalledFunc("AllProject");

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10
     place-items-center mt-10 "
    >
      {projects.map((project) => (
        <Link
          href={"https://www.minhajul.com/"}
          key={project?.id}
          className="shadow-lg p-5 rounded-lg hover:-translate-y-1 transition
           ease-linear delay-15 cursor-pointer hover:blur-sm"
        >
          <Image
            src={project?.image}
            width={400}
            height={600}
            alt="Picture of the author"
          />
          <h1 className="text-center mt-3 mb-1">{project?.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default AllProjects;
