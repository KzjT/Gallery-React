import "./Loading.scss"
import Loading_gif from "../../assets/Rolling-1s-200px.gif"



export const Loading = () =>{



    return(
        <div className="container loading_Container">

        <img className="giff" src={Loading_gif} alt="loading"/>

        </div>


    )
}

export default Loading;