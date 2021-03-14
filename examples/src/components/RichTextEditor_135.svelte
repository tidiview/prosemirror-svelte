<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="green">カエサルによるレミ族</h1>
<div class="notices green">
<p><ruby lang="ja">ユリウス<rp>(</rp><rt lang="la">Iulius</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>カエサル<rp>(</rp><rt lang="la">Caesar</rt><rp>)</rp></ruby lang="ja">が自ら書いたとされている「<ruby lang="ja">ガリア戦記<rp>(</rp><rt lang="la">Commentarii&#160;de&#160;Bello&#160;Gallico</rt><rp>)</rp></ruby lang="ja">」は現在フランスの過去に関して文字で書かれた史料として一番古いの中に数えられている。<br>
この素晴らしい作品について、いろいろいうべきことがあろうが、ここでは作品全体としてではなく、現代の<ruby lang="ja">ランス<rp>(</rp><rt lang="fr">Reims</rt><rp>)</rp></ruby lang="ja">市の名の元になっている<ruby lang="ja">レミ<rp>(</rp><rt lang="la">Remi</rt><rp>)</rp></ruby lang="ja">族が現れる第２巻の前半の部分にだけ関心を寄せています。<br>
以下の文書の引用がそれに限りますが、それでも文書の流れがよりよく分かるように、ちょっと前のと後の部分をも載せようとしました。<br>
前の部分（<a href="#1chap" title="第１章、ベルギー全土が混乱">第１</a>と<a href="#2chap" title="第２章、カエサルの措置">第２章</a>）では、ローマ軍のガリアでの進出に当っての状態が表れています。<br>
<a href="#3chap" title="第３章、レミ族は自分をローマの味方と宣言する">第３章</a>では、レミ族の<ruby>長<rp>(</rp><rt>かしら</rt><rp>)</rp></ruby>たちがカエサルに使節を派遣し、他のガリア人部族と違って、抵抗ではなく自らローマと協力するのを選択します。<br>
それから（<a href="#4chap" title="第４章、敵軍の列挙">第４章</a>から）軍事行動の描写に移って、<a href="#8chap" title="第８章、エーヌ川の戦い"><ruby lang="ja">エーヌ<rp>(</rp><rt lang="fr">Aisne</rt><rp>)</rp></ruby lang="ja">川の戦い</a>の展開がローマ軍の視点で語られます。<br>
固有名詞や位置関係を分かりやすくするために地図をも載せています。<br>
レミ族がローマ軍の勝利によっていろいろローマ政権によくして貰うことになるのでした。ランス市がローマ帝国政権区分のベルギカ・セクンダ（第2ベルギカ州）の首都となりました。</p>
</div>
<h2 class="green">ガリア戦記、第２巻</h2>
<h4 class="green" id="1chap">第１章：ベルギー全土が混乱</h4>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>１</sup></td>
<td>内ガリアにいた<span style="color: #3d8b3d;">カエサル</span>のもとにも何度となく噂は届いてい<a href="#note_labienus" title="ラビエヌス" id="labienus"><ruby lang="ja">ラビエヌス<rp>(</rp><rt lang="la">Labienus</rt><rp>)</rp></ruby lang="ja"></a>が手紙でこのようなことを知らせてきた。
<a href="#note_gallia_citerior" title="ガリア・キテリオル" id="tertiam_galliae_partem">ガリアの第３の地域</a>にあたると前述したべルガエ人たちがこぞってローマ人に対する反乱を企て、人質をやりとりしている。</td></tr>
<tr><td><sup>２</sup></td>
<td>反乱を企てている理由はこうである。まず、ガリア全域が平和になったので次は自分たちのもとに準備してくるもではないかと思ったため。</td></tr>
<tr><td><sup>３</sup></td>
<td>次に、一部のガリア人のそそのかされたため、一部の者はゲルマニ人がこれ以上ガリアに来るのは望ましくないと思っていたのと同じ理屈で、ローマ軍がガリアで冬営して古顔になっていくのも不愉快だと思っていたし、気まぐれや浅はかな思いから新しい支配者を求めていた者もいたのである。</td></tr>
<tr><td><sup>４</sup></td>
<td>また、ガリアでは他人より力のある者、人を集める力のある者が一般に権力を握ってきたが、ローマ人に支配されてはそういうわけにはいかなくなるぞ、とそそのかす者もなくはなかった。</td></tr>
</tbody>
</table>
<h4 id="2chap" class="green">第２章：カエサルの措置</h4>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>１</sup></td>
<td>そのような噂や手紙に心動かされた<span style="color: #3d8b3d;">カエサル</span>は、<a href="#note_gallia_citerior" title="ガリア・キテリオル" id="gallia_citerior">ガリア・キテリオル</a>で新たに２個軍団を徴集すると、戦争ができる季節になるや、その２個軍団を<a href="#note_gallia_ulterior" title="ガリア・ウルテリオル" id="gallia_ulterior">ガリア・ウルテリオル</a>へ移動させるために<a href="#note_quintus_pedius" title="クィントッス・ペディウス" id="quintus_pedius"><ruby lang="ja">クィントゥス<rp>(</rp><rt lang="la">Quintus</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>ペディウス<rp>(</rp><rt lang="la">Pedius</rt><rp>)</rp></ruby lang="ja"></a>副司令を派遣した。</td></tr>
<tr><td><sup>２</sup></td>
<td>自分も<ruby>糧<rp>(</rp><rt>りょう</rt><rp>)</rp>秣<rp>(</rp><rt>まつ</rt><rp>)</rp></ruby>の手配をするとすぐに軍のもとに行き、</td></tr>
<tr><td><sup>３</sup></td>
<td><a href="#note_senones" title="セノネス族" id="senones">セノネス族</a>などべルガエ人の近くにいるガリア人に指示して、ベルガエ人のもとで起こってい ることを調べて報告させた。</td></tr>
<tr><td><sup>４</sup></td>
<td>全員が同じように、人手がかき集められ、軍が一所に集結していると報告してきたので、かくなるうえは晴踏せずべルガエ人のもとに行くべきだと思い、<ruby>兵<rp>(</rp><rt>ひょう</rt><rp>)</rp>糧<rp>(</rp><rt>ろう</rt><rp>)</rp></ruby>の準備を整えると陣地を移動して、１５日ほどでべルガエ人の領土に到着した。</td></tr>
</tbody>
</table>
<h4 id="3chap" class="green">第３章：レミ族は自分をローマの味方と宣言する</h4>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>１</sup></td>
<td><span style="color: #3d8b3d;">カエサル</span>が意表をついて誰も予想していなかったほど早く来たので、<span style="color: #3d8b3d;"><a href="#note_remi" title="レミ族" id="remi">レミ族</a></span>というべルガエ人の中でもっともガリアに近い部族が、カエサルに使節として<a href="#note_iccius" title="イッキウス" id="iccius"><ruby lang="ja">イッキウス<rp>(</rp><rt lang="la">Iccius</rt><rp>)</rp></ruby lang="ja"></a>と<ruby lang="ja">アンデコンボギウス<rp>(</rp><rt lang="la">Andecombogius</rt><rp>)</rp></ruby lang="ja">という部族の第一人者を寄越して、こう言ってきた。</td></tr>
<tr><td><sup>２</sup></td>
<td>自分たちの身柄や財産はすべてローマ人の<ruby>肥<rp>(</rp><rt>ひ</rt><rp>)</rp>護<rp>(</rp><rt>ご</rt><rp>)</rp></ruby>に<ruby>委<rp>(</rp><rt>ゆだ</rt><rp>)</rp></ruby>ねる。
自分たちはほかのべルガエ人と結託したことはないし、ローマ人に対する反乱を企てたこともない。</td></tr>
<tr><td><sup>３</sup></td>
<td>人質を差し出す用意はあるし、命令に従い、街への受け入れや兵糧などの援助もしよう。</td></tr>
<tr><td><sup>４</sup></td>
<td>ほかのべルガエ人は全員武装している。</td></tr>
<tr><td><sup>５</sup></td>
<td><a href="#note_rhenus" title="レヌス川" id="rhenus"><ruby lang="ja">レヌス<rp>(</rp><rt lang="la">Rhenus</rt><rp>)</rp></ruby lang="ja">河</a>のこちら側に住んでいる<a href="#note_germani" title="ゲルマニ人" id="germani"><ruby lang="ja">ゲルマニ<rp>(</rp><rt lang="la">Germani</rt><rp>)</rp></ruby lang="ja"></a>人とも共謀しているのだが、全員頭に血が上っているため、<a href="#note_suessiones" title="スエシオネス族" id="suessiones"><ruby lang="ja">スエシオネス<rp>(</rp><rt lang="la">Suessiones</rt><rp>)</rp></ruby lang="ja">族</a>という自分たちの兄弟親戚にあたる（同じ掟、同じ法を使い、同じ支配者同じ<ruby>領<rp>(</rp><rt>りょう</rt><rp>)</rp>袖<rp>(</rp><rt>しゅう</rt><rp>)</rp></ruby>を共有する間柄の）部族を思いとどまらせて結託しないようにすることすらできなかった。</td></tr>
</tbody>
</table>
<h4 id="4chap" class="green">第４章：敵軍の列挙</h4>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>１</sup></td>
<td><span style="color: #3d8b3d;">レミ族</span>にどの部族がどの程度武器を取れるのか、また戦争になったときの力はどうか<ruby>訊<rp>(</rp><rt>たず</rt><rp>)</rp></ruby>ねたところ、このようなことがわかった。
多くのべルガエ人はゲルマニ人を先祖に持つ。
はるか昔にレヌス川を渡り、土地の豊かさゆえに現在の場所に定住すると、そこに住んでいたガリア人を追い払ったのだが、</td></tr>
<tr><td><sup>２</sup></td>
<td>父祖の記憶にあるようにガリア全土が戦乱に巻き込まれたとき、<a href="#note_teutoni" title="テウトニ族" id="teutoni"><ruby lang="ja">テウトニ<rp>(</rp><rt lang="la">Teutoni</rt><rp>)</rp></ruby lang="ja">族</a>と<ruby lang="ja">キンブリ<rp>(</rp><rt lang="la">Cimbri</rt><rp>)</rp></ruby lang="ja">族の侵入を防げたのはこの者たちのみだったため、</td></tr>
<tr><td><sup>３</sup></td>
<td>そのときの記憶をもとに自分たちは非常に偉いと思い込み、軍事に多大な自信を持つようになってしまった。</td></tr>
<tr><td><sup>４</sup></td>
<td>また、べルガエ人の数についてはすべて調査済みであると言って、このような話もしてくれた。
自分たちは、近所のことでもあるし婚姻によるつながりもあるので、べルガエ人の合同会議で誰がどれほどの人数をこの戦争に出すと約束したか知っている。</td></tr>
<tr><td><sup>５</sup></td>
<td>そのうち、武勇や権威、人数の点で最強の部族は<a href="#note_bellovaci" title="ベロヴァキ族" id="bellovaci"><ruby lang="ja">べロウァキ<rp>(</rp><rt lang="la">Bellovaci</rt><rp>)</rp></ruby lang="ja"></a>族である。
彼らは武装した者を<span style="color: #3d8b3d;">第１００　０００人章</span>集めることができるのだが、<ruby>選<rp>(</rp><rt>え</rt><rp>)</rp></ruby>り抜きの六万人を約束するかわりに、戦争全体の指揮権を要求している。</td></tr>
<tr><td><sup>６</sup></td>
<td>スエシオネス族という自分たちの隣人は最大の領土と、もっとも<ruby>肥<rp>(</rp><rt>ひ</rt><rp>)</rp>沃<rp>(</rp><rt>よく</rt><rp>)</rp></ruby>な畑を持っている。</td></tr>
<tr><td><sup>７</sup></td>
<td>その王は、ローマ人の記憶では<a href="#note_diviciacus" title="ディウィキアクス" id="diviciacus"><ruby lang="ja">ディウィキアクス<rp>(</rp><rt lang="la">Diviciacus</rt><rp>)</rp></ruby lang="ja"></a>という、ガリア全体でもっとも権勢があり、この地域の大部分のみならずブリタンニアの支配権をも持っていた男だったが、現王は<a href="#note_galba" title="ガルバ" id="galba"><ruby lang="ja">ガルバ<rp>(</rp><rt lang="la">Galba</rt><rp>)</rp></ruby lang="ja"></a>である。
所有する街の数は１２で、武装した者<span style="color: #3d8b3d;">５　０００人</span>を約束している。</td></tr>
<tr><td><sup>８</sup></td>
<td>同数を約束している<a href="#note_nervii" title="ネルウィイ族" id="nervii"><ruby lang="ja">ネルウィイ<rp>(</rp><rt lang="la">Nervii</rt><rp>)</rp></ruby lang="ja">族</a>はベルガエ人の間でももっとも野蛮とみなされている。
またもっとも遠くにいる部族でもある。</td></tr>
<tr><td><sup>９</sup></td>
<td><a href="#note_atrebates" title="アトレバテス族" id="atrebates"><ruby lang="ja">アトレバテス<rp>(</rp><rt lang="la">Atrebates</rt><rp>)</rp></ruby lang="ja">族</a>は<span style="color: #3d8b3d;">１５　０００人</span>、<a href="#note_ambiani" title="アンビアニ族" id="ambiani"><ruby lang="ja">アンビアニ<rp>(</rp><rt lang="la">Ambiani</rt><rp>)</rp></ruby lang="ja">族</a>は<span style="color: #3d8b3d;">１０　０００人</span>、<a href="#note_morini" title="モリニ族" id="morini"><ruby lang="ja">モリニ<rp>(</rp><rt lang="la">Morini</rt><rp>)</rp></ruby lang="ja">族</a>は<span style="color: #3d8b3d;">２５　０００人</span>、<a href="#note_menapii" title="メナピィー族" id="menapii"><ruby lang="ja">メナピイ<rp>(</rp><rt lang="la">Menapii</rt><rp>)</rp></ruby lang="ja">族</a>は<span style="color: #3d8b3d;">９０００人</span>、<a href="#note_caleti" title="カレティ族" id="caleti"><ruby lang="ja">カレティ<rp>(</rp><rt lang="la">Caleti</rt><rp>)</rp></ruby lang="ja">族</a>は<span style="color: #3d8b3d;">１０　０００人</span>、<a href="#note_veliocasses" title="ウェリオカッセス族" id="veliocasses"><ruby lang="ja">ウェリオカッセス<rp>(</rp><rt lang="la">Veliocasses</rt><rp>)</rp></ruby lang="ja">族</a>と<a href="#note_viromandui" title="ウィロマンドゥイ族" id="viromandui"><ruby lang="ja">ウィロマンドゥイ<rp>(</rp><rt lang="la">Viromandui</rt><rp>)</rp></ruby lang="ja">族</a>もこれと同数。
<a href="#note_aduatuci" title="アドゥアトゥキ族" id="aduatuci"><ruby lang="ja">アドゥアトゥキ<rp>(</rp><rt lang="la">Aduatuci</rt><rp>)</rp></ruby lang="ja">族</a>は<span style="color: #3d8b3d;">１９　０００人</span>。</td></tr>
<tr><td><sup>１０</sup></td>
<td><a href="#note_condrusi" title="コンドルシ族" id="condrusi"><ruby lang="ja">コンドルシ<rp>(</rp><rt lang="la">Condrusi</rt><rp>)</rp></ruby lang="ja">族</a>、<a href="#note_eburones" title="エブロネス族" id="eburones"><ruby lang="ja">エブロネス<rp>(</rp><rt lang="la">Eburones</rt><rp>)</rp></ruby lang="ja">族</a>、<a href="#note_caeroesi" title="カエロシ族" id="caeroesi"><ruby lang="ja">カエロシ<rp>(</rp><rt lang="la">Caeroesi</rt><rp>)</rp></ruby lang="ja">族</a>、<a href="#note_paemani" title="パエマ二族" id="paemani"><ruby lang="ja">パエマ二<rp>(</rp><rt lang="la">Paemani</rt><rp>)</rp></ruby lang="ja">族</a>といったひとくくりにゲルマニ人と呼ばれる者たちが<span style="color: #3d8b3d;">４０　０００人</span>ほどと考えられている。</td></tr>
</tbody>
</table>
<figure><picture><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/03.reims/01.remes/gallia.svg" title="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《ミネルヴァとテイレシアス》絵画" alt="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《ミネルヴァとテイレシアス》絵画" class="class-diane-img"></picture><figcaption>手前に見えるミネルヴァが真ん中にいるテイレシアスを見えなくさせている</figcaption></figure>
<h4 class="green">第５章：ディウィキアクスはべロウァキ族を攻撃する。カエサルはエーヌ川を渡る</h4>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>１</sup></td>
<td><span style="color: #3d8b3d;">カエサル</span>は<span style="color: #3d8b3d;">レミ族</span>を勇気づけ、寛大な言葉をかけると、長老を全員呼びつけ有力者の子供を人質として差し出すよう命じた（これは万事抜かりなく期日までに行われた）。</td></tr>
<tr><td><sup>２</sup></td>
<td>また、自らハエドウイー族のディウィキアクスをしっかり激励しながら、こう言った。
ローマのみならず全員の安全のために重要なのは敵の軍隊を分散させることである。
これほどの大軍と一度に衝突することがないようにしなければならない。</td></tr>
<tr><td><sup>３</sup></td>
<td>そのため、ハエドゥイー族には軍をべッロウアキー族の領土に進めて彼らの畑を<ruby>掠<rp>(</rp><rt>りゃく</rt><rp>)</rp>奪<rp>(</rp><rt>だつ</rt><rp>)</rp></ruby>してもらいたい。
そのような指示を与えてディウイキアクスを送り出すと、べルガエ人の全軍が一ヶ所に集まって向かってくるのを見つけた。</td></tr>
<tr><td><sup>４</sup></td>
<td>送り出しておいた<ruby>斥候<rp>(</rp><rt>せっこう</rt><rp>)</rp></ruby>や<span style="color: #3d8b3d;">レミ族</span>からもすでにべルガエ人はさほど遠くないところまで来ているという報告があったので、急いで軍に<a href="#note_aisne" title="アクソナ川" id="aisne"><ruby lang="ja">アクソナ<rp>(</rp><rt lang="la">Axona</rt><rp>)</rp></ruby lang="ja">河</a>という<span style="color: #3d8b3d;">レミ族</span>の領土の<ruby>外<rp>(</rp><rt>はず</rt><rp>)</rp></ruby>れにある</td></tr>
<tr><td><sup>５</sup></td>
<td>河を渡らせると、そこに陣地を築いて陣の片側を河岸で固め、背後にあるものを敵の手から守り、<span style="color: #3d8b3d;">レミ族</span>などからの物資が安全に運び込まれるようにした。</td></tr>
<tr><td><sup>６</sup></td>
<td>この河には橋がかかっていたが、そこにも守備隊を置き、対岸にはクィントゥス・ティトゥリウス・サビーヌス副司令率いる六<a href="#note_aisne" title="アクソナ川" id="cohortes">個大隊</a>を残しておいた。
また陣地は高さ一二フィートの土塁と一八フィートの壕で囲むようじた。</td></tr>
</tbody>
</table>
<h4 class="green">第６章と第７章：ビブラクスの包囲を解かさせる</h4>
<h5 class="green">第６章</h5>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>１</sup></td>
<td>この陣地から<span style="color: #3d8b3d;">レミ族</span>の<a href="#note_bibrax" title="ビブラクス" id="bibrax"><ruby lang="ja">ビブラクス<rp>(</rp><rt lang="la">Bibrax</rt><rp>)</rp></ruby lang="ja"></a>という街までは八マイルの距離だったのだが、べルガエ人は道すがらその街に猛攻撃をかけ始めた（かろうじてその日は持ちこたえた）。</td></tr>
<tr><td><sup>２</sup></td>
<td>ガリア人もべルガエ人も街の攻め方は同じで、大勢の者で防壁をぐるりと取り囲むと石を投げ始め、防壁から守備隊を一掃すると<a href="#note_tortue" title="亀甲陣" id="tortue">亀甲陣</a>を作って門を乗り越え、あるいは壁の下を掘り進むのだが、</td></tr>
<tr><td><sup>３</sup></td>
<td>今回あっけなく守りを崩されたのはあまりにも多くの者が石や飛び道具を投げてきたので、防壁の上に留まっていられる者がいなかったためである。</td></tr>
<tr><td><sup>４</sup></td>
<td>夜が来て攻撃が終わると、<span style="color: #3d8b3d;">レミ族</span>でもっとも家柄がよく声望もある人物で、当時のビブラクス総督であり、<span style="color: #3d8b3d;">カエサル</span>のもとに講和の使節として来た者の一人でもある<a href="#note_iccius" title="イッキウス" id="iccius_2">イッキウス</a>が<span style="color: #3d8b3d;">カエサル</span>に使者を寄越した。
援軍を送ってもらえなければもう持ちこたえられそうにないとのことだったので、</td></tr>
</tbody>
</table>
<h5 class="green">第６章</h5>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>１</sup></td>
<td>夜のうちにイッキウスが使者として送ってきた者たちを道案内として、<a href="#note_numidie" title="ヌミディア人" id="numidie"><ruby lang="ja">ヌミディア<rp>(</rp><rt lang="la">Numidia</rt><rp>)</rp></ruby lang="ja">人</a>や<a href="#note_crete" title="クレタ人" id="crete"><ruby lang="ja">クレタ<rp>(</rp><rt lang="la">Creta</rt><rp>)</rp></ruby lang="ja">人</a>の弓兵と、<a href="#note_baleares" title="バレアレス人" id="baleares"><ruby lang="ja">バレアレス<rp>(</rp><rt lang="la">Baleares</rt><rp>)</rp></ruby lang="ja">人</a>の投石兵を住民の救助に向かわせた。</td></tr>
<tr><td><sup>２</sup></td>
<td>援軍が到着すると、<span style="color: #3d8b3d;">レミ族</span>は守り切れる希望がわいたので士気が上がり、敵の方は同じ理由から街を奪いとれる希望がなくなったので、しばし街の近辺に留まって<span style="color: #3d8b3d;">レミ族</span>の畑を荒らし、手当たり次第に村や建物を焼いてから、全軍で<span style="color: #3d8b3d;">カエサル</span>の陣地に向かい、二マイルも離れていないところに陣地を築いた</td></tr>
<tr><td><sup>３</sup></td>
<td>この陣地は煙や火から判断すると八マイル以上もの長さがあった。</td></tr>
</tbody>
</table>
<h4 id="8chap"  class="green">第８、９、１０と１１章：エーヌ川の戦い</h4>
<h5 class="green">第８章</h5>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>１</sup></td>
<td><span style="color: #3d8b3d;">カエサル</span>は当初敵も多いし並々ならぬ武勇の噂も聞いていたので戦闘を差し控えることにしたのだが、</td></tr>
<tr><td><sup>２</sup></td>
<td>それでも毎日騎兵戦をして、敵の武勇がどれほどのものか、またローマ軍がどこまでできるか試しているうちに、ローマ軍も劣っているわけではないことがわかった。</td></tr>
<tr><td><sup>３</sup></td>
<td>陣地の前の地形が布陣するのに適していたので（陣地を築いた丘はまわりの平地から少々高くなっていたのだが、正面には布陣した軍を収容できるほどの幅があったし、両側は急な坂になっていたものの、正面の傾斜はゆるやかでなだらかに平野へと降っていたのである）、丘の両側からそれぞれ直角に４００複歩ほどの壕を掘ると、</td></tr>
<tr><td><sup>４</sup></td>
<td>その壕の終端には砦を作って<ruby>射<rp>(</rp><rt>しゃ</rt><rp>)</rp>出<rp>(</rp><rt>しゅつ</rt><rp>)</rp>機<rp>(</rp><rt>き</rt><rp>)</rp></ruby>を設置し、布陣したとき、数の多さを頼りに側面から襲いかかる敵に包囲されてしまうことのないようにした。</td></tr>
<tr><td><sup>５</sup></td>
<td>それを済ますと、最近徴集した二個軍団を陣地に残して必要なときには援軍に出せるようにし、残りの六個軍団を陣地の前に配置した。
敵も同様に軍を陣地から出して隊形を整えた。</td></tr>
</tbody>
</table>
<h5 class="green">第９章</h5>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>１</sup></td>
<td>両軍の間には大きくはないが沼があった。
敵はここをローマ軍が渡ってくるものと思って待ちかまえていたし、ローマ軍も敵が渡り始めて身動きがとれなくなったところで襲いかかろうと武器を構えて準備していたのだが、それを尻目とも沼を渡ろうとはしなかったし、</td></tr>
<tr><td><sup>２</sup></td>
<td>騎兵戦はローマ軍が優勢だったので<span style="color: #3d8b3d;">カエサル</span>が軍を陣地に引き上げると、</td></tr>
<tr><td><sup>３</sup></td>
<td>敵はすぐにそこから前述の通りローマ軍の陣地の裏手にあるアクソナ川の方へと急ぎ</td></tr>
<tr><td><sup>４</sup></td>
<td>浅瀬を見つけると軍の一部を渡らせようとした。
これは、できればクィントゥス・ティトゥリウス副司令が指揮する砦を襲って橋を壊し、</td></tr>
<tr><td><sup>５</sup></td>
<td>それが無理なら<span style="color: #3d8b3d;">レミ族</span>の畑を荒らし、物資を遮断したかったためだが、</td></tr>
</tbody>
</table>
<h5 class="green">第１０章</h5>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>１</sup></td>
<td><span style="color: #3d8b3d;">カエサル</span>は<a href="#note_titurius" title="ティトゥリウス" id="titurius"><ruby lang="ja">ティトゥリウス<rp>(</rp><rt lang="la">Titurius</rt><rp>)</rp></ruby lang="ja"></a>から報告を受けると、すべての騎兵、ヌミダの軽装兵、投石兵、弓兵に橋を渡らせて敵のもとへ急いだ。</td></tr>
<tr><td><sup>２</sup></td>
<td>激戦になったが、ローマ軍は河で身動きのとれなくなっていた敵を攻撃して多数を殺し、</td></tr>
<tr><td><sup>３</sup></td>
<td>大胆きわまりないことにその屍を乗り越えて渡ろうとする者たちは多数の飛び道具で撃退した。
また、先に渡り終えていた者は騎兵で取り囲んで殺した。</td></tr>
<tr><td><sup>４</sup></td>
<td>敵は街を攻撃する望みも河を渡る望みも<ruby>潰<rp>(</rp><rt>つい</rt><rp>)</rp></ruby>えたのを知り、ローマ軍が不利な場所に出てきて戦うこともしないとわかった。
自分たちの兵糧も不足してきたので、会議を開いてこのような結論を出した。
それぞれの故郷に戻るのがいちばんである。
万一ローマ軍が侵入してきたらすぐにそこを守るべく各地から集まることにしよう。
よその土地で戦うより自分の土地で戦う方が<ruby>兵<rp>(</rp><rt>ひょう</rt><rp>)</rp>糧<rp>(</rp><rt>ろう</rt><rp>)</rp></ruby>についても自分たちの蓄えを使えてよいだろう</td></tr>
<tr><td><sup>５</sup></td>
<td>そのような結論に至ったのは、ディウィキアクスが率いるハエドゥイ族がべロウァキ族の領土に向かっていると知り、もっと粘ろう、仲間を助けに行くのはよそうというわけにはいかなくなったからでもある。</td></tr>
</tbody>
</table>
<h5 class="green">第１１章</h5>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>１</sup></td>
<td>そう決まると、敵は第二夜警時に騒々しい物音を立てながら<ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp>慌<rp>(</rp><rt>あわ</rt><rp>)</rp></ruby>てで陣地を出ていった。
ろくに統制もとれておらず、誰もが我先にと故郷に向かったのでまるで夜逃げのようだったし、</td></tr>
<tr><td><sup>２</sup></td>
<td>その様子は<span style="color: #3d8b3d;">カエサル</span>も<ruby>斥候<rp>(</rp><rt>せっこう</rt><rp>)</rp></ruby>を通じてすぐに知ったのだが、伏兵の恐れもあったので（なぜ退却するのかはまだわかっていなかったのである）、軍も騎兵も陣地に留めておいた。</td></tr>
<tr><td><sup>３</sup></td>
<td>夜が明けて、<ruby>斥候<rp>(</rp><rt>せっこう</rt><rp>)</rp></ruby>を通じて事情を確認すると、敵のしんがりを足止めするべく騎兵の全軍を先発させ(これはッィットッス・ペディウス、ルーキウス・アウルシクレイウス・コッタ両副司令 に任せた)、ティトッス・ラビェーヌス副司令にも三個軍団を連れて後を追うよう命じた。</td></tr>
<tr><td><sup>４</sup></td>
<td>この者たちは敵のしんがりに襲いかかると、何マイルも追撃して、逃げ出した敵を大勢殺した。狙われた敵軍のしんがりは立ち止まってローマ軍の攻撃に勇敢に立ち向かったのだが、</td></tr>
<tr><td><sup>５</sup></td>
<td>先行していたおかげでまだ大丈夫だと思い込み、必要に迫られたり命令を受けることもなく統制がとれていなかった者たちは、<ruby>喊<rp>(</rp><rt>かん</rt><rp>)</rp>声<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>が聞こえてくると列を乱し、逃げて身を守ろうとしたので、</td></tr>
<tr><td><sup>６</sup></td>
<td>ローマ軍は何の危険を感じることもなく日の出ている間に大勢の敵を殺せたのである(彼らは日没になると追撃をやめて、命じられていた通りに陣地に戻ってきた)。</td></tr>
</tbody>
</table>
<h4 class="green">第１２章：スエシオネス族、ベロヴァキ族、アンビアニ族が服従して、カエサルがネルウィイ族の地へと渡る</h4>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>１</sup></td>
<td>翌日、カェサルは敵が恐怖心や敗走の痛手から立ち直る前に<span style="color: #3d8b3d;">レミ族</span>の隣人であるスェシオネス族の領土に軍を移動し、強行軍で<a href="#note_noviodunum" title="ノウィオドゥヌム" id="noviodunum"><ruby lang="ja">ノウィオドゥヌム<rp>(</rp><rt lang="la">Noviodunum</rt><rp>)</rp></ruby lang="ja"></a>という街に向かった。</td></tr>
<tr><td><sup>２</sup></td>
<td>行軍を終えると守備隊がいないと聞いていたのであるから、街を攻略しようとしたのだが、壕が広く防壁も高かったため、守備隊が少なかったにもかかわらず街を落とせなかったので、</td></tr>
<tr><td><sup>３</sup></td>
<td>陣地を築くと、作業小屋を移動させながら攻城戦に使うものの準備を始めた。</td></tr>
<tr><td><sup>４</sup></td>
<td>そうこうしているうちに逃げ出していたスエシオネス族が全員その夜のうちに街に戻ってきていたのだが、</td></tr>
<tr><td><sup>５</sup></td>
<td>あっという間に<a href="#note_mantelets" title="作業小屋" id="mantelets">作業小屋</a>が街へと押し寄せ、攻城用の土手をかけられ、檜が組まれるという工事の大がかりさ（ガリア人には見たことも聞いたこともないほどの工事だったのである）とローマ人の手早さに動転して、<span style="color: #3d8b3d;">カエサル</span>のもとに降伏の使節を送ってきた（この者たちは<span style="color: #3d8b3d;">レミ族</span>の仲介があったので存続を許された）。</td></tr>
</tbody>
</table>
<div class="notices green">
<h2>註釈</h2>
</div>
<h3 id="note_labienus" class="green">ラビエヌス</h3>
<div class="notices green">
<p><ruby lang="ja">ラビエヌス<rp>(</rp><rt lang="la">Labienus</rt><rp>)</rp></ruby lang="ja">は、共和政ローマ期の軍人、政治家である。
ガイウス・ユリウス・カエサルの盟友であり、ガリア戦争では<ruby>総督代理<rp>(</rp><rt>レガトゥス</rt><rp>)</rp></ruby>としてカエサルを支えたが、ローマ内戦ではカエサルと敵対した。
さらに<a href="https://ja.wikipedia.org/wiki/ティトゥス・ラビエヌス" title="ティトゥス・ラビエヌス">詳しく &#11171;</a>。</p>
<ul>
<li>註に戻る：<a href="#labienus" title="ラビエヌス">ラビエヌス &#11105;</a></li>
</ul>
</div>
<h3 id="note_gallia_citerior" class="green">ガリアの第３の地域　ガリア・キテリオル</h3>
<div class="notices green">
<p><ruby lang="ja">ガリア<rp>(</rp><rt lang="la">Gallia</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>キテリオル<rp>(</rp><rt lang="la">Citerior</rt><rp>)</rp></ruby lang="ja">。現在のイタリア半島北部。「ガリアの第３の地域」、あるいは、<ruby lang="ja">ガリア<rp>(</rp><rt lang="la">Gallia</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>キサルピナ<rp>(</rp><rt lang="la">Cisalpina</rt><rp>)</rp></ruby lang="ja">とも呼ばれている。「キテリオル」は「こちら側」との意を示していて、「こちら側のガリア」。</p>
<hr>
<ul>
<li>註に戻る：<a href="#tertiam_galliae_partem" title="ガリアの第3の地域">ガリアの第３の地域 &#11105;</a></li>
<li>註に戻る：<a href="#gallia_citerior" title="ガリア・キテリオル">ガリア・キテリオル &#11105;</a></li>
</ul>
</div>
<h3 id="note_quintus_pedius" class="green">クィントッス・ペディウス</h3>
<div class="notices green">
<p><ruby lang="ja">クィントッス<rp>(</rp><rt lang="la">Quintus</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>ペディウス<rp>(</rp><rt lang="la">Pedius</rt><rp>)</rp></ruby lang="ja">はカエサルの甥。
内乱時代もカエサルに付き従い、紀元前４３年には執政官となっている。  </p>
<ul>
<li>註に戻る：<a href="#quintus_pedius" title="クィントッス・ペディウス">クィントッス・ペディウス &#11105;</a></li>
</ul>
</div>
<h3 id="note_senones" class="green">セノネス族</h3>
<div class="notices green">
<p><ruby lang="ja">セノネース<rp>(</rp><rt lang="la">Senones</rt><rp>)</rp></ruby lang="ja">族は現在の<a href="https://ja.wikipedia.org/wiki/サンス" title="https://ja.wikipedia.org/wiki/サンス"><ruby lang="ja">サンス<rp>(</rp><rt lang="fr">Sens</rt><rp>)</rp></ruby lang="ja"></a>近郊に住んでいたと考えられている。  </p>
<ul>
<li>註に戻る：<a href="#senones" title="セノネス族">セノネス族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_gallia_ulterior" class="green">ガリア・ウルテリオル</h3>
<div class="notices green">
<p><ruby lang="ja">ガリア<rp>(</rp><rt lang="la">Gallia</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>ウルテリオル<rp>(</rp><rt lang="la">Ulterior</rt><rp>)</rp></ruby lang="ja">は現在のアルプスの西側・北側。<a href="https://ja.wikipedia.org/wiki/ガリア・ナルボネンシス" title="ガリア・トランサルピナ"><ruby lang="ja">ガリア<rp>(</rp><rt lang="la">Gallia</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>トランサルピナ<rp>(</rp><rt lang="la">transalpina</rt><rp>)</rp></ruby lang="ja"></a>とも呼ばれている。「ウルテリオル」は「向こう側」との意を示していて、「向こう側のガリア」と、「ウルテリオル」は「向こう側」との意を示していて、（アルプス）の「向こう側のガリア」である。  </p>
<ul>
<li>註に戻る：<a href="#gallia_ulterior" title="ガリア・ウルテリオル">ガリア・ウルテリオル &#11105;</a></li>
</ul>
</div>
<h3>レミ族</h3>
<div class="notices green">
<p>レミ族は現在の<a href="https://ja.wikipedia.org/wiki/サンス" title="https://ja.wikipedia.org/wiki/サンス"><ruby lang="ja">ランス<rp>(</rp><rt lang="fr">Reims</rt><rp>)</rp></ruby lang="ja"></a>近郊に住んでいたと考えられている。  </p>
<ul>
<li>註に戻る：<a href="#remi" title="レミ族">レミ族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_rhenus" class="green">レヌス川</h3>
<div class="notices green">
<p><ruby lang="ja">レヌス<rp>(</rp><rt lang="la">Rhenus</rt><rp>)</rp></ruby lang="ja">河は現在の<a href="https://ja.wikipedia.org/wiki/ライン川" title="ライン川">ライン川</a>です。</p>
<ul>
<li>註に戻る：<a href="#rhenus" title="レヌス川">レミ族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_germani" class="green">ゲルマニ人</h3>
<div class="notices green">
<p>ゲルマニ人はラテン呼称。<a href="https://ja.wikipedia.org/wiki/ゲルマン人" title="ゲルマン人">ゲルマン人</a>。  </p>
<ul>
<li>註に戻る：<a href="#germani" title="ゲルマニ人">ゲルマニ人 &#11105;</a></li>
</ul>
</div>
<h3 id="note_suessiones" class="green">スエシオネス族</h3>
<div class="notices green">
<p>スエシオネス族はソワソン近郊に住んでいたと考えられている。  </p>
<ul>
<li>註に戻る：<a href="#suessiones" title="スエシオネス族">スエシオネス族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_teutoni" class="green">テウトニ族</h3>
<div class="notices green">
<p><ruby>テウトニ<rp>(</rp><rt>Teutoni</rt><rp>)</rp></ruby>族はラテン呼称。<a href="https://ja.wikipedia.org/wiki/テウトネス族" title="テウトネス族">テウトネス族</a>。  </p>
<ul>
<li>註に戻る：<a href="#teutoni" title="テウトニ族">スエシオネス族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_bellovaci" class="green">ベロヴァキ族</h3>
<div class="notices green">
<p>ベロヴァキ族は、57年にユリウス・カエサルによって征服された現在フランス北東部、<a href="https://ja.wikipedia.org/wiki/オワーズ川" title="オワーズ川"><ruby lang="ja">オワーズ<rp>(</rp><rt lang="fr">Oise</rt><rp>)</rp></ruby lang="ja">川</a>の西岸、<ruby lang="ja">ボーヴェ<rp>(</rp><rt lang="fr">Beauvais</rt><rp>)</rp></ruby lang="ja">近郊の部族で、<a href="https://ja.wikipedia.org/wiki/ガリア・ベルギカ" title="ガリア・ベルギカ"><ruby lang="ja">ガリア<rp>(</rp><rt lang="fr">Gallia</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ベルギカ<rp>(</rp><rt lang="fr">Belgica</rt><rp>)</rp></ruby lang="ja"></a>にあった最も強力で多くの民族の中にあった。　　</p>
<ul>
<li>註に戻る：<a href="#suessiones" title="スエシオネス族">ベロヴァキ族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_diviciacus" class="green">ディウィキアクス</h3>
<div class="notices green">
<p>スエシオネス族の<ruby lang="ja">ディウィキアクス<rp>(</rp><rt lang="la">Diviciacus</rt><rp>)</rp></ruby lang="ja">は次の章に出て来る<a href="#diviciacus_Haeduum" title="ハエドゥイ族のディウィキアクス">ハエドゥイ族のディウィキアクス</a>とは別人と考えられている。</p>
<ul>
<li>註に戻る：<a href="#diviciacus" title="ディウィキアクス">ディウィキアクス &#11105;</a></li>
</ul>
</div>
<h3 id="note_galba" class="green">ガルバ</h3>
<div class="notices green">
<p><ruby lang="ja">ガルバ<rp>(</rp><rt lang="la">Galba</rt><rp>)</rp></ruby lang="ja">は公正で分別があることから戦争全体の指揮権を全会一致で任されている。</p>
<ul>
<li>註に戻る：<a href="#galba" title="ガルバ">ガルバ &#11105;</a></li>
</ul>
</div>
<h3 id="note_nervii" class="green">ネルウィイ族</h3>
<div class="notices green">
<p><ruby lang="ja">ネルウィイ<rp>(</rp><rt lang="la">Nervii</rt><rp>)</rp></ruby lang="ja">族は<a href="https://ja.wikipedia.org/wiki/カンブレー" title="カンブレー"><ruby lang="ja">カンブレー<rp>(</rp><rt lang="fr">Cambrai</rt><rp>)</rp></ruby lang="ja"></a>近郊、  </p>
<ul>
<li>註に戻る：<a href="#nervii" title="ネルウィイ族">ネルウィイ族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_atrebates" class="green">アトレバテス族</h3>
<div class="notices green">
<p><ruby lang="ja">アトレバテス<rp>(</rp><rt lang="la">Atrebates</rt><rp>)</rp></ruby lang="ja">は<a href="https://ja.wikipedia.org/wiki/アラス" title="アラス"><ruby lang="ja">アラス<rp>(</rp><rt lang="fr">Arras</rt><rp>)</rp></ruby lang="ja"></a>近郊、  </p>
<ul>
<li>註に戻る：<a href="#atrebates" title="アトレバテス族">アトレバテス族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_ambiani" class="green">アンビアニ族</h3>
<div class="notices green">
<p><ruby lang="ja">アンビアニ<rp>(</rp><rt lang="la">Ambiani</rt><rp>)</rp></ruby lang="ja">族は<a href="https://ja.wikipedia.org/wiki/アミアン" title="アミアン"><ruby lang="ja">アミアン<rp>(</rp><rt lang="fr">Amiens</rt><rp>)</rp></ruby lang="ja"></a>近郊、  </p>
<ul>
<li>註に戻る：<a href="#ambiani" title="アンビアニ族">アンビアニ族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_morini" class="green">モリニ族</h3>
<div class="notices green">
<p><ruby lang="ja">モリニ<rp>(</rp><rt lang="la">Morini</rt><rp>)</rp></ruby lang="ja">は<a href="https://ja.wikipedia.org/wiki/ブローニュ＝シュル＝メール" title="ブローニュ＝シュル＝メール"><ruby lang="ja">ブローニュ<rp>(</rp><rt lang="fr">Boulogne</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>シュル<rp>(</rp><rt lang="fr">sur</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>メール<rp>(</rp><rt lang="fr">Mer</rt><rp>)</rp></ruby lang="ja"></a>近郊、  </p>
<ul>
<li>註に戻る：<a href="#morini" title="モリニ族">モリニ族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_menapii" class="green">メナピィー族</h3>
<div class="notices green">
<p><ruby lang="ja">メナピイ<rp>(</rp><rt lang="la">Menapii</rt><rp>)</rp></ruby lang="ja">族は<a href="https://ja.wikipedia.org/wiki/マース川" title="マース川"><ruby lang="ja">マース川<rp>(</rp><rt lang="nl">Maas</rt><rp>)</rp></ruby lang="ja"></a>と<a href="https://ja.wikipedia.org/wiki/スヘルデ川" title="スヘルデ川"><ruby lang="ja">スヘルデ川<rp>(</rp><rt lang="nl">Schelde</rt><rp>)</rp></ruby lang="ja"></a>の下流域、  </p>
<ul>
<li>註に戻る：<a href="#menapii" title="メナピィー族">メナピィー族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_caleti" class="green">カレティ族</h3>
<div class="notices green">
<p><ruby lang="ja">カレティ<rp>(</rp><rt lang="la">Caleti</rt><rp>)</rp></ruby lang="ja">族は<a href="https://ja.wikipedia.org/wiki/コー" title="コー"><ruby lang="ja">コー<rp>(</rp><rt lang="fr">Caux</rt><rp>)</rp></ruby lang="ja"></a>近郊、  </p>
<ul>
<li>註に戻る：<a href="#caleti" title="カレティ族">カレティ族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_veliocasses" class="green">ウェリオカッセス族</h3>
<div class="notices green">
<p><ruby lang="ja">ウェリオカッセス<rp>(</rp><rt lang="la">Veliocasses</rt><rp>)</rp></ruby lang="ja">族は<a href="https://ja.wikipedia.org/wiki/ルーアン" title="}ルーアン"><ruby lang="ja">ルーアン<rp>(</rp><rt lang="fr">Rouen</rt><rp>)</rp></ruby lang="ja"></a>近郊、  </p>
<ul>
<li>註に戻る：<a href="#veliocasses" title="ウェリオカッセス族">ウェリオカッセス族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_viromandui" class="green">ウィロマンドゥイ族</h3>
<div class="notices green">
<p><ruby lang="ja">ウィロマンドゥイ<rp>(</rp><rt lang="la">Viromandui</rt><rp>)</rp></ruby lang="ja">族は<a href="https://ja.wikipedia.org/wiki/ノワイヨン" title="ノワイヨン"><ruby lang="ja">ノワイヨン<rp>(</rp><rt lang="fr">Noyon</rt><rp>)</rp></ruby lang="ja"></a>近郊、  </p>
<ul>
<li>註に戻る：<a href="#viromandui" title="ウィロマンドゥイ族">ウィロマンドゥイ族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_aduatuci" class="green">アドゥアトゥキ族</h3>
<div class="notices green">
<p><ruby lang="ja">アドゥアトゥキ<rp>(</rp><rt lang="la">Aduatuci</rt><rp>)</rp></ruby lang="ja">は<a href="https://ja.wikipedia.org/wiki/ブリュッセル" title="ブリュッセル"><ruby lang="ja">ブリュッセル<rp>(</rp><rt lang="fr">Bruxelles</rt><rp>)</rp></ruby lang="ja"></a>を中心とする<a href="https://ja.wikipedia.org/wiki/ブラバント" title="ブラバント"><ruby lang="ja">ブラバン<rp>(</rp><rt lang="fr">Brabant</rt><rp>)</rp></ruby lang="ja"></a>地方南部、  </p>
<ul>
<li>註に戻る：<a href="#aduatuci" title="アドゥアトゥキ族">アドゥアトゥキ族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_condrusi" class="green">コンドルシ族</h3>
<div class="notices green">
<p><ruby lang="ja">コンドルシ<rp>(</rp><rt lang="la">Condrusi</rt><rp>)</rp></ruby lang="ja">族は<a href="https://ja.wikipedia.org/wiki/アルデンヌ" title="アルデンヌ"><ruby lang="ja">アルデンヌ<rp>(</rp><rt lang="fr">Ardennes</rt><rp>)</rp></ruby lang="ja"></a>近郊、  </p>
<ul>
<li>註に戻る：<a href="#condrusi" title="コンドルシ族">コンドルシ族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_eburones" class="green">エブロネス族</h3>
<div class="notices green">
<p><ruby lang="ja">エブロネス<rp>(</rp><rt lang="la">Eburones</rt><rp>)</rp></ruby lang="ja">族は<a href="https://ja.wikipedia.org/wiki/マース川" title="マース川">マース河</a>と<a href="https://ja.wikipedia.org/wiki/ライン川" title="ライン川">ライン河</a>に挟まれた<ruby lang="ja">ランブール<rp>(</rp><rt lang="fr">Limbourg</rt><rp>)</rp></ruby lang="ja">地方、  </p>
<ul>
<li>註に戻る：<a href="#eburones" title="エブロネス族">エブロネス族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_caeroesi" class="green">カエロシ族</h3>
<div class="notices green">
<p><ruby lang="ja">カエロシ<rp>(</rp><rt lang="la">Caeroesi</rt><rp>)</rp></ruby lang="ja">族は<a href="https://ja.wikipedia.org/wiki/リエージュ" title="リエージュ"><ruby lang="ja">リエージュ<rp>(</rp><rt lang="fr">Liège</rt><rp>)</rp></ruby lang="ja"></a>近郊、  </p>
<ul>
<li>註に戻る：<a href="#caeroesi" title="カエロシ族">カエロシ族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_paemani" class="green">パエマ二族</h3>
<div class="notices green">
<p><ruby lang="ja">パエマ二<rp>(</rp><rt lang="la">Paemani</rt><rp>)</rp></ruby lang="ja">族は<a href="https://ja.wikipedia.org/wiki/マルシュ＝アン＝ファメンヌ" title="マルシュ＝アン＝ファメンヌ"><ruby lang="ja">マルシュ<rp>(</rp><rt lang="fr">Marche</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>アン<rp>(</rp><rt lang="fr">en</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>ファメンヌ<rp>(</rp><rt lang="fr">Famenne</rt><rp>)</rp></ruby lang="ja"></a>近郊に住んでいたものと考えられている。  </p>
<ul>
<li>註に戻る：<a href="#paemani" title="パエマ二族">パエマ二族 &#11105;</a></li>
</ul>
</div>
<h3 id="note_aisne" class="green">アクソナ川</h3>
<div class="notices green">
<p><ruby lang="ja">アクソナ<rp>(</rp><rt lang="la">Axona</rt><rp>)</rp></ruby lang="ja">河は現在の<a href="https://ja.wikipedia.org/wiki/エーヌ川" title="エーヌ川"><ruby lang="ja">エーヌ<rp>(</rp><rt lang="fr">Aisne</rt><rp>)</rp></ruby lang="ja"></a>河に相当。  </p>
<ul>
<li>註に戻る：<a href="#aisne" title="アクソナ川">アクソナ川 &#11105;</a></li>
</ul>
</div>
<h3 id="note_cohorte" class="green">個大隊</h3>
<div class="notices green">
<p>大隊の定数は６００名。小隊６個分、中隊３個分である。なお、１個軍団は１０個大隊からなる。  </p>
<ul>
<li>註に戻る：<a href="#aisne" title="アクソナ川">個大隊 &#11105;</a></li>
</ul>
</div>
<h3 id="note_bibrax" class="green">ビブラクス</h3>
<div class="notices green">
<p><ruby lang="ja">ビブラクス<rp>(</rp><rt lang="la">Bibrax</rt><rp>)</rp></ruby lang="ja">は現在の<a href="https://ja.wikipedia.org/wiki/ラン_(フランス)" title="ラン_(フランス)"><ruby lang="ja">ラン<rp>(</rp><rt lang="fr">Laon</rt><rp>)</rp></ruby lang="ja"></a>に当たる。  </p>
<ul>
<li>註に戻る：<a href="#bibrax" title="ビブラクス">ビブラクス &#11105;</a></li>
</ul>
</div>
<p><a href="#note_tortue" title="亀甲陣" id="tortue">亀甲陣</a>亀甲陣は密集隊形のひとつで、正面だけでなく、側面や頭上も楯で覆い隠すようにする。</p>
<h3 id="note_tortue" class="green">亀甲陣</h3>
<div class="notices green">
<p><ruby>亀甲<rp>(</rp><rt>きっこう</rt><rp>)</rp>陣<rp>(</rp><rt>じん</rt><rp>)</rp></ruby>は密集隊形のひとつで、正面だけでなく、側面や頭上も楯で覆い隠すようにする。  </p>
<ul>
<li>註に戻る：<a href="#tortue" title="亀甲陣">亀甲陣 &#11105;</a></li>
</ul>
</div>
<p>レミ族族でもっとも家柄がよく声望もある人物で、当時のビブラクス総督であり、カエサルのもとに講和の使節として来た者の一人でもある<a href="#iccius" title="イッキウス" id="iccius_2">イッキウス</a></p>
<h3 id="note_iccius" class="green">イッキウス</h3>
<div class="notices green">
<p>文書の先に「レミ族族でもっとも家柄がよく声望もある人物で、当時のビブラクス総督であり、カエサルのもとに講和の使節として来た者の一人でもある」と修飾されている（<a href="#iccius_2" title="イッキウス">６・４</a>）。</p>
<ul>
<li>註に戻る：<a href="#iccius" title="イッキウス">イッキウス &#11105;</a></li>
</ul>
</div>
<h3 id="note_numidie" class="green">ヌミディア人</h3>
<div class="notices green">
<p><ruby lang="ja">ヌミディア<rp>(</rp><rt lang="la">Numidia</rt><rp>)</rp></ruby lang="ja">は現在のアルジェリア北東部周辺に当たる。
さらに<a href="https://ja.wikipedia.org/wiki/ヌミディア" title="ヌミディア">詳しく &#11171;</a>。</p>
<ul>
<li>註に戻る：<a href="#numidie" title="ヌミディア人">ヌミディア人 &#11105;</a></li>
</ul>
</div>
<h3 id="note_crete" class="green">クレタ人</h3>
<div class="notices green">
<p><ruby lang="ja">クレタ<rp>(</rp><rt lang="la">Creta</rt><rp>)</rp></ruby lang="ja">は<a href="https://ja.wikipedia.org/wiki/クレタ島" title="クレタ島">クレタ島</a>のこと。</p>
<ul>
<li>註に戻る：<a href="#crete" title="クレタ人">クレタ人 &#11105;</a></li>
</ul>
</div>
<h3 id="note_baleares" class="green">バレアレス人</h3>
<div class="notices green">
<p><ruby lang="ja">バレアレス<rp>(</rp><rt lang="la">Baleares</rt><rp>)</rp></ruby lang="ja">はスペインの<a href="https://ja.wikipedia.org/wiki/クィントゥス・ティトゥリウス・サビヌス" title="クィントゥス・ティトゥリウス・サビヌス">バレアレス諸島</a>のこと。</p>
<ul>
<li>註に戻る：<a href="#titurius" title="ティトゥリウス">バレアレス人 &#11105;</a></li>
</ul>
</div>
<h3 id="note_titurius" class="green">ティトゥリウス</h3>
<div class="notices green">
<p><ruby lang="ja">ティトゥリウス<rp>(</rp><rt lang="la">Titurius</rt><rp>)</rp></ruby lang="ja"><ruby>副官<rp>(</rp><rt>レガトゥス</rt><rp>)</rp></ruby>として、この戦いでは南岸の陣地を守った勲功を挙げた。<a href="https://ja.wikipedia.org/wiki/バレアレス諸島" title="バレアレス諸島">バレアレス諸島</a>のこと。</p>
<ul>
<li>註に戻る：<a href="#baleares" title="バレアレス人">ティトゥリウス &#11105;</a></li>
</ul>
</div>
<h3 id="note_noviodunum" class="green">ノウィオドゥヌム</h3>
<div class="notices green">
<p><ruby lang="ja">ノウィオドゥヌム<rp>(</rp><rt lang="la">Noviodunum</rt><rp>)</rp></ruby lang="ja">はスェシオネス族の<ruby>城塞都市<rp>(</rp><rt>オッピドゥム</rt><rp>)</rp></ruby>。現在の<ruby lang="ja">エーヌ<rp>(</rp><rt lang="fr">Aisne</rt><rp>)</rp></ruby lang="ja">県の<a href="https://ja.wikipedia.org/wiki/ソワソン" title="ソワソン"><ruby lang="ja">ソワソン<rp>(</rp><rt lang="fr">Soissons</rt><rp>)</rp></ruby lang="ja"></a>の近郊にある<ruby lang="ja">ポミエ<rp>(</rp><rt lang="fr">Pommiers</rt><rp>)</rp></ruby lang="ja">村に当る。</p>
<ul>
<li>註に戻る：<a href="#noviodunum" title="ノウィオドゥヌム">ノウィオドゥヌム &#11105;</a></li>
</ul>
</div>
<h3 id="note_mantelets" class="green">作業小屋</h3>
<div class="notices green">
<p>作業小屋は城攻めのときに工兵を飛び道具から守るために使われた差掛小屋のこと。城壁まではころで動かしていた。</p>
<ul>
<li>註に戻る：<a href="#mantelets" title="作業小屋">作業小屋 &#11105;</a></li>
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