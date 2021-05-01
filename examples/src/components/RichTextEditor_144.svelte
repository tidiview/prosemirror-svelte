<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 1 FR:177 -->

<article>

<hgroup>
<h1 class="notices green"><cite><ruby lang="ja" style="color:#555;">聖ウルスラの<wbr>聖遺物箱<rp>（</rp><rt lang="nl" style="color:#999;">Het Ursulaschrijn</rt><rp>）</rp></ruby></cite></h1>
<h2 class="green">メムリンク美術館、聖ヨハネ施療院、ブルージュ</h2>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1_700x1037.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1_700x1037.jpg" title="聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1_700x1037.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1920.jpg 1920w"></picture><figcaption>《聖ウルスラの聖遺物箱》</figcaption>
</figure>

<div class="notices green">
<p><a href="#note_bruges" title="ブルージュ" id="bruges"><ruby lang="ja">ブルージュ<rp>（</rp><rt lang="fr">Bruges</rt><rp>）</rp></ruby></a>の<ruby lang="ja">聖<rp>（</rp><rt lang="nl">Sint</rt><rp>）</rp>ヨハネ<rp>（</rp><rt lang="nl">Jans</rt><rp>）</rp>施療院<rp>（</rp><rt lang="nl">hospitaal</rt><rp>）</rp></ruby>だった<ruby>メムリンク<rp>（</rp><rt>Memling</rt><rp>）</rp></ruby>美術館に、<ruby lang="ja">聖ウルスラの聖遺物箱<rp>（</rp><rt lang="nl">Het&#160;Ursulaschrijn</rt><rp>）</rp></ruby>が展示されている。</p>
<p>初期フランドル派の巨匠のひとりである<a href="https://ja.wikipedia.org/wiki/ハンス・メムリンク" title="https://ja.wikipedia.org/wiki/ハンス・メムリンク"><ruby lang="ja">ハンス<rp>（</rp><rt lang="en">Hans</rt><rp>）</rp>・<rp>（</rp><rt lang="en"></rt><rp>）</rp>メムリンク<rp>（</rp><rt lang="en">MEMLING</rt><rp>）</rp></ruby></a>の作品で、<time datetime="1489">１４８９年</time>に祝福儀式を証明する史料が残っているため、ちょっと前に製作されたと断言できる。</p>
<p>昔は、一年にたった一回、聖ウルスラの祝日、<time datetime="10-21">１０月の２１日</time>の日にのみしか公に施療院に展示されていなかったのです！</p>
<p><time datetime="1475">１４７５年</time>に完成した、聖ヨハネ施療院の前の<ruby lang="ja">マリア<rp>（</rp><rt lang="nl">Maria</rt><rp>）</rp>・<rp>（</rp><rt lang="nl"></rt><rp>）</rp>ストラアート<rp>（</rp><rt lang="nl">straat</rt><rp>）</rp></ruby>（マリア通り）の向こうにある<ruby lang="ja">聖母教会<rp>（</rp><rt lang="nl">Onze-Lieve-Vrouwekerk</rt><rp>）</rp></ruby>に見える、土台を除いた <ruby lang="ja">天国の門<rp>（</rp><rt lang="nl">Paradijsportaal</rt><rp>）</rp></ruby> と聖遺物箱が以上に似っているため、メムリンクがそこから形を決めたのではないかとつよく思われる。</p>
<p><time datetime="1500">１５世紀</time>だと、聖ウルスラ伝説はキリスト教の主な著書といえる<a href="https://ja.wikipedia.org/wiki/ヤコブス・デ・ヴォラギネ" title="https://ja.wikipedia.org/wiki/ヤコブス・デ・ヴォラギネ"><ruby lang="ja">ヤコブス<rp>（</rp><rt lang="la">Jacobus</rt><rp>）</rp>・<rp>（</rp><rt lang="la"></rt><rp>）</rp>デ<rp>（</rp><rt lang="la">de</rt><rp>）</rp>・<rp>（</rp><rt lang="la"></rt><rp>）</rp>ヴォラギネ<rp>（</rp><rt lang="la">Voragine</rt><rp>）</rp></ruby></a>が著した『<a href="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" title="https://ja.wikipedia.org/wiki/レゲンダ・アウレア"><ruby>黄金伝説<rp>（</rp><rt>レゲンダ・アウレア</rt><rp>）</rp></ruby></a>』の「一万一千処女」章で知られているため、メムリンクがこの作品のため、この文書に基づいたとも断言するのは可笑しくありません。</p>
<p>聖遺物箱では、たった六つの細密画だけで伝説が正確に見事に物語られていて、よりよく評価するよう、以下、写真と文書を対照的に提供している。</p>
</div>

<h2 class="green">一万一千処女</h2>

