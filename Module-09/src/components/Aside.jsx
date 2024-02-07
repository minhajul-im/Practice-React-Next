import { Link } from "react-router-dom";
import { asideData, buttonNames } from "../db/data";
import { useTaggleContext } from "../context/AsideContext";

export default function Aside() {
  const showAside = useTaggleContext();

  return (
    showAside && (
      <div className='w-[300px] absolute z-20 bg-white'>
        <ul className='mx-6 my-1'>
          {asideData.map((item) => (
            <Link to={item.url} key={item.id}>
              <li className='hover:bg-gray-200 transition-all cursor-pointer rounded-md px-4 py-2 font-semibold'>
                <span className='mr-6 text-xl'>{item.icon}</span> {item.title}
              </li>
            </Link>
          ))}
        </ul>
        <hr className='mx-4' />

        <ul className='mx-6 my-1'>
          <li className='px-4 py-4 font-bold text-2xl'>You {">"}</li>
          <li className='hover:bg-gray-200 transition-all cursor-pointer rounded-md px-4 py-2 font-semibold'>
            Your Channel
          </li>
          <li className='hover:bg-gray-200 transition-all cursor-pointer rounded-md px-4 py-2 font-semibold'>
            History
          </li>
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
      </div>
    )
  );
}
