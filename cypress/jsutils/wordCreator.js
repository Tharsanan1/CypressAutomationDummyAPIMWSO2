const alphabetics = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789"
const space = " "; 

function createRandomWordWith(options, length) {
    const optionsList = options.split(" ");
    const loopThroughList = []
    for (let index = 0; index < optionsList.length; index++) {
        const element = optionsList[index];
        if (element === 'Alphabetics') {
            loopThroughList.push(alphabetics);
        } else if (element === 'Numbers') {
            loopThroughList.push(numbers);
        } else if (element === 'Spaces') {
            loopThroughList.push(space);
        }
    }
    let word = '';
    // for (let index = 0; index < length; index++) {
    //     const lenOfLoopThroughList = loopThroughList.length;
    //     const randomListIndex = getRandomInt(0, lenOfLoopThroughList-1);
    //     const randomCharactorIndex = getRandomInt(0, loopThroughList[randomListIndex].length-1)
    //     word += loopThroughList[randomListIndex].charAt(randomCharactorIndex);
    // }

    let loopThroughListIndex = 0
    cy.log(options, loopThroughList)
    for (let index = 0; index < length; index++) {
        const lenOfLoopThroughList = loopThroughList.length;
        const randomCharactorIndex = getRandomInt(0, loopThroughList[loopThroughListIndex].length - 1)
        word += loopThroughList[loopThroughListIndex].charAt(randomCharactorIndex);
        loopThroughListIndex++;
        cy.log(loopThroughListIndex)
        if (loopThroughListIndex === lenOfLoopThroughList) {
            loopThroughListIndex = 0;
        }
    }
    return word;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { createRandomWordWith };