<p>一万一千人の乙女たちが殉教したいきさつは、以下のとおりである。</p>
<p>昔<ruby lang="ja">ブリタニア<rp>（</rp><rt lang="la">Britannia</rt><rp>）</rp></ruby>に<ruby lang="ja">ノトゥス<rp>（</rp><rt lang="la">Nothus</rt><rp>）</rp></ruby>もしくは<ruby lang="ja">マウルス<rp>（</rp><rt lang="la">Maurus</rt><rp>）</rp></ruby>という名の<ruby>敬<rp>（</rp><rt>けい</rt><rp>）</rp>度<rp>（</rp><rt>けん</rt><rp>）</rp></ruby>なキリスト教徒の王がいた。王には娘がひとりあって、その名を<ruby>ウルスラ<rp>（</rp><rt>Ursula</rt><rp>）</rp></ruby>といった。
品行ただしく、聡明で、みめかたちも美しかったので、その評判は、津々浦々にまで聞こえていた。</p>
<p>さて、当時の<ruby lang="ja">イングランド<rp>（</rp><rt lang="la">Anglia</rt><rp>）</rp></ruby>王は、たいへん強力で、多くの部族を支配下に置いていた。
ウルスラの高い評判は、この王の耳にもとどいた。
彼は、その乙女を自分のひとり息子の嫁にむかえることができれば、これにまさる喜びはあるまい、と言った。
若い王子も、ぜひその乙女を妻にしたいものだと考えた。
そこで、ウルスラの<ruby>父<rp>（</rp><rt>ふ</rt><rp>）</rp>王<rp>（</rp><rt>おう</rt><rp>）</rp></ruby>のもとに盛大な使節団を送りこむことにした。
そして、<ruby>慇<rp>（</rp><rt>いん</rt><rp>）</rp>懃<rp>（</rp><rt>ぎん</rt><rp>）</rp></ruby>に礼をつくし、相手の意をむかえることをいろいろ約束してやれ、ただし、色よい返事をしそうになかったらおどしをかける手も忘れるでないぞ、と使者たちに言いふくめた。
ブリタニアの王は、使者の口上を聞いて、困ったことになったものだと頭をかかえこんだ。
というのは、キリストの教えを信仰しているわが娘を偽神の崇拝者にあたえる気にはなれなかったからである。
それに、娘がこの結婚にけっして同意しないであろうことも、おおよそ見当がついていた。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule_700x395.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule_700x395.jpg" title="《ケルンでの到着》、《バーゼルでの到着》、《ローマでの到着》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《ケルンでの到着》、《バーゼルでの到着》、《ローマでの到着》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule_700x395.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-1920.jpg 1920w"></picture><figcaption>《<ruby lang="ja">ケルン<rt lang="la">Colonia</rt></ruby>での到着》、《<ruby lang="ja">バーゼル<rt lang="la">Basilea</rt></ruby>での到着》、《<ruby lang="ja">ローマ<rt lang="la">Roma</rt></ruby>での到着》</figcaption>
</figure>

<p>他方では、イングランド王の<ruby>兇<rp>（</rp><rt>きょう</rt><rp>）</rp>死<rp>（</rp><rt>し</rt><rp>）</rp>暴<rp>（</rp><rt>ぼう</rt><rp>）</rp></ruby>さがおそろしかった。
けれども、ウルスラは、天主のおさとしがあったのであろうか、イングランド王の申し出をお受けなさいと父王にすすめた。
ただし、イングランド王とお父さまで十人の乙女を<ruby>選<rp>（</rp><rt>よ</rt><rp>）</rp></ruby>りすぐって、わたしの道づれにつけ、わたしと乙女たちにそれぞれ侍女を千人ずつあたえてください、そして、わたしたちが乗る船を何<ruby>艘<rp>（</rp><rt>そう</rt><rp>）</rp></ruby>か用意してください、それから、わたしが純潔をささげるまでに三年間の<ruby>猶<rp>（</rp><rt>ゆ</rt><rp>）</rp>予<rp>（</rp><rt>うよ</rt><rp>）</rp></ruby>をみとめてください、そのあいだにイングランドの王子は洗礼を受け、キリスト教の教義を三年間勉強してくださらなくてはなりません、これがわたしの条件です――ウルスラは、父親にそう言った。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2_700x1071.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2_700x1071.jpg" title="《守護者である聖ウルスラ》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《守護者である聖ウルスラ》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2_700x1071.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1920.jpg 1920w"></picture><figcaption>《守護者である聖ウルスラ》</figcaption>
</figure>

