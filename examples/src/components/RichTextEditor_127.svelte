<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:159 EN:190  -->
<!-- Page 1 -->

<article>

<hgroup>
<h2 class="yellow"><ruby lang="ja">ヘラクレスの間<rp>（</rp><rt lang="fr">le&#160;Salon&#160;d&#39;Hercule</rt><rp>）</rp></ruby>での</h2>
<h1 class="blue"><cite><ruby lang="ja" style="color:#555;">ヘラクレスの<wbr>神格化<rt lang="fr" style="color:#999;">Apothéose d&#39;Hercule</rt></ruby></cite></h1>
</hgroup>

<figure>
  <picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule_700x573.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-1920.webp 1920w" type="image/webp"><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus_700x573.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-840.webp 840w" type="image/webp"><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule_700x562.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/https://francois-vidit.comhercule-1920.jpg 1920w"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus_700x562.jpg" alt="フランソワ・ルモワーヌ作《ヘラクレスの神格化》、ヘラクレスの間、ヴェルサイユ宮殿" title="フランソワ・ルモワーヌ作《ヘラクレスの神格化》、ヘラクレスの間、ヴェルサイユ宮殿" width="700" height="562" loading="eager" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus_700x562.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-840.jpg 840w"></picture><figcaption>フランソワ・ルモワーヌ作《<cite>ヘラクレスの神格化</cite>》</figcaption>
</figure>

