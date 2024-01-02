import { Hero, BooksList } from "./index";

export default function MainContainer() {
  return (
    <div className='my-10 lg:my-14'>
      <Hero />
      <BooksList />
    </div>
  );
}
