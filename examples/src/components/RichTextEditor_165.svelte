<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:133 EN:196  -->

<article>

<hgroup>
<h1 class="yellow">Flore</h1>
<h2 class="yellow">au Grand Trianon</h2>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore_700x1152.webp 700w" type="image/webp"><img src="/user/sites/docs/pages/01.home/02.https://francois-vidit.comversailles/03.trianon/04.flore/flore_700x1152.jpg" title="Peinture de Jean JOUVENET, “Flore et Zéphyr”, Grand Trianon, Versailles" alt="Peinture de Jean JOUVENET, “Flore et Zéphyr”, Grand Trianon, Versailles" class="class-diane-img" width="700" height="1152" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore_700x1152.jpg 700w" id="flore_et_zephyr"></picture><figcaption>Zéphyr propose <q cite="#flore-et-zephyr" style="quotes:'' ''">une multitude de nobles fleurs</q> à Flore:<br><q cite="#flore-et-zephyr">À toi, Déesse, la souveraineté des fleurs</q>, <cite>Les Fastes</cite>, Livre <abbr title="cinq">V</abbr>, vers 212.</figcaption>
</figure>

<div class="notices yellow">
<p>Au <a href="https://fr.wikipedia.org/wiki/Grand_Trianon" title="https://fr.wikipedia.org/wiki/Grand Trianon">Grand Trianon</a> à Versailles, au-dessus de la cheminée du Salon Frais, se peut voir un tableau de <a href="https://fr.wikipedia.org/wiki/Jean_Jouvenet" title="https://fr.wikipedia.org/wiki/Jean_Jouvenet">Jean JOUVENET</a>, <a href="#flore_et_zephyr" title="Flore et Zéphyr"><cite>Flore et Zéphyr</cite></a>.</p>
<p>Au bord d'un ruisseau, à proximité de nymphes occupées à leur toilette, devant un ange qui la couronne, dans une atmosphère indicible de printemps, <a href="https://fr.wikipedia.org/wiki/Zéphyr" title="https://fr.wikipedia.org/wiki/Zéphyr">Zéphyr</a>, homme aîlé qui représente la brise de l'ouest, présente une corbeille de guirlandes de fleurs à <a href="https://fr.wikipedia.org/wiki/Flore_(mythologie)" title="https://fr.wikipedia.org/wiki/Iris_(mythologie)">Flore</a>, déesse de cette saison.</p>
<p>Des documents établissent que ce tableau a été commandé par le roi <a href="https://fr.wikipedia.org/wiki/Louis_XIV" title="https://fr.wikipedia.org/wiki/Louis_XIV">Louis <abbr title="quatorze">XIV</abbr></a> pour cette pièce à partir d'un récit qu'en a fait l'écrivain latin <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a> dans un passage d'une de ses œuvres, <a href="https://fr.wikipedia.org/wiki/Fastes" title="https://fr.wikipedia.org/wiki/Fastes"><cite>Les Fastes</cite></a>.</p>
<p>L'écrivain, tout en décrivant les fêtes et événements traditionnels relatifs à l'agriculture ou à l'astrologie en fonction des saisons du <a href="https://fr.wikipedia.org/wiki/Calendrier_romain" title="https://fr.wikipedia.org/wiki/Calendrier_romain">calendrier romain</a>, y introduit un procédé littéraire original: au cours de son récit, poète, il interpelle les dieux, s'interroge en tant que prêtre et maître du calendrier du sens des choses et des mots.</p>
<p>Le texte ci-dessous est issu du <abbr title="cinquième">5<sup>ème</sup></abbr> livre et correspond au mois de mai: <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a> s'adresse directement à <a href="https://fr.wikipedia.org/wiki/Flore_(mythologie)" title="https://fr.wikipedia.org/wiki/Flore_(mythologie)">Flore</a>.</p>
<p>Dans les vers <a href="#183" id="ref_183">183 à 192</a>, il lui demande vers des précisions sur les <a href="https://fr.wikipedia.org/wiki/Jeux_floraux" title="https://fr.wikipedia.org/wiki/Jeux_floraux"><ruby lang="fr">Jeux&nbsp;Floraux<rp>(</rp><rt lang="la">Floralia</rt><rp>)</rp></ruby></a> qui se tenaient en son honneur depuis la fin du mois d'avril jusque début mai.</p>
<p>Bien que cela n'est pas de rapport direct avec la scène représentée visuellement dans le tableau, ce passage permet de saisir le mystère et le charme de la déesse, autant que le lien avec la représentation qu'en donne <a href="https://fr.wikipedia.org/wiki/Jean_Jouvenet" title="https://fr.wikipedia.org/wiki/Jean_Jouvenet">Jean JOUVENET</a>.</p>
<p><a href="https://fr.wikipedia.org/wiki/Flore_(mythologie)" title="https://fr.wikipedia.org/wiki/Flore_(mythologie)">Flore</a> se présente elle-même en s'identifiant à <a href="https://fr.wikipedia.org/wiki/Chloris_(nymphe)" title="https://fr.wikipedia.org/wiki/Chloris_(nymphe)">Chloris</a>, Nymphe de l'<a href="https://fr.wikipedia.org/wiki/Îles_des_Bienheureux" title="https://fr.wikipedia.org/wiki/Îles_des_Bienheureux">Île des Bienheureux</a>, dont la beauté a charmé <a href="https://fr.wikipedia.org/wiki/Zéphyr" title="https://fr.wikipedia.org/wiki/Zéphyr">Zéphyr</a>.</p>
<p>Celui-ci l'enleva, la prit pour femme, et lui donna souveraineté sur les fleurs.</p>
<p>Dans les vers <a href="#193" id="ref_193">193 à 222</a>, elle apparaît liée au printemps, à la beauté, à la vie, entourée des <a href="https://fr.wikipedia.org/wiki/Heures_(mythologie)" title="https://fr.wikipedia.org/wiki/Heures_(mythologie)">Heures</a> et des <a href="https://fr.wikipedia.org/wiki/Charites" title="https://fr.wikipedia.org/wiki/Charites">Grâces</a>.</p>
</div>

