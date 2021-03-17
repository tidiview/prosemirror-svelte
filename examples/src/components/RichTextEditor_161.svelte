<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="yellow">Phaéton</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon_700x556.webp 700w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/02.jardins/02.phaeton/apollon_700x556.jpg" alt="Le Char du Soleil, conduit par Apollon, Bassin du Char d'Apollon, Jardins du Palais de Versailles" title="Le Char du Soleil, conduit par Apollon, Bassin du Char d'Apollon, Jardins du Palais de Versailles" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-380.jpg 380w, 
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-480.jpg 480w, 
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon_700x556.jpg 700w"></picture><figcaption>Le Char du Soleil, conduit par Apollon, émerge d'Océan à l'aurore</figcaption></figure>
<div class="notices yellow">
<p><a href="https://fr.wikipedia.org/wiki/Louis_XIV" title="https://fr.wikipedia.org/wiki/Louis XIV">Louis XIV</a> est aussi appelé le «roi Soleil».<br>
Dans les “Mémoires pour l'instruction du Dauphin”, lui-même explique les raisons qui l'ont conduit, jeune, seul, à faire naturellement ce choix.<br>
Au Château de Versailles, le soleil est visible sous bien des formes.<br>
Parmi elles, plusieurs endroits font apparaître la figure d'<a href="https://fr.wikipedia.org/wiki/Apollon" title="https://fr.wikipedia.org/wiki/Apollon">Apollon</a>, dieu du Soleil, qui évoque la grandeur de l'empire romain, notamment celle des premières fêtes baroques qui ont eu lieu à Versailles, comme le groupe du Char du Soleil fondu par <a href="https://fr.wikipedia.org/wiki/Jean-Baptiste_Tuby" title="https://fr.wikipedia.org/wiki/Jean-Baptiste TUBY">Jean-Baptiste TUBY</a> entre 1668 et 1671 au centre du <a href="https://fr.wikipedia.org/wiki/Bassin_d'Apollon" title="https://fr.wikipedia.org/wiki/Bassin d'Apollon">Bassin d'Apollon</a> dans les Jardins.<br>
Le texte ci-dessous raconte la tragique mort de l'étrange fils d'Apollon, <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Phaéton</a>, tel qu'il apparaît dans “<a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)">Les Métamorphoses</a>” de l'écrivain de l'empire romain d'expression latine <a href="https://fr.wikipedia.org/wiki/Phaéton" title="https://fr.wikipedia.org/wiki/Phaéton">Ovide</a>, que Louis XIV connaissait intimement pour avoir chargé le soir son historiographe l'écrivain <a href="https://fr.wikipedia.org/wiki/Jean_Racine" title="https://fr.wikipedia.org/wiki/Jean Racine">Jean Racine</a> de lui en faire lecture.<br>
C'est ainsi l'occasion d'approcher le sens que pouvait revêtir pour Louis XIV la figure de cet astre tel que le décrit ce texte.</p>
</div>
<h2 class="yellow">Phaéton selon “Les Métamorphoses”</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>1</sup></td>
<td>Le Palais du Soleil aux hautes colonnes se dressait<br>
Dans la splendeur rutilante de l'or et des flamboiements du pyrope;<br>
Son toit était couvert d'ivoire luminescent,<br>
Ses portes à double battant diffractaient une lumière argentée:</td></tr>
<tr><td><sup>5</sup></td>
<td>Matériau rehaussé par un travail d'artiste car Mulciber<br>
Y avait gravé les mers qui entourent l'ensemble des terres,<br>
Le monde et le ciel qui s'étend au-dessus du monde.<br>
On y voit l'eau et ses divinités bleues, l'harmonieux Triton,</td></tr>
<tr><td><sup>10</sup></td>
<td>L'ondoyant Protée, Ægæon domptant de ses seuls bras<br>
Les baleines aux dos énormes, et Doris en compagnie de ses filles,<br>
Les unes en train de nager, les autres assises sur un rocher<br>
Faisant sécher leurs cheveux verts, d'autres encore<br>
Chevauchant des poissons; n'ayant pas toutes même visage<br>
Mais pas dissemblables non plus, ainsi qu'il convient à des sœurs.<br>
La terre contient les hommes et les villes, les forêts et leurs animaux,</td></tr>
<tr><td><sup>15</sup></td>
<td>Les fleuves et leurs nymphes, et toutes les divinités champêtres<br>
Au-dessus sont représentées un ciel sillonné d'éclairs et, sur chaque battant,<br>
Les signes du Zodiaque: six à droite, six à gauche.</td></tr>
</tbody>
</table>
<h3 class="yellow">Phaéton devant Phœbus</h3>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td></td><td>Sitôt que le fils de Clyméné eut gravi le sentier qui y mène</td></tr>
<tr><td><sup>20</sup></td>
<td>Et fut entré sous le toit du père dont il doutait, sans hésiter<br>
Il s'avança et fit face à ce père; mais il s'arrêta<br>
À quelques distance, ne pouvant, de plus près, soutenir<br>
L'éclat de ses yeux. Revêtu d'un manteau de pourpre, Phœbus<br>
Était assis sur un trône resplendissant de pures émeraudes.</td></tr>
<tr><td><sup>25</sup></td>
<td>À sa droite et à sa gauche étaient placés le Jour, le Mois, l'Année,<br>
Les Siècles et, régulièrement espacées, les Heures,<br>
Il y avait là le Printemps nouveau, couronnée de fleurs,<br>
Il y avait l'Été nu, portant des guirlandes d'épis,<br>
Et il y avait aussi l'Automne, éclaboussé de raisins piétinés,</td></tr>
<tr><td><sup>30</sup></td>
<td>Et le glacial Hiver aux cheveux blancs hirsutes.<br>
De sa position centrale, le Soleil, dont les yeux perçoivent toutes choses,<br>
Vit le trouble du jeune homme devant cette étrangeté et lui dit:<br>
« Quelle est la raison de ta venue? Que cherches-tu sur ces hauteurs?<br>
Phaéton mon enfant, toi que ton père ne saurait renier? »</td></tr>
<tr><td><sup>35</sup></td>
<td>Celui-ci répondit:<br>
«<cite>Ô lumière du monde, commune à l'immensité,<br>
Phœbus mon père, si tu me permets d'utiliser ce nom,<br>
Et si Clyméné ne dissimule point sa faute sous un mensonge,<br>
prouve-moi, mon géniteur, de façon irréfutable que je suis bien<br>
De ta lignée et délivre mon esprit de ce doute.</cite>»</td></tr>
<tr><td><sup>40</sup></td>
<td>À ces mots, le père se débarrassa de ces rayons éblouissants<br>
Qui couronnaient sa tête et lui ordonna d'approcher<br>
Puis, l'ayant serré dans ses bras, lui dit: «<cite>Tu n'as pas mérité<br>
Que je te renie, et Clyméné t'a dit la vérité sur ta naissance;</cite></td></tr>
<tr><td><sup>45</sup></td>
<td><cite>Je suis prêt à te l'accorder: et je prends à témoin de cette promesse<br>
Le marais, inconnu à mes yeux, sur lequel les dieux prêtent serment</cite>»<br>
À peine avait-il achevé que le garçon demanda le char de son père<br>
Et le droit d'être durant un jour, le conducteur des chevaux aux pieds ailés.<br>
Le père regretta son serment et dit en secouant trois, quatre fois</td></tr>
<tr><td><sup>50</sup></td>
<td>Sa tête auréolée de lumière: «<cite>Tes paroles ont rendu les miennes<br>
Téméraires. Ah, si je pouvais ne pas tenir cette promesse;<br>
C'est bien la seule chose, mon enfant, que je te refuserais.<br>
Mais je puis te dissuader: ce que tu veux n'est pas sans risque;<br>
C'est une grande faveur, Phaéton, que tu réclames,</cite></td></tr>
<tr><td><sup>55</sup></td>
<td><cite>Ton sort est celui d'un mortel, mais ton désir d'un immortel;<br>
Inconscient, tu ambitionnes plus que ce à quoi les dieux mêmes<br>
Peuvent prétendre; ils peuvent tous être très contents d'eux<br>
Mais aucun n'a la force de monter sur le char de feu,</cite></td></tr>
<tr><td><sup>60</sup></td>
<td><cite>Moi excepté; même le maître de l'immense Olympe<br>
Qui, inplacable, lance la foudre d'une main terrible,<br>
Ne saurait conduire mon char; Et y a-t-il plus grand que Jupiter?<br>
La première partie du chemin est difficile et mes chevaux,<br>
Quoique frais le matin, ont du mal à la franchir; la partie médiane</cite></td></tr>
<tr><td><sup>65</sup></td>
<td><cite>Est si haute dans le ciel qu'il m'arrive souvent de frémir,<br>
À voir de là-haut terres et mers, et que mon cœur, saisi d'effroi, palpite;<br>
La dernière partie est en pente et exige une conduite sûre:<br>
Même alors Théthys qui me reçoit dans ses eaux toutes proches<br>
Redoute constamment que je n'y sois précipité.</cite></td></tr>
<tr><td><sup>70</sup></td>
<td><cite>Ajoute à cela que le ciel est pris d'un tournoiement constant,<br>
Qu'il y entraine les étoiles lointaines et que leur rotation est vertigineuse.<br>
Je lutte en sens contraire et cette pression n'a pas raison de moi<br>
Comme des autres astres et je m'élance contre cette impérieuse révolution.<br>
Suppose que je te donne mon char: que feras-tu? Pourras-tu affronter</cite></td></tr>
<tr><td><sup>75</sup></td>
<td><cite>Les pôles tournant sur eux-mêmes sans être emporté par leur giration?<br>
Peut-être t'imagines-tu qu'il y a là-haut des bois, des cités<br>
Divines et des sanctuaires emplis d'offrandes: en fait, il faut<br>
Passer à travers milles embûches et figures farouches<br>
Et, même si tu gardes le cap sans te laisser égarer,</cite></td></tr>
<tr><td><sup>80</sup></td>
<td><cite>Tu trouveras face à toi, sur ta route, les cornes du Taureau,<br>
L'arc du Sagittaire, les puissantes mâchoire du Lion,<br>
Le Scorpion dont les pinces redoutables se ferment sur un vaste<br>
Espace et le Cancer qui courbe ses pinces différemment.<br>
Et quant à mes chevaux impétueux, qui ont au cœur un feu</cite></td></tr>
<tr><td><sup>85</sup></td>
<td><cite>Qu'ils soufflent par la gueule et les naseaux, il n'est pas facile<br>
Pour toi de les conduire; à peine me supportent-ils quand leur violente<br>
Ardeur s'échauffe, quand leur encolure refuse les rênes.<br>
Mais toi, mon fils, prends garde que je ne sois responsable à ton égard<br>
D'une faveur funeste et, pendant qu'il est temps, modifie ton souhait.</cite></td></tr>
<tr><td><sup>90</sup></td>
<td><cite>Apparemment, pour te convaincre que tu es bien né de mon sang,<br>
Tu réclames des preuves irréfutables? Je te les donnes par mes craintes<br>
Et cette inquiétude paternelle prouve assez que je suis ton père.<br>
Regardes-moi en face: ah! si tes yeux pouvaient plonger jusqu'au fond<br>
De mon cœur pour y saisir le souci que ton père a de toi!</cite></td></tr>
<tr><td><sup>95</sup></td>
<td><cite>Pense enfin à toutes les richesses que possède le monde<br>
Et parmi tous les biens du ciel, de la terre et des mers, demande-moi<br>
Celui que tu voudras: n'aies crainte, je ne te refuserai rien.<br>
Je n'écarte qu'une chose qui est, à vrai dire, une peine,<br>
Non un honneur; car la faveur que tu réclames, Phaéton, est une peine.</cite></td></tr>
<tr><td><sup>100</sup></td>
<td><cite>Pourquoi mettre tes bras câlins autour de mon cou, fou que tu es?<br>
N'en doute pas, n'importe lequel de tes vœux (je l'ai juré par les eaux du Stix)<br>
Te sera accordé; mais fais un vœu plus raisonnable.</cite>»<br>
Sa mise en garde était finie et, cependant, rétif à ses paroles,<br>
Le jeune homme s'entêta dans son projet: l'envie de ce char le brûlait.</td></tr>
<tr><td><sup>105</sup></td>
<td>Alors son père, après avoir temportisé autant qu'il lui était possible,<br>
Le conduisit vers le char majestueux, cadeau de Vulcain.<br>
D'or en était l'essieu, d'or la flèche, d'or le tour<br>
Des hautes roues, et d'argent l'ensemble des rayons;<br>
Des topazes et des pierreries régulièrement disposées sur tout l'attelage</td></tr>
<tr><td><sup>110</sup></td>
<td>Dans lequel Phœbus se réfléchissait lui renvoyaient une lumière intense.<br>
Et tandis que le noble Phaéton, examinant tout cela, admire<br>
L'ouvrage, voici que dans l'éclat du levant l'Aurore vigilante<br>
Montre ses portes rougeoyantes et ses entrées couvertes de roses;<br>
Disparaissent les étoiles dont Lucifer hâte la marche,</td></tr>
<tr><td><sup>115</sup></td>
<td>Quittant le dernier le poste céleste.<br>
Dès qu'il le voit atteindre la terre, voit le firmanment s'empourprer<br>
Et comme s'évanouir le bout des cornes de la lune,<br>
Le Titan commande aux Heures prestes d'atteler ses chevaux.<br>
Les déesses exécutent ses ordres avec célérité: elles amènent<br>
Des vastes écuries les coursiers qui crachent le feu,</td></tr>
<tr><td><sup>120</sup></td>
<td>Rassasiés d'ambroisie, et, dans un cliquetis, leur placent le mors.<br>
Alors, le père enduit le visage de son fils d'un onguent sacré<br>
Pour lui permettre de résister à la violence des flammes,<br>
Il nimbe de rayons sa chevelure et, le cœur lourd,</td></tr>
<tr><td><sup>125</sup></td>
<td>Après maints soupirs qui laissent présager son deuil, lui dit:<br>
«<cite>Si tu peux au moins suivre ces derniers conseils de ton père,<br>
Ne te sers pas du fouet, mon enfant, et tiens fermement les rênes;<br>
Les chevaux ont tendance à accélérer; la difficulté est de maîtriser leur élan.<br>
Et ne choisis pas la route droite qui coupe les cinq zones,</cite></td></tr>
<tr><td><sup>130</sup></td>
<td><cite>Il existe un passage qui les prend à l'oblique par une large courbe<br>
Et qui, se limitant à trois de ses zones, évite le pôle Sud<br>
Ainsi que le pôle Nord voisin des Aquilons: c'est là ta route;<br>
Tu y reconnaîtras nettement les traces de mes roues.<br>
Afin que le ciel et la terre reçoivent une chaleur égale,</cite></td></tr>
<tr><td><sup>135</sup></td>
<td><cite>Tu ne dois ni abaisser ton char ni le lancer vers les hauteurs de l'éther:<br>
Si tu montes trop haut, tu incendieras les demeures célestes,<br>
Si tu descend trop bas, les terres; le plus sûr est d'avancer au milieu.<br>
Trop à droite, tes roues risquent de dévier vers les anneaux du Serpent,<br>
Et trop à gauche, vers les basses régions de l'Autel;</cite></td></tr>
<tr><td><sup>140</sup></td>
<td><cite>Tiens-toi entre les deux; je te confie le reste à la Fortune<br>
En souhaitant qu'elle t'assiste et prenne soin de toi mieux que toi-même.<br>
Pendant que je parlais, la nuit humide a touché les limites<br>
Qui bornent le rivage de l'Hespérie; nous ne pouvons plus tarder,<br>
On nous appelle et, les ténèbres dissipées, l'Aurore point.</cite></td></tr>
<tr><td><sup>145</sup></td>
<td><cite>Prends bien les rênes en main ou, si tu peux encore changer d'avis,<br>
Fais usage de mes conseils plutôt que de mon char<br>
Tant que cela t'est encore possible et que tu es debout sur un sol ferme,<br>
Tant que tu ne fais pas corps, inconscient, avec le char de tes désirs fous.<br>
Si tu veux contempler sans danger la lumière, laisse-moi la donner à la terre. </cite>»</td></tr>
</tbody>
</table>
<h3 class="yellow">Le vol de Phaéton</h3>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>150</sup></td>
<td>Le garçon au corps juvénile grimpe sur le char léger et, debout,<br>
Tout joyeux de sentir dans ses mains le contact lisse des rênes,<br>
Remercie son père, qui a agi bien magré lui.<br>
Pendant ce temps, les chevaux ailés du Soleil: Pirois, Eous, Æthon<br>
Et le quatrième, Phlégon, emplissent l'air de hennissements</td></tr>
<tr><td><sup>155</sup></td>
<td>Impétueux et piaffent contre les clôtures.<br>
Sitôt que Téthys, ignorant le destin de son petit-fils,<br>
A ouvert les barrières et que s'étend devant eux l'immensité du ciel,<br>
Ils dévorent l'espace et, battant l'air de leur pieds, déchirent<br>
les nuages sur leur passage; leurs ailes les emportent</td></tr>
<tr><td><sup>160</sup></td>
<td>Et leur font dépasser l'Eurus, né dans cette partie du monde.<br>
Mais le poids est insuffisant et les chevaux du Soleil ne peuvent<br>
S'y reconnaître car l'attelage n'a pas sa charge habituelle;<br>
De même que les bateaux dont la coque n'est pas suffisamment chargée<br>
Chavirent, déstabilisés par leur trop grande légèreté, et sont emportés</td></tr>
<tr><td><sup>165</sup></td>
<td>Par les flots, ainsi privé de son poids coutumier, le char<br>
Bondit vainement dans les airs et, profondément secoué, semble vide.<br>
Dès que le quadrige sent cela, il s'emballe, délaisse la piste tracée<br>
Pour suivre une toute autre direction. Affolé, Phaéton ne sait<br>
De quel côté tirer les rênes à lui confiées, ni comment retrouver sa route,</td></tr>
<tr><td><sup>170</sup></td>
<td>Incapable, même s'il le savait, de maîtriser les chevaux.<br>
Alors, pour la première fois, sous l'effet des rayons, les Trions<br>
Des glaces deviennent brûlants et tentent en vain de plonger<br>
Dans la mer interdite, et le Serpent situé près du pôle glacial,<br>
Jusque-là engourdi par le froid sans effrayer personne,</td></tr>
<tr><td><sup>175</sup></td>
<td>S'enflamme et puise dans cette effervescence une fureur nouvelle.<br>
Toi aussi, Bouvier, on a dit qu'un trouble t'avait fait fuir<br>
En dépit de ta lenteur et du Chariot qui te retenait.<br>
Lorsque l'infortuné Phaéton, du haut des airs, a vu la terre<br>
Qui s'étendait si bas, si bas au-dessous de lui,</td></tr>
<tr><td><sup>180</sup></td>
<td>Il a pali et l'angoisse a soudain fait trembler ses genoux;<br>
La lumière aveuglante a plongé ses yeux dans les ténèbres.<br>
Et voici qu'il voudrait n'avoir jamais touché aux chevaux paternels,<br>
Voici qu'il se repent d'avoir tant insisté pour connaître son origine,<br>
Voici que, dans sons désir d'être appelé fils de Mérops, il est tel un vaisseau</td></tr>
<tr><td><sup>185</sup></td>
<td>Emporté par les déchaînements de Borée et dont le pilote a lâché,<br>
Impuissant, le gouvernail, l'abandonnant aux dieux et aux prières,<br>
Que faire? Il laisse derrière lui une immense étendue de ciel,<br>
Devant ses yeux il en est une plus grande encore: il évalue les deux<br>
Et regarde alternativement le couchant devant lui - que le destin</td></tr>
<tr><td><sup>190</sup></td>
<td>Lui interdit d'atteindre - et, en arrière, le levant.<br>
Ne sachant comment réagir, il est paralysé, ne peut ni lacher<br>
Les rênes ni les retenir, et il ignore les noms des chevaux.<br>
Dans son affolement il voit, éparses çà et là dans le ciel,<br>
Des choses étonnantes et des figures d'animaux monstrueux.<br>
Il est un lieu où le Scorpion de ses deux pinces recourbées forme</td></tr>
<tr><td><sup>195</sup></td>
<td>Un arc et occupe, tordant queue et membres à la fois,<br>
L'espace de deux signes du Zodiaque.<br>
Lorsque l'enfant l'aperçoit, exsudant un venin moite et noir<br>
Et menaçant d'attaquer avec son dard crochu,</td></tr>
<tr><td><sup>200</sup></td>
<td>Il perd la tête et, glacé de terreur, lâche les rênes.<br>
Dès qu'elles sont retombées et flottent sur leur croupe,<br>
Les chevaux que plus rien rien n'arrête s'élancent dans l'espace<br>
Sans savoir où ils vont, au gré de leur impétuosité,<br>
Galopent en tous sens et se jettent contre les étoiles accrochées à la voûte</td></tr>
<tr><td><sup>205</sup></td>
<td>du ciel, entraînant le char vers des lieux impraticables;<br>
parfois ils gagnent les hauteurs, et parfois des descentes<br>
Vertigineuses les emportent tout près de la terre.<br>
La lune regarde avec stupéfaction les chevaux de son frère courir<br>
Plus bas que les siens et des nuages roussis se dégage de la fumée.</td></tr>
<tr><td><sup>210</sup></td>
<td>La terre, aux endroits les plus élevés, est dévorée de flammes;<br>
Elle se fend, se lézarde et, privée de ses eaux, se dessèche;<br>
Le fourrrage jaunit, les arbres brûlent avec leurs feuilles<br>
Et les champs arides nourrissent leur propres dévastation.<br>
Mais ceci n'est rien: de grandes villes sont anéanties avec leurs murailles,</td></tr>
<tr><td><sup>215</sup></td>
<td>L'incendie réduit en cendres des contrées entières<br>
Avec leurs habitants; montagnes et forêts s'embrasent:<br>
S'embrasent l'Athos, le Taurus de Cilicie, le Tmolus et l'Œta,<br>
L'Ida jusqu'alors si riche en sources, maintenant asséché,<br>
Et l'Hélicon, séjour des Muses, et l'Hémus d'avant Œagre;</td></tr>
<tr><td><sup>220</sup></td>
<td>S'embrasent parallèlement et de façon démesurée l'Etna,<br>
Le Parnasse à double cime, l'Eryx, le Cynthe et l'Othrys<br>
Enfin le Rhodope dont les neiges fondent, le Mimas,<br>
Le Dindymes, le Mycale et le Cythéron, objet de culte.<br>
La Scythie n'est pas protégée par ses glaces; s'embrase le Caucase</td></tr>
<tr><td><sup>225</sup></td>
<td>Et puis l'Ossa et le Pinde et l'Olympe, plus élevé qu'eux,<br>
Et les Alpes aériennes et l'Apenin orageux.<br>
Alors Phaéton regarde le monde incendié en toutes<br>
Ses parties et ne peut tenir contre une chaleur si violente;<br>
Sa bouche aspire un bouillonnement d'air comme sorti du fond</td></tr>
<tr><td><sup>230</sup></td>
<td>D'une fournaise et son char, il le sent, devient incandescent;<br>
Il ne supporte plus les projections de cendres et de poussière chaude,<br>
Une fumée brûlante l'enveloppe de tous côtés.<br>
Où va-t-il, où est-il, couvert d'une épaisse cousse de poix?<br>
Il ne sait, et les chevaux ailés l'emportent à leur gré.</td></tr>
<tr><td><sup>235</sup></td>
<td>C'est de là, pense-t-on, que les peuples de l'Éthiopie tirent leur couleur<br>
Noire, le sang ayant afflué à la surface de leurs corps;<br>
De là que la Libye, privée d'humidité par la chaleur intense,<br>
Est devenue aride; de là que les nymphes aux cheveux épars<br>
Pleurèrent les fontaines et les lacs: la Béotie chercha en vain Dircé,</td></tr>
<tr><td><sup>240</sup></td>
<td>Argos Amymoné, Éphyre les eaux du Piréné.<br>
Et les fleuves dont les bords sont éloignés de ces lieux<br>
Ne sont pas mieux lotis: au milieu de leurs eaux fument le Tanaïs<br>
Et le vieux Pénée et le Caïque de Mysie<br>
Et le vif Isménus ainsi que l'Érymanthe qui baigne Phégia</td></tr>
<tr><td><sup>245</sup></td>
<td>Et le Xanthe -qui devait flamber une fois encore - et le blond Lycormas,<br>
Et le Méandre au cours sinueux et folâtre,<br>
Puis le Mélas de Phrygie et l'Eurotas de Laconie.<br>
Et flambe aussi l'Euphrate de Babylone, flambent l'Oronte<br>
Et le rapide Thermodon, le Gange, le Phase et l'Hister.</td></tr>
<tr><td><sup>250</sup></td>
<td>Bouillonne l'Alphée, flambent les rives du Sperchius,<br>
Et l'or que charrie le Tage dans ses eaux fond sous les flammes<br>
Et les oiseaux de rivière dont les chants célébraient les rives<br>
Méoniennes sont carbonises au milieu du Caÿstre.<br>
Le Nil épouvanté fuit jusqu'au bout du monde</td></tr>
<tr><td><sup>255</sup></td>
<td>Pour y cacher sa source, qui nous est encore inconnue; ses sept<br>
embouchures, taries, sont ensablées, ses sept vallées non irriguées.<br>
Un même sort assèche l'Hèbre et le Strymon de Thrace<br>
Ainsi que le Rhin, le Rhône et le Pô d'Hespérie<br>
Et le Tibre, à qui fut promis l'empire du monde.</td></tr>
<tr><td><sup>260</sup></td>
<td>Partout le sol se fend et, par les fissures, la lumières pénètre<br>
Jusqu'au Tartare, effrayant le roi des Enfers et son épouse;<br>
Les mers se resserrent, et ce qui naguère était immensité liquide<br>
Devient plaine de sable sec, et les montagnes que recouvrait<br>
L'eau profonde émergent, multipliant les Cyclades disséminées.<br>
Les poissons gagnent les abysses et les dauphins ondoyants n'osent pas</td></tr>
<tr><td><sup>265</sup></td>
<td>Bondir dans les airs comme auparavant au-dessus des vagues;<br>
Des cadavres de phoques flottent sur le dos à la surface<br>
De l'eau; on raconte aussi que Nérée lui-même, ainsi que Doris<br>
Et ses filles, se cachèrent dans des gouffres devenus tièdes,</td></tr>
<tr><td><sup>270</sup></td>
<td>Que par trois fois Neptune, d'un air farouche, avait tenté de sortir de l'eau<br>
Ses bras, que par trois fois il ne put supporter l'air brûlant.<br>
Cependant, la Terre nourricière qui se trouvait entourée d'eaux -<br>
Qu'il s'agit de celles de la mer ou des sources partout raréfiées<br>
Qui se dissimulaient dans l'opacité des entrailles maternelles -,</td></tr>
<tr><td><sup>275</sup></td>
<td>La Terre aride présenta jusqu'au cou un visage accablé,<br>
Posa une main sur son front et, dans un grand tressaillement<br>
Qui ébranla toutes choses, s'affaissa quelque peu au-dessous<br>
De son niveau normal puis, de sa voix sacrée, parla en ces termes:<br>
«<cite>Si tu le veux ainsi, si je l'ai mérité, qu'attends-tu pour lancer ta foudre,</cite></td></tr>
<tr><td><sup>280</sup></td>
<td><cite>Ô souverain des dieux? Si je dois périr par le feu, laisse-moi<br>
Périr par le tien: que ton autorité diminue mon malheur.<br>
Ma gorge a bien du mal à s'ouvrir pour dire ceci -la fumée l'étouffait-:</cite></td></tr>

<tr><td></td><td><cite>regarde donc mes cheveux calcinés,<br>
Et dans mes yeux tant de cendres, et tant sur mon visage!</cite></td></tr>
<tr><td><sup>285</sup></td>
<td><cite>Est-ce bien là ma récompense, est-ce l'honneur que tu accordes<br>
À ma fertilité et mes bienfaits, moi qui supporte d'être blessée<br>
Par le soc recourbé et la bêche, qui suis toute l'année malmenée,<br>
Moi qui fournis le fourrage pour le bétail, des aliments sains, des céréales<br>
Pour les humains et même de l'encens pour vous?</cite></td></tr>
<tr><td><sup>290</sup></td>
<td><cite>Mais admettons que j'ai mérité cette ruine: qu'en est-il des eaux,<br>
Qu'en est-il de ton frère? Pourquoi les mers qu'il reçut en partage<br>
Décroissent-elles jusqu'à se retirer si loin des aires?<br>
Si ni moi ni ton frère n'avons assez d'influence pour te toucher,<br>
Aie au moins pitié de ton ciel; regarde les deux pôles:</cite></td></tr>
<tr><td><sup>295</sup></td>
<td><cite>Ils fument l'un et l'autre; si le feu les altère,<br>
Vos palais s'écrouleront. Vois comme Atlas souffre lui-même<br>
Et, sur ses épaules, soutient avec peine le monde incandescent.<br>
Si les flots, si les terres, si les royaumes célestes périssent,<br>
Nous allons retomber dans l'antique chaos. Arrache aux flammes</cite></td></tr>
<tr><td><sup>300</sup></td>
<td><cite>Ce qui peut l'être encore et veille au salut de l'univers. »</cite><br>
La Terre se tut, ne pouvant plus longtemps supporter<br>
La fumée ni parler davantage, et sa tête rentra<br>
En elle-même, dans des lieux caverneux plus proches des ânes.<br>
Alors le père tout puissant, ayant convaincu les dieux - y compris</td></tr>
<tr><td><sup>305</sup></td>
<td>Celui qui a prêté son char - que s'il n'intervient pas tout va disparaître<br>
Sous le poids du destin, gagne le lieu le plus élevé de l'Empyrée<br>
D'où il a coutume de largement répandre les nuages sur les terres,<br>
D'où il déclenche le tonnerre, brandit et lance sa foudre;<br>
Mais il ne trouve, alors, aucune terre où répandre ses nuages,</td></tr>
<tr><td><sup>310</sup></td>
<td>Aucune pluie à faire tomber du ciel.<br>
Il tonne et, faisant osciller la foudre du côté de son oreille droite,<br>
L'envoie contre l'aurige, lui ôtant à la fois la vie et le char,<br>
Et bloque l'avancée du feu sous ses feux redoutables,<br>
Les chevaux sont pris de panique et, bondissant en sens contraire,</td></tr>
<tr><td><sup>315</sup></td>
<td>Arrachent le joug de leur cou, quittent l'atelage brisé.<br>
Les rênes gisent ici, là, l'essieu détaché de la flèche;<br>
Plus loin les rayons des roues déchiquetées et les restes<br>
Du char mis en pièces sont sur un large espace éparpillés.<br>
Quant à Phaéton, la chevelure en feu dans l'incedie dévastateur,</td></tr>
<tr><td><sup>320</sup></td>
<td>Il tombe en tournoyant, suivi dans les airs d'une longue trainée<br>
Comme parfois une étoile filante dans un ciel serein<br>
Peut paraître tomber alors qu'il n'en est rien.<br>
Loin de sa patrie, à l'autre bout du monde, l'accueille<br>
Le grand Éridan qui baigne son visage fument.</td></tr>
<tr><td><sup>325</sup></td>
<td>Les Naïades de l'Hespérie enterrent son corps consumé<br>
Par trois langues de flammes et marquent la pierre<br>
De ces vers:<br>
<cite>«Ci-gît Phaéton, conducteur du char de son père;<br>
S'il est vrai qu'il ne l'a pas retenu, c'est sa témérité qui l'a perdu. »</cite><br>
De fait, son père, que cette mort a plongé dans la douleur,</td></tr>
<tr><td><sup>330</sup></td>
<td>S'est retiré en se voilant la face et, si l'on en croit la légende,<br>
Un jour entier s'est écoulé sans soleil; l'incendie, en éclairant<br>
Le monde, aura au moins, dans ce malheur, en larmes, éperdue et le sien</td></tr>
<tr><td><sup>335</sup></td>
<td>Déchiré, parcourut l'univers tout entier, à la recherche<br>
Du cadavre d'abord, puis de ses ossements, qu'elle finit<br>
Par découvrir mais enterrés sur une rive étrangère;<br>
Elle s'y étendit et, ayant lu son nom sur le marbre,<br>
L'arrosa de ses larmes et le réchauffa de sa poitrine nue.</td></tr>
<tr><td><sup>340</sup></td>
<td>Les Héliades ne pleurèrent pas moins et, faisant à la mort<br>
L'offrande vaine de leurs larmes et se frappant la poitrine,<br>
Nuit et jour appelèrent Phaéton, qui ne pouvait entendre<br>
Leurs douloureuses plaintes, et se couchèrent près du tombeau.</td></tr>
<tr><td><sup>345</sup></td>
<td>Elles à leurs habitudes (habitude créée par le ressassement),<br>
S'étaient abandonnées à leurs lamentations. Phaétuse,<br>
L'aînée, voulant se pencher jusqu'à terre, se plaignit<br>
Du raidissement de ses pieds; essayant de venir vers elle.<br>
La candide Lampétie soudain fut retenue par une racine;</td></tr>
<tr><td><sup>350</sup></td>
<td>Les mains de la troisième, prête à s'arracher les cheveux,<br>
Détachèrent des feuilles; l'une a les jambes prises par une souche,<br>
L'autre souffre de voir ses bras changés en longs rameux.<br>
Tandis qu'elles s'affolent, l'écorce enveloppe leur sexe<br>
Et peu à peu entoure ventre, poitrine, épaules et mains;</td></tr>
<tr><td><sup>355</sup></td>
<td>On ne voyait plus que leurs bouches qui appelaient leur mère.<br>
Que peut une mère sinon errer çà et là, où la violence de son chagrin<br>
L'entraîne et, pendant qu'elle le peut, les couvrir de baisers?<br>
Mais ce n'est pas assez: elle tente de séparer leurs corps des troncs<br>
Et de casser à la main les branches fines; il en sort</td></tr>
<tr><td><sup>360</sup></td>
<td>Comme une blessure des gouttes de sang.<br>
<cite>«Arrête, mère, je t'en prie, c'est notre corps que tu brises à travers l'arbre.<br>
Allons, adieu! »</cite><br>
L'écorce envahit ces derniers mots:<br>
D'elle coulent des larmes, et des jeunes branches tombent des gouttes</td></tr>
<tr><td><sup>365</sup></td>
<td>D'ambre qui durcissent au soleil pour être recueillies par le fleuve limpide<br>
Et transmises comme parure aux jeunes femmes du Latium.</td></tr>
</tbody>
</table>

<p><span style="color: #df8a13;">Ovide, “Les Métamorphoses”, Livre 2</span></p>
</div>
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