<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 20 -->

<article>

  <hgroup>
    <h2 id="mise-en-relation" class="yellow"><cite><ruby lang="ja" style="color:#555;">洗礼者<wbr>ヨハネと<wbr>福音書記者<wbr>ヨハネの<wbr>三連画<rp>(</rp><rt lang="nl" style="color:#999;">Triptiek van Johannes de Doper en Johannes de Evangelist</rt><rp>)</rp></ruby></cite>に表わされている場面の元にある諸文書</h2>
      <h3 class="yellow"><cite><ruby style="color:#e6a64d;">黄金伝説<rp>(</rp><rt style="color:#e6a64d;">レゲンダ・アウレア</rt><rp>)</rp></ruby></cite>においての<cite>福音書記者ヨハネ</cite></h3>
  </hgroup>

    <h3><cite><ruby style="color:#e6a64d;">黄金伝説<rp>(</rp><rt style="color:#e6a64d;">レゲンダ・アウレア</rt><rp>)</rp></ruby></cite>においての第６５章　ラティナ門外の聖ヨハネの文書</h3>


    <p class="puce"><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:10#description-right-shutter">パトモス島で<cite>黙示録</cite>を証言するヨハネ、右翼パネルの全景に戻る。 ↩</a></p>


    <hr>
    <p>out</p>
    <p class="no-puce">第４章</p>
      <ol class="doc">
        <li value="01"その後、わたしが見ていると、見よ、開かれた門が天にあった。そして、ラッパが響くようにわたしに語りかけるのが聞こえた、あの最初の声が言った。
          <p class="conversation">
            「ここへ上って来い。この後必ず起こることをあなたに示そう。」
          </p>
        </li>
      </ol>

    <hr>

      <blockquote id="apocalypse-4-2" cite="https://www.bible.com/ja/bible/1819/REV.4.新共同訳">
        <ol class="doc">
          <li value="02">わたしは、たちまち<span style="color: #e6a64d;">「霊」</span>に満たされた。
          すると、見よ、<span style="color: #e6a64d;">天</span>に<span style="color: #e6a64d;">玉座</span>が設けられていて、その玉座の上に座っている<span style="color: #e6a64d;">方</span>がおられた。</li>
          <li value="03">その方は、碧玉や赤めのうのようであり、
          玉座の周りにはエメラルドのような<span style="color: #e6a64d;">虹</span>が輝いていた。</li>
          <li value="04">また、玉座の周りに二十四の座があって、それらの座の上には白い衣を着て、頭に金の冠をかぶった<span style="color: #e6a64d;">二十四人の長老</span>が座っていた。</li>
          <li value="05">玉座からは、稲妻、さまざまな音、雷が起こった。また、玉座の前には、七つのともし火が燃えていた。
          これは神の七つの霊である。</li>
          <li value="06">また、玉座の前は、水晶に似たガラスの海のようであった。</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:10#renvoi-apocalypse-4-2">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:10#image-apocalypse-4-2">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-4-7" cite="https://www.bible.com/ja/bible/1819/REV.4.新共同訳">
          <ol class="doc">
            <li value="07">第一の生き物は<span style="color: #e6a64d;">獅子</span>のようであり、第二の生き物は<span style="color: #e6a64d;">若い雄牛</span>のようで、第三の生き物は<span style="color: #e6a64d;">人間のような顔</span>を持ち、第四の生き物は空を飛ぶ<span style="color: #e6a64d;">鷲</span>のようであった。</li>
          <li value="08">
            <p>この四つの生き物には、それぞれ<span style="color: #e6a64d;">六つの翼</span>があり、その周りにも内側にも、一面に目があった。
          彼らは、昼も夜も絶え間なく言い続けた。</p>
              <p class="conversation">
                「聖なるかな、聖なるかな、聖なるかな、全能者である神、主、かつておられ、今おられ、やがて来られる方。」
              </p>
            </li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:10#renvoi-apocalypse-4-7">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:10#image-apocalypse-4-2">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>
<p>out</p>
          <ol class="doc">
            <li value="9">これらの生き物が、玉座に座り、世々限りなく生きておられる方に、栄光と誉れと感謝とを献げる度に、</li>
            <li value="10">二十四人の長老は、玉座に座っている方の前にひれ伏し、世々限りなく生きておられる方を礼拝し、その冠を玉座の前に投げ出して言った。</li>
            <li value="11">
              <p class="conversation">
                「私たちの主、また神よ／あなたこそ／栄光と誉れと力を受けるにふさわしい方。／あなたは万物を造られ／万物はあなたの御心によって存在し／また造られたからです。」
              </p>
            </li>
          </ol>

      <hr>

      <p class="no-puce">第５章</p>
      <blockquote id="apocalypse-5-1" cite="https://www.bible.com/ja/bible/1819/REV.5.新共同訳">
        <ol class="doc">
          <li value="01">「またわたしは、玉座に座っておられる方の右の手に<span style="color: #e6a64d;">巻物</span>があるのを見た。表にも裏にも字が書いてあり、<span style="color: #e6a64d;">七つの封印</span>で封じられていた。」</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:10#renvoi-apocalypse-5-1">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:10#image-apocalypse-4-2">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>
