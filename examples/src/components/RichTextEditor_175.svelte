<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<h1 class="red">Saint-Michel dans <cite>La Légende Dorée</cite></h1>

<div class="notices red">
<p>Dans l'Europe chrétienne du Moyen-Âge, la Légende Dorée est l'ouvrage le plus lu après la Bible.</p>
<p>Elle a été écrite en latin de <time datetime="1261">1261</time> à <time datetime="1266">1266</time> par un moine dominicain de l'Italie du Nord, compilateur de chroniques et également connu comme le 8<sup>ème</sup> Archevêque de Gênes, Jacques De Voragine (en latin, Jacobus de Voragine).</p>
<p>Présenter cet ouvrage, même de manière élémentaire, n'est pas chose aisée mais pour dire les choses, il n'y a pas d'erreur à écrire qu'en compilant plusieurs documents existants comme des vies de martyrs ou de quelques 150 saints ou groupes de saints, en incorporant dans le calendrier païen préexistant le calendrier liturgique annuel de l'église catholique, en l'uniformisant, en se servant aussi de cette occasion pour expliquer les principaux événements des vies du Christ et de la Vierge à partir des Évangiles, ce texte a de fait construit la mythologie chrétienne qui a imprégné en profondeur tous les domaines de la société de son époque, y compris par exemple sa topologie...</p>
<p>Comme l'écrit, dans la préface de son livre «Mythologie chrétienne: fêtes, rites et mythes du Moyen âge», le médiéviste Philippe WALTER, «le souvenir immémorial imprégnaient rites, traditions venus de la mémoire sauvage qui préexistaient à l'arrivée du christianisme», on peut considérer ce texte parce qu'y apparaissent de manière sous-jacente des éléments refoulés par l'Église de l'ancien calendrier païen, comme à la fois fascinant et particulièrement digne d'intérêt.</p>
<p>Ici, je n'en présente bien sûr ci-dessous qu'une très petite partie, le seul chapître 141, parce que celle-ci se rapporte dans l'œuvre comme étant origine du Mont Saint-Michel en temps que lieu de pélerinage.</p>
<p>Y apparaissent l'archange Michel, le taureau, et bien d'autres choses... On peut s'étonner aussi que le récit se développe sans s'arrêter et insensiblement de l'archange à un récit de la foi en les anges.</p>
<p>Entre l'existence qu'on ne peut mesurer et celle qu'on perçoit, ce texte devrait susciter diverses pensées, indépendemment de questions relatives au fait de croire ou de ne pas croire, et donc j'incite à le lire si possible jusqu'à la fin sans s'effrayer de la forte coloration religieuse propre à l'époque.</p>
<p>Des liens ont été établis à partir des citations pour rendre possible et facile pour ceux qui le souhaiterait, vérification des propos avancés en temps que citation.</p>
</div>

<h2 id="chap141" class="red">saint Michel selon le texte du chapître 141 de “La Légende Dorée”</h2>

