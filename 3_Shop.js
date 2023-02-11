/* Q.3] A shop will give discount of 10% if the total cost of purchased quantity is more than 1000. Ask user for quantity & assume per unit cost to be 100. Judge and print total cost for user. */

let value, tprice, cost = 100

let qty = prompt("Enter The qty Purchased")
qty = Number.parseInt(qty)
tprice = qty * cost

if (tprice >= 1000)
 {
  value = tprice * 0.1
  console.log("\n The Discount Allowed=%d", value)
  console.log("\n The Total Price Without Discount Deducted=%d", tprice)
  console.log("\n The Grand Total Price=%d", tprice - value)
}

else {
  console.log("\n The Discount Not Allowed")
   console.log("\n The Total Price Without Discount Deducted=%d", tprice)
}