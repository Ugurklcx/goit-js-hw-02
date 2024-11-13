console.log("------------TASK-2------------")
function formatMessage(message, maxLength) {
    let text = message;
    let length = text.length;

    if (length > maxLength) {
        let str = message.slice(0, maxLength);
        let result = str.concat("...");
        return result;
    }
    else {
        return message;
    }
}
console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));