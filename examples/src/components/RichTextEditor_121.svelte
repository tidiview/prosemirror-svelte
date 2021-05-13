<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:152 EN:184 -->

<article>

<p><time datetime="2020-02-23">２０２０年２月２３日</time></p>

<h1 class="green">トゥールのグレゴリウスによるキルペリック一世と<wbr>プリスクスの出会い</h1>

<div class="notices green">
<p>トゥールのグレゴリウスの「フランク史」の第六巻の五章からの抜粋は、<a href="https://ja.wikipedia.org/wiki/キルペリク1世" title="https://ja.wikipedia.org/wiki/キルペリク1世">キルペリック一世王</a>と、彼のユダヤ教の臣民の一人であるプリスクスが著者の目の前で行った会談を取り上げた。</p>
<p>主人公の社会的位置が全く異なるにもかかわらず、譲歩を伴わない一種の霊的な戦いとして描かれている。</p>
<p>プリスクスは自分の信仰から何も省かないので、私たちにそれで彼の信仰、特にそのキリスト教に対する既約性を理解できることにしてくれています。</p>
<p>私たちは中世が単一のキリスト教だと簡単に想像している自分に、不意に不安定になっていることに驚いてしまいます。</p>
<p>プリスクスは、活気、独創性、例えばトロワのラシなど、他の証人が受け入れるユダヤ教の信仰の特異点を思い起こさせる。</p>
<p>魅力的ですもの！</p>
</div>

<h2 class="green">キルペリック一世とプリスクスの出会いの文書</h2>

<h3 class="green">第五章</h3>

