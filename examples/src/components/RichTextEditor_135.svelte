<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:167 EN:198  -->

<article>

<hgroup>
<h2 class="green"><cite>ガリア戦記</cite>での</h2>
<h1 class="green">カエサルによるレミ族</h1>
</hgroup>

<div class="notices green">
<p><ruby lang="ja">ユリウス<rp>(</rp><rt lang="la">Iulius</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>カエサル<rp>(</rp><rt lang="la">Caesar</rt><rp>)</rp></ruby>が自ら書いたとされている「<cite><ruby lang="ja">ガリア戦記<rp>(</rp><rt lang="la">Commentarii&#160;de&#160;Bello&#160;Gallico</rt><rp>)</rp></ruby></cite>」は現在フランスの過去に関して文字で書かれた史料として一番古いの中に数えられている。</p>
<p>この素晴らしい作品について、いろいろいうべきことがあろうが、ここでは作品全体としてではなく、現代の<ruby lang="ja">ランス<rp>(</rp><rt lang="fr">Reims</rt><rp>)</rp></ruby>市の名の元になっている<ruby lang="ja">レミ<rp>(</rp><rt lang="la">Remi</rt><rp>)</rp></ruby>族が現れる第ニ巻の前半の部分にだけ関心を寄せています。</p>
<p>以下の文書の引用がそれに限りますが、それでも文書の流れがよりよく分かるように、ちょっと前のと後の部分をも載せようとしました。</p>
<p>前の部分の<a href="#1chap" title="第一章、ベルギー全土が混乱">第一</a>と<a href="#2chap" title="第ニ章、カエサルの措置">第ニ章</a>では、ローマ軍のガリアでの進出に当っての状態が表れています。</p>
<p><a href="#3chap" title="第三章、レミ族は自分をローマの味方と宣言する">第三章</a>では、レミ族の<ruby>長<rp>(</rp><rt>かしら</rt><rp>)</rp></ruby>たちがカエサルに使節を派遣し、他のガリア人部族と違って、抵抗ではなく自らローマと協力するのを選択します。</p>
<p>それからの<a href="#4chap" title="第四章、敵軍の列挙">第四章</a>、軍事行動の描写に移って、<a href="#8chap" title="第八章、エーヌ川の戦い"><ruby lang="ja">エーヌ<rp>(</rp><rt lang="fr">Aisne</rt><rp>)</rp></ruby>川の戦い</a>の展開がローマ軍の視点で語られます。</p>
<p>固有名詞や位置関係を分かりやすくするために地図をも載せています。</p>
<p>レミ族がローマ軍の勝利によっていろいろローマ政権によくして貰うことになるのでした。ランス市がローマ帝国政権区分の<ruby>第ニベルギカ州<rt>ベルギカ・セクンダ</rt></ruby>の首都となりました。</p>
</div>

<h2 class="green">ガリア戦記、第ニ巻</h2>

<h4 class="green" id="1chap">第一章：ベルギー全土が混乱</h4>

<ol class="doc">
  <li value="1">内ガリアにいた<span style="color: #3d8b3d;">カエサル</span>のもとにも何度となく噂は届いてい<a href="#note_labienus" title="ラビエヌス" id="labienus"><ruby lang="ja">ラビエヌス<rp>(</rp><rt lang="la">Labienus</rt><rp>)</rp></ruby></a>が手紙でこのようなことを知らせてきた。
  <a href="#note_gallia_citerior" title="ガリア・キテリオル" id="tertiam_galliae_partem">ガリアの第三の地域</a>にあたると前述したべルガエ人たちがこぞってローマ人に対する反乱を企て、人質をやりとりしている。</li>
  <li value="2">反乱を企てている理由はこうである。まず、ガリア全域が平和になったので次は自分たちのもとに準備してくるもではないかと思ったため。</li>
  <li value="3">次に、一部のガリア人のそそのかされたため、一部の者はゲルマニ人がこれ以上ガリアに来るのは望ましくないと思っていたのと同じ理屈で、ローマ軍がガリアで冬営して古顔になっていくのも不愉快だと思っていたし、気まぐれや浅はかな思いから新しい支配者を求めていた者もいたのである。</li>
  <li value="4">また、ガリアでは他人より力のある者、人を集める力のある者が一般に権力を握ってきたが、ローマ人に支配されてはそういうわけにはいかなくなるぞ、とそそのかす者もなくはなかった。</li>
</ol>

<h4 id="2chap" class="green">第ニ章：カエサルの措置</h4>

<ol class="doc">
  <li value="1">そのような噂や手紙に心動かされた<span style="color: #3d8b3d;">カエサル</span>は、<a href="#note_gallia_citerior" title="ガリア・キテリオル" id="gallia_citerior">ガリア・キテリオル</a>で新たにニ個軍団を徴集すると、戦争ができる季節になるや、そのニ個軍団を<a href="#note_gallia_ulterior" title="ガリア・ウルテリオル" id="gallia_ulterior">ガリア・ウルテリオル</a>へ移動させるために<a href="#note_quintus_pedius" title="クィントッス・ペディウス" id="quintus_pedius"><ruby lang="ja">クィントゥス<rp>(</rp><rt lang="la">Quintus</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>ペディウス<rp>(</rp><rt lang="la">Pedius</rt><rp>)</rp></ruby></a>副司令を派遣した。</li>
  <li value="2">自分も<ruby>糧<rp>(</rp><rt>りょう</rt><rp>)</rp>秣<rp>(</rp><rt>まつ</rt><rp>)</rp></ruby>の手配をするとすぐに軍のもとに行き、</li>
  <li value="3"><a href="#note_senones" title="セノネス族" id="senones">セノネス族</a>などべルガエ人の近くにいるガリア人に指示して、ベルガエ人のもとで起こってい ることを調べて報告させた。</li>
  <li value="4">全員が同じように、人手がかき集められ、軍が一所に集結していると報告してきたので、かくなるうえは晴踏せずべルガエ人のもとに行くべきだと思い、<ruby>兵<rp>(</rp><rt>ひょう</rt><rp>)</rp>糧<rp>(</rp><rt>ろう</rt><rp>)</rp></ruby>の準備を整えると陣地を移動して、<time datetime="P15D">十五日</time>ほどでべルガエ人の領土に到着した。</li>
</ol>

<h4 id="3chap" class="green">第三章：レミ族は自分をローマの味方と宣言する</h4>

<ol class="doc">
  <li value="1"><span style="color: #3d8b3d;">カエサル</span>が意表をついて誰も予想していなかったほど早く来たので、<span style="color: #3d8b3d;"><a href="#note_remi" title="レミ族" id="remi">レミ族</a></span>というべルガエ人の中でもっともガリアに近い部族が、カエサルに使節として<a href="#note_iccius" title="イッキウス" id="iccius"><ruby lang="ja">イッキウス<rp>(</rp><rt lang="la">Iccius</rt><rp>)</rp></ruby></a>と<ruby lang="ja">アンデコンボギウス<rp>(</rp><rt lang="la">Andecombogius</rt><rp>)</rp></ruby>という部族の第一人者を寄越して、こう言ってきた。</li>
  <li value="2">自分たちの身柄や財産はすべてローマ人の<ruby>肥<rp>(</rp><rt>ひ</rt><rp>)</rp>護<rp>(</rp><rt>ご</rt><rp>)</rp></ruby>に<ruby>委<rp>(</rp><rt>ゆだ</rt><rp>)</rp></ruby>ねる。
  自分たちはほかのべルガエ人と結託したことはないし、ローマ人に対する反乱を企てたこともない。</li>
  <li value="3">人質を差し出す用意はあるし、命令に従い、街への受け入れや兵糧などの援助もしよう。</li>
  <li value="4">ほかのべルガエ人は全員武装している。</li>
  <li value="5"><a href="#note_rhenus" title="レヌス川" id="rhenus"><ruby lang="ja">レヌス<rp>(</rp><rt lang="la">Rhenus</rt><rp>)</rp></ruby>河</a>のこちら側に住んでいる<a href="#note_germani" title="ゲルマニ人" id="germani"><ruby lang="ja">ゲルマニ<rp>(</rp><rt lang="la">Germani</rt><rp>)</rp></ruby></a>人とも共謀しているのだが、全員頭に血が上っているため、<a href="#note_suessiones" title="スエシオネス族" id="suessiones"><ruby lang="ja">スエシオネス<rp>(</rp><rt lang="la">Suessiones</rt><rp>)</rp></ruby>族</a>という自分たちの兄弟親戚にあたる（同じ掟、同じ法を使い、同じ支配者同じ<ruby>領<rp>(</rp><rt>りょう</rt><rp>)</rp>袖<rp>(</rp><rt>しゅう</rt><rp>)</rp></ruby>を共有する間柄の）部族を思いとどまらせて結託しないようにすることすらできなかった。</li>
</ol>

<h4 id="4chap" class="green">第４章：敵軍の列挙</h4>

<ol class="doc">
  <li value="1"><span style="color: #3d8b3d;">レミ族</span>にどの部族がどの程度武器を取れるのか、また戦争になったときの力はどうか<ruby>訊<rp>(</rp><rt>たず</rt><rp>)</rp></ruby>ねたところ、このようなことがわかった。
  多くのべルガエ人はゲルマニ人を先祖に持つ。
  はるか昔にレヌス川を渡り、土地の豊かさゆえに現在の場所に定住すると、そこに住んでいたガリア人を追い払ったのだが、</li>
  <li value="2">父祖の記憶にあるようにガリア全土が戦乱に巻き込まれたとき、<a href="#note_teutoni" title="テウトニ族" id="teutoni"><ruby lang="ja">テウトニ<rp>(</rp><rt lang="la">Teutoni</rt><rp>)</rp></ruby>族</a>と<ruby lang="ja">キンブリ<rp>(</rp><rt lang="la">Cimbri</rt><rp>)</rp></ruby>族の侵入を防げたのはこの者たちのみだったため、</li>
  <li value="3">そのときの記憶をもとに自分たちは非常に偉いと思い込み、軍事に多大な自信を持つようになってしまった。</li>
  <li value="4">また、べルガエ人の数についてはすべて調査済みであると言って、このような話もしてくれた。
  自分たちは、近所のことでもあるし婚姻によるつながりもあるので、べルガエ人の合同会議で誰がどれほどの人数をこの戦争に出すと約束したか知っている。</li>
  <li value="5">そのうち、武勇や権威、人数の点で最強の部族は<a href="#note_bellovaci" title="ベロヴァキ族" id="bellovaci"><ruby lang="ja">べロウァキ<rp>(</rp><rt lang="la">Bellovaci</rt><rp>)</rp></ruby></a>族である。
  彼らは武装した者を<span style="color: #3d8b3d;">第１００　０００人章</span>集めることができるのだが、<ruby>選<rp>(</rp><rt>え</rt><rp>)</rp></ruby>り抜きの六万人を約束するかわりに、戦争全体の指揮権を要求している。</li>
  <li value="6">スエシオネス族という自分たちの隣人は最大の領土と、もっとも<ruby>肥<rp>(</rp><rt>ひ</rt><rp>)</rp>沃<rp>(</rp><rt>よく</rt><rp>)</rp></ruby>な畑を持っている。</li>
  <li value="7">その王は、ローマ人の記憶では<a href="#note_diviciacus" title="ディウィキアクス" id="diviciacus"><ruby lang="ja">ディウィキアクス<rp>(</rp><rt lang="la">Diviciacus</rt><rp>)</rp></ruby></a>という、ガリア全体でもっとも権勢があり、この地域の大部分のみならずブリタンニアの支配権をも持っていた男だったが、現王は<a href="#note_galba" title="ガルバ" id="galba"><ruby lang="ja">ガルバ<rp>(</rp><rt lang="la">Galba</rt><rp>)</rp></ruby></a>である。
  所有する街の数は１２で、武装した者<span style="color: #3d8b3d;">５　０００人</span>を約束している。</li>
  <li value="8">同数を約束している<a href="#note_nervii" title="ネルウィイ族" id="nervii"><ruby lang="ja">ネルウィイ<rp>(</rp><rt lang="la">Nervii</rt><rp>)</rp></ruby>族</a>はベルガエ人の間でももっとも野蛮とみなされている。
  またもっとも遠くにいる部族でもある。</li>
  <li value="9"><a href="#note_atrebates" title="アトレバテス族" id="atrebates"><ruby lang="ja">アトレバテス<rp>(</rp><rt lang="la">Atrebates</rt><rp>)</rp></ruby>族</a>は<span style="color: #3d8b3d;">１５　０００人</span>、<a href="#note_ambiani" title="アンビアニ族" id="ambiani"><ruby lang="ja">アンビアニ<rp>(</rp><rt lang="la">Ambiani</rt><rp>)</rp></ruby>族</a>は<span style="color: #3d8b3d;">１０　０００人</span>、<a href="#note_morini" title="モリニ族" id="morini"><ruby lang="ja">モリニ<rp>(</rp><rt lang="la">Morini</rt><rp>)</rp></ruby>族</a>は<span style="color: #3d8b3d;">２５　０００人</span>、<a href="#note_menapii" title="メナピィー族" id="menapii"><ruby lang="ja">メナピイ<rp>(</rp><rt lang="la">Menapii</rt><rp>)</rp></ruby>族</a>は<span style="color: #3d8b3d;">９０００人</span>、<a href="#note_caleti" title="カレティ族" id="caleti"><ruby lang="ja">カレティ<rp>(</rp><rt lang="la">Caleti</rt><rp>)</rp></ruby>族</a>は<span style="color: #3d8b3d;">１０　０００人</span>、<a href="#note_veliocasses" title="ウェリオカッセス族" id="veliocasses"><ruby lang="ja">ウェリオカッセス<rp>(</rp><rt lang="la">Veliocasses</rt><rp>)</rp></ruby>族</a>と<a href="#note_viromandui" title="ウィロマンドゥイ族" id="viromandui"><ruby lang="ja">ウィロマンドゥイ<rp>(</rp><rt lang="la">Viromandui</rt><rp>)</rp></ruby>族</a>もこれと同数。
  <a href="#note_aduatuci" title="アドゥアトゥキ族" id="aduatuci"><ruby lang="ja">アドゥアトゥキ<rp>(</rp><rt lang="la">Aduatuci</rt><rp>)</rp></ruby>族</a>は<span style="color: #3d8b3d;">１９　０００人</span>。</li>
  <li value="10"><a href="#note_condrusi" title="コンドルシ族" id="condrusi"><ruby lang="ja">コンドルシ<rp>(</rp><rt lang="la">Condrusi</rt><rp>)</rp></ruby>族</a>、<a href="#note_eburones" title="エブロネス族" id="eburones"><ruby lang="ja">エブロネス<rp>(</rp><rt lang="la">Eburones</rt><rp>)</rp></ruby>族</a>、<a href="#note_caeroesi" title="カエロシ族" id="caeroesi"><ruby lang="ja">カエロシ<rp>(</rp><rt lang="la">Caeroesi</rt><rp>)</rp></ruby>族</a>、<a href="#note_paemani" title="パエマ二族" id="paemani"><ruby lang="ja">パエマ二<rp>(</rp><rt lang="la">Paemani</rt><rp>)</rp></ruby>族</a>といったひとくくりにゲルマニ人と呼ばれる者たちが<span style="color: #3d8b3d;">４０　０００人</span>ほどと考えられている。</li>
</ol>

<figure>
  <picture><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/03.reims/01.remes/gallia.svg" title="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《ミネルヴァとテイレシアス》絵画" alt="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《ミネルヴァとテイレシアス》絵画" class="class-diane-img"></picture><figcaption>手前に見えるミネルヴァが真ん中にいるテイレシアスを見えなくさせている</figcaption>
</figure>

<h4 class="green">第５章：ディウィキアクスはべロウァキ族を攻撃する。カエサルはエーヌ川を渡る</h4>

<ol class="doc">
  <li value="1"><span style="color: #3d8b3d;">カエサル</span>は<span style="color: #3d8b3d;">レミ族</span>を勇気づけ、寛大な言葉をかけると、長老を全員呼びつけ有力者の子供を人質として差し出すよう命じた（これは万事抜かりなく期日までに行われた）。</li>
  <li value="2">また、自らハエドウイー族のディウィキアクスをしっかり激励しながら、こう言った。
  ローマのみならず全員の安全のために重要なのは敵の軍隊を分散させることである。
  これほどの大軍と一度に衝突することがないようにしなければならない。</li>
  <li value="3">そのため、ハエドゥイー族には軍をべッロウアキー族の領土に進めて彼らの畑を<ruby>掠<rp>(</rp><rt>りゃく</rt><rp>)</rp>奪<rp>(</rp><rt>だつ</rt><rp>)</rp></ruby>してもらいたい。
  そのような指示を与えてディウイキアクスを送り出すと、べルガエ人の全軍が一ヶ所に集まって向かってくるのを見つけた。</li>
  <li value="4">送り出しておいた<ruby>斥候<rp>(</rp><rt>せっこう</rt><rp>)</rp></ruby>や<span style="color: #3d8b3d;">レミ族</span>からもすでにべルガエ人はさほど遠くないところまで来ているという報告があったので、急いで軍に<a href="#note_aisne" title="アクソナ川" id="aisne"><ruby lang="ja">アクソナ<rp>(</rp><rt lang="la">Axona</rt><rp>)</rp></ruby>河</a>という<span style="color: #3d8b3d;">レミ族</span>の領土の<ruby>外<rp>(</rp><rt>はず</rt><rp>)</rp></ruby>れにある</li>
  <li value="5">河を渡らせると、そこに陣地を築いて陣の片側を河岸で固め、背後にあるものを敵の手から守り、<span style="color: #3d8b3d;">レミ族</span>などからの物資が安全に運び込まれるようにした。</li>
  <li value="6">この河には橋がかかっていたが、そこにも守備隊を置き、対岸にはクィントゥス・ティトゥリウス・サビーヌス副司令率いる六<a href="#note_aisne" title="アクソナ川" id="cohortes">個大隊</a>を残しておいた。
  また陣地は高さ一二フィートの土塁と一八フィートの壕で囲むようじた。</li>
</ol>

<h4 class="green">第６章と第７章：ビブラクスの包囲を解かさせる</h4>

<h5 class="green">第６章</h5>

<ol class="doc">
  <li value="1">この陣地から<span style="color: #3d8b3d;">レミ族</span>の<a href="#note_bibrax" title="ビブラクス" id="bibrax"><ruby lang="ja">ビブラクス<rp>(</rp><rt lang="la">Bibrax</rt><rp>)</rp></ruby></a>という街までは八マイルの距離だったのだが、べルガエ人は道すがらその街に猛攻撃をかけ始めた（かろうじてその日は持ちこたえた）。</li>
  <li value="2">ガリア人もべルガエ人も街の攻め方は同じで、大勢の者で防壁をぐるりと取り囲むと石を投げ始め、防壁から守備隊を一掃すると<a href="#note_tortue" title="亀甲陣" id="tortue">亀甲陣</a>を作って門を乗り越え、あるいは壁の下を掘り進むのだが、</li>
  <li value="3">今回あっけなく守りを崩されたのはあまりにも多くの者が石や飛び道具を投げてきたので、防壁の上に留まっていられる者がいなかったためである。</li>
  <li value="4">夜が来て攻撃が終わると、<span style="color: #3d8b3d;">レミ族</span>でもっとも家柄がよく声望もある人物で、当時のビブラクス総督であり、<span style="color: #3d8b3d;">カエサル</span>のもとに講和の使節として来た者の一人でもある<a href="#note_iccius" title="イッキウス" id="iccius_2">イッキウス</a>が<span style="color: #3d8b3d;">カエサル</span>に使者を寄越した。
  援軍を送ってもらえなければもう持ちこたえられそうにないとのことだったので、</li>
</ol>

<h5 class="green">第６章</h5>

<ol class="doc">
  <li value="1">夜のうちにイッキウスが使者として送ってきた者たちを道案内として、<a href="#note_numidie" title="ヌミディア人" id="numidie"><ruby lang="ja">ヌミディア<rp>(</rp><rt lang="la">Numidia</rt><rp>)</rp></ruby>人</a>や<a href="#note_crete" title="クレタ人" id="crete"><ruby lang="ja">クレタ<rp>(</rp><rt lang="la">Creta</rt><rp>)</rp></ruby>人</a>の弓兵と、<a href="#note_baleares" title="バレアレス人" id="baleares"><ruby lang="ja">バレアレス<rp>(</rp><rt lang="la">Baleares</rt><rp>)</rp></ruby>人</a>の投石兵を住民の救助に向かわせた。</li>
  <li value="2">援軍が到着すると、<span style="color: #3d8b3d;">レミ族</span>は守り切れる希望がわいたので士気が上がり、敵の方は同じ理由から街を奪いとれる希望がなくなったので、しばし街の近辺に留まって<span style="color: #3d8b3d;">レミ族</span>の畑を荒らし、手当たり次第に村や建物を焼いてから、全軍で<span style="color: #3d8b3d;">カエサル</span>の陣地に向かい、二マイルも離れていないところに陣地を築いた</li>
  <li value="3">この陣地は煙や火から判断すると八マイル以上もの長さがあった。</li>
</ol>

<h4 id="8chap"  class="green">第８、９、１０と１１章：エーヌ川の戦い</h4>

<h5 class="green">第８章</h5>

<ol class="doc">
  <li value="1"><span style="color: #3d8b3d;">カエサル</span>は当初敵も多いし並々ならぬ武勇の噂も聞いていたので戦闘を差し控えることにしたのだが、</li>
  <li value="2">それでも毎日騎兵戦をして、敵の武勇がどれほどのものか、またローマ軍がどこまでできるか試しているうちに、ローマ軍も劣っているわけではないことがわかった。</li>
  <li value="3">陣地の前の地形が布陣するのに適していたので（陣地を築いた丘はまわりの平地から少々高くなっていたのだが、正面には布陣した軍を収容できるほどの幅があったし、両側は急な坂になっていたものの、正面の傾斜はゆるやかでなだらかに平野へと降っていたのである）、丘の両側からそれぞれ直角に４００複歩ほどの壕を掘ると、</li>
  <li value="4">その壕の終端には砦を作って<ruby>射<rp>(</rp><rt>しゃ</rt><rp>)</rp>出<rp>(</rp><rt>しゅつ</rt><rp>)</rp>機<rp>(</rp><rt>き</rt><rp>)</rp></ruby>を設置し、布陣したとき、数の多さを頼りに側面から襲いかかる敵に包囲されてしまうことのないようにした。</li>
  <li value="5">それを済ますと、最近徴集した二個軍団を陣地に残して必要なときには援軍に出せるようにし、残りの六個軍団を陣地の前に配置した。
  敵も同様に軍を陣地から出して隊形を整えた。</li>
</ol>

<h5 class="green">第９章</h5>

<ol class="doc">
  <li value="1">両軍の間には大きくはないが沼があった。
  敵はここをローマ軍が渡ってくるものと思って待ちかまえていたし、ローマ軍も敵が渡り始めて身動きがとれなくなったところで襲いかかろうと武器を構えて準備していたのだが、それを尻目とも沼を渡ろうとはしなかったし、</li>
  <li value="2">騎兵戦はローマ軍が優勢だったので<span style="color: #3d8b3d;">カエサル</span>が軍を陣地に引き上げると、</li>
  <li value="3">敵はすぐにそこから前述の通りローマ軍の陣地の裏手にあるアクソナ川の方へと急ぎ</li>
  <li value="4">浅瀬を見つけると軍の一部を渡らせようとした。
  これは、できればクィントゥス・ティトゥリウス副司令が指揮する砦を襲って橋を壊し、</li>
  <li value="5">それが無理なら<span style="color: #3d8b3d;">レミ族</span>の畑を荒らし、物資を遮断したかったためだが、</li>
</ol>

<h5 class="green">第１０章</h5>

<ol class="doc">
  <li value="1"><span style="color: #3d8b3d;">カエサル</span>は<a href="#note_titurius" title="ティトゥリウス" id="titurius"><ruby lang="ja">ティトゥリウス<rp>(</rp><rt lang="la">Titurius</rt><rp>)</rp></ruby></a>から報告を受けると、すべての騎兵、ヌミダの軽装兵、投石兵、弓兵に橋を渡らせて敵のもとへ急いだ。</li>
  <li value="2">激戦になったが、ローマ軍は河で身動きのとれなくなっていた敵を攻撃して多数を殺し、</li>
  <li value="3">大胆きわまりないことにその屍を乗り越えて渡ろうとする者たちは多数の飛び道具で撃退した。
  また、先に渡り終えていた者は騎兵で取り囲んで殺した。</li>
  <li value="4">敵は街を攻撃する望みも河を渡る望みも<ruby>潰<rp>(</rp><rt>つい</rt><rp>)</rp></ruby>えたのを知り、ローマ軍が不利な場所に出てきて戦うこともしないとわかった。
  自分たちの兵糧も不足してきたので、会議を開いてこのような結論を出した。
  それぞれの故郷に戻るのがいちばんである。
  万一ローマ軍が侵入してきたらすぐにそこを守るべく各地から集まることにしよう。
  よその土地で戦うより自分の土地で戦う方が<ruby>兵<rp>(</rp><rt>ひょう</rt><rp>)</rp>糧<rp>(</rp><rt>ろう</rt><rp>)</rp></ruby>についても自分たちの蓄えを使えてよいだろう</li>
  <li value="5">そのような結論に至ったのは、ディウィキアクスが率いるハエドゥイ族がべロウァキ族の領土に向かっていると知り、もっと粘ろう、仲間を助けに行くのはよそうというわけにはいかなくなったからでもある。</li>
</ol>

<h5 class="green">第１１章</h5>

<ol class="doc">
  <li value="1">そう決まると、敵は第二夜警時に騒々しい物音を立てながら<ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp>慌<rp>(</rp><rt>あわ</rt><rp>)</rp></ruby>てで陣地を出ていった。
  ろくに統制もとれておらず、誰もが我先にと故郷に向かったのでまるで夜逃げのようだったし、</li>
  <li value="2">その様子は<span style="color: #3d8b3d;">カエサル</span>も<ruby>斥候<rp>(</rp><rt>せっこう</rt><rp>)</rp></ruby>を通じてすぐに知ったのだが、伏兵の恐れもあったので（なぜ退却するのかはまだわかっていなかったのである）、軍も騎兵も陣地に留めておいた。</li>
  <li value="3">夜が明けて、<ruby>斥候<rp>(</rp><rt>せっこう</rt><rp>)</rp></ruby>を通じて事情を確認すると、敵のしんがりを足止めするべく騎兵の全軍を先発させ(これはッィットッス・ペディウス、ルーキウス・アウルシクレイウス・コッタ両副司令 に任せた)、ティトッス・ラビェーヌス副司令にも三個軍団を連れて後を追うよう命じた。</li>
  <li value="4">この者たちは敵のしんがりに襲いかかると、何マイルも追撃して、逃げ出した敵を大勢殺した。狙われた敵軍のしんがりは立ち止まってローマ軍の攻撃に勇敢に立ち向かったのだが、</li>
  <li value="5">先行していたおかげでまだ大丈夫だと思い込み、必要に迫られたり命令を受けることもなく統制がとれていなかった者たちは、<ruby>喊<rp>(</rp><rt>かん</rt><rp>)</rp>声<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>が聞こえてくると列を乱し、逃げて身を守ろうとしたので、</li>
  <li value="6">ローマ軍は何の危険を感じることもなく日の出ている間に大勢の敵を殺せたのである(彼らは日没になると追撃をやめて、命じられていた通りに陣地に戻ってきた)。</li>
</ol>

<h4 class="green">第１２章：スエシオネス族、ベロヴァキ族、アンビアニ族が服従して、カエサルがネルウィイ族の地へと渡る</h4>

<ol class="doc">
  <li value="1">翌日、カェサルは敵が恐怖心や敗走の痛手から立ち直る前に<span style="color: #3d8b3d;">レミ族</span>の隣人であるスェシオネス族の領土に軍を移動し、強行軍で<a href="#note_noviodunum" title="ノウィオドゥヌム" id="noviodunum"><ruby lang="ja">ノウィオドゥヌム<rp>(</rp><rt lang="la">Noviodunum</rt><rp>)</rp></ruby></a>という街に向かった。</li>
  <li value="2">行軍を終えると守備隊がいないと聞いていたのであるから、街を攻略しようとしたのだが、壕が広く防壁も高かったため、守備隊が少なかったにもかかわらず街を落とせなかったので、</li>
  <li value="3">陣地を築くと、作業小屋を移動させながら攻城戦に使うものの準備を始めた。</li>
  <li value="4">そうこうしているうちに逃げ出していたスエシオネス族が全員その夜のうちに街に戻ってきていたのだが、</li>
  <li value="5">あっという間に<a href="#note_mantelets" title="作業小屋" id="mantelets">作業小屋</a>が街へと押し寄せ、攻城用の土手をかけられ、檜が組まれるという工事の大がかりさ（ガリア人には見たことも聞いたこともないほどの工事だったのである）とローマ人の手早さに動転して、<span style="color: #3d8b3d;">カエサル</span>のもとに降伏の使節を送ってきた（この者たちは<span style="color: #3d8b3d;">レミ族</span>の仲介があったので存続を許された）。</li>
</ol>

<aside>

<h2>註釈</h2>

<h4 id="note_labienus" class="green note">ラビエヌス</h4>

<div class="notices green">
<p><ruby lang="ja">ラビエヌス<rp>(</rp><rt lang="la">Labienus</rt><rp>)</rp></ruby>は、共和政ローマ期の軍人、政治家である。
ガイウス・ユリウス・カエサルの盟友であり、ガリア戦争では<ruby>総督代理<rp>(</rp><rt>レガトゥス</rt><rp>)</rp></ruby>としてカエサルを支えたが、ローマ内戦ではカエサルと敵対した。
さらに<a href="https://ja.wikipedia.org/wiki/ティトゥス・ラビエヌス" title="ティトゥス・ラビエヌス">詳しく &#11171;</a>。</p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#labienus" title="ラビエヌス">ラビエヌス ↩</a></p>
</footer>

<h4 id="note_gallia_citerior" class="green note">ガリアの第三の地域　ガリア・キテリオル</h4>

<div class="notices green">
<p><ruby lang="ja">ガリア<rp>(</rp><rt lang="la">Gallia</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>キテリオル<rp>(</rp><rt lang="la">Citerior</rt><rp>)</rp></ruby>。現在のイタリア半島北部。「ガリアの第三の地域」、あるいは、<ruby lang="ja">ガリア<rp>(</rp><rt lang="la">Gallia</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>キサルピナ<rp>(</rp><rt lang="la">Cisalpina</rt><rp>)</rp></ruby>とも呼ばれている。「キテリオル」は「こちら側」との意を示していて、「こちら側のガリア」。</p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#tertiam_galliae_partem" title="ガリアの第3の地域">ガリアの第三の地域 ↩</a></p>
  <p class="puce">註に戻る：<a href="#gallia_citerior" title="ガリア・キテリオル">ガリア・キテリオル ↩</a></p>
</footer>

<h4 id="note_quintus_pedius" class="green note">クィントッス・ペディウス</h4>

<div class="notices green">
<p><ruby lang="ja">クィントッス<rp>(</rp><rt lang="la">Quintus</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>ペディウス<rp>(</rp><rt lang="la">Pedius</rt><rp>)</rp></ruby>はカエサルの甥。
内乱時代もカエサルに付き従い、<time datetime="-0043">紀元前４３年</time>には執政官となっている。  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#quintus_pedius" title="クィントッス・ペディウス">クィントッス・ペディウス ↩</a></p>
</footer>

<h4 id="note_senones" class="green note">セノネス族</h4>

<div class="notices green">
<p><ruby lang="ja">セノネース<rp>(</rp><rt lang="la">Senones</rt><rp>)</rp></ruby>族は現在の<a href="https://ja.wikipedia.org/wiki/サンス" title="https://ja.wikipedia.org/wiki/サンス"><ruby lang="ja">サンス<rp>(</rp><rt lang="fr">Sens</rt><rp>)</rp></ruby></a>近郊に住んでいたと考えられている。  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#senones" title="セノネス族">セノネス族 ↩</a></p>
</footer>

<h4 id="note_gallia_ulterior" class="green note">ガリア・ウルテリオル</h4>

<div class="notices green">
<p><ruby lang="ja">ガリア<rp>(</rp><rt lang="la">Gallia</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>ウルテリオル<rp>(</rp><rt lang="la">Ulterior</rt><rp>)</rp></ruby>は現在のアルプスの西側・北側。<a href="https://ja.wikipedia.org/wiki/ガリア・ナルボネンシス" title="ガリア・トランサルピナ"><ruby lang="ja">ガリア<rp>(</rp><rt lang="la">Gallia</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>トランサルピナ<rp>(</rp><rt lang="la">transalpina</rt><rp>)</rp></ruby></a>とも呼ばれている。「ウルテリオル」は「向こう側」との意を示していて、「向こう側のガリア」と、「ウルテリオル」は「向こう側」との意を示していて、（アルプス）の「向こう側のガリア」である。  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#gallia_ulterior" title="ガリア・ウルテリオル">ガリア・ウルテリオル ↩</a></p>
</footer>

<h4>レミ族</h4>

<div class="notices green">
<p>レミ族は現在の<a href="https://ja.wikipedia.org/wiki/サンス" title="https://ja.wikipedia.org/wiki/サンス"><ruby lang="ja">ランス<rp>(</rp><rt lang="fr">Reims</rt><rp>)</rp></ruby></a>近郊に住んでいたと考えられている。  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#remi" title="レミ族">レミ族 ↩</a></p>
</footer>

<h4 id="note_rhenus" class="green note">レヌス川</h4>

<div class="notices green">
<p><ruby lang="ja">レヌス<rp>(</rp><rt lang="la">Rhenus</rt><rp>)</rp></ruby>河は現在の<a href="https://ja.wikipedia.org/wiki/ライン川" title="ライン川">ライン川</a>です。</p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#rhenus" title="レヌス川">レミ族 ↩</a></p>
</footer>

<h4 id="note_germani" class="green note">ゲルマニ人</h4>

<div class="notices green">
<p>ゲルマニ人はラテン呼称。<a href="https://ja.wikipedia.org/wiki/ゲルマン人" title="ゲルマン人">ゲルマン人</a>。  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#germani" title="ゲルマニ人">ゲルマニ人 ↩</a></p>
</footer>

<h4 id="note_suessiones" class="green note">スエシオネス族</h4>

<div class="notices green">
<p>スエシオネス族はソワソン近郊に住んでいたと考えられている。  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#suessiones" title="スエシオネス族">スエシオネス族 ↩</a></p>
</footer>

<h4 id="note_teutoni" class="green note">テウトニ族</h4>

<div class="notices green">
<p><ruby>テウトニ<rp>(</rp><rt>Teutoni</rt><rp>)</rp></ruby>族はラテン呼称。<a href="https://ja.wikipedia.org/wiki/テウトネス族" title="テウトネス族">テウトネス族</a>。  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#teutoni" title="テウトニ族">スエシオネス族 ↩</a></p>
</footer>

<h4 id="note_bellovaci" class="green note">ベロヴァキ族</h4>

<div class="notices green">
<p>ベロヴァキ族は、<time datetime="0057">５７年</time>にユリウス・カエサルによって征服された現在フランス北東部、<a href="https://ja.wikipedia.org/wiki/オワーズ川" title="オワーズ川"><ruby lang="ja">オワーズ<rp>(</rp><rt lang="fr">Oise</rt><rp>)</rp></ruby>川</a>の西岸、<ruby lang="ja">ボーヴェ<rp>(</rp><rt lang="fr">Beauvais</rt><rp>)</rp></ruby>近郊の部族で、<a href="https://ja.wikipedia.org/wiki/ガリア・ベルギカ" title="ガリア・ベルギカ"><ruby lang="ja">ガリア<rp>(</rp><rt lang="fr">Gallia</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ベルギカ<rp>(</rp><rt lang="fr">Belgica</rt><rp>)</rp></ruby></a>にあった最も強力で多くの民族の中にあった。　　</p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#suessiones" title="スエシオネス族">ベロヴァキ族 ↩</a></p>
</footer>

<h4 id="note_diviciacus" class="green note">ディウィキアクス</h4>

<div class="notices green">
<p>スエシオネス族の<ruby lang="ja">ディウィキアクス<rp>(</rp><rt lang="la">Diviciacus</rt><rp>)</rp></ruby>は次の章に出て来る<a href="#diviciacus_Haeduum" title="ハエドゥイ族のディウィキアクス">ハエドゥイ族のディウィキアクス</a>とは別人と考えられている。</p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#diviciacus" title="ディウィキアクス">ディウィキアクス ↩</a></p>
</footer>

<h4 id="note_galba" class="green note">ガルバ</h4>

<div class="notices green">
<p><ruby lang="ja">ガルバ<rp>(</rp><rt lang="la">Galba</rt><rp>)</rp></ruby>は公正で分別があることから戦争全体の指揮権を全会一致で任されている。</p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#galba" title="ガルバ">ガルバ ↩</a></p>
</footer>

<h4 id="note_nervii" class="green note">ネルウィイ族</h4>

<div class="notices green">
<p><ruby lang="ja">ネルウィイ<rp>(</rp><rt lang="la">Nervii</rt><rp>)</rp></ruby>族は<a href="https://ja.wikipedia.org/wiki/カンブレー" title="カンブレー"><ruby lang="ja">カンブレー<rp>(</rp><rt lang="fr">Cambrai</rt><rp>)</rp></ruby></a>近郊、  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#nervii" title="ネルウィイ族">ネルウィイ族 ↩</a></p>
</footer>

<h4 id="note_atrebates" class="green note">アトレバテス族</h4>

<div class="notices green">
<p><ruby lang="ja">アトレバテス<rp>(</rp><rt lang="la">Atrebates</rt><rp>)</rp></ruby>は<a href="https://ja.wikipedia.org/wiki/アラス" title="アラス"><ruby lang="ja">アラス<rp>(</rp><rt lang="fr">Arras</rt><rp>)</rp></ruby></a>近郊、  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#atrebates" title="アトレバテス族">アトレバテス族 ↩</a></p>
</footer>

<h4 id="note_ambiani" class="green note">アンビアニ族</h4>

<div class="notices green">
<p><ruby lang="ja">アンビアニ<rp>(</rp><rt lang="la">Ambiani</rt><rp>)</rp></ruby>族は<a href="https://ja.wikipedia.org/wiki/アミアン" title="アミアン"><ruby lang="ja">アミアン<rp>(</rp><rt lang="fr">Amiens</rt><rp>)</rp></ruby></a>近郊、  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#ambiani" title="アンビアニ族">アンビアニ族 ↩</a></p>
</footer>

<h4 id="note_morini" class="green note">モリニ族</h4>

<div class="notices green">
<p><ruby lang="ja">モリニ<rp>(</rp><rt lang="la">Morini</rt><rp>)</rp></ruby>は<a href="https://ja.wikipedia.org/wiki/ブローニュ＝シュル＝メール" title="ブローニュ＝シュル＝メール"><ruby lang="ja">ブローニュ<rp>(</rp><rt lang="fr">Boulogne</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>シュル<rp>(</rp><rt lang="fr">sur</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>メール<rp>(</rp><rt lang="fr">Mer</rt><rp>)</rp></ruby></a>近郊、  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#morini" title="モリニ族">モリニ族 ↩</a></p>
</footer>

<h4 id="note_menapii" class="green note">メナピィー族</h4>

<div class="notices green">
<p><ruby lang="ja">メナピイ<rp>(</rp><rt lang="la">Menapii</rt><rp>)</rp></ruby>族は<a href="https://ja.wikipedia.org/wiki/マース川" title="マース川"><ruby lang="ja">マース川<rp>(</rp><rt lang="nl">Maas</rt><rp>)</rp></ruby></a>と<a href="https://ja.wikipedia.org/wiki/スヘルデ川" title="スヘルデ川"><ruby lang="ja">スヘルデ川<rp>(</rp><rt lang="nl">Schelde</rt><rp>)</rp></ruby></a>の下流域、  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#menapii" title="メナピィー族">メナピィー族 ↩</a></p>
</footer>

<h4 id="note_caleti" class="green note">カレティ族</h4>

<div class="notices green">
<p><ruby lang="ja">カレティ<rp>(</rp><rt lang="la">Caleti</rt><rp>)</rp></ruby>族は<a href="https://ja.wikipedia.org/wiki/コー" title="コー"><ruby lang="ja">コー<rp>(</rp><rt lang="fr">Caux</rt><rp>)</rp></ruby></a>近郊、  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#caleti" title="カレティ族">カレティ族 ↩</a></p>
</footer>

<h4 id="note_veliocasses" class="green note">ウェリオカッセス族</h4>

<div class="notices green">
<p><ruby lang="ja">ウェリオカッセス<rp>(</rp><rt lang="la">Veliocasses</rt><rp>)</rp></ruby>族は<a href="https://ja.wikipedia.org/wiki/ルーアン" title="}ルーアン"><ruby lang="ja">ルーアン<rp>(</rp><rt lang="fr">Rouen</rt><rp>)</rp></ruby></a>近郊、  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#veliocasses" title="ウェリオカッセス族">ウェリオカッセス族 ↩</a></p>
</footer>

<h4 id="note_viromandui" class="green note">ウィロマンドゥイ族</h4>

<div class="notices green">
<p><ruby lang="ja">ウィロマンドゥイ<rp>(</rp><rt lang="la">Viromandui</rt><rp>)</rp></ruby>族は<a href="https://ja.wikipedia.org/wiki/ノワイヨン" title="ノワイヨン"><ruby lang="ja">ノワイヨン<rp>(</rp><rt lang="fr">Noyon</rt><rp>)</rp></ruby></a>近郊、  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#viromandui" title="ウィロマンドゥイ族">ウィロマンドゥイ族 ↩</a></p>
</footer>

<h4 id="note_aduatuci" class="green note">アドゥアトゥキ族</h4>

<div class="notices green">
<p><ruby lang="ja">アドゥアトゥキ<rp>(</rp><rt lang="la">Aduatuci</rt><rp>)</rp></ruby>は<a href="https://ja.wikipedia.org/wiki/ブリュッセル" title="ブリュッセル"><ruby lang="ja">ブリュッセル<rp>(</rp><rt lang="fr">Bruxelles</rt><rp>)</rp></ruby></a>を中心とする<a href="https://ja.wikipedia.org/wiki/ブラバント" title="ブラバント"><ruby lang="ja">ブラバン<rp>(</rp><rt lang="fr">Brabant</rt><rp>)</rp></ruby></a>地方南部、  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#aduatuci" title="アドゥアトゥキ族">アドゥアトゥキ族 ↩</a></p>
</footer>

<h4 id="note_condrusi" class="green note">コンドルシ族</h4>

<div class="notices green">
<p><ruby lang="ja">コンドルシ<rp>(</rp><rt lang="la">Condrusi</rt><rp>)</rp></ruby>族は<a href="https://ja.wikipedia.org/wiki/アルデンヌ" title="アルデンヌ"><ruby lang="ja">アルデンヌ<rp>(</rp><rt lang="fr">Ardennes</rt><rp>)</rp></ruby></a>近郊、  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#condrusi" title="コンドルシ族">コンドルシ族 ↩</a></p>
</footer>

<h4 id="note_eburones" class="green note">エブロネス族</h4>

<div class="notices green">
<p><ruby lang="ja">エブロネス<rp>(</rp><rt lang="la">Eburones</rt><rp>)</rp></ruby>族は<a href="https://ja.wikipedia.org/wiki/マース川" title="マース川">マース河</a>と<a href="https://ja.wikipedia.org/wiki/ライン川" title="ライン川">ライン河</a>に挟まれた<ruby lang="ja">ランブール<rp>(</rp><rt lang="fr">Limbourg</rt><rp>)</rp></ruby>地方、  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#eburones" title="エブロネス族">エブロネス族 ↩</a></p>
</footer>

<h4 id="note_caeroesi" class="green note">カエロシ族</h4>

<div class="notices green">
<p><ruby lang="ja">カエロシ<rp>(</rp><rt lang="la">Caeroesi</rt><rp>)</rp></ruby>族は<a href="https://ja.wikipedia.org/wiki/リエージュ" title="リエージュ"><ruby lang="ja">リエージュ<rp>(</rp><rt lang="fr">Liège</rt><rp>)</rp></ruby></a>近郊、  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#caeroesi" title="カエロシ族">カエロシ族 ↩</a></p>
</footer>

<h4 id="note_paemani" class="green note">パエマ二族</h4>

<div class="notices green">
<p><ruby lang="ja">パエマ二<rp>(</rp><rt lang="la">Paemani</rt><rp>)</rp></ruby>族は<a href="https://ja.wikipedia.org/wiki/マルシュ＝アン＝ファメンヌ" title="マルシュ＝アン＝ファメンヌ"><ruby lang="ja">マルシュ<rp>(</rp><rt lang="fr">Marche</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>アン<rp>(</rp><rt lang="fr">en</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>ファメンヌ<rp>(</rp><rt lang="fr">Famenne</rt><rp>)</rp></ruby></a>近郊に住んでいたものと考えられている。  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#paemani" title="パエマ二族">パエマ二族 ↩</a></p>
</footer>

<h4 id="note_aisne" class="green note">アクソナ川</h4>

<div class="notices green">
<p><ruby lang="ja">アクソナ<rp>(</rp><rt lang="la">Axona</rt><rp>)</rp></ruby>河は現在の<a href="https://ja.wikipedia.org/wiki/エーヌ川" title="エーヌ川"><ruby lang="ja">エーヌ<rp>(</rp><rt lang="fr">Aisne</rt><rp>)</rp></ruby></a>河に相当。  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#aisne" title="アクソナ川">アクソナ川 ↩</a></p>
</footer>

<h4 id="note_cohorte" class="green note">個大隊</h4>

<div class="notices green">
<p>大隊の定数は６００名。小隊６個分、中隊３個分である。なお、１個軍団は１０個大隊からなる。  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#aisne" title="アクソナ川">個大隊 ↩</a></p>
</footer>

<h4 id="note_bibrax" class="green note">ビブラクス</h4>

<div class="notices green">
<p><ruby lang="ja">ビブラクス<rp>(</rp><rt lang="la">Bibrax</rt><rp>)</rp></ruby>は現在の<a href="https://ja.wikipedia.org/wiki/ラン_(フランス)" title="ラン_(フランス)"><ruby lang="ja">ラン<rp>(</rp><rt lang="fr">Laon</rt><rp>)</rp></ruby></a>に当たる。  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#bibrax" title="ビブラクス">ビブラクス ↩</a></p>
</footer>
<p><a href="#note_tortue" title="亀甲陣" id="tortue">亀甲陣</a>亀甲陣は密集隊形のひとつで、正面だけでなく、側面や頭上も楯で覆い隠すようにする。</p>

<h4 id="note_tortue" class="green note">亀甲陣</h4>

<div class="notices green">
<p><ruby>亀甲<rp>(</rp><rt>きっこう</rt><rp>)</rp>陣<rp>(</rp><rt>じん</rt><rp>)</rp></ruby>は密集隊形のひとつで、正面だけでなく、側面や頭上も楯で覆い隠すようにする。  </p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#tortue" title="亀甲陣">亀甲陣 ↩</a></p>
</footer>
<p>レミ族族でもっとも家柄がよく声望もある人物で、当時のビブラクス総督であり、カエサルのもとに講和の使節として来た者の一人でもある<a href="#iccius" title="イッキウス" id="iccius_2">イッキウス</a></p>

<h4 id="note_iccius" class="green note">イッキウス</h4>

<div class="notices green">
<p>文書の先に「レミ族族でもっとも家柄がよく声望もある人物で、当時のビブラクス総督であり、カエサルのもとに講和の使節として来た者の一人でもある」と修飾されている（<a href="#iccius_2" title="イッキウス">６・４</a>）。</p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#iccius" title="イッキウス">イッキウス ↩</a></p>
</footer>

<h4 id="note_numidie" class="green note">ヌミディア人</h4>

<div class="notices green">
<p><ruby lang="ja">ヌミディア<rp>(</rp><rt lang="la">Numidia</rt><rp>)</rp></ruby>は現在のアルジェリア北東部周辺に当たる。
さらに<a href="https://ja.wikipedia.org/wiki/ヌミディア" title="ヌミディア">詳しく &#11171;</a>。</p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#numidie" title="ヌミディア人">ヌミディア人 ↩</a></p>
</footer>

<h4 id="note_crete" class="green note">クレタ人</h4>

<div class="notices green">
<p><ruby lang="ja">クレタ<rp>(</rp><rt lang="la">Creta</rt><rp>)</rp></ruby>は<a href="https://ja.wikipedia.org/wiki/クレタ島" title="クレタ島">クレタ島</a>のこと。</p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#crete" title="クレタ人">クレタ人 ↩</a></p>
</footer>

<h4 id="note_baleares" class="green note">バレアレス人</h4>

<div class="notices green">
<p><ruby lang="ja">バレアレス<rp>(</rp><rt lang="la">Baleares</rt><rp>)</rp></ruby>はスペインの<a href="https://ja.wikipedia.org/wiki/クィントゥス・ティトゥリウス・サビヌス" title="クィントゥス・ティトゥリウス・サビヌス">バレアレス諸島</a>のこと。</p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#titurius" title="ティトゥリウス">バレアレス人 ↩</a></p>
</footer>

<h4 id="note_titurius" class="green note">ティトゥリウス</h4>

<div class="notices green">
<p><ruby lang="ja">ティトゥリウス<rp>(</rp><rt lang="la">Titurius</rt><rp>)</rp></ruby><ruby>副官<rp>(</rp><rt>レガトゥス</rt><rp>)</rp></ruby>として、この戦いでは南岸の陣地を守った勲功を挙げた。<a href="https://ja.wikipedia.org/wiki/バレアレス諸島" title="バレアレス諸島">バレアレス諸島</a>のこと。</p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#baleares" title="バレアレス人">ティトゥリウス ↩</a></p>
</footer>

<h4 id="note_noviodunum" class="green note">ノウィオドゥヌム</h4>

<div class="notices green">
<p><ruby lang="ja">ノウィオドゥヌム<rp>(</rp><rt lang="la">Noviodunum</rt><rp>)</rp></ruby>はスェシオネス族の<ruby>城塞都市<rp>(</rp><rt>オッピドゥム</rt><rp>)</rp></ruby>。現在の<ruby lang="ja">エーヌ<rp>(</rp><rt lang="fr">Aisne</rt><rp>)</rp></ruby>県の<a href="https://ja.wikipedia.org/wiki/ソワソン" title="ソワソン"><ruby lang="ja">ソワソン<rp>(</rp><rt lang="fr">Soissons</rt><rp>)</rp></ruby></a>の近郊にある<ruby lang="ja">ポミエ<rp>(</rp><rt lang="fr">Pommiers</rt><rp>)</rp></ruby>村に当る。</p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#noviodunum" title="ノウィオドゥヌム">ノウィオドゥヌム ↩</a></p>
</footer>

<h4 id="note_mantelets" class="green note">作業小屋</h4>

<div class="notices green">
<p>作業小屋は城攻めのときに工兵を飛び道具から守るために使われた差掛小屋のこと。城壁まではころで動かしていた。</p>
</div>
<footer>
  <p class="puce">註に戻る：<a href="#mantelets" title="作業小屋">作業小屋 ↩</a></p>
</footer>

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