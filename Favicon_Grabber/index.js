function isValidURL(string) {
    let res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  }



function startIt(){

    let myurl = document.getElementById("urlText").value;

    if(myurl==""){
        alert("Please enter the URL:");
    }
    else if(myurl!=="" && isValidURL(myurl)==true){
        grabFav();
    }
    else{
        alert("Please enter the valid URL:");
    }

  }

  function grabFav(){
    let myurl = document.getElementById("urlText").value;
    let myimg = document.getElementById("theimg");
    let mysize = document.getElementById("size").value;
    let duckApi = "https://icons.duckduckgo.com/ip3/";
    let googleAPi = "https://s2.googleusercontent.com/s2/favicons?domain=";
    let imgPath="";
    let h1 = "https://";
    let h2 = "http://";
    myurl = myurl.replace(h1,"");
    myurl = myurl.replace(h2,"");
    if(mysize =="default"){
        imgPath=duckApi+myurl+".ico";
        myimg.src=imgPath;
    }
    else if(mysize=="16"){
        imgPath=googleAPi+myurl+"&sz=16";
        myimg.src=imgPath;
    }
    else if(mysize=="32"){
        imgPath=googleAPi+myurl+"&sz=32";
        myimg.src=imgPath;
    }
    else if(mysize=="48"){
        imgPath=googleAPi+myurl+"&sz=48";
        myimg.src=imgPath;
    }
    else if(mysize=="64"){
        imgPath=googleAPi+myurl+"&sz=64";
        myimg.src=imgPath;
    }
    else if (mysize=="128") {
        imgPath=googleAPi+myurl+"&sz=128";
        myimg.src=imgPath;
    }
    downloadIT(imgPath);
}

function downloadIT(path){
    let downloadPath=path;
    let downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.href=downloadPath;
}