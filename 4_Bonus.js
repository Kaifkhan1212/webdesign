/* Q.4] A company decided to give bonus of 10% to employee if their time of service is more than 5 years. Ask user for their salary per month, years of service and print net bonus and total salary.*/

let bonus, salary, tsalary

let service = prompt("Enter The Years Of Service")
service = Number.parseInt(service)
if (service >= 7)
 {
  salary = prompt("Enter The Your Salary")
  salary = Number.parseInt(salary)
  if (salary <= 100000 && salary >= 1000)
 {
    bonus = salary * 0.5
    console.log("\n  The Bonus Allowed=%d", bonus)
    tsalary = salary + bonus
    console.log("\n  The Total salary=%d", tsalary)
  }

  else
 {
    console.log("Invalid Input")
  }
}

else 
{
  salary = prompt("Enter Your Salary")
  salary = Number.parseInt(salary)
  if (salary <= 100000 && salary >= 1000)
 {
    bonus = salary * 0.04
    console.log("\n  The Bonus Allowed=%d", bonus)
    tsalary = salary + bonus
    console.log("\n  The Total salary=%d", tsalary)
  }

  else {
    console.log("Invalid Input")
  }
}