<p>out</p>
        <ol class="doc">
          <li value="2">また一人の力ある天使が、
            <p class="conversation">
              「封印を解いて、この巻物を開くのにふさわしい者は誰か」と大声で叫んでいるのを見た。
            </p>
          </li>
          <li value="3">しかし、天にも地にも地の下にも、この巻物を開き、見ることのできる者は誰もいなかった。</li>
          <li value="4">この巻物を開くにも、見るにも、ふさわしい者が誰一人見つからなかったので、私は激しく泣き出した。</li>
          <li value="5">すると、長老の一人が私に言った。
            <p class="conversation">
              「泣くな。見よ、ユダ族の獅子、ダビデのひこばえが勝利を得たので、七つの封印を解き、この巻物を開くことができる。」
            </p>
          </li>
        </ol>

      <hr>

      <blockquote id="apocalypse-5-6" cite="https://www.bible.com/ja/bible/1819/REV.5.新共同訳">
        <ol class="doc">
          <li value="06">「わたしはまた、玉座と四つの生き物の間、長老たちの間に、屠られたような<span style="color: #e6a64d;">小羊が立っている</span>のを見た。小羊には七つの角と七つの目があった。この七つの目は、全地に遣わされている神の七つの霊である。」</li>
          <li value="07">小羊は進み出て、玉座に座っておられる方の右の手から、巻物を受け取った。</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:10#renvoi-apocalypse-5-6">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:10#image-apocalypse-4-2">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>
