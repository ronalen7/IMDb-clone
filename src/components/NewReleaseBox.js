import React from "react";

const NewReleaseBox = (props) => {
    return (
        <div className="carousel-item" data-bs-interval="3000" style={{ height: "35vw", backgroundImage: `linear-gradient(to bottom, rgb(255 255 255 / 0%), rgb(0 0 0)), url("https://image.tmdb.org/t/p/original${props.url}")`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="text-white w-100 p-2 text-center position-absolute bottom-0 start-50 translate-middle-x">
                <h1 className="text-success">{props.title}</h1>
                {/* <p className="text-secondary">Some representative placeholder content for the first slide.</p> */}
            </div>
        </div>
    );
}

export default NewReleaseBox;