import { useState } from "react";
import "./ItemCount.scss"



export const ItemCount = () => {

const [count, setCount] = useState(0)




const countSuma = () =>{

    setCount (count + 1)

}

const countResta = () =>{
    setCount (count - 1 )


}

    return(
        <>

        <button className="btn btn-dark btnCount" onClick={countResta}>-</button>

        <span className="countSpan">{count}</span>


        <button className="btn btn-success btnCount" onClick={countSuma}>+</button>
        
        
        </>
    )
}


export default ItemCount;