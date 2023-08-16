import PropTypes from "prop-types";

const HeaderSearch = ({ onClick }) => {
    return (
        <div className="header-search">
            <button className="header-search-toggle" onClick={onClick}>
                <i className="icofont-search-1"></i>
            </button>
        </div>
    );
};

HeaderSearch.propTypes = {
    onClick: PropTypes.func,
};

export default HeaderSearch;
