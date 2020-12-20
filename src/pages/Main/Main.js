import {Button} from "antd"
import {Link} from "react-router-dom"

// components
import {Header} from "../../containers/Header/Header"
import TabsCards from "../../containers/TabsCards/TabsCards"
import MostUsed from "../../components/MostUsed/MostUsed"
import Deposits from "../../components/Deposits/Deposits"
import SpecialAbilities from "../../components/SpecialAbilities/SpecialAbilities"

import "./main-page.scss"

const Main = () => {
    return (
        <>
            <Header/>
            <div className="main-page">
                <h1>Главная</h1>
                <TabsCards/>
                <div className="dark_content">
                    <MostUsed/>
                    <Deposits/>
                    <SpecialAbilities/>
                    <Button className="default_button">
                        <Link to="/catalog">Открыть новый счет или продукт</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Main