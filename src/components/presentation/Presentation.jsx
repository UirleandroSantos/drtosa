import imgBanner from '../../assets/imgBanner.svg';
import iconPlayer from "../../assets/svgVideoClip.svg";
import iconWhatsapp from "../../assets/icons8-whatsapp-48.png";



import styles from './stylesPresentation.module.css';

export function Presentation(){
    return(
        <div className={styles.container}>
            <div className={styles.wrap}>
                <section className={styles.containerTexts}>
                <div className={styles.texts}>
                    <h1>DR.TOSA</h1>
                    <h4>Carinho e cuidado para o seu pet, no conforto da sua casa.</h4>
                    <p>Do banho à tosa, do carinho aos cuidados especiais: nosso serviço de petshop a domicílio garante conforto, praticidade e bem-estar para o seu melhor amigo.</p>
                </div>
            </section>
            <section className={styles.containerButton}>
                <a href="#" className={styles.linkVideo}>Assista ao vídeo <img src={iconPlayer} alt="" /></a>
                <a href="https://wa.me/5582981071103?text=Olá, quero mais informações." className={styles.linkWhatsapp}>Fale conosco <img src={iconWhatsapp} alt="" /></a>
            </section>
            </div>
            <section className={styles.containerImg}>
                <div className={styles.quadradoAzul}></div>
                <div className={styles.quadradoAmarelo}></div>
                <img src={imgBanner} className={styles.imgBanner} alt="" />
            </section>
        </div>
    )
}