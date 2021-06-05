<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:NONE EN:NONE -->

<article>
<header>
<p><time datetime="2016-06-04">２０１６年６月４日</time></p>
</header>

<h1 class="red">自家製</h1>

<div class="notices red">
<p>この中国古代の文書で、「家」から「自分」を考えるのだとしているのが特徴。</p>
</div>

<section id="iehamotomoto">
<h2 class="red">自家製の文書</h2>

<p>家はもともと<ruby>斉<rp>（</rp><rt>ととの</rt><rp>）</rp></ruby>っているのだ。</p>
<p>わが身の<ruby>好<rp>（</rp><rt>こうお</rt><rp>）</rp></ruby>が<ruby>偏<rp>（</rp><rt>かたよ</rt><rp>）</rp></ruby>っているから斉わないだけのことだ。</p>
<p>国はもともと治まっているのだ。</p>
<p>わが身の<ruby>好<rp>（</rp><rt>こうお</rt><rp>）</rp></ruby>が偏っているから治まらないだけのことだ。</p>
<p>天下はもともと泰平なのだ。</p>
<p>わが身の<ruby>好<rp>（</rp><rt>こうお</rt><rp>）</rp></ruby>が<ruby>偏<rp>（</rp><rt>かたよ</rt><rp>）</rp></ruby>っているから泰平でないだけのことだ。</p>

<footer>
<div class="notices red">
<p>小島毅、「<a href="https://www.amazon.co.jp/朱子学と陽明学-ちくま学芸文庫-小島-毅/dp/4480095691" title="https://www.amazon.co.jp/朱子学と陽明学-ちくま学芸文庫-小島-毅/dp/4480095691"><cite>朱子学と陽明学</cite></a>」、１２２貢。</p>
</div>
</footer>

</section>

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