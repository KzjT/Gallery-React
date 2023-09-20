import { Carrousel } from './Carousel/Carousel';
import GalleryHome from '../Home/GalleryHome/GalleryHome';
import './Home.scss';
import { Hero } from './Hero/Hero';


export const Home = () => {
    return (
        <div className="homeContainer container-fluid col-12">
            <div className="homeContainer container-fluid">
                <Hero />
                <Carrousel />
                <GalleryHome />
            </div>
        </div>
    );
};

export default Home;




