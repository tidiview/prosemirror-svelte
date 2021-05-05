<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:165 EN:197  -->

<article>

<hgroup>
<h2 class="yellow"><ruby lang="ja">大トリアノン宮殿<rp>（</rp><rt lang="fr">le&#160;Grand&#160;Trianon</rt><rp>）</rp></ruby>での</h2>
<h1 class="yellow">フロラ</h1>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore_700x1152.webp 700w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore_700x1152.jpg" title="ヴェルサイユの大トリアノン宮殿にある、ジャン・ジューヴェネ、《フロラとゼフィルス》絵画" alt="ヴェルサイユの大トリアノン宮殿にある、ジャン・ジューヴェネ、《フロラとゼフィルス》絵画" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore_700x1152.jpg 700w" id="zephyr_et_flore"></picture><figcaption>〈<cite>フロラとゼフィルス</cite>〉<br>フロラに花の連なりの籠を差し出すゼフィルス<br><q cite="#flore-et-zephyr" style="quotes:'「' '」';">貴女に女神よ、花の主権を</q>、<cite>祭暦</cite>、第五巻、２１２行。</figcaption>
</figure>

<div class="notices yellow">
<p><a href="https://ja.wikipedia.org/wiki/大トリアノン宮殿" title="https://ja.wikipedia.org/wiki/大トリアノン宮殿"><ruby lang="ja">大トリアノン宮殿<rp>（</rp><rt lang="fr">le&#160;Grand&#160;Trianon</rt><rp>）</rp></ruby></a>に展示されている<a href="http://www.louvre.fr/jp/rooms/フランス　ルイ14世の画家の間" title="http://www.louvre.fr/jp/rooms/フランス_ルイ１４世の画家の間"><ruby>ジャン<rp>（</rp><rt>Jean</rt><rp>）</rp>・<rp>（</rp><rt></rt><rp>）</rp>ジューヴネ<rp>（</rp><rt>JOUVENET</rt><rp>）</rp></ruby></a>が描いた<a href="/docs/ja/versailles/trianon/flore#zephyr_et_flore" title="フロラとゼフィルス">〈<cite><ruby lang="ja">フロラ<rp>（</rp><rt lang="fr">Flore</rt><rp>）</rp>と<rp>（</rp><rt lang="fr">et</rt><rp>）</rp>ゼフィルス<rp>（</rp><rt lang="fr">Zéphyr</rt><rp>）</rp></ruby></cite>〉</a>絵画が「<ruby lang="ja">涼みの間<rp>（</rp><rt lang="fr">le&#160;Salon&#160;Frais</rt><rp>）</rp></ruby>」に見られます。</p>
<p>川沿いで、花の冠をかぶせようとしているひとりの天使や身を清めている<a href="https://ja.wikipedia.org/wiki/ニュンペー" title="https://ja.wikipedia.org/wiki/ニンフ"><ruby>妖精<rp>（</rp><rt>ニンフ</rt><rp>）</rp></ruby>たち</a>が近くに、何ともいえない春が漂う雰囲気なかで、<a href="/docs/ja/versailles/trianon/flore#note_zephyrus" title="ゼフィルス" id="zephyrus_4">西の<ruby>微<rp>（</rp><rt>そよ</rt><rp>）</rp>風<rp>（</rp><rt>かぜ</rt><rp>）</rp></ruby></a>である羽が付いている男のひと<a href="/docs/ja/versailles/trianon/flore#note_zephyrus" title="ゼフィルス" id="zephyrus"><ruby lang="ja">ゼフィルス<rp>（</rp><rt lang="la">Zephyrus</rt><rp>）</rp></ruby></a>は、美しい女の人、<a href="/docs/ja/versailles/trianon/flore#note_flora" title="フロラ女神" id="flora"><ruby lang="ja">フロラ<rp>（</rp><rt lang="la">Flora</rt><rp>）</rp></ruby></a>に花の籠を差し出しています。</p>
<p>この部屋のために<a href="https://ja.wikipedia.org/wiki/1688年" title="https://ja.wikipedia.org/wiki/１６８８年"><time datetime="1688">１６８８年</time></a>に<a href="https://ja.wikipedia.org/wiki/ルイ14世_(フランス王)" title="https://ja.wikipedia.org/wiki/ルイ１４世"><ruby lang="ja">ルイ<rp>（</rp><rt lang="fr">Louis</rt><rp>）</rp>十四世<rp>（</rp><rt lang="fr">quatorze</rt><rp>）</rp></ruby></a>に注文されたこの絵画は、ローマ皇帝文学作家<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス"><ruby lang="ja">オウィディウス<rp>（</rp><rt lang="la">Ovidius</rt><rp>）</rp></ruby></a>が著わした「<a href="https://ja.wikipedia.org/wiki/オウィディウス#.E3.80.8E.E7.A5.AD.E6.9A.A6.E3.80.8F" title="https://ja.wikipedia.org/wiki/オウィディウス#祭暦"><cite><ruby lang="ja">祭暦<rp>（</rp><rt lang="la">Fasti</rt><rp>）</rp></ruby></cite></a>」にある文書から、史料によって知られています。</p>
<p><a href="https://ja.wikipedia.org/wiki/オウィディウス#.E3.80.8E.E7.A5.AD.E6.9A.A6.E3.80.8F" title="https://ja.wikipedia.org/wiki/オウィディウス#祭暦">祭暦</a>において、<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>が<a href="https://ja.wikipedia.org/wiki/ローマ暦" title="https://ja.wikipedia.org/ローマ暦">ローマ<ruby>暦<rp>（</rp><rt>こよみ</rt><rp>）</rp></ruby></a>を季節に応じて、天文や農事に関する行事や祭りを描きながら、自らを暦に司る司祭として自己言及し、あれこれ語るため、神々に直接お話しを聞くという文学的仕掛けが用いられています。</p>
<p><a href="/docs/ja/versailles/trianon/flore#note_flora" title="フロラ女神" id="flora_2">フロラ</a>が登場するこの第五巻ともなっている、同時に<time datetime="05-01">五月</time>に当たる以下の文書でも、<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>が女神に直接話しを掛けながら、<a href="/docs/ja/versailles/trianon/flore#183" title="１８３行" id="retour_183">１８３行から１９２行まで</a>始まっています。</p>
<p>彼はまず彼女自身と彼女を記念する<time datetime="04-30">四月末</time>と<time datetime="05-01">五月の頭</time>に行なわれる<a href="/docs/ja/versailles/trianon/flore#note_floralia" title="祭り" id="floralia"><ruby lang="ja">フロラリア<rp>（</rp><rt lang="la">Floralia</rt><rp>）</rp></ruby>祭り</a>について情報を求めている。</p>
<p>絵画で表されている場面と直接な関係が視覚的に見えないのに、女神の魅力と神秘の意義、また<a href="http://www.louvre.fr/jp/rooms/フランス　ルイ14世の画家の間" title="http://www.louvre.fr/jp/rooms/フランス_ルイ１４世の画家の間">ジャン・ジューヴネ</a>の表しをより把握する為に役に立ちます。
それで、<a href="/docs/ja/versailles/trianon/flore#note_flora" title="フロラ女神" id="flora_3">フロラ</a>は、答えとして、自分を「<a href="/docs/ja/versailles/trianon/flore#note_chloris" title="クロリス" id="chloris"><ruby lang="ja">クロリス<rp>（</rp><rt lang="la">Chloris</rt><rp>）</rp></ruby></a>」と名のる至福者たちの島出身、<a href="/docs/ja/versailles/trianon/flore#note_zephyrus" title="ゼフィルス" id="zephyrus_2">ゼフィルス</a>を戸惑う美しさを持つ<a href="https://ja.wikipedia.org/wiki/ニュンペー" title="https://ja.wikipedia.org/wiki/ニンフ"><ruby>妖精<rp>（</rp><rt>ニンフ</rt><rp>）</rp></ruby></a>のひとりとして同一視しながら、自分を紹介しています。</p>
<p>彼は彼女を誘拐して、自分の嫁にさせて、そして女神として、花の主権を与えられたことも<a href="/docs/ja/versailles/trianon/flore#193" title="１９３行" id="retour_193">１９３行から２２２行までに</a>語られていると同時に、フロラが伝統的に、春、美しさ、活気に満ちた<a href="/docs/ja/versailles/trianon/flore#note_hora" title="女神ホラたち" id="heures"><ruby lang="ja">ホラ<rp>（</rp><rt lang="la">Hora</rt><rp>）</rp></ruby>神女たち</a>と<a href="/docs/ja/versailles/trianon/flore#note_charis" title="女神カリスたち" id="graces"><ruby lang="ja">カリス<rp>（</rp><rt lang="la">Charis</rt><rp>）</rp></ruby>神女たち</a>に囲まれている姿が表されていることになります。</p>
</div>