<p><ruby lang="ja">キルペリクス<rp>（</rp><rt lang="fr">Chilpéric</rt><rp>）</rp></ruby><span style="color: #3d778a;">王</span>がまだ上述の<a href="#note_villa" title="villa" id="villa" class="green">館</a>に滞在し、荷物を整理して搬出するよう指示し、<ruby lang="ja">パ<rp>（</rp><rt lang="fr">Pa</rt><rp>）</rp>リ<rp>（</rp><rt lang="fr">ri</rt><rp>）</rp>シ<rp>（</rp><rt lang="fr">si</rt><rp>）</rp>ウス<rp>（</rp><rt lang="fr">us</rt><rp>）</rp></ruby>［パリ］へ移動する算段をしていたころ、私は別れを告げに王のもとへ赴いた。
その時、王の商品購入を任されている<span style="color: #3d638a;">プリスクスという名のユダヤ人</span>がやって来た。</p>
<p><span style="color: #3d778a;">王</span>はご機嫌を取るように手を彼の頭に乗せて、私に向って言った。</p>
<p class="conversation">「こちらへおいで下さい、神のしもべよ、<span style="color: #3d778a;">「お手をこの人の頭に置きたまわんことを」</span>（マタイ伝、９、１８）</p>
<p><span style="color: #3d638a;">ユダヤ人</span>が嫌がると<span style="color: #3d778a;">王</span>は言った。</p>
<p class="conversation"><span style="color: #3d778a;">「何と<ruby>頑<rp>（</rp><rt>かたくな</rt><rp>）</rp></ruby>な、常に不信心な民族か。この人たちは自分たちの預言者の声を通じて神の<ruby>御<rp>（</rp><rt>み</rt><rp>）</rp>子<rp>（</rp><rt>こ</rt><rp>）</rp></ruby>が約束されたことを知ろうとせず、その神の御子の犠牲の上に教会の神秘が建てられたことを知ろうとしないのです」。</span></p>
<p>すると<span style="color: #3d638a;">ユダヤ人</span>は答えた。</span></p>
<p class="conversation"><span style="color: #3d638a;">「神は結婚せず、子を持たず、王国の中に自分と同等の者を必要としません。神はモーセを通じ、</span><a href="#note_deuteronome" title="申命記、第三十二章、三十九節" id="deuteronome" class="green">「今こそは見よ、
われこそは彼なり。
われの他には神なし。
殺すことと生かすこと、討つことと癒すことはすべてわれこれをなす」</a>
とおっしゃいました」</p>
<p>そこで<span style="color: #3d778a;">王</span>は言った。</p>
<p class="conversation">「神は霊的子宮で永遠の<ruby>御<rp>（</rp><rt>み</rt><rp>）</rp>子<rp>（</rp><rt>こ</rt><rp>）</rp></ruby>を産みたまうたのです。
年齢において等しく、全能において劣らず、自ら<a href="#note_engendre" title="暁の前に胎より汝を産めり" id="engendre" class="green">「暁の前に胎より汝を産めり」</a>と述べておられます。神はあらゆる時代に先立って御子を産み、その御子を最新の時代の中へ、この世の救世主として送りたまうたのです。あなたがたの預言者が<a href="#note_verbe" title="主は御言葉を遣わして彼らを癒し" id="verbe" class="green">「み言葉をつかわして これを癒し」</a>と言っている通りです。
それでも神はご自分では産むことなどなさらぬ、とおっしゃるのならば、あなたがたの預言者が神の声で、<a href="#note_enfanter" title="子を産ませるわたしが胎を閉ざすことがあろうか" id="enfanter" class="green">「我は産ましめる者なるにいかでか産む事なさざらんや」</a>と述べているのをお聞き下さい。
これ は彼を通じ信仰によって再生する民族のことを述べているのですよ」
</p>
<p>そこで<span style="color: #3d638a;">ユダヤ人</span>は尋ねた。</p>
<p class="conversation"><span style="color: #3d638a;">「一体、神なるものが人となり、女より生まれ、鞭打たれ、死をこうむるなんてことがあり得ますか」</span></p>
<p>この言葉に<span style="color: #3d778a;">王</span>が黙り込んだので、<span style="color: #503d8a;">私</span>が口をはさんだ。</p>
<p class="conversation"><span style="color: #503d8a;">「神の御子、すなわち神が人となりたまうたのは、神の事情によるのでなくて我々人間の側の事情によるのです。</p>
<p class="conversation">というのは、人間が罪を犯し、悪魔に従属してしまった以上、神は人の姿を取らねば人間をあがない戻すことがで きなかったのです。</p>
<p class="conversation">「私はあなたが信じない福音書や使徒の言葉ではなく、あなたの聖書（旧約聖書）の言葉を引用しましょう。</p>
<p class="conversation">ダビデがゴリアテをそうやってやっつけたと書いてあるように、あなたがたの剣で攻撃しましょう。</p>
<p class="conversation">神が人になるだろうとあなたがたの預言者が言っています。<a href="#note_ecoute" title="神が人になるだろう" id="ecoute" class="green">「神であり人である者、誰かこれを知らん」</a>とね。</p>
<p class="conversation">また別の個所には、<a href="#note_luinotredieu" title="この方こそわたしたちの神であり" id="luinotredieu" class="green">「これこそ我らの神にましますなれ、彼にたぐうべき者なかるべし。</a></p>
<p class="conversation"><a href="#note_luinotredieu" title="この方こそわたしたちの神であり" class="green">彼は智恵のすべての道 をしろしめし、これをそのしもべヤコブとその愛したもうイスラエルに与えたまえり。</a></p>
<p class="conversation"><a href="#note_luinotredieu" title="この方こそわたしたちの神であり" class="green">後に彼は地上に現れ、人々のうちに住めり」とあります。</a></p>
<p class="conversation">彼が処女より生まれたこともあなたがたの預言者の言葉に聞くことができます。</p>
<p class="conversation"><a href="#note_vierge" title="彼が処女より生まれたことも" id="vierge" class="green">「見よ、おとめ孕みて子をうまん</a></p>
<p class="conversation"><a href="#note_vierge" title="彼が処女より生まれたことも" class="green">「その名をイマヌエルととなうべし」</a>、</p>
<p class="conversation">「この名は、神われらと共にいますという意味なり」<a href="#note_vierge" title="彼が処女より生まれたことも" class="green">
</a>と。</p>
<p class="conversation">「また彼が鞭打たれ、十字架に打ち付けられねばならず、また種々の不正にさらされさいなまれることも、他の預言者が、</p>
<p class="conversation"><a href="#note_perce" title="わが手、わが足を刺しつらぬけり、またたがいにわが衣をわかつs" id="perce" class="green">「わが手、わが足を刺しつらぬけり、またたがいにわが衣をわかつ」</a>と述べ、また、</p>
<p class="conversation"><a href="#note_fiel" title="人はわたしに苦いものを食べさせようとし渇くわたしに酢を飲ませようとします" id="fiel" class="green">「かれらは<ruby>苦<rp>（</rp><rt>にが</rt><rp>）</rp>草<rp>（</rp><rt>くさ</rt><rp>）</rp></ruby>をわが食物に入れ、わが<ruby>渇<rp>（</rp><rt>かわ</rt><rp>）</rp></ruby>ける時に酢を飲ませたり」</a>
と述べています。</p>
<p class="conversation">そして主が十字架にかかりつつ、悪魔の支配に屈して堕落したこの世を、ご自分の王国のうちに建て直したまうことをダビデは、<a href="#note_parlebois" title="神は直き木をもて統べたまう" id="parlebois" class="green">「神は直き木 （十字架）をもてこの世を<ruby>統<rp>（</rp><rt>すべ</rt><rp>）</rp></ruby>べたまう」</a>
と述べています。
<a href="#note_parlebois" title="神は直き木をもて統べたまう" class="green">「主はそれ以前にも神の御許にあって、ともに統治の業をなしたまうてはいたのですが、ご自分の手で悪魔への隷属から解放したまうた民草を得て改めて、ご自身の王国を持ちたまったのです」</a></span></p>
<p>すると<span style="color: #3d638a;">ユダヤ人</span>は、</p>
<p class="conversation"><span style="color: #3d638a;">「どうして神たるものがそんな目にあう必要があったのですか」</span>
と尋ねた。</p>
<p><span style="color: #503d8a;">私</span>は言った。</p>
<p class="conversation"><span style="color: #503d8a;">「すでに申しました。</p>
<p class="conversation">神は無垢な人間を創造したまったのですが、蛇の邪知が人間をわなにかけたのです。</p>
<p class="conversation">こうして人間は罪ある者になり、楽園から追放されてこの世の労働を担うはめになったのです。</p>
<p class="conversation">人間が神と和解するためには神の一人子キリストの死が必要でした」</span></p>
<p>そこで<span style="color: #3d638a;">ユダヤ人</span>は尋ねた。</p>
<p class="conversation"><span style="color: #3d638a;">「神は自ら人間の肉をまとわずとも、預言者か使徒をつかわして、人間を正道に戻すことができたのではありま せんか」</span></p>
<p><span style="color: #503d8a;">私</span>は答えた。</p>
<p class="conversation"><span style="color: #503d8a;">二人間という種族は最初から常に間違った道を歩いていたのです。</p>
<p class="conversation">大洪水もソドムの火災もエジプトの災難も、</p>
<p class="conversation">海やヨルダン川の分裂もまったく人に畏敬の念を起こさしめませんでした。</p>
<p class="conversation">人間は常に神の掟に逆らいました。</p>
<p class="conversation">人間は預言者の言葉を信じませんでした。</p>
<p class="conversation">いや、信じなかったばかりか、悔恨を説く彼らを殺しさえしたのです。</p>
<p class="conversation">ですから、主自らあがないのために降りたまわずば、我々の救済が成就することはなかったのです。</p>
<p class="conversation">我々は主の降誕によって再生し、主の洗礼により清められ、主の傷によって癒され、主の復活によって立ち直り、主の昇天により栄光にあずかったのです。</p>
<p class="conversation">主が我々の病をいやすべく降臨したまうことについてはあなたがたの預言者も、</p>
<p class="conversation"><a href="#note_meurtrissure" title="彼の受けた傷によってわたしたちはいやされた" id="meurtrissure" class="green">「そのうたれし<ruby>疵<rp>（</rp><rt>きず</rt><rp>）</rp></ruby>によりてわれらは癒されたり」</a>
と述べ、</p>
<p class="conversation"><a href="#note_commeunebrebis" title="屠殺場にひかるる子羊のごとく" id="commeunebrebis" class="green">「彼は我々の罪を背負い、罪人のために祈りたり」</a>
と言い、また、</p>
<p class="conversation"><a href="#note_commeunebrebis" title="屠殺場にひかるる子羊のごとく" class="green">「彼は屠殺場にひかるる子羊のごとく毛を切る者のまえに黙す羊のごとくその口をひらかざりき。</a></p>
<p class="conversation">彼は虐待のうちに判決を受けたり。</p>
<p class="conversation">その代の人のうち誰が彼のために口を開きしや」（同、５３、７）、</p>
<p class="conversation"><a href="#note_armees" title="その名は万軍の主" id="armees" class="green">「その名は万軍の主エホバ」</a>
などと色々述べています。</p>
<p class="conversation">また、あなたがたの誇りとするご先祖のヤコブが、自分の息子のユダを祝福する言葉、まるでキリストに向けられたようなあの言葉も、このことを述べているのです。</p>
<p class="conversation"><a href="#note_lionceau" title="父の子たちはあなたを伏し拝む。ダは獅子の子" id="lionceau" class="green">「汝の父の子らみの前にかがまん。</a></p>
<p class="conversation"><a href="#note_lionceau" title="父の子たちはあなたを伏し拝む。ダは獅子の子" class="green">ユダは獅子の子のごとし、わが子よ汝は萌芽より身を起こせり、獅子のごとく、獅子の子の如くに眠れり、誰か故を起こさん。</a></p>
<p class="conversation"><a href="#note_lionceau" title="父の子たちはあなたを伏し拝む。ダは獅子の子" id="lionceau" class="green">汝の目はワインより甘く、汝の歯はミルクより白し。</a></p>
<p class="conversation"><a href="#note_lionceau" title="父の子たちはあなたを伏し拝む。ダは獅子の子" id="lionceau" class="green">誰か汝を起こさん」</a>、とね。</p>
<p class="conversation">主ご自身は、</p>
<p class="conversation"><a href="#note_reprendre" title="われはわが命をみずから捨て" id="reprendre" class="green">「われはわが命をみずから捨て、またこれを得る」</a></p>
<p class="conversation">とおっしゃいますが、 我々の方は、使徒パウロの言うように、</p>
<p class="conversation"><a href="#note_ressuciter" title="死人のうちよりよみがえらせたまいしことを信ぜされば、救われざる" id="ressuciter" class="green">「心にて神のこれを死人のうちよりよみがえらせたまいしことを信ぜされば、救われざる」</a></p>
<p class="conversation">存在なのです」</span></p>
<p>我々はその他にもまだ種々のことを話したが、この<span style="color: #3d638a;">哀れなユダヤ人</span>は決して改悛して信仰を持とうとはしなかっ た。</p>
<p><span style="color: #3d638a;">彼</span>が黙りこくってしまったので、<span style="color: #3d778a;">王</span>は言葉で彼を改宗させることはできないと見て取り、<span style="color: #503d8a;">私</span>に向い、別れの祝福をしてほしいと頼み、言った。  </p>
<p class="conversation"><span style="color: #3d778a;">「別れを告げる天使に向い、ヤコブが、</p>
<p class="conversation"><a href="#note_benir" title="改われを祝福せずば去らしめず" id="benir" class="green">「改われを祝福せずば去らしめず」</a></p>
<p class="conversation">と言ったのと同じことをわしもあんたに言いたいのじゃ」</span></p>
<p>そう言いつつ<span style="color: #3d778a;">王</span>は手を洗う水を持って来るよう命じた。</p>
<p><span style="color: #503d8a;">私</span>は手を洗い、祝福を述べ、パンをいただくと神に感謝し、それを自分と王とに分け与え、生のワインを口にして別れを告げた。</p>
<p><span style="color: #3d778a;">王</span>は馬に乗り奥方と王女と従僕一同を伴ってパリシウスへ戻った。</p>

