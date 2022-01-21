<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:230 benalla -->

<article>

<header>
  <p><time datetime="2018-08-05">２０１８年８月５日</time></p>
</header>

<h1>【マクロン＝ベナラ事件】<wbr>５つの日本語での記事に<wbr>添削、コメント、情報追加などの試み</h1>

<div class="notices green">
  <p>記事の<ruby>編<rp>(</rp><rt>へん</rt><rp>)</rp>纂<rp>(</rp><rt>さん</rt><rp>)</rp></ruby>が出来事順に行われています。記事の抜粋文の間、次の記号 <code>[…]</code> を表示しています。省かれた部分を確認するには記事の元へのリンクをも載せています編纂の元になっている記事は出版順で、以下の通りです。</p>
  <ol>
    <li><a href="#article-1" id="renvoi-article-1" class="green">【第１の記事】　産経ニュース、７月２２日　暴行容疑でマクロン大統領の警備責任者身柄拘束　野党は「もみ消し疑惑」で攻勢強める</a></li>
    <li><a href="#article-2" id="renvoi-article-2" class="green">【第２の記事】　英国放送協会、７月２３日　マクロン仏大統領の側近、デモ市民に暴行疑い　大統領府への批判高まる</a></li>
    <li><a href="#article-3" id="renvoi-article-3" class="green">【第３の記事】　フランス通信社、７月２３日　仏大統領の元警護責任者、暴行容疑で予審開始 政権に試練</a></li>
    <li><a href="#article-4" id="renvoi-article-4" class="green">【第４の記事】　産経ニュース、７月２４日　仏マクロン大統領に「就任以来最大」の逆風　側近の地位悪用黙認で追及</a></li>
    <li><a href="#article-5" id="renvoi-article-5" class="green">【第５の記事】　産経ニュース、７月２４日　仏マクロン大統領に「就任以来最大」の逆風　側近の地位悪用黙認で追及</a></li>
  </ol>
</div>

<div class="notices blue">
  <p>ご協力をお願いします！</p>
  <p>　この作文に当って、以上に気を付けているつもりではいますが、それでもきっと日本語での改善できる点が残っているでしょう。</p>
  <p>　改善して欲しい方々に向けて、一般読者でも、改善して欲しい点を私までに提供できるよう、ギットハブでこの記事の反射バーションを用意しています。</p>
  <p>　よければ、無料ギットハブ・アカウント作成するだけで、改善して欲しい点をこの<a href="https://github.com/tidiview/francois-vidit.com/blob/master/user/sites/blog/pages/01.home/26.benalla/item.ja.md" title="https://github.com/tidiview/francois-vidit.com/blob/master/user/sites/blog/pages/01.home/26.benalla/item.ja.md">リンクの末</a>に直接の記事の下地ドキュメントを編集して知らせて頂ければ、少しづつ皆さんの協力でよりよく文書を改善できるでしょう。</p>
  <p>　また、この記事に当って、私にご意見を伝えたい場合、<a href="https://francois-vidit.com/ja#御問い合わせ" title="https:francois-vidit.com/ja#御問い合わせ">ホームページの御問い合わせコンタクト・フォーム</a>をご利用下さることを宜しくお願いします。</p>
</div>

<p>マクロン大統領にとって就任２年目のこの夏は、文字どおり「熱い夏」となっている。サッカーの<ruby lang="ja">世界選手権大会<rp>(</rp><rt lang="fr">Ｗ&nbsp;杯</rt><rp>)</rp></ruby>で２０年ぶりにフランス代表が優勝し、 <code>[…]</code> Ｗ杯優勝チームを<ruby>大統領府<rp>(</rp><rt>エリゼ宮</rt><rp>)</rp></ruby>に迎えて祝宴をはった翌々日の７月１８日、有力紙ル<span style="color: #c70102;"><span style="background-color: #fdf7f7;">・</span></span>モンドが電子版で「エリゼ宮の大統領担当の警護員がデモ隊員に暴行」というショッキングなニュースを流した。 <code>[…]</code>
公開されたのは、パリ中心部５区で行われた<ruby lang="ja">５月１日<rp>(</rp><rt lang="fr">メーデー</rt><rp>)</rp></ruby>の際のソーシャルメディアで拡散されたデモ参加者がスマホで撮影した暴力シーン動画です <code>[…]</code> </p>

