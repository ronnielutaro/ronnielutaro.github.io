import PropTypes from "prop-types";

const PopupSearch = ({ show, onClose }) => {
    return (
        <div className={`main-search-active ${show ? "inside" : ""}`}>
            <div className="sidebar-search-icon">
                <button className="search-close" onClick={onClose}>
                    <i className="icofont-close-line"></i>
                </button>
            </div>
            <div className="sidebar-search-input">
                <form action="#">
                    <div className="form-search">
                        <input
                            id="search"
                            className="input-text"
                            placeholder=""
                            type="search"
                        />
                        <button>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </form>
                <p className="form-description">Hit enter to search</p>
            </div>
        </div>
    );
};

PopupSearch.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default PopupSearch;
