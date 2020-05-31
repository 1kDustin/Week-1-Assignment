let applePrice = 2.35;
let bananaPrice = 2.45;

let myMoney = 25;
let wifesMoney = 30;


let numberOfFriends = 50;
let wifesNumberOfFriendsTwo = 100;

let myAge = 25;
let myWifesAge = 23;

let firstName = 'Dustin';
let wifesFirstName = 'Brooke';

let lastName = 'Schomburg';
let wifesLastName = 'Schomburg';

let middleInitial = 'L';
let wifesMiddleInitial = 'N';

let myMoneyAfterPurchase = (myMoney - applePrice);
console.log(myMoneyAfterPurchase + ' is how much money I have left after I bought an apple.');

let numberOfFriendsPerYear = (numberOfFriends / myAge);
console.log(numberOfFriendsPerYear + ' is the number of friends I have made per year');

let fullName = (firstName + middleInitial + lastName);
console.log(fullName);

let firstname = 'Brooke';

if (firstname == 'Brooke') {
    console.log('Hello, Brooke')
} else {
    console.log('Hey, ' + firstname);
}

let costOfMIlk = 2;

if (costOfMIlk < 2) {
    console.log('We will buy 2 gallons');
} else if (costOfMIlk < 3) {
    console.log('We will buy one gallon');
} else {
    console.log('No thanks, way too expensive!')
}

let grade = 'c';

switch (grade) {
    case 'a':
        console.log('90-100');
        break;
        case 'b':
            console.log('80-89');
            break
            case 'c':
                console.log('70-79');
                break
                default: 
                console.log('0-69');
}

let a = 5;
let b = 6;

if (a ==b) {
    console.log('a is 5 and b is 6');
} else {
    console.log('a is not equal to be')
} else if {
    console.log('a is equal to b!!')
}