import React, { useRef } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchItem  } from "../../actions/itemsActions";

const Search = ({searchItem}) => {
    const text = useRef("");

    const onChange = e => {
        searchItem(text.current.value);
    };

    return (
        <div className="card-p mb-4" > 
            <input
                id="text"
                type="search"
                name="text"
                placeholder="Search..."
                className="w-full bg-grey hi-40"
                ref={text}
                onChange={onChange}
            />
        </div>
    )
}

Search.propTypes = {
    searchItem: PropTypes.func.isRequired
};

export default connect(null, { searchItem })(Search);
