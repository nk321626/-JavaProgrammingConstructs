const datas = [
    {Name: "Niraj", Profession: "Software Developer"},
    {Name: "Rani", Profession: "Software Developer"},
];
function getDatas() {
    setTimeout(() => {
        datas.forEach((data, index) => {
            console.log(data, Name);
        })
    }, 1000) // 1 sec
}
function createData(newData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newData);
            let error = false
            if (!error) {
                resolve();
            }
            else{
                reject("Error Occured........");
            }
        }, 2000) // 2 sec
    })
}
createData({Name: "Mansi", Profession: "Software Developer"}).then(getDatas).catch(err => console.log(err)); 