import styles from "./styles.module.scss";
import Footer from "@/components/Footer";
import { getTimeBetweenNowAndRelease } from "@/utils/DateUtils";
import Countdown from "react-countdown";
const getGameData = async (slug: any) => {
    const res = await fetch(
        `https://game-calendar.netlify.app/games/${slug}`,
        { next: { revalidate: 3600 } }
        );

    if(!res.ok) {
        throw new Error("Erro de comunicação com a API");
    }

    const data: any =  await res.json();
    data.description = { __html: data.description }

    return data;
}
const getGameScreenshots = async (slug: any) => {
    const res = await fetch(
        `https://game-calendar.netlify.app/games/${slug}/screenshots`,
        { next: { revalidate: 3600 } }
        );

    if(!res.ok) {
        throw new Error("Erro de comunicação com a API");
    }

    const data: any =  await res.json();
    return data.results;
}


export default async function GameDetails({ params }: { params: { slug: string } }) {

    const data = await getGameData(params.slug);
    const screenshots = await getGameScreenshots(params.slug);
    const countdown = getTimeBetweenNowAndRelease(data.released);

    return (
        <>
            <main className={styles.main}>

                <div className={styles.background} style={{background: "url(" + data.background_image + ")"}}>
                    <div className={styles.overlayStyle}></div>
                </div>

                <div className={styles.flex}>
                    <div>
                        <div className={styles.container}>
                            <h2>{data.name}</h2>
                            <div dangerouslySetInnerHTML={data.description}></div>
                        </div>
                    </div>

                    <div className={styles.metrics}>
                        <p>Lançamento em: {data.released}</p>
                        {data.metacritic && <p>Metacrict: {data.metacritic}</p>}
                        {data.rating && <p>Rating: {data.rating}</p>}
                    </div>

                </div>

                <div className={styles.images}>
                    {screenshots.map((img: any) => <img key={img.id} src={img.image} alt={`screenshot ${params.slug}`} width={420} />)}
                </div>

            </main>
            <Footer />
        </>
    )
}