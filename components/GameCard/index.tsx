'use client'
import {formatedDate, getDay} from "@/utils/DateUtils";
import styles from "./styles.module.css";
import Link from "next/link";
import Plataform from "@/components/Plataform";

export default function GameCard({ game }: any){
    return (
        <div className={styles.container}>
            <div className={styles.date}>
                <span>{getDay(game.released)}</span>
            </div>
            <Link href={`games/${game.slug}`}>
                <div className={styles.card} style={{background: "url(" + game.background_image + ")"}}>
                    <div className={styles.overlay}>
                        <h3 className={styles.title}>{game.name}</h3>
                        <div className={styles.plataforms}>
                            {game.platforms.map((item: any) => (
                                <Plataform data={item.platform} />
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}