<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:131 EN:194  -->

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
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.webp 700w" type="image/webp"><img sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" src="/user/sites/docs/pages/01.home/02.https://francois-vidit.comversailles/03.trianon/02.tiresias/tiresias_700x501.jpg" title="Peinture de René-Antoine HOUASSE, “Minerve et Tirésias”, Grand Trianon, Château de Versailles" alt="Peinture de René-Antoine HOUASSE, “Minerve et Tirésias”, Grand Trianon, Château de Versailles" class="class-diane-img" width="700" height="501" loading="eager" decoding="async" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.jpg 700w"></picture><figcaption><cite>Minerve et Tirésias</cite><br>Minerve au premier plan rend Tirésias, au centre, <q cite="#tiresias">aveugle sur-le-champ</q>, <cite>Bibliothèque</cite>, Livre <abbr title="trois">III</abbr>, chapître 6 paragraphe 7.</figcaption>
</figure>

<div class="notices blue">
<p>Au <a href="https://fr.wikipedia.org/wiki/Grand_Trianon" title="https://fr.wikipedia.org/wiki/Grand_Trianon">Grand Trianon</a>, dans le Salon des Seigneurs, se trouve un tableau peint par <a href="https://fr.wikipedia.org/wiki/René-Antoine_Houasse" title="https://fr.wikipedia.org/wiki/René-Antoine HOUASSE">René-Antoine HOUASSE</a>, <cite>Minerve et Tirésias</cite>.</p>
<p>Cette peinture fait partie d'une série appelée <cite>Histoire de Minerve</cite>, comme <a href="https://francois-vidit.com/docs/fr/versailles/trianon/arachnee" title="https://francois-vidit.com/docs/fr/versailles/trianon/arachnee"><cite>Minerve et Arachnée</cite></a>.</p>
<p><a href="https://fr.wikipedia.org/wiki/Minerve_(mythologie)" title="https://fr.wikipedia.org/wiki/Minerve_(mythologie)">Minerve</a>, au premier plan, y rend aveugle <a href="https://fr.wikipedia.org/wiki/Tirésias" title="https://fr.wikipedia.org/wiki/Tirésias">Tirésias</a>, au centre, tel que le raconte <a href="https://fr.wikipedia.org/wiki/Pseudo-Apollodore" title="https://fr.wikipedia.org/wiki/Pseudo-Apollodore">Pseudo-Apollodore</a> dans le livre <abbr title="trois">III</abbr> de sa <a href="https://fr.wikipedia.org/wiki/Bibliothèque_(Pseudo-Apollodore)" title="https://fr.wikipedia.org/wiki/Bibliothèque_(Pseudo-Apollodore)"><cite>Bibliothèque</cite></a>.</p>
<p>En voici l'extrait.</p>
</div>

<section id="tiresias">
<h2 class="blue"><cite>Minerve et Tirésias</cite> selon le texte du livre <abbr title="trois">III</abbr> de la <cite>Bibliothèque</cite></h2>

<ol class="doc">
  <li value="7">Suivant Phérécyde, ce fut Minerve qui l'en priva.</li>
  <li>cette déesse aimait beaucoup Chariclo:</li>
  <li>Tirésias étant survenu,</li>
  <li>[comme elles étaient au bain ensemble]</li>
  <li>vit la déesse absolument nue.</li>
  <li>Minerve alors lui mit les mains sur les yeux,</li>
  <li>et le rendit aveugle sur-le-champ.</li>
  <li>Chariclo la pria de lui rendre la vue;</li>
  <li>mais la déesse ne le pouvant pas,</li>
  <li>lui nettoya l'ouïe de manière à ce qu'il entendit le langage des oiseaux,</li>
  <li>et elle lui donna un bâton de cormier,</li>
  <li>avec lequel il se conduisait aussi sûrement que ceux qui voyaient.</li>
</ol>

<footer>
  <p><span style="color: #df8a13;">Ovide, <cite>Bibliothèque</cite>, Livre <abbr title="trois">III</abbr>, chapître 6 paragraphe 7.</span></p>
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