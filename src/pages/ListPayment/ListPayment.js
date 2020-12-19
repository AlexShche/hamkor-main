import React from "react"
import {Collapse} from "antd"

// components
import {Header} from "../../containers/Header/Header"
import {Icon} from "../../components/Icon"
import "./listPayment.scss"

export const ListPayment = ({graph, list}) => {

    const {Panel} = Collapse

    return (
        <>
            <Header title="График" list={() => list()}/>
            <div className="ListPayment">
                <div className="container">
                    <h2 className={"title"}>График платежей</h2>
                    <Collapse
                        expandIconPosition={"right"}
                        expandIcon={({ isActive }) => (
                            <Icon path="downArrow" className={`month_payment_sum ${isActive ? "rotate" : ""}`} />
                        )}
                    >
                        {
                            graph.map((item, index) => (
                                <Panel
                                    header={`${index+1} месяц`}
                                    key={index}
                                    extra={
                                        <p>{String(Math.round(item.monthlyPayment)).replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ")}</p>
                                    }
                                >
                                    <p>
                                        <span>Оплата основного долга</span>
                                        <span>{String(Math.round(item.mainDebt)).replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ")}</span>
                                    </p>
                                    <p>
                                        <span>Оплата процентов</span>
                                        <span>{String(Math.round(item.percent)).replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ")}</span>
                                    </p>
                                    <p>
                                        <span>Остаток кредита</span>
                                        <span>{String(Math.round(item.loanBalance)).replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ")} сум</span>
                                    </p>
                                </Panel>
                            ))
                        }
                    </Collapse>
                </div>
            </div>
        </>
    )
}