<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:124 EN:187 -->

<article>

<h1 class="green">La Joconde selon Giorgio Vasari</h1>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.webp 1920w" type="image/webp">
  <img src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.jpg" title="Portrait de Lisa Gherardini, épouse de Francesco del Giocondo, dite «Monna Lisa, la Gioconda» ou «la Joconde»" alt="Portrait de Lisa Gherardini, épouse de Francesco del Giocondo, dite «Monna Lisa, la Gioconda» ou «la Joconde»" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.jpg 1920w" id="joconde_selon_vasari"></picture><figcaption>Portrait de Lisa Gherardini, épouse de Francesco del Giocondo, dite «Monna Lisa, la Gioconda» de l'italien ou «la Joconde» du français.</figcaption>
</figure>

<div class="notices green">
<p>Les deux descriptions de <a href="https://fr.wikipedia.org/wiki/La_Joconde" title="https://fr.wikipedia.org/wiki/La_Joconde">la Joconde</a> que nous présentons ci-dessous a été écrite par <a href="https://fr.wikipedia.org/wiki/Giorgio_Vasari" title="https://fr.wikipedia.org/wiki/Giorgio_Vasari">Giorgio Vasari</a> et publiée à Florence en <time datetime="1550">1550</time> puis augmentée en <time datetime="1568">1568</time>.</p>
<p>Elles sont à ce jour à la fois les plus connues, les plus anciennes et les plus dignes de foi.</p>
<p>À ce titre, elles ont influencé la plupart des descriptions ultérieures.</p>
<p>Vasari décrit une œuvre qu'il n'a pas lui-même vue car le tableau se trouve alors à Fontainebleau où il ne se rendit jamais.</p>
<p>Les descriptions nous renseignent sur la réputation du portrait: il a été exécutée à Florence vers <time datetime="1503">1503</time>, <a href="https://fr.wikipedia.org/wiki/Léonard_de_Vinci" title="https://fr.wikipedia.org/wiki/Léonard_de_Vinci">Léonard de Vinci</a> y a travaillé pendant <time datetime="P4Y">quatre ans</time>, il représente l'épouse de Francesco Del Giocondo, désignée comme «M[ad]on[n]a Lisa», “Madame Lise”.</p>
<p>Elles nous permettent surtout de saisir ce qui en constituait la valeur aux yeux de Vasari, en même temps que de mesurer les subtiles différences d'appréciation entre deux éditions que <time datetime="P18Y">18 années</time> séparent.</p>
</div>

<article>

<h2 class="yellow"><cite>La Joconde</cite> selon le texte du livre <abbr title="deux">II</abbr> de l'édition de <time datetime="1550">1550</time> des <cite>Vies des peintres, sculpteurs et architectes les plus célèbres</cite></h2>

<p>Léonard De Vinci entreprit pour Francesco del Giocondo le portrait de Mona Lisa, son épouse. Et après y avoir peiné <time datetime="P4Y">quatre ans</time>, le laissa inachevé. Cet ouvrage est aujourd’hui chez le roi François de France à Fontainebleau.</p>
<p>En cette tête, qui voulait voir <span style="color: #3d8b3d;">combien l’art sait aisément imiter la nature, le pouvait aisément comprendre, car s’y trouvait contrefait tous les plus petits détails que l’on pouvait peindre avec finesse.</span>.</p>
<p>Car les yeux avaient ce lustre, cette eau que l’on voit toujours chez les vivants.
Et autour d’eux, étaient tous ces roses bleutés, les cils, qui ne se peuvent faire sans la plus grande finesse.</p>
<p>Les sourcils, pour y avoir fait la manière dont les poils naissent de la chair, tantôt plus épais, tantôt plus rare, et celle dont ils se courbent selon les pores de la peau. Tout cela ne pouvait être plus naturel.</p>
<p>Le nez, aux belles ouvertures, rose et tendre, semblait être vivant.</p>
<p>La bouche était cette fente aux limites unies par le rouge des lèvres à l’incarnat du visage qui ne paraissait point couleur mais véritablement chair.</p>
<p>Au creux de la gorge, quiconque regardait très attentivement voyait battre le pouls et l’on peut dire en vérité que cette œuvre fut peinte de manière à faire trembler et craindre tout valeureux artiste, quel qu’il fut.</p>
<p>Il usa de cet artifice encore, Mona Lisa étant fort belle, que tandis qu’il la portraiyais, <span style="color: #3d8b3d;">il faisait jouer ou chanter et avait continuel recours à des bouffons qu’ils la fissent demeurer gaie, afin de chasser la mélancolie que la peinture a coutume de donner aux portaits lorsqu’on les fait.</span>.</p>
<p><span style="color: #3d8b3d;">Et en celui de Leonardo était un sourire si plaisant, que c’était œuvre à voir plus divine qu’humaine, et qu’elle était tenue pour merveille, pour ce que la vie, ne se présente pas autrement.</span>.</p>

