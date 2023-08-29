import Set_Cookies from "@/components/Set_Cookies";
import Show_Display from "@/components/Show_Display";

export default function Home() {
  return (
    <div className="w-4/6 mx-auto">
      <Set_Cookies />
      <Show_Display />
    </div>
  );
}
