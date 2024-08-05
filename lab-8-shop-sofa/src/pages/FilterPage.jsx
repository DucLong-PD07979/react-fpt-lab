import { useSelector } from "react-redux";
import Card from "../components/card/Card";
import ButtonHistory from "../components/button/ButtonHistory";

const FilterPage = () => {
    const { products } = useSelector((state) => state.productReducer);

    return (
        <div className="filter-wrapper">
            <ButtonHistory />
            <div className="filter-show-product">
                {products.length > 0 &&
                    products.map((product) => {
                        return (
                            <Card
                                {...product}
                                key={product.name + product.id}
                            />
                        );
                    })}
                {products.length === 0 && "sản phẩm bạn tìm không có!"}
            </div>
        </div>
    );
};

export default FilterPage;
