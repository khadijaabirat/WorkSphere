let Personnel = [
  {
    id: 1,
    nom: "Khadija Abirat",
    role: "technicien",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    email: "khadija.abirat@gmail.com",
    telephone: "0612345678",
    experiences: ["Stage IT 2023", "Maintenance réseaux 2024", "Support technique 2024"]
  },
  {
    id: 2,
    nom: "Youssef El Idrissi",
    role: "receptionniste",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    email: "youssef.elidrissi@gmail.com",
    telephone: "0623456789",
    experiences: ["Accueil hôtel 2022", "Front desk 2023", "Gestion réservation clients"]
  },
  {
    id: 3,
    nom: "Fatima Zahra Bennis",
    role: "manager",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    email: "fatima.bennis@gmail.com",
    telephone: "0634567890",
    experiences: ["Gestion équipe 2022", "Supervision projet 2023", "Planification stratégique"]
  },
  {
    id: 4,
    nom: "Mohamed El Amrani",
    role: "agentdesecurite",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    email: "mohamed.elamrani@gmail.com",
    telephone: "0645678901",
    experiences: ["Sécurité site 2021", "Patrouille 2023", "Surveillance CCTV"]
  },
  {
    id: 5,
    nom: "Sara Choukri",
    role: "nettoyage",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    email: "sara.choukri@gmail.com",
    telephone: "0656789012",
    experiences: ["Nettoyage bureaux 2022", "Entretien locaux 2023", "Désinfection salles"]
  },
  {
    id: 6,
    nom: "Hassan El Fassi",
    role: "technicien",
    photo: "https://randomuser.me/api/portraits/men/6.jpg",
    email: "hassan.elfassi@gmail.com",
    telephone: "0667890123",
    experiences: ["Support administratif 2022", "Assistante polyvalente 2023", "Archivage documents"]
  },
  {
    id: 7,
    nom: "Imane Lahlou",
    role: "technicien",
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
    email: "imane.lahlou@gmail.com",
    telephone: "0678901234",
    experiences: ["Maintenance serveur 2023", "Installation logiciels", "Support réseau"]
  },
  {
    id: 8,
    nom: "Rachid Bennis",
    role: "agentdesecurite",
    photo: "https://randomuser.me/api/portraits/men/8.jpg",
    email: "rachid.bennis@gmail.com",
    telephone: "0689012345",
    experiences: ["Surveillance site 2022", "Contrôle accès 2023", "Patrouille"]
  },
  {
    id: 9,
    nom: "Meriem Fassi",
    role: "receptionniste",
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    email: "meriem.fassi@gmail.com",
    telephone: "0690123456",
    experiences: ["Accueil visiteurs 2022", "Gestion appels téléphoniques", "Réservation salles"]
  },
  {
    id: 10,
    nom: "Ali El Amrani",
    role: "nettoyage",
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
    email: "ali.elamrani@gmail.com",
    telephone: "0611223344",
    experiences: ["Entretien bureaux 2022", "Nettoyage salles de réunion", "Gestion déchets"]
  }
];
const zones = [
  {
    id: 1,
    name: "Salle de conférence",
    allowedRoles: ["receptionniste,manager,nettoyage,technicien,agentdesecurite"], 
    danschambre:[],
  },
  {
    id: 2,
    name: "Réception",
    allowedRoles: ["receptionniste,manager,nettoyage"], 
    danschambre:[],
  },
  {
    id: 3,
    name: "Salle des serveurs",
    allowedRoles: ["technicien,manager,nettoyage"], 
    danschambre:[],
  },
  {
    id: 4,
    name: "Salle de sécurité",
    allowedRoles: ["agentdesecurite,manager,nettoyage"], 
    danschambre:[],
  },
  {
    id: 5,
    name: "Salle du personnel",
    allowedRoles: ["receptionniste,manager,nettoyage,technicien,agentdesecurite"], 
    danschambre:[],
  },
  {
    id: 6,
    name: "Salle d’archives",
    allowedRoles: ["receptionniste,manager,technicien,agentdesecurite"],  
    danschambre:[],
  }
];


// btn AddNewWorker 
const btnAddNewWorker=document.getElementById('AddNewWorker');
btnAddNewWorker.addEventListener("click",function(){
let form=document.getElementById('modelform');
form.style.display='flex';
});

//btn fermerformulaire
const btnfermerformulaire=document.getElementById('fermerformulaire');
btnfermerformulaire.addEventListener("click",function(){
  fermerformulaire();
});
//btn ajouter experiences
const ajouterexperience=document.getElementById('ajouterexperience');
ajouterexperience.addEventListener("click",function(){
let ajoutex=document.getElementById('ajoutex');
let inputex=document.createElement('input');
inputex.name="experiences";
inputex.placeholder="saisirez votre experiences";
ajoutex.appendChild(inputex);
});
/// ajouter un Personnel
const btnajouter=document.getElementById('btnformajouterpersonel');
btnajouter.addEventListener("click",function(event){
  event.preventDefault();
 ajoutepersonnel();
});
function fermerformulaire(){
  document.getElementById('form').reset();
 const form=document.getElementById('modelform');
  form.style.display='none';
  let diveajoutex=document.getElementById('ajoutex');
  diveajoutex.innerHTML="";
}
function ajoutepersonnel(){
let nom=document.querySelector('input[name="nom"]').value;
let select=document.querySelector('select').value;
let photo=document.querySelector('input[name="photo"]').value;
let email=document.querySelector('input[name="email"]').value;
let telephone=document.querySelector('input[name="telephone"]').value;

let experiences=document.querySelectorAll('input[name="experiences"]');
let experiencesarr = [...experiences].map(input => input.value.trim()).filter(value => value !== "");;
if(!verificationform(nom,select,photo,email,telephone,experiencesarr)){
  return;
}
let noveaupersonel={
    id: Personnel.length+1,
    nom: nom,
    role: select,
    photo: photo,
    email: email,
    telephone: telephone,
    experiences: experiencesarr,
};

Personnel.push(noveaupersonel);
let form=document.getElementById('form');
fermerformulaire();

}
function verificationform(nom,select,photo,email,telephone,experiencesarr){

const nomregex = /^[a-zA-Z\s\-_]{2,}$/;
const photoregex= /^(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|svg|webp))$/i;
const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const telephoneregex = /^(\+212|0)([ \-]?)([67])(\d{8})$/;

if(!nom || !nomregex.test(nom))

}

// function supprimerpersonel{

// }