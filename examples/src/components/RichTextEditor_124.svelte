<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:158 EN:189  -->

<article>

<h1 class="green">ジョルジョ・ヴァザーリにおいてのモナ・リザ</h1>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.jpg" title="「ラ・ジョコンデュ」か「ジョコンダ婦人、モナ・リザ」と言われているフランテスコ・デル・ジョコンド妻であるジェラルディニーの肖像画" alt="「ラ・ジョコンデュ」か「ジョコンダ婦人、モナ・リザ」と言われているフランテスコ・デル・ジョコンド妻であるジェラルディニーの肖像画" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.jpg 1920w" id="la_joconde_selon_vasari"></picture><figcaption>フランス語で「<ruby lang="ja">ラ<rp>（</rp><rt lang="fr">La</rt><rp>）</rp>・<rp>（</rp><rt lang="fr">&nbsp;</rt><rp>）</rp>ジョコンデュ<rp>（</rp><rt lang="it">Joconde</rt><rp>）</rp></ruby>」やイタリア語で「ジョコンダ婦人、モナ・リザ」と言われている<ruby lang="ja">フランテスコ<rp>（</rp><rt lang="it">Francesco</rt><rp>）</rp>・<rp>（</rp><rt lang="it">&nbsp;</rt><rp>）</rp>デル<rp>（</rp><rt lang="it">del</rt><rp>）</rp>・<rp>（</rp><rt lang="it">&nbsp;</rt><rp>）</rp>ジョコンド<rp>（</rp><rt lang="it">Giocondo</rt><rp>）</rp></ruby>の妻である<ruby lang="ja">リザ<rp>（</rp><rt lang="it">Lisa</rt><rp>）</rp>・<rp>（</rp><rt lang="it">&nbsp;</rt><rp>）</rp>ジェラルディニー<rp>（</rp><rt lang="it">Gherardini</rt><rp>）</rp></ruby>の肖像画。</figcaption>
</figure>

<div class="notices green">
<p>下記の<a href="https://ja.wikipedia.org/wiki/モナ・リザ" title="https://ja.wikipedia.org/wiki/モナ・リザ">モナ・リザ</a>の描写は<a href="https://ja.wikipedia.org/wiki/ジョルジョ・ヴァザーリ" title="https://ja.wikipedia.org/wiki/ジョルジョ・ヴァザーリ"><ruby lang="ja">ジョルジョ<rp>（</rp><rt lang="it">Giorgio</rt><rp>）</rp>・<rp>（</rp><rt lang="it">&nbsp;</rt><rp>）</rp>ヴァザーリ<rp>（</rp><rt lang="it">VASARI</rt><rp>）</rp></ruby></a>によって書かれ、最初に<time datetime="1550">１５５０年</time>に、後に<time datetime="1568">１５６８年</time>に改増され、フィレンツェで出版された。</p>
<p>これらの文書は最もよく知られ、最も古く、最も信頼に値するものである。それで、その後の描写のほとんどに影響を与えた。</p>
<p>ヴァザーリは自分自身が見たことのない絵画を描写している。なぜなら、絵画が当時<a href="https://ja.wikipedia.org/wiki/フォンテーヌブロー" title="https://ja.wikipedia.org/wiki/フォンテーヌブロー"><ruby lang="ja">フォンテーヌブロー<rp>（</rp><rt lang="fr">Fontainebleau</rt><rp>）</rp></ruby></a>にあって、ヴァザーリがそこまで足を運んだことは一回もなかった。</p>
<p>描写は、その作品の評判について教えてくれる。<time datetime="1503">１５０３年</time>ごろにフィレンツェで施されて、<a href="https://ja.wikipedia.org/wiki/レオナルド・ダ・ヴィンチ" title="https://ja.wikipedia.org/wiki/レオナルド・ダ・ヴィンチ">レオナルド・ダ・ヴィンチ</a>はそこで<time datetime="P1457D">四年間</time>没頭して、「<ruby>リザ婦人<rp>（</rp><rt>モナ・リザ</rt><rp>）</rp></ruby>」という、イタリア語で「マドナ・リザ」、省略すると、モナ・リザの指名で、フランチェスコ・デル・ジョコンドの妻を表している。</p>
<p>この描写は何よりもヴァザーリにとっての価値を理解することも可能にしているのです。</p>
</div>

