import React, { useContext } from "react";
import "./PreviewImageList.styles.css";

import PreviewImage from "../PreviewImage";
import { ActiveImageContext } from "../../providers/ActiveImageProvider";

export default function PreviewImageList({ imageList }) {
    const { setActiveImage, activeImage } = useContext(ActiveImageContext);

    return (
        <ul className="preview-image-list">
            {(imageList || []).map((image, index) => (
                <li key={index}>
                    <PreviewImage
                        src={`https://picsum.photos/id/${image.id}/200/200`}
                        onClick={() => setActiveImage(image)}
                        selected={activeImage?.id === image.id}
                    />
                </li>
            ))}
        </ul>
    );
}
