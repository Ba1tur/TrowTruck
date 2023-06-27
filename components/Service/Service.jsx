import s from './Service.module.scss';
import Title from "@/components/Title/Title";
import { motion } from "framer-motion";
import Image from 'next/image';

const leftAnimation = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: custom => ({
        scale: 1.0,
        opacity: 1,
        transition: { duration: 0.3, delay: custom * 0.2 }
    })
}

const Service = () => {
    return (
        <motion.section
            id='services'
            initial="hidden"
            whileInView="visible"
            className={s.service}>
            <div className="container">
                <Title text="Услуги" />

                <div className={s.service__content}>
                    <motion.div
                        custom={1}
                        variants={leftAnimation}
                        className={s.service__box}>

                        <div>
                            <img src="/odengi.jpg" alt="" />
                        </div>
                        <h3>О! Деньги</h3>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={leftAnimation}
                        className={s.service__box}>
                        <div>
                            <img src="/mbank.png" alt="" />
                        </div>
                        <h3>М Банк</h3>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={leftAnimation}
                        className={s.service__box}>
                        <div>
                            <img src="/optima.png" alt="" />
                        </div>
                        <h3>Оптима Банк</h3>
                    </motion.div>

                    <motion.div
                        custom={4}
                        variants={leftAnimation}
                        className={s.service__box}>
                        <div>
                            <Image src='/truck.svg' alt='truck.svg' width={94} height={85} />
                        </div>
                        <h3>Эвакуация</h3>
                    </motion.div>

                    <motion.div
                        custom={5}
                        variants={leftAnimation}
                        className={s.service__box}>
                        <h3>И другие банковские переводы</h3>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Service;