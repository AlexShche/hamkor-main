import {Icon} from "../Icon"
import "./deposits.scss"

const Deposits = () => {
    return (
        <div className="deposits inline_cards">
            <h2>Вклады</h2>
            <div className="cards">
                <div className="cards_card">
                    <div className="icon">
                        <Icon path="edit_off"/>
                    </div>
                    <span className="name">
                        <div className="inner">
                            Daromat 20
                            <span>4%</span>
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
                            Hamyon 10
                            <span>17%</span>
                        </div>
                    </span>
                    <span className="sum">5 000 000 сум</span>
                </div>
            </div>
        </div>
    )
}

export default Deposits