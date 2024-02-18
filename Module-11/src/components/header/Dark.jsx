import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useThemeContext } from "../../hooks/useThemeContext";

export default function Dark() {
  const { darkMode, setDarkMode } = useThemeContext();
  return (
    <div onClick={() => setDarkMode(!darkMode)}>
      <img
        className="w-[25px] h-[25px] cursor-pointer"
        src={darkMode ? sun : moon}
        alt="sun"
      />
    </div>
  );
}
