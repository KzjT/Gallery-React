import { Link } from "react-router-dom";
import "./Hero.scss"

export const Hero = () => {
    return (
        <header className="hero">
            <div className="hero-video-container">
                <video autoPlay muted loop className="hero-video">
                    <source src="https://firebasestorage.googleapis.com/v0/b/gallery-art-e9d4b.appspot.com/o/video.mp4?alt=media&token=7281cc57-04bd-414a-a702-a99e53558b4e" type="video/mp4" />
                </video>
                <div className="hero-text">
                    <h1>Welcome to our Art Gallery</h1>
                    <p>Explore the world of creativity and discover amazing artworks.</p>
                    <Link to="/gallery" className="btn btn-success btn-video">View Gallery</Link>
                </div>
            </div>
        </header>
    )
}

export default Hero;















