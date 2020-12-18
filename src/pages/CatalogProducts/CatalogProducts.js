import {Header} from "../../containers/Header/Header"
import {Icon} from "../../components/Icon"
import {Link} from "react-router-dom"
import "./catalogProducts.scss"

const CatalogProducts = () => {
    return (
        <>
            <Header title="Открыть..." />
            <div className="catalog-products">
                <div className="inline_cards">
                    <div className="cards">
                        <div className="cards_card">
                            <div className="icon"><Icon path="edit_off"/></div>
                            <span className="name">
                                <div className="inner">
                                    <Link to="/calculator">Оформить онлайн кредит</Link>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogProducts