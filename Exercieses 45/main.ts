//.............45Q.........................

//Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.


import { features } from "process";

function carInfo(manufacturer: string , model: string , ...extraOption:{ [key:string]:any} []):
Object
{
    const carInfo = {
        manufacturer,
        model,
        ...Object.assign({}, ...extraOption)

    }
      return carInfo;
};

let answer =carInfo("Toyota","Corolla", {color: 'black' }, {features: ['Navigation','Power Window']});

console.warn(answer);


  


