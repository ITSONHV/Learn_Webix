/* views/details.js */
export default () => {
    var data = [];
    for (var i = 0; i < 10; i++)
        data.push({ value:i });

    return {
        view:"list", data:data,select:true
    }
}