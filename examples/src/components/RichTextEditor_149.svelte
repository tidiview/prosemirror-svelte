<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div class="list-blog-date">
<p><span>17</span><sup> </sup><i class="fa fa-calendar-o fa-2x"></i></p>
<p>Déc.</p>
<p><span>2015</span></p>
</div>
<h1 class="green"><a href="/blog/fr/rousi" rel="bookmark">qui triomphe de lui-même a la force de l'âme</a></h1>
</div>
<div class="list-blog-padding lang-font" lang="fr">  
<div class="notices green">
<p>Quelle leçon que ce chapître 33!</p>
</div>
<h2 class="green"><a href="https://fr.wikipedia.org/wiki/Lao_Tseu" title="https://fr.wikipedia.org/wiki/Lao_Tseu"><ruby lang="ja">老<rt lang="fr">Lao</rt lang="fr">&#160<rt lang="fr">-</rt lang="fr">子<rt lang="fr">Tseu</rt></ruby></a>, chapître 33</h2>
<div id="display-text-rousi">
<div id="display-sub-text-rousi">
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><sup>１</sup></td>
<td>知人者智、</td>
</tr>
<tr>
<td><sup>２</sup></td>
<td>自知者明、</td>
</tr>
<tr>
<td><sup>３</sup></td>
<td>勝人者有力、</td>
</tr>
<tr>
<td><sup>４</sup></td>
<td> 自勝者強、</td>
</tr>
<tr>
<td><sup>５</sup></td>
<td>知足者富強行者有志、</td>
</tr>
<tr>
<td><sup>６</sup></td>
<td>不失其所者久、</td>
</tr>
<tr>
<td><sup>７</sup></td>
<td>死而不亡者寿、</td>
</tr>
</tbody>
</table>
</div>
<div id="translation-text-rousi">
<h6 class="left" class="green">traduction</h6>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Qui connaît les hommes est clairvoyant</td>
</tr>
<tr>
<td>2</td>
<td>Qui se connaît est éclairé</td>
</tr>
<tr>
<td>3</td>
<td>Qui triomphe des hommes a de la force</td>
</tr>
<tr>
<td>4</td>
<td>Qui triomphe de lui-même est fort</td>
</tr>
<tr>
<td>5</td>
<td>Qui connaît les limites de son entendement est riche, qui sait se tenir a de la volonté</td>
</tr>
<tr>
<td>6</td>
<td>Qui ne s'est pas trompé de lieu est éternel</td>
</tr>
<tr>
<td>7</td>
<td>Même lorsqu'il meurt sa mémoire demeure</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
</div>
</div>
<p><span style="color: #3d8b3d;">source:  traduction originale</span></p></div>
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