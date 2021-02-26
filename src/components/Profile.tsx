import { useContext } from 'react'
import styles from "../styles/components/Profile.module.css"
import { ChallengesContext } from "../contexts/ChallengesContext"

export default function Profile() {

    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/Matheus-Lenzi.png" alt="Matheus Lenzi" />
            <div>
                <strong>Matheus Lenzi dos Santos</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    {level}
                </p>
            </div>
        </div>
    );
}