<p>Michel se comprend comme «Qui, comme Dieu?» et, à ce que dit Grégoire, chaque fois qu'il s'accomplit une grande merveille, c'est Michel qui est envoyé, pour signifier, par son action et par son nom, que personne ne peut faire ce qui revient à Dieu seul: aussi attribue-t-on à Michel lui-même nombre de faits qui manifestent une puissance admirable.
Au témoignage de Daniel <a href="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs" title="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs">(Daniel 12, 1.)</a>, il surgira au temps de l’Antéchrist et se tiendra à côté des élus comme leur défenseur et protecteur.
Il a combattu le dragon et ses anges <a href="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/apocalypse#bataille" title="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/apocalypse#bataille">(Apocalypse 12,7-9.)</a>, les a précipités du haut du ciel, et a remporté sur eux une grande victoire.
Il a disputé le <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_moise" title="ascension de Moïse" id="moise">corps de Moïse</a> au diable qui voulait le produire afin que le peuple juif l'adore à la place de Dieu <a href="https://www.aelf.org/bible/Jude/1" title="https://www.aelf.org/bible/Jude/1">(Jude 1, 9.)</a>.
Il accueille les âmes des saints, et les conduit au Jardin de l'exultation <a href="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs" title="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs">(Daniel 12, 1-2.)</a>. Il fut jadis <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_israel" title="patron d'Israël, défenseur des milices célestes" id="israel">prince de la Synagogue</a>, mais, à présent, le Seigneur l'a fait prince de l'Église .
À ce qu'on sait, c'est <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_extrapolation" title="extrapolation de Jacques de Voragine" id="extrapolation">lui</a> qui a répandu les plaies sur l'Égypte, divisé les eaux de la mer Rouge , conduit le peuple à travers le désert, et qui l'a introduit en Terre promise. Dans l'armée des anges, il est tenu pour le porte-enseigne du Christ <a href="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/apocalypse#bataille" title="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/apocalypse#bataille">(Apocalypse 12,7.)</a>.
Sur l'ordre du Seigneur il tuera avec puissance l'Antéchrist établi sur le mont des Oliviers <a href="https://www.aelf.org/bible/Lc/22" title="https://www.aelf.org/bible/Lc/22">(Luc 22,43.)</a>.
À la voix de l'archange Michel, les morts ressusciteront <a href="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs" title="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs">(Daniel 12, 1-2)</a>; au jour du Jugement, il présentera la croix, les clous, la lance et la couronne d'épines.</p>
<p>La fête sacrée de l'archange Michel porte les noms d'apparition, de dédicace, de victoire et de mémoire.</p>
<h3 id="apparitions" class="red">les apparitions de cet ange sont multiples</h3>
<h4 id="mont-garganus" class="red">apparition de Garganus et du taureau</h4>
<p>La première apparition de Michel est celle du mont Gargano.
Dans les Pouilles se trouve une montagne ainsi désignée, près de la cité nommée Siponto.
Or en l'an du Seigneur 390 habitait dans cette ville de Siponto11 un homme appelé Gargano; la montagne tenait son nom de lui, ou bien, selon certains livres, c'est lui qui tenait son nom de la montagne.
Il possédait un immense troupeau de brebis et de bœufs, et celui-ci paissait sur les flancs de la montagne, quand soudain il arriva qu'un taureau quitta les autres animaux et s'enfuit jusqu'au sommet.
Comme il ne revenait pas avec les autres bêtes, l'homme rassembla une troupe de serviteurs, se mit à explorer tous les recoins, et finit par le trouver au sommet de la montagne, près de l'ouverture d'une grotte.
Se demandant avec exaspération pourquoi il errait ainsi tout seul, il lui décocha une flèche empoisonnée, mais celle-ci, comme si le vent la renvoyait, se retourna aussitôt contre lui.
Troublés par l'affaire, les habitants allèrent trouver l'évêque et l'interrogèrent sur ce phénomène stupéfiant.
Ce dernier leur imposa un jeûne de trois jours, et leur prescrivit de demander l'explication à Dieu.
Cela fait, saint Michel apparut à l'évêque et lui dit:</p>
<p>«Sachez que c'est moi qui ai voulu que cet homme soit frappé par sa propre flèche; car je suis l'archange Michel, et j'ai décidé de préserver ce lieu, dont j'ai fait ma demeure sur terre.
Par ce signe j'ai voulu prouver que j'en étais l'inspecteur et le gardien.»
Sur-le-champ, l'évêque et les habitants s'y rendirent en procession, et, n'osant pas entrer dans la grotte, ils se tinrent en prière devant l'entrée.</p>
<h4 id="mont-tombe" class="red">apparition au mont Tombe</h4>
<p>La seconde apparition eut lieu dans les années du Seigneur 710, à ce qu'on rapporte.
Au lieu dit La Tombe, <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_haymon" title="Haymon" id="tumba">Tumba</a>, situé non loin du bord de mer, à six milles de la ville d'Avranches, Michel apparut à l'évêque de la cité et lui ordonna de construire une église à cet endroit, pour y célébrer la mémoire de l'archange Michel, comme sur le mont Gargano.
L'évêque hésitant sur le lieu exact où il devait construire l'église, Michel lui dit que ce devait être à l'emplacement où il trouverait un taureau caché par des brigands.
Comme il s'interrogeait aussi sur les dimensions de l'église, il reçut l'ordre de lui donner la surface délimitée par la marche du taureau.
Il y avait là deux énormes pierres qu'aucune force humaine n'aurait pu faire bouger: Michel apparut alors à un homme, lui ordonna d'aller là-bas et de prendre ces pierres.
Il y alla et les déplaça comme si elles ne pesaient rien du tout.
Après avoir édifié l'église, on prit sur le mont Gargano une partie de l'ornement que saint Michel avait déposé sur l'autel et une partie de la plaque de marbre sur laquelle il s'était tenu, et on les déposa en son église.
Et comme il y avait pénurie d'eau, sur le conseil de l'ange on perça un trou dans un rocher: à ce qu'on dit, il s'en échappa aussitôt suffisamment d'eau pour alimenter l'endroit encore aujourd'hui.
En ce lieu, cette apparition se célèbre solennellement le <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_tumba" title="Mont Tumba" id="calendes">dix-septième jour des calendes de novembre</a>.
Il s'y déroula encore, dit-on, un miracle digne de mémoire.
Le lieu est partout cerné par l'océan, mais au jour de la Saint-Michel il s'ouvre deux fois pour laisser le passage au peuple.
C'est à cause de la marée montante et descendante qui se produit là deux fois par jour qu'on dit qu'il s'ouvre.
Comme une foule nombreuse se pressait vers l'église, il se trouva qu'une femme enceinte et près d'accoucher marchait au milieu d'elles.
Voilà soudain que l'eau revint à grosses vagues, et que la foule affolée se réfugia sur le rivage, sauf la femme enceinte, qui se trouva prisonnière des flots marins.
Mais l'archange Michel lui sauva la vie et elle accoucha d'un fils en pleine mer.
Elle le prit dans ses bras, l'allaita et, la mer lui laissant à nouveau le passage, elle en sortit toute joyeuse avec son enfant.</p>
<h4 id="chateau-saint-ange" class="red">appartition au château saint-Ange</h4>
<p>La troisième apparition eut lieu à Rome, à ce qu'on lit, au temps du pape Grégoire.
Ce dernier, en effet, avait institué les litanies majeures en raison de la peste bubonique, et il priait avec dévotion pour son peuple, lorsqu'il vit, sur le château jadis appelé mausolée d'Adrien, l'ange du Seigneur en train d'essuyer son glaive et de le remettre au fourreau.
Saint Grégoire comprit alors que ses prières avaient été exaucées, et il construisit là une église en l'honneur des anges; aussi le château est-il appelé aujourd'hui encore château Saint-Ange.
Cette apparition est célébrée le 8 des ides de mai, en même temps que celle du mont Gargano, au jour où l'archange Michel donna la victoire aux Sipontins.</p>
<h4 id="de-hierarchia" class="red">apparition dans les hiérarchies</h4>
<p>La quatrième apparition est celle des hiérarchies des anges eux-mêmes.
La première hiérarchie est dite «épiphanie», c'est-a-dire apparition supérieure, la hiérarchie moyenne «hyperphanie», c'est-a-dire apparition moyenne, et la dernière hiérarchie «hypophanie», c'est-à-dire apparition inférieure.
Le mot «hiérarchie» vient de ierar, «sacré», et de archos, «prince», et signifie «principauté sacrée».
Chaque hiérarchie comprend trois ordres: la hiérarchie supérieure comprend les séraphins, les chérubins et les trônes, la hiérarchie moyenne, selon la répartition de <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_denis" title="Pseudo-Denis" id="denis">Denis</a>, les dominations, les vertus et les puissances, et la dernière, toujours selon Denis, les principautés, les anges et les archanges.
Leur ordonnancement et leur répartition peuvent se saisir par comparaison avec les puissances terrestres.
En effet, parmi les ministres soumis à un monarque, les uns, comme les chambellans, les conseillers et les assesseurs, s'occupent directement de la personne du roi; les ordres de la première hiérarchie leur sont comparables.
D'autres, pour administrer le royaume, ont des charges générales, et ne sont pas préposés à une province déterminée: c'est le cas des chefs de l'armée et des juges de la cour; les ordres de la deuxième hiérarchie leur sont comparables.
D'autres enfin, comme les prévôts, les baillis et autres officiers de rangs inférieurs du même type, sont préposés au gouvernement d'une partie du royaume: ceux-là ont pour équivalents les ordres de la troisième hiérarchie.
Les trois ordres de la première hiérarchie sont donc constitués pour assister Dieu et se tourner vers lui.
Pour cela, trois qualités leur sont nécessaires: un amour sans bornes, et c'est là le propre des Séraphins, dont le nom se comprend comme «les ardents»; une connaissance parfaite, et c'est là le propre des chérubins, dont le nom se comprend comme «plénitude de la science»; une perpetuelle possession ou jouissance, et c'est là le propre des trônes, dont le nom se comprend comme «siège», parce que Dieu Siège et repose en eux tout en les faisant reposer en lui.
Les trois ordres de la hiérarchie moyenne sont constitues pour commander et administrer l’univers des hommes en général.
Ce gouvernement consiste en trois choses: d'abord à les diriger ou les commander, et c'est là le propre des dominations, qui ont pour rôle de régir les anges inférieurs, de les diriger dans tous les ministères divins, et de leur transmettre tous les commandements, ainsi que l'affirme Zacharie, où un ange dit à l'autre: «Cours vite parler à cet enfant» <a href="https://www.aelf.org/bible/Za/2" title="https://www.aelf.org/bible/Za/2">(Zacharie 2, 8.)</a>...
Deuxièmement, ce gouvernement consiste à agir, et c'est là le propre des vertus, pour qui aucun commandement n'est impossible à exécuter, car il leur a été donné tout pouvoir sur les difficultés du ministère divin, et c'est la raison pour laquelle on leur attribue le pouvoir de faire des miracles.
Troisièmement, ce gouvernement consiste à repousser, c'est-à-dire à repousser les obstacles et les hostilités, et c'est là le propre des puissances, qui ont le pouvoir de réduire les puissances contraires.
Cela est signifié dans Tobie, où il est dit que Raphaël enchaîna un démon dans le désert de la Haute-Egypte <a href="https://www.aelf.org/bible/Tb/8" title="https://www.aelf.org/bible/Tb/8">(Tobie 8, 3.)</a>.</p>
<p>Les trois ordres de la dernière hiérarchie sont constitués pour des fonctions déterminées et limitées.
Certains d'entre eux sont à la tête d'une seule province: ce sont ceux qui appartiennent à l'ordre des principautés, à l'image de ce qu'était le prince des Perses, qui dirigeait les Perses, dont parle Daniel <a href="https://www.aelf.org/bible/Dn/10" title="https://www.aelf.org/bible/Dn/10">(Daniel 10, 13.)</a>.
Certains sont préposés au ministère d'un groupe, par exemple une cité, et on les appelle «archanges», d'autres à celui d'un particulier, et on les appelle «anges».
On dit que ces derniers font les annonces de moindre importance, car leur ministère est limité à un seul homme; mais on dit que les archanges font des annonces majeures, car le bien d'un groupe a plus de valeur que celui d'un seul homme.</p>
<p>Pour la répartition des ordres de la première hiérarchie, <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_gregoire" title="Grégoire le Grand" id="gregoire">Grégoire</a> et <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_bernard" title="Bernard de Clairvaux" id="bernard">Bernard</a> s'accordent avec <a href="https://www.aelf.org/bible/Tb/8" title="https://www.aelf.org/bible/Tb/8" id="denis2">Denis</a>, car cette hiérarchie est constituée autour de la jouissance qui leur est accordée et qui consiste en l'amour fervent, pour les Séraphins, la connaissance profonde, pour les chérubins, et la possession perpétuelle, pour les trônes.
Mais pour ce qui concerne la répartition des rôles dans deux ordres des hiérarchies moyenne et inférieure, à savoir les principautés et les vertus, ces auteurs divergent.
En effet le point de vue de Grégoire et Bernard est le suivant: la hiérarchie moyenne possède la prééminence, la hiérarchie inférieure le ministère.
Dans l'ordre des anges, la prééminence est triple: certains l'exercent sur les esprits angéliques, et on les appelle «dominations», d'autres sur les hommes de bien, et on les appelle «principautés», d'autres sur les démons, et on les appelle «puissances».
Leur rang et leur degré de dignité apparaissent ici de façon évidente.
Quant à leur ministère, il est triple: une partie consiste dans les œuvres, une autre dans l'enseignement, c'est-à-dire dans l'enseignement des grandes et des petites choses; le premier appartient aux vertus, le deuxième aux archanges, le troisième aux anges.</p>
<h4 id="infirme" class="red">apparition à l'homme qui ne pouvait ni boire ni manger</h4>
<p>La cinquième apparition est celle dont parle l'<a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_histoiretripartite" title="Histoire tripartite" id="histoiretripartite">Histoire tripartite</a>.
En effet, près de Constantinople se trouve un lieu où était jadis honorée la déesse Vesta, et où s'élève aujourd'hui une église dédiée à saint Michel: l'endroit s'appelle d'ailleurs Michaelium.
Un homme du nom d'Aquilinus avait été atteint d'une fièvre très brûlante, provoquée par des taches rouges.
Les médecins lui donnèrent une potion, qu'il vomit, tant et si bien qu'à partir de ce moment-là il rendit tout ce qu'il mangeait ou buvait.
Se sentant près de mourir, il se fit conduire dans l'église Saint-Michel, dans l'idée d'y mourir ou d'y être guéri.
Michel lui apparut, et lui dit de se préparer un mélange de miel, de vin et de poivre, et d'y tremper tous ses aliments: il recouvrerait ainsi sa pleine santé.
Il le fit, et se trouva totalement guéri, bien que la médecine semble déconseiller de donner aux colériques des potions qui échauffent.
Voilà ce que dit l'Histoire tripartite.</p>

