const mapArrToStr = (arr) => {
    return arr.filter(elem => Number.isInteger(elem)).map(String)
}

module.exports = mapArrToStr;