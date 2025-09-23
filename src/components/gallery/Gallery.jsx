import styles from './styleGallery.module.css';

export function Gallery(){

    const imgsCarrossel = [
        "https://th.bing.com/th/id/OIP.EKXuFtwkP_a4sVK1nd2PsgHaEK?w=300&h=300&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.7jEo7oAWFSIVZkg6Bo-u7gHaEx?w=300&h=300&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.WZUs0hbKpn98VO_5Q2uYcgHaE8?w=300&h=300&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.rvX0rHFP3a50rif7FDgiPAHaEK?w=300&h=300&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.t-ExCMBPx4Us0gFmZ39INAHaEK?w=300&h=300&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    ]

    return(
        <section className={styles.container}>
            <div className={styles.containerTexts}>
                <h2>Galeria</h2>
                <p>
                    Confira alguns dos trabalhos realizados pelo nosso time de especialistas em banho e tosa a domicílio. 
                </p>
            </div>
            <div className={styles.containerCarrossel}>
                <div className={styles.card}>
                    {imgsCarrossel.map((img, index) => (
                        <img key={index} src={img} alt={`Imagem ${index + 1}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}