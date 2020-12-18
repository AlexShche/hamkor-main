import React from "react"
import {Button} from "antd"
import {Link} from "react-router-dom"

export const Success = ({creditId}) => {
    return(
        <div className="successRequest">
            <h3>Спасибо</h3>
            <p>
                Ваша заявка №{creditId} принята. <br/>
                Мы свяжемся с вами <br/> в ближайшее время
            </p>
            <div className="navigation">
                <div className="dots">
                    <div className="active"/>
                    <div className="active"/>
                </div>
                <Button className="next-btn"><Link to="/">Вернуться на главную</Link></Button>
            </div>
        </div>
    )
}