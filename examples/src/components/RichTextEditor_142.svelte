<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1>黄金伝説における大天使ミカエル</h1>
<div class="notices red">
<p>キリスト教の中世ヨーロッパにおいて、<ruby>黄金伝説<rp>(</rp><rt>レゲンダ・アウレア</rt><rp>)</rp></ruby>は、聖書についで一広く読まれた書物である。<br />
北イタリアのドメニコ会修道士、年代記編集者、又は第8代大司教のジェノヴァとして知られている<ruby lang="ja">ヤコブス<rp>(</rp><rt lang="la">Jacobus</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>デ<rp>(</rp><rt lang="la">de</rt><rp>)</rp>・<rp>(</rp><rt lang="la"></rt><rp>)</rp>ウォラギネ<rp>(</rp><rt lang="la">Voragine</rt><rp>)</rp></ruby lang="ja">によって、ラテン語で１２６１年から１２６６年の間に書かれた。<br />
この作品んを基本的でも紹介するのはとても単純なことではありませんが、ものをいうには、既存だった約１５０人の聖人たちあるいは聖人集団や殉教者たちの列伝史料を編纂しながら、前から存在していた異教の暦の中に一年のカトリック教会の典礼暦を組み込んで巧妙に同化させながら、それを切っ掛けにして福音書からキリストと聖母マリアの生拝の主な出来事を解釈しながらも、事実深く当時社会の様々分野まで、例えば<ruby>位<rp>(</rp><rt>い</rt><rp>)</rp>相<rp>(</rp><rt>そう</rt><rp>)</rp>幾<rp>(</rp><rt>き</rt><rp>)</rp>何<rp>(</rp><rt>か</rt><rp>)</rp>学<rp>(</rp><rt>がく</rt><rp>)</rp></ruby>などを含めて、浸透したキリスト教的な神話を作り上げたと書いておけば、間違いありません。<br />
ヨーロッパ中世文学研究者<ruby lang="ja">フィリップ<rp>(</rp><rt lang="fr">Philippe</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ヴァルテール<rp>(</rp><rt lang="fr">WALTER</rt><rp>)</rp></ruby lang="ja">著の『中世の祝祭 - 伝説・神話･起源』の序章で、「キリスト教定着以前に存在した[...]野生の記憶に由来する[...]「迷信」、伝説といった<ruby>太<rp>(</rp><rt>たい</rt><rp>)</rp>古<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>の記憶」が述べているように、異教の旧暦の要素が浮かんでくる文書として、特に興味深く、魅力的だと思われます。<br />
以下では、もちろん極小さいな部分である、１３９章だけをしか巡礼所としての<a href="https://ja.wikipedia.org/wiki/モン・サン＝ミシェル" title="https://ja.wikipedia.org/wiki/モン＝サン＝ミシェル"><ruby lang="ja">モン<rp>(</rp><rt lang="fr">Mont</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>サン<rp>(</rp><rt lang="fr">Saint</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>ミシェル<rp>(</rp><rt lang="fr">Michel</rt><rp>)</rp></ruby lang="ja"></a> の元にあると作品の中で言われているから紹介しません。<br />
<a href="https://ja.wikipedia.org/wiki/ミカエル" title="https://ja.wikipedia.org/wiki/ミカエル">大天使ミカエル</a>と雄ウシ、まだまだいろいろが登場します...驚くほどに語りが大天使から止まることなく少しづつ密かに天使たちの信仰の語りに展開します。<br />
計り知れない存在と感覚ある実在とをいろいろ考えさせられるのであろうから、信じるか信じないか別にして、自分で出来れば最後まで、当時の独特な強い主教色を怖がらずに、読むことをお勧めします。</p>
</div>
<p><br></p>
<h2 id="chap139"><span style="color: #b52b27;">１３９章　大天使聖ミカエル</span></h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"/></svg></span>
ミカ工ルとは、〈だれが神に比べられようか〉という意味である。<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-gregorius" title="聖グレゴリウス" id="gregorius">聖グレゴリウス</a>は、こう書いている。「大きな奇跡が起こるときには、いつもミカエルが派遣される。
その<ruby>業<rp>(</rp><rt>わざ</rt><rp>)</rp></ruby>とその名前から、このような偉大な奇跡は神以外のだれもなしえないということが明らかになるためである」多くの偉大な奇跡が聖ミカエルのはたらきだとされるのは、このためである。
というのは、<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-daniel" title="ダニエル書" id="daniel">ダニエル</a>が書いているように、ミカエルは、「憎むべき<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-antechrist" title="破壊者" id="antechrist">破壊者</a>」があらわれるときに立ちあがり、選ばれた民を守ってくれるからである。
たとえば、彼は、竜とその手下どと戦い、彼らを天国から突き落とし、大勝利をおさめたし<a href="https://francois-vidit.com/docs/ja/mont-saint-michel/arch-michel/apocalypse#bataille" title="『黙示』１２の７～９">（『黙示』１２・７～９）</a>、悪魔が<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-moise" title="モーセの遺体" id="moise">モーセの遺体</a>を<ruby>祀<rp>(</rp><rt>まつ</rt><rp>)</rp></ruby>って、ユダヤ人たちにこれを神として拝ませようとしたときも、遺体をめぐって悪魔と争った。聖人たちのたましいを受けとり、喜びの<ruby>楽園<rp>(</rp><rt>ぱらいそ</rt><rp>)</rp></ruby>にみちびいていくのも、ミカエルである。
彼は、もとユダヤ教会堂の守護者であったが、主は、キリスト教会の守護者とされた。
エジプト人に天罰をくだし、紅海をふたつに分け、イスラエルの民をみちびいて荒野をわたり、<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-canaan" title="カナアン" id="canaan"><ruby>約束の地<rp>(</rp><rt>カナアン</rt><rp>)</rp></ruby></a>につれていったのも、ミカエルであったと言われる（『出エジプト記』）。彼はまた、聖なる天の軍勢のなかではキリストの旗手をつとめる。
彼は、主の命令によって<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-oliviers" title="オリヴ山" id="oliviers">オリヴ山</a>上で<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-antechrist" title="破壊者" id="antechrist2">反キリスト</a>にを力をもって倒すであろう。死者たちは、彼の声によって復活すると言われている。
<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-jugement" title="最後の審判の日" id="jugement">最後の審判の日</a>に聖十字架と<ruby>聖<rp>(</rp><rt>せい</rt><rp>)</rp>釘<rp>(</rp><rt>てい</rt><rp>)</rp></ruby>と<ruby>聖<rp>(</rp><rt>せい</rt><rp>)</rp>槍<rp>(</rp><rt>そう</rt><rp>)</rp></ruby>といばらの冠をもってくるのも、彼であるとされている。</p>
<p>大天使聖ミカエルの祝日は、彼の出現と勝利と聖別と記憶の日とよばれている。</p>
<h3 id="apparitions"><span style="color: #b52b27;">出現</span></h3>
<h4 id="garganus"><span style="color: #b52b27;">ガルガヌスと雄牛の出現</span></h4>
<p>聖ミカルの出現は、いろいろある。最初の出現は、<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-gargano" title="ガルガーノ山" id="gargano">ガルガーノ山</a>上であった。
ガルガーノはアプリア地方の山で、シポントウムという町の近くにある。主の紀元３９０年ごろ、この町に<ruby>ガルガヌス<rp>(</rp><rt>Garganus</rt><rp>)</rp></ruby>という名の男が住んでいた。
山の名は、この男の名前にちなんでつけられた。
しかし、男の名前がこの山の名からとられたとしている本もある。
ガルガヌスは、数えきれないほど多くの牛や羊を飼っていた。
あるとき、彼の牛や羊が山腹で草を<ruby>食<rp>(</rp><rt>は</rt><rp>)</rp></ruby>んでいると、一頭の雄牛が群れからはなれて、山頂に登っていった。ほかの牛や羊が山から下ってきたときも、この雄牛だけもどっていないことがわかった。
そこで男は、大勢の牧童といっしょに雄牛をもとめて道なき道を登っていき、ついに山頂の、とある洞穴の入口でこの牛を見つけた。
男は、群れからはなれて勝手な行動をしたことに腹をたてて、雄牛めがけて毒矢を放った。
ところが、矢は、風になぶられかのように向きを変えて、<ruby>射<rp>(</rp><rt>い</rt><rp>)</rp>手<rp>(</rp><rt>て</rt><rp>)</rp></ruby>のほうに舞いもどってきた。
町の人びとは、これを知ってたいへんおどろき、この大きな奇跡はなにを意味しているのでしょうか、と司教にたずねた。
司教は、３日間の<ruby>斎<rp>(</rp><rt>さい</rt><rp>)</rp>食<rp>(</rp><rt>じき</rt><rp>)</rp></ruby>（断食）を指示し、これにはどういう意味があるのか主にお伺いすることにしましょう、と答えた。
そのとおりにしていると、聖ミカエルが司教にあらわれ、こう告げた。
「あの場が自分の矢に射られたのは、わたしの意志によることです。
かく言うわたしは、大天使ミカェルであって、地上のこの場所が気に入って、ここに住み、この地を守ることにしました。
よって、あの奇跡でもって、自分がこの土地の守護者であり番人であることを知らせようとしたのです」そこで、司教と町の住民たちは、ただちに行列をくんで、奇跡の起こった場所に行き、洞穴のまえでうやうやしくお祈りをささげた。
しかし、洞穴のなかに入ることははばかった。</p>
<h4 id="mont-tombe"><span style="color: #b52b27;">トウンバ岩山での出現</span></h4>
<p>二度目の出現は、主の紀元７１０年ごろのことであったと言われている。
アプリカの町から六マイルほどはなれた海辺の<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-tumba" title="トウンバ" id="tumba">トウンバ</a>というところで、聖ミカェルがこの町の司教にあらわれ、この地に教会を建て、ガルガーノの山でおこなわれているように、わたしを記念する場所としなさい、と命じた。
司教がどこに教会を建てたものかと思案していると、泥棒どもが隠した雄牛の見つかる場所に建てなさいというお告げがあった。
また、司教がどれほどの広さの教会にしたものかと迷っていると、雄牛の足跡が地面に残っているだけの広さにしなさいというお告げがあった。
ところが、この場所には、人力では動かせないほどの大きな岩がふたっあった。
すると、聖ミカエルがある男にあらわれ、くだんの場所に行って岩を動かしなさいと命じた。
そこで、男は、出かけていって、ふたつの岩をかるがると持ちあげた。
こうして教会ができあがると、聖ミカェルがガルガーノの教会の祭壇に掛けておいた前帳の一部と、聖ミカェルがそのうえに立っていた大理石の一部がはこばれてきた。
ところで、この土地には水がなかった。
そこで、人びとは、これまた聖ミカエルの命令で固い岩に穴を<ruby>穿<rp>(</rp><rt>うが</rt><rp>)</rp></ruby>った。
すると、水が<ruby>滾<rp>(</rp><rt>こん</rt><rp>)</rp>々<rp>(</rp><rt>こん</rt><rp>)</rp></ruby>と湧きだしてきた。
今日。ここからゆたかな水が流れでている。
聖ミカエルの慈悲のあらわれである。
この出現、１０月１６日に祝われる。</p>
<p>おなじ町で、もうひとつ記憶にあたいするような奇跡が起こったと言われる。
この山は、周囲を海にかこまれているが、聖ミカエルの日には、二度海の潮が引いて、自由に渡れるようになる。
昔のことだから、実際そういうことがあったのであろう。
あるとき、大勢の人びとがこの教会に<ruby>詣<rp>(</rp><rt>もう</rt><rp>)</rp></ruby>でた。なかにひとり出産まちかの婦人がまじっていた。
ところが、いったん引いたかに見えた<ruby>波<rp>(</rp><rt>は</rt><rp>)</rp>浪<rp>(</rp><rt>ろう</rt><rp>)</rp></ruby>が、突然またものすごい勢いでもどってきた。人びとはみな、怖れおののいて岸のほうに逃げ帰った。
<ruby>身<rp>(</rp><rt>み</rt><rp>)</rp>重<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>の婦人だけは、逃げおくれて、波にのまれてしまった。
しかし、大天使聖ミカエルが彼女をしっかりつかまえていてくれたので、彼女は、海のなかで無事子供を生みおとし、腕に抱いて乳を飲ませた。
そして、潮がまた引いて通り道ができると、うれしそうに子供といっしょに水のなかからあがってきた。</p>
<h4 id="chateau-saint-ange"><span style="color: #b52b27;">聖天使城での出現</span></h4>
<p>三度目の出現は、ある本によると、教皇グレゴリウスの時代にローマで起こった。
というのは、教皇が俗に〈よこね〉とよばれているペストの流行を終わらせるために大がかりな祈願行列をくりだし、人びとの救霊のために祈っていたとき、ハドリアヌス霊廟とよばれていた城のうえにひとりの天使が立っているのが見えた。
天使は、血にぬれた剣をぬぐい、<ruby>鞘<rp>(</rp><rt>さや</rt><rp>)</rp></ruby>におさめた。
教皇は、これを見て、神が自分の祈りを聞きとどけてくださったのだと理解し、その場所に天使をたたえて教会を建てた。それにちなんで、この城も、今日にいたるまで 〈<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-saintange" title="聖天使城" id="saintange"><ruby lang="ja">聖天使城<rp>(</rp><rt lang="it">Castel&#160;Sant'Angelo</rt><rp>)</rp></ruby lang="ja"></a>〉 とよばれている。
この出現は、聖ミカエルがガルガーノの山にあらわれて、シポントゥムの町の人たちに勝利をあたえた出現とおなじく、５月８日に祝われる。</p>
<h4 id="de-hierarchia"><span style="color: #b52b27;">天上位階での出現</span></h4>
<p>第四の出現は、天使たちの<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-hierarchia" title="階級秩序" id="hierarchia">階級秩序</a>のなかにある。
第一の階級は、〈<ruby lang="ja">エピパニア<rp>(</rp><rt lang="la">epiphania</rt><rp>)</rp></ruby lang="ja">〉すなわち上級の出現とよばれる。
第二の階級は、〈<ruby lang="ja">ヒュポパニア<rp>(</rp><rt lang="la">hyperphania</rt><rp>)</rp></ruby lang="ja">〉すなわち中級の出現とよばれ、第３の階級は、〈<ruby lang="ja">ヒュポパニア<rp>(</rp><rt lang="la">hypophania</rt><rp>)</rp></ruby lang="ja">〉すなわち下級の出現と言われる。</p>
<p><ruby>階級秩序<rp>(</rp><rt>hierarchia</rt><rp>)</rp></ruby>という語は、〈神聖な〉の意の<ruby lang="ja">イエラル<rp>(</rp><rt lang="la">hierar</rt><rp>)</rp></ruby lang="ja">と〈王君〉の意の<ruby lang="ja">アルコス<rp>(</rp><rt lang="la">archos</rt><rp>)</rp></ruby lang="ja">とから来ていて、〈聖王国〉という意味である。
これら３級には、それぞれ３隊がある。
上級には<ruby>熾天使<rp>(</rp><rt>セラピム</rt><rp>)</rp></ruby>、<ruby>智天使<rp>(</rp><rt>ケルビム</rt><rp>)</rp></ruby>、<ruby>座天使<rp>(</rp><rt>トロネ</rt><rp>)</rp></ruby>の３隊がある。
中級には、<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-denis" title="ディオニュシウス" id="denis">ディオニュシウス¹</a>によると、<ruby>主天使<rp>(</rp><rt>ドミナテイオネス</rt><rp>)</rp></ruby>、<ruby>力天使<rp>(</rp><rt>ウイルトウテス</rt><rp>)</rp></ruby>、<ruby>能天使<rp>(</rp><rt>ポテスタテス</rt><rp>)</rp></ruby>の３隊がある。
下級には、おなじく<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-denis" title="ディオニュシウス" id="denis2">ディオニュシウス²</a>によると、<ruby>権天使<rp>(</rp><rt>プリンキパトウス</rt><rp>)</rp></ruby>、<ruby>大天使<rp>(</rp><rt>アルカンゲリ</rt><rp>)</rp></ruby>、<ruby>天使<rp>(</rp><rt>アンゲリ</rt><rp>)</rp></ruby>の３隊がある。
地上の王君に仕える家来たちとおなじく、これらの<ruby>聖<rp>(</rp><rt>せい</rt><rp>)</rp>秩<rp>(</rp><rt>ちつ</rt><rp>)</rp></ruby>にも、それぞれ位格と職能に違いがある。
というのは、ひとりの王に仕える家来たちのなかには、侍従や顧問や近侍のように直接王個人に仕える者がいる。
上級の３隊は、これに似ている。
また、軍司令や宮廷判事のように、国政全般にたずさわり、個々の地域に配属されない官僚たちもいる。
中級の３隊は、これに相当する。
さらに、代官や城代やその他の下級役人のように、国内の一地域を受けもつ者もいる。
下級の3隊は、これに似ている。
上級３隊は、神のおそばにいて、神と一家をなしている。
このためには、３つのことが必要である。
まず第一は、至高の愛である。
これは、セラピムがもっている。
<ruby>熾天使<rp>(</rp><rt>セラピム</rt><rp>)</rp></ruby>とよばれるのは、そのためである。
つぎに、完全な認識である。
これは、ケルビムがもっている。
<ruby>智天使<rp>(</rp><rt>ケルビム</rt><rp>)</rp></ruby>と言われるのは、そのためである。
必要な第三のものは、不断の把握と享受である。
これは、トロネがもっている。<ruby>座天使<rp>(</rp><rt>トロネ</rt><rp>)</rp></ruby>とよばれるのは、そのためである。
主は、彼らをご自身のなかにやすらわせる一方で、彼らのうえに座し、やすらわれるからである。
中級３隊は、人間全般にかかわることをつかさどっている。
この仕事は、三つのことから成っている。
第一は、指図や命令をあたえることである。</p>
<p>これをおこなうのは、ドミナティオネスすなわち<ruby>主天使<rp>(</rp><rt>dominationes</rt><rp>)</rp></ruby>である。
主天使たちは、下級の天使たちを支配する権限をもち、彼らが神のために勤めるのを指揮し、あらゆる命令をあたえる。
たとえば、『ザカリア書』（２・４）で、ひとりの天使がべつの天使にむかって、「走っていって、あの若者に伝えなさい」と言うのがそれである。
第二の仕事は、実行し活動することである。
これをおこなうのは、ウィルトゥテスすなわち<ruby>力<rp>(</rp><rt>りき</rt><rp>)</rp></ruby>天使である。
<ruby>力天使<rp>(</rp><rt>ウイルトウテス</rt><rp>)</rp></ruby>たちにとって、命じられたことで実行不可能なことはひとつもない。
神にたいする勤めをおこなううえでどんな困難ものりこえる力をあたえられているのである。
それゆえ、彼らに課せられたとくに大事な仕事は、奇跡をおこなうことである。
第三の仕事は、妨げ禁じることであって、それによってどんな障害や面倒も放逐するのである。
これをおこなうのは、ポテスタテスすなわち<ruby>能<rp>(</rp><rt>のう</rt><rp>)</rp></ruby>天使である。
<ruby>能天使<rp>(</rp><rt>ポテスタテス</rt><rp>)</rp></ruby>たちは、すべての反対者どもを屈服させる権能をもっている。
たとえば、「<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-tobie" title="トビト書" id="tobie">トビト書</a>」（８・３）に、天使ラファエルはひとりの悪魔を上部エジプトの荒野まで追いかけていったと書かれているのがそれである。
下級の３隊は、その権能のおよぶ範囲を限定され、特定されている。ある国だけをつかさどる者もいる。
これが、プリンキパトゥスすなわち<ruby>権<rp>(</rp><rt>けん</rt><rp>)</rp></ruby>天使である。
たとえば、「<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-daniel" title="ダニエル書" id="daniel2">ダニェル書</a>」に出てくる「ペルシアの国の<ruby>君<rp>(</rp><rt>きみ</rt><rp>)</rp></ruby>」とは、ペルシア人たちのうえに権勢をもつ天使をさしている。
また、ひとつの町のようなある集団のうえにだけ君臨している天使もいる。
これが、アルカンゲリすなわち大天使である。
さらに、個々の人間を守護してくれる天使もある。
これは、たんに<ruby>天使<rp>(</rp><rt>アンゲリ</rt><rp>)</rp></ruby>とのみよばれる。
たんなる<ruby>天使<rp>(</rp><rt>アンゲリ</rt><rp>)</rp></ruby>たちは、ひとりの人間にだけかかわるから小事を伝えるとされている。
これにたいして、<ruby>大天使<rp>(</rp><rt>アルカンゲリ</rt><rp>)</rp></ruby>は、大事を伝えるとされている。
というのは、個人の救済よりも多くの人たちの救済のほうが大事だからである。
上級３隊の決めかたについては、<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-gregorius" title="聖グレゴリウス" id="gregorius2">聖グレゴリウス</a>と<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-saintbernard" title="聖ベルナルドゥス" id="saintbernard">聖ベルナルドゥス</a>も、上述の<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-denis" title="ディオニュシウス" id="denis3">ディオニュシウス³</a>の見解と一致している。
というのは、このふたりの聖人も、<ruby>熾天使<rp>(</rp><rt>セラピム</rt><rp>)</rp></ruby>は神を喜びとすること、すなわち熾烈な愛を意味し、<ruby>智天使<rp>(</rp><rt>ケルビム</rt><rp>)</rp></ruby>は深い認識をあらわし、<ruby>座天使<rp>(</rp><rt>トロネ</rt><rp>)</rp></ruby>は神のなかにやすらうことをあらわすと言っているからである。
ところが、中級と下級の決めかたになると、２つの隊にかんして<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-denis" title="ディオニュシウス" id="denis4">ディオニュシウス⁴</a>と意見が食いちがっているようにおもわれる。
それは、<ruby>権天使<rp>(</rp><rt>プリンキパトウス</rt><rp>)</rp></ruby>と<ruby>力天使<rp>(</rp><rt>ウイルトウテス</rt><rp>)</rp></ruby>の２隊についてである。
というのは、グレゴリウスとベルナルドゥスは、<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-denis" title="ディオニュシウス" id="denis5">ディオニュシウス⁵</a>と見解が異なり、中級の隊は支配統治をつかさどり、下級の隊は奉仕することが任務であると述べているからである。
そして、天使たちは、３つにわかれて支配する。
善霊を支配する者、これが<ruby>主天使<rp>(</rp><rt>ドミナテイオネス</rt><rp>)</rp></ruby>である。
良き人間たちを支配するのが、<ruby>権天使<rp>(</rp><rt>プリンキパトウス</rt><rp>)</rp></ruby>であり、悪霊を支配するのが、<ruby>能天使<rp>(</rp><rt>ポテスタテス</rt><rp>)</rp></ruby>である。
ここから中級天使たちの序列が明らかになる。
奉仕にも３段階がある。
奇跡をおこなうこと、大事を教えること、小事を教えることの３つである。
第一が<ruby>力天使<rp>(</rp><rt>ウイルトウテス</rt><rp>)</rp></ruby>の勤め、第二が<ruby>大天使<rp>(</rp><rt>アルカンゲリ</rt><rp>)</rp></ruby>の役目、第三が天使の仕事であるという。</p>
<h4 id="infirme"><span style="color: #b52b27;">食べることも、飲むこともできない人に出現</span></h4>
<p>5度目の出現は、『<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-histeccltrip" title="三部教会史" id="histeccltrip">三部教会史</a>』に書かれている。
コンスタンティノポリスの近くに小さな町があって、むかし<a href="/docs/ja/mont-saint-michel/arch-michel/legende-doree#note-vesta" title="ウェスタ女神" id="vesta">ウェスタ女神</a>を崇拝していた。
ところが、ここに聖ミカエルのためにひとつの教会が建てられた。
そのために町は、ミカエリオンともよばれている。
さて、アクイリノスという名の男がいて、<ruby>猩<rp>(</rp><rt>しょう</rt><rp>)</rp>紅<rp>(</rp><rt>こう</rt><rp>)</rp>熱<rp>(</rp><rt>ねつ</rt><rp>)</rp></ruby>ともいうはげしい熱病にかかっていた。
医者たちが解熱用の水薬をあたえても、それを吐きだすばかりか、食べたり飲んだりしたものまでみんなもどしてしまうのであった。すでに死期もせまってきたとき、彼は、ミカエリオンの町にはこんでいってもらった。
死ぬにしても治るにしてもこの町しかないとおもったのである。
すると、聖ミカエルが彼にあらわれて、蜂蜜とぶどう酒と<ruby>胡<rp>(</rp><rt>こ</rt><rp>)</rp>椒<rp>(</rp><rt>しょう</rt><rp>)</rp></ruby>をまぜた飲みものを作りなさい、どんな食べものも、これに<ruby>浸<rp>(</rp><rt>ひた</rt><rp>)</rp></ruby>してから食べるのです、そうすれば病気はすっかりよくなります、と告げた。
男がそのとおりにすると、さしもの熱病も<ruby>快<rp>(</rp><rt>かい</rt><rp>)</rp>癒<rp>(</rp><rt>ゆ</rt><rp>)</rp></ruby>した。
医術によると、熱病患者に刺激的な飲みものはよくないとされているのに、みごとに常識をくつがえしたのである。</p>
<p>
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