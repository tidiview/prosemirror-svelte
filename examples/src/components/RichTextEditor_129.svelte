<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1>パエトン</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon_700x556.webp 700w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon_700x556.jpg" alt="ヴェルサイユ宮殿の庭園にある、アポロの泉水での太陽神であるアポロン" title="ヴェルサイユ宮殿の庭園にある、アポロの泉水での太陽神であるアポロン" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-380.jpg 380w, 
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-480.jpg 480w, 
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon_700x556.jpg 700w"></picture><figcaption>アポロンに運転されている太陽の<ruby><rb>車駕</rb><rt>しゃが</rt></ruby>が曙に洋から出始まっている</figcaption></figure>
<div class="notices yellow">
<p><a href="https://ja.wikipedia.org/wiki/ルイ14世_(フランス王)" title="https://ja.wikipedia.org/wiki/ルイ１４世_(フランス王)"><ruby>ルイ<rp>(</rp><rt>Louis</rt><rp>)</rp>１４世<rp>(</rp><rt>XIV</rt><rp>)</rp></ruby></a>は「<ruby>太陽王<rp>(</rp><rt>le&#160;Roi&#160;Soleil</rt><rp>)</rp></ruby>」とも呼ばれていることはよく知られていますが、本人がどういう訳で若いころに一人で自らそう選択したかとなると、そうでもないのであろう。<br />
もちろんある程度本人が著わした文書「<ruby>王子教育のための回顧録<rp>(</rp><rt>Mémoires&#160;pour&#160;l&#39;instruction&#160;du&#160;Dauphin</rt><rp>)</rp></ruby> 」 で答えが出て来ますが、以下の文書では、個人次元より、いわゆる太陽の選択が普段に理解されている王の自慢としてではなく、初期ヴェルサイユに開催されたバロック様式の開催ごとでの意義としてです。<br />
そういった太陽の偉大さの使用は、ここでは、文書に合わせて庭園にある<a href="https://ja.wikipedia.org/wiki/アポロンの泉水" title="https://ja.wikipedia.org/wiki/アポロンの泉水"><ruby>アポロン泉水<rp>(</rp><rt>le&#160;Bassin&#160;d'Apollon</rt><rp>)</rp></ruby></a>の真ん中に位置されている彫刻家<ruby>ジャン<rp>(</rp><rt>Jean</rt><rp>)</rp>＝<rp>(</rp><rt>-</rt><rp>)</rp>バティスト<rp>(</rp><rt>Baptiste</rt><rp>)</rp>・<rp>(</rp><rt></rt><rp>)</rp>テュビ<rp>(</rp><rt>TUBY</rt><rp>)</rp></ruby>が１６６８年から１６７１年まで作った《<ruby>太陽の車駕<rp>(</rp><rt>le&#160;Char&#160;du&#160;Soleil</rt><rp>)</rp></ruby>》に表されています。<br />
ローマ帝国の大帝様たちを模範に大負けに世の源である太陽神<a href="https://ja.wikipedia.org/wiki/アポロン" title="https://ja.wikipedia.org/wiki/アポロン"><ruby>アポロン<rp>(</rp><rt>Apollon</rt><rp>)</rp></ruby></a> から由来されているとはよく知られていながら、具体的にどういうような世と、どういうような源かとなりますと、知られているかのように見えていながらも、当時に評価された意義ではほとんど知られていません。<br />
その点では、ローマ帝国時代作家<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス"><ruby>オウィディウス<rp>(</rp><rt>Ovidius</rt><rp>)</rp></ruby></a> が書いた「<a href="https://ja.wikipedia.org/wiki/変身物語" title="https://ja.wikipedia.org/wiki/変身物語"><ruby>変身物語<rp>(</rp><rt>Metamorphoseon</rt><rp>)</rp></ruby></a> 」に出て来る、太陽神アポロンの不思議な息子<a href="https://ja.wikipedia.org/wiki/パエトン" title="https://ja.wikipedia.org/wiki/パエトン"><ruby>パエトン<rp>(</rp><rt>Phæton</rt><rp>)</rp></ruby></a>の悲劇的な死がいろいろ考えさせてくれています。<br />
ルイ１４世が身近くこの作品を愛したことも、王付歴史作文家ともなった<a href="https://ja.wikipedia.org/wiki/ジャン・ラシーヌ" title="https://ja.wikipedia.org/wiki/ジャン・ラシーヌ"><ruby>ジャン<rp>(</rp><rt>Jean</rt><rp>)</rp>・<rp>(</rp><rt></rt><rp>)</rp>ラシーヌ<rp>(</rp><rt>RACINE</rt><rp>)</rp></ruby></a>作家に特別にこの作品を夜の朗読として貰うことを依頼したことでもよく知られています。<br />
このページを読んで下さっている方々にも、こういった神秘的な何かが太陽の光によって見えて来るようにと願っています…　お楽しみに☆<br />
ちなみに改善するところが出てきたら、<a href="#github-link" title="訂正の提供">ここ</a>まで訂正の提供を宜しくお願いします。<br />
ご意見を知らせたい方々に、<a href="https://francois-vidit.com/ja#御問い合わせ" title="御問い合わせ">御問い合わせ</a>を宜しくお願いします。</p>
</div>
<p><span style="color: #df8a13;"><strong>パエトン</strong></span>  </p>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"/></svg></span>
大陽神の宮殿は、そそり立つ列柱に支えられて、高々とそびえ、きらめく黄金と、燃えるような<ruby>赤<rp>(</rp><rt>しゃく</rt><rp>)</rp>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>とで<ruby>燦<rp>(</rp><rt>さん</rt><rp>)</rp>爛<rp>(</rp><rt>らん</rt><rp>)</rp></ruby>と輝いていた。
最上部の<ruby>破<rp>(</rp><rt>は</rt><rp>)</rp>風<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>は、まばゆい<ruby>象<rp>(</rp><rt>ぞう</rt><rp>)</rp>牙<rp>(</rp><rt>げ</rt><rp>)</rp></ruby>で飾られているし、両開きの<ruby>門<rp>(</rp><rt>もん</rt><rp>)</rp>扉<rp>(</rp><rt>ぴ</rt><rp>)</rp></ruby>は、銀で光っている。
もっとも、材料よりも、細工のほうがまさっていた。
扉に浮き彫りを施したのは、<ruby>鍛<rp>(</rp><rt>か</rt><rp>)</rp>冶<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>の神ウルカヌスだったからだ。
陸地をとり囲んでいる海、大地、そしてそのうえの天――これが図柄だった。
海には、<ruby>紺<rp>(</rp><rt>こん</rt><rp>)</rp>碧<rp>(</rp><rt>べき</rt><rp>)</rp></ruby>の海神たちがいる。
<ruby>法<rp>(</rp><rt>ほ</rt><rp>)</rp>螺<rp>(</rp><rt>ら</rt><rp>)</rp>貝<rp>(</rp><rt>がい</rt><rp>)</rp></ruby>を吹き鳴らすトリトン、さまざまな姿に化身するプロテウス、そのたくさんな腕で鯨たちの巨大な背につかまっているアイガイオンなどだ。
母親につれられた海の<ruby>精<rp>(</rp><rt>ネレイス</rt><rp>)</rp></ruby>たちの姿も見られるが、そのうちのいくらは泳いでいるし、いくらかは岩に坐って、みどりの髪を乾かしている。
かとおもうと、別に、負の背に乗って運ばれているのもいる。
みんなが同じ顔立をしているわけではないが、かといって大した違いもなく、姉妹らしく似通っているというところだ。</p>
<p>つぎに、大地には、人間たちや都市、森や獣たち、河川や、<ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby>や、その他の田園の神々が乗っかっている。
これらの上に、輝く天空がえがかれていて、十二宮のうちに六つが右の扉に、同数が左の扉に見えている。</p>
<p><sup>２０</sup>
さて、パエトンは、坂道をのぼりながらここへやって来て、父親の――とはいっても、本当の父であるかどうかはまだ疑しかった――家へはいると、ただちに神の面前へと進んだ。
が、手前のほうの離れたところで、立ちどまった。
強い光に耐えられなくて、これ以上は進めなかったからだ。
太陽神は、<ruby>緋<rp>(</rp><rt>ひ</rt><rp>)</rp>色<rp>(</rp><rt>いろ</rt><rp>)</rp></ruby>の衣をまとって、エメラルドで<ruby>燦<rp>(</rp><rt>さん</rt><rp>)</rp>然<rp>(</rp><rt>ぜん</rt><rp>)</rp></ruby>と光っている王座に坐っていた。
左右には、「日」と「月」と「年」と「世紀」、それに、等しい間隔を置いて並んだ「時」たちが控えている。
さみどりの「春」は、花の冠をいただいて立ち、衣を脱ぎ捨てた「夏」は、麦の穂の輪飾りをつけている。
「秋」は、踏みくだいた<ruby>葡<rp>(</rp><rt>ぶ</rt><rp>)</rp>萄<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>の色に染まり、寒冷の「冬」は、白髪を<ruby>逆<rp>(</rp><rt>さか</rt><rp>)</rp>立<rp>(</rp><rt>だ</rt><rp>)</rp></ruby>てている。</p>
<p>これらの真ん中に場を占めた太陽神は、万物を見おろすあの目で、あたりの異様な様子におびえている若者を見やった。</p>
<p>「どうしてここヘやって来たのか？」<br />
と神はいう。<br />
「空高いこの宮殿に何の用があるのか、まぎれもないわが子パエトンよ？」</p>
<p>パエトンは答える。</p>
<p>「この広い世界をあまれく照らしている光よ、太陽神よ、あなたがぼくのお父さんですね！
あなたをそのように呼ばせてくださるのなら、そして、お母さんが自分の<ruby>過<rp>(</rp><rt>あやま</rt><rp>)</rp></ruby>ちを偽りの見せかけでおおい隠しているのでなければ、わたしが本当にあなたの孑であると思えるような証拠を与えてください！
ぼくの心から迷いを取りはらってほしいんです！」</p>
<p><sup>４０</sup>
彼はこういうと、父親は、頭のまわりに輝いている陽光の冠を<ruby>外<rp>(</rp><rt>はず</rt><rp>)</rp></ruby>して、もっと近くへ寄るように命じた。
そして、やさしく抱擁しながらこういった。</p>
<p>「おまえは、当然、わたしの孑と呼ばれてよいのだ。
クリュメネも、おまえの本当の出生を告げている。
さあ、おまえの疑いを晴らすためだ、何なりとほしいものをいうがよい！
わたしがその望みをかなえてやろうから。
この約束の証人には、わたしの目もとどかぬ地下にあって、神々の誓約に立ち合うという、あの<ruby>冥<rp>(</rp><rt>めい</rt><rp>)</rp>府<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>の河をたてるとしよう」</p>
<p>まだいい終えもしないうちに、パエトンは父の<ruby>車<rp>(</rp><rt>しゃ</rt><rp>)</rp>駕<rp>(</rp><rt>が</rt><rp>)</rp></ruby>をねだった。
ほんの一日だけ、脚に翼をもった馬たちをあやつる権限を与えてほしいとというのだ。</p>
<p>父は、誓ったことを後悔した。
その輝しい頭を三度、四度とうち振りながら、こういった。</p>
<p>「そういわれてみて、わたしの言葉が軽率であったとがわかった。
約束をひっこめることができればな！
じつをいえば、それだけは断わりたいところだ。
ともかく、わたしの勧めを聞きいれて、思いとどまってくれればさいわいだ。
よいか、おまえの願いは危険をはらんでいる。
パエトンよ、おまえは大それたことを求めているのだ。
おまえの力では、まだ子供っぽいおまえの年齢では、とても無理な注文なのだ。
おまえは、人間として生まれていながら、人間には不相応なことを要求している。
そうだ、天上の神々にさえ許されえないようなことを、わけもわからずに望んでいるのだ。
神々なら、みんな、自分の能力に自信をもってはいるだろうが、しかし、わたし以外にはどの神も。燃える火日を運ぶ車を乗りこなすことはできはしない。  </p>
<p><sup>６０</sup>
広大なオリュムポスの支配者であり、恐ろしい右手ではげしい雷電を投げつけるユピテルでさえも、そうなのだ。</p>
<p>よいが、前半の進路は、険しい上り坂で、早朝の英気に充ちている馬たちも、進むのに手こずるのだ。
ようやく中央にさしかかると、ここは大そう高いところだ。
海と陸とを見下ろすと、このわたしでさえ恐怖をおぼえることがしばしばで、ぞっとするような<ruby>怖<rp>(</rp><rt>こわ</rt><rp>)</rp></ruby>さに、胸が騒ぐ。
後半の道は、<ruby>急<rp>(</rp><rt>きゅう</rt><rp>)</rp>勾<rp>(</rp><rt>こう</rt><rp>)</rp>配<rp>(</rp><rt>ばい</rt><rp>)</rp></ruby>の<ruby>下<rp>(</rp><rt>くだ</rt><rp>)</rp></ruby>りとなり、確実な手綱さばきが必要だ。
この時は、下方にひろがる波間にわたしを迎えてくれるテテュス女神でさえ、わたしがまっ逆さまに墜落しはしないかと、不安にかられるのが常だ。
そのうえ、こんなこともある。
天空というのは、不断とぐるぐると回っていて、いや高い星々を道連れに、これらをも急回転させている。
わたしは、これに逆って進み、ほかのものすべてを巻きこんでいるこの猛烈な動きにも負けはしないで、この急旋回の反対方向に進んで行くのだ。
が、馬車を前にあずけたとしよう。
おまえは、どうするだろう？
天極の回転に、対面進行ができるだろうか？
迅速な天軸に引きさらわれないですむだろうか？
おまえは、天にも、森や、神々の都市や、どっさりと供物をささげられた社などがあると思っているのだろう。
とんでもない、隠れた危険や<ruby>異<rp>(</rp><rt>い</rt><rp>)</rp>形<rp>(</rp><rt>ぎょう</rt><rp>)</rp></ruby>の獣たちのあいだを通って行かねばならないのだ。
正しい進路を守り、横にそれないで行ったとしても、
<sup>８０</sup>
しかし、立ちはだかる『雄牛』の<ruby>角<rp>(</rp><rt>つの</rt><rp>)</rp></ruby>や、テッサリアの『射手』や、荒々しい『獅子』の<ruby>腭<rp>(</rp><rt>あぎと</rt><rp>)</rp></ruby>や、長々と腕を彎曲させた『蠍』や、同じ別方向に腕を曲げている『蟹』などを、越えて行かなければならない。
胸のうちで養われ、口と鼻から吐き出されるあの炎によっていきりたった馬たちを御することも、おまえには容易なことではない。
はげしい高ぶりを<ruby>灼<rp>(</rp><rt>やく</rt><rp>)</rp>熱<rp>(</rp><rt>ねつ</rt><rp>)</rp></ruby>させ、頸で手綱にはかってくれば、わたしのいうことをさえ聞こうとしない馬たちなのだ。</p>
<p>よいか、気をつけるのだ、わたしに危険な贈り物をさせないようにな！
手おくれにならないうちに、望みを訂正することだ。
確かな証拠がほしいというのは、きっと、わたしの孑だ信じたいからだろう。
わたしはこんなに心配していることが、その確かな証拠ではないか。
父親らしいこの不安によって、わたしが父親であることが証明されている。
そら、わたしの顔を見るがよい！
いやそれよりも、この胸の中をのぞきこんで、内心の苦悩をわかってもらえたらなあ！
さあ、これが最後だ。
この豊かな世界が持っているすべてのものを見回して、天、海のおびただしい宝のなかから、何なりと望むがよい。
拒否を受けることは、ありはしない。
ただ、先ほどの願いだけは困るのだ。
本当にいえば、あれは刑罰ともいうべきものであって、恩恵にはならないからだ。
パエトンよ、おまえは贈り物のかわりに刑罰を求めているのだ。</p>
<p><sup>１００</sup>
おや、どうしたのだ、おばかさん？
甘えたようにわたしの頸に抱きついたりして。
なにも、疑うことはない。
おまえが望んだものなら、何なりと与えよう。
冥府の河にも、誓ったのだから。
しかし、もっと賢明な望みであってほしいのだ！」</p>
<p>父親は、忠告を終えた。
けれども、息子はその言葉に逆らって、要求をいい張った。
馬車をあやつってみたいという欲望に、燃えているのだ。
やむをえず、父親は、できるかぎり時間をひきのばしたあと、ついに、若者をそびえ立つ馬車のもとへと連れて行った。
<ruby>鍛<rp>(</rp><rt>か</rt><rp>)</rp>冶<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>の神ウルカヌスから贈られた車だ。
車軸も<ruby>轅<rp>(</rp><rt>ながえ</rt><rp>)</rp></ruby>も金製で、車輪の<ruby>外<rp>(</rp><rt>そと</rt><rp>)</rp>縁<rp>(</rp><rt>ぶち</rt><rp>)</rp></ruby>も金だったが、ハ方にひろがる<ruby>輻<rp>(</rp><rt>や</rt><rp>)</rp></ruby>は銀製だった。
<ruby>軛<rp>(</rp><rt>くびき</rt><rp>)</rp></ruby>に沿ってはめこまれた黄玉と、やはりそこにちりばめられているいろんな宝石が、太陽神の輝く光をはね返している。</p>
<p>パエトンは、胸をふくらせて、これらの細工に目を見張っていた。
すると、そのときだ。
光まばゆい東方にあたって、目覚めの早い「<ruby>署<rp>(</rp><rt>アウロラ</rt><rp>)</rp></ruby>」が、真紅の門と、バラ色の輝きにみちた広間を開け放ったのだ。
星々は、ちりぢりに逃げ去って行く。
その星たちの<ruby>殿<rp>(</rp><rt>しんがり</rt><rp>)</rp></ruby>をつとめて、「明けの明星」が、最後に、空の陣屋をあとにする。</p>
<p>この星が沈み、空が明るくなり、残月の鎌が消えて行くのを見ると、太陽神は<ruby>速<rp>(</rp><rt>すみや</rt><rp>)</rp></ruby>かな「時」たちに、馬を<ruby>鉋<rp>(</rp><rt>くびき</rt><rp>)</rp></ruby>につけるよういいつけた。
「時」の女神たちは、大急きで命令を実行する。
<sup>１２０</sup>
火炎を吐き、<ruby>神饌<rp>(</rp><rt>アムブロシア</rt><rp>)</rp></ruby>の美味に満腹している馬たちを、そびえる<ruby>厩<rp>(</rp><rt>うまや</rt><rp>)</rp></ruby>から引き出して、高鳴る<ruby>轡<rp>(</rp><rt>くつわ</rt><rp>)</rp></ruby>をつけるのだ。
それから、父親は、あらたかな薬液をわが子の顔に塗り、これによって、燃えさかる炎を防ぐようにさせた。
そうしたうえで、太陽光の冠を頭にのせてやる。
そして、騒ぐ胸のうちから<ruby>溜<rp>(</rp><rt>た</rt><rp>)</rp></ruby>め<ruby>息<rp>(</rp><rt>いき</rt><rp>)</rp></ruby>を――悲しい結末への虫の知らせであっただろう――吐きながら、こういった。</p>
<p>「せめて、できれば、父の忠告だけは聞きいれてもらいたい。</p>
<p>よいかな、拍車を用いることは控え目に、手綱のほうを強く使うのだ。
馬たちは、勝手に駈けて行く。
その気になっている彼らをおさえるのが、ひと仕事だ。
それに、五つの天帯を一直線に通るようなことは、してはならない。
大きく弧をえがいて、斜めに走る道がついていて、これは、三つの天帯の範囲外には出ないで、南の極も、北風の荒れる『大熊』のあたりをもよけている。
この道を進むのだ！
いつもの車輪の跡が、はっきりと見えるはずだ。
それから、天と地が等しい暑さを分かつようにしなければならない。
それには、進路を下げすぎたり、天頂を通ったりはしないことだ。
高くのぼりすぎれば、天界の宮殿を焼くことになるだろう。
低すぎれば、大地を焼く。
中間を行くのが、もっとも安全だ。
右にそれすぎて、とぐろを巻いた『蛇』にぶつかってもいけないし、左に寄りすぎて、低い『祭壇』に行きあたってもまずい。
<sup>１４０</sup>
そうしないためには、両者の真ん中を進むことだ。
運命女神に任せるとしよう。
この神が加護を垂れて、おまえ自身より以上に、おまえのうえを案じてくれることを望むばかりだ。</p>
<p>おお、こういっているうちにも、湿った夜が『西方』の海辺の終着点についたようだ。
われわれも、ぐずぐずしてはいられない。
もう、呼び出しがかかっている。
闇が逃げ去って、『<ruby>曙<rp>(</rp><rt>アウロラ</rt><rp>)</rp></ruby>』が輝いているのだ。
手綱をつかむがよい！
いや、心が変えることができるなら、わたしの馬車よりも、わたしの忠告を役立てることだ。
今なら、それができる。
まだ、固い地面に足を置いている。
わけもわからないで、間違って望んだこの馬車に、まだ乗りこんでもいない。
大地に光を与える役は、やはりわたしにやらせてくれるのだ！
おまえが、無事に、その光を見ていられるようにな」</p>
<p>が、パエトンは若々しいからだで、軽快な馬車に乗りこんだ。
すっくと立ちあがると、任された手綱を手にして喜び、浮かぬ顔をしている父親に車上から感謝を送る。</p>
<p>そうするうちにも、太陽神の足の早い馬たちは――ピュロエイス、エオーオス、アイトン、そしてプレゴンの四頭だが――火を吐くいななきであたりを満たし、防柵の横木を足で蹴っている。
女神テテュスが、孫の運命も知らずに、防柵を押しのけると、広々とした大空が開けた。
馬たちは、さっと走り出し、<ruby>空<rp>(</rp><rt>くう</rt><rp>)</rp></ruby>を飛ぶ足で、邪魔な雲をわける。
翼に乗って浮揚する彼らは、同じ方角から湧き出た「東風」を追い抜いて行った。
<sup>１６０</sup>
けれども、車の中味は軽く、太陽神の馬たちにもそれと感じられるほどのものではなかった。
<ruby>軛<rp>(</rp><rt>くびき</rt><rp>)</rp></ruby>にかかる重さも、いつもほどではない。
適当な積荷を欠いた船は、ゆれがひどく、軽すぎるために不安定で、波にもてあそばれる――ちょうどそのようだった。</p>
<p>四頭の馬たちは、それを知ると、にわかに暴走し始めて、踏みなれた道を離れ、いつものような正規の進路を走ろうとはしないのだ。
パエトン自身は、震えあがった。
任された手綱をどちらへさばけばよいのか、どこを通ればよいのか、さっぱりわからない。
もしわかったとしても、馬たちをあやつることはできはしなかっただろう。
こうして、このときはじめて、冷えきった「北斗星」が熱くなり、禁じられた海に浴そうとして空しい努力を試みた。
氷雪に閉ざされた北の極に最も近い「蛇」は、これまでは寒さのために<ruby>未<rp>(</rp><rt>み</rt><rp>)</rp>曾<rp>(</rp><rt>ぞ</rt><rp>)</rp>有<rp>(</rp><rt>う</rt><rp>)</rp></ruby>の怒りを爆発させた。</p>
<p>あの「牛飼い」星も、あわてふためいて逃げたというが、ただし、足は遅かったし、みずからの牛車が足手まといになったとか。</p>
<p>哀れなパエトンは、天の頂きから、はるか、はるか下にひろがる大地を見おろしたとき、青くなった。
<sup>１８０</sup>
にわかに恐怖に襲われて、膝が震え、あまりにまばゆい光に、目がくらんだ。
今となっては、父の馬に手出ししたりはしなければよかったのだと思い、自分の生まれを知り、要求をいい張ったことが悔やまれる。
メロプス王の孑であるのほうがましだったと考えながら、まるではげしい北風にもあそばれる小舟のように、運ばれてゆく。
船頭が、役に立たなくなった<ruby>舵<rp>(</rp><rt>かじ</rt><rp>)</rp></ruby>を放し、神々を祈りとに舟を任せたようなものだ。</p>
<p>どうしたらよいのだろう？
すでに、天路の多くをあとにしていたが、それよりも多くが眼の前に控えている。
両方の長さを、心の中ではかってみる。
そこに着く<ruby>運命<rp>(</rp><rt>さだめ</rt><rp>)</rp></ruby>にはなっていない西方を見やっては、今度は、東のほうをふり返る。
どうすればよいのかわからなくて、呆然とし、手綱を弛めもせねば、控えることも出来ない。
呼びかけるべき馬の名を知ってもいないのだ。
星が点在する空のあちこちに、<ruby>異<rp>(</rp><rt>い</rt><rp>)</rp>形<rp>(</rp><rt>ぎょう</rt><rp>)</rp></ruby>のものや、巨大な獣の姿がたちらばっているのを見て、ふるえあがる。
ある場所には、「<ruby>蠍<rp>(</rp><rt>さそり</rt><rp>)</rp></ruby>」が二本の<ruby>蟄<rp>(</rp><rt>はさみ</rt><rp>)</rp></ruby>を弓なりにして、曲げた尾と、両側に張った腕とで、二つの天宮にからだを伸ばしている。
この怪物が黒い毒の汗をかきながら、<sup>２００</sup>くねらせた尾の先て傷を与えようと身構えているのを見ると、若者はわれを忘れて、冷たい恐怖で手綱を放してしまった。</p>
<p>その手綱が背中に乗っかると、馬たちは進路をそれ、誰に妨げられることもなしに、未知の空間を進んでゆく。
勢いにまかせて、どこへでも、やみくもに暴走するのだ。
高い空にちりばめられた星たちにぶつかったり、道なきあたりに車をさらっていたりする。
天の頂きまで届こうとするかと思うと、急な下り坂と<ruby>逆<rp>(</rp><rt>さか</rt><rp>)</rp>落<rp>(</rp><rt>お</rt><rp>)</rp></ruby>としの道を通って、ぐっと地上に近いあたりを駆けてゆく。
月の女神は、兄の馬たちが自分よりも低いところを走っているのを見て、びっくりする。
焼けた雲が、煙を噴いている。
土地は、高ければ高いほど、裂けて割れ目を生じ、水分を奪われて干上がっている。
牧草は白茶け、木々は葉とともに焼けて、乾いた穀物は、みずからの災禍に油をそそいでいる。</p>
<p>嘆きは、これだけにはとどまらない。
大きな<ruby>市<rp>(</rp><rt>まち</rt><rp>)</rp>々<rp>(</rp><rt>まち</rt><rp>)</rp></ruby>が、城壁とともに滅び、さらに火の手は、すべての国々を住民ごと灰にする。
森も、山もろともに燃えあがる。
こうして、アトスや、キリキアのタウロスや、トモロスや、オイタなどの山々が燃える。
以前は豊富だったイダ山も、このときキからびた。
詩女神たちが住むヘリコンも、オイアグロス王の支配を受ける前のハイモスも、焼かれる。
<sup>２２０</sup>
エトナ火山は、みずからの火と、天のそれとの二重の火で、いやというほどに燃えあがった。
パナソスのふたつの峰も、エリュクスも、キュントスも、オトリウスも、ついに万年雪を失う<ruby>破<rp>(</rp><rt>は</rt><rp>)</rp>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>となるロドペも、燃えた。
ミマスも、ディンデュマも、ミュカレも、ディオニュソスの祭祀を迎えるべきキタイロンも、同じだった。
スキュティアの寒さも、みずからを守ることはできなかったし、コーカサスも、焼けただれた。
ピンドスとともにオッサも、そのふたつよりも高いオリュムポスも、天高いアルプスも、雲をしたがえるアペニンの山々も燃えた。</p>
<p>パエトンは、まさにこの時、大地が四方ハ方で燃えるのを見た。
みずからも、あまりの熱さにこらえきれず、底深い熔鉱炉から吐き出されるかのような熱気を呼吸し、乗った馬車が灼熱するのを感じた。
灰と、ふりかかる火の紛には、もう我漫ができない。
むっとする煙に、四方からとり巻かれる。
あたりは真暗闇で、どこへ進んでいるのか、どこにいるのかもわからない。
飛ぶような馬たちの思うがままに、さらわれて行くだけだ。</p>
<p>アイティオピア人が黒い肌になったのは、この時だと信じられている。
熱さのために、血液がからだの表層に引き寄せられたからだというのだリビュアの地が、やはり熱のために、水分を奪われて、乾いた砂漠になったのも、この時だし、<ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby>たち髪をふり乱して、消え失せた泉や湖を嘆いたのも、同じ時だ。
<sup>２４０</sup>
ボイオティアの住民は、ディルケの泉を、アルゴスとコリントスの民は、それぞれアミュモネとペイレネの泉を哀惜する。
川幅の広い河川も、安全というわけにはいかなかった。
タナイスは流れの中ほどから湯気を発したし、年を経たペネイオスも、ミュシアの国のカイコスも、速い流れのイスメノスも、アルカディアのエリュアントスも、蛇行を楽しむアイアンドロス、トラキアのメラス、ラコニアのエウロタス――これらも同じ運命をたどった。
バビロニアのエウプラテスも燃え、オロンテスも、流れの速いテルモドンも、ガンジスも、パシスも、ヒストロスも、燃えた。
アルペイオスは煮えたぎり、スペルケイオスの<ruby>堤<rp>(</rp><rt>つつみ</rt><rp>)</rp></ruby>も炎上した。
タゴスの流れが運が砂金は、火で溶けたし、リエディアの力ユストロスの流れに住み、堤に歌をひびかせていた白鳥たちは、河の中ほどで焼け死んだ。
ナイルは、恐れおののいて地の果てに逃がれ、頭を隠して、いまだにそれを現わしてはいない。
その七つの河口は、水が<ruby>涸<rp>(</rp><rt>か</rt><rp>)</rp></ruby>れて、砂に埋まり、七つの凹んだ水路には、流れがないのだ。
トラキアの河――ヘブロスとストリュモンも、同じうき目をみて、干あかった。
西方の河たちも、これに変わりはない。
レヌス、ロダヌス、パドゥス、それに、世界支配を約束されたティベリスなどが、それだった。</p>
<p><sup>２６０</sup>
土地は、一面に裂け、光がその割れ目から「下界」にまでさしいって、冥府の王と王妃とを驚かせる。
海も収縮して、今まで水をたたえていた海原は、乾いた砂地となる。
深海の底にあった山々が、姿を現わし、散在するクュクラデス群島の数がふえる。
魚たちは水底にひそみ、<ruby>海豚<rp>(</rp><rt>いるか</rt><rp>)</rp></ruby>たちも、いつものように、からだをそらせて水面上に躍ろうとはしない。
<ruby>海豹<rp>(</rp><rt>あざらし</rt><rp>)</rp></ruby>が――もう死んでいるのだが――海面に仰向けになって、浮いている。
ネレウス自身も妻のドリスや娘たちを連れて、洞窟に隠れたといわれている。
その洞窟も、すでにいくらか熱くなっていたとか。
ネプトゥヌスは、三度も、その腕とこわい顔を水からあげようとしたが、三度とも大気中の火炎に耐えきれなかった。</p>
<p>だが、万物を養う「大地」だけは、黙っていなかった。
四方を海に囲まれた彼女は、その水と、いたるところで縮みあがって、母なる彼女の暗いふとヘ身を隠していた泉たちにはさまれながら、息苦しい顔を、やっと首まで持ち上げた。
熱をさえぎるために、手を<ruby>額<rp>(</rp><rt>ひたい</rt><rp>)</rp></ruby>にあて、大きく身を震えるわせて万物をゆるがすと、少しからだを沈めていつもより低い姿勢とり、おごそかな声でつぎのようにいった。</p>
<p>「神々の王者よ、このありさまがあなたのみ心にかない、わたしがそれを受けるにふさわしいというのなら、
<sup>２８０</sup>
どうして、いっそのこと、雷電を振るおうとなさらないのですか？
どのみち火力によって滅びなければならないのなら、あなたの雷火で死なせてくださいませ！
あなたのようなおかたの手にかかるのだと思えば、諦めもつき易いというものでしょう。
これだけのことをいうのにも、口も開きがたいありさまです！」<br />
――熱気に口をふさがれていたからだ――<br />
「そら、焼け焦けたこの髪をごらんください！
目にも、口にも、こんなに灰が！
これがわたしへの報いなのですか？
わたしの生産力と働きにたいする、これが<ruby>褒<rp>(</rp><rt>ほう</rt><rp>)</rp>賞<rp>(</rp><rt>しょう</rt><rp>)</rp></ruby>だとおっしゃるのですか？
<ruby>鉤<rp>(</rp><rt>かぎ</rt><rp>)</rp></ruby>なりの<ruby>鋤<rp>(</rp><rt>すき</rt><rp>)</rp></ruby>と、<ruby>鍬<rp>(</rp><rt>くわ</rt><rp>)</rp></ruby>による傷に耐えながら、一年のあいだじゅう痛めつけられているわたし、家畜には木の葉を、人間には殻物という快い食糧を与え、神々にも<ruby>香<rp>(</rp><rt>こう</rt><rp>)</rp></ruby>をさしあげているわたしにたいする？</p>
<p>それでも、わたしは破滅がふさわしいといたしましょう。
ですが、海は、――それを支配なされている弟さまは、何をこうむるのにふさわしかったのでしょう？
あのかたに割りあてられた海が縮んで、ますます天から遠のいて行くのは、なぜでしょう？
でも、弟さまやわたしへの思いがあなたの心を動かさないとしても、ご自身の天空をお哀れみになるべきです！
その再極を、見渡してごらんなさいませ。ふたつとも、煙を出しています！
もし火炎がそれらをそこなえば、あなたがたのお<ruby>住<rp>(</rp><rt>すま</rt><rp>)</rp>居<rp>(</rp><rt>い</rt><rp>)</rp></ruby>が、崩れてしまいましょう。
ほら、アトラスみずからもあんなに手こずって、<ruby>灼<rp>(</rp><rt>しゃく</rt><rp>)</rp>熱<rp>(</rp><rt>ねつ</rt><rp>)</rp></ruby>する天を肩で支えかねています。
海が、天界が滅びるなら、わたしたちは昔の<ruby>混沌<rp>(</rp><rt>カオス</rt><rp>)</rp></ruby>に逆もどりするのです。
燃える炎のなかから、まだ残っているものを取り出すことです！</p>
<p><sup>３００</sup>
全世界のためを、思うときです！」</p>
<p>「大地」はこれだけいった。
これ以上は熱気に耐えれず、もっと話すことはできなかったのだ。
そして、みずからのふところに顔を隠し、冥界にいっそうに近いほら穴に退いた。</p>
<p>いっぽう、全能の父ユピテルは、馬車を貸し与えた当の神はもちろんのこと、その他もろもろの神々をも立ち合わせ、今ここで助けを送らなければ、悲運のもとに万物が滅び去るであろうことを確認した。
そうしてから、いや高い天の頂きへ高い天のぼっていったのだが、いつも、ここから、広大な大地のうえに雲をひろげたり、<ruby>雷<rp>(</rp><rt>いかずら</rt><rp>)</rp></ruby>を鳴動させて雷電を投げたりするのがつねだ。
が、この時は、地面のうえにひろげるべき雲も、天から降らせるべき雨も、焼き尽くされて姿はなかった。</p>
<p>いま、まず雷鳴をおこす。
それから、右耳の横に雷電を構え、馬車を御しているパエトンに投げつけた。
パエトンは馬車から落ち、同時に生命をも失った。
ともかく、ユピテルは、はげしい火によって、火を制庄したのだ。</p>
<p>馬たちは、狼狽して、たがいに反対方向に跳びはね、<ruby>軛<rp>(</rp><rt>くびき</rt><rp>)</rp></ruby>から頸をはずし、ちぎれた手綱を残して走り去る。
こちらには手綱が、あちらには、<ruby>轅<rp>(</rp><rt>ながえ</rt><rp>)</rp></ruby>からもぎ離された心棒が、そのあちらには、こわれた車輪の<ruby>輻<rp>(</rp><rt>や</rt><rp>)</rp></ruby>が横たわり、見る影もない馬車の残骸が、ほうぼうに散らばっている。</p>
<p><sup>３２０</sup>パエトンは、赤茶けた髪の毛を炎にいたぶられ、もんどり打って<ruby>真<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>っ<ruby>逆<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>さまに、流星のように長尾を引いて、空中を落ちていた。
星は、実際には落ちはしないのだが、時として、澄んだ空から落ちてくるようにことがあるのだ。</p>
<p>墜落したパエトンを受けとったのは、故国を遠く離れた異境の地の、大いなるエリダノスの流れだった。
この河が、煙を噴いている彼の顔を、洗いきよめた。
「西方」の水の精たちが、<ruby>三<rp>(</rp><rt>みつ</rt><rp>)</rp>又<rp>(</rp><rt>また</rt><rp>)</rp></ruby>の雷火にくすぶっているからだを埋葬し、墓石につぎのような碑銘をしろした。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>「 ここにパエトンが眠っている</td>
</tr>
<tr>
<td></td>
<td>父なる神の<ruby>車<rp>(</rp><rt>しゃ</rt><rp>)</rp>駕<rp>(</rp><rt>が</rt><rp>)</rp></ruby>をあやつり</td>
</tr>
<tr>
<td></td>
<td>ちから及ばずして<ruby>逝<rp>(</rp><rt>ゆ</rt><rp>)</rp></ruby>く</td>
</tr>
<tr>
<td></td>
<td>その大いなる雄図むなしく 」</td>
</tr>
</tbody>
</table>
<p>哀れな父親は、悲しみやつれて、顔を隠し、まる一日のあいだ日が出なかったといわれているが、そうとすれば、あの災いにも何かの効用はあったことになる。 <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"/></svg></span></p>
<p><span style="color: #df8a13;">オウィディウス、変身物語、第２巻より</span>  </p>
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