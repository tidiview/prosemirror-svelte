<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:142 EN:206 -->
<article>

<h1 class="red">Saint-Michel dans <cite>La Légende Dorée</cite></h1>

<div class="notices red">
<p>Dans l'Europe chrétienne du Moyen-Âge, la Légende Dorée est l'ouvrage le plus lu après la Bible.</p>
<p>Elle a été écrite en latin de <time datetime="1261">1261</time> à <time datetime="1266">1266</time> par un moine dominicain de l'Italie du Nord, compilateur de chroniques et également connu comme le <abbr title="huitième">8<sup>ème</sup></abbr> Archevêque de Gênes, Jacques De Voragine (en latin, Jacobus de Voragine).</p>
<p>Présenter cet ouvrage, même de manière élémentaire, n'est pas chose aisée mais pour dire les choses, il n'y a pas d'erreur à écrire qu'en compilant plusieurs documents existants comme des vies de martyrs ou de quelques 150 saints ou groupes de saints, en incorporant dans le calendrier païen préexistant le calendrier liturgique annuel de l'église catholique, en l'uniformisant, en se servant aussi de cette occasion pour expliquer les principaux événements des vies du Christ et de la Vierge à partir des Évangiles, ce texte a de fait construit la mythologie chrétienne qui a imprégné en profondeur tous les domaines de la société de son époque, y compris par exemple sa topologie...</p>
<p>Comme l'écrit, dans la préface de son livre <cite>Mythologie chrétienne: fêtes, rites et mythes du Moyen âge</cite>, le médiéviste <a href="https://fr.wikipedia.org/wiki/Philippe_Walter" title="https://fr.wikipedia.org/wiki/Philippe_Walter">Philippe WALTER</a>, «le souvenir immémorial imprégnaient rites, traditions venus de la mémoire sauvage qui préexistaient à l'arrivée du christianisme», on peut considérer ce texte parce qu'y apparaissent de manière sous-jacente des éléments refoulés par l'Église de l'ancien calendrier païen, comme à la fois fascinant et particulièrement digne d'intérêt.</p>
<p>Ici, je n'en présente bien sûr ci-dessous qu'une très petite partie, le seul chapître 141, parce que celle-ci se rapporte dans l'œuvre comme étant origine du Mont Saint-Michel en temps que lieu de pélerinage.</p>
<p>Y apparaissent l'archange Michel, le taureau, et bien d'autres choses... On peut s'étonner aussi que le récit se développe sans s'arrêter et insensiblement de l'archange à un récit de la foi en les anges.</p>
<p>Entre l'existence qu'on ne peut mesurer et celle qu'on perçoit, ce texte devrait susciter diverses pensées, indépendemment de questions relatives au fait de croire ou de ne pas croire, et donc j'incite à le lire si possible jusqu'à la fin sans s'effrayer de la forte coloration religieuse propre à l'époque.</p>
<p>Des liens ont été établis à partir des citations pour rendre possible et facile pour ceux qui le souhaiterait, vérification des propos avancés en temps que citation.</p>
</div>

<article>

<h2 id="chap141" class="red">saint Michel selon le texte du chapître 141 de <cite>La Légende Dorée</cite></h2>

<h3 id="name" class="red">le nom de Saint Michael</h3>

<p><mark>Michel</mark> se comprend comme «Qui, comme Dieu?» et, à ce que dit Grégoire, chaque fois qu'il s'accomplit une grande merveille, c'est <mark>Michel</mark> qui est envoyé, pour signifier, par son action et par son nom, que personne ne peut faire ce qui revient à Dieu seul: aussi attribue-t-on à <mark>Michel</mark> lui-même nombre de faits qui manifestent une puissance admirable.</p>
<p>Au témoignage de Daniel [<a href="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs" title="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs">Daniel chapître 12 verset 1</a>], il surgira au temps de l’Antéchrist et se tiendra à côté des élus comme leur défenseur et protecteur.
Il a combattu le dragon et ses anges [<a href="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/apocalypse#bataille" title="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/apocalypse#bataille">Apocalypse chapître 12, versets 7 à 9</a>], les a précipités du haut du ciel, et a remporté sur eux une grande victoire.
Il a disputé le <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_moise" title="ascension de Moïse" id="moise">corps de Moïse</a> au diable qui voulait le produire afin que le peuple juif l'adore à la place de Dieu [<a href="https://www.aelf.org/bible/Jude/1" title="https://www.aelf.org/bible/Jude/1">lettre de Jude chapître 1 verset 9</a>].</p>
<p>Il accueille les âmes des saints, et les conduit au Jardin de l'exultation [<a href="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs" title="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs">Daniel chapître 12, versets 1 et 2</a>]. Il fut jadis <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_israel" title="patron d'Israël, défenseur des milices célestes" id="israel">prince de la Synagogue</a>, mais, à présent, le Seigneur l'a fait prince de l'Église .</p>
<p>À ce qu'on sait, c'est <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_extrapolation" title="extrapolation de Jacques de Voragine" id="extrapolation">lui</a> qui a répandu les plaies sur l'Égypte, divisé les eaux de la mer Rouge , conduit le peuple à travers le désert, et qui l'a introduit en Terre promise. Dans l'armée des anges, il est tenu pour le porte-enseigne du Christ [<a href="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/apocalypse#bataille" title="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/apocalypse#bataille">Apocalypse chapître 12 verset 7</a>].</p>
<p>Sur l'ordre du Seigneur il tuera avec puissance l'Antéchrist établi sur le mont des Oliviers [<a href="https://www.aelf.org/bible/Lc/22" title="https://www.aelf.org/bible/Lc/22">Luc chapître 22 verset 43</a>].
À la voix de l'archange <mark>Michel</mark>, les morts ressusciteront [<a href="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs" title="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs">Daniel chapître 12, versets 1 et 2</a>]; au jour du Jugement, il présentera la croix, les clous, la lance et la couronne d'épines.</p>
<p>La fête sacrée de l'archange <mark>Michel</mark> porte les noms d'apparition, de dédicace, de victoire et de mémoire.</p>

<h3 id="apparitions" class="red">les apparitions de cet ange sont multiples</h3>

<h4 id="mont-garganus" class="red">apparition de Garganus et du taureau</h4>

<p>La première apparition de <mark>Michel</mark> est celle du mont Gargano.</p>
<p>Dans les Pouilles se trouve une montagne ainsi désignée, près de la cité nommée Siponto.
Or en l'an du Seigneur <time datetime="390">390</time> habitait dans cette ville de Siponto un homme appelé Gargano; la montagne tenait son nom de lui, ou bien, selon certains livres, c'est lui qui tenait son nom de la montagne.</p>
<p>Il possédait un immense troupeau de brebis et de bœufs, et celui-ci paissait sur les flancs de la montagne, quand soudain il arriva qu'un taureau quitta les autres animaux et s'enfuit jusqu'au sommet.</p>
<p>Comme il ne revenait pas avec les autres bêtes, l'homme rassembla une troupe de serviteurs, se mit à explorer tous les recoins, et finit par le trouver au sommet de la montagne, près de l'ouverture d'une grotte.</p>
<p>Se demandant avec exaspération pourquoi il errait ainsi tout seul, il lui décocha une flèche empoisonnée, mais celle-ci, comme si le vent la renvoyait, se retourna aussitôt contre lui.</p>
<p>Troublés par l'affaire, les habitants allèrent trouver l'évêque et l'interrogèrent sur ce phénomène stupéfiant.</p>
<p>Ce dernier leur imposa un jeûne de <time datetime="P3D">trois jours</time>, et leur prescrivit de demander l'explication à Dieu.</p>
<p>Cela fait, saint <mark>Michel</mark> apparut à l'évêque et lui dit:</p>
<p class="conversation">«Sachez que c'est moi qui ai voulu que cet homme soit frappé par sa propre flèche; car je suis l'archange <mark>Michel</mark>, et j'ai décidé de préserver ce lieu, dont j'ai fait ma demeure sur terre.
Par ce signe j'ai voulu prouver que j'en étais l'inspecteur et le gardien.»</p>
<p>Sur-le-champ, l'évêque et les habitants s'y rendirent en procession, et, n'osant pas entrer dans la grotte, ils se tinrent en prière devant l'entrée.</p>

