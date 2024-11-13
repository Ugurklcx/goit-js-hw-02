console.log("------------TASK-3------------")
function checkForSpam(message) {
    const text = message.toLowerCase();
    if (text.includes('spam') || text.includes('sale')) {
        return console.log("true");
    }
    else {
        return console.log("false");
    }
}
checkForSpam("Latest technology news") // false
checkForSpam("JavaScript weekly newsletter") // false
checkForSpam("Get best sale offers now!") // true
checkForSpam("Amazing SalE, only tonight!") // true
checkForSpam("Trust me, this is not a spam message") // true
checkForSpam("Get rid of sPaM emails. Our book in on sale!") // true
checkForSpam("[SPAM] How to earn fast money?") // true