<h2 id="flore-et-zephyr" class="yellow">「<cite><ruby lang="ja">祭暦<rp>（</rp><rt lang="la">Fasti</rt><rp>）</rp></ruby></cite>」において〈<cite>フロラとゼフィルス</cite>〉</h2>

<ol class="doc">
  <li value="183" id="183">お花のお母さま、来て下され、喜ばしい遊びであなたを喜ばせましょう。</li>
  <li>花の母なる<a href="/docs/ja/versailles/trianon/flore#note_flora" title="フロラ女神" id="flore">女神</a>よ、おいで下さい。</li>
  <li>愉快な<a href="/docs/ja/versailles/trianon/flore#note_floralia" title="祭り" id="floralia_2">祭り</a>でお祝いしましょう。</li>
  <li>私はあなたを歌うときを先月から遅らせていました。</li>
  <li>あなたの祝祭が<a href="/docs/ja/versailles/trianon/flore#note_floralia_2" title="アプリリウス月" id="aprilius"><ruby lang="ja">アプリリウス<rp>（</rp><rt lang="la">Aprilius</rt><rp>）</rp></ruby>月</a>に始まって<a href="/docs/ja/versailles/trianon/flore#note_floralia_2" title="マイユス月" id="maius"><ruby lang="ja">マイユス<rp>（</rp><rt lang="la">Maius</rt><rp>）</rp></ruby>月</a>にまで及ぶからです。</li>
  <li>先の月では月の終わり際に、のちの月では月の始まりとともに、あなたの祝祭があります。</li>
  <li>月と月の境があなたのためにあり、あなたに捧げられているのですから、２つの月のどちらもあなたを讃えるにふさわしいのです。</li>
  <li value="189">「競技も、観客席の<ruby>喝采<rp>（</rp><rt>かっさい</rt><rp>）</rp></ruby>が決める勝利の冠も<a href="/docs/ja/versailles/trianon/flore#note_chloris" title="クロリス">今月</a>のことですから、この歌のことですから、この歌も競技場の催しと進行を同じくしましょう。</li>
  <li>どうか、あなたがどのような女神か、御自身で教えて下さい。</li>
  <li>ひとびとの考えは当てになりません。</li>
  <li>御自分の名前を説明されるのはあなた御自身が最適ですから」。</li>
  <li value="193" id="193">このようにわたしが申しますと、私の問いに女神はこう答えました。</li>
  <li>女神が話すと、口からは涼しい<ruby>薔<rp>（</rp><rt>ば</rt><rp>）</rp>薇<rp>（</rp><rt>ら</rt><rp>）</rp></ruby>の<ruby>息<rp>（</rp><rt>い</rt><rp>）</rp>吹<rp>（</rp><rt>ぶき</rt><rp>）</rp></ruby>が洩れました。</li>
  <li value="195">
    <p class="conversation">「いままでこそ<a href="/docs/ja/versailles/trianon/flore#note_flora" title="フロラ女神" id="flora_5"><mark>フロラ</mark></a>と呼ばれる私も、かつて<a href="/docs/ja/versailles/trianon/flore#note_chloris" title="クロリス" id="chloris_2">クロリス</a>と言っていました。</p>
  </li>
  <li>
    <p class="conversation">私の名前にあるギリシャの字がラテン語での発音によって害われることになって、私は、至福者たちが昔暮らしたといわれている恵まれ諸島の<ruby>妖精<rp>（</rp><rt>ニンフ</rt><rp>）</rp></ruby>のでしたもの。</p>
  </li>
  <li>
    <p class="conversation">私の容姿がどのであったかなど、おこがましくてとても話せませんが、母が神様の婿殿を見つけて下さったのはこの容姿のためでした。</p>
  </li>
  <li value="201">
    <p class="conversation">春のこと、そぞろ歩きをしている私が<a href="/docs/ja/versailles/trianon/flore#note_zephyrus" title="ゼフィルス" id="zephyrus_3"><mark>ゼフィルス</mark></a>の目に止まりました。</p>
  </li>
  <li>
    <p class="conversation">私は引き返そうとしました。</p>
  </li>
  <li>
    <p class="conversation">が、<a href="/docs/ja/versailles/trianon/flore#note_zephyrus" title="ゼフィルス" id="zephyrus_5"><mark>ゼフィルス</mark></a>は追いかけて来ます。</p>
  </li>
  <li>
    <p class="conversation">私は逃げます。</p>
  </li>
  <li>
    <p class="conversation">けれども、あちらの力のほうが強いうえに、兄弟の<a href="/docs/ja/versailles/trianon/flore#ref_boree" title="ボレアス" id="boree"><ruby lang="ja">ボレアス<rp>（</rp><rt lang="la">Boreas</rt><rp>）</rp></ruby></a>の前例があるので、娘をさらうのは天下御免であったのです。</p>
  </li>
  <li>
    <p class="conversation"><a href="/docs/ja/versailles/trianon/flore#ref_boree" title="ボレアス" id="boree_2">ボレアス</a>はなんと<a href="/docs/ja/versailles/trianon/flore#note_erecteus" title="エレクテウス" id="erechthee"><ruby lang="ja">エレクテウス<rp>（</rp><rt lang="la">Erechtheus</rt><rp>）</rp></ruby></a>の家から獲物を持ち去ったのでした。</p>
  </li>
  <li value="205">
    <p class="conversation">とはいえ、力ずくでしたことの償いに、彼は私に正妻の名をくれました。</p>
  </li>
  <li>
    <p class="conversation">今この結婚に私はなんの不平もありません。</p>
  </li>
  <li>
    <p class="conversation">私はいつも春を<ruby>謳<rp>（</rp><rt>おう</rt><rp>）</rp>歌<rp>（</rp><rt>か</rt><rp>）</rp></ruby>しています。</p>
  </li>
  <li>
    <p class="conversation">いつでも一年でもっとも輝かしい季節、木々には葉が繋がり、大地はいつも牧草がおおいます。</p>
  </li>
  <li>
    <p class="conversation">そして野には私の婚資である実り豊かな庭があります。</p>
  </li>
  <li>
    <p class="conversation">そよ風が<ruby>育<rp>（</rp><rt>はぐく</rt><rp>）</rp></ruby>み、泉から湧く澄み切った水が<ruby>灌<rp>（</rp><rt>かん</rt><rp>）</rp>漑<rp>（</rp><rt>がい</rt><rp>）</rp></ruby>しています。</p>
  </li>
  <li>
    <p class="conversation">私の夫はこの庭を優雅な花で満たし、<span style="color: #df8a13;">「貴女に女神よ、花の主権を」</span>と言ってくれました。</p>
  </li>
  <li value="213">
    <p class="conversation">何度も私は、いったい何色あるのかと、並んだ花を数えたいと思いましたが、出来ませんでした。</p>
  </li>
  <li>
    <p class="conversation">数が及ばないほどたくさんだったのです。</p>
  </li>
  <li>
    <p class="conversation">朝露の滴が葉からこぼれ落ち、色とりどりの草花が陽の光に暖かめられるや、ただちに<ruby>彩<rp>（</rp><rt>いろどり</rt><rp>）</rp></ruby>鮮やかな衣を身にまとった<a href="/docs/ja/versailles/trianon/flore#note_hora" title="女神ホラたち" id="heures_2"><span style="color: #df8a13;">季節神女ホラたち</span></a>が集まり、<span style="color: #df8a13;">私からの寄付を籠に摘んでゆきます</span>。</p>
  </li>
  <li value="220">
    <p class="conversation">それにすぐさま優雅の<a href="/docs/ja/versailles/trianon/flore#note_charis" title="女神カリスたち" id="graces_2"><span style="color: #df8a13;">神女カリスたち</span></a>も加わって、<span style="color: #df8a13;">冠を編み、編んだ冠を自分の神々しい髪に結ぼうとします</span>。」</p>
  </li>
