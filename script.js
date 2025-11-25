let Personnel = [
  {
    id: 1,
    nom: "Khadija Abirat",
    role: "technicien",
    photo: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "khadija.abirat@gmail.com",
    telephone: "0612345678",
    experiences: [
      { nomex: "Tech Solutions", roleex: "Stage IT", dateDebut: "2023-01", dateFin: "2023-06" },
      { nomex: "NetCom Maroc", roleex: "Maintenance réseaux", dateDebut: "2024-01", dateFin: "2024-06" },
    ],
  },
  {
    id: 2,
    nom: "Meriem Fassi",
    role: "receptionniste",
    photo: "https://images.pexels.com/photos/3769720/pexels-photo-3769720.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "meriem.fassi@gmail.com",
    telephone: "0690123456",
    experiences: [{ nomex: "Bureau Services", roleex: "Accueil", dateDebut: "2022-01", dateFin: "2024-07" }],
  },
  {
    id: 3,
    nom: "Yahya enna",
    role: "manager",
    photo: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "fatima.bennis@gmail.com",
    telephone: "0634567890",
    experiences: [{ nomex: "YOUCODE", roleex: "Chef d'équipe", dateDebut: "2022-01", dateFin: "2024-07" }],
  },
  {
    id: 4,
    nom: "Mohamed Amrani",
    role: "agentdesecurite",
    photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "mohamed.elamrani@gmail.com",
    telephone: "0645678901",
    experiences: [{ nomex: "Secur Plus", roleex: "Agent de Surveillance", dateDebut: "2021-01", dateFin: "2023-12" }],
  },
  {
    id: 5,
    nom: "Ali El Amrani",
    role: "nettoyage",
    photo: "https://images.pexels.com/photos/3862601/pexels-photo-3862601.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "ali.elamrani@gmail.com",
    telephone: "0611223344",
    experiences: [{ nomex: "Clean Masters", roleex: "Entretien Locaux", dateDebut: "2022-01", dateFin: "2024-07" }],
  },
];

const zones = [
  {
    name: "Sconfrence",
    roles: ["receptionniste", "manager", "nettoyage", "technicien", "agentdesecurite"],
    danszone: [],
    maxzone:1,
  },
  {
    name: "Sreception",
    roles: ["receptionniste", "manager", "nettoyage"],
    danszone: [],
       maxzone:5,
  },
  {
    name: "Sarchives",
    roles: ["receptionniste", "manager", "technicien", "agentdesecurite"],
    danszone: [],
       maxzone:7,
  },
  {
    name: "Spersonnel",
    roles: ["receptionniste", "manager", "nettoyage", "technicien", "agentdesecurite"],
    danszone: [],
       maxzone:9,
  },
  {
    name: "Ssecurite",
    roles: ["agentdesecurite", "manager", "nettoyage"],
    danszone: [],
       maxzone:5,
  },
  {
    name: "Sserveur",
    roles: ["technicien", "manager", "nettoyage"],
    danszone: [],
       maxzone:5,
  },
];
// btn AddNewWorker
const btnAddNewWorker = document.getElementById("AddNewWorker");
btnAddNewWorker.addEventListener("click", function () {
  const form = document.getElementById("modelform");
  form.style.display = "flex";
});