<p>out</p>
          <ol class="doc">
            <li value="8">巻物を受け取ったとき、四つの生き物と二十四人の長老はおのおの、竪琴と、香で満たされた金の鉢とを手に持って、小羊の前にひれ伏した。この香は聖なる者たちの祈りである。</li>
            <li value="9">そして、彼らは新しい歌を歌った。
              <p>
                「あなたは、巻物を受け取り／その封印を解くのにふさわしい方です。／あなたは、屠られて、その血により、神のために／あらゆる部族と言葉の違う民／あらゆる民族と国民の中から人々を贖い 
              </p>
            </li>
            <li value="10">
              <p class="conversation">
                彼らを私たちの神に仕える御国の民／また祭司となさったからです。／彼らは地上を支配するでしょう。」
              </p>
            </li>
            <li value="11">また、私は見た。そして、玉座と生き物と長老たちとの周りに、多くの天使の声を聞いた。その数は千の幾千倍、万の幾万倍であった。</li>
            <li value="12">
              <p class="conversation">
                天使は大声でこう言った。／「屠られた小羊こそ、力、富、知恵、権威／誉れ、栄光、そして賛美を／受けるにふさわしい方です。」
              </p>
            <li value="13">また私は、天と地、地の下と海にいるすべての造られたもの、そして、そこにいるあらゆるものがこう言うのを聞いた。
              <p class="conversation">
                「玉座に座っておられる方と小羊に／賛美、誉れ、栄光、そして力が／世々限りなくありますように。」
              </p>
            </li>
            <li value="14">四つの生き物は
              <p class="conversation">
                「アーメン」
              </p>
            と唱え、長老たちはひれ伏して礼拝した。</li>
          </ol>

      <hr>

      <p class="no-puce">>第６章</p>
        <blockquote id="apocalypse-6-1" cite="https://www.bible.com/ja/bible/1819/REV.6.新共同訳">
        <ol class="doc">
          <li value="01"><p>また、わたしが見ていると、小羊が七つの封印の一つを開いた。すると、四つの生き物の一つが、雷のような声で</p>
              <p class="conversation">
                「出て来い」
              </p>
            <p>と言うのを、わたしは聞いた。</p>
          </li>
          <li value="02">そして見ていると、見よ、<span style="color: #e6a64d;">白い馬</span>が現れ、乗っている者は、<span style="color: #e6a64d;">弓</span>を持っていた。彼は<span style="color: #e6a64d;">冠</span>を与えられ、勝利の上に更に勝利を得ようと出て行った。</li>
        </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:10#renvoi-apocalypse-6-1">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:11#image-apocalypse-6-1">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-6-3" cite="https://www.bible.com/ja/bible/1819/REV.6.新共同訳">
          <ol class="doc">
            <li value="03"><p>小羊が第二の封印を開いたとき、第二の生き物が</p>
              <p class="conversation">
                「出て来い」
              </p>
            <p>と言うのを、わたしは聞いた。</p>
          </li>
          <li value="04">すると、<span style="color: #e6a64d;">火のように赤い</span>別の<span style="color: #e6a64d;">馬</span>が現れた。その馬に乗っている者には、地上から平和を奪い取って、殺し合いをさせる力が与えられた。また、この者には大きな<span style="color: #e6a64d;">剣</span>が与えられた。</li>
        </ol>
      <footer>
        <ul>
          <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:11#renvoi-apocalypse-6-3">関連文書に戻る ↩</a></p></li>
          <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:11#image-apocalypse-6-3">関連絵画に戻る ↩</a></p></li>
        </ul>
      </footer>
      </blockquote>

    <hr>

        <blockquote id="apocalypse-6-5" cite="https://www.bible.com/ja/bible/1819/REV.6.新共同訳">
          <ol class="doc">
            <li value="05"><p>小羊が第三の封印を開いたとき、第三の生き物が</p>
              <p class="conversation">
                「出て来い」
              </p>
              <p>と言うのを、わたしは聞いた。
              <p>そして見ていると、見よ、<span style="color: #e6a64d;">黒い馬</span>が現れ、乗っている者は、手に<span style="color: #e6a64d;">秤</span>を持っていた。</p>
            </li>
            <li value="06">
              <p>わたしは、四つの生き物の間から出る声のようなものが、こう言うのを聞いた。</p>
              <p class="conversation">
                「小麦は一コイニクスで一デナリオン。大麦は三コイニクスで一デナリオン。オリーブ油とぶどう酒とを損なうな。」
              </p>
            </li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:11#renvoi-apocalypse-6-5">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:11#image-apocalypse-6-5">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-6-7" cite="https://www.bible.com/ja/bible/1819/REV.6.新共同訳">
            <ol class="doc">
              <li value="07">
                <p>小羊が第四の封印を開いたとき、
                <p class="conversation">
                  「出て来い」と言う
                </p>
                <p>第四の生き物の声を、わたしは聞いた。</p>
              </li>
              <li value="08">そして見ていると、見よ、<span style="color: #e6a64d;">青白い馬</span>が現れ、乗っている者の名は<span style="color: #e6a64d;">「死」</span>といい、これに<span style="color: #e6a64d;">陰府</span>が従っていた。</li>
              <li>彼らには、地上の四分の一を支配し、剣と飢饉と死をもって、更に地上の野獣で人を滅ぼす権威が与えられた。</li>
            </ol>
            <footer>
              <ul>
                <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:11#renvoi-apocalypse-6-7">関連文書に戻る ↩</a></p></li>
                <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:11#image-apocalypse-6-7">関連絵画に戻る ↩</a></p></li>
              </ul>
            </footer>
          </blockquote>

      <hr>
<p>out</p>
        <ol class="doc">
          <li value="9">小羊が第五の封印を解いたとき、私は、神の言葉のゆえに、また、自分たちが立てた証しのゆえに殺された人々の魂を、祭壇の下に見た。</li>
          <li value="10">彼らは大声でこう叫んだ。
            <p class="conversation">
              「聖なるまことの主よ、あなたはいつまで裁きを行わず、地に住む者に私たちの血の復讐をなさらないのですか。」
            </p>
          </li><li value="11">すると、彼らの一人一人に白い衣が与えられ、それから、「あなたがたと同じように殺されようとしているきょうだいであり、同じ僕である者の数が満ちるまで、もうしばらくの間、休んでいるように」と告げられた。</li>
          <li value="12">また、小羊が第六の封印を解いたとき、私が見ていると、大地震が起きた。太陽は毛織の粗布のように暗くなり、月は全体が血のようになって、</li>
          <li value="13">天の星は地上に落ちた。まるで、いちじくの青い実が、大風に揺さぶられて振り落とされるようであった。</li>
        </ol>

      <hr>

        <blockquote id="apocalypse-6-14" cite="https://www.bible.com/ja/bible/1819/REV.6.新共同訳">
          <ol class="doc">
            <li value="14">天は巻物が巻き取られるように消え去り、山も島も、みなその場所から移された。</li>
          <li value="15"><span style="color: #e6a64d;">地上の王、高官、千人隊長、富める者、力ある者、また、奴隷も自由な身分の者もことごとく、洞穴や山の岩間に隠れ</span></li>
          <li value="16"><p>山と岩に向かって、</p>
            <p class="conversation">
              「わたしたちの上に覆いかぶさって、玉座に座っておられる方の顔と小羊の怒りから、わたしたちをかくまってくれ」と言った。
            </p>
          </li>
          <li value="17">
            <p class="conversation">
              「神と小羊の怒りの大いなる日が来たからである。だれがそれに耐えられるであろうか。
            </p>
          </li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:11#renvoi-apocalypse-6-14">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:11#image-apocalypse-6-14">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>
