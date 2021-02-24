import styles from "../styles/components/Profile.module.css"

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/Matheus-Lenzi.png" alt="Matheus Lenzi" />
            <div>
                <strong>Matheus Lenzi dos Santos</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}