<footer>
  <p><ruby lang="ja">トゥールのグレゴリウス<rp>（</rp><rt lang="fr">Grégoire&#160;de&#160;Tours</rt><rp>）</rp></ruby>、「<cite><ruby lang="ja">フランク史<rp>（</rp><rt lang="fr">Hitoire&#160;des&#160;Francs</rt><rp>）</rp></ruby></cite>」の第六巻の五章より。</p>
</footer>

<aside>

<h3 class="green">訳者紹介：</h3>

<h4 class="green note">杉本・正俊</h4>

<div class="notices green">
<p><ruby>杉<rp>（</rp><rt>すぎ</rt><rp>）</rp>本<rp>（</rp><rt>もと</rt><rp>）</rp>正<rp>（</rp><rt>まさ</rt><rp>）</rp>俊<rp>（</rp><rt>とし</rt><rp>）</rp></ruby>。１９４９年岐阜市に生まれる。</p>
<p>早稲田大学第一文学部を卒業後、同大学大学院で志波一富教授に現代ドイツ文学を学ぶ。</p>
<p>この頃教室で読んだ作家（ハインツ・リッセ）の文章から、西洋におけるラテン語の重要性を教わり独学を始める。</p>
<p>後に古典ギリシャ語を学び、先生に就いて一年に一巻のペースで「イリアス」を読む。</p>
<p>イラク戦争開始の前年「フランク史」の翻訳をはじめ、その後「イリアス」講読を中断。</p>
<p>複数の大学で初修のドイツ語を教える。</p>
<p>主要著書「ドイツ語文法・１２課」、編注「ハインツ・リッセ・神の裁き」（いずれも行人社）</p>
</div>

