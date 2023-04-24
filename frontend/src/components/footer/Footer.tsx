import React from "react";
import './Footer.css'
import { FaYandexInternational, FaOdnoklassnikiSquare, FaTelegram, FaVk, FaPlayCircle, FaLifeRing, FaAdversal, FaExpeditedssl, FaGithub, FaNodeJs, FaSearch } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-wrap">
            <div className="footer maim-margin-top">
                <div>
                    <ul>
                        <li><a href=""><FaLifeRing/> Техническая поддерка</a></li>
                        <li><a href=""><FaExpeditedssl/> Политика конфиденциальности</a></li>
                        <li><a href=""><FaAdversal/> По вопросам рекламы</a></li>
                        <li><a href=""><FaNodeJs/> Разработчикам</a></li>
                        <li><a href=""><FaSearch/>Вакансии</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href=""><FaVk/> Вконтакте</a></li>
                        <li><a href=""><FaOdnoklassnikiSquare/> Одноклассники</a></li>
                        <li><a href=""><FaYandexInternational/> Яндекс Дзен</a></li>
                        <li><a href=""><FaTelegram/> Telegram</a></li>
                        <li><a href=""><FaPlayCircle/> RuTube</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="copyright"><a href="https://github.com/BykovVik"><FaGithub/> BykovVik&copy;</a></p>
            </div>
        </div>
    )
}

export default Footer