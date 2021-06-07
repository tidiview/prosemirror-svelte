<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:142 ANG:205  -->

<article>

<hgroup>
<h1 class="yellow">Autres sources:</h1>
<h2 class="yellow">Saint-Michel selon l'Ancien ou le Nouveau Testatment</h2>
</hgroup>

<section id="daniel-dn-12-1-3">
<hgroup>
<h2 class="yellow">Livre de Daniel, chapître 12, versets 1 à 3</h2>
<h3 class="yellow">[Dn 12, 1-3]</h3>
</hgroup>

<ol class="doc">
  <li value="01">En ce temps-là se lèvera <mark>Michel</mark>, le chef des anges, celui qui se tient auprès des fils de ton peuple. Car ce sera un temps de détresse comme il n’y en a jamais eu depuis que les nations existent, jusqu’à ce temps-ci. Mais en ce temps-ci, ton peuple sera délivré, tous ceux qui se trouveront inscrits dans le Livre.</li>
  <li value="02">Beaucoup de gens qui dormaient dans la poussière de la terre s’éveilleront, les uns pour la vie éternelle, les autres pour la honte et la déchéance éternelles.</li>
  <li value="03">Ceux qui ont l’intelligence resplendiront comme la splendeur du firmament, et ceux qui sont des maîtres de justice pour la multitude brilleront comme les étoiles pour toujours et à jamais.</li>
</ol>
</section>

<section id="daniel-dn-10">
<hgroup>
<h2 class="yellow">Livre de Daniel, chapître 10, versets 1 à 21</h2>
<h3 class="yellow">[Dn 10]</h3>
</hgroup>

<ol class="doc">
  <li value="01">La troisième année du règne de Cyrus, roi de Perse, une parole fut révélée à Daniel, surnommé Beltassar: parole vraie et grand combat. Il comprit la parole: la compréhension lui vint dans une vision.</li>
  <li value="02">En ces jours-là, moi, Daniel, je portai le deuil pendant <time datetime="P21D">trois semaines entières</time>.</li>
  <li value="03">Je ne mangeai pas de nourriture agréable; ni viande ni vin ne passèrent par ma bouche, je m’abstins de tout parfum jusqu’au terme de ces trois semaines.</li>
  <li value="04">Et le vingt-quatrième jour du premier mois, étant au bord du grand fleuve, le Tigre,</li>
  <li value="05">je levai les yeux et regardai. Voici: il y avait un homme vêtu de lin, qui portait une ceinture d’or pur autour des reins</li>
  <li value="06">son corps était comme de la chrysolithe, son visage comme un éclair, ses yeux comme des torches de feu, ses bras et ses jambes avaient l’éclat du bronze poli, et le son de ses paroles était comme la rumeur d’une multitude.</li>
  <li value="07">Moi seul, Daniel, je vis cette apparition. Les hommes qui étaient avec moi ne voyaient pas l’apparition, mais une grande terreur s’abattit sur eux, et ils s’enfuirent pour se cacher.</li>
  <li value="08">Je demeurai donc seul et regardai cette apparition impressionnante. J’étais sans force aucune, mes traits bouleversés se décomposèrent, ma force m’abandonna.</li>
  <li value="09">J’entendis le bruit de ses paroles, et lorsque je l’entendis, je fus pris de torpeur et tombai face contre terre.</li>
  <li value="10">Alors une main me toucha et me redressa sur les genoux et les paumes de mes mains.</li>
  <li value="11">Il me dit:
    <p class="conversation">«Daniel, homme aimé de Dieu, comprends les paroles que je vais te dire, mets-toi debout. Oui, maintenant j’ai été envoyé vers toi.»</p>
    Tandis qu’il me parlait, je me mis debout en tremblant.
  </li>
  <li value="12">Il me dit:
    <p class="conversation">«N’aie pas peur, Daniel. Dès le premier jour où tu as eu à cœur de comprendre et de t’humilier devant ton Dieu, tes paroles ont été entendues: c’est à cause de tes paroles que je suis venu.</p>
  </li>
  <li value="13">
    <p class="conversation">L’ange du royaume de Perse m’a résisté pendant <time datetime="P21D">vingt et un jours</time>, mais <mark>Michel</mark>, l’un des premiers anges, est venu à mon aide. Moi, je l’ai laissé avec l’ange des rois de Perse.</p>
  </li>
  <li value="14">
    <p class="conversation">Alors, je suis venu pour t’expliquer ce qui arrivera à ton peuple à la fin des jours. Voici une nouvelle vision pour ces jours-là.»</p>
  </li>
  <li value="15">Tandis qu’il me parlait, je me prosternai à terre en silence.</li>
  <li value="16">Voici comme une forme de fils d’homme qui me toucha les lèvres. J’ouvris la bouche et parlai. Je dis à celui qui était devant moi:
    <p class="conversation">«Mon seigneur, à cause de l’apparition, l’angoisse me submerge et ma force m’abandonne.</p>
  </li>
  <li value="17">
    <p class="conversation">Comment le serviteur de mon seigneur pourra-t-il parler avec toi, mon seigneur, alors que je n’ai plus de force, et qu’il ne me reste pas de souffle?»</p>
  </li>
  <li value="18">Celui qui avait l’apparence d’un homme me toucha de nouveau et me réconforta.</li>
  <li value="19">Il me dit: 
    <p class="conversation">«N’aie pas peur, homme aimé de Dieu! La paix soit avec toi! Sois très fort!»</p>
  Tandis qu’il parlait, je repris des forces et dit:
    <p class="conversation">«Que mon seigneur parle, car tu m’as rendu la force.»</p>
  </li>
  <li value="20">Il dit:
    <p class="conversation">«Sais-tu pourquoi je suis venu vers toi? Maintenant, je vais retourner combattre l’ange de la Perse. À l’issue de ce combat, l’ange de la Grèce viendra.</p>
  </li>
  <li value="21">
    <p class="conversation">Personne ne me prête main-forte contre ceux-ci, sauf <mark>Michel</mark>, votre ange. Mais je t’annonce ce qui est inscrit dans le livre de vérité.»</p>
  </li>
</ol>
</section>

<section id="epître-de-jude-verset-9">
<hgroup>
<h2 class="yellow">Épître de Jude, verset 9</h2>
<h3 class="yellow">[Jd 1,9]</h3>
</hgroup>

<ol class="doc">
  <li value="09">Or <mark>l’archange Michel</mark>, discutant avec le démon dans la querelle au sujet du corps de Moïse, n’osa pas porter contre lui un jugement qui l’outrage; il lui dit seulement:
    <p class="conversation">«Que le Seigneur te blâme!»</p>
  </li>
</ol>
</section>

<section id="1th-chapître-4-verset-16">
<hgroup>
<h2 class="yellow">Première Épître aux Thessalonissiens, chapître 4 verset 16</h2>
<h3 class="yellow">[1Th. 4-6]</h3>
</hgroup>

  <p data-id="16" class="single-li">Au signal donné par la voix de <mark>l’archange</mark>, et par la trompette divine, le Seigneur lui-même descendra du ciel, et ceux qui sont morts dans le Christ ressusciteront d’abord.</p>

<footer>
  <p><span style="color: #df8a13;">Traduction liturgique de l'Ancien Testament.</span></p>
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