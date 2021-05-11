<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:127 EN:190  -->
<!-- Page 1 -->

<article>

<h1 class="blue">L'Apothéose d'Hercule</h1>

<figure>
  <picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule_700x573.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-1920.webp 1920w" type="image/webp"><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus_700x573.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-840.webp 840w" type="image/webp"><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule_700x562.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-1920.jpg 1920w"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus_700x562.jpg" alt="François Lemoyne, « l'Apothéose d'Hercule », Salon d'Hercule, Château de Versailles" title="François Lemoyne, « l'Apothéose d'Hercule », Salon d'Hercule, Château de Versailles" width="700" height="562" loading="eager" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus_700x562.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-840.jpg 840w"></picture><figcaption>François LEMOYNE, <cite>Apothéose d'Hercule</cite></figcaption>
</figure>

<div class="notices blue">
<p>Le <time datetime="1736-09-26">26 septembre 1736</time>, <a href="https://fr.wikipedia.org/wiki/Louis_XV" title="https://fr.wikipedia.org/wiki/Louis XV">Louis XV</a> inaugurait au Palais de Versailles l'œuvre du peintre <a href="https://fr.wikipedia.org/wiki/François_Lemoyne" title="https://fr.wikipedia.org/wiki/François_Lemoyne">François LEMOYNE</a> nouvellement créée pour le Salon d'Hercule, <cite>l'Apothéose d'Hercule</cite> et reproduite ci-dessus.</p>
<p>À cette occasion, le journal <a href="https://fr.wikipedia.org/wiki/François_Lemoyne" title="https://fr.wikipedia.org/wiki/François_Lemoyne"><cite>Le Mercure de France</cite></a> faisait paraître un texte exceptionnel parce que probablement écrit par le peintre lui-même qui nous renseigne sur les conditions qui ont présidé à cette commande ainsi sur le détail de la composition.</p>
<p>C'est ce texte qui se trouve reproduit ci-dessous.
Cette œuvre de ce peintre est exceptionnelle pour de nombreuses raisons et particulièrement pour être une de ses dernières.</p>
<p>En effet, l'artiste décidait de mettre fin à ses jours peu après l'avoir achevé, en se suicidant de plusieurs coups d'épée, dans son appartement à Paris, le <time datetime="1737-06-04">4 juin 1737</time>.</p>
</div>

<aside>

<div class="notices green">
<p>Afin de faciliter la compréhension du texte, des liens ont été établis entre celui-ci et les parties de l'œuvre désignées: clicquer sur le mot renvoie à la partie de l'œuvre représentée et inversement, cliquer sur une partie de l'œuvre renvoie au terme du texte en référence.</p>
</div>

<div class="notices green">
<dl>
<dt>Pour faire apparaître le périmètre des figures:</dt>
<dd>il est possible de faire apparaître le périmètre de la partie de l'image désignée dans le texte en utilisant pour lire cette page un navigateur basé sur Chrome. Toutefois, comme Chrome contient un mouchard qui piste votre navigation pour l'entreprise Google, nous vous conseillons l'excellent navigateur <a href="http://www.srware.net/en/software_srware_iron_download.php" title="http://www.srware.net/en/software_srware_iron_download.php">SRWare Iron</a> basé sur Chrome mais qui ne contient aucun mouchard. Pour les portables android, l'application SRWare Iron peut être téléchargée <a href="https://play.google.com/store/apps/details?hl=fr" title="https://play.google.com/store/apps/details?id=org.iron.srware&amp;hl=fr" id="org.iron.srware">ici...</a>.</dd>
</dl>
</div>

</aside>


<h2 id="plafond-dun-salon-du-château-de-versailles-qui-précède-celui-de" class="blue">Plafond d'un Salon du Château de Versailles, qui précède celui de la Chapelle du Roy, appelé le Grand Salon de Marbre</h2>

<p>Depuis plus de deux ans que nous travaillons au Mercure de France,
nous avons toujours eu une attention particulière à célébrer les Beaux Arts;
mais nous n'avons jamais eu une si belle occasion que celle qui se présente aujourd'hui,
et nous croirions n'avoir rien fait pour leur gloire, si nous négligions de parler du grand Ouvrage en peinture à huile qui vient d’être découvert aux yeux du Public;</p>
<p>événement insigne, qui doit le plus illustrer notre École dans ce Siècle, et servir d'un Monument éclatant à la Postérité, pour prouver le progrès de la Peinture en France, sous le Règne de Louis XV.</p>
<p><span style="color: #28a1c5;">L'Apothéose d'Hercule</span> fait le sujet de cette immense et magnifique composition.</p>
<p><span style="color: #28a1c5;">François Le Moine</span>, de Paris, Professeur de l'Académie Royale de Peinture et Sculpture, Élève de <abbr title="Monsieur">M.<abbr> Galoche, Professeur de la même Académie, <span style="color: #28a1c5;">y travaillait depuis quatre ans par ordre du Roy, sous la Direction du Duc d'Antin</span>, Pair de France, Chevalier des Ordres de Sa Majesté, Gouverneur de l'Orléanais, Ministre d'État, et Directeur Général des Bâtimens du Roy, Protecteur éclairé des Beaux-Arts, et toujours attentif à ce qui peut contribuer à leur avancement.</p>
<p><span style="color: #28a1c5;"><time datetime="1736-09-26">Le Mercredi 26 Septembre</time></span>, jour destiné à faire paraître ce grand Ouvrage, le Salon fut, jusqu'à l'heure que le Roy le traversa pour aller à la Messe;</p>
<p><abbr title="Sa Majesté">S.M.</abbr> accompagnée des Seigneurs, du Cardinal de Fleury et des autres Ministres, et suivie d'une très nombreux foule de Loin;</p>
<p>s’y arrêta longtemps, et plus encore au retour de la Messe;</p>
<p><span style="color: #28a1c5;">le Roy</span> examina alors en détail l'ordonnance en général, les differens Groupes en particulier, le Dessein, le coloris l'effet merveilleux du tout ensemble.</p>
<p><abbr title="Sa Majesté">S.M.</abbr> dont on connaît la délicatesse du goût, et son amour pour la Peinture et pour tous les Beaux Arts,
après avoir extrêmement loué le génie et le beau de <abbr title="Monsieur">M.<abbr> Le Moine,
<span style="color: #28a1c5;">le nomma sur le champ son Premier Peintre</span>, avec aplaudissement de toute la Cour, et d'un nombre infini de spectateurs que la curiosité avait attirés à Versailles,</p>
<p>dont le concours ne diminue point, il augmente même tous les jours au même degré du point, que l'on a à voir l'exécution heureuse d'une si grande composition;</p>
<p>car pour le dire en pas le plus grand morceau de la grande Galerie, peinte par l'illustre Le Brun, n'est pas à coup près si grand que la moitié de celui qui donne lieu à cet Article;</p>

<!-- Page 2 -->

<p><span style="color: #28a1c5;">En voici la description.</span></p>
<p>Ce Plafond porte 64 <a href="#note_pieds" title="Définition de l'unité de mesure appelée « pied »" id="pieds">pieds</a> de long, sur 4 de large, et huit pieds et demi de renfoncement superficie de la corniche au sommet.</p>
<p>Les Figures de l'Attique ont dix à onze pieds de proportion;</p>
<p>on compte dans tout l'Ouvrage jusqu'à 142 Figures,
compris environ trente, feintes stuc.</p>
<p>On en voit 62 d’un coup d’œil en découvrant le principal Groupe.</p>
<p><span style="color: #28a1c5;">Tout l'Ouvrage roule sur cette pensée:</span></p>
<p>L'Amour de la vertu élève l'homme au-dessus lui-même et le rend supérieur aux travaux les plus difficiles et les plus périlleux;
les obstacles s'évanouissent à la vue des intérêts de son Roy et de sa Patrie,
soutenu par l'honneur et conduit par la fidélité,
il arrive par ses actions à l'immortalité.</p>
<p><span style="color: #28a1c5;">L'Apothéose d'Hercule paroît bien propre à déveloper cette pensée:</span></p>
<p>ce Héros ne fut occupé pendant le cours de sa vie qu’à s'immortaliser par des actions vertueuses et héroïques;</p>
<p>et Jupiter dont il avait été l'image sur la terre, couronne ses travaux dans le Ciel par l'immortalité.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-640.jpg" alt="François Lemoyne, « Hercule présenté à Jupiter par l'Amour de la Vertu », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" title="François Lemoyne, « Hercule présenté à Jupiter par l'Amour de la Vertu », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" width="640" height="835" loading="lazy" decoding="async" usemap="#img_hercule1" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1920.jpg 1920w"></picture><figcaption><q cite="#hercule">Hercule présenté à Jupiter par l'Amour de la Vertu</q></figcaption><map name="img_hercule1" id="img_hercule1"><area id="area_hercule" alt="Hercule" title="Hercule" href="#hercule" shape="poly" coords="382,454,384,435,371,421,363,415,370,404,381,412,393,426,392,412,401,408,416,387,410,382,411,374,414,362,422,358,435,362,437,373,445,375,452,398,461,412,460,427,456,433,447,446,472,465,468,477,458,476,444,461,440,468,443,482,433,480,426,486,420,475,402,463"><area id="area_jupiter" alt="Jupiter" title="Jupiter" href="#jupiter" shape="poly" coords="200,372,203,359,203,351,213,351,223,339,229,339,226,331,216,340,203,333,193,324,184,322,200,317,208,325,214,325,223,316,236,313,236,306,240,303,244,296,253,296,261,305,261,313,256,318,260,321,276,333,291,336,312,342,318,347,311,348,303,356,302,366,298,372,282,370,268,374,260,380,256,388,255,393,239,385,224,382,212,378"><area id="area_amourdelavertu" alt="l'Amour de la Vertu" title="l'Amour de la Vertu" href="#amourdelavertu" shape="poly" coords="373,451,368,453,359,453,349,448,341,438,328,438,320,427,324,413,317,406,308,410,294,414,289,407,298,395,307,391,316,391,323,395,327,391,320,386,320,375,328,371,335,370,342,374,342,386,343,392,349,390,354,382,367,379,373,380,378,387,376,397,368,399,361,407,360,417,364,424,366,435,370,446"><area id="area_geniesdelamour" alt="les Génies de l'Amour de la Vertu" title="les Génies de l'Amour de la Vertu" href="#geniesdelamour" shape="poly" coords="371,544,360,553,352,551,344,544,342,536,330,527,324,513,310,507,311,493,318,502,324,500,325,490,320,482,314,487,304,487,305,498,309,516,305,521,299,511,295,495,290,488,288,496,284,501,281,494,276,501,274,486,279,473,282,467,275,462,260,453,258,442,264,436,268,444,273,447,279,445,274,435,279,430,287,429,290,437,299,428,307,428,314,431,311,438,319,444,326,446,329,451,337,451,344,452,347,458,339,457,332,459,334,465,340,463,346,465,351,467,346,472,344,477,348,481,354,489,360,495,351,497,339,498,332,503,339,509,343,511,349,518,355,519,360,525,367,530,370,534"><area id="area_lesmonstresetlesvices" alt="Les Monstres et les Vices" title="Les Monstres et les Vices" href="#lesmonstresetlesvices" shape="poly" coords="422,501,422,510,428,516,436,518,441,510,445,523,436,527,429,533,422,536,418,541,411,550,406,556,399,561,391,556,399,549,393,545,400,539,384,539,375,542,369,549,364,559,366,569,371,573,373,579,369,593,364,605,362,614,364,621,370,623,377,619,382,611,384,619,388,626,399,642,406,640,422,649,428,654,425,662,417,667,415,655,408,649,385,651,379,645,382,636,376,632,369,638,366,652,369,658,377,657,388,668,398,667,397,678,387,684,377,692,371,701,371,712,373,728,379,741,387,743,395,746,404,752,422,754,429,756,437,761,450,765,464,765,483,770,497,769,509,758,518,753,525,745,530,740,525,733,530,716,523,737,517,735,513,743,505,752,487,756,489,745,490,738,485,730,475,729,466,739,469,727,476,713,469,695,463,686,472,688,479,683,486,683,497,686,508,686,520,685,516,697,517,710,520,718,530,710,532,703,545,703,551,702,550,711,546,718,549,725,553,728,559,730,559,736,549,736,554,744,564,750,576,751,579,743,580,736,591,740,603,743,617,746,630,758,639,783,649,776,639,755,627,736,620,733,609,731,614,724,622,723,629,721,619,710,606,701,593,691,585,679,587,672,577,662,563,653,552,651,554,641,552,632,546,624,536,633,525,644,516,650,513,635,515,627,513,619,515,609,524,600,528,590,525,580,524,570,518,577,512,584,506,593,498,592,491,585,494,575,489,564,502,562,506,554,514,553,499,544,492,550,484,550,474,552,472,560,466,563,458,561,463,551,463,538,462,525,454,524,449,530,442,530,446,516,446,508,440,502,433,508,427,504"><area id="area_hebe" alt="Hébé" title="Hébé" href="#hebe" shape="poly" coords="117,401,124,384,134,376,128,370,134,351,129,344,129,329,138,317,132,319,130,312,147,289,153,288,156,287,154,282,161,275,168,275,173,278,179,284,173,288,172,292,166,295,167,301,168,306,172,311,185,315,192,314,205,316,207,319,199,320,192,320,186,324,187,327,185,333,182,340,180,348,181,362,181,368,177,371,168,372,158,373,153,380,153,389,154,395,148,394,142,390,135,391,129,395,124,400"><area id="area_hymen" alt="l'Hymen" title="l'Hymen" href="#hymen" shape="poly" coords="130,312,135,301,147,286,150,289,153,287,151,283,155,276,164,272,171,276,177,281,173,286,168,291,164,296,172,307,179,304,179,300,191,298,198,292,206,283,224,283,235,275,245,272,249,266,255,266,257,258,267,247,242,252,241,239,249,231,237,225,232,231,230,242,235,248,230,257,216,259,213,243,206,234,195,229,185,225,177,219,169,226,163,229,147,224,130,214,123,216,129,227,136,236,145,243,149,248,143,260,144,270,137,267,126,272,120,278,117,285,123,291,129,286,132,291,126,299,121,295,110,299,105,302,108,307,95,318,91,325,97,327,109,317,117,312,124,314"></map>
</figure>