<h4 id="mont-tombe" class="red">apparition au mont Tombe</h4>

<p>La seconde apparition eut lieu dans les années du Seigneur <time datetime="710">710</time>, à ce qu'on rapporte.</p>
<p>Au lieu dit La Tombe, <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_haymon" title="Haymon" id="tumba">Tumba</a>, situé non loin du bord de mer, à six milles de la ville d'Avranches, <mark>Michel</mark> apparut à l'évêque de la cité et lui ordonna de construire une église à cet endroit, pour y célébrer la mémoire de l'archange <mark>Michel</mark>, comme sur le mont Gargano.</p>
<p>L'évêque hésitant sur le lieu exact où il devait construire l'église, <mark>Michel</mark> lui dit que ce devait être à l'emplacement où il trouverait un taureau caché par des brigands.</p>
<p>Comme il s'interrogeait aussi sur les dimensions de l'église, il reçut l'ordre de lui donner la surface délimitée par la marche du taureau.</p>
<p>Il y avait là deux énormes pierres qu'aucune force humaine n'aurait pu faire bouger: <mark>Michel</mark> apparut alors à un homme, lui ordonna d'aller là-bas et de prendre ces pierres.</p>
<p>Il y alla et les déplaça comme si elles ne pesaient rien du tout.</p>
<p>Après avoir édifié l'église, on prit sur le mont Gargano une partie de l'ornement que saint <mark>Michel</mark> avait déposé sur l'autel et une partie de la plaque de marbre sur laquelle il s'était tenu, et on les déposa en son église.</p>
<p>Et comme il y avait pénurie d'eau, sur le conseil de l'ange on perça un trou dans un rocher: à ce qu'on dit, il s'en échappa aussitôt suffisamment d'eau pour alimenter l'endroit encore aujourd'hui.</p>
<p>En ce lieu, cette apparition se célèbre solennellement le <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_tumba" title="Mont Tumba" id="calendes">dix-septième jour des calendes de novembre</a>.</p>
<p>Il s'y déroula encore, dit-on, un miracle digne de mémoire.</p>
<p>Le lieu est partout cerné par l'océan, mais au jour de la Saint-<mark>Michel</mark> il s'ouvre deux fois pour laisser le passage au peuple.</p>
<p>C'est à cause de la marée montante et descendante qui se produit là deux fois par jour qu'on dit qu'il s'ouvre.</p>
<p>Comme une foule nombreuse se pressait vers l'église, il se trouva qu'une femme enceinte et près d'accoucher marchait au milieu d'elles.</p>
<p>Voilà soudain que l'eau revint à grosses vagues, et que la foule affolée se réfugia sur le rivage, sauf la femme enceinte, qui se trouva prisonnière des flots marins.</p>
<p>Mais l'archange <mark>Michel</mark> lui sauva la vie et elle accoucha d'un fils en pleine mer.</p>
<p>Elle le prit dans ses bras, l'allaita et, la mer lui laissant à nouveau le passage, elle en sortit toute joyeuse avec son enfant.</p>

<h4 id="chateau-saint-ange" class="red">appartition au château saint-Ange</h4>

<p>La troisième apparition eut lieu à Rome, à ce qu'on lit, au temps du pape Grégoire.</p>
<p>Ce dernier, en effet, avait institué les litanies majeures en raison de la peste bubonique, et il priait avec dévotion pour son peuple, lorsqu'il vit, sur le château jadis appelé mausolée d'Adrien, l'ange du Seigneur en train d'essuyer son glaive et de le remettre au fourreau.</p>
<p>Saint Grégoire comprit alors que ses prières avaient été exaucées, et il construisit là une église en l'honneur des anges; aussi le château est-il appelé aujourd'hui encore château Saint-Ange.</p>
<p>Cette apparition est célébrée le 8 des ides de mai, en même temps que celle du mont Gargano, au jour où l'archange <mark>Michel</mark> donna la victoire aux Sipontins.</p>

<h4 id="de-hierarchia" class="red">apparition dans les hiérarchies</h4>

<p>La quatrième apparition est celle des hiérarchies des anges eux-mêmes.</p>
<ol>
  <li>
    <p>La première hiérarchie est dite «épiphanie», c'est-a-dire apparition supérieure, </p>
  </li>
  <li>
    <p>la hiérarchie moyenne «hyperphanie», c'est-a-dire apparition moyenne, </p>
  </li>
  <li>
    <p>et la dernière hiérarchie «hypophanie», c'est-à-dire apparition inférieure.</p>
  </li>
</ol>
<p>Le mot «hiérarchie» vient de <i>ierar</i>, «sacré», et de <i>archos</i>, «prince», et signifie «principauté sacrée».</p>
<p>Chaque hiérarchie comprend trois ordres:</p>
<ol>
  <li>la hiérarchie supérieure comprend
    <ol>
      <li>
        <p>les séraphins,</p>
      </li>
      <li>
        <p>les chérubins</p>
      </li>
      <li>
        <p>et les trônes,</p>
      </li>
    </ol>
  </li>
  <li>la hiérarchie moyenne, selon la répartition de <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_denis" title="Pseudo-Denis" id="denis">Denis</a>,
    <ol>
      <li>
        <p>les dominations,</p>
      </li>
      <li>
        <p>les vertus</p>
      </li>
      <li>
        <p>et les puissances,</p>
      </li>
    </ol>
  <li>et la dernière, toujours selon Denis,
    <ol>
      <li>
        <p>les principautés,</p>
      </li>
      <li>
        <p>les anges</p>
      </li>
      <li>
        <p>et les archanges.</p>
      </li>
    </ol>
  </li>
</ol>
<p>Leur ordonnancement et leur répartition peuvent se saisir par comparaison avec les puissances terrestres.</p>
<p>En effet, parmi les ministres soumis à un monarque, les uns, comme </p>
  <ol>
    <li>
      <p>les chambellans, </p>
    </li>
    <li>
      <p>les conseillers </p>
    </li>
    <li>
      <p>et les assesseurs, </p>
    </li>
  </ol>
<p>s'occupent directement de la personne du roi; les ordres de la première hiérarchie leur sont comparables.</p>
<p>D'autres, pour administrer le royaume, ont des charges générales, et ne sont pas préposés à une province déterminée: c'est le cas </p>
  <ol>
    <li>
      <p>des lieutenants, </p>
    </li>
    <li>
      <p>des capitaines de l'armée </p>
    </li>
    <li>
      <p>et des juges de la cour; </p>
    </li>
  </ol>
<p>les ordres de la deuxième hiérarchie leur sont comparables.
D'autres enfin, comme </p>
  <ol>
    <li>
      <p>les prévôts, </p>
    </li>
    <li>
      <p>les baillis </p>
    </li>
    <li>
      <p>et autres officiers de rangs inférieurs du même type, </p>
    </li>
  </ol>
<p>sont préposés au gouvernement d'une partie du royaume: ceux-là ont pour équivalents les ordres de la troisième hiérarchie.</p>
<p>Les trois ordres de la première hiérarchie sont donc constitués pour assister Dieu et se tourner vers lui.
Pour cela, trois qualités leur sont nécessaires: </p>
  <ol>
    <li>
      <p>un amour sans bornes, et c'est là le propre des Séraphins, dont le nom se comprend comme «les ardents»; </p>
    </li>
    <li>
      <p>une connaissance parfaite, et c'est là le propre des chérubins, dont le nom se comprend comme «plénitude de la science»; </p>
    </li>
    <li>
      <p>une perpetuelle possession ou jouissance, et c'est là le propre des trônes, dont le nom se comprend comme «siège», parce que Dieu Siège et repose en eux tout en les faisant reposer en lui.</p>
    </li>
  </ol>