<h3 class="green">註釈：</h3>

<h4 id="note_villa" class="green note">上述の館に滞在し</h4>

<div class="notices green">
<p>原稿文書ではラテン語で「<ruby lang="ja">ノヴィゲントゥム<rp>（</rp><rt lang="la">Novigentum</rt><rp>）</rp></ruby>」、多分現在の<a href="https://ja.wikipedia.org/wiki/ノジャン＝シュル＝マルヌ" title="https://ja.wikipedia.org/wiki/ノジャン＝シュル＝マルヌ"><ruby lang="ja">ノジャン<rp>（</rp><rt lang="fr">Nogent</rt><rp>）</rp>＝<rp>（</rp><rt lang="fr">-</rt><rp>）</rp>シュル<rp>（</rp><rt lang="fr">sur</rt><rp>）</rp>＝<rp>（</rp><rt lang="fr">-</rt><rp>）</rp>マルヌ<rp>（</rp><rt lang="fr">Marne</rt><rp>）</rp></ruby></a>。</p>

<footer>
  <p class="puce">文書に戻る： <a href="#villa" title="villa">「上述の館に滞在し」 ↩</a></p>
</footer>

<h4 id="note_deuteronome" class="green note">見よ、わたしこそ、主である</h4>
<div class="notices green">
  <p><cite>申命記</cite>、第三十二章、三十九節：<p>
  <ol class="doc">
    <li value="39">
      <p>見よ、わたしこそ、わたしこそそれである。</p>
    </li>
    <li>
      <p>わたしのほかに神はない。</p>
    </li>
    <li>
      <p>わたしは殺し、また生かす。</p>
    </li>
    <li>
      <p>わたしは傷つけ、またいやす。</p>
    </li>
    <li>
      <p>わが手を逃れうる者は、一人もない。</p>
    </li>
  </ol>