<div class="notices green">
<p>追加情報：　パリでの２０１８年版のメーデーのデモが背景</p>
<p>
パリでの２０１８年版のメーデーのデモが労働組合員の間にはマクロン大統領の改革への不満が広がっている中で、<ruby>フランス国鉄<rp>(</rp><rt>SNCF</rt><rp>)</rp></ruby>の抜本改革に抗議する鉄道労働者たちに加えて、政府が削減を含む耐乏政策に直面する教師たちや看護師たちなどが参加し、平和的なデモを労働組合労側では、約５万５０００人、警察側では、約２万人だったとで行われたと言われています。</p>
<p>それに対して、大規模な暴動が発展した状況にいろいろ課題があります。</p>
<p>警察によると、デモは当初、平和的に行われていたが、デモの頭がオステルリッツ橋に入ってから、突然、参加者の約１２００人の一部が暴徒化し、商店のショーウインドーを破壊したり、自動車に火をつけるなどすることになりました。</p>
<p>それで、後ろに進んでいる平和的な参加者たちが警察から直ぐに普通に示威できなくさせられまして、こういった暴徒化によって、ニュース専門放送局ではもう完全にデモ参加者たちが求める改革への不満が聞こえなくさせられると同時に、仏政府の<ruby lang="ja">バンジャマン<rp>(</rp><rt lang="fr">Benjamin</rt><rp>)</rp>・<rp>(</rp><rt lang="fr">&nbsp;</rt><rp>)</rp>グリヴォー<rp>(</rp><rt lang="fr">GRIVEAUX</rt><rp>)</rp></ruby>報道官はこれらの顔を覆ったデモ参加者たちはマスクやパーカーのフードをかぶった黒い服装をしていることから、「ブラック・ブロック」と呼ばれるパリ警察が２００人近くを逮捕したという左派の無政府主義者の集団だと簡単に指摘することが可能となります。</p>
<p>疑わしいと思われる点が与党「<ruby>共和国前進<rp>(</rp><rt>LREM</rt><rp>)</rp></ruby>」意外、野党全党が<ruby lang="ja">国民議会<rp>(</rp><rt lang="fr">Assemblée&nbsp;Nationale</rt><rp>)</rp></ruby>で、デモの経緯や警察による管理などを調査できる委員会の形成を求めたことに対して、与党はそれをどうしても固く許さなかったことに課題が残っています。</p>
</div>

<p>インターネットで流され、７月中旬までに１２万回以上ヒットされた。 <code>[…]</code> </p>
<p>ツイッターに動画を投稿した<ruby lang="ja">タハ<rp>(</rp><rt lang="fr">Taha</rt><rp>)</rp>・<rp>(</rp><rt lang="fr">&nbsp;</rt><rp>)</rp>ボアフス<rp>(</rp><rt lang="fr">BOUHAFS</rt><rp>)</rp></ruby>さんは、「警告、警察の暴力。警察が広場に集まった人々に暴力を振るって、ガスをまいている！　拡散してみんなが見るべき」と書いた。</p>
<p>動画では衝突が始まった時、警察のヘルメットを被りながら制服を着ていない男が機動隊側に入って、参加しているのが確認できる。</p>

<div class="notices green">
<p>情報追加：</p>
<p>警察のヘルメットをかぶっていただけではなく、検察専用腕章もしていて、警察専用通信機「<ruby lang="ja">アクロポル<rp>(</rp><rt lang="fr">Acropole</rt><rp>)</rp></ruby>」（具体的に検察専用のウォーキートーキー）をしていたことが明らかになりました。</p>
</div>

