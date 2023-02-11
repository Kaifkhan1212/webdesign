/* Q.10] Write program using Switch-case statement for Months of Year.  */


let a = 'm', month
while (a == 'm') {
  let month = prompt("\n Enter  for Months of Year")
  month = Number.parseInt(month)

  switch (month) {
    case 1:
      console.log("\n The January.")
      break

    case 2:
      console.log("\n The February.")
      break

    case 3:
      console.log("\n The March.")
      break

    case 4:
      console.log("\n The April.")
      break

    case 5:
      console.log("\n The May.")
      break

    case 6:
      console.log("\n The June.")
      break

    case 7:
      console.log("\n The July.")
      break

    case 8:
      console.log("\n The August.")
      break

    case 9:
      console.log("\n The September.")
      break

    case 10:
      console.log("\n The October.")
      break

    case 11:
      console.log("\n The November.")
      break

    case 12:
      console.log("\n The December.")
      break

    default:
      console.log("\n Invalid Input.")
      break

  }
}