</div>
<footer>
  <p class="puce"><a href="#deuteronome" title="<cite>申命記</cite>、第三十二章、三十九節">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_engendre" class="green note">暁の前に胎より汝を産めり</h4>
<div class="notices green">
  <p>この引用文は、ヘブライ語の原文には存在しない詩篇第百十詩篇、三節のヴルガータ訳からの借用である。</p>
</div>
<footer>
  <p class="puce"><a href="#engendre" title="暁の前に胎より汝を産めり">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_verbe" class="green note">主は御言葉を遣わして彼らを癒し</h4>
<div class="notices green">
  <p>第百七詩篇、二十節</p>
  <p id="20" class="single-li">主は御言葉を遣わして彼らを癒し破滅から彼らを救い出された。</p>
</div>
<footer>
  <p class="puce"><a href="#verbe" title="主は御言葉を遣わして彼らを癒し">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_enfanter" class="green note">子を産ませるわたしが胎を閉ざすことがあろうか</h4>
<div class="notices green">
  <p>トゥールのグレゴリウスの聖書本文の解釈には疑問がある。</p>
  <p>イザヤ書、第六十六、九節：</p>
  <ol class="doc">
    <li value="9">わたしが、胎を開かせてなお</li>
    <li>産ませずにおくことがあろうか、と主は言われる。</li>
    <li>子を産ませるわたしが</li>
    <li>胎を閉ざすことがあろうかと</li>
    <li>あなたの神は言われる。</li>
  </ol>
</div>
<footer>
  <p class="puce"><a href="#enfanter" title="子を産ませるわたしが胎を閉ざすことがあろうか">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_ecoute" class="green note">dieu devait devenir homme</h4>
<div class="notices green">
  <p><ruby lang="ja">ルドルフ・ブフナー<rp>（</rp><rt lang="de">Rudolf&#160;Buchner</rt><rp>）</rp></ruby>の「<ruby lang="ja">十冊の物語の本<rp>（</rp><rt lang="de">Zehn&#160;Bacher&#160;Geschichten</rt><rp>）</rp></ruby>」、１０項、注１で、この引用を、グレゴリウスがヴルガータ訳以外のテキストから借りたとされるエレミヤ書第十七章九節に関連づけています。</p>
  <p>エレミヤ書第十七章九節：</p>
  <p id="9" class="single-li">人の心は何にもまして、とらえ難く病んでいる。誰がそれを知りえようか。</p>
