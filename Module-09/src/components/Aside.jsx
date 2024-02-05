import { asideData, buttonNames } from "../db/data";

export default function Aside() {
  return (
    <aside className='h-[100vh] w-[270px] scroll-py-40'>
      <ul className='mx-6 my-1'>
        {asideData.map((item) => (
          <li
            key={item.id}
            className='hover:bg-gray-200 transition-all cursor-pointer rounded-md px-4 py-2 font-semibold'
          >
            <span className='mr-6 text-xl'>{item.icon}</span> {item.title}
          </li>
        ))}
      </ul>
      <hr className='mx-4' />

      <ul className='mx-6 my-1'>
        <li className='px-4 py-4 font-bold text-2xl'>You {">"}</li>
        {asideData.map((item) => (
          <li
            key={item.id}
            className='hover:bg-gray-200 transition-all cursor-pointer rounded-md px-4 py-2 font-semibold'
          >
            <span className='mr-6 text-xl'>{item.icon}</span> {item.title}
          </li>
        ))}
      </ul>
      <hr className='mx-4' />

      <ul className='mx-6 my-1'>
        <li className='px-4 py-4 font-bold text-xl'>Supscriptions</li>
        {buttonNames.map((key) => (
          <li
            key={key}
            className='cursor-pointer rounded-md px-4 py-2 font-semibold flex hover:underline'
          >
            <span className='mr-4 text-xl'>👤</span> {key}
          </li>
        ))}
      </ul>
    </aside>
  );
}
