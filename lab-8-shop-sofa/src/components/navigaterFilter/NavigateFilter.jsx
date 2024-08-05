import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    productFilterWithKey,
    productFilterWithPrice,
} from "../../store/productSlice/productSlice";

import { useNavigate } from "react-router-dom";

const NavigateFilter = () => {
    const [searchValue, setSearchValue] = useState("");
    const [filterOrderOption, setfilterOrderOption] = useState("tang");
    const disptach = useDispatch();
    const navigate = useNavigate();

    const handleSearchProduct = () => {
        disptach(productFilterWithKey(searchValue));
        navigate("/filter");
    };

    const handleChangeValueSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleChangeFilterOrderPrice = (e) => {
        setfilterOrderOption(e.target.value);
    };

    useEffect(() => {
        disptach(productFilterWithPrice(filterOrderOption));
    }, [filterOrderOption]);

    return (
        <div className="navigate-wrapper">
            <div className="search">
                <input
                    type="text"
                    placeholder="search here..."
                    onChange={(e) => handleChangeValueSearch(e)}
                />
                <button onClick={() => handleSearchProduct()}>search</button>
            </div>
            <div className="filter-box">
                <div className="group-input">
                    <select
                        name="filter-by"
                        id=""
                        onChange={(e) => handleChangeFilterOrderPrice(e)}
                    >
                        <option>lựa chọn sản phẩm theo giá</option>
                        <option value="tăng">Từ thấp tới cao</option>
                        <option value="giam">Từ cao tới thấp</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default NavigateFilter;
