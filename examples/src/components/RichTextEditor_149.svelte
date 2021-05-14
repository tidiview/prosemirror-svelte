<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article><!-- JA:108 -->

<div class="list-blog-date">
<p><time datetime="2015-12-17">17 <abbr title="décembre">Déc.</abbr> 2015</time></p>
</div>

<hgroup>
<h1 class="green">qui triomphe de lui-même a la force de l'âme</h1>
<h2 class="green">Lao-Tseu, <cite><ruby>Dao&#160de&#160jing<rp>(</rp><rt>livre&#160de&#160la&#160voie&#160et&#160de&#160la&#160vertu</rt><rp>)</rp></ruby></cite>,  <abbr title="trente-troisième">33<sup>ème</sup></abbr> chapître</h2>
</hgroup>

<div class="list-blog-padding lang-font">

<div class="notices green">
<p>Quelle leçon que ce chapître 33!</p>
</div>

<h2 class="green">
  <a href="https://fr.wikipedia.org/wiki/Lao_Tseu" title="https://fr.wikipedia.org/wiki/Lao_Tseu">
    <ruby lang="ja">老
      <rp>(</rp><rt lang="fr">Lao</rt><rp>)</rp>
      &#160
      <rp>(</rp><rt lang="fr">-</rt><rp>)</rp>
      子
      <rp>(</rp><rt lang="fr">Tseu</rt><rp>)</rp>
    </ruby>
  </a>
  <cite><ruby lang="ja">道徳経<rp>（</rp><rt lang="fr">Dao&#160de&#160jing</rt><rp>）</rp></ruby></cite>
  <ruby lang="ja">第三十三<rp>（</rp><rt lang="fr">trente-troisième</rt><rp>）</rp>&nbsp<rp>（</rp><rt lang="fr">&nbsp</rt><rp>）</rp>章<rp>（</rp><rt lang="fr">chapître</rt><rp>）</rp></ruby>
</h2>

<div id="display-text-rousi">
<div id="display-sub-text-rousi">

<ol class="doc">
  <li value="1">知人者智、</li>
  <li value="2">自知者明、</li>
  <li value="3">勝人者有力、</li>
  <li value="4">自勝者強、</li>
  <li value="5">知足者富強行者有志、</li>
  <li value="6">不失其所者久、</li>
  <li value="7">死而不亡者寿、</li>
</ol>

</div>

<div id="translation-text-rousi">
<h6 class="left" class="green">traduction</h6>

<ol class="doc">
<li value="1">Qui connaît les hommes est clairvoyant</li>
<li value="2">Qui se connaît est éclairé</li>
<li value="3">Qui triomphe des hommes a de la force</li>
<li value="4">Qui triomphe de lui-même est fort</li>
<li value="5">Qui connaît les limites de son entendement est riche, qui sait se tenir a de la volonté</li>
<li value="6">Qui ne s'est pas trompé de lieu est éternel</li>
<li value="7">Même lorsqu'il meurt sa mémoire demeure</li>
</ol>

</div>
</div>

<footer>
  <p><span style="color: #3d8b3d;">source:  traduction originale</span></p>
  <p>© reproduction autorisée sous réserve d'inclure référence et le lien.</p>
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