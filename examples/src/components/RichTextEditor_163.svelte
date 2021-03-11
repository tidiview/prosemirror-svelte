<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="blue">Tirésias</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.webp 700w" type="image/webp"><img sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" src="/user/sites/docs/pages/01.home/02.https://francois-vidit.comversailles/03.trianon/02.tiresias/tiresias_700x501.jpg" title="Peinture de René-Antoine HOUASSE, “Minerve et Tirésias”, Grand Trianon, Château de Versailles" alt="Peinture de René-Antoine HOUASSE, “Minerve et Tirésias”, Grand Trianon, Château de Versailles" class="class-diane-img" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.jpg 700w"></picture><figcaption>Minerve au premier plan rend aveugle Tirésias, au centre</figcaption></figure>
<div class="notices blue">
<p>Au <a href="https://fr.wikipedia.org/wiki/Grand_Trianon" title="https://fr.wikipedia.org/wiki/Grand_Trianon">Grand Trianon</a>, dans le Salon des Seigneurs, se trouve un tableau peint par <a href="https://fr.wikipedia.org/wiki/René-Antoine_Houasse" title="https://fr.wikipedia.org/wiki/René-Antoine HOUASSE">René-Antoine HOUASSE</a>, «Minerve et Tirésias».<br>
<a href="https://fr.wikipedia.org/wiki/Minerve_(mythologie)" title="https://fr.wikipedia.org/wiki/Minerve_(mythologie)">Minerve</a>, au premier plan, y rend aveugle <a href="https://fr.wikipedia.org/wiki/Tirésias" title="https://fr.wikipedia.org/wiki/Tirésias">Tirésias</a>, au centre, tel que le raconte <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a> dans le livre III de ses <a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)">Métamorphoses</a>.<br>
En voici l'extrait.</p>
</div>
<h2 class="blue">Tirésias selon “Les Métamorphoses”</h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span> <sup>316</sup>
Tandis que la loi du destin s'accomplissait de la sorte sur terre<br>
Et que le berceau du petit Bacchus, né deux fois, était en sûreté,<br>
Jupiter, que le nectar, nous dit-on, avait un jour détendu,<br>
Mit de côté les occupations sérieuses pour se distraire<br>
<sup>320</sup>
Avec Junon et badiner en toute quiétude: «Je parie<br>
Que votre plaisir est plus grand que celui qu'éprouvent<br>
Les mâles», affirma-t-il. Elle n'était pas d'accord. Ils résolurent<br>
De demander l'avis du sage Tirésias. Celui-ci connaissait le plaisir<br>
Des deux sexes car après avoir profané d'un coup de baton,<br>
<sup>325</sup>
Dans une forêt verdoyante, le coît de deux grand serpents,<br>
Il avait été changé (stupeur!) d'homme en femme<br>
Durant sept automnes; au huitième, les ayant revus,<br>
Il avait dit: «Puisqu'un coup reçu vous donne le pouvoir<br>
De changer le sexe de son auteur, je vais vous frapper<br>
<sup>330</sup>
À nouveau.» Les deux serpents sont frappés, il avait repris<br>
Sa forme première et son aspect naturel.<br>
Donc, choisi comme arbitre dans cette querelle pour rire,<br>
Il donna raison à Jupiter. La fille de Saturne, dit-on,<br>
Le prit beaucoup plus mal que la chose n'en valait la peine<br>
<sup>335</sup>
et condamna les yeux de son juge à la nuit éternelle.<br>
Mais le père tout-puissant (aucun dieu n'a le droit, en effet, d'annuler<br>
Les décisions d'un autre dieu) lui donna, pour pallier sa cécité, la prescience<br>
<sup>338</sup>
De l'avenir et adoucit sa peine en lui témoignant son estime.
<span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span>  </p>
<p><span style="color: #28a1c5;">Ovide, “Les Métamorphoses”, Livre III</span></p>
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