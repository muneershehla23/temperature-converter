function convert(event){
    event.preventDefault();

    console.log("function is running")

    let celsius= document.querySelector("#inputCelsius").value;
    let fahrenheit = celsius * 9/5 + 32;

    console.log(celsius)
    console.log(fahrenheit)

    document.querySelector("#resultWindow").innerHTML = `the temperature is fahrenheit is ${fahrenheit}`;
    
}