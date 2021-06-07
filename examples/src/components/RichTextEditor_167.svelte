<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:135 EN:198  -->

<article>

<hgroup>
<h1 class="green">les Rèmes selon César</h1>
<h2 class="green"><cite>Commentaires sur la Guerre des Gaules</cite></h2>
</hgroup>

<div class="notices green">
<p>Les <cite>Commentaires sur la Guerre des Gaules</cite> dont on dit qu'ils ont été écrits par Jules César lui-même comptent, comme document historique écrit relatif au passé de la France actuelle comme l'un des plus anciens.</p>
<p>Il y aurait beaucoup de choses à dire sur cette œuvre exceptionnelle mais ici, ce n'est pas tant l'œuvre entière que la courte partie, première moitié du livre <abbr title="deux">II</abbr> où apparaît la tribu des Rèmes à l'origine du nom de l'actuelle ville de Reims, qui retient ici notre attention.</p>
<p>L'extrait de texte ci-dessous se limite à cela et, pour être exhaustif autant que clair, à l'épisode qui suit immédiatement, la “Bataille de l'Aisne”.</p>
<p>Les <a href="#1chap" title="Chapître 1, Agitation en Belgique">premier</a> et <a href="#2chap" title="Chapître 2, Mesures de César">second</a> chapîtres décrivent la situation résultante de la progression de l'armée romaine en Gaule.</p>
<p>Au cours du <a href="#3chap" title="Chapître 3, Les Rèmes se déclarent pour les Romains">troisième chapître</a>, les chefs Rèmes prennent les devants et envoient à César une délégation afin de s'allier à Rome.</p>
<p>À partir du <a href="#4chap" title="Chapître 4, Dénombrement des forces ennemies">quatrième chapître</a>, c'est la <a href="#8chap" title="Chapître 8, Bataille de l'Aisne">bataille de l'Aisne</a> qui voit la victoire de l'armée romaine.</p>
<p>Les Rèmes devaient être récompensé notamment par la reconnaissance de Reims comme capitale de la province romaine de Belgique Seconde.</p>
</div>

<h2 class="green">Les Rèmes selon le texe du Livre <abbr title="deux">II</abbr> des <cite>Commentaires sur la Guerre des Gaules</cite></h2>

<h3 class="green">Agitation en Belgique</h3>

<section id="1chap">
<h4 class="green">Chapître 1</h4>

<ol class="doc">
  <li value="1">Pendant que <mark>César</mark> était, en quartier d'hiver dans la Gaule citérieure, les bruits publics lui apprirent et les lettres de Labiénus lui confirmèrent que les Belges, formant, comme on a vu, la troisième partie de la Gaule, se liguaient contre le peuple romain et se donnaient mutuellement des otages.</li>
  <li value="2">Cette coalition avait diverses causes; d'abord, ils craignaient qu'après avoir pacifié toute la Gaule, notre armée ne se portât sur leur territoire;</li>
  <li value="3">en second lieu, ils étaient sollicités par un grand nombre de Gaulois: ceux qui n'avaient pas voulu supporter le séjour des Germains en Gaule, voyaient aussi avec peine l'armée des Romains hiverner dans le pays et y rester à demeure: d'autres, par inconstance et légèreté d'esprit, désiraient un changement de domination;</li>
  <li value="4">quelques-uns enfin, les plus puissants et ceux qui, à l'aide de leurs richesses, pouvaient soudoyer des hommes et s'emparaient ordinairement du pouvoir, prévoyaient que ces usurpations seraient moins faciles sous notre gouvernement.</li>
</ol>
</section>

<h3 class="green">Mesures de César</h3>

<section id="2chap">
<h4 class="green">Chapître 2</h4>

<ol class="doc">
  <li value="1">Inquiet de tous ces rapports, <mark>César</mark> leva deux nouvelles légions dans la Gaule citérieure, et les envoya, au commencement de l'été, dans la Gaule intérieure, sous le commandement de Q. Pédius, son lieutenant.</li>
  <li value="2">Lui-même rejoignit l'armée, dès que les fourrages commencèrent à être abondants;</li>
  <li value="3">il chargea les Sénons et les autres Gaulois, voisins des Belges, d'observer ce qui se passait chez eux, et de l'en instruire.</li>
  <li value="4">Ils lui annoncèrent unanimement que ce peuple levait des troupes et qu'une armée se rassemblait.</li>
  <li value="5"><mark>César</mark> alors n'hésite plus, et fixe son départ au douzième jour.</li>
  <li value="6">Après avoir pourvu aux vivres, il lève son camp et arrive en quinze jours à peu près aux frontières de la Belgique.</li>