<footer>
  <p><a href="https://fr.wikipedia.org/wiki/Giorgio_Vasari" title="https://fr.wikipedia.org/wiki/Giorgio_Vasari" class="green">Giorgio Vasari</a><span style="color: #3d8b3d;">, Édition de <time datetime="1550">1550</time> <cite>Vies des peintres, sculpteurs et architectes les plus célèbres</cite>, livre <abbr title="deux">II</abbr>, partie 3, pages <a href="https://gallica.bnf.fr/ark:/12148/bpt6k1232563/f18.item" title="https://gallica.bnf.fr/ark:/12148/bpt6k1232563/f18.item">570 à 571</a>, édition de <time datetime="1550">1550</time> dite la «Torrentiniana».</span></p>
</footer>

</article>

<article>

<h2 id="vasari" class="yellow"><cite>La Joconde</cite> selon le texte du livre <abbr title="quatre">IV</abbr> de l'édition de <time datetime="1568">1568</time> des <cite>Vies des peintres, sculpteurs et architectes les plus célèbres</cite></h2>

<p>Ensuite il commença pour François del Giocondo le portrait de Mona Lisa sa femme, auquel il travailla pendant <time datetime="P4Y">quatre ans</time>, le laissant imparfait.</p>
<p>Ce tableau appartient aujourd hui à François <abbr title="premier">I<sup>er</sup></abbr> et est placé à Fontainebleau.</p>
<p>Celui qui désiroit se convaincre <span style="color: #3d8b3d;">jusqu'à quel point l'art peut imiter la nature, le pouvoit d'autant plus, que les moindres choses sont rendues dans cette tête avec la plus grande finesse</span>.</p>
<p>Les yeux avoient ce brillant, cette humidité qui existent sans cesse dans la nature,
et étoient entourés de ces rouges pâles, et des paupières qui ne peuvent s'exécuter qu'avec une très grande subtilité.</p>
<p>On voyoit la manière dont naissent les sourcils dans la chair, qui tantôt plus épais, tantôt plus clairs, tournoient selon les pores qu'indique la nature.</p>
<p>Le nez étroit n'étoit pas moins bien rendu, et toutes ces belles ouvertures rougeâtres et délicates.</p>
<p>La bouche vermeille et ses extrémités se fondoient tellement avec la carnation du visage, que l'on croyoit plutôt y voir la chair que la couleur.</p>
<p>Lorsque l'on regardait attentivement le creux de la gorge, on sembloit apercevoir le battement du pouls;
et l'on peut dire avec vérité que ce portrait étoit peint de manière à faire craindre et trembler les plus grands maîtres.</p>
<p>Tandis que Léonard étoit occupé à peindre madame Lise, remarquable par sa beauté, <span style="color: #3d8b3d;">il avoit soin que l’on jouât de quelque instrument, ou que l’on chantât, et même que des bouffons l’égayassent sans cesse afin d’éloigner d’elle cette mélancolie, qui souvent se rencontre dans les portraits</span>.</p>
<p><span style="color: #3d8b3d;">Le sourire de celui-ci séduisoit au point qu’on l’eût jugé être de la main d’un dieu on étoit enfin frappé d’étonnement l’art ayant su lui donner la vie et rivaliser avec la nature</span>.</p>

<footer>
  <p><a href="https://fr.wikipedia.org/wiki/Giorgio_Vasari" title="https://fr.wikipedia.org/wiki/Giorgio_Vasari" class="green">Giorgio Vasari</a><span style="color: #3d8b3d;">, <cite>Vies des peintres, sculpteurs et architectes les plus célèbres</cite>, livre IV, Chez Boiste, <time datetime="1803">1803</time>, pages 27 à 28, édition de <time datetime="1568">1568</time> dite la «giuntina».</span></p>
</footer>

</article>

<aside>
  <p></p>
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