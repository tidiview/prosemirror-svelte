<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<h1 class="red"><a href="/blog/fr/louis-xiv" rel="bookmark">Louis XIV était-il une potiche mégalomane?</a></h1>
<div class="notices red">
<p><span><svg class="caracter-icon" width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="#b52b27" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M6.482 1h35.036v46H6.482z"/><path d="M12.098 8.561h9.265v12.35h-9.265zM27.797 8.561h8.105M27.797 14.735h8.105M27.797 20.913h8.105M12.098 27.088h23.804M12.098 33.267h23.804M12.098 39.441h23.804"/></g></svg></span> Voici un compte-rendu d'un débat qui s'est tenu entre spécialistes à l'occasion du 300ème anniversaire de la mort de Louis XIV le 1er septembre 2015 dans les colonnes du magazine «L'Obs».<br>
Le règne de Louis XIV est <strong>méconnu</strong> et très fréquemment <strong>victime du regard de notre époque</strong>.<br>
Pour cet article, à certains moments, il faut <em>lire entre les lignes</em> pour parvenir à <em>se représenter</em>, non pas le XXIème siècle, mais <em>cette époque</em>.<br>
Puissent les nombreuses annotations en marge de ce texte contribuer à nuancer.
<strong>Après, chacun son opinion</strong>.</p>
</div>
<p>Dans le roman national, il est le roi des rois. L'incarnation de ce Grand Siècle où la France dominait le monde. 300 ans après sa mort, pourtant, les historiens discutent encore qui fut vraiment Louis XIV. Un génie de la guerre, amoureux des arts, fondateur de l'État-nation? Ou un monarque manipulé par ses conseillers, et dont les frasques annoncent déjà la Révolution? </p>
<p>Il n'aurait jamais dû rencontrer Louis XIV.  </p>
<p>L'historien Daniel Dessert s'était programmé un destin d'archéologue. Dans les années 1960, il rêvait de partir au Pérou étudier les tombeaux incas. L'histoire de France? Les Bourbons le barbaient. Pourtant, à l'université de Nanterre, en pleine révolution étudiante, il modifie radicalement ses plans. Il tombe sous le charme d'un professeur fameux, Pierre Goubert, un des inspirateurs de l'école des Annales, grand spécialiste de l'Ancien Régime.</p>

