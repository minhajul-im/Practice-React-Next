// import dark from "../../assets/logo.png";
// import light from "../../assets/logo_light.png";
// import { useThemeContext } from "../../hooks/useThemeContext";

export default function Logo() {
  // const { darkMode } = useThemeContext();
  return (
    <a href='/'>
      {/* <img className='h-[50px]' src={darkMode ? light : dark} alt='🚀🚀' /> */}
      <img className='h-[50px]' src='' alt='🚀🚀' />
    </a>
  );
}
