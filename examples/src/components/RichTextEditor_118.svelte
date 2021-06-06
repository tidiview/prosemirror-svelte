<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:150 EN:NONE -->

<article>

<header>
<p><time datetime="2018-01-15">２０１８年１月１５日</time></p>
</header>

<h1 class="green"><cite>異邦人</cite></h1>

<div class="notices green">
<p>通常では、異なる邦の人は「異邦人」ではありますが、ここでは、誰かに対して国が異なるのではない問答を紹介します。</p>
<p>お楽しみに！（作者は驚きですが）</p>
</div>

<div id="translation-text-rousi">
<ol class="doc">
  <li value="1">— わたしには父も母も、姉妹も兄弟もおらぬ。</li>
  <li>— 友達か。</li>
  <li>— あなたがお使いになっている言葉は、わたしには意味が今日に至るまで不明のままに残ったのだ。</li>
  <li value="5">— 祖国か。</li>
  <li>— どんな緯度に位置付けられているかも知らぬ。</li>
  <li>— 美しさか。</li>
  <li>— 好きになっても良い、女神的死なぬもの。</li>
  <li>— 黄金か。</li>
  <li value="10">— あなたが神が嫌いのと同じように嫌い。</li>
  <li>— いったい何が好きなの」か、並外れた異邦人よ。</li>
  <li value="12">— わたしは雲々が好き...　あそこに...　あそこに...　通っている雲々、あのすばらしい雲々よ！</li>
</ol>
</div>


<footer>
  <p><a href="https://ja.wikipedia.org/wiki/シャルル・ボードレール" title="https://ja.wikipedia.org/wiki/シャルル・ボードレール"><ruby>シャルル<rp>（</rp><rt>Charles</rt><rp>）</rp>・<rp>（</rp><rt></rt><rp>）</rp>ボードレール<rp>（</rp><rt>BAUDELAIRE</rt><rp>）</rp></ruby></a>、「<cite><ruby>異邦人<rp>（</rp><rt>L&#39;étranger</rt><rp>）</rp></ruby></cite>」。</p>
</footer>

<aside>
<div class="notices green">
<p>日本語訳：独自</p>
<p><a href="https://francois-vidit.com/blog/fr/ihoujin" title="l'étranger">フランス語での原文を読む</a></p>
<p>【文書の御使用は「<a href="https://francois-vidit.com/blog/ja/ihoujin" title="異邦人"><ruby>フランソワ<rp>（</rp><rt>François</rt><rp>）</rp>・<rp>（</rp><rt></rt><rp>）</rp>ヴィディ<rp>（</rp><rt>VIDIT</rt><rp>）</rp></ruby></a> 訳」（リンクを含む）追加で可能としている】</p>
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