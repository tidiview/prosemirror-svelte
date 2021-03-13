<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="green">name of the archangel Michael</h1>
<div class="notices green">
<p>In hebrew, the name of the <a href="https://en.wikipedia.org/wiki/Michael_(archangel)" title="https://en.wikipedia.org/wiki/Michael (archangel)">archangel « <span style="color:#3d8b3d;">Michael</span> »</a> writes « <span style="color:#3d8b3d;" lang="he">מיכאל</span> ».<br>
The pronunciation of it in hebrew is between the "Michel" in french and the "Michael" of english.<br>
Below is a recording of this name in hebrew, as well as a brief analysis of the ethymology of this name from its denomination in hebrew.</p>
</div>
<h3 id="on-the-name-of-the-archangel-michael" class="green">on the name of the archangel Michael</h3>
<h4 id="meaning-in-hebrew" class="green">meaning in hebrew</h4>
<p>In the original text of the Bible in hebrew, the name of the archangel « Michael » in english is: <ruby lang="he"><span style="background:#f1f9f1;color:#3d8b3d;" lang="he">מיכאל</span><rt><span style="background:#f1f9f1;color:#3d8b3d;">Mîḵā'ēl</span></rt></ruby>.<br>
The notation « Mîḵā'ēl » comes from the <a href="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet" title="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet">international phonetic alphabet</a> and represents the following sound:</p>
<table>
<thead>
<tr>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><audio controls="1" title="Pronunciation of מיכאל in hebrew" alt=""><source src="/user/sites/docs/pages/01.home/05.mont-saint-michel/01.arch-michel/01.nom/prononciation_mihael.mp3">Your browser does not support the audio tag.</audio></td>
</tr>
</tbody>
</table>
<h3 id="a-name-that-means-who-is-like-god" class="green">a name that means « who is like god? »</h3>
<p>« <ruby lang="he"><span style="background:#f1f9f1;color:#3d8b3d;">מיכאל</span><rt><span style="background:#f1f9f1;color:#3d8b3d;">Mîḵā’ēl</span></rt></ruby> » may decompose as follows:</p>
<table>
<thead>
<tr>
<th><span hidden="">hidden</span></th>
<th><span hidden="">hidden</span></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="background:#f1f9f1;color:#3d8b3d;">mî</span></td>
<td><span style="background:#f1f9f1;color:#3d8b3d;">ḵā’</span></td>
<td><span style="background:#f1f9f1;color:#3d8b3d;">ēl</span></td>
</tr>
<tr>
<td><span style="background:#f1f9f1;color:#3d8b3d;">who</span></td>
<td><span style="background:#f1f9f1;color:#3d8b3d;">is like</span></td>
<td><span style="background:#f1f9f1;color:#3d8b3d;">god</span></td>
</tr>
</tbody>
</table>
<dl>
<dt>soit le résultat suivant：</dt>
<dd><p><span style="color: #3d8b3d;">« <span style="background:#f1f9f1;color:#3d8b3d;">who</span> <span style="background:#f1f9f1;color:#3d8b3d;">is like</span> <span style="background:#f1f9f1;color:#3d8b3d;">god</span> ? »</span></p>
<p>The archangel Michael confronts his opponents in the name of god by asking them this terrible question.</p></dd>
</dl>
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