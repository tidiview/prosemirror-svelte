<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedRichTextEditor, clear, toHTML, toPlainText, toJSON, ExtendedrichTextSchema } from "../../../state";

  const html = `
  ある日、<a href="https://ja.wikipedia.org/wiki/アポローン" title="https://ja.wikipedia.org/wiki/アポローン"><ruby lang="ja">アポロン<rp>(</rp><rt lang="la">Apollōn</rt><rp>)</rp></ruby></a>の神託を伺うために<a href="https://ja.wikipedia.org/wiki/クラロス" title="https://ja.wikipedia.org/wiki/クラロス"><ruby lang="ja">クラロス<rp>(</rp><rt lang="la">Claros</rt><rp>)</rp></ruby></a>へ赴こうとしたケユクスは「どうか陸路で行ってほしい」という妻の言葉を聞き入れずに船で出かけ、<ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp>時<rp>(</rp><rt>し</rt><rp>)</rp>化<rp>(</rp><rt>け</rt><rp>)</rp></ruby>に遭って海の<ruby>藻<rp>(</rp><rt>も</rt><rp>)</rp>屑<rp>(</rp><rt>くず</rt><rp>)</rp></ruby>となってしまいます。`;

  

  let focusEditor;
  let showEditorState = true;
  let editorState = createExtendedRichTextEditor(html);

  function handleChange(event) {
    editorState = event.detail.editorState;
  }

  function clearEditor(event) {
    editorState = clear(editorState);
    focusEditor();
  }

  function resetEditor(event) {
    editorState = createExtendedRichTextEditor(html);
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