<p>Les trois ordres de la hiérarchie moyenne sont constitués pour commander et administrer l’univers des hommes en général.
Ce gouvernement consiste en trois choses: </p>
  <ol>
    <li>
      <p>d'abord à les diriger ou les commander, et c'est là le propre des dominations, qui ont pour rôle de régir les anges inférieurs, de les diriger dans tous les ministères divins, et de leur transmettre tous les commandements, ainsi que l'affirme Zacharie, où un ange dit à l'autre: </p>
      <p class="conversation">«Cours vite parler à cet enfant» <a href="https://www.aelf.org/bible/Za/2" title="https://www.aelf.org/bible/Za/2">(Zacharie 2, 8.)</a>...</p>
    </li>
    <li>
      <p>Deuxièmement, ce gouvernement consiste à agir, et c'est là le propre des vertus, pour qui aucun commandement n'est impossible à exécuter, car il leur a été donné tout pouvoir sur les difficultés du ministère divin, et c'est la raison pour laquelle on leur attribue le pouvoir de faire des miracles.</p>
    </li>
    <li>
      <p>Troisièmement, ce gouvernement consiste à repousser, c'est-à-dire à repousser les obstacles et les hostilités, et c'est là le propre des puissances, qui ont le pouvoir de réduire les puissances contraires. Cela est signifié dans Tobie, où il est dit que Raphaël enchaîna un démon dans le désert de la Haute-Egypte <a href="https://www.aelf.org/bible/Tb/8" title="https://www.aelf.org/bible/Tb/8">(Tobie 8, 3.)</a>.</p>
    </li>
  </ol>
<p>Les trois ordres de la dernière hiérarchie sont constitués pour des fonctions déterminées et limitées.</p>
  <ol>
    <li>
      <p>Certains d'entre eux sont à la tête d'une seule province: ce sont ceux qui appartiennent à l'ordre des principautés, à l'image de ce qu'était le prince des Perses, qui dirigeait les Perses, dont parle Daniel <a href="https://www.aelf.org/bible/Dn/10" title="https://www.aelf.org/bible/Dn/10">(Daniel 10, 13.)</a>.</p>
    </li>
    <li>
      <p>Certains sont préposés au ministère d'un groupe, par exemple une cité, et on les appelle «archanges», d'autres à celui d'un particulier, et on les appelle «anges».
      On dit que ces derniers font les annonces de moindre importance, car leur ministère est limité à un seul homme; </p>
    </li>
    <li>
      <p>mais on dit que les archanges font des annonces majeures, car le bien d'un groupe a plus de valeur que celui d'un seul homme.</p>
    </li>
  </ol>
<p>Pour la répartition des ordres de la première hiérarchie, <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_gregoire" title="Grégoire le Grand" id="gregoire">Grégoire</a> et <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_bernard" title="Bernard de Clairvaux" id="bernard">Bernard</a> s'accordent avec <a href="https://www.aelf.org/bible/Tb/8" title="https://www.aelf.org/bible/Tb/8" id="denis2">Denis</a>, car cette hiérarchie est constituée autour </p>
<ol>
  <li>
    <p>de la jouissance qui leur est accordée et qui consiste en l'amour fervent, pour les Séraphins, </p>
  </li>
  <li>
    <p>la connaissance profonde, pour les chérubins, </p>
  </li>
  <li>
    <p>et la possession perpétuelle, pour les trônes.</p>
  </li>
</ol>
<p>Mais pour ce qui concerne la répartition des rôles dans deux ordres des hiérarchies moyenne et inférieure, à savoir les principautés et les vertus, ces auteurs divergent.</p>
<p>En effet le point de vue de Grégoire et Bernard est le suivant: la hiérarchie moyenne possède la prééminence, la hiérarchie inférieure le ministère.
Dans l'ordre des anges, la prééminence est triple:</p>
  <ol>
    <li>
      <p>certains l'exercent sur les esprits angéliques, et on les appelle «dominations», </p>
    </li>
    <li>
      <p>d'autres sur les hommes de bien, et on les appelle «principautés», </p>
    </li>
    <li>
      <p>d'autres sur les démons, et on les appelle «puissances».</p>
    </li>
  </ol>
<p>Leur rang et leur degré de dignité apparaissent ici de façon évidente.
Quant à leur ministère, il est triple: </p>
  <ol>
    <li>
      <p>une partie consiste dans les œuvres, </p>
    </li>
    <li>
      <p>une autre dans l'enseignement, c'est-à-dire dans l'enseignement des grandes</p>
    </li>
    <li>
      <p>et des petites choses; </p>
    </li>
  </ol>
  <ol>
    <li>
      <p>le premier appartient aux vertus, </p>
    </li>
    <li>
      <p>le deuxième aux archanges, </p>
    </li>
    <li>
      <p>le troisième aux anges.</p>
    </li>
  </ol>

<h4 id="infirme" class="red">apparition à l'homme qui ne pouvait ni boire ni manger</h4>

<p>La cinquième apparition est celle dont parle l'<a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#note_histoiretripartite" title="Histoire tripartite" id="histoiretripartite">Histoire tripartite</a>.
En effet, près de Constantinople se trouve un lieu où était jadis honorée la déesse Vesta, et où s'élève aujourd'hui une église dédiée à saint <mark>Michel</mark>: l'endroit s'appelle d'ailleurs Michaelium.</p>
<p>Un homme du nom d'Aquilinus avait été atteint d'une fièvre très brûlante, provoquée par des taches rouges.
Les médecins lui donnèrent une potion, qu'il vomit, tant et si bien qu'à partir de ce moment-là il rendit tout ce qu'il mangeait ou buvait.
Se sentant près de mourir, il se fit conduire dans l'église Saint-<mark>Michel</mark>, dans l'idée d'y mourir ou d'y être guéri.</p>
<p><mark>Michel</mark> lui apparut, et lui dit de se préparer un mélange de miel, de vin et de poivre, et d'y tremper tous ses aliments: il recouvrerait ainsi sa pleine santé.</p>
<p>Il le fit, et se trouva totalement guéri, bien que la médecine semble déconseiller de donner aux colériques des potions qui échauffent.</p>
<p>Voilà ce que dit l'Histoire tripartite.</p>


<!-- page 2 -->


<h3 id="victoire-michel" class="red">victoires de saint Michel</h3>

<p>Deuxièmement, la fête de saint <mark>Michel</mark> porte le nom de victoire.
On connaît bien des victoires de l'archange <mark>Michel</mark> et des autres anges.</p>

<h4 id="victoire-sipontus" class="red">victoire des chrétiens de Siponte</h4>

<p>La première est celle qu'il accorda aux Sipontins, de la façon que voici.</p>
<p>Peu de temps après la découverte du lieu dont il a été question plus haut, les Napolitains, encore païens, entreprirent de livrer une bataille rangée contre les Sipontins et les Bénéventins, qui habitent à cinquante milles environ de Siponte.</p>
<p>Sur les conseils de leur évêque, les Sipontins demandèrent une trêve de trois jours, afin de pouvoir se livrer à un jeûne de cette durée avant d'implorer le secours de leur patron <mark>Michel</mark>.
La troisième nuit, <mark>Michel</mark> apparut à l'évêque, dit que leurs prières avaient été entendues, et il leur promit la victoire, en leur recommandant de donner l'assaut aux ennemis à la quatrième heure du jour.</p>
<p>Au moment de l'attaque, le mont Gargano retentit d'un immense tremblement, il se fit une pluie d'éclairs, et un brouillard cacha à la vue tout le sommet de la montagne, au point que du côté adverse six cents hommes tombèrent tant sous les traits de l'ennemi que sous ceux de la foudre.</p>
<p>Quant aux autres, reconnaissant la puissance de l’archange, ils abandonnèrent l'erreur de l'idolâtrie et se soumirent sans plus tarder à la foi chrétienne.</p>

