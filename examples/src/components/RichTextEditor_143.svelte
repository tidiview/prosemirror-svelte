<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<!-- Page 1 -->

  <h1 class="yellow"><cite><ruby lang="ja" style="color:#555;">洗礼者<wbr>ヨハネと<wbr>福音書記者<wbr>ヨハネの<wbr>三連画<rp>（</rp><rt lang="nl" style="color:#999;">Triptiek van Johannes de Doper en Johannes de Evangelist</rt><rp>）</rp></ruby></cite></h1>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-640.jpg" title="ハンス・メムリンク筆洗礼者ヨハネと福音書記者ヨハネの三連画、開翼時の三連画、メムリンク美術館、ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆洗礼者ヨハネと福音書記者ヨハネの三連画、開翼時の三連画、メムリンク美術館、ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1920.jpg 1920w"></picture><figcaption>開翼時の三連画</figcaption>
  </figure>


    <h2 class="yellow">ハンス・メムリンクの主な作品</h2>

      <h3 class="yellow">十五世紀からブルジュの聖ヨハネ施療院の三連画</h3>

        <div class="notices yellow">
          <p>この三連画は、<time datetime="1473">１４７３</time>~<time datetime="1474">７４</time>年にかけて建てられた<ruby lang="ja">ブルージュ<rp>（</rp><rt lang="fr">Bruges</rt><rp>）</rp></ruby>（フラマン語では、<ruby lang="ja">ブルッヘ<rp>（</rp><rt lang="nl">Brugge</rt><rp>）</rp></ruby>）の<ruby lang="ja">聖ヨハネ施療院<rp>（</rp><rt lang="nl">Sint-Janshospitaal</rt><rp>）</rp></ruby>の教会の新後陣の主祭壇のために考案され、設置された。</p>
          <p>枠は《<ruby lang="ja">ハンス・メムリンク作<rp>（</rp><rt lang="la">OPVs&#160;IOHANNIS&#160;MEMLING</rt><rp>）</rp></ruby>》との記載文を示しています。それはブルージュに十五世紀の後半に活躍した初期フランドル画家である、<ruby lang="ja">ハンス<rp>（</rp><rt lang="nl">Hans</rt><rp>）</rp>・<rp>（</rp><rt lang="nl"></rt><rp>）</rp>メムリンク<rp>（</rp><rt lang="nl">MEMLING</rt><rp>）</rp></ruby>の最初の知られている署名である。また、日付も表示されている：《<time datetime="1479">１４７９</time>年》。</p>
          <p>作品が中央パネルと、それに金具によって付けられている右と左にあるニ翼パネルがそれを取り囲んでいます。</p>
          <p>表わされている人物が等身大よりやや小さ目に表わされています。</p>
        </div>


    

      <h3 class="yellow">この記事について</h3>

        <h4 class="yellow">この記事の目的</h4>

          <div class="notices yellow">
            <p>私たちが作文するこの記事は最初の一見した印象を超えるのを目的とする</p>
            <ol>
              <li><p>ここでは私たちの目的は作品の解説を生み出すのではなく、しかも<span style="color: #e6a64d;">描写</span>を。その描写によってその作品をよりよく把握出来る要素を提供するのです。それは<span style="color: #e6a64d;">質の良い複写</span> <a href="#note-1" title="note-1" id="renvoi-note-1"><sup style="color:#555;">ノート１</sup></a> 、<span style="color: #e6a64d;">作品の主な根源</span>、文献的であれ、画学的であれです。それは、現在では、例えば図書館でも借りれる紙で印刷されている専門的な本ででもよくほのめかしや参照させることによってからしかされていません。</p></li>
              <li><p>メムリンクに直接影響があったと思われるのはもっともである、文書的であれ、絵画的であれ、各々の源を繋がげること、</p></li>
              <li><p>それで作品の一貫性だけでなく、その統一性を納得できる語りを再現すること、</p></li>
              <li><p>私たちが提示する各々の文書を私たちの選択が判断出来るように提供すること。</p></li>
            </ol>
            <p>そうしながら、私たちは読者に十五世紀のブルージュ社会をより親しい理解ができるようにするのであろう、特に：
            <ul>
              <li>ヤコブス・デ・ウォラギネ作の、<cite>黄金伝説</cite>という作品のキリスト教の<ruby>驚<rp>（</rp><rt>きょう</rt><rp>）</rp>異<rp>（</rp><rt>い</rt><rp>）</rp></ruby>的さ、</li>
              <li>宗教的改革運動の感受性である、「<ruby>新しき信心<rp>（</rp><rt>デヴォティオ・モデルナ</rt><rp>）</rp></ruby>」、</li>
              <li>ブルゴーニュ公国の街の経済の豊かさや社会の豪華さ。</li>
            </ul>
            <p>私たちの目的が達成されたといえるのは、読者本人が<span style="color: #e6a64d;">こんなに存在感の大いなる輝きのある関心を引くことに値すると思われる作品をご自分で測ってそれによってその感覚を深めること</span>ができればです</p>
          </div>




        <h4 class="yellow">この記事の目次</h4>

          <p>以下のページでは、より深い理解を提供するようにさまざまな面を紹介しています。</p>
          <ol>
            <li>まず、施療院の教会の新しい後陣である<a href="#presentation-photographique" title="presentation-photographique" id="renvoi-presentation-photographique" class="yellow">展示空間での三連画の写真紹介</a>によって、</li>
            <li>それから、<a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:2#description" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:2#description" class="yellow">象徴され用としている内容を描写する文書</a>によって、</li>
            <li>最後に、画像の様々な要素に合わせて画家本人が宗教的な題材を表すために基づいたと思われる<a href="/docs/fr/bruges/hopital-saint-jean/sint-jean/page:16#mise-en-relation" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:16#mise-en-relation" id="renvoi-mise-en-relation" class="yellow">様々な文書</a>との関係によってです。</li>
          </ol>





  <hr>


    <h2 id="presentation-photographique" class="yellow">展示空間での作品の写真的紹介</h2>
    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、聖ヨハネ施療院の教会の入り口から展示会所の全体景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、聖ヨハネ施療院の教会の入り口から展示会所の全体景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1920.jpg 1920w"></picture><figcaption>聖ヨハネ施療院の教会の入り口から展示会所の全体景観</figcaption>
    </figure>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、聖ヨハネ施療院の教会の中から展示会所の全体景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、聖ヨハネ施療院の教会の中から展示会所の全体景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1920.jpg 1920w"></picture><figcaption>聖ヨハネ施療院の教会の中から展示会所の全体景観</figcaption>
    </figure>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、聖ヨハネ施療院の教会の後陣から三連画前の景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、聖ヨハネ施療院の教会の後陣から三連画前の景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1920.jpg 1920w"></picture><figcaption>聖ヨハネ施療院の教会の後陣から三連画前の景観</figcaption>
    </figure>


<hr>

<nav>
  <h3 id="table-des-matieres" class="yellow">目次</h3>
  <ol>
    <li><a href="#presentation-photographique" title="展示空間での作品写真の紹介" class="yellow">展示空間での作品写真の紹介</a></li>
    <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:2#description" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:2#description" class="yellow">作品の描写</a>
      <ul>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:2#couronnement" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:2#couronnement" class="yellow">聖母の戴冠</a></li>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#catherine-d-alexandrie" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#catherine-d-alexandrie" class="yellow">アレクサンドリアのカタリナ</a></li>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#les-deux-jean" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#les-deux-jean" class="yellow">二人のヨハネ</a>
          <ul>
            <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#jean-le-baptiste-2" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#jean-le-baptiste-2" class="yellow">洗礼者ヨハネ</a></li>
            <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#jean-l-evangeliste-3" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#jean-l-evangeliste-3" class="yellow">福音書記者ヨハネ</a></li>
            <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean" class="yellow">「ヨハネ」という名、施設との繋がり、語源</a></li>
          </ul>
        </li>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#barbe" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#barbe" class="yellow">大殉教者バルバラ</a></li>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:4#conversation" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:4#conversation" class="yellow">聖なる会話</a></li>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:4#devotion-moderne" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:4#devotion-moderne" class="yellow">新しき信心</a></li>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:4#dispositif-architectural" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:4#dispositif-architectural" class="yellow">建築的装置</a></li>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:5#organisation-du-recit" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:5#organisation-du-recit" class="yellow">語り筋の仕組み</a></li>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:6#legendes" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:6#legendes" class="yellow">洗礼者ヨハネと福音書記者ヨハネの諸伝説</a>
          <ul>
            <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:6#legende-de-jean-le-baptiste" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:6#legende-de-jean-le-baptiste" class="yellow">洗礼者ヨハネ伝</a></li>
            <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:10#legende-de-jean-l-evangeliste" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:10#legende-de-jean-l-evangeliste" class="yellow">福音書記者ヨハネ伝</a></li>
          </ul></li>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:15#position-fermee" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:15#position-fermee" class="yellow">贈与者たちの紹介、閉翼時の三連画</a></li>
      </ul>
    </li>
    <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:16#mise-en-relation" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:16#mise-en-relation" class="yellow">表わされている場面の基にある様々な文書</a>
      <ul>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:16#cath-selon-legende" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:16#cath-selon-legende" class="yellow">黄金伝説に於いてのアレクサンドリアのカタリナ</a></li>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:17#barbe-selon-legende" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:17#barbe-selon-legende" class="yellow">黄金伝説に於いての大殉教者バルバラ</a></li>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#jean-selon-legende" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#jean-selon-legende" class="yellow">黄金伝説に於いての福音書記者ヨハネ（第９章）</a></li>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:19#jean-selon-legende-2" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:19#jean-selon-legende-2" class="yellow">黄金伝説に於いての福音書記者ヨハネ（第６５章）</a></li>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse" class="yellow">神の王座と天的宮廷の幻影、王座での生きているものと子羊</a></li>
      </ul>
    </li>
  </ol>
</nav>

<!-- Page 2 --><hr>


  <h2 id="description" class="yellow">作品の描写</h2>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-640.jpg" title="《洗礼者ヨハネと福音書記者ヨハネの三連画》、開翼時の三連画の景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《洗礼者ヨハネと福音書記者ヨハネの三連画》、開翼時の三連画の景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1920.jpg 1920w"></picture><figcaption><ruby>開<rt style="color:#555">かい</rt>翼<rt style="color:#555">よく</rt>時<rt style="color:#555">じ</rt></ruby></figcaption>
    </figure>

      <p>私たちはまず<span style="color: #e6a64d;">作品が表わそうとしている事を</span>描写しましょう。そのため、<span style="color: #e6a64d;">視線</span>を追います。それは、<span style="color: #e6a64d;">主な場面</span>から始まります。</p>


    <h3 id="couronnement" class="yellow">聖母の戴冠</h3>

      <p><span style="color: #e6a64d;">中央の聖母</span>は、綺麗な模様のある上級繊維の前で、赤いベルベットのバルダキンの下に金箔の王座で座しています。</p>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-640.jpg" title="《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの拡大、《聖母と幼子イエス》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの拡大、《聖母と幼子イエス》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1920.jpg 1920w"></picture><figcaption>中央パネルの拡大、《聖母と幼子イエス》</figcaption>
    </figure>


      <p>彼女は上空を飛んでいる<span style="color: #e6a64d;">ニ人の小さな暗い青の天使</span>によって「天国の女王」の冠を戴こうとしています。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-640.jpg" title="《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの拡大、《聖母の冠を持つ二人の天使》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの拡大、《聖母の冠を持つ二人の天使》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1920.jpg 1920w"></picture><figcaption>中央パネルの拡大、《聖母の冠を持つ二人の天使》</figcaption>
    </figure>



    <h3 id="couronnement" class="yellow">幼子イエス</h3>

      <p>彼女の膝に<span style="color: #e6a64d;">幼子イエス</span>は、座ったままで、左手でリンゴを掴んでいて、右手では、聖母の左下前方に居る<span style="color: #e6a64d;">女の人</span>の<span style="color: #e6a64d;">薬指</span>に、金の指輪を、聖母の下と左で、はめようとしています。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-640.jpg" title="《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの拡大、《幼子イエス》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの拡大、《幼子イエス》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1920.jpg 1920w"></picture><figcaption>中央パネルの拡大、《幼子イエス》</figcaption>
    </figure>


