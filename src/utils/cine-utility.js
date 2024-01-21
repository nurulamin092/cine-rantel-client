function getImgUrl(name) {
    return new URL(`../assets/movie-covers/${name}`, import.meta.url).href
}

function getRatingUrl(name) {
    return new URL(`../assets/${name}`, import.meta.url).href
}

export { getImgUrl, getRatingUrl }