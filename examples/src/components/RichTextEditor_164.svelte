<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:132 EN:195  -->

<article>

<hgroup> 
<h1 class="green">Iris</h1>
<h2 class="green">au Grand Trianon</h2>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.jpg" title="Peinture de René-Antoine HOUASSE,　“Morphée s'éveillant à l'approche d'Iris” (“Iris et Morphée”), Grand Trianon, Versailles" alt="Peinture de René-Antoine HOUASSE,　“Morphée s'éveillant à l'approche d'Iris” (“Iris et Morphée”), Grand Trianon, Versailles" class="class-diane-img" width="700" height="951" loading="eager" decoding="async" usemap="#iris2" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.jpg 700w"></picture><figcaption><q cite="#iris-1">Iris, fidèle messagère de mes volontés,<br>Cours vite chez le Sommeil, dans son palais des songes</q></figcaption>
</figure><map name="iris2" id="iris2"><area title="Iris" alt="Iris" id="area_iris" href="#iris" shape="poly" coords="60,724,83,671,131,639,200,607,202,541,263,481,317,366,382,359,435,298,428,266,404,276,394,308,317,337,300,279,303,244,292,227,266,234,244,129,205,212,173,185,140,197,38,130,35,158,64,222,105,269,124,353,98,395,93,435,68,452,62,472,72,480,83,481,85,500,72,517,56,505,33,509,21,522,22,575,44,598,39,625,52,644,73,640,65,652,48,655,38,690,39,727"><area title="Sommeil" alt="Sommeil" id="area_morpheus" href="#morpheus" shape="poly" coords="235,799,335,766,392,763,419,779,442,860,453,868,508,816,523,792,630,775,655,750,690,742,726,717,762,734,826,715,822,692,794,685,752,685,739,667,705,652,700,619,713,600,701,581,620,546,582,547,572,563,575,622,470,567,323,540,330,571,399,608,457,619,490,639,526,680,468,660,415,662,364,672,313,659,307,671,337,695,358,721,286,754,239,761,223,779"></map>

<div class="notices green">
<p>Dans le Salon de Famille de Louis-Philippe du <a href="https://fr.wikipedia.org/wiki/Grand_Trianon" title="https://fr.wikipedia.org/wiki/Grand Trianon">Grand Trianon</a> à Versailles, se peut voir une peinture de <a href="https://fr.wikipedia.org/wiki/René-Antoine_Houasse" title="https://fr.wikipedia.org/wiki/René-Antoine Houasse">René-Antoine Houasse</a>, <cite>Morphée s'éveillant à l'approche d'Iris</cite>, aussi appelée <cite>Iris et Morphée</cite>.</p>
<p>À partir d'une partie du Livre <abbr title="onze">XI</abbr> des <a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/Métamorphoses (Ovide)"><cite>Métamorphoses</cite></a> d'<a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a> se trouve représenté le moment où <a href="#area_iris" title="Iris" id="iris">Iris</a>, messagère de <a href="https://fr.wikipedia.org/wiki/Junon" title="https://fr.wikipedia.org/wiki/Junon">Junon</a>, entre dans la grotte de <a href="https://fr.wikipedia.org/wiki/Hypnos" title="https://fr.wikipedia.org/wiki/Hypnos">Sommeil</a> pour l'enjoindre' de se mettre en mouvement pour se rendre auprès d'<a href="https://fr.wikipedia.org/wiki/Alcyone" title="https://fr.wikipedia.org/wiki/Alcyone">Alcyone</a> endormie afin de la faire rêver.</p>
</div>

<section id="iris-1">
<h2 class="green">Iris dans la grotte de Sommeil selon le texte du livre <abbr title="onze">XI</abbr> des <cite>Métamorphoses</cite></h2>