<p>これは、たしかに名案であった。
この難題をつきつければ、イングランドの王子もその野望を思いとどまるだろう、思いとどまってくれなければ、自分とこれらの大勢の乙女たちを天主にささげようというのが、ウルスラのひそかな念願であった。
ところが、王子のほうは、なにひとつ文句をつけずにウルスラの条件をのみ、みずから父のイングランド王を熱心に説きふせた。
そして、さっそく洗礼を受けて、ウルスラから出されたすべての要求をいそいで実行に移せと命じた。
また、娘の身の安全を案じた父親のはからいで、ウルスラと乙女たちの<ruby>一行<rp>（</rp><rt>いっこう</rt><rp>）</rp></ruby>には護衛役の男たちもついていくことになった。
こうして国じゅうから乙女たちが集まってきた。
この盛大な<ruby>門<rp>（</rp><rt>かど</rt><rp>）</rp>出<rp>（</rp><rt>で</rt><rp>）</rp></ruby>の光景を見んものと駈けつけてきた男たちもあった。
それに、彼女と巡礼の旅をともにする司教たちも続々と集まってきた。</p>
<p>そのなかには、バーゼルの司教<ruby>パンタルス<rp>（</rp><rt>Pantalus</rt><rp>）</rp></ruby>もいた。
この人は、このあと一行を<ruby>ローマ<rp>（</rp><rt>Roma</rt><rp>）</rp></ruby>まで案内し、その帰途乙女たちといっしょに殉教したのである。
聖<ruby lang="ja">ゲラシナ<rp>（</rp><rt lang="la">Gerasina</rt><rp>）</rp></ruby>もやってきた。
彼女は、シチリアの王妃で、狼のように残忍であった夫の国王をいわば小羊に変えたのである。
彼女はまた、司教<ruby lang="ja">マウリシウス<rp>（</rp><rt lang="la">Mauritius</rt><rp>）</rp></ruby>と<ruby lang="ja">ダリア<rp>（</rp><rt lang="la">Daria</rt><rp>）</rp></ruby>(ウルスラの母)との姉妹でもあった。
彼女は、ウルスラの父から秘密を打ち明ける手紙をもらうなり、神のお告げを受け、<ruby lang="ja">バビラ<rp>（</rp><rt lang="la">Babilla</rt><rp>）</rp></ruby>、<ruby lang="ja">ユリアナ<rp>（</rp><rt lang="la">Juliana</rt><rp>）</rp></ruby>、<ruby lang="ja">ウィクトリア<rp>（</rp><rt lang="la">Victoria</rt><rp>）</rp></ruby>および<ruby lang="ja">アウレア<rp>（</rp><rt lang="la">Aurea</rt><rp>）</rp></ruby>という4人の娘たちをつれて海路はるばるブリタニアまでやってきたのである。
まだいとけない王子の<ruby lang="ja">ハドリアヌス<rp>（</rp><rt lang="la">Hadrianus</rt><rp>）</rp></ruby>も、姉たちをしたっていっしょに<ruby>船<rp>（</rp><rt>ふな</rt><rp>）</rp>旅<rp>（</rp><rt>たび</rt><rp>）</rp></ruby>をしてきた。</p>



<!-- Page 2 -->


<p>国の政治は、あとに残った王子のひとりが引き受けることになっていた。
乙女たちがさまざまな国から集められたのも、このゲラシナの助言によることであった。
彼女は、終始乙女たちの指導者であり、最後は乙女たちと殉教をともにしたのだった。</p>
<p>さて、決められた条件どおり侍女たちも集まり、船の用意から食料の準備までととのうと、ウルスラは、仲間になってくれる乙女たちに自分の秘密の計画を打ち明けた。
乙女たちはみな、騎士として忠節をつくして従軍いたしますと誓った。
そして、実戦さながらの戦闘訓練をはじめた。
集合したり、散開したり、撃って出たり、退却したり、ありとあらゆる戦術の訓練にはげんだ。
思いついたことは、なんでも稽古してみた。
<ruby>行<rp>（</rp><rt>こう</rt><rp>）</rp>軍<rp>（</rp><rt>ぐん</rt><rp>）</rp></ruby>に出かけると、ときにはお昼ごろ帰ってくることもあれば、ときにはほとんど日が暮れるまで帰らないこともあった。
王侯や貴族たちも、この訓練の様子を<ruby>見<rp>（</rp><rt>み</rt><rp>）</rp>物<rp>（</rp><rt>もの</rt><rp>）</rp></ruby>にやってきては、みな感心したり、大喜びしたりした。
やがてウルスラは、乙女たちをみんなキリスト教に改宗させると、ついに出発の号令をくだし、<ruby>順<rp>（</rp><rt>じゅん</rt><rp>）</rp>風<rp>（</rp><rt>ぷう</rt><rp>）</rp></ruby>を受け一日にして<a href="#note_tyella" title="テュエラ" id="tyella"><ruby lang="ja">テュエラ<rp>（</rp><rt lang="la">Tyella</rt><rp>）</rp></ruby></a>という<ruby lang="ja">ガリア<rp>（</rp><rt lang="la">Gallia</rt><rp>）</rp></ruby>の港に着き、そこから<ruby lang="ja">ケルン<rp>（</rp><rt lang="la">Colonia</rt><rp>）</rp></ruby>の町にやってきた。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3_700x1047.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3_700x1047.jpg" title="《ケルンでの到着》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《ケルンでの到着》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3_700x1047.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1920.jpg 1920w"></picture><figcaption>《<ruby><rb>ケルン</rb><rt>Colonia</rt></ruby>での到着》</figcaption>
</figure>

