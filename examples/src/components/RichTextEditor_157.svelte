<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:125 EN:188  -->
<article>

<h1 class="green">La Joconde selon Théophile Gautier</h1>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.jpg" title="Portrait de Lisa Gherardini, épouse de Francesco del Giocondo, dite «Monna Lisa, la Gioconda» ou «la Joconde»" alt="Portrait de Lisa Gherardini, épouse de Francesco del Giocondo, dite «Monna Lisa, la Gioconda» ou «la Joconde»" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.jpg 1920w" id="joconde_selon_gautier"></picture><figcaption>Portrait de Lisa Gherardini, épouse de Francesco del Giocondo, dite «Monna Lisa, la Gioconda» ou «la Joconde»</figcaption>
</figure>

<div class="notices green">

<p>La description de <a href="https://fr.wikipedia.org/wiki/La_Joconde" title="https://fr.wikipedia.org/wiki/La_Joconde">la Joconde</a> que nous présentons ci-dessous a été écrite par l'écrivain romantique <a href="https://fr.wikipedia.org/wiki/Théophile_Gautier" title="https://fr.wikipedia.org/wiki/Théophile_Gautier">Théophile GAUTIER</a> et publiée à Paris en <time datetime="1867">1867</time>.</p>
<p>C'est une description capitale pour l'histoire du tableau car elle va à la fois mythifiée et détournée l'œuvre de <a href="https://fr.wikipedia.org/wiki/Léonard_de_Vinci" title="https://fr.wikipedia.org/wiki/Léonard_de_Vinci">Léonard de Vinci</a> au nom du mystère qu'elle paraît incarner et influencer une bonne partie des regards biaisés portés sur l'œuvre au cours du <time datetime="1950"><abbr title="vingtième">XX<sup>ème</sup></abbr> siècle</time>.</p>
<p>Nous pensons que si cette description est misogyne, que cette misogynie ne fait partie ni de l'œuvre de Léonard de Vinci encore moins de l'émotion artistique et que la Joconde gagnerait à être débarassée des chimères de Théophile Gautier.</p>
</div>

<h2 class="green">La Joconde selon le texte de Théophile Gautier extrait du <cite>guide par les principaux écrivains et artistes de France</cite></h2>

<p>Notre admiration et notre amour pour cette divine Monna Lisa del Giocondo ne datent pas d'hier, et bien des passions pour des êtres réels ont duré moins longtemps.</p>
<p>Il y a une douzaine d'années que nous écrivions ces lignes un peu trop enthousiastes peut-être, mais qui rendent fidèlement notre impression:</p>

<p class="conversation">«La Joconde!</p>
<p class="conversation"><span style="color: #3d8b3d;">Sphinx de beauté</span> qui souris si mystérieusement dans le cadre de Léonard de Vinci et sembles proposer à l'admiration des siècles une énigme qu'ils n'ont pas encore résolue, un attrait invincible ramène toujours vers toi!</p>
<p class="conversation">Oh! en effet. qui n'est resté accoudé de longues heures devant cette tête baignée de demi-teintes crépusculaires, enveloppée de crêpes transparents et dont les traits, mélodieusement noyés dans une vapeur violette, apparaissent comme <span style="color: #3d8b3d;">une création du Rêve à travers la gaze noire du Sommeil</span>?</p>
<p class="conversation"><span style="color: #3d8b3d;">De quelle planète est tombé, au milieu d'un paysage d'azur, cet être étrange avec son regard qui promet des voluptés inconnues et son expression divinement ironique?</span></p>
<p class="conversation">Léonard de Vinci imprime à ses figures un tel cachet de supériorité, qu'on se sent troublé en leur présence.</p>
<p class="conversation"><span style="color: #3d8b3d;">Les pénombres de leurs yeux profonds cachent des secrets interdits aux profanes, et les inflexions de leurs lèvres moqueuses conviennent à des dieux qui savent tout et méprisent doucement les vulgarités humaines.</span></p>
<p class="conversation">Quelle fixité inquiétante et quel sardonisme surhumain dans ces prunelles sombres, dans ces lèvres onduleuses comme l'arc de l'Amour après qu'il a décoché le trait!</p>
<p class="conversation"><span style="color: #3d8b3d;">Ne dirait-on pas que la Joconde est l'Isis d'une religion cryptique qui, se croyant seule, entr'ouvre les plis de son voile, dût l'imprudent qui la surprendrait devenir fou et mourir?</span></p>
<p class="conversation">Jamais l'idéal féminin n'a revêtu de formes plus inéluctablement séduisantes.</p>
<p class="conversation">Croyez que si don Juan avait rencontré la Monna Lisa, il se serait épargné la peine d'écrire sur sa liste trois mille noms de femmes;
il n'en aurait tracé qu'un, et les ailes de son désir eussent refusé de le porter plus loin.</p>
<p class="conversation">Elles se seraient fondues et déplumées au soleil noir de ces prunelles».</p>