<!-- Page 3 --><hr>



    <h3 id="catherine-d-alexandrie" class="yellow">アレクサンドリアのカタリナ</h3>

      <h4 class="yellow">中央パネルでのアレクサンドリアのカタリナ</h4>

	      <p>殉教の道具である<span style="color: #e6a64d;">剣</span>と<span style="color: #e6a64d;">壊れた車輪</span>があるので彼女は、<a href="https://ja.wikipedia.org/wiki/アレクサンドリアのカタリナ" title="https://ja.wikipedia.org/wiki/アレクサンドリアのカタリナ" class="yellow">アレクサンドリアのカタリナ</a>です。</p>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《アレクサンドリアのカタリナ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《アレクサンドリアのカタリナ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.jpg 1920w"></picture><figcaption>アレクサンドリアのカタリナ</figcaption>
      </figure>



      <h4 class="yellow">アレクサンドリアのカタリナ、その歴史的事実</h4>

      <p><a href="https://ja.wikipedia.org/wiki/アレクサンドリアのカタリナ" title="https://ja.wikipedia.org/wiki/アレクサンドリアのカタリナ" id="catherine-d-alexandrie-2" class="yellow">アレクサンドリアのカタリナ</a>は十三世紀末期からとても人気のある聖人でありました。</p>
      <p>彼女の伝説は<a href="https://ja.wikipedia.org/wiki/ヤコブス・デ・ウォラギネ" title="https://ja.wikipedia.org/wiki/ヤコブス・デ・ウォラギネ" class="yellow">ヤコブス・デ・ウォラギネ</a>が<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:16#cath-selon-legende" title="https://francois-vidit.com/docs/ja/saint-jean/page:6#cath-selon-legende" class="yellow">『聖カタリナ』</a>という<a href="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" title="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" class="yellow">『黄金伝説』</a>の１６８章に記述さられていて、とても面白いです。</p>

        <p class="puce"><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:16#cath-selon-legende" title="https://francois-vidit.com/docs/ja/saint-jean/page:6#cath-selon-legende" class="yellow"><cite>黄金伝説</cite>によるアレクサンドリアのカタリナの伝説の文書を</a>を読む。</p>

      <p>メムリンクがこの文書に基づいて描いたことは非常に確実らしいです。</p>
      <p>現代の歴史家たちはアレクサンドリアのカタリナが確実に存在したか <sup id="page-3-fnref1:1"><a href="#page-3-fn:1" class="footnote-ref">ノート１</a></sup> 疑っています。</p>
      <p>カトリック教会もそれを認めている。その崇拝が<time datetime="1970">１９７０年</time>に一般ローマ暦 <sup id="page-3-fnref1:2"><a href="#page-3-fn:2" class="footnote-ref">ノート２</a></sup> から取り除かれた。</p>



      <h4 class="yellow">アレクサンドリアのカタリナ、その十五世紀での伝説</h4>

      <p>伝説において、<span style="color: #e6a64d;">並外れた教育</span>と<span style="color: #e6a64d;">とても素晴らしい美しさ</span>を持った、の<span style="color: #e6a64d;">上流階級貴族の一人</span>とされています。</p>
      <p>カタリナはアレクサンドリアに三世紀又は四世紀に生きたであろう。</p>
      <p>彼女はキリスト教徒たちを強要して公に信仰を棄教させる当時のローマ帝国大帝<a href="https://ja.wikipedia.org/wiki/マクセンティウス" title="https://ja.wikipedia.org/wiki/マクセンティウス" class="yellow">マクセンティウス</a>に挑戦させます。</p>
      <p>マクセンティウスがこの優秀な女の人に面することに驚きます。彼女は勝れている会話によって彼を侮辱させ、悔しくさせています。</p>
      <p>彼は、自分の尊厳を維持することに苦労して、たくさんの新たな展開のある長い精神的な対立を経て破られ、結婚することを彼女に勧めます。</p>
      <p>カタリナは、信仰の名によって拒否し、殉教する方を選びます。</p>
      <p>処刑の際では、天からイエス自身の声が聞こえてきたのであろう、彼女にいうために：</p>

      <blockquote cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:17#barbe-selon-legende">
        <span style="color: #e6a64d;">「親愛なる人よ、私の美女、来てください！」</span>
      </blockquote>

      <p>中央パネルでの聖母と幼子イエスのそばでの聖カタリナの存在から、この三連画は時には<span style="color: #e6a64d;">《聖カタリナの神秘的結婚》</span>とも称されたことがあります。</p>


  

    <h3 id="les-deux-jean" class="yellow">二人のヨハネ</h3>
      
      <h4 class="yellow">二人の双子：洗礼者ヨハネ、福音書記者ヨハネ</h4>

        <p>二人とも「ヨハネ」と呼ばれているのも出資施設である「ブルージュの聖ヨハネ施療院」に由来しており、「洗礼者ヨハネと福音書記者ヨハネの三連画」である現代の公の呼称をも。</p>
      <ol>
        <li>彼たちの伝説が数多くのいくつかの場面で三連画の内側の範囲全面<span style="color: #999;">（中央パネル、右翼と左翼パネル）</span>に語られていることから、</li>
        <li>二人とも<span style="color: #e6a64d;">「ヨハネ」</span>と呼ばれていて、それで密かに<span style="color: #e6a64d;">ブルジュの聖ヨハネ施療院</span>である注文施設を作品に具体化しながら、現在の公け呼称、<span style="color: #e6a64d;">《<cite>洗礼者ヨハネと福音書記者ヨハネの三連画</cite>》</span>をも裏付けていることから。</li>
      </ol>
      <p>彼たちは<span style="color: #e6a64d;">双子</span>のように聖母の右と左の両方の奥の方に立っています。</p>



      <h4 id="jean-le-baptiste-2" class="yellow">洗礼者ヨハネ</h4>

      <p>奥の方では、左に、<span style="color: #e6a64d;">白い色の子羊</span>の存在が、素晴らしい<span style="color: #e6a64d;">紫色のチュニック</span>を着る<span style="color: #e6a64d;">男の人</span>を<a href="https://ja.wikipedia.org/wiki/洗礼者ヨハネ" title="https://ja.wikipedia.org/wiki/洗礼者ヨハネ" id="jean-le-baptiste" class="yellow">洗礼者ヨハネ</a>として見分けることを可能にしてくれています。</p>
      <p>羊は彼が弟子たちにかけた<span style="color: #e6a64d;">現世でのイエスの到来</span>を<span style="color: #e6a64d;">告げる</span>言葉<span style="color: #e6a64d;"></span><span style="color: #999;">（ヨハネ、第１章２９節）</span> <sup id="page-3-fnref1:4"><a href="#page-3-fn:4" class="footnote-ref">ノート３</a></sup> を思い出させてくれる：</p>

      <blockquote cite="https://www.bible.com/ja/bible/1819/JHN.1.新共同訳>
        <span style="color:#e6a64d;">「<ruby style="color:#e6a64d;">見よ、神の子羊だ<rp>（</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">エッチェ・アニウス・デイ</rt><rp>）</rp></ruby>」</span>
      </blockquote>

      <p>そして、ヨハネが右腕で<span style="color: #e6a64d;">幼子イエス</span>を指し示しています。</p>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1920.jpg 1920w"></picture><figcaption>洗礼者ヨハネ</figcaption>
      </figure>

      <p>ここでは、子羊が新しい、キリスト教の独特なシンボルです。</p>
      <p>旧ヘブライ信仰では神を喜ばすには動物の<ruby>生<rp>（</rp><rt>い</rt><rp>）</rp>け<rp>（</rp><rt>&#160;</rt><rp>）</rp>贄<rp>（</rp><rt>にえ</rt><rp>）</rp></ruby>をささげなければならなかったこととは逆に、キリスト教は神に気の入る唯一の本当の生け贄が信者がイエスを模範にしてイザヤ預言者のこの言葉に基づきながら、<span style="color: #e6a64d;">自分から神に自分自身を生け贄</span>とささげるのであることを断言しています<span style="color: #999;">（イザヤ、５３・７）</span>：</p>
      <blockquote>
        <p><q style="quotes: '「' '」';">屠り場に引かれる小羊のように毛を刈る者の前に物を言わない羊のように彼は口を開かなかった。</q></p>
      </blockquote>
      <p>その紫色のチュニックの下に、<span style="color: #e6a64d;">もう一つのチュニック</span>、薄い栗色のが、文書<span style="color: #999;">（マルコ、１・６）</span>が<a href="https://ja.wikipedia.org/wiki/エリア" title="https://ja.wikipedia.org/wiki/エリア" id="elie" class="yellow">エリア</a>預言者の毛皮衣を真似て<span style="color: #999;">（王２、第１章８節）</span>、ラクダの毛であることは明らかです。</p>
      <p>この同じ毛皮衣がまた<a href="https://ja.wikipedia.org/wiki/ヤコブ_(旧約聖書)" title="https://ja.wikipedia.org/wiki/ヤコブ_(旧約聖書)" id="jacob" class="yellow">ヤコブ</a>が、<a href="https://ja.wikipedia.org/wiki/リベカ" title="https://ja.wikipedia.org/wiki/リベカ" id="rebecca" class="yellow">母リベカ</a>の指示で、とても毛深いの兄<a href="https://ja.wikipedia.org/wiki/エサウ" title="https://ja.wikipedia.org/wiki/エサウ" id="esau" class="yellow">エサウ</a>に、眼の見えない父である<a href="https://ja.wikipedia.org/wiki/イサク" title="https://ja.wikipedia.org/wiki/イサク" id="isaac" class="yellow">イサク</a>を毛皮の衣を着ながら思わせるようにした創世記の一つの話し<span style="color: #999;">（創世記、第２７章１～４０節）</span>にも基づきます。</p>
      <p>彼の術策が不正に祝福されるとそれでエサウ代わりに唯一の相続人となることを可能にします。</p>
      <p>このチュニックがまた動物を制御の<ruby>印<rp>（</rp><rt>しるし</rt><rp>）</rp></ruby>となっていて、洗礼者ヨハネの場合、ラクダが砂漠を横断することは、修行により動物を制御することで可能になるという意味になります。</p>



      <h4 id="jean-l-evangeliste-3" class="yellow">福音書記者ヨハネ</h4>

        <p>他方、右では、<span style="color: #e6a64d;">もう一人</span>が立っていて、神父のように<span style="color: #e6a64d;">赤い色</span>の服を着ている<span style="color: #e6a64d;">男の人</span>が右手から十字架の描き、中に<span style="color: #e6a64d;">蛇</span>のいる<span style="color: #e6a64d;">杯</span>を上にしています。これは<a href="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" title="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" id="jean-l-evangeliste-4" class="yellow">福音書記者ヨハネ</a>である。</p>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>福音書記者ヨハネ</figcaption>
      </figure>

        <p>私たちは<a href="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" title="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" id="jean-l-evangeliste" class="yellow">福音書記者ヨハネ</a>であることが<a href="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" title="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" id="legende-doree-3" class="yellow"><cite>黄金伝説</cite></a>の<span style="color: #999;">第９章</span>の巻から明らかにしています。</p>
        <ul>
          <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" id="renvoi-aristodeme" class="yellow"><cite>黄金伝説</cite>の第９章による<cite>福音書記者の伝説</cite>の文書</a>を読む。</li>
        </ul>
        <p>そこでヨハネは<span style="color: #e6a64d;">毒の入った盃</span>を<span style="color: #e6a64d;">飲む</span>ことで、公に<ruby>挑<rp>（</rp><rt>いど</rt><rp>）</rp></ruby>むアジア<span style="color: #999;">（おそらくエフェソス）</span>にあるディアナ社大祭官の<span style="color: #e6a64d;">アリストデムス</span>と対立します。</p>
        <p>彼は、メムリンクが表している通り、<span style="color: #e6a64d;">十字の印を描いて</span>、盃を飲みますが毒が彼に何の悪をさせません。</p>
        <p><span style="color: #e6a64d;">蛇</span>が同時にイエスが<a href="https://ja.wikipedia.org/wiki/ニコデモ" title="https://ja.wikipedia.org/wiki/ニコデモ" id="nicodeme" class="yellow">ニコデモ</a>を思い起こすこともしている。<span style="color: #999;">（ヨハネ第３章１４節）</span>：</p>

        <blockquote cite="https://www.bible.com/ja/bible/1819/JHN.3.新共同訳">
          <span style="color: #e6a64d;">「モーセが荒れ野で蛇を上げたように、人の子も上げられねばならない。それは、信じる者が皆、人の子によって永遠の命を得るためである。」</span>
        </blockquote>


    

      <h4 id="le-nom-de-jean" class="yellow">「ヨハネ」の名、その語源</h4>

        <h5 class="yellow">ヘブライ語での「ヨハネ」の名の語源</h5>
        <p>「ヨハネ」という名前の語源がヘブライ語の<span style="color: #e6a64d;">「</span><ruby lang="ja" style="color:#e6a64d;">ヨ<rp>（</rp><rt lang="he" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">יו</rt><rp>）</rp>ハ<rp>（</rp><rt lang="he" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">ח</rt><rp>）</rp>ナン<rp>（</rp><rt lang="he" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">נן</rt><rp>）</rp></ruby><span style="color: #e6a64d;">」</span>から来ています。発音は：</p>
        <p><audio controls title="ヘブライ語での「ヨハナン」の発音"><source src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/prononciation-yokhanan.mp3" type="audio/mpeg">あなたのブラウザーは <code>audio</code> 要素に対応していません。</audio></p>
        <p>文字通りに<span style="color: #e6a64d;">「</span><ruby lang="ja" style="color:#e6a64d;">神<rp>（</rp><rt lang="he" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">ヨ</rt><rp>）</rp></ruby><span style="color: #e6a64d;">」</span>が<span style="color: #e6a64d;">「</span><ruby lang="ja" style="color:#e6a64d;">恵<rp>（</rp><rt lang="he" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">ハナン</rt><rp>）</rp></ruby><span style="color: #e6a64d;">」</span>か<span style="color: #e6a64d;">「</span><ruby lang="ja" style="color:#e6a64d;">慈悲<rp>（</rp><rt lang="he" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">ハナン</rt><rp>）</rp></ruby><span style="color: #e6a64d;">」</span>。</p>
        <p>同時にヘブライ語では、「神」は「存在しているもの」という意味をも持っているから、<span style="color: #e6a64d;">「恵」</span>か<span style="color: #e6a64d;">「慈悲」</span>が<span style="color: #e6a64d;">「宿るもの」</span>という意味になります。</p>
        <p><span style="color: #e6a64d;">この名前</span>がヘブライの民の歴史のあまり知られていない他の人物の名前として知られているとしても、とても<span style="color: #e6a64d;">人気</span>と<span style="color: #e6a64d;">なった</span>のはキリスト教が芽生えた後、<span style="color: #e6a64d;">キリスト教界</span>での二人が果したとても大切な役割からです。これらの役割をこれから細かく語ります。</p>





    <h3 id="barbe" class="yellow">大殉教者バルバラ</h3>

      <h4 class="yellow">中央パネルの場面での大殉教者バルバラ</h4>

      <p>聖母の右手前方には、十五世紀ではブルージュにしか制作されていなかった<span style="color: #e6a64d;">緑色の羊毛の素晴らしいチュニック</span>を着る<span style="color: #e6a64d;">もう一人</span>の女の人が本を<span style="color: #e6a64d;">読んでいます</span>。</p>
      <p>彼女の存在が、反対側に、前にある<a href="#catherine-d-alexandrie" class="yellow">アレクサンドリアのカタリナ</a>のを対象しています。</p>
      <p>彼女の後ろにある<span style="color: #e6a64d;">白い色の石での<ruby style="color:#e6a64d;">聖<rp>（</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">せい</rt><rp>）</rp>櫃<rp>（</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">ひつ</rt><rp>）</rp></ruby>塔</span>が、彼女は<a href="https://ja.wikipedia.org/wiki/聖バルバラ" title="https://ja.wikipedia.org/wiki/聖バルバラ" id="barbe-la-grande-martyre" class="yellow">大殉教者バルバラ</a>であることが示されています <sup id="page-3-fnref1:3"><a href="#page-3-fn:3" class="footnote-ref">ノート４</a></sup>。</p>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《大殉教者バルバラ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《大殉教者バルバラ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.jpg 1920w"></picture><figcaption>大殉教者バルバラ</figcaption>
      </figure>


      <h4 class="yellow">大殉教者バルバラ、その歴史的存在</h4>

      <p><a href="#catherine-d-alexandrie" class="yellow">アレクサンドリアのカタリナ</a>と同じように、現代の歴史家たちが実在したことを疑うと、彼女の名前もカトリック教会の一般ローマ暦 <sup id="fnref2:2"><a href="#fn:2" class="footnote-ref">ノート２</a></sup> から取り除かれました。メムリンクが彼女を描くために基にした文書も元々<a href="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" title="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" id="legende-doree-2" class="yellow"><cite>黄金伝説</cite></a>に含まれていませんが、他の文書と同様に、後で追加されることなりました。</p>
      <ul>
        <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:17#prout" title="https://francois-vidit.com/docs/ja/saint-jean/page:7#barb-selon-legende" class="yellow"><cite>黄金伝説</cite>に追加された《大殉教者バルバラの伝説》の文書</a>を読む。</li>
      </ul>


      <h4 class="yellow">大殉教者バルバラ、十五世紀での伝説</h4>
      <p>その伝説によりますと、バルバラは旧<a href="https://ja.wikipedia.org/wiki/ビテュニア" title="https://ja.wikipedia.org/wiki/ビテュニア" id="bithynie" class="yellow">ビテュニア</a>の首都<a href="https://ja.wikipedia.org/wiki/イズミット" title="https://ja.wikipedia.org/wiki/イズミット" id="nicomedie" class="yellow">二コメディア</a> <sup id="page-3-fnref1:5"><a href="#fn:5" class="footnote-ref">ノート５</a></sup> に住んでいました。
      欠点としてバルバラは美しいこと。。、こんなに美しいことから、とても若いころに、<span style="color: #e6a64d;">彼女のお父さんが彼女を塔に閉じ込めさせましたの</span>！</p>
      <p>文書だとバルバラがそこから<q style="quotes: '「' '」';color: #e6a64d;"><span style="color: #e6a64d;">地上的現世の拙さ</span></q>を感じて、<q style="quotes: '「' '」';color: #e6a64d;"><span style="color: #e6a64d;">天上的<ruby style="color:#e6a64d;">妙<rp>（</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">たえ</rt><rp>）</rp></ruby>なるものごと</span></q>に気にし始めるとなっています。
      当時には禁じられているのに、彼女が少しづつローマの神々から離れて、密かに<a href="https://ja.wikipedia.org/wiki/アレクサンドリア" title="https://ja.wikipedia.org/wiki/アレクサンドリア" id="alexandrie" class="yellow">アレクサンドリア</a>の一有名のキリスト教徒<a href="https://ja.wikipedia.org/wiki/オリゲネス" title="https://ja.wikipedia.org/wiki/オリゲネス" class="yellow">オリゲネス</a>に手紙を書きます。
      彼は彼女に返答し、芽生えている信仰を強めて、彼女を訪れて、こっそりと<span style="color: #e6a64d;">洗礼</span>を授けます。</p>
      <p>その後、神々を信じることを公に拒否したことにより、<span style="color: #e6a64d;">密告された</span>ことで、彼女は殉教します。
      その時、イエスの声が天から聞こえて来たのであろう：</p>

      <blockquote cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:17#barbe-selon-legende">
        <span style="color: #e6a64d;">「親愛なる人よ、天にある私の父の家に休みたまえ。」</span>
      </blockquote>
      <p>自分の父が頭を刎ねたのです。</p>



      <h4 class="yellow">大殉教者バルバラの塔を透けての一個の聖体</h4>
      <p>塔の組み合わせ隙間を通して、<span style="color: #e6a64d;">ガラス製の円柱</span>が見えています。その中に薄く一個の<span style="color: #e6a64d;">聖体</span>があります。</p>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-840.webp 840w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《塔の組み合わせ模様を通して、ガラス製の柱が覗けられて、その中に薄く一個の聖体が表されている》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《塔の組み合わせ模様を通して、ガラス製の柱が覗けられて、その中に薄く一個の聖体が表されている》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-840.jpg 840w"></picture><figcaption>塔の組み合わせ模様を通して、ガラス製の柱が覗けられて、その中に薄く一個の聖体が表されている</figcaption>
      </figure>

      <p><span style="color: #e6a64d;">聖体</span>は聖人としての表像の一つでもある。パネルの他の部分との<span style="color: #e6a64d;">「聖なる会話」</span>という形を示している繋がりの一つでもある。</p>