<h4 id="victoire-lucifer" class="red">victoire de saint Michel sur Lucifer</h4>

<p>La seconde victoire est celle que remporta l'archange lorsqu'il chassa du ciel le dragon, c'est-à-dire Lucifer, et tous ses suppôts.</p>
<p>C'est à cette bataille que renvoient ces lignes d'Apocalypse: Un combat se fit dans le ciel, <mark>Michel</mark> <a href="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/apocalypse#bataille" title="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/apocalypse#bataille">(Apocalypse 12, 7.)</a>...</p>
<p>Comme Lucifer, en effet, revendiquait l'égalité avec Dieu, l’archange <mark>Michel</mark>, porte-enseigne de l’armée divine, vint le chasser du ciel avec ses suppôts, et les repoussa dans la zone ténébreuse de l'air jusqu'au jour du Jugement.</p>
<p>En effet, il ne leur fut plus permis d'habiter au ciel, ni dans la partie supérieure de l'air, car c'est un endroit clair et plaisant, ni sur terre avec nous, de peur qu'ils ne nous attaquent.</p>
<p>Ils sont dans la partie de l'air située entre ciel et terre, de sorte qu'ils souffrent en regardant en haut et en voyant la gloire qu'ils ont perdue, et qu'ils sont dévorés de jalousie chaque fois qu'ils regardent en bas et qu'ils voient les hommes monter au lieu d'où ils sont eux-mêmes tombés.</p>
<p>Par le fait de la providence divine, ils descendent néanmoins fréquemment chez nous pour nous mettre à l'épreuve et, comme cela fut révélé à quelques saints hommes, ils volètent autour de nous comme des mouches.</p>
<p>En effet, ils sont innombrables et remplissent l'air entier comme les mouches.</p>
<p>Aussi <a href="https://www.aelf.org/bible/Za/4" title="https://www.aelf.org/bible/Za/4" id="haymon">Haymon</a> dit-il:</p>
<p class="conversation">«Aux dires des philosophes et selon l'opinion de nos docteurs, les airs sont pleins de démons et d'esprits malins, tout comme un rayon de soleil est plein de minuscules grains de poussière.»</p>
<p>Mais malgré leur nombre, d'après Origène, nous diminuons l'effectif de leur armée quand nous remportons sur eux une victoire, en sorte que le démon qui échoue à faire tomber un saint homme dans un vice donné ne peut plus le soumettre une seconde fois à la même tentation.</p>

<h4 id="victoire-anges" class="red">victoires quotidiennes des anges sur nous-mêmes</h4>

<p>La troisième victoire est celle que les anges remportent quotidiennement sur les démons, tandis qu'en combattant pour nous ils nous libèrent de leurs tentations.
Ils nous en délivrent de trois façons.</p>
  <ul>
    <li>
      <p><span style="color: #b52b27;">D'abord</span>
      en refrênant la puissance du démon, selon l'Apocalypse, qui mentionne l'ange qui a enchaîné le démon et l'a jeté dans l'abîme <a href="https://www.aelf.org/bible/Ap/20" title="https://www.aelf.org/bible/Ap/20">(Apocalypse 20, 1-3.)</a>, et Tobie, où l'on voit le diable enchaîné dans le désert supérieur <a href="https://www.aelf.org/bible/Tb/8" title="https://www.aelf.org/bible/Tb/8">(Tobie 8, 3.)</a>.</p>
      <p>Car ce genre de captivité n'est rien d'autre que la limitation de son pouvoir.</p>
    </li>
    <li>
      <p><span style="color: #b52b27;">Deuxièmement,</span>
      ils nous délivrent en tempérant notre concupiscence, selon la Genèse, où il est dit qu'un ange toucha un nerf de Jacob, qui se dessécha aussitôt <a href="https://www.aelf.org/bible/Gn/32" title="https://www.aelf.org/bible/Gn/32">(Genèse 32, 25.)</a>.</p>
    </li>
    <li>
      <p><span style="color: #b52b27;">Troisièmement,</span>
      ils nous délivrent en imprimant dans nos esprits la mémoire de la Passion du seigneur, ce qui est signifié dans l'Apocalypse, où on lit: Ne nuisez ni à la mer, ni à la terre, ni aux arbres, avant que nous ayons marqué <a href="https://www.aelf.org/bible/Ap/7" title="https://www.aelf.org/bible/Ap/7">(Apocalypse 7, 3.)</a>...</p>
      <p>De même Ezéchiel: </p>
      <p class="conversation">Mets le signe du Tau sur le front des hommes qui gémissent (Ézéchiel 9, 4.), </p>
      <p>car la lettre Tau a été faite sur le modèle de la croix, et ceux qui en portent le signe ne craignent pas l'ange exterminateur.</p>
      <p>Aussi lit-on encore dans Ezéchiel: </p>
      <p class="conversation">Ne tuez pas celui sur lequel vous aurez vu le signe du <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree/page:2#note_tau" title="signe du Tau" id="tau">Tau</a> (Ezéchiel 9, 6.).</p>
    </li>
  </ul>

<h4 id="victoire-antechrist" class="red">victoire finale sur l'antéchrist</h4>

<p>La quatrième victoire est celle que l'archange <mark>Michel</mark> remportera sur l'antéchrist à l'heure où il le tuera.</p>
<p>Alors, à ce que dit Daniel, </p>
<p class="conversation">le grand prince <mark>Michel</mark> se lèvera et, en soutien et protecteur des élus, il opposera sa puissance à l'antéchrist <a href="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs" title="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs">(Daniel 12, 1.)</a>.</p>
<p>Alors l'antéchrist, d'après la Glose sur l'Apocalypse (J'ai vu l'une des têtes de la bête blessée à mort <a href="https://www.aelf.org/bible/Ap/13" title="https://www.aelf.org/bible/Ap/13">(Apocalypse 13, 3.)</a>...), </p>
<p class="conversation">feindra d'être mort, se cachera <time datetime="P3D">durant trois jours</time>, et réapparaîtra en disant qu'il est ressuscité; par l'art magique, les démons transporteront son corps dans les airs, et avec admiration tous l'adoreront.</p>
<p class="conversation">Enfin, il gravira le mont des Oliviers, à ce que dit la Glose de II Thessaloniciens (II): </p>
<p class="conversation">Lui que le seigneur Jésus mettra à mort <a href="https://www.aelf.org/bible/2Th/2" title="https://www.aelf.org/bible/2Th/2">(II Thessaloniciens 2, 8.)</a>...), et tandis qu'il y siégera sous son pavillon, sur son trône, à l'endroit vers lequel était monté le seigneur, <mark>Michel</mark> arrivera et le tuera.</p>
<p>Par ce combat et cette victoire, on comprend, selon Grégoire, ce qui est dit dans l'Apocalypse: </p>
<p class="conversation">Il y eut un combat dans le ciel. <mark>Michel</mark> <a href="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/apocalypse#bataille" title="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/apocalypse#bataille">(Apocalypse 12, 7.)</a>....</p>
<p>Ce passage s'entend en effet du triple combat de <mark>Michel</mark>: </p>
<ol>
  <li>celui qu'il a livré contre Lucifer, quand il l'a chassé du ciel, </li>
  <li>celui qu’il livre contre les démons qui nous attaquent, </li>
  <li>et celui dont il vient d'être question.</li>
</ol>

<h3 id="dedicace" class="red">dédicace</h3>

