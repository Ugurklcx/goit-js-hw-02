console.log("------------TASK-2------------")
function formatMessage(message, maxLength) {
    let text = message;
    let length = text.length;

    if (length > maxLength) {
        let str = message.slice(0, maxLength);
        let result = str.concat("...");
        console.log(result)
    }
    else {
        console.log(message)
    }
}
formatMessage("Curabitur ligula sapien", 16)
formatMessage("Curabitur ligula sapien", 23)
formatMessage("Vestibulum facilisis purus nec", 20)
formatMessage("Vestibulum facilisis purus nec", 30)
formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)
formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)