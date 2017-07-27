# Read through a dataset from etsy.com and solve the following six problems.

1. Show the average price of all items.
1. Get all the items that cost between $14 and $18 USD.
1. Find the item that has 'GBP' currency code.
1. Display all the items that are made of wood.
1. For the items made of 8 or more materials, Display
the name, number of materials, and a list of those
materials.
1. Find the items that were made by their sellers.

***

The data was supplied as a JS object and is found
in `data.js`. The solutions to each of these problems
involved scanning through the list of items and
matching on the desired property.

Throughout each, I used a variable named itemsSelected
and pushed matching items onto that list.

Then I just had to loop over the itemsSelected and
`console.log` the desired information.
