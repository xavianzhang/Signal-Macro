import { PageShell } from "@/components/shared/page-shell";
import { DashboardPage } from "@/features/dashboard/components/dashboard-page";
import { getDashboardData } from "@/features/dashboard/services/dashboard.service";

export default async function HomePage() {
  const dashboardData = await getDashboardData();

  return (
    <PageShell currentPath="/">
      <DashboardPage data={dashboardData} />
    </PageShell>
  );
}
