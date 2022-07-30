max=2;
min=0;
document.getElementById("btn").onclick =() => {
    var random = Math.round(Math.random() * (max-min)+min);
    let ans;
    switch(random){
        case 0:
            ans="Thục &#127774";
            break;
        case 1:
            ans="Thủy &#129408";
            break;
        case 2:
            ans="Trường &#127877";
            break;
        }
    document.getElementById("random").innerHTML = ans;
}