<footer>
  <p class="puce"><span style="color: #b52b27;">Jacques De Voragine, <cite>La Légende Dorée</cite>, chapître 141.</span></p>
</footer>


<aside>

<h2 id="notes" class="red">Notes</h2>

<h3 id="note_moise" class="red">ascension de Moïse</h3>
  <div class="notices red">
    <p>Le récit intitulé «Ascension de Moïse» est un texte apocryphe du 1er siècle ap. J.-C.; la lettre de Jude a parfois elle aussi été considérée comme apocryphe.</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#moise" title="ascension de Moïse">Il a disputé le corps de Moïse ↩</a></p>
</footer>

<h3 id="note_israel" class="red">patron d'Israël, défenseur des milices célestes</h3>
  <div class="notices red">
    <p>Michel est mentionné comme le patron d'Israël en Daniel 12, 1, et dans Apocalypse 12, 7 il est le défenseur des milices célestes.</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#israel" title="patron d'Israël, défenseur des milices célestes">Il fut jadis prince de la Synagogue ↩</a></p>
</footer>

<h3 id="note_extrapolation" class="red">extrapolation de Jacques de Voragine</h3>
<div class="notices red">
  <p>Jacques de Voragine identifie Michel avec l'ange du Seigneur dont parle Exode 23, 20-23. et qui a joué un rôle dans les sept plaies d'Égypte (Exode 7-12) et dans la traversée de la mer Rouge (Exode 14), mais Le livre de l'Exode ne le mentionne pas explicitement.</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#extrapolation" title="extrapolation de Jacques de Voragine">lui qui a répandu les plaies sur l'Égypte ↩</a></p>