<p>out</p>
      <p class="no-puce">第７章</p>
        <ol class="doc">
          <li value="1">この後、私は地の四隅に四人の天使が立っているのを見た。彼らは、地の四隅から吹く風を押さえ、地にも海にもどの木にも吹きつけないようにしていた。</li>
          <li value="2">また私は、別の天使が生ける神の刻印を携え、日の出る方から上って来るのを見た。その天使は、大地と海とを損なうことを許されている四人の天使に向かって大声で叫んで、</li>
          <li value="3">言った。
            <p class="conversation">
              「私たちが神の僕の額に刻印を押すまでは、大地も海も木々も損なってはならない。」
            </p>
          </li>
          <li value="4">私は、刻印を押された人々の数を聞いた。それはイスラエルの子らの全部族の中から刻印を押された人々であり、十四万四千人であった。</li>
          <li value="5">ユダ族の中から一万二千人が刻印を押され／ルベン族の中から一万二千人／ガド族の中から一万二千人</li>
          <li value="6">アシェル族の中から一万二千人／ナフタリ族の中から一万二千人／マナセ族の中から一万二千人</li>
          <li value="7">シメオン族の中から一万二千人／レビ族の中から一万二千人／イッサカル族の中から一万二千人</li>
          <li value="8">ゼブルン族の中から一万二千人／ヨセフ族の中から一万二千人／ベニヤミン族の中から一万二千人が刻印を押された。</li>
          <li value="9">この後、私は数えきれぬほどの大群衆を見た。彼らはあらゆる国民、部族、民族、言葉の違う民から成り、白い衣を身にまとい、なつめやしの枝を手に持って、玉座と小羊の前に立っていた。</li>
          <li value="10">彼らは声高らかに言った。
            <p class="conversation">
              「救いは、玉座におられる私たちの神と／小羊にある。」
            </p>
          </li>
          <li value="11">また、天使たちは皆、玉座と長老たちと四つの生き物を囲んで立っていたが、玉座の前にひれ伏し、神を礼拝して、</li>
          <li value="12">こう言った。
            <p class="conversation">
              「アーメン。賛美、栄光、知恵／感謝、誉れ、力、権威が／世々限りなく私たちの神にありますように／アーメン。」
            </p>
          </li>
          <li value="13">すると、長老の一人が私に問いかけた。
            <p class="conversation">
              「この白い衣を身にまとった者たちは誰か。またどこから来たのか。」
            </p>
          </li>
          <li value="14">そこで私が、
            <p class="conversation">
              「私の主よ、それはあなたがご存じです」
            </p>
            と答えると、長老は言った。
            <p class="conversation">
              「この人たちは大きな苦難をくぐり抜け、その衣を小羊の血で洗って白くしたのである。
            </p>
          </li>
          <li value="15">
            <p class="conversation">
              それゆえ、彼らは神の玉座の前にいて／昼も夜も神殿で神に仕える。／玉座におられる方が、彼らの上に幕屋を張る。
            </p>
          </li>
          <li value="16">
            <p class="conversation">
              彼らは、もはや飢えることも渇くこともなく／太陽もどのような暑さも／彼らを打つことはない。
            </p>
          </li>
          <li value="17">
            <p class="conversation">
              玉座の中央におられる小羊が彼らの牧者となり／命の水の泉へと導き／神が彼らの目から涙をことごとく／拭ってくださるからである。」
            </p>
          </li>
        </ol>

      <hr>

      <p class="no-puce">第８章</p>
        <blockquote id="apocalypse-8-1" cite="https://www.bible.com/ja/bible/1819/REV.8.新共同訳">
          <ol class="doc">
          <li value="01">小羊が第七の封印を開いたとき、天は半時間ほど沈黙に包まれた。</li>
          <li value="02">そして、わたしは<span style="color: #e6a64d;">七人の天使</span>が神の御前に立っているのを見た。彼らには<span style="color: #e6a64d;">七つのラッパ</span>が与えられた。</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:12#renvoi-apocalypse-8-1">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-8-1">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-8-3" cite="https://www.bible.com/ja/bible/1819/REV.8.新共同訳">
          <ol class="doc">
            <li value="03">また、別の天使が来て、手に<span style="color: #e6a64d;">金の香炉</span>を持って祭壇のそばに立つと、この天使に多くの香が渡された。すべての聖なる者たちの祈りに添えて、玉座の前にある<span style="color: #e6a64d;">金の祭壇</span>に献げるためである。</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:12#renvoi-apocalypse-8-3">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-8-3">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-8-4" cite="https://www.bible.com/ja/bible/1819/REV.8.新共同訳">
          <ol class="doc">
            <li value="04">香の煙は、天使の手から、聖なる者たちの祈りと共に神の御前へ立ち上った。</li>
          <li value="05">それから、天使が香炉を取り、それに祭壇の火を満たして地上へ投げつけると、雷、さまざまな音、稲妻、地震が起こった。</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:12#renvoi-apocalypse-8-4">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-8-4">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-8-6" cite="https://www.bible.com/ja/bible/1819/REV.8.新共同訳">
          <ol class="doc">
            <li value="06">さて、七つのラッパを持っている七人の天使たちが、ラッパを吹く用意をした。</li>
            <li value="07">第一の天使がラッパを吹いた。すると、血の混じった雹と火とが生じ、地上に投げ入れられた。地上の三分の一が焼け、木々の三分の一が焼け、すべての青草も焼けてしまった。</li>
            <li value="08">第二の天使がラッパを吹いた。すると、火で燃えている大きな山のようなものが、海に投げ入れられた。海の三分の一が血に変わり、</li>
            <li value="09">また、被造物で海に住む生き物の三分の一は死に、船という船の三分の一が壊された。</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:12#renvoi-apocalypse-8-6">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-8-4">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-8-10" cite="https://www.bible.com/ja/bible/1819/REV.8.新共同訳">
          <ol class="doc">
            <li value="10">第三の天使がラッパを吹いた。すると、<span style="color: #e6a64d;">松明のように燃えている大きな星</span>が、天から落ちて来て、川という川の三分の一と、その水源の上に落ちた。</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:12#renvoi-apocalypse-8-10">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-8-10">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-8-11" cite="https://www.bible.com/ja/bible/1819/REV.8.新共同訳">
          <ol class="doc">
            <li value="11">この星の名は<span style="color: #e6a64d;">「苦よもぎ」</span>といい、水の三分の一が苦よもぎのように苦くなって、そのために多くの人が死んだ。</li>
          <li value="12">第四の天使がラッパを吹いた。すると、太陽の三分の一、月の三分の一、星という星の三分の一が損なわれたので、それぞれ三分の一が暗くなって、昼はその光の三分の一を失い、夜も同じようになった。</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:12#renvoi-apocalypse-8-11">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-8-10">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-8-13" cite="https://www.bible.com/ja/bible/1819/REV.8.新共同訳">
          <ol class="doc">
            <li value="13"><p>また、見ていると、一羽の<span style="color: #e6a64d;">鷲</span>が空高く飛びながら、大声でこう言うのが聞こえた。</p>
              <p class="conversation">
                不幸だ、不幸だ、不幸だ、地上に住む者たち。なお三人の天使が吹こうとしているラッパの響きのゆえに。
              </p>
            </li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:12#renvoi-apocalypse-8-13">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-8-13">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

      <p class="no-puce">第９章</p>
        <blockquote id="apocalypse-9-1" cite="https://www.bible.com/ja/bible/1819/REV.9.新共同訳">
          <ol class="doc">
            <li value="01">第五の天使がラッパを吹いた。すると、一つの星が天から地上へ落ちて来るのが見えた。この星に、<span style="color: #e6a64d;">底なしの淵に通じる穴を開く鍵</span>が与えられ、</li>
            <li value="02">それが底なしの淵の穴を開くと、<span style="color: #e6a64d;">大きなかまどから出るような煙</span>が穴から立ち上り、太陽も空も穴からの煙のために暗くなった。</li>
            <li value="03">そして、煙の中から、<span style="color: #e6a64d;">いなご</span>の群れが地上へ出て来た。このいなごには、地に住むさそりが持っているような力が与えられた。
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:10#renvoi-apocalypse-9-1">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-9-1">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-9-4" cite="https://www.bible.com/ja/bible/1819/REV.9.新共同訳">
          <ol class="doc">
            <li value="04">いなごは、地の草やどんな青物も、またどんな木も損なってはならないが、ただ、額に神の刻印を押されていない人には害を加えてもよい、と言い渡された。</li>
            <li value="05">殺してはいけないが、五か月の間、苦しめることは許されたのである。いなごが与える苦痛は、さそりが人を刺したときの苦痛のようであった。</li>
            <li value="06">この人々は、その期間、死にたいと思っても死ぬことができず、切に死を望んでも、死の方が逃げて行く。</li>
            <li value="07">さて、<span style="color: #e6a64d;">いなご</span>の姿は、出陣の用意を整えた馬に似て、頭には金の冠に似たものを着け、顔は人間の顔のようであった。</li>
            <li value="08">また、髪は女の髪のようで、歯は獅子の歯のようであった。</li>
            <li value="09">また、胸には鉄の胸当てのようなものを着け、その羽の音は、多くの馬に引かれて戦場に急ぐ戦車の響きのようであった。</li>
            <li value="10">更に、さそりのように、尾と針があって、この尾には、五か月の間、人に害を加える力があった。</li>
            <li value="11">いなごは、底なしの淵の使いを王としていただいている。その名は、ヘブライ語でアバドンといい、ギリシア語の名はアポリオンという。</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:13#renvoi-apocalypse-9-4">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:13#image-apocalypse-9-1">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>
