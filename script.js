let Personnel = [
  {
    id: 1,
    nom: "Khadija Abirat",
    role: "technicien",
    photo: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400", // امرأة تقنيّة تعمل على حاسوب
    email: "khadija.abirat@gmail.com",
    telephone: "0612345678",
    experiences: [
      { entreprise: "Tech Solutions", role: "Stage IT", dateDebut: "2023-01", dateFin: "2023-06" },
      { entreprise: "NetCom Maroc", role: "Maintenance réseaux", dateDebut: "2024-01", dateFin: "2024-06" },
    ],
  },
  {
    id: 2,
    nom: "Meriem Fassi",
    role: "receptionniste",
    photo: "https://images.pexels.com/photos/3769720/pexels-photo-3769720.jpeg?auto=compress&cs=tinysrgb&w=400", // سيدة ببدلة مبتسمة (موظفة استقبال)
    email: "meriem.fassi@gmail.com",
    telephone: "0690123456",
    experiences: [{ entreprise: "Bureau Services", role: "Accueil", dateDebut: "2022-01", dateFin: "2024-07" }],
  },
  {
    id: 3,
    nom: "Yahya enna",
    role: "manager",
    photo: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "fatima.bennis@gmail.com",
    telephone: "0634567890",
    experiences: [{ entreprise: "YOUCODE", role: "Chef d'équipe", dateDebut: "2022-01", dateFin: "2024-07" }],
  },
  {
    id: 4,
    nom: "Mohamed El Amrani",
    role: "agentdesecurite",
    photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400", // صورة احترافية لوجه رجل (مناسب لدور الحارس)
    email: "mohamed.elamrani@gmail.com",
    telephone: "0645678901",
    experiences: [{ entreprise: "Secur Plus", role: "Agent de Surveillance", dateDebut: "2021-01", dateFin: "2023-12" }],
  },
  {
    id: 5,
    nom: "Ali El Amrani",
    role: "nettoyage",
    photo: "https://images.pexels.com/photos/3862601/pexels-photo-3862601.jpeg?auto=compress&cs=tinysrgb&w=400", // رجل يقوم بالتنظيف بمهنية
    email: "ali.elamrani@gmail.com",
    telephone: "0611223344",
    experiences: [{ entreprise: "Clean Masters", role: "Entretien Locaux", dateDebut: "2022-01", dateFin: "2024-07" }],
  },
];

