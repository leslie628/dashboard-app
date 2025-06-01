import DashboardCard from "./DashboardCard";

export default function Root() {
  return (
      <div id="dashboard-app-container">
      <h2>📊 Dashboard Overview</h2>
      <DashboardCard title="Users Today" value="132" />
      <DashboardCard title="New Orders" value="17" />
      <DashboardCard title="Revenue" value="$1,270" />
    </div>
  )
}
