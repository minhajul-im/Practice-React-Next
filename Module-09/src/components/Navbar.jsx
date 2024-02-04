const images = {
  hamburger: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WH3C_hXNmb-Lb9lDwUbvyZkZ2GMNCQ7Guw&s`,
  brandLogo: `https://sambadenglish.com/wp-content/uploads/2017/08/new-youtube-logo-840x402.jpg`,
  searchIcon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UjpZD5bCqc03Db2CELthIwlmOU-19GedTA&s`,
  voiceIcon: `https://e7.pngegg.com/pngimages/831/868/png-clipart-microphone-google-voice-search-computer-icons-microphone-electronics-microphone-thumbnail.png`,
  uploadIcon: `https://w7.pngwing.com/pngs/757/1013/png-transparent-upload-video-film-movie-user-interface-icon-thumbnail.png`,
  notification: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZEy3OIFj1dZhMsamM1KjQcWrza76ZDT8Oeg&s`,
  user: `https://avatars.githubusercontent.com/u/102856393?v=4`,
};

export default function Navbar() {
  return (
    <nav className='grid grid-flow-col'>
      <div className='flex items-center gap-4 grid-cols-4 ml-10'>
        <img
          className='img h-10 cursor-pointer'
          src={images.hamburger}
          alt='hamburger'
        />
        <img
          className='img h-20 cursor-pointer'
          src={images.brandLogo}
          alt='youtube'
        />
      </div>
      <form className='flex items-center grid-cols-4 gap-4'>
        <label className='border flex items-center px-4 rounded-full w-full justify-between'>
          <input
            className='outline-none py-2 px-4 text-gray-600 font-semibold tracking-wide text-xl w-full'
            placeholder='Search'
            type='text'
          />
          <img
            className='img w-6 cursor-pointer'
            src={images.searchIcon}
            alt='search'
          />
        </label>
        <img
          src={images.voiceIcon}
          alt='voice'
          className='voice w-8 h-8 cursor-pointer'
        />
      </form>
      <div className='flex items-center grid-cols-4 mr-10 justify-end gap-8'>
        <img
          className='img w-6 h-6 cursor-pointer'
          src={images.uploadIcon}
          alt='upload icon'
        />
        <img
          className='img w-6 h-6 cursor-pointer'
          src={images.notification}
          alt='notification'
        />
        <img
          className='img w-12 h-12 rounded-full cursor-pointer border border-green-600'
          src={images.user}
          alt='user'
        />
      </div>
    </nav>
  );
}
