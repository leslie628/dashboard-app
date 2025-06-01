const DashboardCard = ({ title, value }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "1rem",
      marginBottom: "1rem",
      borderRadius: "8px",
      backgroundColor: "#f7f9fa",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>{title}</h3>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{value}</p>
    </div>
  );
};

export default DashboardCard;
