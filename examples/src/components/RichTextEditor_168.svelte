<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="green">Saint Remi</h1>
<div class="notices green">
<p>Le Baptème du roi des Francs, Clovis en français, ou “Clodovechus” du latin par <a href="#note_remigius" title="Remi">saint Rémi</a> en français ou sanctus Remigius en latin dans les documents historiques est raconté par Jacques de Voragine dans le chapître 16 de “La Légende dorée”, principal livre chrétien au Moyen-Âge.</p>
</div>
<h2 id="chapître-16-saint-remi" class="green">saint Remi selon le chapître 16 de “La légende Dorée”</h2>
<h3 id="première-interprétation-de-son-nom" class="green">première interprétation de son nom</h3>
<p>Le nom de <a href="#note_remigius" title="Remi" id="remigius">Remi</a>, Remigius, vient de remi, <span style="color: #3d8b3d;">«paissant»</span>, et de geos, <span style="color: #3d8b3d;">«terre»</span>, et il signifie <span style="color: #3d8b3d;">«paissant : les hommes de la terre par son enseignement»</span>;
ou bien de gyon, <span style="color: #3d8b3d;">«lutte»</span>, et il signifie <span style="color: #3d8b3d;">«pasteur et lutteur»</span>.<br>
Car il a nourri son troupeau de la parole de sa predication, de l'exemple de sa conduite, et du secours de sa prière.
Il existe par ailleurs trois sortes d'armes :
armes défensives comme le bouclier, armes offensives comme le glaive, armes de protection comme la cuirasse et le casque.<br>
Aussi lutta-t-il contre le diable avec le bouclier de la foi, le glaive de la parole de Dieu et le casque de l'espérance.<br>
L'archevèque de Reims Hincmar, rédigea sa Vie.</p>
<h3 id="vie-de-saint-remi" class="green">vie de saint Remi</h3>
<p>La naissance de <span style="color: #3d8b3d;">Remi</span>, remarquable docteur et glorieux confesseur du Seigneur, fut prévue par un ermite, de la façon que voici.<br>
Alors que la persécution des Vandales avait dévasté presque tout le <a href="#note_pays-des-francs" title="pays des Francs" id="pays-des-francs">pays des Francs</a>,
un reclus, saint homme devenu aveugle, adressait au Seigneur de fréquentes prières pour la paix de l'Église de Gaule.<br>
Or voici qu'un ange du Seigneur lui apparut et lui dit:<br>
<span style="color: #3d8b3d;">«Sache qu'une femme du nom de Céline mettra au monde un fils
nommé Remi,
qui libérera son peuple des incursions des mauvais.»</span><br>
Et dès son réveil, il vint à la maison de Céline, et raconta ce qu'il avait vu.
Comme elle ne le croyait pas,
car elle était déjà une vieille femme.<br>
Il lui répondit:<br>
«Sache que, lorsque tu allaiteras ton enfant, il oindra mes yeux de ton lait et me rendra la vue aussitôt.»<br>
Quand tout cela se fut accompli exactement,
<span style="color: #3d8b3d;">Remi</span> s'enfuit loin du monde, et s'enferma dans un reclusoir.
Sa renommée grandit et, à l'âge de vingt-deux ans, il fut élu archevêque par tout le peuple de Reims.
Il était d'une telle douceur que même les moineaux venaient à sa table et mangeaient les miettes dans sa main.</p>
<h3 id="le-miracle-du-vin" class="green">le miracle du vin</h3>
<p>Un jour qu'il avait reçu l'hospitalité dans la demeure d'une dame,
et qu'elle n'avait qu'une petite provision de vin,
<span style="color: #3d8b3d;">Remi</span> entra dans le cellier, fit une croix sur le tonneau, et, quand il eut prié,
le vin déborda au point de couler à flots au milieu du cellier.</p>
<h3 id="la-conversion-du-roi-clovis" class="green">la conversion du roi Clovis</h3>
<p>À l'époque où Clovis, <a href="#note_roi-des-francs" title="roi des Francs" id="roi-des-francs">roi des Francs</a>, était encore païen
et n'avait pas encore pu être converti par son épouse très chrétienne,
voyant fondre sur lui une armée innombrable d'Alamans,
il fit au Seigneur Dieu que vénérait son épouse le vœu que, s'il lui accordait la victoire sur les Alamans, il adopterait aussitôt la foi du Christ.<br>
L'issue du combat ayant été conforme à son vœu,
il s'en alla trouver saint <span style="color: #3d8b3d;">Remi</span> pour lui demander le baptême.<br>
Quand ils arrivèrent aux fonts baptismaux, où il n'y avait pas de saint chrême,
voici qu' <span style="color: #3d8b3d;">une colombe apporta dans son bec une ampoule avec le chrême,
dont le pontife oignit le roi</span>.<br>
Cette ampoule est conservée dans l'église de Reims, et aujourd'hui encore on s'en sert pour donner l'onction aux rois de France (<a href="#note_onction" title="consécration des rois de France par le chrême" id="onction">note “consécration des rois de France par le chrême”</a>).</p>
<h3 id="lévêque-entêté" class="green">l'évêque entêté</h3>
<p>Bien plus tard, comme Guénebaud, homme avisé, avait épousé une parente de <span style="color: #3d8b3d;">saint Remi</span>,
et que par dévotion les deux époux s'étaient déliés mutuellement,
saint <span style="color: #3d8b3d;">Remi</span> ordonna Guénebaud évêque de Laon.<br>
Mais ce dernier autorisait sa femme à venir le voir assez souvent, pour faire son instruction.
À la suite de ces entretiens fréquents, son cœur s'enflamma de concupiscence, et il tomba avec elle dans le péché.<br>
Elle conçut et mit au monde un fils,
et s'en ouvrit à l'évêque,
qui, tout confus, lui fit dire en réponse:<br>
<span style="color: #3d8b3d;">«Puisque cet enfant est le fruit d'un larcin,
je veux qu'il s'appelle Larron.»</span><br>
De peur que ne naquît le soupçon, Guénebaud autorisa sa femme à venir le voir comme avant,
mais quand ils eurent pleuré leur premier péché, ils récidivèrent.<br>
Elle mit au monde une fille,
et en avertit l'évêque, qui lui répondit:<br>
<span style="color: #3d8b3d;">«Appelle cette fille Renardette.»</span><br>
Enfin Guénebaud revint chez lui et alla trouver saint <span style="color: #3d8b3d;">Remi</span>, se jeta à ses pieds, et voulut déposer son étole.<br>
Saint Remi le lui interdit, apprit de sa bouche ce qui était arrivé, le consola doucement,
et l'enferma durant sept ans dans une petite cellule,
gouvernant lui-même son église pendant ce temps-là.
La septième année, alors qu'il s'attardait à prier au jour de la Cène du Seigneur, un ange du Seigneur lui apparut, lui annonça que
son péché lui avait été remis,
et lui ordonna de sortir de sa cellule.<br>
Comme il lui répondait:<br>
<span style="color: #3d8b3d;">«Je ne le peux pas,
car mon seigneur Remi a fermé cette porte et y a apposé son sceau»</span>,<br>
l'ange lui dit :
<span style="color: #3d8b3d;">«Afin que tu saches que le ciel t'est ouvert, cette demeure va s'ouvrir sans qu'on brise ses scellés.»</span><br>
Et à peine avait-il parlé, qu'elle s'ouvrit.
Alors Guénebaud se précipita dans l'embrasure, les bras en croix, et dit:<br>
<span style="color: #3d8b3d;">«Même si mon Seigneur Jésus-Christ venait me trouver ici, je n'en sortirais pas en l'absence de mon seigneur Remi, qui m'a enfermé.»</span><br>
Alors, sur un avertissement de l'ange, saint <span style="color: #3d8b3d;">Remi</span> vint à Laon et le rétablit sur son siège ;
jusqu'à sa mort, il persévéra dans ses saintes œuvres,
et son fils Larron, qui lui succéda à l'épiscopat, fut saint également.
Enfin, saint <span style="color: #3d8b3d;">Remi</span>, qu'illustraient de nombreuses vertus, reposa en paix en l'an du seigneur 500 environ.</p>
</div>

