function count() {
    var frcation = document.getElementById('myNumber').value;
    switch (true) {
        case frcation <= 100 && frcation > 90:
            alert("一等生");
            break;
        case frcation <= 90 && frcation > 80:
            alert("二等生");
            break;
        case frcation <= 80 && frcation > 70:
            alert("三等生");
            break;
        case frcation <= 70 && frcation > 60:
            alert("四等生");
            break;
        case frcation <= 60 && frcation > 50:
            alert("五等生");
            break;
        case frcation <= 50 && frcation > 40:
            alert("六等生");
            break;
        case frcation <= 40 && frcation > 30:
            alert("七等生");
            break;
        case frcation <= 30 && frcation > 20:
            alert("八等生");
            break;
        case frcation <= 20 && frcation > 0:
            alert("九等生");
            break;
        default:
            alert("超级生");
            break;
    }
}