</ol>

<footer>
<p><span style="color: #df8a13;">オウィディウス、<cite>祭暦</cite>、第五巻、１８３行から２２０行までより</span></p>
</footer>


<aside>

<h3 class="yellow">註釈</h3>

<h4 id="note_flora" class="yellow note">フロラ</h4>

<div class="notices yellow">
<h5><ruby lang="ja">フロラ<rp>（</rp><rt lang="la">Flora</rt><rp>）</rp></ruby>の名とは？</h5>
<h6>発音</h6>
<p>正式には、ラテン語では長母音があるため、「<ruby lang="ja">フローラ<rp>（</rp><rt lang="la">Flōra</rt><rp>）</rp></ruby>」という名前ですが、一般的に、長母音を略する「フロラ」と表記される。</p>
<h6>由来</h6>
<p><ruby lang="ja">フローラ<rp>（</rp><rt lang="la">Flōra</rt><rp>）</rp></ruby>は、「<ruby lang="ja">花<rp>（</rp><rt lang="la">Flos</rt><rp>）</rp></ruby>」（発音：フロス）が活用された言葉に当たって、「<ruby>花<rp>（</rp><rt>はな</rt><rp>）</rp></ruby>」とう意味を示しています。</p>
<h5>女神として</h5>
<h6>フロラとは？</h6>
<p>フロラは、農業生産を見守るローマ宗教の多く存在する女神の一つです。</p>
<p>「<ruby lang="ja">母神<rp>（</rp><rt lang="la">mater</rt><rp>）</rp></ruby>」の副名もあって、よくまた豊穣神とも見なされることがあります。</p>
<p><time datetime="1770">１７７０年</time>にイタリア中部、ローマ郊外の東、<a href="https://ja.wikipedia.org/wiki/パレストリーナ" title="https://ja.wikipedia.org/wiki/プラエネステ"><ruby lang="ja">プラエネステ<rp>（</rp><rt lang="la">Praeneste</rt><rp>）</rp></ruby></a>に発見された<a href="https://ja.wikipedia.org/wiki/ローマ暦" title="https://ja.wikipedia.org/ローマ暦">ローマ暦</a>を紹介するローマ皇帝時代の跡に書いているとおりに、「<a href="/docs/ja/versailles/trianon/flore#retour_sakaseru" title="一般的にものを咲かせることに司る" id="sakaseru">一般的にものを咲かせることに司る ↩</a>」春女神としてと、定義されています。</p>
<h6>古代ローマ帝国でのフロラ祭儀</h6>
<p>ローマ市内に神殿がありました。<a href="https://ja.wikipedia.org/wiki/クイリナーレ" title="https://ja.wikipedia.org/wiki/クィリナリス"><ruby lang="ja">クィリナリス<rp>（</rp><rt lang="la">Quirinalis</rt><rp>）</rp></ruby>丘</a>上に位置付けられていた。</p>
<p>毎日に祝福の祭儀はが神殿に「<a href="https://ja.wikipedia.org/wiki/古代ローマの公職#.E7.A5.9E.E5.AE.98.E8.81.B7" title="https://ja.wikipedia.org/wiki/古代ローマの公職#神官職"><ruby lang="ja">フラメン<rp>（</rp><rt lang="la">Flamen</rt><rp>）</rp>・<rp>（</rp><rt lang="la"></rt><rp>）</rp>フロラリス<rp>（</rp><rt lang="la">Floralis</rt><rp>）</rp></ruby></a>」という固有の神官だったフロラ司祭の一人から捧げられていたことも知られています。</p>
<p>一年一回、「<a href="/docs/ja/versailles/trianon/flore#note_floralia" title="祭り" id="floralia_3"><ruby lang="ja">フロラリア<rp>（</rp><rt lang="la">Floralia</rt><rp>）</rp></ruby>祭り</a>」もありました。</p>
</div>

