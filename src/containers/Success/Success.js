import React from "react"
import {Button} from "antd"
import {Link} from "react-router-dom"

// components
import {Icon} from "../../components/Icon"
import "./success.scss"

export const Success = ({creditId}) =>
    <div className="successRequest">
        <div className="content">
            <Icon path="success"/>
            <h3>Спасибо</h3>
            <p>
                Ваша заявка №{creditId} принята. <br/>
                Мы свяжемся с вами <br/> в ближайшее время
            </p>
        </div>
        <div className="navigation">
            <div className="dots">
                <div className="active"/>
                <div className="active"/>
            </div>
            <Button className="next-btn"><Link to="/">Вернуться на главную</Link></Button>
        </div>
    </div>