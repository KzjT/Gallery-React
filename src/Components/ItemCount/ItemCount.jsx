import { useState } from "react";



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


        <p>asdasdaaaa</p>


        <button className="btn btn-primary" onClick={countResta}>-</button>

        <span >{count}</span>


        <button className="btn btn-primary" onClick={countSuma}>+</button>
        
        
        </>
    )
}


export default ItemCount;