<section id="vasari-1550">
<h2 class="yellow"><time datetime="1550">１５５０年</time>版の<cite><ruby lang="ja" style="letter-spacing: 2px;color:#3d8b3d;">画家・彫刻家・建築家列伝<rp>（</rp><rt lang="it" style="font-size: 70%;color:#3d8b3d;">le&nbsp;vite&nbsp;de&#39;&nbsp;piu&nbsp;eccelenti&nbsp;pittori,&nbsp;scultori&nbsp;e&nbsp;architettori</rt><rp>）</rp></ruby>の文書においての</cite><cite>モナ・リザ</cite></h2>

<p>レオナルドは、<span style="color: #3d8b3d;"><ruby lang="ja">フランテスコ<rp>（</rp><rt lang="it">Francesco</rt><rp>）</rp>・<rp>（</rp><rt lang="it">&nbsp;</rt><rp>）</rp>デル<rp>（</rp><rt lang="it">del</rt><rp>）</rp>・<rp>（</rp><rt lang="it">&nbsp;</rt><rp>）</rp>ジョコンド<rp>（</rp><rt lang="it">Giocondo</rt><rp>）</rp></ruby>のために、妻<mark><ruby lang="ja">モナ<rp>（</rp><rt lang="it">Mona</rt><rp>）</rp>・<rp>（</rp><rt lang="it">&nbsp;</rt><rp>）</rp>リザ<rp>（</rp><rt lang="it">Lisa</rt><rp>）</rp></ruby></mark>の肖像画を請け負った</span>。そして、<time datetime="P1457D">四年間</time>悩んだ末に未完成のままにしてしまったのです。</p>
<p>この作品は現在、フォンテーヌブローにあって、<a href="https://ja.wikipedia.org/wiki/フランソワ1世_(フランス王)" title="https://ja.wikipedia.org/wiki/フランソワ1世_(フランス王)">フランス国のフランソワ王</a>が所有しています。</p>
<p><span style="color: #3d8b3d;">この頭には、芸術がいかに簡単に自然を模倣することができるかを</span>知りたい人は誰でも簡単に理解することができます。なぜならば、そこには精妙に描き得るもっとも細かい部分のすべてが贋作され尽くされていたからです。</p>
<p>眼には、生きているものにいつも見られる水や艶があったからです。</p>
<p>その周りには、青みがかった<ruby>薔<rp>（</rp><rt>ば</rt><rp>）</rp>薇<rp>（</rp><rt>ら</rt><rp>）</rp></ruby>色のまつ毛があり、これらは最高の精妙なしにはできません。</p>
<p>眉毛は、肉から生えてくる毛が太かったり、まばらだったりする様子や、皮膚の毛穴に合わせてカーブしていたりする様子を作ったからです。これらはすべて、これ以上ないほど自然なものでした。</p>
<p>鼻は美しい開口部で、ピンク色で柔らかく、まるで生きているかのようだった。</p>
<p>口は色ではなくしかも真に肉のように見える顔の化身のところに唇の赤で結びついた限界のある裂け目だった。</p>
<p><ruby>咽<rp>（</rp><rt>いん</rt><rp>）</rp>喉<rp>（</rp><rt>こう</rt><rp>）</rp></ruby>のくぼみのところを注意深く観察する人は、血管が脈打つのを認めることができよう。</p>
<p>このようなやり方で描かれた絵は、最も力ある芸術家を、それが誰であっても、恐れおののかせるものであるということができる。</p>
<p>彼はまたつぎのような工夫もした。<span style="color: #3d8b3d;"><mark>モナ・リザ</mark>がきわめて美しかったので、彼女を陽気な気持ちに保とうとして、肖像画を描いているあいだ、音楽を奏し歌を唄う者を、また絶えず<ruby style="letter-spacing:2px;color:#3d8b3d;">道<rp>（</rp><rt style="font-size:70%;color:#3d8b3d;">どう</rt><rp>）</rp>化<rp>（</rp><rt style="font-size: 70%;color:#3d8b3d;">け</rt><rp>）</rp>師<rp>（</rp><rt style="font-size:70%;color:#3d8b3d;">し</rt><rp>）</rp></ruby>をそばに呼んでおいたのである。  肖像画においてしばしば見られる、あの<ruby style="letter-spacing:2px;color:#3d8b3d;">憂<rp>（</rp><rt style="font-size:70%;color:#3d8b3d;">ゆう</rt><rp>）</rp>鬱<rp>（</rp><rt style="font-size:70%;color:#3d8b3d;">うつ</rt><rp>）</rp></ruby>な印象を取り除くためである</span>。</p>
<p><span style="color: #3d8b3d;">レオナルドのこの作品に見られる微笑みは、あまりにも魅惑的なので、それを見ると人間のものというよりも神のものという印象を受け、そして生命さながらに驚嘆すべきものと思われたのである</span>。</p>