<!-- Page 4 -->



    <h3 id="conversation" class="yellow">聖母マリアと幼子イエスの周囲の聖なる会話</h3>

      <h4 class="yellow">中央パネルの場面での聖なる会話</h4>

        <p><a href="https://ja.wikipedia.org/wiki/聖母マリア" title="https://ja.wikipedia.org/wiki/聖母マリア" id="marie-mere-de-jesus" class="yellow">マリア</a>の戴冠式には、<a href="#catherine-d-alexandrie" title="アレクサンドリアのカタリナ" class="yellow">カタリナ</a>と<a href="#barbe" class="yellow">バルバラ</a>、<a href="#jean-le-baptiste-2" title="洗礼者ヨハネ" id="jean-le-baptiste-3" class="yellow">洗礼者ヨハネ</a>と<a href="#jean-l-evangeliste-3" title="福音書記者ヨハネ" id="jean-l-evangeliste-5" class="yellow">福音書記者ヨハネ</a>のいわゆる<span style="color: #e6a64d;">「</span><ruby style="color:#e6a64d;">聖なる会話<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;">サクラ・コンヴェルサツィオーネ</rt><rp>）</rp></ruby><span style="color: #e6a64d;">」</span> <sup id="page-4-fnref1:1"><a href="#page-4-fn:1" class="footnote-ref">ノート１</a></sup> 聖母の周りの<span style="color: #e6a64d;">聖人の集会</span>にニ人ずつ参加しています。</p>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの全体像、聖母の戴冠式、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの全体像、聖母の戴冠式、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1920.jpg 1920w"></picture><figcaption>中央パネルの全体像、聖なる会話</figcaption>
      </figure>



      <h4 class="yellow">中央パネルの場面でのニ人の侍者たち</h4>

        <p>この<span style="color: #e6a64d;"><ruby style="color:#e6a64d;">交<rp>（</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">まじ</rt><rp>）</rp></ruby>わり</span>の<ruby>趣<rp>（</rp><rt>おもむき</rt><rp>）</rp></ruby>は以下の存在によってさらに強くなっている。</p>
        <ul>
          <li>聖母の左手の小さな<span style="color: #e6a64d;">オルガン</span>を弾く座った<span style="color: #e6a64d;">侍者</span>と、</li>
          <li>左手の彼女に<span style="color: #e6a64d;">本</span>を差し出す<ruby>跪<rp>（</rp><rt>ひざまず</rt><rp>）</rp></ruby>いた<span style="color: #e6a64d;">もう一人</span></li>
        </ul>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの拡大、《ニ人の侍者たち》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの拡大、《ニ人の侍者たち》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1920.jpg 1920w"></picture><figcaption>中央パネルの拡大、ニ人の侍者たち</figcaption>
      </figure>




    <h3 class="yellow">聖なる会話L、「新しき信心」注目に値する表現</h3>

      <h4 class="yellow">左右対称、単純さ、中心人物の配置の識別</h4>

        <h5 class="yellow">左右対称、単純さ</h5>

          <p>幅での位置関係の左右対称と単純さが三連画の形とよく合います。</p>

        
        <h5 class="yellow">識別</h5>

          <p>高さと奥行きが<span style="color: #e6a64d;">男女の識別</span>により配置されています：</p>
          <ul>
            <li><span style="color: #e6a64d;">前</span>と下の方では、<span style="color: #e6a64d;">女の人ニ人</span>で、</li>
            <li><span style="color: #e6a64d;">後ろ</span>と上の方では、<span style="color: #e6a64d;">男の人ニ人</span>です。</li>
          </ul>
          <p>奥行きと高さでの<span style="color: #e6a64d;">計り知れなさ</span>と<span style="color: #e6a64d;">神秘</span>に、横での位置の<span style="color: #e6a64d;">左右対称</span>と<span style="color: #e6a64d;">単純さ</span>が対応しています。</p>



    

      <h4 class="yellow">顔立ちの類似性、表わされている年齢の多様性</h4>

        <p>表わされている人物は<span style="color: #e6a64d;">同じ家族</span>に属しているようと、<span style="color: #e6a64d;">あらゆる年齢</span>であることに見えます：</p>
        <ul>
          <li>生まれたばかりの赤ちゃん、</li>
          <li>小さな子供、</li>
          <li>子供、</li>
          <li>少年、</li>
          <li>若い男の人、</li>
          <li>女の人、</li>
          <li>お母さま、</li>
          <li>男の人、</li>
          <li>年のある男と女の人。</li>
        </ul>
        <p>この顔立ちの<span style="color: #e6a64d;">類似性</span>と年齢の<span style="color: #e6a64d;">多様性</span>が場面全体を統一させています。</p>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《左から右へ、顔立ちの類似性、表されている年齢の多様性》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《左から右へ、顔立ちの類似性、表されている年齢の多様性》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、左から右へ、顔立ちの類似性、表されている年齢の多様性</figcaption>
      </figure>



      <h4 class="yellow">新しき信心、十五世紀のフランドル社会のキリスト的改革運動</h4>

        <p>顔立ちの<span style="color: #e6a64d;">類似性</span>と年齢の<span style="color: #e6a64d;">多様性</span>が全体を<span style="color: #e6a64d;">統一</span>させています。</p>
        <p>私たちはこの<span style="color: #e6a64d;">均衡</span>がメムリンクが生きた社会の注目すべき特性であると当時の、歴史家たちが<span style="color: #e6a64d;">「</span><a href="https://fr.wikipedia.org/wiki/Devotio_moderna" title="https://fr.wikipedia.org/wiki/Devotio_moderna" id="devotio-moderna" class="yellow"><ruby>新しき信心<rp>（</rp><rt>デヴォティオ・モデルナ</rt><rp>）</rp></ruby></a><span style="color: #e6a64d;">」</span> <sup id="page-4-fnref1:2"><a href="#page-4-fn:2" class="footnote-ref">ノート２</a></sup> と呼ぶキリスト教信仰のとても大事な改革運動をよりよく把握するために無視することはできないと考えています。</p>

      <footer>
        <p class="puce">もっと知るには：<a href="#note-devotion-moderne" title="「新しき信心」運動を紹介する註釈" id="renvoi-devotion-moderne" class="yellow">十五世紀の歴史的宗教的運動としての「<cite>新しき信心</cite>」</a>。</p>
      </footer>

    

      <h4 id="devotion-moderne" class="yellow">新しき信心、普遍的、単純な、純粋な、透明な改心</h4>


          <p>フランドルで、メムリンクの時代では、あるキリスト教信仰修練書は、「<a href="https://ja.wikipedia.org/wiki/キリストに倣いて" title="https://ja.wikipedia.org/wiki/キリストに倣いて" id="imitation-de-jesus-christ" class="yellow"><cite><ruby>キリストに倣いて<rp>（</rp><rt>イミタティオ・クリスティ</rt><rp>）</rp></ruby></cite></a>」、大変なベストセラーであって、「新しき信心」が何であったかを表わすことを我々に今日可能にしてくれています。</p>



          <h5 class="yellow"><cite><ruby>キリストに倣いて<rp>（</rp><rt>イミタティオ・クリスティ</rt><rp>）</rp></ruby></cite>から抜粋された文書</h5>
          <header>
            <p>これはその抜粋文書です <sup id="page-4-fnref1:4"><a href="#page-4-fn:4" class="footnote-ref">ノート３</a></sup>：</p>
          </header>
          
            <ol class="doc">
              <li value="1">人はこの世の事柄から自分を引き上げているのは、<span style="color: #9c6416;">単純さ</span>と<span style="color: #9c6416;">清さ</span>という二つの羽によってです。</li>
              <li>単純さは人の<span style="color: #9c6416;">意図</span>に、<span style="color: #9c6416;">清さ</span>は人に対する情にあるべきです。</li>
              <li>単純さは神を<span style="color: #9c6416;">求め</span>、清さがそれを<span style="color: #9c6416;">見出し</span>て<span style="color: #9c6416;">味わう</span>のです。</li>
              <li>どんな良い行為でもあなたたちには成し難くなりません。内面ではあらゆる乱された感情から自由があったらば、</li>
              <li value="5">あなたたちが神が望むことと、隣人に役立つことのみを求めるなら、あなたたちは<span style="color: #9c6416;">内面の自由</span>を楽しむことでしょう。</li>
              <li>従って、あなたたちの心が正しいのであれば、どんな被造物でもあなたたちにとっての<span style="color: #9c6416;">命の鏡</span>と<span style="color: #9c6416;">聖なる教えの満ちた書物</span>となるでしょう。</li>
              <li>こんなに小さくて、こんなに卑劣な、<span style="color: #9c6416;">神の善良さの現象</span>を少しでも現さないほどの被造物は存在しないからです。</li>
              <li>もしあなたたちが内面に十分な<span style="color: #9c6416;">清純さ</span>と<span style="color: #9c6416;">純粋さ</span>を持っていれば、あなたたちは全てを<span style="color: #9c6416;">さえぎるものなしに</span>見ることが出来るでしょう。</li>
              <li>清い心は天国と地獄にまで入り込む。</li>
              <li value="10">人は外にあるものごとを自分自身の内側での存在において判断するのです。</li>
              <li>もしこの世に喜びが存在するなら、それを持つのは心の清いの持ち主にある。</li>
              <li>従って、どこかに苦悩や苦痛があるのなら、気がとがめるそのことに知られているのです。</li>
              <li value="13">火のなかに投げ込まれた鉄がその錆を失ってとても白く輝くように、こうして 遠慮せず自分を神に捧げる人は、悩ましげをはぎとられ新しい人へと変えられます。</li>
            </ol>
        



          <p>メムリンクが表わして場面では、聖なる会話自体が以上の文書の言葉によると<span style="color: #e6a64d;">単純な、純粋な、建築的装置と調和している<q style="quotes: '「' '」';color: #e6a64d;">聖なる教えの満ちた書物</q></span>として働いている。</p>






    <h3 id="dispositif-architectural" class="yellow">建築的装置</h3>

      <h4 class="yellow">新しき信心、表わされている中心人物と観賞者との関係方法</h4>

        <p>表わされている場所、教会の後陣の配置が三連画の鑑賞者たちに対しても働くことを可能にしてくれています。</p>
        <p>絵画を観賞している私たちも事実上、絵画の空間に含まれていることになっていて、それで、聖なる会話の一部として、表わされている中心人物たちに直面しながら、この単純的な、透明意的な、親校的な他者性な関係で。</p>
        <p>この視点から、メムリンクの作品が<span style="color: #e6a64d;">「命の鏡」</span>として：</p>
        <ul>
          <li>片方では、病人たちが表わされている人物と<span style="color: #e6a64d;">「会話」</span>していて、</li>
          <li>もう一つの方では、<time datetime="1479">１４７９年</time>のブルージュ市民として、あるいは二十一世紀のメムリンク美術館の来館者たちが今ここに<span style="color: #e6a64d;">「現れる」</span>。</li>
        </ul>




      <h4 class="yellow">新しき信心、十五世紀でのブルジュの驚異の水晶化</h4>

        <p>ついに、<span style="color: #e6a64d;">霊的単純さと明白さ</span>が驚異的に絶え間なく<span style="color: #e6a64d;">物質的な精巧さと豪奢さ</span>を<span style="color: #e6a64d;">作り出している</span>。</p>
        <p><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:1#de-vos" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:1#de-vos" id="renvoi-de-vos-2" class="yellow"><ruby lang="ja">ディルク<rp>（</rp><rt lang="nl">Dirk</rt><rp>）</rp>・<rp>（</rp><rt lang="nl">&#160;</rt><rp>）</rp>ド<rp>（</rp><rt lang="nl">DE</rt><rp>）</rp>・<rp>（</rp><rt lang="nl">&#160;</rt><rp>）</rp>ヴォス<rp>（</rp><rt lang="nl">VOS</rt><rp>）</rp></ruby></a>が言及すると：</p>

        <blockquote>
          <span style="color: #e6a64d;">「黄金の<ruby style="color:#e6a64d;">錦<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;">にしき</rt><rp>）</rp></ruby>、絹とアーミンを着ている処女たち、金箔の冠と珍しい宝石各種の世界</span></q>、そこに、<q style="quotes: '「' '」';color: #e6a64d;"><span style="color: #e6a64d;">深い落ち着きの沁みった雰囲気</span></q>で<q style="quotes: '「' '」';color: #e6a64d;"><span style="color: #e6a64d;">幼子イエスが病人たちに合図をする。」</span>
        </blockquote>

        <p>観賞者たちに対して、実際、単純さと明白さが制限を知らないで、神聖性へと導くのです。</p>




      <h4 class="yellow">建築的装置に、ファン・エイクの影響</h4>

        <p>メムリンクが自分を導かさせているのは異論の余地のなく彼が聖ドナティウス大聖堂に行って魅了されたことが知られている、<time datetime="1436">１４３６年</time>に描かれた<a href="https://ja.wikipedia.org/wiki/ヤン・ファン・エイク" title="https://ja.wikipedia.org/wiki/ヤン・ファン・エイク" id="jan-van-eyck" class="yellow">ヤン・ファン・エイク</a>筆の<a href="https://ja.wikipedia.org/wiki/ファン・デル・パーレの聖母子" title="https://ja.wikipedia.org/wiki/ファン・デル・パーレの聖母子" id="van-der-paele" class="yellow">「<ruby lang="ja">ファン・デル・パーレの聖母子<rp>（</rp><rt lang="nl">Madonna&#160;met&#160;kanunnik&#160;Joris&#160;van&#160;der&#160;Paele</rt><rp>）</rp></ruby>」</a>です。</p>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-640.jpg" title="ヤン・ファン・エイク、《ファン・デル・パーレの聖母子》、グルーニング美術館、ブルージュ（ブルッヘ）" alt="ヤン・ファン・エイク、《ファン・デル・パーレの聖母子》、グルーニング美術館、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1920.jpg 1920w"></picture><figcaption>ヤン・ファン・エイク、<ruby lang="ja">ファン・デル・パーレの聖母子<rp>（</rp><rt lang="nl" style="color:#999;font-size: 70%;letter-spacing: 2px;">Madonna met kanunnik Joris van der Paele</rt><rp>）</rp></ruby>、グルーニング美術館、ブルージュ</figcaption>
      </figure>



      <h4 class="yellow">ファン・エイクに比べて建築的装置に対してのメムリンクの革新</h4>

        <p>他の数の多くの作品と同じように、メムリンクが背景から<span style="color: #e6a64d;">壁</span>、<span style="color: #e6a64d;">窓</span>を取り除いて<span style="color: #e6a64d;">外への視覚を連続的に</span>させている。</p>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの全体像、聖母の戴冠式、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの全体像、聖母の戴冠式、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1920.jpg 1920w"></picture><figcaption>三連画の中央パネルの全体像</figcaption>
      </figure>

        <p>赤と茶色を混ぜた六本の円柱がタイル上の半円に配置され、その外側でニつ目の暗いグレー色の付け柱がニ重の半円形に並んでいる。
        その底面が地面に多角形を示す舗装の境界線で結ばれている。</p>
        <p>円柱の間の縦々の隙間は、<span style="color: #e6a64d;">視覚的に連続的な跡蹟と建物のある</span>、無限な、地平線ともなっている遠景に開放である景色と繋がっている。</p>




<!-- Page 5 -->


  <h3 id="organisation-du-recit" class="yellow">語りの仕組み</h3>

    <h4 class="yellow">いくつかの小さな場面</h4>

      <p>語りがいくつかの<span style="color: #e6a64d;">小さな場面</span>を中心に仕組みられている。</p>
      <ul>
        <li><span style="color: #e6a64d;">ニつの伝説</span>：
          <ul>
            <li>洗礼者ヨハネのと</li>
            <li>福音書記者ヨハネの、</li>
          </ul></li>
        <li>聖ヨハネ施療院、いわゆる三連画を依頼する施設に属するブルージュの<span style="color: #e6a64d;">クレーン広場</span>を表している場面のとです。</li>
      </ul>




    <h4 class="yellow">語りは円柱の柱頭から始まる</h4>

      <p>ニつの伝説が空間的に<span style="color: #e6a64d;">円柱の柱頭</span>ぐらいにある各聖人に上に位置づけられている<span style="color: #e6a64d;">いくつかの刻まれた場面</span>で始まる。</p>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《左から右へ、四つの柱頭》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《左から右へ、四つの柱頭》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、左から右へ：四つの柱頭</figcaption>
    </figure>



    <h4 class="yellow">語りはいくつかの小さな場面で遠景へと続く</h4>


      <p>数多くの他のメムリンクの作品に見出されるこの構成の組み方が写本の細密画のレイアウト技術を継承している <sup id="fnref1:6"><a href="#fn:6" class="footnote-ref">ノート１</a></sup> 。いくつかの場面がとても高く位置づけられている地平線まで段状に積み重ねるように配置されている。</p>
      <p>それぞれの<span style="color: #e6a64d;">小さな場面</span>が遠景でそれぞれの円柱によって<span style="color: #e6a64d;">いくつかのフレーミングの枠内に</span>位置付けられている。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《遠景への開口部》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《遠景への開口部》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、遠景への開口部<br>左に、洗礼者ヨハネの、右に、<cite>福音書記者ヨハネの伝説</cite>の諸場面</figcaption>
    </figure>



    <h4 class="yellow">語りが各々のニ枚の翼パネルの内面で締結される</h4>

      <p>ニ伝説の語りがそこから各々のニ枚の翼パネルの内面にと続きます。</p>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、ニ枚の翼パネルの内面の景観、《左に、前景の左にヘロデ王の命令で斬首された洗礼者ヨハネ、右に、パトモス島での福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、ニ枚の翼パネルの内面の景観、《左に、前景の左にヘロデ王の命令で斬首された洗礼者ヨハネ、右に、パトモス島での福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1920.jpg 1920w"></picture><figcaption>ニ枚の翼パネルの内面の景観：左に、前景の左にヘロデ王の命令で斬首された洗礼者ヨハネ、右に、パトモス島での福音書記者ヨハネ</figcaption>
    </figure>

      <p>各の翼パネルに、ある一話しが<span style="color: #e6a64d;">前景に主な場面</span>が語りで遠景にいくつかの<span style="color: #e6a64d;">小さな場面</span>に補われていることで形づくられている。</p>
      <ul>
        <li>左に、<span style="color: #e6a64d;">ヘロデ王</span>の命令で<span style="color: #e6a64d;">洗礼者ヨハネ</span>が斬首される、</li>
        <li>右に、, <span style="color: #e6a64d;">福音書記者ヨハネ</span><span style="color: #e6a64d;">パトモス島</span>で黙示録の文書の「ベールの取り除き」を受けている。</li>
      </ul>




    <h4 class="yellow">クレーン広場は聖ヨハネ施療院を像徴している</h4>

      <p>聖母の後ろの上級繊維の右に後景で、福音書記者ヨハネの後ろでの<ruby lang="ja" style="color:#e6a64d;">クレーン広場<rp>（</rp><rt lang="nl" style="color:#e6a64d;font-size: 70%;letter-spacing: 1px;">Kraanplaats</rt><rp>）</rp></ruby>と<span style="color: #e6a64d;">聖ヨハネ教会</span>の景観は、直接と<span style="color: #e6a64d;">作品を依頼した</span>病院を経営する<span style="color: #e6a64d;">宗教士たち</span>と施設の<span style="color: #e6a64d;">歴史</span>に関係している。</p>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《クレーン広場と聖ヨハネ教会の景観》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《クレーン広場と聖ヨハネ教会の景観》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、クレーン広場と聖ヨハネ教会の景観</figcaption>
    </figure>

      <p><span style="color: #e6a64d;">病院のニ人の兄弟たち</span>がこうしてブルージュに着く諭入された<span style="color: #e6a64d;">ボルドーワインを測定する</span>ことで表わされている。</p>
      <p>私たちに<time datetime="1300">１３００</time>年ごろに病院が市に<span style="color: #e6a64d;">市の特権</span>、自分の収入の源でもあった<span style="color: #e6a64d;">「計量する権」</span>を任せられて来たことを思い出させてくれている。</p>



<!-- Page 6 --><hr>


<h3 id="legendes" class="yellow">洗礼者ヨハネと福音書記者ヨハネの諸伝説</h3>

  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、ニ翼の内面の景観、《左に、前景の左にヘロデ王の命令で斬首された洗礼者ヨハネ、右に、パトモス島での福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、ニ翼の内面の景観、《左に、前景の左にヘロデ王の命令で斬首された洗礼者ヨハネ、右に、パトモス島での福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1920.jpg 1920w"></picture><figcaption>ニ翼の内面の景観：左に、前景の左にヘロデ王の命令で斬首された洗礼者ヨハネ、右に、パトモス島での福音書記者ヨハネ</figcaption>
  </figure>



      <p>私たちはここでメムリンクが迷いなく基づいた<span style="color: #e6a64d;">ニつの語り</span>に従って進んで行きます。それは<a href="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" title="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" id="legende-doree" class="yellow"><cite>黄金伝説</cite></a>で<a href="https://ja.wikipedia.org/wiki/ヤコブス・デ・ウォラギネ" title="https://ja.wikipedia.org/wiki/ヤコブス・デ・ウォラギネ" id="jacques-de-voragine" class="yellow">ヤコブス・デ・ウォラギネ</a>が報じる通りの各々伝説です。</p>



      <p>メムリンクが描いた場面はこれらの文書を正確に表わしているので、より深く各々の文書と三連画の繋がりを実感したい方々に直接文書を読むことをお薦めします：</p>
      <ul>
        <li><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18" title="https://francois-vidit.com/docs/ja/saint-jean/page:18" class="yellow"><cite>黄金伝説</cite>の第９章での福音書記者ヨハネの伝説の文書</a>を読む。</li>
        <li><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:19" title="https://francois-vidit.com/docs/ja/saint-jean/page:19" class="yellow"><cite>黄金伝説</cite>の第６５章での<cite>ラティナ門外の福音書記者ヨハネの伝説</cite>の文書</a>を読む。</li>
      </ul>




    <h4 id="legende-de-jean-le-baptiste" class="yellow"><cite>黄金伝説</cite>において<cite>洗礼者ヨハネの伝説の諸場面</cite></h4>


      <p>私たちは年代順で福音書記者ヨハネより先とされている洗礼者ヨハネから始まっている。</p>
      <p>中央パネルの上部と奥景の左と左翼の内側パネルに<span style="color: #e6a64d;">彼の生拝</span>と<span style="color: #e6a64d;">殉教</span>を表すいくつかの場面が表わされている。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《遠景への開口部、洗礼者ヨハネの伝説の諸場面》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《遠景への開口部、洗礼者ヨハネの伝説の諸場面》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《遠景への開口部、<cite>洗礼者ヨハネの伝説</cite>の諸場面》</figcaption>
    </figure>



      <h5 class="yellow">歴史資料においての洗礼者ヨハネ</h5>
      <p>歴史的な面では、１世紀にユダヤ信仰のローマ史家である<a href="https://ja.wikipedia.org/wiki/フラウィウス・ヨセフス" title="https://ja.wikipedia.org/wiki/フラウィウス・ヨセフス" id="flavius-josephe" class="yellow">フラウィウス・ヨセフス</a>の証言<span style="color: #999;">（<a href="https://ja.wikipedia.org/wiki/ユダヤ古代誌" title="https://ja.wikipedia.org/wiki/ユダヤ古代誌" id="antiquites-judaiques" class="yellow">「<cite>ユダヤ古代誌</cite>」</a>、第１８書、第５章、１１８節）</span>によれば、ヨハネは<a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18" title="https://francois-vidit.com/docs/ja/saint-jean/page:18" id="galilee" class="yellow">ガリラヤ</a>での<a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:19" title="https://francois-vidit.com/docs/ja/saint-jean/page:19" id="jesus-de-nazareth" class="yellow">ナザレのイエス</a>の時代のユダヤ教<span style="color: #e6a64d;">伝道師</span>として表わされている。</p>
      <p>当時のガリラヤは多くの反乱で知られているローマ帝国の属州である。</p>
      <p>その人口が、多数的にユダヤ教であって、とても信心深いです。
      聖書のそれぞれの書物が神のお使いの到来を予告していて、その活動によってユダヤの民が自分の独立、その宗教的組織、特にエルサレムでの<a href="https://ja.wikipedia.org/wiki/ソロモン神殿" title="https://en.wikipedia.org/wiki/Solomon'%27's_Temple" id="temple-de-salomon" class="yellow">ソロモン神殿</a>の再建を可能にすることを回復してくれる。</p>



      <h5 class="yellow">キリスト的信仰の諸文書においての洗礼者ヨハネ</h5>

        <p>キリスト教の教義の面では、 <span style="color: #e6a64d;">ヨハネ</span>は、ルカの福音<span style="color: #999;">（第１章、５～２５節）</span>によると、エルサレムへ行くために偶然選ばれて、神殿で祈りをささげたころ、神自身が<a href="https://ja.wikipedia.org/wiki/ガブリエル" title="https://ja.wikipedia.org/wiki/ガブリエル" id="archange-gabriel" class="yellow">大天使ガブリエル</a>によってヨハネの誕生を告げるガリラヤの田舎のユダヤ教の年とった司祭<a href="https://ja.wikipedia.org/wiki/ザカリア" title="https://ja.wikipedia.org/wiki/ザカリア" id="zaccharie" class="yellow">ザカリア</a><span style="color: #e6a64d;">の息子</span>である。</p>



        <h6 class="yellow">最左の柱頭に大天使ガブリエルがザカリアに顕現される場面</h6>

          <p>その通り、メリングが彼を最左の柱頭に表わしている。</p>

        <figure>
          <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-280.webp 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-380.webp 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-480.webp 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-640.webp 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-840.webp 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1280.webp 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1600.webp 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、最左の柱頭、《ザカリアに顕現される大天使ガブリエル》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、最左の柱頭、《ザカリアに顕現される大天使ガブリエル》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-280.jpg 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-380.jpg 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-480.jpg 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-640.jpg 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-840.jpg 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1280.jpg 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1600.jpg 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、最左の柱頭、《ザカリアに顕現される大天使ガブリエル》、大天使が彼に間もなくの息子の誕生を告げて、それで彼は言葉を失う。</figcaption>
        </figure>

          <p>文書がザカリアがそれで言葉を失うことを示している。</p>




        <h6 class="yellow">最左から二番目の柱頭に洗礼者ヨハネの誕生の場面</h6>
        <p>その誕生がその右に位置付けられている柱頭に表わされている。</p>

        <figure>
          <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-280.webp 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-380.webp 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-480.webp 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-640.webp 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-840.webp 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1280.webp 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1600.webp 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、最左から二番目の柱頭、《洗礼者ヨハネの誕生》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、最左から二番目の柱頭、《洗礼者ヨハネの誕生》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-280.jpg 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-380.jpg 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-480.jpg 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-640.jpg 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-840.jpg 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1280.jpg 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1600.jpg 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、最左から二番目の柱頭、《洗礼者ヨハネの誕生》</figcaption>
        </figure>



        <h6 class="yellow">ザカリアによって「ヨハネ」の名の選択の場面</h6>

          <p>この息子の名前、「ヨハネ」も語り筋の争点の一つとなる <span style="color: #999;">（ルカ第１章、５９～６３節）</span>：</p>

          <blockquote cite="https://www.bible.com/ja/bible/1819/LUK.1.新共同訳">
            <p>「八日目に、その子に割礼を施すために来た人々は、父の名を取ってザカリアと名付けようとした。ところが、母は、</p>
            <p class="coonversation"><span style="color: #e6a64d;">「いいえ、名はヨハネとしなければなりません」</span>と言った。</p>
            <p>しかし人々は、</p>
            <p class="coonversation"><span style="color: #e6a64d;">「あなたの親類には、そういう名の付いた人はだれもいない」</span>と言い、</p>
            <p>父親に、</p>
            <p class="coonversation"><span style="color: #999;">「この子に何と名を付けたいか」</span>と手振りで尋ねた。</p>
            <p>ザカリアは字を書く板を出させて、</p>
            <p class="coonversation"><span style="color: #e6a64d;">「この子の名はヨハネ」</span>と書いた」。</p>
          </blockquote>

          <p>信仰の観点から、<span style="color: #e6a64d;">洗礼者ヨハネ</span>は<span style="color: #e6a64d;">神の意志によって</span>世にゆえにやって来る。</p>



