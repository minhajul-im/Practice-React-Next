import { DashboardLayout } from "@/layout/dashboard-layout/dashboard-layout";

export default function DashboardDefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