<footer>
  <p><a href="https://ja.wikipedia.org/wiki/ジョルジョ・ヴァザーリ" title="https://ja.wikipedia.org/wiki/ジョルジョ・ヴァザーリ"><ruby lang="ja">ジョルジョ<rp>（</rp><rt lang="it">Giorgio</rt><rp>）</rp>・<rp>（</rp><rt lang="it">&nbsp;</rt><rp>）</rp>ヴァザーリ<rp>（</rp><rt lang="it">VASARI</rt><rp>）</rp></ruby></a><span style="color: #3d8b3d;">、「</span><cite><ruby lang="ja" style="letter-spacing: 2px;color:#3d8b3d;">画家・彫刻家・建築家列伝<rp>（</rp><rt lang="it" style="font-size: 70%;color:#3d8b3d;">le&nbsp;vite&nbsp;de&#39;&nbsp;piu&nbsp;eccelenti&nbsp;pittori,&nbsp;scultori&nbsp;e&nbsp;architettori</rt><rp>）</rp></ruby></cite><span style="color: #3d8b3d;"> 」、第ニ巻、第三部、５７０項から５７１項までより。</span></p>
</footer>
</section>

<section id="vasari-1568">
<h2 class="yellow"><time datetime="1568">１５６８年</time>版の<cite><ruby lang="ja" style="letter-spacing: 2px;color:#3d8b3d;">画家・彫刻家・建築家列伝<rp>（</rp><rt lang="it" style="font-size: 70%;color:#3d8b3d;">le&nbsp;vite&nbsp;de&#39;&nbsp;piu&nbsp;eccelenti&nbsp;pittori,&nbsp;scultori&nbsp;e&nbsp;architettori</rt><rp>）</rp></ruby>の文書においての</cite><cite>モナ・リザ</cite></h2>

