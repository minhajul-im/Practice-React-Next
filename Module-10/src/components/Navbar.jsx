import fetchData from "@/utils/fetchData";
import Link from "next/link";

const Navbar = async () => {
  const data = await fetchData("post-categories");

  return (
    <div className="w-4/6 py-1 mx-auto">
      <div
        className="flex gap-2 items-center
       justify-end"
      >
        {data.map((item) => (
          <p
            className="text-xs font-semibold border
             border-gray-100 rounded py-2 px-4 
             select-none hover:bg-slate-400"
            key={item.id}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