<p>Nous l'avons revue depuis bien des fois, cette adorable Joconde, et notre déclaration d'amour ne nous paraît pas trop brûlante.</p>
<p>Elle est toujours là, souriant avec une moqueuse volupté à ses innombrables amants.</p>
<p><span style="color: #3d8b3d;">Sur son front repose cette sérénité d'une femme sûre d'être éternellement belle, et qui se sent supérieure à l'idéal de tous les poètes et de tous les artistes.</span></p>
<p>Le divin Léonard mit <time datetime="P4Y">quatre ans</time> à faire ce portrait, qu'il ne pouvait se décider à quitter, et qu'il ne considéra jamais comme fini;
pendant les séances, des musiciens exécutaient des morceaux pour égayer le beau modèle et empêcher ses traits charmants de prendre un air d'ennui ou de fatigue.</p>
<p>Doit-on regretter que le noir particulier qu'employait Léonard, et dont il était l'inventeur, ait prévalu dans les teintes de la Monna Lisa et leur ait donné cette délicieuse harmonie violâtre?
Cette tonalité abstraite qui est comme le coloris de l'idéal?
Nous ne le pensons pas.</p>
<p>Maintenant, le mystère s'ajoute au charme, et le tableau, dans sa fraîcheur, était peut-être moins séduisant.</p>

<footer>
  <p>Théophile Gautier, <cite>Le Musée du Louvre</cite>, texte extrait du <cite>Paris Guide par les principaux écrivains et artistes de la France</cite></p>
</footer>

<aside>
  <p><span style="color: #3d8b3d;"><a href="https://fr.wikipedia.org/wiki/Théophile_Gautier" title="https://fr.wikipedia.org/wiki/Théophile_Gautier" class="green">Théophile Gautier</a>, extrait du <cite>guide par les principaux écrivains et artistes de France</cite> ouvrage collectif destiné aux visiteurs de l'Exposition universelle de <time datetime="1867">1867</time> à Paris, </span>, auquel participaient également <a href="https://fr.wikipedia.org/wiki/Alexandre_Dumas_fils" title="https://fr.wikipedia.org/wiki/Alexandre_Dumas_fils">Dumas</a>, <a href="https://fr.wikipedia.org/wiki/Charles-Augustin_Sainte-Beuve" title="https://fr.wikipedia.org/wiki/Charles-Augustin_Sainte-Beuve">Sainte-Beuve</a>, <a href="https://fr.wikipedia.org/wiki/Eugène_Viollet-le-Duc" title="https://fr.wikipedia.org/wiki/Eugène_Viollet-le-Duc">Viollet-le-Duc</a>, <a href="https://fr.wikipedia.org/wiki/George_Sand" title="https://fr.wikipedia.org/wiki/George_Sand">George Sand</a>, <a href="https://fr.wikipedia.org/wiki/Nadar" title="https://fr.wikipedia.org/wiki/Nadar">Nadar</a>… puis réédité comme livre à la mort de l'auteur sous le titre «Guide de l'amateur au musée du Louvre».</p>
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