</div>

<!-- Page 7 --><hr>



    <h6 class="yellow">中央パネルの遠景での洗礼者の修徳の場面</h6>


      <p>その後、彼は砂漠で修行者の模範的な生活を送っている<span style="color: #999;">（ルカ第１章、８０節）</span>。</p>
      <p>メムリンクがこの場面を森に移動させている。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《森で祈る洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《森で祈る洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《森で祈る洗礼者ヨハネ》</figcaption>
    </figure>



    <h6 class="yellow">中央パネルの遠景での洗礼者の伝導活躍の場面</h6>


      <p><q cite="https://www.bible.com/ja/bible/1819/LUK.3.新共同訳" style="quotes: '「' '」';">罪の赦しを得させるために悔い改めの洗礼を宣べ伝える</q>ことも見られる<span style="color: #999;">（ルカ第３章、３節）</span>。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《罪の赦しを得させるために悔い改めの洗礼を宣べ伝える洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《罪の赦しを得させるために悔い改めの洗礼を宣べ伝える洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《<q cite="https://www.bible.com/ja/bible/1819/LUK.3.新共同訳" style="quotes: '' '';">罪の赦しを得させるために悔い改めの洗礼を宣べ伝える</q>洗礼者ヨハネ》</figcaption>
    </figure>


      <p>ヨハネは当時のユダヤ教では新風を吹きこんでいる。
      彼は特に火葬によって神殿で動物を犠牲にしてではなく、しかも<span style="color: #e6a64d;">「洗礼」</span>によって、いわゆるこの言葉の語源どおりだと水の中に<span style="color: #e6a64d;">「没入」</span>することで罪の赦しを得ることを勧めるように仕向ける。</p>




    <h6 class="yellow">左翼パネルの遠景でのヨルダン川のほとりでイエスを洗礼する洗礼者ヨハネ</h6>


      <p>聖書のそれぞれの書物に従って、彼は<span style="color: #e6a64d;">神の遣わされたお使いの到来を</span>同時代人の一人である<a href="https://ja.wikipedia.org/wiki/ナザレのイエス" title="https://ja.wikipedia.org/wiki/ナザレのイエス" class="yellow">ナザレのイエス</a>本人に<span style="color: #e6a64d;">預言する</span>。</p>
      <p>彼はその到来を<a href="https://ja.wikipedia.org/wiki/ヨルダン川" title="https://ja.wikipedia.org/wiki/ヨルダン川" id="jourdain" class="yellow">ヨルダン川</a>の水での洗礼で承認する。この場面が左翼パネルの内面の上部に表わされている。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/bapt%C3%A8me-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、左翼パネルの内面の上部の詳細、《ヨルダン川のほとりでイエスを洗礼する洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、左翼パネルの内面の上部の詳細、《ヨルダン川のほとりでイエスを洗礼する洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1920.jpg 1920w"></picture><figcaption>左翼パネルの内面の上部の詳細、《ヨルダン川のほとりでイエスを洗礼する洗礼者ヨハネ》</figcaption>
    </figure>


      <p>向こうの岸に、<span style="color: #e6a64d;">洗礼者ヨハネ</span>が自分の最初の弟子のニ人である<a href="https://ja.wikipedia.org/wiki/アンデレ" title="https://ja.wikipedia.org/wiki/アンデレ" id="andre" class="yellow">アンデレ</a>と<a href="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" title="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" id="jean-l-apotre" class="yellow">使徒ヨハネ</a>も彼に加わるよう、<q cite="https://www.bible.com/ja/bible/1819/JHN.1.新共同訳" style="quotes: '「' '」';color: #e6a64d;"><ruby lang="ja" style="color:#e6a64d;">見よ&#12289;神の小羊だ<rp>（</rp><rt lang="la" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">エッチェ・アニュス・ディ</rt><rp>）</rp></ruby></q>という言葉でイエスに紹介している。彼たちは彼と合流する。</p>




    <h6 class="yellow">中央パネルの遠景での洗礼者ヨハネの逮捕の場面</h6>

      <p>そこから、彼の運命が悲劇的になる。</p>
      <p>ガリラヤとペレアの四分封領主である<a href="https://ja.wikipedia.org/wiki/ヘロデ・アンティパス" title="https://ja.wikipedia.org/wiki/ヘロデ・アンティパス" id="herode-antipas" class="yellow">ヘロデ・アンティパス</a>が<q cite="https://www.bible.com/ja/bible/1819/MRK.6.新共同訳" style="quotes: '「' '」';color: #e6a64d;">自分の兄弟フィリポの妻</q> <sup id="page-7-fnref1:2"><a href="#page-7-fn:2" class="footnote-ref">ノート１</a></sup> （<a href="https://ja.wikipedia.org/wiki/ヘロデヤ" title="https://ja.wikipedia.org/wiki/ヘロディア" id="herodiade">ヘロディア</a>）と結婚する<span style="color: #999;">（マルコ、第６章・１７節）</span>。</p>
      <p>ユダヤ教の信仰はどんな兄の妻との結婚とも<span style="color: #e6a64d;">「汚れ」</span>と見なしていて、ゆえに形式的にそれを<span style="color: #e6a64d;">禁じている</span><span style="color: #999;">（レビ記、第１８章・１６節、第２０章・２１節）</span>から、ヨハネはそれを糾弾する。</p>
      <p><span style="color: #e6a64d;">ヘロデは</span><span style="color: #999;">［ヨハネの］</span><q style="quotes: '「' '」';">説得させる能力が<span style="color: #e6a64d;">反乱</span></q>を誘発することを恐れられていた<span style="color: #999;">（<cite>ユダヤ古代誌</cite>、第１８書、第５章、１１８節）</span> <sup id="page-7-fnref1:1"><a href="#page-7-fn:1" class="footnote-ref">ノート２</a></sup>。</p>
        <p>「群衆はこの人の忠告に完全に従いそうであったから。だからヘロデは、彼のせいで何かトラブルが起こる前に、彼を捕まえる方を後に騒動が起きた場合に悔むより好んだわけだ。ヘロデの嫌疑のせいで、ヨハネはマシャエロに送られ、</p>
        <p>（…）</p>
        <p>そこで殺された。」</p>
      <p>実際、ヨハネの信奉者たちによってトラブルが起こされた場合、ヘロデが自分を取り上げることのできるローマ当局に事情について責任を取らなければならなかったのだった。</p>
      <p>彼は<span style="color: #e6a64d;">「洗礼者ヨハネを逮捕する命令」</span>を出す<span style="color: #999;">（マルコ、第６章・１７節）</span>。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《ヘロデ・アンティパスの命令による洗礼者ヨハネの逮捕》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《ヘロデ・アンティパスの命令による洗礼者ヨハネの逮捕》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《ヘロデ・アンティパスの命令による洗礼者ヨハネの逮捕》</figcaption>
    </figure>

      <p>中央パネルでは、メムリンクがこの場面を白羊の上に、<span style="color: #e6a64d;">ヨハネ</span>が強制的に古代ギリシャの語源は「剣」という意味と、現代のヨルダン国に位置付けられているの現代<ruby lang="ja" style="color:#e6a64d;">マシェロント<rp>（</rp><rt lang="grc" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">μάχαιρα</rt><rp>）</rp></ruby> <sup id="page-7-fnref1:3"><a href="#page-7-fn:3" class="footnote-ref">ノート３</a></sup> の牢へ向かって左の翼パネルへ<span style="color: #e6a64d;">連れて行かれている</span>。</p>



<!-- Page 8 --><hr>



    <h6 class="yellow">左翼パネル内面全景</h6>


      <p>左翼パネル内面に語りが続く。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、《左翼パネル内面》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、《左翼パネル内面》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1920.jpg 1920w"></picture><figcaption>左翼パネル内面全景</figcaption>
    </figure>



    <h6 class="yellow">ヘロデの宮殿で表わされているサロメの踊りの場面、左翼パネル内面</h6>
    

      <p>ヨハネを、信奉者たちのトラブルの騒ぎを起こさずに死なせるのを成功させるために、<span style="color: #e6a64d;">ヘロデ</span>が彼らを欺くよう、ごまかしを考える<span style="color: #999;">（マルコ、第６章・２１～２２節）</span>。</p>
      <p>「自分の誕生日の祝いに」ガリラヤの「高官や将校、ガリラヤの有力者などを招いて宴会」を催す。</p>
      <p>「ヘロディアの娘<a href="https://ja.wikipedia.org/wiki/サロメ_(ヘロディアの娘))" title="https://ja.wikipedia.org/wiki/サロメ_(ヘロディアの娘)" id="salome" class="yellow">サロメ</a>」が姿を現して踊る。</p>
      <p><span style="color: #e6a64d;">《サロメの踊り》</span>は左翼パネルの左上部にある宮殿の塔で行われている。メムリンクが塔の壁をこの場面を鑑賞者たちに見せるように省いた。</p>
      <p>その上、<ruby>壁<rp>（</rp><rt>へき</rt><rp>）</rp>龕<rp>（</rp><rt>がん</rt><rp>）</rp></ruby>での像が、ヘロデの不倫行為をおのめかすいくつかの不信心な人物、裸の女性のニ人の間の一人裸の男性が表わされている。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、左翼パネル内面の詳細、《サロメの踊り》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、左翼パネル内面の詳細、《サロメの踊り》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1920.jpg 1920w"></picture><figcaption>左翼パネル内面の詳細、《サロメの踊り》</figcaption>
    </figure>


      <p>ヘロデがその踊りを気に入ったことを見せかけて、<span style="color: #e6a64d;">ヨハネの死の責任を免除するには</span>言う<span style="color: #999;">（マルコ、第６章・２２～２５節）</span>：</p>
      <blockquote cite="https://www.bible.com/ja/bible/1819/MRK.6.新共同訳">
        <ol class="doc">
          <li value="22">
            <p class="conversation">
              <span style="color: #e6a64d;">「欲しいものがあれば何でも言いなさい」</span>、
            </p>
          </li>
          <li value="23">
            <p>更に、</p>
            <p class="conversation">「お前が願うなら、この国の半分でもやろう"と固く誓ったのである。」 </p>
          </li>
          <li value="24">
            <p>サロメが座を外して、母親に、</p>
            <p class="conversation">
              <span style="color: #e6a64d;">「何を願いましょうか」</span>と言うと、
            </p>
            <p>ヘロディアは、</p>
            <p class="conversation"><span style="color: #e6a64d;">「洗礼者ヨハネの首を」</span>と言った。</p>
          </li>
          <li value="25">
            <p>早速、少女は大急ぎで王のところに行き、</p>
            <p class="conversation">
              <span style="color: #e6a64d;">「今すぐに洗礼者ヨハネの首を盆に載せて、いただきとうございます」</span>と願う。
            </p>
          </li>
        </ol>
      </blockquote>

      <p>こうしてヘロデは，自分の意思に反するヨハネを死なせるように見える。</p>
      <p>この語り筋のすべてが本当にヨハネを、信奉者たちのトラブルの騒ぎを起こさずに死なせるためのごまかしである証拠が、ヤコブス・デ・ウォラギネが説明している通り、もしサロメがヘロデに<span style="color: #e6a64d;">「自分の父のフィリポか自分の母の<a href="https://ja.wikipedia.org/wiki/ヘロデヤ" title="https://ja.wikipedia.org/wiki/ヘロディア" id="herodiade-2" class="yellow">ヘロディア</a>」</span>を頼んだなら、ヘロデがそれに同意出来ません<span style="color: #999;">（<cite>黄金伝説</cite>１２１章、第１段 <sup id="page-8-fnref1:1"><a href="#page-8-fn:1" class="footnote-ref">ノート１</a></sup> ）</span>。</p>
      <p>このごまかしの唯一の目的は、ヨハネ殺害の責任をヘロデに負わせることを避けるためであって、ヘロデが自分の意思に反して要求に無理に応じたと歴史の視点におおいて偽って見せることです。</p>




    <h6 class="yellow">ヘロデ宮での洗礼者ヨハネの斬首の場面、左翼パネル内面</h6>
      
      <p>だから、歴史は悲劇的にも自ら成し遂げて行くのです。</p>
      <p>ある衛兵は出て行き、<q cite="https://www.bible.com/ja/bible/1819/MRK.6.新共同訳" style="quotes: '「' '」';">牢の中でヨハネの首をはね</q>に行く<span style="color: #999;">（マルコ、第６章・２８節）</span>。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、左翼パネル内面の詳細、《洗礼者ヨハネの斬首》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、左翼パネル内面の詳細、《洗礼者ヨハネの斬首》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1920.jpg 1920w"></picture><figcaption>左翼パネル内面の詳細、《洗礼者ヨハネの<ruby>斬<rp>（</rp><rt>ざん</rt><rp>）</rp>首<rp>（</rp><rt>しゅ</rt><rp>）</rp></ruby>》</figcaption>
    </figure>


