import React, { useContext } from "react";
import "./ImageInfoBox.styles.css";

import { ActiveImageContext } from "../../providers/ActiveImageProvider";
import EnlargedImage from "../EnlargedImage";

function getMeasurment({ width, height }) {
    return `${width}x${height}`;
}

export default function ImageInfoBox() {
    const { activeImage } = useContext(ActiveImageContext);
    const { download_url, author, width, height } = activeImage || {};

    return (
        <div className="image-info-box">
            {activeImage && (
                <>
                    <p className="image-info-box__author">{author}</p>
                    <p className="image-info-box__measurments">
                        {getMeasurment({ width, height })}
                    </p>
                    <EnlargedImage src={download_url} />
                </>
            )}
        </div>
    );
}
