const dataSource = [
  { "label": "Invoice No", "field": "invoice_no" },
  { "label": "Date", "field": "date" },
  { "label": "Gross", "field": "gross" },
  { "label": "Client", "field": "client" },
  { "label": "Address", "field": "address" },
  { "label": "Tax", "field": "tax" },
  { "label": "Total", "field": "total" },
  {
    "label": "Items",
    "field": "items",
    "children": [
      { "label": "No", "field": "no" },
      { "label": "Item", "field": "item" },
      { "label": "Amount", "field": "amount" },
      { "label": "Price", "field": "price" },
      { "label": "Tax", "field": "tax" },
      { "label": "Total", "field": "total" },
      {
        "label": "Discounts",
        "field": "discounts",
        "children": [
          { "label": "Id", "field": "id" },
          { "label": "Rate", "field": "rate" },
          { "label": "Total", "field": "total" }
        ]
      }
    ]
  }
];
