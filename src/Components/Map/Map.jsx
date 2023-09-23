import React from 'react';
import "./Map.scss"

const Map = () => {

  return (
    <div className= "mapContainer"style={{ width: '100%', height: '400px', marginBottom: "4rem" }}>
      <iframe
        title="Ubicación en el mapa"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10499.204041346531!2d2.3359442!3d48.862004799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e25d0482b3d%3A0x50b82c368941a50!2sI%20Distrito%20de%20Par%C3%ADs%2C%2075001%20Par%C3%ADs%2C%20Francia!5e0!3m2!1ses-419!2sar!4v1693059414899!5m2!1ses-419!2sar&key=$`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default Map;