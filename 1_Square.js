/* Q.1] Take values of length & Breadth of a Rectangle from user and check if it's a Square. */

let lenght = prompt("Enter Lenght Value")
lenght = Number.parseInt(lenght)

let breadth = prompt("Enter Breadth Value")
breadth = Number.parseInt(breadth)

if (lenght == breadth) {
  console.log("Shape  Is Square")
}
  
else {
  console.log("Shape Is Rectangle")
}
