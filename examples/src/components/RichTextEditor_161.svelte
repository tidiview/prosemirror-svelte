<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:129 EN:192  -->
<article>

<hgroup>
  <h1 class="yellow">Phaéton</h1>
  <h2 class="yellow">et le Bassin d'Apollon</h2>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon_700x556.webp 700w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/02.jardins/02.phaeton/apollon_700x556.jpg" alt="Le Char du Soleil, conduit par Apollon, Bassin du Char d'Apollon, Jardins du Palais de Versailles" title="Le Char du Soleil, conduit par Apollon, Bassin du Char d'Apollon, Jardins du Palais de Versailles" class="class-diane-img" width="700" height="556" loading="eager" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-380.jpg 380w, 
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-480.jpg 480w, 
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon_700x556.jpg 700w"></picture><figcaption>Le Char du Soleil, conduit par Apollon, émerge d'Océan à l'aurore<br><q cite="#apollon">D'or en était l'essieu, d'or la flèche, d'or le tour des hautes roues, et d'argent l'ensemble des rayons</q>, <cite>Les Métamorphoses</cite>, Livre <abbr title="deux">II</abbr>, vers 107 à 108 </figcaption>
</figure>

<div class="notices yellow">
<p><a href="https://fr.wikipedia.org/wiki/Louis_XIV" title="https://fr.wikipedia.org/wiki/Louis XIV">Louis <abbr title="quatorze">XIV</abbr></a> est aussi appelé le «roi Soleil».</p>
<p>Dans les <cite>Mémoires pour l'instruction du Dauphin</cite>, lui-même explique les raisons qui l'ont conduit, jeune, seul, à faire naturellement ce choix.</p>
<p>Au Château de Versailles, le soleil est visible sous bien des formes.</p>
<p>Parmi elles, plusieurs endroits font apparaître la figure d'<a href="https://fr.wikipedia.org/wiki/Apollon" title="https://fr.wikipedia.org/wiki/Apollon">Apollon</a>, dieu du Soleil, qui évoque la grandeur de l'empire romain, notamment celle des premières fêtes baroques qui ont eu lieu à Versailles, comme le groupe du Char du Soleil fondu par <a href="https://fr.wikipedia.org/wiki/Jean-Baptiste_Tuby" title="https://fr.wikipedia.org/wiki/Jean-Baptiste TUBY">Jean-Baptiste TUBY</a> entre <time datetime="1668">1668</time> et <time datetime="1671">1671</time> au centre du <a href="https://fr.wikipedia.org/wiki/Bassin_d'Apollon" title="https://fr.wikipedia.org/wiki/Bassin d'Apollon">Bassin d'Apollon</a> dans les Jardins.</p>
<p>Le texte ci-dessous raconte la tragique mort de l'étrange fils d'Apollon, <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Phaéton</a>, tel qu'il apparaît dans le livre <abbr title="deux">II</abbr> des <a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)"><cite>Métamorphoses</cite></a> de l'écrivain de l'empire romain d'expression latine <a href="https://fr.wikipedia.org/wiki/Phaéton" title="https://fr.wikipedia.org/wiki/Phaéton">Ovide</a>, que Louis <abbr title="quatorze">XIV</abbr> connaissait intimement pour avoir chargé le soir son historiographe l'écrivain <a href="https://fr.wikipedia.org/wiki/Jean_Racine" title="https://fr.wikipedia.org/wiki/Jean Racine">Jean Racine</a> de lui en faire lecture.</p>
<p>C'est ainsi l'occasion d'approcher le sens que pouvait revêtir pour Louis <abbr title="quatorze">XIV</abbr> la figure de cet astre tel que le décrit ce texte.</p>
</div>

<section id="apollon">
<h2 class="yellow">Phaéton selon le texte du Livre <abbr title="deux">II</abbr> des <cite>Métamorphoses</cite></h2>

<h3 class="yellow">Le Palais du Soleil</h3>

<ol class="doc">
  <li value="01">Le Palais du Soleil aux hautes colonnes se dressait<br>
  Dans la splendeur rutilante de l'or et des flamboiements du pyrope;<br>
  Son toit était couvert d'ivoire luminescent,</li>
  <li>Ses portes à double battant diffractaient une lumière argentée:</li>
  <li value="5">Matériau rehaussé par un travail d'artiste car Mulciber</li>
  <li>Y avait gravé les mers qui entourent l'ensemble des terres,</li>
  <li>Le monde et le ciel qui s'étend au-dessus du monde.</li>
  <li>On y voit l'eau et ses divinités bleues, l'harmonieux Triton,</li>
  <li value="10">L'ondoyant Protée, Ægæon domptant de ses seuls bras</li>
  <li>Les baleines aux dos énormes, et Doris en compagnie de ses filles,</li>
  <li>Les unes en train de nager, les autres assises sur un rocher</li>
  <li>Faisant sécher leurs cheveux verts, d'autres encore</li>
  <li>Chevauchant des poissons; n'ayant pas toutes même visage</li>
  <li>Mais pas dissemblables non plus, ainsi qu'il convient à des sœurs.</li>
  <li>La terre contient les hommes et les villes, les forêts et leurs animaux,</li>
  <li value="15">Les fleuves et leurs nymphes, et toutes les divinités champêtres</li>
  <li>Au-dessus sont représentées un ciel sillonné d'éclairs et, sur chaque battant,</li>
  <li>Les signes du Zodiaque: six à droite, six à gauche.</li>
