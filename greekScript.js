

var voices = ["Attivo", "Medio", "Passivo"]

var modes = [
  {
    name: "Indicativo",
    timesPackage: ["Presente", "Imperfetto", "Futuro", "Aoristo", "Perfetto", "Piuccheperfetto"],
  },
  
  {
    name: "Congiuntivo",
    timesPackage: ["Presente", "Aoristo", "Perfetto"],
  },

  {
    name: "Ottativo",
    timesPackage: ["Presente", "Aoristo", "Perfetto"],
  },

  {
    name: "Imperativo",
    timesPackage: ["Presente", "Aoristo", "Perfetto"],
  },

  {
    name: "Infinito",
    timesPackage: ["Presente", "Futuro", "Aoristo", "Perfetto"],
  },

  {
    name: "Participio",
    timesPackage: ["Presente", "Futuro", "Aoristo", "Perfetto"],
  },

]

persons = ["1a persona", "2a persona", "3a persona"];
numbers = ["Singolare", "Plurale"];
cases = ["Nominativo", "Genitivo", "Dativo", "Accusativo"];
genders = ["Maschile", "Femminile"];

verbs = ["λυω", "πεμπω", "παρτιζω", "κραζω", "βλεπω", "γραφω", "κωλυω", "ονομαζω", "φυλασσω", "ταρασσω", "αρχω", "ραντιζω", "νιπτω", "απολυω"]

var givingTask = function () {
var vc = Math.floor(Math.random() * voices.length);
var md = Math.floor(Math.random() * modes.length);
var tm = Math.floor(Math.random() * modes[md].timesPackage.length);
var conj;
 if (md < 2) {
   prs = Math.floor(Math.random() * persons.length);
   nmb = Math.floor(Math.random() * numbers.length);
   conj = `, ${persons[prs]} ${numbers[nmb].toLowerCase()}`;
 }
 else if (md == 2){
   if (vc == 0){
     modes[2].timesPackage.pop()
    prs = Math.floor(Math.random() * persons.length);
    nmb = Math.floor(Math.random() * numbers.length);
    conj = `, ${persons[prs]} ${numbers[nmb].toLowerCase()}`;
    modes[2].timesPackage.push("Perfetto");
  }
  else {
    prs = Math.floor(Math.random() * persons.length);
    nmb = Math.floor(Math.random() * numbers.length);
    conj = `, ${persons[prs]} ${numbers[nmb].toLowerCase()}`;
  }
 }
 else if (md == 3){
   persons.shift();
   prs = Math.floor(Math.random() * persons.length);
   nmb = Math.floor(Math.random() * numbers.length);
   conj = `, ${persons[prs]} ${numbers[nmb].toLowerCase()}`;
   persons.unshift("1a persona");
}
 else if (md == 4){
 conj = "";
 }
 else if (md == 5){
   cs = Math.floor(Math.random() * cases.length);
   nmb = Math.floor(Math.random() * numbers.length);
   gnd = Math.floor(Math.random() * genders.length);
   conj = ", " + genders[gnd].toLowerCase() + " " + cases[cs].toLowerCase() + " " + numbers[nmb].toLowerCase();
 }
vrb = Math.floor(Math.random() * verbs.length);
 conjFull = modes[md].name + " " + modes[md].timesPackage[tm] + " " + voices[vc] + conj;
 verb = "dal verbo " + verbs[vrb];
 
var tsk = document.getElementById('myTask');
tsk.innerHTML = conjFull + "<br/>" + verb; 
};