<p><span style="color: #28a1c5;">Voici l'idée générale du sujet.</span></p>
<p><a href="#area_hercule" title="Hercule" id="hercule"><mark>Hercule</mark></a>
présenté à <a href="#area_jupiter" title="Jupiter" id="jupiter">Jupiter</a> par <a href="#area_amourdelavertu" title="l'Amour de la Vertu" id="amourdelavertu">l'Amour de la Vertu</a>,
est tiré dans un Char par <a href="#area_geniesdelamour" title="les Génies du même Amour" id="geniesdelamour">les Génies du même Amour</a>.</p>
<p><a href="#area_lesmonstresetlesvices" title="Les Monstres et les Vices" id="lesmonstresetlesvices">Les Monstres et les Vices</a>
domptés par la valeur de ce Héros, ne peuvent soutenir sa gloire sont renversés
et se précipitent en faisant encore d'inutiles efforts pour lui porter des coups funestes.</p>
<p>Jupiter lui présente <a href="#area_hebe" title="Hébé" id="hebe">Hébé</a>, Déesse de la Jeunesse, conduite par <a href="#area_hymen" title="l'Hymen" id="hymen">l'Hymen</a>.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-640.jpg" alt="François Lemoyne, « Apollon invite les neuf Sœurs », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" title="François Lemoyne, « Apollon invite les neuf Sœurs », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" width="640" height="715" loading="lazy" decoding="async" usemap="#img_hercule2" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1920.jpg 1920w"></picture><figcaption>Apollon invite <q cite="#apollon">les neuf Sœurs invitent à célébrer les hauts faits et l'apothéose</q> d'Hercule</figcaption><map name="img_hercule2" id="img_hercule2"><area id="area_apollon" alt="Apollon" title="Apollon" href="#apollon" shape="poly" coords="345,372,355,361,368,361,363,353,371,346,374,335,363,338,355,337,351,331,340,335,333,328,338,323,333,318,338,309,352,313,345,301,346,292,353,291,358,301,364,306,372,306,395,313,400,307,407,305,414,307,419,314,417,320,412,325,404,329,408,335,417,343,424,334,432,337,427,349,435,361,431,370,439,381,451,389,446,392,430,389,430,382,417,372,417,379,408,378,398,367,387,365,375,365,364,366,360,370,354,373"><area id="area_lesneufsoeurs" alt="les neuf Sœurs" title="les neuf Sœurs" href="#lesneufsoeurs" shape="poly" coords="242,542,242,528,258,517,267,519,276,505,296,467,287,467,293,455,303,460,313,452,323,450,335,435,340,435,342,432,337,419,340,410,351,405,358,407,363,412,363,423,368,427,373,422,374,414,371,405,366,404,370,396,381,401,385,399,387,392,393,388,403,388,410,394,405,404,414,403,422,403,426,409,424,424,430,424,435,429,442,426,442,410,448,403,456,403,459,409,458,420,465,423,469,414,481,408,474,405,475,394,484,389,492,392,494,407,512,404,518,406,524,405,527,396,536,393,539,399,537,405,533,409,529,421,522,425,514,426,516,435,521,440,527,435,538,442,545,450,542,456,527,458,538,469,554,480,564,476,572,484,575,485,576,476,575,461,569,452,569,433,574,441,580,442,580,450,602,463,608,465,608,453,602,444,603,435,595,434,590,437,586,422,591,414,601,414,615,422,619,415,629,407,619,399,617,390,601,393,589,395,573,394,568,388,566,381,550,372,539,373,524,372,519,366,527,365,535,365,542,362,544,358,532,345,515,344,507,341,508,329,516,325,523,323,530,328,534,321,552,321,562,325,574,319,579,321,588,317,600,317,617,323,617,332,610,342,605,351,597,356,610,353,619,356,615,360,625,358,627,365,633,372,634,380,636,388,640,377,650,381,651,388,649,394,654,399,661,403,668,399,685,392,683,496,675,503,655,497,640,498,609,506,610,514,607,522,595,523,574,517,564,497,554,493,550,485,554,481,539,470,531,473,518,467,509,462,500,466,491,469,479,473,471,474,461,471,451,476,443,478,459,484,465,491,470,501,470,511,479,512,497,521,497,527,481,522,486,527,492,533,506,536,494,543,475,536,475,543,454,541,436,540,427,544,419,557,412,562,407,545,391,537,393,525,397,517,391,511,375,515,358,533,348,533,359,515,359,506,353,515,340,515,327,521,320,517,315,509,303,509,301,517,293,526,299,532,282,540,278,534,267,536,254,539"><area id="area_letempledelamemoire" alt="le Temple de Mémoire" title="le Temple de Mémoire" href="#letempledelamemoire" shape="poly" coords="164,320,161,309,167,293,176,291,181,285,171,276,172,266,181,260,218,247,223,255,238,249,256,245,270,243,286,245,299,248,318,258,324,247,348,254,375,268,373,273,363,286,367,294,363,301,355,300,352,293,342,291,345,303,351,311,345,313,337,308,335,319,335,326,338,333,346,333,353,335,361,335,372,335,371,347,366,353,363,360,355,358,341,356,333,358,318,362,310,368,310,375,300,378,294,371,282,373,275,373,273,366,265,361,255,363,252,358,244,360,234,360,226,360,217,360,216,352,206,350,197,348,188,346,181,346,178,336,172,326"></map>
</figure>

<p><span style="color: #28a1c5;">Du côté opposé</span>
est <a href="#area_apollon" title="Apollon" id="apollon">Apollon</a>,
qui invite <a href="#area_lesneufsoeurs" title="les neuf Sœurs" id="lesneufsoeurs">les neuf Sœurs</a> à célébrer les hauts faits, et L'Apothéose du nouveau Dieu.</p>
<p>Derrière Apollon est <a href="#area_letempledelamemoire" title="le Temple de Mémoire" id="letempledelamemoire">le Temple de Mémoire</a>.</p>
<p><span style="color: #28a1c5;">Au-dessus de la Corniche</span>,
règne au pourtour une Attique qui enferme le Sujet,
elle est dessinée dans les milieux de Cartels rehaussés d’or,
accompagnés des principaux travaux d'<mark>Hercule</mark> feints de Sculpture de marbre blanc.</p>
<p><span style="color: #28a1c5;">Dans les angles de l'Attique</span>,
sont quatre Vertus sur des Piédestaux et feintes de même. </p>
<p>Ces Vertus sont la Force, ta Constance, la Valeur, la Justice,
qui désignent particulièrement le caractère d'<mark>Hercule</mark>.</p>
<p><span style="color: #28a1c5;">Pour le reste, la composition est distribuée en neuf Groupes.</span></p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-640.jpg" alt="François Lemoyne, « Sous un rideau soutenu par les Satellites de Jupiter », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" title="François Lemoyne, « Sous un rideau soutenu par les Satellites de Jupiter », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" width="640" height="826" loading="lazy" decoding="async" usemap="#img_hercule3" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1920.jpg 1920w"></picture><figcaption><q cite="#lessatellitesdejupiter">Sous un rideau soutenu par les Satellites de Jupiter</q></figcaption><map name="img_hercule3" id="img_hercule3"><area id="area_lessatellitesdejupiter" alt="les Satellites de Jupiter" title="les Satellites de Jupiter" href="#lessatellitesdejupiter" shape="poly" coords="318,414,303,414,303,400,308,395,319,394,326,405,333,405,348,398,370,377,364,372,359,370,357,354,363,344,372,344,379,340,386,342,391,345,399,342,390,349,382,347,385,359,384,366,390,367,398,367,408,372,424,391,424,398,420,403,407,401,396,398,392,388,387,381,381,383,373,383,370,390,366,396,360,401,353,405,342,406,428,500,436,504,441,512,447,515,459,520,469,530,472,539,477,547,481,551,484,564,483,575,488,579,492,573,489,554,490,536,499,520,498,511,504,517,505,520,516,521,518,526,532,532,529,524,527,515,518,509,512,499,512,489,519,496,522,498,524,489,530,484,533,473,534,464,529,455,530,446,534,440,530,431,535,428,538,420,538,411,530,405,535,380,542,380,547,388,546,395,552,403,560,408,561,414,564,420,574,418,581,412,590,413,596,417,600,418,605,428,614,437,624,442,634,447,647,460,658,460,661,454,651,452,645,443,635,440,625,429,620,417,629,416,636,419,642,422,647,431,656,417,651,410,653,400,647,386,636,383,630,369,621,361,604,354,594,354,585,349,574,343,561,343,552,340,547,335,550,332,561,330,568,324,569,312,577,304,577,296,569,299,561,310,551,315,539,317,530,324,523,328,516,327,515,317,505,310,494,313,491,320,494,332,502,335,508,339,509,345,505,352,501,360,501,369,499,375,501,383,497,391,494,401,488,410,493,398,500,399,506,397,513,386,520,384,535,380,530,405,520,411,513,416,510,425,508,431,504,437,504,434,494,441,493,433,491,422,491,416,484,418,481,426,480,435,484,445,474,447,466,452,465,462,459,468,457,476,447,476,443,483,437,485,435,492,428,500,343,408,328,412,328,412,328,412,328,412,328,412,328,412,328,412"><area id="area_junon" alt="Junon" title="Junon" href="#junon" shape="poly" coords="313,549,322,529,338,517,347,521,339,524,327,529,319,543,322,551,327,546,335,539,343,534,352,533,360,532,360,526,359,516,363,504,373,500,385,507,387,522,381,529,379,539,388,549,398,559,408,560,420,562,433,572,442,579,449,588,457,598,458,611,457,622,446,626,439,627,432,634,426,640,419,629,421,619,414,608,403,604,393,606,387,612,383,622,375,621,367,619,359,613,360,599,356,593,359,582,366,577,374,572,376,569,368,563,355,561,335,559,326,553,320,551,312,551"><area id="area_laigle" alt="l'Aigle" title="l'Aigle" href="#laigle" shape="poly" coords="298,694,271,677,269,670,265,674,257,666,257,676,236,676,242,689,229,691,217,684,198,691,193,681,188,687,182,679,166,688,157,677,148,661,143,644,149,633,159,641,169,647,177,643,181,624,186,614,200,611,211,614,205,617,202,627,200,636,208,640,217,640,225,633,232,630,242,631,256,634,266,640,275,643,283,646,291,657,301,667,304,679,303,687"><area id="area_ganimede" alt="Ganimède" title="Ganimède" href="#ganimede" shape="poly" coords="182,616,187,611,193,606,195,594,197,585,191,577,193,571,197,566,191,561,187,556,171,553,166,559,163,569,161,576,162,587,163,598,163,603,169,605,166,611,173,609"></map>
</figure>

