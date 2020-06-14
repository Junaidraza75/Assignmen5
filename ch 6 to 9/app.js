function printTable() {

    var num;

    num = Number(document.getElementById('txtNumber').value);

    for (var i = 1; i <= 10; i++) {

        var pTag = document.getElementById('pPrint');

        pTag.innerHTML += (num + "x" + i + "=" + num * i) + "<br/>"


    }
}

function myclear() {
    console.clear();

}