<div id="body-inner">
<h2 id="notes" class="green">Notes</h2>
<h3 id="note_remigius" class="green">remi</h3>
<div class="notices green">
<p>Étymologie apparemment créée par Voragine.</p>
<ul>
<li>revenir à la note: <a href="#remigius" title="Remi">Remi ⭡</a></li>
</ul>
</div>
<h3 id="note_pays-des-francs" class="green">pays des Francs</h3>
<div class="notices green">
<p>Nous faisons le choix de traduire «pays des Francs» alors que Voragine emploie le mot «Francia».<br>
Traduire par «France» prête à confusion car le terme de «France» n'existe ni au temps de Clovis ni au temps d'Hincmar.<br>
Hincmar emploie «Galiae», soit «Gaule» qui correspond à la réalité de cette partie de l'Empire romain au V<sup style="color:#3d8b3d">ème</sup> siècle.
il nous apparaît que «Pays des Francs» est un bon moyen terme.</p>
<ul>
<li>revenir à la note: <a href="#pays-des-francs" title="pays des Francs">pays des Francs ⭡</a></li>
</ul>
</div>
<h3 id="note_roi-des-francs" class="green">roi des Francs</h3>
<div class="notices green">
<p>Nous faisons le choix de traduire «roi des Francs» alors que Voragine emploie l'expression «roi de France», qui ne fut employée dans son sens actuel qu'à partir de Philippe Auguste.</p>
<ul>
<li>revenir à la note: <a href="#roi-des-francs" title="roi des Francs">roi des Francs ⭡</a></li>
</ul>
</div>
<h3 id="note_pays-des-francs" class="green">consécration des rois de France par le chrême</h3>
<div class="notices green">
<p>La consécration des rois de France par le chrême trouve son origine dans cette légende, dont la source la plus ancienne est Hincmar.</p>
<ul>
<li>revenir à la note: <a href="#pays-des-francs" title="pays des Francs">note ⭡</a></li>
</ul>
</div>
</div>

