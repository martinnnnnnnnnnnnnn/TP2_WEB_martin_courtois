const bouton = document.getElementById("bouton");
const inputdollar2 = document.getElementById("dollar2");
const inputdollar_australien2 = document.getElementById("dollar_australien2");
const inputeuro2 = document.getElementById("euro2");
function convertisseur(){
    let euro = document.getElementById("euro").value;
    let dollar = euro * 1.18;
    let Dollar_Australien = euro * 1.79;
    document.getElementById("dollar").value = dollar;
    document.getElementById("dollar_australien").value = Dollar_Australien;
}
bouton.addEventListener("click", convertisseur);

function convertisseur2(monnais){
    if (monnais==="euro") {
        let euro2 = document.getElementById("euro2").value;
        let dollar2 = euro2 * 1.18;
        let Dollar_Australien2 = euro2 * 1.79;
        document.getElementById("dollar2").value = dollar2;
        document.getElementById("dollar_australien2").value = Dollar_Australien2;
    }
    if (monnais==="dollar") {
        let dollar2 = document.getElementById("dollar2").value;
        let euro2 = dollar2 / 1.18;
        let Dollar_Australien2 = euro2 * 1.79;
        document.getElementById("euro2").value = euro2;
        document.getElementById("dollar_australien2").value = Dollar_Australien2;
    }
    if (monnais==="dollar_australien") {
        let Dollar_Australien2 = document.getElementById("dollar_australien2").value;
        let euro2 = Dollar_Australien2 / 1.79;
        let dollar2 = euro2 * 1.18;
        document.getElementById("euro2").value = euro2;
        document.getElementById("dollar2").value = dollar2;
    }
}
inputeuro2.addEventListener("input", function(){
    inputdollar2.value = "";
    inputdollar_australien2.value = ""; 
    convertisseur2("euro")
});

inputdollar2.addEventListener("input", function(){
    inputeuro2.value = "";
    inputdollar_australien2.value = "";
    convertisseur2("dollar")
});

inputdollar_australien2.addEventListener("input", function(){
    inputeuro2.value = "";
    inputdollar2.value = "";
    convertisseur2("dollar_australien")
}); 
