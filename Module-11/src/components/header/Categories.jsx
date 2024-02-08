import CategoryLink from "../reusable/CategoryLink";

export default function Categories() {
  return (
    <div className='container mx-auto mt-6'>
      <ul className='flex flex-wrap items-center justify-center gap-x-12 text-xs font-semibold lg:text-base'>
        <CategoryLink>Home</CategoryLink>
        <CategoryLink>General</CategoryLink>
        <CategoryLink>Business</CategoryLink>
        <CategoryLink>Entertainment</CategoryLink>
        <CategoryLink>Health</CategoryLink>
        <CategoryLink>Science</CategoryLink>
        <CategoryLink>Sports</CategoryLink>
        <CategoryLink>Technology</CategoryLink>
      </ul>
    </div>
  );
}
