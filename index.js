module.exports = function (content, callback) {
    if (typeof content != "string") throw "This expression requires only string and not other";
    let res = eval(content);
    callback(res);

};