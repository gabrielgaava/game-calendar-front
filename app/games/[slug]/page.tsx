import Image from "next/image";

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

    return (
        <main>
            <div>
                <h2>{data.name}</h2>
                <div dangerouslySetInnerHTML={data.description}></div>
                <div>
                    {screenshots.map((img: any) => <img key={img.id} src={img.image} alt={`screenshot ${params.slug}`} width={420} />)}
                </div>
            </div>
            <div>
            </div>
        </main>
    )
}