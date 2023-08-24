import  { Carrousel } from '../Carousel/Carousel';
import GalleryHome from '../GalleryHome/GalleryHome';
import './Home.scss'



export const Home = () => {

    return (

        <div className='homeContainer container-fluid col-12 col-'>
        
            <Carrousel/>

            <GalleryHome/>
            
        </div>
    )
}


export default Home;