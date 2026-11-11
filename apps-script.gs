// Reçoit les fiches d'inscription du site EXPLORIUM et les ajoute dans l'onglet "Inscriptions".
// À coller dans Extensions > Apps Script d'un Google Sheet (voir LISEZMOI.md).

var COLONNES = ["Reçue le", "Nom", "Âge", "Classe", "Matières", "E-mail", "Téléphone", "Remarque", "Formule", "Projets"];

// Empêche qu'un texte commençant par = + - @ soit lu comme une formule.
function propre(v) {
  v = String(v == null ? "" : v).slice(0, 600);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function doPost(e) {
  var p = (e && e.parameter) || {};
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName("Inscriptions") || ss.insertSheet("Inscriptions");
  if (sh.getLastRow() === 0) sh.appendRow(COLONNES);
  sh.appendRow([new Date(), propre(p.nom), propre(p.age), propre(p.classe), propre(p.matieres),
                propre(p.email), propre(p.tel), propre(p.remarque), propre(p.formule), propre(p.projets)]);
  return ContentService.createTextOutput("ok");
}
