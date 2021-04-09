<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 18 -->

<article>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>福音書記者ヨハネ</figcaption>
  </figure>
  <section><article>
    <h3 id="jean9-selon-legende" class="yellow"><cite><ruby style="color:#e6a64d;">黄金伝説<rt style="color:#e6a64d;">レゲンダ・アウレア</rt></ruby><cite>の第９章においての福音書記者ヨハネの伝説</h3>
    <section><article>
      <h4><cite><ruby style="color:#e6a64d;">黄金伝説<rt style="color:#e6a64d;">レゲンダ・アウレア</rt></ruby><cite>の第９章の文書：福音書記者ヨハネの伝説</h4>
      <section><article>
        <p><a href="#note_nomdejean" title="ヨハネの名" id="nomdejean" class="yellow">ヨハネの名</a>は、<ruby lang="ja"><span style="color: #994c3d;">ヨハネス</span><rp>(</rp><rt lang="la"><span style="color: #994c3d;">Johannes</span></rt><rp>)</rp></ruby lang="ja">、<span style="color: #994c3d;">〈<ruby style="color:#994c3d;">主<rp>(</rp><rt style="color:#994c3d;font-size: 70%;letter-spacing: 2px;">しゅ</rt><rp>)</rp></ruby>の恩寵〉</span>のこと、あるいは<span style="color: #994c3d;">〈恩寵をやどした人〉</span>のこと、あるいは<span style="color: #994c3d;">〈あた えられている人〉</span>のこと、あるいは<span style="color: #994c3d;">〈神から贈物をされた人〉</span>のことである。</p>
        <p><span style="color: #994c3d;">ヨハネ</span>という名前のこの四つの解釈のなかに、彼がもっていた神からの四つの特別な贈物をみとめることができる。</p>
        <p><span style="color: #994c3d;">第一</span>には、<span style="color: #994c3d;">キリストが聖ヨハネにたいしてもっておられた特別な愛</span>である。</p>
        <p>というのは、キリストは、<span style="color: #994c3d;">ヨハネ</span>をほかの弟子たちよりも愛し、彼にたいしては親愛のしるしを他の弟子たちにたいするよも多くお見せになったからである。</p>
        <p>彼が主の恩寵と言われ、主の恵みを受けた人とよばれるのは、そのためである。</p>
        <p>実際、キリストは、彼をペテロ以上に愛された。</p>
        <p>つまり、それは、こころの愛であり、胸襟をひらいた愛であった。</p>
        <p>主は、<span style="color: #994c3d;">ヨハネ</span>とペテロとをこころからひとしく愛されけれども、愛のしめしかたがちがっていた。</p>
        <p>すなわち、<span style="color: #994c3d;">ヨハネ</span>とはより親密な交わりをもたれ、ペテロにはより外的な恩恵を施されたのである。</p>
        <p><span style="color: #994c3d;">第二</span>には、彼の<span style="color: #994c3d;">肉体の清純さ</span>である。</p>
        <p>なぜなら、彼は、主によって童貞たるべく選ばれた人間であったからである。</p>
        <p>彼が〈恩寵をやどした人〉とよばれるのは、そのためである。</p>
        <p>というのは、童貞のもつ恵みが彼のなかにあったからである。</p>
        <p>事実また、主は、彼が結婚式をあげようとしたとき、彼をお召しになったのである。</p>
        <p><span style="color: #994c3d;">第三</span>には、<span style="color: #994c3d;">神秘の啓示</span>である。</p>
        <p>〈あたえられている人〉と言われるのは、そのためである。</p>
        <p>というのは、彼には神の最も深奥の秘密についての、すなわち言葉の神性と世界の終末についての認識があたえられていたのである。</p>
        <p><span style="color: #994c3d;">第四</span>には、<span style="color: #994c3d;">神が彼におん母をゆだねられたこと</span>である。</p>
        <p>〈神から贈物を受けた人〉とよばれるのは、そのためである。</p>
        <p>というのは、主が聖母を彼の保護にゆだねられたのは、主が彼におあたえになることのできた最大の贈物だったからである。</p>
        <p>彼の生涯を記述したのは、<a href="#note_hoteriche" title="神に永劫に罰せられた富裕な貪欲者と神に選ばれた貧しいラザロ" id="laodiceia" class="yellow"><ruby lang="ja">ラオディケイア<rp>(</rp><rt lang="la">Laodiceia</rt><rp>)</rp></ruby lang="ja"></a>の司教ミレトスであった。そして、<a href="#note_isidore" title="イシドルス" id="isidore" class="yellow">イシドルス</a>がその著『諸聖人の出自と生涯と死』のなかでそれを集約している。</p>
      </article></section>
    </article></section>

    <section><article>
      <h4 class="yellow">信仰のためドミティアヌスに迫害される</h4>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島島への流しへの出発》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島島への流しへの出発》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島島への流しへの出発》</figcaption>
      </figure>
      <section><article>
        <p>使徒であり福音書記者であった<span style="color: #994c3d;">ヨハネ</span>は、主の<ruby>愛<rp>(</rp><rt>まな</rt><rp>)</rp></ruby>弟子であり、選ばれて童貞の肉体をもっていた。十二使徒が聖霊降臨のあと世界じゅうに散らばっていったとき、<span style="color: #994c3d;">ヨハネ</span>は、<a href="#note_asie" title="アジア" id="asie" class="yellow">アジア</a>に行き、その地に多くの教会を建てた。</p>
        <p><a href="#note_domitien" title="皇帝ドミティアヌス" id="domitien" class="yellow">皇帝ドミティアヌス</a>は、それを聞くと、彼を捕えさせ、<a href="#note_porte-latine" title="ラティナ門" id="porte-latine" class="yellow">ラティナ門</a>とよばれているローマの門外で煮えたぎった油をみたした桶に投げこむように命じた。</p>
        <p>しかし、<span style="color: #994c3d;">聖ヨハネ</span>は、肉の汚れを知らずにこの世の道を歩いてきたとおなじように、火傷ひとつしないで桶から出てきた。</p>
        <p>皇帝は、<span style="color: #994c3d;">ヨハネ</span>がなおも説教をやめようとしないのを見て、こんどは<a href="#note_patmos" title="パトモス島" id="patmos" class="yellow">パトモス島</a>という遠海の島へ流刑にした。彼は、その島にまったくひとりで住み、ここで『ヨハネの黙示録』を書いた。</p>
      </article></section>
    </article></section>

    <section><article>
      <h4 class="yellow">ドゥルシアネの復活</h4>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、右側の最左の柱頭、《ドゥルシアネの復活》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、右側の最左の柱頭、《ドゥルシアネの復活》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、右側の最左の柱頭、《ドゥルシアネの復活》</figcaption>
      </figure>
      <section><article>
        <p>その年のうちに、皇帝は、その極悪非道のために試逆され、彼の命令は、元老院によってすべて取り消された。
        こうして、不当に流刑の身になっていた<span style="color: #994c3d;">ヨハネ</span>は、たいへんな敬意をもってふたたび<a href="#note_ephese" title="エペソス市" id="ephese" class="yellow">エペソス市</a>に迎えられた。</p>
        <p>多くの信者たちが駆けよってきて、</p>
        <blockquote>
          <p><span style="color: #165493;">—　天主の御名においておいでくださったかたに祝福がありますように」</span>と口々に言った。</p>
        </blockquote>
        <p>しかし、彼が町なかに入っていくと、彼の女友達で、彼が帰ってくることをこころから願っていた<a href="#note_drusiane" title="ドゥルシアネ" id="drusiane" class="yellow">ドゥルシアネ</a>の死体がはこばれてきた。</p>
        <p>そして、いっしょについてきた彼女の両親や寡婦たちや孤児たちは、こう叫んだ。</p>
        <blockquote>
          <p><span style="color: #165493;">—　尊敬すべきヨハネさま、ごらんください、これはドゥルシアネの変わりはてた姿です。彼女は、あなたの戒めと教えにしたがって貧しいわたしたちにいつも食べ物をあたえ、困っているところを助けてくれました。そして、いつもあなたのお帰りを待ちこがれて、</span></p>
          <p><span style="color: #165493;">〈ああ、死ぬまでにもう一度神の使徒さまにお会いしたい！〉と申しておりました。いまあなたがお帰りになりましたのに、彼女は、もうあなたを見ることができないのです」と。</span></p>
        </blockquote>
        <p><span style="color: #994c3d;">ヨハネ</span>は、担架をそこにおき、死体のひもを解くようにと命じて、</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　ドゥルシアネ、わが主イエス・キリストがあなたの眼をさましてくださいますように。</span></p>
          <p><span style="color: #df8f20;">さあ、起きあがって、家に帰り、わたしのために食事の用意をしてください」</span>と言った。</p>
        </blockquote>
        <p>すると、ドゥルシアネは、立ちあがって、<span style="color: #994c3d;">ヨハネ</span>から言いつかったことをはたすために、すたこらさっさと家に帰っていった。まるで昼寝から眼をさましたところだというふうにしか見えなかった。</p>
      </article></section>
    </article></section>

    <section><article>
      <h4 class="yellow">クラトンの洗礼</h4>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《クラトンの洗礼》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《クラトンの洗礼》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《クラトンの洗礼》</figcaption>
      </figure>
      <section><article>
        <p>翌日のこと、<span style="color: #b3884d;">クラトン</span>という哲学者が、市場で民衆を呼び集めて、この世を軽蔑しなくてはならぬと説き、それを実地にやって見せていた。</p>
        <p>彼は、あらかじめふたり兄弟の富裕な青年に全財産を若干の宝石と引きかえに売るように命じておいた。</p>
        <p>そして、いまふたりに言いつけて、その宝石を民衆の面前で打ちくだかせた。</p>
        <p>たまたまそこを通りかかった<span style="color: #994c3d;">聖ヨハネ</span>は、その哲学者を呼び寄せて、そのような世界蔑視を<span style="color: #994c3d;">三つの理由</span>からこらしめた。</p>
        <p><span style="color: #994c3d;">第一</span>に、<span style="color: #994c3d;">人びとはそうした蔑視をほめるけれども、天主はそれをよろこばれないから</span>である。</p>
        <p><span style="color: #994c3d;">第二</span>に、<span style="color: #994c3d;">そうした行為によっては罪をつぐなうことができないからである。そのような行為は、無益である。ちょうど病気を治してくれない薬がなんの役にもたたないのとおなじ</span>である。</p>
        <p><span style="color: #994c3d;">第三</span>に、キリストがある富裕な青年にむかって<a href="#note_mathieu" title="もし完全になりたいのなら" id="mathieu" class="yellow">〈もし完全になりたいのなら、行って持ち物を売り払い、貧しい人々に施しなさい〉</a>とお命じになったように（のきなみ）、<span style="color: #994c3d;">財産を貧しい人びとに施すような世界蔑視こそ功徳のあるものだから</span>である。</p>
        <p><span style="color: #b3884d;">クラトン</span>は、それにたいして、</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　ほんとうに神があなたの先生であり、この財宝が貧しい人たちにわけあたえられることをその神が望んでいるのであれば、わたしが世人の拍手を得るために打ちくだかせたこの宝石をもとどおりにして、神さまをよろこばせてあげることだな」</span>と言った。</p>
        </blockquote>
        <p><span style="color: #994c3d;">聖ヨハネ</span>は、割れた宝石を手にとって祈った。
        と、たちまち宝石は、もとどおりになった。</p>
        <p>このときから、<span style="color: #b3884d;">クラトン</span>は、キリスト教に改宗した。ふたりの若者も、彼といっしょに改宗し、宝石を売って、その金を貧しい人びとにわけあたえた。</p>
      </article></section>

      <section><article>
        <h4 class="yellow">聖ヨハネによる物質的な豊かさを反駁する説教</h4>
        <p>べつのふたりの貴族の青年がこれを見て、彼らの全財産を売り、その金を貧しい人たちに施し、<span style="color: #994c3d;">ヨハネ</span>にしたがった。しかし、ある日、ふたりは、彼らのかつての下僕が高価な衣服を着ているのに会い、自分たちの外套がいかにも粗末なのを見て、すっかり悲しくなった。
        <span style="color: #994c3d;">ヨハネ</span>は、これに気づき、ふたりの悲しそうな顔を見ると、海岸から若枝と小石とを拾ってくるように言いつけ、それらを金と宝石とに変えた。</p>
        <p>そして、それを町の金細工師と宝石師のところへふたりにもっていかせた。
        彼らは、７日後にまた帰ってきて、親方たちがこれほど純粋な金や良質の宝石は見たことがないと言っていたと報告した。</p>
        <p>すると、<span style="color: #994c3d;">ヨハネ</span>は、こう言った。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　さあ、出かけていって、あなたたちが売った財産を買いもどしなさい。しかし、そのかわり天国での報酬は、もうもらえませんよ。この世で花を咲かせたら、あの世ではしおれるのです。かりそめの世で富裕になったら、永遠の生命においては物乞いをして歩くのです</p>
        </blockquote>
        <p>そう言って、富をいましめる説教をはじめ、われわれを富にたいする過度の欲望から遠ざけてくれる六つのものを語ってきかせた。</p>
        <p><span style="color: #994c3d;">第一に</span>、<span style="color: #994c3d;">聖書</span>である。</p>
        <p>使徒は、ふたりに聖書のなかから、<a href="#note_hoteriche" title="神に永劫に罰せられた富裕な貪欲者と神に選ばれた貧しいラザロ" id="hoteriche" class="yellow">神に永劫に罰せられた富裕な貪欲者と神に選ばれた貧しいラザロ</a>とのたとえ話を話した。</p>
        <p><span style="color: #994c3d;">第二に</span>、<span style="color: #994c3d;">自然</span>である。人間は、富をもたずに生まれてきて、またまるはだかでこの世を去っていくからである。</p>
        <p><span style="color: #994c3d;">第三に</span>、<span style="color: #994c3d;">被造物</span>である。だれもが見てわかるように、太陽や月や星や雨や風は、われわれ万人に共有のものであるが、それとおなじように、すべての事物も、人間の共有物であるはずだからである。</p>
        <p><span style="color: #994c3d;">第四に</span>、<span style="color: #994c3d;">財をなす</span>である。金持ちは<ruby>金<rp>(</rp><rt>かね</rt><rp>)</rp></ruby>と悪魔の奴隷にすぎない。財産が彼を所有するのであって、彼が財産を所有しているのではない。金持ちは悪魔の奴隷である。というのは、福音書にもあるように、財神マンモンに奉仕することである。</p>
        <p><span style="color: #994c3d;">第五に</span>、<span style="color: #994c3d;">不安</span>である。というのは、金持ちは、どうして富を手に入れようかと日夜あくせくし、どのようにして富を保管しようかと戦々恐々としていなければならないからである。</p>
        <p><span style="color: #994c3d;">第六に</span>、富から生じる<span style="color: #994c3d;">損失</span>である。</p>
        <p>財産は、二つの悪が伴う損失を起こす。一つはこの世での悪としての虚しさであって、ともう一つのは次の世での悪として、永遠の劫罰である。</p>
        <p>これらの損失が、永遠的損失として、もう一つの損失の起こさせる。これは今での命での恩寵と将来での命の永遠的栄光である二つの財産の損失である。</p>
      </article></section>
    </article></section>

    <section><article>
      <h4 class="yellow">若い結婚者の復活</h4>
      <p>こうして<span style="color: #994c3d;">聖ヨハネ</span>が富を否定する説教をしているとき、ひとりの死んだ若者が、彼のまえにはこばれてきた。若者は、三十日まえに結婚したばかりであった。</p>
      <p>あとに残された彼の妻は、彼の母親や彼の死をいたむ友人たちといっしょに使徒の足もとにひれ伏して、ドゥルシアネをもとどおりにしたように、神の御名においてこの死者の眠りをさましてほしいとたのんだ。</p>
      <p><span style="color: #994c3d;">ヨハネ</span>は、もらい泣きをし、長いあいだ死者のうえに身をかがめて祈っていた。すると、若者は死からよみがえった。<span style="color: #994c3d;">ヨハネ</span>はその若者に命じて、彼の弟子になっているさっきのふたりの青年に、あの世でどのような責苦が彼らを待ちかまえているか、また、彼らがどのような至福を失ってしまったかを話させた。</p>
      <p>若者は、ふたりにむかって、地獄の苦しみと天国の歓びとについていろいろの不思議を語ってきかせて、</p>
      <blockquote>
        <p><span style="color: #df8f20;">—　お気の毒千万です。わたしは、あなたがたの天使たちがあなたがたのことを悲しんで涙をながし、悪魔がほくそえんでいるのを見ましたよ」</span>と言い、</p>
      </blockquote>
      <p>さらに、彼らが失った天国の宮殿がめくらむばかりの宝石で建てられ、妙なる光輝にかがやいていて、見るからにおいしそうなご馳走が山と盛られ、永遠につづくありとあらゆる愉しみと歓びとにみちあふれていたという話をした。そのつぎに、地獄で彼らを待ちうけている八つの名状しがたい苦しみについて話した。</p>
      <p>それは、歌の文句にもなっているあの八つの苦しみ、すなわち、「雌、闇、責苦、寒さ、火、悪魔の姿、罪の絶望、悲嘆」である。</p>
      <p>最後に、死からよみがえった若者は、ふたりの貴族の青年といっしょに使徒の足もとにひれ伏した。</p>
      <p>そして、ふたりの青年は、お慈悲をたまわりますようにと懇願した。</p>
      <p>そこで、<span style="color: #994c3d;">聖ヨハネ</span>は、</p>
      <blockquote>
        <p><span style="color: #df8f20;">—　三十日間悔い改めの行をし、そのあいだ若枝と小石がもとの自然の姿にかえるように祈りつづけなさい」</span>と言った。</p>
      </blockquote>
      <p>彼らは、命じられたとおりにした。三十日たつと、<span style="color: #994c3d;">ヨハネ</span>は、彼らに、</p>
      <blockquote>
        <p><span style="color: #df8f20;">—　さあ、海岸へ行って、金と宝石をもとの場所にもどしてきなさい」と言った。</span></p>
      </blockquote>
      <p>彼らがそのとおりにすると、なんというふしぎなことであろうか、金と宝石は、もとの若枝と小石とになった。青年たちは、いったん失っていた有徳の恩龍をふたたび受けたのだった。</p>
    </article></section>

    <section><article>
      <h4 class="yellow">ディアナの神殿の破壊</h4>
        <p><span style="color: #994c3d;">ヨハネ</span>がアジア州全土を説教してまわっていたとき、
        いつわりの神々の崇拝者たちは、民衆を煽動して彼をディアナの神殿に引っぱっていき、偽神に供物をささげさせようとした。</p>
        <p>しかし、<span style="color: #994c3d;">ヨハネ</span>は、彼らにつぎのような提案をした。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　双方がそれぞれの神に呼びかけることにしましょう。</span></p>
          <p><span style="color: #df8f20;">あなたたちは、ディアナにキリストの教会を破壊するようにたのみなさい。ディアナがそれを実現したなら、わたしは、ディアナに供犠をしましょう。わたしは、キリストさまにディアナの神殿を破壊してくださるようにお願いしましょう。キリストさまがそうしてくださったら、あなたがたは、キリストを信仰しなければなりませんよ」</span>と。</p>
        </blockquote>
        <p>民衆は、この提案をたいへんおもしろいとおもい、みんな神殿を出ていった。<span style="color: #994c3d;">ヨハネ</span>は、天主におん力をおしめしくださるようにと祈った。</p>
        <p>すると、神殿は倒壊し、いつわりの女神の偶像は、こなごなにくだけた。</p>
      </article></section>

      <section><article>
        <h4 class="yellow">毒の杯</h4>
        <figure>
          <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-280.webp 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-380.webp 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-480.webp 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.webp 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-840.webp 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1280.webp 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1600.webp 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-280.jpg 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-380.jpg 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-480.jpg 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.jpg 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-840.jpg 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1280.jpg 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1600.jpg 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>毒の盃を持つ福音書記者ヨハネ</figcaption>
        </figure>
        <p>しかし、偽神の大祭官<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:2#renvoi-aristodeme" title="https://francois-vidit.com/docs/ja/saint-jean/page:2#renvoi-aristodeme" id="aristodeme" class="yellow">アリストデムス</a>は、民衆のあいだにもめごとを起こさせ、敵味方にわかれてたがいに戦いの準備をはじめるようにしむけた。そこで、<span style="color: #994c3d;">聖ヨハネ</span>は、アリストデムスにむかって、</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　あなたが怒りを忘れるためにしてほしいとおもうことをなんでもしてあげましょう」</span>と申し入れた。</p>
        </blockquote>
        <p>アリストデムスは、</p>
        <blockquote>
          <p><span style="color: #165493;">—　あなたに毒を飲んでもらおう。もしその毒があなたになんの害もあたえながったら、わたしは、あなたの神がほんとうの神だと信じよう」</span>と答えた。</p>
        </blockquote>
        <p><span style="color: #994c3d;">ヨハネ</span>が、</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　よろしい。そのとおりにしてください」</span>と言うと</td>
        <td>、</p>
        </blockquote>
        <p>アリストデムスは、</p>
        <blockquote>
          <p><span style="color: #165493;">—　いや、さらに、そのまえにまずほかの者がその毒を飲んで死ぬところをあなたに見ておいてもらうことにしよう。そうしておいたほうが、あなたにいっそう気おくれさせる効果があるからな」</span>と答え、</p>
        </blockquote>
        <p>代理執政官のところに行って、死刑の宣告を受けた囚人をふたりもらい受けてきて、民衆の面前でその毒を飲ませた。</p>
        <p>囚人たちはたちどころに死んだ。</p>
        <p>つづいて、<span style="color: #994c3d;">聖ヨハネ</span>は、その杯を受けとり、杯のうえで十字を切って、毒をすっかり飲みほした。しかし、彼にはなんの害も起こらなかった。</p>
        <p>民衆は、それを見て、神をほめたたえた。</p>
        <p>けれども、アリストデムスは、</p>
        <blockquote>
          <p><span style="color: #165493;">—　まだわたしには疑わしい。しかし、毒を飲んで死んだふたりの者をあなたが生きかえらせることができたら、すべての疑いをすててあなたの神を信じよう」</span>と言った。</p>
        </blockquote>
        <p><span style="color: #994c3d;">聖ヨハネ</span>は、自分の外衣をアリストデムスに渡した。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　上衣をわたしによこすのは、どういうことかね</span>と、</p>
        </blockquote>
        <p>アリストデムスはたずねた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　いまにあなたは不信仰を棄てるでしょう</p>
        </blockquote>
        <blockquote>
          <p><span style="color: #165493;">—　あなたの上衣がわたしに信仰心を起こさせるというのかね</p>
        </blockquote>
        <p><span style="color: #994c3d;">ヨハネ</span>は、答えた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　さあ、死んだふたりの身体にこの上衣をかけなさい。そしてこう言うのです、</span></p>
          <p><span style="color: #df8f20;">〈あなたがたがキリストの御名においてよみがえるように、キリストの使徒がわたしをあなたがたのところにつかわされたのです〉、と</p>
        </blockquote>
        <p>アリストデムスは、言われたとおりにした。すると、死者たちは、息を吹きかえした。</p>
        <p>こうして、アリストデムスも、代理執政官も、一家総ぐるみキリスト教を信仰するようになった。<span style="color: #994c3d;">ヨハネ</span>は、彼らにキリストの御名において洗礼をさずけた。彼らは、教会を建てて、使徒にささげた。</p>
      </article></section>
    </article></section>
  </article></section>