</ol>

<h3 class="yellow">Phaéton devant Phœbus</h3>

<ol class="doc">
  <li value="19">Sitôt que le fils de Clyméné eut gravi le sentier qui y mène</li>
  <li value="20">Et fut entré sous le toit du père dont il doutait, sans hésiter</li>
  <li>Il s'avança et fit face à ce père; mais il s'arrêta</li>
  <li>À quelques distance, ne pouvant, de plus près, soutenir</li>
  <li>L'éclat de ses yeux. Revêtu d'un manteau de pourpre, Phœbus</li>
  <li>Était assis sur un trône resplendissant de pures émeraudes.</li>
  <li value="25">À sa droite et à sa gauche étaient placés le Jour, le Mois, l'Année,</li>
  <li>Les Siècles et, régulièrement espacées, les Heures,</li>
  <li>Il y avait là le Printemps nouveau, couronnée de fleurs,</li>
  <li>Il y avait l'Été nu, portant des guirlandes d'épis,</li>
  <li>Et il y avait aussi l'Automne, éclaboussé de raisins piétinés,</li>
  <li value="30">Et le glacial Hiver aux cheveux blancs hirsutes.</li>

  <li class="top-space">De sa position centrale, le Soleil, dont les yeux perçoivent toutes choses,</li>
  <li>Vit le trouble du jeune homme devant cette étrangeté et lui dit:</li>
  <li>
    <p class="conversation">« Quelle est la raison de ta venue? Que cherches-tu sur ces hauteurs?</p>
  </li>
  <li>
    <p class="conversation"><mark>Phaéton</mark> mon enfant, toi que ton père ne saurait renier?»</p>
  </li>
  <li value="35">Celui-ci répondit:</li>
  <li>
    <p class="conversation">«Ô lumière du monde, commune à l'immensité,</p>
  </li>
  <li>
    <p class="conversation">Phœbus mon père, si tu me permets d'utiliser ce nom,</p>
  </li>
  <li>
    <p class="conversation">Et si Clyméné ne dissimule point sa faute sous un mensonge,</p>
  </li>
  <li>
    <p class="conversation">prouve-moi, mon géniteur, de façon irréfutable que je suis bien</p>
  </li>
  <li>
    <p class="conversation">De ta lignée et délivre mon esprit de ce doute.»</p>
  </li>

  <li value="40" class="top-space">À ces mots, le père se débarrassa de ces rayons éblouissants</li>
  <li>Qui couronnaient sa tête et lui ordonna d'approcher</li>
  <li>Puis, l'ayant serré dans ses bras, lui dit:
    <p class="conversation">«Tu n'as pas mérité</p>
  </li>
  <li>
    <p class="conversation">Que je te renie, et Clyméné t'a dit la vérité sur ta naissance;</p>
  </li>
  <li value="45">
    <p class="conversation">Je suis prêt à te l'accorder: et je prends à témoin de cette promesse</p>
  </li>
  <li><p class="conversation">Le marais, inconnu à mes yeux, sur lequel les dieux prêtent serment»</p>
  </li>
  <li>À peine avait-il achevé que le garçon demanda le char de son père</li>
  <li>Et le droit d'être durant un jour, le conducteur des chevaux aux pieds ailés.</li>
  <li>Le père regretta son serment et dit en secouant trois, quatre fois</li>
  <li value="50">Sa tête auréolée de lumière:
    <p class="conversation">«Tes paroles ont rendu les miennes</p>
  </li>
  <li>
    <p class="conversation">Téméraires. Ah, si je pouvais ne pas tenir cette promesse;</p>
  </li>
  <li>
    <p class="conversation">C'est bien la seule chose, mon enfant, que je te refuserais.</p>
  </li>
  <li>
    <p class="conversation">Mais je puis te dissuader: ce que tu veux n'est pas sans risque;</p>
  </li>
  <li>
    <p class="conversation">C'est une grande faveur, <mark>Phaéton</mark>, que tu réclames,</p>
  </li>
  <li value="55">
    <p class="conversation">Ton sort est celui d'un mortel, mais ton désir d'un immortel;</p>
  </li>
  <li>
    <p class="conversation">Inconscient, tu ambitionnes plus que ce à quoi les dieux mêmes</p>
  </li>
  <li>
    <p class="conversation">Peuvent prétendre; ils peuvent tous être très contents d'eux</p>
  </li>
  <li>
    <p class="conversation">Mais aucun n'a la force de monter sur le char de feu,</p>
  </li>
  <li value="60">
    <p class="conversation">Moi excepté; même le maître de l'immense Olympe</p>
  </li>
  <li>
    <p class="conversation">Qui, inplacable, lance la foudre d'une main terrible,</p>
  </li>
  <li>
    <p class="conversation">Ne saurait conduire mon char; Et y a-t-il plus grand que Jupiter?</p>
  </li>

  <li class="top-space">
    <p class="conversation">La première partie du chemin est difficile et mes chevaux,</p>
  </li>
  <li>
    <p class="conversation">Quoique frais le matin, ont du mal à la franchir; la partie médiane</p>
  </li>
  <li value="65">
    <p class="conversation">Est si haute dans le ciel qu'il m'arrive souvent de frémir,</p>
  </li>
  <li>
    <p class="conversation">À voir de là-haut terres et mers, et que mon cœur, saisi d'effroi, palpite;</p>
  </li>
  <li>
    <p class="conversation">La dernière partie est en pente et exige une conduite sûre:</p>
  </li>
  <li>
    <p class="conversation">Même alors Théthys qui me reçoit dans ses eaux toutes proches</p>
  </li>
  <li>
    <p class="conversation">Redoute constamment que je n'y sois précipité.</p>
  </li>
  <li value="70">
    <p class="conversation">Ajoute à cela que le ciel est pris d'un tournoiement constant,</p>
  </li>
  <li>
    <p class="conversation">Qu'il y entraine les étoiles lointaines et que leur rotation est vertigineuse.</p>
  </li>
  <li>
    <p class="conversation">Je lutte en sens contraire et cette pression n'a pas raison de moi</p>
  </li>
  <li>
    <p class="conversation">Comme des autres astres et je m'élance contre cette impérieuse révolution.</p>
  </li>
  <li>
    <p class="conversation">Suppose que je te donne mon char: que feras-tu? Pourras-tu affronter</p>
  </li>
  <li value="75">
    <p class="conversation">Les pôles tournant sur eux-mêmes sans être emporté par leur giration?</p>
  </li>
  <li>
    <p class="conversation">Peut-être t'imagines-tu qu'il y a là-haut des bois, des cités</p>
  </li>
  <li>
    <p class="conversation">Divines et des sanctuaires emplis d'offrandes: en fait, il faut</p>
  </li>
  <li>
    <p class="conversation">Passer à travers milles embûches et figures farouches</p>
  </li>
  <li>
    <p class="conversation">Et, même si tu gardes le cap sans te laisser égarer,</p>
  </li>
  <li value="80">
    <p class="conversation">Tu trouveras face à toi, sur ta route, les cornes du Taureau,</p>
  </li>
  <li>
    <p class="conversation">L'arc du Sagittaire, les puissantes mâchoire du Lion,</p>
  </li>
  <li>
    <p class="conversation">Le Scorpion dont les pinces redoutables se ferment sur un vaste</p>
  </li>
  <li>
    <p class="conversation">Espace et le Cancer qui courbe ses pinces différemment.</p>
  </li>
  <li>
    <p class="conversation">Et quant à mes chevaux impétueux, qui ont au cœur un feu</p>
  </li>
  <li value="85">
    <p class="conversation">Qu'ils soufflent par la gueule et les naseaux, il n'est pas facile</p>
  </li>
  <li>
    <p class="conversation">Pour toi de les conduire; à peine me supportent-ils quand leur violente</p>
  </li>
  <li>
    <p class="conversation">Ardeur s'échauffe, quand leur encolure refuse les rênes.</p>
  </li>
  <li>
    <p class="conversation">Mais toi, mon fils, prends garde que je ne sois responsable à ton égard</p>
  </li>
  <li>
    <p class="conversation">D'une faveur funeste et, pendant qu'il est temps, modifie ton souhait.</p>
  </li>

  <li value="90" class="top-space">
    <p class="conversation">Apparemment, pour te convaincre que tu es bien né de mon sang,</p>
  </li>
  <li>
    <p class="conversation">Tu réclames des preuves irréfutables? Je te les donnes par mes craintes</p>
  </li>
  <li>
    <p class="conversation">Et cette inquiétude paternelle prouve assez que je suis ton père.</p>
  </li>
  <li>
    <p class="conversation">Regardes-moi en face: ah! si tes yeux pouvaient plonger jusqu'au fond</p>
  </li>
  <li>
    <p class="conversation">De mon cœur pour y saisir le souci que ton père a de toi!</p>
  </li>
  <li value="95">
    <p class="conversation">Pense enfin à toutes les richesses que possède le monde</p>
  </li>
  <li>
    <p class="conversation">Et parmi tous les biens du ciel, de la terre et des mers, demande-moi</p>
  </li>
  <li>
    <p class="conversation">Celui que tu voudras: n'aies crainte, je ne te refuserai rien.</p>
  </li>
  <li>
    <p class="conversation">Je n'écarte qu'une chose qui est, à vrai dire, une peine,</p>
  </li>
  <li>
    <p class="conversation">Non un honneur; car la faveur que tu réclames, <mark>Phaéton</mark>, est une peine.</p>
  </li>
  <li value="100">
    <p class="conversation">Pourquoi mettre tes bras câlins autour de mon cou, fou que tu es?</p>
  </li>
  <li>
    <p class="conversation">N'en doute pas, n'importe lequel de tes vœux (je l'ai juré par les eaux du Stix)</p>
  </li>
  <li>
    <p class="conversation">Te sera accordé; mais fais un vœu plus raisonnable.»</p>
  </li>
  <li>Sa mise en garde était finie et, cependant, rétif à ses paroles,</li>

  <li class="top-space">Le jeune homme s'entêta dans son projet: l'envie de ce char le brûlait.</li>
  <li value="105">Alors son père, après avoir temportisé autant qu'il lui était possible,</li>
  <li>Le conduisit vers le char majestueux, cadeau de Vulcain.</li>
  <li value="107">D'or en était l'essieu, d'or la flèche, d'or le tour</li>
  <li>Des hautes roues, et d'argent l'ensemble des rayons;</li>
  <li>Des topazes et des pierreries régulièrement disposées sur tout l'attelage</li>

  <li value="110" class="top-space">Dans lequel Phœbus se réfléchissait lui renvoyaient une lumière intense.</li>
  <li>Et tandis que le noble <mark>Phaéton</mark>, examinant tout cela, admire</li>
  <li>L'ouvrage, voici que dans l'éclat du levant l'Aurore vigilante</li>
  <li>Montre ses portes rougeoyantes et ses entrées couvertes de roses;</li>
  <li>Disparaissent les étoiles dont Lucifer hâte la marche,</li>
  <li value="115">Quittant le dernier le poste céleste.</li>
  <li>Dès qu'il le voit atteindre la terre, voit le firmanment s'empourprer</li>
  <li>Et comme s'évanouir le bout des cornes de la lune,</li>

  <li class="top-space">Le Titan commande aux Heures prestes d'atteler ses chevaux.</li>
  <li>Les déesses exécutent ses ordres avec célérité: elles amènent</li>
  <li>Des vastes écuries les coursiers qui crachent le feu,</li>
  <li value="120">Rassasiés d'ambroisie, et, dans un cliquetis, leur placent le mors.</li>
  <li>Alors, le père enduit le visage de son fils d'un onguent sacré</li>
  <li>Pour lui permettre de résister à la violence des flammes,</li>
  <li>Il nimbe de rayons sa chevelure et, le cœur lourd,</li>
  <li value="125">Après maints soupirs qui laissent présager son deuil, lui dit:</li>
  <li>
    <p class="conversation">«Si tu peux au moins suivre ces derniers conseils de ton père,</p>
  </li>
  <li>
    <p class="conversation">Ne te sers pas du fouet, mon enfant, et tiens fermement les rênes;</p>
  </li>
  <li>
    <p class="conversation">Les chevaux ont tendance à accélérer; la difficulté est de maîtriser leur élan.</p>
  </li>
  <li>
    <p class="conversation">Et ne choisis pas la route droite qui coupe les cinq zones,</p>
  </li>
  <li value="130">
    <p class="conversation">Il existe un passage qui les prend à l'oblique par une large courbe</p>
  </li>
  <li>
    <p class="conversation">Et qui, se limitant à trois de ses zones, évite le pôle Sud</p>
  </li>
  <li>
    <p class="conversation">Ainsi que le pôle Nord voisin des Aquilons: c'est là ta route;</p>
  </li>
  <li>
    <p class="conversation">Tu y reconnaîtras nettement les traces de mes roues.</p>
  </li>
  <li>
    <p class="conversation">Afin que le ciel et la terre reçoivent une chaleur égale,</p>
  </li>
  <li value="135">
    <p class="conversation">Tu ne dois ni abaisser ton char ni le lancer vers les hauteurs de l'éther:</p>
  </li>
  <li>
    <p class="conversation">Si tu montes trop haut, tu incendieras les demeures célestes,</p>
  </li>
  <li>
    <p class="conversation">Si tu descend trop bas, les terres; le plus sûr est d'avancer au milieu.</p>
  </li>

  <li class="top-space">
    <p class="conversation">Trop à droite, tes roues risquent de dévier vers les anneaux du Serpent,</p>
  </li>
  <li>
    <p class="conversation">Et trop à gauche, vers les basses régions de l'Autel;</p>
  </li>
  <li value="140">
    <p class="conversation">Tiens-toi entre les deux; je te confie le reste à la Fortune</p>
  </li>
  <li>
    <p class="conversation">En souhaitant qu'elle t'assiste et prenne soin de toi mieux que toi-même.</p>
  </li>
  <li>
    <p class="conversation">Pendant que je parlais, la nuit humide a touché les limites</p>
  </li>
  <li>
    <p class="conversation">Qui bornent le rivage de l'Hespérie; nous ne pouvons plus tarder,</p>
  </li>
  <li>
    <p class="conversation">On nous appelle et, les ténèbres dissipées, l'Aurore point.</p>
  </li>
  <li value="145">
    <p class="conversation">Prends bien les rênes en main ou, si tu peux encore changer d'avis,</p>
  </li>
  <li>
    <p class="conversation">Fais usage de mes conseils plutôt que de mon char</p>
  </li>
  <li>
    <p class="conversation">Tant que cela t'est encore possible et que tu es debout sur un sol ferme,</p>
  </li>
  <li>
    <p class="conversation">Tant que tu ne fais pas corps, inconscient, avec le char de tes désirs fous.</p>
  </li>
  <li>
    <p class="conversation">Si tu veux contempler sans danger la lumière, laisse-moi la donner à la terre.»</p>
  </li>
</ol>

<h3 class="yellow">Le vol de Phaéton</h3>

<ol class="doc">
  <li value="150">Le garçon au corps juvénile grimpe sur le char léger et, debout,</li>
  <li>Tout joyeux de sentir dans ses mains le contact lisse des rênes,</li>
  <li>Remercie son père, qui a agi bien magré lui.</li>

  <li class="top-space">Pendant ce temps, les chevaux ailés du Soleil: Pirois, Eous, Æthon</li>
  <li>Et le quatrième, Phlégon, emplissent l'air de hennissements</li>
  <li value="155">Impétueux et piaffent contre les clôtures.</li>
  <li>Sitôt que Téthys, ignorant le destin de son petit-fils,</li>
  <li>A ouvert les barrières et que s'étend devant eux l'immensité du ciel,</li>
  <li>Ils dévorent l'espace et, battant l'air de leur pieds, déchirent</li>
  <li>les nuages sur leur passage; leurs ailes les emportent</li>
  <li value="160">Et leur font dépasser l'Eurus, né dans cette partie du monde.</li>
  <li>Mais le poids est insuffisant et les chevaux du Soleil ne peuvent</li>
  <li>S'y reconnaître car l'attelage n'a pas sa charge habituelle;</li>
  <li>De même que les bateaux dont la coque n'est pas suffisamment chargée</li>
  <li>Chavirent, déstabilisés par leur trop grande légèreté, et sont emportés</li>
  <li value="165">Par les flots, ainsi privé de son poids coutumier, le char</li>
  <li>Bondit vainement dans les airs et, profondément secoué, semble vide.</li>

  <li class="top-space">Dès que le quadrige sent cela, il s'emballe, délaisse la piste tracée</li>
  <li>Pour suivre une toute autre direction. Affolé, <mark>Phaéton</mark> ne sait</li>
  <li>De quel côté tirer les rênes à lui confiées, ni comment retrouver sa route,</li>
  <li value="170">Incapable, même s'il le savait, de maîtriser les chevaux.</li>
  <li>Alors, pour la première fois, sous l'effet des rayons, les Trions</li>
  <li>Des glaces deviennent brûlants et tentent en vain de plonger</li>
  <li>Dans la mer interdite, et le Serpent situé près du pôle glacial,</li>
  <li>Jusque-là engourdi par le froid sans effrayer personne,</li>
  <li value="175">S'enflamme et puise dans cette effervescence une fureur nouvelle.</li>
  <li>Toi aussi, Bouvier, on a dit qu'un trouble t'avait fait fuir</li>
  <li>En dépit de ta lenteur et du Chariot qui te retenait.</li>

  <li class="top-space">Lorsque l'infortuné <mark>Phaéton</mark>, du haut des airs, a vu la terre</li>
  <li>Qui s'étendait si bas, si bas au-dessous de lui,</li>
  <li value="180">Il a pali et l'angoisse a soudain fait trembler ses genoux;</li>
  <li>La lumière aveuglante a plongé ses yeux dans les ténèbres.</li>
  <li>Et voici qu'il voudrait n'avoir jamais touché aux chevaux paternels,</li>
  <li>Voici qu'il se repent d'avoir tant insisté pour connaître son origine,</li>
  <li>Voici que, dans sons désir d'être appelé fils de Mérops, il est tel un vaisseau</li>
  <li value="185">Emporté par les déchaînements de Borée et dont le pilote a lâché,</li>
  <li>Impuissant, le gouvernail, l'abandonnant aux dieux et aux prières,</li>
  <li>Que faire? Il laisse derrière lui une immense étendue de ciel,</li>
  <li>Devant ses yeux il en est une plus grande encore: il évalue les deux</li>
  <li>Et regarde alternativement le couchant devant lui - que le destin</li>
  <li value="190">Lui interdit d'atteindre - et, en arrière, le levant.</li>
  <li>Ne sachant comment réagir, il est paralysé, ne peut ni lacher</li>
  <li>Les rênes ni les retenir, et il ignore les noms des chevaux.</li>
  <li>Dans son affolement il voit, éparses çà et là dans le ciel,</li>
  <li>Des choses étonnantes et des figures d'animaux monstrueux.</li>
  <li>Il est un lieu où le Scorpion de ses deux pinces recourbées forme</li>
  <li value="195">Un arc et occupe, tordant queue et membres à la fois,</li>
  <li>L'espace de deux signes du Zodiaque.</li>
  <li>Lorsque l'enfant l'aperçoit, exsudant un venin moite et noir</li>
  <li>Et menaçant d'attaquer avec son dard crochu,</li>
  <li value="200">Il perd la tête et, glacé de terreur, lâche les rênes.</li>

  <li class="top-space">Dès qu'elles sont retombées et flottent sur leur croupe,</li>
  <li>Les chevaux que plus rien rien n'arrête s'élancent dans l'espace</li>
  <li>Sans savoir où ils vont, au gré de leur impétuosité,</li>
  <li>Galopent en tous sens et se jettent contre les étoiles accrochées à la voûte</li>
  <li value="205">du ciel, entraînant le char vers des lieux impraticables;</li>
  <li>parfois ils gagnent les hauteurs, et parfois des descentes</li>
  <li>Vertigineuses les emportent tout près de la terre.</li>
  <li>La lune regarde avec stupéfaction les chevaux de son frère courir</li>
  <li>Plus bas que les siens et des nuages roussis se dégage de la fumée.</li>
  <li value="210">La terre, aux endroits les plus élevés, est dévorée de flammes;</li>
  <li>Elle se fend, se lézarde et, privée de ses eaux, se dessèche;</li>
  <li>Le fourrrage jaunit, les arbres brûlent avec leurs feuilles</li>
  <li>Et les champs arides nourrissent leur propres dévastation.</li>
  <li>Mais ceci n'est rien: de grandes villes sont anéanties avec leurs murailles,</li>
  <li value="215">L'incendie réduit en cendres des contrées entières</li>
  <li>Avec leurs habitants; montagnes et forêts s'embrasent:</li>
  <li>S'embrasent l'Athos, le Taurus de Cilicie, le Tmolus et l'Œta,</li>
  <li>L'Ida jusqu'alors si riche en sources, maintenant asséché,</li>
  <li>Et l'Hélicon, séjour des Muses, et l'Hémus d'avant Œagre;</li>
  <li value="220">S'embrasent parallèlement et de façon démesurée l'Etna,</li>
  <li>Le Parnasse à double cime, l'Eryx, le Cynthe et l'Othrys</li>
  <li>Enfin le Rhodope dont les neiges fondent, le Mimas,</li>
  <li>Le Dindymes, le Mycale et le Cythéron, objet de culte.</li>
  <li>La Scythie n'est pas protégée par ses glaces; s'embrase le Caucase</li>
  <li value="225">Et puis l'Ossa et le Pinde et l'Olympe, plus élevé qu'eux,</li>
  <li>Et les Alpes aériennes et l'Apenin orageux.</li>

  <li class="top-space">Alors <mark>Phaéton</mark> regarde le monde incendié en toutes</li>
  <li>Ses parties et ne peut tenir contre une chaleur si violente;</li>
  <li>Sa bouche aspire un bouillonnement d'air comme sorti du fond</li>
  <li value="230">D'une fournaise et son char, il le sent, devient incandescent;</li>
  <li>Il ne supporte plus les projections de cendres et de poussière chaude,</li>
  <li>Une fumée brûlante l'enveloppe de tous côtés.</li>
  <li>Où va-t-il, où est-il, couvert d'une épaisse cousse de poix?</li>

  <li class="top-space">Il ne sait, et les chevaux ailés l'emportent à leur gré.</li>
  <li value="235">C'est de là, pense-t-on, que les peuples de l'Éthiopie tirent leur couleur</li>
  <li>Noire, le sang ayant afflué à la surface de leurs corps;</li>
  <li>De là que la Libye, privée d'humidité par la chaleur intense,</li>
  <li>Est devenue aride; de là que les nymphes aux cheveux épars</li>
  <li>Pleurèrent les fontaines et les lacs: la Béotie chercha en vain Dircé,</li>
  <li value="240">Argos Amymoné, Éphyre les eaux du Piréné.</li>
  <li>Et les fleuves dont les bords sont éloignés de ces lieux</li>
  <li>Ne sont pas mieux lotis: au milieu de leurs eaux fument le Tanaïs</li>
  <li>Et le vieux Pénée et le Caïque de Mysie</li>
  <li>Et le vif Isménus ainsi que l'Érymanthe qui baigne Phégia</li>
  <li value="245">Et le Xanthe -qui devait flamber une fois encore - et le blond Lycormas,</li>
  <li>Et le Méandre au cours sinueux et folâtre,</li>
  <li>Puis le Mélas de Phrygie et l'Eurotas de Laconie.</li>
  <li>Et flambe aussi l'Euphrate de Babylone, flambent l'Oronte</li>
  <li>Et le rapide Thermodon, le Gange, le Phase et l'Hister.</li>
  <li value="250">Bouillonne l'Alphée, flambent les rives du Sperchius,</li>
  <li>Et l'or que charrie le Tage dans ses eaux fond sous les flammes</li>
  <li>Et les oiseaux de rivière dont les chants célébraient les rives</li>
  <li>Méoniennes sont carbonises au milieu du Caÿstre.</li>
  <li>Le Nil épouvanté fuit jusqu'au bout du monde</li>
  <li value="255">Pour y cacher sa source, qui nous est encore inconnue; ses sept</li>
  <li>embouchures, taries, sont ensablées, ses sept vallées non irriguées.</li>

  <li class="top-space">Un même sort assèche l'Hèbre et le Strymon de Thrace</li>
  <li>Ainsi que le Rhin, le Rhône et le Pô d'Hespérie</li>
  <li>Et le Tibre, à qui fut promis l'empire du monde.</li>
  <li value="260">Partout le sol se fend et, par les fissures, la lumières pénètre</li>
  <li>Jusqu'au Tartare, effrayant le roi des Enfers et son épouse;</li>
  <li>Les mers se resserrent, et ce qui naguère était immensité liquide</li>
  <li>Devient plaine de sable sec, et les montagnes que recouvrait</li>
  <li>L'eau profonde émergent, multipliant les Cyclades disséminées.</li>
  <li>Les poissons gagnent les abysses et les dauphins ondoyants n'osent pas</li>
  <li value="265">Bondir dans les airs comme auparavant au-dessus des vagues;</li>
  <li>Des cadavres de phoques flottent sur le dos à la surface</li>
  <li>De l'eau; on raconte aussi que Nérée lui-même, ainsi que Doris</li>
  <li>Et ses filles, se cachèrent dans des gouffres devenus tièdes,</li>
  <li value="270">Que par trois fois Neptune, d'un air farouche, avait tenté de sortir de l'eau</li>
  <li>Ses bras, que par trois fois il ne put supporter l'air brûlant.</li>
  <li>Cependant, la Terre nourricière qui se trouvait entourée d'eaux -</li>
  <li>Qu'il s'agit de celles de la mer ou des sources partout raréfiées</li>
  <li>Qui se dissimulaient dans l'opacité des entrailles maternelles -,</li>

  <li value="275" class="top-space">La Terre aride présenta jusqu'au cou un visage accablé,</li>
  <li>Posa une main sur son front et, dans un grand tressaillement</li>
  <li>Qui ébranla toutes choses, s'affaissa quelque peu au-dessous</li>
  <li>De son niveau normal puis, de sa voix sacrée, parla en ces termes:</li>
  <li>
    <p class="conversation">«Si tu le veux ainsi, si je l'ai mérité, qu'attends-tu pour lancer ta foudre,</p>
  </li>
  <li value="280">
    <p class="conversation">Ô souverain des dieux? Si je dois périr par le feu, laisse-moi</p>
  </li>
  <li>
    <p class="conversation">Périr par le tien: que ton autorité diminue mon malheur.</p>
  </li>
  <li>
    <p class="conversation">Ma gorge a bien du mal à s'ouvrir pour dire ceci -la fumée l'étouffait-:</p>
  </li>
  <li>
    <p class="conversation">regarde donc mes cheveux calcinés,</p>
  </li>
  <li>
    <p class="conversation">Et dans mes yeux tant de cendres, et tant sur mon visage!</p>
  </li>
  <li value="285">
    <p class="conversation">Est-ce bien là ma récompense, est-ce l'honneur que tu accordes</p>
  </li>
  <li>
    <p class="conversation">À ma fertilité et mes bienfaits, moi qui supporte d'être blessée</p>
  </li>
  <li>
    <p class="conversation">Par le soc recourbé et la bêche, qui suis toute l'année malmenée,</p>
  </li>
  <li>
    <p class="conversation">Moi qui fournis le fourrage pour le bétail, des aliments sains, des céréales</p>
  </li>
  <li>
    <p class="conversation">Pour les humains et même de l'encens pour vous?</p>
  </li>

  <li value="290" class="top-space">
    <p class="conversation">Mais admettons que j'ai mérité cette ruine: qu'en est-il des eaux,</p>
  </li>
  <li>
    <p class="conversation">Qu'en est-il de ton frère? Pourquoi les mers qu'il reçut en partage</p>
  </li>
  <li>
    <p class="conversation">Décroissent-elles jusqu'à se retirer si loin des aires?</p>
  </li>
  <li>
    <p class="conversation">Si ni moi ni ton frère n'avons assez d'influence pour te toucher,</p>
  </li>
  <li>
    <p class="conversation">Aie au moins pitié de ton ciel; regarde les deux pôles:</p>
  </li>
  <li value="295">
    <p class="conversation">Ils fument l'un et l'autre; si le feu les altère,</p>
  </li>
  <li>
    <p class="conversation">Vos palais s'écrouleront. Vois comme Atlas souffre lui-même</p>
  </li>
  <li>
    <p class="conversation">Et, sur ses épaules, soutient avec peine le monde incandescent.</p>
  </li>
  <li>
    <p class="conversation">Si les flots, si les terres, si les royaumes célestes périssent,</p>
  </li>
  <li>
    <p class="conversation">Nous allons retomber dans l'antique chaos. Arrache aux flammes</p>
  </li>
  <li value="300">
    <p class="conversation">Ce qui peut l'être encore et veille au salut de l'univers.»</p>
  </li>

  <li class="top-space">La Terre se tut, ne pouvant plus longtemps supporter</li>
  <li>La fumée ni parler davantage, et sa tête rentra</li>
  <li>En elle-même, dans des lieux caverneux plus proches des ânes.</li>
  <li>Alors le père tout puissant, ayant convaincu les dieux - y compris</li>
  <li value="305">Celui qui a prêté son char - que s'il n'intervient pas tout va disparaître</li>
  <li>Sous le poids du destin, gagne le lieu le plus élevé de l'Empyrée</li>
  <li>D'où il a coutume de largement répandre les nuages sur les terres,</li>
  <li>D'où il déclenche le tonnerre, brandit et lance sa foudre;</li>
  <li>Mais il ne trouve, alors, aucune terre où répandre ses nuages,</li>
  <li value="310">Aucune pluie à faire tomber du ciel.</li>
  <li>Il tonne et, faisant osciller la foudre du côté de son oreille droite,</li>
  <li>L'envoie contre l'aurige, lui ôtant à la fois la vie et le char,</li>
  <li>Et bloque l'avancée du feu sous ses feux redoutables,</li>
  <li>Les chevaux sont pris de panique et, bondissant en sens contraire,</li>
  <li value="315">Arrachent le joug de leur cou, quittent l'atelage brisé.</li>
  <li>Les rênes gisent ici, là, l'essieu détaché de la flèche;</li>
  <li>Plus loin les rayons des roues déchiquetées et les restes</li>
  <li>Du char mis en pièces sont sur un large espace éparpillés.</li>

  <li class="top-space">Quant à <mark>Phaéton</mark>, la chevelure en feu dans l'incedie dévastateur,</li>
  <li value="320">Il tombe en tournoyant, suivi dans les airs d'une longue trainée</li>
  <li>Comme parfois une étoile filante dans un ciel serein</li>
  <li>Peut paraître tomber alors qu'il n'en est rien.</li>
  <li>Loin de sa patrie, à l'autre bout du monde, l'accueille</li>
  <li>Le grand Éridan qui baigne son visage fument.</li>
  <li value="325">Les Naïades de l'Hespérie enterrent son corps consumé</li>
  <li>Par trois langues de flammes et marquent la pierre</li>
  <li>De ces vers:</li>
  <li>
    <p class="conversation">«Ci-gît <mark>Phaéton</mark>, conducteur du char de son père;</p>
  </li>
  <li>
    <p class="conversation">S'il est vrai qu'il ne l'a pas retenu, c'est sa témérité qui l'a perdu.»</p>
  </li>

  <li class="top-space">De fait, son père, que cette mort a plongé dans la douleur,</li>
  <li value="330">S'est retiré en se voilant la face et, si l'on en croit la légende,</li>
  <li>Un jour entier s'est écoulé sans soleil; l'incendie, en éclairant</li>
  <li>Le monde, aura au moins, dans ce malheur, en larmes, éperdue et le sien</li>
  <li value="335">Déchiré, parcourut l'univers tout entier, à la recherche</li>
  <li>Du cadavre d'abord, puis de ses ossements, qu'elle finit</li>
  <li>Par découvrir mais enterrés sur une rive étrangère;</li>
  <li>Elle s'y étendit et, ayant lu son nom sur le marbre,</li>
  <li>L'arrosa de ses larmes et le réchauffa de sa poitrine nue.</li>
  <li value="340">Les Héliades ne pleurèrent pas moins et, faisant à la mort</li>
  <li>L'offrande vaine de leurs larmes et se frappant la poitrine,</li>

  <li class="top-space">Nuit et jour appelèrent <mark>Phaéton</mark>, qui ne pouvait entendre</li>
  <li>Leurs douloureuses plaintes, et se couchèrent près du tombeau.</li>
  <li value="345">Elles à leurs habitudes (habitude créée par le ressassement),</li>
  <li>S'étaient abandonnées à leurs lamentations. Phaétuse,</li>
  <li>L'aînée, voulant se pencher jusqu'à terre, se plaignit</li>
  <li>Du raidissement de ses pieds; essayant de venir vers elle.</li>
  <li>La candide Lampétie soudain fut retenue par une racine;</li>
  <li value="350">Les mains de la troisième, prête à s'arracher les cheveux,</li>
  <li>Détachèrent des feuilles; l'une a les jambes prises par une souche,</li>
  <li>L'autre souffre de voir ses bras changés en longs rameux.</li>
  <li>Tandis qu'elles s'affolent, l'écorce enveloppe leur sexe</li>
  <li>Et peu à peu entoure ventre, poitrine, épaules et mains;</li>
  <li value="355">On ne voyait plus que leurs bouches qui appelaient leur mère.</li>
  <li>Que peut une mère sinon errer çà et là, où la violence de son chagrin</li>
  <li>L'entraîne et, pendant qu'elle le peut, les couvrir de baisers?</li>
  <li>Mais ce n'est pas assez: elle tente de séparer leurs corps des troncs</li>
  <li>Et de casser à la main les branches fines; il en sort</li>
  <li value="360">Comme une blessure des gouttes de sang.</li>
  <li>
    <p class="conversation">«Arrête, mère, je t'en prie, c'est notre corps que tu brises à travers l'arbre.</p>
  </li>
  <li>
    <p class="conversation">Allons, adieu!»</p>
  </li>
  <li>L'écorce envahit ces derniers mots:</li>
  <li>D'elle coulent des larmes, et des jeunes branches tombent des gouttes</li>
  <li value="365">D'ambre qui durcissent au soleil pour être recueillies par le fleuve limpide</li>
  <li>Et transmises comme parure aux jeunes femmes du Latium.</li>
</ol>

<footer>
  <p><span style="color: #df8a13;">Ovide, <cite>Les Métamorphoses</cite>, Livre <abbr title="deux">II</abbr>, vers 1 à 366.</span></p>
</footer>

</section>

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