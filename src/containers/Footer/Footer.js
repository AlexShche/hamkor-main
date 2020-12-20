import {useState} from "react"
import {Link} from "react-router-dom"
import {Col, Modal, Row} from "antd"

// components
import {Icon} from "../../components/Icon"
import "./footer.scss"

const Footer = () => {

    const links = [
        {
            icon: "home",
            link: "#",
            title: "Главная"
        },
        {
            icon: "rocket",
            link: "#",
            title: "Переводы"
        },
        {
            icon: "card",
            link: "#",
            title: "Оплата"
        },
        {
            icon: "clock",
            link: "#",
            title: "Мониторинг"
        }
    ]

    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <footer>
            <Modal
                title={null}
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
                className="menu-modal"
                closable={false}
            >
                <div className="list-catalog">
                    <Row gutter={8}>
                        <Col span={8}>
                            <div className="list-catalog_card">
                                <Link to="/calculator" onClick={() => setIsModalVisible(false)}>
                                    <Icon path="database"/>
                                    <p>Оформить кредит онлайн</p>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Modal>
            <ul>
                {
                    links.map((link, i) =>
                        <li key={i}>
                            <Link to={link.link}>
                                <Icon path={link.icon}/>
                                {link.title}
                            </Link>
                        </li>
                    )
                }
                <li
                    onClick={isModalVisible ? () => setIsModalVisible(false) : () => setIsModalVisible(true)}
                >
                    <Icon path="menu"/>
                    Меню
                </li>
            </ul>
        </footer>
    )
}

export default Footer