</article>

<hr>

<aside>
  <article>
  <h2 id="notes" class="yellow">註釈</h2>
    <section><article>
      <h3 id="note_nomdejean" class="yellow">ヨハネの名</h3>
      <section><article>
        <div class="notices yellow">
          <p>ヘブライ語でのヨハネの名の意義について、<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean">「〈ヨハネ〉という名、施設との繋がり、語源」</a>にご参照。</p>
        </div>
      </article></section>
      <footer>
        <p>註に戻る：　<a href="#nomdejean" title="ヨハネの名">ヨハネの名 ↑</a></p>
      </footer>
    </article></section>

    <section><article>
      <h3 id="note_laodiceia" class="yellow">ラオディケイア</h3>
      <section><article>
        <div class="notices yellow">
          <p><a href="https://ja.wikipedia.org/wiki/ラオディキア" title="https://ja.wikipedia.org/wiki/ラオディキア"><ruby lang="ja">ラオディケイア<rp>(</rp><rt lang="la">Laodiceia</rt><rp>)</rp></ruby lang="ja"></a>は、地小アジアの<a href="https://ja.wikipedia.org/wiki/フリギア" title="https://ja.wikipedia.org/wiki/フリギア"><ruby lang="ja">フリギア<rp>(</rp><rt lang="la">Phrygia</rt><rp>)</rp></ruby lang="ja">地方</a>の古代都市。</p>
          <p>古代名が同じながら、現在の<a href="https://ja.wikipedia.org/wiki/ラタキア" title="https://ja.wikipedia.org/wiki/ラタキア"><ruby lang="ja">ラタキア<rp>(</rp><rt lang="la">Latakia</rt><rp>)</rp></ruby lang="ja"></a>ではありませんので、ご注意ください。</p>
        </div>
      </article></section>
      <footer>
        <p>註に戻る：　<a href="#laodiceia" title="ラオディケイア">ラオディケイア ↑</a></p>
      </footer>
    </article></section>

    <section><article>
      <h3 id="note_isidore" class="yellow">イシドルス</h3>
      <section><article>
        <div class="notices yellow">
          <p>〈セビリヤの〉イシドルス（<time datetime="560">５６０<time>頃~<time datetime="636">６３６年<time>）。聖人（祝、４月４日）、教会博士、セビリヤ大司教。</p>
          <p>大教皇グレゴリウス一世に協力して西ゴート族の改宗に努力、また該博な百科全書知識（主著『語源考』二十巻がその集約）によって創成期のヨーロッパ中世文化に指導的な影響をあたえた。</p>
        </div>
      </article></section>
      <footer>
        <p>註に戻る：　<a href="#isidore" title="イシドルス">イシドルス ↑</a></p>
      </footer>
    </article></section>

    <section><article>
      <h3 id="note_asie" class="yellow">アジア</h3>
      <section><article>
        <div class="notices yellow">
          <p>これはローマ帝国の属州名で、小アジア地方すなわちミュシア、リュディア、カリアおよびプリュギアの大半をさす。</p>
        </div>
      </article></section>
      <footer>
        <p>註に戻る：　<a href="#asie" title="アジア">アジア ↑</a></p>
      </footer>
    </article></section>

    <section><article>
      <h3 id="note_domitien" class="yellow">皇帝ドミティアヌス</h3>
      <section><article>
        <div class="notices yellow">
          <p><a href="https://ja.wikipedia.org/wiki/ドミティアヌス" title="https://ja.wikipedia.org/wiki/ドミティアヌス">皇帝<ruby lang="ja">ドミティアヌス<rp>(</rp><rt lang="la">Domitianus</rt><rp>)</rp></ruby lang="ja"></a>はローマ帝国の第十一代皇帝である。在位<time datetime="81">８１年<time>から<time datetime="96">９６年<time>。フラウィウス朝最後の皇帝であり、キリスト教はの大迫害者となったと記憶されており。</p>
        </div>
      </article></section>
      <footer>
        <p>註に戻る：　<a href="#domitien" title="皇帝ドミティアヌス">皇帝ドミティアヌス ↑</a></p>
      </footer>
    </article></section>

    <section><article>
      <h3 id="note_porte-latine" class="yellow">ラティナ門</h3>
      <section><article>
        <div class="notices yellow">
          <p>カラカラ浴場から南東にのびるラティナ街道にある門、サン・ジョヴァンニ・ア・ポルタ・ラティナ教会（ラティナ門の聖ヨハネ、の意）がある。</p>
        </div>
      </article></section>
      <footer>
        <p>註に戻る：　<a href="#porte-latine" title="ラティナ門">ラティナ門 ↑</a></p>
      </footer>
    </article></section>

    <section><article>
      <h3 id="note_patmos" class="yellow">パトモス島</h3>
      <section><article>
        <div class="notices yellow">
          <p><a href="https://ja.wikipedia.org/wiki/パトモス島" title="https://ja.wikipedia.org/wiki/パトモス島"><ruby lang="ja">パトモス<rp>(</rp><rt lang="la">Patmos</rt><rp>)</rp></ruby lang="ja">島</a>はトルコ沿岸部から程近いエーゲ海に浮かぶギリシャの小島。<a href="https://ja.wikipedia.org/wiki/ドデカネス諸島" title="https://ja.wikipedia.org/wiki/ドデカネス諸島">ドデカネス諸島</a>に含まれる。</p>
        </div>
      </article></section>
      <footer>
        <p>註に戻る：　<a href="#patmos" title="パトモス島">パトモス島 ↑</a></p>
      </footer>
    </article></section>

    <section><article>
      <h3 id="note_ephese" class="yellow">エペソス市</h3>
      <section><article>
        <div class="notices yellow">
          <p><a href="https://ja.wikipedia.org/wiki/エフェソス" title="https://ja.wikipedia.org/wiki/エフェソス"><ruby lang="ja">エペソス<rp>(</rp><rt lang="la">Ephesos</rt><rp>)</rp></ruby lang="ja">市</a>はトルコ西部の小アジアの古代都市で、現在のイズミル県のセルチュク近郊に位置している。<a href="https://ja.wikipedia.org/wiki/アルテミス" title="https://ja.wikipedia.org/wiki/アルテミス">ディアナ</a>崇拝で知られたギリシア人都市でもあった。</p>
        </div>
      </article></section>
      <footer>
        <p>註に戻る：　<a href="#ephese" title="エペソス市">エペソス市 ↑</a></p>
      </footer>
    </article></section>

    <section><article>
      <h3 id="note_drusiane" class="yellow">ドゥルシアネ</h3>
      <section><article>
        <div class="notices yellow">
          <p>黄金伝説では、<ruby lang="ja">ドゥルシアネ<rp>(</rp><rt lang="la">Drusiane</rt><rp>)</rp></ruby lang="ja">はエペソス住人としてしか表れませんが、〈ドゥルシアネとカリマッコス物語〉という新約聖書外典である『ヨハネ行伝』では、アンドロニックの妻として、悪人のカリマッコスの愛に攻められて、神に死で開放されることを念願して神から敵われたことが語られています。</p>
        </div>
      </article></section>
      <footer>
        <p>註に戻る：　<a href="#drusiane" title="ドゥルシアネ">ドゥルシアネ ↑</a></p>
      </footer>
    </article></section>

    <section><article>
      <h3 id="note_mathieu" class="yellow">もし完全になりたいのなら</h3>
      <section><article>
        <section><article>
          <p>この引用文は、マタイによる福音の第１９章第２１節１節を指す。</p>
        </article></section>
        <section><article>
          <div class="notices yellow">
            <ol class="doc">
              <li value="21"><p>「イエスは言われた。</p>
                <blockquote>
                  <p><q style="quotes: '〈' '〉';">もし完全になりたいのなら、行って持ち物を売り払い、貧しい人々に施しなさい。そうすれば、天に富を積むことになる。それから、わたしに従いなさい。</q></p>
                </blockquote></li>
            </ol>
          </div>
        </article></section>
      </article></section>
      <section><article>
        <section><article>
          <p>補充として、完全文：</p>
        </article></section>
        <section><article>
          <div>
            <ol class="doc">
              <li value="16"><p>「さて、一人の男がイエスに近寄って来て言った。</p>
                <blockquote>
                  <p><q style="quotes: '〈' '〉';">先生、永遠の命を得るには、どんな善いことをすればよいのでしょうか</q></p>
                </blockquote></li>
              <li value="17"><p>イエスは言われた。</p>
                <blockquote>
                  <p><q style="quotes: '〈' '〉';">なぜ、善いことについて、わたしに尋ねるのか。善い方はおひとりである。もし命を得たいのなら、掟を守りなさい</q>。</p>
                </blockquote></li>
              <li value="18"><p>男が</p>
                <blockquote>
                  <p><q style="quotes: '〈' '〉';">どの掟ですか</q></p>
                </blockquote>
                <p>と尋ねると、イエスは言われた。</p>
                <blockquote>
                  <p><q style="quotes: '〈' '';">殺すな、姦淫するな、盗むな、偽証するな、</q></p>
                <blockquote></li>
              <li value="19">
                <blockquote>
                  <p><q style="quotes: '' '〉';">父母を敬え、また、隣人を自分のように愛しなさい。</q></p>
                </blockquote></li>
              <li value="20"><p>そこで、この青年は言った。</p>
                <blockquote>
                  <p><q style="quotes: '〈' '〉';">そういうことはみな守ってきました。まだ何か欠けているでしょうか</q>。</p>
                </blockquote></li>
              <li value="21"><p>イエスは言われた。</p>
                <blockquote>
                  <p><q style="quotes: '〈' '〉';">もし完全になりたいのなら、行って持ち物を売り払い、貧しい人々に施しなさい。そうすれば、天に富を積むことになる。それから、わたしに従いなさい</q>。</p>
                </blockquote></li>
              <li value="22">青年はこの言葉を聞き、悲しみながら立ち去った。たくさんの財産を持っていたからである。</li>
              <li value="24"><p>イエスは弟子たちに言われた。</p>
                <blockquote>
                  <p><q style="quotes: '〈' '';">はっきり言っておく。金持ちが天の国に入るのは難しい。</q></p>
                </blockquote></li>
              <li value="24">
                <blockquote>
                  <p><q style="quotes: '' '〉';">重ねて言うが、金持ちが神の国に入るよりも、らくだが針の穴を通る方がまだ易しい。</q></p>
                </blockquote></li>
            </ol>
          </div>
        </article></section>
      </article></section>
      <footer>
        <p>註に戻る：　<a href="#mathieu" title="もし完全になりたいのなら">もし完全になりたいのなら ↑</a></p>
      </footer>
      </article></section>
    </article></section>

    <section><article>
    <h3 id="note_hoteriche" class="yellow">神に永劫に罰せられた富裕な貪欲者と神に選ばれた貧しいラザロ</h3>
      <section><article>
        <div class="notices yellow">
          <p>この引用文は、マタイによる福音の第１９章第２１節一節を指す。</p>
          <ol class="doc">
            <li value="19">ある金持ちがいた。いつも紫の衣や柔らかい麻布を着て、毎日ぜいたくに遊び暮らしていた。</li>
            <li value="20">この金持ちの門前に、ラザロというできものだらけの貧しい人が横たわり、</li>
            <li value="21">その食卓から落ちる物で腹を満たしたいものだと思っていた。犬もやって来ては、そのできものをなめた。</li>
            <li value="22">やがて、この貧しい人は死んで、天使たちによって宴席にいるアブラハムのすぐそばに連れて行かれた。金持ちも死んで葬られた。</li>
            <li value="23">そして、金持ちは陰府でさいなまれながら目を上げると、宴席でアブラハムとそのすぐそばにいるラザロとが、はるかかなたに見えた。</li>
            <li value="24"><p>そこで、大声で言った。</p>
              <blockquote>
                <p><q style="quotes: '〈' '〉';">父アブラハムよ、わたしを憐れんでください。ラザロをよこして、指先を水に浸し、わたしの舌を冷やさせてください。わたしはこの炎の中でもだえ苦しんでいます。</q></p>
              </blockquote></li>
            <li value="25"><p>しかし、アブラハムは言った。</p>
              <blockquote>
                <p><q style="quotes: '〈' '〉';">子よ、思い出してみるがよい。お前は生きている間に良いものをもらっていたが、ラザロは反対に悪いものをもらっていた。今は、ここで彼は慰められ、お前はもだえ苦しむのだ。</q></p>
              <blockquote>
            </li>
          </ol>
        </div>
        </article></section>
        <section><article>
          <p>この話はヨハネにもう少し詳しく語られている：</p>
          <p><a href="https://www.bible.or.jp/read/vers_search.html" title="https://www.bible.or.jp/read/vers_search.html">ヨハネによる福音の第１１章を参照</a></p>
        </article></section>
      </article></section>
      <footer>
        <p>註に戻る：　<a href="#mathieu" title="もし完全になりたいのなら">神に永劫に罰せられた富裕な貪欲者と神に選ばれた貧しいラザロ ↑</a></p>
      </footer>
    </article></section>

    <section><article>
      <h3 id="note_eusebe" class="yellow">エウセビオス</h3>
      <section><article>
        <div class="notices yellow">
          <p>カイサリアの司教（<time datetime="263">２６３頃<time>~<time datetime="339">３３９年<time>）。オリゲネスの弟子。アリウス論争にあいし三位一体論で聖子従属説をとった。</p>
          <p>コンスタンティヌス大帝にいたるまでの教会の歩みを書いたその『教会史』一〇巻は、いまは散佚した源史料からのおよびただしい引用をふくみ、初代キリスト教時代の貴重な文献であり、〈教会史の父〉と称せられる。</p>
          <p>また『ギリシア人と異邦人の年代記』は、<time datetime="325">３２５年<time>までの古代諸民族の世界史概説であり、他に多くの護教書、聖書釈義、聖地地理などの著作がある。</p>
        </div>
      </article></section>
      <footer>
        <p>註に戻る：　<a href="#eusebe" title="エウセビオス">エウセビオス ↑</a></p>
      </footer>
    </article></section>

    <section><article>
      <h3 id="note_saint-clement" class="yellow">聖クレメンス</h3>
      <section><article>
        <div class="notices yellow">
          <p>アレクサンドリアのクレメンス〉とよばれ、アテネで生まれ、アレクサンドリアで活躍した教会著述家（<time datetime="215">没年２１５以前<time>）。</p>
          <p>つぎに述べられる物語は、その著『どのような富者が救われるか』から。</p>
          <p>なお、本文では、〈聖〉が冠せられているが、ローマ教会で彼が聖列にくわえられたという事実はなく、また司祭職についたこともないらしい。</p>
        </div>
      </article></section>
      <footer>
        <p>註に戻る：　<a href="#porte-latine" title="ラティナ門">聖クレメンス ↑</a></p>
      </footer>
    </article></section>
  </article>
</aside>
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