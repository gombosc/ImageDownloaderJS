console.log("testing");
function dowloadImages(){
    let images = document.getElementsByTagName('img');
    console.log(images);
    let srcList = [];
    let i = 0;

    setInterval(function(){
        if(images > i){
            srcList.push(images[i].src);
            let link = document.createElement('a');
            link.id = i;
            link.downloand = images[i].src;
            link.href = images[i].src;
            link.click();
            i++;
        }
    },2000);
}

// on click opens new tab to inserted url
// gets all images and downloads them


button = document.getElementById('button');
function buttonPress(){
    input = document.getElementById('input');
    url = input.value;
    console.log(url);
    // let a = window.open(url,"name");
    // a.focus();
    setTimeout(console.log("wait until confirm"),4000);
    if(confirm('Start download?')){
        alert('Downloading');
    }
    else{
        alert('Why you no love me...');
        window.close;
    }
}
button.addEventListener("click",buttonPress)


