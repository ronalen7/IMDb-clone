import React, { useState, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import TopPicksBox from "./TopPicksBox";

// const getItems = () => Array(20).fill(0).map((_, ind) => ({ id: `box-${ind}` }));

const TopPicks = (props) => {
    // const [items, setItems] = useState([]);
    // let newArray = props.movieList.map((movie) => (movie));
    // newArray.map((movie, index) => { Object.assign(movie, { movieId: `box-${index}` }) });

    // const [selected, setSelected] = useState(]);
    // const [position, setPosition] = useState(0);

    // const isItemSelected = (id) => !!selected.find((el) => el === id);

    // const handleClick =
    //     (id) =>
    //         ({ getItemById, scrollToItem }) => {
    //             const itemSelected = isItemSelected(id);

    //             setSelected((currentSelected) =>
    //                 itemSelected
    //                     ? currentSelected.filter((el) => el !== id)
    //                     : currentSelected.concat(id)
    //             );
    //         };

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {/* {newArray.map(({ movieId }) => {
                console.log(movieId);
                return <Card
                    itemId={movieId} // NOTE: itemId is required for track items
                    key={movieId}
                // title={id}
                // onClick={handleClick(id)}
                // selected={isItemSelected(id)}
                />
            })} */}
            {props.movieList.map((movie, index) => {
                // NOTE: itemId is required for track items
                return <TopPicksBox itemId={index} key={index} url={movie.poster_path} rating={movie.vote_average} title={movie.title} />
            })}
        </ScrollMenu>
    );
}

function Arrow({ children, disabled, onClick }) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                border: "none",
                background: "none",
                color: "white",
                paddingLeft: "20px",
                paddingRight: "20px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                right: "1%",
                opacity: disabled ? "0" : "1",
                userSelect: "none"
            }}
        >
            {children}
        </button>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
        useContext(VisibilityContext);

    return (
        <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}><span class="material-icons">
            arrow_back_ios
        </span></Arrow>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
        <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}><span class="material-icons">
            arrow_forward_ios
        </span></Arrow>
    );
}

// function Card({ onClick, selected, title, itemId }) {
//     const visibility = useContext(VisibilityContext);

//     return (
//         <div className="m-2 border border-2 border-success">
//             <img src={`https://image.tmdb.org/t/p/w185/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg`} alt="" />
//             <h5>{"Fantastic Beasts: The Secrets of Dumbledore"}</h5>
//         </div>
//     );
// }

export default TopPicks;