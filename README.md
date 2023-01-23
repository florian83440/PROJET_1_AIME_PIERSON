![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bulma](https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<h1>Description globale</h1>

<h3>Qui sommes-nous ?</h3> 

Nous sommes deux étudiants en L3 MIASHS parcours MIAGE.<br/>
Florian : https://github.com/florian83440<br/>
Thomas : https://github.com/CyberLifeDev-Thomas

<h3>Le projet</h3> 

Ce projet à pour but de prendre en main les technologies Javascript, HTML5 et CSS3 en apssant par le developpement de jeux sur un interface web (navigateur). 
Ce projet se divise en plusieurs parties :

<ul>
  <li>Conception</li>
  <li>Developpement</li>
  <li>
    <ul>
      <li>Site web</li>
      <li>Différents jeux</li>
    </ul>
  </li>
</ul>

<h3>Personas</h3> 
https://docs.google.com/document/d/1sdVcxtwGHJ-xAalerZM2pFjRsA1_4oAy8uETlnxhZRI/edit?usp=sharing

<h3>Scénarios (à finir)</h3> 
https://docs.google.com/document/d/1uRTqgNI4uQThV_GxcM5RVeJ0VLyvaBjHJy1PJ1CRr1U/edit?usp=sharing
<h3>Modèle de tâches (à finir)</h3> 
https://docs.google.com/drawings/d/16n494zFeevA8Zl0ozoBWnEhSdNHZ9CU3Bvtnix-ID9k/edit?usp=sharing

<h3>Fonctionalités</h3> 

<ul>
	<li>Page d'accueil proposant les différentes jeux et d'autres infos sur le projet</li>
	<li>Possibilité de créer un compte et de se connecter pour sauvegarder son score et ses haut faits</li>
	<li>Tableau de score pour chaque jeux avec les meilleurs joueurs</li>
	<li>Page de profil pour consulter ses scores et haut faits ainsi que de personaliser son profil</li>
</ul>

<h3>Musiques</h3> 
Nous avons produit plusieurs musiques qui seront lu pendant les jeux et peuvent être désactivé ou réduites/augmentées de volume via le menu pause des jeux.

<h3>Installation</h3> 

Pour jouer au différents jeux il suffit de télécharger le projet et d'ouvrir le fichier index.html. Dans la barre de navigation du site il y a un onglet "Jeux" qui se déroule et liste les jeux disponibles. Cliquer sur le nom d'un jeu permet d'y jouer.

<h1>Space Invaders Like (à notre sauce)</h1>
<h3>Pourquoi ce jeu ?</h3> 

Tout d'abord, car c'est un jeu auquel nous apprécions jouer aujourd'hui encore et qui est connu de tout le monde. Le principe est simple, survivre dans un champ d'astéroïdes et d'ennemis. Par ailleurs, ce jeu permet de travailler de nombreux points techniques : collisions, déplacement du vaisseau, tir du vaisseau, amélioration ou encore gestion des vies.

<h3>Règles du jeu</h3> 
<h4>But du jeu</h3>

<ul>
  <li>Le but du jeu est de détruire les ennemis en provenance du haut de l’écran et de les éviter, il faut finir toutes les étapes d'un niveau pour le terminer.</li>
</ul>

<h4>Comment jouer ?</h4>

<ul>
  <li>Le joueur peut se déplacer dans toutes les directions avec pour limite la moitié de l’écran.</li>
  <li>Des bonus tombent aléatoirement du haut de l'écran, le joueur peut les récupérer pour améliorer son vaisseau.</li>
  <li>
    <ul>
      <li>Le joueur possède une armure pouvant être détruite ou réparée (à l’aide des bonus).</li>
      <li>Il possède 3 vies qu’il perd lorsqu’il n’a plus d’armure et qu’il est touché par un ennemis ou un astéroide.</li>
      <li>Une armure est détruite lorsqu’elle est touchée trop de fois par un ennemis ou un astéroide.</li>
    </ul>
  </li>
</ul>

<h4>Niveaux</h4>

<ul>
  <li>Le jeu possède 3 niveaux, facile, moyen, difficile.</li>
  <li>Une armure possède 5 ou 2 couches pour les niveaux facile et moyen, pour le niveau difficile le jour ne possède pas d’armure.</li>
  <li>
    <ul>
      <li>En mode de jeu facile le nombre d'ennemis est faible et leur vitesse est lente.</li>
      <li>En mode de jeu moyen, le nombre d'ennemis augmente et leur vitesse augmente un peu.</li>
      <li>En mode difficile, les ennemis sont beaucoup plus nombreux et leur vitesse est aléatoire.</li>
    </ul>
  </li>
</ul>

<h4>Score</h4>

Le score du joueur est calculé en fonction :

<ul>
	<li>Du nombre d'objets touché (ennemis ou astéroïdes)</li>
	<li>Du nombre de vies perdues</li>
	<li>De l'étape atteinte dans le niveau</li>
	<li>Du niveau de difficulté</li>
</ul>

De plus, le joueur aura la possibilité de sauvegarder son score en saisissant son pseudo, un classement sera ainsi établi.

<h4>Haut faits</h4>

<table>
	<thead>
		<tr>
			<th>
				Haut Faits
			</th>
			<th>
				Conditions
			</th>
			<th>
				Débloque
			</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				Petit joueur
			</td>
			<td>
				Terminer le jeu en difficulté facile
			</td>
			<td>
				A venir
			</td>
		</tr>
		<tr>
			<td>
				Ok pas mal
			</td>
			<td>
				Terminer le jeu en difficulté facile sans se faire toucher
			</td>
			<td>
				A venir
			</td>
		</tr>
		<tr>
			<td>
				On passe la seconde !
			</td>
			<td>
				Terminer le jeu en difficulté moyen
			</td>
			<td>
				A venir
			</td>
		</tr>
		<tr>
			<td>
				Ni vu ni connu
			</td>
			<td>
				Terminer le jeu en difficulté moyen sans se faire toucher
			</td>
			<td>
				A venir
			</td>
		</tr>
		<tr>
			<td>
				Capitaine Kirk !
			</td>
			<td>
				Terminer le jeu en difficulté difficile
			</td>
			<td>
				A venir
			</td>
		</tr>
		<tr>
			<td>
				Faucon Millenium
			</td>
			<td>
				Terminer le jeu en difficulté difficile sans se faire toucher
			</td>
			<td>
				A venir
			</td>
		</tr>
	</tbody>
</table>












<h1>Pong (à notre sauce)</h1>
<h3>Pourquoi ce jeu ?</h3> 

<h3>Règles du jeu</h3> 
<h4>But du jeu</h3>

<h4>Comment jouer ?</h4>

<h4>Niveaux</h4>

<h4>Score</h4>

<h4>Haut faits</h4>

