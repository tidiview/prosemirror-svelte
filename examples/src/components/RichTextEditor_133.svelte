<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1>フロラ</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore_700x1152.webp 700w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore_700x1152.jpg" title="ヴェルサイユの大トリアノン宮殿にある、ジャン・ジューヴェネ、《フロラとゼフィルス》絵画" alt="ヴェルサイユの大トリアノン宮殿にある、ジャン・ジューヴェネ、《フロラとゼフィルス》絵画" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore_700x1152.jpg 700w" id="zephyr_et_flore"></picture><figcaption>フロラに花の連なりの籠を差し出すゼフィルス</figcaption></figure>
<div class="notices yellow">
<p><a href="https://ja.wikipedia.org/wiki/大トリアノン宮殿" title="https://ja.wikipedia.org/wiki/大トリアノン宮殿"><ruby lang="ja">大トリアノン宮殿<rp>(</rp><rt lang="fr">le&#160;Grand&#160;Trianon</rt><rp>)</rp></ruby lang="ja"></a>に展示されている<a href="http://www.louvre.fr/jp/rooms/フランス　ルイ14世の画家の間" title="http://www.louvre.fr/jp/rooms/フランス_ルイ１４世の画家の間"><ruby>ジャン<rp>(</rp><rt>Jean</rt><rp>)</rp>・<rp>(</rp><rt></rt><rp>)</rp>ジューヴネ<rp>(</rp><rt>JOUVENET</rt><rp>)</rp></ruby></a>が描いた「<a href="/docs/ja/versailles/trianon/flore#zephyr_et_flore" title="フロラとゼフィルス"><ruby lang="ja">フロラ<rp>(</rp><rt lang="fr">Flore</rt><rp>)</rp>と<rp>(</rp><rt lang="fr">et</rt><rp>)</rp>ゼフィルス<rp>(</rp><rt lang="fr">Zéphyr</rt><rp>)</rp></ruby lang="ja"></a>」絵画が「<ruby lang="ja">涼みの間<rp>(</rp><rt lang="fr">le&#160;Salon&#160;Frais</rt><rp>)</rp></ruby lang="ja">」に見られます。<br />
川沿いで、花の冠をかぶせようとしているひとりの天使や身を清めている<a href="https://ja.wikipedia.org/wiki/ニュンペー" title="https://ja.wikipedia.org/wiki/ニンフ"><ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby>たち</a>が近くに、何ともいえない春が漂う雰囲気なかで、<a href="/docs/ja/versailles/trianon/flore#note_zephyrus" title="ゼフィルス" id="zephyrus_4">西の<ruby>微<rp>(</rp><rt>そよ</rt><rp>)</rp>風<rp>(</rp><rt>かぜ</rt><rp>)</rp></ruby></a>である羽が付いている男のひと<a href="/docs/ja/versailles/trianon/flore#note_zephyrus" title="ゼフィルス" id="zephyrus"><ruby lang="ja">ゼフィルス<rp>(</rp><rt lang="la">Zephyrus</rt><rp>)</rp></ruby lang="ja"></a>は、美しい女の人、<a href="/docs/ja/versailles/trianon/flore#note_flora" title="フロラ女神" id="flora"><ruby lang="ja">フロラ<rp>(</rp><rt lang="la">Flora</rt><rp>)</rp></ruby lang="ja"></a>に花の籠を差し出しています。<br />
この部屋のために<a href="https://ja.wikipedia.org/wiki/1688年" title="https://ja.wikipedia.org/wiki/１６８８年">１６８８年</a>に<a href="https://ja.wikipedia.org/wiki/ルイ14世_(フランス王)" title="https://ja.wikipedia.org/wiki/ルイ１４世"><ruby lang="ja">ルイ<rp>(</rp><rt lang="fr">Louis</rt><rp>)</rp>十四世<rp>(</rp><rt lang="fr">XIV</rt><rp>)</rp></ruby lang="ja"></a>に注文されたこの絵画は、ローマ皇帝文学作家<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス"><ruby lang="ja">オウィディウス<rp>(</rp><rt lang="la">Ovidius</rt><rp>)</rp></ruby lang="ja"></a>が著わした「<a href="https://ja.wikipedia.org/wiki/オウィディウス#.E3.80.8E.E7.A5.AD.E6.9A.A6.E3.80.8F" title="https://ja.wikipedia.org/wiki/オウィディウス#祭暦"><ruby lang="ja">祭暦<rp>(</rp><rt lang="la">Fasti</rt><rp>)</rp></ruby lang="ja"></a>」にある文書から、史料によって知られています。<br />
「<a href="https://ja.wikipedia.org/wiki/オウィディウス#.E3.80.8E.E7.A5.AD.E6.9A.A6.E3.80.8F" title="https://ja.wikipedia.org/wiki/オウィディウス#祭暦">祭暦</a>」において、<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>が<a href="https://ja.wikipedia.org/wiki/ローマ暦" title="https://ja.wikipedia.org/ローマ暦">ローマ<ruby>暦<rp>(</rp><rt>こよみ</rt><rp>)</rp></ruby></a>を季節に応じて、天文や農事に関する行事や祭りを描きながら、自らを暦に司る司祭として自己言及し、あれこれ語るため、神々に直接お話しを聞くという文学的仕掛けが用いられています。<br />
<a href="/docs/ja/versailles/trianon/flore#note_flora" title="フロラ女神" id="flora_2">フロラ</a>が登場するこの第5巻ともなっている、同時に５月に当たる以下の文書でも、<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>が女神に直接話しを掛けながら、始まっています（<a href="/docs/ja/versailles/trianon/flore#183" title="１８３行" id="retour_183">１８３~１９２行</a>）。<br />
彼はまず彼女自身と彼女を記念する4月末と5月の頭に行なわれる<a href="/docs/ja/versailles/trianon/flore#note_floralia" title="祭り" id="floralia"><ruby lang="ja">フロラリア<rp>(</rp><rt lang="la">Floralia</rt><rp>)</rp></ruby lang="ja">祭り</a>について情報を求めている。<br />
絵画で表されている場面と直接な関係が視覚的に見えないのに、女神の魅力と神秘の意義、また<a href="http://www.louvre.fr/jp/rooms/フランス　ルイ14世の画家の間" title="http://www.louvre.fr/jp/rooms/フランス_ルイ１４世の画家の間">ジャン・ジューヴネ</a>の表しをより把握する為に役に立ちます。
それで、<a href="/docs/ja/versailles/trianon/flore#note_flora" title="フロラ女神" id="flora_3">フロラ</a>は、答えとして、自分を「<a href="/docs/ja/versailles/trianon/flore#note_chloris" title="クロリス" id="chloris"><ruby lang="ja">クロリス<rp>(</rp><rt lang="la">Chloris</rt><rp>)</rp></ruby lang="ja"></a>」と名のる至福者たちの島出身、<a href="/docs/ja/versailles/trianon/flore#note_zephyrus" title="ゼフィルス" id="zephyrus_2">ゼフィルス</a>を戸惑う美しさを持つ<a href="https://ja.wikipedia.org/wiki/ニュンペー" title="https://ja.wikipedia.org/wiki/ニンフ"><ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby></a>のひとりとして同一視しながら、自分を紹介しています。<br />
彼は彼女を誘拐して、自分の嫁にさせて、そして女神として、花の主権を与えられたことも語られていると同時に（<a href="/docs/ja/versailles/trianon/flore#193" title="１９３行" id="retour_193">１９３~２２２行</a>）、フロラが伝統的に、春、美しさ、活気に満ちた<a href="/docs/ja/versailles/trianon/flore#note_hora" title="女神ホラたち" id="heures"><ruby lang="ja">ホラ<rp>(</rp><rt lang="la">Hora</rt><rp>)</rp></ruby lang="ja">神女たち</a>と<a href="/docs/ja/versailles/trianon/flore#note_charis" title="女神カリスたち" id="graces"><ruby lang="ja">カリス<rp>(</rp><rt lang="la">Charis</rt><rp>)</rp></ruby lang="ja">神女たち</a>に囲まれている姿が表されていることになります。  </p>
</div>
<p><br></p>
<h2><strong><span style="color: #df8a13;">フロラとゼフィルス</span></strong></h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"/></svg></span>
<sup><a href="/docs/ja/versailles/trianon/flore#retour_183" title="１８３行" id="183">１８３</a></sup>
「お花のお母さま、来て下され、喜ばしい遊びであなたを喜ばせましょう。  </p>
<p>「花の母なる<a href="/docs/ja/versailles/trianon/flore#note_flora" title="フロラ女神" id="flore">女神</a>よ、おいで下さい。<br />
愉快な<a href="/docs/ja/versailles/trianon/flore#note_floralia" title="祭り" id="floralia_2">祭り</a>でお祝いしましょう。<br />
私はあなたを歌うときを先月から遅らせていました。<br />
あなたの祝祭が<a href="/docs/ja/versailles/trianon/flore#note_floralia_2" title="アプリリウス月" id="aprilius"><ruby lang="ja">アプリリウス<rp>(</rp><rt lang="la">Aprilius</rt><rp>)</rp></ruby lang="ja">月</a>に始まって<a href="/docs/ja/versailles/trianon/flore#note_floralia_2" title="マイユス月" id="maius"><ruby lang="ja">マイユス<rp>(</rp><rt lang="la">Maius</rt><rp>)</rp></ruby lang="ja">月</a>にまで及ぶからです。  </p>
<p>先の月では月の終わり際に、のちの月では月の始まりとともに、あなたの祝祭があります。<br />
月と月の境があなたのためにあり、あなたに捧げられているのですから、２つの月のどちらもあなたを讃えるにふさわしいのです。  </p>
<p><sup>１８９</sup>
「競技も、観客席の<ruby>喝采<rp>(</rp><rt>かっさい</rt><rp>)</rp></ruby>が決める勝利の冠も<a href="/docs/ja/versailles/trianon/flore#note_chloris" title="クロリス">今月</a>のことですから、この歌のことですから、この歌も競技場の催しと進行を同じくしましょう。<br />
どうか、あなたがどのような女神か、御自身で教えて下さい。<br />
ひとびとの考えは当てになりません。<br />
御自分の名前を説明されるのはあなた御自身が最適ですから」。  </p>
<p><sup><a href="/docs/ja/versailles/trianon/flore#retour_193" title="１９３行" id="193">１９３</a></sup>
このようにわたしが申しますと、私の問いに女神はこう答えました。<br />
女神が話すと、口からは涼しい<ruby>薔<rp>(</rp><rt>ば</rt><rp>)</rp>薇<rp>(</rp><rt>ら</rt><rp>)</rp></ruby>の<ruby>息<rp>(</rp><rt>い</rt><rp>)</rp>吹<rp>(</rp><rt>ぶき</rt><rp>)</rp></ruby>が洩れました。  </p>
<p><sup>１９５</sup>
「いままでこそ<a href="/docs/ja/versailles/trianon/flore#note_flora" title="フロラ女神" id="flora_5">フロラ</a>と呼ばれる私も、かつて<a href="/docs/ja/versailles/trianon/flore#note_chloris" title="クロリス" id="chloris_2">クロリス</a>と言っていました。<br />
私の名前にあるギリシャの字がラテン語での発音によって害われることになって、私は、至福者たちが昔暮らしたといわれている恵まれ諸島の<ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby>のでしたもの。<br />
私の容姿がどのであったかなど、おこがましくてとても話せませんが、母が神様の婿殿を見つけて下さったのはこの容姿のためでした。  </p>
<p><sup>２０１</sup>
「春のこと、そぞろ歩きをしている私が<a href="/docs/ja/versailles/trianon/flore#note_zephyrus" title="ゼフィルス" id="zephyrus_3">ゼフィルス</a>の目に止まりました。<br />
私は引き返そうとしました。<br />
が、<a href="/docs/ja/versailles/trianon/flore#note_zephyrus" title="ゼフィルス" id="zephyrus_5">ゼフィルス</a>は追いかけて来ます。<br />
私は逃げます。<br />
けれども、あちらの力のほうが強いうえに、兄弟の<a href="/docs/ja/versailles/trianon/flore#ref_boree" title="ボレアス" id="boree"><ruby lang="ja">ボレアス<rp>(</rp><rt lang="la">Boreas</rt><rp>)</rp></ruby lang="ja"></a>の前例があるので、娘をさらうのは天下御免であったのです。<br />
<a href="/docs/ja/versailles/trianon/flore#ref_boree" title="ボレアス" id="boree_2">ボレアス</a>はなんと<a href="/docs/ja/versailles/trianon/flore#note_erecteus" title="エレクテウス" id="erechthee"><ruby lang="ja">エレクテウス<rp>(</rp><rt lang="la">Erechtheus</rt><rp>)</rp></ruby lang="ja"></a>の家から獲物を持ち去ったのでした。  </p>
<p><sup>２０５</sup>
「とはいえ、力ずくでしたことの償いに、彼は私に正妻の名をくれました。<br />
今この結婚に私はなんの不平もありません。<br />
私はいつも春を<ruby>謳<rp>(</rp><rt>おう</rt><rp>)</rp>歌<rp>(</rp><rt>か</rt><rp>)</rp></ruby>しています。<br />
いつでも一年でもっとも輝かしい季節、木々には葉が繋がり、大地はいつも牧草がおおいます。<br />
そして野には私の婚資である実り豊かな庭があります。<br />
そよ風が<ruby>育<rp>(</rp><rt>はぐく</rt><rp>)</rp></ruby>み、泉から湧く澄み切った水が<ruby>灌<rp>(</rp><rt>かん</rt><rp>)</rp>漑<rp>(</rp><rt>がい</rt><rp>)</rp></ruby>しています。<br />
私の夫はこの庭を優雅な花で満たし、<strong><span style="color: #df8a13;">「女神よ、花の主権を」</span></strong>と言ってくれました。  </p>
<p><sup>２１３</sup>
「何度も私は、いったい何色あるのかと、並んだ花を数えたいと思いましたが、出来ませんでした。<br />
数が及ばないほどたくさんだったのです。<br />
朝露の滴が葉からこぼれ落ち、色とりどりの草花が陽の光に暖かめられるや、ただちに<ruby>彩<rp>(</rp><rt>いろどり</rt><rp>)</rp></ruby>鮮やかな衣を身にまとった<strong><a href="/docs/ja/versailles/trianon/flore#note_hora" title="女神ホラたち" id="heures_2"><span style="color: #df8a13;">季節神女ホラたち</span></a></strong>が集まり、<strong><span style="color: #df8a13;">私からの寄付を籠に摘んでゆきます</span></strong>。<br />
それにすぐさま優雅の<strong><a href="/docs/ja/versailles/trianon/flore#note_charis" title="女神カリスたち" id="graces_2"><span style="color: #df8a13;">神女カリスたち</span></a></strong>も加わって、<strong><span style="color: #df8a13;">冠を編み、編んだ冠を自分の神々しい髪に結ぼうとします</span></strong>。」 <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"/></svg></span></p>
<p><span style="color: #df8a13;"><strong>オウィディウス、祭暦、第５巻より</strong></span>  </p>
<p><br></p>
<div class="notices yellow">
<h2>註釈</h2>
</div>
<p><br></p>
<h3 id="note_flora"><strong>フロラ</strong></h3>
<div class="notices yellow">
<h4><ruby lang="ja">フロラ<rp>(</rp><rt lang="la">Flora</rt><rp>)</rp></ruby lang="ja">の名とは？</h4>
<h5>発音</h5>
<p>正式には、ラテン語では長母音があるため、「<ruby lang="ja">フローラ<rp>(</rp><rt lang="la">Flōra</rt><rp>)</rp></ruby lang="ja">」という名前ですが、一般的に、長母音を略する「フロラ」と表記される。  </p>
<h5>由来</h5>
<p><ruby lang="ja">フローラ<rp>(</rp><rt lang="la">Flōra</rt><rp>)</rp></ruby lang="ja">は、「<ruby lang="ja">花<rp>(</rp><rt lang="la">Flos</rt><rp>)</rp></ruby lang="ja">」（発音：フロス）が活用された言葉に当たって、「<ruby>花<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>」とう意味を示しています。  </p>
<h4>女神として</h4>
<h5>フロラとは？</h5>
<p>フロラは、<strong>農業生産を見守る</strong>ローマ宗教の多く存在する女神の一つです。<br />
「<ruby lang="ja">母神<rp>(</rp><rt lang="la">mater</rt><rp>)</rp></ruby lang="ja">」の副名もあって、よくまた<strong>豊穣神</strong>とも見なされることがあります。<br />
１７７０年にイタリア中部、ローマ郊外の東、<a href="https://ja.wikipedia.org/wiki/パレストリーナ" title="https://ja.wikipedia.org/wiki/プラエネステ"><ruby lang="ja">プラエネステ<rp>(</rp><rt lang="la">Praeneste</rt><rp>)</rp></ruby lang="ja"></a>に発見された<a href="https://ja.wikipedia.org/wiki/ローマ暦" title="https://ja.wikipedia.org/ローマ暦">ローマ暦</a>を紹介するローマ皇帝時代の跡に書いているとおりに、「<a href="/docs/ja/versailles/trianon/flore#retour_sakaseru" title="一般的にものを咲かせることに司る" id="sakaseru"><strong>一般的にものを咲かせることに司る</strong> ↑</a>」春女神としてと、定義されています。  </p>
<h5>古代ローマ帝国でのフロラ祭儀</h5>
<p>ローマ市内に神殿がありました。<a href="https://ja.wikipedia.org/wiki/クイリナーレ" title="https://ja.wikipedia.org/wiki/クィリナリス"><ruby lang="ja">クィリナリス<rp>(</rp><rt lang="la">Quirinalis</rt><rp>)</rp></ruby lang="ja">丘</a>上に位置付けられていた。<br />
毎日に祝福の祭儀はが神殿に「<a href="https://ja.wikipedia.org/wiki/古代ローマの公職#.E7.A5.9E.E5.AE.98.E8.81.B7" title="https://ja.wikipedia.org/wiki/古代ローマの公職#神官職"><ruby lang="ja">フラメン<rp>(</rp><rt lang="la">Flamen</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>フロラリス<rp>(</rp><rt lang="la">Floralis</rt><rp>)</rp></ruby lang="ja"></a>」という固有の神官だった<strong>フロラ司祭</strong>の一人から捧げられていたことも知られています。<br />
一年一回、「<a href="/docs/ja/versailles/trianon/flore#note_floralia" title="祭り" id="floralia_3"><ruby lang="ja">フロラリア<rp>(</rp><rt lang="la">Floralia</rt><rp>)</rp></ruby lang="ja">祭り</a>」もありました。  </p>
<hr>
<ul>
<li>註１に戻る： <a href="/docs/ja/versailles/trianon/flore#flora" title="フロラ">美しい女の人、フロラ ↑</a></li>
<li>註２に戻る： <a href="/docs/ja/versailles/trianon/flore#flora_2" title="フロラ">フロラが登場する ↑</a></li>
<li>註３に戻る： <a href="/docs/ja/versailles/trianon/flore#flora_3" title="フロラ">それで、フロラそれで ↑</a></li>
<li>註４に戻る： <a href="/docs/ja/versailles/trianon/flore#flore" title="女神">花の母なる女神よ ↑</a></li>
<li>註５に戻る： <a href="/docs/ja/versailles/trianon/flore#flora_5" title="フロラ">フロラと呼ばれる私 ↑</a></li>
<li>註６に戻る： <a href="/docs/ja/versailles/trianon/flore#flora_6" title="フロラ">フロラの侍女 ↑</a></li>
</ul>
</div>
<p><br></p>
<h3 id="note_chloris"><strong>クロリス</strong></h3>
<div class="notices yellow">
<h4><ruby lang="ja">クロリス<rp>(</rp><rt lang="la">Chloris</rt><rp>)</rp></ruby lang="ja">の名とは？</h4>
<h5>発音</h5>
<p>正式には、古代ギリシャ語では長母音があるため、「<ruby lang="ja">クローリス<rp>(</rp><rt lang="la">Khlōris</rt><rp>)</rp></ruby lang="ja">」という名前になりますが、古代ギリシャ語からラテン語まで書き写すと、「Kh」が「Ch」に交代されることがあるのと、一般的に、長母音を略されているため、「クロリス」と表記されるようと変わります。  </p>
<h5>由来</h5>
<p>古代ギリシャ語で、<ruby lang="la">Khlōrís<rp>(</rp><rt lang="grc">Χλωρίς</rt><rp>)</rp></ruby lang="la">（発音：<ruby lang="ja">クローリス<rp>(</rp><rt lang="la">Khlōris</rt><rp>)</rp></ruby lang="ja">）と書いて、<ruby lang="la">Khlōros<rp>(</rp><rt lang="grc">χλωρός</rt><rp>)</rp></ruby lang="la">（発音：<ruby lang="ja">クローロス<rp>(</rp><rt lang="la">Khlōros</rt><rp>)</rp></ruby lang="ja">）語幹から出来ていて、「<ruby>緑<rp>(</rp><rt>みどり</rt><rp>)</rp></ruby>」と意味を表しています。<br />
同じ語幹から、「<a href="https://ja.wikipedia.org/wiki/クロロフィル" title="https://ja.wikipedia.org/wiki/クロロフィル"><ruby lang="la">Khlôrophyl<rp>(</rp><rt lang="grc">χλωροφύλλη</rt><rp>)</rp></ruby lang="la"></a>」（発音：<ruby lang="ja">クローロフィル<rp>(</rp><rt lang="la">Khlōrophyl</rt><rp>)</rp></ruby lang="ja">）があって、日本語の「<a href="/docs/ja/versailles/trianon/flore#chlorophylle" title="クロロフィル" id="renvoi_chlorophylle"><ruby lang="ja">クロロフィル<rp>(</rp><rt lang="fr">Chlorophylle</rt><rp>)</rp></ruby lang="ja">&#11107;</a>」に当たる<ruby>葉<rp>(</rp><rt>よう</rt><rp>)</rp>緑<rp>(</rp><rt>りょく</rt><rp>)</rp>素<rp>(</rp><rt>そ</rt><rp>)</rp></ruby>を指しています。  </p>
<h5>クロリスとは？</h5>
<p>「クロリス」という名前は、ギリシア神話では、ある<a href="https://ja.wikipedia.org/wiki/ニュンペー" title="https://ja.wikipedia.org/wiki/ニンフ"><ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby></a>の女性に当たります。<br />
「<a href="https://ja.wikipedia.org/wiki/オウィディウス#.E3.80.8E.E7.A5.AD.E6.9A.A6.E3.80.8F" title="https://ja.wikipedia.org/wiki/オウィディウス#祭暦">祭暦</a>」においては、<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>が、<a href="/docs/ja/versailles/trianon/flore#note_floralia" title="祭り">フロラ</a>を、<a href="https://ja.wikipedia.org/wiki/クローリス" title="https://ja.wikipedia.org/wiki/クロリス">クロリス</a>という<a href="https://ja.wikipedia.org/wiki/ニュンペー" title="https://ja.wikipedia.org/wiki/ニンフ"><ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby></a>と折角同一視させているのは、<a href="https://ja.wikipedia.org/wiki/クローリス" title="https://ja.wikipedia.org/wiki/クロリス">クロリス</a>という語幹に「<ruby>緑<rp>(</rp><rt>みどり</rt><rp>)</rp></ruby>」、いわゆる、「<a href="/docs/ja/versailles/trianon/flore#flora-2" title="一般的にものを咲かせることに司る" id="retour_sakaseru"><strong>一般的にものを咲かせることに司る</strong></a>」意が含まれているからでしょう。  </p>
<hr>
<ul>
<li>註１に戻る： <a href="/docs/ja/versailles/trianon/flore#chloris" title="クロリス">自分をクロリスと名のる ↑</a></li>
<li>註２に戻る： <a href="/docs/ja/versailles/trianon/flore#chloris_2" title="クロリス">クロリスと言っていました ↑</a></li>
</ul>
</div>
<p><br></p>
<h4 id="note_floralia"><strong>フロラリア祭り</strong></h4>
<div class="notices yellow">
<h5><ruby lang="ja">フロラリア<rp>(</rp><rt lang="la">Floralia</rt><rp>)</rp></ruby lang="ja">祭りの名とは？</h5>
<p>「フロラリア」という祝祭は、田園ののどかな祭りとして始まった<a href="/docs/ja/versailles/trianon/flore#note_floralia" title="祭り">フロラ女神</a>の祭りです。  </p>
<h5 id="note_floralia_2">日付</h5>
<p><a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>が「<a href="https://ja.wikipedia.org/wiki/オウィディウス#.E3.80.8E.E7.A5.AD.E6.9A.A6.E3.80.8F" title="https://ja.wikipedia.org/wiki/オウィディウス#祭暦">祭暦</a>」を作文する紀元後１世紀前半時代だと、<a href="https://ja.wikipedia.org/wiki/4月" title="https://ja.wikipedia.org/wiki/四月">４月</a>である<a href="https://ja.wikipedia.org/wiki/ローマ暦" title="https://ja.wikipedia.org/wiki/アプリーリス">アプリリウス月</a><a href="/docs/ja/versailles/trianon/flore#aprilius" title="アプリリウス月" id="note_aprilius">↑</a>の２８日から、５月である<a href="https://ja.wikipedia.org/wiki/ローマ暦" title="https://ja.wikipedia.org/wiki/マーイウス">マイユス月</a><a href="/docs/ja/versailles/trianon/flore#maius" title="マイユス月" id="note_maius">↑</a>の３日までの５夜間で行なわれていた。  </p>
<h5>概要</h5>
<p>追いかけや、舞踏や身ぶりや悲劇的な演出が行われていたため、「フロラリア」は「<ruby lang="ja">花の祭典<rp>(</rp><rt lang="la">Ludi&#160;Florales</rt><rp>)</rp></ruby lang="ja">」とも呼ばれていました。<br />
ローマ舞踏のなかで、フロラのために出来た舞踏は、一番印象的だったといわれています。<br />
元々、春の戻りで若者たちが喜びを表現することで、単純でしたが、そこから、全裸で性的行為のものまねにまで変わることがあって、不道徳性が指摘されることが出ました。  </p>
<h5>場所</h5>
<p>追いかけは町市外に、「フロラの<ruby lang="ja">競技場<rp>(</rp><rt lang="la">circus</rt><rp>)</rp></ruby lang="ja">」と呼ばれた<a href="https://ja.wikipedia.org/wiki/ヴィミナーレ" title="https://ja.wikipedia.org/wiki/ウィミナリス"><ruby lang="ja">ウィミナリス<rp>(</rp><rt lang="la">Viminalis</rt><rp>)</rp></ruby lang="ja">丘</a>と<a href="https://ja.wikipedia.org/wiki/ピンチョの丘" title="https://ja.wikipedia.org/wiki/庭園の丘">庭園の丘</a> の間に位置づけられている小谷があった特別な競技場で行われていた。  </p>
<hr>
<ul>
<li>註１に戻る： <a href="/docs/ja/versailles/trianon/flore#floralia" title="フロラリア">行なわれるフロラリア祭り ↑</a></li>
<li>註２に戻る： <a href="/docs/ja/versailles/trianon/flore#floralia_2" title="フロラリア">愉快な祭り ↑</a></li>
<li>註３に戻る： <a href="/docs/ja/versailles/trianon/flore#floralia_3" title="フロラリア">一年一回、フロラリア祭り ↑</a></li>
</ul>
</div>
<p><br></p>
<h3 id="note_zephyrus"><strong>ゼフィルス</strong></h3>
<div class="notices yellow">
<h4><ruby lang="ja">ゼフィルス<rp>(</rp><rt lang="la">Zephyrus</rt><rp>)</rp></ruby lang="ja">の名とは？</h4>
<h5>発音</h5>
<p>ゼフィルスはラテン語での名前で、日本語の書き写しでは、古代ギリシャ語での呼称である「ゼピュルス」と発音するようになりましたが、ラテン語では正式な発音は、「ph」で「f」と同音のため、同時に、オヴィディウスはラテン語で書いていることに基づき、ここでは「<strong>ゼフィルス</strong>」で表記することにしました。  </p>
<h5>由来</h5>
<p>名前の由来は古代ギリシャ神話からです。<br />
古代ギリシャ神話だと、「<ruby lang="la">Zephyros<rp>(</rp><rt lang="grc">Ζέφυρος</rt><rp>)</rp></ruby lang="la">」（発音：<ruby lang="ja">ゼピュロス<rp>(</rp><rt lang="la">Zephyros</rt><rp>)</rp></ruby lang="ja">） という神があります。<br />
古代ギリシャ語からラテン語に書き写された祭、ラテン語っぽく「<ruby lang="ja">ゼフィルス<rp>(</rp><rt lang="la">Zephyrus</rt><rp>)</rp></ruby lang="ja">」と書くようとなりました。  </p>
<h4>神として</h4>
<p><a href="https://ja.wikipedia.org/wiki/アネモイ" title="https://ja.wikipedia.org/wiki/アネモイ"><ruby lang="la">Anemoi<rp>(</rp><rt lang="grc">Ἄνεμοι</rt><rp>)</rp></ruby lang="la">（発音：<ruby lang="ja">アネモイ<rp>(</rp><rt lang="la">Anemoi</rt><rp>)</rp></ruby lang="ja">）</a>、古代ギリシア語では（複数形で）「<ruby>風<rp>(</rp><rt>かぜ</rt><rp>)</rp></ruby>たち」の意、という言葉があります。<br />
ラテン語では、<ruby lang="ja">ヴェンティ<rp>(</rp><rt lang="la">Venti</rt><rp>)</rp></ruby lang="ja">（意：「<ruby>風<rp>(</rp><rt>かぜ</rt><rp>)</rp></ruby>たち」）に当たります。  </p>
<p>ギリシア神話では、主要な風は４柱いる。ゼフィルスの他だと：  </p>
<ul>
<li><a href="https://ja.wikipedia.org/wiki/アネモイ#.E5.8C.97.E9.A2.A8.E3.83.9C.E3.83.AC.E3.82.A2.E3.83.BC.E3.82.B9" title="https://ja.wikipedia.org/wiki/アネモイ#北風ボレアース" id="ref_boree"><ruby lang="la">Boreas<rp>(</rp><rt lang="grc">Βορέας</rt><rp>)</rp></ruby lang="la"></a>（発音：<ruby lang="ja">ボレアス<rp>(</rp><rt lang="la">Boreas</rt><rp>)</rp></ruby lang="ja">）、ラテン語でも、ボレアスは冷たい冬の空気を運ぶ北風で、<hr>註１に戻る： <a href="/docs/ja/versailles/trianon/flore#boree" title="ボレアス">兄弟のボレアスの前例 ↑</a><br>註２に戻る： <a href="/docs/ja/versailles/trianon/flore#boree_2" title="ボレアス">ボレアスはなんとエレクテウスの家から ↑</a><br>註３に戻る： <a href="/docs/ja/versailles/trianon/flore#boree_3" title="ボレアス">北風のボレアスがエレクテウスの娘 &#11107;</a><hr></li>
<li><a href="https://ja.wikipedia.org/wiki/アネモイ#.E5.8D.97.E9.A2.A8.E3.83.8E.E3.83.88.E3.82.B9" title="https://ja.wikipedia.org/wiki/アネモイ#南風ノトス"><ruby lang="la">Notos<rp>(</rp><rt lang="grc">Νότος</rt><rp>)</rp></ruby lang="la"></a>（発音：<ruby lang="ja">ノトス<rp>(</rp><rt lang="la">Notos</rt><rp>)</rp></ruby lang="ja">）、ラテン語では、<ruby lang="ja">ノテュス<rp>(</rp><rt lang="la">Notus</rt><rp>)</rp></ruby lang="ja">は晩夏と秋の嵐を運ぶ南風であり、</li>
<li><a href="https://ja.wikipedia.org/wiki/アネモイ#.E6.9D.B1.E9.A2.A8.E3.82.A8.E3.82.A6.E3.83.AD.E3.82.B9" title="https://ja.wikipedia.org/wiki/アネモイ#東風エウロス"><ruby lang="la">Euros<rp>(</rp><rt lang="grc">Εύρος</rt><rp>)</rp></ruby lang="la"></a>（発音：<ruby lang="ja">エウロス<rp>(</rp><rt lang="la">Euros</rt><rp>)</rp></ruby lang="ja">）、ラテン語では、<ruby lang="ja">エウルス<rp>(</rp><rt lang="la">Eurus</rt><rp>)</rp></ruby lang="ja">は東風であることにたいして、  </li>
</ul>
<p>それにたいしては、ゼフィルスは<strong>西風の神で、最も温和なゼピュロスは、春の訪れを告げる豊穣の風</strong>として知られている。  </p>
<h4>ゼフィルスとは？</h4>
<p><a href="https://ja.wikipedia.org/wiki/オウィディウス#.E3.80.8E.E7.A5.AD.E6.9A.A6.E3.80.8F" title="https://ja.wikipedia.org/wiki/オウィディウス#祭暦">祭暦</a>では、<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>によって、ゼフィルスは<strong>翼を備えた人間</strong>として、古典的に擬人化されて、登場しています。  </p>
<hr>
<ul>
<li>註１に戻る： <a href="/docs/ja/versailles/trianon/flore#zephyrus_4" title="ゼフィルス">西の微風 ↑</a></li>
<li>註２に戻る： <a href="/docs/ja/versailles/trianon/flore#zephyrus" title="ゼフィルス">羽が付いている男のひとゼフィルス ↑</a></li>
<li>註3に戻る： <a href="/docs/ja/versailles/trianon/flore#zephyrus_2" title="ゼフィルス">ゼフィルスを戸惑う美しさ ↑</a></li>
<li>註4に戻る： <a href="/docs/ja/versailles/trianon/flore#zephyrus_3" title="ゼフィルス">その昔に至福のひとびとが福裕に過ごしていた<ruby>国<rp>(</rp><rt>エリュジウム</rt><rp>)</rp></ruby>があった ↑</a></li>
<li>註5に戻る： <a href="/docs/ja/versailles/trianon/flore#zephyrus_5" title="ゼフィルス">私がゼフィルスの目に止まりました ↑</a></li>
</ul>
</div>
<p><br></p>
<h3 id="note_hora"><strong>季節ホラ女神たち</strong></h3>
<div class="notices yellow">
<h4>季節女神<ruby lang="ja">ホラ<rp>(</rp><rt lang="la">Hora</rt><rp>)</rp></ruby lang="ja">たちの名とは？</h4>
<h5>発音</h5>
<p><a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>の文書では、ホラはラテン語としての語です。<br />
正式には、ラテン語では長母音があるため、「<ruby lang="ja">ホーラ<rp>(</rp><rt lang="la">Hōra</rt><rp>)</rp></ruby lang="ja">」という書き写しが正しいなのに、一般的に、長母音を略する「<ruby lang="ja">ホラ<rp>(</rp><rt lang="la">Hora</rt><rp>)</rp></ruby lang="ja">」で表記されている。 </p>
<h5>由来</h5>
<p>古代ギリシャ語の<ruby lang="la">Hōra<rp>(</rp><rt lang="grc">Ὧρα</rt><rp>)</rp></ruby lang="la">（発音：<ruby lang="ja">ホーラ<rp>(</rp><rt lang="la">Hōra</rt><rp>)</rp></ruby lang="ja">）からそのまま来ています。
<ruby lang="ja">ホーラ<rp>(</rp><rt lang="grc">Hōra</rt><rp>)</rp></ruby lang="ja">は単数形で、「<ruby>時<rp>(</rp><rt>じ</rt><rp>)</rp>間<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>」との意を示しています。  </p>
<h4>神として</h4>
<p><a href="https://ja.wikipedia.org/wiki/ホーラ" title="https://ja.wikipedia.org/wiki/ホラ">ホラ</a>は、神としまして、女神であって、<strong>時間の区分を擬人化</strong>を指しているのだが、普通は、<strong>各々の時間の対照性を現わす意で、複数形で、女神の交わりとして現れて来ます</strong>。<br />
<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>の文書では、「季節神女ホラたち」で出て来るが、ラテン語だと、「季節神女」と「たち」の部分を省いて、ただ直接複数形が含まれている「<ruby lang="ja">ホーラエ<rp>(</rp><rt lang="la">Hōrae</rt><rp>)</rp></ruby lang="ja">」で呼ばれています。<br />
古代ギリシャ語でも、複数形を含む<ruby lang="la">Hōrai<rp>(</rp><rt lang="grc">Ὧραι</rt><rp>)</rp></ruby lang="la">（発音：<ruby lang="ja">ホーライ<rp>(</rp><rt lang="la">Hōrai</rt><rp>)</rp></ruby lang="ja">）で同様です。
時代によって、人数が少しづつ２人から１２人まで増えたことも知られています。 </p>
<h5>季節神女ホラたちとは？</h5>
<p>「<a href="https://ja.wikipedia.org/wiki/オウィディウス#.E3.80.8E.E7.A5.AD.E6.9A.A6.E3.80.8F" title="https://ja.wikipedia.org/wiki/オウィディウス#祭暦">祭暦</a>」において、花を手にした優美な乙女の姿で表されて、<a href="/docs/ja/versailles/trianon/flore#note_flora" title="フロラ女神" id="flora_6">フロラ</a>の侍女たち。</p>
<hr>
<ul>
<li>註１に戻る： <a href="/docs/ja/versailles/trianon/flore#heures" title="女神ホラたち">活気に満ちたホラ神女たち ↑</a></li>
<li>註２に戻る： <a href="/docs/ja/versailles/trianon/flore#heures_2" title="女神ホラたち">季節神女ホラたちが集まり ↑</a></li>
</ul>
</div>
<p><br></p>
<h3 id="note_charis"><strong>カリス女神</strong></h3>
<div class="notices yellow">
<h4>女神<ruby lang="ja">カリス<rp>(</rp><rt lang="la">Charis</rt><rp>)</rp></ruby lang="ja">たちの名とは？</h4>
<h5>発音</h5>
<p>古代ギリシャ語と同じく、「カリス」との発音です。</p>
<h5>由来</h5>
<p>古代ギリシャ語では、<ruby lang="ja">カリス<rp>(</rp><rt lang="grc">Charis</rt><rp>)</rp></ruby lang="ja">は動詞の<ruby lang="la">khaírô<rp>(</rp><rt lang="grc">χαίρω</rt><rp>)</rp></ruby lang="la">（発音：<ruby lang="ja">カイロー<rp>(</rp><rt lang="la">khaírô</rt><rp>)</rp></ruby lang="ja">）は「<ruby>愉快<rp>(</rp><rt>よろこ</rt><rp>)</rp></ruby>ぶ」、「生きる力の充実さ」の意を示している。
カリスは単数形で、神秘的さ、「女神」と多面性、「たち」で修飾されている。<br />
古代ギリシャ語では、修飾部分を省いて、複数形がふくまれている「<ruby lang="la">Charites<rp>(</rp><rt lang="grc">Χάριτες</rt><rp>)</rp></ruby lang="la">」（発音：<ruby lang="ja">カリテス<rp>(</rp><rt lang="la">Charites</rt><rp>)</rp></ruby lang="ja">）とも呼ばれています。</p>
<h4>神として</h4>
<p>女神カリスたちの交わりの人数は様々で、２から１６神まで知られていますが、一般的人数を明らかにしない交わりでなければ、古典ギリシャ彫刻では、「カリス三美神たち」の形態で、ローマ、後に西洋美術に伝われて来たため、主に、３神と扱われて来ましたので、以下、その３神の名前を明らかにしました。</p>
<ul>
<li><ruby lang="la">Aglaeā<rp>(</rp><rt lang="grc">Ἀγλαΐα</rt><rp>)</rp></ruby lang="la">（発音：<ruby lang="ja">アグライアー<rp>(</rp><rt lang="la">Aglaeā</rt><rp>)</rp></ruby lang="ja">）は<ruby>眩<rp>(</rp><rt>まぶ</rt><rp>)</rp></ruby>しくさせる輝かしい美しさでの<ruby>愉快<rp>(</rp><rt>よろこ</rt><rp>)</rp></ruby>び、</li>
<li><ruby lang="la">Euphrosynē<rp>(</rp><rt lang="grc">Εὐφροσύνη</rt><rp>)</rp></ruby lang="la">（発音：<ruby lang="ja">エウプロシュネー<rp>(</rp><rt lang="la">Euphrosynē</rt><rp>)</rp></ruby lang="ja">）は<ruby>宴<rp>(</rp><rt>うたげ</rt><rp>)</rp></ruby>で受けて来る<ruby>愉快<rp>(</rp><rt>よろこ</rt><rp>)</rp></ruby>び、</li>
<li><ruby lang="la">Thalia<rp>(</rp><rt lang="grc">Θάλεια</rt><rp>)</rp></ruby lang="la">（発音：<ruby lang="ja">タレイア<rp>(</rp><rt lang="la">Thalia</rt><rp>)</rp></ruby lang="ja">）は活気のありすぎる<ruby>豊<rp>(</rp><rt>ほう</rt><rp>)</rp>穣<rp>(</rp><rt>じょう</rt><rp>)</rp></ruby>の<ruby>愉快<rp>(</rp><rt>よろこ</rt><rp>)</rp></ruby>びを現わしています。</li>
</ul>
<h5>神女カリスたちとは？</h5>
<p>「<a href="https://ja.wikipedia.org/wiki/オウィディウス#.E3.80.8E.E7.A5.AD.E6.9A.A6.E3.80.8F" title="https://ja.wikipedia.org/wiki/オウィディウス#祭暦">祭暦</a>」において、花の冠を手にした優美な乙女たちの姿で表されて、<a href="/docs/ja/versailles/trianon/flore#note_flora" title="フロラ女神">フロラ</a>{#flora_6に給士しています。</p>
<hr>
<ul>
<li>註１に戻る： <a href="/docs/ja/versailles/trianon/flore#graces" title="女神カリスたち">活気に満ちたホラ神女たちとカリス神女たち ↑</a></li>
<li>註２に戻る： <a href="/docs/ja/versailles/trianon/flore#graces_2" title="女神カリスたち">カリス神女たちも加わって ↑</a></li>
</ul>
</div>
<p><br></p>
<h3 id="note_erechteus"><strong>エレクテウス</strong></h3>
<div class="notices yellow">
<h4><ruby lang="ja">エレクテウス<rp>(</rp><rt lang="la">Erechtheus</rt><rp>)</rp></ruby lang="ja">とは？</h4>
<p>古代ギリシャ語で、<ruby lang="la">Erekhtheús<rp>(</rp><rt lang="grc">Ἐρεχθεύς</rt><rp>)</rp></ruby lang="la">（発音：<ruby lang="ja">エレクテウス<rp>(</rp><rt lang="la">Erekhtheús</rt><rp>)</rp></ruby lang="ja">）は、神話に古代第六アテネ王として、町の元の神を指しています。  </p>
<h4>祭暦においては</h4>
<p>以上の文書では、<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>が、北風の<a href="/docs/ja/versailles/trianon/flore#ref_boree" title="ボレアス" id="boree_3">ボレアス</a>が<ruby lang="ja">エレクテウス<rp>(</rp><rt lang="la">Erechtheus</rt><rp>)</rp></ruby lang="ja">の娘<a href="https://ja.wikipedia.org/wiki/オーレイテュイア" title="https://ja.wikipedia.org/wiki/オレイテュイア"><ruby lang="la">Ōrithyia<rp>(</rp><rt lang="grc">Ὠρείθυια</rt><rp>)</rp></ruby lang="la"></a>（発音：<ruby lang="ja">オリテュイヤ<rp>(</rp><rt lang="la">Ōrithyia</rt><rp>)</rp></ruby lang="ja">）をさらったことを思い起こさせようとしています。<br />
<a href="https://ja.wikipedia.org/wiki/オーレイテュイア" title="https://ja.wikipedia.org/wiki/オレイテュイア">オリテュイヤ</a>の誘拐は、<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス">オウィディウス</a>が著わしたもう一つの作品である「<a href="https://ja.wikipedia.org/wiki/変身物語" title="https://ja.wikipedia.org/wiki/変身物語">変身物語</a>」の第６巻、６７７～７１３行に語られています。  </p>
<hr>
<ul>
<li>註１に戻る： <a href="/docs/ja/versailles/trianon/flore#erechthee" title="エレクテウス">エレクテウスの家から獲物を持ち去ったのでした ↑</a></li>
</ul>
</div>
<p><br></p>
<div class="notices yellow">
<p><a href="/docs/ja/versailles/trianon/flore#renvoi_chlorophylle" title="クロロフィル" id="chlorophylle">ノート</a>： 「クロロフィル」と日本語の発音の書き写しは、英語の「<ruby lang="ja">クロロファイル<rp>(</rp><rt lang="en">Chlorophyll</rt><rp>)</rp></ruby lang="ja">」からではなく、<ruby>葉<rp>(</rp><rt>よう</rt><rp>)</rp>緑<rp>(</rp><rt>りょく</rt><rp>)</rp>素<rp>(</rp><rt>そ</rt><rp>)</rp></ruby>が１８１６年に<a href="https://ja.wikipedia.org/wiki/ジョゼフ・ビヤンネメ・カヴェントゥ" title="https://ja.wikipedia.org/wiki/ジョゼフ・ビヤンネメ・カヴェントゥ"><ruby lang="ja">ジョゼフ<rp>(</rp><rt lang="fr">Joseph</rt><rp>)</rp></ruby lang="ja">・<ruby>ビヤンネメ<rp>(</rp><rt>Bienaimé</rt><rp>)</rp></ruby>・<ruby>カヴェントゥ<rp>(</rp><rt>Caventou</rt><rp>)</rp></ruby></a>によって単離されたことから、フランス語の「<ruby lang="ja">クロロフィル<rp>(</rp><rt lang="fr">Chlorophylle</rt><rp>)</rp></ruby lang="ja">」に従っているている。英語に従えば、発音に矛盾が避けられなくなります。  </p>
<hr>
<ul>
<li>註１に戻る： <a href="/docs/ja/versailles/trianon/flore#renvoi_chlorophylle" title="クロロフィル">エレクテウスの家から獲物を持ち去ったのでした ↑</a></li>
</ul>
</div>
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