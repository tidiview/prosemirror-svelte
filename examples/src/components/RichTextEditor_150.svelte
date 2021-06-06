<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:118 EN:NONE -->

<article>

<header>
  <p><time datetime="2016-09-09">9 <abbr title="septembre">Sep.</abbr> 2016</time></p>
</header>

<h1><cite>l'étranger</cite></h1>

<div class="notices red">
  <p>Un étranger est d'ordinaire une personne qui vient d'un autre pays.</p>
  <p>Dans les question-réponses qui suivent, tout se déroule comme si celui qui répond n'est l'étranger <em>de</em> personne d'autre.</p>
  <p>À apprécier avec modération! (l'auteur est une surprise, mais ... chut!)</p>
</div>

<h2 class="yellow">Texte de <cite>l'étranger</cite></h2>

<ol class="doc">
  <li value="1">- Qui aimes-tu le mieux, homme énigmatique, dis? ton père, ta mère, ta sœur ou ton frère?</li>
  <li>- Je n'ai ni père, ni mère, ni sœur, ni frère.</li>
  <li>- Tes amis?</li>
  <li>- Vous vous servez là d'une parole dont le sens m'est resté jusqu'à ce jour inconnu.</li>
  <li value="5">- Ta patrie?</li>
  <li>- J'ignore sous quelle latitude elle est située.</li>
  <li>- La beauté?</li>
  <li>- Je l'aimerais volontiers, déesse et immortelle.</li>
  <li>- L'or?</li>
  <li value="10">- Je le hais comme vous haïssez Dieu.</li>
  <li>- Eh! qu'aimes-tu donc, extraordinaire étranger?</li>
  <li value="12">- J'aime les nuages... les nuages qui passent... là-bas... là-bas... les merveilleux nuages!</li>
</ol>

<aside>
  <div class="notices red">
    <p>texte：<a href="https://fr.wikipedia.org/wiki/Charles_Baudelaire" title="https://fr.wikipedia.org/wiki/Charles_Baudelaire">Charles Baudelaire</a>, "l'étranger".</p>
    <p>Ce poème a été mis en musique et interprété par <a href="https://fr.wikipedia.org/wiki/Léo_Ferré" title="https://fr.wikipedia.org/wiki/Léo_Ferré">Léo Ferré</a> en <time datetime="1967">1967</time> sur son album <a href="https://fr.wikipedia.org/wiki/Léo_Ferré_chante_Baudelaire" title="https://fr.wikipedia.org/wiki/Léo_Ferré_chante_Baudelaire">Léo Ferré chante Baudelaire</a>.</p>
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