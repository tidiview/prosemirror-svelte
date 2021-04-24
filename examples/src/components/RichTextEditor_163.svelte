<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<hgroup>
<h1 class="blue">Tirésias</h1>
<h2 class="blue">au Grand Trianon</h2>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.webp 700w" type="image/webp"><img sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" src="/user/sites/docs/pages/01.home/02.https://francois-vidit.comversailles/03.trianon/02.tiresias/tiresias_700x501.jpg" title="Peinture de René-Antoine HOUASSE, “Minerve et Tirésias”, Grand Trianon, Château de Versailles" alt="Peinture de René-Antoine HOUASSE, “Minerve et Tirésias”, Grand Trianon, Château de Versailles" class="class-diane-img" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.jpg 700w"></picture><figcaption>Minerve au premier plan condamne les yeux de Tirésias, au centre, <q cite="#tiresias">à la nuit éternelle</q></figcaption>
</figure>

<div class="notices blue">
<p>Au <a href="https://fr.wikipedia.org/wiki/Grand_Trianon" title="https://fr.wikipedia.org/wiki/Grand_Trianon">Grand Trianon</a>, dans le Salon des Seigneurs, se trouve un tableau peint par <a href="https://fr.wikipedia.org/wiki/René-Antoine_Houasse" title="https://fr.wikipedia.org/wiki/René-Antoine HOUASSE">René-Antoine HOUASSE</a>, <cite>Minerve et Tirésias</cite>.</p>
<p><a href="https://fr.wikipedia.org/wiki/Minerve_(mythologie)" title="https://fr.wikipedia.org/wiki/Minerve_(mythologie)">Minerve</a>, au premier plan, y rend aveugle <a href="https://fr.wikipedia.org/wiki/Tirésias" title="https://fr.wikipedia.org/wiki/Tirésias">Tirésias</a>, au centre, tel que le raconte <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a> dans le livre III de ses <a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)"><cite>Métamorphoses</cite></a>.</p>
<p>En voici l'extrait.</p>
</div>

<h2 id="tiresias" class="blue">Tirésias selon le texte du livre III des <cite>Métamorphoses</cite></h2>

<ol class="doc">
  <li value="316">Tandis que la loi du destin s'accomplissait de la sorte sur terre</li>
  <li>Et que le berceau du petit Bacchus, né deux fois, était en sûreté,</li>
  <li>Jupiter, que le nectar, nous dit-on, avait un jour détendu,</li>
  <li>Mit de côté les occupations sérieuses pour se distraire</li>
  <li value="320">Avec Junon et badiner en toute quiétude: </li>
  <li>
    <p class="conversation">«Je parie</p>
  </li>
  <li>
    <p class="conversation">Que votre plaisir est plus grand que celui qu'éprouvent</p>
  </li>
  <li>
    <p class="conversation">Les mâles»,</p>
  </li>
  <li>affirma-t-il. Elle n'était pas d'accord. Ils résolurent</li>
  <li>De demander l'avis du sage <mark>Tirésias</mark>. Celui-ci connaissait le plaisir</li>
  <li>Des deux sexes car après avoir profané d'un coup de baton,</li>
  <li value="325">Dans une forêt verdoyante, le coît de deux grand serpents,</li>
  <li>Il avait été changé (stupeur!) d'homme en femme</li>
  <li>Durant sept automnes; au huitième, les ayant revus,</li>
  <li>Il avait dit:</li>
  <li>
    <p class="conversation">«Puisqu'un coup reçu vous donne le pouvoir</p>
  </li>
  <li>
    <p class="conversation">De changer le sexe de son auteur, je vais vous frapper</p>
  </li>
  <li value="330">
    <p class="conversation">À nouveau.»</p>
  </li>
  <li>Les deux serpents sont frappés, il avait repris</li>
  <li>Sa forme première et son aspect naturel.</li>
  <li>Donc, choisi comme arbitre dans cette querelle pour rire,</li>
  <li>Il donna raison à Jupiter. La fille de Saturne, dit-on,</li>
  <li>Le prit beaucoup plus mal que la chose n'en valait la peine</li>
  <li value="335">et condamna les yeux de son juge à la nuit éternelle.</li>
  <li>Mais le père tout-puissant (aucun dieu n'a le droit, en effet, d'annuler</li>
  <li>Les décisions d'un autre dieu) lui donna, pour pallier sa cécité, la prescience</li>
  <li value="338">De l'avenir et adoucit sa peine en lui témoignant son estime.</li>
</ol>

<footer>
  <p><span style="color: #df8a13;">Ovide, <cite>Les Métamorphoses</cite>, Livre III, vers 316 à 338</span></p>
</footer>

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