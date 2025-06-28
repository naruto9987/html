var index=0;
function carousel(){
    var i;
    var x=document.getElementsByClassName("myslides");
    for (i=0;i<x.length;i++) {
        x[i].sstyle.display="none";
    }
    index++;
    if (index>x.lenght) {
        index=1;
    }
    x

}