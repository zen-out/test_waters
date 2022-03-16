/**
 * @example 
 * test_waters.test(function)
 * @author zen-out
 * @date 2022-03-06
 * @param {any} randomFunction
 * @returns {any}
 */
function test(randomFunction) {
    let randomString = "helllo"
    let randomArr = [1, 2, 3]
    let randomArrString = ["item one", "item two"]
    let randomObj = { id: 1, name: "lesley" }
    let randomBool = true;
    let randomNum = 34
    let emptyObj = {}
    let randomUndefined = undefined;
    let randomNull = null;
    let random0 = 0;
    let emptyString = ""
    let negNum = -4
    let allInputs = [randomString, randomArr, randomArrString, randomObj, randomBool, randomNum, emptyObj, randomUndefined, randomNull, random0, emptyString, negNum]
    let getTests = []
    for (let i = 0; i < allInputs.length; i++) {
        let newObj = {}
        let input = allInputs[i]
        let output;
        try {
            output = randomFunction(allInputs[i])
        } catch (error) {
            output = error;
        }
        newObj["input"] = input
        newObj["output"] = output
        getTests.push(newObj)
    }
    return getTests
}
/**
 * testFunc(name, func, array)
 * @author zen-out
 * @date 2022-03-16
 * @param {any} name
 * @param {any}  func
 * @param {any}  array
 * @returns {any}
 */

function testFunction(name, func, array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        let newObj = {}
        newObj["name"] = name;
        newObj["input"] = array[i]
        let getResult = func(array[i])
        newObj["output"] = getResult;
        newArr.push(newObj)
    }
    return newArr
}

/**
 * testAsyncFunction(name, func, array of objects for input testing)
 * @author zen-out
 * @date 2022-03-16
 * @param {any} name
 * @param {any}  func
 * @param {any}  array
 * @returns {any}
 */
async function testAsyncFunction(name, func, array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        let newObj = {}
        newObj["name"] = name;
        newObj["input"] = array[i]
        let getResult = await func(array[i])
        newObj["output"] = getResult;
        newArr.push(newObj)
    }
    return newArr
}

module.exports = { test, testFunction, testAsyncFunction };