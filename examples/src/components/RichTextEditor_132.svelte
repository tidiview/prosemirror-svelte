<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:164 EN:195  -->

<article>

<hgroup>
<h2 class="green"><ruby lang="ja">大トリアノン宮殿<rp>（</rp><rt lang="fr">le&#160;Grand&#160;Trianon</rt><rp>）</rp></ruby>での</h2>
<h1 class="green">イリス</h1>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.webp 700w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.jpg" title="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《イリスの近づきに目覚めるモルフェ》絵画" alt="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《イリスの近づきに目覚めるモルフェ》絵画" class="class-diane-img" usemap="#iris" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.jpg 700w"></picture><figcaption><q cite="#iris-1" style="quotes:'「' '」';">いつも忠実な私の使者〈<ruby>虹<rp>（</rp><rt>イリス</rt><rp>）</rp></ruby>〉女神よ、〈<ruby>眠り<rp>（</rp><rt>ソムヌス</rt><rp>）</rp></ruby>〉の神の眠気を誘う館へと急行してほしい</q>、<cite>変身物語</cite>、第十一巻、５８３行。</figcaption><map name="iris" id="iris"><area title="イリス" alt="イリス" id="area_iris" href="#iris" shape="poly" coords="50, 599, 69, 555, 109, 529, 166, 502, 167, 448, 218, 398, 262, 303, 316, 297, 360, 247, 354, 220, 334, 229, 326, 255, 262, 279, 248, 231, 251, 202, 242, 188, 220, 194, 202, 107, 170, 176, 143, 153, 116, 163, 32, 108, 29, 131, 53, 184, 87, 223, 103, 292, 81, 327, 77, 360, 57, 374, 52, 391, 60, 397, 69, 398, 71, 414, 60, 428, 47, 418, 28, 421, 18, 432, 19, 476, 37, 495, 33, 517, 43, 533, 61, 530, 54, 540, 40, 542, 32, 571, 33, 602"><area title="眠りの神" alt="眠りの神" id="area_morpheus" href="#morpheus" shape="poly" coords="195, 661, 277, 634, 324, 631, 347, 645, 366, 712, 375, 718, 420, 675, 433, 655, 521, 641, 542, 621, 571, 614, 600, 593, 630, 607, 683, 592, 680, 573, 657, 567, 622, 567, 611, 552, 583, 540, 579, 512, 590, 497, 580, 481, 513, 452, 481, 453, 473, 466, 476, 515, 389, 469, 267, 447, 273, 473, 330, 503, 378, 512, 405, 529, 435, 563, 387, 546, 343, 548, 301, 556, 259, 545, 254, 555, 279, 575, 296, 597, 237, 624, 198, 630, 185, 645"></map>
</figure>