<footer>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#flora" title="フロラ">美しい女の人、フロラ ↩</a></p>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#flora_2" title="フロラ">フロラが登場する ↩</a></p>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#flora_3" title="フロラ">それで、フロラそれで ↩</a></p>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#flore" title="女神">花の母なる女神よ ↩</a></p>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#flora_5" title="フロラ">フロラと呼ばれる私 ↩</a></p>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#flora_6" title="フロラ">フロラの侍女 ↩</a></p>
</footer>

<h4 id="note_chloris" class="yellow note">クロリス</h4>

<div class="notices yellow">
<h5><ruby lang="ja">クロリス<rp>（</rp><rt lang="la">Chloris</rt><rp>）</rp></ruby>の名とは？</h5>
<h6>発音</h6>
<p>正式には、古代ギリシャ語では長母音があるため、「<ruby lang="ja">クローリス<rp>（</rp><rt lang="la">Khlōris</rt><rp>）</rp></ruby>」という名前になりますが、古代ギリシャ語からラテン語まで書き写すと、「Kh」が「Ch」に交代されることがあるのと、一般的に、長母音を略されているため、「クロリス」と表記されるようと変わります。</p>
<h6>由来</h6>
<p>古代ギリシャ語で、<ruby lang="la">Khlōrís<rp>（</rp><rt lang="grc">Χλωρίς</rt><rp>）</rp></ruby lang="la">（発音：<ruby lang="ja">クローリス<rp>（</rp><rt lang="la">Khlōris</rt><rp>）</rp></ruby>）と書いて、<ruby lang="la">Khlōros<rp>（</rp><rt lang="grc">χλωρός</rt><rp>）</rp></ruby lang="la">（発音：<ruby lang="ja">クローロス<rp>（</rp><rt lang="la">Khlōros</rt><rp>）</rp></ruby>）語幹から出来ていて、「<ruby>緑<rp>（</rp><rt>みどり</rt><rp>）</rp></ruby>」と意味を表しています。</p>
<p>同じ語幹から、「<a href="https://ja.wikipedia.org/wiki/クロロフィル" title="https://ja.wikipedia.org/wiki/クロロフィル"><ruby lang="la">Khlôrophyl<rp>（</rp><rt lang="grc">χλωροφύλλη</rt><rp>）</rp></ruby lang="la"></a>」（発音：<ruby lang="ja">クローロフィル<rp>（</rp><rt lang="la">Khlōrophyl</rt><rp>）</rp></ruby>）があって、日本語の「<a href="/docs/ja/versailles/trianon/flore#chlorophylle" title="クロロフィル" id="renvoi_chlorophylle"><ruby lang="ja">クロロフィル<rp>（</rp><rt lang="fr">Chlorophylle</rt><rp>）</rp></ruby>&#11107;</a>」に当たる<ruby>葉<rp>（</rp><rt>よう</rt><rp>）</rp>緑<rp>（</rp><rt>りょく</rt><rp>）</rp>素<rp>（</rp><rt>そ</rt><rp>）</rp></ruby>を指しています。</p>
<h6>クロリスとは？</h6>
<p>「クロリス」という名前は、ギリシア神話では、ある<a href="https://ja.wikipedia.org/wiki/ニュンペー" title="https://ja.wikipedia.org/wiki/ニンフ"><ruby>妖精<rp>（</rp><rt>ニンフ</rt><rp>）</rp></ruby></a>の女性に当たります。</p>
<p>「<a href="https://ja.wikipedia.org/wiki/オウィディウス#.E3.80.8E.E7.A5.AD.E6.9A.A6.E3.80.8F" title="https://ja.wikipedia.org/wiki/オウィディウス#祭暦">祭暦</a>」においては、<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>が、<a href="/docs/ja/versailles/trianon/flore#note_floralia" title="祭り">フロラ</a>を、<a href="https://ja.wikipedia.org/wiki/クローリス" title="https://ja.wikipedia.org/wiki/クロリス">クロリス</a>という<a href="https://ja.wikipedia.org/wiki/ニュンペー" title="https://ja.wikipedia.org/wiki/ニンフ"><ruby>妖精<rp>（</rp><rt>ニンフ</rt><rp>）</rp></ruby></a>と折角同一視させているのは、<a href="https://ja.wikipedia.org/wiki/クローリス" title="https://ja.wikipedia.org/wiki/クロリス">クロリス</a>という語幹に「<ruby>緑<rp>（</rp><rt>みどり</rt><rp>）</rp></ruby>」、いわゆる、「<a href="/docs/ja/versailles/trianon/flore#flora-2" title="一般的にものを咲かせることに司る" id="retour_sakaseru">一般的にものを咲かせることに司る</a>」意が含まれているからでしょう。</p>
</div>

