export async function getListImages() {
    try {
        const response = await fetch("https://picsum.photos/v2/list");

        if (response.ok) {
            const json = await response.json();
            return json;
        } else {
            throw new Error(response);
        }
    } catch (error) {
        console.error(error);
    }
}

export async function getImage(src) {
    try {
        console.log(src);
        const response = await fetch(src);

        if (response.ok) {
            const json = await response.json();
            return json;
        } else {
            throw new Error(response);
        }
    } catch (error) {
        console.error(error);
    }
}