<!-- Page 2 --><hr>

<div id="body-inner">
<h2 id="chapître-143-saint-remi" class="green">saint Remi selon le chapître 143 “La légende Dorée”</h2>
<h3 id="seconde-interprétation-de-son-nom" class="green">seconde interprétation de son nom</h3>
<p>Le nom de <span style="color: #3d8b3d;">Remi</span>, Remigius, vient de “remige”, <span style="color: #3d8b3d;">«le rameur»</span>, c'est-à-dire le pilote ou le chef de navire.
Ou bien il vient de remis, <span style="color: #3d8b3d;">«les rames»</span>, qui sont les instruments par lesquels on mène le navire, et de gyon, qui signifie <span style="color: #3d8b3d;">«lutte»</span>.<br>
Il pilota en effet l'Eglise en la gardant du naufrage,
il la mena à la porte du paradis, et pour elle il lutta contre les pièges du diable.</p>
<h3 id="clotilde-et-ses-enfants" class="green">Clotilde et ses enfants</h3>
<p>On dit que <span style="color: #3d8b3d;">Remi</span> convertit à la foi le roi et le peuple des Francs.<br>
Le roi avait en effet une épouse très chrétienne, nommée Clotilde,
qui tentait vainement de convertir son époux à la foi.<br>
Elle eut un fils,
qu'elle voulut faire baptiser, mais le roi s'y opposa totalement.
Cependant, comme elle ne pouvait pas trouver le repos, elle finit par obtenir le consentement du roi et elle fit baptiser l'enfant,
qui mourut subitement après son baptême.
Le roi lui dit:<br>
<span style="color: #3d8b3d;">«Il est clair à présent que le Christ est un dieu sans valeur,
puisqu'il est incapable de conserver en vie quelqu'un
qui aurait pu accroître la foi chrétienne.»</span><br>
Clotilde répondit:<br>
<span style="color: #3d8b3d;">«Au contraire, Je vois un signe particulier de l'amour que mon Dieu me porte dans le fait qu'il ait reçu aupres de lui le premier fruit de mon ventre,
et qu'il ait donné à mon fils un royaume infini, meilleur que le tien.»</span><br>
Elle conçut une seconde fois, et mit au monde un autre fils, qu'elle s'empressa de faire baptiser comme le précédent.
Or voici qu’il tombe soudain malade, au point qu'on désespère de sa vie.<br>
Le roi dit à son épouse:<br>
<span style="color: #3d8b3d;">«Ton dieu est vraiment bien faible, s'il ne peut pas garder en vie un être baptisé en son nom.<br>
En mettras-tu au monde un millier, les feras-tu baptiser tous, qu'ils mourront tous de la même façon !»</span><br>
Mais pourtant l'enfant guérit et retrouva la santé, et il put ensuite succéder à son père.<br>
Cette femme, qui croyait en Dieu, essaya d'amener son époux à croire lui aussi, mais il résistait de toutes les manières.</p>
<h3 id="le-meunier-fâché" class="green">le meunier fâché</h3>
<p>La façon dont il se convertit à la foi est racontée à l'occasion d'une autre fête, après l'Épiphanie.
Devenu chrétien, le roi Clovis voulut doter l'Église de Reims,
et il dit à <span style="color: #3d8b3d;">saint Remi</span> qu'il lui donnerait toutes les terres que l'évêque pourrait parcourir pendant que le roi ferait sa sieste.<br>
Ce qui fut fait.
Mais un homme avait son moulin sur le terrain délimité par <span style="color: #3d8b3d;">saint Remi</span>,
et tandis que le saint faisait son parcours, le meunier : le chassa avec indignation.
<span style="color: #3d8b3d;">saint Remi</span> lui dit:<br>
<span style="color: #3d8b3d;">«Mon ami, accepte que nous partagions ce moulin.»</span><br>
Mais l'autre le repoussa,
et la roue du moulin se mit à tourner à l'envers;
le meunier rappela <span style="color: #3d8b3d;">Remi</span> en criant:<br>
<span style="color: #3d8b3d;">«Viens ici, serviteur de Dieu,
et partageons le moulin !»</span><br>
Mais Remi lui dit:<br>
<span style="color: #3d8b3d;">«Il ne sera ni à moi ni à toi»</span>,<br>
et aussitôt la terre s'ouvrit et engloutit tout le moulin.</p>
<h3 id="remi-prédit-une-famine" class="green">Remi prédit une famine</h3>
<p><span style="color: #3d8b3d;">Remi</span>, prévoyant qu'il y aurait une famine, avait amassé des tas de blé dans un village,
mais des paysans ivres, pour se moquer de la prévoyance du vieillard, y mirent le feu.
Quand il l'apprit, il se rendit sur place,
commença à se réchauffer du froid de l'âge et du soir qui tombait, et il dit tranquillement:<br>
<span style="color: #3d8b3d;">«Un feu est toujours bon;
mais pour ceux qui ont fait cela, et pour leurs descendants, les hommes souffriront de hernies au scrotum et les femmes seront goltreuses.»</span><br>
Il en fut ainsi dans ce village jusqu'à ce qu'ils soient dispersés par Charlemagne.</p>
<h3 id="la-translation-de-son-corps" class="green">la translation de son corps</h3>
<p>Il faut noter que la fête de <span style="color: #3d8b3d;">saint Remi</span> qui se célèbre au mois de janvier est celle de sa bienheureuse mort, tandis que celle-ci est celle de la translation de son corps sacré.<br>
Après sa mort, on transporta son corps sur une civière dans l'église des saints Timothée et Apollinaire ; mais quand on arriva à l'église Saint-Christophe, il se mit à peser si lourd que personne ne put le soulever.
On en fut donc réduit à demander au Seigneur de daigner indiquer si par hasard il voulait qu'on l'enterre dans l'église Saint-Christophe, où reposaient mille reliques de saints.<br>
Aussitôt, le corps se fit tout léger,
et ils l'enterrèrent là avec honneur.<br>
Comme dans l'église s'accomplissaient de nombreux miracles, on l'agrandit, et on fit faire une crypte derrière l'autel.
Tandis qu'on voulait y transférer le corps, on ne réussit pas à le bouger.
On passa alors la nuit à prier, et à minuit tout le monde s'endormit.
Le lendemain, le jour des calendes d'octobre,
on trouva dans la crypte le tombeau avec le corps de <span style="color: #3d8b3d;">saint Remi</span>, qui y avait été transporté par des anges.<br>
Beaucoup plus tard, on le déposa dans une châsse d'argent, et on le transféra dans une plus belle crypte, le même jour.<br>
Il vécut vers l'an du Seigneur 490.</p>
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