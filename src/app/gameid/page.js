


const GameDetail = ({ game }) => {
    const router = useRouter();
    const { id } = router.query;

    // V této ukázce se používá id z dynamické cesty, které Next.js automaticky zpracuje
    return (
        <div>
            <h1>Detail hry {id}</h1>
            <p><strong>Titul hry:</strong> {game.title}</p>
            <p><strong>Žánr:</strong> {game.genre}</p>
            <p><strong>Datum vydání:</strong> {game.release_date}</p>
            <p><strong>Popis:</strong> {game.description}</p>
        </div>
    );
};

export default GameDetail;

export async function getServerSideProps(context) {
    const gameId = context.params.id;

    // Simulace dat pro jednu konkrétní hru
    const gameData = {
        id: gameId,
        title: "Název hry",
        genre: "Žánr",
        release_date: "Datum vydání",
        description: "Popis hry"
    };

    return {
        props: {
            game: gameData
        }
    };
}