<p>ここで主の<ruby>御<rp>（</rp><rt>み</rt><rp>）</rp>使<rp>（</rp><rt>つか</rt><rp>）</rp></ruby>いがウルスラにあらわれ、あなたがたはもう一度いっしょにこのケルンに帰ってきて、ここで殉教の栄冠を受けるでしょう、と告げた。
やがて彼女たち一行は、天使の指図にしたがってローマをめざして出発し、<ruby lang="ja">バーゼル<rp>（</rp><rt lang="la">Basilea</rt><rp>）</rp></ruby>の町まで来ると、ここで船を降りて、徒歩でローマにむかった。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4_700x1063.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4_700x1063.jpg" title="《バーゼルでの到着》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《バーゼルでの到着》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4_700x1063.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1920.jpg 1920w"></picture><figcaption>《<ruby><rb>バーゼル</rb><rt>Basilea</rt></ruby>での到着》</figcaption>
</figure>

<p>教皇<a href="#note_cyriacus" title="キュリアクス" id="cyriacus"><ruby lang="ja">キュリアクス<rp>（</rp><rt lang="la">Cyriacus</rt><rp>）</rp></ruby></a>は、一行の到着をよろこんで迎えた。
というのは、教皇自身も、ブリタニアの生まれで、一行のなかに親類縁者も多かったからである。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5_700x1056.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5_700x1056.jpg" title="《ローマでの到着》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《ローマでの到着》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5_700x1056.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1920.jpg 1920w"></picture><figcaption>《<ruby><rb>ローマ</rb><rt>Roma</rt></ruby>での到着》</figcaption>
</figure>

<p>そういうわけで彼は、すべての聖職者ともども乙女たちをてあつくもてなした。
その夜、教皇は、これらの乙女たちといっしょに殉教の冠を受けるであろうという天主のお告げを聞いた。
しかし、彼は、それを自分の胸に秘めておいて、侍女たちのうちまだ受洗していなかった者に洗礼をさずけた。
そして、いよいよそのときが来たと見るや、多くの会衆をまえにして自分の決意を告げ、聖務と教皇位をしりぞいた。
聖<ruby lang="ja">ペトロ<rp>（</rp><rt lang="la">Petro</rt><rp>）</rp></ruby>からかぞえて十九代目の教皇として彼が教会を統治した期間は、一年と十一週間であった。</p>
</div>

<!-- Page 3 -->


<p>これを聞いた人びとは、こぞって異議を申し立てた。
とくに<ruby>枢<rp>（</rp><rt>すう</rt><rp>）</rp>機<rp>（</rp><rt>き</rt><rp>）</rp>卿<rp>（</rp><rt>きょう</rt><rp>）</rp></ruby>たちは、<ruby>強<rp>（</rp><rt>きょう</rt><rp>）</rp>硬<rp>（</rp><rt>こう</rt><rp>）</rp></ruby>に反対した。
教皇は分別をなくし、栄誉ある教皇の座をすてて愚かな小娘のあとを追おうとしているのだ、と考えたからである。
けれども、教皇は、彼らの反対にこころを動かされることなく、<ruby lang="ja">アメトス<rp>（</rp><rt lang="la">Ametos</rt><rp>）</rp></ruby>という名の<ruby>聖<rp>（</rp><rt>せい</rt><rp>）</rp>徳<rp>（</rp><rt>とく</rt><rp>）</rp></ruby>の人物を自分のかわりに教皇位につけた。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6_700x379.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6_700x379.jpg" title="《バーゼルでの帰り》、《一万一千処女の殉教》、《聖ウルスラの殉教》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《バーゼルでの帰り》、《一万一千処女の殉教》、《聖ウルスラの殉教》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6_700x379.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1920.jpg 1920w"></picture><figcaption>《<ruby><rb>バーゼル</rb><rt>Basilea</rt></ruby>での帰り》、《一万一千処女の殉教》、《聖ウルスラの殉教》</figcaption>
</figure>

