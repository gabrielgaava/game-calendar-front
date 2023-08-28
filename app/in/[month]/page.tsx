import React from "react";
import {getMonthData, getMonthRange, getTodayMonth, MONTHS } from "@/utils/DateUtils";
import style from './styles.module.scss';
import Footer from "@/components/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import GamesGrid from "@/components/GamesGrid";
import Link from "next/link";

const getGameList = async (range: any) =>  {
  
  console.log(`https://game-calendar.netlify.app/games&dates=${range}&`);
  
  const res = await fetch(
    `https://game-calendar.netlify.app/games?dates=${range}&page=1&ordering=released&platforms=4,187,186,7&page_size=100`,
    { next: { revalidate: 3600 } }
  );
  
  if(!res.ok) {
    console.log(res);
    throw new Error("Erro de comunicação com a API");  
  }
  
  return res.json();
}


export default async function InPage({ params }: { params: { month: string } }) {
  
  const games: any = await getGameList(getMonthRange(params.month));
  const month = getMonthData(params.month);
  
  return (
        <React.Fragment>
      <main className={style.container}>
        <div className={style.header}>
          <Link href={`/in/${month.previus}`} className={style.headerLink}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>{MONTHS[month.previus - 1]}</span>
          </Link>
          <div>
            <h3>Game Calendar</h3>
            <h1>Lançamentos em <strong>{month.text}</strong></h1>
          </div>
          <Link href={`/in/${month.next}`} className={style.headerLink}>
            <span>{MONTHS[month.next - 1]}</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <GamesGrid games={games} />
        <div className={style.footerLinks}>
          <Link href={`/in/${month.previus}`}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>{MONTHS[month.previus - 1]}</span>
          </Link>
          <Link href={`/in/${month.next}`}>
            <span>{MONTHS[month.next - 1]}</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </main>
      <Footer />
        </React.Fragment>
  )
}