<p><span style="color: #28a1c5;">Au premier</span>, sous un Rideau soutenu par <a href="#area_lessatellitesdejupiter" title="les Satellites de Jupiter" id="lessatellitesdejupiter">les Satellites de Jupiter</a>,
ce Dieu sur un Trône
et lui destine pour époux;</p>
<p><a href="#area_junon" title="Junon" id="junon">Junon</a> qui a éprouvé <mark>Hercule</mark> pendant sa vie,
paraît aprouver ce changement,
figure ingénieuse qui prouve que la Vertu surmonte toujours la Jalousie et l'Envie.</p>
<p>Aux pieds de Jupiter,
on voit <a href="#area_laigle" title="l'Aigle" id="laigle">l'Aigle</a> dépositaire de la foudre;</p>
<p><a href="#area_ganimede" title="Ganimède" id="ganimede">Ganimède</a> est à côté d'Hébé,
regarde avec plaisir le bonheur de cette Déesse.</p>

<!-- Page 3 -->

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-640.jpg" alt="François Lemoyne, « Cupidon regarde d'un œil malin et dédaigneux l'Amour de la Vertu », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" title="François Lemoyne, « Cupidon regarde d'un œil malin et dédaigneux l'Amour de la Vertu », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" width="640" height="467" loading="lazy" decoding="async" usemap="#img_hercule4" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1920.jpg 1920w"></picture><figcaption>Cupidon <q cite="#cupidon">regarde d'un œil malin et dédaigneux l'Amour de la Vertu</q></figcaption><map name="img_hercule4" id="img_hercule4"><area id="area_bacchus" alt="Bacchus" title="Bacchus" href="#bacchus" shape="poly" coords="265,312,269,307,264,296,275,302,270,293,273,285,278,280,286,277,290,274,296,275,299,283,300,293,294,298,289,304,295,306,300,304,305,301,311,306,308,314,308,321,307,330,303,340,298,348,297,355,298,360,297,366,300,372,305,376,310,372,307,365,307,357,313,345,318,341,319,333,326,328,328,320,334,318,342,315,348,312,355,311,361,314,367,318,371,320,371,327,376,327,383,327,389,326,395,325,400,320,395,315,386,316,377,313,369,303,362,299,359,292,353,289,346,292,342,298,344,290,341,284,337,289,333,278,328,270,325,269,327,264,325,258,322,252,314,249,309,254,308,259,303,264,301,266,294,262,286,262,285,268,278,269,273,273,264,282,262,289,262,302"><area id="area_dieupan" alt="Dieu Pan" title="Dieu Pan" href="#dieupan" shape="poly" coords="241,321,247,311,253,301,258,298,260,285,260,291,260,306,265,311,269,306,274,303,274,299,269,293,273,289,275,281,280,276,285,277,293,274,298,277,299,284,298,292,295,299,296,306,301,302,311,306,307,315,307,327,302,337,298,345,294,330,288,335,284,343,281,354,272,359,264,364,260,358,252,358,246,365,239,360,234,354,226,352,229,344,228,335,232,327"><area id="area_deuxsylvains" alt="deux Sylvains" title="deux Sylvains" href="#deuxsylvains" shape="poly" coords="136,298,144,299,156,302,168,301,179,303,186,310,192,302,196,299,203,298,211,296,212,304,216,310,222,298,229,302,236,310,239,318,244,320,245,311,252,303,256,299,259,288,258,277,261,272,269,271,276,259,276,244,264,222,256,230,264,246,257,256,251,255,250,252,241,249,236,242,234,236,226,229,216,231,212,241,213,249,222,257,228,263,226,277,217,282,210,286,205,293,195,295,183,292,178,285,184,283,186,275,188,269,187,260,177,260,168,259,161,264,151,267,139,270,132,277,129,286,132,292"><area id="area_amphitrite" alt="Amphitrite" title="Amphitrite" href="#amphitrite" shape="poly" coords="207,140,199,144,193,160,202,164,211,171,209,178,201,181,211,185,213,195,215,200,218,205,224,204,231,208,239,212,245,212,247,217,253,219,260,216,267,215,272,218,280,217,280,209,276,201,267,198,261,190,257,190,256,187,253,184,253,181,246,172,242,170,242,164,240,152,235,145,234,142,238,138,238,130,236,125,226,124,218,131,213,139"><area id="area_mercure" alt="Mercure" title="Mercure" href="#mercure" shape="poly" coords="104,208,111,208,114,197,125,184,143,179,149,175,149,166,150,156,155,161,164,160,171,164,174,156,171,139,181,138,186,139,191,146,194,152,194,161,205,165,202,157,207,155,211,159,211,151,206,144,202,138,196,135,194,128,192,122,198,121,206,118,205,111,197,104,194,99,187,98,183,105,188,106,186,112,179,113,171,110,164,110,157,113,144,111,147,105,154,106,150,95,142,93,134,96,130,106,136,105,134,111,126,116,119,125,120,134,110,129,99,129,98,144,105,151,115,151,115,159,108,164,108,172,114,171,117,161,122,156,126,159,132,156,128,167,120,169,118,181,106,194,112,188,101,199"><area id="area_venus" alt="Vénus" title="Vénus" href="#venus" shape="poly" coords="230,462,223,461,222,450,220,450,210,453,199,452,196,454,191,459,194,465,182,462,178,454,168,446,173,439,185,439,182,430,186,424,184,417,181,417,184,406,182,394,182,384,185,376,192,369,194,357,198,350,203,350,209,350,206,344,206,334,212,330,222,329,227,336,229,345,227,354,234,357,239,361,240,370,246,370,243,376,244,384,252,385,249,386,249,391,256,394,256,401,262,407,266,416,265,423,255,429,244,435,232,446"><area id="area_lestroisgraces" alt="les trois Grâces" title="les trois Grâces" href="#lestroisgraces" shape="poly" coords="182,431,174,430,172,421,165,422,161,415,154,416,148,420,148,422,133,418,121,417,111,420,105,426,99,422,85,425,76,435,74,447,66,448,62,439,23,436,12,439,6,441,0,435,0,395,4,402,8,405,12,400,18,393,16,386,18,376,22,371,30,370,37,374,39,380,44,386,49,390,52,399,51,406,54,414,64,413,71,410,81,410,76,404,71,394,74,386,79,379,83,372,90,367,93,359,100,357,96,351,98,345,103,340,108,339,113,339,120,343,122,351,121,359,119,361,121,365,123,367,127,361,129,354,132,346,137,341,139,337,137,331,133,325,135,317,143,312,149,316,153,322,153,329,156,332,159,327,168,327,177,326,182,319,186,315,192,310,191,302,197,298,208,297,213,302,217,307,222,311,220,316,214,321,207,328,199,323,196,316,192,327,186,331,180,336,185,340,191,342,195,334,198,341,203,341,196,351,194,358,188,365,186,376,185,386,183,394,178,399,176,405,174,413,176,421"><area id="area_cupidon" alt="Cupidon" title="Cupidon" href="#cupidon" shape="poly" coords="283,432,288,424,293,418,297,393,290,389,288,399,286,391,278,380,283,378,294,384,294,376,290,367,282,364,276,367,271,366,265,370,265,367,261,365,261,361,254,360,250,366,256,373,262,377,261,382,255,387,249,385,247,390,255,392,260,393,265,395,268,401,267,408,268,415,272,422,275,430"><area id="area_pandore" alt="Pandore" title="Pandore" href="#pandore" shape="poly" coords="317,431,324,426,327,416,325,413,330,408,333,402,339,396,342,398,344,394,335,390,331,381,332,372,338,367,344,367,349,371,354,376,359,380,368,380,376,385,382,391,386,395,385,401,387,406,392,413,392,419,398,425,400,431,395,435,392,436,386,436,384,443,381,439,374,433,369,437,364,441,359,435,354,428,348,421,342,418,335,421,333,428,333,435,333,438,329,437,325,435,320,438"><area id="area_diane" alt="Diane" title="Diane" href="#diane" shape="poly" coords="402,431,399,424,393,420,393,413,388,407,386,401,389,395,384,391,389,387,392,387,389,382,383,380,385,378,381,374,386,369,387,361,391,357,397,357,397,354,392,350,388,346,387,339,390,340,392,333,399,331,406,334,412,339,410,348,412,354,417,357,419,359,422,360,429,356,435,355,436,356,433,358,436,359,443,356,445,358,440,363,432,364,437,367,445,370,446,375,452,379,460,380,469,376,470,369,471,360,475,352,480,350,477,356,474,361,473,370,473,380,473,386,470,392,466,399,470,405,471,410,473,420,474,429,472,439,470,445,465,449,463,450,461,455,456,453,454,460,446,457,444,458,443,463,435,463,431,461,433,454,428,449,421,447,417,443,413,446,406,447,401,443,395,439,400,435"><area id="area_comus" alt="Comus" title="Comus" href="#comus" shape="poly" coords="362,440,357,434,353,426,347,421,342,417,335,421,334,428,334,438,326,436,323,439,317,432,323,428,328,417,324,415,323,407,316,404,307,401,301,404,298,409,297,415,293,419,287,423,285,429,282,435,282,441,282,448,281,455,282,463,284,470,288,475,290,480,294,485,296,488,302,487,309,482,316,482,318,484,324,482,327,482,332,483,338,480,341,480,346,484,352,485,355,490,360,493,363,498,372,497,370,489,375,488,373,479,369,480,366,470,361,461,357,452,351,447,354,440,359,441"></map>
</figure>

