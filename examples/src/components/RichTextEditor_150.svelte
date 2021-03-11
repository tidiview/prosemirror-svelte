<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div class="notices red">
<p>Un étranger est d'ordinaire une personne qui vient d'un autre pays.<br>
Dans les question-réponses qui suivent, tout se déroule comme si celui qui répond n'est l'étranger <em>de</em> personne d'autre.</p>
</div>
<p>À apprécier avec modération! (l'auteur est une surprise, mais ... chut!)</p>
<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><sup>1</sup></td>
<td>- Qui aimes-tu le mieux, homme énigmatique, dis? ton père, ta mère, ta sœur ou ton frère?</td>
</tr>
<tr>
<td></td>
<td>- Je n'ai ni père, ni mère, ni sœur, ni frère.</td>
</tr>
<tr>
<td></td>
<td>- Tes amis?</td>
</tr>
<tr>
<td></td>
<td>- Vous vous servez là d'une parole dont le sens m'est resté jusqu'à ce jour inconnu.</td>
</tr>
<tr>
<td><sup>5</sup></td>
<td>- Ta patrie?</td>
</tr>
<tr>
<td></td>
<td>- J'ignore sous quelle latitude elle est située.</td>
</tr>
<tr>
<td></td>
<td>- La beauté?</td>
</tr>
<tr>
<td></td>
<td>- Je l'aimerais volontiers, déesse et immortelle.</td>
</tr>
<tr>
<td></td>
<td>- L'or?</td>
</tr>
<tr>
<td><sup>10</sup></td>
<td>- Je le hais comme vous haïssez Dieu.</td>
</tr>
<tr>
<td></td>
<td>- Eh! qu'aimes-tu donc, extraordinaire étranger?</td>
</tr>
<tr>
<td><sup>12</sup></td>
<td>- J'aime les nuages... les nuages qui passent... là-bas... là-bas... les merveilleux nuages!</td>
</tr>
</tbody>
</table>
</div>
<div class="notices red">
<dl>
<dt>Texte：</dt>
<dd><a href="https://fr.wikipedia.org/wiki/Charles_Baudelaire" title="https://fr.wikipedia.org/wiki/Charles_Baudelaire">Charles Baudelaire</a>, "l'étranger".</dd>
</dl>
<p>Ce poème a été mis en musique et interprété par <a href="https://fr.wikipedia.org/wiki/Léo_Ferré" title="https://fr.wikipedia.org/wiki/L%C3%A9o_Ferr%C3%A9">Léo Ferré</a> en 1967 sur son album <a href="https://fr.wikipedia.org/wiki/Léo_Ferré_chante_Baudelaire" title="https://fr.wikipedia.org/wiki/L%C3%A9o_Ferr%C3%A9_chante_Baudelaire">Léo Ferré chante Baudelaire</a>.  </p>
</div
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