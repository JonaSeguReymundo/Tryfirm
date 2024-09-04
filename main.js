/*//Exercise 01
const person = {
    events: ["drunk", "drive", "workout"],
    accident: true
};

console.log(person.events[0]);
console.log(person.accident);

//Exercise 02
let journal = [{
        events: ["drunk", "drive", "workout"],
        accident: true
    },
    {
        events: ["cook", "run", "call"],
        accident: false
    },
    {
        events: ["talk", "sleep", "study"],
        accident: false
    }
];

//Exercise 03
function addJournal(events, accident) {
    journal.push({ // defino que es un objeto con {}
        events,
        accident
    });
};

addJournal(["eat", "swim", "learn"], false);
console.log(journal[0].accident); */


//Exercise higher-order functions
function transformArray(array, tranform) {
    let passed = [];
    for (let element of array) {
        passed.push(tranform(element));
    }
    return passed;
}

console.log(transformArray([1, 2, 3, 4], e => e * 2));