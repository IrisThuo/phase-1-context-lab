/* Your Code Here */

let createEmployeeRecord = (Employeeinfo) => {
    return{
     firstName: Employeeinfo[0],
     familyName: Employeeinfo[1],
     title: Employeeinfo[2],
     payPerHour: Employeeinfo[3],
     timeInEvents: [] ,
     timeOutEvents: []
    }

 }

 function createEmployeeRecords(Arr){
    let arg = []

    Arr.forEach((array) => {
       let newValues = createEmployeeRecord(array)
       arg.push(newValues)
    });
    return arg;
}

function createTimeInEvent(timeInfo){
    this.timeInEvents.push({
        type: "TimeIn",
        hour: Number(timeInfo.split(" ")[1]),
        date : timeInfo.split(" ")[0]
    })

    return this

}
function createTimeOutEvent(timeInfo){
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: Number(timeInfo.split(" ")[1]),
        date : timeInfo.split(" ")[0]
    })

    return this

}

function hoursWorkedOnDate(dateInfo){
    const timeIn = this.timeInEvents.filter((z) => {
        return z.date === dateInfo

    })[0].hour
    let timeOut = this.timeOutEvents.filter((z) => {
        return z.date === dateInfo

    })[0].hour

    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(dateInfo){
    return this.payPerHour * hoursWorkedOnDate.call(this, dateInfo)
}
 function findEmployeeByFirstName  (EmployeeCards, strFirstName){
    return  EmployeeCards.filter((Employeeinfo) => {
        return Employeeinfo.firstName === strFirstName
    })[0]
 }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(EmployeeCards){
    return EmployeeCards.map((Employeeinfo) => allWagesFor.call(Employeeinfo)).reduce((Salary, EmployeeWage) => Salary + EmployeeWage)
} 