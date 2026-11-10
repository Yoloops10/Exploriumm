# Site EXPLORIUM : mise en ligne sur GitHub

Contenu du dossier :

- `index.html` : tout le site (une seule page, rien d'autre à installer).
- `apps-script.gs` : le petit script qui range les inscriptions dans un Google Sheet.
- `regles.html`, `matieres.html`, `inscription.html`, `mpc.html`, `pgr.html`, `dia.html`, `cbr.html` : redirigent les anciens liens vers la nouvelle page.
- `.nojekyll` : dit à GitHub Pages de publier les fichiers tels quels.

## 1. Mettre le site en ligne

1. Ouvre ton dépôt `Bulletin8` sur github.com.
2. Clique sur **Add file > Upload files** et glisse tout le contenu de ce dossier (y compris `.nojekyll`).
   Les fichiers du même nom remplacent les anciens. Ne supprime pas `logo_explorium.png`.
3. Clique sur **Commit changes**.
4. Va dans **Settings > Pages**. Choisis **Deploy from a branch**, la branche `main` et le dossier `/ (root)`.
   Si ton site marche déjà, c'est déjà réglé.
5. Attends une minute. Le site est sur `https://tadashi-tech.github.io/Bulletin8/`.

## 2. Recevoir les inscriptions (à faire une fois, 5 minutes)

GitHub Pages ne peut pas enregistrer de données. Sans cette étape, le formulaire affiche la fiche de l'élève à copier
et à t'envoyer, mais rien n'arrive tout seul chez toi.

### Option A : Google Sheet (gratuit, recommandé)

1. Va sur <https://sheets.new> et nomme la feuille « Inscriptions Explorium ».
2. Menu **Extensions > Apps Script**. Efface le code, colle le contenu de `apps-script.gs`, enregistre.
3. Clique sur **Déployer > Nouveau déploiement**. Type : **Application Web**.
   Exécuter en tant que : **Moi**. Qui a accès : **Tout le monde**. Clique sur **Déployer** et autorise l'accès.
4. Copie l'**URL de l'application Web** (elle commence par `https://script.google.com/macros/s/`).
5. Dans GitHub, ouvre `index.html`, clique sur le crayon, cherche `var ENDPOINT = "";` (Ctrl+F)
   et colle l'URL entre les guillemets. Clique sur **Commit changes**.
6. Fais une inscription test sur le site : une ligne apparaît dans l'onglet `Inscriptions`.

Si tu modifies le script plus tard, refais **Déployer > Gérer les déploiements > Modifier > Nouvelle version**.

### Option B : Formspree (reçois chaque fiche par e-mail)

1. Crée un compte gratuit sur <https://formspree.io> et un nouveau formulaire.
2. Copie son adresse (`https://formspree.io/f/xxxxxxx`) et colle-la dans `var ENDPOINT = "";` comme ci-dessus.

## 3. Réglages facultatifs dans `index.html`

- `CONTACT_TEXT` : une phrase affichée à la fin si l'envoi échoue, par exemple « WhatsApp du club : +… ».
- `FORM_URL` : un lien (Google Form de secours, par exemple) proposé après l'envoi.
- `SUBJECTS` : les cinq matières. `QS` : les questions de la section « Une question pour toi ».

## 4. À savoir

- Les fiches contiennent des données d'élèves, parfois mineurs. Ne partage le Google Sheet qu'avec les responsables du club.
- L'adresse du script est visible dans le code de la page : n'importe qui peut y envoyer une fiche. Le formulaire a un
  champ piège contre les robots simples, mais vérifie le Sheet de temps en temps.
- Le panneau « Fiches reçues » n'existe pas sur GitHub : tes fiches sont dans le Google Sheet (ou dans tes e-mails).
