import moment from "moment";
import 'moment/locale/pt-br';

const LOCALE = "pt-br"

export const getTodayMonth = () => {
    const mm = moment().locale(LOCALE);
    const month = mm.format('MMMM');
    
    const text = month.charAt(0).toUpperCase() + month.slice(1);
    const value = Number(mm.format('MM'));
    const next = value + 1 > 12 ? 1 : value + 1;
    const previus = value - 1 < 1 ? 12 : value - 1;

    return { text, value, next, previus };
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

export const getMonthData = (month: any) => {
    const today = moment().local();
    const date = `${today.year()}-${month}-01}`

    const mm = moment(date, "YYYY-MM-DD").locale(LOCALE);

    const text = MONTHS[month - 1];
    const value = Number(mm.format('MM'));
    const next = value + 1 > 12 ? 1 : value + 1;
    const previus = value - 1 < 1 ? 12 : value - 1;

    return { text, value, next, previus };
}

export const getMonthRange = (month: any) => {
    const formatedMonth = month < 10 ? "0" + month : month;
    const today = moment().local();
    const start = today.year() + "-" + formatedMonth + "-01";
    const end = today.year() + "-" + formatedMonth + "-30";

    return start + "," + end;
}

export const MONTHS = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
