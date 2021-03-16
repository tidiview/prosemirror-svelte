<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
  <div id="body-inner">
<h1 class="green">La Joconde selon Giorgio Vasari</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.jpg 1920w" id="joconde_selon_vasari"></picture><figcaption>Portrait de Lisa Gherardini, épouse de Francesco del Giocondo, dite «Monna Lisa, la Gioconda» ou «la Joconde»</figcaption></figure>
<div class="notices green">
<p>La description de <a href="https://fr.wikipedia.org/wiki/La_Joconde" title="https://fr.wikipedia.org/wiki/La_Joconde">la Joconde</a> que nous présentons ci-dessous a été écrite par <a href="https://fr.wikipedia.org/wiki/Giorgio_Vasari" title="https://fr.wikipedia.org/wiki/Giorgio_Vasari">Giorgio VASARI</a> et publiée à Florence en 1550.<br>
Elle en est à ce jour à la fois la plus connue, la plus ancienne et la plus digne de foi.<br>
À ce titre, elle a influencé la plupart des descriptions ultérieures.<br>
Vasari décrit un tableau qu'il n'a pas lui-même vu car le tableau se trouve alors à Fontainebleau où Vasari ne se rendit jamais.<br>
La description nous renseigne sur la réputation de l'œuvre: elle a été exécutée à Florence en 1503, <a href="https://fr.wikipedia.org/wiki/Léonard_de_Vinci" title="https://fr.wikipedia.org/wiki/Léonard_de_Vinci">Léonard de Vinci</a> y a travaillé pendant 4 ans, elle représente l'épouse de Francesco Del Giocondo, désignée comme «M[ad]on[n]a Lisa», “Madame Lise”.<br>
Elle nous permet surtout de saisir ce qui en constituait la valeur aux yeux de Vasari.</p>
</div>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
Ensuite il commença pour François del Giocondo le portrait de Mona Lisa sa femme, auquel il travailla pendant quatre ans, le laissant imparfait.<br>
Ce tableau appartient aujourd hui à François Ier et est placé à Fontainebleau.<br>
Celui qui désiroit se convaincre <span style="color: #3d8b3d;">jusqu'à quel point l'art peut imiter la nature, le pouvoit d'autant plus, que les moindres choses sont rendues dans cette tête avec la plus grande finesse</span>.<br>
Les yeux avoient ce brillant, cette humidité qui existent sans cesse dans la nature,
et étoient entourés de ces rouges pâles, et des paupières qui ne peuvent s'exécuter qu'avec une très-grande subtilité.<br>
On voyoit la manière dont naissent les sourcils dans la chair, qui tantôt plus épais, tantôt plus clairs, tournoient selon les pores qu'indique la nature.<br>
Le nez étroit n'étoit pas moins bien rendu, et toutes ces belles ouvertures rougeâtres et délicates.<br>
La bouche vermeille et ses extrémités se fondoient tellement avec la carnation du visage, que l'on croyoit plutôt y voir la chair que la couleur.<br>
Lorsque l'on regardait attentivement le creux de la gorge, on sembloit apercevoir le battement du pouls;
et l'on peut dire avec vérité que ce portrait étoit peint de manière à faire craindre et trembler les plus grands maîtres.<br>
Tandis que Léonard étoit occupé à peindre madame Lise, remarquable par sa beauté, <span style="color: #3d8b3d;">il avoit soin que l’on jouât de quelque instrument, ou que l’on chantât, et même que des bouffons l’égayassent sans cesse afin d’éloigner d’elle cette mélancolie, qui souvent se rencontre dans les portraits</span>.<br>
<span style="color: #3d8b3d;">Le sourire de celui-ci séduisoit au point qu’on l’eût jugé être de la main d’un dieu on étoit enfin frappé d’étonnement l’art ayant su lui donner la vie et rivaliser avec la nature</span>. <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
<p><a href="https://fr.wikipedia.org/wiki/Giorgio_Vasari" title="https://fr.wikipedia.org/wiki/Giorgio_Vasari" class="green">Giorgio Vasari</a><span style="color: #3d8b3d;">, “Vies des peintres, sculpteurs et architectes les plus célèbres”, livre IV, Chez Boiste, 1803, pages 27-28</span></p>
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