<p>Ce dernier vient alors de publier un brûlot, «Louis XIV et vingt millions de Français» <em>(Fayard-Pluriel, 2010)</em>, réquisitoire en règle contre le Roi-Soleil. <em>«À cette époque, ce n'était pas si fréquent,</em> remarque Daniel Dessert, <em>car les historiens de la première moitié du XXe siècle étaient tous plus ou moins marqués par les ouvrages titanesques d'Ernest Lavisse, directeur de l'École normale supérieure et surtout auteur de manuels scolaires qui magnifiaient l'Ancien Régime.»</em> </p>
<div class="notices red">
<p><strong>pas d'accord.</strong><br>
au contraire, pendant tout le règne de Louis XV puis de Louis XVI, un mouvement d'opposition semi clandestin, multiple, protéiforme, se développe: <strong><em>le jansénisme</em></strong>.  Celui-ci construit lentement et méthodiquement une opposition à l'institution royale par la constitution d'un réquisitoire argumenté.<br>
Cette tradition est à l'origine de la <strong>légende noire de Louis XIV</strong>, ce n'est pas Pierre Goubert qui l'a inventé.<br>
Par ailleurs, titrer <strong>«Louis XIV et vingt millions de Français»</strong>, c'est déjà refusé de se situer dans l'époque, pour se situer dans l'idéologie.</p>
</div>
<p>Les cours du professeur Goubert sont décapants. Ils s'opposent aussi aux historiographes gaullistes, qui voient dans l'avènement de la Ve République un avatar démocratique de l'Ancien Régime. Goubert déboulonne la statue du monarque, génie de la guerre, fondateur de l'État-nation, grand timonier d'une France mirifique et triomphante, brillant de mille feux sous les ors de Versailles, sublime théâtre en trompe-l'oeil d'un régime qui affame son peuple et qui porte en lui tous les germes de la révolution de 1789. Daniel Dessert se lance alors dans l'écriture d'une thèse colossale sur la marine de guerre de Louis XIV. Au bout de deux ans de travail, il découvre que ce roi tout-puissant est en fait entre les mains d'une nouvelle oligarchie financière, les «usuriers de la guerre».</p>
<h2 class="red">"Une potiche et un trouillard"</h4>
<p>Le Roi-Soleil ne serait qu'une étoile éteinte ? L'étudiant élargit son champ d'action et finit par présenter son travail au grand public, en 1984, dans un ouvrage qui fait référence, «Argent, pouvoir et société au Grand Siècle» <em>(Fayard)</em>. Les médias s'emparent du sujet. Bernard Pivot l'invite à «Apostrophes», l'émission littéraire phare de la télévision des années 1980. Daniel Dessert surgit brutalement dans le petit milieu des historiens. On ne le prend pas au sérieux. Il n'est que professeur à l'École navale. Mais l'homme, en mission, s'obstine à creuser son sillon.</p>
<p>Son credo : pour comprendre le siècle de Louis XIV, suivez l'argent. Depuis plus de trente ans, il poursuit ses recherches aux archives de Vincennes et accumule les preuves que le monarque universel n'était peut-être qu'un roi de pacotille. Aujourd'hui encore, il continue de décrypter la machine de la dynastie louis-quatorzienne, en faisant grincer les dents de quelques confrères. A 73 ans, Dessert s'invite à la table du roi et tire à vue.</p>
<p><em>« Ceux qui le présentent comme un roi habile et manœuvrier, un despote éclairé, ont une vision du pouvoir théâtralisée, voire sublimée,</em> dit-il. _En fait,  Louis XIV était une potiche entre les mains de Mazarin et de Colbert.</p>
<div class="notices blue">
<p><em>«c'était une <strong>potiche</strong> entre les mains de Mazarin et de Colbert»</em>:<br>
Pour Mazarin, rappelons que Louis XIV était âgé entre 5 et 23 ans, que la France est en guerre la <strong>Guerre de Trente Ans</strong> et qu'une partie de ce conflit s'est aggravé en guerre civile: <strong>la Fronde</strong>...<br>
Face aux enjeux, comment Louis XIV pouvait, jeune homme, avoir les reins assez solides pour prendre seul (et contre ceux qui l'avaient) la direction des affaires à cet âge-là.<br>
Pour Colbert, si Louis est plus âgé, en revanche des témoignages précis existent qui montrent que le roi a su aussi imposer certains de ses choix.</p>
</div>
<p><em>«C'était aussi un trouillard. Il est allé se planquer à Versailles, loin de Paris et de son peuple. Il a mis la monarchie dans une bulle. Pendant qu'il faisait son carnaval, les financiers gouvernaient.»</em></p>
<div class="notices green">
<p>Cette assertion est totalement <strong>malhonnête</strong>.<br>
<em>«c'était un <strong>trouillard</strong>»</em>:<br>
lors de l'invasion de la France lors de la Guerre de Succession d'Espagne par les troupes de l'empire, aux militaires qui viennent le trouver pour lui conseiller de se replier vers Bordeaux, Louis XIV répond qu'il préfère se rendre à Péronne et <strong>mourir au combat</strong>.<br>
<em>«Il est allé se <strong>planquer</strong> à Versailles, loin de Paris et de son peuple»</em>:<br>
Pourquoi alors Louis XIV prévoyait-il d'abord de <strong>s'installer au Louvre</strong>? Pourquoi fait-il venir en 1665 l'architecte le plus connu de l'époque, le Romain Bernini (appellation francisé en 'le Bernin') pour projeter sa rénovation alors?<br>
<em>«Il a mis la monarchie dans <strong>une bulle</strong>», «les financiers gouvernaient»</em>:<br>
Il faudrait être <strong>précis</strong>, c'est un peu vague...<br>
Cette bulle s'est tout de même montrée capable de briser l'encerclement que faisait peser sur elle depuis Charles Quint (c.-à-d. le début du XVIème siècle) la monarchie Hasbourg!<br>
Daniel Dessert évoque certainement ici le fait que cette politique a été très dure pour le peuple: c'est ce que laisse entendre «les financiers gouvernaient».<br>
Que la guerre ait été dure pour le peuple, c'est exact mais <strong>cela n'est pas spécifique au règne de Louis XIV</strong>: cela était déjà le cas sous Louis XIII et la conduite de la Guerre de Trente Ans par le cardinal Richelieu.</p>
</div>
<p>Et l'historien de citer le duc de Saint-Simon : <em>«Les ministres lui proposent vingt décisions qu'ils ont déjà prises. La marge de manœuvre de Louis XIV est qu'il ne peut en refuser qu'une.»</em></p>
<div class="notices yellow">
<p>Précisons que Saint-Simon écrit ses Mémoires <strong>bien après la fin du règne de Louis XIV</strong>, plus de 30 ans après sa mort, qu'il y estimait avoir <strong>personnellement souffert du l'inaffection du roi</strong>, donc que son ouvrage peut être aussi compté au nombre des œuvres des adversaires de Louis, les jansénistes, visant à <strong>subvertir l'admiration porté communément à Louis</strong>.<br>
Quand bien même ce serait vrai, et alors?<br>
Si le sujet, c'est <em>qui était-il?</em>, l'argument n'est pas.<br>
Par ailleurs, qu'en est-il aujourd'hui pour un Président de la Vème République? Décide-t-il comme Daniel Dessert le prétend? Certainement pas.  </p>
</div>
<p>Louis XIV, l'amoureux des comédies de Molière, une simple marionnette manipulée par une poignée de banquiers et de conseillers? <em>«Cela ne vous rappelle pas notre époque?»</em> ironise Daniel Dessert. Pour de nombreux historiens, ce rapprochement avec la France de 2013 est hasardeux.</p>
<div class="notices red">
<p><em>«Cela ne vous rappelle pas notre époque?»</em> ... propos <strong>hors sujet</strong>, revenons à l'histoire.</p>
</div>
<p><em>« Il faut se méfier de ce courant présentiste,</em> prévient Marc Fumaroli, auteur d'un ouvrage sur les relations entre La Fontaine et Louis XIV. <em>Lire l'histoire avec les clés d'aujourd'hui est une balourdise. Il y a même des gens qui prétendent que Louis XIV serait responsable de l'endettement de la France de 2013. Louis XIV, certes, a commis des erreurs, comme la révocation de l'Edit de Nantes, mais, par son soutien aux savants, aux artistes, aux écrivains, il a créé les conditions pour que la France entre dans une civilisation moderne.»</em></p>
<div class="notices blue">
<p>Les ouvrages de <strong>Philippe Beaussant</strong> par exemple montre très clairement son degré d'implication: ils n'auraient pas atteint un tel niveau sans lui. </p>
</div>
<h2 class="red">Khomeyni à Versailles</h4>
<p>Comment trancher entre le monarque belliqueux et dépensier, perdu dans les brumes de ses rêves de grandeur, et le souverain amoureux de l'art, bâtisseur d'un État moderne? Un courant de jeunes historiens, comme Mathieu Da Vinha, Christian Jouhaud, Jean-Frédéric Schaub ou Olivier Chaline, tente aujourd'hui de revisiter la légende du grand Louis sans a priori idéologiques. Pas simple.</p>
<p>Les guerres qu'il a menées sans interruption pendant le demi-siècle de son règne contre l'Europe entière? Leur coût exorbitant en hommes et en argent, conduisant le pays au bord du gouffre? Les persécutions des protestants et des jansénistes, les dragonnades, le terrible Code noir? La routine au XVIIe siècle, selon les uns. Une dérive autoritaire et sanguinaire, pour les autres.</p>
<div class="notices green">
<p>Il faut être <strong>précis</strong>.<br>
<em>«Les guerres qu'il a menées sans interruption pendant le demi-siècle de son règne contre l'Europe entière»</em>:<br>
La France est <strong>encerclée</strong> par les Hasbourg depuis François Ier.<br>
<em>«Les persécutions des protestants et des jansénistes, les dragonnades, le terrible Code noir»</em>:<br>
<em>«La routine au XVIIe siècle»</em> <strong>et</strong> une «dérive autoritaire et sanguinaire»_ à nos yeux aujourd'hui sans conteste.</p>
</div>
<p><em>« Si je devais faire une comparaison entre Louis XIV et un personnage contemporain,</em> dit Jean-Frédéric Schaub, professeur à l'École des Hautes Études en Sciences sociales (EHESS),_ je dirais Khomeyni.</p>
<div class="notices yellow">
<p><strong><em>«Khomeyni»</em> ?!?</strong></p>
</div>
<p>C'est plus un roi de conquête religieuse qu'un expansionniste territorial, comme Napoléon. Il est le dernier grand roi catholique. </p>
<div class="notices red">
<p><em>«C'est plus un roi de conquête religieuse»</em>:<br>
Tout le <strong>déterminisme social de sa naissance puis de sa position de roi</strong> ne le menait-il pas à devenir religieux de manière <strong>ostentatoire</strong> et <strong>intransigeante</strong>?  </p>
</div>
<p>Son intransigeance, voire son obsession à l'égard de tout ce qui était hérétique est révélatrice de sa paranoïa contre les dynasties anglo-saxonnes, hollandaises et prussiennes.»_</p>
<p>À y regarder de près, les mobiles des guerres de Louis XIV visent systématiquement à affaiblir les dynasties huguenotes européennes. Le roi de France n'a qu'une peur : voir les disciples de Calvin débarquer un jour sur les bords de la Seine.</p>
<div class="notices blue">
<p>Et ces dynasties, quelles ont été leurs attitudes vis-à-vis de la France?<br>
Si cela est vrai, pourquoi la France a-t-elle aussi soutenu financièrement <strong>d'autres</strong> puissances huguenotes en Europe notamment dans les Allemagnes?  </p>
</div>
<p>Le très bigot et très grand pécheur qu'était Sa Majesté n'était-il pas l'équivalent du fils de Dieu sur terre? À ce titre, il se prenait pour l'égal du pape et menait ses guerres «catholiques» sans forcément solliciter l'aval de Rome.</p>
<p><em>« Cette mégalomanie n'en faisait pas pour autant un tyran,</em> tempère Christian Jouhaud, professeur à l'EHESS.<em> La France d'alors était équipée de contre-pouvoirs beaucoup plus contraignants qu'on ne le croit. C'était un véritable état de droit, de droit écrit. Droit dynastique, droit immobilier, droit des corporations, droit de la noblesse, droit de la guerre, du commerce. Le roi ne pouvait pas faire ce qu'il voulait. En fait, le grand dérapage vient d'un côté irrationnel de son règne, cette quête éperdue de gloire.»</em></p>
<h2 class="red">"Un produit marketing"</h4>
<p>C'est la thèse que soutiennent la plupart des jeunes historiens d'aujourd'hui : il y a un côté donquichottesque chez ce souverain qui aimait par-dessus tout sa propre image. Il ne paraissait jamais aussi heureux que quand il jouait un petit rôle dans une pièce de Molière ou quand il dansait dans des ballets orchestrés par Jean-Baptiste Lully La cour de Versailles et ses fêtes dionysiaques étaient un étincelant théâtre à ciel ouvert, où l'on célébrait quotidiennement le culte de sa personnalité.</p>
<div class="notices green">
<p>Là aussi, quelle est la part de l'homme et la part du <strong>déterminisme social</strong>?<br>
La manière dont Louis XIV construit sa légende est aussi le fruit d'une <strong>longue tradition issue de la réflexion</strong> menée <strong>pendant la Renaissance</strong> sur <strong>la grandeur de l'Empire Romain</strong>.<br>
Il ne faut pas oublier les modèles de Louis tels que Apollon, Alexandre, Auguste étaient <strong>communs</strong> à l'époque comme référence.<br>
Il serait aussi judicieux, sur ce terrain, de relever l'innovation dont il a fait preuve:<br>
Il imite les modèles de la magnificience romaine <strong>dans un premier temps</strong>, mais pour ensuite <strong>se singulariser</strong>: après lui, précisément, <strong>on imite plus l'Empire romain, on l'imite lui</strong>: voir Napoléon.<br>
Ce reproche est fait à Louis XIV uniquement parce qu'il est croyant, catholique et donc en temps que <strong>responsable politique théocratique</strong>.<br>
Napoléon par exemple ne se voit pas critiqué sur ce point, au contraire: c'est ce qui est censé faire de lui un <strong>visionnaire</strong> et un <strong>précurseur</strong> de notre époque.</p>
</div>
<p><em>« Attention, ce culte, il ne l'a pas inventé,</em> prévient Mathieu Da Vinha, directeur du Centre de Recherche du Château de Versailles. <em>Dès sa naissance, sa mère, Anne d'Autriche, et le cardinal Mazarin ont organisé la plus grande opération de communication autour de cet enfant ''envoyé par Dieu''. Ils ont inventé le concept de roi universel, maître du monde, pour renforcer la monarchie. Ils l'ont comparé à Apollon pour le positionner dès son adolescence en chef de guerre invincible. Louis XIV a été un produit marketing, si on peut dire.»</em></p>
<div class="notices yellow">
<p>Les choses sont posées comme si ce <em>«culte de la personnalité»</em> (terme anachronique) avait été un <strong>choix personnel</strong> du souverain.<br>
Ce n'était pas nouveau: Charles VII, Louis XII, François Ier, Henri II, Henri III, pour ne citer qu'eux, ont été célébré par leurs contemporains de même.<br>
Louis XIV a aussi <strong>vécu jusqu'à 77 ans</strong>, ce qui n'était pas écrit au départ et cela a évidemment aussi joué dans l'importance de l'empreinte laissé par son règne.<br>
Faut-il rappeler que le roi naît en public, qu'il ne peut ensuite se soustraire au destin de roi?<br>
Que ce n'était pas du tout simple d'assumer une telle charge de travail et responsabilité?<br>
Que Louis XIV, comme Louis XV et Louis XVI considéraient le fait d'être roi comme une <strong>malédiction</strong>?  </p>
</div>
<p>Pourquoi une telle propagande dont l'aboutissement sera la galerie des Glaces et ses peintures célébrant les mille victoires du génie militaire de Sa Majesté? Durant la petite enfance de Louis XIV, la famille royale a cru sa dernière heure arrivée au cours des émeutes de la Fronde, qui ont vu le petit peuple et la noblesse se liguer contre la reine mère et Mazarin. Pour éviter pareille mésaventure et protéger la couronne, il fallait présenter un roi à la poigne de fer, un homme invulnérable, intouchable, maître du monde, contre lequel personne, jamais, n'oserait se rebeller. En d'autres termes, la propagande du Roi-Soleil, de la monarchie absolue, était d'abord à usage interne.</p>
<div class="notices red">
<p>C'est toujours le lieu commun de ce règne: l'épisode de la fuite de Paris.<br>
Oui effectivement, durant la Fronde, il y a eu plusieurs moments où la Monarchie aurait pu disparaître.<br>
Le reproche adressé à Louis XIV d'être roi n'a pas lieu d'être: c'est la condition de l'énoncé.<br>
Et ce reproche n'aurait pas lieu d'être si le roi n'avait atteint ses objectifs: briser l'encerclement de la France par les Hasbourg avec l'Espagne et l'Autriche.<br>
Pendant son règne, 250 points stratégiques sont fortifiés pour assurer la stabilité territoriale: c'est «la Ceinture de Fer» que l'historiographie de la IIIème République refusera de lui attribuer au profit de Vauban.  </p>
</div>
<p><em>« C'est le grand paradoxe de ce régime,</em> ajoute Daniel Dessert. <em>Cette propagande du roi universel a terrorisé tous les voisins européens et les a rendus paranoïaques. Ils surveillaient le moindre mouvement des troupes françaises et s'alliaient au quart de tour pour empêcher ce roi tout-puissant de s'étendre. Louis XIV a été victime de sa propre propagande. D'autant qu'il n'était pas un conquérant. À plusieurs reprises, il a eu l'occasion de s'emparer de grandes villes stratégiques comme Amsterdam ou Madrid. Au dernier moment, il calait. La toute-puissance du roi, dont certains sont aujourd'hui nostalgiques n'était peut-être qu'un mirage.»</em></p>
<div class="notices blue">
<p><strong>Pas du tout!</strong> Contresens.<br>
Le modèle de Louis XIV, tels qu'il apparaît dans les récits classiques qui présentent Alexandre ou Auguste, définissent le roi comme celui qui se vainc lui-même: c'est même là ce qui le différencie des autres hommes. Selon ces récits, vis-à-vis de la postérité mémorielle, il est plus avantageux à Alexandre de se surmonter et de se montrer clément vis-à-vis de filles et femmes de Darius que de se comporter communément.<br>
Il faut considérer ici que Louis XIV aurait pu contrôler Amsterdam mais qu'il ne l'a pas voulu.  </p>
</div>
<h2 class="red">Un geste "gaullien"</h4>
<p>La France était pourtant le pays le plus influent du monde, avec une population de 22 millions d'habitants, une armée de près de 400.000 hommes, des comptoirs aux quatre coins du monde, au Canada, en Louisiane, en Amérique du Sud, en Inde, en Afrique. Là aussi, on reproche au bon roi d'avoir négligé les routes maritimes. Colbert lui-même désespérait de convaincre Louis XIV de construire la plus grande armada de l'univers pour dominer définitivement les marchands hollandais et anglais. Mais le roi n'avait pas le pied marin. C'était un indécrottable terrien.</p>
<div class="notices green">
<p>Colbert a convaincu Louis XIV de construire «la plus grande armada de l'univers».<br>
Les mesures ont été prises pour cela, avec des résultats.<br>
Effectivement, la marine était moins stratégique pour la France que pour Anglais ou Hollandais.<br>
La magnificience du palais de Versailles a aussi pour fonction d'<strong>impressionner</strong> les contemporains.<br>
Durant le règne de Louis XIV, les jeunes nobles de l'Europe entière font le séjour d'un à deux ans en France, prennent des cours de conversation, de danse, d'étiquette, commandent aux manufactures de quoi continuer d'être Versaillais de retour chez eux, notamment en vaisselle d'argent, mobilier, glaces etc...: ce sont eux qui alors se préoccupent de <strong>l'acheminement</strong> de leur achat et il n'est <strong>plus besoin de flotte</strong>.  </p>
</div>
<p><em>« Il avait une vision hexagonale de son royaume, dans la pure ligne de son grand-père, Henri IV,</em> soutient Jean-Christian Petit-fils, auteur de plusieurs ouvrages sur le Roi-Soleil. <em>La construction de toutes les forteresses de Vauban marque parfaitement le territoire dans lequel il situe son pré carré, c'est à dire des Pyrénées au sud jusqu'aux Flandres au nord. Louis XIV n'avait tout simplement pas les moyens de ses ambitions guerrières. Au bout de deux ou trois années de confit armé, les caisses du pays étaient vides. Il était contraint de négocier une paix "petits bras" avec l'ennemi allemand, anglais, hollandais ou espagnol.»</em></p>
<div class="notices yellow">
<p>Il «n'avait tout simplement pas les moyens de ses ambitions guerrières»:<br>
<strong>Contresens</strong>: il a <strong>brisé l'encerclement Hasbourg</strong>, ce qu'aucun de ses prédécesseurs n'avaient pu, et donc <strong>réussit</strong> avec des moyens plus que réduits et là où tous ces prédécesseurs ont échoués!  </p>
</div>
<p>Pas de quoi tomber en extase, à l'instar de thuriféraires comme François Bluche, auteur d'une monumentale biographie du maître de Versailles <em>(Hachette-Pluriel, 1999)</em> qui absout le Roi-Soleil de tous ses pêchés, ou encore Voltaire dans son «Siècle de Louis XIV»?</p>
<p>Dans les dernières années de son règne, Louis XIV n'est plus qu'un monarque épouvanté par ses propres errements. Il écrit ses Mémoires pour ses héritiers, regrette d'avoir trop <em>«aimé la guerre»</em> et pas assez son peuple. Les critiques commencent à apparaître. L'abbé de Fénelon, précepteur de son petit-fils, le duc de Bourgogne, commet, en 1694, une lettre-pamphlet d'une férocité inouïe.</p>
<div class="notices red">
<p><em>«Il écrit ses Mémoires pour ses héritiers»</em>:<br>
faux. <em>«Mémoires»</em>, ce n'est pas le titre original de l'ouvrage, qui est <em>«Instructions pour le Dauphin»</em>.<br>
Par ailleurs, l'ouvrage date d'avant 1670 (pour rappel, Louis XIV meurt en 1715).<br>
Effectivement, à sa mort, lorsque Louis XIV s'adresse à son successeur de 5 ans Louis XV, il regrette d'avoir trop <em>«aimé la guerre»</em>: il faut ici considérer à nouveau qu'il dit cela pour se comporter en roi par rapport à la situation d'une France victorieuse mais dévastée, non qu'il confesse une faute qu'il aurait eu de faire la guerre. </p>
</div>
<p>Le prélat, grand monarchiste devant l'Éternel, lui reproche d'avoir <em>«appauvri la France entière, afin d'introduire à la cour un luxe monstrueux et incurable. ( ...) Vos peuples, que vous devriez aimer comme vos enfants, et qui ont été jusqu'ici si passionnés pour vous, meurent de faim. (...) Tout commerce est anéanti. (...) La France entière n'est plus qu'un grand hôpital désolé et sans provision. C'est vous-même, Sire, qui vous êtes attiré tous ces embarras.»</em></p>
<div class="notices blue">
<p>Effectivement, la fin du règne est <strong>très difficile</strong>: c'est la Guerre de Succession d'Espagne, au cours de laquelle la France est envahie et subie de <strong>graves déréglements climatiques</strong> qui affectent les récoltes et affaminent la population.<br>
Le nombre de victimes est égal à celui de la Première Guerre Mondiale, alors que la population française est alors deux fois moins nombreuse.<br>
Les paroles du roi sont à situer en rapport avec ce contexte.<br>
Doit-il être tenu pour <strong>responsable</strong> du <strong>climat</strong>?  </p>
</div>
<p>Le peuple qu'il devrait aimer comme ses propres enfants ? Il ne le découvre que vers les dernières années de sa vie, quand le régime, aux abois, est menacé d'invasion par les princes ennemis. Le 12 juin 1709, Louis XIV fait un geste «gaullien». Il fait lire dans toutes les églises de France un «appel» aux citoyens français pour qu'ils défendent la patrie. Malgré les 2 millions de morts dus aux famines de 1694 et 1709, le petit peuple, exsangue et misérable, répond présent et sauve la «nation» en se mobilisant sans contrainte.</p>
<p>Ce jour-là, le roi histrion, affamé de gloire, qui se croyait immortel, sort de sa bulle. Le monarque en quête d'universel retombe les pieds sur terre. <em>«Il avait hérité d'une monarchie de sept cents ans</em>, constate Daniel Dessert. <em>Il lègue à ses héritiers une couronne qui n'a plus que soixante-dix ans à vivre. Les vrais monarchistes devraient le haïr. Il a creusé lui-même la tombe de la royauté.»</em></p>
<div class="notices green">
<p><em>«Ce jour-là, le roi histrion, affamé de gloire, qui se croyait immortel, sort de sa bulle»</em>:<br>
Ce dernier paragraphe <strong>n'est pas acceptable</strong>: qu'est-ce qui permet de l'<strong>affirmer</strong>?<br>
qu'est-ce qui permet d'affirmer qu'il se <em>«croyait immortel»</em>?<br>
<strong>Rien</strong> sinon les <strong>préjugés</strong> de l'auteur.<br>
Au contraire, le roi s'est fait <strong>représenter</strong> par les artistes dans les dernières années de sa vie sans cacher les traces de son humanité vieillissante.<br>
Il est attesté qu'il déclare aussi avant de mourir aux personnes présentes: «vous m'avez cru <strong>immortel</strong>?».<br>
A-t-on des éléments matériels qui permettraient de donner une consistance à cette affirmation gratuite d'un remord du roi comme l'insinue les expressions <em>«sort de sa bulle»</em> ou <em>«retombe les pieds sur terre»</em>.<br>
Mais enfin qu'aurait-on dit si dans la situation dramatique dans laquelle il s'en va et dont il n'était pas responsable, il s'était montré indifférent au sort de ses sujets.<br>
Enfin, par rapport à l'affirmation de Daniel Dessert il <em>«lègue à ses héritiers une couronne qui n'a plus que soixante-dix ans à vivre»</em>, il faut nuancer:<br>
<strong>Daniel Dessert se prétend-il capable aujourd'hui de déceler la responsabilité de la Vème République telle qu'elle est aujourd'hui en 2014 dans la physionomie de la France dans 70 ans?</strong><br>
Pourtant, cela ne le dérange pas quand il s'agit du XVIIème siècle.  </p>
</div>
<p><br></p>
<div class="notices yellow">
<dl>
<dt>Conclusion:</dt>
<dd>
Ensuite la Révolution aurait-elle pu avoir lieu de cette manière, en France, et de manière si exemplaire, sans précisément ces <strong>70 ans de stabilité territoriale acquis par Louis XIV</strong> au prix de son <strong>mariage</strong> avec une princesse espagnole et de la <strong>Guerre de Succession d'Espagne</strong>?<br>
Sans cette stabilité territoriale, sans cette possibilité laissée à ses successeurs d'amplifier le soutien aux <em>«aux savants, aux artistes, aux écrivains»</em>, l'idée même d'<strong>appliquer la philosophie et la science au principe de l'organisation sociale</strong> qui caractérise la pensée des Lumières aurait-elle pu voir le jour?<br>
<strong>La Révolution, considérée dans cette perspective, est moins la mise à mort de la Monarchie, que l'avénement du Citoyen-Roi</strong>.  </dd>
</dl>
</div>
<p><br></p>
<p><a href="http://bibliobs.nouvelobs.com/idees/20150901.OBS5100/louis-xiv-etait-il-une-potiche-megalomane.html" title="http://bibliobs.nouvelobs.com/idees/20150901.OBS5100/louis-xiv-etait-il-une-potiche-megalomane.html">> lien vers l'article original du magazine «L'Obs»: "louis-xiv-etait-il-une-potiche-megalomane"</a> </p>
<p><span style="color: #df8a13">source: nouvelobs.com</span></p>
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