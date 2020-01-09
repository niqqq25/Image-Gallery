import React, { useState, useEffect, useContext } from "react";

import PreviewImageList from "../PreviewImageList";
import { getListImages } from "../../api/imageAPI";
import { ActiveImageContext } from "../../providers/ActiveImageProvider";

export default function PreviewImageListContainer() {
    const [imageList, setImageList] = useState(null);
    const { setActiveImage } = useContext(ActiveImageContext);

    useEffect(() => {
        fetchImageList();
    }, []);

    async function fetchImageList() {
        const imageList = await getListImages();

        if (imageList) {
            setImageList(imageList);
            setActiveImage(imageList[0]);
        }
    }

    return <>{imageList && <PreviewImageList imageList={imageList} />}</>;
}