const zones = [
  {
    name: "Sconfrence",
    roles: ["receptionniste", "manager", "nettoyage", "technicien", "agentdesecurite"],
    danschambre: [],
  },
  {
    name: "Sreception",
    roles: ["receptionniste", "manager", "nettoyage"],
    danschambre: [],
  },
  {
    name: "Sarchives",
    roles: ["receptionniste", "manager", "technicien", "agentdesecurite"],
    danschambre: [],
  },
  {
    name: "Spersonnel",
    roles: ["receptionniste", "manager", "nettoyage", "technicien", "agentdesecurite"],
    danschambre: [],
  },
  {
    name: "Ssecurite",
    roles: ["agentdesecurite", "manager", "nettoyage"],
    danschambre: [],
  },
  {
    name: "Sserveur",
    roles: ["technicien", "manager", "nettoyage"],
    danschambre: [],
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
  const nom = document.querySelector('input[name="nom"]').value.trim();
  const select = document.querySelector("select").value;
  const photo = document.querySelector('input[name="photo"]').value;
  const email = document.querySelector('input[name="email"]').value.trim();
  const telephone = document.querySelector('input[name="telephone"]').value.trim();

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
    photo: photo || "https://media.istockphoto.com/id/1196083861/vector/simple-man-head-icon-set.jpg?s=612x612&w=0&k=20&c=a8fwdX6UKUVCOedN_p0pPszu8B4f6sjarDmUGHngvdM=",
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

  const msge = document.getElementById("error-msg");
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
    zone.danschambre.forEach((Personnelid) => {
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
    const personDiv = document.createElement("div");
    personDiv.className = "personnelcard";
    personDiv.innerHTML = `
  <div>
  <img src="${persson.photo}">
</div>
<div>
  <span>${persson.nom}: </span>  
  <span>${persson.role}</span>
</div>
  `;
    // click sur perssone et afficher leur informations
    personDiv.addEventListener("click", function () {
      modelperson.style.display = "flex";
      const persoinfo = document.createElement("div");
      persoinfo.className = "personnelcard";
      persoinfo.innerHTML = `      
   <form  class="form">
          <div >
            <span>le nom:</span> ${persson.nom}            
          </div>
          <div >
            <span>le role:</span> ${persson.role}            
          </div>
          <div >
            <span>photo :</span> <img src="${persson.photo}">
          </div>
          <div >
            <span>email :</span> ${persson.email}
          </div>
          <div >
            <span>telephone :</span> ${persson.telephone}
          </div>
          <div >
            <span>experiences :</span>
             ${persson.experiences
               .map(
                 (exp) => `
              <div style="margin-top: 0.6rem">
              <span>${exp.entreprise} : ${exp.role}  </span>
              <small>${exp.dateDebut} au ${exp.dateFin}</small>              
              </div>
             `
               )
               .join("")}
          </div>
   </form>`;
      divinfo.innerHTML = "";
      divinfo.appendChild(persoinfo);
    });
    divpersonelout.appendChild(personDiv);
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

function zone(idx)
{
modelz.style.display = "flex";
  divzon.innerHTML = "";
  outzone().forEach((pesr) => {
    // if (pesr.role === "receptionniste" || pesr.role === "manager" || pesr.role === "nettoyage") {
    if (zones[idx].roles.includes(pesr.role)) {
      const modelzdiv = document.createElement("div");
      modelzdiv.className = "divpersonne";
      const modelzdiv2 = document.createElement("div");
      modelzdiv2.className = "personnelcard";
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
        for (let i = 0; i < zones[idx].danschambre.length; i++) {
          if (zones[idx].danschambre[i] == pesr.id) {
            for (let j = i; j < zones[idx].danschambre.length - 1; j++) {
              zones[idx].danschambre[j] = zones[idx].danschambre[j + 1];
            }
            zones[idx].danschambre.length--;
            break;
          }
        }
        changerSidebar();
        redzone();
      });
      modelzdiv2.addEventListener("click", function () {
        const Reception = document.getElementById(zones[idx].name);
        Reception.appendChild(modelzdiv);
        zones[idx].danschambre.push(pesr.id);
        changerSidebar();
        redzone();
      });
      divzon.appendChild(modelzdiv);
    }
  });
}


const btnconference = document.querySelector(".btnconference");
btnconference.addEventListener("click", function () {
  zone(0);
//   modelz.style.display = "flex";
//   divzon.innerHTML = "";
//   outzone().forEach((pesr) => {
//     const modelzdiv = document.createElement("div");
//     modelzdiv.className = "personnelcard";
//     modelzdiv.innerHTML = `
//   <div> <img src="${pesr.photo}"> </div>
//    <div><span>${pesr.nom}: </span> 
//     <span>${pesr.role}</span></div> 
// `;
//     modelzdiv.addEventListener("click", function () {
//       const Sconference = document.querySelector(".Sconference");
//       Sconference.appendChild(modelzdiv);
//       zones[0].danschambre.push(pesr.id);
//       changerSidebar();
//     });
//     divzon.appendChild(modelzdiv);
//   });
});
const btnreception = document.querySelector(".btnreception");
btnreception.addEventListener("click", function () {
  zone(1);
});

const btnpersonnel = document.querySelector(".btnpersonnel");
btnpersonnel.addEventListener("click", function () {
zone(3);
//   modelz.style.display = "flex";
//   divzon.innerHTML = "";
//   outzone().forEach((pesr) => {
//     const modelzdiv = document.createElement("div");
//     modelzdiv.className = "personnelcard";
//     modelzdiv.innerHTML = `
//   <div> <img src="${pesr.photo}"> </div>
//    <div><span>${pesr.nom}: </span> 
//     <span>${pesr.role}</span></div>
//  `;
//     modelzdiv.addEventListener("click", function () {
//       const Spersonnel = document.querySelector(".Spersonnel");
//       Spersonnel.appendChild(modelzdiv);
//       zones[3].danschambre.push(pesr.id);
//       changerSidebar();
//     });
//     divzon.appendChild(modelzdiv);
//   });
});

const btnarchive = document.querySelector(".btnarchive");
btnarchive.addEventListener("click", function () {
  zone(2);
  // modelz.style.display = "flex";
  // divzon.innerHTML = "";
  // outzone().forEach((pesr) => {
  //   // if (pesr.role === "receptionniste" || pesr.role === "manager" || pesr.role === "technicien" || pesr.role === "agentdesecurite") {
  //     const modelzdiv = document.createElement("div");
  //     modelzdiv.className = "personnelcard";
  //     modelzdiv.innerHTML = `
  // <div> <img src="${pesr.photo}"> </div>
  //  <div><span>${pesr.nom}: </span> 
  //   <span>${pesr.role}</span></div>
  //    `;
  //     modelzdiv.addEventListener("click", function () {
  //       const Sdarchives = document.querySelector(".Sdarchives");
  //       Sdarchives.appendChild(modelzdiv);
  //       zones[2].danschambre.push(pesr.id);
  //       changerSidebar();
  //     });
  //     divzon.appendChild(modelzdiv);
  //   }
  // });
});
const btnserveur = document.querySelector(".btnserveur");
btnserveur.addEventListener("click", function () {
  zone(5);
  // modelz.style.display = "flex";
  // divzon.innerHTML = "";
  // outzone().forEach((pesr) => {
  //   // if (pesr.role === "technicien" || pesr.role === "manager" || pesr.role === "nettoyage") {
  //     const modelzdiv = document.createElement("div");
  //     modelzdiv.className = "personnelcard";
  //     modelzdiv.innerHTML = `
  //  <img src="${pesr.photo}">
  //  <div><span>${pesr.nom}: </span> 
  //   <span>${pesr.role}</span></div>
  //   `;
  //     modelzdiv.addEventListener("click", function () {
  //       const Ssserveur = document.querySelector(".Ssserveur");
  //       Ssserveur.appendChild(modelzdiv);
  //       zones[5].danschambre.push(pesr.id);
  //       changerSidebar();
  //     });
  //     divzon.appendChild(modelzdiv);
  //   }
  // });
});
const btnsecurite = document.querySelector(".btnsecurite");
btnsecurite.addEventListener("click", function () {
  zone(4);
//   modelz.style.display = "flex";
//   divzon.innerHTML = "";
//   outzone().forEach((pesr) => {
//     if (pesr.role === "agentdesecurite" || pesr.role === "manager" || pesr.role === "nettoyage") {
//       const modelzdiv = document.createElement("div");
//       modelzdiv.className = "personnelcard";
//       modelzdiv.innerHTML = `
//   <div> <img src="${pesr.photo}"> </div>
//    <div><span>${pesr.nom}: </span> 
//     <span>${pesr.role}</span></div> 
// `;
//       modelzdiv.addEventListener("click", function () {
//         const Ssecurite = document.querySelector(".Ssecurite");
//         Ssecurite.appendChild(modelzdiv);
//         zones[4].danschambre.push(pesr.id);
//         changerSidebar();
//       });
//       divzon.appendChild(modelzdiv);
//     }
//   });
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
function redzone(){
for (let i = 0; i < zones.length; i++) {
  if (zones[i].name !== "Salle de conférence" && zones[i].name !== "Salle du personnel")
     {
    if (!zones[i].danschambre.length) {
let divzone=document.querySelector("."+zones[i].name);
  divzone.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    }
    else{
      let divzone=document.querySelector("."+zones[i].name);
divzone.style.background = "transparent";
    }
  }
}
}
redzone();