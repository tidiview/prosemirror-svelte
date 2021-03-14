<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
/* <div class="list-blog-date">
<p><span>３０</span>日<i class="fa fa-calendar-o fa-2x"></i></p>
<p>１０月</p>
<p><span>２０１７年</span></p>
</div>
<h1 class="green"><a href="/blog/ja/rousi" rel="bookmark">自ら勝つ者は強し</a></h1>
</div>
<div class="notices green">
<p>この第３３章、素晴らしいもの！</p>
</div>

<h2 class="green"><ruby>老<rp>(</rp><rt>ろう</rt><rp>)</rp>子<rp>(</rp><rt>し</rt><rp>)</rp></ruby>、第３３章</h2>
<div id="display-text-rousi">
<div id="display-sub-text-rousi">
<h6>原稿文</h6>
<table>
<thead>
<tr>
<th></th><th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>１</sup></td><td>知人者智、</td></tr>
<tr><td><sup>２</sup></td><td>自知者明、</td></tr>
<tr><td><sup>３</sup></td><td>勝人者有力、</td></tr>
<tr><td><sup>４</sup></td><td>自勝者強、</td></tr>
<tr><td><sup>５</sup></td><td>知足者富強行者有志、</td></tr>
<tr><td><sup>６</sup></td><td>不失其所者久、</td></tr>
<tr><td><sup>７</sup></td><td>死而不亡者寿、</td></tr>
</tbody>
</table>
</div>
<div id="translation-text-rousi">
<h6 class="left">翻訳</h6>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><sup>１</sup></td>
<td>人を知る者は<ruby>知<rp>(</rp><rt>ち</rt><rp>)</rp></ruby>なり、</td>
</tr>
<tr>
<td><sup>２</sup></td>
<td>自ら知る者は<ruby>明<rp>(</rp><rt>めい</rt><rp>)</rp></ruby>なり。</td>
</tr>
<tr>
<td><sup>３</sup></td>
<td>人に<ruby>勝<rp>(</rp><rt>か</rt><rp>)</rp></ruby>つ者は力有り、自ら勝つ者は強し。</td>
</tr>
<tr>
<td><sup>４</sup></td>
<td><ruby>足<rp>(</rp><rt>た</rt><rp>)</rp></ruby>ることを知る者は富めり。</td>
</tr>
<tr>
<td><sup>５</sup></td>
<td><ruby>強<rp>(</rp><rt>つよ</rt><rp>)</rp></ruby>めて行なう者は<ruby>志<rp>(</rp><rt>こころざし</rt><rp>)</rp></ruby>有り。</td>
</tr>
<tr>
<td><sup>６</sup></td>
<td>其の所を<ruby>失<rp>(</rp><rt>たが</rt><rp>)</rp></ruby>えざる者は久し。</td>
</tr>
<tr>
<td><sup>７</sup></td>
<td>死して<ruby>而<rp>(</rp><rt>しか</rt><rp>)</rp></ruby>も<ruby>失<rp>(</rp><rt>うしな</rt><rp>)</rp></ruby>わざる者は<ruby>寿<rp>(</rp><rt>いのち</rt><rp>)</rp></ruby>ながし。</td>
</tr>
</tbody>
</table>
</div>
</div>
<hr>
<p>他人を了解するものが智<span style="color: lightgrey;">（恵知）</span>のある人であり、自己を了解するものが明察のある人である。</p>
<p>他人を負かすには力がいり、自己を負かすにはもっと力がいる。 </p>
<p><span style="color: lightgrey;">（もっているだけのもので）</span>満足することを知るのが富んでいることであり、自分をはげまして行動するものがその志すところを得るのである。</p>
<p>自分の<span style="color: lightgrey;">（いるべき）</span>場所をまちがえないものが永続する。</p>
<p>死ぬときにも<span style="color: lightgrey;">（その肉体の一部分さえ）</span>失っていないものが長寿なのである。　　</p>
<hr>
<dl>
<dt><span style="color: #3d8b3d;">＜<ruby>強<rp>(</rp><rt>つと</rt><rp>)</rp></ruby>めて行なう者は志有り＞</span>  </dt>
<dd>
<ruby>王<rp>(</rp><rt>おう</rt><rp>)</rp>弼<rp>(</rp><rt>ひつ</rt><rp>)</rp></ruby>注に「勤めて能く行なえば、其の志は必ず<ruby>獲<rp>(</rp><rt>う</rt><rp>)</rp></ruby>」とある。強は、努力の意。　　</dd>
<dt><span style="color: #3d8b3d;">＜死して<ruby>而<rp>(</rp><rt>しか</rt><rp>)</rp></ruby>も<ruby>亡<rp>(</rp><rt>うしな</rt><rp>)</rp></ruby>わざる者は…＞</span></dt>
<dd>
王弼がいう「死すと<ruby>雖<rp>(</rp><rt>いえど</rt><rp>)</rp></ruby>も而も生を<ruby>為<rp>(</rp><rt>な</rt><rp>)</rp></ruby>す道の亡わざるを<ruby>以<rp>(</rp><rt>もつ</rt><rp>)</rp></ruby>てすれば、<ruby>乃<rp>(</rp><rt>すなわ</rt><rp>)</rp></ruby>ち其の寿を全うす」とは、生命持続のための努力をやめないことによってだけ、人は寿命をまっとうしうる、という意であろう。<br>
それはさまざまな危険をおかさないことであり、危険に出あわなければ肉体も完全である。  </dd>
</dl>
<div class="notices green">
<dl>
<dt>引用：</dt>
<dd>
「 <a href="https://ja.wikipedia.org/wiki/老子" title="https://ja.wikipedia.org/wiki/老子"><ruby>老<rp>(</rp><rt>ろう</rt><rp>)</rp>子<rp>(</rp><rt>し</rt><rp>)</rp></ruby></a> 、―<ruby>小<rp>(</rp><rt>お</rt><rp>)</rp>川<rp>(</rp><rt>がわ</rt><rp>)</rp>環<rp>(</rp><rt>たま</rt><rp>)</rp>樹<rp>(</rp><rt>き</rt><rp>)</rp></ruby>訳注―」、中公文庫４８５、１９９７年３月１８日改版発行、第８４ページーから。</dd>
</dl>
</div> */
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