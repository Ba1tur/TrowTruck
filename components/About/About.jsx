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
                            <h1 className={a.about__right__block__title}>3000+</h1>
                            <h6>клиентов</h6>
                            <p>Доверие, качество.</p>
                        </div>
                        <div
                            className={a.about__right__block}>
                            <h2 className={a.about__right__block__title}>1500</h2>
                            <h6>Сом</h6>
                            <p>Цена, скидки.</p>
                        </div>
                        <div
                            className={a.about__right__block}>
                            <h3 className={a.about__right__block__title}>24/7</h3>
                            <h6>Диспетчер</h6>
                            <p>всегда онлайн</p>
                        </div>
                        <div
                            className={a.about__right__block}>
                            <h4 className={a.about__right__block__title}>12</h4>
                            <h6>Лет</h6>
                            <p>Опыт, качество.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;