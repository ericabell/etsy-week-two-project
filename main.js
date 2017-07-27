// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it

// console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let total = 0;
  data.forEach(function(e) {
    total += e.price;
  });
  console.log("Average price of all items: $" + (total/data.length).toFixed(2));
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let itemsSelected = [];
  data.forEach(function(e) {
    if( e.price >= 14.00 && e.price <= 18.00 ) {
      itemsSelected.push(e);
    }
  });
  console.log("Items that cost between $14 and $18:");
  itemsSelected.forEach(function(e) {
    console.log(" * " + e.title + "  Price: $" + e.price);
    console.log();
  });
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let itemsSelected = [];
  data.forEach(function(e) {
    if( e.currency_code === 'GBP' ) {
      itemsSelected.push(e);
    }
  });
  console.log("Items with GBP as the currency code:");
  itemsSelected.forEach(function(e) {
    console.log(" * " + e.title + "  Price: $" + e.price);
    console.log();
  });
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let itemsSelected = [];
  data.forEach(function(e) {
    if( e.materials.indexOf('wood') != -1 ) {
      itemsSelected.push(e);
    }
  });
  console.log("Items made of wood");
  itemsSelected.forEach(function(e) {
    console.log(" * " + e.title);
  });
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let itemsSelected = [];
  data.forEach(function(e) {
    if( e.materials.length >= 8 ) {
      itemsSelected.push(e);
    }
  });
  console.log("Items made from 8 or more materials:");
  itemsSelected.forEach(function(e) {
    console.log(" * " + e.title + ", " + e.materials.length + " materials used");
    e.materials.forEach(function(m) {
      console.log("    * " + m);
    })
  });
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let itemsSelected = [];
  data.forEach(function(e) {
    if( e.who_made === 'i_did' ) {
      itemsSelected.push(e);
    }
  });
  console.log("Items made my the seller: " + itemsSelected.length);
}
