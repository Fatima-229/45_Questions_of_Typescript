import { features } from "process";

function storeCareInfo(
  manufacturer: string,
  modelName: string,
  ...extraOption: { [key: string]: any }[]
): object {
  const carInfo = {
    manufacturer,
    modelName,
    ...Object.assign({}, ...extraOption),
  };

  return carInfo;
}

let answer = storeCareInfo(
  "Koenigsegg",
  "Jesko",
  { color: "black" },
  { features: ["Navigation", "Power Window"] }
);

console.log(answer);