<p>out</p>
        <ol class="doc">
          <li value="12">第一の災いが過ぎ去った。見よ、この後、さらに二つの災いがやって来る。</li>
          <li value="13">第六の天使がラッパを吹いた。すると、神の前にある金の祭壇の四本の角から一つの声が聞こえた。</li>
          <li value="14">その声は、ラッパを持っている第六の天使に向かいこう言った。
            <p class="conversation">
              「大河ユーフラテスのほとりにつながれている四人の天使を解き放ちなさい。」
            </p>
          </li>
          <li value="15">すると四人の天使は、人間の三分の一を殺すために解き放たれた。彼らはその年、その月、その日、その時間のために備え置かれていたのである。</li>
          <li value="16">騎兵の数は二億、私はその数を聞いた。</li>
          <li value="17">私は幻の中で馬とそれに乗っている者たちを見たが、その様子はこうであった。彼らは、火の赤、青玉の青、硫黄の黄色の胸当てを着けており、馬の頭は獅子の頭のようで、口からは火と煙と硫黄を吐いていた。</li>
          <li value="18">その口から吐く火と煙と硫黄、この三つの災いで人間の三分の一が殺された。</li>
          <li value="19">馬の力はその口と尾にあって、尾は蛇に似て頭があり、この頭で害を加えるのである。</li>
          <li value="20">これらの災いに遭っても殺されずに生き残った人々は、自分の手で造ったものについて悔い改めず、なおも、悪霊や、金、銀、銅、石、木で造った、見ることも聞くことも歩くこともできない偶像を拝むことをやめなかった。</li>
          <li value="21">また彼らは、自分たちの犯した殺人やまじない、淫行や盗みについても、悔い改めようとしなかった。</li>
        </ol>

    <hr>

    <p class="no-puce">第１０章</p>
      <blockquote id="apocalypse-10-1" cite="https://www.bible.com/ja/bible/1819/REV.10.新共同訳">
        <ol class="doc">
          <li value="01">わたしはまた、もう一人の力強い<span style="color: #e6a64d;">天使</span>が、<span style="color: #e6a64d;">雲を身</span>にまとい、天から降って来るのを見た。頭には<span style="color: #e6a64d;">虹</span>をいただき、顔は<span style="color: #e6a64d;">太陽</span>のようで、足は<span style="color: #e6a64d;">火の柱</span>のようであり、</li>
          <li value="02">手には<span style="color: #e6a64d;">開いた小さな巻物</span>を持っていた。そして、右足で海を、左足で地を踏まえて、</li>
          <li value="03">獅子がほえるような大声で叫んだ。天使が叫んだとき、七つの雷がそれぞれの声で語った。</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:13#renvoi-apocalypse-10-1">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:13#image-apocalypse-10-1">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

      <blockquote id="apocalypse-10-4" cite="https://www.bible.com/ja/bible/1819/REV.10.新共同訳">
        <ol class="doc">
          <li value="04"><p>七つの雷が語ったとき、わたしは書き留めようとした。すると、天から声があって、</p>
            <p class="conversation">
              「七つの雷が語ったことは秘めておけ。それを書き留めてはいけない」と言うのが聞こえた。
            </p>
          </li>
          <li value="05">すると、海と地の上に立つのをわたしが見たあの天使が、右手を天に上げ、</li>
          <li value="06">世々限りなく生きておられる方にかけて誓った。すなわち、天とその中にあるもの、地とその中にあるもの、海とその中にあるものを創造された方にかけてこう誓った。「もはや時がない」。</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:13#renvoi-apocalypse-10-4">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:13#image-apocalypse-10-4">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>
