import Condition from "./Condition";
import Copyright from "./Copyright";
import Social from "./Social";
import Subscribe from "./Subscribe";

// import logo_dark from "../../assets/logo.png";
// import logo_light from "../../assets/logo_light.png";

export default function Footer() {
  return (
    <footer className='bg-neutral-800 pb-8 pt-20 text-white sm:pt-24'>
      <div className='container mx-auto'>
        <div className='xl:grid xl:grid-cols-12 xl:gap-8'>
          <div className='grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:col-span-7 xl:grid-cols-5'>
            <img className='max-md:col-span-2' src='=' alt='🚀🚀' />

            <ul role='list' className='space-y-4 text-sm font-semibold'>
              <li>Home</li>
              <li>General</li>
              <li>Business</li>
              <li>Entertainment</li>
              <li>Health</li>
              <li>Science</li>
            </ul>

            <ul role='list' className='space-y-4 text-sm font-semibold'>
              <li>Sports</li>
              <li>Technology</li>
            </ul>

            <Condition />

            <Social />
          </div>

          <Subscribe />
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
