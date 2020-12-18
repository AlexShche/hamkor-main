import "./specialAbilities.scss"
import {Icon} from "../Icon";

const SpecialAbilities = () => {
    return (
        <div className="SpecialAbilities inline_cards">
            <h2>Кредиты</h2>
            <div className="cards">
                <div className="cards_card">
                    <div className="icon">
                        <Icon path="edit_off"/>
                    </div>
                    <span className="name">
                        <div className="inner">
                            Потребительский
                            <span className="success_payment">Платеж в 20.12.2020</span>
                        </div>
                    </span>
                    <span className="sum">10 000 000 сум</span>
                </div>

                <div className="cards_card">
                    <div className="icon">
                        <Icon path="edit_off"/>
                    </div>
                    <span className="name">
                        <div className="inner">
                            Потребительский
                            <span className="failed_payment">Платеж просрочен</span>
                        </div>
                    </span>
                    <span className="sum">5 000 000 сум</span>
                </div>
            </div>
        </div>
    )
}

export default SpecialAbilities