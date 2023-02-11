/* Q.5] A school has following rules for grading : -
        a] Below 25 = F grade.
        b] 25 - 45 = E grade.
        c] 45 - 60 = D grade.
        d] 50 - 60 = C grade.
        e] 60 - 80 = B grade.
        f] Above 80 = A grade.
      Ask user to enter marks & print the corresponding grades. */

let marks=prompt("Enter The Your Marks")
marks=Number.parseInt(marks)
if(marks<25 && marks>=0)
{
  console.log("\n Your Grade F")
}

else if(marks>=25 && marks<45)
{
  console.log("\n Your Grade E")
}

else if(marks>=45 && marks<50)
{
  console.log("\n Your Grade D")
}

else if(marks>=50 && marks<60)
{
  console.log("\n Your Grade C")
}

else if(marks>=60 && marks<80)
{
  console.log("\n Your Grade B")
}

else if(marks>=80 && marks<=100)
{
  console.log("\n Your Grade A")
}

else{
  console.log("Invalid Input")
}