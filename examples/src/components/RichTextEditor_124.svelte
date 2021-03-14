<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="green">ジョルジョ・ヴァザーリにおいてのモナ・リザ</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.jpg" title="「ラ・ジョコンデュ」か「ジョコンダ婦人、モナ・リザ」と言われているフランテスコ・デル・ジョコンド妻であるジェラルディニーの肖像画" alt="「ラ・ジョコンデュ」か「ジョコンダ婦人、モナ・リザ」と言われているフランテスコ・デル・ジョコンド妻であるジェラルディニーの肖像画" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.jpg 1920w" id="la_joconde_selon_vasari"></picture><figcaption>「ラ・ジョコンデュ」か「ジョコンダ婦人、モナ・リザ」と言われているフランテスコ・デル・ジョコンド妻であるジェラルディニーの肖像画</figcaption></figure>
<div class="notices green">
<p>下記の<a href="https://ja.wikipedia.org/wiki/モナ・リザ" title="https://ja.wikipedia.org/wiki/モナ・リザ">モナ・リザ</a>の描写は<a href="https://ja.wikipedia.org/wiki/ジョルジョ・ヴァザーリ" title="https://ja.wikipedia.org/wiki/ジョルジョ・ヴァザーリ"><ruby lang="ja">ジョルジョ<rp>(</rp><rt lang="it">Giorgio</rt><rp>)</rp>・<rp>(</rp><rt lang="it">&#160;</rt><rp>)</rp>ヴァザーリ<rp>(</rp><rt lang="it">VASARI</rt><rp>)</rp></ruby lang="ja"></a>によって書かれ、１５５０年にフィレンツェで出版された。<br>
これは最もよく知られ、最も古く、最も信頼に値するものである。それで、その後の描写のほとんどに影響を与えた。<br>
ヴァザーリは自分自身が見たことのない絵画を描写している。なぜなら、絵画が当時フォンテーヌブローにあって、ヴァザーリがそこまで足を運んだことは一回もなかった。<br>
描写は、その作品の評判について教えてくれる。１５０３年にフィレンツェで施されて、<a href="https://ja.wikipedia.org/wiki/レオナルド・ダ・ヴィンチ" title="https://ja.wikipedia.org/wiki/レオナルド・ダ・ヴィンチ">レオナルド・ダ・ヴィンチ</a>はそこで４年間没頭して、「リザ婦人」という「マドナ・リザ」〔省略すると、モナ・リザ〕の指名で、フランチェスコ・デル・ジョコンドの妻を表している。<br>
この描写は何よりもヴァザーリにとっての価値を理解することも可能にしているのです。</p>
</div>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"/></svg></span>
その後、<ruby>彼<rp>(</rp><rt>レオナルド</rt><rp>)</rp></ruby>は、フランチェスコ・デル・ジョコンドのために、その妻モナ・リザの肖像画の制作を引き受けたが、４年間努力した末に未完成のまま残した。<br>
この作品は現在、<a href="https://ja.wikipedia.org/wiki/フランソワ1世_(フランス王)" title="https://ja.wikipedia.org/wiki/フランソワ1世_(フランス王)">フランス国王フランソワ</a>のもと、<a href="https://ja.wikipedia.org/wiki/フォンテーヌブロー" title="https://ja.wikipedia.org/wiki/フォンテーヌブロー">フォンテーヌブロー</a>にある。<br>
<span style="color: #3d8b3d;">芸術による自然の<ruby style="letter-spacing:2px;color:#3d8b3d;">模<rp>(</rp><rt style="font-size:70%;color:#3d8b3d;">も</rt><rp>)</rp>倣<rp>(</rp><rt style="font-size:70%;color:#3d8b3d;">ほう</rt><rp>)</rp></ruby>がどのようなことであるのか</span>を知ろうとした者は、その顔の前に立てば、それが苦もなくわかった。  絵画の精妙さが可能にしてくれるあらゆる細部が、そこに描かれていたからである。<br>
眼は、生きているものに絶えず見られるような、輝きと潤いをもっている。<br>
その周囲は、赤味がかった鉛色の微妙な色合いをつけられ、まつ毛もまた、きわめて繊細な感覚なしには描きえないものである。<br>
眉毛は、肌からの毛の生え具合いが濃かったり薄かったり、また毛穴によっていろいろな方向を向いている様が、きちんと描かれているので、これ以上真に迫っていることはあり得ない。<br>
ばら色で柔らかな、美しい鼻孔をもったその鼻は、まるで生きているようであった。<br>
口はその開き具合や、唇が赤く彩られているところ、顔の血色などからして、色を塗られたのではなく、本当に肉そのもののように見えた。<br>
<ruby>咽<rp>(</rp><rt>いん</rt><rp>)</rp>喉<rp>(</rp><rt>こう</rt><rp>)</rp></ruby>のくぼみのところを注意深く観察する人は、血管が脈打つのを認めることができよう。<br>
このようなやり方で描かれた絵は、最も力ある芸術家を、それが誰であっても、恐れおののかせるものであるということができる。<br>
彼はまたつぎのような工夫もした。<span style="color: #3d8b3d;">モナ・リザがきわめて美しかったので、彼女を陽気な気持ちに保とうとして、肖像画を描いているあいだ、音楽を奏し歌を唄う者を、また絶えず<ruby style="letter-spacing:2px;color:#3d8b3d;">道<rp>(</rp><rt style="font-size:70%;color:#3d8b3d;">どう</rt><rp>)</rp>化<rp>(</rp><rt style="font-size: 70%;color:#3d8b3d;">け</rt><rp>)</rp>師<rp>(</rp><rt style="font-size:70%;color:#3d8b3d;">し</rt><rp>)</rp></ruby>をそばに呼んでおいたのである。  肖像画においてしばしば見られる、あの<ruby style="letter-spacing:2px;color:#3d8b3d;">憂<rp>(</rp><rt style="font-size:70%;color:#3d8b3d;">ゆう</rt><rp>)</rp>鬱<rp>(</rp><rt style="font-size:70%;color:#3d8b3d;">うつ</rt><rp>)</rp></ruby>な印象を取り除くためである</span>。<br>
<span style="color: #3d8b3d;">レオナルドのこの作品に見られる微笑みは、あまりにも魅惑的なので、それを見ると人間のものというよりも神のものという印象を受け、そして生命さながらに驚嘆すべきものと思われたのである</span>。
<span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"/></svg></span></p>
<p><a href="https://ja.wikipedia.org/wiki/ジョルジョ・ヴァザーリ" title="https://ja.wikipedia.org/wiki/ジョルジョ・ヴァザーリ" class="green"><ruby lang="ja">ジョルジョ<rp>(</rp><rt lang="it">Giorgio</rt><rp>)</rp>・<rp>(</rp><rt lang="it">&#160;</rt><rp>)</rp>ヴァザーリ<rp>(</rp><rt lang="it">VASARI</rt><rp>)</rp></ruby lang="ja"></a><span style="color: #3d8b3d;">、『</span><ruby lang="ja" style="letter-spacing: 2px;color:#3d8b3d;">画家・彫刻家・建築家列伝<rp>(</rp><rt lang="it" style="font-size: 70%;color:#3d8b3d;">le&#160;vite&#160;de&#39;&#160;piu&#160;eccelenti&#160;pittori,&#160;scultori&#160;e&#160;architettori</rt><rp>)</rp></ruby><span style="color: #3d8b3d;"> 』、第４巻。</span></p>
</div>
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