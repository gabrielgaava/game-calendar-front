import React from "react";
import GameCard from "@/components/GameCard";
import {getTodayMonth, getDay } from "@/utils/DateUtils";
import style from './home.module.scss';
import Footer from "@/components/Footer";

const getGameList = async () =>  {
  const res = await fetch(
    "https://game-calendar.netlify.app/games/soon",
    { next: { revalidate: 3600 } }
  );
  
  if(!res.ok) {
    throw new Error("Erro de comunicação com a API");  
  }
  
  return res.json();
}

const createDateGrid = (games: any[]) => {
  const gamesMap: any = {};
  
  games.forEach((i: any) => {
    const gameDate = getDay(i.released)
    const hashKey = 'gameDate' + gameDate;
    if(gamesMap[hashKey] != null) {
      gamesMap[hashKey] = [...gamesMap[hashKey], i]
    }
    
    else {
      gamesMap[hashKey] = [i];
    }
  });
}

export default async function Home() {
  
  const games: any = await getGameList();
  //const totalOfDays = getNumberOfDaysInMonth();
  
  return (
    <React.Fragment>
      <main className={style.container}>
        <div className={style.header}>
          <h3>Game Calendar</h3>
          <h1>Lançamentos em <strong>{getTodayMonth()}</strong></h1>
        </div>
        <div className={style.grid}>
          {games.results.map((game: any) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}