<section id="flore-et-zephyr">
<h2 class="yellow">Flore et Zéphyr selon le texte du livre <abbr title="cinq">V</abbr> des <cite>Fastes</cite></h2>

<ol class="doc">
  <li value="183" data-id="183">Viens, Mère des fleurs, toi qui doit être célébrée par des jeux plaisants.</li>
  <li>Le mois précédent, j'avais différé de traiter de ta fête.</li>
  <li value="185">Elle commence en avril, et se prolonge en mai: tu occupes deux mois, la fin de l'un, le début de l'autre.</li>
  <li>Puisque les confins de ces mois sont tiens et te reviennent, l'un autant que l'autre convient pour chanter tes louanges.</li>
  <li>C'est en mai que tombent les jeux du cirque et que la palme s'acclame au théâtre;</li>
  <li value="190">puisse mon poème aussi aller de pair avec les spectacles du cirque.</li>
  <li>Apprends-moi qui tu es: l'opinion des hommes est faillible; tu seras le meilleur garant pour expliquer ton propre nom.</li>
  <li value="192">Telle fut ma demande;</li>
  <li value="193" data-id="193">voici la réponse de la déesse à mes requêtes (en parlant, sa bouche exhalait un frais parfum de roses):</li>
  <li value="195">
    <p class="conversation">«J'étais <a href="https://fr.wikipedia.org/wiki/Chloris_(nymphe)" title="https://fr.wikipedia.org/wiki/Chloris_(nymphe)">Chloris</a>, moi qu'on appelle maintenant <a href="https://fr.wikipedia.org/wiki/Flore_(mythologie)" title="https://fr.wikipedia.org/wiki/Iris_(mythologie)">Flore</a>; une lettre grecque de mon nom a été altérée par la prononciation latine.</p>
  </li>
  <li>
    <p class="conversation">J'étais <a href="https://fr.wikipedia.org/wiki/Chloris_(nymphe)" title="https://fr.wikipedia.org/wiki/Chloris_(nymphe)">Chloris</a>, Nymphe de ces Îles Fortunées, où, dit-on, les Bienheureux vivaient jadis.</p>
  </li>
  <li>
    <p class="conversation">Te décrire combien j'étais belle heurterait ma modestie;</p>
  </li>
  <li value="200">
    <p class="conversation">toutefois c'est elle qui valut à ma mère un dieu pour gendre.</p>
    </li>
  <li>
    <p class="conversation">C'était le printemps, j'errais: <a href="https://fr.wikipedia.org/wiki/Zéphyr" title="https://fr.wikipedia.org/wiki/Zéphyr">Zéphyr</a> m'aperçut, je m'éloignai; il me suivit, je m'enfuis: il fut le plus fort.</p>
  </li>
  <li>
    <p class="conversation">D'ailleurs, ce rapt n'était-il pas entièrement justifié par son frère <a href="https://fr.wikipedia.org/wiki/Borée" title="https://fr.wikipedia.org/wiki/Borée">Borée</a>, qui avait osé lui aussi enlever la fille d'<a href="https://fr.wikipedia.org/wiki/Érechthée" title="https://fr.wikipedia.org/wiki/Érechthée">Érechthée</a>?</p>
  </li>
  <li value="205">
    <p class="conversation">Cependant <a href="https://fr.wikipedia.org/wiki/Zéphyr" title="https://fr.wikipedia.org/wiki/Zéphyr">Zéphyr</a> répara son outrage en me donnant le titre d'épouse, et je n'émets aucune plainte à propos de mon mariage.</p>
  </li>
  <li>
    <p class="conversation"><span style="color: #df8a13;">Je jouis d'un éternel printemps</span>: toujours l'année est éclatante, toujours l'arbre est couvert de feuilles, la terre de verdure.</p>
  </li>
  <li>
    <p class="conversation">Parmi les biens de ma dot, je possède un jardin fertile:</p>
  </li>
  <li value="210">
    <p class="conversation">la brise le féconde, une source d'eau limpide l'arrose.</p>
  </li>
  <li>
    <p class="conversation">Mon époux l'a empli d'une multitude de nobles fleurs et a dit:</p>
    <p class="conversation">“À toi, Déesse, la souveraineté des fleurs.”</p>
  </li>
  <li>
    <p class="conversation">Souvent j'ai voulu classer et compter leurs couleurs, sans pouvoir y parvenir: leur nombre était trop grand.</p>
  </li>
  <li value="215">
    <p class="conversation">Dès que les feuilles ont secoué la rosée hivernale, dès que les rayons ont réchauffé les corolles multicolores,
    <span style="color: #df8a13;">les</span> <a href="https://fr.wikipedia.org/wiki/Heures_(mythologie)" title="https://fr.wikipedia.org/wiki/Heures_(mythologie)"><span style="color: #df8a13;">Heures</span></a> parées de leurs robes diaprées se rassemblent et <span style="color: #df8a13;">recueillent mes dons dans leurs corbeilles légères</span>.</p>
  </li>
  <li>
    <p class="conversation">Aussitôt surviennent <span style="color: #df8a13;">les</span> <a href="https://fr.wikipedia.org/wiki/Charites" title="https://fr.wikipedia.org/wiki/Charites"><span style="color: #df8a13;">Grâces</span></a>, qui <span style="color: #df8a13;">tressent des couronnes</span></p>
  </li>
  <li value="220">
    <p class="conversation"><span style="color: #df8a13;">et des guirlandes pour en entrelacer leurs chevelures célestes</span>».</p>
  </li>
</ol>

<footer>
  <p><span style="color: #df8a13;">Ovide, <cite>Les Fastes</cite>, Livre <abbr title="cinq">V</abbr>, vers 183 à 220</span></p>
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