<!-- Page 9 --><hr>

    <h6 class="yellow">ヘロデ宮洗礼者ヨハネの斬首の詳細、左翼パネル内面</h6>

    <p>メムリンクは、左のシャッターの手前のシーンを拡大して、ヘロデの宮殿の中庭にいることを示しています</p>。
      <p>メムリンクは左翼パネルの前景に《洗礼者ヨハネの斬首》の場面を位置づけて拡大することを選んだ。</p>
      <p>私たちはヘロデの宮殿の中庭にいます。</p>
      <p>砦の執行所が後方にある<span style="color: #e6a64d;">階段</span>によって宮殿に繋がっている。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、左翼パネル内面の詳細、《洗礼者ヨハネの頭》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、《左翼パネル内面》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1920.jpg 1920w"></picture><figcaption>左翼パネル内面の詳細、《洗礼者ヨハネの頭》</figcaption>
    </figure>

      <p>右には、最初の弟子のニ人である<a href="https://ja.wikipedia.org/wiki/アンデレ" title="https://ja.wikipedia.org/wiki/アンデレ" id="andre-2" class="yellow">アンデレ</a>と<a href="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" title="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" id="jean-l-apotre-2" class="yellow">使徒ヨハネ</a>をも位置づけてやった。</p>



    <h6 class="yellow">洗礼者ヨハネの斬首の場面で、ファン・デル・ウェイデンからのメムリンクの影響、左翼パネル内面</h6>


      <p><span style="color: #e6a64d;">死刑執行人</span>は、ほとんど感動していない<a href="https://ja.wikipedia.org/wiki/サロメ_(ヘロディアの娘))" title="https://ja.wikipedia.org/wiki/サロメ_(ヘロディアの娘)" id="salome-3" class="yellow">サロメ</a>が彼に差し出す<span style="color: #e6a64d;">大皿に頭を</span>もたせかけながら、背後から描かれている。</p>
      <p>美術史家たちは、死刑執行者とサロメの姿勢において、彼がブリュッセルで<a href="https://ja.wikipedia.org/wiki/ロヒール・ファン・デル・ウェイデン" title="https://ja.wikipedia.org/wiki/ロヒール・ファン・デル・ウェイデン" id="rogier-van-der-weyden" class="yellow">ロヒール・ファン・デル・ウェイデン</a>という画家のアシスタントだったころの先生の作品で見当たる<span style="color: #e6a64d;">似たような場面をメムリンクによるの再利用</span>だと見っ分けている。</p>
      <p>これは<a href="https://ja.wikipedia.org/wiki/絵画館_(ベルリン)" title="https://ja.wikipedia.org/wiki/絵画館_(ベルリン)" id="gemaldegalerie" class="yellow"><ruby lang="ja">ベルリン国立美術館<rp>（</rp><rt lang="de">Staatliche&#160;Museen&#160;zu&#160;Berlin</rt><rp>）</rp></ruby></a>の<a href="https://ja.wikipedia.org/wiki/ベルリン美術館" title="https://ja.wikipedia.org/wiki/Musées_d'État_de_Berlin" id="musees-d-etat-de-berlin" class="yellow"><ruby lang="ja">絵画館<rp>（</rp><rt lang="de">Gemäldegalerie</rt><rp>）</rp></ruby></a>にある<time datetime="1450">１４５０</time>〜<time datetime="1455">５５年頃</time>に描かれた<span style="color: #e6a64d;">《聖ヨハネの三連画》</span>の左翼パネル内面にある<span style="color: #999;">（目録番号５３４B）</span>。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.jpg" title="ロヒール・ファン・デル・ウェイデン、左翼パネル内面の詳細、《聖ヨハネの三連画》、ベルリン国立美術館、絵画館、ベルリン" alt="ロヒール・ファン・デル・ウェイデン、左翼パネル内面の詳細、《聖ヨハネの三連画》、ベルリン国立美術館、絵画館、ベルリン" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1920.jpg 1920w"></picture><figcaption>左翼パネル内面の詳細、ロヒール・ファン・デル・ウェイデン筆《聖ヨハネの三連画》、<ruby lang="ja">ベルリン国立美術館<rp>（</rp><rt lang="de">Staatliche&#160;Museen&#160;zu&#160;Berlin</rt><rp>）</rp></ruby></a>の<ruby lang="ja">絵画館<rp>（</rp><rt lang="de">Gemäldegalerie</rt><rp>）</rp></ruby></figcaption>
    </figure>



    <h6 class="yellow">中央パネルの詳細、洗礼者ヨハネの遺体の発掘と焼却の場面</h6>

      <p>マルコの語りは続く<span style="color: #999;">（マルコ、第６章・２９節）</span>：<span style="color: #e6a64d;">「ヨハネの弟子たちはこのことを聞き、やって来て、遺体を引き取り、墓に納めた」</span>。
      後者はヘロデ・アンティパスに支配されている領地から遠くある、ヨルダン川西岸地区での<ruby lang="ja" style="color:#e6a64d;">セバステ<rp>（</rp><rt lang="grc" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">Σεβαστή</rt><rp>）</rp></ruby>、現代の<a href="https://ja.wikipedia.org/wiki/サバスティーヤ" title="https://ja.wikipedia.org/wiki/サバスティーヤ" id="sebastia" class="yellow"><ruby lang="ja">セバスティア<rp>（</rp><rt lang="ar">سبسطية</rt><rp>）</rp></ruby></a>という<a href="https://ja.wikipedia.org/wiki/エリシャ" title="https://ja.wikipedia.org/wiki/エリシャ" id="elisee" class="yellow">エリシャ</a>と<a href="https://ja.wikipedia.org/wiki/オバデヤ" title="https://ja.wikipedia.org/wiki/オバデヤ" id="abdias" class="yellow">オバデヤ</a>預言者たちのお墓の近くに持って行かれた。</p>
      <p>中央パネルの左側では、右に、洗礼者ヨハネの後ろに、メムリンクが彼の伝説の最後の場面を表した。それは、キリスト教の信仰と戦ってヨハネが葬られたところに行われた奇跡を止めさせるために、<a href="https://ja.wikipedia.org/wiki/フラウィウス・クラウディウス・ユリアヌス" title=" https://ja.wikipedia.org/wiki/フラウィウス・クラウディウス・ユリアヌス" id="julien-l-apostat" class="yellow">背教者ユリアヌス</a>が遺体を掘り起こし、焼いて、畑を散々に散らすよう命じたということだ。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《背教者ユリアヌス大帝の命令により掘り起こされて焼け焦されげた洗礼者ヨハネの遺体》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《背教者ユリアヌス大帝の命令により掘り起こされて焼け焦されげた洗礼者ヨハネの遺体》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《背教者ユリアヌス大帝の命令により掘り起こされて焼け焦されげた洗礼者ヨハネの遺体》</figcaption>
    </figure>

  

    <h6 class="yellow">壁の開口部の中の洗礼者ヨハネの頭、中央パネル</h6>

      <p>彼の頭は、伝説によると、現代のシリアでの<ruby lang="ja">ホムス<rp>（</rp><rt lang="ar">حمص</rt><rp>）</rp></ruby>、当時エメサ市の陶工屋によって別に葬られたのであろうから、それは、遠ざけた石の後ろにある<span style="color: #e6a64d;">壁の開口部</span>の中に。</p>

      <p>しかし、思い通りになりませんでした。</p>
      <p>伝説によると、頭が別にシリアにある現代の<a href="https://ja.wikipedia.org/wiki/ホムス" title="https://ja.wikipedia.org/wiki/ホムス" id="homs" class="yellow"><ruby lang="ja">ホムス<rp>（</rp><rt lang="ar">حمص</rt><rp>）</rp></ruby></a>のエメサ市のある製陶屋さんに埋められたのであろう。その後、星に追いかけながら発見した聖マルケッルス <sup id="page-9-fnref1:1"><a href="#page-9-fn:1" class="footnote-ref">ノート１</a></sup> に顕現されたであろう<span style="color: #999;">（黄金伝説、第１２１章、第３段）</span>。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《壁の開口部の中の洗礼者ヨハネの頭》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《壁の開口部の中の洗礼者ヨハネの頭》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《壁の開口部の中の洗礼者ヨハネの頭》、</figcaption>
    </figure>


      <p>これで<cite>黄金伝説</cite>においての洗礼者ヨハネの伝説の語りが終ります。</p>



