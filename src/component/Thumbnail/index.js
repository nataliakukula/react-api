import React from "react";

function Thumbnail(props) {
    return (
        <img className="thumbnail" src={props.src} alt="thumbnail" onClick={() => { props.toggle(); props.handleThumbnailClick(props.id) }} />
    );
}

export default Thumbnail;