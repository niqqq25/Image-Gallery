import React, { createContext, useState } from "react";

const ActiveImageContext = createContext(null);

function ActiveImageProvider({ children }) {
    const [activeImage, setActiveImage] = useState(null);

    return (
        <ActiveImageContext.Provider value={{ activeImage, setActiveImage }}>
            {children}
        </ActiveImageContext.Provider>
    );
}

export { ActiveImageContext, ActiveImageProvider };