<p><span style="color: #28a1c5;"><abbr title="deuxième">2<sup style="color:#28a1c5">ème</sup></abbr> Groupe</span>.</p>
<p>Sur la droite de Jupiter,
<a href="#area_bacchus" title="Bacchus" id="bacchus">Bacchus</a> assis et appuyé sur le <a href="#area_dieupan" title="Dieu Pan" id="dieupan">Dieu Pan</a>,
envisage avec complaisance le triomphe d'<mark>Hercule</mark>.</p>
<p>Bacchus est accompagné de <a href="#area_deuxsylvains" title="deux Sylvains" id="deuxsylvains">deux Sylvains</a>, dont l'un lie son Thyrse, et l'autre des raisins,
au-dessus paraît <a href="#area_amphitrite" title="Amphitrite" id="amphitrite">Amphitrite</a>, et <a href="#area_mercure" title="Mercure" id="mercure">Mercure</a> le Messager des Dieux prêt à exécuter les ordres de Jupiter.</p>
<p>Au dessous de Bacchus on voit <a href="#area_venus" title="Vénus" id="venus">Vénus</a> avec <a href="#area_lestroisgraces" title="les trois Grâces" id="lestroisgraces">les trois Grâces</a>,</p>
<p>elles s'applaudissent d'avoir contribuer à rendre Hébé aimable;</p>
<p>l'une des Grâces tient une Couronne qu'elle paraît lui destiner,
<a href="#area_cupidon" title="Cupidon" id="cupidon">Cupidon</a> qui est à côté de sa mère,
regarde d'un œil malin et dédaigneux l'Amour de la Vertu.</p>
<p>Aux pieds de Bacchus,</p>
<p>et un peu en descendant,
<a href="#area_pandore" title="Pandore" id="pandore">Pandore</a> et <a href="#area_diane" title="Diane" id="diane">Diane</a> semblent inviter <a href="#area_comus" title="Comus" id="comus">Comus</a>, Dieu des Banquets, à se disposer pour la Fête:
ce Dieu porte une Picque entourée d'une guirlande de fleurs.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-640.jpg" alt="François Lemoyne, « Mars attentif à la chute des Monstres et des Vices », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" title="François Lemoyne, « Mars attentif à la chute des Monstres et des Vices », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" width="640" height="372" loading="lazy" decoding="async" usemap="#img_hercule5" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1920.jpg 1920w"></picture><figcaption><q cite="#mars">Mars attentif à la chute des Monstres et des Vices</q></figcaption><map name="img_hercule5" id="img_hercule5"><area id="area_mars" alt="Mars" title="Mars" href="#mars" shape="poly" coords="285,276,281,281,274,282,267,272,269,278,262,277,256,281,249,279,245,270,242,261,245,254,251,260,256,255,260,250,261,244,259,237,259,227,257,220,255,214,258,207,261,199,254,189,254,181,258,174,264,172,271,171,280,165,282,160,288,156,299,154,302,144,308,141,317,141,309,142,311,146,316,151,317,153,322,156,320,158,317,158,315,164,316,171,320,176,325,183,325,185,330,191,333,200,325,203,323,211,327,215,324,222,322,222,314,225,305,230,297,235,290,244,285,256,283,266"><area id="area_vulcain" alt="Vulcain" title="Vulcain" href="#vulcain" shape="poly" coords="239,283,245,270,241,261,245,255,251,258,259,252,261,243,259,237,260,228,255,214,259,201,254,197,250,189,239,183,240,181,236,176,235,173,223,173,220,181,223,191,222,194,214,194,206,197,200,203,192,204,182,203,173,198,170,197,163,197,157,200,159,205,165,208,171,207,177,210,183,213,191,216,191,219,186,224,184,226,173,225,171,227,165,234,166,242,169,249,169,257,172,262,176,268,183,270,182,279,182,290,189,299,200,302,207,300,214,296,220,292,217,286,211,277,217,276,225,282,231,284,235,284"><area id="area_plusieursamours" alt="plusieurs Amours" title="plusieurs Amours" href="#plusieursamours" shape="poly" coords="127,319,122,305,115,304,115,297,107,298,101,294,93,296,90,286,81,282,82,270,90,272,88,260,77,262,76,255,78,246,80,240,72,234,65,234,63,228,63,219,62,212,64,204,57,194,50,193,51,189,47,189,41,194,31,191,23,194,30,183,26,175,32,173,37,173,39,170,34,164,38,156,44,152,50,153,55,150,55,142,61,141,67,139,70,144,67,150,70,155,74,160,79,165,82,172,90,173,94,176,94,179,84,178,79,181,78,183,68,184,66,190,57,194,64,204,70,207,76,208,77,215,83,217,90,220,95,220,99,211,105,207,107,199,106,191,111,187,114,181,119,176,119,169,124,168,132,173,130,179,137,176,140,181,148,187,148,189,139,184,135,186,127,186,124,195,123,202,117,205,114,211,106,213,95,222,103,228,106,232,112,228,119,226,122,217,129,217,129,208,136,203,144,207,149,218,147,228,151,238,154,248,158,259,155,267,149,261,143,256,143,266,142,273,138,277,136,284,140,290,147,294,151,303,158,308,165,302,169,297,170,304,170,312,170,322,169,328,164,317,157,316,148,318,140,313,132,303,133,313,133,319"><area id="area_deuxrenommees" alt="deux Renommées" title="deux Renommées" href="#deuxrenommees" shape="poly" coords="141,386,154,386,165,373,176,372,181,368,203,368,210,370,213,374,223,374,222,367,227,366,232,362,244,360,247,365,251,356,262,357,278,353,271,347,265,344,276,345,283,341,287,335,296,346,302,345,312,343,323,340,314,340,305,338,299,337,295,330,301,326,308,324,319,329,322,327,342,335,349,334,349,327,368,320,376,320,384,324,387,323,386,316,372,307,367,312,359,309,361,308,367,311,363,304,366,297,363,290,358,293,356,300,353,306,346,308,343,298,355,299,355,297,340,296,332,285,332,284,344,282,349,275,342,269,334,271,341,267,343,261,340,253,333,246,328,257,320,259,312,259,314,250,322,244,323,237,319,230,326,225,320,217,314,225,301,234,291,244,286,255,285,272,284,281,284,283,276,284,275,278,268,278,262,281,261,286,265,290,260,296,253,289,246,285,238,283,230,282,216,274,215,284,218,292,223,299,229,302,226,312,224,319,221,324,221,329,211,328,208,328,207,320,198,315,191,317,187,323,187,332,193,337,194,341,186,340,178,337,169,342,162,348,154,357,145,370"></map>
</figure>

<p><span style="color: #28a1c5;"><abbr title="troisième">3<sup style="color:#28a1c5">ème</sup></abbr> Groupe</span>.</p>
<p>Au-dessous de Pandore et de Diane,
et sur le devant du Groupe,
on voit <a href="#area_mars" title="Mars" id="mars">Mars</a> attentif à la chute des Monstres et des Vices,
que la seule Vertu, et non la Force, terrasse en ce moment.</p>
<p><a href="#area_vulcain" title="Vulcain" id="vulcain">Vulcain</a>, dont les travaux sont consacrés à ce Dieu,
est à côté de lui;</p>
<p><a href="#area_plusieursamours" title="plusieurs Amours" id="plusieursamours">plusieurs Amours</a> voltigent sur la droite de ces Divinités,
et tiennent des Armes précieuses,
destinées pour, les imitateurs de la valeur d'<mark>Hercule</mark>.</p>
<p>Plus bas,
<a href="#area_deuxrenommees" title="deux Renommées" id="deuxrenommees">deux Renommées</a> descendent pour annoncer la Terre ce qui se passe au Ciel en faveur d'<mark>Hercule</mark>.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-640.jpg" alt="François Lemoyne, « l'Envie, la Colère, la Haine, la Discorde et les autres Vices sont précipités du Ciel », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" title="François Lemoyne, « l'Envie, la Colère, la Haine, la Discorde et les autres Vices sont précipités du Ciel », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" width="640" height="741" loading="lazy" decoding="async" usemap="#img_hercule6" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1920.jpg 1920w"></picture><figcaption>l'Envie, la Colère, la Haine, la Discorde et les autres Vices <q cite="#envie">sont précipités du Ciel</q></figcaption><map name="img_hercule6" id="img_hercule6"><area id="area_envie" alt="l'Envie" title="l'Envie" href="#envie" shape="poly" coords="177,321,179,328,184,331,191,329,196,325,199,326,195,335,187,341,177,342,169,344,161,348,153,350,140,346,129,346,132,338,121,334,113,335,97,339,91,346,90,356,91,364,95,368,96,375,90,384,84,391,77,400,67,411,68,424,72,427,82,422,94,417,106,403,124,398,113,397,127,392,126,385,137,374,144,367,166,359,171,358,182,362,187,355,194,358,200,358,207,355,212,346,205,334,208,324,202,317,193,323,184,328,179,325"><area id="area_colere" alt="la Colère" title="la Colère" href="#colere" shape="poly" coords="95,417,91,426,97,456,109,460,117,470,125,478,128,484,136,488,144,481,152,474,158,469,164,458,166,459,170,456,170,444,169,438,162,442,156,435,159,428,168,424,181,425,194,426,196,440,201,444,215,454,223,462,226,472,235,488,238,490,237,474,231,453,226,441,211,428,197,418,180,411,178,403,178,397,184,393,191,389,202,398,206,398,203,387,198,375,193,367,184,359,181,363,172,357,144,367,128,383,126,391,114,395,125,398,106,403"><area id="area_haine" alt="la Haine" title="la Haine" href="#haine" shape="poly" coords="176,461,174,471,166,489,177,497,171,514,163,522,165,532,161,537,153,529,145,524,139,527,128,524,114,515,119,508,111,507,103,512,98,507,91,513,95,520,104,527,114,533,115,540,124,542,138,543,149,542,173,534,181,537,195,548,210,553,241,553,249,551,251,544,253,538,240,525,250,525,254,518,265,515,267,498,262,487,276,475,278,466,272,456,281,453,283,439,276,429,268,426,254,429,270,418,270,410,266,398,257,392,249,384,239,395,229,396,221,400,215,413,205,399,188,388,178,397,179,412,196,417,227,442,238,475,237,489,224,469,220,455,194,438,180,440,178,452"><area id="area_discorde" alt="la Discorde" title="la Discorde" href="#discorde" shape="poly" coords="126,484,121,491,109,497,111,479,107,471,99,472,76,461,75,454,81,447,77,440,62,446,55,460,56,467,65,468,77,484,90,487,84,495,67,498,60,507,45,512,36,551,39,563,49,574,56,577,70,592,77,595,88,596,99,611,117,619,127,627,134,626,141,637,152,641,164,640,179,634,186,635,203,624,211,619,206,616,221,591,203,617,197,611,186,623,166,623,152,623,159,616,164,606,163,596,156,591,145,594,144,582,162,573,159,559,152,542,130,542,115,541,115,534,96,523,91,513,98,508,104,513,110,507,120,509,114,515,129,524,137,528,147,525,162,534,166,531,163,519,155,517,156,512,163,509,163,501,170,494,167,489,174,472,180,441,194,438,193,427,169,423,159,426,156,433,163,441,169,438,169,456,165,458,159,466,136,487,130,483"><area id="area_autresvices" alt="les autres Vices" title="les autres Vices" href="#autresvices" shape="poly" coords="207,553,209,558,223,557,213,565,206,588,213,592,226,588,227,581,237,586,244,584,249,588,240,603,239,611,243,617,240,623,236,628,239,641,246,645,255,650,261,648,269,639,269,634,278,642,282,648,294,654,305,661,312,673,313,688,319,706,323,712,332,704,329,674,325,653,322,654,300,633,298,620,296,612,307,632,312,643,311,635,316,640,319,633,316,621,318,614,309,605,310,598,303,591,298,579,303,574,305,568,301,558,302,544,301,536,294,532,285,538,273,529,275,519,276,505,272,495,264,495,329,491,344,488,348,498,351,507,362,510,376,513,378,520,392,526,397,537,399,544,407,541,411,548,414,557,424,565,430,568,439,566,447,563,446,557,458,553,464,554,476,544,461,536,451,545,449,553,439,556,425,541,422,531,430,533,436,531,425,525,420,517,425,515,417,510,422,504,427,505,431,500,437,497,435,485,428,478,418,476,410,486,406,490,401,485,397,479,388,486,383,494,374,491,366,494,378,482,385,476,389,468,396,466,405,468,414,466,428,467,434,460,445,458,446,447,437,442,428,445,427,452,417,453,398,449,388,450,391,444,388,435,378,432,367,433,363,444,363,453,361,457,351,456,341,462,328,473,329,491,265,495,264,515,255,516,250,524,239,524,252,538,249,550,244,551"></map>
</figure>

