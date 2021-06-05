<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:162 EN:193  -->

<article>

<hgroup>
<h2 class="red"><ruby lang="ja">大トリアノン宮殿<rp>（</rp><rt lang="fr">le&nbsp;Grand&nbsp;Trianon</rt><rp>）</rp></ruby>での</h2>
<h1 class="red">アラクネ</h1>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee_700x520.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee_700x520.jpg" alt="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《ミネルヴァとアラクネ》絵画" title="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《ミネルヴァとアラクネ》絵画" class="class-diane-img" width="700" height="520" loading="eager" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee_700x520.jpg 700w"></picture><figcaption>《ミネルヴァとアラクネ》<br>手前に見えるミネルヴァが<q cite="#arachnee" style="quotes:'「' '」'">手にしていたキュトロス産の<ruby>黄楊<rp>（</rp><rt>つげ</rt><rp>）</rp></ruby>の<ruby>梭<rp>（</rp><rt>ひ</rt><rp>）</rp></ruby>で、三度、四度と、アラクネの<ruby>額<rp>（</rp><rt>ひたい</rt><rp>）</rp></ruby>を打った</q>、<cite>変身物語</cite>、第六巻１３０行より</figcaption>
</figure>

<div class="notices red">
<p><a href="https://ja.wikipedia.org/wiki/大トリアノン宮殿" title="https://ja.wikipedia.org/wiki/大トリアノン宮殿"><ruby lang="ja">大トリアノン宮殿<rp>（</rp><rt lang="fr">le&nbsp;Grand&nbsp;Trianon</rt><rp>）</rp></ruby></a>に展示されている<a href="https://ja.wikipedia.org/wiki/ルネ＝アントワーヌ・ウアス" title="https://ja.wikipedia.org/wiki/ルネ＝アントワーヌ・ウアス"><ruby lang="ja">ルネ<rp>（</rp><rt lang="fr">René</rt><rp>）</rp>＝<rp>（</rp><rt lang="fr">-</rt><rp>）</rp>アントワーヌ<rp>（</rp><rt lang="fr">Antoine</rt><rp>）</rp>・<rp>（</rp><rt lang="fr"></rt><rp>）</rp>ウアス<rp>（</rp><rt lang="fr">Houasse</rt><rp>）</rp></ruby></a>が<time datetime="1706">１７０６年</time>ごろに描いた《<cite><ruby lang="ja">ミネルヴァ<rp>（</rp><rt lang="fr">Minerve</rt><rp>）</rp>と<rp>（</rp><rt lang="fr">et</rt><rp>）</rp>アラクネ<rp>（</rp><rt lang="fr">Arachnée</rt><rp>）</rp></ruby></cite>》絵画が<ruby lang="ja">領主たちの控えの間<rp>（</rp><rt lang="fr">le&nbsp;Salon&nbsp;des&nbsp;Seigneurs</rt><rp>）</rp></ruby>に見られます。</p>
<p>この絵画は、<a href="https://francois-vidit.com/docs/ja/versailles/trianon/tiresias" title="https://francois-vidit.com/docs/ja/versailles/trianon/tiresias">《<cite><ruby lang="ja">ミネルヴァ<rp>（</rp><rt lang="fr">Minerve</rt><rp>）</rp>と<rp>（</rp><rt lang="fr">et</rt><rp>）</rp>ティレシアス<rp>（</rp><rt lang="fr">Tirésias</rt><rp>）</rp></ruby></cite>》</a>と同様に、「<cite>ミネルヴァ伝</cite>」というシリーズの一部です。</p>
<p><a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス"><ruby lang="ja">オウィディウス<rp>（</rp><rt lang="la">Ovidius</rt><rp>）</rp></ruby></a>が書いた「<a href="https://ja.wikipedia.org/wiki/変身物語" title="https://ja.wikipedia.org/wiki/変身物語"><cite><ruby lang="ja">変身物語<rp>（</rp><rt lang="la">Metamorphōseōn&nbsp;librī</rt><rp>）</rp></ruby></cite></a>」の第六巻の中で、神に負けない<a href="https://ja.wikipedia.org/wiki/リュディア" title="https://ja.wikipedia.org/wiki/リュディア">リディア</a>出身の<ruby>機<rp>（</rp><rt>はた</rt><rp>）</rp>織<rp>（</rp><rt>お</rt><rp>）</rp></ruby>りの技術で優秀な<a href="https://ja.wikipedia.org/wiki/アラクネー" title="https://ja.wikipedia.org/wiki/アラクネー"><ruby lang="ja">アラクネ<rp>（</rp><rt lang="grc">Arachnē</rt><rp>）</rp></ruby></a>が賢くさの女神である<a href="https://ja.wikipedia.org/wiki/ミネルウァ" title="https://ja.wikipedia.org/wiki/ミネルウァ"><ruby lang="ja">ミネルヴァ<rp>（</rp><rt lang="la">Minerva</rt><rp>）</rp></ruby></a>との恐ろしい対立が語られている。</p>
</div>

