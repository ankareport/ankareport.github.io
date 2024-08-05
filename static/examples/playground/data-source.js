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
      { "type": "image", "label": "Logo", "field": "logo" },
      { "type": "text", "label": "No", "field": "no" },
      { "type": "text", "label": "Item", "field": "item" },
      { "type": "text", "label": "Amount", "field": "amount" },
      { "type": "text", "label": "Price", "field": "price" },
      { "type": "text", "label": "Tax", "field": "tax" },
      { "type": "text", "label": "Total", "field": "total" },
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
