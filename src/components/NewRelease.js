import React from "react";
import NewReleaseBox from "./NewReleaseBox";

const NewRelease = (props) => {
    const imgUrl = props.movieList[0].backdrop_path;
    const movieTitle = props.movieList[0].title;
    return (
        <div id="preview" className="carousel slide m-auto w-50" data-bs-ride="carousel">
            <div className="carousel-inner">
                {/* <div className="carousel-item active d-flex justify-content-center" data-bs-interval="3000" style={{ height: "35vw", backgroundImage: `linear-gradient(to bottom, rgb(255 255 255 / 0%), rgb(0 0 0)), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Gbody9k8iQhTFSbFoxhgIRvoRstKfLpUtQ&usqp=CAU")`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}> */}
                <div className="carousel-item active d-flex justify-content-center" data-bs-interval="3000" style={{ height: "35vw", backgroundImage: `linear-gradient(to bottom, rgb(255 255 255 / 0%), rgb(0 0 0)), url("../NewReleaseBG.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="pb-5 position-absolute bottom-50">
                        <h1 className="text-light">Newly Released Movies . . .</h1>
                    </div>
                    {/* <div className="text-white w-100 p-2 text-center position-absolute bottom-0 start-50 translate-middle-x">
                        <h5 className="text-success">{movieTitle}</h5>
                        <p className="text-secondary">Some representative placeholder content for the first slide.</p>
                    </div> */}
                </div>
                {props.movieList.map((movie, index) => {
                    return <NewReleaseBox id={index} key={index} url={movie.backdrop_path} title={movie.title} />
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#preview" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#preview" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default NewRelease;