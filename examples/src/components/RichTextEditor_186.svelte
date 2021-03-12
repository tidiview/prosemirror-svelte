<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div class="list-blog-date">
<p><span>9</span><sup>th </sup><i class="fa fa-calendar-o fa-2x"></i></p>
<p>Sep.</p>
<p><span>2016</span></p>
</div>
<h1 lang="en"><a href="/blog/en/ihoujin" rel="bookmark">the stranger</a></h1>
</div>

<div class="notices green">
<p>A stranger is ordinarily a person that is coming from another country.<br>
In the question-answers that follows, all is taking place as if the one that is answering is not the stranger <em>of</em> anybody else.</p>
<p>To enjoy with moderation!</p>
</div>

<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><sup>1</sup></td>
<td>- Who do you love the best, enigmatic man, say?  your father, your mother, your sister or your brother?</td>
</tr>
<tr>
<td></td>
<td>- I have neither father, nor mother, nor sister, nor brother.</td>
</tr>
<tr>
<td></td>
<td>- Your friends?</td>
</tr>
<tr>
<td></td>
<td>- You are using here a word whose meaning remains unknown to me to this day.</td>
</tr>
<tr>
<td><sup>5</sup></td>
<td>- Your homeland?</td>
</tr>
<tr>
<td></td>
<td>- I do not know in which latitude it lies.</td>
</tr>
<tr>
<td></td>
<td>- Beauty?</td>
</tr>
<tr>
<td></td>
<td>- I would love her willingly, goddess and immortal.</td>
</tr>
<tr>
<td></td>
<td>- Gold?</td>
</tr>
<tr>
<td><sup>10</sup></td>
<td>- I hate it as you hate God.</td>
</tr>
<tr>
<td></td>
<td>- Eh! what do you love then, extraordinary stranger?</td>
</tr>
<tr>
<td><sup>12</sup></td>
<td>- I love the clouds… the passing clouds … up there … up there … the marvelous clouds!</td>
</tr>
</tbody>
</table>
</div>
<p><span style="color: lightgrey;"><i class="fa fa-quote-right fa-1x fa-pull-right fa-border"></i></span></p>
<div class="notices green">
<dl>
<dt>Text：</dt>
<dd><a href="https://en.wikipedia.org/wiki/Charles_Baudelaire" title="https://en.wikipedia.org/wiki/Charles Baudelaire">Charles Baudelaire</a>, "the stranger".</dd>
<dd><a href="https://francois-vidit.com/blog/fr/ikokujin" title="l'étranger">original text in french language</a></dd>
<dt>English translation:</dt>
<dd>original translation</dd>
<dd>(can be reproduced with mention « original translation to english by <a href="https://francois-vidit.com/blog/en/ikokujin" title="the stranger">François Vidit</a> », link included)</dd>
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