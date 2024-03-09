"use client";
import styles from './page.module.css';
import { gamesData } from "@/app/games/page";
import Link from "next/link";
import { useState } from 'react';

export default function Page({ params }) {
    const selectedGame = gamesData.find(game => game.id === parseInt(params.id));

    const [title, setTitle] = useState(selectedGame.title || "");
    const [genre, setGenre] = useState(selectedGame.genre || "");
    const [releaseDate, setReleaseDate] = useState(selectedGame.release_date || "");
    const [description, setDescription] = useState(selectedGame.description || "");

    const handleSave = () => {
        console.log("Název:", title);
        console.log("Žánr:", genre);
        console.log("Datum vydání:", releaseDate);
        console.log("Popis:", description);
    };

    const handleGoBack = () => {
        window.location.href = '/games';
    };

    return (
        <div className={styles.gameDetails}>
            <input type="text" className={styles.title} value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
            <input type="text" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className={styles.saveButton} onClick={handleSave}>Save</button>
            <button className={styles.goBackButton} onClick={handleGoBack}>Go Back</button>
        </div>
    );
}
