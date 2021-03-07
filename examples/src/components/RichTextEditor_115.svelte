<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<p><span>23</span>日<i class="fa fa-calendar-o fa-2x"></i></p>
<p>7月</p>
<p><span>2016</span></p>
<h1 lang="ja"><a href="/blog/ja/bokusi" rel="bookmark">すばらしい美男美女</a></h1>
<div class="notices yellow">
<p>中国文学者 <a href="https://ja.wikipedia.org/wiki/貝塚茂樹" title="https://ja.wikipedia.org/wiki/貝塚茂樹"><ruby>貝<rp>(</rp><rt>かい</rt><rp>)</rp>塚<rp>(</rp><rt>づか</rt><rp>)</rp>茂<rp>(</rp><rt>しげ</rt><rp>)</rp>樹<rp>(</rp><rt>き</rt><rp>)</rp></ruby></a> が書いた「 <a href="https://www.amazon.co.jp/諸子百家――中国古代の思想家たち-岩波新書-貝塚-茂樹/dp/4004130476/378-6956610-7563751?ie=UTF8&%2AVersion%2A=1&%2Aentries%2A=0" title="https://www.amazon.co.jp/諸子百家――中国古代の思想家たち-岩波新書-貝塚-茂樹/dp/4004130476/378-6956610-7563751?ie=UTF8&*Version*=1&*entries*=0"><ruby>諸<rp>(</rp><rt>しょ</rt><rp>)</rp>子<rp>(</rp><rt>し</rt><rp>)</rp>百家<rp>(</rp><rt>ひゃっか</rt><rp>)</rp></ruby></a> 」を読んで、初めて、 <a href="https://ja.wikipedia.org/wiki/墨子" title="https://ja.wikipedia.org/wiki/墨子"><ruby>墨<rp>(</rp><rt>ぼく</rt><rp>)</rp>子<rp>(</rp><rt>し</rt><rp>)</rp></ruby></a> を知りました。面白い！</p></div><dl>
<dt><br></dt>
<dt><span style="color: #df8a13;"><ruby>墨<rp>(</rp><rt>ぼく</rt><rp>)</rp>子<rp>(</rp><rt>し</rt><rp>)</rp></ruby></span> </dt>
<dd>
「現代天下の識者諸氏は平素の言論でいつも有能の士を任用せよといわれる。<br />
一度大衆にたいして政令を下すだんになると、有能の士を採用してその能力を発揮させようとはしない。<br />
これは天下の識者が小問題にはよく気代くが、大問題を忘れている証拠である。」</dd>
</dl>

<dl>
<dt>どうして小問題にはよく気付くが、大問題を忘れるようになったのでしょうか。</dt>
<dd>
「現代の諸国の<strong>国王・大臣・有力者</strong>らは一頭の牛、半でも、自分の手で屠殺できないで、きっとよい居殺者をさがす。
一着分の反物でも自分で仕立てないで、きっとよい仕立屋をさがす。
<strong>国王・大臣・有力者</strong>はこういうことにかけては、<em>骨肉の親戚、手柄もない貴族富豪、すばらしい美男美女</em>でもその能力がかけているのを知っていれば使おうともしない。
なぜかといえば材料が無駄になることを恐れるからだ。<strong>国王・大臣・有力者</strong>はこのことにかけては有能の士を採用して能力を発揮させずにはいうれない。
以下同様にして、一頭の病馬も良獣医、ひと張りの強弓師にまかせる。・・・・・それなのにことが一旦国家に関すると、事情ががらりとかわる。
<strong>国王・大臣・有力者</strong>は<em>骨肉の親戚、手柄もない貴族富豪、すばらしい美男美女</em>を登用する。
<strong>国王・大臣・有力者</strong>の国家にたいする気のいれ方は、一つの強弓、病馬、衣服、牛羊の資財にも及ばない。
自分はこの理由によって天下の有識者がみんな小問題に気がついて大問題を忘れていることを知るのである。これはたとえば唖を外交官に任命し、聾を音楽師に雇うようなものではないか。」</dd>
<dt>という調子で議論が進められる。そして、</dt>
<dd>
「それだから古代聖徳たかい王が天下を治められたとき、富をあさえ、位をあたえたのは、<strong>国王・大臣・有力者</strong>たちの<em>骨肉の親戚、手柄もない貴族富豪、すばらしい美男美女</em>ばかりではなかったのだ。」</dd>
<dt>といって、<ruby>堯<rp>(</rp><rt>ぎょう</rt><rp>)</rp></ruby>帝が無名の舜を後嗣にえらび、湯王か名相<ruby>伊<rp>(</rp><rt>い</rt><rp>)</rp>尹<rp>(</rp><rt>いん</rt><rp>)</rp></ruby>を板前から抜握した故事などを述べて、歴史的に「尚賢」がいかに有効な政策であるかを実証しようとする。</dt>
<dd>
「現今の天下の士君子諸君はだれも富貴を欲して貧賤を嫌うだろう。」</dd>
<dt>その通りです。</dt>
<dd>
「はどうすれば富貴をえて貧賤からのがれられると思うか。もちろん賢つまり有能の士なること以外にないと考えるだろうね。<br />
それならその有能の士になるにはどうすればよいのですか」</dd>
</dl>
<p><br></p>
<div class="notices yellow">
<dl>
<dt>引用:</dt>
<dd>
<a href="https://ja.wikipedia.org/wiki/貝塚茂樹" title="https://ja.wikipedia.org/wiki/貝塚茂樹"><ruby>貝<rp>(</rp><rt>かい</rt><rp>)</rp>塚<rp>(</rp><rt>づか</rt><rp>)</rp>茂<rp>(</rp><rt>しげ</rt><rp>)</rp>樹<rp>(</rp><rt>き</rt><rp>)</rp></ruby></a>、「<a href="https://www.amazon.co.jp/諸子百家――中国古代の思想家たち-岩波新書-貝塚-茂樹/dp/4004130476/378-6956610-7563751?ie=UTF8&%2AVersion%2A=1&%2Aentries%2A=0" title="https://www.amazon.co.jp/諸子百家――中国古代の思想家たち-岩波新書-貝塚-茂樹/dp/4004130476/378-6956610-7563751?ie=UTF8&*Version*=1&*entries*=0"><ruby>諸<rp>(</rp><rt>しょ</rt><rp>)</rp>子<rp>(</rp><rt>し</rt><rp>)</rp>百家<rp>(</rp><rt>ひゃっか</rt><rp>)</rp></ruby></a>、中国古代の思想家たち」、岩波新書４３７（１９７５年１２月２０日第１９刷発行）<br />
第二章「人類愛と平和についての対話、<a href="https://ja.wikipedia.org/wiki/墨子" title="https://ja.wikipedia.org/wiki/墨子">墨子</a>の思想」、第４０ページーから</dd>
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