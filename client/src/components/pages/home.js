import React, { Fragment } from "react";
import SlideShow from "../layout/Slide";
import Items from "../items/items";
import Events from "../events/events";
import Search from "../layout/Search";
import MostSee from "../items/mostSee";
import ImageHome from "../layout/imageHome";
// import Links from "../links/Links";
// import LinksFilter from "../links/LinksFilter";
// import { connect } from "react-redux";
// import { loadUser } from "../../action/authAction";
// import PropTypes from "prop-types";

const Home = () => {
    // useEffect(() => {
    //     console.log("redha");
    //     loadUser();
    //     // eslint-disable-next-line
    // }, []);

    return (
        <Fragment>
        <div>
          <SlideShow />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column"> 
          <div className="hr-98 mt-4 mb-4" ></div>  
          <div className="d-flex justify-content-between w-96 mb-4 flex-col-mob flex-col-md" >
            <div className="w-65-p w-100-mob w-100-md" >
               <Items />
               <Events />
            </div>
            <div className="w-30-p w-100-mob w-100-md" >
              <Search /> 
              <MostSee />
              <ImageHome  />
            </div>
          </div>
        </div>
      </Fragment>
    );
};

// Home.propTypes = {
//     loadUser: PropTypes.func.isRequired
// };
// export default connect(null, { loadUser })(Home);

export default Home ; 