import React from "react";

const Watchlist = () => {
    return (
        <div>
            <h1><span className="m-2 badge bg-secondary">Watchlist</span></h1>
            <ul className="list-group">
                <li className="list-group-item p-4">
                    <div className="w-75 m-auto row border border-danger">
                        <div className="col-4 border border-danger">
                            <img className="w-100" src="https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg" alt="Poster" />
                        </div>
                        <div className="col-8 border border-danger">
                            <h3 className="d-flex align-items-center">The Shawshank Redemption
                                <span class="material-icons text-danger">favorite_border</span></h3>
                            <div className="row m-0 mt-2 w-25">
                                <img className="col-3 p-0 w-25 border-0 rounded" src="../imdbLogo.png" alt="Imdb" />
                                <p className="col-3 p-0 m-0 w-25 font-weight-bold"> - 8.7</p>

                            </div>
                            <p className="mt-2">Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.</p>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </div>
    );
};

export default Watchlist;