<p>しかし、聖職者たちの意向を無視して教皇の座を棄てたからというので、彼の名前は、歴代教皇表から抹殺され、清らかな乙女たちも、それまでローマ教会で受けていた好意をすっかり失ってしまった。
そのころ、ローマ帝国の軍隊の指揮官に<ruby lang="ja">マクシムス<rp>（</rp><rt lang="la">Maximus</rt><rp>）</rp></ruby>と<ruby lang="ja">アフリカヌス<rp>（</rp><rt lang="la">Africanus</rt><rp>）</rp></ruby>というふたりの悪将軍がいた。
彼らは、大勢の乙女たちを見、さらに多くの男たちや女たちがそれに参加するのを見るにつけても、この調子ではキリスト教の勢力が大きくなりすぎるのではないかと心配になった。
そこで、一行の帰り道を念入りに調べあげて、<ruby lang="ja">フン<rp>（</rp><rt lang="la">Hunni</rt><rp>）</rp></ruby>族の王<ruby>ユリウス<rp>（</rp><rt>Julius</rt><rp>）</rp></ruby>に使者を送り、この乙女たちはキリスト教徒であるから、一行がケルンに着いたら兵を出してみな殺しにしてもらいたいと伝えさせた。</p>
<p>一方、キュリアクスは、清らかな乙女たちの一行といっしょにローマを出発した。
助祭枢機卿の<ruby lang="ja">ウィンケンティウス<rp>（</rp><rt lang="la">Vincentius</rt><rp>）</rp></ruby>とプリタニア出身で7年間<a href="#note_antioche" title="アンティオケイア" id="antioche"><ruby lang="ja">アンティオケイア<rp>（</rp><rt lang="la">Antiochia</rt><rp>）</rp></ruby></a>の大司教をつとめた<ruby lang="ja">ヤコブス<rp>（</rp><rt lang="la">Jacobus</rt><rp>）</rp></ruby>のふたりも、キュリアクスのあとを追った。
ヤコブスは、そのころ教皇を訪ねてローマに来ていたのだが、すでに用事もすんでローマをあとにしていた。
ところが、そこへ乙女たちが到着したという知らせがとどいたので、いそいでローマにひきかえし、彼女たちの旅と殉教の道づれとなったのである。
また、<ruby lang="ja">バビラ<rp>（</rp><rt lang="la">Babila</rt><rp>）</rp></ruby>や<ruby lang="ja">ユリアナ<rp>（</rp><rt lang="la">Juliana</rt><rp>）</rp></ruby>の母方の<ruby>叔父<rp>（</rp><rt>おじ</rt><rp>）</rp></ruby>にあたる<ruby lang="ja">レヴィカナ<rp>（</rp><rt lang="la">Levicana</rt><rp>）</rp></ruby>の司教マウリシウス。
<a href="#note_luca" title="ルッカ" id="luca"><ruby lang="ja">ルッカ<rp>（</rp><rt lang="la">Luca</rt><rp>）</rp></ruby></a>の司教<ruby lang="ja">フォラリウス<rp>（</rp><rt lang="la">Follarius</rt><rp>）</rp></ruby>。
このころたまたまローマに来ていた<ruby lang="ja">ラヴェンナ<rp>（</rp><rt lang="la">Ravenna</rt><rp>）</rp></ruby>の司教<ruby lang="ja">スルピキウス<rp>（</rp><rt lang="la">Sulpicius</rt><rp>）</rp></ruby>。
こうした人たちも、乙女たちと行をともにした。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7_700x1016.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7_700x1016.jpg" title="《バーゼルでの帰り》、《バーゼルでの帰り》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《バーゼルでの帰り》、《バーゼルでの帰り》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7_700x1016.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1920.jpg 1920w"></picture><figcaption>《<ruby><rb>バーゼル</rb><rt>Basilea</rt></ruby>での帰り》</figcaption>
</figure>

<p>ところで、ウルスラの婚約者<ruby lang="ja">アエテレウス<rp>（</rp><rt lang="la">Etherus</rt><rp>）</rp></ruby>は、ずっとブリタニアにとどまっていたが、ある日、ひとりの天使が夢にあらわれて、キリスト教徒になるよう母を説得しなさいと命じた。
というのは、父王のアエテレウスは、キリスト教に改宗して一年たたないうちに世を去り、いまは王子のアエテレウスが王位をついでいたのである。
さて、清らかな乙女たちが前述の司教たちとローマからもどってきたとき、アエテレウスは、すぐに花嫁のウルスラを迎えに出発し、ケルンでともに殉教の栄冠を受けなさいという主のお言葉を聞いた。
彼は、<ruby>主<rp>（</rp><rt>しゅ</rt><rp>）</rp></ruby>のお言葉にしたがい、まず母に洗礼を受けさせると、母とすでに受洗していた妹の<ruby lang="ja">フロレンティナ<rp>（</rp><rt lang="la">Florentina</rt><rp>）</rp></ruby>のふたりをつれ、さらに司教の<ruby lang="ja">クレメンス<rp>（</rp><rt lang="la">Clemente</rt><rp>）</rp></ruby>をもともなって乙女たちを迎えにいき、殉教するためにその仲間にくわわった。
これにギリシアの司教<ruby lang="ja">マルクルス<rp>（</rp><rt lang="la">Marculus</rt><rp>）</rp></ruby>とその姪の<ruby lang="ja">コンスタンティア<rp>（</rp><rt lang="la">Constantia</rt><rp>）</rp></ruby>もくわわった。
このコンスタンティアというのは、<ruby lang="ja">コンスタンティノポリス<rp>（</rp><rt lang="la">Constantinopolis</rt><rp>）</rp></ruby>の王<ruby lang="ja">ドロテオス<rp>（</rp><rt lang="la">Dorotheos</rt><rp>）</rp></ruby>の妹で、婚約していたある国の王子に先立たれたあと、純潔を守る誓いを神に立てていたのであった。
このふたりは、夢のお告げを受けてローマにやってきて、乙女たちの一行にくわわって殉教することになった。</p>
<p>こうして乙女たちと司教たちは、ケルンに帰ってきたが、町は、すでに四方八方からフン族に<ruby>包<rp>（</rp><rt>ほう</rt><rp>）</rp>囲<rp>（</rp><rt>い</rt><rp>）</rp></ruby>されていた。
フン族は、乙女たちの姿を見ると、<ruby>大<rp>（</rp><rt>だい</rt><rp>）</rp>音<rp>（</rp><rt>おん</rt><rp>）</rp>声<rp>（</rp><rt>じょう</rt><rp>）</rp></ruby>をあげておそいかかり、羊の群れにとびかかる狼のようにあばれまわり、一行を手あたりしだいに殺した。
ほかの乙女たちの首をみな<ruby>刎<rp>（</rp><rt>ね</rt><rp>）</rp></ruby>おわると、いよいよウルスラのそばにやってきた。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8_700x540.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8_700x540.jpg" title="《一万一千処女の殉教》、《聖ウルスラの殉教》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《一万一千処女の殉教》、《聖ウルスラの殉教》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-75-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8_700x540.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1920.jpg 1920w"></picture><figcaption>《一万一千処女の殉教》、《聖ウルスラの殉教》</figcaption>
</figure>