</div>
<footer>
  <p class="puce"><a href="#ecoute" title="神が人になるだろう">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_luinotredieu" class="green note">この方こそわたしたちの神であり</h4>
<div class="notices green">
  <p>バルク書の第三章、三十六節から三十七節まで</p>
  <ol class="doc">
    <li value="36">この方こそわたしたちの神であり、</li>
    <li>他に比ぶべきものはない。</li>
    <li value="37">この方は知識の道をすべて見いだし、</li>
    <li>それを僕ヤコブと愛するイスラエルに与えた。</li>
    <li value="38">その後、知恵は地上に現れ、人々の中に住んだ。</li>
  </ol>
</div>
<footer>
  <p class="puce"><a href="#luinotredieu" title="ｄ">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_vierge" class="green note">彼が処女より生まれたことも</h4>
<div class="notices green">
  <p>イザヤ書の第七章十四節</p>
  <p>この節は、マタイに「よる福音書に第一章二十三節と二十四節で引用されており、預言者の文章を以下の次の言葉で補完しています。</p>
  <p class="conversation">この名は、神われらと共にいますという意味なり</p>
</div>
<footer>
<p class="puce"><a href="#vierge" title="彼が処女より生まれたことも">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_perce" class="green note">わが手、わが足を刺しつらぬけり、またたがいにわが衣をわかつ</h4>
<div class="notices green">
  <p>第二十三詩篇、十七節後部と十九節：</p>
  <ol class="doc">
    <li value="17">わたしの手足を砕く。</li>
    <li value="19">わたしの着物を分け</li>
    <li>衣を取ろうとしてくじを引く。</li>
  </ol>
</div>
<footer>
  <p class="puce"><a href="#perce" title="わが手、わが足を刺しつらぬけり、またたがいにわが衣をわかつ">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_fiel" class="green note">人はわたしに苦いものを食べさせようとし渇くわたしに酢を飲ませようとします</h4>
<div class="notices green">
  <p>第六十九詩編、二十ニ節：</p>
  <ol class="doc">
    <li value="22" class="single-li">人はわたしに苦いものを食べさせようとし</li>
    <li>渇くわたしに酢を飲ませようとします。</li>
  </ol>
</div>
<footer>
  <p class="puce"><a href="#fiel" title="人はわたしに苦いものを食べさせようとし渇くわたしに酢を飲ませようとします">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_parlebois" class="green note">神は直き木をもて統べたまう</h4>
<div class="notices green">
  <p>ここでは「直き木」は十字架を指します。</p>
  <p><ruby lang="ja">ルドルフ・ブフナー<rp>（</rp><rt lang="de">Rudolf&#160;Buchner</rt><rp>）</rp></ruby>の「<ruby lang="ja">十冊の物語の本<rp>（</rp><rt lang="de">Zehn&#160;Bacher&#160;Geschichten</rt><rp>）</rp></ruby>」、十一項、注七によると、この言葉は、キリスト教的な補間であり、ヴルガータ訳の著者たちには受け入れられなかったでしょう。</p>
</div>
<footer>
  <p class="puce"><a href="#parlebois" title="神は直き木をもて統べたまう">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_meurtrissure" class="green note">彼の受けた傷によってわたしたちはいやされた</h4>
<div class="notices green">
  <p>イザヤ書、第五十三章、五節：</p>
  <ol class="doc">
    <li value="5">彼が刺し貫かれたのは</li>
    <li>わたしたちの背きのためであり</li>
    <li>彼が打ち砕かれたのは</li>
    <li>わたしたちの咎のためであった。</li>
    <li>彼の受けた懲らしめによって</li>
    <li>わたしたちに平和が与えられ</li>
    <li>彼の受けた傷によって、わたしたちはいやされた。</li>
  </ol>
</div>
<footer>
  <p class="puce"><a href="#meurtrissure" title="彼の受けた傷によってわたしたちはいやされた">文書に戻る&nbsp↩</a></p>
</footer>


