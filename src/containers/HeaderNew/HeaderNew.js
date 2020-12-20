import {Icon} from "../../components/Icon"
import "./headerNew.scss"

export const HeaderNew = () => {
    return(
        <div className="header-new">
            <div className="my-balance">
                <div className="info">
                    <h5>Мой баланс</h5>
                    <div className="sum-content">
                        <div className="icons">
                            <Icon path="arrowFilled" />
                            <Icon path="arrowFilled" />
                        </div>
                        <div className="sum">
                            4 500 000,00 UZS
                            <Icon path="eye" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}