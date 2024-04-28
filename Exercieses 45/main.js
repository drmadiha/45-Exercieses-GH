//.............45Q.........................
function carInfo(manufacturer, model, ...extraOption) {
    const carInfo = {
        manufacturer,
        model,
        ...Object.assign({}, ...extraOption)
    };
    return carInfo;
}
;
let answer = carInfo("Toyota", "Corolla", { color: 'black' }, { features: ['Navigation', 'Power Window'] });
console.warn(answer);
export {};