<footer>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#chloris" title="クロリス">自分をクロリスと名のる ↩</a></p>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#chloris_2" title="クロリス">クロリスと言っていました ↩</a></p>
</footer>

<h4 id="note_floralia" class="yellow note">フロラリア祭り</h4>

<div class="notices yellow">
<h6><ruby lang="ja">フロラリア<rp>（</rp><rt lang="la">Floralia</rt><rp>）</rp></ruby>祭りの名とは？</h6>
<p>「フロラリア」という祝祭は、田園ののどかな祭りとして始まった<a href="/docs/ja/versailles/trianon/flore#note_floralia" title="祭り">フロラ女神</a>の祭りです。</p>
<h5 id="note_floralia_2">日付</h6>
<p><a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>が「<a href="https://ja.wikipedia.org/wiki/オウィディウス#.E3.80.8E.E7.A5.AD.E6.9A.A6.E3.80.8F" title="https://ja.wikipedia.org/wiki/オウィディウス#祭暦">祭暦</a>」を作文する<time datetime="0050">紀元後１世紀前半時代</time>だと、<time datetime="04-28"><a href="https://ja.wikipedia.org/wiki/4月" title="https://ja.wikipedia.org/wiki/四月">４月</a>である<a href="https://ja.wikipedia.org/wiki/ローマ暦" title="https://ja.wikipedia.org/wiki/アプリーリス">アプリリウス月</a><a href="/docs/ja/versailles/trianon/flore#aprilius" title="アプリリウス月" id="note_aprilius">↩</a>の２８日</time>から、<time datetime="05-03">５月である<a href="https://ja.wikipedia.org/wiki/ローマ暦" title="https://ja.wikipedia.org/wiki/マーイウス">マイユス月</a><a href="/docs/ja/versailles/trianon/flore#maius" title="マイユス月" id="note_maius">↩</a>の３日まで</time>の<time datetime="P5D">５夜間</time>で行なわれていた。</p>
<h6>概要</h6>
<p>追いかけや、舞踏や身ぶりや悲劇的な演出が行われていたため、「フロラリア」は「<ruby lang="ja">花の祭典<rp>（</rp><rt lang="la">Ludi&#160;Florales</rt><rp>）</rp></ruby>」とも呼ばれていました。</p>
<p>ローマ舞踏のなかで、フロラのために出来た舞踏は、一番印象的だったといわれています。</p>
<p>元々、春の戻りで若者たちが喜びを表現することで、単純でしたが、そこから、全裸で性的行為のものまねにまで変わることがあって、不道徳性が指摘されることが出ました。</p>
<h6>場所</h6>
<p>追いかけは町市外に、「フロラの<ruby lang="ja">競技場<rp>（</rp><rt lang="la">circus</rt><rp>）</rp></ruby>」と呼ばれた<a href="https://ja.wikipedia.org/wiki/ヴィミナーレ" title="https://ja.wikipedia.org/wiki/ウィミナリス"><ruby lang="ja">ウィミナリス<rp>（</rp><rt lang="la">Viminalis</rt><rp>）</rp></ruby>丘</a>と<a href="https://ja.wikipedia.org/wiki/ピンチョの丘" title="https://ja.wikipedia.org/wiki/庭園の丘">庭園の丘</a> の間に位置づけられている小谷があった特別な競技場で行われていた。</p>
</div>

<footer>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#floralia" title="フロラリア">行なわれるフロラリア祭り ↩</a></p>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#floralia_2" title="フロラリア">愉快な祭り ↩</a></p>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#floralia_3" title="フロラリア">一年一回、フロラリア祭り ↩</a></p>
</footer>

<h4 id="note_zephyrus" class="yellow note">ゼフィルス</h4>

