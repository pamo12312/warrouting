"use client"
import styles from './games.module.css';
import Link from "next/link";

export const gamesData = [
    {
        "id": 1,
        "title": "The Lost Expedition",
        "genre": "Adventure",
        "release_date": "2021-05-15",
        "description": "Embark on a perilous journey through uncharted territories in search of a legendary treasure."
    },
    {
        "id": 2,
        "title": "Galactic Conquest",
        "genre": "Strategy",
        "release_date": "2020-11-28",
        "description": "Build your empire, conquer planets, and lead your armies to victory in this epic space strategy game."
    },
    {
        "id": 3,
        "title": "Dark Shadows",
        "genre": "Horror",
        "release_date": "2019-10-31",
        "description": "Explore haunted locations, uncover dark secrets, and survive terrifying encounters with supernatural beings."
    },
    {
        "id": 4,
        "title": "Street Legends",
        "genre": "Action",
        "release_date": "2018-07-22",
        "description": "Rise through the ranks of the underground street racing scene, customize your ride, and take on rival crews."
    },
    {
        "id": 5,
        "title": "Fantasy Quest",
        "genre": "RPG",
        "release_date": "2017-03-10",
        "description": "Embark on an epic adventure, battle mythical creatures, and unravel the mysteries of a magical world."
    },
    {
        "id": 6,
        "title": "Minecraft",
        "genre": "Sandbox",
        "release_date": "2009-11-07",
        "description": "This is the best game you will ever play. Nothing is better then this. Fortnite is for script kiddies."
    }
]

export function GameListUpdate({id,  title, genre, release_date, description}){
    let game = gamesData.find(game => game.id === id);
    if (game) {
        game.release_date = release_date;
        game.title = title;
        game.genre = genre;
        game.description = description;
    }

    console.log(gamesData);
}
export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <p className={styles.nadpis}>Vaše hry</p>
            <div className={styles.seznamKaret}>
                {gamesData.map(game => (
                    <div key={game.id} className={styles.karta}>
                        <div className={styles.nadpisHry}>{game.title}</div>
                        <div className={styles.zanr}><strong>Žánr:</strong> {game.genre}</div>
                        <div className={styles.datumVydani}><strong>Datum vydání:</strong> {game.release_date}</div>
                        <div className={styles.popis}><strong>Popis:</strong> {game.description}</div>
                        <Link href={`/games/${game.id}/edit`}>
                            <p className={styles.tlacitkoUpravit}>Upravit</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}