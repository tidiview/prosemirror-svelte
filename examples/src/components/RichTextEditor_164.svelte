<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="green">Iris</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.jpg" title="Peinture de René-Antoine HOUASSE,　“Morphée s'éveillant à l'approche d'Iris” (“Iris et Morphée”), Grand Trianon, Versailles" alt="Peinture de René-Antoine HOUASSE,　“Morphée s'éveillant à l'approche d'Iris” (“Iris et Morphée”), Grand Trianon, Versailles" class="class-diane-img" usemap="#iris" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.jpg 700w"></picture><figcaption>Iris, messagère de Junon, entre dans la grotte de Sommeil</figcaption><map name="iris" id="iris"><area title="Iris" alt="Iris" id="area_iris" href="#iris" shape="poly" coords="60,724,83,671,131,639,200,607,202,541,263,481,317,366,382,359,435,298,428,266,404,276,394,308,317,337,300,279,303,244,292,227,266,234,244,129,205,212,173,185,140,197,38,130,35,158,64,222,105,269,124,353,98,395,93,435,68,452,62,472,72,480,83,481,85,500,72,517,56,505,33,509,21,522,22,575,44,598,39,625,52,644,73,640,65,652,48,655,38,690,39,727"><area title="Sommeil" alt="Sommeil" id="area_morpheus" href="#morpheus" shape="poly" coords="235,799,335,766,392,763,419,779,442,860,453,868,508,816,523,792,630,775,655,750,690,742,726,717,762,734,826,715,822,692,794,685,752,685,739,667,705,652,700,619,713,600,701,581,620,546,582,547,572,563,575,622,470,567,323,540,330,571,399,608,457,619,490,639,526,680,468,660,415,662,364,672,313,659,307,671,337,695,358,721,286,754,239,761,223,779"></map></figure>
<div class="notices green">
<p>Dans le Salon de Famille de Louis-Philippe du <a href="https://fr.wikipedia.org/wiki/Grand_Trianon" title="https://fr.wikipedia.org/wiki/Grand Trianon">Grand Trianon</a> à Versailles, se peut voir une peinture de <a href="https://fr.wikipedia.org/wiki/René-Antoine_Houasse" title="https://fr.wikipedia.org/wiki/René-Antoine Houasse">René-Antoine Houasse</a>, “Morphée s'éveillant à l'approche d'Iris” (aussi appelée “Iris et Morphée”).<br>
À partir d'une partie du Livre XI des <a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/Métamorphoses (Ovide)">Métamorphoses</a> d'<a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a> se trouve représenté le moment où <a href="#area_iris" title="Iris" id="iris">Iris</a>, messagère de <a href="https://fr.wikipedia.org/wiki/Junon" title="https://fr.wikipedia.org/wiki/Junon">Junon</a>, entre dans la grotte de <a href="https://fr.wikipedia.org/wiki/Hypnos" title="https://fr.wikipedia.org/wiki/Hypnos">Sommeil</a> pour lui ordonner de faire rêver <a href="https://fr.wikipedia.org/wiki/Alcyone" title="https://fr.wikipedia.org/wiki/Alcyone">Alcyone</a>.</p>
</div>
<p><br></p>
<h2 id="iris-1" class="green">Iris selon “Les Métamorphoses”</h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
<sup>583</sup>
Or la déesse ne supporte pas davantage qu'on l'implore pour quelqu'un<br>
Qui est mort et, afin de détourner de ses autels ces mains funestes,<br>
<sup>585</sup>
Elle dit: “<span style="color: #3d8b3d;">Iris</span>, fidèle messagère de mes volontés,<br>
Cours vite chez le Sommeil, dans son palais des songes,<br>
Et demande-lui d'envoyer à <span style="color: #3d8b3d;">Alcyone</span> un rêve qui, sous les traits<br>
De son défunt <span style="color: #3d8b3d;">Céyx</span>, lui dise toute la vérité sur son malheur.”  </p>
<p>Elle a parlé: <span style="color: #3d8b3d;">Iris</span> revêt sa robe aux mille couleurs<br>
<sup>590</sup>
Et, arc-en-ciel décrivant une courbe dans l’espace,<br>
Elle gagne, pour exécuter l’ordre, le palais royal caché sous la nue.<br>
Il est, près du pays des Cimmériens, une cavernes très secrête,<br>
Creusée dans la roche, demeure et sanctuaire du <span style="color: #3d8b3d;">Sommeil Indolent</span><br>
Où jamais Phœbus ne peut, au lever, au zénith, au coucher,<br>
<sup>595</sup>
Faire pénétrer ses rayons. Des vapeurs mêlées de brumes<br>
S’exhalent du sol, ce qui donne une vague lueur crépusculaire.<br>
Là, l’oiseau vigilant couronné d’une crête ne chante point<br>
Pour appeler l’Aurore, et le silence n’est rompu ni par la voix<br>
Des chiens de gardes, ni par celle de l’oie, plus sagace que les chiens.<br>
<sup>600</sup>
Aucun animal sauvage ni domestique, aucune branche agitée par la brise<br>
N’émet le moindre son, ni les humains conversant dans leur langue&nbsp;:<br>
C’est un lieu de silence et de calme. Toutefois, des profondeurs de la roche<br>
Sort une résurgence du Léthé dont l’eau glisse dans un murmure<br>
Sur les cailloux crissants et invite au sommeil.<br>
<sup>605</sup>
Devant l’entrée de la grotte fleurissent d’abondants pavots,<br>
D’innombrables plantes dont la Nuit humide recueille le lait<br>
Afin de le répandre sur les terres ombreuses.<br>
Aucune porte ne grince en tournant sur ses gonds&nbsp;:<br>
Il n’y en a pas une seule dans toute la demeure&nbsp;; nul gardien sur le seuil.<br>
<sup>610</sup>
Mais au milieu de la grotte s’élève un lit d’ébène<br>
Au matelas de plumes, de couleur uniforme, tendu de noir,<br>
Où repose le dieu aux membres alanguis par l’inactivité.<br>
Autour de lui sont couchés çà et là, sous des apparences diverses,<br>
Les <span style="color: #3d8b3d;">Songes trompeurs</span>, aussi nombreux que les blés d’une moisson,<br>
<sup>615</sup>
Les feuillages dans une forêt, les grains de sable jetés sur un rivage.<br>
Sitôt que la vierge est entrée, écartant de la mains les Songes<br>
Qui lui faisaient obstacle, l’éclat de sa robe a illuminé<br>
La demeure sacrée et le dieu, soulevant avec peine<br>
Ses paupières lourdes tombant et retombant sans cesse<br>
<sup>620</sup>
Tandis que son menton tremblotant frappe le haut de sa poitrine,<br>
Finit par se secouer et, appuyé sur un coude, lui demande<br>
(Car il l’a reconnue) la raison de sa visite.<br>
Alors elle lui dit&nbsp;:<br>
«<span style="color: #3d8b3d;">Sommeil</span>, repos de l’univers, Sommeil, le plus paisible des dieux,<br>
Paix de l’âme, toi qui fais fuir l’inquiétude, toi qui dissipes<br>
<sup>625</sup>
La fatigue du corps après de lourdes tâche et qui aides à l’effort,<br>
Ordonne à l’un des Songes qui savent prendre l’apparence du vrai<br>
De partir pour Trachine, ville d’Hercule, sous les traits de son roi<br>
Et, prenant la forme d’un naufragé, d’appraître à Alcyone.<br>
C’est la volonté de Junon.»<br>
Après avoir accompli sa mission,<br>
<sup>630</sup>
Iris s’en va -car elle ne pouvait résister plus longtemps à ce pouvoir<br>
Soporifique – et sentant le sommeil se glisser dans ses membres,<br>
Elle s’enfuit, s’en retourne par arc-en-ciel, comme elle était venue.
<span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span>  </p>
<p><span style="color: #3d8b3d;">Ovide, “Les Métamorphoses”, Livre XI</span>  </p>
<div class="notices green">
<h4 id="note class="green">Note:</h4>
<p>L'œuvre de <a href="https://fr.wikipedia.org/wiki/René-Antoine_Houasse" title="https://fr.wikipedia.org/wiki/René-Antoine Houasse">René-Antoine Houasse</a> a été nommé au XVII<sup style="color:#3d8b3d;">ème</sup> siècle «Morphée s'éveillant à l'approche d'Iris» ou «Iris et Morphée».<br>
Nous conservons cette appellation pour permettre son identification, bien que la scène représentée montre bien plutôt <a href="https://fr.wikipedia.org/wiki/Iris_(mythologie)" title="https://fr.wikipedia.org/wiki/Iris_(mythologie)">Iris</a> et <a href="#area_morpheus" title="Morphée" id="morpheus">le Sommeil</a>, aussi appelé Somnus. Morphée est son fils.<br>
Après avoir reçu l'ordre d'Iris, son père le désigne pour aller accomplir la mission d'Iris ainsi que le montre la suite du récit.</p>
</div>
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