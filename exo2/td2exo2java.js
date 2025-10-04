document.querySelector(".wiki").href = "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal";
const ouinon = document.querySelector(".ouinon");
const boutonouinon = document.querySelector(".bouton_ouinon");
function ouinonfunction(){
    variable=ouinon.value.toLowerCase();
    if (variable!="oui" && variable!="non"){
        ouinon.value="";
        ouinon.placeholder="Veuillez répondre par oui ou non";
    }
}
boutonouinon.addEventListener("click", ouinonfunction);
const c1=document.getElementById("choixn1");
c1.textContent="HP";
const c2=c1.nextElementSibling.nextElementSibling;
c2.textContent="Casque";
const c3=c2.nextElementSibling.nextElementSibling;
c3.textContent="Bluetooth";



function changevol(radio){
    let range=document.querySelector('.bar');
    let label=range.nextElementSibling;
    if(radio.value=="1"){
        label.textContent="Volume HP";
    }
    if(radio.value=="2"){
        label.textContent="Volume Casque";
    }
    if(radio.value=="3"){
        label.textContent="Volume Bluetooth";
    }

}
let radios = document.querySelectorAll('input[name="choix"]');
radios.forEach(function(radio) {
    radio.addEventListener('change', function() {
        changevol(this);
    });
});

let bare = document.querySelector('.bar');
bare.max = 100;
console.log("Valeur maximale du volume :", bare.max);

let valeurAffichee = document.querySelector(".vfolume");
valeurAffichee.textContent = bare.value;
bare.addEventListener("input", function() {
    valeurAffichee.textContent = this.value;
});

let case_mute = document.querySelector(".mute");
case_mute.textContent = "Mute";
let case_mute2 = document.getElementById("case");
case_mute2.addEventListener("change", function() {
    if (bare.disabled) {
        bare.disabled = false;
        valeurAffichee.textContent = bare.value;
    }
    else {
        bare.disabled = true;   
        valeurAffichee.textContent = "0"; 
        bare.value = 0; 
    }
});
let container = document.querySelector(".container");
let nouvelle_Image = document.createElement("img");
nouvelle_Image.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";
nouvelle_Image.width = 200;
nouvelle_Image.alt = "Logo UPHF";
container.appendChild(nouvelle_Image);