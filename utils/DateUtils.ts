import moment from "moment";
import 'moment/locale/pt-br';

const LOCALE = "pt-br"

export const getTodayMonth = () => {
    const mm = moment().locale(LOCALE);
    const month = mm.format('MMMM');
    
    return month.charAt(0).toUpperCase() + month.slice(1);
}

export const formatedDate = (date: any) => {
    const mm = moment(date, "YYYY/MM/DD").locale(LOCALE);
    return mm.format("L");
}

export const getNumberOfDaysInMonth = () => {
    const mm = moment().locale(LOCALE);
    return mm.daysInMonth();
}

export const getDay = (date: string): string => {
    const mm = moment(date, "YYYY/MM/DD").locale(LOCALE);
    const day = mm.date();
    return day > 9 ? `${day}` : `0${day}`;
}

export const getTimeBetweenNowAndRelease = (relaseDate: any) => {
    const mm = moment(relaseDate, "YYYY-MM-DD").locale(LOCALE);
    console.log(mm.toDate())
    return mm.toDate();
}