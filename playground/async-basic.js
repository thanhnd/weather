console.log("This is the first line.")

function getData(callback) {
    setTimeout(() => {
        console.log("Got data.")
        callback()
    }, 2000);
}

function showData() {
    console.log("Show Data")
}

getData(showData)