<p><span style="color: #28a1c5;"><abbr title="quatrième">4<sup style="color:#28a1c5">ème</sup></abbr> Groupe</span>.</p>
<p>Au bas du Char d'<mark>Hercule</mark>,
<a href="#area_envie" title="l'Envie" id="envie">l'Envie</a>, <a href="#area_colere" title="la Colère" id="colere">la Colère</a>, <a href="#area_haine" title="la Haine" id="haine">la Haine</a>, <a href="#area_discorde" title="la Discorde" id="discorde">la Discorde</a> et <a href="#area_autresvices" title="les autres Vices" id="autresvices">les autres Vices</a>, dont le nouveau Dieu a triomphé, sont précipités du Ciel,
l'Envie seule est encore la plus proche du Héros,
elle le menace,
et sa fureur ne semble l'abandonner qu'à regret,
pour faire connaître que ce Monstre est le plus dangereux et le plus acharné de tous les vices, et l'unique dont la rage s'étend jusqu'au delà du trépas.</p>

<!-- Page 4 -->

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-640.jpg" alt="François Lemoyne, « Neptune regarde avec joye, Pluton paraît en détournant ses regards », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" title="François Lemoyne, « Neptune regarde avec joye, Pluton paraît en détournant ses regards », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" width="640" height="685" loading="lazy" decoding="async" usemap="#img_hercule7" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1920.jpg 1920w"></picture><figcaption>Neptune <q cite="#neptune">regarde avec joye</q>, Pluton <q cite="#pluton">aparaît en détournant ses regards</q></figcaption><map name="img_hercule7" id="img_hercule7"><area id="area_cibele" alt="Cibèle" title="Cibèle" href="#cibele" shape="poly" coords="92,538,97,532,109,530,121,536,132,540,140,552,143,543,150,541,152,532,162,535,168,532,168,526,165,521,170,517,178,514,183,508,183,499,194,496,199,491,206,492,220,515,231,511,228,499,234,495,234,487,244,498,255,498,266,503,256,492,245,480,241,470,228,467,221,459,221,453,216,448,211,446,215,440,218,435,221,428,218,419,207,413,199,415,193,422,191,429,191,439,191,442,182,438,174,440,170,443,162,438,152,437,144,437,127,438,119,435,114,445,120,448,125,444,136,444,142,448,149,450,154,445,159,451,154,453,148,453,140,456,130,456,121,456,114,454,108,460,98,462,88,469,81,477,75,485,72,497,77,517,83,525,89,530"><area id="area_unamour" alt="un Amour" title="un Amour" href="#unamour" shape="poly" coords="261,504,271,504,266,491,266,481,272,480,276,485,279,482,276,474,269,472,268,465,274,464,276,453,275,440,270,429,265,423,266,415,258,410,261,407,257,401,258,398,253,399,250,398,246,402,239,402,230,407,226,405,222,410,218,410,218,416,229,421,225,426,232,430,235,439,240,443,239,452,242,465,242,474,246,483,251,488,256,496"><area id="area_minerve" alt="Minerve" title="Minerve" href="#minerve" shape="poly" coords="122,286,127,276,136,267,149,268,159,269,172,276,182,283,187,284,191,281,192,272,198,264,202,263,214,254,222,253,253,226,256,231,226,254,226,257,222,262,217,262,209,270,213,276,217,281,217,289,223,292,228,289,236,285,242,287,246,284,252,290,255,296,253,302,250,308,243,310,237,311,229,308,221,309,221,318,207,336,195,344,186,338,177,339,176,335,167,330,168,320,165,309,158,300,152,295,145,300,137,297,128,296"><area id="area_ceres" alt="Céres" title="Céres" href="#ceres" shape="poly" coords="126,416,129,415,134,419,143,413,151,412,156,415,154,406,158,395,166,388,173,385,180,387,180,381,184,380,187,378,196,378,192,383,185,391,180,396,174,403,173,409,179,409,184,406,188,400,194,398,198,395,205,395,210,398,214,401,220,405,227,405,231,408,237,405,242,402,241,399,243,394,241,391,243,385,242,381,247,371,251,364,254,354,255,348,252,341,255,336,256,328,254,319,246,316,239,320,235,329,235,337,230,344,218,345,216,344,220,343,225,342,221,336,213,336,207,341,197,345,186,339,177,340,167,345,163,353,161,352,154,355,148,366,144,377,140,394,141,403,136,410"><area id="area_neptune" alt="Neptune" title="Neptune" href="#neptune" shape="poly" coords="330,602,342,614,349,607,353,594,364,574,364,586,364,601,372,605,386,599,396,604,398,616,404,622,410,627,419,621,434,616,441,607,448,603,448,594,448,580,447,573,445,572,446,566,493,553,499,557,521,554,519,550,504,550,528,540,498,545,509,540,491,543,485,547,445,558,435,555,431,549,436,542,431,531,433,526,443,527,451,521,452,514,451,501,444,495,430,497,425,502,422,495,414,493,392,503,376,508,372,497,362,497,339,471,330,467,322,470,318,480,322,516,327,531,314,542,307,541,302,549,311,553,322,552,329,563,333,554,342,563,343,576,340,590"><area id="area_pluton" alt="Pluton" title="Pluton" href="#pluton" shape="poly" coords="403,622,400,635,403,642,410,644,407,651,379,641,377,647,388,650,383,656,372,660,371,673,371,686,379,697,368,708,367,714,381,727,389,728,396,720,414,722,420,716,430,719,443,719,443,734,459,733,465,725,466,717,469,708,472,699,468,690,475,715,484,727,497,731,500,726,485,698,486,683,520,693,523,698,550,704,529,693,529,690,549,701,529,683,519,686,485,673,488,668,484,660,483,650,475,640,476,631,481,626,491,624,498,618,498,611,501,611,501,608,509,607,512,596,508,586,498,581,486,579,478,582,478,584,469,579,456,578,448,582,448,602,441,605,434,616,418,619,411,627"></map>
</figure>

<p><span style="color: #28a1c5;"><abbr title="cinqième">5<sup style="color:#28a1c5">ème</sup></abbr> Groupe</span>.</p>
<p>Sur le devant et derrière du Char d'<mark>Hercule</mark>,
<a href="#area_cibele" title="Cibèle" id="cibele">Cibèle</a> est dans le sien terminé en créneaux et traîné par des Lions;</p>
<p><a href="#area_unamour" title="un Amour" id="unamour">un Amour</a> en se jouant la soulage du poids de sa Couronne.</p>
<p>Au-dessus dans un plan enfoncé,
on voit <a href="#area_minerve" title="Minerve" id="minerve">Minerve</a> et <a href="#area_ceres" title="Céres" id="ceres">Céres</a> avec leurs attributs personnels,
<a href="#area_neptune" title="Neptune" id="neptune">Neptune</a> et <a href="#area_pluton" title="Pluton" id="pluton">Pluton</a> sont à côté de Cibèle;</p>
<p>le Dieu de la Mer regarde avec joye la gloire du nouveau Dieu,
et Pluton, dont ce Héros a bravé l'Empire, paraît en détournant ses regards, ne point applaudir à son triomphe.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-640.jpg" alt="François Lemoyne, « Zéphyr et Flore, accompagné des Génies de l'Air, jouent avec une Guirlande », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" title="François Lemoyne, « Zéphyr et Flore, accompagné des Génies de l'Air, jouent avec une Guirlande », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" width="640" height="944" loading="lazy" decoding="async" usemap="#img_hercule8" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1920.jpg 1920w"></picture><figcaption>Zéphyr et Flore, accompagné des Génies de l'Air, <q cite="#zephyretflore">jouent avec une Guirlande</q></figcaption><map name="img_hercule8" id="img_hercule8"><area id="area_eole" alt="Éole" title="Éole" href="#eole" shape="poly" coords="274,702,285,701,283,682,290,661,301,658,312,658,314,652,325,649,329,646,334,646,324,638,324,632,332,630,325,622,332,615,349,614,353,615,354,606,355,604,347,582,342,574,341,564,338,562,342,560,337,553,341,553,332,545,330,546,320,542,311,546,304,551,303,562,311,564,304,566,262,563,255,555,268,548,274,549,271,542,251,554,246,552,232,558,231,564,229,564,232,574,241,570,241,581,252,619,251,626,247,628,239,628,238,637,249,641,257,636,273,639,273,662,276,678,272,693"><area id="area_zephyretflore" alt="Zéphyr et Flore" title="Zéphyr et Flore" href="#zephyretflore" shape="poly" coords="378,774,377,768,366,758,366,747,375,744,374,731,367,727,353,723,353,721,369,718,375,712,373,708,377,674,382,666,390,665,396,662,387,655,404,638,398,634,382,644,381,634,398,633,404,638,408,629,424,622,433,624,436,614,434,608,446,606,439,598,431,598,422,604,427,609,420,614,415,619,398,621,393,613,396,608,399,598,402,599,405,594,417,594,417,582,415,573,424,573,424,565,432,565,441,573,439,580,431,584,432,598,439,598,446,606,436,613,434,624,444,621,444,610,450,599,461,591,464,607,471,603,474,612,465,633,468,635,472,629,484,632,491,638,491,644,489,650,494,653,501,664,498,671,486,674,479,685,474,695,470,703,462,709,454,712,448,718,448,725,450,731,449,741,439,741,435,747,425,749,418,752,421,757,418,766,418,769,410,771,404,775,398,772,388,776"><area id="area_geniesdelair" alt="Génie de l'Air" title="Génie de l'Air" href="#geniesdelair" shape="poly" coords="279,737,280,743,287,742,297,744,294,733,301,729,308,729,314,723,319,730,329,723,335,712,346,712,351,707,363,708,370,708,374,707,377,676,383,666,396,662,388,654,403,638,410,629,421,621,432,624,436,615,435,608,444,608,439,597,433,596,422,603,427,608,416,617,398,620,398,632,382,644,382,633,397,632,398,620,388,619,391,614,392,603,382,593,369,595,364,607,366,620,363,621,356,614,348,614,333,612,325,622,333,629,324,632,324,637,334,646,316,651,312,658,300,668,298,674,303,681,309,680,304,698,312,696,307,708,309,714,298,717,288,731"><area id="area_rosee" alt="La Rosée" title="La Rosée" href="#rosee" shape="poly" coords="408,829,419,832,440,837,446,842,465,839,473,846,460,874,464,878,461,888,464,894,466,900,473,902,480,882,488,870,495,849,502,847,508,842,516,847,527,847,527,838,532,827,541,833,541,829,532,817,531,809,542,809,550,801,551,788,547,781,539,775,535,781,533,787,527,793,524,790,525,787,527,784,524,781,524,772,529,762,531,743,520,730,508,717,500,705,498,691,494,693,494,703,491,700,489,702,492,715,488,712,491,728,497,736,490,732,493,743,498,750,497,757,494,768,494,770,487,773,479,776,472,783,464,785,463,779,456,776,456,769,449,764,443,759,435,761,434,766,426,769,429,773,429,779,440,785,443,798,430,799,428,803,417,800,403,804"><area id="area_lesamours" alt="les Amours" title="les Amours" href="#lesamours" shape="poly" coords="492,737,491,733,494,732,491,727,487,712,492,716,489,706,499,702,502,709,531,743,536,742,535,731,542,728,546,717,549,712,551,724,557,720,568,718,567,711,562,708,565,702,568,702,576,711,574,721,577,724,581,717,600,701,601,693,583,691,587,688,593,691,597,685,597,679,600,677,605,682,612,683,615,681,620,686,632,687,635,679,640,677,644,684,647,688,651,699,661,701,663,700,659,688,661,686,666,672,665,661,671,652,669,643,662,638,651,644,638,644,633,640,625,637,619,646,620,653,621,656,619,658,611,655,601,656,593,655,592,653,581,657,574,664,573,657,565,655,556,662,556,671,558,677,550,680,549,683,547,686,538,687,536,695,537,698,529,702,528,695,518,691,513,698,509,705,503,710,499,701,485,711,477,709,469,706,461,710,460,717,464,723,468,725,466,727,463,731,458,727,451,729,450,745,459,744,462,738,463,752,462,759,468,765,475,764,468,767,462,772,462,779,465,784,472,783,475,772,481,769,487,768,491,761,485,753,484,744"><area id="area_nymphesdelapluie" alt="les Nymphes de ta pluye" title="les Nymphes de ta pluye" href="#nymphesdelapluie" shape="poly" coords="618,904,623,904,616,897,621,896,618,887,622,882,611,874,611,870,617,860,616,849,610,846,617,846,624,842,627,833,624,824,616,823,609,825,603,834,592,838,589,844,595,831,594,821,595,811,602,805,609,803,615,794,614,787,608,782,600,785,597,788,591,784,581,785,567,789,558,793,545,803,532,808,531,816,545,832,553,834,560,845,565,859,569,860,572,872,579,869,588,870,597,875,600,884,602,890,608,893"><area id="area_morphee" alt="Morphée endormi" title="Morphée endormi" href="#morphee" shape="poly" coords="290,893,275,882,276,874,289,874,298,857,301,857,300,854,313,842,322,840,328,825,340,817,346,818,352,813,357,816,363,811,369,810,373,810,379,809,385,811,391,823,392,830,403,832,417,840,427,855,431,857,436,874,439,878,442,890,437,902,441,913,452,926,456,927,464,935,462,937,460,942,451,940,442,934,436,927,436,925,419,911,416,894,403,915,393,921,395,914,387,905,386,888,383,883,371,888,374,899,371,900,369,904,373,909,361,911,356,903,358,888,362,883,351,888,344,892,335,892,323,899,309,899,303,892"><area id="area_songes" alt="les Songes" title="les Songes" href="#songes" shape="poly" coords="514,946,505,948,499,944,494,937,490,931,485,931,486,935,480,941,471,931,470,927,465,927,459,929,450,923,441,914,436,902,441,889,439,879,431,858,417,841,402,831,391,830,385,811,378,810,367,810,357,816,349,812,345,818,338,818,329,824,324,831,310,820,308,826,299,820,296,826,288,825,281,825,279,833,271,829,262,831,255,831,254,824,258,824,254,817,257,811,246,810,237,806,229,810,226,813,223,809,210,815,196,809,188,813,176,814,174,803,181,799,183,801,185,799,192,797,191,794,182,793,197,786,210,797,215,789,224,785,230,785,235,788,242,786,249,782,241,774,231,772,237,766,244,760,259,758,260,770,267,769,274,766,282,770,288,775,284,785,278,793,272,794,269,799,262,797,258,798,258,803,267,805,272,809,280,808,285,809,289,800,296,795,294,785,299,779,307,775,304,772,308,770,307,765,318,759,329,764,331,776,337,776,343,774,353,766,363,772,364,779,367,789,366,798,367,810,378,810,385,811,392,830,402,831,417,841,431,858,439,881,446,882,451,874,460,874,466,878,464,887,465,899,473,901,486,896,493,898,498,902,493,913,499,918,502,926,506,938"><area id="area_geniedeleternite" alt="Génie de l'Éternité" title="Génie de l'Éternité" href="#geniedeleternite" shape="poly" coords="345,474,357,462,363,449,359,456,369,442,373,435,377,442,378,448,389,445,393,435,392,432,385,430,388,428,385,427,387,424,393,426,400,421,400,414,396,407,388,405,381,406,377,413,377,417,373,418,370,412,367,404,364,406,362,393,373,386,378,375,378,363,375,356,367,354,360,356,355,361,349,366,346,374,346,382,348,388,352,392,355,398,362,392,361,389,368,386,372,379,375,373,375,366,374,360,368,358,361,359,357,363,354,369,351,375,352,377,352,382,355,388,361,388,362,392,355,398,355,408,357,412,353,419,348,426,344,432,338,444,339,453,342,459,342,472,0"><area id="area_saturne" alt="Saturne" title="Saturne" href="#saturne" shape="poly" coords="426,565,432,564,437,567,443,570,444,556,442,548,435,535,431,529,433,523,439,520,449,525,462,521,475,508,477,510,484,504,489,505,487,500,517,500,513,495,489,494,484,491,472,498,465,505,456,508,451,507,455,501,471,498,477,494,458,496,459,475,447,479,434,490,426,492,426,488,431,483,432,475,429,466,421,461,414,462,408,468,408,471,405,471,410,456,410,447,389,446,376,451,363,454,331,482,360,488,370,485,376,483,376,486,369,492,363,500,343,500,351,523,356,533,366,540,378,542,369,538,361,531,355,518,354,510,360,515,369,514,376,520,383,520,391,525,391,538,390,549,398,558,403,555,406,541,410,536,412,530,414,529,420,532,425,535,424,545,421,555"></map>
</figure>

