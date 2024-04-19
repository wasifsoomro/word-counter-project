#!/usr/bin/env node
import inquirer from "inquirer";
let countWords = await inquirer.prompt([{
        type: "input",
        name: "sentence",
        message: "Write a sentence to count words"
    }]);
let words = countWords.sentence.trim().split(" ");
console.log(`Your sentence have ${words.length} words`);
