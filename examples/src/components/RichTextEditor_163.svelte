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
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>316</sup></td>
<td>Tandis que la loi du destin s'accomplissait de la sorte sur terre<br>
Et que le berceau du petit Bacchus, né deux fois, était en sûreté,<br>
Jupiter, que le nectar, nous dit-on, avait un jour détendu,<br>
Mit de côté les occupations sérieuses pour se distraire</td></tr>
<tr><td><sup>320</sup></td>
<td>Avec Junon et badiner en toute quiétude: <br>
«<cite>Je parie<br>
Que votre plaisir est plus grand que celui qu'éprouvent<br>
Les mâles</cite>»,<br> affirma-t-il. Elle n'était pas d'accord. Ils résolurent<br>
De demander l'avis du sage Tirésias. Celui-ci connaissait le plaisir<br>
Des deux sexes car après avoir profané d'un coup de baton,</td></tr>
<tr><td><sup>325</sup></td>
<td>Dans une forêt verdoyante, le coît de deux grand serpents,<br>
Il avait été changé (stupeur!) d'homme en femme<br>
Durant sept automnes; au huitième, les ayant revus,<br>
Il avait dit: <br>
«<cite>Puisqu'un coup reçu vous donne le pouvoir<br>
De changer le sexe de son auteur, je vais vous frapper</cite></td></tr>
<tr><td><sup>330</sup></td>
<td><cite>À nouveau.</cite>» <br>
Les deux serpents sont frappés, il avait repris<br>
Sa forme première et son aspect naturel.<br>
Donc, choisi comme arbitre dans cette querelle pour rire,<br>
Il donna raison à Jupiter. La fille de Saturne, dit-on,<br>
Le prit beaucoup plus mal que la chose n'en valait la peine</td></tr>
<tr><td><sup>335</sup></td>
<td>et condamna les yeux de son juge à la nuit éternelle.<br>
Mais le père tout-puissant (aucun dieu n'a le droit, en effet, d'annuler<br>
Les décisions d'un autre dieu) lui donna, pour pallier sa cécité, la prescience</td></tr>
<tr><td><sup>338</sup></td>
<td>De l'avenir et adoucit sa peine en lui témoignant son estime.</td></tr>
</tbody>
</table>
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