<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="yellow">ペルセウス</h1>
<figure><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee_700x869.webp 700w" type="image/webp"></source><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee_700x869.jpg 700w"></source><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus_700x763.webp 700w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus_700x763.jpg" alt="ジャン・モニエ、《ペルセウスとアンドロメダ》" title="ジャン・モニエ、《ペルセウスとアンドロメダ》" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus_700x763.jpg 700w"></picture><figcaption>岩に鎖で付けられたアンドロメダを救おうとするペルセウス</figcaption></figure>
<div class="notices yellow">
<p><a href="https://ja.wikipedia.org/wiki/シュヴェルニー城" title="https://ja.wikipedia.org/wiki/シュヴェルニー城"><ruby>シュヴェルニー城<rp>(</rp><rt>le&#160;Château&#160;de&#160;Cheverny</rt><rp>)</rp></ruby></a>の二階にある王の寝室の天井に、<ruby lang="ja">ジャン<rp>(</rp><rt lang="fr">Jean</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>モニエ<rp>(</rp><rt lang="fr">Monier</rt><rp>)</rp></ruby lang="ja">画家が古代ギリシャ神話の英雄<a href="https://ja.wikipedia.org/wiki/ペルセウス" title="https://ja.wikipedia.org/wiki/ペルセウス"><ruby lang="ja">ペルセウス<rp>(</rp><rt lang="la">Perseus</rt><rp>)</rp></ruby lang="ja"></a>の生拝を語るさまざまな絵がある。<br>
そのなか、《<ruby lang="ja">ペルセウス<rp>(</rp><rt lang="fr">Persée</rt><rp>)</rp>と<rp>(</rp><rt lang="fr">et</rt><rp>)</rp>アンドロメダ<rp>(</rp><rt lang="fr">Andromède</rt><rp>)</rp></ruby lang="ja">》も見えている。<br>
この作品の元に、ローマ帝国時代に生きたラテン語で書いた作家の<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス"><ruby lang="ja">オウィディウス<rp>(</rp><rt lang="la">Ovidius</rt><rp>)</rp></ruby lang="ja"></a> による、一番有名な作品である『<a href="https://ja.wikipedia.org/wiki/変身物語" title="https://ja.wikipedia.org/wiki/変身物語"><ruby lang="ja">変身物語<rp>(</rp><rt lang="la">Metamorphōseōn&#160librī</rt><rp>)</rp></ruby lang="ja"></a>』の第４巻末の絵画と同題章がある。<br>
突然、<a href="https://ja.wikipedia.org/wiki/エチオピア" title="https://ja.wikipedia.org/wiki/エチオピア"><ruby lang="ja">エチオピア<rp>(</rp><rt lang="am">የኢትዮጵያ</rt><rp>)</rp></ruby lang="ja"></a>の空を飛んでいたペルセウスは、岩に鎖で付けられた<a href="https://ja.wikipedia.org/wiki/アンドロメダ" title="https://ja.wikipedia.org/wiki/アンドロメダ">アンドロメダ</a>を出会うことから始まるこの物語をお楽しみください！</p>
</div>
<p><br></p>
<h2 class="notices yellow">ペルセウスとアンドロメダ</h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"/></svg></span>
<sup>６６３</sup>
風神アイオロスは、すでに風たちを<ruby>永<rp>(</rp><rt>えい</rt><rp>)</rp>劫<rp>(</rp><rt>ごう</rt><rp>)</rp></ruby>の獄につないでいた。
人びとを一日の仕事へと駆り立てる「明けの明星」が、ひときわ明るく輝いて、<ruby>高<rp>(</rp><rt>たか</rt><rp>)</rp>空<rp>(</rp><rt>そら</rt><rp>)</rp></ruby>にのぼった。
ペルセウスは、翼のついたサンダルを取りあげて、再足に結びつけ、<ruby>鉤<rp>(</rp><rt>かぎ</rt><rp>)</rp></ruby>なりの剣を腰につけると、足の翼を動かして、澄みきった大気を分ける。
無数の国々が、あたりにひろがって、眼下に置き去りにされて行く。
やがて、ケペウスが支配するエチオピアの住民と田野とが、視野にはいる。</p>
<p>ここでは、罪もないアンドロメダが、神アムモンの命令で、不当にも、母親の暴言を<ruby>償<rp>(</rp><rt>つぐな</rt><rp>)</rp></ruby>わせられていた。
乙女が荒い岩に再腕をつながれているのが、ペルセウスの目にうつった。
そよ風が乙女の髪の毛をゆり動かし、その目が熱い涙であふれていなかったなら、大理石の像だと思ったことだろう。
見るより早く、われ知らず彼の心は燃えあがった。
並はずれて美しい姿に呆然として、翼を空中にふり動かすのを忘れそうになったぐらいだ。
地上に降り立つとこういった、<br>
「おお、そんな鎖にはふさわしくないあなただ。
慕い合う恋人とうしを結び<br>
<sup>６８０</sup>
つける、目に見えぬ鎖こそがふさわしいのに。
お願いだ、生国の名と、あなたの名前とを明かしてほしい！
それに、どうして鎖につながれていらっしゃるがを！」</p>
<p>彼女は、最初は黙っていた。
うら若い乙女の身で、男に話しかけるのをはばかったからだ。
もし縛りつけられていなかったなら、純潔な頬を手で覆ったことだろう。
ただ、湧き出る涙で両の目をいっぱいにした。
できることは、それしかなかったのだ。
だが、しきりにうながされると、みずからの不始末を告白したくないのだと思われても困るので、自分の名と国の名を告げ、さらに、母親がどれだけ美貌を鼻にかけていたかを語り聞かせた。
その話しのすべてが終わらないうちに、海鳴りがとどろいた。
怪獣の来襲だ。
<ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp>海<rp>(</rp><rt>うみ</rt><rp>)</rp></ruby>のうえに立ちはだかって、胸で海原を覆っている。</p>
<p>乙女は、悲鳴をあげる。
悲しげな父親と、母親とが駈け寄る。
ふたりとも、惨めな思いだが、母親のほうがそうなのは、いっそう当然だ。
自分たちではどうしてやれず、涙にがきくれながら、胸を打ちたたき、縛られた娘のからだにしがみついている。
そのとき、旅がらすのペルセウスがこういった。</p>
<p>「ばあいによっては、あなたがたは、いつまでも泣きつづけなければならぬかもしれません。
が、娘ごをお助けするのは、いまのこのひと時です。
ユピテルを父として、そのユピテルが黄金の雨となってみごもらせた、監禁中のタナエを母として生まれたこのペルセウスー蛇髪のメドゥーサを退治し、翼を動かして、勇ましくも天空を駆けて来たこのペルセウスが、娘ごを所望したなら、きっと、わたしは、誰をも押しのけて花婿にと選ばれるでしょう。
が、かくも多くのほまれのうえに、さらにひとつの<ruby>勲<rp>(</rp><rt>いさおし</rt><rp>)</rp></ruby>をつけ加えたいと思うのです。
もっとも、それには神助が必要でしょう。<br>
<sup>７００</sup>
ともかく、わたしの勇気によって娘ごが救われたなら、娘ごを<ruby>頂<rp>(</rp><rt>ちょう</rt><rp>)</rp>戴<rp>(</rp><rt>だい</rt><rp>)</rp></ruby>するーーこのことで合意しましょう」</p>
<p>両親は、この条件を受けいれた。
思うに、ここで<ruby>躊<rp>(</rp><rt>ちゅう</rt><rp>)</rp>躇<rp>(</rp><rt>ちょ</rt><rp>)</rp></ruby>する者は誰もいまい。
ふたりは、ひたすら懇願し、くわえて領国を持参金にしようと約束する。</p>
<p>見ると、どうだろう！ 快足の船が汗みどろな若者たちの腕で漕ぎ進められ、ヘさきについた<ruby>働<rp>(</rp><rt>しょう</rt><rp>)</rp>角<rp>(</rp><rt>かく</rt><rp>)</rp></ruby>で波を分けるように、怪獣は、胸をぶっけて波を分けている。
バレアレスの島民の、名にし負う<ruby>弩<rp>(</rp><rt>いしゆみ</rt><rp>)</rp></ruby>が回転する鉛弾を放ったばあいの、その射程距離くらいの<ruby>間<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>を置いて、怪獣が<ruby>巌<rp>(</rp><rt>いわお</rt><rp>)</rp></ruby>に近づいたとき、突然若者は足で地を蹴って、空高い雲のなかへ飛びあがった。
海原のおもてにその影が映ると、獣は荒しくその影を襲った。
そして、ユピテルの愛鳥である<ruby>鷲<rp>(</rp><rt>わし</rt><rp>)</rp></ruby>が、青黒い背に日を浴びている蛇を広野に発見して、背後からつかみかかり、狂暴な敵の<ruby>牙<rp>(</rp><rt>きば</rt><rp>)</rp></ruby>がうしろへねじむけられはしないように、<ruby>鱗<rp>(</rp><rt>うろこ</rt><rp>)</rp></ruby>におおわれた蛇の頸に、血に飢えた爪を突き通すーー<br>
<sup>７２０</sup>
ちょうどそのように、ペルセウスはまっさかさまに虚空を舞いおりて、<ruby>唸<rp>(</rp><rt>うな</rt><rp>)</rp></ruby>り声をあげている獣の背を襲い、<ruby>柄<rp>(</rp><rt>つか</rt><rp>)</rp></ruby>も通れと、剣をその右肩に突き刺した。</p>
<p><ruby>深<rp>(</rp><rt>ふか</rt><rp>)</rp>傷<rp>(</rp><rt>で</rt><rp>)</rp></ruby>を負った怪獣は空中高くつっ立ったり、水にもぐったり、あるいは、まわりから犬の群に吠えたてられて恐れをなした<ruby>獰<rp>(</rp><rt>どう</rt><rp>)</rp>猛<rp>(</rp><rt>もう</rt><rp>)</rp></ruby>な<ruby>猪<rp>(</rp><rt>いのしし</rt><rp>)</rp></ruby>さながらに、あばれ回る。
ペルセウスは、あるいは、尾が大そう細くなって魚の尻尾のようになっているあたりであれ、むき出しになったところなら、ところがまわずに、<br>
<ruby>鉤<rp>(</rp><rt>かぎ</rt><rp>)</rp></ruby>なりに曲がった剣で切りつける。
怪獣は、<br>
<ruby>紅<rp>(</rp><rt>くれない</rt><rp>)</rp></ruby>の血の混じった<ruby>潮<rp>(</rp><rt>しお</rt><rp>)</rp>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby>をロから吐く。
そのしぶきで、ペルセウスの翼が濡れて重くなった。
れを吸ったこのサンダルを、これ以上あてにすることはできなかったが、ふと見ると、岩がある。
波が立たなければ、頭を出しているが、海が騒げば隠れてしまう。
この岩に石を乗せて、その背の端を左手でつかまえながら、３度、４度と繰り返して、獣の下腹に剣をさし通した。</p>
<p>拍手と歓呼が海辺にあふれ、空高い神々の宮居にまでとどいた。
母カッシオペと父親ケペウスは大喜びし、<ruby>婿<rp>(</rp><rt>むこ</rt><rp>)</rp></ruby>としてのペルセウスに敬意を表し、彼を、家の頼りであり、救い主であると宣言した。
この怪獣退治の<ruby>褒<rp>(</rp><rt>ほう</rt><rp>)</rp>賞<rp>(</rp><rt>しょう</rt><rp>)</rp></ruby>であり、その原因でもあった乙女も、鎖を解かれて、進み出る。</p>
<p><sup>７４０</sup>
ペルセウスは、勝利をからとったその手を、汲んだ水で洗った。
そして、蛇髪の<ruby>頭<rp>(</rp><rt>こうべ</rt><rp>)</rp></ruby>を固い砂地で傷つけないようにと、葉を敷いて地面を柔らかくして、海草の技を散らてから、そのうえにメドゥーサの首をのせた。
と、髄に水を含んでまだ生き生きしていた新鮮な枝が、怪女の魔力にかかり、この首に触れたかとおもうと、固くなって、枝の部分も葉の部分も、不思議な硬直のさまを呈した。</p>
<p>さて、この驚くべき現象について、海の<ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby>たちが、もっと多くの枝で実験を試みた。
すると、やはり同じ結果が生じる。
これに大喜びした彼女たちは、その海草の種子を、いくども波にまきちらした。
こうして、今もなお、<ruby>珊<rp>(</rp><rt>さん</rt><rp>)</rp>瑚<rp>(</rp><rt>ご</rt><rp>)</rp></ruby>にはこの同じ性質が残っている。<br>
<sup>７６４</sup>
大気に触れると硬直し、水中では柔らかかった枝が、海から引きあげられると、石のように固くなるのだ。
<span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"/></svg></span>  </p>
<p><span style="color: #df8a13;">オウィディウス、変身物語、第４巻末、６６３～より</span></p>
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