</footer>

<h3 id="note_tumba" class="red">Mont Tumba</h3>
  <div class="notices red">
    <p>Il s'agit bien sûr du Mont-Saint-Michel.</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#tumba" title="Mont Tumba">Au lieu dit La Tombe ↩</a></p>
</footer>

<h3 id="note_calendes" class="red">date des calendes de novembre</h3>
  <div class="notices red">
    <p>Le <time datetime="10-16">16 octobre (dix-septième jour des calendes de novembre)</time> est la date de la dédicace de l'église du Mont-Saint-Michel.</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#calendes" title="date des calendes de novembre">le dix-septième jour des calendes de novembre ↩</a></p>
</footer>

<h3 id="note_denis" class="red">Pseudo-Denis</h3>
  <div class="notices red">
    <p>Il s'agit du Pseudo-Denis, auteur de De Hierarchia.</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#denis" title="Pseudo-Denis¹">selon la répartition de Denis ↩</a></p>
  <p>Revenir au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#denis2" title="Pseudo-Denis²">Pour la répartition des ordres de la première hiérarchie ↩</a></p>
</footer>

<h3 id="note_gregoire" class="red">Grégoire le Grand</h3>
  <div class="notices red">
    <p><a href="https://fr.wikipedia.org/wiki/Grégoire_Ier" title="https://fr.wikipedia.org/wiki/Grégoire_Ier">Grégoire Ier, dit le Grand</a>, auteur des Dialogues (né vers <time datetime="540">540</time>, mort le <time datetime="604-03-12">12 mars 604</time>), devient le 64e pape en <time datetime="590">590</time>.</p>
    <p>Docteur de l'Église, il est l'un des quatre Pères de l'Église d'Occident, avec saint Ambroise, saint Augustin et saint Jérôme. Son influence durant le Moyen Âge fut considérable.</p>
    <p>C'est en son honneur que, deux siècles après sa mort, le chant élaboré dans les abbayes du diocèse de Metz est appelé «chant grégorien» (sans que l'on sache avec certitude son rôle dans l'évolution et la diffusion du chant liturgique).</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#gregoire" title="Grégoire le Grand">Pour la répartition des ordres de la première hiérarchie ↩</a></p>
