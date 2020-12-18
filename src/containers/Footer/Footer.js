import {Icon} from "../../components/Icon"
import "./footer.scss"

const Footer = () => {
    return(
        <footer>
            <ul>
                <li className="active">
                    <a href="#">
                        <Icon path="home" />
                        Главная
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon path="card" />
                        Оплата
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon path="clock" />
                        История
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon path="chat" />
                        Чат
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon path="dots" />
                        Еще
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer