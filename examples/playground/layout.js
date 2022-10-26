const layout = {
  "width": 500,
  "headerSection": {
    "height": 125,
    "items": [
      {
        "x": 15,
        "y": 5,
        "width": 250,
        "height": 20,
        "name": "",
        "text": "Anka Report Company",
        "binding": "",
        "fontSize": "14px",
        "fontWeight": "bold"
      },
      {
        "x": 300,
        "y": 5,
        "width": 80,
        "height": 20,
        "text": "Invoice No:",
        "binding": "",
        "fontWeight": "bold"
      },
      {
        "x": 300,
        "y": 30,
        "width": 80,
        "height": 20,
        "text": "Date:",
        "binding": "",
        "fontWeight": "bold"
      },
      {
        "x": 5,
        "y": 35,
        "width": 80,
        "height": 20,
        "name": "",
        "text": "Client",
        "binding": "",
        "fontWeight": "bold"
      },
      {
        "x": 5,
        "y": 60,
        "width": 80,
        "height": 20,
        "name": "",
        "text": "Address:",
        "binding": "",
        "fontWeight": "bold"
      },
      {
        "x": 390,
        "y": 5,
        "width": 100,
        "height": 20,
        "name": "",
        "text": "Invoice No",
        "binding": "invoice_no"
      },
      {
        "x": 390,
        "y": 30,
        "width": 100,
        "height": 20,
        "name": "",
        "text": "Date",
        "binding": "date"
      },
      {
        "x": 90,
        "y": 35,
        "width": 175,
        "height": 20,
        "name": "",
        "text": "Client",
        "binding": "client"
      },
      {
        "x": 90,
        "y": 60,
        "width": 250,
        "height": 20,
        "name": "",
        "text": "Address",
        "binding": "address"
      },
      {
        "x": 10,
        "y": 90,
        "width": 480,
        "height": 0,
        "name": "",
        "text": "",
        "binding": "",
        "border": "1px solid #333333"
      },
      {
        "x": 5,
        "y": 100,
        "width": 30,
        "height": 20,
        "name": "",
        "text": "No",
        "binding": "",
        "fontWeight": "bold"
      },
      {
        "x": 35,
        "y": 100,
        "width": 195,
        "height": 20,
        "name": "",
        "text": "Item",
        "binding": "",
        "fontWeight": "bold"
      },
      {
        "x": 230,
        "y": 100,
        "width": 70,
        "height": 20,
        "name": "",
        "text": "Amount",
        "binding": "",
        "fontWeight": "bold"
      },
      {
        "x": 300,
        "y": 100,
        "width": 70,
        "height": 20,
        "name": "",
        "text": "Price",
        "binding": "",
        "fontWeight": "bold"
      },
      {
        "x": 370,
        "y": 100,
        "width": 50,
        "height": 20,
        "name": "",
        "text": "Tax",
        "binding": "",
        "fontWeight": "bold"
      },
      {
        "x": 420,
        "y": 100,
        "width": 70,
        "height": 20,
        "name": "",
        "text": "Total",
        "binding": "",
        "fontWeight": "bold"
      }
    ],
    "sections": []
  },
  "contentSection": {
    "height": 55,
    "binding": "items",
    "items": [
      {
        "x": 5,
        "y": 5,
        "width": 30,
        "height": 20,
        "name": "",
        "text": "No",
        "binding": "no",
        "backgroundColor": "#eeeeee"
      },
      {
        "x": 35,
        "y": 5,
        "width": 195,
        "height": 20,
        "name": "",
        "text": "Item",
        "binding": "item",
        "backgroundColor": "#eeeeee"
      },
      {
        "x": 230,
        "y": 5,
        "width": 70,
        "height": 20,
        "name": "",
        "text": "Amount",
        "binding": "amount",
        "backgroundColor": "#eeeeee"
      },
      {
        "x": 300,
        "y": 5,
        "width": 70,
        "height": 20,
        "name": "",
        "text": "Price",
        "binding": "price",
        "backgroundColor": "#eeeeee"
      },
      {
        "x": 370,
        "y": 5,
        "width": 50,
        "height": 20,
        "name": "",
        "text": "Tax",
        "binding": "tax",
        "backgroundColor": "#eeeeee"
      },
      {
        "x": 420,
        "y": 5,
        "width": 70,
        "height": 20,
        "name": "",
        "text": "Total",
        "binding": "total",
        "backgroundColor": "#eeeeee"
      },
      {
        "x": 30,
        "y": 30,
        "width": 100,
        "height": 20,
        "name": "",
        "text": "Discounts:",
        "binding": "",
        "fontWeight": "bold"
      },
      {
        "x": 150,
        "y": 30,
        "width": 30,
        "height": 20,
        "name": "",
        "text": "Id",
        "binding": "",
        "fontWeight": "bold"
      },
      {
        "x": 180,
        "y": 30,
        "width": 70,
        "height": 20,
        "name": "",
        "text": "Rate (%)",
        "binding": "",
        "fontWeight": "bold"
      },
      {
        "x": 250,
        "y": 30,
        "width": 100,
        "height": 20,
        "name": "",
        "text": "Total",
        "binding": "",
        "fontWeight": "bold"
      }
    ],
    "sections": [
      {
        "height": 30,
        "binding": "discounts",
        "items": [
          {
            "x": 150,
            "y": 5,
            "width": 30,
            "height": 20,
            "name": "",
            "text": "Id",
            "binding": "id"
          },
          {
            "x": 180,
            "y": 5,
            "width": 70,
            "height": 20,
            "name": "",
            "text": "Rate",
            "binding": "rate"
          },
          {
            "x": 250,
            "y": 5,
            "width": 100,
            "height": 20,
            "name": "",
            "text": "Total",
            "binding": "total"
          }
        ],
        "sections": []
      }
    ]
  },
  "footerSection": {
    "height": 100,
    "items": [
      {
        "x": 10,
        "y": 5,
        "width": 480,
        "height": 0,
        "name": "",
        "text": "",
        "binding": "",
        "border": "1px solid #333333"
      },
      {
        "x": 370,
        "y": 15,
        "width": 50,
        "height": 20,
        "text": "Gross:",
        "binding": "",
        "fontWeight": "bold"
      },
      {
        "x": 370,
        "y": 40,
        "width": 50,
        "height": 20,
        "text": "Tax:",
        "binding": "",
        "fontWeight": "bold"
      },
      {
        "x": 370,
        "y": 65,
        "width": 50,
        "height": 20,
        "name": "",
        "text": "Total:",
        "binding": "",
        "fontWeight": "bold"
      },
      {
        "x": 425,
        "y": 15,
        "width": 50,
        "height": 20,
        "text": "Gross",
        "binding": "gross"
      },
      {
        "x": 425,
        "y": 40,
        "width": 50,
        "height": 20,
        "text": "Tax",
        "binding": "tax"
      },
      {
        "x": 425,
        "y": 65,
        "width": 50,
        "height": 20,
        "name": "",
        "text": "Total",
        "binding": "total"
      }
    ],
    "sections": []
  }
};