<p>Troisièmement, cette fête s'appelle dédicace, parce que c'est ce jour-la que l’archange <mark>Michel</mark> a révélé qu'il avait lui-même dédié le lieu du mont Gargano.</p>
<p>En effet, après avoir écrasé leurs adversaires et remporte sur eux cette merveilleuse victoire, les Sipontins se mirent à se demander s'ils devaient entrer dans ce lieu et en faire la dédicace.</p>
<p>Alors, l'évêque résolut de demander conseil au pape Pélage, qui donna cette réponse: </p>
<p class="conversation">«Si un humain devait dédier cette église, il lui faudrait le faire précisément le jour de cette victoire; mais si <mark>Michel</mark> veut qu'il en soit différemment, c'est à lui qu'il faut demander quelle est sa volonté.»</p>
<p>Le pape, l'évêque et le peuple respectèrent un jeûne de <time datetime="P3D">trois jours</time>, et <mark>Michel</mark> apparut à l'évêque; il lui dit: </p>
<p class="conversation">«Vous n'avez nul besoin de dédier l'église que j'ai construite, car j'en ai fait moi-même la dédicace après l'avoir fondée.»</p>
<p>Et il ordonna que, le lendemain, l'évêque et le peuple entrent dans l'église, l'honorent par leurs prières, et le considèrent lui-même comme leur saint patron; il leur donna enfin un signe attestant la consécration: s'ils montaient sur le côté oriental par une entrée dérobée, ils trouveraient les traces d'un homme imprimées dans le marbre.</p>
<p>Le matin, donc, arrivent l'évêque et le peuple au complet, ils entrent dans la grande crypte, et y trouvent trois autels, dont deux étaient situés dans la partie méridionale, et le troisième dans la partie orientale, désigné à la vénération des fidèles par l'ornement rouge qui le recouvrait.</p>
<p>Une fois célébrées là les saintes solennités de la messe, quand chacun eut reçu la sainte communion, tous à l'évêque, il envoya là-bas des prêtres et des clercs pour y célébrer continûment l'office divin.</p>
<p>Dans cette grotte coule une eau limpide et très agréable au goût, que le peuple boit après la communion, et qui guérit diverses maladies.</p>
<p>L'ayant appris, le pape décida que ce jour serait célébré en l'honneur de saint <mark>Michel</mark> et de toutes les saintes créatures spirituelles.</p>

<!-- page 3 -->

<h3 id="memoire-saint-michel" class="red">mémoire de saint Michel</h3>

<p>Quatrièmement, cette fête s'appelle mémoire de saint Michel, bien que nous y fassions mémoire de tous les anges, et que nous les honorions collectivement.</p>
<p>Il convient en effet que nous leur rendions louange et gloire pour plusieurs raisons: </p>
<ul>
  <li>ils sont nos gardiens, </li>
  <li>nos assistants, </li>
  <li>nos frères </li>
  <li>et nos concitoyens, </li>
  <li>les porteurs de nos âmes vers le ciel, </li>
  <li>les ambassadeurs de nos prières auprès de Dieu, </li>
  <li>les plus nobles soldats du Roi éternel, </li>
  <li>et les consolateurs de nos tribulations.</li>
</ul>

<h4 id="anges-gardiens" class="red">parce que les anges nous gardent</h4>

<p>Nous devons donc les honorer d'abord parce qu'ils sont nos gardiens.</p>
<p>Chaque homme se voit en effet donner deux anges, un mauvais qui le met à l'épreuve, et un bon qui veille sur lui.</p>
<p>L'homme jouit de la garde de son bon ange au cours de sa venue au monde, quand il est encore dans le ventre de sa mère, tout de suite après sa naissance, quand il est hors du ventre de sa mère, et durant toute sa vie d'adulte.</p>
<p>Car dans chacun de ces trois états, il a besoin de la garde de l'ange: </p>
<ol>
  <li>
    <p>quand il est tout petit et encore dans le ventre de sa mère, il peut mourir et être damné; </p>
  </li>
  <li>
    <p>avant l'âge adulte, et quand il est hors du ventre de sa mère, il peut être empêché d'accéder au baptême; </p>
  </li>
  <li>
    <p>à l'âge adulte, il peut être séduit par différents péchés.</p>
  </li>
</ol>
<p>Chez l'adulte, en effet, le diable égare la raison par ses ruses, flatte la volonté par ses séductions, et écrase la vertu par sa violence.</p>
<p>Aussi était-il nécessaire qu'un bon ange soit délégué à ses côtés pour l'instruire et lui montrer la voie contre ces tromperies, pour l'exhorter et l'inciter au bien à l'encontre de ces séductions, et le défendre de l'oppresseur en s'opposant à cette violence.</p>
<p>L'effet de la garde que l'ange assure chez l'homme peut prendre quatre formes.</p>
<p>Premièrement, elle vise à ce que l'âme progresse vers le bienfait de la grâce, chose que l'ange accomplit de trois façons: </p>
<ol>
  <li>
    <p>d'abord en supprimant en l'âme tout obstacle vers ce bienfait, ce qui est signifié dans le livre de l'Exode, quand l'ange a frappé les premiers-nés d'Egypte <a href="https://www.aelf.org/bible/Ex/12" title="https://www.aelf.org/bible/Ex/12">(Exode 12, 29.)</a>; </p>
  </li>
  <li>
    <p>deuxièmement, en secouant sa paresse, ce qui est signifié dans Zacharie, où il est dit: L'ange du Seigneur m'a réveillé comme un homme qui sort du sommeil <a href="https://www.aelf.org/bible/Za/4" title="https://www.aelf.org/bible/Za/4">(Zacharie 4, 1.)</a>; </p>
  </li>
  <li>
    <p>troisièmement, en la conduisant et la reconduisant sur la voie de la pénitence, ce qui est signifié dans Tobie par l'ange qui la conduit et la reconduit <a href="https://www.aelf.org/bible/Tb/5" title="https://www.aelf.org/bible/Tb/5">(Tobie 5, 20.)</a>.</p>
  </li>
</ol>
<p>Deuxièmement, la garde de l'ange vise à épargner à l'homme la chute dans le péché, ce que l'ange accomplit de trois façons: </p>
<ol>
  <li>
    <p>d'abord, en lui évitant de commettre le mal dans le futur, ce qui est signifié dans Nombres, à travers Balaam qui, allant maudire Israël, en fut empêché par un ange <a href="https://www.aelf.org/bible/Nb/22" title="https://www.aelf.org/bible/Nb/22">(Nombres 22, 12-31.)</a>; </p>
  </li>
  <li>
    <p>deuxièmement, en lui faisant des reproches sur son péché passé, ce qui est signifié dans Juges, où, après avoir été réprimandés pour leur transgression, les fils d'Israël élevèrent leurs clameurs et pleurèrent <a href="https://www.aelf.org/bible/Jg/2" title="https://www.aelf.org/bible/Jg/2">(Juges 2, 1-4.)</a>; </p>
  </li>
  <li>
    <p>troisièmement, en lui faisant violence pour le tirer du péché présent, ce qui est signifié par la violence avec laquelle Loth et sa femme furent chassés de Sodome, c'est-à-dire de l'habitude du péché <a href="https://www.aelf.org/bible/Gn/19" title="https://www.aelf.org/bible/Gn/19">(Genèse 19, 15-17.)</a>.</p>
  </li>
</ol>
<p>Son troisième effet est de le relever dans le cas où il tombe, ce que l'ange accomplit de trois façons:</p>
<ol>
  <li>
    <p>d'abord, en l'amenant à la contrition, comme il est signifié dans Tobie, où, suivant l'enseignement de l'ange, Tobie enduit de fiel — symbole de la contrition — les yeux de son père, c'est-à-dire ceux de son cœur <a href="https://www.aelf.org/bible/Tb/11" title="https://www.aelf.org/bible/Tb/11">(Tobie 11, 7.)</a>;</p>
  </li>
  <li>
    <p>deuxièmement, en lui purifiant les lèvres en vue de la confession, ce qui est signifié dans Isaïe, où les lèvres d'Isaïe sont purifiées par un ange <a href="https://www.aelf.org/bible/Tb/11" title="https://www.aelf.org/bible/Tb/11">(Isaïe 6, 6-7.)</a>;</p>
  </li>
  <li>
    <p>troisièmement, en se réjouissant de sa résipiscence car, comme il est dit dans Luc: Il y aura plus de joie dans le ciel pour un seul pécheur <a href="https://www.aelf.org/bible/Lc/15" title="https://www.aelf.org/bible/Lc/15">(Luc 15,7.)</a> …</p>
  </li>
