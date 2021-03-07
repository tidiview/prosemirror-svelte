<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<h1>サン＝レミ</h1>
<div id="body-inner">
				<div class="notices green">
<p>フランス語では、「<a href="#note_remigius" title="レミギウス"><ruby lang="ja">サン<rp>(</rp><rt lang="la">saint</rt><rp>)</rp>＝<rp>(</rp><rt lang="la">-</rt><rp>)</rp>レミ<rp>(</rp><rt lang="la">Rémi</rt><rp>)</rp></ruby lang="ja"></a>」、あるいは史料のラテン語からでは「<ruby lang="ja">聖<rp>(</rp><rt lang="la">sanctus</rt><rp>)</rp>レミギウス<rp>(</rp><rt lang="la">Remigius</rt><rp>)</rp></ruby lang="ja">」がフランク族の王であるフランス語では<ruby lang="ja">クロヴィス<rp>(</rp><rt lang="la">Clovis</rt><rp>)</rp></ruby lang="ja">、ラテン語から「<ruby lang="ja">クロドウェクス<rp>(</rp><rt lang="la">Chlodovechus</rt><rp>)</rp></ruby lang="ja">」に洗礼をしたことは中世時代でのキリスト教の主な著書といえる<a href="https://ja.wikipedia.org/wiki/ヤコブス・デ・ヴォラギネ" title="https://ja.wikipedia.org/wiki/ヤコブス・デ・ヴォラギネ"><ruby lang="ja">ヤコブス<rp>(</rp><rt lang="la">Jacobus</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>デ<rp>(</rp><rt lang="la">de</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>ヴォラギネ<rp>(</rp><rt lang="la">Voragine</rt><rp>)</rp></ruby lang="ja"></a>が著した『<a href="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" title="https://ja.wikipedia.org/wiki/レゲンダ・アウレア"><ruby>黄金伝説<rp>(</rp><rt>レゲンダ・アウレア</rt><rp>)</rp></ruby></a>』の第１６章で主に語れています。</p>
</div>
<p><br></p>
<h2 class="green">１６章 聖レミギウス</h2>
<h3 class="green">その名前の最初の解釈</h3>
<p><a href="#note_remigius" title="レミギウス" id="remigius" class="green"><ruby lang="ja">レミギウス<rp>(</rp><rt lang="la">Remigius</rt><rp>)</rp></ruby lang="ja"></a>は、<span style="color: #3d8b3d;">〈牧養する者〉</span>の意の<ruby lang="ja">レミ<rp>(</rp><rt lang="la">remi</rt><rp>)</rp></ruby lang="ja">と<span style="color: #3d8b3d;">〈土地〉</span>の意の<ruby lang="ja">ギオス<rp>(</rp><rt lang="la">gios</rt><rp>)</rp></ruby lang="ja">とからきていて、<span style="color: #3d8b3d;">〈地の民をその教えで牧養する人〉</span>という意味である。<br />
あるいは、<ruby lang="ja">レミ<rp>(</rp><rt lang="la">remi</rt><rp>)</rp></ruby lang="ja">すなわち<span style="color: #3d8b3d;">〈牧者〉</span>と<ruby lang="ja">ギオン<rp>(</rp><rt lang="la">gyon</rt><rp>)</rp></ruby lang="ja">すなわち<span style="color: #3d8b3d;">〈戦い〉</span>とに由来し、<span style="color: #3d8b3d;">〈司教にして戦士〉</span>を意味する。<br />
というのは、彼は、彼の家畜たち、すなわち民衆をその説教の言葉とその善行の範例とその祈禱の助けとによって牧したからである。<br />
また、一般に武器には三種類のものがある。
防御のための楯、攻撃のための刀剣および身を守るための甲冑がそれである。<br />
<span style="color: #3d8b3d;">レミギウス</span>は、信仰を循とし、聖書を剣とし、希望を甲冑として悪魔と戦ったのである。<br />
彼の伝記を書きしるしたのは、ランスの大司教<a href="#note_hincmar" title="ヒンクマル" id="hincmar" class="green"><ruby lang="ja">ヒンクマル<rp>(</rp><rt lang="la">Hincmar</rt><rp>)</rp></ruby lang="ja"></a>であった。</p>
<h3 class="green">聖レミギウスの生拝</h3>
<p>偉大な学者で証聖者であった<span style="color: #3d8b3d;">レミギウス</span>の誕生は、ある隠修士によって預言されていた。<br />
<a href="#note_pays-des-francs" title="フランク族の国" id="pays-des-francs" class="green">フランク族の国</a>が<a href="#note_vandales" title="ヴァンダル族" id="vandales" class="green">ヴァンダル族</a>に荒らされていたころ、眼の光を失ったひとりの聖なる隠修士がいた。
彼は、ガリアの教会に平和をお返しくださいますようにと日夜神に祈っていた。<br />
する、はたせるかな、主の<ruby>御<rp>(</rp><rt>み</rt><rp>)</rp>使<rp>(</rp><rt>つか</rt><rp>)</rp></ruby>いがあらわれて、彼にこう告げた。<br />
<span style="color: #3d8b3d;">「<ruby lang="ja" style="color:#3d8b3d;">ケリナ<rp>(</rp><rt lang="la" style="font-size: 70%;letter-spacing: 0.5px;color:#3d8b3d;">Celina</rt><rp>)</rp></ruby>という名の女性が、子供を生むでしょう。
その子供は、レミギウスと名づけられるでしょう。
彼は、彼の民族を敵の悪業から救うでしょう」</span><br />
隠修士は、眼をさますと、さっそくケリナの家に出かけて、夢で聞いたことを女に話した。
しかし、ケリナは、その話をほんとうにしなかった。
というのは、彼女は、年をとっていたからである。<br />
すると、隠修士は、<br />
<span style="color: #3d8b3d;">「聞いてください。あなたがそのお子さんに乳をお飲ませになるようになったとき、その乳をわたしの眼にぬってくださると、たちまちわたしの眼に光が回復するのです」</span>と言った。<br />
そして、万事は、彼の言ったとおりになった。
<span style="color: #3d8b3d;">レミギウス</span>は、成人すると、世を棄てて修道院に入った。
しかし、彼のすぐれた聖性の聞こえが世にひろまり、人びとは、一致して彼をランスの大司教に選んだ。そのとき彼は、<ruby>年齢<rp>(</rp><rt>よわい</rt><rp>)</rp></ruby>２２歳にすぎなかった。<br />
たいへんこころのやさしい人で、彼が食事をしていると、かわいい<ruby>雀<rp>(</rp><rt>すずめ</rt><rp>)</rp></ruby>たちが食卓に飛んできて、パンくずを彼の手からついばむのだった。</p>
<h3 class="green">ぶどう酒の奇跡</h3>
<p>あるとき、<span style="color: #3d8b3d;">レミギウス</span>は、さる婦人の家に泊めてもらうことになった。
その婦人は、ぶどう酒の貯えがあまりなかった。
そこで、<span style="color: #3d8b3d;">レミギウス</span>は、地下室に降りていって、<ruby>酒<rp>(</rp><rt>さか</rt><rp>)</rp>樽<rp>(</rp><rt>だる</rt><rp>)</rp></ruby>のうえで十字を切り、お祈りをした。
すると、たちまちぶどう酒が樽にいっぱいになり、あふれこぼれて地下室を酒びたしにした。</p>
<h3 class="green">クロヴイス王の改宗</h3>
<p>そのころ、フランク王<a href="#note_clovis" title="クロヴイス" id="clovis" class="green">クロヴイス</a>は、まだ異教徒であった。
王妃は、信仰心のあついキリスト教徒であったが、どんなに熱心に説きすすめても、王を改宗させることができなかった。
あるとき、<a href="#note_alamans" title="アラマン族" id="alamans" class="green">アラマン人たち</a>が強大な兵力をもってクロヴィスをおそってきた。
クロヴイスは、妻に、彼女の信仰する神の助けがあってアラマン人との戦いに勝つことができたならばその神を信仰しようと約束した。<br />
彼は、望みどおり勝利をおさめることができた。
それで、洗礼を受けるために聖<span style="color: #3d8b3d;">レミギウス</span>のところに出かけた。<br />
彼らが洗礼盤のところに行くと、王に注ぐ<a href="#note_chreme" title="聖油" id="chreme" class="green">聖油</a>がなかった。<br />
すると、そのとき、<span style="color: #3d8b3d;">一羽の鳩がくちばしに入った小さなガラスびんをくわえて天から舞いおりてきた。
レミギウスは、その聖油を王に注いだ。</span><br />
そのガラスびんは、ランスの司教座聖堂に保管されていて、今日でもフランスの国王たちは、この聖油びんで聖別の塗油式を受けるのである。</p>
<h3 class="green">頑固な大司教</h3>
<p>それからずいぶんたったころ、ゲネバルドゥスという名前のたいへん賢明な人がいて、聖<span style="color: #3d8b3d;">レミギウス</span>の姪を妻としていた。
夫婦は、霊的生活をいとなむために離婚した。
聖<span style="color: #3d8b3d;">レミギウス</span>は、ゲネバルドウスを<a href="#note_laon" title="ラン市" id="laon" class="green">ラン</a>の司教に任じた。
そこで、ゲネバルドゥスの妻は、しばしば彼の説教を聞きにやってきた。
こうして顔をあわせているうちに、彼は、妻に情欲をおぼえ、彼女とともに罪におちた。<br />
妻は、みごもり、男の子を生んだ。
その知らせが、司教の耳にとどいた。
彼は、たいへん恥じ入って、妻に、<br />
<span style="color: #3d8b3d;">「その子を<ruby style="color:#3d8b3d;">偸<rp>(</rp><rt style="font-size: 70%;letter-spacing: 0.5px;color:#3d8b3d;">ちゅう</rt><rp>)</rp>盗<rp>(</rp><rt style="font-size: 70%;letter-spacing: 0.5px;color:#3d8b3d;">とう</rt><rp>)</rp></ruby>と名づけなさい。
盗みによってもうけられた子供だからです」</span>と伝えさせた。<br />
その後も、彼は、これまでどおり妻を自分のところに来させていた。人びとが感づいて、悪評がたつのを防ぐためである。
しかし、ふたりは、その罪業のために涙していくばくもたたないうちに、ふたたび罪におちた。
彼女は、女の子を生んだ。
それを彼に知らせると、彼は、<br />
「その子を<ruby style="color:#3d8b3d;">女<rp>(</rp><rt style="font-size: 70%;letter-spacing: 0.5px;color:#3d8b3d;">めぎ</rt><rp>)</rp>狐<rp>(</rp><rt style="font-size: 70%;letter-spacing: 0.5px;color:#3d8b3d;">つね</rt><rp>)</rp></ruby>と名づけなさい」と言った。<br />
その後、彼は、自分の罪業をつくづく反省し、聖<span style="color: #3d8b3d;">レミギウス</span>のところに出かけて、その足もとにひれ伏し、ストラを肩からはずそうとした。<br />
<span style="color: #3d8b3d;">レミギウス</span>は、これをおしとどめ、その罪業の告白を聞くと、やさしく慰めてやった。
そして、彼を７年間小さな庵室に閉じこめた。<br />
<span style="color: #3d8b3d;">レミギウス</span>は、そのあいだ彼にかわってその司教区のめんどうを見た。
７年目がめぐってきて、ゲネバルドゥスが聖木曜日にじっと祈禱をつづけていると、主の御使いがあらわれて、<br />
<span style="color: #3d8b3d;">「あなたの罪は、赦されました。
立って出ていきなさい」</span>と告げた。<br />
ゲネバルドゥスは、<br />
<span style="color: #3d8b3d;">「出ていくわけにはまいりません。
レミギウス<ruby style="color:#3d8b3d;">閣下<rp>(</rp><rt style="font-size: 70%;letter-spacing: 0.5px;color:#3d8b3d;">かっか</rt><rp>)</rp></ruby>が扉に外から錠をおろし、ご自分の印で封印なさっているからです」</span>と答えた。<br />
<span style="color: #3d8b3d;">「天国があなたに開かれているように、
この扉も、封印をやぶらずに開かれているのです」</span>と、天使が言いおわるやいなや、<br />
扉がばっと開いた。<br />
すると、ゲネバルドゥスは、扉ロのまんなかに十字の<ruby>恰好<rp>(</rp><rt>かっこう</rt><rp>)</rp></ruby>に身を横たえて、<br />
<span style="color: #3d8b3d;">「わたしは、ここを出ません。たとえ主キリストがみずから来られようとも、わたしをここに閉じこめたわたしのレミギウス閣下が来られないかぎりは」</span>と言った。<br />
そこで、聖<span style="color: #3d8b3d;">レミギウス</span>が、天使の言いつけでランにやってきて、ゲネバルドスをふたたび司教に任命した。
彼は、それ以後死ぬまで善行のうちに暮らした。
彼の息子<span style="color: #3d8b3d;">〈</span><ruby style="color:#3d8b3d;">偸盗<rp>(</rp><rt style="font-size: 70%;letter-spacing: 0.5px;color:#3d8b3d;">ラトロ</rt><rp>)</rp></ruby><span style="color: #3d8b3d;">〉</span>も、父のあとを継いで司教になり、聖人とまで言われるようになった。
聖<span style="color: #3d8b3d;">レミギウス</span>は、主の紀元５００年ごろ有徳と聖性とにみたされてやすらかに世を去った。</p>
<p>
</div>
<h2>注釈</h2>
<h3 id="note_remigius">レミギウス</h3>
<div class="notices green">
<p><ruby lang="ja">レミギウス<rp>(</rp><rt lang="la">Remigius</rt><rp>)</rp></ruby lang="ja">。
フランスの聖人(フランス名はサン＝レミ、４４０頃～５３４年)。
２２歳にしてランスの司教となり、フランク人のキリスト教化に大きな功績をあげ、４９９年フランク王クロヴィス一世に授洗した(注４)。
真書簡４通が現存（うち２通はクロヴィス宛）。
修辞的に完璧と言われたその説教は紛失した。
彼の聖遺骨は、１０４９年以来彼にささげられたランスのサン＝レミバジリカに移された。
祝日は１月１３日と１０月１日、前者は死亡日で、後者は聖遺骨の移居記念日である。
標章は、聖油びん、鳩、悪魔つきの少女。また、クロヴィスへの授洗図がよく描かれる。
なお、ランスは、フランス北部の、ローマ人の建てた古都、シャンパーニュ地方の中心地。</p>
<ul>
<li>注に戻る：<a href="#remigius" title="レミギウス">レミギウス &#11105;</a></li>
</ul>
</div>
<h3 id="note_hincmar">ヒンクマル</h3>
<div class="notices green">
<p><ruby lang="ja">ヒンクマル<rp>(</rp><rt lang="la">Hincmar</rt><rp>)</rp></ruby lang="ja">ともいう（８０６～８２年）。
ランスの大司教。フランク王国最大の高位聖職者にして政治家。
西フランクの委頭王シャルル一世（のちの神聖ローマ皇帝カール二世）の政治顧問。
ローマ教皇に抗してカロリング朝フランク教会の自主性を擁護した。
『聖レミギウスの生涯』は、伝説的色彩がつよく、別人の改悪が疑われている。</p>
<ul>
<li>注に戻る：<a href="#hincmar" title="ヒンクマル">ヒンクマル &#11105;</a></li>
</ul>
</div>
<h3 id="note_pays-des-francs">フランク族の国</h3>
<div class="notices green">
<p>私達はウォラギネが使用する「<ruby lang="ja">フランシア<rp>(</rp><rt lang="la">Francia</rt><rp>)</rp></ruby lang="ja">」という言葉をここで「フランク族の国」と訳すことに直す選択します。<br />
ウォラギネは「<ruby lang="ja">フランシア<rp>(</rp><rt lang="la">Francia</rt><rp>)</rp></ruby lang="ja">」を使用していますが、クロヴィス時代またヒンクマル時代では、言葉がまだ存在していません。<br />
ヒンクマルは「<ruby lang="ja">ガリア<rp>(</rp><rt lang="la">Gallia</rt><rp>)</rp></ruby lang="ja">」を使用しています。</p>
<ul>
<li>注に戻る：<a href="#pays-des-francs" title="フランク族の国">フランク族の国 &#11105;</a></li>
</ul>
</div>
<h3 id="note_vandales">ヴァンダル族</h3>
<div class="notices green">
<p>ゲルマン人部族のひとつ。
５世紀前半ガリア、スペインを侵略し、長駆北アフリカにヴァンダル王国を建設した（５３４年滅亡）。</p>
<ul>
<li>注に戻る：<a href="#vandales" title="ヴァンダル族">ヴァンダル族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_clovis">クロヴイス</h3>
<div class="notices green">
<p>ドイツ語では<ruby lang="ja">クロートヴィヒ<rp>(</rp><rt lang="de">Chlodowech</rt><rp>)</rp></ruby lang="ja">または<ruby lang="ja">クローデヴェヒ<rp>(</rp><rt lang="de">Chlodwig</rt><rp>)</rp></ruby lang="ja">。
フランク王国の建設者であると同時にその後のフランスの基礎をきずいた人（４６５頃～５１１年）。
ライン川下流にいたころのフランク人（ゲルマン人部族のひとつ）の諸小王国のひとつトゥルネー王国（いまのベルギー西部）の王であった彼が４８６年ローマ軍を破ったときに、事実上フランク王国が成立した。
４９９年降誕祭に聖レミギウスから洗礼を受け、ガリア最初のカトリック国王となる。
この事件は、その後多くの伝説によって粉飾されただけでなく、これにちなんで中世期９世紀と１２世紀の間をつうじてフランス国王の成聖式は、ランスカテドラルでおこなわれることになった。
１４２９年のジャンヌ・ダルクによるシャルル７世の成聖は、その最も有名なもの。このノートルダム（聖母）カテドラルは、現存のものは１３世紀の建造で、フランス・イル＝ド＝フランス建築のかがやかしい精華としてつとに著名である。
なお、彼の王妃は、クローデギルデまたはクロティルデという名前で、ブルグント王女、聖女（祝６・４）。</p>
<ul>
<li>注に戻る：<a href="#clovis" title="クロヴイス">クロヴイス &#11105;</a></li>
</ul>
</div>
<h3 id="note_alamans">アラマン族</h3>
<div class="notices green">
<p>西南ドイツにいたゲルマン人の一部族。</p>
<ul>
<li>注に戻る：<a href="#alamans" title="アラマン族">アラマン族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_chreme">聖油</h3>
<div class="notices green">
<p>〈キリスト〉という名は、ヘブライ語の〈メシア〉すなわち〈聖油を注がれた者〉という語のギリシャ語訳〈キリスト〉に由来する。旧約時代において預言者、司祭、王たちは、聖油（オリーヴの他の香油を注いで）聖別されるならわしであったが、キリストは、預言者、大司祭、王として神から油を注がれ、人類救済のために降臨された〈救い主〉であるからメシアとよばれ、またキリストとよばれる。そこから聖別儀式が由来する。</p>
<ul>
<li>注に戻る：<a href="#chreme" title="聖油">聖油 &#11105;</a></li>
</ul>
</div>
<h3 id="note_laon">ラン市</h3>
<div class="notices green">
<p><ruby lang="ja">ラン<rp>(</rp><rt lang="fr">Laon</rt><rp>)</rp></ruby lang="ja">。パリの東北にあるエーヌ県の首都。</p>
<ul>
<li>注に戻る：<a href="#laon" title="ラン市">ラン市 &#11105;</a></li>
</ul>
</div>
<!-- page 2 -->
<div id="body-inner">
				<h2 class="green">１４１章 聖レミギウス</h2>
<h3 class="green">その名前の第二番目の解釈</h3>
<p><ruby lang="ja" style="color:#3d8b3d;">レミギウス<rp>(</rp><rt lang="la" style="font-size: 70%;letter-spacing: 0.5px;color:#3d8b3d;">Remigius</rt><rp>)</rp></ruby>は、<span style="color: #3d8b3d;">〈</span><ruby lang="ja" style="color:#3d8b3d;">船<rp>(</rp><rt lang="la" style="font-size: 70%;letter-spacing: 0.5px;color:#3d8b3d;">ふな</rt><rp>)</rp>長<rp>(</rp><rt lang="la" style="font-size: 70%;letter-spacing: 0.5px;color:#3d8b3d;">おさ</rt><rp>)</rp></ruby><span style="color: #3d8b3d;">〉</span>ないし<span style="color: #3d8b3d;">〈船の操縦者〉</span>を意味する<ruby lang="ja">レメクス<rp>(</rp><rt lang="la">remex</rt><rp>)</rp></ruby lang="ja">と
<span style="color: #3d8b3d;">〈戦い〉</span>の意の<ruby lang="ja">ギョン<rp>(</rp><rt lang="la">gyon</rt><rp>)</rp></ruby lang="ja">とから、あるいは船を<ruby>漕<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>ぎすすめる<span style="color: #3d8b3d;">〈</span><ruby style="color:#3d8b3d;">櫂<rp>(</rp><rt style="font-size: 70%;letter-spacing: 0.5px;color:#3d8b3d;">かい</rt><rp>)</rp></ruby><span style="color: #3d8b3d;">〉</span>を意味する<ruby lang="ja">レミ<rp>(</rp><rt lang="la">remi</rt><rp>)</rp></ruby lang="ja">と<ruby lang="ja">ギオン<rp>(</rp><rt lang="la">gyon</rt><rp>)</rp></ruby lang="ja">とから来ている。<br />
まことに、<span style="color: #3d8b3d;">レミギウス</span>は、教会の<ruby>舵<rp>(</rp><rt>かじ</rt><rp>)</rp></ruby>をとり、難破の危険から救いだし、
櫂をあゃっって教会を天国にいたる門にみちびき、また教会のために悪魔の悪だくみと戦ったのである。</p>
<h3 class="green">クロティルデとその子供たち</h3>
<p>レミギウスは、<a href="#note_clovis" title="フランク族の王" id="clovis" class="green">フランク族の王</a>とそのすべての国民を回心させて、キリスト教の信仰にみちびいたとされている。<br />
すなわち、この王には、<a href="#note_clothilde" title="クロティルデ" id="clothilde" class="green"><ruby lang="ja">クロティルデ<rp>(</rp><rt lang="la">Clothilde</rt><rp>)</rp></ruby lang="ja"></a>という名のキリスト者の妃があった。<br />
王妃は、なんとかして良人をキリスト教に入信させようとたえずつとめたが、その試みは、いつも徒労に終わった。
そのうち、ふたりのあいだに男の子が生まれた。
彼女は、この子に洗礼を受けさせようとしたが、王は、頑として聞き入れなかった。
しかし、王妃は、どうしてもあきらめようとしなかったので、さすがの王も、その願いをいれて、子供の受洗をみとめた。
ところが、王子は、洗礼を受けてからまもなく死んでしまった。
そこで、王は言った。<br />
<span style="color: #3d8b3d;">「そなたのキリストは、どうやらたいした神ではなさそうだ。
なにしろ、この子の命をとりとめられなかったのだからな。
この子を救ってくれたら、キリスト教の勢力が大きく伸びたにちがいないのに」</span><br />
クロテイルデは答えた。<br />
<span style="color: #3d8b3d;">「これでわたくしは、自分がわたくしの神さまから特別な愛を受けていることがわかりましたわ。
神さまは、わたくしがわが身にやどした<ruby style="color:#3d8b3d;">初穂<rp>(</rp><rt style="font-size: 70%;letter-spacing: 0.5px;color:#3d8b3d;">はつほ</rt><rp>)</rp></ruby>をお召しになり、あの子にあなたの王国よりもずっとすばらしい無量の王国をおさずけくださったのですもの」</span><br />
王妃は、ふたたびみごもり、またもや男の子を生んだ。<br />
彼女は、この王子にも洗礼を受る許しをとりつけたが、受洗後まもなく病気にかかり、もう助かるまいとおもわれた。<br />
王妃に言った。<br />
<span style="color: #3d8b3d;">「自分の名において受洗した者の命も救えないようでは、そなたの神とやらは頼りにもならぬ神だ。<br />
この調子じゃ、そなたが子供を千人生んで、みな洗礼を受けさせたとしても、ひとりも生きのびられないことになるな」</span><br />
けれども、その王子は、やがて<ruby>快<rp>(</rp><rt>かい</rt><rp>)</rp>方<rp>(</rp><rt>ほう</rt><rp>)</rp></ruby>にむかって健康になり、のち父王のあとをついで即位したのであった。<br />
信心ぶかい王妃は、良人をも信仰にみちびこうとあらゆる手をつくしたが、王は、なかなかその手に乗ろうとしなかった。</p>
<h3 class="green">怒った粉屋の人</h3>
<p>それでも、最後には回心したのであるが、その<ruby>経<rp>(</rp><rt>いき</rt><rp>)</rp>緯<rp>(</rp><rt>さつ</rt><rp>)</rp></ruby>については、主のご公現の祝日のあとに置かれたこの聖人のもうひとつの祝日のくだりに述べてある。
ところで、このクロヴイス王は、キリスト信者になったとき、ランスの教会を寄進しょうと思いたった。
そこで、<span style="color: #3d8b3d;">聖レミギウス</span>にむかって、わたしが昼寝をしているあいだにあなたが散策なさるだけの広さの土地をさしあげましょう、と申しでた。
そして、そのとおり土地があたえられた。
ところで、<span style="color: #3d8b3d;">レミギウス</span>が散策するその土地に一軒の<ruby>粉<rp>(</rp><rt>こな</rt><rp>)</rp></ruby>ひき小屋があった。
粉屋は、にがりきって<span style="color: #3d8b3d;">聖レミギウス</span>を追いはらおうとした。
そこで聖人は、粉屋に言った。<br />
<span style="color: #3d8b3d;">「そんなに気を悪くしないで、この粉ひき場をいっしょに使うことにしましょう」</span><br />
しかし、粉屋は、彼を追いはらってしまった。
すると、突然、風の向きが変わって、風車が逆にまわりはじめた。
おどろいた粉屋は、聖人を大声でよんだ。<br />
<span style="color: #3d8b3d;">「聖人さま、どうかお戻りください。
粉ひき場はいっしょに使うことにいたしましよう」</span><br />
<span style="color: #3d8b3d;">レミギウス</span>は答えた。<br />
<span style="color: #3d8b3d;">「この粉ひき小屋は、わたしのものでも、あなたのものでもありません」</span><br />
その瞬間、大地がまっぷたつに裂け、粉ひき小屋をまるごと呑みこんでしまった。</p>
<h3 class="green">レミギウスは飢饉を予告する</h3>
<p><span style="color: #3d8b3d;">聖レミギウス</span>は、あるとき、大飢饉が起こるだろうと予見して、ある村にたくさんの小麦を集めて貯蔵した。
ところが、酔っぱらった農民たちは、年寄りのとりこし苦労だとあざけって、小麦を入れた<ruby>倉<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>に火をつけた。
<span style="color: #3d8b3d;">レミギウス</span>は、これを知ると、いそいで駆けつけた。
そして、ちょうど寒い季節だったし、夕暮れどきでもあったので、両手をかざして火にあたりながら、いつもと変わらぬ顔つきでこう言った。<br />
<span style="color: #3d8b3d;">「火というものは、いつでもありがたいものだ。
だがな、こんなことをやらかした連中は、男なら、孫子の代にいたるまで女と交わる能力を失うだろう。また、その女房たちは、<ruby style="color:#3d8b3d;">瘰<rp>(</rp><rt style="font-size: 70%;letter-spacing: 0.5px;color:#3d8b3d;">るい</rt><rp>)</rp>癧<rp>(</rp><rt style="font-size: 70%;letter-spacing: 0.5px;color:#3d8b3d;">れき</rt><rp>)</rp></ruby>病みになるだろう」</span><br />
そして、<a href="#note_charlemagne" title="フランク族の王" id="charlemagne" class="green">カール大帝</a>に追いはらわれるまで、彼らにこの言葉どおりのことが起こったのである。</p>
<h3 class="green">御遺体の移居</h3>
<p>ところで、ここで注記しておくと、１月におこなわれる<span style="color: #3d8b3d;">聖レミギウス</span>の祝日は、彼が至福なる死をむかえた日であり、今日すなわち１０月１日は、聖遺体の移居記念日である。<br />
というのは、<span style="color: #3d8b3d;">レミギウス</span>が死んだあと、その遺体は、棺台にのせて聖<ruby>ティモテウス<rp>(</rp><rt>Timoteus</rt><rp>)</rp></ruby>と聖<ruby>アポリナリス<rp>(</rp><rt>Appolinarius</rt><rp>)</rp></ruby>の教会にはこばれたが、途中で聖<ruby>クリストポルス<rp>(</rp><rt>Christophorus</rt><rp>)</rp></ruby>教会のそばにさしかかると、急に重たくなって、それ以上すすまなくなった。
人びとは、やむなく主にお祈りをして、もし聖人たちの遺骨がたくさん安置されているこの聖クリストポルス教会に<span style="color: #3d8b3d;">聖レミギウス</span>さまをも埋葬することをおのぞみでしたら、どうかをお知らせくださいとお願いした。
すると、性遺体がたちまち軽くなって、らくらくともちあげることができた。
そこで、人びとは、性遺体をこの場にうやうやしく葬ったのである。<br />
ところで、この教会には多くの奇跡が起こったので、人びとは、教会を大きくひろげ、祭壇の奥に地下納骨堂をこしらえた。
ところが、いよいよ聖遺体を掘りおこして、新しい墓に移そうとしたが、重くてどうしてももちあがらなかった。
そこで、夜を徹してお祈りをしたが、真夜中になると、みんな眠りこんでしまった。
朝になって目をさますと、棺は、<span style="color: #3d8b3d;">聖レミギウス</span>の遺体を入れたまま天使たちの手で地下納骨堂にはこばれていた。
１０月１日のことであった。
この聖遺骨が銀の棺に納められ、さらに美しい地下納骨堂に移されたのは、そこから長い歳月がたった、日もおなじ１０月１日のことであった。
<span style="color: #3d8b3d;">聖レミギウス</span>が活躍したのは、主の紀元４９０年ごろであった。</p>
<p>
<h2>注釈</h2>
<h3 id="note_clovis">フランク族の王</h3>
<div class="notices green">
<p><ruby lang="ja">クロヴィス<rp>(</rp><rt lang="la">Clovis</rt><rp>)</rp></ruby lang="ja">一世。</p>
<ul>
<li>注に戻る：<a href="#clovis" title="フランク族の王">フランク族の王 &#11105;</a></li>
</ul>
</div>
<h3 id="note_clothilde">クロティルデ</h3>
<div class="notices green">
<p><ruby lang="ja">クロヴィス<rp>(</rp><rt lang="la">Clovis</rt><rp>)</rp></ruby lang="ja">一世。</p>
<ul>
<li>注に戻る：<a href="#clothilde" title="クロティルデ">クロティルデ &#11105;</a></li>
</ul>
</div>
<h3 id="note_charlemagne">カール大帝</h3>
<div class="notices green">
<p>フランク王にして８００以後、西ローマ皇帝、キリスト教的ヨーロッパ世界の開始者、フランスではシャルルマーニュとよばれる(７４２年~８１４年)。<br />
オランダおよびベルギーとの国境にあるドイツの古都アーへンを愛し、壮大な宮殿を造営し、〈カロリング・ルネサンス〉を現出し、ここで没した。<br />
また、聖遺物の熱心な収集家で、それらを安置したアーへン大聖堂は、中世期をつうじて巡礼者の列がたえなかった。  </p>
<ul>
<li>注に戻る：<a href="#charlemagne" title="フランク族の王">フランク族の王 &#11105;</a></li>
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