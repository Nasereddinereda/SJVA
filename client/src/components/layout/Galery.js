import React from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ImageGallery from 'react-image-gallery';

const Galery = ({current}) => {
    
    let tab =[];

    current.images.forEach(elm => {
        tab.push({ original: `http://localhost:5000/static/${elm}`, 
            thumbnail: `http://localhost:5000/static/${elm}` });
    });

    // let tab = [
    //     {
    //         original: 'https://picsum.photos/id/1018/1000/600/',
    //         thumbnail: 'https://picsum.photos/id/1018/1000/600/',
    //     },
    //     {
    //         original: "http://localhost:5000/static/123.jpg",
    //         thumbnail: 'http://localhost:5000/static/123.jpg',
    //     },
    //     {
    //         original: 'https://picsum.photos/id/1019/1000/600/',
    //         thumbnail: 'https://picsum.photos/id/1019/250/150/',
    //     }
    // ];
    
    
    
    return (
        <div className="mb-5">
            <ImageGallery items={tab} showFullscreenButton={false} useTranslate3D={false} showPlayButton={false} disableThumbnailScroll={true}  />
        </div>
    )
}

Galery.propTypes = {};

Galery.propTypes = {
    current: PropTypes.object.isRequired
};

export default connect(null)(Galery);
