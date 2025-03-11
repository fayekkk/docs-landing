import React from 'react';
import ApiTester from '@site/src/components/ApiTester'; // Adjust path if necessary

function TryItButton({ endpoint, method = 'GET', params = '{}' }) {
  return (
    <div>
      <h4>✅ Try It</h4>
      <ApiTester endpoint={endpoint} method={method} params={params} />
    </div>
  );
}

export default TryItButton;
