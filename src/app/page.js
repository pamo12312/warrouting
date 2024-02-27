import styles from "./page.module.css";
import Link from 'next/link'
export default function Home() {
  return (

<div>
    <div className={styles.container}>
Úvodni stránka     </div>
    <div className={styles.content}>
        Projekt: Aplikace pro Správu Her<br/>
        Tento projekt se zaměřuje na vytvoření jednoduché aplikace pro správu her využívající framework Next.js a jeho
        nový App Router. Aplikace má za cíl usnadnit uživatelům organizaci a sledování her, které mají ve své sbírce
        nebo které ještě chtějí zahrát.
        <br/>
        Funkce Aplikace<br/>
        Úvodní Stránka<br/>
        <br/>
        Na úvodní stránce se uživatelé dozvědí stručné představení aplikace a budou mít možnost přejít na Dashboard, kde
        <br/> naleznou přehled všech dostupných her.<br/>

        Dashboard<br/>
        <br/>
        Dashboard zobrazuje seznam všech her spolu s jejich názvy a žánry. U každé hry je k dispozici odkaz nebo
        <br/> tlačítko, které uživatele přenese na detailovou stránku dané hry.<br/>
        <br/>
        Detail Hry<br/>
        <br/>
        Detail hry poskytuje uživateli podrobné informace o vybrané hře, včetně názvu, žánru, data vydání a krátkého
        <br/> popisu. Z této stránky může uživatel také přejít na stránku pro editaci informací o hře.

        Editace Hry<br/>

        <br/> Stránka editace hry umožňuje uživateli upravit informace o vybrané hře prostřednictvím formuláře. Po
        úspěšné
        editaci se uživatel vrátí zpět na detail hry.<br/>


    </div>
        <button className={styles.button}>
    <Link className={styles.link} href="/games">Dash Board link</Link>
        </button>
</div>)
}
