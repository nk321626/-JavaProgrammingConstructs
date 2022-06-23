const datas = [
    {Name: "Niraj", Profession: "Software Developer"},
    {Name: "Rani", Profession: "Software Developer"},
];
function getDatas() {
    setTimeout(() => {
        datas.forEach((data, index) => {
            console.log(data.Name);
        })
    }, 1000) // 1 sec
}
function createData(newData, callback) {
    setTimeout(() => {
        datas.push(newData)
        callback();
    }, 2000) // 2 sec
}
createData({Name: "Mansi", Profession: "Software Developer"}, getDatas); 