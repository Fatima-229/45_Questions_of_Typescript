"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCareInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
let answer = storeCareInfo("Koenigsegg", "Jesko", { color: "black" }, { features: ["Navigation", "Power Window"] });
console.log(answer);
