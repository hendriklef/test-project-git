//Conversion of value from Celsius to Fahrenheit
exports.celsiusToFahrenheit = function (x){
 return x*(9/5)
}

//Conversion of value from Fahrenheit to Celsius
exports.fahrenheitToCelcius = function (fahrenheit){
 if (true) {
    return (fahrenheit-32)*(5/1)
 }   
}

//Function also defined in calculation.js
//Function that determines greeting based on real time
exports.getGreetingDependOnTime =  function (myDate) {
    let timeBegin = '06:00';
    let timeEnd = '22:00';
    const dateBegin = new Date('2020-01-01 ' + timeBegin);
    const dateEnd = new Date('2020-01-01 ' + timeEnd);
    const dateCurrent = new Date('2020-01-01 ' + myDate.getHours() + ":" + myDate.getMinutes());

    if (dateBegin.getTime() < dateCurrent.getTime()) {
        if (dateCurrent.getTime() < dateEnd.getTime()) {
            return "Guten Morgen"
        }
    }
    else if (dateCurrent.getTime() > dateEnd.getTime() && dateBegin.getTime() > dateCurrent.getTime()) 


    {
        return "Gute Nacht"
    }
}