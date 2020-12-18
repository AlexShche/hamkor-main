import {useState} from "react"
import {Form, Checkbox, Button, Select, InputNumber, Slider, message} from "antd"
import axios from "axios"
import moment from "moment"

// components
import {Success} from "../../containers/Success/Success"
import {Header} from "../../containers/Header/Header"
import {config} from "../../config"
import {ListPayment} from "../ListPayment/ListPayment"
import {Icon} from "../../components/Icon"

import "./calculator.scss"

const Calculator = () => {

    // useEffect(() => {
    //     axios.get(`${config.API_URL}/loans/1`)
    //         .then(r => console.log("response", r))
    //         .catch(e => console.log(e))
    // }, [])

    const {Option} = Select

    const [offer, setOffer] = useState(false)
    const [credit, setCredit] = useState(2300000)
    const [month, setMonth] = useState(3)
    const [typePayment, setTypePayment] = useState("annuity")
    const [creditView, setCreditView] = useState(796229)
    const [success, setSuccess] = useState(false)
    const [creditId, setCreditId] = useState(0)
    const [loading, setLoading] = useState(false)
    const [creditInputLetter, setCreditInputLetter] = useState(false)
    const [creditInputInvalid, setCreditInputInvalid] = useState(false)
    const [showList, setShowList] = useState(false)
    const [graph, setGraph] = useState([])

    const onFinish = () => {
        if (creditInputLetter || creditInputInvalid) {
            creditInputLetter && message.error("Не должно быть лишних символов")
            creditInputInvalid && message.error("Не корректная сумма")
        } else {
            setLoading(true)
            const params = {
                customer_id: 1,
                loantype_id: 1,
                loan_amount: credit,
                loan_term: month,
                begin_date: moment().format("YYYY-MM-DD hh:mm:ss.SSSSSS"),
                end_date: moment().add(month, "month").format("YYYY-MM-DD hh:mm:ss.SSSSSS"),
                writed_date: moment().format("YYYY-MM-DD hh:mm:ss.SSSSSS"),
                calctype_id: typePayment === "annuity" ? 1 : 2
            }
            axios.post(`${config.API_URL}/applications`, params)
                .then(r => {
                    // successPage()
                    setSuccess(true)
                    setCreditId(r.data.data.id)
                })
                .catch(e => console.log(e))
                .finally(() => setLoading(false))
        }
    }

    const backToApplication = () => {
        console.log("back to application")
        showList && setShowList(false)
        showList && setGraph([])
    }

    const result = (paramMonth, paramCredit, typeCredit) => {

        const type = typeof paramCredit

        if (typeCredit === "annuity" && type === "number") {
            const percent = Number((23 / 12).toFixed(4)) / 100
            const numerator = Number((percent * Math.pow((1 + percent), paramMonth)).toFixed(7))
            const denominator = Number((Math.pow((1 + percent), paramMonth) - 1).toFixed(7))
            const finallyCredit = paramCredit * (numerator / denominator)
            setCreditView(finallyCredit)
        } else if (typeCredit === "differentiated" && type === "number") {
            const differentiatedPercent = Number((paramCredit * 0.23 / 365 * moment().add(1, "month").daysInMonth()))
            const mainMonthlyDebt = Number((paramCredit / paramMonth).toFixed(4))
            setCreditView(Math.round(mainMonthlyDebt + differentiatedPercent))
        }
    }

    const handleInputCreditChange = e => {
        !Number(e) ? setCreditInputLetter(true) : setCreditInputLetter(false)
        e > 22300000 || e < 2300000 ? setCreditInputInvalid(true) : setCreditInputInvalid(false)

        result(month, e, typePayment)
        setCredit(e)
    }

    const handleShowList = () => {
        if (typePayment === "annuity") {
            for (let i = 0; i < month; i++) {
                if (i === 0) {
                    setGraph(prevState => {
                        let percent = Number(credit * 0.23 / 365 * moment().add(i + 1, "month").daysInMonth())
                        let mainDebt = Number(creditView - percent)
                        let mainBalance = credit
                        let loanBalance = credit - mainDebt

                        return [
                            ...prevState,
                            {
                                monthlyPayment: creditView,
                                mainDebt,
                                mainBalance,
                                percent,
                                loanBalance
                            }
                        ]
                    })
                } else if (i === month - 1) {
                    setGraph(prevState => {
                        let mainBalance = Number(prevState[i - 1].mainBalance - prevState[i - 1].mainDebt)
                        let percent = Number(mainBalance * 0.23 / 365 * moment().add(i, "month").daysInMonth())
                        let mainDebt = Number(mainBalance)
                        let loanBalance = Number(prevState[i - 1].loanBalance - mainDebt)

                        return [
                            ...prevState,
                            {
                                monthlyPayment: creditView,
                                mainBalance,
                                percent,
                                mainDebt,
                                loanBalance
                            }
                        ]
                    })
                } else {
                    setGraph(prevState => {
                        let mainBalance = Number(prevState[i - 1].mainBalance - prevState[i - 1].mainDebt)
                        let percent = Number(mainBalance * 0.23 / 365 * moment().add(i, "month").daysInMonth())
                        let mainDebt = Number(creditView - percent)
                        let loanBalance = Number(mainBalance - mainDebt)

                        return [
                            ...prevState,
                            {
                                monthlyPayment: creditView,
                                mainDebt,
                                mainBalance,
                                percent,
                                loanBalance
                            }
                        ]
                    })
                }
            }
        } else {
            for (let i = 0; i < month; i++) {
                if (i === 0) {
                    setGraph(prevState => {
                        let percent = Number(credit * 0.23 / 365 * moment().add(i + 1, "month").daysInMonth())
                        let mainDebt = Number(credit / month)
                        let mainBalance = credit
                        let loanBalance = credit - mainDebt
                        let monthlyPayment = mainDebt + percent

                        return [
                            ...prevState,
                            {
                                monthlyPayment,
                                mainDebt,
                                mainBalance,
                                percent,
                                loanBalance
                            }
                        ]
                    })
                } else {
                    setGraph(prevState => {
                        let mainBalance = Number(prevState[i - 1].mainBalance - prevState[i - 1].mainDebt)
                        let percent = Number(mainBalance * 0.23 / 365 * moment().add(i, "month").daysInMonth())
                        let mainDebt = Number(credit / month)
                        let loanBalance = Number(mainBalance - mainDebt)
                        let monthlyPayment = mainDebt + percent

                        return [
                            ...prevState,
                            {
                                monthlyPayment,
                                mainDebt,
                                mainBalance,
                                percent,
                                loanBalance
                            }
                        ]
                    })
                }
            }
        }
        setShowList(true)
    }

    return (
        <>
            {!showList && <Header title="Онлайн кредит" linkBack="/catalog"/>}
            <div className="calculator">
                {
                    success ? <Success creditId={creditId}/> :
                        <>
                            {
                                showList ? <ListPayment graph={graph} list={() => setShowList(false)}
                                                        prevHandler={backToApplication}/> :
                                    <>
                                        <Form className={"container"}>
                                            <h2 className={"title"}>Калькулятор</h2>

                                            <div className={`params ${creditInputInvalid || creditInputLetter ? "invalid_credit" : ""}`}>
                                                <div className="item">
                                                    <span className="param_name sum">
                                                        Сумма кредита
                                                    </span>
                                                    <InputNumber
                                                        value={credit}
                                                        placeholder="Введите сумму"
                                                        className="credit_value"
                                                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                                                        defaultValue={3}
                                                        onChange={e => handleInputCreditChange(e)}
                                                    />
                                                </div>
                                                <div className="range_slider">
                                                    <span>
                                                        {
                                                            !creditInputLetter ? (
                                                                creditInputInvalid ?
                                                                    "сумма должна быть от 2 300 000 до 22 300 000" :
                                                                    "от 2 300 000 сум до 22 300 000 сум"
                                                            ) : "не должно быть каких-либо символов кроме цифр"
                                                        }
                                                    </span>
                                                </div>
                                                <div className="month">
                                                    <div className="item">
                                                        <span className="param_name">Срок кредита (месяцы) {month}</span>
                                                        <Slider
                                                            min={1}
                                                            max={12}
                                                            defaultValue={month}
                                                            tooltipVisible={false}
                                                            onChange={e => {
                                                                result(e, credit, typePayment)
                                                                setMonth(e)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <span className="param_name" onClick={handleShowList}>
                                                    <Icon path="list"/>
                                                    Ежемесячный платеж:
                                                    <Icon path="downArrow" className="month_payment_sum"/>
                                                    <span className="month-payment">
                                                        {String(Math.round(creditView)).replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ")}
                                                        &nbsp;сум
                                                    </span>
                                                </span>
                                                    <span className="param_name">
                                                    <Icon path="percent"/>
                                                    Процентная ставка:
                                                    <span>23%</span>
                                                </span>
                                            </div>

                                            <div className="typePayment">
                                            <span className="param_name">
                                                Вид платежа:
                                            </span>
                                                <div className="typeContent">
                                                    <Select
                                                        defaultValue="annuity"
                                                        showArrow={false}
                                                        onChange={e => {
                                                            result(month, credit, e)
                                                            setTypePayment(e)
                                                        }}
                                                    >
                                                        <Option value="annuity">Аннуитет</Option>
                                                        <Option value="differentiated">Диференцированный</Option>
                                                    </Select>
                                                    <Icon path="downArrow"/>
                                                </div>
                                            </div>

                                            <Form.Item
                                                name="offer"
                                                valuePropName="checked"
                                                className="offer"
                                            >
                                                <Checkbox onChange={e => setOffer(e.target.checked)}>
                                                    Я принимаю условия <span
                                                    className="offerContract">договора оферты</span>
                                                </Checkbox>
                                            </Form.Item>
                                        </Form>
                                        <div className="navigation">
                                            <div className="dots">
                                                <div className="active"/>
                                                <div/>
                                            </div>
                                            <Button
                                                disabled={!offer}
                                                loading={loading}
                                                onClick={onFinish}
                                                className="next-btn"
                                            >
                                                Отправить заявку
                                            </Button>
                                        </div>
                                    </>
                            }
                        </>
                }
            </div>
        </>
    )
}

export default Calculator