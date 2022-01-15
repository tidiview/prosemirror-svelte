<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:227 EN:205-->

<article>

  <hgroup>
    <h2 id="daniel-dn-12-1-3><cite>ダニエル書</cite>における大天使ミカエル</h1>
	  <h3 class="yellow">[<abbrtitle="ダニエル">Dn</abbr>１２章、１-３節]</span></h2>
  </hgroup>

<ol class="doc">
  <li value="01">その時、<mark>大天使長ミカエル</mark>が立つ。</li>
  <li>彼はお前の民の子らを守護する。</li>
  <li>その時まで、苦難が続く。国が始まって以来、かつてなかったほどの苦難が。</li>
  <li>しかし、その時には救われるであろう。お前の民、あの書に記された人々は。</li>
  <li value="02">多くの者が地の<ruby>塵<rp>(</rp><rt>ちり</rt><rp>)</rp></ruby>の中の眠りから目覚める。</li>
  <li>ある者は永遠の生命に入り。ある者は永久に続く恥と<ruby>憎<rp>(</rp><rt>ぞう</rt><rp>)</rp>悪<rp>(</rp><rt>お</rt><rp>)</rp></ruby>の的となる。</li>
  <li value="03">目覚めた人々は大空の光のように輝き</li>
  <li>多くの者の救いとなった人々は</li>
  <li>とこしえに星と輝く。</li>
</ol>

<footer>
  <p style="color: #28a1c5;"><cite>ダニエル書</cite>１２章、１-３節、新共同訳より</p>
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