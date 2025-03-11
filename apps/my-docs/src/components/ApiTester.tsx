import React, { useState } from 'react';
import apiResponses from '@site/static/data/apiResponses.json';  // Adjust path if needed

function ApiTester({ endpoint, method = 'GET', params = '{}' }) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleApiRequest = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      // For static data, simulate error responses based on the endpoint
      if (endpoint === 'https://api.example.com/orders') {
        setResponse(apiResponses.orders); // Use static data for orders
        
        // Simulate errors if requested
        if (params.includes("error")) {
          // Just a simulation for errors
          const errorType = params.split('=')[1]; // Extract error type
          throw new Error(JSON.stringify(apiResponses.errors[errorType]));
        }
      } else {
        throw new Error('Unknown endpoint');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleApiRequest} disabled={loading}>
        {loading ? 'Loading...' : 'Try It'}
      </button>

      {response && (
        <div>
          <h3>📡 Example Response</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div style={{ color: 'red' }}>
          <h3>❌ Error</h3>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
}

export default ApiTester;
