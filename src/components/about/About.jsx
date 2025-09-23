import styles from './styleAbout.module.css';

export function About(){
    return(
        <section className={styles.container}>
            <div className={styles.containerTexts}>
                <p>Há mais de 28 anos cuidando de pets com dedicação e carinho, nosso serviço de banho e tosa a domicílio nasceu para tornar a vida dos tutores mais prática e tranquila. Cada atendimento é personalizado, garantindo que seu pet receba atenção e cuidado com todo o conforto que merece.</p>
                <p>Nossa equipe é formada por profissionais experientes e apaixonados pelos animais. Usamos produtos de qualidade e técnicas seguras para que cada banho ou tosa seja uma experiência tranquila e agradável, diretamente na sua casa, sem estresse para você ou seu pet.</p>
                <p>Mais do que serviços, queremos construir uma relação de confiança. Cada visita é uma oportunidade de proporcionar saúde, bem-estar e alegria ao seu pet, enquanto facilitamos sua rotina. Com a gente, seu melhor amigo recebe cuidado profissional e muito carinho, sem sair de casa.</p>
                <p>Se você quiser, posso criar também uma versão ainda mais curta e chamativa, que funcione como destaque no site, ideal para capturar rapidamente a atenção do visitante. Quer que eu faça?</p>
            </div>
        </section>
    )
}