//btn fermerformulaire
const btnfermerformulaire = document.getElementById("fermerformulaire");
btnfermerformulaire.addEventListener("click", function () {
  fermerformulaire();
});
// afficher limage de personelle
const photo = document.querySelector('input[name="photo"]');
const img = document.getElementById("afficherphoto");
photo.addEventListener("input", function () {
  let inputphoto = photo.value;
  if (inputphoto.trim() != "") {
    img.src = inputphoto;
  }
});
//btn ajouter experiences
const ajouterexperience = document.getElementById("ajouterexperience");
ajouterexperience.addEventListener("click", function () {
  const ajoutex = document.getElementById("ajoutex");
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
  const btnremoveex = divtex.querySelector(".remove-experience");
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
  const diveajoutex = document.getElementById("ajoutex");
  diveajoutex.innerHTML = "";
}

function ajoutepersonnel() {
  const nom = document.querySelector('input[name="nom"]');
  const select = document.querySelector("select");
  const photo = document.querySelector('input[name="photo"]');
  const email = document.querySelector('input[name="email"]');
  const telephone = document.querySelector('input[name="telephone"]');

  let experiencesarr = [];
  const experiences = document.querySelectorAll(".experience");
  experiences.forEach((div) => {
    const nameInput = div.querySelector('input[name="experience_name"]');
    const experienceRole = div.querySelector('input[name="experience_role"]');
    const start_date = div.querySelector('input[name="start_date"]');
    const end_date = div.querySelector('input[name="end_date"]');

    experiencesarr.push({
      nomex: nameInput.value.trim(),
      roleex: experienceRole.value.trim(),
      dateDebut: start_date.value,
      dateFin: end_date.value,
    });
  });
  nom.style.backgroundColor = "";
  select.style.backgroundColor = "";
  photo.style.backgroundColor = "";
  email.style.backgroundColor = "";
  telephone.style.backgroundColor = "";

  if (!verificationform(nom, select, photo, email, telephone, experiencesarr)) {
    return;
  }

  Personnel.push({
    id: Personnel.length + 1,
    nom: nom.value.trim(),
    role: select.value,
    photo: photo.value.trim() || "https://media.istockphoto.com/id/1196083861/vector/simple-man-head-icon-set.jpg?s=612x612&w=0&k=20&c=a8fwdX6UKUVCOedN_p0pPszu8B4f6sjarDmUGHngvdM=",
    email: email.value.trim(),
    telephone: telephone.value.trim(),
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

  const msge = document.getElementById("error-msg");
  msge.innerHTML = "";

  if (!nom.value.trim() || !nomregex.test(nom.value.trim())) {
    msge.style.display = "flex";
    msge.innerHTML = "Le nom n'est pas valide.";
    nom.style.backgroundColor = "#e80e0e65";
    return false;
  }
  if (!select.value || select.value === "default") {
    msge.style.display = "flex";
    msge.innerHTML = "le role n'est pas valide.";
    select.style.backgroundColor = "#e80e0e65";
    return false;
  }
  if (photo.value.trim() && !photoregex.test(photo.value.trim())) {
    msge.style.display = "flex";
    msge.innerHTML = "Le lien de la photo n'est pas valide.";
    photo.style.backgroundColor = "#e80e0e65";
    return false;
  }
  if (!email.value.trim() || !emailregex.test(email.value.trim())) {
    msge.style.display = "flex";
    msge.innerHTML = "L'email n'est pas valide.";
    email.style.backgroundColor = "#e80e0e65";
    return false;
  }
  if (!telephone.value.trim() || !telephoneregex.test(telephone.value.trim())) {
    msge.style.display = "flex";
    msge.innerHTML = "Le numero de telephone n'est pas valide.";
    telephone.style.backgroundColor = "#e80e0e65";
    return false;
  }

  if (experiencesarr.length > 0) {
    const aujourduit = new Date();
    msge.innerHTML = "";
    for (let i = 0; i < experiencesarr.length; i++) {
      const Obj = experiencesarr[i];
      const dateDebut = new Date(Obj.dateDebut);
      const dateFin = new Date(Obj.dateFin);
      if (!Obj.nomex || !nomregex.test(Obj.nomex)) {
        msge.style.display = "flex";
        msge.innerHTML = "Le nom de  l'experience n'est pas valide.";
        return false;
      }
      if (!Obj.roleex || !roleregex.test(Obj.roleex)) {
        msge.style.display = "flex";
        msge.innerHTML = "Le role n'est pas valide.";
        return false;
      }
      if (!Obj.dateDebut || !Obj.dateFin || dateDebut >= dateFin || dateDebut > aujourduit || dateFin > aujourduit) {
        msge.innerHTML = "Les date sont invalides.";
        return false;
      }
    }
  }

  return true;
}
// fonction return array fih les id personne li in zoninig
function inzone() {
  let inzone = [];
  zones.forEach((zone) => {
    zone.danszone.forEach((Personnelid) => {
      inzone.push(Personnelid);
    });
  });
  return inzone;
}
// fonction return array dyal les id personne li no zoning
function outzone() {
  let outzone = [];
  Personnel.forEach((Personne) => {
    if (!inzone().includes(Personne.id)) {
      outzone.push(Personne);
    }
  });
  return outzone;
}

// personel no zoning afficher en sidebar b fonction outzone

const divpersonelout = document.getElementById("outzone");
const modelperson = document.getElementById("modelpersonel");
const divinfo = document.getElementById("diveinfo");
function changerSidebar() {
  divpersonelout.innerHTML = "";
  outzone().forEach((persson) => {
    const principale = document.createElement("div");
    principale.className = "principalediv";
    const personDiv = document.createElement("div");
    personDiv.className = "personnelcard";
    personDiv.innerHTML = `
  <div class="image">
  <img src="${persson.photo}">
</div>
<div class="prsnNR">
  <p>${persson.nom} :</p>
  <span>${persson.role} </span>  
</div>
  `;
    // click sur perssone et afficher leur informations
    personDiv.addEventListener("click", function () {
      modelperson.style.display = "flex";
      const persoinfo = document.createElement("div");
      persoinfo.className = "personnelinfo";
      persoinfo.innerHTML = `      
      <form  class="forminfo">
          <div class="info1line">
          <div >
          <img src="${persson.photo}">
          </div>
          <div >
            <span>le nom:</span> <p>${persson.nom}</p>            
            <span>le role:</span> <p>${persson.role}</p>            
            <span>email :</span> <p>${persson.email}</p>
            <span>telephone :</span> <p>${persson.telephone}</p>
          </div >
          </div >
          <div >
            <span>experiences :</span>
             ${persson.experiences
               .map(
                 (exp) => `
              <div style="margin-top: 0.6rem">
              <span>${exp.nomex} : ${exp.roleex}  </span>
              <small>${exp.dateDebut} au ${exp.dateFin}</small>              
              </div>`
               )
               .join("")}
          </div>
   </form>`;
      divinfo.innerHTML = "";
      divinfo.appendChild(persoinfo);
    });
    principale.appendChild(personDiv);
    const divaction = document.createElement("div");
    divaction.className = "actions";
    divaction.innerHTML = `
  <button class="supprimer"><i class="fa-solid fa-trash"></i></button>
  `;
      //  <button class="modiffier"><i class="fa-solid fa-pen"></i></button>
    principale.appendChild(divaction);
    const btnsprm = principale.querySelector(".supprimer");
    btnsprm.addEventListener("click", function () {
      principale.remove();
      let novarr = [];
      for (let i = 0; i < Personnel.length; i++) {
        if (Personnel[i].id != persson.id) {
          novarr.push(Personnel[i]);
        }
      }
      Personnel = novarr;
    });
    divpersonelout.appendChild(principale);
  });
}
changerSidebar();

//  fermer model personne
function fermermodelperson() {
  modelperson.style.display = "none";
  divinfo.innerHTML = "";
}
const btnfermerinfoperson = document.getElementById("btnfermerperson");
btnfermerinfoperson.addEventListener("click", function () {
  fermermodelperson();
});

const modelz = document.getElementById("modelzone");
const divzon = document.getElementById("divezone");

function zone(idx) {
  modelz.style.display = "flex";
  divzon.innerHTML = "";
  outzone().forEach((pesr) => {
    if (zones[idx].roles.includes(pesr.role)) {
      const modelzdiv = document.createElement("div");
      modelzdiv.className = "divpersonne";
      const modelzdiv2 = document.createElement("div");
      modelzdiv2.className = "personnelcardzone";
      modelzdiv2.innerHTML = `
       <div> <img src="${pesr.photo}"> </div>
       <div><span>${pesr.nom}: </span> 
       <span>${pesr.role}</span></div>
       `;
      modelzdiv.appendChild(modelzdiv2);
      const btnfermerpersonel = document.createElement("button");
      btnfermerpersonel.textContent = "x";
      btnfermerpersonel.className = "removepersonzone fermerformulaire";
      modelzdiv.appendChild(btnfermerpersonel);
      btnfermerpersonel.addEventListener("click", function () {
        modelzdiv.remove();
        for (let i = 0; i < zones[idx].danszone.length; i++) {
          if (zones[idx].danszone[i] == pesr.id) {
            for (let j = i; j < zones[idx].danszone.length - 1; j++) {
              zones[idx].danszone[j] = zones[idx].danszone[j + 1];
            }
            zones[idx].danszone.length--;
            break;
          }
        }
        changerSidebar();
        redzone();
      });
      
      modelzdiv2.addEventListener("click", function () {
        const zonex = document.getElementById(zones[idx].name);

        if(zones[idx].maxzone>zones[idx].danszone.length)
        {
        zones[idx].danszone.push(pesr.id);
        changerSidebar();
        redzone();
        }
        else{
        let zoneMessage= document.querySelector('.zoneMessage');
        zoneMessage.innerText = "";
          zoneMessage.innerText = "cette zone est plane !!!!";
          return;
        }
           zonex.appendChild(modelzdiv);
      });
      divzon.appendChild(modelzdiv);
    }
  });
}

const btnconference = document.querySelector(".btnconference");
btnconference.addEventListener("click", function () {
  zone(0);
});
const btnreception = document.querySelector(".btnreception");
btnreception.addEventListener("click", function () {
  zone(1);
});
const btnpersonnel = document.querySelector(".btnpersonnel");
btnpersonnel.addEventListener("click", function () {
  zone(3);
});
const btnarchive = document.querySelector(".btnarchive");
btnarchive.addEventListener("click", function () {
  zone(2);
});
const btnserveur = document.querySelector(".btnserveur");
btnserveur.addEventListener("click", function () {
  zone(5);
});
const btnsecurite = document.querySelector(".btnsecurite");
btnsecurite.addEventListener("click", function () {
  zone(4);
});
// fermer fermer model zone
function fermermodelzone() {
  const modelzon = document.getElementById("modelzone");
  modelzon.style.display = "none";
  const divezone = document.getElementById("divezone");
  divezone.innerHTML = "";
}
const btnfermerzone = document.getElementById("btnfermerzone");
btnfermerzone.addEventListener("click", function () {
  fermermodelzone();
});

// zone red background
function redzone() {
  for (let i = 0; i < zones.length; i++) {
    if (zones[i].name !== "Sconfrence" && zones[i].name !== "Spersonnel") {
      if (!zones[i].danszone.length) {
        let divzone = document.querySelector("." + zones[i].name);
        divzone.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
      } else {
        let divzone = document.querySelector("." + zones[i].name);
        divzone.style.background = "transparent";
      }
    }
  }
}
redzone();
//animation css
//modifier personel
//localstorg
