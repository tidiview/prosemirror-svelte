<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="red">アラクネ</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee_700x520.webp 700w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee_700x520.jpg" alt="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《ミネルヴァとアラクネ》絵画" title="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《ミネルヴァとアラクネ》絵画" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee_700x520.jpg 700w"></picture><figcaption>手前に見えるミネルヴァが真ん中にいるアラクネを殴りつけている</figcaption></figure>
<div class="notices red">
<p><a href="https://ja.wikipedia.org/wiki/大トリアノン宮殿" title="https://ja.wikipedia.org/wiki/大トリアノン宮殿"><ruby lang="ja">大トリアノン宮殿<rp>(</rp><rt lang="fr">le&#160;Grand&#160;Trianon</rt><rp>)</rp></ruby></a>に展示されている<a href="https://ja.wikipedia.org/wiki/ルネ＝アントワーヌ・ウアス" title="https://ja.wikipedia.org/wiki/ルネ＝アントワーヌ・ウアス"><ruby lang="ja">ルネ<rp>(</rp><rt lang="fr">René</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>アントワーヌ<rp>(</rp><rt lang="fr">Antoine</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ウアス<rp>(</rp><rt lang="fr">Houasse</rt><rp>)</rp></ruby></a>が描いた「<ruby lang="ja">ミネルヴァ<rp>(</rp><rt lang="fr">Minerve</rt><rp>)</rp>と<rp>(</rp><rt lang="fr">et</rt><rp>)</rp>アラクネ<rp>(</rp><rt lang="fr">Arachnée</rt><rp>)</rp></ruby>」絵画が<ruby lang="ja">領主たちの控えの間<rp>(</rp><rt lang="fr">le&#160;Salon&#160;des&#160;Seigneurs</rt><rp>)</rp></ruby>に見られます。<br>
<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス"><ruby lang="ja">オウィディウス<rp>(</rp><rt lang="la">Ovidius</rt><rp>)</rp></ruby></a>が書いた「<a href="https://ja.wikipedia.org/wiki/変身物語" title="https://ja.wikipedia.org/wiki/変身物語"><ruby lang="ja">変身物語<rp>(</rp><rt lang="la">Metamorphōseōn&#160librī</rt><rp>)</rp></ruby></a>」の第６巻の中で、神に負けない<a href="https://ja.wikipedia.org/wiki/リュディア" title="https://ja.wikipedia.org/wiki/リュディア">リディア</a>出身の<ruby>機<rp>(</rp><rt>はた</rt><rp>)</rp>織<rp>(</rp><rt>お</rt><rp>)</rp></ruby>りの技術で優秀な<a href="https://ja.wikipedia.org/wiki/アラクネー" title="https://ja.wikipedia.org/wiki/アラクネー"><ruby lang="ja">アラクネ<rp>(</rp><rt lang="grc">Arachnē</rt><rp>)</rp></ruby></a>が賢くさの女神である<a href="https://ja.wikipedia.org/wiki/ミネルウァ" title="https://ja.wikipedia.org/wiki/ミネルウァ"><ruby lang="ja">ミネルヴァ<rp>(</rp><rt lang="la">Minerva</rt><rp>)</rp></ruby></a>との恐ろしい対立が語られている。</p>
</div>
<h2 class="red">「変身物語」においてのアラクネ</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>１</sup></td>
<td>ミネルウァ女神はこのような話に耳をかたむけ、詩神ムーサたちの歌と、その正当な怒りとをたたえた。
それから、心のるかでこう思った。
「ひとをたたえるばかりでは、意味がない。
わたし自身もたたえられなければ！
わたしの神威がないがしろにされ、それにたいして懲罰も加えられないでいるのは許せない。</td></tr>
<tr><td></td>
<td>じつは、女神は、リュディアの女アラクネを破滅におとしいれることを考えていたのだ。
アラクネが、かねがね、<ruby>機<rp>(</rp><rt>はた</rt><rp>)</rp></ruby>織り上手のほまれにかけては自分に一歩も譲ろうとしないのを耳にしていたからだ。
この女が世に聞こえていたのは、自分や素姓によってではなく、ひとえに<ruby>機<rp>(</rp><rt>はた</rt><rp>)</rp></ruby>織りの技術によってだった。
父は、コロポンのひとで、名をイドモンといい、イオニア産の紫貝の液汁で羊毛を染めるのが、日常だった。
母はすでに他界していたが、これも平民の出で、その点では夫と同じだった。
が、アラクネは、こんな<ruby>賤<rp>(</rp><rt>いや</rt><rp>)</rp></ruby>しい家の生まれであり、ヒュパイパという寒村に住んでいたにもかかわらず、その仕事によって、リュディアの町々に名声をえていた。
彼女のすばらしい<ruby>業<rp>(</rp><rt>わざ</rt><rp>)</rp></ruby>を見るために、トモロス山の<ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby>たちが葡萄園をあとにすることが多かったし、パクトロス河の精たちも、しばしば自分の流れをぬけ出すのだった。
出来あがった織物を見るだけではなく、それが仕上がっていくところを見るのも、楽しみだった。
彼女の技術には、それほどのすばらしさがあったからだ。
まず、粗い羊毛をまるめて<ruby>毬<rp>(</rp><rt>たま</rt><rp>)</rp></ruby>にする。</td></tr>
<tr>
<td><sup>２０</sup></td>
<td>毬に指をあてて、毛を整える。それから、雲のようにふんわりした毛房を、繰り返し幾度も長く引きのばして、柔らかな糸にする。
ためらかな<ruby>紡錘<rp>(</rp><rt>つむ</rt><rp>)</rp></ruby>を軽やかな手で回す。
こうして、柄模様を織りあげてゆく。
――ひとは、彼女に技術を<ruby>授<rp>(</rp><rt>さず</rt><rp>)</rp></ruby>けたのはミネルウァ女神だとさとるだろう。けれども、アラクネ自身はそれを否定し、かくもリっぱな師匠の名に<ruby>憤<rp>(</rp><rt>いきどお</rt><rp>)</rp></ruby>りをおぼえて、こういう。<br>
「女神さまも、わたしのわざを<ruby>競<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>われたらよいのだ、わたしが負けたら、わたしをお好きなようになさるがいい！」</td></tr>
<tr><td></td>
<td>おさまらぬミネルウァは、老婆に変装する。
こめかみのあたりににせの白髪を植えつけ、衰えたからだを杖で支えたりもしている。
それからこう口をきった。<br>
「わたしの忠告を無にしてはならないよ。
世に<ruby>機<rp>(</rp><rt>はた</rt><rp>)</rp></ruby>織りの高名を求めるのもよい。
が、女神には一歩を譲らねば！
これ、軽はずみな娘さん、あんたの言葉にたいしては、うやうやしく許しを乞うがよい！
そうすれば、女神も許しを与えられようから」</td></tr>
<tr><td></td>
<td>アラクネは、彼女をにらみすえると、手にしていた糸を放し、振りあげかけた手をとどめかねながら、怒りの色を顔にあらわして、こう女神に答えた。<br>
「よくもいらしたのね、そんなにも、もうろくして、老いさらばえていながら！
長生きしすぎるのも、どうかと思うわ。
嫁か、娘さんはいないの？
そんなお説教は、その人たちにするがいいわ！
わたしに忠告ですってね。
それなら、いくらでも、自分で出来るの。</td></tr>
<tr>
<td><sup>４０</sup></td>
<td>お説教が役に立ったなんて、思わないで！
わたしの考えには、変わりがないのだから。
でも、女神さまはどうしてご自分で来ないの？
わざ比べを避けるのは、なぜなの？」</td></tr>
<tr><td></td>
<td>そこで、女神は、<br>
「もうおいでになっているのだよ！」<br>
といいながら、老婆の姿をぬぎ捨てて、女神の姿を現わした。
<ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby>たちも、リュディアの女たちも、この神をおがめている。
が、アラクネだけは平然たるものだ。
もっとも、顔が赤くはなった。
おもわず、さっと、朱の色が
<ruby>頬<rp>(</rp><rt>ほお</rt><rp>)</rp></ruby>を染めたのだが、すぐにまた、肖えた。
「<ruby>曙<rp>(</rp><rt>アウロラ</rt><rp>)</rp></ruby>」が現われはじめると、空は<ruby>紅<rp>(</rp><rt>くれない</rt><rp>)</rp></ruby>を帯びるが、やがて、日がのぼると、白い輝きに変わってゆくようなものだ。</td></tr>
<tr><td></td>
<td>アラクネは、心を変えなかった。
愚かな勝利を夢見ながら、みずからの破滅へと急ぐのだ。</td></tr>
<tr><td></td>
<td>時を移さず、ふたりは別々の場所に陳取って、<ruby>機<rp>(</rp><rt>はた</rt><rp>)</rp></ruby>を<ruby>据<rp>(</rp><rt>すえ</rt><rp>)</rp></ruby>、細い縦糸をそれに張った。
巻き軸に結ばれた縦糸を、<ruby>葦<rp>(</rp><rt>あし</rt><rp>)</rp></ruby>の茎がより分ける。
指が送り出す横糸が、鋭い<ruby>梭<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>によって、縦糸のあいだヘ通される。
通されたところへ、<ruby>筬<rp>(</rp><rt>おさ</rt><rp>)</rp></ruby>うちおろされて、ギザギザになったその歯が糸をたたく。</td></tr>
<tr><td></td>
<td>ふたりとも仕事を急いだ。
帯を胸まであげて着物をたくしあげ、巧みな腕を動かしている。</td></tr>
<tr>
<td><sup>６０</sup></td>
<td>精を出すあまり、苦労も苦労ではなかった。
そこには、テュロスの釜で染められた<ruby>緋<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>の色が、そして、少しずつ徴妙に異なった。
いっそうおだやかな色あいが織られている。
日の光が雨滴にぶつかると、虹が大きな弧をえがいて、空のひろがりを彩ることがよくある。
異なったたくさんの色が輝きはするが、しかし、色から色への移り目そのものは、見るひとにもはっきりしない。
ちょうどそれと同じように、いまのばあいも、隣りあったところでは同じような色に見えるのだが、端と端では違っている。
さらに、そこには、しなやかな糸となる黄金が、織りまぜられてもいて、全体では、古い物語が織り出されているのだ。</td></tr>
<tr><td></td>
<td>ミネルウァ女神は、アテナイの「<ruby>軍神<rp>(</rp><rt>マルス</rt><rp>)</rp></ruby>の丘」と、誰にちなんでこの地を命名するかという古い争いを描き出している。
十二<ruby>柱<rp>(</rp><rt>ばしら</rt><rp>)</rp></ruby>の神々が、ユピテルを中央に、威風あたりを払って<ruby>高<rp>(</rp><rt>たか</rt><rp>)</rp>御<rp>(</rp><rt>み</rt><rp>)</rp>座<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>にすわっている。
それぞれの神々には、固有の姿が与えられている。
ユピテルには、王者の威容がある。
海の神ネプトゥーヌスは、すっくと立って、長い<ruby>三<rp>(</rp><rt>みつ</rt><rp>)</rp>叉<rp>(</rp><rt>また</rt><rp>)</rp>鉾<rp>(</rp><rt>ぼこ</rt><rp>)</rp></ruby>で荒岩を打っている。
岩の裂け目の真ん中から海水がほとばしっているが、海神は、これをおのれの力の<ruby>証<rp>(</rp><rt>あかし</rt><rp>)</rp></ruby>として、この都をわがものにしようというのだ。
そこに描かれているミネルウァ自身は、<ruby>盾<rp>(</rp><rt>たて</rt><rp>)</rp></ruby>と、穂先鋭い槍を持っている。
頭には<ruby>兜<rp>(</rp><rt>かぶと</rt><rp>)</rp></ruby>をいただき、胸に<ruby>神盾<rp>(</rp><rt>アイギス</rt><rp>)</rp></ruby>で守られている。</td></tr>
<tr>
<td><sup>８０</sup></td>
<td>槍で大地を打つと、そこから、実をつけた薄あおいオリーブの若木が生え出て、諸神たちも驚きを禁じえない――そういう図柄だ。
仕事の最後は、ミネルウァをたたえている「勝利の女神」ということになる。</td></tr>
<tr><td></td>
<td>だが、ミネルウァとしては、ほまれを競いあっている相手に知らせたいことがあった。
かくも狂気じみた蛮勇からはどんな報いを覚悟すべきかを、先例によって教えようとおもったのだ。
だから、四隅に、神への敵対行為の四つの物語をつけ加え、それぞれの色で目立たせて、細かな図柄をそれらに配した。</td></tr>
<tr><td></td>
<td>第一の隅には、トラキア生まれのハイモスとロドペを描く。
今では、寒風すさぶ山となっているが、かつて人間であった、自分たちをユピテルとユノーと呼んだ兄妹だ。
第二の隅には、ピグミー族の女ゲラナの悲運が描かれる。
人の子の母でもあった彼女だが、神々と争おうとして、<ruby>挫<rp>(</rp><rt>くじ</rt><rp>)</rp></ruby>かれた。
ユノーによって鶴に変えられたうえ、祖国の人たちとも敵対関係をもつはめとなったのだ。</td></tr>
<tr><td></td>
<td>つぎは、トロイアの女王アンティゴネだ。
むこう見ずにも、大神ユピテルの<ruby>后<rp>(</rp><rt>きざき</rt><rp>)</rp></ruby>と争おうとして、女王ユノーによって島に変身させられた。
名にし負う祖国も、父王ラオメドンも、彼女には何の助けにもならなかった。
げんに、彼女は、白い翼に包まれた身となっている。
いまも、かたかたと<ruby>嘴<rp>(</rp><rt>くちばし</rt><rp>)</rp></ruby>を鳴らすことで自分の美しさに、<ruby>喝<rp>(</rp><rt>かつ</rt><rp>)</rp>采<rp>(</rp><rt>さい</rt><rp>)</rp></ruby>を送っているかのような、あのこうのとりが彼女なのだ。</td></tr>
<tr><td></td>
<td>最後に残った一隅は、娘たちを亡くしたキニュラスを描いている。</td></tr>
<tr>
<td><sup>１００</sup></td>
<td>もとは娘たちのからだであった、神殿の<ruby>階<rp>(</rp><rt>きざはし</rt><rp>)</rp></ruby>を抱きしめながら、石のうえに<ruby>臥<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>して泣いているのが見られる。</td></tr>
<tr><td></td>
<td>いちばん外側を、平和の象徴であるオリーブの枝で囲むと、これで出来あがりだ。
女神は、自分にゆかりの木によって、最後の仕上げをしたことになる。</td></tr>
<tr><td></td>
<td>いっぽう、アラクネが織っているのは、まず、雄牛姿のユピテルに<ruby>欺<rp>(</rp><rt>あざむ</rt><rp>)</rp></ruby>かれたエウロペの図だ。
雄牛も、海も、まるでほんものとおもえるくらいだ。
エウロペ自身はうしろに残した陸地を見やりながら、仲間たちに呼びかけている<ruby>風<rp>(</rp><rt>ふ</rt><rp>)</rp>情<rp>(</rp><rt>ぜい</rt><rp>)</rp></ruby>だ。
寄せる波に濡れないように、おずおずと足を引っこめている。
つぎに、アステリエ。
彼女は、身をくねらせた<ruby>鷲<rp>(</rp><rt>わし</rt><rp>)</rp></ruby>につかまえられている。
それから、レダ。
これは、白鳥の翼のしたに臥している。</td></tr>
<tr><td></td>
<td>アラクネは、織り進む。
ユピテルが、こんどは<ruby>獣神<rp>(</rp><rt>サテユロス</rt><rp>)</rp></ruby>に身をやつして、美しいアンティオペに双生児を身ざもらせたこと、アンピトリオンになりすまして、その妻アルクメネを欺いたこと、黄金の雨となってタナエを、火炎となってアイギナを、羊飼いとなってムネモシュネを、まだらの蛇となってプロゼルピナを、だましたこと――そんな場面が加えられてゆく。</td></tr>
<tr><td></td>
<td>海神ネプトゥーヌスも、あらあらしい雄牛に変じて、アイロスの娘を<ruby>籠<rp>(</rp><rt>ろう</rt><rp>)</rp>絡<rp>(</rp><rt>らく</rt><rp>)</rp></ruby>し、河神エニペウスの姿でアロエウスの妻を身ごもらせ、雄牛となってビサルテスの娘をたぶらした。</td></tr>
<tr>
<td><sup>１２０</sup></td>
<td>恵み深いみのりの母、金髪の<ruby>豊穣神<rp>(</rp><rt>ケレス</rt><rp>)</rp></ruby>には、馬となって近づき、天馬ペガソスの母、蛇髪のメドゥーサには、鳥となって、あのメラントーには、<ruby>海豚<rp>(</rp><rt>いるか</rt><rp>)</rp></ruby>となって近づいた――これらのばあい、すべての人物たちにその特徴的な姿が与えられ、ふさわしい背景が加えられている。
そこには、アポロンも登場する。
野人の姿をしているかと思もうと、<ruby>隼<rp>(</rp><rt>はやぶさ</rt><rp>)</rp></ruby>の翼に包まれたり、<ruby>獅孑<rp>(</rp><rt>しし</rt><rp>)</rp></ruby>の皮をかぶったりもしている。
マカレウスの娘イッセをだましたときは、羊飼いに化けてもいた。
酒神バッコスも、にせの葡萄でエリゴネを欺き、サトゥルヌスも、馬に身を変えて、半人半馬のケイロンを生んだのだ――これらがアラクネの織り模様だった。
織物の外回りは、細い縁どりで囲まれていて、からんだ<ruby>常<rp>(</rp><rt>キ</rt><rp>)</rp>春<rp>(</rp><rt>ヅ</rt><rp>)</rp>藤<rp>(</rp><rt>タ</rt><rp>)</rp></ruby>と、花々が織りまぜられている。</td></tr>
<tr><td></td>
<td>ミネルウァ女神も、「悪意」の神も、この作品に<ruby>難<rp>(</rp><rt>なん</rt><rp>)</rp>癖<rp>(</rp><rt>くせ</rt><rp>)</rp></ruby>をつけることはできなかったろう。
男まさりの、金髪の女神には、その出来ばえが<ruby>癪<rp>(</rp><rt>しゃく</rt><rp>)</rp></ruby>にさわった。
神々の非行を描いたこの織物を引きちぎると、手にしていたキュトロス産の<ruby>黄楊<rp>(</rp><rt>つげ</rt><rp>)</rp></ruby>の<ruby>梭<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>で、三度、四度と、アラクネの<ruby>額<rp>(</rp><rt>ひたい</rt><rp>)</rp></ruby>を打った。
かわいそうなアラクネは、ころえきれないで、ひと思いに首をくくったった。
哀れを催したミネルウァは、ぶらさがっている彼女を抱き上げて、こういった。<br>
「腹ぐらい娘さん、生きてたけおいで！
でも、ぶらさがったままでいるのよ！
先のことも、安心してはならないね。
おまえさんの一族には、末ながく、同じ懲罰を残しておくのだから」</td></tr>
<tr><td></td>
<td>こういって、立ち去ろうとしながら、魔法の草の汁を彼女にふりかけた。</td></tr>
<tr>
<td><sup>１４０</sup></td>
<td>と、たちまちに、不吉な毒薬に触れた髪の毛が、脱け落ちた。
それとともに、鼻も、両耳も落ちる。
そして、頭がたいそう小さくなる。
からだ全体も、ちっぽけなものとなった。
脇腹に、やせこけた指がついていて、脚の代りをする。
あとは、腹ばかりだが、今もその腹から糸を吐いて、むかしどおり<ruby>機<rp>(</rp><rt>はた</rt><rp>)</rp></ruby>織りに励んでいる。</td></tr>
<tr>
<td><sup>１４５</sup></td>
<td>彼女は<ruby>蜘<rp>(</rp><rt>く</rt><rp>)</rp>蛛<rp>(</rp><rt>も</rt><rp>)</rp></ruby>になったのだ。</td></tr>
</tbody>
</table>
<p><span style="color: #b52b27;">オウィディウス、変身物語、第６巻より</span></p>
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