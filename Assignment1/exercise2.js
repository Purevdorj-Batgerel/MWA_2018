function isWeekend() {
    const todayDate = new Date();
    // const day = todayDate.getDay();
    const day = 6;

    /** Obvious way */
    switch(day) {
        case 0:
        case 6:
            return "weekend";
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "weekday"
    } 



    /** Silly way */
    let strDay = day + "";
    strDay = strDay.replace("0", "weekend")
        .replace("6", "weekend")
        .replace("1", "weekday")
        .replace("2", "weekday")
        .replace("3", "weekday")
        .replace("4", "weekday")
        .replace("5", "weekday");

    return strDay;
}

console.log(isWeekend());