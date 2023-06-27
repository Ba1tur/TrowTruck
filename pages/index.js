import Head from 'next/head'
import First from "@/components/First/First";
import Service from "@/components/Service/Service";
import Contact from "@/components/Contact/Contact";
import f from "@/components/First/First.module.scss";
import {AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai";
import {LiaTelegramPlane} from "react-icons/lia";
import {FiPhoneCall} from "react-icons/fi";
import About from '@/components/About/About';


export default function Home() {
  return (
    <>
      <Head>
        <title>Эвакуатор Бишкек: Заказать в Бишкек 706-725-212 - Эвакуатор Бишкек</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="telephone" content="+996(706)72-52-12" />
        <meta name="language" content="Russian" />
        <meta name="robots" content="index , follow" />
        <meta name="author" content="Эвакуатор Бишкек"/>
        <meta property="og:title" content="Эвакуатор Бишкек - услуги эвакуации автомобилей"/>
        <meta
          name="description"
          content="Эвакуация автомобилей в Кыргызстане: полное обслуживание, страхование, безопасная перевозка и временное хранение транспортных средств. Надежные эксперты с опытом обеспечат безопасность и качество перевозки вашего автомобиля. Заботимся о вашем транспорте с начала до конца процесса эвакуации. Мы предлагаем конкурентные цены, оперативность и профессиональный подход. Доверьте эвакуацию своего автомобиля нам и обретите спокойствие. Свяжитесь с нами прямо сейчас для получения подробной информации и бронирования услуг!"
        />
        <meta
          name="keywords"
          content="Эвакуация автомобилей
          Эвакуация авто в Кыргызстане
          Перевозка автомобилей
          Безопасная эвакуация
          Служба эвакуации транспорта
          Экстренная эвакуация автомобилей
          Профессиональная эвакуация авто
          Эвакуация автомобилей на платформе
          Транспортировка авто в Кыргызстане
          Эвакуаторные услуги
          Транспортная компания для эвакуации
          Быстрая эвакуация автомобилей
          Эвакуация после ДТП
          Транспортное решение для эвакуации
          Услуги эвакуации и хранения автомобилей
          эвакуатор
          эвакуатор в бишкеке
          эвакуатор бишкек дешево
          эвакуатор в бишкеке круглосуточно
          эвакуатор бишкек стоимость
          эвакуатор с краном бишкек
          Эвакуатор
          "
        />
        <meta
          name="description"
          content="Эвакуация автомобилей в Кыргызстане: полное обслуживание, страхование, безопасная перевозка и временное хранение транспортных средств. Надежные эксперты с опытом обеспечат безопасность и качество перевозки вашего автомобиля. Заботимся о вашем транспорте с начала до конца процесса эвакуации. Мы предлагаем конкурентные цены, оперативность и профессиональный подход. Доверьте эвакуацию своего автомобиля нам и обретите спокойствие. Свяжитесь с нами прямо сейчас для получения подробной информации и бронирования услуг!"
        />
        <meta
          name="Эвакуация Бишкек бишкек эвакуация эваукация машина kyrgyz312 312 evakuator Кыргызстан"
          content="Бишкек , Кыргызстан  , кыргызстан киргизия Киргизия, Ош"
        />
        <link rel='icon' href='/favicon.png'/>
      </Head>
        <main>
            <div className={f.first__icons}>
                <a href="https://api.whatsapp.com/send/?phone=996706725212&text=Добрый день, я хочу эвакуировать автомобиль &type=phone_number&app_absent=0">
                    <AiOutlineWhatsApp size={30}/>
                </a>

                <a href="https://web.telegram.org/">
                    <LiaTelegramPlane size={30}/>
                </a>

                <a href="tel:+996 706 725 212">
                    <FiPhoneCall size={30}/>
                </a>

                <a href="https://www.instagram.com/kg.evakuator/?hl=bg">
                    <AiOutlineInstagram size={30}/>
                </a>
            </div>
            <First/>
            <About/>
            <Service/>
            <Contact/>
        </main>
    </>
  );
}
