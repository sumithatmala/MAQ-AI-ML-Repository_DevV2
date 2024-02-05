import { useState } from "react";
import "./css/accordian.css"
import AccordianData from "./JSONData/AccordianData";

const Description = (props) => {
    return(
        <div className="AccordionDesc">
            {props.desc.para.map((para) => {
                return(<p> {para} </p>)
            })} 
            {props.desc.points.map((points) => {
                return(<li> {points} </li>)
            })} 
        </div>
    )
}

const AccordionStatic = (props) => {

    const [selected, setSelected] = useState(AccordianData[0]);

    return (
        <section className="AccordianContiner">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <div className="AccordionTitle">
                <div className="AccordionList">
                    {props.listItems.map((item) => {
                        return(<div className={'AccordionListItem' + ((selected.list === item.list)?'_selected':'')} onClick={() => {setSelected(item)}}> <p> {item.list} </p> </div>)
                    })}
                </div>
                <Description desc={selected.desc}/>
            </div>
        </section>
    )
}

export default AccordionStatic;