import React from "react";
import clsx from "clsx";
import "./PreviewImage.styles.css";

import Image from "../Image";

export default function PreviewImage({ selected, ...props }) {
    return (
        <div
            className={clsx(
                "preview-image",
                selected && "preview-image--selected"
            )}
        >
            <Image {...props} />
        </div>
    );
}