</ol>
</section>

<h3 class="green">Les Rèmes se déclarent pour les Romains</h3>

<section id="3chap">
<h4 class="green">Chapître 3</h4>

<ol class="doc">
  <li value="1">Son arrivée fut imprévue et personne ne s'attendait à tant de célérité; les <mark>Rèmes</mark>, voisins immédiats des Belges, lui députèrent Iccios et Andocumborios, les premiers de leur cité,</li>
  <li value="2">chargés de lui dire qu'ils se mettaient eux et tout ce qu'ils possédaient sous la foi et pouvoir du peuple romain, qu'ils n'avaient point voulu se liguer avec les autres Belges, ni prendre part à cette conjuration contre les Romains;</li>
  <li value="3">qu'ils étaient prêts à donner des otages, à faire ce qui leur serait ordonné, à le recevoir dans leurs places, à lui fournir des vivres et tous autres secours;</li>
  <li value="4">que tout le reste de la Belgique était en armes; que les Germains, habitant en deçà du Rhin, s'étaient joints aux Belges</li>
  <li value="5">et que telle était la fureur de cette multitude, qu'eux-mêmes, frères et alliés des Suessions, obéissant aux mêmes lois, ayant le même gouvernement et les mêmes magistrats, n'avaient pu les détourner d'entrer dans la confédération.</li>
</ol>
</section>

<h3 class="green">Dénombrement des forces ennemies</h3>

<section id="4chap">
<h4 class="green">Chapître 4</h4>

<ol class="doc">
  <li value="1"><mark>César</mark> leur demanda quels étaient les peuples en armes, leur nombre et leurs forces militaires. Il apprit que la plupart des Belges étaient originaires de Germanie; qu'ayant anciennement passé le Rhin, ils s'étaient fixés en Belgique, à cause de la fertilité du sol, et en avaient chassé les Gaulois qui l'habitaient avant eux;</li>
  <li value="2">que seuls, du temps de nos pères, quand les Teutons et les Cimbres eurent ravagé toute la Gaule, ils les avaient empêchés d'entrer sur leurs terres.</li>
  <li value="3">Ce souvenir leur inspirait une haute opinion d'eux-mêmes et leur donnait de hautes prétentions militaires.</li>
  <li value="4">Quant à leur nombre, les <mark>Rèmes</mark> avaient à ce sujet les données les plus certaines, en ce que, unis avec eux par le voisinage et les alliances, ils connaissaient le contingent que, dans l'assemblée générale des Belges, chaque peuple avait promis pour cette guerre.</li>
  <li value="5">Les Bellovaques tenaient le premier rang parmi eux par leur courage, leur influence et leur population: ils pouvaient mettre cent mille hommes sous les armes: ils en avaient promis soixante mille d'élite et demandaient la direction de toute la guerre.</li>
  <li value="6">Les Suessions, leurs voisins, possédaient un territoire très étendu et très fertile;</li>
  <li value="7">ils avaient eu pour roi, de notre temps encore, Diviciacos, le plus puissant chef de la Gaule, qui à une grande partie de ces régions joignait aussi l'empire de la Bretagne. Galba était maintenant leur roi, et le commandement lui avait été déféré d'un commun accord, à cause de son équité et de sa sagesse. Ils possédaient douze villes, et avaient promis cinquante mille hommes.</li>
  <li value="8">Autant en donnaient les Nerviens, réputés les plus barbares d'entre ces peuples, et placés à l'extrémité de la Belgique;</li>
  <li value="9">les Atrébates en fournissaient quinze mille; les Ambiens, dix mille; les Morins, vingt-cinq mille; les Ménapes, neuf mille; les Calétes, dix mille; les Véliocasses et les Viromandues le même nombre; les Atuatuques, dix-neuf mille;</li>
  <li value="10">les Condruses, les Éburons, les Caeroesi et les Pémanes, compris sous la dénomination commune de Germains, devaient en envoyer quarante mille.</li>
