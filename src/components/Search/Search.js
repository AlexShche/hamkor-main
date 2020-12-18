import {Button, Input} from "antd"
import {SearchOutlined} from "@ant-design/icons"

//components
import {Icon} from "../Icon"
import "./search.scss"

export const Search = () => {
    return (
        <div className="search">
            <Input size="middle" placeholder="Поиск" prefix={<SearchOutlined/>}/>
            <Button type="primary" shape="circle" icon={<Icon path="microphone"/>}/>
        </div>
    )
}