<ol class="doc">
  <li value="583">Or la déesse ne supporte pas davantage qu'on l'implore pour quelqu'un</li>
  <li>Qui est mort et, afin de détourner de ses autels ces mains funestes,</li>
  <li value="585">Elle dit:</li>
  <li>
    <p class="conversation">«<mark>Iris</mark>, fidèle messagère de mes volontés,</p>
  </li>
  <li>
    <p class="conversation">Cours vite chez le Sommeil, dans son palais des songes,</p>
  </li>
  <li>
    <p class="conversation">Et demande-lui d'envoyer à <span style="color: #3d8b3d;">Alcyone</span> un rêve qui, sous les traits</p>
  </li>
  <li>
    <p class="conversation">De son défunt <span style="color: #3d8b3d;">Céyx</span>, lui dise toute la vérité sur son malheur.»</p>
  </li>
  <li>Elle a parlé: <mark>Iris</mark> revêt sa robe aux mille couleurs</li>
  <li value="590">Et, arc-en-ciel décrivant une courbe dans l’espace,</li>
  <li>Elle gagne, pour exécuter l’ordre, le palais royal caché sous la nue.</li>
  <li>Il est, près du pays des Cimmériens, une cavernes très secrête,</li>
  <li>Creusée dans la roche, demeure et sanctuaire du <span style="color: #3d8b3d;">Sommeil Indolent</span></li>
  <li>Où jamais Phœbus ne peut, au lever, au zénith, au coucher,</li>
  <li value="595">Faire pénétrer ses rayons. Des vapeurs mêlées de brumes</li>
  <li>S’exhalent du sol, ce qui donne une vague lueur crépusculaire.</li>
  <li>Là, l’oiseau vigilant couronné d’une crête ne chante point</li>
  <li>Pour appeler l’Aurore, et le silence n’est rompu ni par la voix</li>
  <li>Des chiens de gardes, ni par celle de l’oie, plus sagace que les chiens.</li>
  <li value="600">Aucun animal sauvage ni domestique, aucune branche agitée par la brise</li>
  <li>N’émet le moindre son, ni les humains conversant dans leur langue&nbsp;:</li>
  <li>C’est un lieu de silence et de calme. Toutefois, des profondeurs de la roche</li>
  <li>Sort une résurgence du Léthé dont l’eau glisse dans un murmure</li>
  <li>Sur les cailloux crissants et invite au sommeil.</li>
  <li value="605">Devant l’entrée de la grotte fleurissent d’abondants pavots,</li>
  <li>D’innombrables plantes dont la Nuit humide recueille le lait</li>
  <li>Afin de le répandre sur les terres ombreuses.</li>
  <li>Aucune porte ne grince en tournant sur ses gonds&nbsp;:</li>
  <li>Il n’y en a pas une seule dans toute la demeure&nbsp;; nul gardien sur le seuil.</li>
  <li value="610">Mais au milieu de la grotte s’élève un lit d’ébène</li>
  <li>Au matelas de plumes, de couleur uniforme, tendu de noir,</li>
  <li>Où repose le dieu aux membres alanguis par l’inactivité.</li>
  <li>Autour de lui sont couchés çà et là, sous des apparences diverses,</li>
  <li>Les <span style="color: #3d8b3d;">Songes trompeurs</span>, aussi nombreux que les blés d’une moisson,</li>
  <li value="615">Les feuillages dans une forêt, les grains de sable jetés sur un rivage.</li>
  <li>Sitôt que la vierge est entrée, écartant de la mains les Songes</li>
  <li>Qui lui faisaient obstacle, l’éclat de sa robe a illuminé</li>
  <li>La demeure sacrée et le dieu, soulevant avec peine</li>
  <li>Ses paupières lourdes tombant et retombant sans cesse</li>
  <li value="620">Tandis que son menton tremblotant frappe le haut de sa poitrine,</li>
  <li>Finit par se secouer et, appuyé sur un coude, lui demande</li>
  <li>(Car il l’a reconnue) la raison de sa visite.</li>
  <li>Alors elle lui dit:</li>
  <li>
    <p class="conversation">«<span style="color: #3d8b3d;">Sommeil</span>, repos de l’univers, Sommeil, le plus paisible des dieux,</p>
  </li>
  <li>
    <p class="conversation">Paix de l’âme, toi qui fais fuir l’inquiétude, toi qui dissipes</p>
  </li>
  <li value="625">
    <p class="conversation">La fatigue du corps après de lourdes tâche et qui aides à l’effort,</p>
  </li>
  <li>
    <p class="conversation">Ordonne à l’un des Songes qui savent prendre l’apparence du vrai</p></li>
  <li>
    <p class="conversation">De partir pour Trachine, ville d’Hercule, sous les traits de son roi</p></li>
  <li>
    <p class="conversation">Et, prenant la forme d’un naufragé, d’appraître à Alcyone.</p></li>
  <li>
    <p class="conversation">C’est la volonté de Junon.»</p>
  </li>
  <li>Après avoir accompli sa mission,</li>
  <li value="630"><mark>Iris</mark> s’en va -car elle ne pouvait résister plus longtemps à ce pouvoir</li>
  <li>Soporifique – et sentant le sommeil se glisser dans ses membres,</li>
  <li>Elle s’enfuit, s’en retourne par arc-en-ciel, comme elle était venue.</li>
</ol>

<footer>
  <p><span style="color: #df8a13;">Ovide, <cite>Les Métamorphoses</cite>, Livre <abbr title="onze">XI</abbr>, vers 583 à 632.</span></p>
</footer>

<aside>

<h3 class="green">Note:</h3>

<section id="note">
<h4 class="green note">À propos de la dénomination du tableau de René-Antoine Houasse</h4>

<div class="notices green">
<p>L'œuvre de <a href="https://fr.wikipedia.org/wiki/René-Antoine_Houasse" title="https://fr.wikipedia.org/wiki/René-Antoine Houasse">René-Antoine Houasse</a> a été nommé au <abbr title="dix-septième">XVII<sup style="color:#3d8b3d;">ème</sup></abbr> siècle <cite>Morphée s'éveillant à l'approche d'Iris</cite> ou <cite>Iris et Morphée</cite>.</p>
<p>Nous conservons cette appellation pour permettre l'identification de l'œuvre, bien que la scène représentée montre bien plutôt <a href="https://fr.wikipedia.org/wiki/Iris_(mythologie)" title="https://fr.wikipedia.org/wiki/Iris_(mythologie)">Iris</a> et <a href="#area_morpheus" title="Morphée" id="morpheus">le Sommeil</a>, aussi appelé «Somnus» dont Morphée est le fils.</p>
<p>Ainsi que le montre la suite du récit d'Ovide dans le livre <abbr title="onze">XI</abbr> des <cite>Métamorphoses</cite>, après avoir reçu l'ordre d'Iris, Somnus désigne Morphée pour aller accomplir la mission d'Iris de faire rêver Alcyone.</p>
</div>
</section>

</aside>

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