<p><span style="color: #28a1c5;">Au <abbr title="sixième">6<sup style="color:#28a1c5">ème</sup></abbr> Groupe</span>.</p>
<p>On voit <a href="#area_eole" title="Éole" id="eole">Éole</a>, Dieu des Vents;</p>
<p>à côté de lui sont <a href="#area_zephyretflore" title="Zéphyr et Flore" id="zephyretflore">Zéphyr et Flore</a>, accompagné, des <a href="#area_geniesdelair" title="Génie de l'Air" id="geniesdelair">Génies de l'Air</a>;</p>
<p>ces tendres Divinités dont les soupirs font naître les Fleurs,
se jouent avec une Guirlande formée et assortie par <a href="#area_lesamours" title="les Amours" id="lesamours">les Amours</a>.</p>
<p><a href="#area_rosee" title="La Rosée" id="rosee">La Rosée</a> est sur le devant,
elle penche son Urne sur les nuages
où sont <a href="#area_nymphesdelapluie" title="les Nymphes de ta pluye" id="nymphesdelapluie">les Nymphes de ta pluye</a>;</p>
<p>au-dessous est <a href="#area_morphee" title="Morphée endormi" id="morphee">Morphée endormi</a>,
<a href="#area_songes" title="les Songes" id="songes">les Songes</a>, dont les aîles sont formées par des nuées, répandent sur lui des pavots.</p>
<p>Au-dessus d'Éole, et dans l'éloignement
on voit le <a href="#area_geniedeleternite" title="Génie de l'Éternité" id="geniedeleternite">Génie de l'Éternité</a>,
tenant son Symbole représenté par un Serpent en cercle,
il le montre à <a href="#area_saturne" title="Saturne" id="saturne">Saturne</a>
et semble insulter à sa Faux, qui ne peut rien sur la Vertu.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-640.jpg" alt="François Lemoyne, « Iris paraît sur son Arc », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" title="François Lemoyne, « Iris paraît sur son Arc », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" width="640" height="676" loading="lazy" decoding="async" usemap="#img_hercule9" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1920.jpg 1920w"></picture><figcaption><q cite="#iris">Iris paraît sur son Arc</q></figcaption><map name="img_hercule9" id="img_hercule9"><area id="area_iris" alt="Iris" title="Iris" href="#iris" shape="poly" coords="387,617,381,578,370,547,359,525,343,499,334,494,323,475,302,453,281,434,279,420,275,423,269,416,276,414,272,410,271,401,274,385,289,393,300,400,309,409,315,408,323,402,327,399,331,400,335,397,333,389,333,382,340,375,346,372,352,372,357,376,359,382,356,391,361,385,366,386,370,381,364,371,360,368,342,364,349,360,356,359,366,359,374,367,384,380,384,382,377,396,378,401,374,405,385,417,393,423,397,419,407,425,412,434,413,442,408,449,400,455,393,447,386,439,377,437,378,446,384,455,391,467,392,480,398,487,400,495,406,501,403,510,412,530,422,555,428,577,431,604,434,620,419,618,404,626,396,619"><area id="area_aurore" alt="l'Aurore" title="l'Aurore" href="#aurore" shape="poly" coords="257,576,253,579,242,569,237,561,229,559,229,554,224,544,221,552,213,554,211,564,200,572,192,565,186,560,188,553,192,547,188,539,188,535,179,530,176,532,169,534,162,536,156,529,156,516,162,512,166,513,169,504,174,501,181,492,184,483,184,473,191,469,194,469,192,465,193,458,198,453,203,454,202,449,205,446,210,444,214,453,207,455,212,460,210,470,208,471,215,475,221,480,228,480,234,487,236,491,250,498,257,503,259,515,265,519,272,525,269,533,268,541,269,550,264,560,253,561,253,569"><area id="area_etoiles" alt="plusieurs Étoiles personnifiées" title="plusieurs Étoiles personnifiées" href="#etoiles" shape="poly" coords="252,465,249,466,246,457,239,455,237,461,240,466,243,467,238,473,242,483,239,492,245,496,252,499,261,506,260,515,268,518,272,526,271,532,268,535,269,544,268,552,265,557,269,557,276,561,279,565,284,562,288,565,298,564,304,562,311,564,315,571,324,569,327,561,334,561,340,563,348,564,353,557,353,549,354,543,353,534,349,527,353,524,355,516,349,506,342,502,338,507,334,514,334,523,328,525,330,520,329,514,325,510,326,505,324,499,316,502,316,507,314,514,305,511,302,503,291,498,286,495,291,495,298,495,293,486,284,481,278,484,273,478,268,480,264,482,259,480,259,471,256,467"></map>
</figure>

<p><span style="color: #28a1c5;"><abbr title="septième">7<sup style="color:#28a1c5">ème</sup></abbr> Groupe</span>.</p>
<p>En allant de suite vers l'Angle, <a href="#area_iris" title="Iris" id="iris">Iris</a> paraît sur son Arc,
elle jette un regard sur la Fête céleste;</p>
<p>sous l'Arc-en-Ciel paraît <a href="#area_aurore" title="l'Aurore" id="aurore">l'Aurore</a> accompagnée de <a href="#area_etoiles" title="plusieurs Étoiles personnifiées" id="etoiles">plusieurs Étoiles personnifiées</a>.</p>
</div>