<div class="notices green">
<p><a href="https://ja.wikipedia.org/wiki/大トリアノン宮殿" title="https://ja.wikipedia.org/wiki/大トリアノン宮殿"><ruby lang="ja">大トリアノン宮殿<rp>（</rp><rt lang="fr">le&#160;Grand&#160;Trianon</rt><rp>）</rp></ruby></a>に展示されている<a href="https://ja.wikipedia.org/wiki/ルネ＝アントワーヌ・ウアス" title="https://ja.wikipedia.org/wiki/ルネ＝アントワーヌ・ウアス"><ruby lang="ja">ルネ<rp>（</rp><rt lang="fr">René</rt><rp>）</rp>＝<rp>（</rp><rt lang="fr">-</rt><rp>）</rp>アントワーヌ<rp>（</rp><rt lang="fr">Antoine</rt><rp>）</rp>・<rp>（</rp><rt lang="fr"></rt><rp>）</rp>ウアス<rp>（</rp><rt lang="fr">Houasse</rt><rp>）</rp></ruby></a>が描いた《<cite><ruby lang="ja">イリス<rp>（</rp><rt lang="fr">Iris</rt><rp>）</rp></ruby>の近づきに目覚める<ruby lang="ja">モルフェ<rp>（</rp><rt lang="fr">Morphée</rt><rp>）</rp></ruby></cite>》絵画、あるいは《<cite>イーリスとモルペウス》ともいう</cite>が<ruby lang="ja">ルイ=フィリップの家族の間<rp>（</rp><rt lang="fr">le&#160;Salon&#160;de&#160;Famille&#160;de&#160;Louis-Philippe</rt><rp>）</rp></ruby>に見られます。</p>
<p><a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス"><ruby lang="ja">オウィディウス<rp>（</rp><rt lang="la">Ovidius</rt><rp>）</rp></ruby></a>が書いた「<a href="https://ja.wikipedia.org/wiki/変身物語" title="https://ja.wikipedia.org/wiki/変身物語"><cite><ruby lang="ja">変身物語<rp>（</rp><rt lang="grc">Metamorphoseon</rt><rp>）</rp></ruby></cite></a>」において、夫婦<a href="https://ja.wikipedia.org/wiki/ケーユクス" title="https://ja.wikipedia.org/wiki/ケーユクス"><ruby lang="ja">ケユクス<rp>（</rp><rt lang="la">Ceyx</rt><rp>）</rp></ruby></a>と<a href="https://ja.wikipedia.org/wiki/ヒュプノス" title="https://ja.wikipedia.org/wiki/ヒュプノス"><ruby lang="ja">アルキュオネ<rp>（</rp><rt lang="la">Alcyone</rt><rp>）</rp></ruby></a>の深い愛情が語られている。</p>
<p>ある日、<a href="https://ja.wikipedia.org/wiki/アポローン" title="https://ja.wikipedia.org/wiki/アポローン"><ruby>アポロン<rp>（</rp><rt>Apollōn</rt><rp>）</rp></ruby></a>の神託を伺うために<a href="https://ja.wikipedia.org/wiki/クラロス" title="https://ja.wikipedia.org/wiki/クラロス"><ruby lang="ja">クラロス<rp>（</rp><rt lang="la">Claros</rt><rp>）</rp></ruby></a>へ赴こうとしたケユクスは「どうか陸路で行ってほしい」という妻の言葉を聞き入れずに船で出かけ、<ruby>大<rp>（</rp><rt>おお</rt><rp>）</rp>時<rp>（</rp><rt>し</rt><rp>）</rp>化<rp>（</rp><rt>け</rt><rp>）</rp></ruby>に遭って海の<ruby>藻<rp>（</rp><rt>も</rt><rp>）</rp>屑<rp>（</rp><rt>くず</rt><rp>）</rp></ruby>となってしまいます。</p>
<p>何も知らないアルキュオネは日夜<a href="https://ja.wikipedia.org/wiki/ユーノー" title="https://ja.wikipedia.org/wiki/ユーノー"><ruby lang="ja">ユノー<rp>（</rp><rt lang="la">Juno</rt><rp>）</rp></ruby>女神</a>の神殿で夫の無事な帰還を祈っていましたが、もはや叶えようもない祈りを聞かされ続けるのはユノーにとってもつらいことでした。</p>
<p>見かねた女神は哀れな妻に真実を知らせてやるべく、<a href="#area_iris" title="イリス" id="iris">イリス</a>を呼んでこう命じました。</p>
<p class="conversation">「眠りの神男<ruby lang="ja">ソムヌス<rp>（</rp><rt lang="la">Somnus</rt><rp>）</rp></ruby>のところへ行き、アルキュオネに亡きケユクスの夢を見せて事の次第を教えてやってくれるよう頼んでちょうだい」</p>
<p>女王の命を受けたイリスが眠りの神であるソムヌスが住む洞窟を訪れていく... </p>
</div>

<h2 id="iris-1" class="green">「<cite>変身物語</cite>」の第十一巻の文書においての〈<ruby>眠り<rp>（</rp><rt>ソムヌス</rt><rp>）</rp></ruby>〉の洞窟の中に入るイリス</h2>

