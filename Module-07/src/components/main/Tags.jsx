export default function Tags({ tags }) {
  return (
    <ul className='flex justify-center gap-1.5 flex-wrap'>
      {tags.map((tag, i) => (
        <li key={i}>
          <span
            className={`bg-[#FE1A1AB1] inline-block h-5 whitespace-nowrap rounded-[45px]  px-2.5 text-sm capitalize text-[#F4F5F6]`}
          >
            {tag}
          </span>
        </li>
      ))}
    </ul>
  );
}
