<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
  <div id="body-inner">
<h1 class="yellow">Flore</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore_700x1152.webp 700w" type="image/webp"><img src="/user/sites/docs/pages/01.home/02.https://francois-vidit.comversailles/03.trianon/04.flore/flore_700x1152.jpg" title="Peinture de Jean JOUVENET, “Flore et Zéphyr”, Grand Trianon, Versailles" alt="Peinture de Jean JOUVENET, “Flore et Zéphyr”, Grand Trianon, Versailles" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore_700x1152.jpg 700w" id="flore_et_zephyr"></picture><figcaption>Zéphyr propose une corbeille de guirlandes de fleurs à Flore</figcaption></figure>
<div class="notices yellow">
<p>Au <a href="https://fr.wikipedia.org/wiki/Grand_Trianon" title="https://fr.wikipedia.org/wiki/Grand Trianon">Grand Trianon</a> à Versailles, au-dessus de la cheminée du Salon Frais, se peut voir un tableau de <a href="https://fr.wikipedia.org/wiki/Jean_Jouvenet" title="https://fr.wikipedia.org/wiki/Jean_Jouvenet">Jean JOUVENET</a>, “<a href="#flore_et_zephyr" title="Flore et Zéphyr">Flore et Zéphyr</a>”.<br>
Au bord d'un ruisseau, à proximité de nymphes occupées à leur toilette, devant un ange qui la couronne, dans une atmosphère indicible de printemps, Zéphyr, homme aîlé qui représente la brise de l'ouest, présente une corbeille de guirlandes de fleurs à <a href="https://fr.wikipedia.org/wiki/Flore_(mythologie)" title="https://fr.wikipedia.org/wiki/Iris_(mythologie)">Flore</a>, déesse de cette saison.<br>
Des documents établissent que ce tableau a été commandé par le roi <a href="https://fr.wikipedia.org/wiki/Louis_XIV" title="https://fr.wikipedia.org/wiki/Louis_XIV">Louis XIV</a> pour cette pièce à partir d'un récit qu'en a fait l'écrivain latin <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a> dans un passage d'une de ses œuvres, “<a href="https://fr.wikipedia.org/wiki/Fastes" title="https://fr.wikipedia.org/wiki/Fastes">Les Fastes</a>”.<br>
L'écrivain, tout en décrivant les fêtes et événements traditionnels relatifs à l'agriculture ou à l'astrologie en fonction des saisons du <a href="https://fr.wikipedia.org/wiki/Calendrier_romain" title="https://fr.wikipedia.org/wiki/Calendrier_romain">calendrier romain</a>, y introduit un procédé littéraire original: au cours de son récit, poète, il interpelle les dieux, s'interroge en tant que prêtre et maître du calendrier du sens des choses et des mots.<br>
Le texte ci-dessous est issu du 5<sup>ème</sup> livre et correspond au mois de mai: <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a> s'adresse directement à <a href="https://fr.wikipedia.org/wiki/Flore_(mythologie)" title="https://fr.wikipedia.org/wiki/Iris_(mythologie)">Flore</a>.<br>
Dans les vers <a href="#183" id="ref_183">183 à 192</a>, il lui demande vers des précisions sur les <a href="https://fr.wikipedia.org/wiki/Jeux_floraux" title="https://fr.wikipedia.org/wiki/Jeux_floraux"><ruby lang="fr">Jeux&nbsp;Floraux<rp>(</rp><rt lang="la">Floralia</rt><rp>)</rp></ruby></a> qui se tenaient en son honneur depuis la fin du mois d'avril jusque début mai.<br>
Bien que cela n'est pas de rapport direct avec la scène représentée visuellement dans le tableau, ce passage permet de saisir le mystère et le charme de la déesse, autant que le lien avec la représentation qu'en donne <a href="https://fr.wikipedia.org/wiki/Jean_Jouvenet" title="https://fr.wikipedia.org/wiki/Jean_Jouvenet">Jean JOUVENET</a>.<br>
<a href="https://fr.wikipedia.org/wiki/Flore_(mythologie)" title="https://fr.wikipedia.org/wiki/Iris_(mythologie)">Flore</a> se présente elle-même en s'identifiant à <a href="https://fr.wikipedia.org/wiki/Chloris_(nymphe)" title="https://fr.wikipedia.org/wiki/Chloris_(nymphe)">Chloris</a>, Nymphe de l'<a href="https://fr.wikipedia.org/wiki/Îles_des_Bienheureux" title="https://fr.wikipedia.org/wiki/Îles_des_Bienheureux">Île des Bienheureux</a>, dont la beauté a charmé <a href="https://fr.wikipedia.org/wiki/Zéphyr" title="https://fr.wikipedia.org/wiki/Zéphyr">Zéphyr</a>.<br>
Celui-ci l'enleva, la prit pour femme, et lui donna souveraineté sur les fleurs.<br>
Dans les vers <a href="#193" id="ref_193">193 à 222</a>, elle apparaît liée au printemps, à la beauté, à la vie, entourée des <a href="https://fr.wikipedia.org/wiki/Louis_XIV" title="https://fr.wikipedia.org/wiki/Louis_XIV">Heures</a> et des <a href="https://fr.wikipedia.org/wiki/Calendrier_romain" title="https://fr.wikipedia.org/wiki/Calendrier_romain">Grâces</a>.</p>
</div>
<h2 id="flore-et-zéphyr" class="yellow">Flore et Zéphyr selon “les Fastes”</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup><a href="#ref_183" id="183">183</a></sup></td>
<td>Viens, Mère des fleurs, toi qui doit être célébrée par des jeux plaisants.<br>
Le mois précédent, j'avais différé de traiter de ta fête.</td></tr>
<tr><td><sup>185</sup></td>
<td>Elle commence en avril, et se prolonge en mai: tu occupes deux mois, la fin de l'un, le début de l'autre.<br>
Puisque les confins de ces mois sont tiens et te reviennent, l'un autant que l'autre convient pour chanter tes louanges.<br>
C'est en mai que tombent les jeux du cirque et que la palme s'acclame au théâtre;</td></tr>
<tr><td><sup>190</sup></td>
<td>puisse mon poème aussi aller de pair avec les spectacles du cirque.<br>
Apprends-moi qui tu es: l'opinion des hommes est faillible; tu seras le meilleur garant pour expliquer ton propre nom.</td></tr>
<tr><td><sup><a href="#ref_193" id="193">193</a></sup></td>
<td>Telle fut ma demande;<br>
voici la réponse de la déesse à mes requêtes (en parlant, sa bouche exhalait un frais parfum de roses):</td></tr>
<tr><td><sup>195</sup></td>
<td>«<cite>J'étais <a href="https://fr.wikipedia.org/wiki/Chloris_(nymphe)" title="https://fr.wikipedia.org/wiki/Chloris_(nymphe)">Chloris</a>, moi qu'on appelle maintenant <a href="https://fr.wikipedia.org/wiki/Flore_(mythologie)" title="https://fr.wikipedia.org/wiki/Iris_(mythologie)">Flore</a>; une lettre grecque de mon nom a été altérée par la prononciation latine.<br>
J'étais <a href="https://fr.wikipedia.org/wiki/Chloris_(nymphe)" title="https://fr.wikipedia.org/wiki/Chloris_(nymphe)">Chloris</a>, Nymphe de ces Îles Fortunées, où, dit-on, les Bienheureux vivaient jadis.<br>
Te décrire combien j'étais belle heurterait ma modestie;</cite></td></tr>
<tr><td><sup>200</sup></td>
<td><cite>toutefois c'est elle qui valut à ma mère un dieu pour gendre.</cite></td></tr>
<tr><td></td>
<td><cite>C'était le printemps, j'errais: <a href="https://fr.wikipedia.org/wiki/Zéphyr" title="https://fr.wikipedia.org/wiki/Zéphyr">Zéphyr</a> m'aperçut, je m'éloignai; il me suivit, je m'enfuis: il fut le plus fort.<br>
D'ailleurs, ce rapt n'était-il pas entièrement justifié par son frère <a href="https://fr.wikipedia.org/wiki/Borée" title="https://fr.wikipedia.org/wiki/Borée">Borée</a>, qui avait osé lui aussi enlever la fille d'<a href="https://fr.wikipedia.org/wiki/Érechthée" title="https://fr.wikipedia.org/wiki/Érechthée">Érechthée</a>?</cite></td></tr>
<tr><td><sup>205</sup></td>
<td><cite>Cependant <a href="https://fr.wikipedia.org/wiki/Zéphyr" title="https://fr.wikipedia.org/wiki/Zéphyr">Zéphyr</a> répara son outrage en me donnant le titre d'épouse, et je n'émets aucune plainte à propos de mon mariage.</cite></td></tr>
<tr><td></td>
<td><cite><span style="color: #df8a13;">Je jouis d'un éternel printemps</span>: toujours l'année est éclatante, toujours l'arbre est couvert de feuilles, la terre de verdure.</cite></td></tr>
<tr><td></td>
<td><cite>Parmi les biens de ma dot, je possède un jardin fertile:</cite></td></tr>
<tr><td><sup>210</sup></td>
<td><cite>la brise le féconde, une source d'eau limpide l'arrose.<br>
Mon époux l'a empli d'une multitude de nobles fleurs et a dit: “</cite>À toi, Déesse, la souveraineté des fleurs<cite>”.<br>
Souvent j'ai voulu classer et compter leurs couleurs, sans pouvoir y parvenir: leur nombre était trop grand.</cite></td></tr>
<tr><td><sup>215</sup></td>
<td><cite>Dès que les feuilles ont secoué la rosée hivernale, dès que les rayons ont réchauffé les corolles multicolores,
<span style="color: #df8a13;">les</span> <a href="https://fr.wikipedia.org/wiki/Louis_XIV" title="https://fr.wikipedia.org/wiki/Louis_XIV"><span style="color: #df8a13;">Heures</span></a> parées de leurs robes diaprées se rassemblent et <span style="color: #df8a13;">recueillent mes dons dans leurs corbeilles légères</span>.<br>
Aussitôt surviennent <span style="color: #df8a13;">les</span> <a href="https://fr.wikipedia.org/wiki/Calendrier_romain" title="https://fr.wikipedia.org/wiki/Calendrier_romain"><span style="color: #df8a13;">Grâces</span></a>, qui <span style="color: #df8a13;">tressent des couronnes</cite></td></tr>
<tr><td><sup>220</sup></td>
<td><cite>et des guirlandes pour en entrelacer leurs chevelures célestes</span></cite>».</td></tr>
</tbody>
</table>
<p><span style="color: #df8a13;">Ovide, “Les Fastes”, Livre V, vers 183 à 220</span></p>
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