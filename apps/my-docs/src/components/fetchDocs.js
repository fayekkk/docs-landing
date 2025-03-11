import axios from 'axios';
import fs from 'fs';
import path from 'path';

// Define API URLs
const BASE_URL = 'http://localhost:1337/api';
const ENDPOINTS = ['clients', 'users', 'products'];

async function fetchDocs() {
  try {
    console.log('🚀 Fetching API documentation from Strapi...');

    const docsPath = path.join(__dirname, '../../docs');
    if (!fs.existsSync(docsPath)) {
      fs.mkdirSync(docsPath, { recursive: true });
    }

    for (const endpoint of ENDPOINTS) {
      const response = await axios.get(`${BASE_URL}/${endpoint}`);
      const items = response.data.data;

      if (!items || items.length === 0) {
        console.warn(`⚠️ No data found for ${endpoint}.`);
        continue;
      }

      let content = `---
id: ${endpoint}
title: ${endpoint.charAt(0).toUpperCase() + endpoint.slice(1)} API
---

# ${endpoint.charAt(0).toUpperCase() + endpoint.slice(1)} API

| ID | Name | Details |
|----|------|---------|
`;

      items.forEach((item) => {
        content += `| ${item.id} | ${item.attributes.name || item.attributes.title || item.attributes.username} | ${item.attributes.description || item.attributes.email || 'N/A'} |\n`;
      });

      const filePath = path.join(docsPath, `${endpoint}.md`);
      fs.writeFileSync(filePath, content);
      console.log(`✅ Created: ${filePath}`);
    }

    console.log('🎉 Documentation successfully updated!');
  } catch (error) {
    console.error('❌ Error fetching docs:', error);
  }
}

fetchDocs();