<!-- Page 5 -->

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-640.jpg" alt="François Lemoyne, « Les Muses sont s'aprètent à exécuter le Concert ordonné par Apollon », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" title="François Lemoyne, « Les Muses sont s'aprètent à exécuter le Concert ordonné par Apollon », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" width="640" height="800" loading="lazy" decoding="async" usemap="#img_hercule10" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1920.jpg 1920w"></picture><figcaption>Les Muses <q cite="#lesmuses">sont s'aprètent à exécuter le Concert ordonné par Apollon</q></figcaption><map name="img_hercule10" id="img_hercule10"><area id="area_plusieursgenies" alt="plusieurs Génies" title="plusieurs Génies" href="#plusieursgenies" shape="poly" coords="88,236,90,230,94,225,90,220,90,217,95,224,97,219,100,225,98,239,100,241,109,238,110,226,113,226,117,225,118,219,123,224,129,223,132,213,127,212,126,209,127,207,128,211,134,210,133,201,148,198,148,210,147,216,149,221,154,220,155,224,158,227,166,228,170,235,176,233,179,225,183,233,189,246,195,244,193,237,195,239,200,235,195,228,191,228,194,222,189,216,191,214,195,217,197,210,195,207,193,206,194,199,187,194,181,200,179,188,171,187,171,192,165,191,159,191,163,188,162,181,153,187,151,186,152,180,151,173,140,176,138,184,142,193,148,197,133,201,125,201,118,204,115,208,113,205,114,200,113,194,107,197,103,205,103,212,110,212,103,211,98,199,92,199,91,192,88,190,90,180,91,170,95,169,91,168,85,183,82,185,83,182,81,178,74,179,71,188,65,191,64,198,71,204,71,212,72,219,78,223,81,233"><area id="area_apollon" alt="Apollon" title="Apollon" href="#apollon" shape="poly" coords="215,314,222,321,239,317,246,325,254,325,259,329,272,339,276,353,279,361,296,370,294,376,298,384,317,388,310,379,305,366,309,358,313,345,310,331,325,319,320,314,313,317,304,324,301,313,298,306,298,297,304,298,312,297,319,290,322,283,316,274,307,270,290,281,293,278,288,270,280,260,264,257,260,253,255,244,260,240,252,222,252,235,244,234,246,245,245,250,234,241,226,251,229,258,220,263,223,272,234,273,239,281,246,285,257,288,254,298,244,301,239,308,232,310,229,306,221,308"><area id="area_geniedesbeauxarts" alt="Génie des Beaux Arts" title="Génie des Beaux Arts" href="#geniedesbeauxarts" shape="poly" coords="310,357,314,362,323,358,323,352,320,352,327,351,333,357,332,364,325,364,328,368,340,369,345,372,346,382,346,389,355,396,356,403,359,404,364,413,367,401,358,391,355,381,352,369,347,367,346,360,357,365,364,372,376,374,376,367,372,366,358,355,360,352,367,354,386,348,385,342,364,338,352,339,344,344,344,346,339,345,343,336,335,324,324,326,325,336,320,342"><area id="area_lesmuses" alt="Les Muses" title="Les Muses" href="#lesmuses" shape="poly" coords="11,452,60,453,49,460,80,463,80,450,115,454,115,463,158,467,135,489,142,493,167,484,189,489,191,498,169,528,218,522,245,549,284,577,305,575,297,564,303,549,304,510,330,500,353,506,356,519,373,529,385,512,390,499,376,473,368,470,369,460,378,461,400,450,408,440,442,452,449,460,460,463,475,464,490,470,492,476,495,489,499,496,513,484,513,468,520,466,523,445,517,432,529,417,550,421,562,411,569,424,569,442,575,443,580,419,589,405,586,397,593,383,601,383,595,368,595,344,603,355,608,351,612,347,615,325,610,314,608,300,611,287,600,282,600,268,605,264,611,263,620,266,621,257,612,256,605,256,597,258,596,245,586,245,571,248,561,256,557,265,552,264,543,269,542,256,531,250,517,249,504,258,500,274,489,275,472,278,470,286,474,293,483,296,488,304,490,315,488,324,476,324,462,321,455,332,452,346,452,358,443,355,434,362,431,352,421,346,411,346,403,356,402,368,407,374,422,380,427,389,429,399,426,405,411,397,403,402,391,401,406,413,414,411,432,423,434,431,443,435,442,452,408,440,411,430,376,432,359,428,359,416,361,405,349,399,339,403,331,412,338,419,320,424,314,419,319,414,319,404,309,399,296,402,290,413,286,419,275,418,272,404,280,396,283,388,282,379,273,375,266,376,267,373,275,368,271,359,260,354,247,352,238,359,228,356,220,356,217,364,222,375,203,381,211,376,211,367,208,355,198,351,178,353,177,366,178,374,174,380,170,379,159,384,150,387,143,382,127,384,121,388,114,380,108,386,107,392,101,391,100,398,71,421,50,431,48,427,31,431,21,431"><area id="area_lhistoire" alt="l'Histoire" title="l'Histoire" href="#lhistoire" shape="poly" coords="335,586,351,585,358,580,368,587,357,598,361,608,376,610,393,621,402,630,415,630,422,625,425,619,436,615,445,603,454,607,455,618,463,621,472,624,480,625,484,616,491,617,494,624,504,622,519,624,525,618,510,614,501,606,507,593,502,576,493,562,488,556,475,558,464,552,450,558,446,552,448,550,437,533,431,530,427,539,421,516,429,508,427,502,424,504,421,493,415,514,413,533,402,556,400,546,396,536,387,533,376,542,376,554,378,562,382,568,372,570,361,569,347,573"><area id="area_lapeinture" alt="la Peinture" title="la Peinture" href="#lapeinture" shape="poly" coords="474,558,489,556,495,564,506,594,500,605,509,614,517,614,523,609,532,609,541,605,552,612,575,605,581,608,589,604,585,595,586,586,577,580,583,573,578,568,577,558,576,546,583,534,581,522,575,513,566,508,567,499,534,452,531,454,527,470,516,482,503,496,488,497,480,503,477,502,474,493,465,485,455,478,444,484,441,498,443,510,452,513,451,520,457,542"></map>
</figure>

<p>Sur le haut du <span style="color: #28a1c5;">8<sup style="color:#28a1c5">ème</sup> groupe</span>,</p>
<p>on voit le Temple de Mémoire ouvert;</p>
<p><a href="#area_plusieursgenies" title="plusieurs Génies" id="plusieursgenies">plusieurs Génies</a> s'empressent d'y attacher des Médaillons à la mémoire des Grands Hommes;</p>
<p>à côté, <a href="#area_apollon" title="Apollon" id="apollon">Apollon</a> s'élève sur un nuage avec le <a href="#area_geniedesbeauxarts" title="Génie des Beaux Arts" id="geniedesbeauxarts">Génie des Beaux Arts</a>.</p>
<p><a href="#area_lesmuses" title="Les Muses" id="lesmuses">Les Muses</a> sont au-dessous,
elles s'aprètent à exécuter le Concert ordonné par Apollon;</p>
<p>dans l'Angle auprès des Muses,
<a href="#area_lhistoire" title="l'Histoire" id="lhistoire">l'Histoire</a> exhorte <a href="#area_lapeinture" title="la Peinture" id="lapeinture">la Peinture</a> à immortaliser comme elle, les Héros et leurs grandes Actions.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-640.jpg" alt="François Lemoyne, « Silène avec une troupe de Faunes et d'Enfans forment une Fête Bacchique », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" title="François Lemoyne, « Silène avec une troupe de Faunes et d'Enfans forment une Fête Bacchique », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" width="640" height="496" loading="lazy" decoding="async" usemap="#img_hercule11" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1920.jpg 1920w"></picture><figcaption><q cite="#silene">Silène avec une troupe de Faunes et d'Enfans forment une Fête Bacchique</q></figcaption><map name="img_hercule11" id="img_hercule11"><area id="area_castoretpollux" alt="Castor et Pollux" title="Castor et Pollux" href="#castoretpollux" shape="poly" coords="373,303,381,304,388,294,396,289,412,286,422,284,426,285,432,283,440,286,442,296,444,298,455,294,460,299,468,304,477,304,483,296,490,302,501,309,483,323,485,329,538,290,533,286,508,302,498,294,494,288,494,275,491,274,495,267,494,256,489,247,480,247,478,254,470,247,465,241,460,250,448,240,435,241,435,253,437,259,437,267,434,257,430,256,424,263,417,245,421,245,427,249,434,244,419,226,398,231,390,225,378,230,375,235,372,234,366,240,358,237,343,250,343,255,333,258,351,267,357,262,357,276,367,276,368,278,357,289,356,296,363,299"><area id="area_silene" alt="Silène" title="Silène" href="#silene" shape="poly" coords="480,437,488,434,478,422,474,410,483,421,488,432,495,438,507,437,500,430,492,416,483,409,492,409,493,406,479,404,475,394,478,388,481,389,481,382,485,375,472,375,470,380,473,385,471,391,466,391,461,383,456,385,462,376,461,368,452,364,445,370,445,377,441,381,447,387,457,391,455,394,439,391,439,401,444,407,454,412,454,420,462,427,461,436,470,442"><area id="area_faunesetenfans" alt="une troupe de Faunes et d'Enfans" title="une troupe de Faunes et d'Enfans" href="#faunesetenfans" shape="poly" coords="473,367,477,374,485,376,495,386,503,390,497,400,484,403,489,397,488,390,479,390,475,395,483,404,494,407,505,416,503,407,513,409,517,418,524,419,531,410,527,392,518,387,523,383,523,375,516,367,508,374,506,380,499,375,491,366,481,355,473,367,454,360,444,372,442,379,443,382,457,390,456,393,440,391,439,401,443,406,454,412,448,420,442,424,437,434,427,437,414,430,398,429,391,440,390,450,379,453,379,466,372,473,361,474,352,468,343,462,337,470,330,464,332,451,338,442,342,437,343,427,353,426,357,432,366,432,366,425,376,430,379,439,382,445,391,439,398,429,395,419,398,408,392,403,395,392,403,395,407,390,418,393,416,383,419,371,428,360,432,363,432,355,442,350,450,353,454,360"></map>
</figure>

<p><span style="color: #28a1c5;"><abbr title="neuvième">9<sup style="color:#28a1c5">ème</sup></abbr> Groupe</span>.</p>
<p>Sur la gauche et au-dessus des Muses,
paroît la Constellation de <a href="#area_castoretpollux" title="Castor et Pollux" id="castoretpollux">Castor et Pollux</a>.</p>
<p>Dans la demi teinte,
<a href="#area_silene" title="Silène" id="silene">Silène</a> avec <a href="#area_faunesetenfans" title="une troupe de Faunes et d'Enfans" id="faunesetenfans">une troupe de Faunes et d'Enfans</a>, forment une Fête Bacchique.  </p>
<p><span style="color: #28a1c5;">Les Cartels, dont les milieux de la corniche sont occupés, représentent les travaux d'<mark>Hercule</mark>;</span></p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-640.jpg" alt="François Lemoyne, « Cartel du Cerbère et du Lion de Némée », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" title="François Lemoyne, « Cartel du Cerbère et du Lion de Némée », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" width="640" height="329" loading="lazy" decoding="async" usemap="#img_hercule12" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1920.jpg 1920w"></picture><figcaption>Cartel du <q cite="#cerbere" style="quotes:'' ''">Cerbère</q> et du Lion de Némée</figcaption><map name="img_hercule12" id="img_hercule12"><area id="area_cerbere" alt="Cerbère" title="Cerbère" href="#cerbere" shape="poly" coords="230,242,239,227,245,228,256,225,260,208,258,198,255,199,254,208,246,197,236,195,234,188,239,183,246,183,238,179,242,174,237,168,224,170,213,179,212,185,191,183,179,194,176,209,182,213,185,216,195,214,202,212,209,217,208,224,216,230,221,233,224,236,225,239"><area id="area_lyondenemee" alt="Lyon de la Forêt de Némée" title="Lyon de la Forêt de Némée" href="#lyondenemee" shape="poly" coords="354,142,349,157,352,164,355,166,359,169,359,180,362,182,366,181,366,188,371,192,379,182,376,193,383,189,376,199,382,204,384,213,378,223,376,231,384,231,388,227,388,217,392,206,392,198,398,193,406,206,399,215,400,221,396,229,398,232,402,226,407,224,415,226,413,217,408,212,406,206,398,193,399,185,403,175,401,172,393,162,390,164,386,157,384,158,382,153,373,152,369,151,359,151,349,156,353,142,337,137,328,130,327,134,311,128,301,131,298,139,299,144,315,145,328,149,335,148,340,149"></map>
</figure>

<p><span style="color: #28a1c5;">dans le premier</span>, au-dessus de la Cheminée, on voit d'un côté <a href="#area_cerbere" title="Cerbère" id="cerbere">Cerbère</a> avec ses trois têtes,
et de l'autre la peau du <a href="#area_lyondenemee" title="Lyon de la Forêt de Némée" id="lyondenemee">Lyon de la Forêt de Némée</a>, avec la massue, <abbr title="et cétéra">etc</abbr>.</p>


<!-- Page 6 -->

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-640.jpg" alt="François Lemoyne, « Cartel des Pommes des Hespérides et du Centaure Nessus », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" title="François Lemoyne, « Cartel des Pommes des Hespérides et du Centaure Nessus », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" width="640" height="269" loading="lazy" decoding="async" usemap="#img_hercule13" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1920.jpg 1920w"></picture><figcaption>Cartel des Pommes des Hespérides et du <q cite="#nessus" style="quotes:'' ''">Centaure Nessus</q></figcaption><map name="img_hercule13" id="img_hercule13"><area id="area_sanglier" alt="le Sanglier" title="le Sanglier" href="#sanglier" shape="poly" coords="117,178,125,179,145,180,148,171,158,171,161,160,168,160,168,168,166,172,176,172,183,159,193,162,192,166,199,172,206,175,210,178,218,179,225,177,236,180,235,172,230,164,230,160,225,157,226,154,230,149,227,145,216,147,211,150,211,160,202,165,194,162,184,159,180,153,174,154,168,160,161,160,157,163,148,162,145,165,140,160,133,162,126,167,120,171"><area id="area_nessus" alt="le Centaure Nessus" title="le Centaure Nessus" href="#nessus" shape="poly" coords="364,169,364,176,371,178,378,166,386,167,390,175,401,175,412,148,419,145,418,134,420,128,431,129,434,135,441,138,446,138,454,132,449,113,445,105,437,93,441,94,442,84,445,79,442,68,434,64,424,65,418,73,417,75,411,68,404,69,388,82,379,95,379,105,359,113,368,120,363,128,367,132,363,139,369,141,367,147,369,154,371,159,373,165"></map>
</figure>