</ol>
</section>

<h3 class="green">Diviciacos attaque les Bellovaques. César franchit l'Aisne</h3>

<section id="5chap">
<h4 class="green">Chapître 5</h4>

<ol class="doc">
  <li value="1"><mark>César</mark> encouragea les <mark>Rèmes</mark> par des paroles bienveillantes, et exigea que leur sénat se rendît auprès de lui, et que les enfants des familles les plus distinguées lui fussent amenés en otages; ce qui fut ponctuellement fait au jour indiqué.</li>
  <li value="2">Il anime par de vives exhortations le zèle de l'Héduen Diviciacos; et lui représente combien il importe à la république et au salut commun de diviser les forces de l'ennemi, afin de n'avoir pas une si grande multitude à combattre à la fois.</li>
  <li value="3">Il suffit pour cela que les Héduens fassent entrer leurs troupes sur le territoire des Bellovaques et se mettent à le ravager. <mark>César</mark> fait partir Diviciacos avec cette commission.</li>
  <li value="4">Dès qu'il apprit par ses éclaireurs et par les <mark>Rèmes</mark>, que les Belges marchaient sur lui avec toutes leurs forces réunies et n'étaient déjà plus qu'à peu de distance, il se hâta de faire passer à son armée la rivière d'Aisne, qui est à l'extrême frontière des <mark>Rèmes</mark>, et assit son camp sur la rive.</li>
  <li value="5">De cette manière, la rivière défendait un des côtés du camp; ce qui était à la suite de l'armée se trouvait à l'abri des atteintes de l'ennemi; et le transport des vivres qu'envoyaient les <mark>Rèmes</mark> et les autres peuples pouvait s'effectuer sans péril.</li>
  <li value="6">Sur cette rivière était un pont. Il y plaça une garde, et laissa sur l'autre rive Q. Titurius Sabinus, son lieutenant, avec six cohortes: il fit fortifier le camp d'un retranchement de douze pieds de haut et d'un fossé de dix-huit pieds de profondeur.</li>
</ol>
</section>

<h3 class="green">Il fait lever le siège de Bibrax</h3>

<section id="6chap">
<h4 class="green">Chapître 6</h4>

<ol class="doc">
  <li value="1">À huit mille pas de ce camp était une ville des <mark>Rèmes</mark>, appelée Bibrax. Les Belges dans leur marche l'attaquèrent vivement. Elle se défendit tout le jour avec peine.</li>
  <li value="2">Leur manière de faire les sièges est semblable à celle des Gaulois. Lorsqu'ils ont entièrement entouré la place avec leurs troupes, ils lancent de tous côtés des pierres sur le rempart; quand ils en ont écarté ceux qui le défendent, ils forment la tortue, s'approchent des portes et sapent la muraille.</li>
  <li value="3">Cela était alors aisé; car cette grêle de pierres et de traits rendait toute résistance impossible du haut des remparts.</li>
  <li value="4">Lorsque la nuit eut mis fin à l'attaque, le Rème Iccios, homme d'une haute naissance et d'un grand crédit, qui commandait alors dans la place, et un de ceux qui avaient été députés vers <mark>César</mark> pour traiter de la paix, lui dépêcha des courriers pour l'informer que s'il n'était promptement secouru, il ne pouvait tenir plus longtemps.</li>
</ol>
</section>

<section id="7chap">
<h4 class="green">Chapître 7</h4>

<ol class="doc">
  <li value="1">Vers le milieu de la nuit, <mark>César</mark> fit partir, sous la conduite des mêmes hommes que lui avait envoyés Iccios, des Numides, des archers crétois et des frondeurs baléares.</li>
  <li value="2">Leur arrivée ranima l'espoir des assiégés, leur inspira l'ardeur de se défendre, et enleva en même temps aux ennemis l'espérance de prendre la place.</li>
  <li value="3">Ils restèrent quelque temps à l'entour, dévastèrent la campagne, brûlèrent les bourgs et les maisons qui se trouvaient sur leur route, se dirigèrent avec toutes leurs troupes vers le camp de <mark>César</mark>, et placèrent le leur à moins de deux mille pas.</li>
  <li value="4">On pouvait conjecturer, d'après les feux et la fumée, qu'il avait une étendue de plus de huit mille pas.</li>