<p>out</p>
        <ol class="doc">
          <li value="07">
            <p class="conversation">
              第七の天使がラッパを吹き鳴らすとき、神の秘義が成就する。それは、神がご自分の僕である預言者たちに良い知らせとして告げられたとおりである。」
            </p>
          </li>
          <li value="08">すると、天から聞こえたあの声が、再び私に語りかけて言った。
            <p class="conversation">
              「さあ行って、海と地の上に立っている天使の手にある、開かれた巻物を受け取りなさい。」
            </p>
          </li>
          <li value="09">そこで、天使のところへ行き、
            <p class="conversation">
              「その小さな巻物をください」と言った。すると、天使は私に言った。「それを取って食べなさい。それは、あなたの腹には苦いが、口には蜜のように甘い。」
            </p>
          </li>
          <li value="10">そこで私は、その小さな巻物を天使の手から受け取り、すべて食べた。それは、口には蜜のように甘かったが、食べると腹には苦かった。</li>
          <li value="11">そして、私に語りかけるのを聞いた。
            <p class="conversation">
              「あなたは、もう一度、多くの民族、国民、言葉の違う民、また、王たちについて預言しなければならない。」
            </p>
          </li>
        </ol>

      <hr>
<p>out</p>
      <p class="no-puce">第１１章</p>
        <ol class="doc">
          <li value="01">それから、私に杖のような物差しが与えられた。そして、こう告げられた。
            <p class="conversation">
              「立って神の神殿と祭壇とを測り、また礼拝している者たちを数えなさい。
            </p>
          </li>
          <li value="02">
            <p class="conversation">
              しかし、神殿の外の庭はそのままにしておきなさい。測ってはならない。そこは異邦人に与えられたからである。彼らは、四十二か月の間、この聖なる都を踏みにじるであろう。
            </p>
          </li>
          <li value="03">
            <p class="conversation">
              私は、私の二人の証人に粗布をまとわせ、千二百六十日の間、預言させよう。」 </li>
          <li value="04">
            <p class="conversation">
              この二人の証人とは、大地の主の前に立っている二本のオリーブの木、また二つの燭台である。
            </p>
          </li>
          <li value="05">
            <p class="conversation">
              この二人に害を加えようとする者があれば、彼らの口から火が出て、その敵を滅ぼすであろう。彼らに害を加えようとする者があれば、必ずこのように殺される。
            </p>
          </li>
          <li value="06">
            <p class="conversation">
              この二人には、預言をしている間、雨が降らないように天を閉じる力がある。また、水を血に変える力があって、望むままに何度でも、あらゆる災いを地にもたらすことができる。
            </p>
          </li>
          <li value="07">
            <p class="conversation">
              二人がその証しを終えると、一頭の獣が底なしの淵から上って来て二人と戦って勝ち、彼らを殺す。
            </p>
          </li>
          <li value="08">
            <p class="conversation">
              彼らのなきがらは、ソドムやエジプトにたとえられている大きな都の大通りにさらされる。彼らの主も、その都で十字架につけられたのである。
            </p>
          </li>
          <li value="09">
            <p class="conversation">
              さまざまな民族、部族、言葉の違う民、国民から成る人々は、三日半の間、二人のなきがらを眺め、それを墓に納めることを許さないであろう。
            </p>
          </li>
          <li value="10">
            <p class="conversation">
              地上に住む人々は、彼らのことで喜び祝い、贈り物を交わすであろう。この二人の預言者が、地上に住む人々を苦しめたからである。
            </p>
          </li>
          <li value="11">三日半の後、命の息が神から出て、この二人に入った。彼らが足で立ち上がると、これを見た人々は大いに恐れた。</li>
          <li value="12">天から大きな声がして、
            <p class="conversation">
              「ここに上って来なさい」
            </p>
          と言うのを、二人は聞いた。そして、雲に包まれて天に上った。彼らの敵もそれを見た。</li>
          <li value="13">その時、大きな地震が起こり、都の十分の一が倒れ、この地震のために七千人が死に、生き残った人々は恐れを抱いて天の神に栄光を帰した。</li>
          <li value="14">第二の災いは過ぎ去った。見よ、第三の災いがすぐにやって来る。</li>
          <li value="15">さて、第七の天使がラッパを吹いた。すると、さまざまな大きな声が天に起こって、こう言った。
            <p class="conversation">
              「この世の国は、私たちの主と／そのメシアのものとなった。／主は世々限りなく支配される。」
            </p>
          </li>
          <li value="16">神の前で座に着いていた二十四人の長老は、ひれ伏して神を礼拝し</li>
          <li value="17">こう言った。
            <p class="conversation">
              「今おられ、かつておられた方／全能者である神、主よ、あなたに感謝いたします。／あなたは大いなる力を振るい、支配されたからです。
            </p>
          </li>
          <li value="18">
            <p class="conversation">
              諸国の民は怒り狂い／あなたも怒りを現されました。／死者の裁かれる時が来ました。／あなたの僕である預言者、聖なる者／あなたの名を畏れる者には／小さな者にも大きな者にも／報いが与えられ／地を滅ぼす者たちが／滅ぼされる時が来ました。」
            </p>
          </li>
          <li value="19">そして、天にある神の神殿が開かれ、その神殿の中に契約の箱が見えた。すると稲妻、轟音、雷鳴、地震が起こり、大粒の雹が降った。</li>
        </ol>

      <hr>

      <p class="no-puce">第１２章</p>
        <blockquote id="apocalypse-12-1" cite="https://www.bible.com/ja/bible/1819/REV.12.新共同訳">
        <ol class="doc">
          <li value="01">また、天に大きなしるしが現れた。<span style="color: #e6a64d;">一人の女</span>が身に太陽をまとい、月を足の下にし、頭には十二の星の冠をかぶっていた。</li>
          <li value="02">女は身ごもっていたが、子を産む痛みと苦しみのため叫んでいた。</li>
          <li value="03">また、もう一つのしるしが天に現れた。見よ、火のように<span style="color: #e6a64d;">赤い大きな竜</span>である。これには七つの頭と十本の角があって、その頭に七つの冠をかぶっていた。</li>
          <li value="04">竜の尾は、天の星の三分の一を掃き寄せて、地上に投げつけた。そして、竜は子を産もうとしている女の前に立ちはだかり、産んだら、その子を食べてしまおうとしていた。</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:13#renvoi-apocalypse-12-1">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:13#image-apocalypse-12-1">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-12-5" cite="https://www.bible.com/ja/bible/1819/REV.12.新共同訳">
          <ol class="doc">
            <li value="05">女は男の子を産んだ。この子は、鉄の杖ですべての国民を治めることになっていた。子は神のもとへ、その玉座へ引き上げられた。</li>
            <li value="06">女は荒れ野へ逃げ込んだ。そこには、この女が１２６０日の間養われるように、神の用意された場所があった。</li>
            <li value="07">さて、天で戦いが起こった。ミカエルとその使いたちが、竜に戦いを挑んだのである。竜とその使いたちも応戦したが、</li>
            <li value="08">勝てなかった。そして、もはや天には彼らの居場所がなくなった。</li>
            <li value="09">この巨大な竜、年を経た蛇、悪魔とかサタンとか呼ばれるもの、全人類を惑わす者は、投げ落とされた。地上に投げ落とされたのである。その使いたちも、もろともに投げ落とされた。</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:13#renvoi-apocalypse-12-5">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:13#image-apocalypse-12-5">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

      <blockquote id="apocalypse-12-10" cite="https://www.bible.com/ja/bible/1819/REV.12.新共同訳">
        <ol class="doc">
          <li value="10">
            <p>わたしは、天で大きな声が次のように言うのを、聞いた。</p>
            <p class="conversation">「今や、我々の神の救いと力と支配が現れた。神のメシアの権威が現れた。</p>
          </li>
          <li>
            <p class="conversation">我々の兄弟たちを告発する者、昼も夜も我々の神の御前で彼らを告発する者が、投げ落とされたからである。</p>
          </li>
          <li value="11">
            <p class="conversation">兄弟たちは、小羊の血と自分たちの証しの言葉とで、彼に打ち勝った。彼らは、死に至るまで命を惜しまなかった。
            </p>
          </li>
          <li value="12">
            <p class="conversation">このゆえに、もろもろの天と、その中に住む者たちよ、喜べ。</p>
          </li>
          <li>
            <p class="conversation">地と海とは不幸である。悪魔は怒りに燃えて、お前たちのところへ降って行った。残された時が少ないのを知ったからである」。</p>
          </li>
          <li value="13"><span style="color: #e6a64d;">竜</span>は、自分が地上へ投げ落とされたと分かると、男の子を産んだ<span style="color: #e6a64d;">女</span>の後を追った。</li>
          <li value="14">しかし、女には<span style="color: #e6a64d;">大きな鷲の翼</span>が二つ与えられた。荒れ野にある自分の場所へ飛んで行くためである。女はここで、蛇から逃れて、一年、その後二年、またその後半年の間、養われることになっていた。</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:14#renvoi-apocalypse-12-10">関連文書に戻る ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:14#image-apocalypse-12-10">関連絵画に戻る ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>
<p>out</p>
        <ol class="doc">
          <li value="15">蛇は、女の後ろに水を口から川のように吐き出して、彼女を押し流そうとした。</li>
          <li value="16">しかし、大地が女を助けた。大地は口を開けて、竜が吐き出した川を飲み干したのである。</li>
          <li value="17">竜は女に対して激しく怒り、その子孫の残りの者たち、すなわち、神の戒めを守り、イエスの証しを守る者たちと戦うために出て行った。</li>
          <li value="18">そして、竜は海辺の砂の上に立った。</li>
        </ol>

      <hr>


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