<h1>Description globale</h1>
<h2>Le projet</h2> 

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


<h2>Qui sommes-nous ?</h2> 

Nous sommes deux étudiants en L3 MIASHS parcours MIAGE.<br/>
Florian : https://github.com/florian83440<br/>
Thomas : https://github.com/CyberLifeDev-Thomas

<h2>Installation</h2> 

Pour jouer au différents jeux il suffit de télécharger le projet et d'ouvrir le fichier index.html. Dans la barre de navigation du site il y a un onglet "Jeux" qui se déroule et liste les jeux disponibles. Cliquer sur le nom d'un jeu permet d'y jouer.

<h1>Space Invaders Like (à notre sauce)</h1>
<h2>Pourquoi ce jeu ?</h2> 

Tout d'abord, car c'est un jeu auquel nous apprécions jouer aujourd'hui encore et qui est connu de tout le monde. Le principe est simple, survivre dans un champ d'astéroïdes et d'ennemis. Par ailleurs, ce jeu permet de travailler de nombreux points techniques : collisions, déplacement du vaisseau, tir du vaisseau, amélioration ou encore gestion des vies.

<h2>Règles du jeu</h2> 
<h3>But du jeu</h3>

<ul>
  <li>Le but du jeu est de détruire les enemis en provenance du haut de l’écran et de les éviter, il faut finir toutes les étapes d'un niveau pour le terminer.</li>
</ul>

<h3>Comment jouer ?</h3>

<ul>
  <li>Le joueur peut se déplacer dans toutes les directions avec pour limite la moitié de l’écran.</li>
  <li>Des bonus tombent aléatoirement du haut de l'écran, le joueur peut les récupérer pour améliorer son vaisseau.</li>
  <li>
    <ul>
      <li>Le joueur possède une armure pouvant être détruite ou réparée (à l’aide des bonus).</li>
      <li>Il possède 3 vies qu’il perd lorsqu’il n’a plus d’armure et qu’il est touché par un enemis ou un astéroide.</li>
      <li>Une armure est détruite lorsqu’elle est touchée trop de fois par un enemis ou un astéroide.</li>
    </ul>
  </li>
</ul>

<h3>Niveaux</h3>

<ul>
  <li>Le jeu possède 3 niveaux, facile, moyen, difficile.</li>
  <li>Une armure possède 5 ou 2 couches pour les niveaux facile et moyen, pour le niveau difficile le jour ne possède pas d’armure.</li>
  <li>
    <ul>
      <li>En mode de jeu facile le nombre d'énemis est faible et leur vitesse est lente.</li>
      <li>En mode de jeu moyen, le nombre d'énemis augmente et leur vitesse augmente un peu.</li>
      <li>En mode difficile, les énemis sont beaucoup plus nombreux et leur vitesse est aléatoire.</li>
    </ul>
  </li>
</ul>

<h3>Score</h3>

Le score du joueur est calculé en fonction :

<ul>
	<li>Du nombre d'objets touché (ennemis ou astéroïdes)</li>
	<li>Du nombre de vies perdues</li>
	<li>De l'étape atteinte dans le niveau</li>
	<li>Du niveau de difficulté</li>
</ul>

De plus, le joueur aura la possibilité de sauvegarder son score en saisissant son pseudo, un classement sera ainsi établi.

<h3>Haut faits</h3>

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