</ol>
</section>

<h3 class="green">Bataille de l'Aisne</h3>

<section id="8chap">
<h4 class="green">Chapître 8</h4>

<ol class="doc">
  <li value="1"><mark>César</mark> résolut d'abord, à cause du grand nombre des ennemis et de la haute idée qu'il avait de leur courage, de différer la bataille.</li>
  <li value="2">Chaque jour cependant, par des combats de cavalerie, il éprouvait la valeur de l'ennemi et l'audace des siens.</li>
  <li value="3">Quand il se fut assuré que les nôtres ne lui étaient point inférieurs, il marqua le champ de bataille, en avant du camp, dans une position naturellement avantageuse; la colline sur laquelle était placé le camp s'élevait insensiblement au-dessus de la plaine, et offrait autant d'étendue qu'il en fallait pour y déployer les troupes; elle s'abaissait à gauche et à droite, et se relevait vers le centre par une légère éminence qui redescendait en pente douce vers la plaine. À l'un et l'autre côté de cette colline, <mark>César</mark> fit creuser un fossé transversal d'environ quatre cents pas;</li>
  <li value="4">aux deux extrémités, il éleva des forts et y plaça des machines de guerre, afin d'empêcher que des ennemis si supérieurs en nombre ne vinssent le prendre en flanc et l'envelopper pendant le combat.</li>
  <li value="5">Cela fait, il laissa dans le camp les deux légions qu'il avait levées récemment, pour servir au besoin de réserve, et rangea les six autres en bataille devant le camp. L'ennemi avait aussi fait sortir ses troupes et formé ses lignes.</li>
</ol>
</section>

<section id="9chap">
<h4 class="green">Chapître 9</h4>

<ol class="doc">
  <li value="1">Il y avait un marais peu étendu entre notre armée et celle des ennemis. Ils attendaient que les nôtres le traversassent; nos troupes de leur côté, sous les armes, se tenaient prêtes à attaquer les Belges, s'ils s'engageaient les premiers dans le passage.</li>
  <li value="2">Cependant la cavalerie engageait le combat de part et d'autre. Aucun des deux partis ne voulant passer le premier, <mark>César</mark>, après le succès d'une charge de cavalerie, fit rentrer ses légions dans le camp.</li>
  <li value="3">Aussitôt les ennemis se dirigèrent vers la rivière d'Aisne, qui était, comme nous l'avons dit, derrière nous.</li>
  <li value="4">Ayant trouvé des endroits guéables ils essayèrent d'y faire passer une partie de leurs troupes, dans le dessein, soit de prendre, s'ils le pouvaient, le fort commandé par le lieutenant Q. Titurius et de rompre le pont,</li>
  <li value="5">soit, s'ils n'y réussissaient pas, de ravager le territoire des <mark>Rèmes</mark>, qui nous étaient d'une grande ressource dans cette guerre, et d'intercepter nos convois.</li>
</ol>
</section>

<section id="10chap">
<h4 class="green">Chapître 10</h4>

<ol class="doc">
  <li value="1"><mark>César</mark>, averti par Titurius, passa le pont avec toute sa cavalerie, ses Numides armés à la légère, ses frondeurs, ses archers, et marcha à l'ennemi.</li>
  <li value="2">Alors s'engagea un combat opiniâtre. Les nôtres ayant attaqué les Belges dans les embarras du passage, en tuèrent un grand nombre.</li>
  <li value="3">Les autres, pleins d'audace, s'efforçaient de passer sur le corps de leurs compagnons; une grêle de traits les repoussa. Ceux qui avaient les premiers traversé l'Aisne furent enveloppés et taillés en pièces par la cavalerie.</li>
  <li value="4">Les ennemis, se voyant déchus de l'espoir d'emporter le fort et de traverser la rivière, ne pouvant nous attirer pour combattre sur un terrain désavantageux, et les vivres commençant à leur manquer, tinrent conseil et arrêtèrent que ce qu'il y avait de mieux était de retourner chacun dans son pays, et de se tenir prêts à marcher tous à la défense du premier que l'armée romaine envahirait, ils combattraient avec plus d'avantage sur leur propre territoire que sur des terres étrangères, et les vivres chez eux leur seraient assurés.</li>
  <li value="5">Celui de leurs motifs qui eut le plus de poids pour cette détermination, ce fut la nouvelle que Diviciacos et les Héduens approchaient des frontières des Bellovaques. On ne put persuader à ces derniers de rester plus longtemps, ni les empêcher d'aller défendre leurs biens.</li>
