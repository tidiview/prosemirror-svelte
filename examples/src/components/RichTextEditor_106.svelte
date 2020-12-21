<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedRichTextEditor, clear, toHTML, toPlainText, toJSON, ExtendedrichTextSchema } from "../../../state";

  const html = `
<div id="body-inner">
<h1>イリス</h1>
<figure>
  <picture>
    <source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-280.webp 280w,https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-380.webp 380w,https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-480.webp 480w,https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-640.webp 640w,https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.webp 700w" type="image/webp" />
    <img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.jpg" 
      title="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《イリスの近づきに目覚めるモルフェ》絵画" 
      alt="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《イリスの近づきに目覚めるモルフェ》絵画" 
      class="class-diane-img" 
      usemap="#iris" 
      sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw"
      srcset="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-280.jpg 280w,https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-380.jpg 380w,https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-480.jpg 480w,https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-640.jpg 640w,https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.jpg 700w" />
  </picture>
  <figcaption>眠りの神の洞窟に入るユノー女神の伝達者であるイリス</figcaption>
  <map name="iris" id="iris">
    <area title="イリス" alt="イリス" id="area_iris" href="#iris" shape="poly" coords="41,502,57,465,91,443,139,421,140,375,182,333,219,254,264,249,301,207,296,184,280,192,273,213,219,234,207,193,210,169,202,157,184,162,169,89,142,147,119,128,97,136,26,90,24,109,44,154,72,187,86,245,67,274,64,302,47,313,43,328,50,333,57,333,59,347,50,359,39,350,23,353,15,362,15,399,31,415,27,433,36,447,51,444,45,453,33,454,26,479,27,505" />
    <area title="眠りの神" alt="眠りの神" id="area_morpheus" href="#morpheus" shape="poly" coords="163,554,232,532,271,529,290,541,306,597,314,602,352,566,363,549,436,537,454,521,478,515,503,497,528,509,572,496,570,480,550,475,521,475,512,463,488,453,485,429,494,417,486,403,430,379,403,380,396,391,399,432,326,393,223,375,228,396,276,422,316,429,339,443,364,472,324,458,287,459,252,466,217,457,212,465,233,482,248,500,198,523,166,528,155,541" />
  </map>
</figure>

<div class="notices green">
<p><a href="https://ja.wikipedia.org/wiki/大トリアノン宮殿" title="https://ja.wikipedia.org/wiki/大トリアノン宮殿"><ruby lang="ja">大トリアノン宮殿<rp>(</rp><rt lang="fr">le&nbsp;Grand&nbsp;Trianon</rt><rp>)</rp></ruby></a>に展示されている<a href="https://ja.wikipedia.org/wiki/ルネ＝アントワーヌ・ウアス" title="https://ja.wikipedia.org/wiki/ルネ＝アントワーヌ・ウアス"><ruby lang="ja">ルネ<rp>(</rp><rt lang="fr">René</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>アントワーヌ<rp>(</rp><rt lang="fr">Antoine</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ウアス<rp>(</rp><rt lang="fr">Houasse</rt><rp>)</rp></ruby></a>が描いた「<ruby lang="ja">イリス<rp>(</rp><rt lang="fr">Iris</rt><rp>)</rp></ruby>の近づきに目覚める<ruby lang="ja">モルフェ<rp>(</rp><rt lang="fr">Morphée</rt><rp>)</rp></ruby>」絵画（イリスとモルフェともいう）が<ruby lang="ja">ルイ=フィリップの家族の間<rp>(</rp><rt lang="fr">le&nbsp;Salon&nbsp;de&nbsp;Famille&nbsp;de&nbsp;Louis-Philippe</rt><rp>)</rp></ruby>に見られます。<br>
<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス"><ruby lang="ja">オウィディウス<rp>(</rp><rt lang="la">Ovidius</rt><rp>)</rp></ruby></a>が書いた「<a href="https://ja.wikipedia.org/wiki/変身物語" title="https://ja.wikipedia.org/wiki/変身物語"><ruby lang="ja">変身物語<rp>(</rp><rt lang="grc">Metamorphoseon</rt><rp>)</rp></ruby></a>」において、夫婦<a href="https://ja.wikipedia.org/wiki/ケーユクス" title="https://ja.wikipedia.org/wiki/ケーユクス"><ruby lang="ja">ケユクス<rp>(</rp><rt lang="la">Ceyx</rt><rp>)</rp></ruby></a>と<a href="https://ja.wikipedia.org/wiki/ヒュプノス" title="https://ja.wikipedia.org/wiki/ヒュプノス"><ruby lang="ja">アルキュオネ<rp>(</rp><rt lang="la">Alcyone</rt><rp>)</rp></ruby></a>の深い愛情が語られている。<br>
ある日、<a href="https://ja.wikipedia.org/wiki/アポローン" title="https://ja.wikipedia.org/wiki/アポローン"><ruby lang="ja">アポロン<rp>(</rp><rt lang="la">Apollōn</rt><rp>)</rp></ruby></a>の神託を伺うために<a href="https://ja.wikipedia.org/wiki/クラロス" title="https://ja.wikipedia.org/wiki/クラロス"><ruby lang="ja">クラロス<rp>(</rp><rt lang="la">Claros</rt><rp>)</rp></ruby></a>へ赴こうとしたケユクスは「どうか陸路で行ってほしい」という妻の言葉を聞き入れずに船で出かけ、<ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp>時<rp>(</rp><rt>し</rt><rp>)</rp>化<rp>(</rp><rt>け</rt><rp>)</rp></ruby>に遭って海の<ruby>藻<rp>(</rp><rt>も</rt><rp>)</rp>屑<rp>(</rp><rt>くず</rt><rp>)</rp></ruby>となってしまいます。<br>
何も知らないアルキュオネは日夜<a href="https://ja.wikipedia.org/wiki/ユーノー" title="https://ja.wikipedia.org/wiki/ユーノー"><ruby lang="ja">ユノー<rp>(</rp><rt lang="la">Juno</rt><rp>)</rp></ruby>女神</a>の神殿で夫の無事な帰還を祈っていましたが、もはや叶えようもない祈りを聞かされ続けるのはユノーにとってもつらいことでした。<br>
見かねた女神は哀れな妻に真実を知らせてやるべく、<a href="#area_iris" title="イリス" id="iris">イリス</a>を呼んでこう命じました。<br>
「眠りの神男<ruby lang="ja">ソムヌス<rp>(</rp><rt lang="la">Somnus</rt><rp>)</rp></ruby>のところへ行き、アルキュオネに亡きケユクスの夢を見せて事の次第を教えてやってくれるよう頼んでちょうだい」<br>
女王の命を受けたイリスが眠りの神であるソムヌスが住む洞窟を訪れていく... </p>
</div>
<p><br></p>
<h2 id="イリス"><span style="color: #3d8b3d;"><strong>イリス</strong></span><a class="anchorjs-link " href="#イリス" aria-label="Anchor" data-anchorjs-icon="" style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"></a></h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
<sup>５８３</sup>
〈<ruby>虹<rp>(</rp><rt>イリス</rt><rp>)</rp></ruby>〉女神はあまたの色で飾られた<ruby>衣<rp>(</rp><rt>ころも</rt><rp>)</rp></ruby>を身にまとい、大空に虹のような弧をえがきながら、いいつけられたとおり、雲のしたに隠れた王者の住居ヘ向かうのだ。</p>
<p><a href="https://ja.wikipedia.org/wiki/キンメリア人" title="https://ja.wikipedia.org/wiki/キンメリア人"><ruby lang="ja">キムメリア<rp>(</rp><rt lang="la">Cimmeria</rt><rp>)</rp></ruby>人</a>たちが住んでいるあたりにほど近く、<ruby>洞<rp>(</rp><rt>ほら</rt><rp>)</rp></ruby>になった山がある。
たいそう奧深い洞窟だが、ここが、<ruby>懶<rp>(</rp><rt>らん</rt><rp>)</rp>惰<rp>(</rp><rt>だ</rt><rp>)</rp></ruby>な〈眠り〉の神の住む奥殿だ。
ここには、朝も、夕暮れもおよそ一日のあいだじゅう、日がささない。
地面からは、雲霧が立ちのぼり、<ruby>朦<rp>(</rp><rt>もう</rt><rp>)</rp>朧<rp>(</rp><rt>ろう</rt><rp>)</rp></ruby>とした薄明がたちこめている。
ここでは、<ruby>鶏<rp>(</rp><rt>と</rt><rp>)</rp>冠<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>をいただいた鳥も、〈<ruby>曙<rp>(</rp><rt>アウロラ</rt><rp>)</rp></ruby>〉を呼ぶために鳴くことなく、油断ない番犬たちや、その犬よりも耳ざとい<ruby>鵞<rp>(</rp><rt>が</rt><rp>)</rp>鳥<rp>(</rp><rt>ちょう</rt><rp>)</rp></ruby>の声が静けさを破ることもない。</p>
<p><sup>６００</sup>
野獣も家畜も、風にそよぐ枝も、もの音をたてず、かまびすしい人語も聞こえはない。
ひっそりした静寂が住みついている所だ。
ただ、岩の底から「<ruby>忘却<rp>(</rp><rt>レーテ</rt><rp>)</rp></ruby>」の流れが湧き出していて、河床の小石のうえをさらさらとせせらぐ水のささやきがまどろみを誘っている。
洞窟の入ロには、たくさんの<ruby>罌<rp>(</rp><rt>け</rt><rp>)</rp>粟<rp>(</rp><rt>し</rt><rp>)</rp></ruby>が咲き、おびただしい草木が花をつけている。
それらの草の乳液から、露に濡れた「夜」が、眠りをあつめ、暗い地上にそれをふりまくのだ。</p>
<p><ruby>蝶<rp>(</rp><rt>ちょう</rt><rp>)</rp>番<rp>(</rp><rt>つがい</rt><rp>)</rp></ruby>の回転で、戸がきしむこともない。
住居のどこ見ても、一つもない。入るところに番人もいない。
しかし、中央に、黒檀でできた羽毛ぶとんのある黒<ruby>一色<rp>(</rp><rt>いっしょく</rt><rp>)</rp></ruby>な掛布で被われている寝台が置かれている。
そこには、何もしないことで重くなった手足の神が、横になっている。
彼のまわり、あちらこちらに、いろんな姿振りで、惑わす「夢想」が寝ころがっているが、そのたくさんなことといったら、まるで実った麦の穂が、森の木の枝か、海岸にある<ruby>真<rp>(</rp><rt>ま</rt><rp>)</rp>砂<rp>(</rp><rt>さご</rt><rp>)</rp></ruby>の数ほどもあるのだ。</p>
<p>乙女がここへはいった次第、手で邪魔となっていた夢たちをはらいのけながた、神聖なる住居と神は、女神の衣の輝やきで照はえた。</p>
<p><sup>６２０</sup>
〈眠り〉の神は、どろんと重たげな目を辛うじてあげ、何度も何度もうしろヘ倒れかかりながら、こくりこくりする<ruby>顎<rp>(</rp><rt>あご</rt><rp>)</rp></ruby>を<ruby>喉<rp>(</rp><rt>のど</rt><rp>)</rp>首<rp>(</rp><rt>くび</rt><rp>)</rp></ruby>のあたりにぶつけていたが、とうとう目をさますと、<ruby>片<rp>(</rp><rt>かた</rt><rp>)</rp>肱<rp>(</rp><rt>ひじ</rt><rp>)</rp></ruby>をついて起きあがり、用むきをたずねた。
女神の姿に気づいたからだ。
女神はこう語りかけた。</p>
<p>「万物を憩わせる〈眠り〉よ、このうえなくおだやかな神よ、心の安らぎよ！
あなたこそは、悩みを遠ざけ、苦しい仕事に疲れたからだを慰めて、つぎの仕事への備えをさせてくれるのです。
それはそうと、うまくほん物を真似ることのできる夢の幻を、ヘラクレスにゆかりのトラキスまで<ruby>寄<rp>(</rp><rt>よ</rt><rp>)</rp>越<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>していただけませんか。
難船したケユクス王の姿を借りて、アルキュオネに近づき、そのさまを写し出させてほしいのです。
いっておきますが、これはユノーさまのご命令です。」</p>
<p><sup>６３０</sup> ロ上をいい終えると、すぐに〈<ruby>虹<rp>(</rp><rt>イリス</rt><rp>)</rp></ruby>〉は立ち去った。
これ以上、眠気を我慢することができなかったからだ。
眠りが手足に忍びこんで来るのがわかると、急いで逃げ出し、先ほど通って来た虹の橋で、引き返えした。 <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
<p><span style="color: #3d8b3d;">オウィディウス、変身物語、第１１巻より</span>  </p>
<div class="notices green">
<dl>
<dt>その後、ソムヌスは、息子たちの中から夢の神<a href="https://ja.wikipedia.org/wiki/モルペウス" title="https://ja.wikipedia.org/wiki/モルペウス">モルペウス（フランス語で「モルフェ」）</a>を選んで、アルキュオネの元に派遣しました。  </dt>
<dt>モルペウスはケユクスそっくりに身を変えて彼女の夢枕に立つと、こう告げました。  </dt>
<dd>「愛しい妻よ、私はおまえの危惧した通り嵐に遭って死んでしまった。どうか私の死を嘆き、葬儀を執り行っておくれ。このままではつつがなく死の国に赴くことも出来ない」。</dd>
</dl>
<p>あまりのことに飛び起きたアルキュオネは悲しみに狂乱し、自分も入水して夫の後を追おうと浜辺に駆けていきますが、そこで波に揺られて流れ着いた夫の遺体と遭遇します。<br>
身も世もあらず悲嘆する彼女の姿が神々の同情を買い、２人は<a href="https://ja.wikipedia.org/wiki/カワセミ" title="https://ja.wikipedia.org/wiki/カワセミ"><ruby>翡<rp>(</rp><rt>カワ</rt><rp>)</rp>翠<rp>(</rp><rt>セミ</rt><rp>)</rp></ruby></a>に姿を変えられるのだ。  </p>
</div>
<div class="notices green">
<h3 id="絵画の題名について：">絵画の題名について：<a class="anchorjs-link " href="#絵画の題名について：" aria-label="Anchor" data-anchorjs-icon="" style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"></a></h3>
<p>１７世紀に、絵画は 《イリスの近づきに目覚めるモルフェ》 （《イリスとモルフェ》） と名付けられたが、以上で明らかになっている通り、この題名は、 「変身物語」 で書かれている話と合わせて考えると、矛盾が生じると否定できない。<br>
文書だと、<a href="https://ja.wikipedia.org/wiki/イーリス" title="https://ja.wikipedia.org/wiki/イーリス">イリス</a>が眠りの神のソムヌスの洞窟を訪れることになっていることが、絵画の題名では<a href="#area_morpheus" title="モルペウス" id="morpheus"><ruby lang="ja">モルフェ<rp>(</rp><rt lang="fr">Morphée</rt><rp>)</rp></ruby></a>になってしまっていることから、 《イリスとソムヌス》 との題名のほうが適切だと断言できる。<br>
モルペウスはソムヌスの息子である。物語の続きが示すように、イリスの命令を受けた父はイリスの任務を遂行しに行くように彼を指示する。  </p>
</div>
</div>
`;

  

  let focusEditor;
  let showEditorState = true;
  let editorState = createExtendedRichTextEditor(html);

  function handleChange(event) {
    editorState = event.detail.editorState;
  }

  function clearEditor(event) {
    editorState = clear(editorState);
    focusEditor();
  }

  function resetEditor(event) {
    editorState = createExtendedRichTextEditor(html);
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