<p>フン族の王は、ウルスラの美しさにおどろき、うっとりとなって見とれた。
そして、仲間の乙女たちの死を悲しんでいる彼女に慰めの言葉をかけ、そなたを妻にむかえたいと申し出た。
ウルスラは、それをことわった。
王は、 <ruby>侮<rp>（</rp><rt>ぶ</rt><rp>）</rp>辱<rp>（</rp><rt>じょく</rt><rp>）</rp></ruby> されたとおもい、矢を一本とって狙いを定め、ウルスラのからだを射抜いた。
こうしてウルスラに殉教の栄冠がさずけられたのである。</p>
<p><a href="#note_cordula" title="コルドゥラ" id="cordula"><ruby lang="ja">コルドゥラ<rp>（</rp><rt lang="la">Cordula</rt><rp>）</rp></ruby></a>という名前の乙女は、恐怖心にとりつかれて一晩じゅう船のなかに隠れていたがあくる朝、みずからすすんで死地におもむき、殉教者の冠を受けた。
しかし、仲間の乙女たちといっしょに受難しなかったからというので、この乙女のための祝日はおこなわれていなかったのであるが、その後ずっと年月がたってから、彼女は、ある隠修女の夢枕にあらわれ、一万一千処女の祝日の翌日を自分の祝日にしてほしいと打ち明けた。
ところで、これらの乙女たちが殉教したのは、<ruby>主<rp>（</rp><rt>しゅ</rt><rp>）</rp></ruby>の紀元２３８年であったということになっている。
しかし、ある人たちの説によると、年代の計算から言って、この年にそんな出来ことがあったとは考えられないという。
シチリアは、当時はまだ王国でなかったし、コンスタンティノポリスも、そうであった。
ところが、この物語では、これらの国の王妃が乙女たちと行をともにしたことになっている。
だから、殉教があったのは、皇帝<a href="#note_constantinus" title="ブルージュ" id="constantinus"><ruby lang="ja">コンスタンティヌス<rp>（</rp><rt lang="la">Constantinus</rt><rp>）</rp></ruby></a>のときよりもあと、フン族や<ruby>ゴート<rp>（</rp><rt>Gothi</rt><rp>）</rp></ruby>人が諸国を荒らしまわっていたころ、すなわち、ある年代記にもあるように、<a href="#note_marcianus" title="マルキアヌス" id="marcianus"><ruby lang="ja">マルキアヌス<rp>（</rp><rt lang="la">Marcianus</rt><rp>）</rp></ruby>帝</a>が帝位にあった452年のことだとしたほうがよさそうである。</p>
<p>ある修道院長があって、ケルンのさる女子修道院長から一万一千処女のひとりの聖遺骨をもらい受け、銀の <ruby>聖<rp>（</rp><rt>せい</rt><rp>）</rp>遺<rp>（</rp><rt>い</rt><rp>）</rp>物匣<rp>（</rp><rt>ぶっこう</rt><rp>）</rp></ruby>におさめてわたしの修院聖堂に安置しますと約束した。
しかし、まる一年のあいだ木の <ruby>匣<rp>（</rp><rt>はこ</rt><rp>）</rp></ruby>に入れて祭壇のうえに置いたままにしていた。
すると、ある夜のこと、院長が修道士たちと早朝のミサをつとめていると、くだんの童貞聖が生前の姿のまま祭壇のうえから降りてきて、祭壇のまえで深々とお辞儀をすると、怖れおののいている修道士たちを<ruby>尻<rp>（</rp><rt>しり</rt><rp>）</rp>目<rp>（</rp><rt>め</rt><rp>）</rp></ruby>に内陣の中央をとおって出ていった。
院長があわてて聖遺物匣のところに行ってみると、匣のなかは、<ruby>空<rp>（</rp><rt>から</rt><rp>）</rp></ruby>っぽであった。そこで、院長は、いそいでケルンに行き、女子修院長に一部始終を話した。ふたりの院長がその聖遺骨を取りだした場所に行ってみると、遺骨はここにもどっていた。
修院長は、ふかく許び、もう一度その聖遺骨か、あるいはベつの聖遺骨をおゆずりいただきたい、こんどはすぐに銀の聖遺物匣をつくらせますから、とたのみこんだが、願いはかなえられなかった。</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9_700x1050.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9_700x1050.jpg" title="《聖母子と出資女者たち》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《聖母子と出資女者たち》、聖ウルスラの聖遺物箱、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9_700x1050.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1920.jpg 1920w"></picture><figcaption>《聖母子と出資女者たち》</figcaption>
</figure>

