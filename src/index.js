module.exports = function toReadable(number) {
    const arrFirstTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
        'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];
    const arrTens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
        'eighty', 'ninety'
    ];

    if (number < 20) {
        return arrFirstTwenty[number];
    } else if (number >= 20 && number <= 99) {
        if (number % 10 === 0) {
            return arrTens[number / 10];
        } else {
            return `${arrTens[Math.floor(number / 10)]} ${arrFirstTwenty[number % 10]}`;
        }
    } else if (number >= 100 && number < 1000) {
        if (number % 100 === 0) {
            return `${arrFirstTwenty[number / 100]} hundred`
        } else if (number % 10 === 0) {
            return `${arrFirstTwenty[Math.floor(number / 100)]} hundred ${arrTens[(Math.floor(number / 10)) % 10]}`
        } else if (number % 100 < 20) {
            return `${arrFirstTwenty[Math.floor(number / 100)]} hundred ${arrFirstTwenty[number % 100]}`
        } else {
            return `${arrFirstTwenty[Math.floor(number / 100)]} hundred ${arrTens[(Math.floor(number / 10)) % 10]} ${arrFirstTwenty[number % 10]}`
        }
    }
}
