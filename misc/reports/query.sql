SELECT
i.no AS invoice_no,
i.date AS invoice_date,
i.client_business_name as client_name,
ii.product_id AS product_id,
ii.item AS product_name,
p.brand AS product_brand,
sf.name AS staff_name,
ss.name AS sales_name,
p.stock_balance AS stock_balance,
ii.unit_price AS price,
ii.quantity AS qty,
ii.subtotal AS subtotal,
ROUND(i.summary_paid/i.summary_total * ii.subtotal , 2) AS paid,
ROUND(i.summary_unpaid/i.summary_total * ii.subtotal , 2) AS unpaid
FROM invoices AS i
LEFT JOIN invoice_items AS ii ON ii.invoice_id = i.id
LEFT JOIN products AS p ON p.id = ii.product_id
LEFT JOIN staffs AS sf ON sf.id = i.staff_id
LEFT JOIN staffs AS ss ON ss.id = i.sales_person_id
WHERE i.id IN (1179,1204,1177)