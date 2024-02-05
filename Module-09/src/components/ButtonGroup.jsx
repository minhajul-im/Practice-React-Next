import Button from "./Button";
import { buttonNames } from "../db/data";

export default function ButtonGroup() {
  return (
    <div className='relative flex items-center group'>
      <section
        id='tag'
        className='no-scrollbar w-full h-full overflow-x-scroll 
        whitespace-nowrap scroll-smooth'
      >
        {buttonNames.map((name) => (
          <Button key={name}> {name}</Button>
        ))}
      </section>
    </div>
  );
}