<div class="notices blue">
<p><time datetime="1736-09-26">１７３６年の９月２６日</time>、<a href="https://ja.wikipedia.org/wiki/ヴェルサイユ宮殿" title="https://ja.wikipedia.org/wiki/ヴェルサイユ宮殿">ヴェルサイユ宮殿</a>で、<a href="https://ja.wikipedia.org/wiki/ルイ15世_(フランス王)" title="https://ja.wikipedia.org/wiki/ルイ１５世 (フランス王)"><ruby lang="ja">ルイ<rp>(</rp><rt lang="fr">Louis</rt><rp>)</rp>十五世<rp>(</rp><rt lang="fr">quize</rt><rp>)</rp></ruby>世</a>により、新たに改装された<ruby lang="ja">ヘラクレスの間<rp>(</rp><rt lang="fr">Salon&#160;d&#39;Hercule</rt><rp>)</rp></ruby>のために作られた、この画家<ruby lang="ja">フランソワ<rp>(</rp><rt lang="fr">François</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ルモワーヌ<rp>(</rp><rt lang="fr">Lemoyne</rt><rp>)</rp></ruby>の作品《<cite><ruby lang="ja">ヘラクレスの神格化<rp>(</rp><rt lang="fr">L&#39;Apothéose&#160;d&#39;Hercule</rt><rp>)</rp></ruby></cite>》が除幕されました。</p>
<p>これを切っ掛けに、文芸誌「<a href="https://ja.wikipedia.org/wiki/メルキュール・ド・フランス" title="https://ja.wikipedia.org/wiki/メルキュール・ド・フランス"><ruby lang="ja">ル<rp>(</rp><rt lang="fr">Le</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>メルキュール<rp>(</rp><rt lang="fr">Mercure</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ド<rp>(</rp><rt lang="fr">De</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>フランス<rp>(</rp><rt lang="fr">France</rt><rp>)</rp></ruby></a>」が、この注文を受ける条件について、または構図の詳細を教えてくれる、おそらく画家自身によって書かれた特別なテキストを出版しました。
以下の文書はこのテキストです。</p>
<p>この画家の作品は、文書が明らかにしてくれてる多くの理由で例外であり、特に彼の最後の中の一つの作品は特別です。</p>
<p>なにしろ、芸術家は<time datetime="1737-06-04">１７３７年の６月４日</time>にこの作品完成させた少し後に、自分の人生を終わりにして、パリのアパートで自分を剣で何回か刺して...</p>
<p>それなのに、今までまだ翻訳されてはいませんでした。
いろんな方々に声を掛けて、いろいろ協力して頂いたおかげで、以下の文書が出来あがりました。
よく読むと、文書のところどころに、画家本人の言葉に疲れが溢れることも見えて来ると思われます。</p>
<p>また、文書のおかげで、作品の圧倒的さを乗り越えて、少しでも、《<cite>ヘラクレスの神格化</cite>》の中に入って、英雄本人の側から、画家本人の言葉の導きで案内されているかのような気分にもなれれば、より身近に自分で作品の評価を分かち合えることもできるでしょう！</p>
</div>

<aside>

<div class="notices green">
<p>文書の理解を容易にするためには、リンクを文書と言葉で指定されている作品の部分との間に作りました。ある単語をクリックすると、それを指す作品の部分へ移動されます。逆にでも、作品の一部をクリックすると、文書の中の単語へ移されることになります.</p>
</div>
<div class="notices green">
<dl>
<dt>ブローサーでの周囲の表示について:</dt>
<dd>テキストの中に指されている作品の一部の周囲をを表示させることが、このページを読むためにクロムに基づくブローサーを利用すれば、可能です。ただし、クロムには、ブラウジングをしての情報がグーグル社のためトラッカーに含まれているため、クロムに基づいていてしかもトラッカーが取り除かれた優れたブラウザ、<a href="https://www.srware.net/en/software_srware_iron_download.php" title="https://www.srware.net/en/software_srware_iron_download.php">エス・エル・ヴェール・アイロン</a>をお勧めします（アンドロイドの携帯の場合、エス・エル・ヴェール・アイロンのアプリ―が<a href="https://play.google.com/store/apps/details?hl=ja" title="https://play.google.com/store/apps/details?id=org.iron.srware&hl=ja" id="org.iron.srware">こちら...</a>）。</dd>
</dl>
</div>

</aside>

<h2 class="blue">ヴェルサイユ宮殿にある控えの間、王の礼拝堂の前で「大理石の大広間」と呼ばれている部屋の天井画</h2>

<p>私たちが<time datetime="P728D">ニ年以上前</time>から関わっているメルクール・ド・フランスは、
ずっと芸術を称賛することに特別な考慮を払ってきたにも関わらず、</p>
<p>今日見えてきた機会より素晴らしいものがなく、
その栄光を広めるため、民衆の目にさらされたこの油彩の大作について触れる機会を逸したら、何ひとつしなかったこととなるでしょう。
このかけがえのない機会は、今世紀に我々の学派がもっと例証すべきものであり、後世のルイ十五世統治下でのフランス絵画の発展を立証する輝かしい記念物の役割を果すことでもあります。</p>
<p><span style="color: #28a1c5;"><mark>ヘラクレス</mark>の神格化</span>が、この絶大な素晴らしい構図の題材となっています。</p>
<p>パリ出身で、王立絵画彫刻アカデミー講師、同アカデミーの講師ガロシュ氏の生徒である<span style="color: #28a1c5;">フランソワ・ルモワーヌは、王の命令により四年前から</span>フランス大貴族、陛下諸騎士団所属騎士、オルレアネー公領監督、国務大臣、王室造営物総監、賢明な芸術庇護者、いつもその発展に協力することに特別な協力をしてきた<ruby lang="ja" style="color:#28a1c5;">アンタン公爵<rp>(</rp><rt lang="fr" style="font-size: 70%;color:#28a1c5">le Duc d'Antin</rt><rp>)</rp></ruby><span style="color: #28a1c5;">の指導下で手掛けてきた</span>。</p>
<p><span style="color: #28a1c5;"><time datetime="1736-09-26">９月２６日水曜日</time></span>、大作をお披露目する運命の日、王がミサに行くための通路にその控えの間はあった。</p>
<p>陛下は殿様たち、フルーリ枢機卿とその他の家臣たちに付き添われ、とても大勢の群衆を彼方から引き連れてきた。</p>
<p>そこには長く立ち止まり、ミサの帰りにもさらに長く留まった。
<span style="color: #28a1c5;">王は</span>個々の構成を細かい部分、とりわけ、組ごとの違い、デッサン、色、全体の魅力的な効果まで鑑賞されました。</p>
<p>陛下は、審美眼の繊細さと絵画と芸術への嗜好もよく知られているとおり、
ルモワーヌ氏の才能と美的意識を大いに誉め称えた後に、
<span style="color: #28a1c5;">すぐさま彼を国王付第一画家に</span>、宮廷全員と好奇心でヴェルサイユに引き寄せられた数えきれない見物人の拍手の中、<span style="color: #28a1c5;">任命しました</span>。</p>
<p>それにより、毎日、見物人の人数は減らず、この偉大な構図の出来映えを称賛するまでに増え続けている。</p>
<p>名高い<ruby lang="ja">ル<rp>(</rp><rt lang="fr">Le</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ブラン<rp>(</rp><rt lang="fr">Brun</rt><rp>)</rp></ruby>によって描かれた<a href="#note_grandegallerie" title="大回廊" id="grandegallerie">大回廊</a>の一番大きな部分でも、この作品の元の半分よりも大きくありません。</p>

<!-- page 2 -->

<p><span style="color: #28a1c5;">以下は描写です。</span></p>
<p>この天井は長さが６４<a href="#note_pieds" title="「ピエ」という長さの単位の定義" id="pieds"><ruby lang="ja">ピエ<rp>(</rp><rt lang="fr">pieds</rt><rp>)</rp></ruby></a>、幅が４８ピエ、コーニスから頂点までの奥行きが８.５ピエ。</p>
<p><a href="#note_attique" title="アティック" id="attique">アティック</a>の絵の中の人物らは１０から１１ピエの大きさ。</p>
<p>作品全体で、１４２体が数えられ、
化粧漆喰で見せかけのものを約３０体を含めると、</p>
<p>主要な組をざっと見渡すと、６２体見えます。</p>
<p><span style="color: #28a1c5;">作品全体は以下の考えに基づきます。</span></p>
<p>美徳の愛は人が自分自身に勝るように、そしてそれは最も困難で危険な功績よりも優れたものにさせてくれます。
王と祖国の利害の観点から妨げが消え去り、
名誉に支えられ、忠実に導かれ、
彼はその行動によって不死にたどり着きます。</p>
<p><span style="color: #28a1c5;"><mark>ヘラクレス</mark>の神格化がこの固有の考えを発展させることに適切だと見られます。</span></p>
<p>この英雄は、自分の人生において高潔で英雄的な行動によってその名を不滅にすることにしか専念しませんでした。</p>
<p>それで、彼が地上で<ruby>似姿<rp>(</rp><rt>にすがた</rt><rp>)</rp></ruby>となっていたユピテルが、天でその功績に不死を与えることで冠します。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-640.jpg" alt="フランソワ・ルモワーヌ作、《ヘラクレスは、》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" title="フランソワ・ルモワーヌ作、《美徳の愛によってユピテルに紹介されている》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" width="640" height="835" loading="lazy" decoding="async" usemap="#img_hercule1" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1920.jpg 1920w"></picture><figcaption><q cite="#hercule" style="quotes:'「' '」';">
  美徳の愛によってユピテルに紹介されているヘラクレス</q></figcaption>
</figure>
<map name="img_hercule1" id="img_hercule1"><area id="area_hercule" alt="ヘラクレス" title="ヘラクレス" href="#hercule" shape="poly" coords="356,424,358,406,346,393,339,387,345,377,355,384,367,397,366,384,374,381,388,361,382,356,383,349,386,338,394,334,406,338,408,348,415,350,422,371,430,384,429,398,425,404,417,416,440,434,436,445,427,444,414,430,410,437,413,450,404,448,397,453,392,443,375,432"><area id="area_jupiter" alt="ユピテル" title="ユピテル" href="#jupiter" shape="poly" coords="187,347,190,335,190,328,199,328,208,316,214,316,211,309,202,317,190,311,180,302,172,301,187,296,194,303,200,303,208,295,220,292,220,286,224,283,228,276,236,276,244,285,244,292,239,297,243,300,258,311,272,314,291,319,297,324,290,325,283,332,282,342,278,347,263,345,250,349,243,355,239,362,238,367,223,359,209,356,198,353"><area id="area_amourdelavertu" alt="美徳の愛" title="美徳の愛" href="#amourdelavertu" shape="poly" coords="348,421,343,423,335,423,326,418,318,409,306,409,299,398,302,385,296,379,287,383,274,386,270,380,278,369,286,365,295,365,301,369,305,365,299,360,299,350,306,346,313,345,319,349,319,360,320,366,326,364,330,356,342,354,348,355,353,361,351,370,343,372,337,380,336,389,340,396,341,406,345,416"><area id="area_geniesdelamour" alt="美徳の愛の精たち" title="美徳の愛の精たち" href="#geniesdelamour" shape="poly" coords="346,507,336,516,328,514,321,507,319,500,308,492,302,479,289,473,290,460,297,468,302,466,303,457,299,450,293,454,284,454,285,465,288,481,285,486,279,477,275,462,271,455,269,463,265,467,262,461,258,467,256,453,260,441,263,436,257,431,243,423,241,412,246,407,250,414,255,417,260,415,256,406,260,401,268,400,271,408,279,399,286,399,293,402,290,409,298,414,304,416,307,421,314,421,321,422,324,427,316,426,310,428,312,434,317,432,323,434,327,436,323,440,321,445,325,449,330,456,336,462,327,464,316,465,310,469,316,475,320,477,326,483,331,484,336,490,342,494,345,498"><area id="area_lesmonstresetlesvices" alt="怪物たちと悪行たち" title="怪物たちと悪行たち" href="#lesmonstresetlesvices" shape="poly" coords="394,467,394,476,399,481,407,483,411,476,415,488,407,492,400,497,394,500,390,505,383,513,379,519,372,523,365,519,372,512,367,508,373,503,358,503,350,506,344,512,340,521,341,531,346,534,348,540,344,553,340,564,338,573,340,579,345,581,352,577,356,570,358,577,362,584,372,599,379,597,394,605,399,610,396,617,389,622,387,611,381,605,359,607,354,602,356,593,351,589,344,595,341,608,344,614,352,613,362,623,371,622,370,632,361,638,352,645,346,654,346,664,348,679,354,691,361,693,368,696,377,701,394,703,400,705,408,710,420,713,433,713,450,718,463,717,475,707,483,702,490,695,494,690,490,684,494,668,488,687,482,685,478,693,471,701,454,705,456,695,457,688,452,681,443,680,435,689,437,678,444,665,437,648,432,640,440,642,447,637,453,637,463,640,474,640,485,639,481,650,482,662,485,670,494,662,496,656,508,656,514,655,513,663,509,670,512,676,516,679,521,681,521,686,512,686,517,694,526,699,537,700,540,693,541,686,551,690,562,693,575,696,587,707,596,730,605,724,596,704,585,686,578,684,568,682,572,675,580,674,586,672,577,662,565,654,553,644,545,633,547,627,538,617,525,609,515,607,517,598,515,589,509,582,500,590,490,601,481,606,478,592,480,585,478,577,480,568,489,560,492,550,490,541,489,532,483,538,477,545,472,553,464,552,458,546,461,536,456,526,468,524,472,517,479,516,465,507,459,513,451,513,442,515,440,522,435,525,427,523,432,514,432,502,431,490,423,489,419,494,412,494,416,481,416,474,410,468,404,474,398,470"><area id="area_hebe" alt="ヘべー" title="ヘべー" href="#hebe" shape="poly" coords="109,374,116,358,125,351,120,345,125,328,121,321,121,307,129,296,123,298,122,291,137,270,143,269,146,268,144,263,150,257,157,257,162,260,167,265,162,269,161,273,155,275,156,281,157,286,161,290,173,294,179,293,191,295,193,298,186,299,179,299,174,302,175,305,173,311,170,317,168,325,169,338,169,343,165,346,157,347,148,348,143,355,143,363,144,369,138,368,133,364,126,365,121,369,116,373"><area id="area_hymen" alt="ヒュメーン" title="ヒュメーン" href="#hymen" shape="poly" coords="122,291,126,281,137,267,140,270,143,268,141,264,145,258,153,254,160,258,165,262,162,267,157,272,153,276,161,287,167,284,167,280,178,278,185,273,192,264,209,264,219,257,229,254,232,248,238,248,240,241,249,231,226,235,225,223,232,216,221,210,217,216,215,226,219,232,215,240,202,242,199,227,192,219,182,214,173,210,165,205,158,211,152,214,137,209,122,200,115,202,121,212,127,220,136,227,139,232,134,243,135,252,128,249,118,254,112,260,109,266,115,272,121,267,123,272,118,279,113,275,103,279,98,282,101,287,89,297,85,303,91,305,102,296,109,291,116,293"></map>

<p><span style="color: #28a1c5;">以下で題材の一般的な筋が示されています。</span></p>
<p><a href="#area_hercule" title="ヘラクレス" id="hercule"><mark>ヘラクレス</mark></a>は、
<a href="#area_amourdelavertu" title="美徳の愛" id="amourdelavertu">美徳の愛</a>によって<a href="#area_jupiter" title="ユピテル" id="jupiter">ユピテル</a>に紹介され、
ある戦車の中で<a href="#area_geniesdelamour" title="美徳の愛の精たち" id="geniesdelamour">同じ愛の精たち</a>に引っ張られています。</p>
<p><a href="#area_lesmonstresetlesvices" title="怪物たちと悪行たち" id="lesmonstresetlesvices">怪物たちと悪行たち</a>は
この英雄の能力で飼いならされ、彼の栄光に耐えられず、ひっくり返され、
その体に致命傷を負わすために、またムダな努力ではありますが自分から飛び込もうとしています。</p>
<p>ユピテルは彼に<a href="#area_hymen" title="ヒュメーン" id="hymen">ヒュメーン</a>に導かれている若さの神である<a href="#area_hebe" title="ヘべー" id="hebe">ヘべー</a>を紹介しています。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-640.jpg" alt="フランソワ・ルモワーヌ作、《アポロンが九人の姉妹たちを誘う》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" title="フランソワ・ルモワーヌ作、《アポロンが九人の姉妹たちを誘う》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" width="640" height="715" loading="lazy" decoding="async" usemap="#img_hercule2" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1920.jpg 1920w"></picture><figcaption><q cite="#apollon" style="quotes:'「' '」';">アポロンが九人の姉妹たちに勲功とヘラクレスの神格化をたたえるように誘います</q></figcaption>
</figure>
<map name="img_hercule2" id="img_hercule2"><area id="area_apollon" alt="アポロン" title="アポロン" href="#apollon" shape="poly" coords="322,347,331,337,343,337,339,330,346,323,349,313,339,316,331,315,327,309,317,313,311,306,315,302,311,297,315,289,328,292,322,281,323,273,329,272,334,281,340,286,347,286,368,292,373,287,380,285,386,287,391,293,389,299,384,303,377,307,381,313,389,320,395,312,403,315,398,326,406,337,402,345,409,356,421,363,416,366,401,363,401,357,389,347,389,354,381,353,371,343,361,341,350,341,340,342,336,345,330,348"><area id="area_lesneufsoeurs" alt="九人の姉妹たち" title="九人の姉妹たち" href="#lesneufsoeurs" shape="poly" coords="226,506,226,493,241,482,249,484,258,471,276,436,268,436,273,425,283,429,292,422,301,420,313,406,317,406,319,403,314,391,317,383,327,378,334,380,339,385,339,395,343,399,348,394,349,386,346,378,341,377,345,370,355,374,359,372,361,366,367,362,376,362,382,368,378,377,386,376,394,376,397,382,395,396,401,396,406,400,412,398,412,383,418,376,425,376,428,382,427,392,434,395,437,386,449,381,442,378,443,368,451,363,459,366,461,380,477,377,483,379,489,378,491,370,500,367,503,372,501,378,497,382,493,393,487,397,479,398,481,406,486,411,491,406,502,413,508,420,505,426,491,427,502,438,517,448,526,444,533,452,536,453,537,444,536,430,531,422,531,404,535,412,541,413,541,420,561,432,567,434,567,423,561,414,562,406,555,405,550,408,546,394,551,386,560,386,573,394,577,387,586,380,577,372,575,364,560,367,549,369,534,368,530,362,528,356,513,347,503,348,489,347,484,342,491,341,499,341,505,338,507,334,496,322,480,321,473,318,474,307,481,303,488,302,494,306,498,300,515,300,524,303,535,298,540,300,548,296,559,296,575,302,575,310,569,319,564,328,557,332,569,330,577,332,573,336,583,334,585,341,590,347,591,355,593,362,597,352,606,356,607,362,605,368,610,372,616,376,623,372,639,366,637,463,629,469,611,464,597,465,568,472,569,480,566,487,555,488,535,482,526,464,517,460,513,453,517,449,503,439,495,441,483,436,475,431,466,435,458,438,447,441,439,442,430,440,421,444,413,446,428,452,434,458,438,468,438,477,447,478,463,486,463,492,449,487,453,492,459,497,472,500,461,507,443,500,443,507,423,505,407,504,398,508,391,520,384,524,380,509,365,501,367,490,370,482,365,477,350,481,334,497,325,497,335,481,335,472,329,481,317,481,305,486,299,482,294,475,283,475,281,482,273,491,279,496,263,504,259,498,249,500,237,503"><area id="area_letempledelamemoire" alt="記憶の神殿" title="記憶の神殿" href="#letempledelamemoire" shape="poly" coords="153,299,150,289,156,274,164,272,169,266,160,258,161,248,169,243,204,231,208,238,222,233,239,229,252,227,267,229,279,232,297,241,302,231,325,237,350,250,348,255,339,267,342,275,339,281,331,280,328,274,319,272,322,283,327,290,322,292,314,288,313,298,313,304,315,311,323,311,329,313,337,313,347,313,346,324,341,330,339,336,331,334,318,332,311,334,297,338,289,344,289,350,280,353,274,346,263,348,257,348,255,342,247,337,238,339,235,334,228,336,218,336,211,336,203,336,202,329,192,327,184,325,176,323,169,323,166,314,161,304"></map>

<p><span style="color: #28a1c5;">反対側に</span>
<a href="#area_apollon" title="アポロン" id="apollon">アポロン</a>がおり、
<a href="#area_lesneufsoeurs" title="九人の姉妹たち" id="lesneufsoeurs">九人の姉妹たち</a>に、勲功と新しい神の神格化をたたえるように誘います。</p>
<p>アポロンの後ろには<a href="#area_letempledelamemoire" title="記憶の神殿" id="letempledelamemoire">記憶の神殿</a>があります。</p>
<p><span style="color: #28a1c5;">コーニスの上に</span>、
周囲に主題を囲むアティックが続き、
それは金で飾られた装飾額縁の真ん中に描かれており、
白い大理石の彫刻には<mark>ヘラクレス</mark>の主な冒険が付随しています。</p>
<p><span style="color: #28a1c5;">アティックの角には</span>、
石台の上に、同じく見せかけと見えるように、四人の美徳がいます。</p>
<p>この美徳は、力、粘り強さ、価値、正義です。</p>
<p>これらは特に<mark>ヘラクレス</mark>の性格を表しています。</p>
<p><span style="color: #28a1c5;">これ以外に構図が九つの組に配置されています。</span></p>

  <figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-640.jpg" alt="フランソワ・ルモワーヌ作、《ユピテルの衛星たちに支えられている幕の下で》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" title="フランソワ・ルモワーヌ作、《ユピテルの衛星たちに支えられている幕の下で》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" width="640" height="826" loading="lazy" decoding="async" usemap="#img_hercule3" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1920.jpg 1920w"></picture><figcaption><q cite="#lessatellitesdejupiter" style="quotes:'「' '」';">ユピテルの衛星たちに支えられている幕の下で</q></figcaption>
</figure>
<map name="img_hercule3" id="img_hercule3"><area id="area_lessatellitesdejupiter" alt="ユピテルの衛星たち" title="ユピテルの衛星たち" href="#lessatellitesdejupiter" shape="poly" coords="297,386,283,386,283,373,287,368,298,367,304,378,311,378,325,371,345,352,340,347,335,345,333,330,339,321,347,321,354,317,360,319,365,322,372,319,364,325,356,324,359,335,358,341,364,342,371,342,381,347,395,365,395,371,392,376,380,374,369,371,366,362,361,355,355,357,348,357,345,364,341,369,336,374,329,378,319,379,399,466,407,470,411,477,417,480,428,485,437,494,440,502,445,510,449,514,451,526,450,536,455,540,459,534,456,516,457,500,465,485,464,476,470,482,471,485,481,486,483,490,496,496,493,488,491,480,483,474,477,465,477,456,484,462,487,464,489,456,494,451,497,441,498,433,493,424,494,416,498,410,494,402,499,399,502,392,502,383,494,378,499,354,505,354,510,362,509,368,515,376,522,380,523,386,526,392,535,390,542,384,550,385,556,389,559,390,564,399,572,407,582,412,591,417,603,429,613,429,616,423,607,421,601,413,592,410,583,400,578,389,586,388,593,391,599,393,603,402,612,389,607,382,609,373,603,360,593,357,587,344,579,337,563,330,554,330,545,325,535,320,523,320,515,317,510,312,513,310,523,308,530,302,531,291,538,284,538,276,531,279,523,289,514,294,503,296,494,302,488,306,481,305,480,296,471,289,461,292,458,298,461,310,468,312,474,316,475,322,471,328,467,336,467,344,465,350,467,357,463,365,461,374,455,382,460,371,466,372,472,370,478,360,485,358,499,354,494,378,485,383,478,388,476,396,474,402,470,407,470,405,461,411,460,404,458,393,458,388,451,390,449,397,448,406,451,415,442,417,435,421,434,431,428,436,426,444,417,444,413,450,408,452,406,459,399,466,320,380,306,384,306,384,306,384,306,384,306,384,306,384,306,384"><area id="area_junon" alt="ユノ" title="ユノ" href="#junon" shape="poly" coords="292,512,300,493,315,482,324,486,316,488,305,493,298,506,300,514,305,509,313,502,320,498,328,497,336,496,336,490,335,481,339,470,348,466,359,473,361,487,355,493,354,502,362,512,371,521,381,522,392,524,404,533,412,540,419,548,426,557,427,569,426,580,416,583,409,584,403,591,397,596,391,586,393,577,386,567,376,563,367,565,361,570,357,580,350,579,342,577,335,571,336,558,332,553,335,542,341,538,349,533,351,530,343,525,331,523,313,521,304,515,299,514,291,514"><area id="area_laigle" alt="鷲" title="鷲" href="#laigle" shape="poly" coords="278,647,253,631,251,624,247,628,240,621,240,630,220,630,226,642,214,644,203,637,185,644,180,635,176,640,170,633,155,641,147,631,138,616,134,600,139,590,149,597,158,603,165,599,169,582,174,572,187,569,197,572,191,575,189,584,187,593,194,596,203,596,210,590,217,587,226,588,239,591,248,596,257,599,264,602,272,612,281,622,284,633,283,640"><area id="area_ganimede" alt="ガニメデ" title="ガニメデ" href="#ganimede" shape="poly" coords="170,574,175,569,180,565,182,554,184,545,178,538,180,532,184,528,178,523,175,518,160,515,155,521,152,530,150,537,151,547,152,557,152,562,158,564,155,569,162,568"></map>

<p><span style="color: #28a1c5;">第一組としては</span>、</p>
<p><a href="#note_lessatellitesdejupiter" title="ユピテルの衛星たち" id="lessatellitesdejupiter2"><ruby>木星<rp>(</rp><rt>ユピテル</rt><rp>)</rp></ruby>の衛星たち</a>に支えられている幕の下で、
この神が玉座におられて
彼女に婿として前もって与えています。</p>
<p><mark>ヘラクレス</mark>の生涯に関わりが深かった<a href="#area_junon" title="ユノ" id="junon">ユノ</a>は、
これに賛成しているように見えます。
この巧妙な形が、美徳がいつも嫉妬心と欲望を乗り越えることを明らかにしています。
ユピテルの足元に、
雷を受託する<a href="#area_laigle" title="鷲" id="laigle">鷲</a>が見えます。</p>
<p><a href="#note_ganimede" title="ガニメデ" id="ganimede2">ガニメデ</a>はヘーベのそばにいて
女神の幸福を喜んで見ています。</p>

<!-- page 3 -->

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-640.jpg" alt="フランソワ・ルモワーヌ作、《クピドンは美徳の愛を、意地悪で軽蔑的な目で見ています》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" title="フランソワ・ルモワーヌ作、《クピドンは美徳の愛を、意地悪で軽蔑的な目で見ています》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" width="640" height="467" loading="lazy" decoding="async" usemap="#img_hercule4" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1920.jpg 1920w"></picture><figcaption>クピドンは<q cite="#cupidon" style="quotes:'「' '」';">美徳の愛を、意地悪で軽蔑的な目で見ています</q></figcaption>
</figure>
<map name="img_hercule4" id="img_hercule4"><area id="area_bacchus" alt="バックス" title="バックス" href="#bacchus" shape="poly" coords="247,291,251,287,246,276,257,282,252,274,255,266,259,261,267,259,271,256,276,257,279,264,280,274,274,278,270,284,275,286,280,284,285,281,290,286,287,293,287,300,286,308,283,317,278,325,277,331,278,336,277,342,280,347,285,351,289,347,286,341,286,333,292,322,297,318,298,311,304,306,306,299,312,297,319,294,325,291,331,290,337,293,342,297,346,299,346,305,351,305,357,305,363,304,368,303,373,299,368,294,360,295,352,292,344,283,338,279,335,273,329,270,323,273,319,278,321,271,318,265,314,270,311,260,306,252,303,251,305,247,303,241,300,235,293,233,288,237,287,242,283,247,281,248,274,245,267,245,266,250,259,251,255,255,246,263,245,270,245,282"><area id="area_dieupan" alt="パンの神" title="パンの神" href="#dieupan" shape="poly" coords="225,300,231,290,236,281,241,278,243,266,243,272,243,286,247,290,251,286,256,283,256,279,251,274,255,270,257,262,261,258,266,259,273,256,278,259,279,265,278,273,275,279,276,286,281,282,290,286,286,294,286,305,282,315,278,322,274,308,269,313,265,320,262,330,254,335,246,340,243,334,235,334,230,341,223,336,218,330,211,329,214,321,213,313,217,305"><area id="area_deuxsylvains" alt="二人の森の精" title="二人の森の精" href="#deuxsylvains" shape="poly" coords="127,278,135,279,146,282,157,281,167,283,174,289,179,282,183,279,190,278,197,276,198,284,202,289,207,278,214,282,220,289,223,297,228,299,229,290,235,283,239,279,242,269,241,259,244,254,251,253,258,242,258,228,246,207,239,215,246,230,240,239,234,238,233,235,225,233,220,226,218,220,211,214,202,216,198,225,199,233,207,240,213,246,211,259,203,263,196,267,191,274,182,275,171,273,166,266,172,264,174,257,176,251,175,243,165,243,157,242,150,247,141,249,130,252,123,259,121,267,123,273"><area id="area_amphitrite" alt="アンフィトリテ" title="アンフィトリテ" href="#amphitrite" shape="poly" coords="193,131,186,135,180,150,189,153,197,160,195,166,188,169,197,173,199,182,201,187,204,192,209,191,216,194,223,198,229,198,231,203,236,205,243,202,249,201,254,204,261,203,261,195,258,188,249,185,244,178,240,178,239,175,236,172,236,169,230,161,226,159,226,153,224,142,219,136,218,133,222,129,222,122,220,117,211,116,204,123,199,130"><area id="area_mercure" alt="メルクリウス" title="メルクリウス" href="#mercure" shape="poly" coords="97,194,104,194,107,184,117,172,134,167,139,164,139,155,140,146,145,151,153,150,160,153,163,146,160,130,169,129,174,130,178,137,181,142,181,151,191,154,189,147,193,145,197,149,197,141,192,135,189,129,183,126,181,120,179,114,185,113,192,110,191,104,184,97,181,93,175,92,171,98,176,99,174,105,167,106,160,103,153,103,147,106,135,104,137,98,144,99,140,89,133,87,125,90,122,99,127,98,125,104,118,109,111,117,112,125,103,121,93,121,92,135,98,141,108,141,108,149,101,153,101,161,107,160,109,151,114,146,118,149,123,146,120,156,112,158,110,169,99,181,105,176,95,186"><area id="area_venus" alt="ヴィーナス" title="ヴィーナス" href="#venus" shape="poly" coords="215,431,208,430,207,420,205,420,196,423,186,422,183,424,178,428,181,434,170,431,166,424,157,416,162,410,173,410,170,401,174,396,172,389,169,389,172,379,170,368,170,358,173,351,179,344,181,333,185,327,190,327,195,327,192,321,192,312,198,308,207,307,212,314,214,322,212,330,218,333,223,337,224,345,230,345,227,351,228,358,235,359,232,360,232,365,239,368,239,374,245,380,248,388,247,395,238,400,228,406,217,416"><area id="area_lestroisgraces" alt="三美神" title="三美神" href="#lestroisgraces" shape="poly" coords="170,402,163,401,161,393,154,394,150,387,144,388,138,392,138,394,124,390,113,389,104,392,98,398,93,394,80,397,71,406,69,417,62,418,58,410,22,407,12,410,6,412,0,406,0,369,4,375,8,378,12,373,17,367,15,360,17,351,21,346,28,345,35,349,37,355,41,360,46,364,49,372,48,379,51,386,60,385,67,383,76,383,71,377,67,368,69,360,74,354,78,347,84,343,87,335,94,333,90,328,92,322,96,317,101,316,106,316,112,320,114,328,113,335,111,337,113,341,115,343,119,337,121,330,123,323,128,318,130,315,128,309,124,303,126,296,134,291,139,295,143,301,143,307,146,310,149,305,157,305,165,304,170,298,174,294,179,289,178,282,184,278,194,277,199,282,203,287,207,290,205,295,200,300,193,306,186,302,183,295,179,305,174,309,168,314,173,317,178,319,182,312,185,318,190,318,183,328,181,334,176,341,174,351,173,360,171,368,166,372,164,378,163,385,164,393"><area id="area_cupidon" alt="クピドン" title="クピドン" href="#cupidon" shape="poly" coords="264,403,269,396,273,390,277,367,271,363,269,372,267,365,259,355,264,353,274,358,274,351,271,343,263,340,258,343,253,342,247,345,247,343,244,341,244,337,237,336,233,342,239,348,245,352,244,357,238,361,232,359,231,364,238,366,243,367,247,369,250,374,249,381,250,387,254,394,257,401"><area id="area_pandore" alt="パンドラ" title="パンドラ" href="#pandore" shape="poly" coords="296,402,302,398,305,388,303,385,308,381,311,375,316,370,319,371,321,368,313,364,309,356,310,347,315,343,321,343,326,346,330,351,335,355,343,355,351,359,356,365,360,369,359,374,361,379,366,385,366,391,371,397,373,402,368,406,366,407,360,407,358,413,355,410,349,404,344,408,340,412,335,406,330,399,325,393,319,390,313,393,311,399,311,406,311,409,307,408,303,406,299,409"><area id="area_diane" alt="ディアヌ" title="ディアヌ" href="#diane" shape="poly" coords="375,402,372,396,367,392,367,385,362,380,360,374,363,369,358,365,363,361,366,361,363,357,357,355,359,353,355,349,360,344,361,337,365,333,370,333,370,330,366,327,362,323,361,316,364,317,366,311,372,309,379,312,384,316,382,325,384,330,389,333,391,335,394,336,400,332,406,331,407,332,404,334,407,335,413,332,415,334,410,339,403,340,408,343,415,345,416,350,422,354,429,355,437,351,438,344,439,336,443,329,448,327,445,332,442,337,441,345,441,355,441,360,438,366,435,372,438,378,439,383,441,392,442,400,440,410,438,415,434,419,432,420,430,425,425,423,423,429,416,426,414,427,413,432,406,432,402,430,404,424,399,419,393,417,389,413,385,416,379,417,374,413,368,410,373,406"><area id="area_comus" alt="コムス" title="コムス" href="#comus" shape="poly" coords="338,411,333,405,329,398,324,393,319,389,313,393,312,399,312,409,304,407,301,410,296,403,301,399,306,389,302,387,301,380,295,377,286,374,281,377,278,382,277,387,273,391,268,395,266,400,263,406,263,412,263,418,262,425,263,432,265,439,269,443,271,448,274,453,276,455,282,454,288,450,295,450,297,452,302,450,305,450,310,451,315,448,318,448,323,452,328,453,331,457,336,460,339,465,347,464,345,456,350,455,348,447,344,448,341,439,337,430,333,422,327,417,330,411,335,412"></map>

<p><span style="color: #28a1c5;">第ニ組</span></p>
<p>ユピテルの右側では、
<a href="#area_bacchus" title="バックス" id="bacchus">バックス</a>が座って<a href="#area_dieupan" title="パンの神" id="dieupan">パンの神</a>に寄り掛かっていて、
<mark>ヘラクレス</mark>の凱旋をうっとりとして眺めています。</p>
<p>バックスと一緒に<a href="#area_deuxsylvains" title="二人の森の精" id="deuxsylvains">二人の森の精</a>がいて、一人は彼の杖に、もう一人は葡萄に縛られています、</p>
<p>上方には<a href="#area_amphitrite" title="アンフィトリテ" id="amphitrite">アンフィトリテ</a>が現れ、ユピテルの命令を実行する用意をしている神々の伝令使<a href="#area_mercure" title="メルクリウス" id="mercure">メルクリウス</a>と。</p>
<p>バックスの下に<a href="#area_venus" title="ヴィーナス" id="venus">ヴィーナス</a>と<a href="#area_lestroisgraces" title="三美神" id="lestroisgraces">三美神</a>が見られます、</p>
<p>彼女たちはヘーベを愛想のよい人にさせることに貢献したことで拍手喝采しています。</p>
<p>美神たちの一人は、彼女に与えようとしているかのように冠を掴んでいます、
母親の側にいる<a href="#area_cupidon" title="クピドン" id="cupidon">クピドン</a>は
美徳の愛を、意地悪で軽蔑的な視線を送っています。</p>
<p>バックスの足元で、</p>
<p>少し下がると
<a href="#area_pandore" title="パンドラ" id="pandore">パンドラ</a>と<a href="#area_diane" title="ディアヌ" id="diane">ディアヌ</a>は饗宴の神の<a href="#area_comus" title="コムス" id="comus">コムス</a>を、祭りのために支度するように誘っているかのようです。
この神は連なった花でくるまれた槍を持っています。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-640.jpg" alt="フランソワ・ルモワーヌ作、《怪物たちと悪徳たちの墜落に熱心なマルス》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" title="フランソワ・ルモワーヌ作、《怪物たちと悪徳たちの墜落に熱心なマルス》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" width="640" height="372" loading="lazy" decoding="async" usemap="#img_hercule5" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1920.jpg 1920w"></picture><figcaption><q cite="#mars" style="quotes:'「' '」';">怪物たちと悪徳たちの墜落に熱心なマルス</q></figcaption>
</figure>
<map name="img_hercule5" id="img_hercule5"><area id="area_mars" alt="マルス" title="マルス" href="#mars" shape="poly" coords="266,258,262,262,256,263,249,254,251,260,245,259,239,262,232,261,229,252,226,244,229,237,234,243,239,238,243,234,244,228,242,221,242,212,240,206,238,200,241,193,244,186,237,177,237,169,241,163,246,161,253,160,261,154,263,150,269,146,279,144,282,135,287,132,296,132,288,133,290,137,295,141,296,143,300,146,299,148,296,148,294,153,295,160,299,165,303,171,303,173,308,179,311,187,303,190,301,197,305,201,302,207,300,207,293,210,285,215,277,220,271,228,266,239,264,248"><area id="area_vulcain" alt="ウゥルカヌス" title="ウゥルカヌス" href="#vulcain" shape="poly" coords="223,264,229,252,225,244,229,238,234,241,242,235,244,227,242,221,243,213,238,200,242,188,237,184,233,177,223,171,224,169,220,165,219,162,208,162,205,169,208,179,207,181,200,181,192,184,187,190,179,191,170,190,162,185,159,184,152,184,147,187,149,192,154,194,160,193,165,196,171,199,178,202,178,205,174,209,172,211,162,210,160,212,154,219,155,226,158,233,158,240,161,245,164,250,171,252,170,261,170,271,177,279,187,282,193,280,200,276,205,273,203,267,197,259,203,258,210,263,216,265,219,265"><area id="area_plusieursamours" alt="複数の天使たち" title="複数の天使たち" href="#plusieursamours" shape="poly" coords="119,298,114,285,108,284,108,277,100,278,95,275,87,276,84,267,76,263,77,252,84,254,82,243,72,245,71,238,73,230,75,224,68,219,61,219,59,213,59,205,58,198,60,191,54,181,47,180,48,177,44,177,39,181,29,179,22,181,28,171,25,164,30,162,35,162,37,159,32,153,36,146,41,142,47,143,52,140,52,133,57,132,63,130,66,135,63,140,66,145,69,150,74,154,77,161,84,162,88,165,88,167,79,166,74,169,73,171,64,172,62,178,54,181,60,191,66,193,71,194,72,201,78,203,84,206,89,206,93,197,98,193,100,186,99,179,104,175,107,169,111,165,111,158,116,157,123,162,122,167,128,165,131,169,138,175,138,177,130,172,126,174,119,174,116,182,115,189,109,192,107,197,99,199,89,207,96,213,99,217,105,213,111,211,114,203,121,203,121,194,127,190,135,193,139,204,137,213,141,222,144,232,148,242,145,249,139,244,134,239,134,248,133,255,129,259,127,265,131,271,137,275,141,283,148,288,154,282,158,277,159,284,159,291,159,301,158,306,153,296,147,295,138,297,131,292,123,283,124,292,124,298"><area id="area_deuxrenommees" alt="名声二人" title="名声二人" href="#deuxrenommees" shape="poly" coords="132,360,144,360,154,348,164,347,169,344,190,344,196,345,199,349,208,349,207,343,212,342,217,338,228,336,231,341,234,332,245,333,259,330,253,324,247,321,258,322,264,318,268,313,276,323,282,322,291,320,301,317,293,317,285,316,279,315,275,308,281,304,287,303,298,307,300,305,319,313,326,312,326,305,343,299,351,299,358,303,361,302,360,295,347,287,342,291,335,289,337,288,342,290,339,284,341,277,339,271,334,274,332,280,329,286,323,288,320,278,331,279,331,277,317,276,310,266,310,265,321,263,326,257,319,251,312,253,318,249,320,244,317,236,311,230,306,240,299,242,291,242,293,234,300,228,301,221,298,215,304,210,299,203,293,210,281,219,272,228,267,238,266,254,265,262,265,264,258,265,257,260,250,260,245,262,244,267,247,271,243,276,236,270,230,266,222,264,215,263,202,256,201,265,204,273,208,279,214,282,211,291,209,298,206,303,206,307,197,306,194,306,193,299,185,294,178,296,175,302,175,310,180,315,181,318,174,317,166,315,158,319,151,325,144,333,136,345"></map>

<p><span style="color: #28a1c5;">第三組</span></p>
<p>パンドラとディアヌの下に、
そして、団体の前の方に、
怪物たちと悪徳たちの墜落に熱心な<a href="#area_mars" title="マルス" id="mars">マルス</a>が見られます、
彼は今、力の神ではなく、美徳の神にのみ打ちのめされます。この神に自分の労働を捧げている<a href="#area_vulcain" title="ウゥルカヌス" id="vulcain">ウゥルカヌス</a>は、
その隣りにいます。</p>
<p><a href="#area_plusieursamours" title="複数の天使たち" id="plusieursamours">複数の天使たち</a>がこの神々の右側を飛び回り、
貴重な武器を掴んでいます、
これらは<mark>ヘラクレス</mark>を模範とする人たちのためです。</p>
<p>その下で <a href="#area_deuxrenommees" title="名声二人" id="deuxrenommees">名声二人</a>が、天で<mark>ヘラクレス</mark>に有利な事が起こっていることを地球に告げるために降りようとしています。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-640.jpg" alt="フランソワ・ルモワーヌ作、《欲望、怒り、憎しみ、不和とそのほかの悪徳たち、天から落とされています》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" title="フランソワ・ルモワーヌ作、《欲望、怒り、憎しみ、不和とそのほかの悪徳たち、天から落とされています》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" width="640" height="741" loading="lazy" decoding="async" usemap="#img_hercule6" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1920.jpg 1920w"></picture><figcaption>欲望、怒り、憎しみ、不和とそのほかの悪徳たち、<q cite="#envie" style="quotes:'「' '」';">天から落とされています</q></figcaption>
</figure>
<map name="img_hercule6" id="img_hercule6"><area id="area_envie" alt="欲望" title="欲望" href="#envie" shape="poly" coords="165,299,167,306,172,309,178,307,183,303,186,304,182,312,175,318,165,319,158,321,150,324,143,326,131,323,121,323,123,315,113,311,106,312,91,316,85,323,84,332,85,339,89,343,90,350,84,358,79,364,72,373,63,383,64,395,68,398,77,393,88,389,99,376,116,371,106,370,119,365,118,359,128,349,135,342,155,335,160,334,170,337,175,331,181,334,187,334,193,331,198,323,191,311,194,302,189,296,180,301,172,306,167,303"><area id="area_colere" alt="怒り" title="怒り" href="#colere" shape="poly" coords="89,389,85,397,91,425,102,429,109,438,117,445,120,451,127,455,135,448,142,442,148,437,153,427,155,428,159,425,159,414,158,408,151,412,146,405,149,399,157,395,169,396,181,397,183,410,188,414,201,423,208,431,211,440,219,455,222,457,221,442,216,422,211,411,197,399,184,390,168,383,166,376,166,370,172,366,178,363,189,371,192,371,190,361,185,350,180,342,172,335,169,338,161,333,135,342,120,357,118,364,107,368,117,371,99,376"><area id="area_haine" alt="憎しみ" title="憎しみ" href="#haine" shape="poly" coords="164,430,163,439,155,456,165,463,160,479,152,486,154,496,150,500,143,493,136,488,130,491,120,488,107,480,111,473,104,472,96,477,92,472,85,478,89,485,97,491,107,497,108,503,116,505,129,506,139,505,162,498,169,500,182,511,196,515,225,515,232,513,234,507,236,501,224,489,233,489,237,483,247,480,249,464,245,454,258,443,259,434,254,425,262,422,264,409,258,400,250,397,237,400,252,390,252,382,248,371,240,365,232,358,223,368,214,369,206,373,201,385,191,372,176,362,166,370,167,384,183,389,212,412,222,443,221,456,209,437,205,424,181,408,168,410,166,421"><area id="area_discorde" alt="不和" title="不和" href="#discorde" shape="poly" coords="118,451,113,458,102,463,104,446,100,439,93,440,71,430,70,423,76,417,72,410,58,416,52,429,53,435,61,436,72,451,84,454,79,461,63,464,56,472,42,477,34,513,37,525,46,535,53,538,66,552,72,554,82,555,93,569,109,577,119,584,125,583,132,593,142,597,153,596,167,591,174,592,190,581,197,577,192,574,206,551,190,575,184,569,174,580,155,580,142,580,149,574,153,565,152,555,146,551,136,553,135,542,151,534,149,521,142,505,122,505,108,504,108,498,90,487,85,478,92,473,97,478,103,472,112,474,107,480,121,488,128,492,137,489,151,498,155,495,152,484,145,482,146,477,152,474,152,467,159,460,156,456,163,440,168,411,181,408,180,398,158,394,149,397,146,404,152,411,158,408,158,425,154,427,149,434,127,454,122,450"><area id="area_autresvices" alt="そのほかの悪徳たち" title="そのほかの悪徳たち" href="#autresvices" shape="poly" coords="193,515,195,520,208,519,199,526,192,548,199,552,211,548,212,541,221,546,228,544,232,548,224,562,223,569,227,575,224,580,220,585,223,597,230,601,238,606,244,604,251,595,251,591,259,598,263,604,274,609,285,616,291,627,292,641,298,658,301,663,310,656,307,628,303,608,300,609,280,590,278,578,276,570,286,589,291,599,290,592,295,596,298,590,295,579,297,572,288,564,289,557,283,551,278,539,283,535,285,529,281,520,282,507,281,499,274,496,266,501,255,493,257,484,258,471,254,461,246,461,307,458,321,455,325,464,327,472,338,475,351,478,353,485,366,490,370,500,372,507,380,504,383,511,386,519,395,526,401,529,409,527,417,525,416,519,427,515,433,516,444,507,430,499,421,508,419,515,409,518,396,504,394,495,401,497,407,495,396,489,392,482,396,480,389,475,394,470,398,471,402,466,408,463,406,452,399,445,390,444,382,453,379,457,374,452,370,446,362,453,357,460,349,458,341,460,353,449,359,444,363,436,369,434,378,436,386,434,399,435,405,429,415,427,416,417,408,412,399,415,398,421,389,422,371,418,362,419,365,414,362,405,353,403,342,404,339,414,339,422,337,426,327,425,318,431,306,441,307,458,247,461,246,480,238,481,233,488,223,488,235,501,232,512,228,513"></map>

<p><span style="color: #28a1c5;">第四組</span></p>
<p><mark>ヘラクレス</mark>の戦車の下では、
<a href="#area_envie" title="欲望" id="envie">欲望</a>、<a href="#area_colere" title="怒り" id="colere">怒り</a>、<a href="#area_haine" title="憎しみ" id="haine">憎しみ</a>、<a href="#area_discorde" title="不和" id="discorde">不和</a>と<a href="#area_autresvices" title="そのほかの悪徳たち" id="autresvices">そのほかの悪徳たち</a>、新しい神が打ち勝つことになったこれらの化身
は、天から落とされています、
欲望だけがまだ英雄の最も近くにいます、
彼女は彼を脅かしています、
その憤怒が心ならずも放棄していないのは、
この欲望という怪物が悪徳のなかで最も危険で最も激しく、その怒りが死を超えて拡大する唯一のものであることを明らかにするためです。</p>

<!-- page 4 -->

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-640.jpg" alt="ネプテューンが喜んで見ています、しかもプルトは、目をそらせる姿で現れています" title="ネプテューンが喜んで見ています、しかもプルトは、目をそらせる姿で現れています" width="640" height="685" loading="lazy" decoding="async" usemap="#img_hercule7" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1920.jpg 1920w"></picture><figcaption>ネプテューンが<q cite="#neptune" style="quotes:'「' '」';">喜んで見ています</q>、しかもプルトは、<q cite="#pluton" style="quotes:'「' '」';">目をそらせる姿で現れています</q></figcaption>
</figure>
<map name="img_hercule7" id="img_hercule7"><area id="area_cibele" alt="キュベレー" title="キュベレー" href="#cibele" shape="poly" coords="86,501,91,496,102,494,113,499,123,503,131,514,134,506,140,504,142,496,151,498,157,496,157,490,154,485,159,482,166,479,171,473,171,465,181,462,186,457,192,458,205,480,216,476,213,465,218,461,218,454,228,464,238,464,248,469,239,458,229,447,225,438,213,435,206,428,206,422,202,417,197,416,201,410,204,405,206,399,204,390,193,385,186,387,180,393,178,400,178,409,178,412,170,408,163,410,159,413,151,408,142,407,135,407,119,408,111,405,107,415,112,417,117,414,127,414,133,417,139,419,144,415,149,420,144,422,138,422,131,425,122,425,113,425,107,423,101,429,92,430,82,437,76,444,70,452,68,463,72,482,78,489,83,494"><area id="area_unamour" alt="ある天使" title="ある天使" href="#unamour" shape="poly" coords="244,470,253,470,248,457,248,448,254,447,258,452,260,449,258,442,251,440,250,433,256,432,258,422,257,410,252,400,247,394,248,387,241,382,244,379,240,374,241,371,236,372,233,371,230,375,223,375,215,379,211,377,207,382,204,382,204,388,214,392,210,397,217,401,219,409,224,413,223,421,226,433,226,442,230,450,234,455,239,462"><area id="area_minerve" alt="ミネルヴァ" title="ミネルヴァ" href="#minerve" shape="poly" coords="114,267,119,257,127,249,139,250,149,251,161,257,170,264,175,265,178,262,179,254,185,246,189,245,200,237,207,236,236,211,239,215,211,237,211,240,207,244,203,244,195,252,199,257,203,262,203,269,208,272,213,269,220,266,226,268,230,265,235,270,238,276,236,282,233,287,227,289,221,290,214,287,206,288,206,296,193,313,182,321,174,315,165,316,164,312,156,308,157,298,154,288,148,280,142,275,136,280,128,277,120,276"><area id="area_ceres" alt="ケレス" title="ケレス" href="#ceres" shape="poly" coords="118,388,121,387,125,390,134,385,141,384,146,387,144,378,148,368,155,362,162,359,168,361,168,355,172,354,175,352,183,352,179,357,173,364,168,369,163,376,162,381,167,381,172,378,176,373,181,371,185,368,191,368,196,371,200,374,205,377,212,377,216,380,221,377,226,375,225,372,227,367,225,364,227,359,226,355,231,346,234,339,237,330,238,324,235,318,238,313,239,306,237,297,230,295,223,298,219,307,219,314,215,321,204,322,202,321,205,320,210,319,206,313,199,313,193,318,184,322,174,316,165,317,156,322,152,329,150,328,144,331,138,341,135,351,131,367,132,376,127,382"><area id="area_neptune" alt="ネプテューン" title="ネプテューン" href="#neptune" shape="poly" coords="308,561,319,572,326,565,329,553,340,535,340,546,340,560,347,564,360,558,369,563,371,574,377,579,382,584,391,578,405,574,411,565,418,562,418,553,418,540,417,534,415,533,416,527,460,515,465,519,486,516,484,512,470,512,492,503,464,508,475,503,458,506,452,510,415,520,406,517,402,511,407,505,402,495,404,490,413,491,421,485,422,479,421,467,414,461,401,463,396,468,394,461,386,459,366,469,351,473,347,463,338,463,316,439,308,435,300,438,297,447,300,481,305,495,293,505,286,504,282,511,290,515,300,514,307,524,311,516,319,524,320,537,317,550"><area id="area_pluton" alt="プルト" title="プルト" href="#pluton" shape="poly" coords="376,579,373,591,376,598,382,600,380,606,354,597,352,603,362,605,357,611,347,615,346,627,346,639,354,649,343,659,342,665,355,677,363,678,369,671,386,672,392,667,401,670,413,670,413,684,428,683,434,675,435,668,437,659,440,651,436,643,443,666,451,677,463,681,466,676,452,650,453,636,485,645,488,650,513,656,493,645,493,643,512,653,493,636,484,639,452,627,455,622,451,615,450,605,443,596,444,588,449,583,458,581,464,576,464,569,467,569,467,566,475,565,477,555,474,546,464,541,453,539,446,542,446,544,437,539,425,538,418,542,418,561,411,564,405,574,390,577,383,584"></map>

<p><span style="color: #28a1c5;">第五組</span></p>
<p><mark>ヘラクレス</mark>の戦車の前と後ろに、
<a href="#area_cibele" title="キュベレー" id="cibele">キュベレー</a>が自分の獅子たちに引っ張られているなかで立っています。</p>
<p><a href="#area_unamour" title="ある天使" id="unamour">ある<ruby>天使<rp>(</rp><rt>アモール</rt><rp>)</rp></ruby></a>が遊びながら彼女の冠を持ち上げています。</p>
<p>くぼんだ面の上に、
<a href="#area_minerve" title="ミネルヴァ" id="minerve">ミネルヴァ</a>と<a href="#area_ceres" title="ケレス" id="ceres">ケレス</a>と、彼女たちを象徴するものが見られます、
<a href="#area_neptune" title="ネプテューン" id="neptune">ネプテューン</a>と<a href="#area_pluton" title="プルト" id="pluton">プルト</a>がキュベレーの側にいます。</p>
<p>海の神が新しい神の栄光を喜んで見ています、
しかもプルトは、この英雄が死界に立ち向かったことがあるため、凱旋に賛成していると見えないように目をそらせる姿で見えています。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-640.jpg" alt="フランソワ・ルモワーヌ作、《フロラとゼピュルスが空気の精たちにともなっていて花の連なりで遊んでいます》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" title="フランソワ・ルモワーヌ作、《フロラとゼピュルスが空気の精たちにともなっていて花の連なりで遊んでいます》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" width="640" height="944" loading="lazy" decoding="async" usemap="#img_hercule8" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1920.jpg 1920w"></picture><figcaption>フロラとゼピュルスが空気の精たちにともなっていて<q cite="#zephyretflore" style="quotes:'「' '」';">花の連なりで遊んでいます</q></figcaption>
</figure>
<map name="img_hercule8" id="img_hercule8"><area id="area_eole" alt="アイオルス" title="アイオルス" href="#eole" shape="poly" coords="256,655,266,654,264,636,271,616,281,614,291,614,293,608,303,605,307,602,312,602,302,595,302,589,310,588,303,580,310,574,326,573,329,574,330,565,331,563,324,543,319,535,318,526,315,524,319,522,314,516,318,516,310,508,308,509,299,506,290,509,284,514,283,524,290,526,284,528,245,525,238,518,250,511,256,512,253,506,234,517,230,515,217,520,216,526,214,526,217,535,225,532,225,542,235,577,234,584,231,586,223,586,222,594,232,598,240,593,255,596,255,617,258,632,254,646"><area id="area_zephyretflore" alt="ゼピュルスとフロラ" title="ゼピュルスとフロラ" href="#zephyretflore" shape="poly" coords="353,722,352,716,341,707,341,697,350,694,349,682,342,678,329,674,329,672,344,670,350,664,348,660,352,629,356,621,364,620,369,617,361,611,377,595,371,591,356,601,355,591,371,590,377,595,381,587,395,580,404,582,407,573,405,567,416,565,409,558,402,558,394,563,398,568,392,573,387,577,371,579,367,572,369,567,372,558,375,559,378,554,389,554,389,543,387,534,395,534,395,527,403,527,411,534,409,541,402,545,403,558,409,558,416,565,407,572,405,582,414,579,414,569,420,559,430,551,433,566,439,562,442,571,434,590,436,592,440,587,451,589,458,595,458,601,456,606,461,609,467,619,464,626,453,629,447,639,442,648,438,656,431,661,423,664,418,670,418,676,420,682,419,691,409,691,406,697,396,698,390,701,393,706,390,714,390,717,382,719,377,723,371,720,362,724"><area id="area_geniesdelair" alt="空気の精たち" title="空気の精たち" href="#geniesdelair" shape="poly" coords="260,687,261,693,268,692,277,694,274,684,281,680,287,680,293,674,298,681,307,674,313,664,323,664,327,659,339,660,345,660,349,659,352,630,357,621,369,617,362,610,376,595,382,587,393,579,403,582,407,574,406,567,414,567,409,557,404,556,394,562,398,567,388,575,371,578,371,589,356,601,356,590,370,589,371,578,362,577,365,573,366,562,356,553,344,555,340,566,341,578,339,579,332,573,325,573,311,571,303,580,311,587,302,589,302,594,312,602,295,607,291,614,280,623,278,629,283,635,288,634,284,651,291,649,286,660,288,666,278,669,269,682"><area id="area_rosee" alt="露" title="露" href="#rosee" shape="poly" coords="381,773,391,776,410,780,416,785,434,782,441,789,429,815,433,819,430,828,433,834,435,839,441,841,448,822,455,811,462,792,468,790,474,785,481,790,491,790,491,781,496,771,504,777,504,773,496,762,495,754,505,754,513,747,514,735,510,728,503,723,499,728,497,734,491,739,489,737,490,734,491,731,489,728,489,720,493,711,495,693,485,681,474,669,466,657,464,644,461,646,461,656,458,653,456,655,459,667,455,664,458,679,463,686,457,683,460,693,464,699,463,706,461,716,461,718,454,721,447,724,440,730,433,732,432,726,425,724,425,717,419,712,413,708,406,710,405,714,397,717,400,721,400,726,410,732,413,744,401,745,399,749,389,746,376,750"><area id="area_lesamours" alt="愛の精たち" title="愛の精たち" href="#lesamours" shape="poly" coords="459,687,458,684,461,683,458,678,454,664,459,668,456,658,465,655,468,661,495,693,500,692,499,682,505,679,509,669,512,664,514,675,519,671,530,670,529,663,524,660,527,655,530,655,537,663,535,672,538,675,542,669,559,654,560,646,544,644,547,642,553,644,557,639,557,633,559,631,564,636,571,637,573,635,578,640,589,641,592,633,597,631,600,638,603,642,607,652,616,654,618,653,614,642,616,640,621,627,620,616,626,608,624,600,617,595,607,601,595,601,590,597,583,594,577,602,578,609,579,612,577,614,570,611,560,612,553,611,552,609,542,613,535,619,534,613,527,611,518,617,518,626,520,631,513,634,512,637,510,640,502,641,500,648,501,651,493,655,492,648,483,644,478,651,475,657,469,662,465,654,452,663,445,661,437,658,430,662,429,669,433,674,436,676,435,678,432,682,427,678,421,680,420,695,428,694,431,688,432,701,431,708,436,713,443,712,436,715,431,720,431,726,434,731,440,730,443,720,449,717,454,716,458,710,452,702,451,694"><area id="area_nymphesdelapluie" alt="雨の精たち" title="雨の精たち" href="#nymphesdelapluie" shape="poly" coords="576,843,581,843,574,836,579,835,576,827,580,822,570,815,570,811,575,802,574,792,569,789,575,789,582,785,585,777,582,768,574,767,568,769,562,778,552,781,549,787,555,775,554,766,555,756,561,751,568,749,573,740,572,734,567,729,559,732,557,735,551,731,542,732,529,736,520,739,508,749,496,753,495,761,508,776,516,778,522,788,527,801,531,802,533,813,540,810,548,811,557,816,559,824,561,830,567,833"><area id="area_morphee" alt="眠りに落ちているモルペウス" title="眠りに落ちているモルペウス" href="#morphee" shape="poly" coords="271,833,257,822,258,815,270,815,278,799,281,799,280,796,292,785,300,783,306,769,317,762,323,763,328,758,333,761,339,756,344,755,348,755,354,754,359,756,365,767,366,774,376,776,389,783,398,797,402,799,407,815,409,819,412,830,408,841,411,851,422,863,425,864,433,872,431,874,429,878,421,876,412,871,407,864,407,862,391,849,388,834,376,853,367,859,368,852,361,844,360,828,357,823,346,828,349,838,346,839,344,843,348,848,337,849,332,842,334,828,338,823,327,828,321,832,313,832,301,838,288,838,283,832"><area id="area_songes" alt="夢たち" title="夢たち" href="#songes" shape="poly" coords="479,882,471,884,465,880,461,874,457,868,452,868,453,872,448,877,439,868,438,864,434,864,428,866,420,861,411,852,407,841,411,829,409,820,402,800,389,784,375,775,365,774,359,756,353,755,342,755,333,761,326,757,322,763,315,763,307,768,302,775,289,765,287,770,279,765,276,770,269,769,262,769,260,777,253,773,245,775,238,775,237,768,241,768,237,762,240,756,230,755,221,752,214,755,211,758,208,754,196,760,183,754,176,758,164,759,163,749,169,745,171,747,173,745,179,743,178,740,170,739,184,733,196,743,201,736,209,732,215,732,219,735,226,733,232,729,225,722,216,720,221,714,228,709,242,707,243,718,249,717,256,714,263,718,269,723,265,732,259,739,254,740,251,745,245,743,241,744,241,749,249,751,254,754,261,753,266,754,270,746,276,741,274,732,279,726,286,723,284,720,287,718,286,713,297,708,307,712,309,724,314,724,320,722,329,714,339,720,340,726,342,736,341,744,342,755,353,755,359,756,366,774,375,775,389,784,402,800,409,821,416,822,421,815,429,815,435,819,433,827,434,838,441,840,453,835,460,837,464,841,460,851,465,856,468,863,472,875"><area id="area_geniedeleternite" alt="永遠の精" title="永遠の精" href="#geniedeleternite" shape="poly" coords="322,442,333,431,339,419,335,425,344,412,348,406,352,412,353,418,363,415,367,406,366,403,359,401,362,399,359,398,361,396,367,397,373,393,373,386,369,380,362,378,355,379,352,385,352,389,348,390,345,384,342,377,340,379,338,367,348,360,353,350,353,339,350,332,342,330,336,332,331,337,326,342,323,349,323,356,325,362,328,366,331,371,338,366,337,363,343,360,347,354,350,348,350,342,349,336,343,334,337,335,333,339,330,344,327,350,328,352,328,356,331,362,337,362,338,366,331,371,331,381,333,384,329,391,325,397,321,403,315,414,316,423,319,428,319,440"><area id="area_saturne" alt="サトゥルヌス" title="サトゥルヌス" href="#saturne" shape="poly" coords="397,527,403,526,408,529,413,532,414,519,412,511,406,499,402,493,404,488,409,485,419,490,431,486,443,474,445,476,451,470,456,471,454,466,482,466,478,462,456,461,451,458,440,465,434,471,425,474,421,473,424,467,439,465,445,461,427,463,428,443,417,447,405,457,397,459,397,455,402,451,403,443,400,435,393,430,386,431,381,437,381,439,378,439,382,425,382,417,363,416,351,421,339,424,309,450,336,455,345,452,351,451,351,453,344,459,339,466,320,466,327,488,332,497,341,504,353,506,344,502,337,495,331,483,330,476,336,480,344,479,351,485,357,485,365,490,365,502,364,512,371,520,376,518,379,505,382,500,384,494,386,493,392,496,396,499,395,508,393,518"></map>

<p><span style="color: #28a1c5;">第六組</span></p>
<p>各種の風の神、<a href="#area_eole" title="アイオルス" id="eole">アイオルス</a>が見られます、</p>
<p>彼の側で<a href="#area_geniesdelair" title="ゼピュルスとフロラ" id="geniesdelair">空気の精たち</a>にともなっているのは、<a href="#area_zephyretflore" title="空気の精たち" id="zephyretflore">ゼピュルスとフロラ</a>です、</p>
<p>ため息が花を芽生えさせるこの愛情深い神々が
<a href="#area_lesamours" title="愛の精たち" id="lesamours">愛の精たち</a>に作られた連なった花で遊んでいます。</p>
<p><a href="#area_rosee" title="露" id="rosee">露</a>は前方に立っています、
雲の上に自分の壺を傾けています、</p>
<p>そこに<a href="#area_nymphesdelapluie" title="雨の精たち" id="nymphesdelapluie">雨の精たち</a>がいます。</p>
<p>その上にいるのは、<a href="#area_morphee" title="眠りに落ちているモルペウス" id="morphee">眠りに落ちているモルペウス</a>です、</p>
<p>翼が密雲で形成されている<a href="#area_songes" title="夢たち" id="songes">夢たち</a>が、彼の上に<ruby>罌粟<rp>(</rp><rt>けし</rt><rp>)</rp></ruby>をばらまいています。</p>
<p>アイオルスの上には、やや遠く、
<a href="#area_geniedeleternite" title="永遠の精" id="geniedeleternite">永遠の精</a>が見え、
彼は円形に丸めた蛇で表されている象徴を掴み、
それを<a href="#area_saturne" title="サトゥルヌス" id="saturne">サトゥルヌス</a>に見せようとしていて、
美徳には無力である彼の大鎌をあざけているように見えます。</p>

  <figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-640.jpg" alt="フランソワ・ルモワーヌ作、《イリスが自分の弧の上に現れる》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" title="フランソワ・ルモワーヌ作、《イリスが自分の弧の上に現れる》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" width="640" height="676" loading="lazy" decoding="async" usemap="#img_hercule9" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1920.jpg 1920w"></picture><figcaption><q cite="#iris" style="quotes:'「' '」';">イリスが自分の弧の上に現れる</q></figcaption>
</figure>
<map name="img_hercule9" id="img_hercule9"><area id="area_iris" alt="イリス" title="イリス" href="#iris" shape="poly" coords="361,575,355,539,345,510,335,489,320,465,312,460,301,443,282,422,262,405,260,392,257,394,251,388,258,386,254,382,253,374,256,359,270,366,280,373,288,381,294,380,301,375,305,372,309,373,313,370,311,363,311,356,317,350,323,347,328,347,333,351,335,356,332,365,337,359,341,360,345,355,340,346,336,343,319,339,326,336,332,335,341,335,349,342,358,354,358,356,352,369,353,374,349,378,359,389,367,394,370,391,380,396,384,405,385,412,381,419,373,424,367,417,360,409,352,407,353,416,358,424,365,435,366,447,371,454,373,461,379,467,376,475,384,494,394,517,399,538,402,563,405,578,391,576,377,583,369,577"><area id="area_aurore" alt="曙" title="曙" href="#aurore" shape="poly" coords="240,537,236,540,226,530,221,523,214,521,214,516,209,507,206,514,199,516,197,526,187,533,179,527,174,522,176,515,179,510,176,502,176,499,167,494,164,496,158,498,151,500,146,493,146,481,151,477,155,478,158,470,163,467,169,459,172,450,172,441,178,437,181,437,179,433,180,427,185,422,190,423,189,419,191,416,196,414,200,422,193,424,198,429,196,438,194,439,201,443,206,447,213,447,218,454,220,458,233,464,240,469,242,480,247,484,254,489,251,497,250,504,251,513,246,522,236,523,236,530"><area id="area_etoiles" alt="複数の擬人化した星たち" title="複数の擬人化した星たち" href="#etoiles" shape="poly" coords="235,433,232,434,230,426,223,424,221,430,224,434,227,435,222,441,226,450,223,459,229,462,235,465,244,472,243,480,250,483,254,490,253,496,250,499,251,507,250,514,247,519,251,519,258,523,260,527,265,524,269,527,278,526,284,524,290,526,294,532,302,530,305,523,312,523,317,525,325,526,329,519,329,512,330,506,329,498,326,491,329,488,331,481,326,472,319,468,315,473,312,479,312,487,306,489,308,485,307,479,303,475,304,471,302,465,295,468,295,473,293,479,285,476,282,469,272,464,267,461,272,461,278,461,273,453,265,448,259,451,255,446,250,447,246,449,242,447,242,439,239,435"></map>

<p><span style="color: #28a1c5;">第七組</span></p>
<p>直ぐ角へ向かうと、<a href="#area_iris" title="イリス" id="iris">イリス</a>が自分の弧の上に現れて、
天でのお祝いをちらりと見ています。</p>
<p>虹の下に、<a href="#area_aurore" title="曙" id="aurore">曙</a>が、<a href="#area_etoiles" title="複数の擬人化した星たち" id="etoiles">複数の擬人化した星たち</a>を伴って登場しています。</p>

<!-- page 5 -->

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-640.jpg" alt="フランソワ・ルモワーヌ作、《ムーサたちがアポロンが命令したコンサートを開く用意をしようとしています》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" title="フランソワ・ルモワーヌ作、《ムーサたちがアポロンが命令したコンサートを開く用意をしようとしています》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" width="640" height="800" loading="lazy" decoding="async" usemap="#img_hercule10" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1920.jpg 1920w"></picture><figcaption>ムーサたちが<q cite="#lesmuses" style="quotes:'「' '」';">アポロンが命令したコンサートを開く用意をしようとしています</q></figcaption>
</figure>
<map name="img_hercule10" id="img_hercule10"><area id="area_plusieursgenies" alt="何人かの精たち" title="何人かの精たち" href="#plusieursgenies" shape="poly" coords="82,220,84,215,88,210,84,205,84,203,89,209,91,204,94,210,92,223,94,225,102,222,103,211,106,211,109,210,110,204,115,209,121,208,123,199,119,198,118,195,119,193,120,197,125,196,124,188,138,185,138,196,137,202,139,206,144,205,145,209,148,212,155,213,159,219,164,217,167,210,171,217,177,230,182,228,180,221,182,223,187,219,182,213,178,213,181,207,177,202,178,200,182,203,184,196,182,193,180,192,181,186,175,181,169,187,167,176,160,175,160,179,154,178,149,178,152,176,151,169,143,175,141,174,142,168,141,162,131,164,129,172,133,180,138,184,124,188,117,188,110,190,108,194,106,191,107,187,106,181,100,184,96,191,96,198,103,198,96,197,92,186,86,186,85,179,82,177,84,168,85,159,89,158,85,157,80,171,77,173,78,170,76,166,69,167,67,176,61,178,60,185,67,190,67,198,68,204,73,208,76,217"><area id="area_apollon-2" alt="アポロン" title="アポロン" href="#apollon-2" shape="poly" coords="201,293,207,299,223,296,230,303,237,303,242,307,254,316,258,329,260,337,276,345,274,351,278,358,296,362,289,353,285,341,288,334,292,322,289,309,303,298,299,293,292,296,284,302,281,292,278,285,278,277,284,278,291,277,298,271,300,264,295,256,286,252,271,262,273,259,269,252,261,243,246,240,243,236,238,228,243,224,235,207,235,219,228,218,230,229,229,233,218,225,211,234,214,241,205,245,208,254,218,255,223,262,230,266,240,269,237,278,228,281,223,287,217,289,214,285,206,287"><area id="area_geniedesbeauxarts" alt="美術の精" title="美術の精" href="#geniedesbeauxarts" shape="poly" coords="289,333,293,338,301,334,301,328,299,328,305,327,311,333,310,339,303,339,306,343,317,344,322,347,323,356,323,363,331,369,332,376,335,377,340,385,342,374,334,365,331,355,328,344,324,342,323,336,333,340,340,347,351,349,351,342,347,341,334,331,336,328,342,330,360,325,359,319,340,315,328,316,321,321,321,323,316,322,320,313,313,302,302,304,303,313,299,319"><area id="area_lesmuses" alt="ムーサたち" title="ムーサたち" href="#lesmuses" shape="poly" coords="11,421,56,422,46,429,75,432,75,420,108,423,108,432,148,435,126,456,133,460,156,451,177,456,178,464,158,492,204,487,229,512,265,538,285,536,277,526,283,512,284,475,308,466,329,472,332,484,348,493,359,477,364,465,351,441,343,438,344,429,353,430,373,420,381,410,412,421,419,429,429,432,443,433,457,438,459,444,462,456,465,462,478,451,478,436,485,434,488,415,482,403,493,389,513,393,524,383,531,395,531,412,536,413,541,391,549,378,546,370,553,357,560,357,555,343,555,321,562,331,567,327,571,324,573,303,569,293,567,280,570,268,559,263,559,250,564,246,570,245,578,248,579,240,571,239,564,239,557,241,556,229,546,229,532,231,523,239,519,247,515,246,506,251,505,239,495,233,482,232,470,241,466,256,456,257,440,259,438,267,442,273,450,276,455,284,457,294,455,302,444,302,431,299,424,310,422,323,422,334,413,331,405,338,402,328,393,323,383,323,376,332,375,343,380,349,394,354,398,363,400,372,397,378,383,370,376,375,365,374,379,385,386,383,403,394,405,402,413,406,412,421,381,410,383,401,351,403,335,399,335,388,337,378,326,372,316,376,309,384,315,391,299,395,293,391,298,386,298,377,288,372,276,375,271,385,267,391,257,390,254,377,261,369,264,362,263,353,255,350,248,351,249,348,257,343,253,335,243,330,231,328,222,335,213,332,205,332,203,339,207,350,190,355,197,351,197,342,194,331,185,327,166,329,165,341,166,349,163,354,159,353,149,358,140,361,134,356,119,358,113,362,107,354,101,360,100,366,95,365,94,371,67,393,47,402,45,398,29,402,20,402"><area id="area_lhistoire" alt="歴史" title="歴史" href="#lhistoire" shape="poly" coords="313,546,327,545,334,541,343,547,333,557,337,567,351,569,367,579,375,587,387,587,394,583,396,577,407,573,415,562,423,566,424,576,432,579,440,582,448,583,451,574,458,575,461,582,470,580,484,582,490,576,476,572,467,565,473,553,468,537,460,524,455,518,443,520,433,515,420,520,416,515,418,513,408,497,402,494,398,502,393,481,400,474,398,468,395,470,393,460,387,479,385,497,375,518,373,509,369,500,361,497,351,505,351,516,353,524,356,529,347,531,337,530,324,534"><area id="area_lapeinture" alt="絵画" title="絵画" href="#lapeinture" shape="poly" coords="442,520,456,518,462,526,472,554,466,564,475,572,482,572,488,568,496,568,504,564,515,570,536,564,542,567,549,563,545,555,546,546,538,541,544,534,539,529,538,520,537,509,544,498,542,487,536,478,528,474,529,465,498,421,495,423,491,438,481,449,469,462,455,463,448,469,445,468,442,460,434,452,424,446,414,451,411,464,413,475,422,478,421,485,426,505"></map>

<p><span style="color: #28a1c5;">第八組</span>の上の方に、</p>
<p>開いている記憶の神殿が見られます。</p>
<p><a href="#area_plusieursgenies" title="何人かの精たち" id="plusieursgenies">何人かの精たち</a>がそこに偉人の記念に大きなメダルを付けようと急いでいます。</p>
<p>横に、<a href="#area_apollon-2" title="アポロン" id="apollon-2">アポロン</a>が、<a href="#area_geniedesbeauxarts" title="美術の精" id="geniedesbeauxarts">美術の精</a>と一緒に雲の上に立っています。</p>
<p><a href="#area_lesmuses" title="ムーサたち" id="lesmuses">ムーサたち</a>が、その下にいて、
アポロンが命令したコンサートを開く用意をしようとしています。</p>
<p>ムーサたちの近くの角で、
<a href="#area_lhistoire" title="歴史" id="lhistoire">歴史</a>が<a href="#area_lapeinture" title="絵画" id="lapeinture">絵画</a>に彼女と同じように英雄たちとその偉大な出来事の名を永久にとどめることを勧めています。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-640.jpg" alt="フランソワ・ルモワーヌ作、《シーレーヌスとファウヌスたちと子供たちの群が酒宴の踊りをしています》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" title="フランソワ・ルモワーヌ作、《シーレーヌスとファウヌスたちと子供たちの群が酒宴の踊りをしています》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" width="640" height="496" loading="lazy" decoding="async" usemap="#img_hercule11" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1920.jpg 1920w"></picture><figcaption><q cite="#silene" style="quotes:'「' '」';">シーレーヌスとファウヌスたちと子供たちの群が酒宴の踊りをしています</q></figcaption>
</figure>
<map name="img_hercule11" id="img_hercule11"><area id="area_castoretpollux" alt="カストルとポルックス星座" title="カストルとポルックス星座" href="#castoretpollux" shape="poly" coords="348,283,355,284,362,275,369,270,384,267,394,265,397,266,403,264,410,267,412,276,414,278,424,275,429,279,436,284,445,284,450,276,457,282,467,289,450,302,452,307,502,271,497,267,474,282,464,275,461,269,461,257,458,256,462,249,461,239,456,231,448,231,446,237,438,231,434,225,429,234,418,224,406,225,406,236,408,242,408,249,405,240,401,239,395,246,389,229,393,229,398,233,405,228,391,211,371,216,364,210,353,215,350,220,347,219,341,224,334,221,320,234,320,238,311,241,327,249,333,245,333,258,342,258,343,260,333,270,332,276,339,279"><area id="area_silene" alt="シーレーヌス" title="シーレーヌス" href="#silene" shape="poly" coords="448,408,455,405,446,394,442,383,450,393,455,403,462,409,473,408,466,401,459,388,450,382,459,382,460,379,447,377,443,368,446,362,449,363,449,357,452,350,440,350,438,355,441,359,439,365,435,365,430,358,425,359,431,351,430,344,422,340,415,345,415,352,411,356,417,361,426,365,424,368,409,365,409,374,414,380,423,385,423,392,431,399,430,407,438,413"><area id="area_faunesetenfans" alt="ファウヌスたちと子供たちの群" title="ファウヌスたちと子供たちの群" href="#faunesetenfans" shape="poly" coords="441,343,445,349,452,351,462,360,469,364,463,373,451,376,456,371,455,364,447,364,443,369,450,377,461,380,471,388,469,380,478,382,482,390,489,391,495,383,491,366,483,361,488,358,488,350,481,343,474,349,472,355,465,350,458,342,449,331,441,343,423,336,414,347,412,354,413,357,426,364,425,367,410,365,409,374,413,379,423,385,418,392,412,396,408,405,398,408,386,401,371,400,365,411,364,420,354,423,354,435,347,441,337,442,328,437,320,431,314,439,308,433,310,421,315,413,319,408,320,399,329,398,333,403,341,403,341,397,351,401,354,410,356,415,365,410,371,400,368,391,371,381,366,376,368,366,376,369,380,364,390,367,388,358,391,346,399,336,403,339,403,331,412,327,420,330,423,336"></map>

<p><span style="color: #28a1c5;">第九組</span></p>
<p>その左とムーサたちの上に、
<a href="#area_castoretpollux" title="カストルとポルックス星座" id="castoretpollux">カストルとポルックス星座</a>が見られます。</p>
<p>ぼやけて透けているところに
<a href="#area_silene" title="シーレーヌス" id="silene">シーレーヌス</a>と<a href="#area_faunesetenfans" title="ファウヌスたちと子供たちの群" id="faunesetenfans">ファウヌスたちと子供たちの群</a>が<ruby>酒宴の踊り<rp>(</rp><rt>バッカナール</rt><rp>)</rp></ruby>をしています。</p>
<p><span style="color: #28a1c5;">コーニスの真ん中にある縁飾りは、<mark>ヘラクレス</mark>の功績を表そうとしています。</span></p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-640.jpg" alt="フランソワ・ルモワーヌ作、《三つの頭をもつ番犬ケルベロスとネメアーの獅子の縁飾り》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" title="フランソワ・ルモワーヌ作、《三つの頭をもつ番犬ケルベロスとネメアーの獅子の縁飾り》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" width="640" height="329" loading="lazy" decoding="async" usemap="#img_hercule12" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1920.jpg 1920w"></picture><figcaption>三つの頭をもつ番犬<q cite="#cerbere" style="quotes:'' ''">ケルベロス</q>とネメアーの獅子の縁飾り</figcaption>
</figure>
<map name="img_hercule12" id="img_hercule12"><area id="area_cerbere" alt="ケルベロス" title="ケルベロス" href="#cerbere" shape="poly" coords="215,226,223,212,229,213,239,210,243,194,241,185,238,186,237,194,230,184,220,182,218,176,223,171,230,171,222,167,226,163,221,157,209,159,199,167,198,173,178,171,167,181,164,195,170,199,173,202,182,200,189,198,195,203,194,209,202,215,206,218,209,220,210,223"><area id="area_lyondenemee" alt="ネメアーの森の獅子" title="ネメアーの森の獅子" href="#lyondenemee" shape="poly" coords="330,133,326,147,328,153,331,155,335,158,335,168,338,170,341,169,341,176,346,179,354,170,351,180,357,177,351,186,356,191,358,199,353,208,351,216,358,216,362,212,362,203,366,192,366,185,371,180,379,192,372,201,373,206,369,214,371,217,375,211,380,209,387,211,385,203,381,198,379,192,371,180,372,173,376,164,374,161,367,151,364,153,360,147,358,148,356,143,348,142,344,141,335,141,326,146,329,133,314,128,306,122,305,125,290,120,281,123,278,130,279,135,294,136,306,139,313,138,317,139"></map>

<p>その<span style="color: #28a1c5;">第一縁飾り</span>では、暖炉の上の片一方に、三つの頭をもつ番犬<a href="#area_cerbere" title="ケルベロス" id="cerbere">ケルベロス</a>が見えます、
そのもう一方には、<a href="#area_lyondenemee" title="ネメアーの森の獅子" id="lyondenemee">ネメアーの森の獅子</a>、こん棒などがあります。</p>

<!-- page 6 -->

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-640.jpg" alt="フランソワ・ルモワーヌ作、《ヘスペリデスの林檎とネッススケンタウロスの縁飾り》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" title="フランソワ・ルモワーヌ作、《ヘスペリデスの林檎とネッススケンタウロスの縁飾り》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" width="640" height="269" loading="lazy" decoding="async" usemap="#img_hercule13" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1920.jpg 1920w"></picture><figcaption>ヘスペリデスの林檎と<q cite="#nessus" style="quotes:'' '';">ネッススケンタウロス</q>の縁飾り</figcaption>
</figure>
<map name="img_hercule13" id="img_hercule13"><area id="area_sanglier" alt="猪" title="猪" href="#sanglier" shape="poly" coords="109,166,117,167,136,168,138,160,148,160,150,149,157,149,157,157,155,161,164,161,171,148,180,151,179,155,186,161,192,163,196,166,204,167,210,165,220,168,219,161,215,153,215,149,210,147,211,144,215,139,212,135,202,137,197,140,197,149,189,154,181,151,172,148,168,143,163,144,157,149,150,149,147,152,138,151,136,154,131,149,124,151,118,156,112,160"><area id="area_nessus" alt="ネッススケンタウロス" title="ネッススケンタウロス" href="#nessus" shape="poly" coords="340,158,340,164,346,166,353,155,360,156,364,163,374,163,384,138,391,135,390,125,392,120,402,121,405,126,411,129,416,129,423,123,419,106,415,98,408,87,411,88,412,79,415,74,412,64,405,60,395,61,390,68,389,70,383,64,377,65,362,77,354,89,354,98,335,106,343,112,339,120,342,123,339,130,344,132,342,137,344,144,346,148,348,154"></map>

<p><span style="color: #28a1c5;">第ニ縁飾りには</span>、<mark>ヘラクレス</mark>がエウリュステウスが生きたまま持って来た<a href="#area_sanglier" title="猪" id="sanglier">猪</a>以外の、
ハルピーたちとヘスペリデスの黄金の林檎と、
その向こう側には<a href="#area_nessus" title="ネッススケンタウロス" id="nessus">ネッススケンタウロス</a>などが見えます。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-640.jpg" alt="フランソワ・ルモワーヌ作、《ディオメデスの縁飾り》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" title="フランソワ・ルモワーヌ作、《ディオメデスの縁飾り》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" width="640" height="417" loading="lazy" decoding="async" usemap="#img_hercule14" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1920.jpg 1920w"></picture><figcaption><q cite="#diomede" style="quotes:'' ''">ディオメデス</q>の縁飾り</figcaption>
</figure>
<map name="img_hercule14" id="img_hercule14"><area id="area_diomede" alt="自分の馬たちにむさぼり食われたディオメデス" title="自分の馬たちにむさぼり食われたディオメデス" href="#diomede" shape="poly" coords="170,284,185,285,190,280,190,272,250,274,254,278,264,279,264,275,279,275,281,284,288,288,305,281,309,275,362,276,367,286,401,286,399,274,410,271,409,269,416,236,412,243,409,242,407,234,410,224,417,221,423,224,424,220,421,212,424,205,427,206,433,202,442,204,444,213,445,222,456,233,457,256,453,260,441,253,449,273,454,282,440,283,431,266,427,266,430,273,427,283,440,283,455,282,460,267,457,256,456,234,463,231,472,224,477,208,472,195,465,188,455,190,449,195,454,203,455,216,461,210,461,203,454,203,449,194,444,189,436,184,426,184,423,184,414,175,402,168,402,161,390,149,379,149,380,146,367,146,360,148,361,145,353,147,346,152,339,156,336,161,333,162,329,169,323,179,322,172,323,166,317,159,313,146,316,145,303,136,296,136,288,145,286,154,280,158,280,164,284,171,281,175,270,174,261,175,259,177,248,173,235,172,227,176,220,183,216,189,214,184,216,180,227,176,220,171,214,168,206,173,202,186,203,197,209,208,208,212,209,219,214,226,204,245,197,247,184,261,180,274"></map>

<p><span style="color: #28a1c5;">第一装飾額縁の向こう側に</span>いるのは、
<a href="#area_diomede" title="自分の馬たちにむさぼり食われたディオメデス" id="diomede">自分の馬たちにむさぼり食われたディオメデス</a>で、人間の肉で（彼らを）養っていました。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-640.jpg" alt="フランソワ・ルモワーヌ作、《黄金の角の雌鹿とカークスの縁飾り》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" title="フランソワ・ルモワーヌ作、《黄金の角の雌鹿とカークスの縁飾り》、ヘラクレスの神格化の詳細、ヘラクレスの間、ヴェルサイユ宮殿" width="640" height="240" loading="lazy" decoding="async" usemap="#img_hercule15" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1920.jpg 1920w"></picture><figcaption><q cite="#labiche" style="quotes:'' ''">黄金の角の雌鹿</q>とカークスの縁飾り</figcaption>
</figure>
<map name="img_hercule15" id="img_hercule15"><area id="area_labiche" alt="黄金の角の雌鹿" title="黄金の角の雌鹿" href="#labiche" shape="poly" coords="190,133,192,141,194,146,189,158,227,161,232,159,236,159,239,161,247,162,249,157,254,153,255,146,260,145,272,147,278,144,285,128,279,130,281,127,277,119,272,122,270,128,271,134,266,139,254,141,258,128,255,119,254,116,261,109,255,103,249,106,243,118,244,125,244,130,241,132,232,126,233,133,226,134,217,142,216,145,208,145,221,127,219,124,217,125,210,120,203,121,199,128,196,133"><area id="area_cacus" alt="アルシドに窒息させられているカークス" title="アルシドに窒息させられているカークス" href="#cacus" shape="poly" coords="409,158,409,155,402,154,399,152,398,148,409,136,417,121,414,113,407,111,394,116,399,107,400,99,396,92,400,92,402,82,395,75,387,74,385,80,382,81,375,77,368,79,367,82,360,83,357,88,347,97,347,114,362,113,353,121,356,123,353,126,358,126,351,132,356,133,353,139,354,150,346,152,344,161,361,166,373,166,383,159"></map>

<p><span style="color: #28a1c5;">第三装飾額縁</span>は片一方には<a href="#area_labiche" title="黄金の角の雌鹿" id="labiche">黄金の角の雌鹿</a>、豊穣の角、もう一方は、<a href="#note_pilastre" title="付け柱" id="alcide">アルシド</a>に<a href="#area_cacus" title="アルシドに窒息させられているカークス" id="cacus"><ruby>窒息<rp>(</rp><rt>ちっそく</rt><rp>)</rp></ruby>させられているカークス</a>が表されています。
 
これらのすべての装飾額縁は、<span style="color: #28a1c5;">美徳の精たちに支えられている柏の葉の大きな連なり</span>で戴冠されています。</p>
<p>この連なりは、見せかけの<ruby>結晶漆喰<rp>(</rp><rt>スタッコ</rt><rp>)</rp></ruby>で仕上げられていて、装飾額縁と美徳の精たちも同様に、<mark>ヘラクレス</mark>の出来事を特徴づけています、
アティックの周囲にずっと見えます。
この周囲は、白地に<ruby>菫<rp>(</rp><rt>すみれ</rt><rp>)</rp></ruby>色石目の通った黒い大理石パネルと合せた白い見せかけの大理石で仕上げられています。
アティックの上部の飾りは金箔で引き立てられています、
<span style="color: #28a1c5;">全体の効果が控えの間の実際のコーニスに支えられています</span>。</p>
<p><span style="color: #28a1c5;">このコーニスは最も美しい大理石に合わせた二十の<a href="#note_pilastre" title="付け柱" id="pilastre">付け柱</a>の上に置かれています</span>、
これらの大理石は、絶妙に選択されて、最も有名な四つの王国の<ruby>採<rp>(</rp><rt>さい</rt><rp>)</rp>石<rp>(</rp><rt>せき</rt><rp>)</rp>場<rp>(</rp><rt>じょう</rt><rp>)</rp></ruby>から来ています。</p>
<p>すなわち、<ruby lang="ja">ダンタン<rp>(</rp><rt lang="fr">Dantin</rt><rp>)</rp></ruby>とよばれている大理石、<ruby lang="ja">ヴェルカンパン<rp>(</rp><rt lang="fr">Vercampan</rt><rp>)</rp></ruby>、<ruby lang="ja">ランセ<rp>(</rp><rt lang="fr">Rancé</rt><rp>)</rp></ruby>、または石目の入った白いものです、
これらの柱の柱脚と柱頭、コーニスと門の縁枠なども同様に金箔で仕上げられています。</p>
<p>この金箔と大理石の輝きは、お互いに協力し合ったり、反応し合っていたりして、感心するほど素晴らしい効果をつくっていて、
装飾にもなっている絵画が武器飾りにもなっているかのように見えます。</p>

<!-- page 7 -->

<p><span style="color: #28a1c5;"><a href="https://ja.wikipedia.org/wiki/パオロ・ヴェロネーゼ" title="https://ja.wikipedia.org/wiki/パオロ・ヴェロネーゼ">パオロ・ヴェロネーゼ</a>作の有名なニ枚の絵画</span>がこの控えの間の主なニつの飾りどころを占めています。</p>
<p><ruby lang="ja">フランソワ<rp>(</rp><rt lang="fr">François</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ルモワーヌ<rp>(</rp><rt lang="fr">LEMOYNE</rt><rp>)</rp></ruby>が、これより称賛にも有名にも値する競争相手になることは不可能でした。</p>
<p>第一の絵画は、<a href="#note_metre1" title="ファリサイ人家での祝宴" id="metre1">幅５２ピエ✕高さ１５ピエ</a>で<span style="color: #28a1c5;">《ファリサイ人家での祝宴》</span>を表しています。</p>
<p>暖炉の向こう側に位置づけられていて、他の絵画は、<a href="#note_metre2" title="エリエゼルとリベカ" id="metre2">高さ１１ピエ✕幅８ピエ</a>３.６✕２.６で、暖炉の上を占めています。</p>
<p><span style="color: #28a1c5;">エリエゼルがリベカとの結婚を申し込む</span>ことなどを表しています。</p>
<p>この絵画の縁は大理石の中にはめ込まれ、ニつの持ち送りに支えられていて、
すべてが水銀での<ruby>箔<rp>(</rp><rt>はく</rt><rp>)</rp>押<rp>(</rp><rt>おし</rt><rp>)</rp></ruby>しされて、暖炉の他のすべての装飾も同様で、
真中に獅子の<ruby>鼻<rp>(</rp><rt>はな</rt><rp>)</rp>面<rp>(</rp><rt>づら</rt><rp>)</rp></ruby>にかぶせられている<mark>ヘラクレス</mark>の頭で引き立てられていて、
ニ枚の装飾大パネルがついて、</p>
<p>ニ本の豊穣の角があり、門縁の下部は獅子のニつの頭か皮で終わっています。</p>
<p><span style="color: #28a1c5;">これらの作品は、<ruby lang="ja" style="color:#28a1c5;">トゥーロン<rp>(</rp><rt lang="fr" style="font-size: 70%;color:#28a1c5">Toulon</rt><rp>)</rp></ruby>出身の器用な彫刻家である亡き<ruby lang="ja" style="color:#28a1c5;">アントワーヌ<rp>(</rp><rt lang="fr" style="font-size: 70%;color:#28a1c5">Antoine</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr" style="font-size: 70%;color:#28a1c5">-</rt><rp>)</rp>フランソワ<rp>(</rp><rt lang="fr" style="font-size: 70%;color:#28a1c5">François</rt><rp>)</rp>・<rp>(</rp><rt lang="fr" style="font-size: 70%;color:#28a1c5"></rt><rp>)</rp>ヴァセ<rp>(</rp><rt lang="fr" style="font-size: 70%;color:#28a1c5">VASSÉ</rt><rp>)</rp></ruby>のものです</span>。</p>
<p><ruby lang="ja">パオロ<rp>(</rp><rt lang="it">Paulo</rt><rp>)</rp>・<rp>(</rp><rt lang="it"></rt><rp>)</rp>ヴェロネーゼ<rp>(</rp><rt lang="it">Veronese</rt><rp>)</rp></ruby>作の大絵画の縁も、大理石のなかにはめ込まれていて、四つの持ち送りに支えられていて、また同じく水銀での箔押しされていながら、同じ彫刻家によるものです。</p>
<p><span style="color: #28a1c5;">暖炉の絵画の縁、炉の薪置台などはアカデミー彫刻家<ruby lang="ja" style="color:#28a1c5;">ジャック<rp>(</rp><rt lang="fr" style="font-size: 70%;color:#28a1c5">Jacques</rt><rp>)</rp>・<rp>(</rp><rt lang="fr" style="font-size: 70%;color:#28a1c5"></rt><rp>)</rp>ヴェルベクッ<rp>(</rp><rt lang="fr" style="font-size: 70%;color:#28a1c5">Verbeckt</rt><rp>)</rp></ruby>のものです</span>。</p>
<p>我々はこの作品を鑑賞することのできない人々向けに、その全体をより正確で体系的な概略を示すためのことはこれ以上出来ません。</p>
<p>作品全体と各部分との関連について、我々は語りだけでその不足を補うのは不可能です、同様に美的感覚、繊細さ、美術的崇高さなども、</p>
<p>今まで我々が保証できるのは、その全体が作品と著作者の栄光に満場一致で協力しているということですが、
全体と各部分との関連の完璧な成功にまだ期待する何かがあるかもしれないことを、やはり公正で教養のある観客衆の方が主権的に判断すべきです。</p>
<p>しかし、こんなに辛くて困難な作品の視覚と記憶によって勇気をもらい力づけられ、我々は、観客衆全員と一緒に、鍛錬している形や、彩色の輝きと柔らかさや、よく治まった主題の端正さや、美しい人物、衣装と礼儀を守る正確さを称賛することを拒否できません、
怠るところは一つもなく、
画架に描かれた絵画と同じように各部分が完成されていて、
観客を驚かして心を打つ、計り知れないほど刺激的で真実味のある、いくつかのものを含めなくても、</p>
<p>そういったもののなかで、雲の群各種があって、
それらが絵の中の人物をまたごうとして、偶然のでたらめのような効果を出していて、
そういった効果が模倣そのものを最もよく特徴づけ、それで、知識のある人たちや知識の無い人たちに感嘆させようとしています。</p>
<p>たくさんの人々が次を注目をしたので、我々もこれでこの記事を終わりにしましょう、
いわゆる、礼拝堂のほうにある控えの間の門の下に立てば、
ニつの天井、すなわち、礼拝堂の入り口に使われている、塗装されていない控えの間と、
今この文書で描写して来た<mark>ヘラクレス</mark>の昇天が描かれてあるのが見え、
両方とも同じ高さなのに、一見すると、普通の意見とは反対に、
描かれているものは、描かれておらず白い色しか見えないものより、ずいぶん高くに見えています。</p>
<p>我々はそこで隣接して同じ高さに建設されているニつの控えの間で、とても簡単に明らかになるこの対立と対照が、玄人たちの特別な興味を引くことに値しているのだと確信しています。</p>

<footer>
  <p class="puce"><span style="color: #28a1c5;">恐らくフランソワ・ルモワーヌ作、<ruby>メルクール<rp>（</rp><rt>Mercure</rt><rp>）</rp>・<rp>（</rp><rt>&#160;</rt><rp>）</rp>ド<rp>（</rp><rt>De</rt><rp>）</rp>・<rp>（</rp><rt>&#160;</rt><rp>）</rp>フランス<rp>（</rp><rt>France</rt><rp>）</rp></ruby>誌、<time datetime="1736-09-26">１７３６年９月２６日</time>より</span></p>
</footer>

<aside>

<h3 class="blue">注釈：</h3>

<section id="note_grandegallerie">
<h4 class="blue note">大回廊</h4>

<div class="notices blue">
<p><ruby lang="ja">大回廊<rp>(</rp><rt lang="fr">la&#160;Grande&#160;Gallerie</rt><rp>)</rp></ruby>は正式呼称であります。いわゆる<time datetime="1684">１６８４年</time>での計画の完成の段階での呼称。しかし、<time datetime="1650">十七世紀</time>では、鏡が非常に珍しくて高額のものであったため、公開された段階から、大回廊より、一般的に「<ruby lang="ja">鏡の回廊<rp>(</rp><rt lang="fr">la&#160;Gallerie&#160;des&#160;Glaces</rt><rp>)</rp></ruby>」と呼ばれるようになりました。</p>
</div>
<footer>
  <p class="puce">文書に戻る： <a href="#grandegallerie" title="大回廊">大回廊の一番大きな部分でも ↩</a></p>
</footer>
</section>

<section id="note_pieds">
<h4 class="blue note">ピエ</h4>

<div class="notices blue">
<p><a href="https://ja.wikipedia.org/wiki/アンシャン・レジーム" title="https://ja.wikipedia.org/wiki/アンシャン・レジーム"><ruby>古い体制<rp>(</rp><rt>アンシャン・レジーム</rt><rp>)</rp></ruby></a>の長さの単位。１<ruby lang="ja">ピエ<rp>（</rp><rt lang="fr">pied</rt><rp>）</rp></ruby>は３２、４８㌢。それでは、天井は２０、８㍍の長さ、幅１６、６㍍と奥行き２、８㍍。</p>
</div>
<footer>
  <p class="puce">文書に戻る： <a href="#pieds" title="「ピエ」という註へ戻る">天井は長さが６４ピエ ↩</a></p>
</footer>
</section>

<section id="note_attique">
<h4 class="blue note">アティック</h4>

<div class="notices blue">
<p>古代ローマ建築の正面最上部を成す帯状壁面。コーニスによって正面を構成する主たるオーダーから区別され，付け柱，銘板，浮彫などで装飾された。</p>
</div>
<footer>
  <p class="puce">文書に戻る： <a href="#attique" title="アティック">アティックの絵の中の人物らは ↩</a></p>
</footer>
</section>

<section id="note_lessatellitesdejupiter">
<h4 class="blue note">ユピテルの衛星たち</h4>

<div class="notices blue">
<p>ローマ神話では<ruby lang="ja">ユピテル<rp>(</rp><rt lang="fr">Jupiter</rt><rp>)</rp></ruby>が神々の頭として知られている。</p>
<p>同時に、フランス語ではユピテルは太陽系での天体である<a href="https://ja.wikipedia.org/wiki/木星" title="https://ja.wikipedia.org/wiki/木星"><ruby>木星<rp>(</rp><rt>ユピテル</rt><rp>)</rp></ruby></a>をも指している。</p>
<p>《<cite><ruby lang="ja">ヘラクレスの神格化<rp>(</rp><rt lang="fr">Apothéose&#160;d&#39;Hercule</rt><rp>)</rp></ruby></cite>》では、<time datetime="1610-01-07">１６１０年１月７日</time>に<a href="https://ja.wikipedia.org/wiki/ガリレオ・ガリレイ" title="https://ja.wikipedia.org/wiki/ガリレオ・ガリレイ"><ruby lang="ja">ガリレオ<rp>(</rp><rt lang="it">Galileo</rt><rp>)</rp>・<rp>(</rp><rt lang="it"></rt><rp>)</rp>ガリレイ<rp>(</rp><rt lang="it">Galilei</rt><rp>)</rp></ruby></a>が発見した木星の三つの<a href="https://ja.wikipedia.org/wiki/イオ_(衛星)" title="https://ja.wikipedia.org/wiki/イオ_(衛星)">イオ</a>、<a href="https://ja.wikipedia.org/wiki/エウロパ_(衛星)" title="https://ja.wikipedia.org/wiki/エウロパ_(衛星)">エウロパ</a>、<a href="https://ja.wikipedia.org/wiki/カリスト_(衛星)" title="https://ja.wikipedia.org/wiki/カリスト_(衛星)">カリスト</a>とよばれている衛星を記念する形にしている。</p>
<p>これらの衛星がギリシャ神話のユピテルが愛した<a href="https://ja.wikipedia.org/wiki/ニュンペー" title="https://ja.wikipedia.org/wiki/ニュンペー">ニュンペー</a>にちなむことになったため、絵では<ruby>木星<rp>(</rp><rt>ユピテル</rt><rp>)</rp></ruby>人物のそばに、<a href="#area_lessatellitesdejupiter" title="ユピテルの衛星たち" id="lessatellitesdejupiter">カーテンを持つ三人の女の人</a>の姿で、<a href="https://ja.wikipedia.org/wiki/イーオー" title="https://ja.wikipedia.org/wiki/イーオー">イオ</a>、<a href="https://ja.wikipedia.org/wiki/エウローペー" title="https://ja.wikipedia.org/wiki/エウローペー">エウロパ</a>、<a href="https://ja.wikipedia.org/wiki/カリストー" title="https://ja.wikipedia.org/wiki/カリストー">カリスト</a>が描かれて、当時代の科学的事実が正確に表されることになっている。</p>
<p>同時に、ユピテルの向こう側、<a href="#area_ganimede" title="ガニメデ" id="note_ganimede"><ruby lang="ja">ガニメデ<rp>(</rp><rt lang="fr">Ganymède</rt><rp>)</rp></ruby></a>も見えている。彼は日本語では古代ギリシャ語から呼称されている<a href="https://ja.wikipedia.org/wiki/ガニュメーデース" title="https://ja.wikipedia.org/wiki/ガニュメーデース"><ruby lang="ja">ガニュメーデース<rp>(</rp><rt lang="grc">Γανυμήδης</rt><rp>)</rp></ruby></a>となるが全く同じユピテルが愛した<a href="https://ja.wikipedia.org/wiki/イリオス" title="https://ja.wikipedia.org/wiki/イリオス"><ruby lang="ja">イリオス<rp>(</rp><rt lang="grc">Ἴλιος</rt><rp>)</rp></ruby></a>出身の美少年である。この美少年がガリレオ・ガリレイが発見したイタリア語から呼ばれた<a href="https://ja.wikipedia.org/wiki/ガニメデ_(衛星)" title="https://ja.wikipedia.org/wiki/ガニメデ_(衛星)">ガニメデ</a>四つ目の木星の衛星を表そうとしている。</p>
</div>
<footer>
  <p class="puce">文書に戻る： <a href="#lessatellitesdejupiter2" title="ユピテルの衛星たち">ユピテルの衛星たち ↩</a></p>
  <p class="puce">文書に戻る： <a href="#ganimede2" title="ガニメデ">ガニメデはヘーベのそばにいて ↩</a></p>
  <p class="puce">ガリレオ衛星について、さらに詳しく： <a href="https://ja.wikipedia.org/wiki/ガリレオ衛星" title="https://ja.wikipedia.org/wiki/ガリレオ衛星">ガリレオ衛星 ↩</a></p>
</footer>
</section>

<section id="note_alcide">
<h4 class="blue note">アルシド</h4>

<div class="notices blue">
<p>アルシドはヘラクレスの赤ちゃん名。<ruby lang="ja">アルシド<rp>(</rp><rt lang="fr">Alcide</rt><rp>)</rp></ruby>。</p>
</div>
<footer>
  <p class="puce">文書に戻る： <a href="#pilastre" title="付け柱">アルシド ↩</a></p>
</footer>
</section>

<section id="note_pilastre">
<h4 class="blue note">付け柱</h4>

<div class="notices blue">
<p>壁面から引出して作った装飾的な柱と見えるように作られたもの。フランス語で：<ruby lang="ja">ピ<rp>(</rp><rt lang="fr">p&#160;i</rt><rp>)</rp>ラス<rp>(</rp><rt lang="fr">l&#160;a&#160;s</rt><rp>)</rp>トㇽ<rp>(</rp><rt lang="fr">t&#160;r&#160;e</rt><rp>)</rp></ruby>。</p>
</div>
<footer>
  <p class="puce">文書に戻る： <a href="#pilastre" title="付け柱">付け柱 ↩</a></p>
</footer>
</section>

<section id="note_metre1">
<h4 class="blue note">《ファリサイ人家での祝宴》絵画の寸法</h4>

<div class="notices blue">
<p>幅５２ピエ×高さ１５ピエが現在の寸法では、幅１６，９㍍×高さ４.９㍍とします。</p>
</div>
<footer>
  <p class="puce">文書に戻る： <a href="#metre1" title="ファリサイ人家での祝宴">ファリサイ人家での祝宴 ↩</a> </p>
</footer>
</section>

<section id="note_metre2">
<h4 class="blue note">《エリエゼルとリベカ》絵画の寸法</h4>

<div class="notices blue">
<p>高さ１１ピエ×幅８ピエが現在の寸法では、高さ３.６㍍×幅２.６９㍍とします。</p>
</div>
<footer>
  <p class="puce">文書に戻る： <a href="#metre2" title="エリエゼルがリベカ">エリエゼルとリベカ ↩</a> </p>
</footer>
</section>

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