const receivedData = prompt('Enter a number hours for translate:','')
const receivedNumber = Number(receivedData)
if (Number.isNaN(receivedNumber)) {
    alert('The number of hours entered is incorrect')
}
else if (receivedData === null) {
    alert('select button witch left')
}
else if (receivedData.includes(' ')) {
    alert('You  have not entered a number')
}
else if (receivedData === '') {
    alert('You have not entered any number')
}
else if (!(receivedNumber < 0)) {
    const result = 3600 * receivedNumber
    alert(receivedNumber + ' ' + 'hours is it ' + result + "second")
}
else {
    const result = 3600 * receivedNumber
    alert(`its not possible, only for your' + ${receivedData} +
     'hours is it ' + ${result} + "second"`)
}