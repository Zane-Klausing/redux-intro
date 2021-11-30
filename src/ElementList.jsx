import { useSelector } from "react-redux"
import ElementItem from "./ElementItem"
function ElementList (){
    const elementList = useSelector((store)=>store.elementList)
    return (
        <ul>
        {elementList.map((element, i)=>{
            return <ElementItem key={i} element={element}/>
        })}
        </ul>
    )
}

export default ElementList;