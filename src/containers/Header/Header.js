import {useState, useEffect} from "react"
import {Button} from "antd"
import {Link, useLocation} from "react-router-dom"

import {Search} from "../../components/Search/Search"
import {Icon} from "../../components/Icon"
import "./header.scss"

export const Header = ({title, linkBack = "/", list}) => {

    const [header, setHeader] = useState(true)

    const location = useLocation()

    useEffect(() => {}, [location])

    return (
        <header>
            {
                location.pathname === "/" ? <Search/> :
                    <>
                        {
                            header ?
                                <>
                                    <Button className="back" onClick={list && (() => list())}>
                                        {
                                            list ? <Icon path="arrow"/> : <Link to={linkBack}><Icon path="arrow"/></Link>
                                        }
                                    </Button>
                                    <h3>{title}</h3>
                                    <Button className="search_btn" onClick={() => setHeader(false)}><Icon path="search"/></Button>
                                </>
                                : <Search/>
                        }
                    </>
            }
        </header>
    )
}