<p><span style="color: #28a1c5;">Au deuxième Cartel</span>, outre <a href="#area_sanglier" title="le Sanglier" id="sanglier">le Sanglier</a> qu'<mark>Hercule</mark> apporta vif à Euristhée,
on voit les Harpies et les Pommes d'or des Hespérides,
de l'autre côté est <a href="#area_nessus" title="le Centaure Nessus" id="nessus">le Centaure Nessus</a>, <abbr title="et cétéra">etc</abbr>.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-640.jpg" alt="François Lemoyne, « Cartel de Diomède », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" title="François Lemoyne, « Cartel de Diomède », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" width="640" height="417" loading="lazy" decoding="async" usemap="#img_hercule14" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1920.jpg 1920w"></picture><figcaption>Cartel de Diomède, <q cite="#diomede">dévoré par ses propres Chevaux</q></figcaption><map name="img_hercule14" id="img_hercule14"><area id="area_diomede" alt="Diomède dévoré par ses propres Chevaux" title="Diomède dévoré par ses propres Chevaux" href="#diomede" shape="poly" coords="182,304,198,305,203,300,203,291,268,293,272,298,283,299,283,294,299,294,301,304,309,308,327,301,331,294,388,295,393,306,430,306,428,293,440,290,439,288,446,252,442,260,439,259,436,250,440,240,447,236,454,240,455,235,451,227,455,219,458,220,464,216,474,218,476,228,477,237,489,249,490,274,486,278,473,271,481,292,487,302,472,303,462,285,458,285,461,292,458,303,472,303,488,302,493,286,490,274,489,250,497,247,506,240,512,222,506,209,499,201,488,203,481,209,487,217,488,231,494,225,494,217,487,217,481,207,476,202,468,197,457,197,454,197,444,187,431,180,431,172,418,159,406,159,407,156,393,156,386,158,387,155,378,157,371,162,363,167,360,172,357,173,353,181,346,191,345,184,346,177,340,170,335,156,339,155,325,145,317,145,309,155,307,165,300,169,300,175,304,183,301,187,289,186,280,187,278,189,266,185,252,184,243,188,236,196,231,202,229,197,231,192,243,188,236,183,229,180,221,185,216,199,217,211,224,222,223,227,224,234,229,242,218,262,211,264,197,279,193,293"></map>
</figure>

<p><span style="color: #28a1c5;">Du côté opposé au premier Cartel</span>,
c'est <a href="#area_diomede" title="Diomède dévoré par ses propres Chevaux" id="diomede">Diomède dévoré par ses propres Chevaux</a>, qu'il nourrissoit de chair humaine.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-640.jpg" alt="François Lemoyne, « Cartel de Diomède », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" title="François Lemoyne, « Cartel de Diomède », détail de l'Apothéose d'Hercule, Salon d'Hercule, Château de Versailles" width="640" height="240" loading="lazy" decoding="async" usemap="#img_hercule15" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1920.jpg 1920w"></picture><figcaption>Cartel de la <q cite="#labiche" style="quotes:'' ''">Biche aux Cornes d'or</q> et Cacus</figcaption><map name="img_hercule15" id="img_hercule15"><area id="area_labiche" alt="la Biche aux Cornes d'or" title="la Biche aux Cornes d'or" href="#labiche" shape="poly" coords="203,142,205,151,207,156,202,169,243,173,248,170,252,170,256,173,264,174,266,168,272,164,273,156,278,155,291,158,297,154,305,137,299,139,301,136,296,127,291,131,289,137,290,144,285,149,272,151,276,137,273,127,272,124,279,117,273,110,266,113,260,126,261,134,261,139,258,141,248,135,249,142,242,144,232,152,231,155,222,155,236,136,234,133,232,134,225,129,217,130,213,137,210,142"><area id="area_cacus" alt="Cacus étouffé par Alcide" title="Cacus étouffé par Alcide" href="#cacus" shape="poly" coords="438,169,438,166,430,165,427,163,426,159,438,146,446,130,443,121,436,119,422,124,427,115,428,106,424,98,428,98,430,88,423,80,414,79,412,86,409,87,401,82,394,84,393,88,385,89,382,94,371,104,371,122,388,121,378,130,381,132,378,135,383,135,376,141,381,142,378,149,379,161,370,163,368,173,386,178,399,178,410,170"></map>
</figure>

<p><span style="color: #28a1c5;">Le troisième Cartel</span> représente d'un côté <a href="#area_labiche" title="la Biche aux Cornes d'or" id="labiche">la Biche aux Cornes d'or</a>, avec la Corne d'abondance, et de l'autre <a href="#area_cacus" title="Cacus étouffé par Alcide" id="cacus">Cacus étouffé par Alcide</a>.</p>
<p>Tous ces Cartels sont couronnés par <span style="color: #28a1c5;">une grande Guirlande de feuilles de chêne, que soutiennent les Génies de la Vertu</span>.</p>
<p>Cette Guirlande, feinte de stuc, aussi-bien que les figures gui entourent les Cartels et les Vertus, qui caractérisent les actions d'<mark>Hercule</mark>,
règne tout du long au pourtour de l'Attique,
qui est feint de marbre blanc, veiné avec des panneaux de <a href="#note_breche" title="brèche" id="breche">brèche</a> violette;
le couronnement de l'Attique est rehaussé d'or,
<span style="color: #28a1c5;">le tout soutenu par la corniche du Salon</span>.</p>
<p><span style="color: #28a1c5;">Cette corniche est appuyée sur vingt pilastres couples des plus beaux marbres</span>,
des quatre plus fameuses Carrières du Royaume, avec un choix exquis;</p>
<p>sçavoir, du marbre appelé Dantin, du Vercampan, du Rancé et du blanc veiné,
dont les bases et les chapiteaux sont dorés, aussi bien que la corniche et les Chambranles des Portes, <abbr title="et cétéra">etc</abbr>.</p>
<p>L'éclat de cette dorure et du marbre, qui s'allient et se prêtent, pour ainsi-dire, un mutuel secours, font un effet aussi magnifique qu'admirable,
et semblent servir de trophée à la Peinture, à laquelle ils servent d'ornement.</p>

<!-- Page 7 -->

<p><span style="color: #28a1c5;">Deux fameux Tableaux de PAUL VÉRONÈSE</span> occupent les deux principales places de ce Salon;</p>
<p>François Le Moyne, ne pouvait avoir un plus digne ni plus célèbre concurrent.</p>
<p>Le premier de ces Tableaux, de 52 pieds de large, sur 15 de haut, représente <span style="color: #28a1c5;">le Festin chés le Pharisien</span>.</p>
<p>Il est placé vis-à-vis la cheminée, et l'autre de 11 pieds de hauteur, sur 8 pieds de large, occupe le haut de la cheminée.</p>
<p>Il représente <span style="color: #28a1c5;">Éliézer qui demande Rébecca en mariage</span>, <abbr title="et cétéra">etc</abbr>.</p>
<p>La bordure de ce Tableau incrustée dans le marbre, est soutenue par deux consoles,
le tout doré d'or moulu, ainsi que tous les autres ornemens de la Cheminée,
dont le milieu est marqué par une tête d'<mark>Hercule</mark>, coiffée d'un mufle de Lyon,
accompagnée de deux grandes feuilles d'ornemens;</p>
<p>avec deux Cornes d'abondance, terminées au bas du Chambranle par deux têtes ou dépouilles de Lyon.</p>
<p><span style="color: #28a1c5;">Cet Ouvrage est de feu <abbr title="Antoine François">AF.<abbr> Vassé, habile Sculpteur de Toulon</span>.</p>
<p>La bordure, du grand Tableau de P. Véronèse, incrustée dans le marbre et soutenue par quatre consoles, aussi dorées d'or moulu, est du même Sculpteur.</p>
<p><span style="color: #28a1c5;">La bordure du Tableau de la Cheminée, les Chenets, <abbr title="et cétéra">etc</abbr>. sont de <abbr title="Monsieur">M.<abbr> Verbrec, Sculpteur de l'Académie</span>.</p>
<p>Voilà le détail le plus exact et le plus méthodique que nous puissions faire, pour donner une idée de tout l'Ouvrage à ceux qui ne sont pas à portée de le voir.</p>
<p>A l'égard du rapport des parties au tout ensemble, nous ne sçaurions y suppléer par la narration, non-plus qu'à ce qui concerne l'intelligence, la finesse et le sublime de l'Art, <abbr title="et cétéra">etc</abbr>,
jusqu'à présent nous pouvons assurer que tout a concouru unanimement pour la gloire de l'Ouvrage et de l'Auteur,
mais c'est au Public équitable et éclairé, à juger souverainement du parfait succès en général et des parties où il pouroit y avoir encore quelque chose à désirer.</p>
<p>Nous ne pouvons cependant nous refuser, enhardis et animés par la vue et le souvenir de ce pénible et laborieux Ouvrage, de louer, avec tout le Public, les belles formes, le brillant et le tendre du coloris, la régularité des Sujets bien renfermés, les beaux caractères, l'observation exacte du Costume et des convenances,
car rien n'est négligé et
tout est terminé comme dans un Tableau de Chevalet,
sans compter tant de choses piquantes et vrayes, qui frappent et étonnent le Spectateur;</p>
<p>telles entr'autres que certains Groupes de nuages
qui enjambent sur les figures et qui font l'effet des accidens du cas fortuit,
ce qui caractérise le plus l'imitation et la fait admirer aux Sçavans et aux ignorans.</p>
<p>Une observation que bien des personnes ont faite et par laquelle nous terminons cet Article,
c'est qu'en se mettant sous la porte du Salon, du coté de la Chapelle,
d'où l’on voit les deux Plafonds, sçavoir, celui du Salon qui sert de Vestibule à la Chapelle, qui n'est point peint,
et celui où l'on a représenté <cite>L'Apothéose d'Hercule</cite> dont on vient de lire la Description,
et qui sont à une même hauteur, on voit d'un coup d'œil, contre l'opinion commune,
que celui qui est peint, paraît beaucoup plus élevé que celui qui n'est point peint, et où l'on ne voit que du blanc.</p>
<p>Nous croyons que cette opposition et ce contraste qu'on peut remarquer ici fort commodément dans deux Salons contigus et élevés à une hauteur égale, mérite une attention particulière des Connaisseurs.</p>

<footer>

</footer>

<aside>

<h3>Notes:</h3>

<h4 id="note_pieds" class="blue note">pied:</h4>
<div class="notices blue">
  <p>unité de mesure de l'Ancien Régime. 1 pied équivaut 32,48 cm. Le plafond mesure donc 20,8 × 16,6 m, pour 2,8 m de profondeur.</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#pieds" title="retour à la note « pied »">ce plafond porte 64 pieds ↩</a></p>
</footer>

<h4 id="note_breche" class="blue note">Brèche:</h4>
<div class="notices blue">
  <p>Terme de géologie. Marbre noir, mêlé de taches blanches et jaunes, qu'on tire des Pyrénées et d'autres lieux.</p>
</div>
<footer>
  <p class="puce">revenir au texte: <a href="#breche" title="brèche">Brèche ↩</a></p>
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