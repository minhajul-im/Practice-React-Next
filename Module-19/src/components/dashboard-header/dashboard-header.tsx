import Image from "next/image";
import { UserMenu } from "./user-menu/user-menu";

export const DashboardHeader = () => {
  return (
    <header className="grid grid-cols-3 items-center w-full">
      <div className="flex items-center gap-10 justify-start">
        <div className="h-[50px] w-[160px] relative">
          <Image
            fill
            src="/logo-white.png"
            alt="dashboard-logo"
            className="w-full h-full absolute"
          />
        </div>
        <input
          type="search"
          placeholder="Search..."
          className="px-4 py-2 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>

      <h3 className="text-center text-lg font-semibold uppercase">
        Admin Dashboard
      </h3>

      <UserMenu />
    </header>
  );
};