<div class="notices yellow">
<h5><ruby lang="ja">ゼフィルス<rp>（</rp><rt lang="la">Zephyrus</rt><rp>）</rp></ruby>の名とは？</h5>
<h6>発音</h6>
<p>ゼフィルスはラテン語での名前で、日本語の書き写しでは、古代ギリシャ語での呼称である「ゼピュルス」と発音するようになりましたが、ラテン語では正式な発音は、「ph」で「f」と同音のため、同時に、オヴィディウスはラテン語で書いていることに基づき、ここでは「ゼフィルス」で表記することにしました。</p>
<h6>由来</h6>
<p>名前の由来は古代ギリシャ神話からです。</p>
<p>古代ギリシャ神話だと、「<ruby lang="la">Zephyros<rp>（</rp><rt lang="grc">Ζέφυρος</rt><rp>）</rp></ruby lang="la">」（発音：<ruby lang="ja">ゼピュロス<rp>（</rp><rt lang="la">Zephyros</rt><rp>）</rp></ruby>） という神があります。</p>
<p>古代ギリシャ語からラテン語に書き写された祭、ラテン語っぽく「<ruby lang="ja">ゼフィルス<rp>（</rp><rt lang="la">Zephyrus</rt><rp>）</rp></ruby>」と書くようとなりました。</p>
<h5>神として</h5>
<p><a href="https://ja.wikipedia.org/wiki/アネモイ" title="https://ja.wikipedia.org/wiki/アネモイ"><ruby lang="la">Anemoi<rp>（</rp><rt lang="grc">Ἄνεμοι</rt><rp>）</rp></ruby lang="la">（発音：<ruby lang="ja">アネモイ<rp>（</rp><rt lang="la">Anemoi</rt><rp>）</rp></ruby>）</a>、古代ギリシア語では（複数形で）「<ruby>風<rp>（</rp><rt>かぜ</rt><rp>）</rp></ruby>たち」の意、という言葉があります。</p>
<p>ラテン語では、<ruby lang="ja">ヴェンティ<rp>（</rp><rt lang="la">Venti</rt><rp>）</rp></ruby>（意：「<ruby>風<rp>（</rp><rt>かぜ</rt><rp>）</rp></ruby>たち」）に当たります。</p>
<p>ギリシア神話では、主要な風は四柱いる。ゼフィルスの他だと：</p>

<ul>
  <li><a href="https://ja.wikipedia.org/wiki/アネモイ#.E5.8C.97.E9.A2.A8.E3.83.9C.E3.83.AC.E3.82.A2.E3.83.BC.E3.82.B9" title="https://ja.wikipedia.org/wiki/アネモイ#北風ボレアース" id="ref_boree"><ruby lang="la">Boreas<rp>（</rp><rt lang="grc">Βορέας</rt><rp>）</rp></ruby lang="la"></a>（発音：<ruby lang="ja">ボレアス<rp>（</rp><rt lang="la">Boreas</rt><rp>）</rp></ruby>）、ラテン語でも、ボレアスは冷たい冬の空気を運ぶ北風で、文書に戻る： <a href="/docs/ja/versailles/trianon/flore#boree" title="ボレアス">兄弟のボレアスの前例 ↩</a></li>
  <li>文書に戻る： <a href="/docs/ja/versailles/trianon/flore#boree_2" title="ボレアス">ボレアスはなんとエレクテウスの家から ↩</a></li>
  <li>文書に戻る： <a href="/docs/ja/versailles/trianon/flore#boree_3" title="ボレアス">北風のボレアスがエレクテウスの娘 &#11107;</a></li>
  <li><a href="https://ja.wikipedia.org/wiki/アネモイ#.E5.8D.97.E9.A2.A8.E3.83.8E.E3.83.88.E3.82.B9" title="https://ja.wikipedia.org/wiki/アネモイ#南風ノトス"><ruby lang="la">Notos<rp>（</rp><rt lang="grc">Νότος</rt><rp>）</rp></ruby lang="la"></a>（発音：<ruby lang="ja">ノトス<rp>（</rp><rt lang="la">Notos</rt><rp>）</rp></ruby>）、ラテン語では、<ruby lang="ja">ノテュス<rp>（</rp><rt lang="la">Notus</rt><rp>）</rp></ruby>は晩夏と秋の嵐を運ぶ南風であり、</li>
  <li><a href="https://ja.wikipedia.org/wiki/アネモイ#.E6.9D.B1.E9.A2.A8.E3.82.A8.E3.82.A6.E3.83.AD.E3.82.B9" title="https://ja.wikipedia.org/wiki/アネモイ#東風エウロス"><ruby lang="la">Euros<rp>（</rp><rt lang="grc">Εύρος</rt><rp>）</rp></ruby lang="la"></a>（発音：<ruby lang="ja">エウロス<rp>（</rp><rt lang="la">Euros</rt><rp>）</rp></ruby>）、ラテン語では、<ruby lang="ja">エウルス<rp>（</rp><rt lang="la">Eurus</rt><rp>）</rp></ruby>は東風であることにたいして、</li>
</ul>

<p>それにたいしては、ゼフィルスは西風の神で、最も温和なゼピュロスは、春の訪れを告げる豊穣の風として知られている。</p>
<h5>ゼフィルスとは？</h5>
<p><a href="https://ja.wikipedia.org/wiki/オウィディウス#.E3.80.8E.E7.A5.AD.E6.9A.A6.E3.80.8F" title="https://ja.wikipedia.org/wiki/オウィディウス#祭暦">祭暦</a>では、<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>によって、ゼフィルスは翼を備えた人間として、古典的に擬人化されて、登場しています。</p>
</div>

<footer>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#zephyrus_4" title="ゼフィルス">西の微風 ↩</a></p>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#zephyrus" title="ゼフィルス">羽が付いている男のひとゼフィルス ↩</a></p>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#zephyrus_2" title="ゼフィルス">ゼフィルスを戸惑う美しさ ↩</a></p>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#zephyrus_3" title="ゼフィルス">その昔に至福のひとびとが福裕に過ごしていた<ruby>国<rp>（</rp><rt>エリュジウム</rt><rp>）</rp></ruby>があった ↩</a></p>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#zephyrus_5" title="ゼフィルス">私がゼフィルスの目に止まりました ↩</a></p>
</footer>

