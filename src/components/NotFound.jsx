import React from "react";

const NotFound = () => {
  const handleRefresh = () => {
    window.location.reload(); // Обновление страницы
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Ничего не найдено по вашему запросу</h1>
      <button onClick={handleRefresh} style={styles.button}>
        Обновить страницу
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default NotFound;
