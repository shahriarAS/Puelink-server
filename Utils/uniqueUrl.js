const uniqueURL = () => {
    return parseInt(Date.now()/Math.random()).toString(36).substr(3);
}

module.exports = uniqueURL