<h4 id="note_hora" class="yellow note">季節ホラ女神たち</h4>

<div class="notices yellow">
<h5>季節女神<ruby lang="ja">ホラ<rp>（</rp><rt lang="la">Hora</rt><rp>）</rp></ruby>たちの名とは？</h5>
<h6>発音</h6>
<p><a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>の文書では、ホラはラテン語としての語です。</p>
<p>正式には、ラテン語では長母音があるため、「<ruby lang="ja">ホーラ<rp>（</rp><rt lang="la">Hōra</rt><rp>）</rp></ruby>」という書き写しが正しいなのに、一般的に、長母音を略する「<ruby lang="ja">ホラ<rp>（</rp><rt lang="la">Hora</rt><rp>）</rp></ruby>」で表記されている。 </p>
<h6>由来</h6>
<p>古代ギリシャ語の<ruby lang="la">Hōra<rp>（</rp><rt lang="grc">Ὧρα</rt><rp>）</rp></ruby lang="la">（発音：<ruby lang="ja">ホーラ<rp>（</rp><rt lang="la">Hōra</rt><rp>）</rp></ruby>）からそのまま来ています。
<ruby lang="ja">ホーラ<rp>（</rp><rt lang="grc">Hōra</rt><rp>）</rp></ruby>は単数形で、「<ruby>時<rp>（</rp><rt>じ</rt><rp>）</rp>間<rp>（</rp><rt>かん</rt><rp>）</rp></ruby>」との意を示しています。</p>
<h5>神として</h5>
<p><a href="https://ja.wikipedia.org/wiki/ホーラ" title="https://ja.wikipedia.org/wiki/ホラ">ホラ</a>は、神としまして、女神であって、時間の区分を擬人化を指しているのだが、普通は、各々の時間の対照性を現わす意で、複数形で、女神の交わりとして現れて来ます。</p>
<p><a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>の文書では、「季節神女ホラたち」で出て来るが、ラテン語だと、「季節神女」と「たち」の部分を省いて、ただ直接複数形が含まれている「<ruby lang="ja">ホーラエ<rp>（</rp><rt lang="la">Hōrae</rt><rp>）</rp></ruby>」で呼ばれています。</p>
<p>古代ギリシャ語でも、複数形を含む<ruby lang="la">Hōrai<rp>（</rp><rt lang="grc">Ὧραι</rt><rp>）</rp></ruby lang="la">（発音：<ruby lang="ja">ホーライ<rp>（</rp><rt lang="la">Hōrai</rt><rp>）</rp></ruby>）で同様です。
時代によって、人数が少しづつ２人から１２人まで増えたことも知られています。 </p>
<h6>季節神女ホラたちとは？</h6>
<p>「<a href="https://ja.wikipedia.org/wiki/オウィディウス#.E3.80.8E.E7.A5.AD.E6.9A.A6.E3.80.8F" title="https://ja.wikipedia.org/wiki/オウィディウス#祭暦">祭暦</a>」において、花を手にした優美な乙女の姿で表されて、<a href="/docs/ja/versailles/trianon/flore#note_flora" title="フロラ女神" id="flora_6">フロラ</a>の侍女たち。</p>
</div>

<footer>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#heures" title="女神ホラたち">活気に満ちたホラ神女たち ↩</a></p>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#heures_2" title="女神ホラたち">季節神女ホラたちが集まり ↩</a></p>
</footer>

<h4 id="note_charis" class="yellow note">カリス女神</h4>

<div class="notices yellow">
<h5>女神<ruby lang="ja">カリス<rp>（</rp><rt lang="la">Charis</rt><rp>）</rp></ruby>たちの名とは？</h5>
<h6>発音</h6>
<p>古代ギリシャ語と同じく、「カリス」との発音です。</p>
<h6>由来</h6>
<p>古代ギリシャ語では、<ruby lang="ja">カリス<rp>（</rp><rt lang="grc">Charis</rt><rp>）</rp></ruby>は動詞の<ruby lang="la">khaírô<rp>（</rp><rt lang="grc">χαίρω</rt><rp>）</rp></ruby lang="la">（発音：<ruby lang="ja">カイロー<rp>（</rp><rt lang="la">khaírô</rt><rp>）</rp></ruby>）は「<ruby>愉快<rp>（</rp><rt>よろこ</rt><rp>）</rp></ruby>ぶ」、「生きる力の充実さ」の意を示している。
カリスは単数形で、神秘的さ、「女神」と多面性、「たち」で修飾されている。</p>
<p>古代ギリシャ語では、修飾部分を省いて、複数形がふくまれている「<ruby lang="la">Charites<rp>（</rp><rt lang="grc">Χάριτες</rt><rp>）</rp></ruby lang="la">」（発音：<ruby lang="ja">カリテス<rp>（</rp><rt lang="la">Charites</rt><rp>）</rp></ruby>）とも呼ばれています。</p>
<h5>神として</h5>
<p>女神カリスたちの交わりの人数は様々で、ニから十六神まで知られていますが、一般的人数を明らかにしない交わりでなければ、古典ギリシャ彫刻では、「カリス三美神たち」の形態で、ローマ、後に西洋美術に伝われて来たため、主に、三神と扱われて来ましたので、以下、その三神の名前を明らかにしました。</p>
<ul>
  <li><ruby lang="la">Aglaeā<rp>（</rp><rt lang="grc">Ἀγλαΐα</rt><rp>）</rp></ruby lang="la">（発音：<ruby lang="ja">アグライアー<rp>（</rp><rt lang="la">Aglaeā</rt><rp>）</rp></ruby>）は<ruby>眩<rp>（</rp><rt>まぶ</rt><rp>）</rp></ruby>しくさせる輝かしい美しさでの<ruby>愉快<rp>（</rp><rt>よろこ</rt><rp>）</rp></ruby>び、</li>
  <li><ruby lang="la">Euphrosynē<rp>（</rp><rt lang="grc">Εὐφροσύνη</rt><rp>）</rp></ruby lang="la">（発音：<ruby lang="ja">エウプロシュネー<rp>（</rp><rt lang="la">Euphrosynē</rt><rp>）</rp></ruby>）は<ruby>宴<rp>（</rp><rt>うたげ</rt><rp>）</rp></ruby>で受けて来る<ruby>愉快<rp>（</rp><rt>よろこ</rt><rp>）</rp></ruby>び、</li>
  <li><ruby lang="la">Thalia<rp>（</rp><rt lang="grc">Θάλεια</rt><rp>）</rp></ruby lang="la">（発音：<ruby lang="ja">タレイア<rp>（</rp><rt lang="la">Thalia</rt><rp>）</rp></ruby>）は活気のありすぎる<ruby>豊<rp>（</rp><rt>ほう</rt><rp>）</rp>穣<rp>（</rp><rt>じょう</rt><rp>）</rp></ruby>の<ruby>愉快<rp>（</rp><rt>よろこ</rt><rp>）</rp></ruby>びを現わしています。</li>
