<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:150 JA:118 -->

<article>

<header>
  <p><time datetime="2016-09-09">2016<abbr title="september">Sep.</abbr> <abbr title="the nineth">9<sup>th</sup></abbr></time>.</p>
</header>

<h1><cite>l'étranger</cite></h1>

<div class="notices red">
  <p>A stranger is ordinarily a person that is coming from another country.</p>
  <p>In the question-answers that follows, all is taking place as if the one that is answering is not the stranger of anybody else.</p>
  <p>To enjoy with moderation!</p>
</div>

<h2 class="yellow">Text of <cite>the stranger</cite></h2>

<ol class="doc">
  <li value="1">- Who do you love the best, enigmatic man, say?  your father, your mother, your sister or your brother?</li>
  <li>- I have neither father, nor mother, nor sister, nor brother.</li>
  <li>- Your friends?</li>
  <li>- You are using here a word whose meaning remains unknown to me to this day.</li>
  <li value="5">- Your homeland?</li>
  <li>- I do not know in which latitude it lies.</li>
  <li>- Beauty?</li>
  <li>- I would love her willingly, goddess and immortal.</li>
  <li>- Gold?</li>
  <li value="10">- I hate it as you hate God.</li>
  <li>- Eh! what do you love then, extraordinary stranger?</li>
  <li value="12">- I love the clouds… the passing clouds … up there … up there … the marvelous clouds!</li>
</ol>

<aside>
  <div class="notices red">
    <p>text:<a href="https://fr.wikipedia.org/wiki/Charles_Baudelaire" title="https://fr.wikipedia.org/wiki/Charles_Baudelaire">Charles Baudelaire</a>, "the stranger".</p>
    <p><a href="https://francois-vidit.com/blog/fr/ikokujin" title="l'étranger">original text in french language</a>.</p>
    <p>English translation: original translation. Can be reproduced with mention « original translation to english by <a href="https://francois-vidit.com/blog/en/ikokujin" title="the stranger">François Vidit</a> », link included.</p>
  </div>
</aside>

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