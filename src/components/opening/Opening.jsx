import svgSilhueta from '../../assets/silhuetaCachorroGato.svg';
import styles from './styleOpening.module.css';

export function Opening(){
    return(
        <figure className={styles.figure}>
            <img src={svgSilhueta} className={styles.svg} alt="Img Dog and Cat" />
            <h1 className={styles.h1}>DR TOSA</h1>
        </figure>
        
    )
}