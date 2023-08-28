'use client'
import {getDay} from "@/utils/DateUtils";
import styles from "./styles.module.scss";
import Link from "next/link";
import Plataform from "@/components/Plataform";
import placeholder from "@/assets/images/placeholder.png";

export default function GameCard({ game }: any){

    const background = game.background_image
        ? game.background_image
        : placeholder.src;

    return (
        <div className={styles.container}>
            <div className={styles.date}>
                <span>{getDay(game.released)}</span>
            </div>
            <Link href={`/games/${game.slug}`}>
                <div className={styles.card} style={{background: "url(" + background + ")"}}>
                    <div className={styles.overlay}>
                        <h3 className={styles.title}>{game.name}</h3>
                        <div className={styles.plataforms}>
                            {game.platforms.map((item: any) => (
                                <Plataform key={item.platform.id} data={item.platform} />
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}