import { useNavigate } from "react-router-dom";

const ButtonHistory = () => {
    const navigate = useNavigate();
    const handleBackTohistory = () => {
        navigate(-1);
    };
    return (
        <button className="btn-back" onClick={() => handleBackTohistory()}>
            back history
        </button>
    );
};

export default ButtonHistory;
