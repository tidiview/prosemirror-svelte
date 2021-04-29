<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>
<h1 class="yellow">Archangel Michael according to other sources</h1>

<hgroup>
<h2 id="daniel-dn-12-1-3" class="yellow">Archangel Michael according to chapter 12 of <cite>the book of Daniel</cite>, verses 1 to 3</h2>
<h3 class="yellow">[Dn 12, 1-3]</h3>
</hgroup>

<ol class="doc">
  <li value="01">At that time there shall arise <mark>Michael</mark>, the great prince, guardian of your people;</li>
  <li>It shall be a time unsurpassed in distress since the nation began until that time.</li>
  <li>At that time your people shall escape, everyone who is found written in the book.</li>
  <li value="02">Many of those who sleep in the dust of the earth shall awake;</li>
  <li>Some to everlasting life, others to reproach and everlasting disgrace.</li>
  <li value="03">But those with insight shall shine brightly like the splendor of the firmament,</li>
  <li>And those who lead the many to justice shall be like the stars forever.</li>
</ol>

<footer>
  <p style="color: #df8a13;"><cite>Book of Daniel</cite>, chapter 12, verses 1 to 3, Liturgical Translation of the New Testament</p>
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