<!-- Page 10 --><hr>


  <h4 id="legende-de-jean-l-evangeliste" class="yellow"><cite>黄金伝説</cite>と<cite>黙示録</cite>においての福音書記者ヨハネの伝説の諸場面</h4>

    <h5 class="yellow"><cite>黄金伝説</cite>と<cite>黙示録</cite>においての福音書記者ヨハネについての注意すべき事項</h5>

        <p>中央パネルの後景の上と右に福音書記者ヨハネの伝説の諸場面が表わされている。</p>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《右半分の遠景への開き》：福音書記者ヨハネの伝説の諸場面、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《》：福音書記者ヨハネの伝説の諸場面、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《右半分の遠景への開き》：<cite>福音書記者ヨハネの伝説</cite>の諸場面</figcaption>
      </figure>

      <h5 class="yellow"><cite>福音書記者ヨハネの伝説</cite>と<cite>黙示録</cite>においての詳細</h5>

        <p>洗礼者ヨハネと違って、歴史的視点から、キリスト教的信仰から生じたの他、<span style="color: #e6a64d;">なんの歴史的資料も存在しません</span>。</p>
        <p>それらのキリスト教からの資料と現代の専門家たちに寄りますと、<span style="color: #e6a64d;">福音書記者ヨハネが以下の人物を指しえます</span>：</p>
        <ol>
          <li><a href="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" title="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" class="yellow">「使徒」ヨハネ</a>。マルコ、ルカ、マタイの諸福音書と使徒言行録に登場する人物、</li>
          <li><a href="https://ja.wikipedia.org/wiki/イエスの愛しておられた弟子" title="https://ja.wikipedia.org/wiki/イエスの愛しておられた弟子" id="disciple-que-jesus-aimait" class="yellow">イエスの愛しておられた弟子</a>「ヨハネの」だと言われている福音の書記者、</li>
          <li><a href="https://fr.wikipedia.org/wiki/Jean_de_Patmos" title="https://fr.wikipedia.org/wiki/Jean_de_Patmos" id="jean-de-patmos" class="yellow">「パトモス島の」ヨハネ</a>。黙示録の書記者。</li>
        </ol>

      <h5 class="yellow">「使徒」ヨハネ</h5>

        <ul>
          <li>
            <a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" id="jean-l-apotre-3" class="yellow">「使徒」ヨハネ</a>は<span style="color: #e6a64d;">「<a href="https://ja.wikipedia.org/wiki/ゼベダイの子" title="https://ja.wikipedia.org/wiki/ゼベダイの子" id="zebedee" class="yellow">ゼベダイ</a>のニ人の子の内の一人」</span><span style="color: #999;">（マルコ、第３章・１６～１９節、マタイ、第１０章・２～５節とルカ、第６章・１３～１６節）</span>。
            彼の兄弟は<a href="https://ja.wikipedia.org/wiki/ヤコブ_(ゼベダイの子)" title="https://ja.wikipedia.org/wiki/https://fr.wikipedia.org/wiki/ヤコブ_(ゼベダイの子)" id="jacques-le-majeur" class="yellow">「大」というヤコブ</a>です。
          </li>
          <li>
            イエスが彼たちを<span style="color: #e6a64d;">「雷の子ら」</span>と呼んでいる<span style="color: #999;">（マルコ、第３章・１７節）</span>。
          </li>
          <li>
            兄弟と他の弟子のニ人だった<a href="https://ja.wikipedia.org/wiki/ペトロ" title="https://ja.wikipedia.org/wiki/ペトロ" id="simon-pierre" class="yellow">シモン・ペトロ</a>と<a href="https://ja.wikipedia.org/wiki/アンデレ" title="https://ja.wikipedia.org/wiki/アンデレ" class="yellow">アンデレ</a>と同様に、彼はイエスに従うために自分の網を捨てる<a href="https://ja.wikipedia.org/wiki/ガリラヤ湖" title="https://ja.wikipedia.org/wiki/ガリラヤ湖" id="tiberiade" class="yellow">ティベリアス湖</a><span style="color: #e6a64d;">の漁師の一人</span>です。
          </li>
          <li>そこから、
            <ul>
              <li><a href="https://ja.wikipedia.org/wiki/主イエスの変容" title="https://ja.wikipedia.org/wiki/主イエスの変容" id="transfiguration" class="yellow">イエスの変容</a><span style="color: #999;">（マルコ、第９章・２節、マタイ、第１７章・１節とルカ、第９章・２８節）</span>、</li>
              <li><a href="https://fr.wikipedia.org/wiki/Guérison_de_la_belle-mère_de_Pierre" title="https://fr.wikipedia.org/wiki/Guérison_de_la_belle-mère_de_Pierre" id="guerison-de-la-belle-mere-de-pierre" class="yellow">シモン・ペトロの<ruby>姑<rp>（</rp><rt>しゅうとめ</rt><rp>）</rp></ruby>の癒し</a> <span style="color: #999;">（マルコ、第１章・２９節）</span>、</li>
              <li>シナゴーグの頭だった<a href="https://ja.wikipedia.org/wiki/Fille_de_Jaïre" title="https://ja.wikipedia.org/wiki/Fille_de_Jaïre" id="fille-de-jaire" class="yellow">ヤイロの娘の癒し</a><span style="color: #999;">（マルコ、第５章・３７節とルカ、第８章・５１節）</span>を証し、兄弟と一緒にイエスが<a href="https://ja.wikipedia.org/wiki/ゲツセマネの祈り" title="https://ja.wikipedia.org/wiki/ゲツセマネの祈り" id="agonie-dans-le-jardin-des-oliviers" class="yellow">ゲッセマネの園</a>であきらめることに誘惑される時に<span style="color: #999;">（マルコ、第１３章・３節）</span>いますが、彼は睡眠に落ちいる<span style="color: #999;">（マルコ、第１４章・３３節）</span>。</li>
            </ul>
          </li>
        </ul>


      <h5 id="disciple-que-jesus-aimait-2" class="yellow">イエスの愛しておられた弟子</h5>


        <ul>
          <li>
            <p><a href="https://ja.wikipedia.org/wiki/イエスの愛しておられた弟子" title="https://ja.wikipedia.org/wiki/イエスの愛しておられた弟子" id="disciple-que-jesus-aimait-3" class="yellow">イエスの愛しておられた弟子</a> が「ヨハネの」という福音の終わりに見えて来る<span style="color: #999;">（ヨハネ、第２１章・２０と２４～２５節）</span>:</p>

          <blockquote cite="https://www.bible.com/ja/bible/1819/JHN.21.新共同訳">
            <p><q style="quotes: '「' '」';">ペトロが振り向くと、<span style="color: #e6a64d;">イエスの愛しておられた弟子</span>がついて来るのが見えた。
          </blockquote>

          <span style="color: #999;">（…）</span>

          <blockquote cite="https://www.bible.com/ja/bible/1819/JHN.21.新共同訳">
            これらのことについて<span style="color: #e6a64d;">証しをし、それを書いたのは、この弟子</span>である。
          </blockquote>

          <p>「ヨハネ」と呼称する文書での要素は一つもありませんので、 「ヨハネの福音」 との呼称が正しくなりえそうもありません。<q style="quotes: '「' '」';">イエスの愛しておられた弟子</q>の福音であるはずです。</p>
          <p>とても異常な人物です。どんな読者でもが自分と同一視できる他のイエスの弟子の内の一人であって、イエス自信から愛されて、従って他の誰よりも彼に親しくなっています。</p>
          <p>彼は、以上の抜粋文書のすぐ後に、意見を述べることも迷いません<span style="color: #999;">（ヨハネ、第２１章・２５節）</span>：</p>

            <blockquote cite="https://www.bible.com/ja/bible/1819/JHN.21.新共同訳">
              <p>「イエスのなさったことは、このほかにも、まだたくさんある。<span style="color: #e6a64d;"><span style="text-decoration: underline;">わたしは</span>思う。</span>その一つ一つを書くならば、世界もその書かれた書物を収めきれないであろう。」</p>
            </blockquote>

          </li>
          <li>
            <p>イエス自身が、ペトロからの質問をきっかけに、最後の晩餐中にヨハネの運命について望みがある<span style="color: #999;">（ヨハネ、第２１章・２１～２３節）</span>：</p>
            <blockquote>
              <p>「ペトロは彼を見て、</p>

              <p class="conversation">「主よ、この人はどうなるのでしょうか」と言った。</p>
              <p>イエスは言われた。</p>
              <p class="conversation">「<span style="color: #e6a64d;">わたしの来るときまで彼が生きていることを、わたしが望んだ</span>としても、あなたに何の関係があるか。」</p>
            </blockquote>
          </li>
          <li>
            <p><q cite="https://www.bible.com/ja/bible/1819/JHN.13.新共同訳" style="quotes: '「' '」';">イエスの胸もとに寄りかかったまま</q>のも彼であって、また彼を誰が裏切って行くかを聞くともなっています<span style="color: #999;">（ヨハネ、第１３章・２５節）</span>。</p>
          </li>
          <li>
            <p>磔刑の時、イエスが自分のお母さまに彼に任せて、言われた<span style="color: #999;">（ヨハネ、第１９章・２６～２７節）</span>：</p>
            <blockquote cite="https://www.bible.com/ja/bible/1819/JHN.19.新共同">
              <p class="conversation">「婦人よ、御覧なさい。あなたの子です」、</p>
              <p>それから彼に：</p>
              <p class="conversation">「見なさい。あなたの母です。」</p>
            </blockquote>
          </li>
          <li>
            <p>マグダラのマリアが空いているお墓を見て、<q cite="https://www.bible.com/ja/bible/1819/JHN.20.新共同" style="quotes: '「' '」';">愛しておられた弟子</q>とペトロに言いに走る。彼がお墓に一速く着く<span style="color: #999;">（ヨハネ、第２０章・２～８節）</span>。</p>
          </li>
          <li>
            <p>復活後にティベリアス湖でのイエスをいち早く認めるのもまた彼です。<span style="color: #999;">（ヨハネ、第２１章・７節）</span>。</p>
          </li>
        </ul>




      <h5 id="jean-de-patmos-2" class="yellow">「パトモス島の」ヨハネ</h5>


        <ul>
          <li>
            <p><a href="https://fr.wikipedia.org/wiki/Jean_de_Patmos" title="https://fr.wikipedia.org/wiki/Jean_de_Patmos" id="jean-de-patmos-3" class="yellow">「パトモス島の」ヨハネ</a>が黙示録の文書の始まる所に見えて来る<span style="color: #999;">（黙、第１章・１～９節）</span>。</p>
            <blockquote>
              <p>その文書では彼は神が<q style="color: #e6a64d;quotes: '「' '」'" cite="https://www.bible.com/ja/bible/1819/REV.1.新共同">すぐにも起こるはずのことを</q><span style="color: #999;">（…）</span><q style="color: #e6a64d;quotes: '「' '」'" cite="https://www.bible.com/ja/bible/1819/REV.1.新共同">アジア州にある七つの教会</q>に<span style="color: #999;">（…）</span>ご自分の<q style="color: #e6a64d;quotes: '「' '」'" cite="https://www.bible.com/ja/bible/1819/REV.1.新共同">天使を送って</q>知らせた<span style="color: #999;">（…）</span><span style="color: #e6a64d;"><q style="color: #e6a64d;quotes: '「' '」'" cite="https://www.bible.com/ja/bible/1819/REV.1.新共同"><ruby>僕<rp>（</rp><rt>しもべ</rt><rp>）</rp></ruby></q></span>として紹介されている。</p>
            </blockquote>
          </li>
        </ul>




      <h5 class="yellow"><cite>黄金伝説</cite>においての福音書記者ヨハネ</h5>
      

        <p>福音書記者ヨハネの表しが</cite>黄金伝説</cite>の<span style="color: #e6a64d;">第９章</span>と<span style="color: #e6a64d;">第６５章</span>でのヤコブス・ダ・ヴォラギネに編纂された語り筋を全体として守っています。
        <ul>
          <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#jean-selon-legende" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#jean-selon-legende" class="yellow"><cite>黄金伝説</cite>の第９章での福音書記者ヨハネの伝説の文書</a>を読む。</li>
          <li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:19#jean-selon-legende-2" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:19#jean-selon-legende-2" class="yellow"><cite>黄金伝説</cite>の第６５章でのラティナ門外の福音書記者ヨハネの伝説の文書</a>を読む。</li>
        </ul>




      <h5 id="jean-a-la-porte-latine" class="yellow">ローマにあるラティナ門前にドミティアヌス大帝の命令によって熱湯に浸せられる福音書記者ヨハネ</h5>


        <p>語りが中央パネルから始まります<span style="color: #999;">（第６５章）</span> <sup id="page-10-fnref1:1"><a href="#page-10-fn:1" class="footnote-ref">ノート１</a></sup> ：</p>
        <ol class="doc">
          <li>「<span style="color: #e6a64d;">ヨハネ</span>は、<a href="https://ja.wikipedia.org/wiki/エフェソス" title="https://ja.wikipedia.org/wiki/エフェソス" class="yellow">エフェソス</a>で伝道活動に従事していたとき、同地の総督に捕えられ、いつわりの神々に供物をささげようと命じられた。</li>
          <li>が、命令にしたがおうとしなかったので、獄に投じられた。総督は、皇帝ドミティアヌスに報告書を送り、そのなかで、ヨハネのことを神殿の冒漬者神々の侮蔑者、十字架にかけられた男に仕えるやからのひとりであると決めつけた。</li>
          <li><span style="color: #e6a64d;">ドミティアヌス</span>は、ヨハネをローマにつれてくるようにと命じた。さて、ヨハネがローマに到着すると、笑いものにするために頭を丸坊主に剃りあげたうえ、<span style="color: #e6a64d;">ラティナ門</span>とよばれる市門の外に引きだし、油がいっぱい煮えたぎっている釜に入れ、さらに下から火をどんどん焚きつけた。。</li>
        </ol>


      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島への流しへの出発》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島への流しへの出発》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島への流しへの出発》</figcaption>
      </figure>



          <ol class="doc">
            <li>
              <p>「ところが、ヨハネは、文字どおり平気の平左で、火傷ひとつしないで釜から出てきた。</p>
              <p>ドミティアヌスはこれを見て、恐縮して、彼を死なせるのを恐れた。</p>
              <p>キリスト教徒たちは、その後この場所に教会を建て、この日をヨハネの殉教記念日のように祝うのである」。</p>
            </li>
          </ol>



          <p>メムリンクの表しが左での地平線にこの<span style="color: #e6a64d;">教会</span>と右では、<span style="color: #e6a64d;">ローマのコロッセオ</span>と<span style="color: #e6a64d;">ラティナ門</span>を見せてくれている<span style="color: #999;">（第９章）</span>。</p>

        

          <ol class="doc">
            <li>「ドミティアヌス大帝は、こんな拷問ぐらいでキリストの福音を宣べることをやめるような男ではないと見てとり、聖ヨハネを<span style="color: #e6a64d;">パトモス島</span>へ流刑に処した」<span style="color: #999;">(パトモス島への出発が真ん中に表わされていて、いくつかの人物がある船に乗ろうとしているところに）</span>。「彼は、その島にまったくひとりで住み、ここで<span style="color: #e6a64d;">『ヨハネの黙示録』</span>を書いた。」</li>
          </ol>





      <h5 id="description-right-shutter" class="yellow">右翼パネル全景：パトモス島でヨハネは<cite>黙示録</cite>において証言する</h5>


        <p>右翼パネルが完全にヨハネがパトモス島で啓示された<ruby>幻<rp>（</rp><rt>げん</rt><rp>）</rp>影<rp>（</rp><rt>えい</rt><rp>）</rp></ruby>に捧げられている <sup id="page-10-fnref1:2"><a href="#page-10-fn:2" class="footnote-ref">ノート２</a></sup> 。</p>
        <p>メムリンクの表わしは特に注目に価するものです。<cite>黙示録</cite>の表しとして、数多くの絵画は絵画の連続として存在するならば、逆に表示の空間の統一を挑戦するのが稀にしか存在しません。</p>
        <p>当然なことに：パトモスのヨハネの語りは注目に値する複合さを提示しているからです。</p>
        <p>それでも、メムリンクは表示の空間を語りより信ずるに足る、超越的な複合さにさせる離れ<ruby>業<rp>（</rp><rt>わざ</rt><rp>）</rp></ruby>を成功します。</p>


      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-640.jpg" id="image-right-shutter" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《パトモス島での福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《パトモス島での福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《パトモス島での福音書記者ヨハネ》<br><q cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse" style="quotes:'「' '';">わたしは、たちまち“霊”に満たされた。すると、見よ、天に玉座が設けられていて</q>（…）玉座の前は、水晶に似たガラスの海のようであった。」、<cite>黙示録</cite>、第４章から第１２章までの抜粋文書</figcaption>
      </figure>


        <p>メムリンクが使徒を、円形の岩、エーゲ海の真ん中にあるパトモス島に座している姿で表している。</p>
        <p>彼は手に羽根ペンと小型ナイフを掴んでいて、彼の膝に帳面が見られる。</p>
        <p>ヨハネがまだ何もまだ書いていないで、<span style="color: #e6a64d;">生き生き</span>している古代ギリシャ語で<span style="color: #e6a64d;">「ベールを取る」</span>を意味する<span style="color: #e6a64d;">「黙示」</span>を捕らえられているままに表わされている。これらの幻影がかれの上、空で、水ととても近くにある陸の上、またそれ以外、翼パネルのすべてで表されている。</p>

        <p>私たちはヨハネご自身がベールはずしを語る文書での翼パネルの左上に始まる順に従うのを選択しています。</p>
          <p>そうすると、メムリンクが作り出す表しが文書と直接対象される。</p>

        <p class="puce"><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse">右翼パネル内面のパトモス島でのヨハネの表わしに関連した<cite>黙示録</cite>から抜粋した文書</a>を読む.</p>


      <h5 class="yellow">神の王座、天と子羊の宮廷の幻影　＝　<cite>黙示録</cite>、第４章２節～第６章１節</h5>

          <header>
            <ol class="doc">
              <li>第４章</li>
            </ol>
          </header>

          <blockquote id="renvoi-apocalypse-4-2" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-4-2">
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
          </blockquote>



      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-640.jpg" id="image-apocalypse-4-2" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《神の王座、天と子羊の宮廷の幻影》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《神の王座、天と子羊の宮廷の幻影》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、
        《神の王座、天と子羊の宮廷の幻影》。<br>
        <q cite="#renvoi-apocalypse-4-2" style="quotes:'「' '';">玉座の周りにはエメラルドのような虹が輝いていた</q>
        <span style="color: #999;">（…）</span>
        <q cite="#renvoi-apocalypse-4-7" style="quotes:'' '';">四つの生き物</q><span style="color: #999;">（…）</span>
        <q cite="#renvoi-apocalypse-5-1" style="quotes:'' '';">表にも裏にも字が書いてあり、七つの封印で封じられていた</q>巻物
        <span style="color: #999;">（…）</span>
        <q cite="#renvoi-apocalypse-5-6" style="quotes:'' '」';">長老たち</q>、
        <br><cite>黙示録</cite>、第４章２～８節、第５章１節、６～７節</figcaption>
      </figure>

      <blockquote id="renvoi-apocalypse-4-7" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-4-7">
        <ol class="doc">
          <li value="07">第一の生き物は<span style="color: #e6a64d;">獅子</span>のようであり、第二の生き物は<span style="color: #e6a64d;">若い雄牛</span>のようで、第三の生き物は<span style="color: #e6a64d;">人間のような顔</span>を持ち、第四の生き物は空を飛ぶ<span style="color: #e6a64d;">鷲</span>のようであった。</li>
          <li value="08">
            <p>この四つの生き物には、それぞれ<span style="color: #e6a64d;">六つの翼</span>があり、その周りにも内側にも、一面に目があった。
          彼らは、昼も夜も絶え間なく言い続けた。</p>
            <p class="conversation">「聖なるかな、聖なるかな、聖なるかな、全能者である神、主、かつておられ、今おられ、やがて来られる方。」</p>
          </li>
        </ol>
      <footer>
        <ol class="doc">
          <li><span style="color: #999;">（…）</span></li>
        </ol>
      </footer>
      </blockquote>

      <blockquote id="renvoi-apocalypse-5-1" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-5-1">
        <ol class="doc">
          <li>第５章</li>
          <li value="01">「またわたしは、玉座に座っておられる方の右の手に<span style="color: #e6a64d;">巻物</span>があるのを見た。表にも裏にも字が書いてあり、<span style="color: #e6a64d;">七つの封印</span>で封じられていた。」</li>
        </ol>
      <footer>
        <ol class="doc">
          <li><span style="color: #999;">（…）</span></li>
        </ol>
      </footer>
      </blockquote>

      <blockquote id="renvoi-apocalypse-5-6" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-5-6">
        <ol class="doc">
          <li value="06">「わたしはまた、玉座と四つの生き物の間、長老たちの間に、屠られたような<span style="color: #e6a64d;">小羊が立っている</span>のを見た。小羊には七つの角と七つの目があった。この七つの目は、全地に遣わされている神の七つの霊である。」</li>
          <li value="07">小羊は進み出て、玉座に座っておられる方の右の手から、巻物を受け取った。</li>
            </ol>
          </blockquote>


<!-- Page 11 --><hr>


  <h5 class="yellow"><cite>黙示録</cite>での四人騎士</h5>

      <p>語りが虹とヨハネの間に続く。</p>


      <h6 class="yellow">第一の封印：白い馬　＝　<cite>黙示録</cite>、第６章１～２節</h6>

          <header>
            <ol class="doc">
              <li>第６章</li>
            </ol>
          </header>

        <blockquote id="renvoi-apocalypse-6-1" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-6-1">
          <ol class="doc">
            <li value="01">
              <p>また、わたしが見ていると、小羊が七つの封印の一つを開いた。すると、四つの生き物の一つが、雷のような声で</p>
              <p class="conversation>「出て来い」と言うのを、わたしは聞いた。</p>
            </li>
            <li value="02">そして見ていると、見よ、<span style="color: #e6a64d;">白い馬</span>が現れ、乗っている者は、<span style="color: #e6a64d;">弓</span>を持っていた。彼は<span style="color: #e6a64d;">冠</span>を与えられ、勝利の上に更に勝利を得ようと出て行った。</li>
          </ol>
        </blockquote>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-640.jpg" id="image-apocalypse-6-1" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《白い馬》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《白い馬》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1920.jpg 1920w"></picture><figcaption>右翼パネル内面、《白い馬》<br>
        <q cite="#renvoi-apocalypse-6-1" style="quotes:'「' '」';">乗っている者は、弓を持っていた。彼は冠を与えられ、勝利の上に更に勝利を得ようと出て行った</q>、<cite>黙示録</cite>、第４章・２節</figcaption>
      </figure>



      <h6 class="yellow">第二封印：火のように赤い馬　＝　<cite>黙示録</cite>、第６章３～４節</h6>

      <blockquote id="renvoi-apocalypse-6-3" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-6-3">
        <ol class="doc">
          <li value="03">小羊が第二の封印を開いたとき、第二の生き物が「出て来い」と言うのを、わたしは聞いた。</li>
          <li value="04">すると、<span style="color: #e6a64d;">火のように赤い</span>別の<span style="color: #e6a64d;">馬</span>が現れた。その馬に乗っている者には、地上から平和を奪い取って、殺し合いをさせる力が与えられた。また、この者には大きな<span style="color: #e6a64d;">剣</span>が与えられた。</li>
        </ol>
      </blockquote>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-640.jpg" id="image-apocalypse-6-3" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《火のように赤い馬》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《火のように赤い馬》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1920.jpg 1920w"></picture><figcaption>右翼パネル内面、《火のように赤い馬》<br>
        <q cite="#renvoi-apocalypse-6-3" style="quotes:'「' '」';">その馬に乗っている者には、地上から平和を奪い取って、殺し合いをさせる力が与えられた。また、この者には大きな剣が与えられた</q>、<cite>黙示録</cite>、第４章・４節</figcaption>
      </figure>

    

      <h6 class="yellow">第三封印：黒い馬　＝　<cite>黙示録</cite>、第６章５～６節</h6>


      <blockquote id="renvoi-apocalypse-6-5" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-6-5">
        <ol class="doc">
          <li value="05">小羊が第三の封印を開いたとき、第三の生き物が「出て来い」と言うのを、わたしは聞いた。
          そして見ていると、見よ、<span style="color: #e6a64d;">黒い馬</span>が現れ、乗っている者は、手に<span style="color: #e6a64d;">秤</span>を持っていた。</li>
          <li value="06">
            <p>わたしは、四つの生き物の間から出る声のようなものが、こう言うのを聞いた。</p>
            <p class="conversation">「小麦は一コイニクスで一デナリオン。大麦は三コイニクスで一デナリオン。オリーブ油とぶどう酒とを損なうな。」
            </p>
          </li>
        </ol>
      </blockquote>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-640.jpg" id="image-apocalypse-6-5" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《黒い馬》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《黒い馬》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1920.jpg 1920w"></picture><figcaption>右翼パネル内面、《黒い馬》<br><q cite="#renvoi-apocalypse-6-5" style="quotes:'「' '」';">乗っている者は、手に秤を持っていた</q>、<cite>黙示録</cite>、第６章・５節</figcaption>
      </figure>

    

      <h6 class="yellow">>第四封印：青白い馬　＝　<cite>黙示録</cite>、第６章７～８節</h6>

      <blockquote id="renvoi-apocalypse-6-7" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-6-7">
        <ol class="doc">
          <li value="07">
            <p>小羊が第四の封印を開いたとき、</p>
            <p class="conversation">「出て来い」と言う</p>
            <p>第四の生き物の声を、わたしは聞いた。</p>
          </li>
          <li value="08">こそして見ていると、見よ、<span style="color: #e6a64d;">青白い馬</span>が現れ、乗っている者の名は<span style="color: #e6a64d;">「死」</span>といい、これに<span style="color: #e6a64d;">陰府</span>が従っていた。</li>
          <li>彼らには、地上の四分の一を支配し、剣と飢饉と死をもって、更に地上の野獣で人を滅ぼす権威が与えられた。 </li>
          <li><span style="color: #999;">（...）</span></li>
        </ol>
      </blockquote>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-640.jpg" id="image-apocalypse-6-7" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《青白い馬、「死」、陰府》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《青白い馬、「死」、陰府》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1920.jpg 1920w"></picture><figcaption>右翼パネル内面、《青白い馬、「死」、陰府》<br><q cite="#renvoi-apocalypse-6-7" style="quotes:'「' '」';">乗っている者の名は「死」といい、これに陰府が従っていた。</q>、<cite>黙示録</cite>、第４章・５節</figcaption>
      </figure>

    

      <h6 class="yellow">四人騎士の周りの風景　＝　<cite>黙示録</cite>、第６章１４～１７節</h6>

      <blockquote id="renvoi-apocalypse-6-14" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-6-14">
        <ol class="doc">
          <li value="14">天は巻物が巻き取られるように消え去り、山も島も、みなその場所から移された。</li>
          <li value="15"><span style="color: #e6a64d;">地上の王、高官、千人隊長、富める者、力ある者、また、奴隷も自由な身分の者もことごとく、洞穴や山の岩間に隠れ</span></li>
          <li value="16"><p>山と岩に向かって、</p>
          <p class="conversation">「わたしたちの上に覆いかぶさって、玉座に座っておられる方の顔と小羊の怒りから、わたしたちをかくまってくれ」と言った。</p>
          </li>
          <li value="17">
          <p class="conversation">「神と小羊の怒りの大いなる日が来たからである。だれがそれに耐えられるであろうか。」</p>
          </li>
        </ol>
      </blockquote>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.jpg" id="image-apocalypse-6-14" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《四騎士の周りの風景》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《四騎士の周りの風景》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1920.jpg 1920w"></picture><figcaption>右翼パネル内面、《四騎士の周りの風景》、<q cite="#renvoi-apocalypse-6-14" style="quotes:'「' '」';">山も島も、みなその場所から移された</q><cite>黙示録</cite>、第６章１４～１７節</figcaption>
      </figure>


<!-- Page 12 --><hr>


    <h5 class="yellow">第七封印の天使たち　＝　<cite>黙示録</cite>、第８章１～２節</h5>

    <header>
      <ol class="doc">
        <li>第８章</li>
      </ol>
    </header>

    <blockquote id="renvoi-apocalypse-8-1" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-8-1">
      <ol class="doc">
        <li value="01">小羊が第七の封印を開いたとき、天は半時間ほど沈黙に包まれた。</li>
        <li value="02">そして、わたしは<span style="color: #e6a64d;">七人の天使</span>が神の御前に立っているのを見た。彼らには<span style="color: #e6a64d;">七つのラッパ</span>が与えられた。</li>
      </ol>
    </blockquote>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-640.jpg" id="image-apocalypse-8-1" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《第七の封印の天使たち》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《第七の封印の天使たち》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《第七の封印の天使たち》。<br><q cite="#renvoi-apocalypse-8-1" style="quotes:'「' '」';">神の御前に立っているのを見た。彼らには七つのラッパが与えられた</q>、<cite>黙示録</cite>、第８章１～２節</figcaption>
    </figure>



    <h5 class="yellow">祭壇の天使　＝　<cite>黙示録</cite>、第８章３～５節</h5>

    <blockquote id="renvoi-apocalypse-8-3" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-8-3">
      <ol class="doc">
        <li value="03">また、別の天使が来て、手に<span style="color: #e6a64d;">金の香炉</span>を持って祭壇のそばに立つと、この天使に多くの香が渡された。すべての聖なる者たちの祈りに添えて、玉座の前にある<span style="color: #e6a64d;">金の祭壇</span>に献げるためである。</li>
      </ol>
    </blockquote>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-640.jpg" id="image-apocalypse-8-3" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《祭壇の天使》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《祭壇の天使》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、<q cite="#renvoi-apocalypse-8-3" style="quotes:'«' '»';">金の香炉を持</q>つ《祭壇の天使》、<cite>黙示録</cite>、第８章３～５節</figcaption>
    </figure>

    <blockquote id="renvoi-apocalypse-8-4" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-8-4">
      <ol class="doc">
        <li value="04">香の煙は、天使の手から、聖なる者たちの祈りと共に神の御前へ立ち上った。</li>
        <li value="05">それから、天使が香炉を取り、それに祭壇の火を満たして地上へ投げつけると、雷、さまざまな音、稲妻、地震が起こった。</li>
        <li value="06">さて、七つのラッパを持っている七人の天使たちが、ラッパを吹く用意をした。</li>
      </ol>
    </blockquote>



    <h5 class="yellow">火で燃えている大きな山の墜落　＝　<cite>黙示録</cite>、第８章６～９節</h5>

    <blockquote id="renvoi-apocalypse-8-6" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-8-6">
      <ol class="doc">
       <li value="07">第一の天使がラッパを吹いた。すると、血の混じった<ruby>雹<rp>（</rp><rt>ひょう</rt><rp>）</rp></ruby>と火とが生じ、地上に投げ入れられた。地上の三分の一が焼け、木々の三分の一が焼け、すべての青草も焼けてしまった。</li>
        <li value="08">第二の天使がラッパを吹いた。すると、<span style="color: #e6a64d;">火で燃えている大きな山</span>のようなものが、海に投げ入れられた。海の三分の一が血に変わり、</li>
        <li value="09">また、被造物で海に住む生き物の三分の一は死に、<span style="color: #e6a64d;">船という船の三分の一が壊された</span>。</li>
      </ol>
    </blockquote>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-640.jpg" id="image-apocalypse-8-4" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《火で燃えている大きな山の墜落、船の三分の一が壊された》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《火で燃えている大きな山の墜落、船の三分の一が壊された》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《火で燃えている大きな山の墜落、船の三分の一が壊された》。<br>q cite="#renvoi-apocalypse-8-6" style="quotes:'「' '」';">船という船の三分の一が壊された</q>、<cite>黙示録</cite>、第８章６～９節</figcaption>
    </figure>



    <h5 class="yellow">「苦よもぎ」という星の墜落 　＝　<cite>黙示録</cite>、第８章１０～１２節</h5>

    <blockquote id="renvoi-apocalypse-8-10" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-8-10">
      <ol class="doc">
        <li value="10">第三の天使がラッパを吹いた。すると、<span style="color: #e6a64d;">松明のように燃えている大きな星</span>が、天から落ちて来て、川という川の三分の一と、その水源の上に落ちた。</li>
      </ol>
    </blockquote>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-640.jpg" id="image-apocalypse-8-10" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《「苦よもぎ」という星の墜落》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《「苦よもぎ」という星の墜落》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《「苦よもぎ」という星の墜落》。<br><q cite="#renvoi-apocalypse-8-11" style="quotes:'「' '」';">松明のように燃えている大きな星が、天から落ちて</q>（…）「水の三分の一が苦よもぎのように苦くなって、そのために多くの人が死んだ」、<cite>黙示録</cite>、第８章１０～１２節</figcaption>
    </figure>

    <blockquote id="renvoi-apocalypse-8-11" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-8-11">
      <ol class="doc">
        <li value="11">この星の名は<span style="color: #e6a64d;">「苦よもぎ」</span>といい、水の三分の一が苦よもぎのように苦くなって、そのために多くの人が死んだ。</li>
        <li value="12">第四の天使がラッパを吹いた。すると、太陽の三分の一、月の三分の一、星という星の三分の一が損なわれたので、それぞれ三分の一が暗くなって、昼はその光の三分の一を失い、夜も同じようになった。</li>
      </ol>
    </blockquote>

    <h5 class="yellow">鷲の<ruby>飛<rp>（</rp><rt style="font-size: 70%;color:#999">ひ</rt><rp>）</rp>翔<rp>（</rp><rt style="font-size: 70%;color:#999">しょう</rt><rp>）</rp></ruby>　＝　<cite>黙示録</cite>、第８章１３節</h5>

    <blockquote id="renvoi-apocalypse-8-13" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-8-13">
      <ol class="doc">
        <li value="13">
          <p>また、見ていると、一羽の<span style="color: #e6a64d;">鷲</span>が空高く飛びながら、大声でこう言うのが聞こえた。</p>
          <p class="conversation">
            「不幸だ、不幸だ、不幸だ、地上に住む者たち。なお三人の天使が吹こうとしているラッパの響きのゆえに。」
          </p>
        </li>
      </ol>
    </blockquote>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-640.jpg" id="image-apocalypse-8-13" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《右翼パネル内面、《鷲の飛翔》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《鷲の飛翔》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《鷲の<ruby>飛<rp>（</rp><rt style="font-size: 70%;color:#999">ひ</rt><rp>）</rp>翔<rp>（</rp><rt style="font-size: 70%;color:#999">しょう</rt><rp>）</rp></ruby>》。<br><q cite="#renvoi-apocalypse-8-13" style="quotes:'「' '」';">空高く</q>、<cite>黙示録</cite>、第８章１３節</figcaption>
    </figure>


<!-- Page 13 -->



    <h5 class="yellow">いなごの群れの地上への出　＝　<cite>黙示録</cite>、第９章１～１１節</h5>

      <header>
        <ol class="doc">
          <li>第９章</li>
        </ol>
      </header>


      <blockquote id="renvoi-apocalypse-9-1" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-9-1">
        <ol class="doc">
          <li value="01">第五の天使がラッパを吹いた。すると、一つの星が天から地上へ落ちて来るのが見えた。この星に、<span style="color: #e6a64d;">底なしの淵に通じる穴を開く鍵</span>が与えられ、</li>
          <li value="02">それが底なしの淵の穴を開くと、<span style="color: #e6a64d;">大きなかまどから出るような煙</span>が穴から立ち上り、太陽も空も穴からの煙のために暗くなった。</li>
          <li value="03">そして、煙の中から、<span style="color: #e6a64d;">いなご</span>の群れが地上へ出て来た。このいなごには、地に住むさそりが持っているような力が与えられた。</li>
        </ol>
      </blockquote>
      
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-640.jpg" id="image-apocalypse-9-1" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《いなごの群れの地上への出》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《いなごの群れの地上への出》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《いなごの群れの地上への出》。<br>このいなごには、<q cite="#renvoi-apocalypse-9-1" style="quotes:'「' '」';">力が与えられた</q>、<cite>黙示録</cite>、第１０章３節</figcaption>
      </figure>

      <blockquote id="renvoi-apocalypse-9-4" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-9-4">
        <ol class="doc">
          <li value="04">いなごは、地の草やどんな青物も、またどんな木も損なってはならないが、ただ、額に神の刻印を押されていない人には害を加えてもよい、と言い渡された。</li>
          <li value="05">殺してはいけないが、五か月の間、苦しめることは許されたのである。いなごが与える苦痛は、さそりが人を刺したときの苦痛のようであった。</li>
          <li value="06">この人々は、その期間、死にたいと思っても死ぬことができず、切に死を望んでも、死の方が逃げて行く。</li>
          <li value="07">さて、<span style="color: #e6a64d;">いなご</span>の姿は、出陣の用意を整えた馬に似て、頭には金の冠に似たものを着け、顔は人間の顔のようであった。</li>
          <li value="08">また、髪は女の髪のようで、歯は獅子の歯のようであった。</li>
          <li value="09">また、胸には鉄の胸当てのようなものを着け、その羽の音は、多くの馬に引かれて戦場に急ぐ戦車の響きのようであった。</li>
          <li value="10">更に、さそりのように、尾と針があって、この尾には、五か月の間、人に害を加える力があった。</li>
          <li value="11">いなごは、底なしの淵の使いを王としていただいている。その名は、ヘブライ語でアバドンといい、ギリシア語の名はアポリオンという。</li>
          <li><span style="color: #999;">（…）</span></li>
        </ol>
      </blockquote>


      <h5 class="yellow">天から降って来る天使　＝　<cite>黙示録</cite>、第１０章１～３節</h5>

      <header>
        <ol class="doc">
          <li>第１０章</li>
        </ol>
      </header>

      <blockquote id="renvoi-apocalypse-10-1" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-10-1">
        <ol class="doc">
          <li value="01">わたしはまた、もう一人の力強い<span style="color: #e6a64d;">天使</span>が、<span style="color: #e6a64d;">雲を身</span>にまとい、天から降って来るのを見た。頭には<span style="color: #e6a64d;">虹</span>をいただき、顔は<span style="color: #e6a64d;">太陽</span>のようで、足は<span style="color: #e6a64d;">火の柱</span>のようであり、</li>
          <li value="02">手には<span style="color: #e6a64d;">開いた小さな巻物</span>を持っていた。そして、右足で海を、左足で地を踏まえて、</li>
          <li value="03">獅子がほえるような大声で叫んだ。天使が叫んだとき、七つの雷がそれぞれの声で語った。</li>
        </ol>
      </blockquote>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-640.jpg" id="image-apocalypse-10-1" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《天から降って来る天使》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《天から降って来る天使》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1920.jpg 1920w"></picture><figcaption>右翼パネル内面、《天から降って来る天使》。<br><q cite="#renvoi-apocalypse-10-1" style="quotes:'「' '」';">わたしはまた、もう一人の力強い天使が、雲を身にまとい、天から降って来るのを見た。頭には虹をいただき、顔は太陽のようで、足は火の柱のようであり、手には開いた小さな巻物を持っていた。そして、右足で海を、左足で地を踏まえて</q>、<cite>黙示録</cite>、第１０章１～３節</figcaption>
      </figure>



      <h5 class="yellow">黙示録の空　＝　<cite>黙示録</cite>、第１０章３～６節</h5>

      <blockquote id="renvoi-apocalypse-10-4" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-10-4">
        <ol class="doc">
          <li value="04">
            <p>七つの雷が語ったとき、わたしは書き留めようとした。すると、天から声があって、</p>
            <p class="conversation">
              「七つの雷が語ったことは秘めておけ。それを書き留めてはいけない」
            </p>
            <p>と言うのが聞こえた。</p>
          </li>
          <li value="05">すると、海と地の上に立つのをわたしが見たあの天使が、右手を天に上げ、</li>
          <li value="06">
            <p>世々限りなく生きておられる方にかけて誓った。すなわち、天とその中にあるもの、地とその中にあるもの、海とその中にあるものを創造された方にかけてこう誓った。</p>
            <p class="conversation">「もはや時がない。」</p>
          </li>
        </ol>
      </blockquote>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-640.jpg" id="image-apocalypse-10-4" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《黙示録の空》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《黙示録の空》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《黙示録の空》。<br><q cite="#renvoi-apocalypse-10-4" style="quotes:'「' '」';"></q>、<cite>黙示録</cite>、第１２章３～６節</figcaption>
      </figure>



      <h5 class="yellow">女の人と竜　＝　<cite>黙示録</cite>、第１２章１～４節</h5>

      <header>
          <ol class="doc">
            <li>第１２章</li>
          </ol>
        </header>

        <blockquote id="renvoi-apocalypse-12-1" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-12-1">
        <ol class="doc">
          <li value="01">また、天に大きなしるしが現れた。<span style="color: #e6a64d;">一人の女</span>が身に太陽をまとい、月を足の下にし、頭には十二の星の冠をかぶっていた。</li>
          <li value="02">女は身ごもっていたが、子を産む痛みと苦しみのため叫んでいた。</li>
          <li value="03">また、もう一つのしるしが天に現れた。見よ、火のように<span style="color: #e6a64d;">赤い大きな竜</span>である。これには七つの頭と十本の角があって、その頭に七つの冠をかぶっていた。</li>
          <li value="04">竜の尾は、天の星の三分の一を掃き寄せて、地上に投げつけた。そして、竜は子を産もうとしている女の前に立ちはだかり、産んだら、その子を食べてしまおうとしていた。</li>
        </ol>
      </blockquote>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-640.jpg" id="image-apocalypse-12-1" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《女の人と竜》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《女の人と竜》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《女の人と竜》。<br><q cite="#renvoi-apocalypse-12-1" style="quotes:'「' '」';">竜は子を産もうとしている女の前に立ちはだかり、産んだら、その子を食べてしまおうとしていた</q>、<cite>黙示録</cite>、第１２章１～４節</figcaption>
      </figure>



      <h5 class="yellow">聖ミカエルと、竜とその使いたちの戦い。竜とその使いたちの墜落　＝　<cite>黙示録</cite>、第１２章５～９節</h5>

      <blockquote id="renvoi-apocalypse-12-5" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-12-5">
        <ol class="doc">
          <li value="05">女は男の子を産んだ。この子は、鉄の杖ですべての国民を治めることになっていた。子は神のもとへ、その玉座へ引き上げられた。</li>
          <li value="06">女は荒れ野へ逃げ込んだ。そこには、この女が１２６０日の間養われるように、神の用意された場所があった。</li>
          <li value="07">さて、天で戦いが起こった。ミカエルとその使いたちが、竜に戦いを挑んだのである。竜とその使いたちも応戦したが、</li>
          <li value="08">勝てなかった。そして、もはや天には彼らの居場所がなくなった。</li>
          <li value="09">この巨大な竜、年を経た蛇、悪魔とかサタンとか呼ばれるもの、全人類を惑わす者は、投げ落とされた。地上に投げ落とされたのである。その使いたちも、もろともに投げ落とされた。</li>
        </ol>
      </blockquote>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-640.jpg" id="image-apocalypse-12-5" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《聖ミカエルと、竜とその使いたちの戦い。竜とその使いたちの墜落》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《聖ミカエルと、竜とその使いたちの戦い。竜とその使いたちの墜落》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《聖ミカエルと、竜とその使いたちの戦い。竜とその使いたちの墜落》。<br><q cite="#renvoi-apocalypse-12-5" style="quotes:'「' '」';">全人類を惑わす者は、投げ落とされた。地上に投げ落とされたのである。その使いたちも、もろともに投げ落とされた</q>、<cite>黙示録</cite>、第１２章５～９節</figcaption>
      </figure>



<!-- Page 14 --><hr>



    <h5 class="yellow">女蛇から逃れるために女には大きな鷲の翼が二つ与えられる　＝　<cite>黙示録</cite>、第１２章１０～１３節</h5>

    <blockquote id="renvoi-apocalypse-12-10" cite="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-12-10">
      <ol class="doc">
        <li value="10">
          <p>わたしは、天で大きな声が次のように言うのを、聞いた。</p>
          <p class="conversation">「今や、我々の神の救いと力と支配が現れた。神のメシアの権威が現れた。<p>
        </li>
        <li>
          <p class="conversation">我々の兄弟たちを告発する者、昼も夜も我々の神の御前で彼らを告発する者が、投げ落とされたからである。</p>
        </li>
        <li value="11">
          <p class="conversation">兄弟たちは、小羊の血と自分たちの証しの言葉とで、彼に打ち勝った。彼らは、死に至るまで命を惜しまなかった。</p>
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
    </blockquote>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.jpg" id="image-apocalypse-12-10" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《女蛇から逃れるために女には大きな鷲の翼が二つ与えられる》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《女蛇から逃れるために女には大きな鷲の翼が二つ与えられる》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《女蛇から逃れるために女には大きな鷲の翼が二つ与えられる》。<br><q cite="#renvoi-apocalypse-12-10" style="quotes:'「' '」';">荒れ野にある自分の場所へ飛んで行くためである</q>、<cite>黙示録</cite>、第１２章１０～１４節</figcaption>
    </figure>

    <h5 class="yellow">パトモス島でのヨハネが啓示された<ruby>幻<rp>（</rp><rt>げん</rt><rp>）</rp>影<rp>（</rp><rt>えい</rt><rp>）</rp></ruby>、<cite>黄金伝説</cite>の第９章において<cite>福音書記者ヨハネの伝説</cite></h5>

      <p>メムリンクから考えられた語りの視点から、黙示録の幻影はここで終わりになります。</p>
      <p>パトモス島の後、中央のパネルに、福音書記者ヨハネの生涯が、<cite>黄金伝説</cite>の第９章で語られる<cite>福音書記者ヨハネの伝説</cite>によって続いています。


    <footer>
      <p class="puce"><a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18"><cite>黄金伝説</cite>の第９章において<cite>福音書記者ヨハネの伝説</cite>の文書</a>を読む。</p>
    </footer>



    <h5 class="yellow">右側の最左の柱頭：ドゥルシアネの復活　＝　<cite>黄金伝説</cite>、第９章</h5>


      <p>黄金伝説によると、ヨハネがその後エフェソス市に戻って、メムリンクがある柱頭に表わしているとおり、ドゥルシアネを復活させる。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、右側の最左の柱頭、《ドゥルシアネの復活》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、右側の最左の柱頭、《ドゥルシアネの復活》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、右側の最左の柱頭、《ドゥルシアネの復活》、<cite>黄金伝説</cite>、第９章</figcaption>
    </figure>



    <h5 class="yellow">右翼パネル内面：哲学者クラトンに洗礼　＝　<cite>黄金伝説</cite>、第９章</h5>
    

      <p>彼は真後ろにあるクーポラ付き小建物の中に哲学者クラトンに洗礼を授ける。</p>


  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《クラトンの洗礼》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《クラトンの洗礼》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1920.jpg 1920w"></picture><figcaption>中央パネル内面の詳細、《クラトンの洗礼》、<cite>黄金伝説</cite>、第９章</figcaption>
  </figure>



    <h5 class="yellow">右側の最右の柱頭：毒の杯の奇跡　＝　<cite>黄金伝説</cite>、第９章</h5>


      <p>なんの害も起こらないで、毒の杯を飲みます。</p>


    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、右側の最右の柱頭、《毒の杯の奇跡》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、右側の最右の柱頭、《毒の杯の奇跡》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、右側の最右の柱頭、《毒の杯の奇跡》、<cite>黄金伝説</cite>、第９章</figcaption>
    </figure>

      

<!-- Page 15 --><hr>


	<figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-1280.webp 1280w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-840.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の閉翼時の景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の閉翼時のの景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-1280.webp 1280w"></picture><figcaption><ruby>閉<rt style="font-size: 70%;color:#999;">へい</rt>翼<rt style="font-size: 70%;color:#999;">よく</rt>時<rt style="font-size: 70%;color:#999;">じ</rt></ruby>の三連画</figcaption>
  </figure>
  <h3 id="position-fermee" class="yellow">寄贈者たちの紹介、<ruby style="color:#e6a64d;">閉<rp>（</rp><rt style="font-size: 70%;color:#e6a64d;">へい</rt><rp>）</rp>翼<rp>（</rp><rt style="font-size: 70%;color:#e6a64d;">よく</rt><rp>）</rp>時<rp>（</rp><rt style="font-size: 70%;color:#e6a64d;">じ</rt><rp>）</rp></ruby>の三連画</h3>



      <p>翼パネルの裏側は、跪いている寄贈者たちと彼らを見守っている守護聖人の肖像で飾られている。</p>
      <p>彼らは奥行きのあんまり深くない<ruby>壁<rp>（</rp><rt>へき</rt><rp>）</rp>龕<rp>（</rp><rt>がん</rt><rp>）</rp></ruby>で表されている。</p>
      <p>各の人物の身分が確認された。</p>




        <p>左翼パネルでは、左から：</p>
        <ul>
          <li>立ったままでいる人は、<span style="color: #e6a64d;">聖アグネス</span>である。下と左側での子羊から認識されている。</li>
          <li>前方でひざまずいている<ruby style="color:#e6a64d;" lang="ja">アグネス<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">Agnès</rt><rp>）</rp>・<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">&#160;</rt><rp>）</rp>カゼムブロード<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">CASEMBROOD</rt><rp>）</rp></ruby>である。</li>
        </ul>


        <p>左翼パネルの右側に：</p>
        <ul>
          <li>つり香炉を運ぶ<span style="color: #e6a64d;">聖クレア</span>は、</li>
          <li><ruby style="color:#e6a64d;" lang="ja">クレア<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">Claire</rt><rp>）</rp>・<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">&#160;</rt><rp>）</rp>ヴァン<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">VAN</rt><rp>）</rp>・<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">&#160;</rt><rp>）</rp>ヒュルせン<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">HULSEN</rt><rp>）</rp></ruby>修道女を守っている。</li>
        </ul>


        <p>右翼パネル、左から：</p>
        <ul>
          <li>立っているままでいる人は、サンティアゴ・デ・コンポステーラの巡礼者の服を着た<span style="color: #e6a64d;">聖ヤコブ</span>と、</li>
          <li><ruby style="color:#e6a64d;" lang="ja">ヤコブ<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">Jacob</rt><rp>）</rp>・<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">&#160;</rt><rp>）</rp>ド<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">DE</rt><rp>）</rp>・<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">&#160;</rt><rp>）</rp>クーニンク<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">KEUNINC</rt><rp>）</rp></ruby>である。</li>
        </ul>


        <p>右翼パネルの右に：</p>
        <ul>
          <li>司教杖と子豚で見分ける<span style="color: #e6a64d;">聖大アントニオ</span>は、</li>
          <li>ひざまずいているままでいるひとは、施療院長である、<ruby style="color:#e6a64d;" lang="ja">アントワーヌ<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">Antoine</rt><rp>）</rp>・<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">&#160;</rt><rp>）</rp>セガーズ<rp>（</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">SEGHERS</rt><rp>）</rp></ruby>の守護聖人である。</li>
        </ul>
      <p>その三連画は恐らく、アントワーヌ・セガースが死んだ年以来、<time datetime="1475">１４７５年</time>以前に注文された。</p>
      <p><time datetime="1479">１４７９年</time>には祭壇の上に置かれた。</p>



<hr>

<aside>

    <h3 id="a-propos-de-cet-article" class="yellow">この記事に関連書籍</h3>

      <p>この記事を作文するには、特に<ruby lang="ja">ディルク<rp>（</rp><rt lang="nl">Dirk</rt><rp>）</rp>・<rp>（</rp><rt lang="nl">&#160;</rt><rp>）</rp>ド<rp>（</rp><rt lang="nl">DE</rt><rp>）</rp>・<rp>（</rp><rt lang="nl">&#160;</rt><rp>）</rp>ヴォス<rp>（</rp><rt lang="nl">VOS</rt><rp>）</rp></ruby>、<a href="#de-vos-1" id="renvoi-de-vos-1" class="yellow">「ハンス・メムリンク」</a>、<a href="#de-vos-2" class="yellow">「ハンス・メリンク＝作品全集」</a>などの既存の文献に対して、私たちは本当に感謝しています。</p>



      <h4 id="de-vos" class="yellow">ディルク・ド・ヴォスの本:</h4>

        <ul>
          <li>フランス語で：
            <table>
              <thead>
              <tr>
              <th><span hidden>hidden</span></th>
              <th><span hidden>hidden</span></th>
              <th><span hidden>hidden</span></th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td><samp>題名</samp></td>
              <td><samp>出版年</samp></td>
              <td><samp>ISBN-10</samp></td>
              </tr>
              <tr>
              <td><samp>Hans Memling : l'œuvre complète</samp></td>
              <td><samp>1994</samp></td>
              <td><samp>2-226-06992-5</samp></td>
              </tr>
              <tr>
              <td><samp>Hans Memling : catalogue</samp></td>
              <td><samp>1994</samp></td>
              <td><samp>90-5544-028-0</samp></td>
              </tr>
              </tbody>
            </table>
          </li>
          <li>英語で：
            <table>
              <thead>
              <tr>
              <th><span hidden>hidden</span></th>
              <th><span hidden>hidden</span></th>
              <th><span hidden>hidden</span></th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td><samp>題名</samp></td>
              <td><samp>出版年</samp></td>
              <td><samp>ISBN-10</samp></td>
              </tr>
              <tr>
              <td><samp>Hans Memling: The Complete Works</samp></td>
              <td><samp>1994</samp></td>
              <td><samp>0840936496</samp></td>
              </tr>
              <tr>
              <td><samp>Hans Memling: Catalogue</samp></td>
              <td><samp>1994</samp></td>
              <td><samp>9055440299</samp></td>
              </tr>
              </tbody>
            </table>
          </li>
        </ul>

      <footer>
        <p><a href="#renvoi-de-vos-1" title="renvoi-de-vos-1">↑ このページー</a>　<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:2#renvoi-de-vos-2" title="renvoi-de-vos-2">↑ ページー２</a></p>
      </footer>



      <h4 id="lorentz" class="yellow">フィリップ・ロレンッツの本:</h4>

        <div class="notices yellow">
          <ul>
            <li>フランス語で：
              <table>
                <thead>
                <tr>
                <th><span hidden>hidden</span></th>
                <th><span hidden>hidden</span></th>
                <th><span hidden>hidden</span></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td><samp>題名</samp></td>
                <td><samp>出版年</samp></td>
                <td><samp>ISBN-10</samp></td>
                </tr>
                <tr>
                <td><samp>Hans Memling au Louvre (exposition, Musée du Louvre, Salle de la Chapelle, aile Sully, 18 Mai-14 Août 1995)</samp></td>
                <td><samp>1995</samp></td>
                <td><samp>2-7118-3275-9</samp></td>
                </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>

      <footer>
        <p><a href="#renvoi-lorentz-1" title="renvoi-de-vos-1">↑ このページー</a>　<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#renvoi-lorentz-2" title="renvoi-lorentz-2">↑ ページー３</a></p>
      </footer>


    <hr>


      <header>
        <p><a href="#page-1-renvoi-note-1" title="renvoi note-1" id="note-1">註釈：</a></p>
      </header>
      <p>一般の人々に向けて私たちは公開にしている作品の複製写真は、現在では、私たちが知っている限り、専門家のを除いて、最高のものです。それらの写真が、（この記事が作文される<time datetime="2018">２０１８年</time>）現在ですと、展示会空間の照明が低強度と黄色のために、私たちから大変な努力を必要としてきました。</p>
      <footer>
        <p><a href="#page-1-renvoi-note-1" title="註釈の元へ">↑ 文書に戻る</a></p>
      </footer>



<hr>

  
    <h3 class="yellow">註釈</h3>

      <h4 id="page-10-note-apocalypse" class="yellow">黙示録</h4>


          <div class="notices yellow">
          <ol>
            <li><p>黙示録の文書が「アジア州にある７つの教会へ」 （「エフェソス、スミルナ、ペルガモン、ティアティラ、サルディス、フィラデルフィア、ラオディキア」、黙示録、１・４）とユダヤ系聖典の像徴的言語で宛てられている。</p>
            <p>この文書が時間の終わりでのキリストの内での新たな希望のおかげでローマからであれユダヤからであれの迫害を乗り越えることだけではなくしかもそれらの教会自身の不足<span style="color: #9c6416;">、<cite>黙示録</cite>、第２章~３章）節/span>を乗り越えることを可能にしてくれる超越的な事実に招く。</p></li>
          </ol>
          </div>
          <footer>
            <p><a href="#page-10-renvoi-note-apocalypse" title="文書としての『黙示録』の紹介をここに見当たることが出来ます">「文書としての『黙示録』の紹介をここに見当たることが出来ます」 ↑ 戻る ↑</a></p>
          </footer>


          <div class="footnotes">
          <ol start="2">
            <li id="page-10-fn:1">
            <p>この引用文が元々の文書では過去形です。念のため、ここでは、私は現在形に移動させている。</p>
            </li>
          </ol>
          </div>
          <footer>
            <p><a href="#page-10-fnref1:1" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></p>
          </footer>


          <div class="footnotes">
          <ol start="3">
            <li id="page-10-fn:2">
              <p>右翼パネルと関係のある黙示録の文書からの引用文があります。</p>
              <ul>
                <li><p><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse"><cite>黙示録</cite>の文書</a>を読む。</p></li>
              </ul>  
            </li>
          </ol>
          </div>
          <footer>
            <p><a href="#page-10-fnref1:2" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></p>
          </footer>





<hr>

  

      <div class="footnotes">
        <ol>
          <li id="page-3-fn:1">
          <p>ここでは私たちはウィキペディアのフランス語版（日付：<time datetime="2018-08-15">２０１８年８月１５日</time>）の「アレクサンドリアのカタリナ」を参照にしています。それは：</p>
          <ul>
            <li>Gustave Bardy: Catherine d’Alexandrie. In: Dictionnaire d’histoire et de géographie ecclésiastiques, vol 11, Paris 1949, pp 1503–1505, ici: 1504.</li>
            <li>Christine Walsh: The Cult of St Katherine of Alexandria in Early Medieval Europe, Aldershot 2007, p. 3–26; </li>
            <li>Michael Deakin: Hypatia of Alexandria, Mathematician and Martyr, Amherst (New York) 2007, p. 135, 202; </li>
            <li>Maria Dzielska: Hypatia of Alexandria, Cambridge (Massachusetts) 1995, p. 21; </li>
            <li>Christian Lacombrade: Hypatia. In: Reallexikon für Antike und Christentum, vol 16, Stuttgart 1994, pp 956–967, ici: 966;</li>
          </ul>
          </li>
        </ol>
      </div>
      <footer>
        <p><a href="#page-3-fnref1:1" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></p>
      </footer>



      <div class="footnotes">
        <ol start="2">
          <li id="page-3-fn:2">
            <p>ここでは私たちはウィキペディアのフランス語版（日付：<time datetime="2018-08-15">２０１８年８月１５日</time>）の「アレクサンドリアのカタリナ」を参照にしています。それは：</p>
            <blockquote>
              <p>「何人かの聖人が人気を博しているかもしれません。彼らの名前の周りに発生した伝説のために、例えば聖キリストフォルス、聖バルバラ、アレクサンドリアの聖カタリナ、聖フィロメナなどのように、彼らが存在したことをでも保証できない。一般ローマ暦から削除されました。キリスト教徒たちは、真実にしか祈りに招かれない」</p>
            </blockquote>
            <p><time datetime="1969-05-09">１９６９年５月９日</time>、ローマで行われた暦の改革を準備した研究グループのパリカトリック学院の典礼学課教授のピエール・ジョネル修道長の新しいローマ暦を紹介する会議による。</p>
          </li>
        </ol>
      </div>
      <footer>
        <p><a href="#page-3-fnref1:2" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></p>
        <p><a href="#page-3-fnref2:2" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></p>
      </footer>



      <div class="footnotes">
        <ol start="3">
          <li id="page-3-fn:4">
            <p>ラテン語では「Ecce&#160;Agnus&#160;Dei」。</p>
          </li>
        </ol>
      </div>
      <footer><p><a href="#page-3-fnref1:4" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></p></footer>



      <div class="footnotes">
        <ol start="4">
          <li id="page-3-fn:3">
            <p>大殉教者バルバラはまた「聖バルバラ」として知られている。</p>
          </li>
        </ol>
      </div>
      <footer>
        <p><a href="#page-3-fnref1:3" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></p>
      </footer>



      <div class="footnotes">
      <ol start="5">
        <li id="page-3-fn:5">
          <p>現在のトルコの北西部に位置づけられていて黒海の岸にある古代都市。現代の<a href="https://ja.wikipedia.org/wiki/イズミット" title="https://ja.wikipedia.org/wiki/イズミット">イズミット</a>。</p>
        </li>
      </ol>
      </div>
      <footer>
        <p><a href="#page-3-fnref1:5" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></p>
      </footer>



<hr>

  <h3 class="yellow">註釈</h3>
  
    <h4 id="page-4-note-devotion-moderne" class="yellow">新しき信心</h4>
    
      <div class="notices yellow">
        <ol>
          <li><p>現在のネーデルラントの北部で誕生して、十四世紀初頭から十五世紀初頭にかけてユトレヒト周辺で新しき信心は、<a href="https://fr.wikipedia.org/wiki/Gérard_Groote" title="https://fr.wikipedia.org/wiki/Gérard_Groote" id="gerard-groote" class="yellow"><ruby lang="ja">ヘルート<rp>（</rp><rt lang="nl">Geert</rt><rp>）</rp>・<rp>（</rp><rt lang="nl">&#160;</rt><rp>）</rp>フローテ<rp>（</rp><rt lang="nl">Groote</rt><rp>）</rp></ruby></a>という男性により始められました。</p>
          <p>彼は当時の敬虔信仰を厳し過ぎると現世から遠くなると批判します。
          それに対して、彼は、信者にキリストを自分の心の一奥底に居るようにと導きます。
          彼によると、このキリストの存在は単純さを生み出すことと使命している。
          従って信者は純粋に、信仰が自分の心の中で奨励する美徳に値する行動を為すことができる。</p></li>
        </ol>
      </div>
      <footer>
        <ul>
          <li>&#160;<a href="#page-4-renvoi-devotion-moderne" title="「新しき信心」運動の送り返し">「歴史的細かい紹介を註釈に見付かることが出来ますに」文書へ戻る　&#8617;</a>」</li>
        </ul>
      </footer>


        <div class="footnotes">
          <ol start="2">
            <li id="page-4-fn:1">
              <p>イタリア語では「Sacra&#160;conversazione」。</p>
            </li>
          </ol>
        </div>
        <footer>
          <ul>
            <li>&#160;<a href="#page-4-fnref1:1" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></li>
          </ul>
        </footer>



        <div class="footnotes">
          <ol start="3">
            <li id="page-4-fn:2">
              <p>ラテン語では「Devotio&#160;moderna」。</p>
            </li>
          </ol>
        </div>
        <footer>
          <ul>
            <li>&#160;<a href="#page-4-fnref1:2" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></li>
          </ul>
        </footer>



        <div class="footnotes">
          <ol start="4">
            <li id="page-4-fn:4">
              <p>ラテン語では「Imitatio&#160;Christi」。『キリストに<ruby>倣<rp>（</rp><rt>なら</rt><rp>）</rp></ruby>いて』は、修道士であった<a href="https://ja.wikipedia.org/wiki/トマス・ア・ケンピス" title="https://ja.wikipedia.org/wiki/トマス・ア・ケンピス">トマス・ア・ケンピス</a>によって書かれた本であって、<time datetime="1418">１４１８年</time>ごろにラテン語で出版された。</p>
              <p>「第ニの福音書」「中世の最高の信心書」とも言われ、聖書に次いでカトリックのキリスト教徒の霊的修練の書として識字階級に広く読まれ、親しまれている。 日本でも１６世紀後半にキリシタン版の『<ruby>世のはかなさ<rp>（</rp><rt>コンテムツス・ムンヂ</rt><rp>）</rp></ruby>』として翻訳され、刊行された以来、「キリストのまねび」「イミタティオ-クリスティ」など多種の訳がある。</p>
            </li>
          </ol>
        </div>
      <footer>
        <ul>
          <li>&#160;<a href="#page-4-fnref1:4" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></li>
        </ul>
      </footer>



<hr>

  
    <header>
      <p>注釈：</p>
    </header>
    <div class="footnotes">
    <ol>
      <li id="page-5-fn:6">
      <p>「その芸術家がブルージュに定住した当時、この街は、ブルゴーニュ公爵領ネーデルラントの主な装飾写本制作拠点の一つであった。</p>
      <p> (...)</p>
      <p>メムリンクは、自分のブルージュでの顔見知り関係の中で細密画かを数えていた。名前は<ruby lang="ja">ウィレム<rp>（</rp><rt lang="de">Willem</rt><rp>）</rp>・<rp>（</rp><rt lang="de">&#160;</rt><rp>）</rp>ヴレラント<rp>（</rp><rt lang="de">Vrelant</rt><rp>）</rp></ruby>。
      この町で最も出産豊かな工房の頭として、ヴレラントはメムリンクと同様に、移民であった。
      ユトレヒト市出身の彼は<time datetime="1454">１４５４年</time>からブルージュ書物製作<ruby>組合<rp>（</rp><rt>ギルド</rt><rp>）</rp></ruby>の会員として、<time datetime="1481">１４８１年</time>の亡くなるまでに登録されている。
      ニ人とも<ruby lang="ja">シント<rp>（</rp><rt lang="nl">Sint</rt><rp>）</rp>＝<rp>（</rp><rt lang="nl">-</rt><rp>）</rp>ジョリスストラット<rp>（</rp><rt lang="nl">Jorisstraat</rt><rp>）</rp></ruby>に住んでいたので、ヴレラントとメムリンクがほとんど隣人でした。</p>
      <p> (...)</p>
      <p>視覚的に説得力のある空間的表現の観点から考えれば、前景のニつの図形と絵画の残りの図との関係は、中間空間の林と主な図形と関係に脈絡が取れていません。</p>
      <p> (...)</p>
      <p>ある作品から別の作品へでも、各作品には、ヴレラントと同様に、位置の高い地平線にまでいくつかの景色が重なるのを見当たることがあります」。</p>
      </li>
    </ol>
    </div>
    <footer>
      <p><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean#lorentz" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean#lorentz" id="renvoi-lorentz-2" class="yellow">この記事に関連書籍</a>に出典されている<ruby lang="ja">フィリップ<rp>（</rp><rt lang="de">Philippe</rt><rp>）</rp>・<rp>（</rp><rt lang="de">&#160;</rt><rp>）</rp>ローレンッツ<rp>（</rp><rt lang="de">LORENTZ</rt><rp>）</rp></ruby>の著作からの引用。</p>
      <p><a href="#page-5-fnref1:6" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></p></p>
    </footer>


<hr>

  
    <div class="footnotes">
    <ol start="1">
      <li id="page-7-fn:2">
        <p>ヘロデ・フィリッポス１世とも呼称されている。</p>
      </li>
    </ol>
    </div>
    <footer>
      <p><a href="#page-7-fnref1:2" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></p>
    </footer>


  
    <div class="footnotes">
    <ol start="2">
      <li id="page-7-fn:1">
        <p>念のため、この引用文が過去形であって、ここでは私が現代形に移動させようとしている。</p>
      </li>
    </ol>
    </div>
    <footer>
      <p><a href="#page-7-fnref1:1" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></p>
    </footer>


  
    <div class="footnotes">
    <ol start="3">
      <li id="page-7-fn:3">
        <p>マシェロントは、要塞化された宮殿の遺跡があるヨルダンの遺跡です。それは死海の東海岸のヨルダン川河口の約２４キロの丘に位置している。ヘブライ語では「מכוור」、アラブ語では、「قلة المشناقى」を呼称されている。</p>
      </li>
    </ol>
    </div>
    <footer>
      <p><a href="#page-7-fnref1:3" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></p>
    </footer>


<hr>


  <div class="footnotes">
  <ol>
    <li id="page-8-fn:1">
    <p>ヤコブス・デ・ウォラギネによって書き留められた<a href="https://ja.wikipedia.org/wiki/ヒエロニムス" title="https://ja.wikipedia.org/wiki/ヒエロニムス" id="saint-jerome" class="yellow">ヒエロニムス</a>の言葉。</p>
    </li>
  </ol>
  </div>
  <footer>
    <p><a href="#page-8-fnref1:1" rev="footnote" class="footnote-backref">文書に戻る　&#8617;</a></p>
  </footer>

<hr>

  
  <div class="footnotes">
  <ol>
    <li id="page-9-fn:1">
      <p>行政官、シリア属州・<a href="https://ja.wikipedia.org/wiki/アパメア" title="https://ja.wikipedia.org/wiki/アパメア" class="yellow"><ruby lang="ja">アパメア<rp>（</rp><rt lang="grc">Απάμεια</rt><rp>）</rp></ruby></a>市の司教に選ばれた人。彼はセオドシウス大帝の命令に従って偶像の社の破壊を監督していたところに、異教徒たちに暗殺されて亡くなりました</p>
    </li>
  </ol>
  </div>
  <footer>
    <p><a href="#page-9-fnref1:1" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></p>
  </footer>


<hr>

  
    <h3 class="yellow">註釈</h3>

      <h4 id="page-10-note-apocalypse" class="yellow">黙示録</h4>


          <div class="notices yellow">
          <ol>
            <li><p>黙示録の文書が「アジア州にある７つの教会へ」 （「エフェソス、スミルナ、ペルガモン、ティアティラ、サルディス、フィラデルフィア、ラオディキア」、黙示録、１・４）とユダヤ系聖典の像徴的言語で宛てられている。</p>
            <p>この文書が時間の終わりでのキリストの内での新たな希望のおかげでローマからであれユダヤからであれの迫害を乗り越えることだけではなくしかもそれらの教会自身の不足<span style="color: #9c6416;">、<cite>黙示録</cite>、第２章~３章）節/span>を乗り越えることを可能にしてくれる超越的な事実に招く。</p></li>
          </ol>
          </div>
          <footer>
            <p><a href="#page-10-renvoi-note-apocalypse" title="文書としての『黙示録』の紹介をここに見当たることが出来ます">「文書としての『黙示録』の紹介をここに見当たることが出来ます」 ↑ 戻る ↑</a></p>
          </footer>


          <div class="footnotes">
          <ol start="2">
            <li id="page-10-fn:1">
            <p>この引用文が元々の文書では過去形です。念のため、ここでは、私は現在形に移動させている。</p>
            </li>
          </ol>
          </div>
          <footer>
            <p><a href="#page-10-fnref1:1" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></p>
          </footer>


          <div class="footnotes">
          <ol start="3">
            <li id="page-10-fn:2">
              <p>右翼パネルと関係のある黙示録の文書からの引用文があります。</p>
              <ul>
                <li><p><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse"><cite>黙示録</cite>の文書</a>を読む。</p></li>
              </ul>  
            </li>
          </ol>
          </div>
          <footer>
            <p><a href="#page-10-fnref1:2" rev="footnote" class="footnote-backref">文書へ戻る　&#8617;</a></p>
          </footer>




</aside>



<!-- Page 16 -->

<!-- Page 17 -->

<!-- Page 18 -->

<!-- Page 19 -->

<!-- Page 20 -->
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

<p>  <label>Show serialized editor state
    <input type="checkbox" bind:checked={showEditorState}/>
  </label>
</p>

<p>  information about html <a href='https://www.w3schools.com/tags/tag_ruby.asp' rel="nofollow external" target="_blank"><code>ruby</code></a> tag.
</p>

{#if showEditorState}
<pre>{JSON.stringify(toJSON(editorState), null, 2)}</pre>
{/if}