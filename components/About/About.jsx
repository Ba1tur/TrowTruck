import a from './About.module.scss'
import Title from "@/components/Title/Title";

const About = () => {
    return (
        <section id='about' className={a.about}>
            <div className="container">
                <div className={a.about__content}>
                    <div className={a.about__left}>
                        <Title text="О нас" />
                        <p className={a.about__left_text}>
                            Наша компания предоставляет услуги эвакуатора на протяжении более 10 лет. Наши водители очень компетентны в своем деле и имеет стаж работы в сфере транспортных перевозок более 20 лет.
                        </p>
                    </div>
                    <div className={a.about__right}>
                        <div
                            className={a.about__right__block}>
                            <h1>3000+</h1>
                            <h3>клиентов</h3>
                            <p>Доверие, качество.</p>
                        </div>
                        <div
                            className={a.about__right__block}>
                            <h1>1500</h1>
                            <h3>Сом</h3>
                            <p>Цена, скидки.</p>
                        </div>
                        <div
                            className={a.about__right__block}>
                            <h1>24/7</h1>
                            <h3>Диспетчер</h3>
                            <p>всегда онлайн</p>
                        </div>
                        <div
                            className={a.about__right__block}>
                            <h1>12</h1>
                            <h3>Лет</h3>
                            <p>Опыт, качество.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;