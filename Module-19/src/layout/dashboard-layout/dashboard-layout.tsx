import React from "react";
import { DashboardNavbar } from "./dashboard-navbar/dashboard-navbar";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="w-screen h-screen my-0 mx-auto bg-[#F0F3FA]">
      <section className="flex flex-col-reverse md:flex-row px-6 pt-6 md:pb-6 rounded-t-2xl md:rounded-2xl h-full w-full">
        <DashboardNavbar />
        <section className="flex-grow bg-white dark:bg-dark rounded-t-2xl md:rounded-2xl p-5 overflow-hidden w-full">
          <section className="flex flex-col w-full h-full box-content pr-10 overflow-y-scroll">
            {children}
          </section>
        </section>
      </section>
    </main>
  );
};
