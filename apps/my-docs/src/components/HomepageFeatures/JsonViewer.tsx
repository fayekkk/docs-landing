import React, { useEffect, useState } from "react";

interface JsonViewerProps {
  endpoint: string; // API key to display (e.g., "getOrders")
}

const JsonViewer: React.FC<JsonViewerProps> = ({ endpoint }) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/apiResponses.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData[endpoint]); // Get specific API response
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, [endpoint]);

  return (
    <div>
      <h3>Response:</h3>
      <pre style={{
        background: "#f4f4f4",
        padding: "10px",
        borderRadius: "5px",
        overflowX: "auto"
      }}>
        {data ? JSON.stringify(data, null, 2) : "Loading..."}
      </pre>
    </div>
  );
};

export default JsonViewer;
