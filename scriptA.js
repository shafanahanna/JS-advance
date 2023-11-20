
import { addArray } from "./script1.js";

import { addArray as concatArray} from "./script2.js";
const value1 =addArray([1,2,3]);
const value2 =concatArray([1,2,3],[4,5,6])
console.log(value1);
console.log(value2)