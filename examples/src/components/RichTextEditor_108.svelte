<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:149 EN:NONE -->

<article>

<header>
<p><time datetime="2017-10-30">２０１７年１０月３０日</time></p>
</header>

<hgroup>
<h1 class="green">自ら勝つ者は強し</h1>
<h2 class="green"><ruby>老<rp>（</rp><rt>ろう</rt><rp>）</rp>子<rp>（</rp><rt>し</rt><rp>）</rp></ruby>、<cite>道徳経</cite>、第三十三章</h2>
</hgroup>

<div class="notices green">
<p>この第三十三章、素晴らしいもの！</p>
</div>

<h2 class="green"><a href="https://ja.wikipedia.org/wiki/老子" title="https://ja.wikipedia.org/wiki/老子"><ruby>老<rp>（</rp><rt>ろう</rt><rp>）</rp>子<rp>（</rp><rt>し</rt><rp>）</rp></ruby></a>、<cite>道徳経</cite>、第三十三章の文書</h2>

<div id="display-text-rousi">
<section id="display-sub-text-rousi">
<div>

<h6 class="green">原稿文</h6>

<ol class="doc">
  <li value="1">知人者智、</li>
  <li value="2">自知者明、</li>
  <li value="3">勝人者有力、</li>
  <li value="4">自勝者強、</li>
  <li value="5">知足者富強行者有志、</li>
  <li value="6">不失其所者久、</li>
  <li value="7">死而不亡者寿、</li>
</ol>

</div>
</section>

<section id="translation-text-rousi">
<div>
<h6 class="green">翻訳</h6>

<ol class="doc">
  <li value="1">人を知る者は<ruby>知<rp>（</rp><rt>ち</rt><rp>）</rp></ruby>なり、</li>
  <li value="2">自ら知る者は<ruby>明<rp>（</rp><rt>めい</rt><rp>）</rp></ruby>なり。</li>
  <li value="3">人に<ruby>勝<rp>（</rp><rt>か</rt><rp>）</rp></ruby>つ者は力有り、自ら勝つ者は強し。</li>
  <li value="4"><ruby>足<rp>（</rp><rt>た</rt><rp>）</rp></ruby>ることを知る者は富めり。</li>
  <li value="5"><ruby>強<rp>（</rp><rt>つよ</rt><rp>）</rp></ruby>めて行なう者は<ruby>志<rp>（</rp><rt>こころざし</rt><rp>）</rp></ruby>有り。</li>
  <li value="6">其の所を<ruby>失<rp>（</rp><rt>たが</rt><rp>）</rp></ruby>えざる者は久し。</li>
  <li value="7">死して<ruby>而<rp>（</rp><rt>しか</rt><rp>）</rp></ruby>も<ruby>失<rp>（</rp><rt>うしな</rt><rp>）</rp></ruby>わざる者は<ruby>寿<rp>（</rp><rt>いのち</rt><rp>）</rp></ruby>ながし。</li>
</ol>

</div>
</section>
</div>

<footer>
<p>「 <cite><ruby>老<rp>（</rp><rt>ろう</rt><rp>）</rp>子<rp>（</rp><rt>し</rt><rp>）</rp></ruby> 、―<ruby>小<rp>（</rp><rt>お</rt><rp>）</rp>川<rp>（</rp><rt>がわ</rt><rp>）</rp>環<rp>（</rp><rt>たま</rt><rp>）</rp>樹<rp>（</rp><rt>き</rt><rp>）</rp></ruby>訳注―</cite>」、中公文庫４８５、<time datetime="1997-03-18">１９９７年３月１８日</time>改版発行、８４項。</p>
</footer>

<aside>

<h3 class="green">注釈：</h3>

<h4 class="green note">第一節</h4>

<p data-id="1" class="single-li"><span style="color: #3d8b3d;">＜人を知る者は<ruby>知<rp>（</rp><rt>ち</rt><rp>）</rp></ruby>なり＞</span></p>
<p>他人を了解するものが智<span style="color: grey;">（恵知）</span>のある人であり。</p>

<h4 class="green note">第ニ節</h4>

<p data-id="2" class="single-li"><span style="color: #3d8b3d;">＜自ら知る者は<ruby>明<rp>（</rp><rt>めい</rt><rp>）</rp></ruby>なり＞</span></p>
<p>自己を了解するものが明察のある人である。</p>

<h4 class="green note">第三節</h4>

<p data-id="3" class="single-li"><span style="color: #3d8b3d;">＜他人を負かすには力がいり、自己を負かすにはもっと力がいる＞</span></p>
<p><span style="color: grey;">（もっているだけのもので）</span>満足することを知るのが富んでいることであり、自分をはげまして行動するものがその志すところを得るのである。</p>
<p>自分の<span style="color: grey;">（いるべき）</span>場所をまちがえないものが永続する。</p>
<p>死ぬときにも<span style="color: grey;">（その肉体の一部分さえ）</span>失っていないものが長寿なのである。</p>

<h4 class="green note">第四節前部</h4>

<p data-id="4" class="single-li"><span style="color: #3d8b3d;">＜<ruby>強<rp>（</rp><rt>つと</rt><rp>）</rp></ruby>めて行なう者は志有り＞</span></p>
<p><ruby>王<rp>（</rp><rt>おう</rt><rp>）</rp>弼<rp>（</rp><rt>ひつ</rt><rp>）</rp></ruby>注に「勤めて能く行なえば、其の志は必ず<ruby>獲<rp>（</rp><rt>う</rt><rp>）</rp></ruby>」とある。強は、努力の意。</p>

<h4 class="green note">第四節後部</h4>

<p data-id="4" class="single-li"><span style="color: #3d8b3d;">＜死して<ruby>而<rp>（</rp><rt>しか</rt><rp>）</rp></ruby>も<ruby>亡<rp>（</rp><rt>うしな</rt><rp>）</rp></ruby>わざる者は…＞</span></p>
<p>王弼がいう「死すと<ruby>雖<rp>（</rp><rt>いえど</rt><rp>）</rp></ruby>も而も生を<ruby>為<rp>（</rp><rt>な</rt><rp>）</rp></ruby>す道の亡わざるを<ruby>以<rp>（</rp><rt>もつ</rt><rp>）</rp></ruby>てすれば、<ruby>乃<rp>（</rp><rt>すなわ</rt><rp>）</rp></ruby>ち其の寿を全うす」とは、生命持続のための努力をやめないことによってだけ、人は寿命をまっとうしうる、という意であろう。</p>
<p>それはさまざまな危険をおかさないことであり、危険に出あわなければ肉体も完全である。</p>

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