<p>男は女性の首をつかんで道を引きずり、カメラの視界から消えた。</p>
<p>ほどなく男は現場に戻り、別の抗議者を捕まえて警察から少し離れた場所へ連れて行った。抗議者はその後、道路に放置された。</p>
<p>動画にはヘルメットを被った男が若い抗議者の首をつかみ、頭を殴ったり、抗議者が地面に倒れた後には腹部を踏みつけたりしているような様子が映っていた。 <code>[…]</code> </p>
<p>ル・モンドは、この暴力シーンがインターネットで流された直後から、ヘルメット男を特定するための取材を始め、７月１７日に「<ruby lang="ja">ベナラ<rp>(</rp><rt lang="fr">BENALLA</rt><rp>)</rp></ruby>」と断定。１８日にエリゼ宮の官房長<ruby lang="ja">パトリク<rp>(</rp><rt lang="fr">Patrick</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ストゾダ<rp>(</rp><rt lang="fr">STRZODA</rt><rp>)</rp></ruby>に確認したうえで報道したという。</p>
<p>翌１９日発行の紙面でも、<ruby lang="ja">５月１日<rp>(</rp><rt lang="fr">メーデー</rt><rp>)</rp></ruby>にパリ５区で発生した事件の詳細や、ベナラが２０１６年の大統領戦中からマクロンの身辺警護に当たっており、大統領にごく近い人物であることなどを報道。野党は一斉に「国家的事件」として、マクロンへの攻撃を開始した。 <code>[…]</code></p>

<div class="notices green">
<p>追加情報：　警察的暴行の背景</p>
<p>ベナラ事件が、こういった警察的暴行が最近フランスで全面的に増えている一方、これらがデモ参加者、庶民的環境の住居者たちなどの具体的な、精神的な妨害や切断や時には死を促した環境の中で発生していることも大事です。</p>
<p>組合によると、これらの暴行が偶然に行われているのではないと述べます。国家とそれぞれの政府関係者らが受け入れた選択であることは間違いはないと指摘してます。社会的破壊と安全的炎上、集団的と個人的な自由と権利の減少のある環境では、資本主義者たちに左右されている国家が自分の対策の批判や宣言的対策の出現を許さず、反社会的な有毒性を証明しているとも言います。エリゼ宮ではマクロン大統領によって不法システムが施されているのではないかと。社会的権利を破壊する人たちは自分を法律の枠外に考えていることがもう一回確認されていると。確実に「模範的性」の名によってで。このマクロンが持っている不法的な実践はベナラ容疑者がエリゼ宮で彼の公職のための対策の最初の例であるかのように意味のある国家の着想でもあります。いわゆる、増え続けている民間企業専用分割、任務の外部化、ある人たちにだけ与えられている特権、現政権への忠実さなどの面では。</p>
</div>

<p>パリ検察局は１９日の朝、「障害、職権乱用」容疑でベナラに対し、起訴前提の本格取り調べを開始。 <code>[…]</code> また、同日、<ruby lang="ja">国民議会<rp>(</rp><rt lang="fr">Assemblée&nbsp;Nationale</rt><rp>)</rp></ruby>は現在、マクロン政権が目指す憲法改正案の審議中だが、左右両派の野党は本会議を中断して、政府に説明を要求。 <code>[…]</code> 「事件の<ruby>隠<rp>(</rp><rt>いん</rt><rp>)</rp>蔽<rp>(</rp><rt>ぺい</rt><rp>)</rp></ruby>を図ったのではないか」という批判に直面している。 <code>[…]</code> 事態を重視した野党は、マクロン政権の目玉、行政権強化を目指す憲法改正に関する審議を中断。調査委員会にコロン内相や官房長を呼んで説明を聞くなど、事件が紛糾するなか、肝心の大統領は沈黙を守ったままだった。 <code>[…]</code> </p>

<div class="notices green">
<p>追加情報：　憲法改正案</p>
<p>昨年６月の選挙後、風景が変わった中、いわゆる定数５７７のうち、４分の３が入れ替わり、議員の平均年齢は４８歳に若返って、マクロン氏の新党「<ruby lang="ja">共和国前進<rp>(</rp><rt lang="fr">La&nbsp;République&nbsp;En&nbsp;Marche</rt><rp>)</rp></ruby>」が３１２議員を抱える最大会派となった上、保革二大政党のベテラン議員が、一斉に引退したため中、４月に政府が示した議会を効率化するという改正案は、上下両院の定数を各３０％削減した上、議員や自治体首長の任期を連続３期に制限する内容。下院は１５年、上院は１８年で議員引退を迫られると含んでいる。</p>
<p>以上のことを読むだけで、誰もが望ましいことだと否定できなくなりますが、実際、３０％削減すると一般人口と議員たちとの割合が民衆主義大国の低下されることでもあると忘れてはいけません。いわゆる、一般民衆には、自分の意見を通し難くなるとのことともなります。それで、憲法改正案はただ議員人数だけではなく、同時に、<ruby lang="ja">領土公共団体<rp>(</rp><rt lang="fr">Les&nbsp;Collectivités&nbsp;Territoriales</rt><rp>)</rp></ruby>でもすでに行政権がさらに強くされる一方、同時に大統領への権限集中はさらに独裁に近いものへと近付いて強まるようにもなります。</p>
</div>

<div class="notices green">
<p>追加情報：　２つの調査委員会の形成</p>
<p>左右両派の野党の努力によって、<ruby lang="ja">国民議会<rp>(</rp><rt lang="fr">Assemblée&nbsp;Nationale</rt><rp>)</rp></ruby>と<ruby lang="ja">元老院<rp>(</rp><rt lang="fr">Sénat</rt><rp>)</rp></ruby>、各両議会で法律委員会が出来事について調査委員会として関係者たちを聴取することになりました。</p>
</div>

<p>ベナラは、政治担当記者の間では、よく知られた存在だった。マクロンが大統領選に立候補した２０１６年秋以降、マクロンが行くところ、影のように付き従う姿が見られていたからだ。 <code>[…]</code> </p>

<div class="notices green">
<p>追加情報：　ベナラ氏の立場</p>
<p>よくベナラ容疑者は「ボディーガード」だったとされていることに対して、曖昧であると指摘すべきです。</p>
<p>立場として、ベナラ容疑者は選挙戦で立候補者だったマクロン氏の身辺警護にあたった私的ボディーガードでもあったと明らかなのに、それで、選挙後、そのまま大統領府入りしたのですが、上下両院の調査委員会の聴取によって分かったのは、大統領府では、地位として、大統領府の役人ではなく、契約者に過ぎない、大統領首席補佐官の側近の契約者として、大統領府の官房長<ruby lang="ja">パトリク<rp>(</rp><rt lang="fr">Patrick</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ストゾダ<rp>(</rp><rt lang="fr">STRZODA</rt><rp>)</rp></ruby>の責任下であって、具体的に、役割として、大統領の移動の整合・調整を任せられていることです。</p>
<p>細かく見ますと、フランス共和国の大統領府の安全が<a href="https://ja.wikipedia.org/wiki/フランス国家警察" title="https://ja.wikipedia.org/wiki/フランス国家警察">フランス国家警察</a>と<a href="https://ja.wikipedia.org/wiki/国家憲兵隊_(フランス)" title="https://ja.wikipedia.org/wiki/国家憲兵隊_(フランス)">国家憲兵隊</a>からなる<ruby lang="ja">大統領府安全集団<rp>(</rp><rt lang="fr">Groupement&nbsp;de&nbsp;Sécurité&nbsp;de&nbsp;la&nbsp;Présidence&nbsp;de&nbsp;la&nbsp;République</rt><rp>)</rp></ruby>（GSPR）の責任に置かれていて、大統領府安全集団が内務大臣（現在、<ruby lang="ja">ジェラール<rp>(</rp><rt lang="fr">Gérard</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>コロン<rp>(</rp><rt lang="fr">COLLOMB</rt><rp>)</rp></ruby>）の責任下に置かれています。</p>
<p>具体的に、この機関は大統領府のあらゆる安全保障を担っているので、出入りの制御などもあって、大統領その人の安全がその機関内の<ruby lang="ja">庇護係<rp>(</rp><rt lang="fr">Service&nbsp;de&nbsp;la&nbsp;protection</rt><rp>)</rp></ruby> (SDLP)に任せられています。</p>
<p>ベナラ容疑者は大統領府安全集団に属していないため、正式に、一切安全の責任を負うことはあるはずが一切ありませんので、「ボディーガード」であるとは断言する根拠が正式にはありません。</p>
<p>ベナラ容疑者は、大統領のスケジュールの組織上の管理責任を任せられている契約者です。</p>
<p>いわゆる、スケジュールに変更などが出て来る場合、整合・調整も必要ともなりますので、それで、ベナラ容疑者が安全の面では、大統領府安全集団と合せて、整合・調整をすることとなります。しかし、例えば、大統領が訪れる現地の責任者たちとの調整をもすることもありますから、大統領府安全集団とだけではなく、幅広くさまざまな相手と問い合わせています。</p>
<p>ですので、契約者であっても、実際、中央的な存在とは言え、２６才だけの人物とマクロン夫婦のお気に入りもので、プライベートの面での彼たちの安全と移動の組織上の管理をも任せられている人物として、上下両院の調査委員会の聴取によって明らかになったのは、ベナラ容疑者がよく経験豊かな安全専門の大統領府安全集団の先輩たちだけに限らず、さまざまなところにマクロン大統領の主張をブツブツ言い切って、いろんな権威的な摩擦を繰り返して来たことが分かりました。</p>
<p>例えば、<ruby lang="ja">ル<rp>(</rp><rt lang="fr">Le</rt><rp>)</rp>・<rp>(</rp><rt lang="fr">&nbsp;</rt><rp>)</rp>カナール<rp>(</rp><rt lang="fr">Canard</rt><rp>)</rp>・<rp>(</rp><rt lang="fr">&nbsp;</rt><rp>)</rp>アンシェネ<rp>(</rp><rt lang="fr">Enchainé</rt><rp>)</rp></ruby>週刊風刺新聞の７月２５日版によると、７月１６日、<ruby lang="ja">サッカー・ワールドカップ<rp>(</rp><rt lang="fr">Ｗ&nbsp;杯</rt><rp>)</rp></ruby>フランス代表の優勝パレードでは、パリ＝シャルル・ド・ゴール空港から選手たちのバスでは、ベナラ容疑者は大統領府との直接代理人の役を任せられて、バスがシャンゼリゼ通りに大勢の３０万人のサポーターたちが集まったのに、「フランス代表とエリゼ宮から生中継でニュース専門放送局で開始出来きるよう」に、距離１.３キロ―を１３分で急き立てさせて急がせたことが知られています…ベナラ容疑者の指示でサポーターたちが警棒の打ちで無理矢理に立ち退けさせられても…</p>
<p>５月に職場に戻った後、以前から企画に参加していた革命記念日や<ruby lang="ja">シモーヌ<rp>(</rp><rt lang="fr">Simone</rt><rp>)</rp>・<rp>(</rp><rt lang="fr">&nbsp;</rt><rp>)</rp>ヴェイユ<rp>(</rp><rt lang="fr">Veil</rt><rp>)</rp></ruby>の<a href="https://ja.wikipedia.org/wiki/パンテオン_(パリ)" title="https://ja.wikipedia.org/wiki/パンテオン_(パリ)"><ruby lang="ja">パンテオン<rp>(</rp><rt lang="fr">Panthéon</rt><rp>)</rp></ruby></a>で式典の行事に参加しました。</p>
<p>又は、<ruby lang="ja">レクスプレス<rp>(</rp><rt lang="fr">L'Express</rt><rp>)</rp></ruby>誌の７月２３日版によると高級な<ruby lang="ja">ケー<rp>(</rp><rt lang="fr">Quai</rt><rp>)</rp>・<rp>(</rp><rt lang="fr">&nbsp;</rt><rp>)</rp>ブランリー<rp>(</rp><rt lang="fr">Branly</rt><rp>)</rp></ruby>に大統領府が管理する豪華なアパートを大統領から与えられて７月１９日入居したことも明らかになりました。</p>
<p>このアパートは<ruby lang="ja">アルマ宮<rp>(</rp><rt lang="fr">Palais&nbsp;de&nbsp;l'Alma</rt><rp>)</rp></ruby>内にあって、実際、<ruby>二<rp>(</rp><rt>ふた</rt><rp>)</rp></ruby>アパートを一つにする（総合面積：２００㎡）リニューアル工事で金額１８０　０００ユーロまでさかのぼることも批判の対照となりました。給料としまして税込給与額月１０　０００ユーロぐらいのことも分かりました。</p>
<p>それに加えて、国民議会の議会本会にまで自由に出入りできる最高級許可を大統領府から頂いて、運転手付き警察の特殊な最新回転灯付きの最高級モデルの車も貰ったことも分かりました。</p>
</div>

<div class="notices green">
<p>追加情報：　１９日に大統領府が無理に否定</p>
<p>１９日、大統領府報道官<ruby lang="ja">ブルーノ<rp>(</rp><rt lang="fr">Bruno</rt><rp>)</rp>-<rp>(</rp><rt lang="fr">＝</rt><rp>)</rp>ロジェ<rp>(</rp><rt lang="fr">Roger</rt><rp>)</rp>・<rp>(</rp><rt lang="fr">&nbsp;</rt><rp>)</rp>プティ<rp>(</rp><rt lang="fr">PETIT</rt><rp>)</rp></ruby>が警察側でのデモ作戦に参加するために、パリ警視総監による傍観する許可を得ていたととまず主張しましたが、後で国民議会の調査委員会の聴取でパリ警視総監側から、「あったことはありません」と明らかになりました。</p>
<p>また、大統領府から「１５日間の停職処分と、大統領の移動の安全責任を持たなくさせられて大統領府の契約者として歴史最重の処分」と報道されましたが、明らかな犯罪があるのに、法律上では、<a href="#article-40" id="renvoi-article-40" class="green">刑事訴訟法点の第４０条第１節</a>では公務員等が何らかの重罪又は軽罪を知った場合には直ちに、<ruby lang="ja">共和国検事<rp>(</rp><rt lang="fr">Procureur&nbsp;de&nbsp;la&nbsp;République</rt><rp>)</rp></ruby>に届け出るべきことを定めているのに、大統領府が７８日間（２ヵ月１７日間）何もせずにいられて、検察への報告して契約者を解雇させることを避けようとしました。</p>
<p>他の面で、下両院の調査委員会の聴取では、ベナラ容疑者は５月１日メーデーデモに出れるように、有給休暇を取っていたことと、給料の面でも停職期間の１５日間も７月に支払われたことも分かりました。後に解雇された際、ただ有給休暇１５日分を外すことで済むことになりましたので、正式には７月３１日までには、何の処分にもなかったことと、停職処分中だったのに、ベナラ容疑者は二回、５月の１６と１７日、国民議会出入りできる許可を使用したことも分かりました。</p>
</div>
<p>２０日に、大統領府からやっと解雇される <code>[…]</code>と同時に、予審開始が決まったのはマクロン氏の側近<ruby lang="ja">アレクサンドル<rp>(</rp><rt lang="fr">Alexandre</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ベナラ<rp>(</rp><rt lang="fr">BENALLA</rt><rp>)</rp></ruby>容疑者と、与党「共和国前進（<span style="color: #c70102;"><span style="background-color: #fdf7f7;">L</span></span>REM]<sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">1</a></sup>）」の職員<ruby lang="ja">バンサン<rp>(</rp><rt lang="fr">Vincent</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>クラーズ<rp>(</rp><rt lang="fr">CRASE</rt><rp>)</rp></ruby>容疑者。 <code>[…]</code> 警察留置で一時身柄拘束された。 <code>[…]</code></p>
<p>ベナラ容疑者は集団暴行に加担したほか、警官腕章をつけるなどして警官になりすました疑いなど、３つの容疑に問われている。 <code>[…]</code></p>
<p>この事件をめぐっては警察官３人も訴追された。この３人はベナラ氏の無実を証明しようと監視カメラの映像を漏えいした疑いが持たれている。 <code>[…]</code> </p>
<p>２１日、仏ニュースサイト「<ruby lang="ja">メディアパート<rp>(</rp><rt lang="fr">MÉDIAPART</rt><rp>)</rp></ruby>」が公開した３本目の動画には、歩道に押さえ付けられた若い男性に警察官らが殴る蹴るの暴行を加える場面が映っていた。 <code>[…]</code> </p>
<p>仏司法当局は２２日、集団暴力などの容疑でこの側近ら２人に対する予審を開始すると決めた。 <code>[…]</code></p>
<p>世論の批判を受けて、マクロン大統領は２２日、閣僚を数人集めて対応を協議した。 <code>[…]</code> </p>
<p>２３日、調査委員会は、約２時間にわたって<ruby lang="ja">コロン<rp>(</rp><rt lang="fr">COLLOMB</rt><rp>)</rp></ruby>内相への質疑を行った。コロン氏は、暴行現場を映したビデオの内容を５月２日に把握していたと明かし、「大統領府官房長に伝えた。しかるべき処分をすると思った」と述べた。コロン氏や警視庁や大統領府高官が動画の内容を把握しながら、訴追手続きを怠ったことが分かった。 <code>[…]</code> </p>
<p>２４日夜にやっと、訪問先の仏南部オート・ピレネー地方でおこなわれた与党議員や地元の地方議員など約２０人が出席した夕食会で、「すべての責任は私にある」と言明。そのうえで、メディアが伝えるベナラの「高給説」や、国家提供の豪華パート住まいなどを「誤報」と断言。 <code>[…]</code> </p>
<p>政府関係者は、マクロン大統領はこの事件を「受け入れられない」と考えており、「無罪にはならない」と約束したと話した。 <code>[…]</code>「愛人でもない」と笑いも取るなどの余裕も示した。 <code>[…]</code></p>
<p>マクロン氏は昨年の大統領選で、<ruby>癒<rp>(</rp><rt>ゆ</rt><rp>)</rp>着<rp>(</rp><rt>ちゃく</rt><rp>)</rp></ruby>と縁故主義がまん延した保革２大政党制からの脱皮を訴えて当選した。しかし、大統領就任後、選挙戦のブレーンを重用する「側近政治」が指摘されていた。今回の事件は大きなイメージダウンとなりそうだ。 <code>[…]</code> </p>

<div class="notices green">
<p>追加情報：</p>
<p>７月２６日、元老院の調査委員会の<ruby lang="ja">アレクシ<rp>(</rp><rt lang="fr">Alexis</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>コレル<rp>(</rp><rt lang="fr">KOLHER</rt><rp>)</rp></ruby><ruby lang="ja">大統領事務総長<rp>(</rp><rt lang="fr">Secrétaire&nbsp;général&nbsp;de&nbsp;l'Élysée</rt><rp>)</rp></ruby>の聴取では、<ruby lang="ja">イスマエル<rp>(</rp><rt lang="fr">Ismaël</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>エメリアン<rp>(</rp><rt lang="fr">EMELIEN</rt><rp>)</rp></ruby><ruby lang="ja">大統領特殊参事官<rp>(</rp><rt lang="fr">Conseiller&nbsp;spécial&nbsp;du&nbsp;Président&nbsp;de&nbsp;la&nbsp;République</rt><rp>)</rp></ruby>も、７月１９日までにビデオを手に入れていたことが分かりましたので、もう３人ではなく、そこから４人も訴追されることになるはずことが分かりました。</p>
<p>同時、７月１８~１９日の夜、エメリアン氏がマクロン大統領の政治党「<ruby lang="ja">ラ<rp>(</rp><rt lang="fr">La</rt><rp>)</rp>・<rp>(</rp><rt lang="fr">&nbsp;</rt><rp>)</rp>レピュブリック<rp>(</rp><rt lang="fr">République</rt><rp>)</rp>・<rp>(</rp><rt lang="fr">&nbsp;</rt><rp>)</rp>アン<rp>(</rp><rt lang="fr">En</rt><rp>)</rp>・<rp>(</rp><rt lang="fr">&nbsp;</rt><rp>)</rp>マルシュ<rp>(</rp><rt lang="fr">Marche</rt><rp>)</rp></ruby>（LREM）」の支持する複数の<ruby lang="ja">ツイッター<rp>(</rp><rt lang="en">Twitter</rt><rp>)</rp></ruby>アカウントの持ち主までにベナラ容疑者の暴行の無実を主張する目的にビデオを流したことも分かりました。</p>
<p>本人が翌日に違法意識が付いたことからと語って、自分からビデオを<ruby lang="ja">共和国検事<rp>(</rp><rt lang="fr">Procureur&nbsp;de&nbsp;la&nbsp;République</rt><rp>)</rp></ruby>に渡すことにしました。 </p>
</div>

<aside>
  <hr>
  <h4 id="article-1" class="green">【第１の記事】　産経ニュース、７月２２日</h4>
    <p><span style="color: #3d8b3d;">【題名|リンク】</span><a href="https://www.sankei.com/world/news/180722/wor1807220006-n1.html" title="https://www.sankei.com/world/news/180722/wor1807220006-n1.html" class="green">暴行容疑でマクロン大統領の警備責任者身柄拘束　野党は「もみ消し疑惑」で攻勢強める</a></p>
    <p><span style="color: #3d8b3d;">【日付】　２０１８年７月２２日、１７時１５分</span></p>
    <p><span style="color: #3d8b3d;">【発信地】　パリ</span></p>
    <p><span style="color: #3d8b3d;">【記事者】　三井美奈</span></p>
    <p><span style="color: #3d8b3d;">【全文】</span></p>
    <p><a href="#renvoi-article-1" class="green">〖戻る ↑〗</a></p>
  <hr>
  <h4 id="article-2" class="green">【第２の記事】　英国放送協会、７月２３日</h4>
    <p><span style="color: #3d8b3d;">【題名|リンク】　</span><a href="https://www.bbc.com/japanese/44919923" title="https://www.bbc.com/japanese/44919923" class="green">マクロン仏大統領の側近、デモ市民に暴行疑い　大統領府への批判高まる</a></p>
    <p><span style="color: #3d8b3d;">【日付】　２０１８年０７月２３日</span></p>
    <p><span style="color: #3d8b3d;">【日付】【発信地】　パリ/フランス</span></p>
    <p><span style="color: #3d8b3d;">【日付】【抜粋文区切り記号】　 <code>[…]</code> </span></p>
    <p><a href="#renvoi-article-2" class="green">〖戻る ↑〗</a></p>
  <hr>
  <h4 id="article-3" class="green">【第３の記事】　フランス通信社、７月２３日</h4>
    <p><span style="color: #3d8b3d;"></span>【題名|リンク】　<a href="http://www.afpbb.com/articles/-/3183368" title="http://www.afpbb.com/articles/-/3183368" class="green">仏大統領の元警護責任者、暴行容疑で予審開始 政権に試練</a></p>
    <p><span style="color: #3d8b3d;">【日付】　２０１８年７月２３日、１２時１０分</span></p>
    <p><span style="color: #3d8b3d;">【発信地】　パリ/フランス</span></p>
    <p><span style="color: #3d8b3d;">【抜粋文区切り記号】　 <code>[…]</code> </span></p>
    <p><a href="#renvoi-article-3" class="green">〖戻る ↑〗</a></p>
  <hr>
  <h4 id="article-4" class="green">【第４の記事】　産経ニュース、７月２４日</h4>
    <p><span style="color: #3d8b3d;">【題名|リンク】　</span><a href="https://www.sankei.com/world/news/180724/wor1807240030-n1.html" title="https://www.sankei.com/world/news/180724/wor1807240030-n1.html" class="green">仏マクロン大統領に「就任以来最大」の逆風　側近の地位悪用黙認で追及</a></p>
    <p><span style="color: #3d8b3d;">【日付】　２０１８年０７月２４日、２２時１３分</span></p>
    <p><span style="color: #3d8b3d;">【発信地】　パリ</span></p>
    <p><span style="color: #3d8b3d;">【記事者】　三井美奈</span></p>
    <p><span style="color: #3d8b3d;">【抜粋文区切り記号】　 <code>[…]</code> </span></p>
    <p><a href="#renvoi-article-4" class="green">〖戻る ↑〗</a></p>
  <hr>
  <h4 id="article-5" class="green">【第４の記事】　産経ニュース、７月２４日</h4>
    <p><span style="color: #3d8b3d;">【題名|リンク】　</span><a href="https://www.sankei.com/world/news/180724/wor1807240030-n1.html" title="https://www.sankei.com/world/news/180724/wor1807240030-n1.html" class="green">“地に堕ちたジュピター”マクロンの復活はあるか　フランスのW杯優勝も支持率アップにつながらず。ガードマンの傷害事件で暗雲　公な無料文に限る</a></p>
    <p><span style="color: #3d8b3d;">【日付】　２０１８年０７月３１日</span></p>
    <p><span style="color: #3d8b3d;">【発信地】　パリ</span></p>
    <p><span style="color: #3d8b3d;">【記事者】　山口　昌子　在フランス・ジャーナリスト</span></p>
    <p><span style="color: #3d8b3d;">【抜粋文区切り記号】　 <code>[…]</code> </span></p>
    <p><a href="#renvoi-article-5" class="green">〖戻る ↑〗</a></p>
  <hr>
  <h4 id="article-40" class="green">【刑事訴訟法典の第４０条第１節】</h4>
    <p>刑事訴訟法典第４０条は、公務員等が何らかの重罪又は軽罪を知った場合には直ちに、共和国検事に届け出るべきことを定めている。<br>
    総監督官が犯罪があったと推定させる事実を知った場合には、総監督官は、直ちに、刑事訴訟法典第４０条に従い、<ruby lang="ja">共和国検事<rp>(</rp><rt lang="fr">Procureur&nbsp;de&nbsp;la&nbsp;République</rt><rp>)</rp></ruby>に通知する。<br>
    総監督官は、懲戒を目的とした提訴が必要とされる性質の事実を、直ちに、懲戒権が与えられている機関又は人物に通知する。 <a href="#renvoi-article-40" title="第４０条" class="green">【元に戻る↑】</a></p>
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