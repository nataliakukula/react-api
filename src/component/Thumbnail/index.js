import React from "react";

function Thumbnail(props) {
    return (
        <img
            className="thumbnail"
            src={props.thumbnail.thumbnailUrl}
            alt="thumbnail"
            onClick={() => { props.toggle(); props.handleThumbnailClick(props.thumbnail) }}
        />
    );
}

export default Thumbnail;