import "./Hero.scss"



export const Hero = () =>{

    return(

<header className="hero">
<div className="hero-video-container">
    <video autoPlay muted loop className="hero-video">
        <source src="https://firebasestorage.googleapis.com/v0/b/gallery-art-e9d4b.appspot.com/o/video.mp4?alt=media&token=159e9667-c71c-4565-a2c4-612cd57ca672" type="video/mp4" />
    </video>
    <div className="hero-text">
        <h1>Welcome to our Art Gallery</h1>
        <p>Explore the world of creativity and discover amazing artworks.</p>
        <a href="/gallery" className="btn btn-success btn-video">View Gallery</a>
    </div>
</div>
</header>


    )
}
