<ol class="doc">
  <li value="583">「いつも忠実な私の使者〈<mark><ruby>虹<rp>（</rp><rt>イリス</rt><rp>）</rp></ruby></mark>〉女神よ、〈<mark><ruby>眠り<rp>（</rp><rt>ソムヌス</rt><rp>）</rp></ruby></mark>〉の神の眠気を誘う館へと急行してほしい。そしてあのアルキュオネに、いまは亡きケユクスの幻を夢に見させて、ことに真相を知らせてほしいのです」</li>
  <li value="585">〈<mark><ruby>虹<rp>（</rp><rt>イリス</rt><rp>）</rp></ruby></mark>〉女神はあまたの色で飾られた<ruby>衣<rp>（</rp><rt>ころも</rt><rp>）</rp></ruby>を身にまとい、大空に虹のような弧をえがきながら、いいつけられたとおり、雲のしたに隠れた王者の住居ヘ向かうのだ。</li>
  <li><a href="https://ja.wikipedia.org/wiki/キンメリア人" title="https://ja.wikipedia.org/wiki/キンメリア人"><ruby lang="ja">キムメリア<rp>（</rp><rt lang="la">Cimmeria</rt><rp>）</rp></ruby>人</a>たちが住んでいるあたりにほど近く、<ruby>洞<rp>（</rp><rt>ほら</rt><rp>）</rp></ruby>になった山がある。</li>
  <li>たいそう奧深い洞窟だが、ここが、<ruby>懶<rp>（</rp><rt>らん</rt><rp>）</rp>惰<rp>（</rp><rt>だ</rt><rp>）</rp></ruby>な〈<mark><ruby>眠り<rp>（</rp><rt>ソムヌス</rt><rp>）</rp></ruby></mark>〉の神の住む奥殿だ。</li>
  <li>ここには、朝も、夕暮れもおよそ一日のあいだじゅう、日がささない。</li>
  <li>地面からは、雲霧が立ちのぼり、<ruby>朦<rp>（</rp><rt>もう</rt><rp>）</rp>朧<rp>（</rp><rt>ろう</rt><rp>）</rp></ruby>とした薄明がたちこめている。</li>
  <li>ここでは、<ruby>鶏<rp>（</rp><rt>と</rt><rp>）</rp>冠<rp>（</rp><rt>さか</rt><rp>）</rp></ruby>をいただいた鳥も、〈<ruby>曙<rp>（</rp><rt>アウロラ</rt><rp>）</rp></ruby>〉を呼ぶために鳴くことなく、油断ない番犬たちや、その犬よりも耳ざとい<ruby>鵞<rp>（</rp><rt>が</rt><rp>）</rp>鳥<rp>（</rp><rt>ちょう</rt><rp>）</rp></ruby>の声が静けさを破ることもない。</li>
  <li value="600">野獣も家畜も、風にそよぐ枝も、もの音をたてず、かまびすしい人語も聞こえはない。</li>
  <li>ひっそりした静寂が住みついている所だ。</li>
  <li>ただ、岩の底から「<ruby>忘却<rp>（</rp><rt>レーテ</rt><rp>）</rp></ruby>」の流れが湧き出していて、河床の小石のうえをさらさらとせせらぐ水のささやきがまどろみを誘っている。</li>
  <li>洞窟の入ロには、たくさんの<ruby>罌<rp>（</rp><rt>け</rt><rp>）</rp>粟<rp>（</rp><rt>し</rt><rp>）</rp></ruby>が咲き、おびただしい草木が花をつけている。</li>
  <li>それらの草の乳液から、露に濡れた「夜」が、〈<mark><ruby>眠り<rp>（</rp><rt>ソムヌス</rt><rp>）</rp></ruby></mark>〉をあつめ、暗い地上にそれをふりまくのだ。</li>
  <li><ruby>蝶<rp>（</rp><rt>ちょう</rt><rp>）</rp>番<rp>（</rp><rt>つがい</rt><rp>）</rp></ruby>の回転で、戸がきしむこともない。</li>
  <li>住居のどこ見ても、一つもない。入るところに番人もいない。</li>
  <li>しかし、中央に、黒檀でできた羽毛ぶとんのある黒<ruby>一色<rp>（</rp><rt>いっしょく</rt><rp>）</rp></ruby>な掛布で被われている寝台が置かれている。</li>
  <li>そこには、何もしないことで重くなった手足の神が、横になっている。</li>
  <li>彼のまわり、あちらこちらに、いろんな姿振りで、惑わす「夢想」が寝ころがっているが、そのたくさんなことといったら、まるで実った麦の穂が、森の木の枝か、海岸にある<ruby>真<rp>（</rp><rt>ま</rt><rp>）</rp>砂<rp>（</rp><rt>さご</rt><rp>）</rp></ruby>の数ほどもあるのだ。</li>
  <li>乙女がここへはいった次第、手で邪魔となっていた夢たちをはらいのけながた、神聖なる住居と神は、女神の衣の輝やきで照はえた。</li>
  <li value="620">〈<mark><ruby>眠り<rp>（</rp><rt>ソムヌス</rt><rp>）</rp></ruby></mark>〉の神は、どろんと重たげな目を辛うじてあげ、何度も何度もうしろヘ倒れかかりながら、こくりこくりする<ruby>顎<rp>（</rp><rt>あご</rt><rp>）</rp></ruby>を<ruby>喉<rp>（</rp><rt>のど</rt><rp>）</rp>首<rp>（</rp><rt>くび</rt><rp>）</rp></ruby>のあたりにぶつけていたが、とうとう目をさますと、<ruby>片<rp>（</rp><rt>かた</rt><rp>）</rp>肱<rp>（</rp><rt>ひじ</rt><rp>）</rp></ruby>をついて起きあがり、用むきをたずねた。</li>
  <li>女神の姿に気づいたからだ。</li>
  <li>女神はこう語りかけた。</li>
  <li>
    <p class="conversation">「万物を憩わせる〈<mark><ruby>眠り<rp>（</rp><rt>ソムヌス</rt><rp>）</rp></ruby></mark>〉よ、このうえなくおだやかな神よ、心の安らぎよ！</p>
  </li>
  <li>
    <p class="conversation">あなたこそは、悩みを遠ざけ、苦しい仕事に疲れたからだを慰めて、つぎの仕事への備えをさせてくれるのです。</p>
  </li>
  <li>
    <p class="conversation">それはそうと、うまくほん物を真似ることのできる夢の幻を、ヘラクレスにゆかりのトラキスまで<ruby>寄<rp>（</rp><rt>よ</rt><rp>）</rp>越<rp>（</rp><rt>こ</rt><rp>）</rp></ruby>していただけませんか。</p>
  </li>
  <li>
    <p class="conversation">難船したケユクス王の姿を借りて、アルキュオネに近づき、そのさまを写し出させてほしいのです。</p>
  </li>
  <li>
    <p class="conversation">いっておきますが、これはユノーさまのご命令です。」</p>
  </li>
  <li value="630">ロ上をいい終えると、すぐに〈<mark><ruby>虹<rp>（</rp><rt>イリス</rt><rp>）</rp></ruby></mark>〉は立ち去った。</li>
  <li>これ以上、眠気を我慢することができなかったからだ。</li>
  <li>〈<mark><ruby>眠り<rp>（</rp><rt>ソムヌス</rt><rp>）</rp></ruby></mark>〉が手足に忍びこんで来るのがわかると、急いで逃げ出し、先ほど通って来た虹の橋で、引き返えした。</li>