<p>その後、<ruby>彼<rp>（</rp><rt>レオナルド</rt><rp>）</rp></ruby>は、<span style="color: #3d8b3d;"><ruby lang="ja">フランテスコ<rp>（</rp><rt lang="it">Francesco</rt><rp>）</rp>・<rp>（</rp><rt lang="it">&nbsp;</rt><rp>）</rp>デル<rp>（</rp><rt lang="it">del</rt><rp>）</rp>・<rp>（</rp><rt lang="it">&nbsp;</rt><rp>）</rp>ジョコンド<rp>（</rp><rt lang="it">Giocondo</rt><rp>）</rp></ruby>のために、その妻<mark><ruby lang="ja">モナ<rp>（</rp><rt lang="it">Mona</rt><rp>）</rp>・<rp>（</rp><rt lang="it">&nbsp;</rt><rp>）</rp>リザ<rp>（</rp><rt lang="it">Lisa</rt><rp>）</rp></ruby></mark>の肖像画の制作を引き受けた</span>。<time datetime="P1457D">四年間</time>努力した末に未完成のまま残した。</p>
<p>この作品は現在、<a href="https://ja.wikipedia.org/wiki/フランソワ1世_(フランス王)" title="https://ja.wikipedia.org/wiki/フランソワ1世_(フランス王)">フランス国王フランソワ</a>のもと、<a href="https://ja.wikipedia.org/wiki/フォンテーヌブロー" title="https://ja.wikipedia.org/wiki/フォンテーヌブロー">フォンテーヌブロー</a>にある。</p>
<p><span style="color: #3d8b3d;">芸術による自然の<ruby style="letter-spacing:2px;color:#3d8b3d;">模<rp>（</rp><rt style="font-size:70%;color:#3d8b3d;">も</rt><rp>）</rp>倣<rp>（</rp><rt style="font-size:70%;color:#3d8b3d;">ほう</rt><rp>）</rp></ruby>がどのようなことであるのか</span>を知ろうとした者は、その顔の前に立てば、それが苦もなくわかった。絵画の精妙さが可能にしてくれるあらゆる細部が、そこに描かれていたからである。</p>
<p>眼は、生きているものに絶えず見られるような、輝きと潤いをもっている。</p>
<p>その周囲は、赤味がかった鉛色の微妙な色合いをつけられ、まつ毛もまた、きわめて繊細な感覚なしには描きえないものである。</p>
<p>眉毛は、肌からの毛の生え具合いが濃かったり薄かったり、また毛穴によっていろいろな方向を向いている様が、きちんと描かれているので、これ以上真に迫っていることはあり得ない。</p>
<p>ばら色で柔らかな、美しい鼻孔をもったその鼻は、まるで生きているようであった。</p>
<p>口はその開き具合や、唇が赤く彩られているところ、顔の血色などからして、色を塗られたのではなく、本当に肉そのもののように見えた。</p>
<p>胸のくぼみには、注意深く見たと誰にでも脈が打っているのが見え、この作品は、本当にどんな勇敢な芸術家でも恐れおののくような方法で描かれたと言える。</p>

<p>また、彼は、<span style="color: #3d8b3d;"><mark>モナ・リザ</mark>が非常に美しかったため、肖像画を描くときに絵画が与えがちな<ruby style="letter-spacing:2px;color:#3d8b3d;">憂<rp>（</rp><rt style="font-size:70%;color:#3d8b3d;">ゆう</rt><rp>）</rp>鬱<rp>（</rp><rt style="font-size:70%;color:#3d8b3d;">うつ</rt><rp>）</rp></ruby>さを追い払うために、彼女を描いている間、彼女を陽気にさせるために、彼女に演奏や歌を聴かせたり、絶えず<ruby style="letter-spacing:2px;color:#3d8b3d;">道<rp>（</rp><rt style="font-size:70%;color:#3d8b3d;">どう</rt><rp>）</rp>化<rp>（</rp><rt style="font-size: 70%;color:#3d8b3d;">け</rt><rp>）</rp>師<rp>（</rp><rt style="font-size:70%;color:#3d8b3d;">し</rt><rp>）</rp></ruby>に頼ったりと、このような策略を用いた。</span></p>
<p><span style="color: #3d8b3d;">レオナルドの微笑みには、心地よさがあったため、それを見るのは人間というよりも神々しいほどであって、それで驚異として捉えていた、それは人生はそれ以外の形で現れて来ないものだから。</span></p>

<footer>
  <p><a href="https://ja.wikipedia.org/wiki/ジョルジョ・ヴァザーリ" title="https://ja.wikipedia.org/wiki/ジョルジョ・ヴァザーリ"><ruby lang="ja">ジョルジョ<rp>（</rp><rt lang="it">Giorgio</rt><rp>）</rp>・<rp>（</rp><rt lang="it">&nbsp;</rt><rp>）</rp>ヴァザーリ<rp>（</rp><rt lang="it">VASARI</rt><rp>）</rp></ruby></a><span style="color: #3d8b3d;">、「</span><cite><ruby lang="ja" style="letter-spacing: 2px;color:#3d8b3d;">画家・彫刻家・建築家列伝<rp>（</rp><rt lang="it" style="font-size: 70%;color:#3d8b3d;">le&nbsp;vite&nbsp;de&#39;&nbsp;piu&nbsp;eccelenti&nbsp;pittori,&nbsp;scultori&nbsp;e&nbsp;architettori</rt><rp>）</rp></ruby></cite><span style="color: #3d8b3d;"> 」、第四巻より。</span></p>
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