<h2 id="arachnee" class="red">「<cite>変身物語</cite>」の第六巻の文書においてのアラクネ</h2>

<ol class="doc">
  <li value="1"><mark>ミネルウァ</mark>女神はこのような話に耳をかたむけ、詩神ムーサたちの歌と、その正当な怒りとをたたえた。</li>
  <li>それから、心のるかでこう思った。</li>
  <li>
    <p class="conversation">「ひとをたたえるばかりでは、意味がない。</p>
  </li>
  <li>
    <p class="conversation">わたし自身もたたえられなければ！</p>
  </li>
  <li>
    <p class="conversation">わたしの神威がないがしろにされ、それにたいして懲罰も加えられないでいるのは許せない。」</p>
  </li>
  <li>じつは、女神は、リュディアの女<mark>アラクネ</mark>を破滅におとしいれることを考えていたのだ。
  <mark>アラクネ</mark>が、かねがね、<ruby>機<rp>（</rp><rt>はた</rt><rp>）</rp></ruby>織り上手のほまれにかけては自分に一歩も譲ろうとしないのを耳にしていたからだ。</li>
  <li>この女が世に聞こえていたのは、自分や素姓によってではなく、ひとえに<ruby>機<rp>（</rp><rt>はた</rt><rp>）</rp></ruby>織りの技術によってだった。</li>

  <li class="top-space">父は、コロポンのひとで、名をイドモンといい、イオニア産の紫貝の液汁で羊毛を染めるのが、日常だった。</li>
  <li>母はすでに他界していたが、これも平民の出で、その点では夫と同じだった。</li>
  <li>が、<mark>アラクネ</mark>は、こんな<ruby>賤<rp>（</rp><rt>いや</rt><rp>）</rp></ruby>しい家の生まれであり、ヒュパイパという寒村に住んでいたにもかかわらず、その仕事によって、リュディアの町々に名声をえていた。</li>
  <li>彼女のすばらしい<ruby>業<rp>（</rp><rt>わざ</rt><rp>）</rp></ruby>を見るために、トモロス山の<ruby>妖精<rp>（</rp><rt>ニンフ</rt><rp>）</rp></ruby>たちが葡萄園をあとにすることが多かったし、パクトロス河の精たちも、しばしば自分の流れをぬけ出すのだった。</li>
  <li>出来あがった織物を見るだけではなく、それが仕上がっていくところを見るのも、楽しみだった。</li>

  <li class="top-space">彼女の技術には、それほどのすばらしさがあったからだ。</li>
  <li>まず、粗い羊毛をまるめて<ruby>毬<rp>（</rp><rt>たま</rt><rp>）</rp></ruby>にする。</li>
  <li value="20">毬に指をあてて、毛を整える。それから、雲のようにふんわりした毛房を、繰り返し幾度も長く引きのばして、柔らかな糸にする。</li>
  <li>ためらかな<ruby>紡錘<rp>（</rp><rt>つむ</rt><rp>）</rp></ruby>を軽やかな手で回す。
  こうして、柄模様を織りあげてゆく。</li>

  <li class="top-space">――ひとは、彼女に技術を<ruby>授<rp>（</rp><rt>さず</rt><rp>）</rp></ruby>けたのは<mark>ミネルウァ</mark>女神だとさとるだろう。けれども、<mark>アラクネ</mark>自身はそれを否定し、かくもリっぱな師匠の名に<ruby>憤<rp>（</rp><rt>いきどお</rt><rp>）</rp></ruby>りをおぼえて、こういう。</li>
  <li>
    <p class="conversation">「女神さまも、わたしのわざを<ruby>競<rp>（</rp><rt>きそ</rt><rp>）</rp></ruby>われたらよいのだ、わたしが負けたら、わたしをお好きなようになさるがいい！」</p>
  </li>

  <li class="top-space">おさまらぬ<mark>ミネルウァ</mark>は、老婆に変装する。</li>
  <li>こめかみのあたりににせの白髪を植えつけ、衰えたからだを杖で支えたりもしている。</li>
  <li>それからこう口をきった。</li>
  <li>
    <p class="conversation">「わたしの忠告を無にしてはならないよ。
    世に<ruby>機<rp>（</rp><rt>はた</rt><rp>）</rp></ruby>織りの高名を求めるのもよい。</p>
  </li>
  <li>
    <p class="conversation">が、女神には一歩を譲らねば！</p>
  </li>
  <li>
    <p class="conversation">これ、軽はずみな娘さん、あんたの言葉にたいしては、うやうやしく許しを乞うがよい！</p>
  </li>
  <li>
    <p class="conversation">そうすれば、女神も許しを与えられようから」</p>
  </li>

  <li class="top-space"><mark>アラクネ</mark>は、彼女をにらみすえると、手にしていた糸を放し、振りあげかけた手をとどめかねながら、怒りの色を顔にあらわして、こう女神に答えた。</li>
  <li>
    <p class="conversation">「よくもいらしたのね、そんなにも、もうろくして、老いさらばえていながら！</p>
  </li>
  <li>
    <p class="conversation">長生きしすぎるのも、どうかと思うわ。</p>
  </li>
  <li>
    <p class="conversation">嫁か、娘さんはいないの？</p>
  </li>
  <li>
    <p class="conversation">そんなお説教は、その人たちにするがいいわ！</p>
  </li>
  <li>
    <p class="conversation">わたしに忠告ですってね。</p>
  </li>
  <li>
    <p class="conversation">それなら、いくらでも、自分で出来るの。</p>
  </li>
  <li value="40">
    <p class="conversation">お説教が役に立ったなんて、思わないで！</p>
  </li>
  <li>
    <p class="conversation">わたしの考えには、変わりがないのだから。</p>
  </li>
  <li>
    <p class="conversation">でも、女神さまはどうしてご自分で来ないの？</p>
  </li>
  <li>
    <p class="conversation">わざ比べを避けるのは、なぜなの？」</p>
  </li>

  <li class="top-space">そこで、女神は、</li>
  <li>
    <p class="conversation">「もうおいでになっているのだよ！」</p>
  </li>

  <li class="top-space">といいながら、老婆の姿をぬぎ捨てて、女神の姿を現わした。</li>
  <li><ruby>妖精<rp>（</rp><rt>ニンフ</rt><rp>）</rp></ruby>たちも、リュディアの女たちも、この神をおがめている。</li>
  <li>が、<mark>アラクネ</mark>だけは平然たるものだ。</li>
  <li>もっとも、顔が赤くはなった。</li>
  <li>おもわず、さっと、朱の色が
  <ruby>頬<rp>（</rp><rt>ほお</rt><rp>）</rp></ruby>を染めたのだが、すぐにまた、肖えた。</li>
  <li>「<ruby>曙<rp>（</rp><rt>アウロラ</rt><rp>）</rp></ruby>」が現われはじめると、空は<ruby>紅<rp>（</rp><rt>くれない</rt><rp>）</rp></ruby>を帯びるが、やがて、日がのぼると、白い輝きに変わってゆくようなものだ。</li>

  <li class="top-space"><mark>アラクネ</mark>は、心を変えなかった。</li>
  <li>愚かな勝利を夢見ながら、みずからの破滅へと急ぐのだ。</li>

  <li class="top-space">時を移さず、ふたりは別々の場所に陳取って、<ruby>機<rp>（</rp><rt>はた</rt><rp>）</rp></ruby>を<ruby>据<rp>（</rp><rt>すえ</rt><rp>）</rp></ruby>、細い縦糸をそれに張った。</li>
  <li>巻き軸に結ばれた縦糸を、<ruby>葦<rp>（</rp><rt>あし</rt><rp>）</rp></ruby>の茎がより分ける。</li>
  <li>指が送り出す横糸が、鋭い<ruby>梭<rp>（</rp><rt>ひ</rt><rp>）</rp></ruby>によって、縦糸のあいだヘ通される。</li>
  <li>通されたところへ、<ruby>筬<rp>（</rp><rt>おさ</rt><rp>）</rp></ruby>うちおろされて、ギザギザになったその歯が糸をたたく。</li>
  <li>ふたりとも仕事を急いだ。</li>
  <li>帯を胸まであげて着物をたくしあげ、巧みな腕を動かしている。</li>
  <li value="60">精を出すあまり、苦労も苦労ではなかった。</li>

  <li class="top-space">そこには、テュロスの釜で染められた<ruby>緋<rp>（</rp><rt>ひ</rt><rp>）</rp></ruby>の色が、そして、少しずつ徴妙に異なった。</li>
  <li>いっそうおだやかな色あいが織られている。</li>
  <li>日の光が雨滴にぶつかると、虹が大きな弧をえがいて、空のひろがりを彩ることがよくある。
  異なったたくさんの色が輝きはするが、しかし、色から色への移り目そのものは、見るひとにもはっきりしない。</li>
  <li>ちょうどそれと同じように、いまのばあいも、隣りあったところでは同じような色に見えるのだが、端と端では違っている。</li>
  <li>さらに、そこには、しなやかな糸となる黄金が、織りまぜられてもいて、全体では、古い物語が織り出されているのだ。</li>

  <li class="top-space"><mark>ミネルウァ</mark>女神は、アテナイの「<ruby>軍神<rp>（</rp><rt>マルス</rt><rp>）</rp></ruby>の丘」と、誰にちなんでこの地を命名するかという古い争いを描き出している。</li>
  <li>十二<ruby>柱<rp>（</rp><rt>ばしら</rt><rp>）</rp></ruby>の神々が、ユピテルを中央に、威風あたりを払って<ruby>高<rp>（</rp><rt>たか</rt><rp>）</rp>御<rp>（</rp><rt>み</rt><rp>）</rp>座<rp>（</rp><rt>くら</rt><rp>）</rp></ruby>にすわっている。</li>
  <li>それぞれの神々には、固有の姿が与えられている。</li>
  <li>ユピテルには、王者の威容がある。</li>

  <li class="top-space">海の神ネプトゥーヌスは、すっくと立って、長い<ruby>三<rp>（</rp><rt>みつ</rt><rp>）</rp>叉<rp>（</rp><rt>また</rt><rp>）</rp>鉾<rp>（</rp><rt>ぼこ</rt><rp>）</rp></ruby>で荒岩を打っている。</li>
  <li>岩の裂け目の真ん中から海水がほとばしっているが、海神は、これをおのれの力の<ruby>証<rp>（</rp><rt>あかし</rt><rp>）</rp></ruby>として、この都をわがものにしようというのだ。</li>
  <li>そこに描かれている<mark>ミネルウァ</mark>自身は、<ruby>盾<rp>（</rp><rt>たて</rt><rp>）</rp></ruby>と、穂先鋭い槍を持っている。</li>
  <li>頭には<ruby>兜<rp>（</rp><rt>かぶと</rt><rp>）</rp></ruby>をいただき、胸に<ruby>神盾<rp>（</rp><rt>アイギス</rt><rp>）</rp></ruby>で守られている。</li>
  <li value="80">槍で大地を打つと、そこから、実をつけた薄あおいオリーブの若木が生え出て、諸神たちも驚きを禁じえない――そういう図柄だ。</li>
  <li>仕事の最後は、<mark>ミネルウァ</mark>をたたえている「勝利の女神」ということになる。</li>
  <li>だが、<mark>ミネルウァ</mark>としては、ほまれを競いあっている相手に知らせたいことがあった。</li>

  <li class="top-space">かくも狂気じみた蛮勇からはどんな報いを覚悟すべきかを、先例によって教えようとおもったのだ。</li>
  <li>だから、四隅に、神への敵対行為の四つの物語をつけ加え、それぞれの色で目立たせて、細かな図柄をそれらに配した。</li>

  <li class="top-space">第一の隅には、トラキア生まれのハイモスとロドペを描く。
  今では、寒風すさぶ山となっているが、かつて人間であった、自分たちをユピテルとユノーと呼んだ兄妹だ。</li>
  <li>第二の隅には、ピグミー族の女ゲラナの悲運が描かれる。</li>
  <li>人の子の母でもあった彼女だが、神々と争おうとして、<ruby>挫<rp>（</rp><rt>くじ</rt><rp>）</rp></ruby>かれた。</li>
  <li>ユノーによって鶴に変えられたうえ、祖国の人たちとも敵対関係をもつはめとなったのだ。</li>
  <li>つぎは、トロイアの女王アンティゴネだ。</li>
  <li>むこう見ずにも、大神ユピテルの<ruby>后<rp>（</rp><rt>きざき</rt><rp>）</rp></ruby>と争おうとして、女王ユノーによって島に変身させられた。</li>
  <li>名にし負う祖国も、父王ラオメドンも、彼女には何の助けにもならなかった。</li>
  <li>げんに、彼女は、白い翼に包まれた身となっている。</li>
  <li>いまも、かたかたと<ruby>嘴<rp>（</rp><rt>くちばし</rt><rp>）</rp></ruby>を鳴らすことで自分の美しさに、<ruby>喝<rp>（</rp><rt>かつ</rt><rp>）</rp>采<rp>（</rp><rt>さい</rt><rp>）</rp></ruby>を送っているかのような、あのこうのとりが彼女なのだ。</li>
  <li>最後に残った一隅は、娘たちを亡くしたキニュラスを描いている。</li>
  <li value="100">もとは娘たちのからだであった、神殿の<ruby>階<rp>（</rp><rt>きざはし</rt><rp>）</rp></ruby>を抱きしめながら、石のうえに<ruby>臥<rp>（</rp><rt>ふ</rt><rp>）</rp></ruby>して泣いているのが見られる。</li>
  <li>いちばん外側を、平和の象徴であるオリーブの枝で囲むと、これで出来あがりだ。</li>
  <li>女神は、自分にゆかりの木によって、最後の仕上げをしたことになる。</li>

  <li class="top-space">いっぽう、<mark>アラクネ</mark>が織っているのは、まず、雄牛姿のユピテルに<ruby>欺<rp>（</rp><rt>あざむ</rt><rp>）</rp></ruby>かれたエウロペの図だ。</li>
  <li>雄牛も、海も、まるでほんものとおもえるくらいだ。</li>
  <li>エウロペ自身はうしろに残した陸地を見やりながら、仲間たちに呼びかけている<ruby>風<rp>（</rp><rt>ふ</rt><rp>）</rp>情<rp>（</rp><rt>ぜい</rt><rp>）</rp></ruby>だ。</li>

  <li>寄せる波に濡れないように、おずおずと足を引っこめている。</li>
  <li class="top-space">つぎに、アステリエ。</li>
  <li>彼女は、身をくねらせた<ruby>鷲<rp>（</rp><rt>わし</rt><rp>）</rp></ruby>につかまえられている。</li>
  <li>それから、レダ。</li>
  <li>これは、白鳥の翼のしたに臥している。</li>
  <li><mark>アラクネ</mark>は、織り進む。</li>

  <li class="top-space">ユピテルが、こんどは<ruby>獣神<rp>（</rp><rt>サテユロス</rt><rp>）</rp></ruby>に身をやつして、美しいアンティオペに双生児を身ざもらせたこと、アンピトリオンになりすまして、その妻アルクメネを欺いたこと、黄金の雨となってタナエを、火炎となってアイギナを、羊飼いとなってムネモシュネを、まだらの蛇となってプロゼルピナを、だましたこと――そんな場面が加えられてゆく。</li>

  <li class="top-space">海神ネプトゥーヌスも、あらあらしい雄牛に変じて、アイロスの娘を<ruby>籠<rp>（</rp><rt>ろう</rt><rp>）</rp>絡<rp>（</rp><rt>らく</rt><rp>）</rp></ruby>し、河神エニペウスの姿でアロエウスの妻を身ごもらせ、雄牛となってビサルテスの娘をたぶらした。</li>
  <li value="120">恵み深いみのりの母、金髪の<ruby>豊穣神<rp>（</rp><rt>ケレス</rt><rp>）</rp></ruby>には、馬となって近づき、天馬ペガソスの母、蛇髪のメドゥーサには、鳥となって、あのメラントーには、<ruby>海豚<rp>（</rp><rt>いるか</rt><rp>）</rp></ruby>となって近づいた――これらのばあい、すべての人物たちにその特徴的な姿が与えられ、ふさわしい背景が加えられている。</li>

  <li class="top-space">そこには、アポロンも登場する。</li>
  <li>野人の姿をしているかと思もうと、<ruby>隼<rp>（</rp><rt>はやぶさ</rt><rp>）</rp></ruby>の翼に包まれたり、<ruby>獅孑<rp>（</rp><rt>しし</rt><rp>）</rp></ruby>の皮をかぶったりもしている。</li>
  <li>マカレウスの娘イッセをだましたときは、羊飼いに化けてもいた。</li>
  <li>酒神バッコスも、にせの葡萄でエリゴネを欺き、サトゥルヌスも、馬に身を変えて、半人半馬のケイロンを生んだのだ――これらが<mark>アラクネ</mark>の織り模様だった。</li>

  <li class="top-space">織物の外回りは、細い縁どりで囲まれていて、からんだ<ruby>常<rp>（</rp><rt>キ</rt><rp>）</rp>春<rp>（</rp><rt>ヅ</rt><rp>）</rp>藤<rp>（</rp><rt>タ</rt><rp>）</rp></ruby>と、花々が織りまぜられている。</li>

  <li class="top-space"><mark>ミネルウァ</mark>女神も、「<ruby>羨<rp>（</rp><rt>せん</rt><rp>）</rp>望<rp>（</rp><rt>ぼう</rt><rp>）</rp></ruby>」の神も、この作品に<ruby>難<rp>（</rp><rt>なん</rt><rp>）</rp>癖<rp>（</rp><rt>くせ</rt><rp>）</rp></ruby>をつけることはできなかったろう。</li>
  <li>男まさりの、金髪の女神には、その出来ばえが<ruby>癪<rp>（</rp><rt>しゃく</rt><rp>）</rp></ruby>にさわった。</li>

  <li value="130" class="top-space">神々の非行を描いたこの織物を引きちぎると、手にしていたキュトロス産の<ruby>黄楊<rp>（</rp><rt>つげ</rt><rp>）</rp></ruby>の<ruby>梭<rp>（</rp><rt>ひ</rt><rp>）</rp></ruby>で、三度、四度と、<mark>アラクネ</mark>の<ruby>額<rp>（</rp><rt>ひたい</rt><rp>）</rp></ruby>を打った。</li>
  <li>かわいそうな<mark>アラクネ</mark>は、ころえきれないで、ひと思いに首をくくったった。</li>
  <li>哀れを催した<mark>ミネルウァ</mark>は、ぶらさがっている彼女を抱き上げて、こういった。</li>
  <li>
    <p class="conversation">「腹ぐらい娘さん、生きてたけおいで！</p>
  </li>
  <li>
    <p class="conversation">でも、ぶらさがったままでいるのよ！</p>
  </li>
  <li>
    <p class="conversation">先のことも、安心してはならないね。</p>
  </li>
  <li>
    <p class="conversation">おまえさんの一族には、末ながく、同じ懲罰を残しておくのだから」</p>
  </li>

  <li class="top-space">こういって、立ち去ろうとしながら、魔法の草の汁を彼女にふりかけた。</li>
  <li value="140">と、たちまちに、不吉な毒薬に触れた髪の毛が、脱け落ちた。</li>
  <li>それとともに、鼻も、両耳も落ちる。</li>
  <li>そして、頭がたいそう小さくなる。</li>
  <li>からだ全体も、ちっぽけなものとなった。</li>
  <li>脇腹に、やせこけた指がついていて、脚の代りをする。</li>
  <li>あとは、腹ばかりだが、今もその腹から糸を吐いて、むかしどおり<ruby>機<rp>（</rp><rt>はた</rt><rp>）</rp></ruby>織りに励んでいる。</li>
  <li value="140">彼女は<ruby>蜘<rp>（</rp><rt>く</rt><rp>）</rp>蛛<rp>（</rp><rt>も</rt><rp>）</rp></ruby>になったのだ。</li>
</ol>

<footer>
  <p><span style="color: #b52b27;">オウィディウス、<cite>変身物語</cite>、第六巻１行から１４０行までより</span></p>
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