<p>ひとりの修道士がいて、これらの処女たちにあつい崇敬をささげていた。
ある日のこと、重病で<ruby>臥<rp>（</rp><rt>ふ</rt><rp>）</rp></ruby>せっているところへ世にも美しいひとりの乙女があらわれて、わたしを知っていらっしゃいますか、とたずねた。
修道士は、この<ruby>幻<rp>（</rp><rt>げん</rt><rp>）</rp>影<rp>（</rp><rt>えい</rt><rp>）</rp></ruby>におどろいて、いいえ、まったく存じあげません、と答えた。
乙女は、</p>
<p>「わたしは、あなたがひたすらに愛をささげてくださっている処女のひとりで、その愛のお返しに来たのです。
わたしたちに愛と崇敬をささげながら〈<a href="#note_notrepere" title="主の祈り" id="notrepere"><ruby>主<rp>（</rp><rt>しゅ</rt><rp>）</rp></ruby>の祈り</a>〉を一万一千回となえなさい。
そうすれば、臨終のときにわたしたちの加護と慰めが得られましょう」</p>
<p>そう言うとともに、乙女の姿は、かき消すように見えなくなった。
修道士は、彼女に言われたことをすぐさま実行し、修道院長をよんでもらって、<a href="#note_sacrement" title="終油の秘蹟" id="sacrement">終油の<ruby>秘<rp>（</rp><rt>ひ</rt><rp>）</rp>蹟<rp>（</rp><rt>せき</rt><rp>）</rp></ruby></a>をさずけてくださいと言った。
終油を受けていたとき、彼は、突然、まわりに立っている修道士たちにむかって、聖のみなさんが通れるようにそこをどいてください、と大声で言った。
どうしたのですか、と院長がたずねると、彼は、夢に見た乙女が約束してくれたことを話して聞かせた。</p>
<p>そこで、一同は席をはずした。しばらくして部屋にもどってみると、修道士は、すでに主のみもとに旅だったあとであった。</p>

<footer>
  <p><span style="color: #3d8b3d;">ヤコブス・デ・ヴォラギネ、<cite>黄金伝説</cite>、第１５１章、「一万一千処女章」より</span> </p>
</footer>



<aside>

<h3 id="commentaires" class="green">註釈</strong></h3>

<h4 id="note_bruges" class="green note">ブルージュ</h4>

<div class="notices green">
  <p><ruby lang="ja">ブルージュ<rp>（</rp><rt lang="fr">Bruges</rt><rp>）</rp></ruby> は、フランス語から由来している歴史的な呼称で、現在、フラマン語での <a href="https://ja.wikipedia.org/wiki/ブルッヘ" title="https://ja.wikipedia.org/wiki/ブルッヘ"><ruby lang="ja">ブルッヘ<rp>（</rp><rt lang="nl">Brugge</rt><rp>）</rp></ruby></a> のほうに改める推薦もある。</p>
</div>

<footer>
  <p>註に戻る：　<a href="#bruges" title="ブルージュ">↑</a></p>
</footer>

<h4 id="note_tyella" class="green note">テュエラ</h4>

<div class="notices green">
  <p><ruby lang="ja">テュエラ<rp>（</rp><rt lang="la">Tyella</rt><rp>）</rp></ruby> というところは北海海岸海岸であろうが、未詳。
  海上で嵐に流され、オランダのワール川（ライン川下流の分流）の河口東岸に漂着し、ここからライン川をさかのぼってケルンにいたったのであろう。</p>
</div>

<footer>
  <p>註に戻る：　<a href="#tyella" title="テュエラ">↑</a></p>
</footer>

<h4 id="note_cyriacus" class="green note">キュリアクス</h4>

<div class="notices green">
  <p>歴代教皇表にこの名の教皇はありません、実在はいまだに不明です。</p>
</div>

<footer>
  <p>註に戻る：　<a href="#cyriacus" title="キュリアクス">↑</a></p>
</footer>

<h4 id="note_antioche" class="green note">アンティオケイア</h4>

<div class="notices green">
  <p>アンテオケ、アンティオキアとも書く。
  ローマ帝国属州シリアの首都。
  <ruby>オロンテス<rp>（</rp><rt>Orontes</rt><rp>）</rp></ruby>川にのぞみ、現在はトルコ東南部、シリアとの国境に近い小都市<ruby>アンタキヤ<rp>（</rp><rt>Antakya</rt><rp>）</rp></ruby>であるが、ローマ帝国時代にはローマ、<ruby>アレクサンドリア<rp>（</rp><rt>Alexandria</rt><rp>）</rp></ruby>につぐ地中海第三の大都市であった。
  <ruby>イエルサレム<rp>（</rp><rt>Orontes</rt><rp>）</rp></ruby> につぐ初代キリスト教会の中心地、 パウロを中心とする異邦人伝道の一大拠点。
  また、３～５世紀には一連のすぐれた神学思想家をうみ、いわゆる〈アンティオケイア学派〉を形成した。</p>
