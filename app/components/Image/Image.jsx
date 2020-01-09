import React, { useState, useEffect } from "react";
import clsx from "clsx";
import "./Image.styles.css";

import Spinner from "../Spinner";

export default function Image(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
    }, [props.src]);

    return (
        <>
            <img
                className={clsx("image", loading && "image--hidden")}
                {...props}
                key={props.src}
                onLoad={() => setLoading(false)}
            />
            {loading && <Spinner />}
        </>
    );
}
