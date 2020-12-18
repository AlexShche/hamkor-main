import {Button, Tabs} from "antd"

//components
import {Icon} from "../../components/Icon"
import "./TabsCards.scss"

const TabsCards = () => {

    const {TabPane} = Tabs

    return (
        <div className="tabsCards">
            <Tabs defaultActiveKey="uz">
                <TabPane tab="Национальные карты" key="uz">
                    <div className="general-balance">
                        <div className="coins">
                            <Icon path="coins" />
                        </div>
                        Общий баланс: <span>114 307 504,43 сум</span>
                    </div>
                    <div className="cards">
                        <div className="cards_card green">
                            <div className="head">
                                <Icon path="uzCard"/>
                                <span>Oylik</span>
                            </div>
                            <div className="cards_last_digits">..8434</div>
                            <div className="balance">2 650 000 сум</div>
                        </div>

                        <div className="cards_card dark">
                            <div className="head">
                                <Icon path="uzCard"/>
                                <span>Oylik-2</span>
                            </div>
                            <div className="cards_last_digits">..2343</div>
                            <div className="balance">100 млн сум</div>
                        </div>

                        <div className="cards_card yellow">
                            <div className="head">
                                <Icon path="uzCard"/>
                                <span>Oylik-2</span>
                            </div>
                            <div className="cards_last_digits">..2343</div>
                            <div className="balance">100 млн сум</div>
                        </div>

                        <div className="cards_card green">
                            <div className="head">
                                <Icon path="uzCard"/>
                                <span>Oylik</span>
                            </div>
                            <div className="cards_last_digits">..8434</div>
                            <div className="balance">2 650 000 сум</div>
                        </div>

                        <div className="cards_card dark">
                            <div className="head">
                                <Icon path="uzCard"/>
                                <span>Oylik-2</span>
                            </div>
                            <div className="cards_last_digits">..2343</div>
                            <div className="balance">100 млн сум</div>
                        </div>
                        <div className="button_wrapper">
                            <Button className="buttonPlus" type="primary" shape="circle" icon={<Icon path="plus"/>}/>
                        </div>
                    </div>
                    <a className="all_cards" href="#">Все карты</a>
                </TabPane>
                <TabPane tab="Валютные карты" key="currency">
                    <div className="general-balance">
                        <div className="coins">
                            <Icon path="coins" />
                        </div>
                        Общий баланс: <span>1 500 $</span>
                    </div>
                    <div className="cards">
                        <div className="cards_card yellow">
                            <div className="head">
                                <Icon className="visa" path="visa"/>
                                <span>Oylik-2</span>
                            </div>
                            <div className="cards_last_digits">..2343</div>
                            <div className="balance">100 $</div>
                        </div>

                        <div className="cards_card green">
                            <div className="head">
                                <Icon className="visa" path="visa"/>
                                <span>Oylik</span>
                            </div>
                            <div className="cards_last_digits">..8434</div>
                            <div className="balance">2 650 $</div>
                        </div>

                        <div className="cards_card dark">
                            <div className="head">
                                <Icon className="visa" path="visa"/>
                                <span>Oylik-2</span>
                            </div>
                            <div className="cards_last_digits">..2343</div>
                            <div className="balance">51 $</div>
                        </div>
                        <div className="button_wrapper">
                            <Button className="buttonPlus" type="primary" shape="circle" icon={<Icon path="plus"/>}/>
                        </div>
                    </div>
                    <a className="all_cards" href="#">Все карты</a>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default TabsCards