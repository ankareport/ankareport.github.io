const data = {
  "invoice_no": "2022010009",
  "date": "01.01.2022",
  "client": "Anka Report",
  "address": "Ankara / Turkey",
  "gross": 1000,
  "tax": 180,
  "total": 1180,
  "items": [
    {
      "no": 1,
      "item": "Item1",
      "amount": 1,
      "price": 500,
      "tax": 90,
      "total": 500,
      "discounts": [
        { "id": 1, "rate": 10, "total": 100 },
        { "id": 2, "rate": 20, "total": 200 }
      ]
    },
    {
      "no": 2,
      "item": "Item2",
      "amount": 2,
      "price": 100,
      "tax": 36,
      "total": 200,
      "discounts": [
        { "id": 3, "rate": 30, "total": 300 },
        { "id": 4, "rate": 40, "total": 400 }
      ]
    },
    {
      "no": 3,
      "item": "Item3",
      "amount": 3,
      "price": 100,
      "tax": 54,
      "total": 300,
      "discounts": [
        { "id": 5, "rate": 50, "total": 500 },
        { "id": 6, "rate": 60, "total": 600 }
      ]
    }
  ]
};