</ol>
<p>Le quatrième effet est de l'empêcher de tomber dans autant de maux qu'il existe d'incitations de la part du diable, ce que l'ange fait de trois manières: </p>
<ol>
  <li>
    <p>en refrénant la puissance du diable, </p>
  </li>
  <li>
    <p>en affaiblissant la concupiscence, </p>
  </li>
  <li>
    <p>en imprimant dans nos cœurs la mémoire de la Passion du Seigneur, comme nous l'avons dit plus haut.</p>
  </li>
</ol>

<h4 id="anges-servants" class="red">parce que les anges nous assistent</h4>

<p>Deuxièmement, nous devons honorer les anges parce qu'ils sont nos assistants.</p>
<p>Tous, en effet, comme le dit l'Épître aux Hébreux, </p>
<p class="conversation">sont des esprits qui nous assistent</p>
<p class="conversation">Car ils sont tous envoyés pour nous <a href="https://www.aelf.org/bible/He/1" title="https://www.aelf.org/bible/He/1">(Hébreux I, 14.)</a>: </p>
<ol>
  <li>
    <p>les anges supérieurs sont envoyés vers les anges de second rang, </p>
  </li>
  <li>
    <p>les anges de second rang vers les anges inférieurs, </p>
  </li>
  <li>
    <p>et les anges inférieurs vers nous.</p>
  </li>
</ol>
<p>Cet envoi convient </p>
<ol>
  <li>
    <p>à la bonté de Dieu, qui se manifeste en tant qu'elle aime faire notre salut, en y préposant les esprits les plus nobles, qui lui sont unis par une intime charité.</p>
  </li>
  <li>
    <p>Deuxièmement, il convient à la charité des anges, car c'est leur charité ardente qui les pousse à désirer au plus haut point le salut d'autrui, et c'est pourquoi Isaïe dit: </p>
    <p class="conversation">Me voici, Seigneur, envoie-moi <a href="https://www.aelf.org/bible/Tb/11" title="https://www.aelf.org/bible/Tb/11">(Isaïe 6, 8.)</a>! </p>
    <p>Or les anges peuvent nous aider en ce qu'ils voient que nous avons besoin de leur secours, et que nous sommes en proie aux attaques des mauvais anges: aussi la loi de la charité angélique exige-t-elle qu'ils nous soient envoyés.</p>
  </li>
  <li>
    <p>Troisièmement, cet envoi convient à l'indigence humaine, </p>
    <ol>
      <li>
        <p>car les bons anges ont été envoyés pour enflammer nos sentiments en les guidant vers l'amour, chose que l’on symbolise en disant qu'ils ont été envoyés dans un char de feu;</p>
      </li>
      <li>
        <p>deuxièmement, ils ont été envoyés pour illuminer notre intellect en le guidant vers la connaissance, chose qui est signifiée dans l'Apocalypse, par l'ange qui tient à la main un livre ouvert <a href="https://www.aelf.org/bible/Ap/10" title="https://www.aelf.org/bible/Ap/10">(Apocalypse 10, 2.- 8.)</a>;</p>
      </li>
      <li>
        <p>troisièmement, ils ont été envoyés pour affermir en nous jusqu'à la fin ce qui est encore inachevé, chose qui est signifiée en I Rois, où l'ange apporta à Elie un pain cuit sous la cendre et un vase rempli 
        d'eau: il mangea et, fortifié par cette nourriture, alla jusqu'à l'Oreb, la montagne de Dieu <a href="https://www.aelf.org/bible/1R/19" title="https://www.aelf.org/bible/1R/19">(I Rois 19, 6-8.)</a>.</p>
      </li>
    </ol>
  </li>
</ol>

<h4 id="anges-freres" class="red">parce que les anges sont nos frères et nos concitoyens</h4>

<p>Troisièmement, nous devons les honorer parce que ce sont nos frères et nos concitoyens.</p>
<p>Tous les élus, en effet, rejoignent les ordres des anges, </p>
<ol>
  <li>
    <p>certains les ordres supérieurs, </p>
  </li>
  <li>
    <p>d'autres les ordres inférieurs, </p>
  </li>
  <li>
    <p>ou les ordres intermédiaires, </p>
  </li>
</ol>
<p>selon la diversité de leurs mérites, la sainte Vierge étant au-dessus de tous.</p>
<p>C'est ce que semble suggérer saint Grégoire dans l'homélie où il dit:</p>
<ol>
  <li>
    <ol>
      <li>
        <p class="conversation">«Certains saisissent peu de choses, mais ils ne laissent pas de les annoncer à leurs frères: ils sont au nombre des Anges; <p>
      </li>
      <li>
        <p class="conversation">il en est qui ont le privilège de concevoir la totalité des secrets célestes et de les annoncer: ils sont avec les Archanges; </p>
      </li>
      <li>
        <p class="conversation">il en est qui font des miracles prodigieux et qui manifestent ainsi leur puissance: ils sont avec les Vertus; </p>
      </li>
    </ol>
  </li>
  <li>
    <ol>
      <li>
        <p class="conversation">il en est qui, par la vertu de leur prière et l'efficacité de la puissance qu'ils ont reçue, sont capables de mettre en fuite les esprits malins: ils sont avec les Puissances; </p>
      </li>
      <li>
        <p class="conversation">il en est qui, par les vertus qu'ils ont reçues, transcendent les mérites des élus et sont les princes des élus leurs frères: ils partagent le mérite des Principautés; </p>
      </li>
      <li>
        <p class="conversation">il en est qui, en eux, dominent tous les vices, en sorte que ce privilège de pureté leur vaut le nom de dieux parmi les hommes; aussi est-il dit à Moïse: </p>
        <p class="conversation">Voici que je t'ai établi comme le dieu de Pharaon <a href="https://www.aelf.org/bible/Ex/7" title="https://www.aelf.org/bible/Ex/7">(Exode 7, 1.)</a>; </p>
        <p>ceux-ci sont avec les Dominations.</p>
      </li>
    </ol>
  </li>
  <li>
    <ol>
      <li>
        <p class="conversation">il en est en qui le Seigneur préside comme sur son trône pour juger, les actions des autres, et ce sont eux qui, en dirigeant la sainte Église, ont généralement à juger de la faiblesse des actes des autres élus: ils sont avec les Trônes; </p>
      </li>
      <li>
        <p class="conversation">il en est qui, plus que les autres, sont remplis de l'amour de Dieu et du prochain, et leurs mérites leur valent de figurer au nombre des chérubins, car «chérubin» signifie «plenitude de la science »; or d'après Paul, la plénitude de la loi, c'est l'amour <a href="https://www.aelf.org/bible/Rm/13" title="https://www.aelf.org/bible/Rm/13">(Romains 13, 10.)</a>; </p>
      </li>
      <li>
        <p class="conversation">il en est qui, embrasés par l'amour de la contemplation suprême, n'aspirent qu'à rejoindre leur créateur, ne désirent plus rien en ce monde, se nourrissent du seul amour de l'éternité, rejettent toute préoccupation terrestre, transcendent en esprit tout ce qui est éphémère, aiment et brûlent, et trouvent le repos dans cet embrasement même, brûlent en aimant, enflamment en parlant, et, dès qu'ils s'adressent à quelqu'un, le font aussitôt brûler d'amour pour Dieu: ceux-là ne peuvent avoir été appelés qu'au nombre des Séraphins».</p>
      </li>
    </ol>
  </li>
</ol>
<p>Voilà ce que dit <a href="https://www.aelf.org/bible/Ex/23" title="https://www.aelf.org/bible/Ex/23" id="gregoire2">Grégoire</a>.</p>

<h4 id="anges-guides" class="red">parce que les anges portent nos âmes vers le ciel</h4>

