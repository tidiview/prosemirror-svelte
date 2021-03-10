<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<p><span>１５</span>日<i class="fa fa-calendar-o fa-2x"></i></p>
<p>１月</p>
<p><span>２０１８年</span></p>
<h1 class="green"><a href="/blog/ja/ihoujin" rel="bookmark">異邦人</a></h1>
<div class="notices green">
<p>通常では、異なる邦の人は「異邦人」ではありますが、ここでは、誰かに対して国が異なるのではない問答を紹介します。</p>
</div>
<p>お楽しみに！（作者は驚きですが） </p>
<p><br></p>
<p><span style="color: lightgrey;"><i class="fa fa-quote-left fa-1x fa-pull-left fa-border"></i></span></p>
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
<td></td>
<td>— わたしには父も母も、姉妹も兄弟もおらぬ。</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>— 友達か。</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>— あなたがお使いになっている言葉は、わたしには意味が今日に至るまで不明のままに残ったのだ。</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><sup>５</sup></td>
<td>— 祖国か。</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>— どんな緯度に位置付けられているかも知らぬ。</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>— 美しさか。</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>— 好きになっても良い、女神的死なぬもの。</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>— 黄金か。</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><sup>１０</sup></td>
<td>— あなたが神が嫌いのと同じように嫌い。</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>— いったい何が好きなの」か、並外れた異邦人よ。</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><sup>１２</sup></td>
<td>— わたしは雲々が好き...　あそこに...　あそこに...　通っている雲々、あのすばらしい雲々よ！</td>
</tr>
</tbody>
</table>
</div>
<p><span style="color: lightgrey;"><i class="fa fa-quote-right fa-1x fa-pull-right fa-border"></i></span>　　</p>
<p><br></p>
<div class="notices green">
<dl>
<dt>詩：</dt>
<dd><a href="https://ja.wikipedia.org/wiki/シャルル・ボードレール" title="https://ja.wikipedia.org/wiki/シャルル・ボードレール"><ruby>シャルル<rp>(</rp><rt>Charles</rt><rp>)</rp>・<rp>(</rp><rt></rt><rp>)</rp>ボードレール<rp>(</rp><rt>BAUDELAIRE</rt><rp>)</rp></ruby></a>、「<ruby>異邦人<rp>(</rp><rt>L&#39;étranger</rt><rp>)</rp></ruby>」。</dd>
<dd><a href="https://francois-vidit.com/blog/fr/ihoujin" title="l'étranger">原文</a></dd>
<dt>日本語訳：</dt>
<dd>独自</dd>
<dd>（文書の御使用は「<a href="https://francois-vidit.com/blog/ja/ihoujin" title="異邦人"><ruby>フランソワ<rp>(</rp><rt>François</rt><rp>)</rp>・<rp>(</rp><rt></rt><rp>)</rp>ヴィディ<rp>(</rp><rt>VIDIT</rt><rp>)</rp></ruby></a> 訳」（リンクを含む）追加で可能としている）</dd>
</dl>
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