</ul>

<h6>神女カリスたちとは？</h6>
<p>「<a href="https://ja.wikipedia.org/wiki/オウィディウス#.E3.80.8E.E7.A5.AD.E6.9A.A6.E3.80.8F" title="https://ja.wikipedia.org/wiki/オウィディウス#祭暦">祭暦</a>」において、花の冠を手にした優美な乙女たちの姿で表されて、<a href="/docs/ja/versailles/trianon/flore#note_flora" title="フロラ女神">フロラ</a>に給士しています。</p>
</div>

<footer>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#graces" title="女神カリスたち">活気に満ちたホラ神女たちとカリス神女たち ↩</a></p>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#graces_2" title="女神カリスたち">カリス神女たちも加わって ↩</a></p>
</footer>

<h4 id="note_erechteus" class="yellow note">エレクテウス</h4>

<div class="notices yellow">
<h5><ruby lang="ja">エレクテウス<rp>（</rp><rt lang="la">Erechtheus</rt><rp>）</rp></ruby>とは？</h5>
<p>古代ギリシャ語で、<ruby lang="la">Erekhtheús<rp>（</rp><rt lang="grc">Ἐρεχθεύς</rt><rp>）</rp></ruby lang="la">（発音：<ruby lang="ja">エレクテウス<rp>（</rp><rt lang="la">Erekhtheús</rt><rp>）</rp></ruby>）は、神話に古代第六アテネ王として、町の元の神を指しています。</p>
<h5>祭暦においては</h5>
<p>以上の文書では、<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>が、北風の<a href="/docs/ja/versailles/trianon/flore#ref_boree" title="ボレアス" id="boree_3">ボレアス</a>が<ruby lang="ja">エレクテウス<rp>（</rp><rt lang="la">Erechtheus</rt><rp>）</rp></ruby>の娘<a href="https://ja.wikipedia.org/wiki/オーレイテュイア" title="https://ja.wikipedia.org/wiki/オレイテュイア"><ruby lang="la">Ōrithyia<rp>（</rp><rt lang="grc">Ὠρείθυια</rt><rp>）</rp></ruby lang="la"></a>（発音：<ruby lang="ja">オリテュイヤ<rp>（</rp><rt lang="la">Ōrithyia</rt><rp>）</rp></ruby>）をさらったことを思い起こさせようとしています。</p>
<p><a href="https://ja.wikipedia.org/wiki/オーレイテュイア" title="https://ja.wikipedia.org/wiki/オレイテュイア">オリテュイヤ</a>の誘拐は、<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>が著わしたもう一つの作品である<a href="https://ja.wikipedia.org/wiki/変身物語" title="https://ja.wikipedia.org/wiki/変身物語"><cite>変身物語</cite></a>の第６巻、６７７～７１３行に語られています。</p>
</div>

<footer>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#erechthee" title="エレクテウス">エレクテウスの家から獲物を持ち去ったのでした ↩</a></p>
</footer>

<div class="notices yellow">
<p><a href="/docs/ja/versailles/trianon/flore#renvoi_chlorophylle" title="クロロフィル" id="chlorophylle">ノート</a>： 「クロロフィル」と日本語の発音の書き写しは、英語の「<ruby lang="ja">クロロファイル<rp>（</rp><rt lang="en">Chlorophyll</rt><rp>）</rp></ruby>」からではなく、<ruby>葉<rp>（</rp><rt>よう</rt><rp>）</rp>緑<rp>（</rp><rt>りょく</rt><rp>）</rp>素<rp>（</rp><rt>そ</rt><rp>）</rp></ruby>が<time datetime="1816">１８１６年</time>に<a href="https://ja.wikipedia.org/wiki/ジョゼフ・ビヤンネメ・カヴェントゥ" title="https://ja.wikipedia.org/wiki/ジョゼフ・ビヤンネメ・カヴェントゥ"><ruby lang="ja">ジョゼフ<rp>（</rp><rt lang="fr">Joseph</rt><rp>）</rp></ruby>・<ruby>ビヤンネメ<rp>（</rp><rt>Bienaimé</rt><rp>）</rp></ruby>・<ruby>カヴェントゥ<rp>（</rp><rt>Caventou</rt><rp>）</rp></ruby></a>によって単離されたことから、フランス語の「<ruby lang="ja">クロロフィル<rp>（</rp><rt lang="fr">Chlorophylle</rt><rp>）</rp></ruby>」に従っているている。英語に従えば、発音に矛盾が避けられなくなります。</p>
</div>

<footer>
  <p class="puce">文書に戻る： <a href="/docs/ja/versailles/trianon/flore#renvoi_chlorophylle" title="クロロフィル">エレクテウスの家から獲物を持ち去ったのでした ↩</a></p>
</footer>

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