<p>Quatrièmement, nous devons honorer les anges parce qu'ils portent nos âmes vers le ciel; et ils le font de trois manières:</p>
<ol>
  <li>
    <p>premièrement, en leur préparant la voie, selon Malachie: </p>
    <p class="conversation">«Voici que j'enverrai mon ange, qui préparera ma voie devant ta face» <a href="https://www.aelf.org/bible/Ml/3" title="https://www.aelf.org/bible/Ml/3">(Malachie 3, 1.)</a>;</p>
  </li>
  <li>
    <p>deuxièmement, en les portant au ciel sur la voie qu'ils ont préparée, selon le livre de l'Exode: </p>
    <p class="conversation">«Voici que j'enverrai mon ange, qui te gardera en route et t'introduira dans la terre que j'ai promise à tes pères» <a href="https://www.aelf.org/bible/Ex/23" title="https://www.aelf.org/bible/Ex/23">(Exode 23, 20.)</a>;</p>
  </li>
  <li>
    <p>troisièmement, en les plaçant dans le ciel, selon Luc: </p>
    <p class="conversation">«Il se fit que le mendiant mourut et qu'il fut porté par un ange dans le sein d'Abraham» <a href="https://www.aelf.org/bible/Lc/16" title="https://www.aelf.org/bible/Lc/16">(Luc 16, 22.)</a>.</p>
  </li>
</ol>

<h4 id="anges-intercesseurs" class="red">Parce que les anges sont les ambassadeurs de nos prières auprès de Dieu</h4>

<p>Cinquièmement, nous devons honorer les anges parce qu'ils sont les ambassadeurs de nos prières auprès de Dieu.</p>
<ol>
  <li>
    <p>Premièrement, ils présentent nos prières à Dieu, selon Tobie: </p>
    <p class="conversation">«Quand tu priais en versant des larmes et que tu enterrait tes morts, j'ai présenté ta prière au Seigneur» <a href="https://www.aelf.org/bible/Tb/12" title="https://www.aelf.org/bible/Tb/12">(Tobie 12, 12.)</a>;</p>
  </li>
  <li>
    <p>deuxièmement, ils interviennent pour nous, selon Job: </p>
    <p class="conversation">«S'il se trouve un seul ange parmi ses semblables pour proclamer l'équité d'un bomme, Dieu aura pitié de lui» <a href="https://www.aelf.org/bible/Jb/33" title="https://www.aelf.org/bible/Jb/33">(Job 33, 23-24.)</a>, </p>
    <p>et selon Zacharie: </p>
    <p class="conversation">«L'ange du Seigneur répondit en disant: «Seigneur des armées, jusqu'à quand refusera-tu ta pitié à Jérusalem et aux villes de Juda, contre lesquelles tu es irrité? Voici déjà la soixante-dixième année» <a href="https://www.aelf.org/bible/Za/1" title="https://www.aelf.org/bible/Za/1">(Zacharie 1, 12.)</a>;</p>
  </li>
  <li>
    <p>troisièmement, ils viennent nous annoncer la sentence divine, selon Daniel, où il est dit que Gabriel vola vers Daniel et dit: </p>
    <p class="conversation">«Dès le début de ta prière, cette parole s'est fait entendre» (Glose: «C'est la sentence de Dieu »); et il poursuivit: «Et je suis venu pour t'instruire, car tu es un homme rempli de désirs» <a href="https://www.aelf.org/bible/Dn/9" title="https://www.aelf.org/bible/Dn/9">(Daniel 9, 23.)</a>.</p>
  </li>
</ol>
<p>De ces trois fonctions, Bernard dit dans son commentaire sur le Cantique des cantiques: </p>
<p class="conversation">«L’ange court du bien-aimé à la bien-aimée, présentant les demandes, rapportant les présents, enflammant celle-ci et apaisant celui-là».</p>

<h4 id="anges-chevaliers" class="red">parce que les anges sont les plus nobles soldats du Roi éternel</h4>

<p>Sixièmement, nous devons honorer les anges parce qu'ils sont les plus nobles soldats du Roi éternel, à ce գue dit Job: </p>
<p class="conversation">«Peut-on compter le nombre de ses soldats?» <a href="https://www.aelf.org/bible/Jb/25" title="https://www.aelf.org/bible/Jb/25">(Job 25, 3)</a>. </p>
<p><Et tout comme, parmi les soldats d'un roi, </p>
<ol>
  <li>
    <p>nous en voyons certains demeurer à la Cour, accompagner le roi, chanter pour le glorifier ou le distraire, </p>
  </li>
  <li>
    <p>tandis que d'autres gardent ses cités et ses châteaux, </p>
  </li>
  <li>
    <p>ou bien que d'autres repoussent ses ennemis, </p>
  </li>
</ol>
<ol>
  <li>
    <p>de même parmi ces soldats du Christ certains restent toujours à la cour — c'est-à-dire dans l'empyrée — toujours aux côtés du Roi des rois, et toujours chantent des cantiques de joie et de louange, en disant: </p>
    <p class="conversation">«Saint, saint, trois fois saint <a href="https://www.aelf.org/bible/Is/6" title="https://www.aelf.org/bible/Is/6">(Isaie 6, 3.)</a>...», </p>
    <p>et: </p>
    <p class="conversation">«Bénédiction, clarté, sagesse <a href="https://www.aelf.org/bible/Ap/7" title="https://www.aelf.org/bible/Ap/7">(Apocalypse 7, 12.)</a>...»; </p>
  </li>
  <li>
    <p>d'autres gardent cités, faubourgs, villages, domaines et châteaux: ce sont eux qui ont été préposés à notre garde, qui protègent la condition des vierges, des continents, des époux, et les demeures des hommes de Dieu, selon Isaïe <a href="https://www.aelf.org/bible/Is/62" title="https://www.aelf.org/bible/Is/62">(Isaïe 62, 6.)</a>: </p>
    <p class="conversation">«Sur les murs, Jérusalem, j'ai établi des gardes; </p>
  </li>
  <li>
    <p>d'autres repoussent les ennemis de Dieu, c'est-à-dire les démons», </p>
    <p>selon l'Apocalypse: </p>
    <p class="conversation">«Et il se fit un combat dans le ciel», </p>
    <p>c'est-à-dire, d'après un commentaire, dans l'Eglise militante, Michel et ses anges combattaient le dragon <a href="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/apocalypse#bataille" title="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/apocalypse#bataille">(Apocalypse 12,7.)</a>.</p>
  </li>
</ol>

<h4 id="anges-consolateurs" class="red">parce que les anges nous consolent dans nos tribulations></h4>

<p>Septièmement, enfin, nous devons honorer les anges parce qu'ils nous consolent dans nos tribulations, selon Zacharie: </p>
<p class="conversation">«L'ange qui m'adressait de bonnes et consolantes paroles» <a href="https://www.aelf.org/bible/Za/1" title="https://www.aelf.org/bible/Za/1">(Zacharie 1, 13.)</a>, </p>
<p>et Tobie: </p>
<p class="conversation">«Ayez bon courage» (Tobie 5, 13.)...</p>
<p>Et ils le font de trois façons:</p>
<ol>
  <li>
    <p>d'abord en nous donnant force et vigueur, selon Daniel, où, alors que Daniel était tombé, l'ange le toucha et lui dit: </p>
    <p class="conversation">«N'aie pas peur, la paix soit avec toi, reprends force et sois vigoureux!» <a href="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs" title="https://francois-vidit.com/docs/fr/mont-saint-michel/arch-michel/autre-docs">(Daniel 10, 19.)</a>;</p>
  </li>
  <li>
    <p>deuxièmement, en nous préservant du manque d'endurance, selon les Psaumes: </p>
    <p class="conversation">«Dieu posa des questions à ses anges sur toi!…
    Ils te porteront dans leurs bras…» <a href="https://www.aelf.org/bible/Ps/90" title="https://www.aelf.org/bible/Ps/90">(Psaumes 90, 11-12.)</a>;</p>
  </li>
  <li>
    <p>troisièmement, en adoucissant et en diminuant nos tribulations, ce qui est signifié dans Daniel, où l'ange du Seigneur, descendant dans la fournaise avec les trois enfants fit se lever au milieu d'elle comme «un souffe de rosée» <a href="https://www.aelf.org/bible/Dn/3" title="https://www.aelf.org/bible/Dn/3">(Daniel 3, 50.)</a>.</p>
  </li>
