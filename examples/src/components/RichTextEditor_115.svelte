<script>
  import { onMount } from "svelte";

  import ProsiirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:NONE EN:NONE -->

<article>

<header>
<p><time datetime="2016-07-23">２０１６年７月２３日</time></p>
</header>

<h1 class="yellow">すばらしい美男美女</h1>

<div class="notices yellow">
<p>中国文学者 <a href="https://ja.wikipedia.org/wiki/貝塚茂樹" title="https://ja.wikipedia.org/wiki/貝塚茂樹"><ruby>貝<rp>（</rp><rt>かい</rt><rp>）</rp>塚<rp>（</rp><rt>づか</rt><rp>）</rp>茂<rp>（</rp><rt>しげ</rt><rp>）</rp>樹<rp>（</rp><rt>き</rt><rp>）</rp></ruby></a> が書いた「 <a href="https://www.amazon.co.jp/諸子百家――中国古代の思想家たち-岩波新書-貝塚-茂樹/dp/4004130476/378-6956610-7563751" title="https://www.amazon.co.jp/諸子百家――中国古代の思想家たち-岩波新書-貝塚-茂樹/dp/4004130476/378-6956610-7563751?ie=UTF8&*Version*=1&*entries*=0"><cite><ruby>諸<rp>（</rp><rt>しょ</rt><rp>）</rp>子<rp>（</rp><rt>し</rt><rp>）</rp>百家<rp>（</rp><rt>ひゃっか</rt><rp>）</rp></ruby></cite></a> 」を読んで、初めて、 <a href="https://ja.wikipedia.org/wiki/墨子" title="https://ja.wikipedia.org/wiki/墨子"><ruby>墨<rp>（</rp><rt>ぼく</rt><rp>）</rp>子<rp>（</rp><rt>し</rt><rp>）</rp></ruby></a> を知りました。面白い！</p></div>

<h2 class="yellow"><ruby>墨<rp>（</rp><rt>ぼく</rt><rp>）</rp>子<rp>（</rp><rt>し</rt><rp>）</rp></ruby></h2>

<p class="conversation">「現代天下の識者諸氏は平素の言論でいつも有能の士を任用せよといわれる。</p>
<p class="conversation">一度大衆にたいして政令を下すだんになると、有能の士を採用してその能力を発揮させようとはしない。</p>
<p class="conversation">これは天下の識者が小問題にはよく気代くが、大問題を忘れている証拠である。」</p>
<p>どうして小問題にはよく気付くが、大問題を忘れるようになったのでしょうか。</p>
<p class="conversation">「現代の諸国の<b>国王・大臣・有力者</b>らは一頭の牛、半でも、自分の手で屠殺できないで、きっとよい居殺者をさがす。</p>
<p class="conversation">一着分の反物でも自分で仕立てないで、きっとよい仕立屋をさがす。</p>
<p class="conversation"><b>国王・大臣・有力者</b>はこういうことにかけては、<i>骨肉の親戚、手柄もない貴族富豪、すばらしい美男美女</i>でもその能力がかけているのを知っていれば使おうともしない。</p>
<p class="conversation">なぜかといえば材料が無駄になることを恐れるからだ。<b>国王・大臣・有力者</b>はこのことにかけては有能の士を採用して能力を発揮させずにはいうれない。</p>
<p class="conversation">以下同様にして、一頭の病馬も良獣医、ひと張りの強弓師にまかせる。・・・・・それなのにことが一旦国家に関すると、事情ががらりとかわる。</p>
<p class="conversation"><b>国王・大臣・有力者</b>は<i>骨肉の親戚、手柄もない貴族富豪、すばらしい美男美女</i>を登用する。</p>
<p class="conversation"><b>国王・大臣・有力者</b>の国家にたいする気のいれ方は、一つの強弓、病馬、衣服、牛羊の資財にも及ばない。</p>
<p class="conversation">自分はこの理由によって天下の有識者がみんな小問題に気がついて大問題を忘れていることを知るのである。これはたとえば唖を外交官に任命し、聾を音楽師に雇うようなものではないか。」という調子で議論が進められる。</p>
<p>そして、</p>
<p class="conversation">「それだから古代聖徳たかい王が天下を治められたとき、富をあさえ、位をあたえたのは、<b>国王・大臣・有力者</b>たちの<i>骨肉の親戚、手柄もない貴族富豪、すばらしい美男美女</i>ばかりではなかったのだ。」といって、</p>
<p><ruby>堯<rp>（</rp><rt>ぎょう</rt><rp>）</rp></ruby>帝が無名の舜を後嗣にえらび、湯王か名相<ruby>伊<rp>（</rp><rt>い</rt><rp>）</rp>尹<rp>（</rp><rt>いん</rt><rp>）</rp></ruby>を板前から抜握した故事などを述べて、歴史的に「<a href="https://kotobank.jp/word/尚賢思想-1174687" title="https://kotobank.jp/word/尚賢思想-1174687"><ruby>尚<rp>（</rp><rt>しょう</rt><rp>）</rp>賢<rp>（</rp><rt>けん</rt><rp>）</rp></ruby></a>」がいかに有効な政策であるかを実証しようとする。</p>
<p class="conversation">「現今の天下の士君子諸君はだれも富貴を欲して貧賤を嫌うだろう。」</p>
<p>その通りです。</p>
<p class="conversation">「はどうすれば富貴をえて貧賤からのがれられると思うか。もちろん賢つまり有能の士なること以外にないと考えるだろうね。</p>
<p class="conversation">それならその有能の士になるにはどうすればよいのですか」</p>

<footer>

<div class="notices yellow">
<p><a href="https://ja.wikipedia.org/wiki/貝塚茂樹" title="https://ja.wikipedia.org/wiki/貝塚茂樹"><ruby>貝<rp>（</rp><rt>かい</rt><rp>）</rp>塚<rp>（</rp><rt>づか</rt><rp>）</rp>茂<rp>（</rp><rt>しげ</rt><rp>）</rp>樹<rp>（</rp><rt>き</rt><rp>）</rp></ruby></a>、「<cite><a href="https://www.amazon.co.jp/諸子百家――中国古代の思想家たち-岩波新書-貝塚-茂樹/dp/4004130476/378-6956610-7563751" title="https://www.amazon.co.jp/諸子百家――中国古代の思想家たち-岩波新書-貝塚-茂樹/dp/4004130476/378-6956610-7563751"><ruby>諸<rp>（</rp><rt>しょ</rt><rp>）</rp>子<rp>（</rp><rt>し</rt><rp>）</rp>百家<rp>（</rp><rt>ひゃっか</rt><rp>）</rp></ruby></a>、中国古代の思想家たち</cite>」、岩波新書４３７、<time datetime="1975-12-20">１９７５年１２月２０日</time>第１９刷発行。第二章「人類愛と平和についての対話、墨子の思想」、第４０項から。</p>
</div>

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

<ProsiirrorEditor
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