import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

const TopPicksBox = (props) => {
    // const imgUrl = `https://image.tmdb.org/t/p/original/${props.url}`;
    // const visibility = useContext(VisibilityContext);

    return (
        <div className="top-pick-box p-2 m-2 rounded-3 text-light text-center">
            <div className="h-75">
                <img className="w-100 h-100" src={`https://image.tmdb.org/t/p/w185${props.url}`} alt="" />
            </div>
            <div className="row m-0 mt-2">
                <img className="col-3 p-0 w-25 border-0 rounded" src="../imdbLogo.png" alt="Imdb" />
                <p className="col-3 p-0 m-0 w-25 font-weight-bold">- {props.rating}</p>
                <span class="col-3 offset-3 p-0 material-icons text-danger">favorite_border</span>
            </div>
            <p className="px-2 m-0 mt-1">{props.title}</p>
        </div>
    );
}


export default TopPicksBox;