</ol>

<footer>
  <p><span style="color: #b52b27;">Jacques De Voragine, <cite>La Légende Dorée</cite>, chapître 141.</span></p>
</footer>


<aside>

<h3 id="notes" class="red">Notes</h3>

<h4 id="note_moise" class="red notes">ascension de Moïse</h4>
  <div class="notices red">
    <p>Le récit intitulé «Ascension de Moïse» est un texte apocryphe du <abbr title="premier">1<sup>er</sup></abbr> siècle <abbr title="après Jésus-Christ">ap. J.-C.</abbr>; la lettre de Jude a parfois elle aussi été considérée comme apocryphe.</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#moise" title="ascension de Moïse">Il a disputé le corps de Moïse ↩</a></p>
</footer>

<h4 id="note_israel" class="red notes">patron d'Israël, défenseur des milices célestes</h4>
  <div class="notices red">
    <p>Michel est mentionné comme le patron d'Israël en Daniel 12, 1, et dans Apocalypse chapître 12, verset 7 il est le défenseur des milices célestes.</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#israel" title="patron d'Israël, défenseur des milices célestes">Il fut jadis prince de la Synagogue ↩</a></p>
</footer>

<h4 id="note_extrapolation" class="red notes">extrapolation de Jacques de Voragine</h4>
<div class="notices red">
  <p>Jacques de Voragine identifie Michel avec l'ange du Seigneur dont parle Exode chapître 23, versets 20 à 23. et qui a joué un rôle dans les sept plaies d'Égypte (Exode chapître 7 à 12) et dans la traversée de la mer Rouge (Exode chapître 14), mais Le livre de l'Exode ne le mentionne pas explicitement.</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#extrapolation" title="extrapolation de Jacques de Voragine">lui qui a répandu les plaies sur l'Égypte ↩</a></p>
</footer>

<h4 id="note_tumba" class="red notes">Mont Tumba</h4>
  <div class="notices red">
    <p>Il s'agit bien sûr du Mont-Saint-Michel.</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#tumba" title="Mont Tumba">Au lieu dit La Tombe ↩</a></p>
</footer>

<h4 id="note_calendes" class="red notes">date des calendes de novembre</h4>
  <div class="notices red">
    <p>Le <time datetime="10-16">16 octobre (dix-septième jour des calendes de novembre)</time> est la date de la dédicace de l'église du Mont-Saint-Michel.</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#calendes" title="date des calendes de novembre">le dix-septième jour des calendes de novembre ↩</a></p>
</footer>

<h4 id="note_denis" class="red notes">Pseudo-Denis</h4>
  <div class="notices red">
    <p>Il s'agit du Pseudo-Denis, auteur de De Hierarchia.</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#denis" title="Pseudo-Denis¹">selon la répartition de Denis ↩</a></p>
  <p>Revenir au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#denis2" title="Pseudo-Denis²">Pour la répartition des ordres de la première hiérarchie ↩</a></p>
</footer>

<h4 id="note_gregoire" class="red notes">Grégoire le Grand</h4>
  <div class="notices red">
    <p><a href="https://fr.wikipedia.org/wiki/Grégoire_Ier" title="https://fr.wikipedia.org/wiki/Grégoire_Ier">Grégoire <abbr title="premier">I<sup>er</sup><abbr>, dit le Grand</a>, auteur des Dialogues (né vers <time datetime="540">540</time>, mort le <time datetime="604-03-12">12 mars 604</time>), devient le <abbr title="soixante-quatre">64<sup>ème</sup></abbr> pape en <time datetime="590">590</time>.</p>
    <p>Docteur de l'Église, il est l'un des quatre Pères de l'Église d'Occident, avec saint Ambroise, saint Augustin et saint Jérôme. Son influence durant le Moyen Âge fut considérable.</p>
    <p>C'est en son honneur que, deux siècles après sa mort, le chant élaboré dans les abbayes du diocèse de Metz est appelé «chant grégorien» (sans que l'on sache avec certitude son rôle dans l'évolution et la diffusion du chant liturgique).</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#gregoire" title="Grégoire le Grand">Pour la répartition des ordres de la première hiérarchie ↩</a></p>
</footer>

<h4 id="note_bernard" class="red notes">Bernard de Clairvaux</h4>
  <div class="notices red">
    <p><a href="https://fr.wikipedia.org/wiki/Bernard_de_Clairvaux" title="Bernard de Clairvaux">Bernard de Fontaine, abbé de Clairvaux</a>, né en <time datetime="1090">1090</time> à Fontaine-lès-Dijon et mort le <time datetime="1153-08-20">20 août 1153</time> à l'abbaye de Clairvaux, est un moine bourguignon, réformateur de la vie religieuse catholique.</p>
    <p>Directeur de conscience et important promoteur de l'ordre cistercien (ou ordre de Cîteaux), il recherche l'amour du Christ par la mortification la plus dure. Bernard de Fontaine fait preuve, toute sa vie, d'une activité inlassable pour instruire ses moines de Clairvaux, pour émouvoir et entraîner les foules, pour allier son ordre avec la papauté et pour élaborer un dogme militant que son ordre et toute l'Église catholique mettront en œuvre.</p>
    <p>C'est aussi un conservateur, qui fustige les mutations de son époque (la «Renaissance du <abbr title="douzième">XII<sup>ème</sup></abbr> siècle»), marquée par une profonde transformation de l'économie, de la société et du pouvoir politique.</p>
    <p>Mort en <time datetime="1153">1153</time>, il est canonisé dès <time datetime="1175">1174</time> et devient ainsi saint Bernard de Clairvaux. Il est déclaré Docteur de l'Église catholique en <time datetime="1830">1830</time> par le pape Pie <abbr title="huit">VIII</abbr>.</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#bernard" title="Bernard de Clairvaux">Pour la répartition des ordres de la première hiérarchie ↩</a></p>
</footer>

<h4 id="note_histoiretripartite" class="red notes">Histoire tripartite</h4>
  <div class="notices red">
    <p>chronique ecclésiastique de Constantin à Théodose <abbr title="deux">II</abbr> (<time datetime="313">313</time> à <time datetime="439">439</time>) en quatre livres, dans laquelle Théodore reprend les œuvres de trois historiens du <abbr title="cinquième">V<sup>ème</sup></abbr> siècle, Socrate le Scolastique, Sozomène et Théodoret de Cyr, avec notes et comparaisons. Elle a été partiellement traduite en latin en <time datetime="560">560</time> par le moine Épiphane à la demande de Cassiodore. Certaines parties sont assez fidèles, tandis que d'autres sont une adaptation libre.</p>
  </div>
<footer>
  <p class="puce">retour au texte: <a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#histoiretripartite" title="Histoire tripartite">Histoire tripartite ↩</a></p>
</footer>

<h4 id="note_haymon" class="red notes">Haymon</h4>
  <div class="notices red">
    <p><a href="https://fr.wikipedia.org/wiki/Haymon_d'Halberstadt" title="https://fr.wikipedia.org/wiki/Haymon_d'Halberstadt">Haymon d'Halberstadt</a>, dit aussi Haymon de Fulda (en latin: «Haimo Halberstatensis»), est un moine bénédictin, puis évêque, de l'époque carolingienne, né vers <time datetime="780">780</time>, mort le <time datetime="853-03-26">26 mars 853<time datetime="780">.</p>
  </div>
<footer>
  <p class="puce">retour au texte:<a href="/docs/fr/mont-saint-michel/arch-michel/legende-doree#haymon" title="Haymon">↩</a></p>
</footer>

</aside>

</article>

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