<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
  <div id="body-inner">
<h1 class="green">La Joconde selon Théophile Gautier</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.jpg 1920w" id="joconde_selon_gautier"></picture><figcaption>Portrait de Lisa Gherardini, épouse de Francesco del Giocondo, dite «Monna Lisa, la Gioconda» ou «la Joconde»</figcaption></figure>
<div class="notices green">
<p>La description de <a href="https://fr.wikipedia.org/wiki/La_Joconde" title="https://fr.wikipedia.org/wiki/La_Joconde">la Joconde</a> que nous présentons ci-dessous a été écrite par l'écrivain romantique <a href="https://fr.wikipedia.org/wiki/Théophile_Gautier" title="https://fr.wikipedia.org/wiki/Théophile_Gautier">Théophile GAUTIER</a> et publiée à Paris en 1867.<br>
C'est une description capitale pour l'histoire du tableau car elle va à la fois mythifiée et détournée l'œuvre de <a href="https://fr.wikipedia.org/wiki/Léonard_de_Vinci" title="https://fr.wikipedia.org/wiki/Léonard_de_Vinci">Léonard de Vinci</a> au nom du mystère qu'elle paraît incarner et influencer une bonne partie des regards biaisés portés sur l'œuvre au cours du XXème siècle.<br>
Nous pensons que si cette description est misogyne, que cette misogynie ne fait partie ni de l'œuvre de Léonard de Vinci encore moins de l'émotion artistique et que la Joconde gagnerait à être débarassée des chimères de Théophile Gautier.</p>
</div>
<p><br></p>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
Notre admiration et notre amour pour cette divine Monna Lisa del Giocondo ne datent pas d'hier, et bien des passions pour des êtres réels ont duré moins longtemps.<br>
Il y a une douzaine d'années que nous écrivions ces lignes un peu trop enthousiastes peut-être, mais qui rendent fidèlement notre impression:<br>
«La Joconde!<br>
<span style="color: #3d8b3d;">Sphinx de beauté</span> qui souris si mystérieusement dans le cadre de Léonard de Vinci et sembles proposer à l'admiration des siècles une énigme qu'ils n'ont pas encore résolue, un attrait invincible ramène toujours vers toi!<br>
Oh! en effet. qui n'est resté accoudé de longues heures devant cette tête baignée de demi-teintes crépusculaires, enveloppée de crêpes transparents et dont les traits, mélodieusement noyés dans une vapeur violette, apparaissent comme <span style="color: #3d8b3d;">une création du Rêve à travers la gaze noire du Sommeil</span>?<br>
<span style="color: #3d8b3d;">De quelle planète est tombé, au milieu d'un paysage d'azur, cet être étrange avec son regard qui promet des voluptés inconnues et son expression divinement ironique?</span><br>
Léonard de Vinci imprime à ses figures un tel cachet de supériorité, qu'on se sent troublé en leur présence.<br>
<span style="color: #3d8b3d;">Les pénombres de leurs yeux profonds cachent des secrets interdits aux profanes, et les inflexions de leurs lèvres moqueuses conviennent à des dieux qui savent tout et méprisent doucement les vulgarités humaines.</span><br>
Quelle fixité inquiétante et quel sardonisme surhumain dans ces prunelles sombres, dans ces lèvres onduleuses comme l'arc de l'Amour après qu'il a décoché le trait!<br>
<span style="color: #3d8b3d;">Ne dirait-on pas que la Joconde est l'Isis d'une religion cryptique qui, se croyant seule, entr'ouvre les plis de son voile, dût l'imprudent qui la surprendrait devenir fou et mourir?</span><br>
Jamais l'idéal féminin n'a revêtu de formes plus inéluctablement séduisantes.<br>
Croyez que si don Juan avait rencontré la Monna Lisa, il se serait épargné la peine d'écrire sur sa liste trois mille noms de femmes;
il n'en aurait tracé qu'un, et les ailes de son désir eussent refusé de le porter plus loin.<br>
Elles se seraient fondues et déplumées au soleil noir de ces prunelles».<br>
Nous l'avons revue depuis bien des fois, cette adorable Joconde, et notre déclaration d'amour ne nous paraît pas trop brûlante.<br>
Elle est toujours là, souriant avec une moqueuse volupté à ses innombrables amants.<br>
<span style="color: #3d8b3d;">Sur son front repose cette sérénité d'une femme sûre d'être éternellement belle, et qui se sent supérieure à l'idéal de tous les poètes et de tous les artistes.</span><br>
Le divin Léonard mit quatre ans à faire ce portrait, qu'il ne pouvait se décider à quitter, et qu'il ne considéra jamais comme fini;
pendant les séances, des musiciens exécutaient des morceaux pour égayer le beau modèle et empêcher ses traits charmants de prendre un air d'ennui ou de fatigue.<br>
Doit-on regretter que le noir particulier qu'employait Léonard, et dont il était l'inventeur, ait prévalu dans les teintes de la Monna Lisa et leur ait donné cette délicieuse harmonie violâtre?
Cette tonalité abstraite qui est comme le coloris de l'idéal?
Nous ne le pensons pas.<br>
Maintenant, le mystère s'ajoute au charme, et le tableau, dans sa fraîcheur, était peut-être moins séduisant.
<span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
<p><span style="color: #3d8b3d;"><a href="https://fr.wikipedia.org/wiki/Théophile_Gautier" title="https://fr.wikipedia.org/wiki/Théophile_Gautier" class="green">Théophile Gautier</a>, extrait d'un guide ouvrage collectif destiné aux visiteurs de l'Exposition universelle, Paris, par les principaux écrivains et artistes de France</span>, auquel participaient également <a href="https://fr.wikipedia.org/wiki/Alexandre_Dumas_fils" title="https://fr.wikipedia.org/wiki/Alexandre_Dumas_fils">Dumas</a>, <a href="https://fr.wikipedia.org/wiki/Charles-Augustin_Sainte-Beuve" title="https://fr.wikipedia.org/wiki/Charles-Augustin_Sainte-Beuve">Sainte-Beuve</a>, <a href="https://fr.wikipedia.org/wiki/Eugène_Viollet-le-Ducク" title="https://fr.wikipedia.org/wiki/Eugène_Viollet-le-Ducク">Viollet-le-Duc</a>, <a href="https://fr.wikipedia.org/wiki/George_Sand" title="https://fr.wikipedia.org/wiki/George_Sand">George Sand</a>, <a href="https://fr.wikipedia.org/wiki/Nadar" title="https://fr.wikipedia.org/wiki/Nadar">Nadar</a>… puis réédité comme livre à la mort de l'auteur sous le titre «Guide de l'amateur au musée du Louvre».</p>
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