</div>

<footer>
  <p>註に戻る：　<a href="#antioche" title="アンティオケイア">↑</a></p>
</footer>

<h4 id="note_luca" class="green note">ルッカ</h4>

<div class="notices green">
  <p><a href="https://ja.wikipedia.org/wiki/ルッカ" title="https://ja.wikipedia.org/wiki/ルッカ"><ruby lang="ja">ルッカ<rp>（</rp><rt lang="it">Lucca</rt><rp>）</rp></ruby></a>はイタリア中部、フィレンツェの西北西７３キロにある町。</p>
</div>

<footer>
  <p>註に戻る：　<a href="#luca" title="ルッカ">↑</a></p>
</footer>

<h4 id="note_cordula" class="green note">コルドゥラ</h4>

<div class="notices green">
  <p><ruby lang="ja">コルドゥラ<rp>（</rp><rt lang="la">Cordula</rt><rp>）</rp></ruby>は聖女。
  祝日は、一万一千処女の祝日の翌日にあたる<time datetime="10-22">１０月２２日</time>。</p>
  <p>この聖女の名前と聖伝は、ノイエンへーアゼ（ドイツ中部、ケルンとカッセルの両市の中間に位置する山村）の聖へルムトルディス（またはへルムトルーデ、没<time datetime="950">９５０年</time>ごろ、祝<time datetime="05-31">５月３１日</time>）という隠修女が見たという幻視にもとづいている。</p>
</div>

<footer>
  <p>註に戻る：　<a href="#cordula" title="コルドゥラ">↑</a></p>
</footer>

<h4 id="note_constantinus" class="green note">コンスタンティヌス</h4>

<div class="notices green">
  <p>ローマ皇帝コンスタンティヌス一世（位<time datetime="306">３０６</time>～<time datetime="337">３３７</time>）、大帝とよばれる。
  キリスト教の最初の公認者、その保護・育成につとめ、みずから〈十三人目の使徒〉をもって任じ、第一回ニカイア公会議によってアリウス派を異端とした。
  <time datetime="330">３３０</time>年都をローマからビザンティウムに移し、これをコンスタンティノポリスと改名。</p>
  <p>自身はずっと<ruby>常勝太陽神<rp>（</rp><rt>ソル・インウイクトウス</rt><rp>）</rp></ruby>の信者であったが、臨終の床で受洗した。</p>
</div>

<footer>
  <p>註に戻る：　<a href="#constantinus" title="ブルージュ">↑</a></p>
</footer>

<h4 id="note_marcianus" class="green note">マルキアヌス</h4>

<div class="notices green">
  <p>ラテン名はフラウィアヌス。
  コンスタンティノポリスの総大司教（位<time datetime="446">４４６</time>～<time datetime="449">４４９</time>）。
  正統信仰の護持者として当時のキリスト単性論論争に重要な役割をはたした。</p>
</div>

<footer>
  <p>註に戻る：　<a href="#marcianus" title="マルキアヌス">↑</a></p>
</footer>

<h4 id="note_notrepere" class="green note">主の祈り</h4>

<div class="notices green">
  <p><ruby>主<rp>（</rp><rt>しゅ</rt><rp>）</rp>禱<rp>（</rp><rt>とう</rt><rp>）</rp>文<rp>（</rp><rt>ぶん</rt><rp>）</rp></ruby>とも言うキリスト教のおもな祈りである。</p>
  <p>イエスが弟子たちに教え、みずから祈られた祈りで、『マタ』６章・９節～１３節に基づいている。以下のとおりです。</p>
  <ol class="doc">
    <li value="09">こう祈りなさい。</li>
    <li>『天におられる私たちの父よ</li>
    <li>御名が聖とされますように。</li>
    <li value="10">御国が来ますように。</li>
    <li>御心が行われますように</li>
    <li>天におけるように地の上にも。</li>
    <li value="11">私たちに日ごとの糧を今日お与えください。</li>
    <li value="12">私たちの負い目をお赦しください</li>
    <li>私たちも自分に負い目のある人を</li>
    <li>赦しましたように。</li>
    <li value="13">私たちを試みに遭わせず</li>
    <li>悪からお救いください。』</li>
  </ol>
</div>

<footer>
  <p>註に戻る：　<a href="#notrepere" title="主の祈り">↑</a></p>
</footer>

<h4 id="note_sacrement" class="green note">終油の秘蹟</h4>

<div class="notices green">
  <p>司祭が重い病人の眼、鼻、耳、ロ、手足に油で十字架をしるしながら罪の赦しと聖寵を祈ることを〈終油の秘蹟〉という。
  用いられる油は、聖別されたオリヴ油である。
  ここでは臨終を迎えている意。</p>
</div>

<footer>
  <p>註に戻る：　<a href="#sacrement" title="終油の秘蹟">↑</a></p>
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