import {DateTime} from "luxon"


const getCurrentMonth = (date: number) => {

    if (date) {
        return DateTime.fromSeconds(date).toFormat('LLLL').toLowerCase();
    }
}

export default getCurrentMonth