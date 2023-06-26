function funcClear() {
    document.getElementById("input").value="";
    document.getElementById("output").value="";
}
    
function myFunction() {
    var unsanTxt = (document.getElementById("input").value).toLowerCase();
    var str=sanLogic(unsanTxt);
    const result = str.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, i => i.toUpperCase());
    console.log(result);
    document.getElementById("output").value=sanLogic(result);    
}
function popitup(url,windowName) {
    newwindow=window.open(url,windowName,'height=200,width=150');
    if (window.focus) {newwindow.focus()}
    return false;
  }


function sanLogic(sanTxt){
    for (var key in dictionary) {
        console.log("Key: " + key + " has value :"+ dictionary[key]);
        if(reportStats[key] > -1) {
            sanTxt = sanTxt.replace(key, dictionary[key]);
        } else {
            console.log("Key: " + key + " not reported often for sanitization to work");
        }
    }
    return sanTxt;
}
function showDictionary(){
    var tbl = "<table border=1 width=450px>";
    for (var key in dictionary) {
        const key1 = key.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, i => i.toUpperCase());
        const result = dictionary[key].replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, i => i.toUpperCase());
        tbl = tbl + "<tr><td>" + key1 + "</td><td>"+ result+"</td></tr>";
    }
    tbl = tbl + "</table>";
    document.getElementById("lstDictionary").innerHTML = tbl;
}

function hideDictionary(){
    document.getElementById("lstDictionary").innerHTML = "";
}
