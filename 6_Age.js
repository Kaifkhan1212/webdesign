/* Q.6] Take input of age of 3 people by user and determine oldest & youngest among them. */


let age1 = prompt("Enter The First Age")
age1 = Number.parseInt(age1)

let age2 = prompt("Enter The Second Age")
age2 = Number.parseInt(age2)

let age3 = prompt("Enter The Third Age")
age3 = Number.parseInt(age3)

// FOR HIGHEST AGE

if (age1 > age2) {

  if (age1 > age3)
  {
    console.log("\n Age %d Is Highest", age1)
  }
  else
  {
    console.log("\n Age %d Is Highest", age3)
  }
}
else
{ 
   if (age2>age3){
    console.log("\n Age %d Is Highest", age2)
  }
  else{
    console.log("\n Age %d Is Highest", age3)
  }
}

//FOR LOWEST AGE 
if (age1 < age2) {

  if (age1 < age3) {
    console.log("\n Age %d Is Lowest", age1)
  }
  else {
    console.log("\n Age %d Is Lowest", age3)
  }
}
else {
  if (age2 < age3) {
    console.log("\n Age %d Is Lowest", age2)
  }
  else {
    console.log("\n Age %d Is Lowest", age3)
  }
}