</footer>

<h3 id="note_bernard" class="red">Bernard de Clairvaux</h3>
  <div class="notices red">
    <p><a href="https://fr.wikipedia.org/wiki/Bernard_de_Clairvaux" title="Bernard de Clairvaux">Bernard de Fontaine, abbé de Clairvaux</a>, né en <time datetime="1090">1090</time> à Fontaine-lès-Dijon et mort le <time datetime="1153-08-20">20 août 1153</time> à l'abbaye de Clairvaux, est un moine bourguignon, réformateur de la vie religieuse catholique.</p>
    <p>Directeur de conscience et important promoteur de l'ordre cistercien (ou ordre de Cîteaux), il recherche l'amour du Christ par la mortification la plus dure. Bernard de Fontaine fait preuve, toute sa vie, d'une activité inlassable pour instruire ses moines de Clairvaux, pour émouvoir et entraîner les foules, pour allier son ordre avec la papauté et pour élaborer un dogme militant que son ordre et toute l'Église catholique mettront en œuvre.</p>
    <p>C'est aussi un conservateur, qui fustige les mutations de son époque (la «Renaissance du xiie siècle»), marquée par une profonde transformation de l'économie, de la société et du pouvoir politique.</p>
    <p>Mort en <time datetime="1153">1153</time>, il est canonisé dès <time datetime="1175">1174</time> et devient ainsi saint Bernard de Clairvaux. Il est déclaré Docteur de l'Église catholique en <time datetime="1830">1830</time> par le pape Pie VIII.</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#bernard" title="Bernard de Clairvaux">Pour la répartition des ordres de la première hiérarchie ↩</a></p>
