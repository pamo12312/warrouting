"use client";
import styles from './page.module.css';
import { gamesData } from "@/app/games/page";
import Link from "next/link";
import { useState } from 'react';
import { GameListUpdate } from "@/app/games/page";

export default function Page({ params }) {
    const selectedGame = gamesData.find(game => game.id === parseInt(params.id));


    const [title, setTitle] = useState(selectedGame.title);
    const [genre, setGenre] = useState(selectedGame.genre);
    const [releaseDate, setReleaseDate] = useState(selectedGame.release_date);
    const [description, setDescription] = useState(selectedGame.description);


    const handleSave = () => {
        GameListUpdate({
            id: selectedGame.id,
            title,
            genre,
            release_date: releaseDate,
            description
        });
    };

    return (
        <div className={styles.gameDetails}>
            <input type="text" className={styles.title} value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
            <input type="text" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className={styles.saveButton} onClick={handleSave}>Save</button>
            <button className={styles.goBackButton}><Link href="/games">Back</Link></button>
        </div>
    );
}
