# Site EXPLORIUM : mise en ligne et réglages

Site créé par **Yoloops**. Contacts du club : explorium839@gmail.com · +261 34 42 529 61

## Contenu du dossier

- `index.html` : tout le site (une seule page).
- `config.js` : le seul fichier de réglages. Il n'est jamais écrasé quand tu remplaces `index.html`.
- `apps-script.gs` : le script qui range les inscriptions dans un Google Sheet.
- `regles.html`, `matieres.html`, `inscription.html`, `mpc.html`, `pgr.html`, `dia.html`, `cbr.html` : redirigent les anciens liens vers la nouvelle page.
- `.nojekyll` : dit à GitHub Pages de publier les fichiers tels quels.

## 1. Mettre à jour le site sur GitHub

1. Ouvre ton dépôt sur github.com, clique sur **Add file > Upload files**.
2. Glisse **le contenu** de ce dossier (pas le dossier lui-même). Les fichiers du même nom sont remplacés.
3. Clique sur **Commit changes**. Une minute plus tard, le site est à jour.

Si tu avais déjà collé l'adresse des inscriptions dans l'ancien `index.html`, elle a disparu : remets-la dans `config.js` (étape 2). C'est la dernière fois, car elle vit désormais dans ce fichier.

## 2. Recevoir les inscriptions

GitHub Pages ne peut pas enregistrer de données. Sans cette étape, le formulaire affiche la fiche à copier et à envoyer au club.

### Option A : Google Sheet (gratuit, recommandé)

1. Va sur <https://sheets.new> et nomme la feuille « Inscriptions Explorium ».
2. Menu **Extensions > Apps Script**. Efface le code, colle le contenu de `apps-script.gs`, enregistre.
3. Clique sur **Déployer > Nouveau déploiement**. Type : **Application Web**.
   Exécuter en tant que : **Moi**. Qui a accès : **Tout le monde**. Clique sur **Déployer** et autorise l'accès.
4. Copie l'**URL de l'application Web** (elle commence par `https://script.google.com/macros/s/`).
5. Sur GitHub, ouvre `config.js`, clique sur le crayon et colle l'URL entre les guillemets de `endpoint: ""`. **Commit changes**.
6. Fais une inscription test : une ligne apparaît dans l'onglet `Inscriptions`.

**Si tu avais déjà un script déployé :** colle la nouvelle version de `apps-script.gs` (elle ajoute les colonnes *Formule* et *Projets*), puis **Déployer > Gérer les déploiements > crayon > Version : Nouvelle version > Déployer**. L'URL ne change pas.

### Option B : Formspree (chaque fiche arrive par e-mail)

1. Crée un compte gratuit sur <https://formspree.io> et un nouveau formulaire.
2. Colle son adresse (`https://formspree.io/f/xxxxxxx`) dans `config.js`.

## 3. Ce que contient une fiche

Nom, âge, classe, **formule** (cours et projets, cours seulement, ou projets seulement), matières, **projets** choisis, e-mail, téléphone et remarque.
On peut s'inscrire uniquement pour un projet, sans choisir de matière.

## 4. Modifier le contenu

Dans `index.html` (ouvre-le avec le crayon sur GitHub, puis Ctrl+F) :

- Contacts : cherche `explorium839@gmail.com` et `+261 34 42 529 61`.
- Projets : cherche `Nos projets hors des cours` (textes), et `PROJECTS` (noms dans le formulaire).
- Matières : `SUBJECTS`. Questions de la section « Une question pour toi » : `QS`.

## 5. À savoir

- Les fiches contiennent des données d'élèves, parfois mineurs. Ne partage le Google Sheet qu'avec les responsables du club.
- L'adresse du script est visible dans le code de la page : n'importe qui peut y envoyer une fiche. Le formulaire a un champ piège contre les robots simples, mais regarde le Sheet de temps en temps.
