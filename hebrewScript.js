var verbs = [
  {root: "כמב", type: 1},
  {root: "הלח", type: 6},
  {root: "לקח", type: 5},
  {root: "למד", type: 1},
  {root: "שכב", type: 1},
  {root: "כבד", type: 1},
  {root: "בער", type: 2},
  {root: "בחר", type: 2},
  {root: "שמע", type: 2},
  {root: "מצא", type: 2},
  {root: "ברא", type: 2},
  {root: "עמד", type: 3},
  {root: "הרג", type: 3},
  {root: "אסר", type: 4},
  {root: "אמר", type: 4},
  {root: "אכל", type: 4},
  {root: "אהב", type: 4},
  {root: "נפל", type: 5},
  {root: "נתן", type: 5},
  {root: "ישב", type: 6},
  {root: "ידע", type: 6},
  {root: "קום", type: 7},
  {root: "בוא", type: 7},
  {root: "שימ", type: 7},
  {root: "בנה", type: 8},
  {root: "היה", type: 8},
  {root: "סבב", type: 9},
  {root: "ארר", type: 9},
]
var stems = ["Qal","Niphal", "Piel","Pual"]
var voidV = stems.slice(0, 2);
var withoutPu = stems.slice(0, 3);

var flexions = [
  "Qatal", "Yiqtol", "Wayyiktol", "Coortativo", "Iussivo", "Participio", "Imperativo", "Infinito Assoluto", "Infinito Costrutto"]
persons = ["1a persona", "2a persona", "3a persona"];
numbers = ["Singolare", "Plurale"];
genders = ["Maschile", "Femminile"];


var givingTask = function () {
var vrb = Math.floor(Math.random() * verbs.length);
var flx = Math.floor(Math.random() * flexions.length);

  var stm = 0;
    
  if (verbs[vrb].type == 6 & flx == 7) {
      stm = Math.floor(Math.random() * voidV.length);
      if (stm == 1) {stm = 2};
  }
  else if (verbs[vrb].type == 7) {
        stm = Math.floor(Math.random() * voidV.length);
}
  else if (verbs[vrb].type == 8 & flx == 4) {
    stm = Math.floor(Math.random() * withoutPu.length);
  }
  else if (verbs[vrb].type == 9 & flx == 7) {
    stm = Math.floor(Math.random() * voidV.length);
  }
  else if (flx > 5){
    stm = Math.floor(Math.random() * withoutPu.length);
  }
   else {
    stm = Math.floor(Math.random() * stems.length);
   } 

   var conj;

   if (flx < 3){
    prs = Math.floor(Math.random() * persons.length);
    nmb = Math.floor(Math.random() * numbers.length);
     if (prs == 0) {
      conj = "<br/>" + persons[prs].toLowerCase() + " " + numbers[nmb].toLowerCase();
     }
     else if (flx > 0 && prs == 2 && numbers == 1){
      conj = "<br/>" + persons[prs].toLowerCase() + " " + numbers[nmb].toLowerCase();
     }
    else if (prs > 0){
    gnd = Math.floor(Math.random() * genders.length);
    conj = "<br/>" + persons[prs].toLowerCase() + " " + numbers[nmb].toLowerCase() + " " + genders[gnd].toLowerCase(); 
    }
   }
   else if (flx > 2 && flx < 7) {
    nmb = Math.floor(Math.random() * numbers.length);
    gnd = Math.floor(Math.random() * genders.length);
    conj = "<br/>" + numbers[nmb].toLowerCase() + " " + genders[gnd].toLowerCase();
   }
   else if (flx > 6) {
     conj = "";
   }
  
conjFull = stems[stm] + " " + flexions[flx].toLowerCase() + conj;
verb = "dalla radice " + verbs[vrb].root;
 var tsk =document.getElementById('myTask');
 tsk.innerHTML = conjFull + "<br/>" + verb;
};


