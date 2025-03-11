---
id: orders
title: GET Orders API
---

The Orders API allows you to manage customer orders, retrieve orders, create new orders, update orders, and delete orders.

## 🔹 Get All Orders

Retrieves a list of all orders.

### 📝 Request

```http
GET /api/orders
```

import ApiTester from '@site/src/components/ApiTester';

<ApiTester endpoint="https://api.example.com/orders" />

Error Handling
Here are the possible errors that can occur when interacting with the API:

404 - Order Not Found
The order with the specified ID does not exist.

📝 Request

```http
GET /api/orders/{order_id}
```

<ApiTester endpoint="https://api.example.com/orders" params="error=404" />

400 - Bad Request
The request was invalid or malformed. Please check the parameters.

📝 Request

```http
GET /api/orders/{order_id}
```

<ApiTester endpoint="https://api.example.com/orders" params="error=400" />
