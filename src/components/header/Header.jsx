import svgSilhueta from '../../assets/silhuetaCachorroGato.svg';

import styles from './styleHeader.module.css';

export function Header(){
    return(
        <div>
            <header>
                <div className={styles.quadrado}></div>
                <div className={styles.logo}>
                    <img src={svgSilhueta} className={styles.svg} alt="Img Dog and Cat" />
                </div>
            </header>
        </div>
    )
}