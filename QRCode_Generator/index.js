function genQR(){
    let gAPI = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    let myImg = document.getElementById("theImg");
    let qrText = document.getElementById("qrText").value;
    let mySize = document.getElementById("size").value;

    if (qrText!=="" && mySize=="100"){
        myImg.src=gAPI+"100x100"+"&chl="+qrText;
    }
    else if (qrText!=="" && mySize=="150"){
        myImg.src=gAPI+"150x150"+"&chl="+qrText;
    }
    else if (qrText!=="" && mySize=="200"){
        myImg.src=gAPI+"200x200"+"&chl="+qrText;
    }
    else if (qrText!=="" && mySize=="250"){
        myImg.src=gAPI+"250x250"+"&chl="+qrText;
    }
    else if (qrText!=="" && mySize=="300"){
        myImg.src=gAPI+"300x300"+"&chl="+qrText;
    }
    else {
        alert("Please Enter Text: ")
    }
}