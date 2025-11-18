let Personnel = [
  {
    id: 1,
    nom: "Khadija Abirat",
    role: "technicien",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    email: "khadija.abirat@gmail.com",
    telephone: "0612345678",
    experiences: [
      { entreprise: "Tech Solutions", role: "Stage IT", dateDebut: "2023-01", dateFin: "2023-06" },
      { entreprise: "NetCom Maroc", role: "Maintenance réseaux", dateDebut: "2024-01", dateFin: "2024-06" },
    ],
  },
  {
    id: 2,
    nom: "Youssef El Idrissi",
    role: "receptionniste",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    email: "youssef.elidrissi@gmail.com",
    telephone: "0623456789",
    experiences: [
      { entreprise: "Grand Hotel", role: "Accueil", dateDebut: "2022-01", dateFin: "2022-12" },
      { entreprise: "City Office", role: "Front Desk", dateDebut: "2023-01", dateFin: "2024-07" },
    ],
  },
  {
    id: 3,
    nom: "Fatima Zahra Bennis",
    role: "manager",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    email: "fatima.bennis@gmail.com",
    telephone: "0634567890",
    experiences: [{ entreprise: "YOUCODE", role: "Chef d'équipe", dateDebut: "2022-01", dateFin: "2024-07" }],
  },
  {
    id: 4,
    nom: "Mohamed El Amrani",
    role: "agentdesecurite",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    email: "mohamed.elamrani@gmail.com",
    telephone: "0645678901",
    experiences: [{ entreprise: "Secur Plus", role: "Agent de Surveillance", dateDebut: "2021-01", dateFin: "2023-12" }],
  },
  {
    id: 5,
    nom: "Sara Choukri",
    role: "nettoyage",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    email: "sara.choukri@gmail.com",
    telephone: "0656789012",
    experiences: [{ entreprise: "Service Pro", role: "Entretien", dateDebut: "2022-01", dateFin: "2023-12" }],
  },
  {
    id: 6,
    nom: "Hassan El Fassi",
    role: "technicien",
    photo: "https://randomuser.me/api/portraits/men/6.jpg",
    email: "hassan.elfassi@gmail.com",
    telephone: "0667890123",
    experiences: [{ entreprise: "Admin Solutions", role: "Support", dateDebut: "2022-01", dateFin: "2023-12" }],
  },
  {
    id: 7,
    nom: "Imane Lahlou",
    role: "technicien",
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
    email: "imane.lahlou@gmail.com",
    telephone: "0678901234",
    experiences: [{ entreprise: "IT Group", role: "Maintenance Serveur", dateDebut: "2023-01", dateFin: "2024-07" }],
  },
  {
    id: 8,
    nom: "Rachid Bennis",
    role: "agentdesecurite",
    photo: "https://randomuser.me/api/portraits/men/8.jpg",
    email: "rachid.bennis@gmail.com",
    telephone: "0689012345",
    experiences: [{ entreprise: "Patrol Security", role: "Contrôle Accès", dateDebut: "2022-01", dateFin: "2024-07" }],
  },
  {
    id: 9,
    nom: "Meriem Fassi",
    role: "receptionniste",
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    email: "meriem.fassi@gmail.com",
    telephone: "0690123456",
    experiences: [{ entreprise: "Bureau Services", role: "Accueil", dateDebut: "2022-01", dateFin: "2024-07" }],
  },
  {
    id: 10,
    nom: "Ali El Amrani",
    role: "nettoyage",
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
    email: "ali.elamrani@gmail.com",
    telephone: "0611223344",
    experiences: [{ entreprise: "Clean Masters", role: "Entretien Locaux", dateDebut: "2022-01", dateFin: "2024-07" }],
  },
];
const zones = [
  {
    id: 1,
    name: "Salle de conférence",
    allowedRoles: ["receptionniste", "manager", "nettoyage", "technicien", "agentdesecurite"],
    danschambre: [],
  },
  {
    id: 2,
    name: "Réception",
    allowedRoles: ["receptionniste","manager","nettoyage"],
    danschambre: [],
  },
  {
    id: 3,
    name: "Salle des serveurs",
    allowedRoles: ["technicien","manager","nettoyage"],
    danschambre: [],
  },
  {
    id: 4,
    name: "Salle de sécurité",
    allowedRoles: ["agentdesecurite","manager","nettoyage"],
    danschambre: [],
  },
  {
    id: 5,
    name: "Salle du personnel",
    allowedRoles: ["receptionniste","manager","nettoyage","technicien","agentdesecurite"],
    danschambre: [],
  },
  {
    id: 6,
    name: "Salle d’archives",
    allowedRoles: ["receptionniste","manager","technicien","agentdesecurite"],
    danschambre: [],
  },
];
// btn AddNewWorker
const btnAddNewWorker = document.getElementById("AddNewWorker");
btnAddNewWorker.addEventListener("click", function () {
  let form = document.getElementById("modelform");
  form.style.display = "flex";
});

