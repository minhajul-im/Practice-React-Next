export default function Navbar() {
  return (
    <nav className='py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-10'>
      <div className='container mx-auto flex items-center justify-between gap-x-6'>
        <a href='/'>
          <img
            className='h-16 w-16 rounded-full border-2 border-green-600'
            src={
              "https://www.minhajul.com/_next/image?url=%2Fminhajul.png&w=256&q=75"
            }
            alt='Logo'
          />
        </a>
      </div>
    </nav>
  );
}
