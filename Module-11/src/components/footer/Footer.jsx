import Social from "./Social";
import Subscribe from "./Subscribe";
import CategoryLink from "../reusable/CategoryLink";

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
              <CategoryLink>Home</CategoryLink>
              <CategoryLink>General</CategoryLink>
              <CategoryLink>Business</CategoryLink>
              <CategoryLink>Entertainment</CategoryLink>
              <CategoryLink>Health</CategoryLink>
              <CategoryLink>Science</CategoryLink>
            </ul>

            <ul role='list' className='space-y-4 text-sm font-semibold'>
              <CategoryLink>Sports</CategoryLink>
              <CategoryLink>Technology</CategoryLink>
            </ul>

            <ul role='list' className='space-y-4 text-sm font-semibold'>
              <CategoryLink>Terms of Use</CategoryLink>
              <CategoryLink>Privacy</CategoryLink>
              <CategoryLink> Cookies Policy</CategoryLink>
              <CategoryLink>Manage Cookies</CategoryLink>
              <CategoryLink>Accessibility</CategoryLink>
              <CategoryLink>Contact Us</CategoryLink>
            </ul>

            <Social />
          </div>

          <Subscribe />
        </div>
      </div>
      <div className='container mt-6 lg:mt-12'>
        <p className='text-center'>
          Copyright &copy;2023 | All rights reserved by Learn with Sumit
        </p>
      </div>
    </footer>
  );
}
