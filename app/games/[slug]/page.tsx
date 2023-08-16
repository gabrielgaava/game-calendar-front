export default async function GameDetails({ params }: { params: { slug: string } }) {
    return (
        <main>
            <div>
                <h2>Game Details - {params.slug}</h2>
            </div>
            <div>
            </div>
        </main>
    )
}