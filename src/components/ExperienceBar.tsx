import styles from "../styles/components/ExperienceBar.module.css"
import { ChallengesContext } from "../contexts/ChallengesContext"
import { useContext } from 'react'

export default function ExperiencBar() {

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = (Math.round(currentExperience * 1000/experienceToNextLevel))/10

    return(
        <header className={styles.experienceBar}>
         <span>0 xp</span>
         <div>
            <div style={{ width: `${percentToNextLevel}%` }} />

            <span className={styles.currentExperience} style={{ left: '50%' }}>
            {currentExperience}xp
            </span>
         </div>
         <span>{experienceToNextLevel} xp</span>   
        </header>
    );
}