</ol>

<footer>
  <p><span style="color: #3d8b3d;">オウィディウス、<cite>変身物語</cite>、第十一巻、５８３行から６３０行までより</span></p>
</footer>

<aside>

<h3 class="green">注釈：</h3>

<div class="notices green">
<h4 class="green note">その後…</h4>
<dl>
<dt>ソムヌスは、息子たちの中から夢の神<a href="https://ja.wikipedia.org/wiki/モルペウス" title="https://ja.wikipedia.org/wiki/モルペウス">モルペウス（フランス語で「モルフェ」）</a>を選んで、アルキュオネの元に派遣しました。</dt>
<dt>モルペウスはケユクスそっくりに身を変えて彼女の夢枕に立つと、こう告げました。</dt>
<dd>「愛しい妻よ、私はおまえの危惧した通り嵐に遭って死んでしまった。どうか私の死を嘆き、葬儀を執り行っておくれ。このままではつつがなく死の国に赴くことも出来ない」。</dd>
</dl>
<p>あまりのことに飛び起きたアルキュオネは悲しみに狂乱し、自分も入水して夫の後を追おうと浜辺に駆けていきますが、そこで波に揺られて流れ着いた夫の遺体と遭遇します。</p>
<p>身も世もあらず悲嘆する彼女の姿が神々の同情を買い、２人は<a href="https://ja.wikipedia.org/wiki/カワセミ" title="https://ja.wikipedia.org/wiki/カワセミ"><ruby>翡<rp>（</rp><rt>カワ</rt><rp>）</rp>翠<rp>（</rp><rt>セミ</rt><rp>）</rp></ruby></a>に姿を変えられるのだ。</p>
</div>

<div class="notices green">
<h4 class="green note">絵画の題名について：</h4>
<p><time datetime="1600">十七世紀</time>に、絵画は 《<cite>イリスの近づきに目覚めるモルフェ</cite>》、あるいは《<cite>イリスとモルフェ</cite>》と名付けられたが、以上で明らかになっている通り、この題名は、 「<cite>変身物語</cite>」 で書かれている話と合わせて考えると、矛盾が生じると否定できない。</p>
<p>文書だと、<a href="https://ja.wikipedia.org/wiki/イーリス" title="https://ja.wikipedia.org/wiki/イーリス">イリス</a>が眠りの神のソムヌスの洞窟を訪れることになっていることが、絵画の題名では<a href="#area_morpheus" title="モルペウス" id="morpheus"><cite><ruby lang="ja">モルフェ<rp>（</rp><rt lang="fr">Morphée</rt><rp>）</rp></ruby></cite></a>になってしまっていることから、 《<cite>イリスとソムヌス</cite>》 との題名のほうが適切だと断言できる。</p>
<p>モルペウスはソムヌスの息子である。物語の続きが示すように、イリスの命令を受けた父はイリスの任務を遂行しに行くように彼を指示する。</p>
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