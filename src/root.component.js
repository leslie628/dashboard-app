import { useState } from 'react';
import './sidebar.css';

export default function Root() {
    const [activeTab, setActiveTab] = useState('overview');
    const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <h3>Overview</h3>
            <p>Welcome to your dashboard overview. Here you can see high-level summaries and quick insights.</p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <div style={{ flex: 1, background: "#fafafa", padding: "1rem", borderRadius: "4px" }}>
                <h4>Total Users</h4><p>1,245</p>
              </div>
              <div style={{ flex: 1, background: "#fafafa", padding: "1rem", borderRadius: "4px" }}>
                <h4>New Signups This Week</h4><p>56</p>
              </div>
              <div style={{ flex: 1, background: "#fafafa", padding: "1rem", borderRadius: "4px" }}>
                <h4>Active Sessions</h4><p>89</p>
              </div>
            </div>
          </>
        );
      case 'userStats':
        return (
          <>
            <h3>User Stats</h3>
            <p>Detailed user statistics and analysis.</p>
          </>
        );
      case 'activity':
        return (
          <>
            <h3>Activity Feed</h3>
            <p>Recent user activities and system updates.</p>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div className="dashboard-app">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <button onClick={() => setActiveTab('overview')} className={activeTab === 'overview' ? 'active' : ''}>Overview</button><br />
          <button onClick={() => setActiveTab('userStats')} className={activeTab === 'userStats' ? 'active' : ''}>User Stats</button><br />
          <button onClick={() => setActiveTab('activity')} className={activeTab === 'activity' ? 'active' : ''}>Activity Feed</button>
        </nav>
      </div>
      <main style={{ flex: 1, padding: "2rem" }}>
        {renderContent()}
      </main>
    </div>
  );
}
