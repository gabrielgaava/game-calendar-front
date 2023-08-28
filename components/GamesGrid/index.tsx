import GameCard from "@/components/GameCard";
import style from "./styles.module.scss";

export default function GamesGrid({ games } : any) {
    return (
        <div className={style.grid}>
            {games.results.map((game: any) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    );
}