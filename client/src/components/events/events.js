import React, { useEffect } from "react";
import { connect } from "react-redux";
import Event from "./event";
import PropTypes from "prop-types";
import { getEvents } from "../../actions/itemsActions";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Spiner from "../layout/Spiner"


const Items = ({ items: { events, loadingev }, getEvents }) => {

    // getEvents();

    useEffect(() => {
        getEvents();
        // eslint-disable-next-line
    }, []);



    let settings = {
        infinite: false,
        speed: 700,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return(
        <div className="card-p mb-5" >
            <div className="d-flex justify-content-between mb-4">
                <div className="hr-60" ></div>
                <h5 className="text-grey" > الملتقيات </h5>
                <div className="hr-20" ></div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-94" >

                {loadingev || events === null || events.length === 0 ? (

                    loadingev || events===null ? (<Spiner />) : (<p className = "center"> No Events to show </p>)
                   
                ) : (
                    <Slider {...settings}  >
                            {events.map(item => <Event event={item} key={item._id} className="out" />)}  
                    </Slider>
                    )}

            </div>
            </div>
            {/* <div className="text-right mb-4 mt-3">
                <a type="button" className="btn btn-primary text-white px-4"> إقرأ المزيد  </a>
            </div> */}
        </div>
    )

}

Items.propTypes = {
    items: PropTypes.object.isRequired,
    getEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    items: state.items
});

export default connect(mapStateToProps, { getEvents })(Items);