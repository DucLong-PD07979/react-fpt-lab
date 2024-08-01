/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "./data.json";
import { addCate, addImage, getType } from "./store/imageSlice/imageSlice";

function App() {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");

    const { image, type, categories } = useSelector(
        (state) => state.imageReducer
    );

    useEffect(() => {
        dispatch(addImage(data));
    }, [data, dispatch]);

    const cateArr = [];
    let value = "";
    for (let i = 0; i < data.length; i++) {
        if (value !== data[i].type) {
            value = data[i].type;
            cateArr.push(data[i].type);
        }
    }

    useEffect(() => {
        dispatch(addCate(cateArr));
    }, []);

    useEffect(() => {
        if (type === "all") {
            dispatch(addImage(data));
        } else {
            const imageFilter = data.filter((item) => item.type.includes(type));
            dispatch(addImage(imageFilter));
        }
    }, [type]);

    const handleChangeValue = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    };

    const handleGetType = (typeImg) => {
        console.log(typeImg);
        dispatch(getType(typeImg));
    };

    const handleSearch = () => {
        if (searchValue === "") {
            dispatch(addImage(data));
            return;
        }

        const imageFilter = data.filter(
            (item) =>
                item.name.includes(searchValue) ||
                item.type.includes(searchValue)
        );
        dispatch(addImage(imageFilter));
    };

    return (
        <div className="snapshot-wrapper">
            <h1>SnapShot</h1>
            <div>
                <input
                    className="input-img"
                    placeholder="search img, type here"
                    onChange={handleChangeValue}
                ></input>
                <button className="btn-search" onClick={() => handleSearch()}>
                    Search
                </button>
            </div>

            <div className="image-select-type">
                {categories.length > 0 && (
                    <button onClick={() => handleGetType("all")}>All</button>
                )}

                {categories.length > 0 &&
                    categories.map((item, index) => {
                        return (
                            <button
                                onClick={() => handleGetType(item)}
                                key={index}
                            >
                                {item}
                            </button>
                        );
                    })}
            </div>
            <div className="image-list-wrapper">
                {image.length > 0 &&
                    image.map((item) => {
                        return (
                            <div
                                className="image-item"
                                key={item.img + item.type}
                            >
                                <img
                                    src={item.img}
                                    alt={item.img + item.type}
                                />
                                <h4 className="image-name">{item.name}</h4>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default App;
