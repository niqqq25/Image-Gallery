import React from "react";
import "./EnlargedImage.styles.css";

import Image from "../Image";

export default function EnlargedImage(props) {
    return (
        <div className="enlarged-image">
            <Image {...props} />
        </div>
    );
}
