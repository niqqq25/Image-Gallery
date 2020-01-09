import React from "react";
import "./ImageGallery.styles.css";

import VerticalSplitter from "../VerticalSplitter";
import PreviewImageListContainer from "../PreviewImageListContainer";
import ImageInfoBox from "../ImageInfoBox";
import { ActiveImageProvider } from "../../providers/ActiveImageProvider";

export default function ImageGallery() {
    return (
        <div className="image-gallery">
            <ActiveImageProvider>
                <VerticalSplitter>
                    <PreviewImageListContainer />
                    <ImageInfoBox />
                </VerticalSplitter>
            </ActiveImageProvider>
        </div>
    );
}