</footer>

<h3 id="note_histoiretripartite" class="red">Histoire tripartite</h3>
  <div class="notices red">
    <p>chronique ecclésiastique de Constantin à Théodose II (<time datetime="313">313</time> à <time datetime="439">439</time>) en quatre livres, dans laquelle Théodore reprend les œuvres de trois historiens du Ve siècle, Socrate le Scolastique, Sozomène et Théodoret de Cyr, avec notes et comparaisons. Elle a été partiellement traduite en latin en <time datetime="560">560</time> par le moine Épiphane à la demande de Cassiodore. Certaines parties sont assez fidèles, tandis que d'autres sont une adaptation libre.</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#histoiretripartite" title="Histoire tripartite">Histoire tripartite ↩</a></p>
</footer>

<h3 id="note_haymon" class="red">Haymon</h3>
  <div class="notices red">
    <p><a href="https://fr.wikipedia.org/wiki/Haymon_d'Halberstadt" title="https://fr.wikipedia.org/wiki/Haymon_d'Halberstadt">Haymon d'Halberstadt</a>, dit aussi Haymon de Fulda (en latin Haimo Halberstatensis), est un moine bénédictin, puis évêque, de l'époque carolingienne, né vers <time datetime="780">780</time>, mort le <time datetime="853-03-26">26 mars 853<time datetime="780">.</p>
  </div>
<footer>
  <p class="puce">retour au texte:<a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#haymon" title="Haymon">↩</a></p>
</footer>

</aside>

</article>
`;

  let focusEditor;
  let showEditorState = true;
  let editorState = createExtendedThreeRichTextEditor(html);

  function handleChange(event) {
    editorState = event.detail.editorState;
  }

  function clearEditor(event) {
    editorState = clear(editorState);
    focusEditor();
  }

  function resetEditor(event) {
    editorState = createExtendedThreeRichTextEditor(html);
    focusEditor();
  }

  function showHtml(event) {
    alert(toHTML(editorState));
  }

  function showText(event) {
    alert(toPlainText(editorState));
  }

  onMount(() => focusEditor());

</script>

<ProsemirrorEditor
  {editorState}
  bind:focus={focusEditor}
  on:change={handleChange}
  placeholder="Go ahead and edit me!"/>

<div class="controls">
  <button on:click={clearEditor}>Clear</button>
  <button on:click={resetEditor}>Reset</button>
  <button on:click={showHtml}>Show HTML</button>
  <button on:click={showText}>Show Text</button>
</div>

<p>
  <label>Show serialized editor state
    <input type="checkbox" bind:checked={showEditorState}/>
  </label>
</p>

<p>
  information about html <a href='https://www.w3schools.com/tags/tag_ruby.asp' rel="nofollow external" target="_blank"><code>ruby</code></a> tag.
</p>

{#if showEditorState}
<pre>{JSON.stringify(toJSON(editorState), null, 2)}</pre>
{/if}