</ol>
</section>

<section id="11chap">
<h4 class="green">Chapître 11</h4>

<ol class="doc">
  <li value="1">Le départ étant résolu, dès la seconde veille, ils sortirent de leur camp à grand bruit, en tumulte, sans ordre fixe, sans être commandés par personne, prenant chacun le premier chemin qui s'offrait, et se hâtant de gagner leur pays, ce qui faisait ressembler ce départ à une fuite.</li>
  <li value="2"><mark>César</mark> aussitôt averti par ses vedettes, mais craignant une embuscade, dans l'ignorance où il était encore de la cause de cette retraite, retint son armée dans le camp même de sa cavalerie.</li>
  <li value="3">Au point du jour, ce départ lui ayant été confirmé par ses éclaireurs, il détacha toute sa cavalerie, pour arrêter l'arrière-garde. Il en confia le commandement à <abbr title="Quintus">Q.</abbr> Pédius et à Aurunculéius Cotta, ses lieutenants. <abbr title="Titus">T.</abbr> Labiénus, un autre de ses lieutenants, eut ordre de les suivre avec trois légions.</li>
  <li value="4">Ils atteignirent l'arrière-garde ennemie, la poursuivirent pendant plusieurs milles, et on avait tué un grand nombre de ces fuyards, lorsque les derniers rangs, auxquels nous étions arrivés, firent halte et soutinrent notre choc avec beaucoup de vigueur;</li>
  <li value="5">mais ceux qui étaient en avant, se voyant éloignés du péril, et n'étant retenus ni par la nécessité de se défendre, ni par les ordres d'aucun chef, eurent à peine entendu les cris des combattants, qu'ils rompirent leurs rangs, et cherchèrent tous leur salut dans la fuite.</li>
  <li value="6">Ainsi, sans courir aucun danger, les nôtres tuèrent à l'ennemi autant d'hommes que le permit la durée du jour: au coucher du soleil, ils cessèrent la poursuite et rentrèrent au camp, comme il leur avait été ordonné.</li>
</ol>
</section>

<h3 class="green">Les Suessions, les Bellovaques, les Ambiens se soumettent - César passe chez les Nerviens</h3>

<section id="12chap">
<h4 class="green">Chapître 12</h4>

<ol class="doc">
  <li value="1">Le lendemain, <mark>César</mark>, avant que l'ennemi se fût rallié et remis de sa terreur, dirigea son armée vers le pays des Suessions, contigu à celui des <mark>Rèmes</mark>, et, après une longue marche, arriva devant la ville de Noviodunum.</li>
  <li value="2">Il essaya de l'emporter d'assaut, sur ce qu'il avait appris qu'elle manquait de garnison; mais la largeur des fossés, la hauteur de ses murs défendus par un petit nombre d'hommes, l'empêchèrent de s'en rendre maître.</li>
  <li value="3">Il retrancha son camp, et se mit à faire des mantelets et à disposer tout ce qui était nécessaire pour le siège.</li>
  <li value="4">Pendant ces préparatifs, tous ceux des Suessions qui avaient échappé à la défaite entrèrent la nuit suivante dans la place.</li>
  <li value="5">On pousse aussitôt les mantelets contre les murs, on élève la terrasse, on établit les tours. Les Gaulois, effrayés de la grandeur de ces travaux qu'ils n'avaient jamais vus, dont ils n'avaient jamais entendu parler, et de la promptitude des Romains à les exécuter, envoient des députés à <mark>César</mark> pour traiter de leur reddition; et, sur la prière des <mark>Rèmes</mark>, ils obtiennent la vie sauve.</li>
</ol>
</section>

<footer>
  <p>Jules César, <cite>Commentaires sur la Guerre des Gaules</cite>, Livre <abbr title="deux">II</abbr>, chapîtres 1 à 12.</p>
</footer>

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