<h4 id="note_commeunebrebis" class="green note">屠殺場にひかるる子羊のごとく</h4>
<div class="notices green">
  <p>イザヤ書、第五十三章、二節：</p>
  <ol class="doc">
    <li value="7">苦役を課せられて、かがみ込み</li>
    <li>彼は口を開かなかった。</li>
    <li>屠り場に引かれる小羊のように</li>
    <li>毛を刈る者の前に物を言わない羊のように</li>
    <li>彼は口を開かなかった。</li>
  </ol>
</div>
<footer>
   <p class="puce"><a href="#commeunebrebis" title="屠殺場にひかるる子羊のごとく">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_armees" class="green note">その名は万軍の主</h4>
<div class="notices green">
  <p>イザヤ書、第五十四章、五節：</p>
  <ol class="doc">
    <li value="5">あなたの造り主があなたの夫となられる。</li>
    <li>その御名は万軍の主。</li>
    <li>あなたを贖う方、イスラエルの聖なる神</li>
    <li>全地の神と呼ばれる方。</li>
  </ol>
</div>
<footer>
  <p class="puce"><a href="#armees" title="その名は万軍の主">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_lionceau" class="green note">父の子たちはあなたを伏し拝む。ダは獅子の子</h4>
<div class="notices green">
  <p>トゥールのグレゴリウスは、創世記の引用文を出さなくて、不明のままですが、恐らく以下のところに基づいているのであろう。</p>
  <p>創世記の第五十四章、八節から十節まで：</p>
  <ol class="doc">
    <li value="8">ユダよ、あなたは兄弟たちにたたえられる。</li>
    <li>あなたの手は敵の首を押さえ</li>
    <li>父の子たちはあなたを伏し拝む。</li>
    <li value="9">ユダは獅子の子。</li>
    <li>わたしの子よ、あなたは獲物を取って上って来る。</li>
    <li>彼は雄獅子のようにうずくまり</li>
    <li>雌獅子のように身を伏せる。</li>
    <li>誰がこれを起こすことができようか。</li>
    <li value="10">王笏はユダから離れず</li>
    <li>統治の杖は足の間から離れない。</li>
    <li>ついにシロが来て、諸国の民は彼に従う。</li>
  </ol>
</div>
<footer>
  <p class="puce"><a href="#lionceau" title="父の子たちはあなたを伏し拝む。ダは獅子の子">文書に戻る&nbsp↩</a></p>
</footer>


<h4 id="note_reprendre" class="green note">われはわが命をみずから捨て</h4>
<div class="notices green">
  <p>このバージョンは、ヨハネ福音書のこの箇所の実際の文書とは多少異なります。</p>
  <p>ヨハネ福音書、第十章、十八節：</p>
  <p id="18" class="single-li">だれもわたしから命を奪い取ることはできない。わたしは自分でそれを捨てる。わたしは命を捨てることもでき、それを再び受けることもできる。これは、わたしが父から受けた掟である。</p>
</div>
<footer>
  <p class="puce"><a href="#reprendre" title="われはわが命をみずから捨て">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_ressuciter" class="green note">死人のうちよりよみがえらせたまいしことを信ぜされば、救われざる</h4>
<div class="notices green">
  <p>ローマの信徒への手紙書、第十章、九節ですが、ヴルガータ訳の文書は多少異なります：</p>
  <p id="9" class="single-li">口でイエスは主であると公に言い表し、心で神がイエスを死者の中から復活させられたと信じるなら、あなたは救われるからです。</p>
</div>
<footer>
  <p class="puce"><a href="#ressuciter" title="死人のうちよりよみがえらせたまいしことを信ぜされば、救われざる">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_benir" class="green note">改われを祝福せずば去らしめず</h4>
<div class="notices green">
  <p>創世記、第三十二章、二十五節から二十七節まで：</p>
  <ol class="doc">
    <li value="25">ヤコブは独り後に残った。そのとき、何者かが夜明けまでヤコブと格闘した。</li>
    <li value="26">ところが、その人はヤコブに勝てないとみて、ヤコブの腿の関節を打ったので、格闘をしているうちに腿の関節がはずれた。</li>
    <li value="27">
      <p class="conversation">「もう去らせてくれ。夜が明けてしまうから」とその人は言ったが、</p>
      <p>ヤコブは答えた。</p>
      <p class="conversation">「いいえ、祝福してくださるまでは離しません。」</p>
    </li>
  </ol>
</div>
<footer>
  <p class="puce"><a href="#benir" title="改われを祝福せずば去らしめず">文書に戻る&nbsp↩</a></p>
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