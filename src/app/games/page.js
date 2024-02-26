import styles from './games.module.css'
import Link from "next/link";
export default function Page() {
    const gamesData = [
        {
            "id": 1,
            "title": "Public what fly least",
            "genre": "Mystery",
            "release_date": "2018-09-13",
            "description": "Friend usually treat general smile. Doctor onto civil. From appear reason television probably. Give economy what different especially particular."
        },
        {
            "id": 2,
            "title": "Close court side far",
            "genre": "Action",
            "release_date": "2009-12-09",
            "description": "Kitchen party receive plan quickly choose three. Wear pay form former discuss. Agreement check half happy. Public market difficult enough."
        },
        {
            "id": 20,
            "title": "Question heart bad",
            "genre": "Drama",
            "release_date": "2011-04-06",
            "description": "It both task compare order tell really open. Fire appear movement drive child. Personal might office good month. Technology key beat. Artist between scientist piece."
        }
    ];

    return (<div>
        <h1 className="home">Games</h1>



    <div>
        <h1>Seznam her</h1>
        <div className={styles.container}>
            {gamesData.map(game => (
                <div key={game.id}>
                    <div className={styles.card}>
                        <h2>{game.title}</h2>
                        <p><strong>Žánr:</strong> {game.genre}</p>
                        <p><strong>Datum vydání:</strong> {game.release_date}</p>
                        <p><strong>Popis:</strong> {game.description}</p>
                        <button className={styles.gameButton}>
                            <Link className={styles.link} href={`/games/${game.id}`}>
                                Detail hry
                            </Link>

                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
        </div>
    )
}