//btn fermerformulaire
const btnfermerformulaire = document.getElementById("fermerformulaire");
btnfermerformulaire.addEventListener("click", function () {
  fermerformulaire();
});
// afficher limage de personelle
let photo = document.querySelector('input[name="photo"]');
let img = document.getElementById("afficherphoto");
photo.addEventListener("input", function () {
  let inputphoto = photo.value;
  if (inputphoto.trim() != "") {
    img.src = inputphoto;
  }
});
//btn ajouter experiences
const ajouterexperience = document.getElementById("ajouterexperience");
ajouterexperience.addEventListener("click", function () {
  let ajoutex = document.getElementById("ajoutex");
  let divtex = document.createElement("div");
  divtex.className = "experience";
  divtex.innerHTML = `
                  <input type="text" name="experience_name" placeholder="Nom de l'expérience" required />
                  <input type="text" name="experience_role" placeholder="Rôle" required />
                  <input type="date" name="start_date" placeholder="Date début" required />
                  <input type="date" name="end_date" placeholder="Date fin" />
                  <button type="button" class="remove-experience">remove experience</button>
               `;
  ajoutex.appendChild(divtex);
  let btnremoveex = divtex.querySelector(".remove-experience");
  btnremoveex.addEventListener("click", function () {
    divtex.remove();
  });
});
/// ajouter un Personnel
const btnajouter = document.getElementById("btnformajouterpersonel");
btnajouter.addEventListener("click", function (event) {
  event.preventDefault();
  ajoutepersonnel();
});
function fermerformulaire() {
  document.getElementById("form").reset();
  const form = document.getElementById("modelform");
  form.style.display = "none";
  let diveajoutex = document.getElementById("ajoutex");
  diveajoutex.innerHTML = "";
}
function ajoutepersonnel() {
  let nom = document.querySelector('input[name="nom"]').value.trim();
  let select = document.querySelector("select").value;
  let photo = document.querySelector('input[name="photo"]').value;
  let email = document.querySelector('input[name="email"]').value.trim();
  let telephone = document.querySelector('input[name="telephone"]').value.trim();

  let experiencesarr = [];
  const experiences = document.querySelectorAll(".experience");
  experiences.forEach((div) => {
    const nameInput = div.querySelector('input[name="experience_name"]').value.trim();
    const experienceRole = div.querySelector('input[name="experience_role"]').value.trim();
    const start_date = div.querySelector('input[name="start_date"]').value;
    const end_date = div.querySelector('input[name="end_date"]').value;

    experiencesarr.push({
      nom: nameInput,
      role: experienceRole,
      dateDebut: start_date,
      dateFin: end_date,
    });
  });

  if (!verificationform(nom, select, photo, email, telephone, experiencesarr)) {
    return;
  }

  Personnel.push({
    id: Personnel.length + 1,
    nom: nom,
    role: select,
    photo: photo,
    email: email,
    telephone: telephone,
    experiences: experiencesarr,
  });
  fermerformulaire();
  changerSidebar();
}

function verificationform(nom, select, photo, email, telephone, experiencesarr) {
  const nomregex = /^[a-zA-Z\s\-_]{2,}$/;
  const photoregex = /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)$/i;
  const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const telephoneregex = /^(\+212|0)([ \-]?)([67])(\d{8})$/;
    const roleregex = /^[a-zA-Z0-9\s\-_]{2,}$/;


  let msge = document.getElementById("error-msg");
  msge.innerHTML = "";

  if (!nom || !nomregex.test(nom)) {
    msge.innerHTML = "Le nom n'est pas valide.";
    return false;
  }
  if (!select || select === "default") {
    msge.innerHTML = "le role n'est pas valide.";
    return false;
  }

  if (photo && !photoregex.test(photo)) {
    msge.innerHTML = "Le lien de la photo n'est pas valide.";
    return false;
  }
  if (!email || !emailregex.test(email)) {
    msge.innerHTML = "L'email n'est pas valide.";
    return false;
  }
  if (!telephone || !telephoneregex.test(telephone)) {
    msge.innerHTML = "Le numero de telephone n'est pas valide.";
    return false;
  }

  if (experiencesarr.length > 0) {
          const aujourduit = new Date();
                msge.innerHTML = "";
    for (let i = 0; i < experiencesarr.length; i++) {
      const Obj = experiencesarr[i];
      const dateDebut = new Date(Obj.dateDebut);
      const dateFin = new Date(Obj.dateFin);
      if (!Obj.nom || !nomregex.test(Obj.nom)) {
        msge.innerHTML = "Le nom de  l'experience n'est pas valide.";
        return false;
      }
      if (!Obj.role || !roleregex.test(Obj.role)) {
        msge.innerHTML = "Le role n'est pas valide.";
        return false;
      }
if (!Obj.dateDebut || !Obj.dateFin || dateDebut >= dateFin || dateDebut > aujourduit || dateFin > aujourduit)
        {
        msge.innerHTML = "Les date sont invalides.";
        return false;
      }
    }
  }
  return true;
}

// function supprimerpersonel{

// }

function inzone(){
let inzone=[];
zones.forEach(zone=>{
  zone.danschambre.forEach(Personnelid=>{
  inzone.push(Personnelid);
  });
});
return inzone;
}


function outzone(){
let outzone=[];
Personnel.forEach(Personne=>{
if(!inzone().includes(Personne.id))
{ 
  outzone.push(Personne);
  }
});
return outzone;
}
function changerSidebar(){
  const divpersonelout=document.getElementById('outzone');
  divpersonelout.innerHTML="";
  outzone().forEach(persson=>{
      const personDiv = document.createElement('div');
  personDiv.className = 'personnel-card'; 
  personDiv.innerHTML = `
  <div>
  <img src="${persson.photo}">
</div>
<div>
  <span>${persson.nom}</span>  
  <span>${persson.role}</span>
</div>
  `;
  divpersonelout.appendChild(personDiv);

  })

}
changerSidebar();
