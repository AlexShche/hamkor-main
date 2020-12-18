import {Button, Col, Row} from "antd"

// components
import {Icon} from "../Icon"
import "./mostUsed.scss"

// images
import uzTelecom from "../../images/uztelecom.png"

const MostUser = () => {
    return(
        <div className="most-used">
            <h2>Часто используемые</h2>
            <div className="cards">
                <Row gutter={12}>
                    <Col span={12}>
                        <div className="most-used_card">
                            <div className="icon">
                                <Icon path="transfer" />
                            </div>
                            <p>Перевод</p>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="most-used_card">
                            <img src={uzTelecom} alt="uzTelecom"/>
                            <p>
                                Мой номер: <br/>
                                99 077 84 44
                            </p>
                        </div>
                    </Col>
                </Row>
                <Button className="buttonPlus" type="primary" shape="circle" icon={<Icon path="plus"/>}/>
            </div>
        </div>
    )
}

export default MostUser