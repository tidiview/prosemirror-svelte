<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-640.jpg" title="ハンス・メムリンク筆洗礼者ヨハネと福音書記者ヨハネの三連画、開翼時の三連画、メムリンク美術館、ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆洗礼者ヨハネと福音書記者ヨハネの三連画、開翼時の三連画、メムリンク美術館、ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1920.jpg 1920w"></picture><figcaption>開翼時の三連画</figcaption></figure>
<div class="notices yellow">
<p>この三連画は、１４７３~７４年にかけて建てられた<ruby lang="ja">ブルージュ<rp>(</rp><rt lang="fr">Bruges</rt><rp>)</rp></ruby lang="ja">（フラマン語では、<ruby lang="ja">ブルッヘ<rp>(</rp><rt lang="nl">Brugge</rt><rp>)</rp></ruby lang="ja">）の<ruby lang="ja">聖ヨハネ施療院<rp>(</rp><rt lang="nl">Sint-Janshospitaal</rt><rp>)</rp></ruby lang="ja">の教会の新後陣の主祭壇のために考案され、設置された。<br>
枠は《<ruby lang="ja">ハンス・メムリンク作<rp>(</rp><rt lang="la">OPVs&#160;IOHANNIS&#160;MEMLING</rt><rp>)</rp></ruby lang="ja">》との記載文を示しています。それはブルージュに１５世紀の後半に活躍した初期フランドル画家である、<ruby lang="ja">ハンス<rp>(</rp><rt lang="nl">Hans</rt><rp>)</rp>・<rp>(</rp><rt lang="nl"></rt><rp>)</rp>メムリンク<rp>(</rp><rt lang="nl">MEMLING</rt><rp>)</rp></ruby lang="ja">の最初の知られている署名である。また、日付も表示されている：《１４７９年》。<br>
作品が中央パネルと、それに金具によって付けられている右と左にある２翼パネルがそれを取り囲んでいます。<br>
表わされている人物が等身大よりやや小さ目に表わされています。<br>
以下のページでは、より深い理解を助けになるようにさまざまな面を紹介しています。  </p>
<ol>
<li>まず、展示空間での三連画の写真紹介によって、 </li>
<li>それから、象徴されている内容について描写する文書によって、 </li>
<li>最後に、画像の様々な要素に合わせて画家本人が表している宗教的な題材を表すために思われる様々な文書との関係によってです。</li>
</ol>
</div>
<p><br></p>
<h2 id="a-propos-de-cet-article" class="orange">この記事について</h2>
<p>この記事を作文するには、特に<ruby lang="ja">ディルク<rp>(</rp><rt lang="nl">Dirk</rt><rp>)</rp>・<rp>(</rp><rt lang="nl">&#160;</rt><rp>)</rp>ド<rp>(</rp><rt lang="nl">DE</rt><rp>)</rp>・<rp>(</rp><rt lang="nl">&#160;</rt><rp>)</rp>ヴォス<rp>(</rp><rt lang="nl">VOS</rt><rp>)</rp></ruby lang="ja">、<a href="#de-vos-1" id="renvoi-de-vos-1" class="orange">「ハンス・メムリンク」</a>、<a href="#de-vos-2" id="renvoi-de-vos-2" class="orange">「ハンス・メリンク＝作品全集」</a>などの既存の文献に対して、私たちは本当に感謝しています。<br>
しかし、ここでは私たちの目的は作品の解説を生み出すのではなく、しかも<span style="color: #e6a64d;">描写</span>を。その描写によってその作品をよりよく把握出来る要素を提供するのです。それは<span style="color: #e6a64d;">質の良い複写</span> <a href="#note-1" title="note-1" id="renvoi-note-1"><sup style="color:#555;" id="renvoi-note-1">1</sup></a> 、<span style="color: #e6a64d;">作品の主な根源</span>、文献的であれ、画学的であれです。それは、現在では、例えば図書館でも借りれる紙で印刷されている専門的な本ででもよくほのめかしや参照させることによってからしかされていません。<br>
私たちの目的が達成されたといえるのは、読者本人が<span style="color: #e6a64d;">こんなに存在感の大いなる輝きのある関心を引くことに値すると思われる作品をご自分で測ってそれによってその感覚を深めること</span>ができればです。</p>
<p><br></p>
<div class="notices yellow">
<h3 id="table-des-matieres" class="orange">目次</h3>
<ol>
<li><a href="#presentation-photographique" title="展示空間での作品写真の紹介" class="orange">展示空間での作品写真の紹介</a></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:2#description" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:2#description" class="orange">作品の描写</a>
<ul>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:2#couronnement" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:2#couronnement" class="orange">聖母の戴冠</a></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#catherine-d-alexandrie" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#catherine-d-alexandrie" class="orange">アレクサンドリアのカタリナ</a></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#les-deux-jean" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#les-deux-jean" class="orange">二人のヨハネ</a>
<ul><li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#jean-le-baptiste-2" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#jean-le-baptiste-2" class="orange">洗礼者ヨハネ</a></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#jean-l-evangeliste-3" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#jean-l-evangeliste-3" class="orange">福音書記者ヨハネ</a></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean" class="orange">「ヨハネ」という名、施設との繋がり、語源</a></li></ul></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#barbe" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#barbe" class="orange">大殉教者バルバラ</a></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:4#conversation" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:4#conversation" class="orange">聖なる会話</a></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:4#devotion-moderne" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:4#devotion-moderne" class="orange">新しき信心</a></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:4#dispositif-architectural" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:4#dispositif-architectural" class="orange">建築的装置</a></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:5#organisation-du-recit" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:5#organisation-du-recit" class="orange">語り筋の仕組み</a></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:6#legendes" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:6#legendes" class="orange">洗礼者ヨハネと福音書記者ヨハネの諸伝説</a>
<ul><li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:6#legende-de-jean-le-baptiste" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:6#legende-de-jean-le-baptiste" class="orange">洗礼者ヨハネ伝</a></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:10#legende-de-jean-l-evangeliste" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:10#legende-de-jean-l-evangeliste" class="orange">福音書記者ヨハネ伝</a></li></ul></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:15#position-fermee" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:15#position-fermee" class="orange">贈与者たちの紹介、閉翼時の三連画</a></li>
</ul></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:16#mise-en-relation" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:16#mise-en-relation" class="orange">表わされている場面の基にある様々な文書</a>
<ul>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:16#cath-selon-legende" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:16#cath-selon-legende" class="orange">黄金伝説に於いてのアレクサンドリアのカタリナ</a></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:17#barbe-selon-legende" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:17#barbe-selon-legende" class="orange">黄金伝説に於いての大殉教者バルバラ</a></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#jean-selon-legende" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#jean-selon-legende" class="orange">黄金伝説に於いての福音書記者ヨハネ（第９章）</a></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:19#jean-selon-legende-2" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:19#jean-selon-legende-2" class="orange">黄金伝説に於いての福音書記者ヨハネ（第６５章）</a></li>
<li><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse" class="orange">神の王座と天的宮廷の幻影、王座での生きているものと子羊</a></li>
</ul></li>
</ol>
</div>
</div>

<div id="body-inner">
<h2 id="presentation-photographique" class="orange">展示空間での作品の写真的紹介</h2>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、聖ヨハネ施療院の教会の入り口から展示会所の全体景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、聖ヨハネ施療院の教会の入り口から展示会所の全体景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1920.jpg 1920w"></picture><figcaption>聖ヨハネ施療院の教会の入り口から展示会所の全体景観</figcaption></figure>
<p><br></p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、聖ヨハネ施療院の教会の中から展示会所の全体景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、聖ヨハネ施療院の教会の中から展示会所の全体景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1920.jpg 1920w"></picture><figcaption>聖ヨハネ施療院の教会の中から展示会所の全体景観</figcaption></figure>
<p><br></p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、聖ヨハネ施療院の教会の後陣から三連画前の景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、聖ヨハネ施療院の教会の後陣から三連画前の景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1920.jpg 1920w"></picture><figcaption>聖ヨハネ施療院の教会の後陣から三連画前の景観</figcaption></figure>
</div>

<div id="body-inner">
<div class="notices yellow">
<h3 id="de-vos" class="orange">ディルク・ド・ヴォスの本:</h3>
<ul>
<li>フランス語で：
<pre id="de-vos-1">
<table>
<thead>
<tr>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>題名</td>
<td>出版年</td>
<td>ISBN-10</td>
</tr>
<tr>
<td>Hans Memling : l'œuvre complet</td>
<td>1994</td>
<td>2-226-06992-5</td>
</tr>
<tr>
<td>Hans Memling : catalogue</td>
<td>1994</td>
<td>90-5544-028-0</td>
</tr>
</tbody>
</table>
</pre></li>
<li>英語で：
<pre id="de-vos-2">
<table>
<thead>
<tr>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>題名</td>
<td>出版年</td>
<td>ISBN-10</td>
</tr>
<tr>
<td>Hans Memling: The Complete Works</td>
<td>1994</td>
<td>0840936496</td>
</tr>
<tr>
<td>Hans Memling: Catalogue</td>
<td>1994</td>
<td>9055440299</td>
</tr>
</tbody>
</table>
</pre>
<p><a href="#renvoi-de-vos-1" title="renvoi-de-vos-1">↑ このページー</a>　<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:2#renvoi-de-vos-2" title="renvoi-de-vos-2">↑ ページー２</a></p></li>
</ul>
</div>
<div class="notices yellow">
<h3 id="lorentz" class="orange">フィリップ・ロレンッツの本:</h3>
<pre id="lorents-1">
<table>
<thead>
<tr>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>題名</td>
<td>出版年</td>
<td>ISBN-10</td>
</tr>
<tr>
<td>Hans Memling au Louvre (exposition, Musée du Louvre, Salle de la Chapelle, aile Sully, 18 Mai-14 Août 1995)</td>
<td>1995</td>
<td>2-7118-3275-9</td>
</tr>
</tbody>
</table>
</pre>
<p><a href="#renvoi-lorentz-1" title="renvoi-de-vos-1">↑ このページー</a>　<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#renvoi-lorentz-2" title="renvoi-lorentz-2">↑ ページー３</a></p>
</div>
<p><br></p>
<hr>
<p><a href="#renvoi-note-1" title="renvoi note-1" id="note-1">註釈：</a><br>
一般の人々に向けて私たちは公開にしている作品の複製写真は、現在では、私たちが知っている限り、専門家のを除いて、最高のものです。それらの写真が、現在の照明が低強度と黄色のために、私たちから大変な努力を必要としてきました。<br>
<a href="#renvoi-note-1" title="註釈の元へ">↑ 文書に戻る</a></p>
</div>

<!-- Page 2 -->

<div id="body-inner">
				<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-640.jpg" title="《洗礼者ヨハネと福音書記者ヨハネの三連画》、開翼時の三連画の景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《洗礼者ヨハネと福音書記者ヨハネの三連画》、開翼時の三連画の景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1920.jpg 1920w"></picture><figcaption><ruby>開<rt style="color:#555">かい</rt>翼<rt style="color:#555">よく</rt>時<rt style="color:#555">じ</rt></ruby></figcaption></figure>
<p>私たちはまず<span style="color: #e6a64d;">作品が表わそうとしている事を</span>描写しましょう。そのため、<span style="color: #e6a64d;">視線</span>を追います。それは、<span style="color: #e6a64d;">主な場面</span>から始まります。</p>
<h2 id="description" class="orange">作品の描写</h2>
<h3 id="couronnement" class="orange">聖母の戴冠</h3>
<p><span style="color: #e6a64d;">中央の聖母</span>は、綺麗な模様のある上級繊維の前で、赤いベルベットのバルダキンの下に金箔の王座で座しています。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-640.jpg" title="《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの拡大、《聖母と幼子イエス》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの拡大、《聖母と幼子イエス》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1920.jpg 1920w"></picture><figcaption>中央パネルの拡大、《聖母と幼子イエス》</figcaption></figure>
<p>彼女は上空を飛んでいる<span style="color: #e6a64d;">２人の小さな暗い青の天使</span>によって「天国の女王」の冠を戴こうとしています。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-640.jpg" title="《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの拡大、《聖母の冠を持つ二人の天使》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの拡大、《聖母の冠を持つ二人の天使》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1920.jpg 1920w"></picture><figcaption>中央パネルの拡大、《聖母の冠を持つ二人の天使》</figcaption></figure>
<p>彼女の膝に<span style="color: #e6a64d;">幼子イエス</span>は、座ったままで、左手でリンゴを掴んでいて、右手では、聖母の左下前方に居る<span style="color: #e6a64d;">女の人</span>の<span style="color: #e6a64d;">薬指</span>に、金の指輪を、聖母の下と左で、はめようとしています。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-640.jpg" title="《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの拡大、《幼子イエス》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの拡大、《幼子イエス》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1920.jpg 1920w"></picture><figcaption>中央パネルの拡大、《幼子イエス》</figcaption></figure>
</div>

<!-- Page 3 -->

<div id="body-inner">
				<p>殉教の道具である<span style="color: #e6a64d;">剣</span>と<span style="color: #e6a64d;">壊れた車輪</span>があるので彼女は、<a href="https://ja.wikipedia.org/wiki/アレクサンドリアのカタリナ" title="https://ja.wikipedia.org/wiki/アレクサンドリアのカタリナ" class="orange">アレクサンドリアのカタリナ</a>です。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《アレクサンドリアのカタリナ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《アレクサンドリアのカタリナ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.jpg 1920w"></picture><figcaption>アレクサンドリアのカタリナ</figcaption></figure>
<h3 id="catherine-d-alexandrie" class="orange">アレクサンドリアのカタリナ</h3>
<p><a href="https://ja.wikipedia.org/wiki/アレクサンドリアのカタリナ" title="https://ja.wikipedia.org/wiki/アレクサンドリアのカタリナ" id="catherine-d-alexandrie-2" class="orange">アレクサンドリアのカタリナ</a>は１３世紀末期からとても人気のある聖人でありました。彼女の伝説は<a href="https://ja.wikipedia.org/wiki/ヤコブス・デ・ウォラギネ" title="https://ja.wikipedia.org/wiki/ヤコブス・デ・ウォラギネ" class="orange">ヤコブス・デ・ウォラギネ</a>が<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:16#cath-selon-legende" title="https://francois-vidit.com/docs/ja/saint-jean/page:6#cath-selon-legende" class="orange">『聖カタリナ』</a>という<a href="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" title="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" class="orange">『黄金伝説』</a>の１６８章に記述さられていて、とても面白い。<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:16#cath-selon-legende" title="https://francois-vidit.com/docs/ja/saint-jean/page:6#cath-selon-legende" class="orange">ここ</a>に記載している。<br>
メムリンクがこの文書に基づいて描いたことは非常に確実らしいです。
現代の歴史家たちはアレクサンドリアのカタリナが確実に存在したか <sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">1</a></sup> 疑っていますが、その崇拝が１９７０年にカトリック教会の一般ローマ暦 <sup id="fnref1:2"><a href="#fn:2" class="footnote-ref">2</a></sup> から取り除かれたのに、伝説において、カタリナはアレクサンドリアに３世紀又は４世紀に生きた、<span style="color: #e6a64d;">並外れた教育</span>と<span style="color: #e6a64d;">とても素晴らしい美しさ</span>を持った、の<span style="color: #e6a64d;">上流階級貴族の一人</span>とされています。<br>
彼女はキリスト教徒たちを強要して公に信仰を棄教させる当時のローマ帝国大帝<a href="https://ja.wikipedia.org/wiki/マクセンティウス" title="https://ja.wikipedia.org/wiki/マクセンティウス" class="orange">マクセンティウス</a>に挑戦させます。
マクセンティウスがこの優秀な女の人に面していることに驚くが、挑戦に応じて、たくさんの新たな展開のある長い精神的な対立を経て破られ、結婚することを彼女に勧めます。
カタリナは、信仰の名によって拒否し、殉教する方を選びます。
処刑の際では、天からイエス自身の声が聞こえてきたのであろう、彼女にいうために：
<span style="color: #e6a64d;">「親愛なる人よ、私の美女、来てください！」</span></p>
<p>聖カタリナが表わされていることから、この三連画は時には<span style="color: #e6a64d;">《聖カタリナの神秘的結婚》</span>とも称されたことがあります。
実は、<span style="color: #e6a64d;">主人公</span>は<span style="color: #e6a64d;">二人の男の人</span>であります。彼たちの伝説が数多くのいくつかの場面で語られていることから。彼たちは<span style="color: #e6a64d;">双子</span>のように聖母の右と左の両方の奥の方に立っています。</p>
<h3 id="les-deux-jean" class="orange">二人のヨハネ</h3>
<h4 id="jean-le-baptiste-2" class="orange">洗礼者ヨハネ</h4>
<p>奥の方では、左に、<span style="color: #e6a64d;">白い色の子羊</span>がいるので、素晴らしい<span style="color: #e6a64d;">紫色のチュニック</span>を着る<span style="color: #e6a64d;">男の人</span>を<a href="https://ja.wikipedia.org/wiki/洗礼者ヨハネ" title="https://ja.wikipedia.org/wiki/洗礼者ヨハネ" id="jean-le-baptiste" class="orange">洗礼者ヨハネ</a>として見なすことができます。
それは彼が弟子たちにかけた<span style="color: #e6a64d;">現世でのイエスの到来</span>を<span style="color: #e6a64d;">告げる</span>言葉、<span style="color: #e6a64d;">「<ruby style="color:#e6a64d;">これは神の子羊<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">エッチェ・アニウス・デイ</rt><rp>)</rp></ruby>」</span><span style="color: #999;">（ヨハネ、１・２９）</span> <sup id="fnref1:4"><a href="#fn:4" class="footnote-ref">3</a></sup> を思い出させてくれる。
そして、ヨハネが右腕で<span style="color: #e6a64d;">幼子イエス</span>を指し示しています。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1920.jpg 1920w"></picture><figcaption>洗礼者ヨハネ</figcaption></figure>
<p>ここでは、子羊が新しい、キリスト教の独特なシンボルです。<br>
旧ヘブライ信仰では神を喜ばすには動物の<ruby>生<rp>(</rp><rt>い</rt><rp>)</rp>け<rp>(</rp><rt>&#160;</rt><rp>)</rp>贄<rp>(</rp><rt>にえ</rt><rp>)</rp></ruby>をささげなければならなかったこととは逆に、キリスト教は神に気の入る唯一の本当の生け贄が信者がイエスを模範にしてイザヤ預言者のこの言葉<span style="color: #e6a64d;">
「屠り場に引かれる<span style="text-decoration: underline;">小羊</span>のように毛を刈る者の前に物を言わない羊のように彼は口を開かなかった。」</span><span style="color: #999;">（イザヤ、５３・７）</span>に基づきながら、自分から神に自分自身を生け贄とささげるのであることを断言しています。</p>
<p>その紫色のチュニックの下に、<span style="color: #e6a64d;">もう一つのチュニック</span>、薄い栗色のが、文書<span style="color: #999;">（マルコ、１・６）</span>が<a href="https://ja.wikipedia.org/wiki/エリア" title="https://ja.wikipedia.org/wiki/エリア" id="elie" class="orange">エリア</a>預言者の毛皮衣を真似て<span style="color: #999;">（王２、１・８）</span>、ラクダの毛であることは明らかです。<br>
この同じ毛皮衣がまた<a href="https://ja.wikipedia.org/wiki/ヤコブ_(旧約聖書)" title="https://ja.wikipedia.org/wiki/ヤコブ_(旧約聖書)" id="jacob" class="orange">ヤコブ</a>が、<a href="https://ja.wikipedia.org/wiki/リベカ" title="https://ja.wikipedia.org/wiki/リベカ" id="rebecca" class="orange">母リベカ</a>の指示で、とても毛深いの兄<a href="https://ja.wikipedia.org/wiki/エサウ" title="https://ja.wikipedia.org/wiki/エサウ" id="esau" class="orange">エサウ</a>に、眼の見えない父である<a href="https://ja.wikipedia.org/wiki/イサク" title="https://ja.wikipedia.org/wiki/イサク" id="isaac" class="orange">イサク</a>を毛皮の衣を着ながら思わせるようにした創世記の一つの話し<span style="color: #999;">（創世記　２７・１~４０）</span>にも基づきます。彼の術策が不正に祝福されるとそれでエサウ代わりに唯一の相続人となることを可能にします。このチュニックがまた動物を制御の<ruby>印<rp>(</rp><rt>しるし</rt><rp>)</rp></ruby>となっていて、洗礼者ヨハネの場合、ラクダが砂漠を横断することは、修行により動物を制御することで可能になるという意味になります。</p>
<p>他方右では、<span style="color: #e6a64d;">もう一人</span>が立っていて、神父のように<span style="color: #e6a64d;">赤い色</span>の服を着ている<span style="color: #e6a64d;">男の人</span>が右手から十字架の描き、中に<span style="color: #e6a64d;">蛇</span>のいる<span style="color: #e6a64d;">杯</span>を上にしています。これは<a href="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" title="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" id="jean-l-evangeliste-4" class="orange">福音書記者ヨハネ</a>である。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>福音書記者ヨハネ</figcaption></figure>
<h4 id="jean-l-evangeliste-3" class="orange">福音書記者ヨハネ</h4>
<p><a href="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" title="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" id="jean-l-evangeliste" class="orange">福音書記者ヨハネ</a>であることが<a href="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" title="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" id="legende-doree-2" class="orange">「黄金伝説」</a>の<span style="color: #999;">第９章</span>の巻から分かります。その文書を<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" id="renvoi-aristodeme" class="orange">ここ</a>に記載しています。<br>
そこでヨハネが<span style="color: #e6a64d;">毒の入った盃</span>を正式に<span style="color: #e6a64d;">飲む</span>ことで、公に<ruby>挑<rp>(</rp><rt>いど</rt><rp>)</rp></ruby>むアジア<span style="color: #999;">（おそらくエフェソス）</span>にあるディアナ社大祭官の<span style="color: #e6a64d;">アリストデムス</span>と対立します。<br>
彼をメムリンクが表しているように、<span style="color: #e6a64d;">十字の描いて</span>、盃を飲みますが毒が彼に何の悪をさせません。<br>
この<span style="color: #e6a64d;">蛇</span>が同時にイエスが<a href="https://ja.wikipedia.org/wiki/ニコデモ" title="https://ja.wikipedia.org/wiki/ニコデモ" id="nicodeme" class="orange">ニコデモ</a>を思い起こすこともしている。<span style="color: #e6a64d;">「モーセが荒れ野で蛇を上げたように、人の子も上げられねばならない。それは、信じる者が皆、人の子によって永遠の命を得るためである」</span><span style="color: #999;">（ヨハネ３・１４）</span>。</p>
<h4 id="le-nom-de-jean" class="orange">「ヨハネ」という名、施設との繋がり、その語源</h4>
<p>三連画の内側の全面に二人のヨハネの伝説を語る数多くの詳細な描写により、彼らが<span style="color: #e6a64d;">主人公</span>に見えるようになっています。
二人とも<span style="color: #e6a64d;">「ヨハネ」</span>と呼ばれているのも<span style="color: #e6a64d;">出資施設</span>である「<span style="color: #e6a64d;">ブルージュの聖<span style="text-decoration: underline;">ヨハネ</span>施療院</span>」に由来しており、<span style="color: #e6a64d;">「洗礼者ヨハネと福音書記者ヨハネの三連画」</span>である現代の公の呼称をも裏付けています。</p>
<p>「ヨハネ」という名前の語源がヘブライ語の<span style="color: #e6a64d;">「</span><ruby lang="ja" style="color:#e6a64d;">ヨ<rp>(</rp><rt lang="he" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">יו</rt><rp>)</rp>ハ<rp>(</rp><rt lang="he" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">ח</rt><rp>)</rp>ナン<rp>(</rp><rt lang="he" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">נן</rt><rp>)</rp></ruby><span style="color: #e6a64d;">」</span>から来ています。発音は、
<div style="text-align: center;"><audio controls="1" title="prononciation de Yokhanan en hébreu" alt="ここ"><source src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/prononciation-yokhanan.mp3">Your browser does not support the audio tag.</audio></div><br>
であって、文字通りに<span style="color: #e6a64d;">「</span><ruby lang="ja" style="color:#e6a64d;">神<rp>(</rp><rt lang="he" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">ヨ</rt><rp>)</rp></ruby><span style="color: #e6a64d;">」</span>が<span style="color: #e6a64d;">「</span><ruby lang="ja" style="color:#e6a64d;">恵<rp>(</rp><rt lang="he" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">ハナン</rt><rp>)</rp></ruby><span style="color: #e6a64d;">」</span>か<span style="color: #e6a64d;">「</span><ruby lang="ja" style="color:#e6a64d;">慈悲<rp>(</rp><rt lang="he" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">ハナン</rt><rp>)</rp></ruby><span style="color: #e6a64d;">」</span>。
同時にヘブライ語では、「神」は「存在しているもの」という意味をも持っているから、<span style="color: #e6a64d;">「恵」</span>か<span style="color: #e6a64d;">「慈悲」</span>が<span style="color: #e6a64d;">「宿るもの」</span>という意味になります。<br>
<span style="color: #e6a64d;">この名前</span>がヘブライの民の歴史のあまり知られていない他の人物の名前として知られているとしても、とても<span style="color: #e6a64d;">人気</span>と<span style="color: #e6a64d;">なった</span>のはキリスト教が芽生えた後、<span style="color: #e6a64d;">キリスト教界</span>での二人が果したとても大切な役割からです。これらの役割をこれから細かく語ります。</p>
<p>聖母の右手前方には、１５世紀ではブルージュしか制作していなかった<span style="color: #e6a64d;">緑色の羊毛の素晴らしいチュニック</span>を着る<span style="color: #e6a64d;">もう一人</span>の女の人が書物を<span style="color: #e6a64d;">読んでいる</span>。
彼女の存在が、反対側に、前にある<a href="#catherine-d-alexandrie" class="orange">アレクサンドリアのカタリナ</a>のに対応しています。
彼女の後ろにある<span style="color: #e6a64d;">白い色の石での<ruby style="color:#e6a64d;">聖<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">せい</rt><rp>)</rp>櫃<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">ひつ</rt><rp>)</rp></ruby>塔</span>が、彼女が<a href="https://ja.wikipedia.org/wiki/聖バルバラ" title="https://ja.wikipedia.org/wiki/聖バルバラ" id="barbe-la-grande-martyre" class="orange">大殉教者バルバラ</a>であることを示しています <sup id="fnref1:3"><a href="#fn:3" class="footnote-ref">4</a></sup> 。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《大殉教者バルバラ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《大殉教者バルバラ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.jpg 1920w"></picture><figcaption>大殉教者バルバラ</figcaption></figure>
<h3 id="barbe" class="orange">大殉教者バルバラ</h3>
<p><a href="#catherine-d-alexandrie" class="orange">アレクサンドリアのカタリナ</a>と同じように、現代の歴史家たちが実在したことを疑うと、彼女の名前もカトリック教会の一般ローマ暦 <sup id="fnref2:2"><a href="#fn:2" class="footnote-ref">2</a></sup> から取り除かれました。メムリンクが彼女を描くために基にした文書も<a href="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" title="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" id="legende-doree-2" class="orange">黄金伝説</a>に含まれていませんが、他の文書と同様に、後で追加されることなりました。
私たちは全文を<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:17#prout" title="https://francois-vidit.com/docs/ja/saint-jean/page:7#barb-selon-legende" class="orange">ここで</a>記載します。<br>
その伝説によりますと、バルバラは旧<a href="https://ja.wikipedia.org/wiki/ビテュニア" title="https://ja.wikipedia.org/wiki/ビテュニア" id="bithynie" class="orange">ビテュニア</a>の首都<a href="https://ja.wikipedia.org/wiki/イズミット" title="https://ja.wikipedia.org/wiki/イズミット" id="nicomedie" class="orange">二コメディア</a> <sup id="fnref1:5"><a href="#fn:5" class="footnote-ref">5</a></sup> に住んでいました。
欠点としてバルバラは美しいこと。。、こんなに美しいことから、とても若いころに、<span style="color: #e6a64d;">彼女のお父さんが彼女を塔に閉じ込めさせましたの</span>！<br>
文書だとバルバラがそこから<span style="color: #e6a64d;">「地上的現世の拙さ」</span>を感じて、<span style="color: #e6a64d;">「天上的<ruby style="color:#e6a64d;">妙<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">たえ</rt><rp>)</rp></ruby>なるものごと」</span>に気にし始めるとなっています。
当時には禁じられているのに、彼女が少しづつローマの神々から離れて、密かに<a href="https://ja.wikipedia.org/wiki/アレクサンドリア" title="https://ja.wikipedia.org/wiki/アレクサンドリア" id="alexandrie" class="orange">アレクサンドリア</a>の一有名のキリスト教徒<a href="https://ja.wikipedia.org/wiki/オリゲネス" title="https://ja.wikipedia.org/wiki/オリゲネス" class="orange">オリゲネス</a>に手紙を書きます。
彼は彼女に返答し、芽生えている信仰を強めて、彼女を訪れて、こっそりと<span style="color: #e6a64d;">洗礼</span>を授けます。<br>
その後、神々を信じることを公に拒否したことにより、<span style="color: #e6a64d;">密告された</span>ことで、彼女は殉教します。
その時、イエスの声が天から聞こえて来たのであろう：
<span style="color: #e6a64d;">「親愛なる人よ、天にある私の父の家に休みたまえ」</span>。<br>
自分の父が頭を刎ねたのです。 </p>
<p>塔の組み合わせ隙間を通して、<span style="color: #e6a64d;">ガラス製の柱</span>が見れます。その中に薄く一個の<span style="color: #e6a64d;">聖体</span>があります。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-840.webp 840w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《塔の組み合わせ模様を通して、ガラス製の柱が覗けられて、その中に薄く一個の聖体が表されている》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《塔の組み合わせ模様を通して、ガラス製の柱が覗けられて、その中に薄く一個の聖体が表されている》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-840.jpg 840w"></picture><figcaption>塔の組み合わせ模様を通して、ガラス製の柱が覗けられて、その中に薄く一個の聖体が表されている</figcaption></figure>
<p><span style="color: #e6a64d;">聖体</span>は聖人としての表像の一つでもある。パネルの他の部分との<span style="color: #e6a64d;">「聖なる会話」</span>という形を示している繋がりの一つでもある。</p>
</div>

<div id="body-inner">
<div class="footnotes">
<hr />
<ol>
<li id="fn:1">
<p>ここでは私たちはウィキペディアのフランス語版（日付：２０１８年８月１５日）の「アレクサンドリアのカタリナ」を参照にしています。それは： </p>
<ul>
<li>Gustave Bardy: Catherine d’Alexandrie. In: Dictionnaire d’histoire et de géographie ecclésiastiques, vol 11, Paris 1949, pp 1503–1505, ici: 1504.</li>
<li>Christine Walsh: The Cult of St Katherine of Alexandria in Early Medieval Europe, Aldershot 2007, p. 3–26;  </li>
<li>Michael Deakin: Hypatia of Alexandria, Mathematician and Martyr, Amherst (New York) 2007, p. 135, 202;  </li>
<li>Maria Dzielska: Hypatia of Alexandria, Cambridge (Massachusetts) 1995, p. 21;  </li>
<li>Christian Lacombrade: Hypatia. In: Reallexikon für Antike und Christentum, vol 16, Stuttgart 1994, pp 956–967, ici: 966;</li>
</ul>
<p><a href="#fnref1:1" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
<li id="fn:2">
<p>ここでは私たちはウィキペディアのフランス語版（日付：２０１８年８月１５日）の「アレクサンドリアのカタリナ」を参照にしています。それは：
「何人かの聖人が人気を博しているかもしれません。彼らの名前の周りに発生した伝説のために、例えば聖キリストフォルス、聖バルバラ、アレクサンドリアの聖カタリナ、聖フィロメナなどのように、彼らが存在したことをでも保証できない。一般ローマ暦から削除されました。キリスト教徒たちは、真実にしか祈りに招かれない」
１９６９年５月９日、ローマで行われた暦の改革を準備した研究グループのパリカトリック学院の典礼学課教授のピエール・ジョネル修道長の新しいローマ暦を紹介する会議による。 &#160;<a href="#fnref1:2" rev="footnote" class="footnote-backref">&#8617;</a> <a href="#fnref2:2" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
<li id="fn:4">
<p>ラテン語では「Ecce&#160;Agnus&#160;Dei」。&#160;<a href="#fnref1:4" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
<li id="fn:3">
<p>大殉教者バルバラはまた「聖バルバラ」として知られている。&#160;<a href="#fnref1:3" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
<li id="fn:5">
<p>現在のトルコの北西部に位置づけられていて黒海の岸にある古代都市。現代の<a href="https://ja.wikipedia.org/wiki/イズミット" title="https://ja.wikipedia.org/wiki/イズミット">イズミット</a>。&#160;<a href="#fnref1:5" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
</ol>
</div>
</div>

<!-- Page 4 -->

<div id="body-inner">
				<h3 id="conversation" class="orange">聖なる会話</h3>
<p><a href="https://ja.wikipedia.org/wiki/聖母マリア" title="https://ja.wikipedia.org/wiki/聖母マリア" id="marie-mere-de-jesus" class="orange">マリア</a>の戴冠式には、<a href="#catherine-d-alexandrie" title="アレクサンドリアのカタリナ" class="orange">カタリナ</a>と<a href="#barbe" class="orange">バルバラ</a>、<a href="#jean-le-baptiste-2" title="洗礼者ヨハネ" id="jean-le-baptiste-3" class="orange">洗礼者ヨハネ</a>と<a href="#jean-l-evangeliste-3" title="福音書記者ヨハネ" id="jean-l-evangeliste-4" class="orange">福音書記者ヨハネ</a>のいわゆる<span style="color: #e6a64d;">「</span><ruby style="color:#e6a64d;">聖なる会話<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;">サクラ・コンヴェルサツィオーネ</rt><rp>)</rp></ruby><span style="color: #e6a64d;">」</span> <sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">1</a></sup> 聖母の周りの<span style="color: #e6a64d;">聖人の集会</span>に２人ずつ参加しています。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの描写、聖母の戴冠式、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの描写、聖母の戴冠式、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1920.jpg 1920w"></picture><figcaption>中央パネルの描写、聖なる会話</figcaption></figure>
<p>この<span style="color: #e6a64d;"><ruby style="color:#e6a64d;">交<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">まじ</rt><rp>)</rp></ruby>わり</span>の<ruby>趣<rp>(</rp><rt>おもむき</rt><rp>)</rp></ruby>が聖母の左手の小さな<span style="color: #e6a64d;">オルガン</span>を弾く座った<span style="color: #e6a64d;">侍者</span>と左手の彼女に<span style="color: #e6a64d;">本</span>を差し出す<ruby>跪<rp>(</rp><rt>ひざまず</rt><rp>)</rp></ruby>いた<span style="color: #e6a64d;">もう一人</span>の存在によってさらに強くなっている。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの拡大、《２人の侍者たち》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの拡大、《２人の侍者たち》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1920.jpg 1920w"></picture><figcaption>中央パネルの拡大、２人の侍者たち</figcaption></figure>
<p>幅での位置関係の左右対称と単純さが三連画の形とよく合います。<br>
高さと奥行きが<span style="color: #e6a64d;">男女の別</span>により配置されています。<span style="color: #e6a64d;">前</span>と下の方では、<span style="color: #e6a64d;">女の人２人</span>で、<span style="color: #e6a64d;">後ろ</span>と上の方では、<span style="color: #e6a64d;">男の人２人</span>です。<br>
奥行きと高さでの<span style="color: #e6a64d;">計り知れなさ</span>と<span style="color: #e6a64d;">神秘</span>に、横での位置の<span style="color: #e6a64d;">左右対称</span>と<span style="color: #e6a64d;">単純さ</span>が対応しています。<br>
表わされている人物が<span style="color: #e6a64d;">あらゆる年齢</span>で<span style="color: #e6a64d;">同じ家族</span>のように見えます。
生まれたばかりの赤ちゃん、小さな子供、子供、少年、若い男の人、女の人、お母さま、男の人、年のある男と女の人。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《左から右へ、顔立ちの類似性、表されている年齢の多様性》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《左から右へ、顔立ちの類似性、表されている年齢の多様性》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、左から右へ、顔立ちの類似性、表されている年齢の多様性</figcaption></figure>
<p>顔立ちの<span style="color: #e6a64d;">類似性</span>と年齢の<span style="color: #e6a64d;">多様性</span>が全体を<span style="color: #e6a64d;">統一</span>させています。<br>
私たちはこの<span style="color: #e6a64d;">均衡</span>がメムリンクが生きた社会の注目すべき特性であると当時の、歴史家たちが<span style="color: #e6a64d;">「</span><a href="https://fr.wikipedia.org/wiki/Devotio_moderna" title="https://fr.wikipedia.org/wiki/Devotio_moderna" id="devotio-moderna" class="orange"><ruby>新しき信心<rp>(</rp><rt>デヴォティオ・モデルナ</rt><rp>)</rp></ruby></a><span style="color: #e6a64d;">」</span> <sup id="fnref1:2"><a href="#fn:2" class="footnote-ref">2</a></sup> と呼ぶキリスト教信仰のとても大事な改革運動をよりよく把握するために無視することはできないと考えています。<br>
<span style="color: #999;">（「新しき信心」の歴史的細かい紹介は<a href="#note-devotion-moderne" title="「新しき信心」運動を紹介する註釈" id="renvoi-devotion-moderne" class="orange">ここ</a>で見付かることが出来ます）</span></p>
<h3 id="devotion-moderne" class="orange">新しき信心</h3>
<p>フランドルで、メムリンクの時代では、信仰修練書として、<span style="color: #e6a64d;">「</span><a href="https://fr.wikipedia.org/wiki/Gérard_Groote" title="https://fr.wikipedia.org/wiki/Gérard_Groote" id="imitation-de-jesus-christ" class="orange"><ruby>キリストに倣いて<rp>(</rp><rt>イミタティオ・クリスティ</rt><rp>)</rp></ruby></a><span style="color: #e6a64d;">」</span> <sup id="fnref1:4"><a href="#fn:4" class="footnote-ref">3</a></sup> は大変なベストセラーとなります。<br>
これはその抜粋です：  </p>
<div class="notices yellow">
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="#e6a64d" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"/></svg></span>
人はこの世の事柄から自分を引き上げているのは、<span style="color: #9c6416;">単純さ</span>と<span style="color: #9c6416;">清さ</span>という二つの羽によってです。<br>
単純さは人の<span style="color: #9c6416;">意図</span>に、<span style="color: #9c6416;">清さ</span>は人に対する情にあるべきです。<br>
単純さは神を<span style="color: #9c6416;">求め</span>、清さがそれを<span style="color: #9c6416;">見出し</span>て<span style="color: #9c6416;">味わう</span>のです。<br>
どんな良い行為でもあなたたちには成し難くなりません。内面ではあらゆる乱された感情から自由があったらば、<br>
あなたたちが神が望むことと、隣人に役立つことのみを求めるなら、あなたたちは<span style="color: #9c6416;">内面の自由</span>を楽しむことでしょう。<br>
従って、あなたたちの心が正しいのであれば、どんな被造物でもあなたたちにとっての<span style="color: #9c6416;">命の鏡</span>と<span style="color: #9c6416;">聖なる教えの満ちた書物</span>となるでしょう。<br>
こんなに小さくて、こんなに卑劣な、<span style="color: #9c6416;">神の善良さの現象</span>を少しでも現さないほどの被造物は存在しないからです。<br>
もしあなたたちが内面に十分な<span style="color: #9c6416;">清純さ</span>と<span style="color: #9c6416;">純粋さ</span>を持っていれば、あなたたちは全てを<span style="color: #9c6416;">さえぎるものなしに</span>見ることが出来るでしょう。<br>
清い心は天国と地獄にまで入り込む。<br>
人は外にあるものごとを自分自身の内側での存在において判断するのです。<br>
もしこの世に喜びが存在するなら、それを持つのは心の清いの持ち主にある。<br>
従って、どこかに苦悩や苦痛があるのなら、気がとがめるそのことに知られているのです。<br>
火のなかに投げ込まれた鉄がその錆を失ってとても白く輝くように、こうして 遠慮せず自分を神に捧げる人は、悩ましげをはぎとられ新しい人へと変えられます。
<span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="#e6a64d" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"/></svg></span></p>
</div>
<p>メムリンクの作品では、聖なる会話をこの参考にしている。観賞者たちに対して、<span style="color: #e6a64d;">「命の鏡」</span>として。片方では、病人たちが表わされている人物と<span style="color: #e6a64d;">「会話」</span>していて、もう一つの方では、１４７９年のブルージュ市民として、今ここに<span style="color: #e6a64d;">「現れる」</span>。<br>
作品自体がまた<span style="color: #e6a64d;">「聖なる教えの満ちた書物」</span>として働いている。<span style="color: #e6a64d;">霊的単純さと明白さ</span>が驚異的に絶え間なく<span style="color: #e6a64d;">物質的な精巧さと豪奢さ</span>を<span style="color: #e6a64d;">作り出している</span>。  </p>
<p><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:1#de-vos" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:1#de-vos" id="renvoi-de-vos-2" class="orange"><ruby lang="ja">ディルク<rp>(</rp><rt lang="nl">Dirk</rt><rp>)</rp>・<rp>(</rp><rt lang="nl">&#160;</rt><rp>)</rp>ド<rp>(</rp><rt lang="nl">DE</rt><rp>)</rp>・<rp>(</rp><rt lang="nl">&#160;</rt><rp>)</rp>ヴォス<rp>(</rp><rt lang="nl">VOS</rt><rp>)</rp></ruby lang="ja"></a>が言及すると、<span style="color: #e6a64d;">「黄金の<ruby style="color:#e6a64d;">錦<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;">にしき</rt><rp>)</rp></ruby>、絹とアーミンを着ている処女たち、金箔の冠と珍しい宝石各種の世界」</span>、そこに、<span style="color: #e6a64d;">「深い落ち着きの沁みった雰囲気」</span>で<span style="color: #e6a64d;">「幼子イエスが病人たちに合図をする」</span>。
実際、単純さと明白さが制限を知らないで、神聖性へと導くのです。</p>
<h3 id="dispositif-architectural" class="orange">建築的装置</h3>
<p>メムリンクが自分を導かさせているのは異論の余地のなく彼が聖ドナティウス大聖堂に行って魅了されたことが知られている、１４３６年に描かれた<a href="https://ja.wikipedia.org/wiki/ヤン・ファン・エイク" title="https://ja.wikipedia.org/wiki/ヤン・ファン・エイク" id="jan-van-eyck" class="orange">ヤン・ファン・エイク</a>筆の<a href="https://ja.wikipedia.org/wiki/ファン・デル・パーレの聖母子" title="https://ja.wikipedia.org/wiki/ファン・デル・パーレの聖母子" id="van-der-paele" class="orange">「<ruby lang="ja">ファン・デル・パーレの聖母子<rp>(</rp><rt lang="nl">Madonna&#160;met&#160;kanunnik&#160;Joris&#160;van&#160;der&#160;Paele</rt><rp>)</rp></ruby lang="ja">」</a>です。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-640.jpg" title="ヤン・ファン・エイク、《ファン・デル・パーレの聖母子》、グルーニング美術館、ブルージュ（ブルッヘ）" alt="ヤン・ファン・エイク、《ファン・デル・パーレの聖母子》、グルーニング美術館、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1920.jpg 1920w"></picture><figcaption>ヤン・ファン・エイク、<ruby lang="ja">ファン・デル・パーレの聖母子<rp>(</rp><rt lang="nl" style="color:#999;font-size: 70%;letter-spacing: 2px;">Madonna met kanunnik Joris van der Paele</rt><rp>)</rp></ruby>、グルーニング美術館、ブルージュ</figcaption></figure>
<p>他の数の多くの作品と同じように、メムリンクが背景から<span style="color: #e6a64d;">壁</span>、<span style="color: #e6a64d;">窓</span>を取り除いて<span style="color: #e6a64d;">外への視覚を連続的に</span>させている。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの描写、聖母の戴冠式、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの描写、聖母の戴冠式、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1920.jpg 1920w"></picture><figcaption>三連画の中央パネルの描写</figcaption></figure>
<p>赤と茶色を混ぜた６本の円柱がタイル上の半円に配置され、その外側で２つ目の暗いグレー色の付け柱が２重の半円形に並んでいる。
その底面が地面に多角形を示す舗装の境界線で結ばれている。<br>
円柱の間の縦々の隙間は、<span style="color: #e6a64d;">視覚的に連続的な跡蹟と建物のある</span>、無限な、地平線ともなっている遠景に開放である景色と繋がっている。</p>
</div>

<div id="body-inner">
<h3>註釈</h3>
<h4 id="note-devotion-moderne">新しき信心</h4>
<div class="notices yellow">
<p>現在のネーデルラントの北部で誕生して、１４世紀初頭から１５世紀初頭にかけてユトレヒト周辺で新しき信心は、<a href="https://fr.wikipedia.org/wiki/Gérard_Groote" title="https://fr.wikipedia.org/wiki/Gérard_Groote" id="gerard-groote" class="orange"><ruby lang="ja">ヘルート<rp>(</rp><rt lang="nl">Geert</rt><rp>)</rp>・<rp>(</rp><rt lang="nl">&#160;</rt><rp>)</rp>フローテ<rp>(</rp><rt lang="nl">Groote</rt><rp>)</rp></ruby lang="ja"></a>という男性により始められました。<br>
彼は当時の敬虔信仰を厳し過ぎると現世から遠くなると批判します。
それに対して、彼は、信者にキリストを自分の心の一奥底に居るようにと導きます。
彼によると、このキリストの存在は単純さを生み出すことと使命している。
従って信者は純粋に、信仰が自分の心の中で奨励する美徳に値する行動を為すことができる。</p>
<hr>
<ul>
<li><a href="#renvoi-devotion-moderne" title="「新しき信心」運動の送り返し">「歴史的細かい紹介を註釈に見付かることが出来ますに」 ↑ 戻る ↑</a>」</li>
</ul>
</div>
<p><br></p>
<div class="footnotes">
<hr />
<ol>
<li id="fn:1">
<p>イタリア語では「Sacra&#160;conversazione」。&#160;<a href="#fnref1:1" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
<li id="fn:2">
<p>ラテン語では「Devotio&#160;moderna」。&#160;<a href="#fnref1:2" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
<li id="fn:4">
<p>ラテン語では「Imitatio&#160;Christi」。『キリストに<ruby>倣<rp>(</rp><rt>なら</rt><rp>)</rp></ruby>いて』は、修道士であった<a href="https://ja.wikipedia.org/wiki/トマス・ア・ケンピス" title="https://ja.wikipedia.org/wiki/トマス・ア・ケンピス">トマス・ア・ケンピス</a>によって書かれた本であって、１４１８年ごろにラテン語で出版された。<br>
「第２の福音書」「中世の最高の信心書」とも言われ、聖書に次いでカトリックのキリスト教徒の霊的修練の書として識字階級に広く読まれ、親しまれている。 日本でも１６世紀後半にキリシタン版の『<ruby>世のはかなさ<rp>(</rp><rt>コンテムツス・ムンヂ</rt><rp>)</rp></ruby>』として翻訳され、刊行された以来、「キリストのまねび」「イミタティオ-クリスティ」など多種の訳がある。&#160;<a href="#fnref1:4" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
</ol>
</div>
</div>

<!-- Page 5 -->

<div id="body-inner">
				<h3 id="organisation-du-recit" class="orange">語りの仕組み</h3>
<p>語りが洗礼者ヨハネと福音書記者ヨハネの<span style="color: #e6a64d;">２つの伝説</span>と聖ヨハネ施療院に属するブルージュの<span style="color: #e6a64d;">クレーン広場</span>を表しているいくつかの<span style="color: #e6a64d;">小さな場面</span>を中心に仕組みられている。<br>
２つの伝説が空間的に<span style="color: #e6a64d;">円柱の柱頭</span>ぐらいにある各聖人に上に位置づけられている<span style="color: #e6a64d;">いくつかの刻まれた場面</span>で始まっている。  </p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《左から右へ、４つの柱頭》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《左から右へ、４つの柱頭》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、左から右へ：４つの柱頭</figcaption></figure>
<p>数多くの他のメムリンクの作品に見出されるこの構成の組み方が彩画付き写本の細密画のレイアウト技術を継承する <sup id="fnref1:6"><a href="#fn:6" class="footnote-ref">1</a></sup> 。いくつかの場面がとても高く位置づけられている地平線まで段状に積み重ねるように配置されている。</p>
<p>それぞれの<span style="color: #e6a64d;">小さな場面</span>が遠景でそれぞれの円柱によって<span style="color: #e6a64d;">いくつかのフレーミングの枠内に</span>位置付けられている。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《遠景への開口部》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《遠景への開口部》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、遠景への開口部<br>左に、洗礼者ヨハネの、右に、福音書記者ヨハネの伝説の諸場面</figcaption></figure>
<p>２伝説の語りがそこから各々の２枚の翼パネルの内面にと続きます。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、２枚の翼パネルの内面の景観、《左に、前景の左にヘロデ王の命令で斬首された洗礼者ヨハネ、右に、パトモス島での福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、２枚の翼パネルの内面の景観、《左に、前景の左にヘロデ王の命令で斬首された洗礼者ヨハネ、右に、パトモス島での福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1920.jpg 1920w"></picture><figcaption>２枚の翼パネルの内面の景観：左に、前景の左にヘロデ王の命令で斬首された洗礼者ヨハネ、右に、パトモス島での福音書記者ヨハネ</figcaption></figure>
<p>各の翼パネルに、ある一話しが<span style="color: #e6a64d;">前景に主な場面</span>が語りで遠景にいくつかの<span style="color: #e6a64d;">小さな場面</span>に補われていることで形づくられている。</p>
<ul>
<li>左に、<span style="color: #e6a64d;">ヘロデ王</span>の命令で<span style="color: #e6a64d;">洗礼者ヨハネ</span>が斬首される、</li>
<li>右に、, <span style="color: #e6a64d;">福音書記者ヨハネ</span><span style="color: #e6a64d;">パトモス島</span>で黙示録の文書の「ベールの取り除き」を受けている。</li>
</ul>
<p>聖母の後ろの上級繊維の右に後景で、福音書記者ヨハネの後ろでの<ruby lang="ja" style="color:#e6a64d;">クレーン広場<rp>(</rp><rt lang="nl" style="color:#e6a64d;font-size: 70%;letter-spacing: 1px;">Kraanplaats</rt><rp>)</rp></ruby>と<span style="color: #e6a64d;">聖ヨハネ教会</span>の景観は、直接と<span style="color: #e6a64d;">作品を依頼した</span>病院を経営する<span style="color: #e6a64d;">宗教士たち</span>と施設の<span style="color: #e6a64d;">歴史</span>に関係している。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《クレーン広場と聖ヨハネ教会の景観》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《クレーン広場と聖ヨハネ教会の景観》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、クレーン広場と聖ヨハネ教会の景観</figcaption></figure>
<p><span style="color: #e6a64d;">病院の２人の兄弟たち</span>がこうしてブルージュに着く諭入された<span style="color: #e6a64d;">ボルドーワインを測定する</span>ことで表わされている。<br>
私たちに１３００年ごろに病院が市に<span style="color: #e6a64d;">市の特権</span>、自分の収入の源でもあった<span style="color: #e6a64d;">「計量する権」</span>を任せられて来たことを思い出させてくれている。</p>
</div>

<div id="body-inner">
<div class="footnotes">
<hr />
<ol>
<li id="fn:6">
<p>「その芸術家がブルージュに定住した当時、この街は、ブルゴーニュ公爵領ネーデルラントの主な装飾写本制作拠点の一つであった。 (...)<br>
メムリンクは、自分のブルージュでの顔見知り関係の中で細密画かを数えていた。名前は<ruby lang="ja">ウィレム<rp>(</rp><rt lang="de">Willem</rt><rp>)</rp>・<rp>(</rp><rt lang="de">&#160;</rt><rp>)</rp>ヴレラント<rp>(</rp><rt lang="de">Vrelant</rt><rp>)</rp></ruby lang="ja">。
この町で最も出産豊かな工房の頭として、ヴレラントはメムリンクと同様に、移民であった。
ユトレヒト市出身の彼は１４５４年からブルージュ書物製作<ruby>組合<rp>(</rp><rt>ギルド</rt><rp>)</rp></ruby>の会員として、１４８１年の亡くなるまでに登録されている。
２人とも<ruby lang="ja">シント<rp>(</rp><rt lang="nl">Sint</rt><rp>)</rp>＝<rp>(</rp><rt lang="nl">-</rt><rp>)</rp>ジョリスストラット<rp>(</rp><rt lang="nl">Jorisstraat</rt><rp>)</rp></ruby lang="ja">に住んでいたので、ヴレラントとメムリンクがほとんど隣人でした。 (...)<br>
視覚的に説得力のある空間的表現の観点から考えれば、前景の２つの図形と絵画の残りの図との関係は、中間空間の林と主な図形と関係に脈絡が取れていません。 (...)
ある作品から別の作品へでも、各作品には、ヴレラントと同様に、位置の高い地平線にまでいくつかの景色が重なるのを見当たることがあります」。<br>
（<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean#lorentz" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean#lorentz" id="renvoi-lorentz-2" class="orange">著述目録</a>に出典されている<ruby lang="ja">フィリップ<rp>(</rp><rt lang="de">Philippe</rt><rp>)</rp>・<rp>(</rp><rt lang="de">&#160;</rt><rp>)</rp>ローレンッツ<rp>(</rp><rt lang="de">LORENTZ</rt><rp>)</rp></ruby lang="ja">の著作からの引用）。&#160;<a href="#fnref1:6" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
</ol>
</div>
</div>

<!-- Page 6 -->

<div id="body-inner">
				<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、２翼の内面の景観、《左に、前景の左にヘロデ王の命令で斬首された洗礼者ヨハネ、右に、パトモス島での福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、２翼の内面の景観、《左に、前景の左にヘロデ王の命令で斬首された洗礼者ヨハネ、右に、パトモス島での福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1920.jpg 1920w"></picture><figcaption>２翼の内面の景観：左に、前景の左にヘロデ王の命令で斬首された洗礼者ヨハネ、右に、パトモス島での福音書記者ヨハネ</figcaption></figure>
<h3 id="legendes" class="orange">洗礼者ヨハネと福音書記者ヨハネの諸伝説</h3>
<p>私たちはここでメムリンクが迷いなく基づいた<a href="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" title="https://ja.wikipedia.org/wiki/レゲンダ・アウレア" id="legende-doree" class="orange">黄金伝説</a>で<a href="https://ja.wikipedia.org/wiki/ヤコブス・デ・ウォラギネ" title="https://ja.wikipedia.org/wiki/ヤコブス・デ・ウォラギネ" id="jacques-de-voragine" class="orange">ヤコブス・デ・ウォラギネ</a>が報じる通りの各々の<span style="color: #e6a64d;">２つの語り</span>に従っています。<br>
参考できるように、これらの文書が描写の続きに<a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18" title="https://francois-vidit.com/docs/ja/saint-jean/page:18" class="orange">ここ</a>と<a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:19" title="https://francois-vidit.com/docs/ja/saint-jean/page:19" class="orange">ここ</a>に記載された。ご覧ください。</p>
<h4 id="legende-de-jean-le-baptiste" class="orange">洗礼者ヨハネの伝説</h4>
<p>私たちは年代順で福音書記者ヨハネより先とされている洗礼者ヨハネから始まっている。<br>
中央パネルの上部と奥景の左と左翼の内側パネルに<span style="color: #e6a64d;">彼の生拝</span>と<span style="color: #e6a64d;">殉教</span>を表す場面が表わされている。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《遠景への開口部、洗礼者ヨハネの伝説の諸場面》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《遠景への開口部、洗礼者ヨハネの伝説の諸場面》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《遠景への開口部、洗礼者ヨハネの伝説の諸場面》</figcaption></figure>
<p>歴史的な面では、１世紀にユダヤ信仰のローマ史家である<a href="https://ja.wikipedia.org/wiki/フラウィウス・ヨセフス" title="https://ja.wikipedia.org/wiki/フラウィウス・ヨセフス" id="flavius-josephe" class="orange">フラウィウス・ヨセフス</a>の証言<span style="color: #999;">（<a href="https://ja.wikipedia.org/wiki/ユダヤ古代誌" title="https://ja.wikipedia.org/wiki/ユダヤ古代誌" id="antiquites-judaiques" class="orange">「ユダヤ古代誌」</a>、第１８書、第５章、１１８）</span>によれば、ヨハネは<a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18" title="https://francois-vidit.com/docs/ja/saint-jean/page:18" id="galilee" class="orange">ガリラヤ</a>での<a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:19" title="https://francois-vidit.com/docs/ja/saint-jean/page:19" id="jesus-de-nazareth" class="orange">ナザレのイエス</a>の時代のユダヤ教<span style="color: #e6a64d;">伝道師</span>として描写されている。<br>
当時のガリラヤは多くの反乱で知られているローマ帝国の属州である。<br>
その人口が、多数的にユダヤ教であって、とても信心深いです。
聖書のそれぞれの書物が神のお使いの到来を予告していて、その活動によってユダヤの民が自分の独立、その宗教的組織、特にエルサレムでの<a href="https://ja.wikipedia.org/wiki/ソロモン神殿" title="https://en.wikipedia.org/wiki/Solomon'%27's_Temple" id="temple-de-salomon" class="orange">ソロモン神殿</a>の再建を可能にすることを回復してくれる。</p>
<p>キリスト教の教義の面では、 <span style="color: #e6a64d;">ヨハネ</span>は、ルカの福音<span style="color: #999;">（１章、５-２５）</span>によると、エルサレムへ行くために偶然選ばれて、神殿で祈りをささげたころ、神自身が<a href="https://ja.wikipedia.org/wiki/ガブリエル" title="https://ja.wikipedia.org/wiki/ガブリエル" id="archange-gabriel" class="orange">大天使ガブリエル</a>によってヨハネの誕生を告げるガリラヤの田舎のユダヤ教の年とった司祭<a href="https://ja.wikipedia.org/wiki/ザカリア" title="https://ja.wikipedia.org/wiki/ザカリア" id="zaccharie" class="orange">ザカリア</a><span style="color: #e6a64d;">の息子</span>である。<br>
その通り、メリングが彼を最左の柱頭に表わしている。 </p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、最左の柱頭、《ザカリアに顕現される大天使ガブリエル》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、最左の柱頭、《ザカリアに顕現される大天使ガブリエル》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、最左の柱頭、《ザカリアに顕現される大天使ガブリエル》、大天使が彼に間もなくの息子の誕生を告げて、それで彼は言葉を失う。</figcaption></figure>
<p>文書がザカリアがそれで言葉を失うことを示している。<br>
その誕生がその右に位置付けられている柱頭に表わされている。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、最左から二番目の柱頭、《洗礼者ヨハネの誕生》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、最左から二番目の柱頭、《洗礼者ヨハネの誕生》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、最左から二番目の柱頭、《洗礼者ヨハネの誕生》</figcaption></figure>
<p>この息子の名前、「ヨハネ」も語り筋の争点の一つとなる <span style="color: #999;">（ルカ１、５９-６３）</span>：<br>
「８日目に、その子に割礼を施すために来た人々は、父の名を取ってザカリアと名付けようとした。ところが、母は、
<span style="color: #e6a64d;">"いいえ、名はヨハネとしなければなりません"</span>と言った。
しかし人々は、
<span style="color: #e6a64d;">"あなたの親類には、そういう名の付いた人はだれもいない"</span>と言い <span style="color: #999;">（…）</span>ザカリアは字を書く板を出させて、<span style="color: #e6a64d;">"この子の名はヨハネ"</span>と書いた」。</p>
</div>

<!-- Page 7 -->

<div id="body-inner">
				<p>信仰の観点から、<span style="color: #e6a64d;">洗礼者ヨハネ</span>は<span style="color: #e6a64d;">神の意志によって</span>世にゆえにやって来る。<br>
その後、彼は砂漠で修行者の模範的な生活を送っている<span style="color: #999;">（ルカ１、８０）</span>。
メムリンクがこの場面を森に移動させている。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《森で祈る洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《森で祈る洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《森で祈る洗礼者ヨハネ》</figcaption></figure>
<p>「罪の赦しを得させるために悔い改めの洗礼を宣べ伝える」ことも見られる<span style="color: #999;">（ルカ３、０３）</span>。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《罪の赦しを得させるために悔い改めの洗礼を宣べ伝える洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《罪の赦しを得させるために悔い改めの洗礼を宣べ伝える洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《罪の赦しを得させるために悔い改めの洗礼を宣べ伝える洗礼者ヨハネ》</figcaption></figure>
<p>ヨハネは当時のユダヤ教では新風を吹きこんでいる。
彼は特に火葬によって神殿で動物を犠牲にしてではなく、しかも<span style="color: #e6a64d;">「洗礼」</span>によって、いわゆるこの言葉の語源どおりだと水の中に<span style="color: #e6a64d;">「没入」</span>することで罪の赦しを得ることを勧めるように仕向ける。
聖書のそれぞれの書物に従って、彼は<span style="color: #e6a64d;">神の遣わされたお使いの到来を</span>同時代人の一人である<a href="https://ja.wikipedia.org/wiki/ナザレのイエス" title="https://ja.wikipedia.org/wiki/ナザレのイエス" class="orange">ナザレのイエス</a>本人に<span style="color: #e6a64d;">預言する</span>。<br>
彼はその到来を<a href="https://ja.wikipedia.org/wiki/ヨルダン川" title="https://ja.wikipedia.org/wiki/ヨルダン川" id="jourdain" class="orange">ヨルダン川</a>の水での洗礼で承認する。この場面が左翼パネルの内面の上部に表わされている。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/bapt%C3%A8me-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、左翼パネルの内面の上部の詳細、《ヨルダン川のほとりでイエスを洗礼する洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、左翼パネルの内面の上部の詳細、《ヨルダン川のほとりでイエスを洗礼する洗礼者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1920.jpg 1920w"></picture><figcaption>左翼パネルの内面の上部の詳細、《ヨルダン川のほとりでイエスを洗礼する洗礼者ヨハネ》</figcaption></figure>
<p>向こうの岸に、<span style="color: #e6a64d;">洗礼者ヨハネ</span>が自分の最初の弟子の２人である<a href="https://ja.wikipedia.org/wiki/アンデレ" title="https://ja.wikipedia.org/wiki/アンデレ" id="andre" class="orange">アンデレ</a>と<a href="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" title="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" id="jean-l-apotre" class="orange">使徒ヨハネ</a>も彼に加わるよう、<span style="color: #e6a64d;">「</span><ruby lang="ja" style="color:#e6a64d;">これは&#12289;神の小羊<rp>(</rp><rt lang="la" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">エッチェ・アニュス・ディ</rt><rp>)</rp></ruby><span style="color: #e6a64d;">」</span>という言葉でイエスに紹介している。彼たちは彼と合流する。</p>
<p>そこから、彼の運命が悲劇的になる。
ガリラヤとペレアの四分封領主である<a href="https://ja.wikipedia.org/wiki/ヘロデ・アンティパス" title="https://ja.wikipedia.org/wiki/ヘロデ・アンティパス" id="herode-antipas" class="orange">ヘロデ・アンティパス</a>が「自分の兄弟フィリポ <sup id="fnref1:2"><a href="#fn:2" class="footnote-ref">1</a></sup> の妻」（<a href="https://ja.wikipedia.org/wiki/ヘロデヤ" title="https://ja.wikipedia.org/wiki/ヘロディア" id="herodiade">ヘロディア</a>）と結婚する<span style="color: #999;">（マルコ、６・１７）</span>。<br>
ユダヤ教の信仰はどんな兄の妻との結婚とも<span style="color: #e6a64d;">「汚れ」</span>と見なしていて、ゆえに形式的にそれを<span style="color: #e6a64d;">禁じている</span><span style="color: #999;">（レビ記、１８・１６、２０・２１）</span>から、ヨハネはそれを糾弾する。<br>
<span style="color: #e6a64d;">ヘロデは</span><span style="color: #999;">［ヨハネの］</span>「説得させる能力が<span style="color: #e6a64d;">反乱</span>」を誘発することを恐れられていた。
「群衆はこの人の忠告に完全に従いそうであったから。だからヘロデは、彼のせいで何かトラブルが起こる前に、彼を捕まえる方を後に騒動が起きた場合に悔むより好んだわけだ。ヘロデの嫌疑のせいで、ヨハネはマシャエロに送られ（…）そこで殺された」<span style="color: #999;">（ユダヤ古代誌、第１８書、第５章、１１８）</span> <sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">2</a></sup> 。<br>
実際、ヨハネの信奉者たちによってトラブルが起こされた場合、ヘロデが自分を取り上げることのできるローマ当局に事情について責任を取らなければならなかったのだった。<br>
彼は<span style="color: #e6a64d;">「洗礼者ヨハネを逮捕する命令」</span>を出す<span style="color: #999;">（マルコ、６・１７）</span>。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《ヘロデ・アンティパスの命令による洗礼者ヨハネの逮捕》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《ヘロデ・アンティパスの命令による洗礼者ヨハネの逮捕》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《ヘロデ・アンティパスの命令による洗礼者ヨハネの逮捕》</figcaption></figure>
<p>中央パネルでは、メムリンクがこの場面を白羊の上に、<span style="color: #e6a64d;">ヨハネ</span>が強制的に古代ギリシャの語源は「剣」という意味と、現代のヨルダン国に位置付けられているの現代<ruby lang="ja" style="color:#e6a64d;">マシェロント<rp>(</rp><rt lang="grc" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">μάχαιρα</rt><rp>)</rp></ruby> <sup id="fnref1:3"><a href="#fn:3" class="footnote-ref">3</a></sup> の牢へ向かって左の翼パネルへ<span style="color: #e6a64d;">連れて行かれている</span>。</p>
</div>

<div id="body-inner">
<div class="footnotes">
<hr />
<ol>
<li id="fn:2">
<p>ヘロデ・フィリッポス１世とも呼称されている。&#160;<a href="#fnref1:2" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
<li id="fn:1">
<p>念のため、この引用文が過去形であって、ここでは私が現代形に移動させようとしている。&#160;<a href="#fnref1:1" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
<li id="fn:3">
<p>マシェロントは、要塞化された宮殿の遺跡があるヨルダンの遺跡です。それは死海の東海岸のヨルダン川河口の約２４キロの丘に位置している。ヘブライ語では「מכוור」、アラブ語では、「قلة المشناقى」を呼称されている。&#160;<a href="#fnref1:3" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
</ol>
</div>
</div>

<!-- Page 8 -->

<div id="body-inner">
				<p>左翼パネル内面に語りが続く。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、《左翼パネル内面》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、《左翼パネル内面》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1920.jpg 1920w"></picture><figcaption>左翼パネル内面</figcaption></figure>
<p>ヨハネを、信奉者達のトラブルの騒ぎを起こさずに死なせるのを成功させるために、<span style="color: #e6a64d;">ヘロデ</span>が彼らを欺くよう、ごまかしを考える<span style="color: #999;">（マルコ、６・２１-２２）</span>。
「自分の誕生日の祝いに」ガリラヤの「高官や将校、ガリラヤの有力者などを招いて宴会」を催す。<br>
「ヘロディアの娘<a href="https://ja.wikipedia.org/wiki/サロメ_(ヘロディアの娘))" title="https://ja.wikipedia.org/wiki/サロメ_(ヘロディアの娘)" id="salome" class="orange">サロメ</a>」が姿を現して踊る。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、左翼パネル内面の詳細、《サロメの踊り》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、左翼パネル内面の詳細、《サロメの踊り》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1920.jpg 1920w"></picture><figcaption>左翼パネル内面の詳細、《サロメの踊り》</figcaption></figure>
<p><span style="color: #e6a64d;">《サロメの踊り》</span>は左翼パネルの左上部にある宮殿の塔で行われている。
その上、<ruby>壁<rp>(</rp><rt>へき</rt><rp>)</rp>龕<rp>(</rp><rt>がん</rt><rp>)</rp></ruby>での像が、ヘロデの不倫行為をおのめかすいくつかの不信心な人物、裸の女性の２人の間の一人裸の男性が表わされている。</p>
<p>ヘロデがその踊りを気に入ったことを見せかけて、<span style="color: #e6a64d;">ヨハネの死の責任を免除するには</span>言う：<br>
「<span style="color: #e6a64d;">"欲しいものがあれば何でも言いなさい"</span>、更に、"お前が願うなら、この国の半分でもやろう"と固く誓ったのである」。<br>
サロメが「座を外して、母親に、<span style="color: #e6a64d;">"何を願いましょうか"</span>と言うと」、ヘロディアは、「<span style="color: #e6a64d;">"洗礼者ヨハネの首を"</span>と言った。早速、少女は大急ぎで王のところに行き、<span style="color: #e6a64d;">"今すぐに洗礼者ヨハネの首を盆に載せて、いただきとうございます"</span>と」願う<span style="color: #999;">（マルコ、６・２４-２９）</span>。<br>
この語り筋のすべてが本当にごまかしである証拠が、もしサロメがヘロデに<span style="color: #e6a64d;">「自分の父のフィリポか自分の母の<a href="https://ja.wikipedia.org/wiki/ヘロデヤ" title="https://ja.wikipedia.org/wiki/ヘロディア" id="herodiade-2" class="orange">ヘロディア</a>」</span>を頼んだなら、ヘロデがそれに同意出来ません<span style="color: #999;">（黄金伝説１２１章、第１段 <sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">1</a></sup> ）</span>。<br>
ある衛兵は出て行き、「牢の中でヨハネの首をはね」に行く<span style="color: #999;">（マルコ、６・２２-２３）</span>。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、左翼パネル内面の詳細、《洗礼者ヨハネの斬首》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、左翼パネル内面の詳細、《洗礼者ヨハネの斬首》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1920.jpg 1920w"></picture><figcaption>左翼パネル内面の詳細、《洗礼者ヨハネの斬首》</figcaption></figure>
<div class="footnotes">
<hr />
<ol>
<li id="fn:1">
<p>ヤコブス・デ・ウォラギネによって書き留められた<a href="https://ja.wikipedia.org/wiki/ヒエロニムス" title="https://ja.wikipedia.org/wiki/ヒエロニムス" id="saint-jerome" class="orange">ヒエロニムス</a>の言葉。&#160;<a href="#fnref1:1" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
</ol>
</div>
</div>

<!-- Page 9 -->

<div id="body-inner">
				<p>メムリンクは左翼パネルの前景に《洗礼者ヨハネの斬首》を宮殿から出る<span style="color: #e6a64d;">階段</span>を通って牢の執行所として<span style="color: #e6a64d;">内庭</span>で位置づけて拡大することを選んだ。 </p>
<p>右には、最初の弟子の２人である<a href="https://ja.wikipedia.org/wiki/アンデレ" title="https://ja.wikipedia.org/wiki/アンデレ" id="andre-2" class="orange">アンデレ</a>と<a href="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" title="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" id="jean-l-apotre-2" class="orange">使徒ヨハネ</a>をも位置づけてやった。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、左翼パネル内面の詳細、《洗礼者ヨハネの頭》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、《左翼パネル内面》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1920.jpg 1920w"></picture><figcaption>左翼パネル内面の詳細、《洗礼者ヨハネの頭》</figcaption></figure>
<p><span style="color: #e6a64d;">死刑執行人</span>は、ほとんど感動していない<a href="https://ja.wikipedia.org/wiki/サロメ_(ヘロディアの娘))" title="https://ja.wikipedia.org/wiki/サロメ_(ヘロディアの娘)" id="salome-3" class="orange">サロメ</a>が彼に差し出す<span style="color: #e6a64d;">大皿に頭を</span>もたせかけながら、背後から描かれている。<br>
美術史家たちは、死刑執行者とサロメの姿勢において、彼がブリュッセルで<a href="https://ja.wikipedia.org/wiki/ロヒール・ファン・デル・ウェイデン" title="https://ja.wikipedia.org/wiki/ロヒール・ファン・デル・ウェイデン" id="rogier-van-der-weyden" class="orange">ロヒール・ファン・デル・ウェイデン</a>という画家のアシスタントだったころの先生の作品で見当たる<span style="color: #e6a64d;">似たような場面をメムリンクによるの再利用</span>だと見っ分けている。
これは<a href="https://ja.wikipedia.org/wiki/絵画館_(ベルリン)" title="https://ja.wikipedia.org/wiki/絵画館_(ベルリン)" id="gemaldegalerie" class="orange"><ruby lang="ja">ベルリン国立美術館<rp>(</rp><rt lang="de">Staatliche&#160;Museen&#160;zu&#160;Berlin</rt><rp>)</rp></ruby lang="ja"></a>の<a href="https://ja.wikipedia.org/wiki/ベルリン美術館" title="https://ja.wikipedia.org/wiki/Musées_d'État_de_Berlin" id="musees-d-etat-de-berlin" class="orange"><ruby lang="ja">絵画館<rp>(</rp><rt lang="de">Gemäldegalerie</rt><rp>)</rp></ruby lang="ja"></a>にある１４５０〜５５年頃に描かれた<span style="color: #e6a64d;">《聖ヨハネの三連画》</span>の左翼パネル内面にある<span style="color: #999;">（目録番号５３４B）</span>。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.jpg" title="ロヒール・ファン・デル・ウェイデン、左翼パネル内面の詳細、《聖ヨハネの三連画》、ベルリン国立美術館、絵画館、ベルリン" alt="ロヒール・ファン・デル・ウェイデン、左翼パネル内面の詳細、《聖ヨハネの三連画》、ベルリン国立美術館、絵画館、ベルリン" class="class-40-img" ean le baptistesizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1920.jpg 1920w"></picture><figcaption>左翼パネル内面の詳細、ロヒール・ファン・デル・ウェイデン筆《聖ヨハネの三連画》</figcaption></figure>
<p>マルコの語りは続く<span style="color: #999;">（マルコ、２９）</span>：<span style="color: #e6a64d;">「ヨハネの弟子たちはこのことを聞き、やって来て、遺体を引き取り、墓に納めた」</span>。
後者はヘロデ・アンティパスに支配されている領地から遠くある、ヨルダン川西岸地区での<ruby lang="ja" style="color:#e6a64d;">セバステ<rp>(</rp><rt lang="grc" style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;">Σεβαστή</rt><rp>)</rp></ruby>、現代の<a href="https://ja.wikipedia.org/wiki/サバスティーヤ" title="https://ja.wikipedia.org/wiki/サバスティーヤ" id="sebastia" class="orange"><ruby lang="ja">セバスティア<rp>(</rp><rt lang="ar">سبسطية</rt><rp>)</rp></ruby lang="ja"></a>という<a href="https://ja.wikipedia.org/wiki/エリシャ" title="https://ja.wikipedia.org/wiki/エリシャ" id="elisee" class="orange">エリシャ</a>と<a href="https://ja.wikipedia.org/wiki/オバデヤ" title="https://ja.wikipedia.org/wiki/オバデヤ" id="abdias" class="orange">オバデヤ</a>預言者たちのお墓の近くに持って行かれた。</p>
<p>中央パネルの左側では、右に、洗礼者ヨハネの後ろに、メムリンクが彼の伝説の最後の場面を表した。それは、キリスト教の信仰と戦ってヨハネが葬られたところに行われた奇跡を止めさせるために、<a href="https://ja.wikipedia.org/wiki/フラウィウス・クラウディウス・ユリアヌス" title=" https://ja.wikipedia.org/wiki/フラウィウス・クラウディウス・ユリアヌス" id="julien-l-apostat" class="orange">背教者ユリアヌス</a>が遺体を掘り起こし、焼いて、畑を散々に散らすよう命じたということだ。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《背教者ユリアヌス大帝の命令により掘り起こされて焼け焦されげた洗礼者ヨハネの遺体》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《背教者ユリアヌス大帝の命令により掘り起こされて焼け焦されげた洗礼者ヨハネの遺体》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《背教者ユリアヌス大帝の命令により掘り起こされて焼け焦されげた洗礼者ヨハネの遺体》</figcaption></figure>
<p>彼の頭は、伝説によると、現代の<ruby lang="ja">ホムス<rp>(</rp><rt lang="ar">حمص</rt><rp>)</rp></ruby lang="ja">、当時エメサ市の陶工屋によって別に葬られたのであろうから、それは、遠ざけた石の後ろにある<span style="color: #e6a64d;">壁の開口部</span>の中に<span style="color: #999;">（黄金伝説、第１２１章、III.）</span>。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《壁の開口部の中の洗礼者ヨハネの頭》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《壁の開口部の中の洗礼者ヨハネの頭》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《壁の開口部の中の洗礼者ヨハネの頭》、</figcaption></figure>
<p>伝説によると、頭が別にシリアにある現代の<a href="https://ja.wikipedia.org/wiki/ホムス" title="https://ja.wikipedia.org/wiki/ホムス" id="homs" class="orange"><ruby lang="ja">ホムス<rp>(</rp><rt lang="ar">حمص</rt><rp>)</rp></ruby lang="ja"></a>のエメサ市のある製陶屋さんに埋められたのであろう。その後、星に追いかけながら発見した聖マルケッルス <sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">1</a></sup> に顕現されたであろう<span style="color: #999;">（黄金伝説、第１２１章、第３段）</span>。</p>
<div class="footnotes">
<hr />
<ol>
<li id="fn:1">
<p>行政官、シリア属州・<a href="https://ja.wikipedia.org/wiki/アパメア" title="https://ja.wikipedia.org/wiki/アパメア" class="orange"><ruby lang="ja">アパメア<rp>(</rp><rt lang="grc">Απάμεια</rt><rp>)</rp></ruby lang="ja"></a>市の司教に選ばれた人。彼はセオドシウス大帝の命令に従って偶像の社の破壊を監督していたところに、異教徒たちに暗殺されて亡くなりました&#160;<a href="#fnref1:1" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
</ol>
</div>
</div>

<!-- Page 10 -->

<div id="body-inner">
				<h4 id="legende-de-jean-l-evangeliste" class="orange">福音書記者ヨハネの伝説</h4>
<p>中央パネルの後景の上と右に福音書記者ヨハネの伝説の諸場面が表わされている。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《右半分の遠景への開き》：福音書記者ヨハネの伝説の諸場面、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《》：福音書記者ヨハネの伝説の諸場面、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《右半分の遠景への開き》：福音書記者ヨハネの伝説の諸場面</figcaption></figure>
<p>洗礼者ヨハネと違って、歴史的視点から、キリスト教的信仰から生じたの他、<span style="color: #e6a64d;">なんの歴史的資料も存在しません</span>。<br>
それらのキリスト教からの資料と現代の専門家たちに寄りますと、<span style="color: #e6a64d;">福音書記者ヨハネが以下の人物を指しえます</span>：</p>
<ol>
<li><a href="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" title="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" id="jean-l-apotre" class="orange">「使徒」ヨハネ</a>。マルコ、ルカ、マタイの諸福音書と使徒言行録に登場する人物、</li>
<li><a href="https://ja.wikipedia.org/wiki/イエスの愛しておられた弟子" title="https://ja.wikipedia.org/wiki/イエスの愛しておられた弟子" id="disciple-que-jesus-aimait" class="orange">イエスの愛しておられた弟子</a>「ヨハネの」だと言われている福音の書記者、</li>
<li><a href="https://fr.wikipedia.org/wiki/Jean_de_Patmos" title="https://fr.wikipedia.org/wiki/Jean_de_Patmos" id="jean-de-patmos" class="orange">「パトモス島の」ヨハネ</a>。黙示録の書記者。  </li>
</ol>
<h5 id="jean-l-apotre-2" class="orange">「使徒」ヨハネ</h5>
<p><a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" id="jean-l-apotre-3" class="orange">「使徒」ヨハネ</a>は<span style="color: #e6a64d;">「<a href="https://ja.wikipedia.org/wiki/ゼベダイの子" title="https://ja.wikipedia.org/wiki/ゼベダイの子" id="zebedee" class="orange">ゼベダイ</a>の２人の子の内の一人」</span><span style="color: #999;">（マルコ、３・１６~１９、マタイ、１０・２~５とルカ、６・１３~１６）</span>。
彼の兄弟は<a href="https://ja.wikipedia.org/wiki/ヤコブ_(ゼベダイの子)" title="https://ja.wikipedia.org/wiki/https://fr.wikipedia.org/wiki/ヤコブ_(ゼベダイの子)" id="jacques-le-majeur" class="orange">「大」というヤコブ</a>です。
イエスが彼たちを<span style="color: #e6a64d;">「雷の子ら」</span>と呼んでいる<span style="color: #999;">（マルコ、３・１７）</span>。
兄弟と他の弟子の２人だった<a href="https://ja.wikipedia.org/wiki/ペトロ" title="https://ja.wikipedia.org/wiki/ペトロ" id="simon-pierre" class="orange">シモン・ペトロ</a>と<a href="https://ja.wikipedia.org/wiki/アンデレ" title="https://ja.wikipedia.org/wiki/アンデレ" id="simon-pierre" class="orange">アンデレ</a>と同様に、彼はイエスに従うために自分の網を捨てる<a href="https://ja.wikipedia.org/wiki/ガリラヤ湖" title="https://ja.wikipedia.org/wiki/ガリラヤ湖" id="tiberiade" class="orange">ティベリアス湖</a><span style="color: #e6a64d;">の漁師の一人</span>です。<br>
そこから、<a href="https://ja.wikipedia.org/wiki/主イエスの変容" title="https://ja.wikipedia.org/wiki/主イエスの変容" id="transfiguration" class="orange">イエスの変容</a><span style="color: #999;">（マルコ、９・２、マタイ、１７・１とルカ、９・２８）</span>、<a href="https://fr.wikipedia.org/wiki/Guérison_de_la_belle-mère_de_Pierre" title="https://fr.wikipedia.org/wiki/Guérison_de_la_belle-mère_de_Pierre" id="guerison-de-la-belle-mere-de-pierre" class="orange">シモン・ペトロの<ruby>姑<rp>(</rp><rt>しゅうとめ</rt><rp>)</rp></ruby>の癒し</a> <span style="color: #999;">（マルコ、１・２９）</span>、シナゴーグの頭だった<a href="https://ja.wikipedia.org/wiki/Fille_de_Jaïre" title="https://ja.wikipedia.org/wiki/Fille_de_Jaïre" id="fille-de-jaire" class="orange">ヤイロの娘の癒し</a><span style="color: #999;">（マルコ、５・３７とルカ、８・５１）</span>を証し、兄弟と一緒にイエスが<a href="https://ja.wikipedia.org/wiki/ゲツセマネの祈り" title="https://ja.wikipedia.org/wiki/ゲツセマネの祈り" id="agonie-dans-le-jardin-des-oliviers" class="orange">ゲッセマネの園</a>であきらめることに誘惑される時に<span style="color: #999;">（マルコ、１３・３）</span>いますが、彼は睡眠に落ちいる<span style="color: #999;">（マルコ、１４・３３）</span>。</p>
<h5 id="disciple-que-jesus-aimait-2" class="orange">イエスの愛しておられた弟子</h5>
<p><a href="https://ja.wikipedia.org/wiki/イエスの愛しておられた弟子" title="https://ja.wikipedia.org/wiki/イエスの愛しておられた弟子" id="disciple-que-jesus-aimait-3" class="orange">イエスの愛しておられた弟子</a> が「ヨハネの」という福音の終わりに現れる<span style="color: #999;">（ヨハネ、２１・２０;２４~２５）</span>:<br>
「ペトロが振り向くと、<span style="color: #e6a64d;">イエスの愛しておられた弟子</span>がついて来るのが見えた。<span style="color: #999;">（…）</span>
これらのことについて<span style="color: #e6a64d;">証しをし、それを書いたのは、この弟子</span>である」。<br>
「ヨハネ」と呼称する文書での要素は一つもありませんので、 「ヨハネの福音」 との呼称が正しくなりえそうもありません。「イエスの愛しておられた弟子」の福音であるはずです。<br>
とても異常な人物です。どんな読者でもが自分と同一視できる他のイエスの弟子の内の一人であって、イエス自信から愛されて、従って他の誰よりも彼に親しくなっています。<br>
彼は、上の引用のすぐ後に、意見を述べることも迷いません：<br>
「イエスのなさったことは、このほかにも、まだたくさんある。<span style="color: #e6a64d;"><span style="text-decoration: underline;">わたしは</span>思う。</span>その一つ一つを書くならば、世界もその書かれた書物を収めきれないであろう」。<span style="color: #999;">（ヨハネ、２１・２５）</span>.<br>
イエス自身が、ペトロからの質問をきっかけに、最後の晩餐中にヨハネの運命について望みがある<span style="color: #999;">（ヨハネ、２１・２１~２３）</span>：
「ペトロは彼を見て、
「主よ、この人はどうなるのでしょうか」と言った。
イエスは言われた。
「<span style="color: #e6a64d;">わたしの来るときまで彼が生きていることを、わたしが望んだ</span>としても、あなたに何の関係があるか。<br>
「イエスの胸もとに寄りかかったまま」のも彼であって、また彼を誰が裏切って行くかを聞くともなっています<span style="color: #999;">（ヨハネ、１３・２５）</span>。<br>
磔刑の時、イエスが自分のお母さまに彼に任せて、言われた：「婦人よ、御覧なさい。あなたの子です」、それから彼に：「見なさい。あなたの母です」<span style="color: #999;">（ヨハネ、１９・２６~２７）</span>。<br>
マグダラのマリアが空いているお墓を見て、「愛しておられた弟子」とペトロに言いに走る。彼がお墓に一速く着く<span style="color: #999;">（ヨハネ、２０・２~８）</span>。<br>
復活後にティベリアス湖でのイエスをいち早く認めるのもまた彼です。<span style="color: #999;">（ヨハネ、２１・７）</span>。</p>
<h5 id="jean-de-patmos-2" class="orange">「パトモス島の」ヨハネ</h5>
<p><a href="https://fr.wikipedia.org/wiki/Jean_de_Patmos" title="https://fr.wikipedia.org/wiki/Jean_de_Patmos" id="jean-de-patmos-3" class="orange">「パトモス島の」ヨハネ</a>が黙示録の文書の始まる所に現れる<span style="color: #999;">（黙、１・１~９）</span>。その文書では彼は神が<span style="color: #e6a64d;">「すぐにも起こるはずのことを」</span><span style="color: #999;">（…）</span>「アジア州にある七つの教会」に<span style="color: #999;">（…）</span>ご自分の「天使を送って」知らせた<span style="color: #999;">（…）</span><span style="color: #e6a64d;">「僕」</span>として紹介されている。</p>
<h5 id="jean-de-patmos-2" class="orange">黄金伝説に対しての福音書記者ヨハネ</h5>
<p>福音書記者ヨハネの表しが黄金伝説の<span style="color: #e6a64d;">第９章</span>と<span style="color: #e6a64d;">第６５章</span>でのヤコブス・ダ・ヴォラギネに編纂された語り筋を全体として守っています。これらの文書を念のために<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" class="orange">ここ</a>と<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:19#aristodeme#jean-selon-legende-2" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:19#aristodeme#jean-selon-legende-2" class="orange">ここ</a>で記載している。<br>
しかし、３人のヨハネ<span style="color: #999;">（「使徒」ヨハネ、イエスの愛しておられた弟子、「パトモス島の」ヨハネ）</span>を一人の人物としてしか扱わないヤコブス・ダ・ヴォラギネと違って、メムリンクが福音書記者ヨハネに対して、使徒ヨハネ<span style="color: #999;">（左翼パネルの内面）</span>に別の外観を与える。</p>
<h5 id="jean-a-la-porte-latine" class="orange">ローマにあるラティナ門前にドミティアヌス大帝の命令によって熱湯に浸せられる福音書記者ヨハネ</h5>
<p>語りが中央パネルから始まります。<br>
「<span style="color: #e6a64d;">ヨハネ</span>は、<a href="https://ja.wikipedia.org/wiki/エフェソス" title="https://ja.wikipedia.org/wiki/エフェソス" class="orange">エフェソス</a>で伝道活動に従事していたとき、同地の総督に捕えられ、いつわりの神々に供物をささげようと命じられた。<br>
が、命令にしたがおうとしなかったので、獄に投じられた。総督は、皇帝ドミティアヌスに報告書を送り、そのなかで、ヨハネのことを神殿の冒漬者神々の侮蔑者、十字架にかけられた男に仕えるやからのひとりであると決めつけた。
<span style="color: #e6a64d;">ドミティアヌス</span>は、ヨハネをローマにつれてくるようにと命じた。さて、ヨハネがローマに到着すると、笑いものにするために頭を丸坊主に剃りあげたうえ、<span style="color: #e6a64d;">ラティナ門</span>とよばれる市門の外に引きだし、油がいっぱい煮えたぎっている釜に入れ、さらに下から火をどんどん焚きつけた。<span style="color: #999;">（第６５章）</span> <sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">1</a></sup> 。  </p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島への流しへの出発》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島への流しへの出発》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島への流しへの出発》</figcaption></figure>
<p>「ところが、ヨハネは、文字どおり平気の平左で、火傷ひとつしないで釜から出てきた。
ドミティアヌスはこれを見て、恐縮して、彼を死なせるのを恐れた。
キリスト教徒たちは、その後この場所に教会を建て、この日をヨハネの殉教記念日のように祝うのである」。<br>
メムリンクの表しが左での地平線にこの<span style="color: #e6a64d;">教会</span>と右では、<span style="color: #e6a64d;">ローマのコロッセオ</span>と<span style="color: #e6a64d;">ラティナ門</span>を見せてくれている。<br>
「ドミティアヌス大帝は、こんな拷問ぐらいでキリストの福音を宣べることをやめるような男ではないと見てとり、聖ヨハネを<span style="color: #e6a64d;">パトモス島</span>へ流刑に処した」<span style="color: #999;">(パトモス島への出発が真ん中に表わされていて、いくつかの人物がある船に乗ろうとしているところに）</span>。「彼は、その島にまったくひとりで住み、ここで<span style="color: #e6a64d;">『ヨハネの黙示録』</span>を書いた」<span style="color: #999;">（第９章）</span>。</p>
<p>右翼パネルが完全にヨハネのパトモス島での<ruby>幻<rp>(</rp><rt>げん</rt><rp>)</rp>影<rp>(</rp><rt>えい</rt><rp>)</rp></ruby>に捧げられている <sup id="fnref1:2"><a href="#fn:2" class="footnote-ref">2</a></sup> 。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《パトモス島での福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《パトモス島での福音書記者ヨハネ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《パトモス島での福音書記者ヨハネ》<br>「わたしは、たちまち“霊”に満たされた。すると、見よ、天に玉座が設けられていて（…）玉座の前は、水晶に似たガラスの海のようであった。」（黙示録、４・２~６）</figcaption></figure>
<p>メムリンクが使徒を、円形の岩、エーゲ海の真ん中にあるパトモス島に座している姿で表している。<br>
彼は手に駕ペンと小型ナイフを掴んでいて、彼の膝に帳面が見られる。
ヨハネがまだ何もまだ書いていないで、<span style="color: #e6a64d;">生き生き</span>している古代ギリシャ語で<span style="color: #e6a64d;">「覆いをはずす」</span>を意味する<span style="color: #e6a64d;">「黙示」</span>を捕らえられているままに表わされている。これらの幻影がかれの上、空で、水ととても近くにある陸の上、またそれ以外、翼パネルのすべてで表されている。  </p>
<p>文書としての『黙示録』の紹介を<a href="#note-apocalypse" title="文書としての『黙示録』の紹介をここに見当たることが出来ます" id="renvoi-note-apocalypse" class="orange">ここ</a>に見当たることが出来ます。私たちはヨハネご自身が覆いはずしを語る文書での翼パネルの左上に始まる順に従うのを選択しています<span style="color: #999;">（黙示録、４・２~６）</span>。そうすると、文書をメムリンクの表しを照合するのが可能となっている。</p>
<p><sup>０２</sup>
「わたしは、たちまち<span style="color: #e6a64d;">「霊」</span>に満たされた。
すると、見よ、<span style="color: #e6a64d;">天</span>に<span style="color: #e6a64d;">玉座</span>が設けられていて、その玉座の上に座っている<span style="color: #e6a64d;">方</span>がおられた。<br>
<sup>０３</sup>
その方は、碧玉や赤めのうのようであり、
玉座の周りにはエメラルドのような<span style="color: #e6a64d;">虹</span>が輝いていた。<br>
<sup>０４</sup>
また、玉座の周りに二十四の座があって、それらの座の上には白い衣を着て、頭に金の冠をかぶった<span style="color: #e6a64d;">二十四人の長老</span>が座っていた。<br>
<sup>０５</sup>
玉座からは、稲妻、さまざまな音、雷が起こった。また、玉座の前には、七つのともし火が燃えていた。
これは神の七つの霊である。<br>
<sup>０６</sup>
また、玉座の前は、水晶に似たガラスの海のようであった。」</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《神の王座、天と子羊の宮廷の幻影》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《神の王座、天と子羊の宮廷の幻影》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《神の王座、天と子羊の宮廷の幻影》</figcaption></figure>
<p><sup>０７</sup>
第一の生き物は<span style="color: #e6a64d;">獅子</span>のようであり、第二の生き物は<span style="color: #e6a64d;">若い雄牛</span>のようで、第三の生き物は<span style="color: #e6a64d;">人間のような顔</span>を持ち、第四の生き物は空を飛ぶ<span style="color: #e6a64d;">鷲</span>のようであった。<br>
<sup>０８</sup>
この四つの生き物には、それぞれ<span style="color: #e6a64d;">六つの翼</span>があり、その周りにも内側にも、一面に目があった。
彼らは、昼も夜も絶え間なく言い続けた。「聖なるかな、聖なるかな、聖なるかな、全能者である神、主、かつておられ、今おられ、やがて来られる方。」 <span style="color: #999;">(…)</span><br>
<sup>第５章</sup><br>
<sup>０１</sup>
「またわたしは、玉座に座っておられる方の右の手に<span style="color: #e6a64d;">巻物</span>があるのを見た。表にも裏にも字が書いてあり、<span style="color: #e6a64d;">七つの封印</span>で封じられていた。」 <span style="color: #999;">(…)</span><br>
<sup>０６</sup>
「わたしはまた、玉座と四つの生き物の間、長老たちの間に、屠られたような<span style="color: #e6a64d;">小羊が立っている</span>のを見た。小羊には七つの角と七つの目があった。この七つの目は、全地に遣わされている神の七つの霊である。」<br>
<sup>０７</sup>
小羊は進み出て、玉座に座っておられる方の右の手から、巻物を受け取った。 <span style="color: #999;">(…)</span>
語りが虹とヨハネの間に続く。<br>
<sup>第６章</sup><br>
<sup>０１</sup>
また、わたしが見ていると、小羊が七つの封印の一つを開いた。すると、四つの生き物の一つが、雷のような声で「出て来い」と言うのを、わたしは聞いた。</p>
</div>

<div id="body-inner">
<h3>註釈</h3>
<h4 id="note-apocalypse">黙示録</h4>
<div class="notices yellow">
<p>黙示録の文書が「アジア州にある７つの教会へ」 （「エフェソス、スミルナ、ペルガモン、ティアティラ、サルディス、フィラデルフィア、ラオディキア」、黙示録、１・４）とユダヤ系聖典の像徴的言語で宛てられている。<br>
この文書が時間の終わりでのキリストの内での新たな希望のおかげでローマからであれユダヤからであれの迫害を乗り越えることだけではなくしかもそれらの教会自身の不足<span style="color: #9c6416;">（黙示録、第２~３章）</span>を乗り越えることを可能にしてくれる超越的な事実に招く。</p>
<hr>
<ul>
<li><a href="#renvoi-note-apocalypse" title="文書としての『黙示録』の紹介をここに見当たることが出来ます">「文書としての『黙示録』の紹介をここに見当たることが出来ます」 ↑ 戻る ↑</a></li>
</ul>
</div>
<p><br></p>
<div class="footnotes">
<hr />
<ol>
<li id="fn:1">
<p>この引用文が元々の文書では過去形です。念のため、ここでは、私は現在形に移動させている。&#160;<a href="#fnref1:1" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
<li id="fn:2">
<p>右翼パネルと関係のある黙示録の文書からの引用文が<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse">ここ</a>に見当たることが出来ます。&#160;<a href="#fnref1:2" rev="footnote" class="footnote-backref">&#8617;</a></p>
</li>
</ol>
</div>
</div>

<!-- Page 11 -->

<div id="body-inner">
				<p><sup>第６章</sup><br>
<sup>０２</sup>
そして見ていると、見よ、<span style="color: #e6a64d;">白い馬</span>が現れ、乗っている者は、<span style="color: #e6a64d;">弓</span>を持っていた。彼は<span style="color: #e6a64d;">冠</span>を与えられ、勝利の上に更に勝利を得ようと出て行った。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《白い馬》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《白い馬》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1920.jpg 1920w"></picture><figcaption>右翼パネル内面、《白い馬》<br>
「乗っている者は、弓を持っていた。彼は冠を与えられ、勝利の上に更に勝利を得ようと出て行った」（黙示録、４・２）</figcaption></figure>
<p><sup>０３</sup>
小羊が第二の封印を開いたとき、第二の生き物が「出て来い」と言うのを、わたしは聞いた。
<sup>０４</sup>
すると、<span style="color: #e6a64d;">火のように赤い</span>別の<span style="color: #e6a64d;">馬</span>が現れた。その馬に乗っている者には、地上から平和を奪い取って、殺し合いをさせる力が与えられた。また、この者には大きな<span style="color: #e6a64d;">剣</span>が与えられた。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《火のように赤い馬》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《火のように赤い馬》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1920.jpg 1920w"></picture><figcaption>右翼パネル内面、《火のように赤い馬》<br>
「その馬に乗っている者には、地上から平和を奪い取って、殺し合いをさせる力が与えられた。また、この者には大きな剣が与えられた」（黙示録、４・４）</figcaption></figure>
<p><sup>０５</sup>
小羊が第三の封印を開いたとき、第三の生き物が「出て来い」と言うのを、わたしは聞いた。
そして見ていると、見よ、<span style="color: #e6a64d;">黒い馬</span>が現れ、乗っている者は、手に<span style="color: #e6a64d;">秤</span>を持っていた。
<sup>０６</sup>
わたしは、四つの生き物の間から出る声のようなものが、こう言うのを聞いた。「小麦は一コイニクスで一デナリオン。
大麦は三コイニクスで一デナリオン。オリーブ油とぶどう酒とを損なうな。」</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《黒い馬》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《黒い馬》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1920.jpg 1920w"></picture><figcaption>右翼パネル内面、《黒い馬》<br>「乗っている者は、手に秤を持っていた」（黙示録、４・５）</figcaption></figure>
<p><sup>０７</sup>
小羊が第四の封印を開いたとき、「出て来い」と言う第四の生き物の声を、わたしは聞いた。
<sup>０８</sup>
そして見ていると、見よ、<span style="color: #e6a64d;">青白い馬</span>が現れ、乗っている者の名は<span style="color: #e6a64d;">「死」</span>といい、これに<span style="color: #e6a64d;">陰府</span>が従っていた。
彼らには、地上の四分の一を支配し、剣と飢饉と死をもって、更に地上の野獣で人を滅ぼす権威が与えられた。 <span style="color: #999;">(…)</span></p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《青白い馬、「死」、陰府》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《青白い馬、「死」、陰府》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1920.jpg 1920w"></picture><figcaption>右翼パネル内面、《青白い馬、「死」、陰府》<br>「乗っている者の名は「死」といい、これに陰府が従っていた。」（黙示録、４・５）</figcaption></figure>
<p><sup>１４</sup>
天は巻物が巻き取られるように消え去り、山も島も、みなその場所から移された。<br>
<sup>１５</sup>
<span style="color: #e6a64d;">地上の王、高官、千人隊長、富める者、力ある者、また、奴隷も自由な身分の者もことごとく、洞穴や山の岩間に隠れ</span><br>
<sup>１６</sup>
山と岩に向かって、「わたしたちの上に覆いかぶさって、玉座に座っておられる方の顔と小羊の怒りから、わたしたちをかくまってくれ」と言った。<br>
<sup>１７</sup>
神と小羊の怒りの大いなる日が来たからである。だれがそれに耐えられるであろうか」。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《四騎士》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《四騎士》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1920.jpg 1920w"></picture><figcaption>右翼パネル内面、《四騎士》</figcaption></figure>
</div>

<!-- Page 12 -->

<div id="body-inner">
				<p><sup>第８章</sup><br>
<sup>０１</sup>
小羊が第七の封印を開いたとき、天は半時間ほど沈黙に包まれた。<br>
<sup>０２</sup>
そして、わたしは<span style="color: #e6a64d;">七人の天使</span>が神の御前に立っているのを見た。彼らには<span style="color: #e6a64d;">七つのラッパ</span>が与えられた。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《第七の封印の天使》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《第七の封印の天使》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《第七の封印の天使》</figcaption></figure>
<p><sup>０３</sup>
また、別の天使が来て、手に<span style="color: #e6a64d;">金の香炉</span>を持って祭壇のそばに立つと、この天使に多くの香が渡された。すべての聖なる者たちの祈りに添えて、玉座の前にある<span style="color: #e6a64d;">金の祭壇</span>に献げるためである。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《祭壇の天使》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《祭壇の天使》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《祭壇の天使》</figcaption></figure>
<p><sup>０４</sup>
香の煙は、天使の手から、聖なる者たちの祈りと共に神の御前へ立ち上った。<br>
<sup>０５</sup>
それから、天使が香炉を取り、それに祭壇の火を満たして地上へ投げつけると、雷、さまざまな音、稲妻、地震が起こった。</p>
<p><sup>０６</sup>
さて、七つのラッパを持っている七人の天使たちが、ラッパを吹く用意をした。<br>
<sup>０７</sup>
第一の天使がラッパを吹いた。すると、血の混じった<ruby>雹<rp>(</rp><rt>ひょう</rt><rp>)</rp></ruby>と火とが生じ、地上に投げ入れられた。地上の三分の一が焼け、木々の三分の一が焼け、すべての青草も焼けてしまった。<br>
<sup>０８</sup>
第二の天使がラッパを吹いた。すると、<span style="color: #e6a64d;">火で燃えている大きな山</span>のようなものが、海に投げ入れられた。海の三分の一が血に変わり、
<sup>０９</sup>
また、被造物で海に住む生き物の三分の一は死に、<span style="color: #e6a64d;">船という船の三分の一が壊された</span>。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《火で燃えている大きな山の墜落、船の三分の一が壊された》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《火で燃えている大きな山の墜落、船の三分の一が壊された》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《火で燃えている大きな山の墜落、船の三分の一が壊された》</figcaption></figure>
<p><sup>１０</sup>
第三の天使がラッパを吹いた。すると、<span style="color: #e6a64d;">松明のように燃えている大きな星</span>が、天から落ちて来て、川という川の三分の一と、その水源の上に落ちた。<br>
<sup>１１</sup>
この星の名は<span style="color: #e6a64d;">「苦よもぎ」</span>といい、水の三分の一が苦よもぎのように苦くなって、そのために多くの人が死んだ。<br>
<sup>１２</sup>
第四の天使がラッパを吹いた。すると、太陽の三分の一、月の三分の一、星という星の三分の一が損なわれたので、それぞれ三分の一が暗くなって、昼はその光の三分の一を失い、夜も同じようになった。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《「苦よもぎ」という星の墜落》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《「苦よもぎ」という星の墜落》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《「苦よもぎ」という星の墜落》<br>「松明のように燃えている大きな星が、天から落ちて」（…） 「水の三分の一が苦よもぎのように苦くなって、そのために多くの人が死んだ」</figcaption></figure>
<p><sup>１３</sup>
また、見ていると、一羽の<span style="color: #e6a64d;">鷲</span>が空高く飛びながら、大声でこう言うのが聞こえた。「不幸だ、不幸だ、不幸だ、地上に住む者たち。なお三人の天使が吹こうとしているラッパの響きのゆえに」。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《右翼パネル内面、《鷲の飛翔》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面、《鷲の飛翔》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《鷲の<ruby>飛<rp>(</rp><rt style="font-size: 70%;color:#999">ひ</rt><rp>)</rp>翔<rp>(</rp><rt style="font-size: 70%;color:#999">しょう</rt><rp>)</rp></ruby>》</figcaption></figure>
</div>

<!-- Page 13 -->

<div id="body-inner">
				<p><sup>最９章</sup><br>
<sup>０１</sup>
第五の天使がラッパを吹いた。すると、一つの星が天から地上へ落ちて来るのが見えた。この星に、<span style="color: #e6a64d;">底なしの淵に通じる穴を開く鍵</span>が与えられ、<br>
<sup>０２</sup>
それが底なしの淵の穴を開くと、<span style="color: #e6a64d;">大きなかまどから出るような煙</span>が穴から立ち上り、太陽も空も穴からの煙のために暗くなった。<br>
<sup>０３</sup>
そして、煙の中から、<span style="color: #e6a64d;">いなご</span>の群れが地上へ出て来た。このいなごには、地に住むさそりが持っているような力が与えられた。<br>
<sup>０４</sup>
いなごは、地の草やどんな青物も、またどんな木も損なってはならないが、ただ、額に神の刻印を押されていない人には害を加えてもよい、と言い渡された。<br>
<sup>０５</sup>
殺してはいけないが、五か月の間、苦しめることは許されたのである。いなごが与える苦痛は、さそりが人を刺したときの苦痛のようであった。<br>
<sup>０６</sup>
この人々は、その期間、死にたいと思っても死ぬことができず、切に死を望んでも、死の方が逃げて行く。  </p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《いなごの群れの地上への出》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《いなごの群れの地上への出》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《いなごの群れの地上への出》</figcaption></figure>
<p><sup>０７</sup>
さて、<span style="color: #e6a64d;">いなご</span>の姿は、出陣の用意を整えた馬に似て、頭には金の冠に似たものを着け、顔は人間の顔のようであった。<br>
<sup>０８</sup>
また、髪は女の髪のようで、歯は獅子の歯のようであった。<br>
<sup>０９</sup>
また、胸には鉄の胸当てのようなものを着け、その羽の音は、多くの馬に引かれて戦場に急ぐ戦車の響きのようであった。<br>
<sup>１０</sup>
更に、さそりのように、尾と針があって、この尾には、五か月の間、人に害を加える力があった。<br>
<sup>１１</sup>
いなごは、底なしの淵の使いを王としていただいている。その名は、ヘブライ語でアバドンといい、ギリシア語の名はアポリオンという。<span style="color: #999;">（…）</span><br>
<sup>第１０章</sup><br>
<sup>０１</sup>
わたしはまた、もう一人の力強い<span style="color: #e6a64d;">天使</span>が、<span style="color: #e6a64d;">雲を身</span>にまとい、天から降って来るのを見た。頭には<span style="color: #e6a64d;">虹</span>をいただき、顔は<span style="color: #e6a64d;">太陽</span>のようで、足は<span style="color: #e6a64d;">火の柱</span>のようであり、<br>
<sup>０２</sup>
手には<span style="color: #e6a64d;">開いた小さな巻物</span>を持っていた。そして、右足で海を、左足で地を踏まえて、</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《天から降って来る天使》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《天から降って来る天使》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1920.jpg 1920w"></picture><figcaption>右翼パネル内面、《天から降って来る天使》<br>「わたしはまた、もう一人の力強い天使が、雲を身にまとい、天から降って来るのを見た。頭には虹をいただき、顔は太陽のようで、足は火の柱のようであり、
手には開いた小さな巻物を持っていた。そして、右足で海を、左足で地を踏まえて」（黙示録、１０・１~２）</figcaption></figure>
<p><sup>０３</sup>
獅子がほえるような大声で叫んだ。天使が叫んだとき、七つの雷がそれぞれの声で語った。<br>
<sup>０４</sup>
七つの雷が語ったとき、わたしは書き留めようとした。すると、天から声があって、「七つの雷が語ったことは秘めておけ。それを書き留めてはいけない」と言うのが聞こえた。<br>
<sup>０５</sup>
すると、海と地の上に立つのをわたしが見たあの天使が、右手を天に上げ、
<sup>０６</sup>
世々限りなく生きておられる方にかけて誓った。すなわち、天とその中にあるもの、地とその中にあるもの、海とその中にあるものを創造された方にかけてこう誓った。「もはや時がない」。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《黙示録の空》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《黙示録の空》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《黙示録の空》（黙示録、１２）</figcaption></figure>
<p><sup>第１２章</sup><br>
<sup>０１</sup>
また、天に大きなしるしが現れた。<span style="color: #e6a64d;">一人の女</span>が身に太陽をまとい、月を足の下にし、頭には十二の星の冠をかぶっていた。<br>
<sup>０２</sup>
女は身ごもっていたが、子を産む痛みと苦しみのため叫んでいた。<br>
<sup>０３</sup>
また、もう一つのしるしが天に現れた。見よ、火のように<span style="color: #e6a64d;">赤い大きな竜</span>である。これには七つの頭と十本の角があって、その頭に七つの冠をかぶっていた。<br>
<sup>０４</sup>
竜の尾は、天の星の三分の一を掃き寄せて、地上に投げつけた。そして、竜は子を産もうとしている女の前に立ちはだかり、産んだら、その子を食べてしまおうとしていた。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《女の人と竜》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《女の人と竜》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《女の人と竜》（黙示録、１２・１~５）</figcaption></figure>
<p><sup>０５</sup>
女は男の子を産んだ。この子は、鉄の杖ですべての国民を治めることになっていた。子は神のもとへ、その玉座へ引き上げられた。
<sup>０６</sup>
女は荒れ野へ逃げ込んだ。そこには、この女が１２６０日の間養われるように、神の用意された場所があった。<br>
<sup>０７</sup>
さて、天で戦いが起こった。ミカエルとその使いたちが、竜に戦いを挑んだのである。竜とその使いたちも応戦したが、
<sup>０８</sup>
勝てなかった。そして、もはや天には彼らの居場所がなくなった。<br>
<sup>０９</sup>
この巨大な竜、年を経た蛇、悪魔とかサタンとか呼ばれるもの、全人類を惑わす者は、投げ落とされた。地上に投げ落とされたのである。その使いたちも、もろともに投げ落とされた。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《聖ミカエルと、竜とその使いたちの戦い。竜とその使いたちの墜落》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《聖ミカエルと、竜とその使いたちの戦い。竜とその使いたちの墜落》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《聖ミカエルと、竜とその使いたちの戦い。竜とその使いたちの墜落》（黙示録、１２・７~９）</figcaption></figure>
</div>

<!-- Page 14 -->

<div id="body-inner">
				<p><sup>１０</sup>
わたしは、天で大きな声が次のように言うのを、聞いた。「今や、我々の神の救いと力と支配が現れた。神のメシアの権威が現れた。
我々の兄弟たちを告発する者、昼も夜も我々の神の御前で彼らを告発する者が、投げ落とされたからである。<br>
<sup>１１</sup>
兄弟たちは、小羊の血と自分たちの証しの言葉とで、彼に打ち勝った。彼らは、死に至るまで命を惜しまなかった。<br>
<sup>１２</sup>
このゆえに、もろもろの天と、その中に住む者たちよ、喜べ。
地と海とは不幸である。悪魔は怒りに燃えて、お前たちのところへ降って行った。残された時が少ないのを知ったからである」。<br>
<sup>１３</sup>
<span style="color: #e6a64d;">竜</span>は、自分が地上へ投げ落とされたと分かると、男の子を産んだ<span style="color: #e6a64d;">女</span>の後を追った。<br>
<sup>１４</sup>
しかし、女には<span style="color: #e6a64d;">大きな鷲の翼</span>が二つ与えられた。荒れ野にある自分の場所へ飛んで行くためである。女はここで、蛇から逃れて、一年、その後二年、またその後半年の間、養われることになっていた。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《女蛇から逃れるために女には大きな鷲の翼が二つ与えられる》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《女蛇から逃れるために女には大きな鷲の翼が二つ与えられる》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、《女蛇から逃れるために女には大きな鷲の翼が二つ与えられる》（黙示録、１２・１４）</figcaption></figure>
<p>これは黙示録の幻影です。黄金伝説によると、ヨハネがその後エフェソス市に戻って、メムリンクがある柱頭に表わしているとおり、ドゥルシアネを復活させる。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、右側の最左の柱頭、《ドゥルシアネの復活》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、右側の最左の柱頭、《ドゥルシアネの復活》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、右側の最左の柱頭、《ドゥルシアネの復活》</figcaption></figure>
<p>彼は真後ろにあるクーポラ付き小建物の中に哲学者クラトンに洗礼を授ける。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《クラトンの洗礼》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、《クラトンの洗礼》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《クラトンの洗礼》</figcaption></figure>
<p>なんの害も起こらないで、毒の杯を飲みます。</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、右側の最右の柱頭、《毒の杯の奇跡》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、右翼パネル内面の詳細、右側の最右の柱頭、《毒の杯の奇跡》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、右側の最右の柱頭、《毒の杯の奇跡》</figcaption></figure>
</div>

<!-- Page 15 -->

<div id="body-inner">
				<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-1280.webp 1280w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-840.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の閉翼時の景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の閉翼時のの景観、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-1280.webp 1280w"></picture><figcaption><ruby>閉<rt style="font-size: 70%;color:#999;">へい</rt>翼<rt style="font-size: 70%;color:#999;">よく</rt>時<rt style="font-size: 70%;color:#999;">じ</rt></ruby>の三連画</figcaption></figure>
<h3 id="position-fermee" class="orange">寄贈者たちの紹介、<ruby style="color:#e6a64d;">閉<rp>(</rp><rt style="font-size: 70%;color:#e6a64d;">へい</rt><rp>)</rp>翼<rp>(</rp><rt style="font-size: 70%;color:#e6a64d;">よく</rt><rp>)</rp>時<rp>(</rp><rt style="font-size: 70%;color:#e6a64d;">じ</rt><rp>)</rp></ruby>の三連画</h3>
<p>翼パネルの裏側は、跪いている寄贈者たちと彼らを見守っている守護聖人の肖像で飾られている。<br>
彼らは奥行きのあんまり深くない<ruby>壁<rp>(</rp><rt>へき</rt><rp>)</rp>龕<rp>(</rp><rt>がん</rt><rp>)</rp></ruby>で表されている。<br>
各の人物の身分が確認された。<br>
左から右へ、私たちは見分けることが出来るのは:  </p>
<ul>
<li><ruby style="color:#e6a64d;" lang="ja">アグネス<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">Agnès</rt><rp>)</rp>・<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">&#160;</rt><rp>)</rp>カゼムブロード<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">CASEMBROOD</rt><rp>)</rp></ruby>はひざまずいている。子羊によって認識されているのは<span style="color: #e6a64d;">聖アグネス</span>である。</li>
<li>つり香炉を運ぶ<span style="color: #e6a64d;">聖クレア</span>は<ruby style="color:#e6a64d;" lang="ja">クレア<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">Claire</rt><rp>)</rp>・<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">&#160;</rt><rp>)</rp>ヴァン<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">VAN</rt><rp>)</rp>・<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">&#160;</rt><rp>)</rp>ヒュルせン<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">HULSEN</rt><rp>)</rp></ruby>修道女を守っている。 </li>
<li><ruby style="color:#e6a64d;" lang="ja">ヤコブ<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">Jacob</rt><rp>)</rp>・<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">&#160;</rt><rp>)</rp>ド<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">DE</rt><rp>)</rp>・<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">&#160;</rt><rp>)</rp>クーニンク<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">KEUNINC</rt><rp>)</rp></ruby>とサンティアゴ・デ・コンポステーラの巡礼者の服を着た<span style="color: #e6a64d;">聖ヤコブ</span>、</li>
<li>司教杖と子豚で見分ける<span style="color: #e6a64d;">聖大アントニオ</span>は、病院長である<ruby style="color:#e6a64d;" lang="ja">アントワーヌ
<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">Antoine</rt><rp>)</rp>・<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">&#160;</rt><rp>)</rp>セガーズ<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="nl">SEGHERS</rt><rp>)</rp></ruby>の守護聖人である。</li>
</ul>
<p>その三連画は恐らく、アントワーヌ・セガースが死んだ年以来、１４７５年以前に注文された。<br>
１４７９年には祭壇の上に置かれた。</p>
</div>

<!-- Page 16 -->

<div id="body-inner">
				<h1 id="mise-en-relation" class="orange">表わされている場面の元にある様々な文書</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《アレクサンドリアのカタリナ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《アレクサンドリアのカタリナ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.jpg 1920w"></picture><figcaption>アレクサンドリアのカタリナ</figcaption></figure>
<h2 id="cath-selon-legende" class="orange"><ruby style="color:#e6a64d;">黄金伝説<rt style="color:#e6a64d;">レゲンダ・アウレア</rt></ruby><span style="color: #e6a64d;">においての聖カテリナ</span></h2>
<p>第１６６章　聖女カテリナ</p>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"/></svg></span>
カテリナは、コストスという王の娘で、<a href="#note_artsliberaux" title="七学芸" id="artsliberaux" class="orange">七学芸</a>の教育を熱心に受けた。<br>
そのころ、<a href="#note_maxentius" title="皇帝マクセンティウス" id="maxentius" class="orange">皇帝マクセンティウス</a>は、富める者も貧しい者もアレクサンドリアに呼び集めて、偽神たちに香をささげさせた。これには、供香に応じようとしないキリスト教徒を断罪してやろうという狙いもあったのである。<br>
このとき１８歳であったカテリナは、大勢の召使いとありあまるほどの富にかこまれて、宮殿でひとりで暮らしていた。<br>
ある日、動物たちの<ruby>咆え<rp>(</rp><rt>ほ</rt><rp>)</rp></ruby>声と人びとの歌声が聞こえたので、すぐ使いの者をやって、なにごとが起こったのかをたずねさせた。<br>
彼女は、ことの次第を知ると、数人の者をつれて宮殿を出て、十字のしるしで武装し、現場におもむいた。<br>
見ると、多くのキリスト教徒が死の恐怖におののきながら供香に引きたてられていくところであった。<br>
これに大きな心痛をおぼえたカテリナは、大胆にも皇帝のまえにすすみ出ると、こう言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「陛下、もしあなたが天にまします造り<ruby style="color:#df8f20;display: inline-flex;flex-direction: column-reverse;text-align: center;">主<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;display: inline;line-height: 0;">ぬし</rt><rp>)</rp></ruby>をおみとめになって、偽神たちを<ruby style="color:#df8f20;display: inline-flex;flex-direction: column-reverse;text-align: center;">拝<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;display: inline;line-height: 0;">おが</rt><rp>)</rp></ruby>むことをおやめくださいますならば、これは、陛下の高いご身分にふさわしいことでありますし、理性も、そうした陛下にこころからご挨拶申しあげることをわたくしに命じるでありましょう」</span></td>
</tr>
</tbody>
</table>
<p>そして、神殿の入口に立ったまま、三段論法のさまざまな結論を駆使してあるときは寓意的、比喩的に、またあるときは弁証法的、神秘論的に皇帝と多くのテーマについて議論をたたかわせた。<br>
それが終わると、ふつうの言葉にもどって、</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「わたくしは、以上のことをまるで哲学者にむかって言うように陛下にご説明申しあげました。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">さて、おたずねいたしますが、陛下はどうしてなんの益もないのに多くの人びとを呼び集めて、石の像に供香させるというような愚かな真似をなさるのでございますか。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">たかが職人の手で建てられたにすぎないこの神殿を立派だとおもい、風のまえの<ruby style="color:#df8f20;display: inline-flex;flex-direction: column-reverse;text-align: center">塵<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;;display: inline;line-height: 0;">ちり</rt><rp>)</rp></ruby>にも似た神殿のきらびやかな装飾を美しいとお考えになるのでしたら、天を仰ぎ、地と海とそこにある<ruby style="color:#df8f20;">森<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">しん</rt><rp>)</rp>羅<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">ら</rt><rp>)</rp>万<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">ばん</rt><rp>)</rp>象<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">しょう</rt><rp>)</rp></ruby>をごらんなさい。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">太陽と月と星のような天の装飾におどろきなさい。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">そして、創世の日から世の終わりのときまで昼も夜も西にむかって走り、また東にもどって、けっして倦むことのない彼らの奉仕ぶりにお気づきなさい。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">これをとくとごらんになりましたら、このような奉仕を受けておられる力あるおん者がどなたであるかを問い、よく理解しようとつとめなさい。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">けれども、主があなたのこころに認識の光をあたえてくださって、あなたが主をみとめ、主に比肩できるような者はだれもいないということがおわかりになりましたら、主をあがめ、主をたたえなくてはなりません。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">と申しますのは、主は、あらゆる神々のなかの神であり、すべての主のなかの主であられるのですから」</span></td>
</tr>
</tbody>
</table>
<p>さらにカテリナが神のおん子のご<a href="#note_incarnation" title="託身" id="incarnation" class="orange"><ruby>託<rp>(</rp><rt>たく</rt><rp>)</rp>身<rp>(</rp><rt>しん</rt><rp>)</rp></ruby></a>についてたくみに説明すると、皇帝は、すっかり面くらって、言葉をかえすこともできなかった。<br>
しかし、やっとのことで落ち着きをとりもどすと、こう言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「婦人よ、しばらく待ってもらいたい。まずはこの供香を終わりまでやらせて、それがすんだら、そなたの問いに答えることにしよう」</span></td>
</tr>
</tbody>
</table>
<p>皇帝は、カテリナを自分の宮殿に案内して、だいじにもてなすようにと命じた。
というのは、彼女の聡明さと容姿の美しさにすっかり参ってしまったのである。<br>
やがて宮殿にもどってくると、皇帝は、カテリナに言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「われわれは、そなたの雄弁な言葉を聞き、そなたの聡明さに感嘆いたした。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">けれども、神々に供香させることにかまけていたので、すべてを理解することはできなかった。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">そこで、まず手はじめにそなたの家柄を聞かせてもらおう」</span></td>
</tr>
</tbody>
</table>
<p>乙女は答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「〈みずからをほめても、けなしてもならない〉と書かれています。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">そんなことをするのは、むなしい名声にうごかされる愚かな人びとだけです。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">ですから、わたくしが自分の<ruby style="color:#df8f20;">出<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">しゅつ</rt><rp>)</rp>自<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">じ</rt><rp>)</rp></ruby>を申しあげますのは、<ruby style="color:#df8f20;">自<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">うぬ</rt><rp>)</rp>惚<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">ぼれ</rt><rp>)</rp></ruby>や虚栄からではなく、謙虚でありたいとおもうからでございます。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">わたくしは、コストス王のひとり娘でございます。けれども、王家に生まれ、七学芸もしっかり学びはしましたが、これらの学問もそれほどありがたいものとはおもわず、もっぱら主イエス・キリストに帰依してまいりました。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">あなたがあがめておいでの神々は、あなたをもほかの人びとをも助けることができません。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">ただの石の像を拝んでいらっしゃるあなたがたは、ほんとうにお気の毒です。あなたがたの神々は、あなたがたが困ったときに助けをもとめても、そばにはいらっしゃいませんし、悲しいときにも助けに来てはくださいません。危険なときにも守ってはくださいません！」</span></td>
</tr>
</tbody>
</table>
<p>王は言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「そなたの言うことが正しいとすれば、世の人びとは、みんな間違っていて、そなただけが真実を語っていることになるのかな。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">しかし、どんな発言も、ふたりか三人の証人によって裏書きされることが必要だから、よしんばそなたが天使か天の諸力のひとつだとしても、このままでは、だれもそなたの言うことを信じるわけにはいくまい。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">なにしろ、そなたひとりでは、かよわい一女人にすぎぬからな」</span></td>
</tr>
</tbody>
</table>
<p>カテリナは答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「陛下、どうか怒りのとりこになられませぬように。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">賢者のこころは、怒りの感情にうごかされるようなことがあってはなりませぬ。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">それゆえ、〈精神で支配する者こそ、王者であって、肉体で支配する者は、奴隷にすぎぬ〉と詩人も言っております」</span></td>
</tr>
</tbody>
</table>
<p>皇帝は言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「どうやら、才女ぶりをひけらかしてわれわれのこころをとらえ、哲学者の言葉など引用して長広舌をふるうのが、そなたの手くだのようだな」</span></td>
</tr>
</tbody>
</table>
<p>皇帝は、カテリナの聡明さにはとうてい太刀打ちできぬと知ると、ひそかに国じゅうの文法学と雄弁術の大家に書面を送り、すぐさまアレクサンドリアの市庁に参集せよと命じ、首尾よくこの口達者な乙女をうち負かした者には莫大な褒賞をとらせようと約束した。<br>
こうして各地から、世俗の学識にかけては万人にすぐれた５０人の大家たちが集まってきた。<br>
彼らは、津々浦々からわれわれを招集されたのはどのような理由からでありましょうかとたずねた。  </p>
<p>皇帝は答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「無類の判断力と聡明さをほこるひとりの乙女が、われわれのもとにおるのだが、この女は、なみいる賢者たちに論争でうち勝って、われわれの神々はすべて悪霊であると主張しているのだ。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">あなたがたが彼女をうち負かしてくれたら、故郷に<ruby style="color:#b3884d;">錦<rp>(</rp><rt style="color:#b3884d;font-size: 70%;letter-spacing: 2px;">にしき</rt><rp>)</rp></ruby>をかざることができよう」</span></td>
</tr>
</tbody>
</table>
<p>すると、学者たちのひとりは、声をあらげてこう言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&#160;</span></td>
<td><span style="color: #165493;">「おお、このようなくだらぬ論戦のために世界じゅうの学者を遠くはなれたところからお呼び寄せになるとは、陛下のご決断も、いささか大袈裟すぎはしませぬか。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">たかが乙女のひとりぐらい、わたしどもの学生のなかのごく下っぱの学生でもわけなくやりこめることができますものを」</span></td>
</tr>
</tbody>
</table>
<p>王は言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「拷問にかけて力ずくで神々に供香させることはできよう。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">しかし、あなたがたと論争をさせて、<ruby style="color:#b3884d;">完<rp>(</rp><rt style="color:#b3884d;font-size: 70%;letter-spacing: 2px;">かん</rt><rp>)</rp>膚<rp>(</rp><rt style="color:#b3884d;font-size: 70%;letter-spacing: 2px;">ぷ</rt><rp>)</rp></ruby>になさまでにあの女の鼻をへし折ってやったほうがおもしろい、とわたしはおもったのだ」</span></td>
</tr>
</tbody>
</table>
<p>学者たちは言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&#160;</span></td>
<td><span style="color: #165493;">「その娘をわれわれのまえにつれてこさせてください。神々を冒瀆したことをみとめさせ、大学者というものにはじめて会ったと言わせてやりますよ」</span></td>
</tr>
</tbody>
</table>
<p>カテリナは、どんな論争が待ちうけているかを聞くと、身もこころも主にゆだねた。<br>
すると、主の<ruby>御<rp>(</rp><rt>み</rt><rp>)</rp>使<rp>(</rp><rt>つか</rt><rp>)</rp></ruby>いがあらわれて、びくびくしていてはなりませんと忠告し、けっして学者たちにうち負かされることはありません、逆に学者たちを回心させ、ともに殉教の棕櫚を受けることになるでしょう、と告げた。<br>
さて、彼女は、学者たちのまえにつれていかれると、皇帝にむかってこう言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「陛下は、５０人の学者たちをひとりの乙女と論争させ、この人たちが勝ったら莫大な褒賞をあたえると約束なさっていますが、わたくしにはなんのご褒美も約束しないで戦えとおっしゃいます。これは、不公平というものではありませんか。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">けれども、主イエス・キリストがわたくしの褒賞でございます。イエス・キリストこそは、主のために戦うすべての人間の希望であり、栄冠なのです」</span></td>
</tr>
</tbody>
</table>
<p>すると、学者たちは神ともあろう者が人間になったり、苦しみを受けたりするのはありえないことだと言った。カテリナは、そのようなことは異教徒の人たちでさえ予言しています、と指摘した。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「プラトンは、神は満月のように完全な円をなしていることもあれば、三日月のように弧になっていることもあると述べておりますし、<a href="#note_sybille" title="シビュラ" id="sybille" class="orange">シビュラ</a>は、〈高い木につるされた神は、さいわいである〉と言っているではありませんか」</span></td>
</tr>
</tbody>
</table>
<p>カテリナは、このような調子で堂々と学者たちと渡りあい、明確な論拠をあげて彼らをやりこめたので、さすがの学者たちも、舌を巻いてだまりこみ、だれひとりとして返す言葉を知らなかった。<br>
皇帝は、烈火のように怒って、たかが女ひとりにだらしなくもうち負かされてしまった学者たちにはげしい難詰の言葉をあびせた。<br>
すると、みんなの師匠格にあたる<ruby>碩<rp>(</rp><rt>せき</rt><rp>)</rp>学<rp>(</rp><rt>がく</rt><rp>)</rp></ruby>が言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&#160;</span></td>
<td><span style="color: #165493;">「陛下もご存じでいらっしゃいますように、かってわたしたちと論争をして、たちどころにうち負かされなかったような相手は、ひとりもございませんでした。けれども、この乙女の口から語っているのは、神の<ruby style="color:#165493;">御<rp>(</rp><rt style="color:#165493;font-size: 70%;letter-spacing: 2px;">み</rt><rp>)</rp>霊<rp>(</rp><rt style="color:#165493;font-size: 70%;letter-spacing: 2px;">たま</rt><rp>)</rp></ruby>です。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">わたしたちは、こころから感服し、これ以上キリストを否定するようなことは言えなくなってしまいました。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">ですから、わたしたちがこれまであがめてきた神々のほうがすぐれていることを陛下がおしめしくださいませんでしたら、ここにきっぱりと申しあげますが、わたしたちは、ひとり残らずキリスト教に改宗いたそうと存じます」</span></td>
</tr>
</tbody>
</table>
<p>僭主は、この言葉を聞くや、かんかんに怒って、このへぼ学者どもを<ruby>町<rp>(</rp><rt>まち</rt><rp>)</rp>中<rp>(</rp><rt>なか</rt><rp>)</rp></ruby>で焼き殺してしまえと<ruby>下<rp>(</rp><rt>げ</rt><rp>)</rp>知<rp>(</rp><rt>ち</rt><rp>)</rp></ruby>した。<br>
しかし、カテリナは、彼らを力づけ、毅然として殉教にむかうのですとさとし、信仰の道を熱心に説いた。<br>
彼らは、洗礼を受けずに死んでいくことを悲しんだ。それで、カテリナはこう言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「怖れることはありません。あなたがたは、みずからの血でもって洗礼と栄冠を受けるのですから」</span></td>
</tr>
</tbody>
</table>
<p>こうして学者たちは、十字のしるしでみずからを祝福したのち、火に投げこまれ、たましいを神にゆだねた。<br>
けれども、彼らの頭髪も衣服も、すこしも炎に焼けなかった…<br>
キリスト信者たちは、彼らの遺体をねんごろに埋葬した。一方、僭主は、カテリナにむかって言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「けだかい乙女よ、そなたの若さをだいじにするがよい。わたしの宮殿で王妃につぐ地位をあたえよう。そして、そなたの像を作らせて、町のまん中に立て、みんなに女神として拝ませよう」</span></td>
</tr>
</tbody>
</table>
<p>乙女は答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「考えるだけでも罪ぶかいようなことをおっしゃらないでくださいませ。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">申しあげておきますが、<a href="#note_fiancee" title="申しあげておきますが、わたくしは、わが身をキリストに花嫁としてささげた女でございます" id="fiancee" class="orange">わたくしは、わが身をキリストに花嫁としてささげた女でございます</a>。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">キリストこそ、わたくしの栄誉、わたくしの愛であり、またわたくしの甘味な喜びなのです。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">どんな甘言や責苦も、この愛からわたくしを引きはなすことはできません」</span></td>
</tr>
</tbody>
</table>
<p>激怒した皇帝は、彼女を身ぐるみはだかにし、<a href="#note_scorpion" title="さそり鞭" id="scorpion" class="orange">さそり鞭</a>で打たせたのち、暗い牢獄にとじこめた。<br>
彼女は、ここで食事もなしに１２日間うち棄てておかれた。</p>
<p>さて、王がよんどころない要件で国外に出かけたすきに、
カテリナに並々ならぬ好意を寄せていた王妃は、ポルピュリウスという親衛隊長といっしょに彼女がとじこめられている牢獄にやってきた。<br>
王妃が入っていくと、獄房は、<ruby>皓<rp>(</rp><rt>こう</rt><rp>)</rp>々<rp>(</rp><rt>こう</rt><rp>)</rp></ruby>たる輝きに照らされ、天使たちがカテリナの傷の手当てをしていた。<br>
カテリナは、皇后を見ると、天の喜びを説きはじめ、彼女をキリスト教に改宗させ、いずれは殉教の栄冠を手に入れられるでしょうと預言した。<br>
こうしてふたりは、夜ふけまで延々と語りあった。<br>
この話をずっと聞いていたポルピュリウスは、いきなりカテリナの足もとに身を投げると、二百名の騎士たちともども信仰の道に入った。<br>
ところで、僭主は、１２日間食事をあたえてはならぬと厳命しておいたので、キリストは、天から一羽の白い鳩をカテリナのもとにつかわされ、鳩は、天上の食べもので彼女をやしなった。<br>
その後、主おんみずから大勢の天使たちと乙女たちをつれて、カテリナのもとにあらわれてこう言われた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #7070c2;">—&#160;</span></td>
<td><span style="color: #7070c2;">「娘よ、わたしは、その名のためにあなたが苦しい戦いをひき受けてくれたあなたの造り主である。ひるんではならない。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #7070c2;">わたしは、あなたとともにいるのだから」</span></td>
</tr>
</tbody>
</table>
<p>主が去られたあと、旅から帰った皇帝は、彼女を引いてくるようにと命じた。
しかし、長い絶食で<ruby>憔<rp>(</rp><rt>しよう</rt><rp>)</rp>悴<rp>(</rp><rt>すい</rt><rp>)</rp></ruby>しきっているものとおもったのに、カテリナは、以前よりもずっと美しくなっていた。<br>
皇帝は、牢獄のなかで彼女に食事をあたえた者がいるにちがいないとにらみ、牢の番人どもを拷問にかけよと命じた。<br>
そこでカテリナは言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「わたくしは、どんな人間からも食事をもらっていません。主キリストが、御使いによってわたくしをやしなってくださったのです」</span></td>
</tr>
</tbody>
</table>
<p>皇帝は言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「いいかな、わたしの言うことをよくこころに留めて、いいかげんな返事をしないようにしてもらいたい。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">わたしは、そなたを召使い女にほしいと言っておるのではない。権勢ならぶ者のない、あでやかな<ruby style="color:#b3884d;">妃<rp>(</rp><rt style="color:#b3884d;font-size: 70%;letter-spacing: 2px;">きさき</rt><rp>)</rp></ruby>としてわたしの帝国に君臨してもらおうと申しておるのだ」</span></td>
</tr>
</tbody>
</table>
<p>カテリナは答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「陛下もわたくしの言葉をしかとお聞きくださるようお願い申しあげます。そして、よくご勘考のうえ正しい判断をくだしてお決めくださいませ。力づよく、不滅で、栄光にみち、あでやかなおん者か、それとも無力で、死すべき、いやしい、みにくい人間か、わたくしは、このどちらを選ぶのがよいでしょうか」</span></td>
</tr>
</tbody>
</table>
<p>皇帝は、憤然として言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「神々に供香をして生きながらえるか、特別にむごい責苦を受けて死ぬか、このふたつにひとつを選ぶがよい」</span></td>
</tr>
</tbody>
</table>
<p>カテリナは言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「考えつくどんな責苦でもいますぐ考えだしてくださいませわたくしは、かつて主おんみずからがわたくしのためにご自身を犠牲になさいましたように、一刻もはやくわたくしの肉と血を主にささげたいと切願しているのでございます。主こそ、わたくしの神、わたくしのいとしい人、わたくしの牧者にして花婿なのですから」</span></td>
</tr>
</tbody>
</table>
<p>そのとき、ある裁判官が怒り狂っている皇帝に、鉄の<ruby>鋸<rp>(</rp><rt>のこぎり</rt><rp>)</rp></ruby>をつけ、するどくとがった釘を打ちならべた車輪を四つ三日のあいだにこしらえさせなさい、このすごい責め道具に彼女の肉体を切りきざませるのです、ほかのキリスト教徒もこういうむごたらしい死にざまを見たら震えあがりましょう、と献策した。<br>
そこで皇帝は、刑車を作らせた。<br>
その車のふたつの車輪は、他のふたつの車輪と反対の方向にまわるようにし、最初のふたつが下のほうに動き、残りのふたつはこれとは逆に上にむかって動く。<br>
四つの車輪をこういうふうに配置して同時にうごかすと、乙女のからだは八つ裂きにされる仕掛けになっていた。<br>
聖カテリナは、主の<ruby>御<rp>(</rp><rt>み</rt><rp>)</rp>名<rp>(</rp><rt>な</rt><rp>)</rp></ruby>の栄光のために、また見物に集まった人びとを回心させるためにどうかこの刑車を破壊してください、と主にお願いした。</p>
<p>すると、主の御使いがあらわれて、刑車をこっぱみじんに破砕したので、飛びちった破片に当たって四千人もの異教徒が死んだ。<br>
王妃は、それまではそっと身をかくして高いところからこれを眺めていたが、すぐさま下に駆けおりてきて、皇帝にむかってこの眼をおおう残忍さをなじった。<br>
王は、これを聞いて激怒し、皇后が神々に供香することをこばんだので、まず皇后の乳房を<ruby>挟<rp>(</rp><rt>えぐ</rt><rp>)</rp></ruby>りとってから首を<ruby>刎<rp>(</rp><rt>は</rt><rp>)</rp></ruby>ねよと命じた。<br>
殉教の場所につれていかれるとき、皇后はカテリナにむかって、どうかわたしのために神さまに祈ってくださいとたのんだ。<br>
カテリナは、答えて言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「神のいつくしみを受けられた王妃さま、怖れることはございません。あなたは、今日はかない王国のかわりに永遠の王国を手に入れ、うつしみの良人と別れて、天の花婿とひとつになられるのですから」</span></td>
</tr>
</tbody>
</table>
<p>王妃は、カテリナの言葉になぐさめられた。<br>
そして、刑吏たちにむかって、命じられたことをすぐに執行するようにとうながした。<br>
そこで刑吏たちは、彼女を町のそとにつれていって、槍の穂先で乳房を挟りだしたのち、首を刎ねた。<br>
ポルピュリウスは、王妃の遺体を盗みだしてきて、てあつく葬った。</p>
<p>翌日、王妃の遺体の捜索がはじまった。<br>
僭主は、このことにかんして嫌疑のかかっている多くの人びとを拷問にかけよという命令を出した。
すると、ポルピュリウスがすすみでて、大きな声で臆せずに言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #93836c;">—&#160;</span></td>
<td><span style="color: #93836c;">「キリストの<ruby style="color:#93836c;">仕<rp>(</rp><rt style="color:#93836c;font-size: 70%;letter-spacing: 2px;">つか</rt><rp>)</rp></ruby>え<ruby style="color:#93836c;">仕女<rp>(</rp><rt style="color:#93836c;font-size: 70%;letter-spacing: 2px;">め</rt><rp>)</rp></ruby>であった皇后さまを葬りましたのは、このわたしです。かく言うわたしも、キリスト教に入信いたしました」</span></td>
</tr>
</tbody>
</table>
<p>マクセンティウスは、これを聞くと、われを忘れて猛獣のような声で唸った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「なんということになってしまったのか。わたしは、頼る者もなく、みんなから憐れまれる身の上になってしまった。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">ポルピュリウスよ、わたしのたましいの番人であり、わたしの心労のただひとりのなぐさめ手であったおまえまで、キリストにたらしこまれたのか！」</span></td>
</tr>
</tbody>
</table>
<p>皇帝は、この泣きごとをまわりにいる親衛兵たちにむかって言ったのだが、彼らはこう言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #936c93;">—&#160;</span></td>
<td><span style="color: #936c93;">「わたしたちも、キリストの信者でございます」</span></td>
</tr>
</tbody>
</table>
<p>皇帝は、すっかり逆上して、ポルピュリウスといっしょにこいつらも斬首し、死体を犬どもに投げあたえよと下知した。</p>
<p>そのあと、こんどはカテリナを呼ばせて、</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「そなたは、魔術を使って王妃を死に追いやってしまった。それでも、正気にもどるというのであれば、わたしの宮廷の第一人者にしてやろう。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">今日のうちに神々に香を供えるがよい。応じなければ、首を刎ねられるであろう」</span></td>
</tr>
</tbody>
</table>
<p>カテリナは答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「どうなりと、お決めになったことを実行なさってくださいませ。どんな拷苦にも耐える覚悟ができております」</span></td>
</tr>
</tbody>
</table>
<p>こうして、打ち首にするという宣告がくだされた。<br>
彼女は、仕置き場へ連行されると、眼を天に凝らして祈りはじめた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「おお、すべての信じる者の期待にして救いであるおん者、すべての乙女らのほまれであり誇りであるおん者、めでたき王、主イエスさま、お願いでございます。わたくしの受難の日をこころから祝い、臨終のさいや危急のときにわたくしの名を呼ぶ人たちの願いが、どうか聖寵によってかなえられますように」</span></td>
</tr>
</tbody>
</table>
<p>すると、ひとつの声がとどいた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #6c936c;">—&#160;</span></td>
<td><span style="color: #6c936c;">「わたしのいとし子、わたしの花嫁、来るがよい。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #6c936c;">天国の門は、あなたに開かれている。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #6c936c;">あなたの祝日をこころをこめて祝うすべての人たちに、あなたが願った聖寵をあたえると約束しよう」</span></td>
</tr>
</tbody>
</table>
<p>それから刑吏たちは、彼女の首を打ち落とした。
すると、彼女のからだから、血のかわりに乳がながれだした。<br>
天使たちは、遺体を抱きあげ、そこから歩いて２０日以上もかかる<a href="#note_sinai" title="シナイの山にはこび、うやうやしく葬った" id="sinai" class="orange">シナイの山にはこび、うやうやしく葬った</a>。<br>
彼女の聖遺骨からは、病めるすべての人たちを癒やす霊験あらたかな香油がたえずながれでている。</p>
<p><span style="color: #df8f20;">聖カテリナ</span>が殉教したのは、主の紀元３１０年ごろ帝位についた<a href="#note_maximinus" title="マクシミヌス帝" id="maximinus" class="orange">暴君マクセンティウス帝またはマクシミヌス帝</a>のときであった。<br>
マクセンティウスがこの犯罪や、彼がおかしたその他の罪業のために罰をくだされた話は、<a href="#note_croix" title="〈聖十字架の発見〉" id="croix" class="orange">〈聖十字架の発見〉の章</a>に述べられている。</p>
<p><br></p>
<p>話によると、<a href="#note_rouen" title="ロトマグス" id="rouen" class="orange">ロトマグス</a>のある修道士は、シナイの山に行き、７年のあいだ<span style="color: #df8f20;">聖女カテリナ</span>に仕えた。<br>
あるとき、ご遺体のかけらでもいただきとうございます、と聖女に熱心に祈願していると、突然聖女の指の一部がぼきりと手から落ちた。<br>
彼は、この神の<ruby>賜<rp>(</rp><rt>たま</rt><rp>)</rp>物<rp>(</rp><rt>もの</rt><rp>)</rp></ruby>をよろこんで押しいただき、故郷の修道院へもって帰った。</p>
<p>また、べつの話によると、ある男がいて、<span style="color: #df8f20;">聖カテリナ</span>にこころから帰依し、なんども聖女の名を呼んで加護をもとめたことがあった。
ところが、年月がたつうちに最初の熱意がさめ、帰依の気持もうすらいで、もう聖女に代願をもとめなくなった。<br>
あるとき、身を投げて祈っていると、たくさんの乙女たちがそばを通りすぎていくのが見えた。<br>
なかにひときわ明るくかがやくひとりの乙女がいた。
その乙女は、彼のそばまで来ると、頭からヴェールをおろし、顔が見えないようにして通りすぎていった。<br>
彼は、彼女のかがやく容姿にこころをうばわれて、あのかたはだれですかとたずねた。<br>
すると、乙女たちのひとりが答えた。<br>
<span style="color: #577575;">「あれは、あなたがむかしよくご存じのカテリナ聖女さまです。しかし、あなたは、いまではあのかたのことなんか忘れておいでなので、あのように顔をかくして、あかの他人のように通りすぎていかれたようです」</span></p>
<p><br></p>
<p>ここでわれわれは、<span style="color: #df8f20;">聖カテリナ</span>が<span style="color: #936c93;">五つの点</span>で衆にぬきんでた乙女であることに留意しなくてはならない。<br>
その五つの点とは、まず<span style="color: #936c93;">学識</span>、つぎに<span style="color: #936c93;">雄弁</span>、第三に<span style="color: #936c93;">毅然たる態度</span>、第四に<span style="color: #936c93;">純潔</span>、最後に<span style="color: #936c93;">聖品の高さ</span>である。</p>
<p><span style="color: #936c93;">まず</span>、<span style="color: #df8f20;">聖カテリナ</span>は、<span style="color: #936c93;">知恵</span>の点でずばぬけていた。<br>
というのは、あらゆる種類の哲学に精通していたからである。<br>
ところで、哲学ないし世界知というものは、<span style="color: #6c8993;">理論学</span>と<span style="color: #6c8993;">実践学</span>と<span style="color: #6c8993;">論理学</span>とにわかれる。<br>
<span style="color: #6c8993;">理論学</span>は、さらに<span style="color: #93896c;">認識論</span>と<span style="color: #93896c;">自然学</span>と<span style="color: #93896c;">数学</span>の<span style="color: #93896c;">三つ</span>にわかれるとされる。</p>
<p><span style="color: #df8f20;">聖カテリナ</span>は、<span style="color: #936c93;">神にかんする事柄の認識</span>においてすぐれた知見をもっていた。<br>
このことは、とりわけあの５０人の学者たちとの論戦において実証された。<br>
彼女は、ただひとりの神だけが真実の神であり、それ以外の神々はすべて偽神にすぎぬことを学者たちに論証してみせたのである。</p>
<p>また、それより<span style="color: #936c93;">低い次元の事柄の認識においては自然学的知見</span>ももっていた。<br>
さきにも見たように、とりわけ皇帝との問答にそれがしめされた。<br>
さらに、あらゆる地上のものをさげすむことにおいて数学的英知をもそなえていた。<br>
というのは、数学は、<a href="#note_boece" title="ボエティウス" id="boece" class="orange">ボエティウス</a>によれば、形あるすべてのものを物質をぬきにして抽象的に考察する学問だからである。<br>
<span style="color: #df8f20;">聖カテリナ</span>が自分のこころを地上の物質にたいするあらゆる執着から引きはなしたのは、数学的英知をもっていたことのあらわれであった。<br>
<span style="color: #577575;">「わたくしは、コストス王のひとり娘でございます。けれども、王家に生まれ......」</span>
と皇帝の下問に答えるくだりが、それである。<br>
彼女は、とりわけ王妃にむかってこの数学的英知をしめした。<br>
というのは、この物質の世界をさげすみ、地上の王国を棄てて永遠の王国をもとめることを皇后にすすめたからである。</p>
<p>つぎに、<span style="color: #93896c;">実践学</span>も、三つにわかれる。<br>
<span style="color: #93896c;">倫理学</span>と<span style="color: #93896c;">経済学</span>と<span style="color: #93896c;">公民学もしくは政治学</span>との三つである。<br>
倫理学は、いかにして道義をまなび、徳を身につけるかを教え、人間形成に役だつ学問である。<br>
経済学は、いかにして一家の暮らしを立てるかを教え、家長のために役だつ。<br>
政治学は、都市と市民と国家をいかに統治するかを教え、都市の支配者たちに役だつ。</p>
<p><span style="color: #df8f20;">聖カテリナ</span>は、これら三つの学問を身につけていた。<br>
彼女にはあらゆる良風美俗がそなわっていたから、倫理学を身につけていた。<br>
父王から受けついだ大きな所帯をたくみにとりしきったから、経済学にも<ruby>造<rp>(</rp><rt>ぞう</rt><rp>)</rp>詣<rp>(</rp><rt>けい</rt><rp>)</rp></ruby>があった。
さらに、皇帝に賢明な教えを垂れたから、政治学にも通じていた。</p>
<p>論理学も、三つにわけられる。<br>
推論と弁証と<ruby>詭<rp>(</rp><rt>き</rt><rp>)</rp>弁<rp>(</rp><rt>べん</rt><rp>)</rp></ruby>である。</p>
<p>推論は、哲学者のためのもの、弁証は、雄弁家と弁証家のためのもの、詭弁は、ソフィストのためのものである。<br>
<span style="color: #df8f20;">聖カテリナ</span>は、これら三つのものもそなえていた。<br>
というのは、さきにも書かれているように、
<span style="color: #577575;">「三段論法のさまざまな結論を駆使してあるときは寓意的、比喩的に、またあるときは弁証法的、神秘論的に皇帝と多くのテーマについて議論をたたかわせた」</span>からである。</p>
<p><span style="color: #936c93;">第二</span>に、<span style="color: #df8f20;">聖女カテリナ</span>の<span style="color: #936c93;">雄弁</span>は、賛嘆すべきものがあった。<br>
彼女の話からもうかがえるように、教えを説くときはじつに雄弁であったからである。<br>
その話しぶりは、弁明するのにもたいへんたくみであった。<br>
皇帝にむかって、
<span style="color: #577575;">「陛下は、たかが職人の手で建てられたにすぎないこの神殿を立派だとおもっていらっしゃいます」</span>
と言ったとき、それを実証してみせた。<br>
また、彼女の話しぶりは、魅力にもあふれていて、人びとのこころを引きつけた。<br>
ポルピュリウスと王妃がそうであった。<br>
ふたりは、彼女の話の甘味さによって信仰にみちびかれたのである。<br>
彼女はまた、人を説得する力をももっていた。<br>
彼女の弁舌によって説得された５０人の学者たちの例が、その証左である。  </p>
<p>第三<span style="color: #936c93;">
</span>は、彼女の<span style="color: #936c93;">毅然たる態度</span>である。<br>
というのは、彼女は、どんな<ruby>脅<rp>(</rp><rt>おど</rt><rp>)</rp></ruby>しにもめげず、平然としていたからである。
だから、皇帝が脅しをかけたときも、
<span style="color: #577575;">「考えつくどんな責苦でもいますぐ考えだしてくださいませ。
わたくしは、一刻もはやくわたくしの肉と血を主にささげたいと切願しているのでございます」</span>
とも、「どうなりと、お決めになったことを実行なさってくださいませ。
<span style="color: #577575;">どんな拷苦にも耐える覚悟ができております」</span>
とも言ってのけたのである。</p>
<p>さらに、彼女は、どんな贈りものも受けとらず、毅然としていた。  というのは、皇帝が
<span style="color: #577575;">「わたしの宮廷で皇后につぐ地位をあたえよう」</span>
と約束したとき、
<span style="color: #577575;">「考えるだけでも罪ぶかいようなことをおっしゃらないでくださいませ」</span>
とはねつけたからである。</p>
<p>彼女はまた、どんな責苦にたいしても毅然としていて、それにうち勝った。<br>
彼女が牢獄に入れられたときや、刑車に乗せられようとしたときの態度が、それを雄弁に語っている。</p>
<p><span style="color: #936c93;">四番目</span>は、彼女の<span style="color: #936c93;">乙女としての純潔</span>である。<br>
というのは、彼女は、純潔を汚されかねないような状況にあっても、純潔を守りつづけたからである。<br>
およそ純潔を失いかねない状況は、五つある。</p>
<ul>
<li><span style="color: #936c93;">心身をなまくらにする莫大な資産</span>、</li>
<li><span style="color: #936c93;">われわれを誘惑する機会</span>、</li>
<li><span style="color: #936c93;">遊び好きにさせる若さ</span>、</li>
<li><span style="color: #936c93;">人を放縦にする自由</span>、</li>
<li><span style="color: #936c93;">心をそそる美しさ</span>
の五つがそれである。</li>
</ul>
<p>この五つの条件がみなそろっていたにもかかわらず、<span style="color: #df8f20;">カテリナ</span>は、純潔を守った。</p>
<ul>
<li>彼女は、富裕な両親が残してくれたありあまるほどの富のなかで暮らしていた。</li>
<li>みずから女主人として<ruby>四<rp>(</rp><rt>し</rt><rp>)</rp>六<rp>(</rp><rt>ろく</rt><rp>)</rp>時<rp>(</rp><rt>じ</rt><rp>)</rp>中<rp>(</rp><rt>ちゅう</rt><rp>)</rp></ruby>召使いたちといっしょにいたのだから、機会はいくらでもあった。</li>
<li>彼女は、若かったし、おまけに自由な身そらでもあった。</li>
<li>というのは、宮殿から出ることもなく、ひとりきりで、自由な生活をしていたからである。</li>
</ul>
<p>この四つのことについては、上述のように、<br>
<span style="color: #577575;">「このとき１８歳であったカテリナは、大勢の召使いとありあまるほどの富にかこまれて、宮殿でひとりで暮らしていた」</span>
とあることからもわかる。<br>
彼女はまた、美しかった。
聖伝にも、<span style="color: #577575;">「彼女は、やさしく、美しかった。
そのすばらしい、たおやかな美しさのためにだれの眼にも愛くるしく見えた」</span>と書かれている。</p>
<p><span style="color: #936c93;">第五</span>は、彼女の<span style="color: #936c93;">聖品の高さ</span>である。<br>
というのは、ある種の聖人たちは、死にあたって特別な聖寵にあずかった。<br>
たとえば、</p>
<ul>
<li><a href="#note_jean" title="福音書記者ヨハネ" id="jean" class="orange">福音書記者ヨハネ</a>にあったような主のご出現、</li>
<li>聖ニコラウスのばあいのような香油の流出<span style="color: #ccc;">（黄金伝説・第３章）</span>、</li>
<li>聖パウロにみられた乳の流出<span style="color: #ccc;">（黄金伝説・第８５章）</span>、</li>
<li>聖クレメンスのばあいにあったように、主が墓を用意してくださること<span style="color: #ccc;">（黄金伝説・第１６４章）</span>、</li>
<li>聖女マルガレタが彼女を記念する日を祝う人たちのために祈ったときのように、その願いが神に聞きとどけられることなどがそれである<span style="color: #ccc;">（黄金伝説・第８８章）</span>。</li>
</ul>
<p>その聖伝に見られたように、<span style="color: #df8f20;">聖カテリナ</span>は、一身でこれらすべての聖寵にあずかったから、その聖品の高さがわかろうと言うものである。</p>
<p><br></p>
<p>ところで、最後にひとつの問題がある。<br>
というのは、<span style="color: #df8f20;">聖カテリナ</span>を殉教させたのは皇帝マクセンティウスであったか、それともマクシミヌス帝であったかという点で説がわかれているのである。<br>
<span style="color: #df8f20;">聖カテリナ</span>が受難したころの皇帝と言うと、つぎの３人である。  </p>
<ul>
<li>父のあとを継いで帝位についた<a href="#note_constantin" title="コンスタンティヌス" id="constantin" class="orange">コンスタンティヌス</a>。</li>
<li>マクシミアヌス帝の子で、ローマで近衛兵たちによって<ruby>正帝<rp>(</rp><rt>アウグストウス</rt><rp>)</rp></ruby>に祭りあげられたマクセンティウス。</li>
<li>東の<ruby>副帝<rp>(</rp><rt>カエサル</rt><rp>)</rp></ruby>であったマクシミヌス。</li>
</ul>
<p>この三人のうち、年代記によると、マクセンティウスは、ローマでキリスト教徒を迫害し、マクシミヌスは、東方で暴虐をほしいままにしたという。</p>
<p>だとすると、<span style="color: #df8f20;">聖カテリナ</span>を殉教に追いやったのはマクシミヌスであって、これをマクセンティウスとしたのは写本家のミスであるとする説が正しいのであろう。
<span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"/></svg></span></p>
</div>

<div id="body-inner">
<h3 id="note_artsliberaux" class="orange">七学芸</h3>
<div class="notices yellow">
<p>中世の中等、高等程度の学校では、神学以外に一般教養科目として七教養学が課せられ、これは、三学（文法、修辞、弁護法）と四学（算術、幾何、天文、数学）から成っていた。<br>
註に戻る：　<a href="#artsliberaux" title="七学芸">七学芸↑</a></p>
</div>
<h3 id="note_maxentius" class="orange">皇帝マクセンティウス</h3>
<div class="notices yellow">
<p>ローマ皇帝（位２８５年ー３０５年、３０５年ー３０８年）。ディオクレティアヌスによって副帝（カエサル）、ついで西の正帝（アウグストゥス）に任じられる、ともにキリスト教徒を迫害（３０３年）、ともに退位。その子マクセンティウスの挙兵を助けふたたび活動、のち不和になってガリア（フランス）に逃げ、女婿コンスタンティウスと争って自殺した。<br>
註に戻る：　<a href="#maxentius" title="皇帝マクセンティウス">皇帝マクセンティウス↑</a></p>
</div>
<h3 id="note_sybille" class="orange">シビュラ</h3>
<div class="notices yellow">
<p>異教的古代の女託宣者。その数はひとりとも十人とも言われる。最も古いのは、小アジアのエリュトライにいたシビュラであるが、ここに言われるのは、クマエ（ナポリの西にあった古い町）のシビュラである。彼女は、その託宣を９巻の本に書いてローマの王に売りつけ、この「シビュラの書」は、前一世紀のかピトール丘の火災で焼失するまでそこのユピテル神殿に秘蔵されていた。旧約偽典および新訳外典に入れられる『シビュラの託宣』は、前２世紀ごろエジプトで成立したユダヤ教的偽作文書で、それに後代にキリスト教的改変ないし挿入をくわえたもの。<br>
註に戻る：　<a href="#sybille" title="シビュラ">シビュラ↑</a></p>
</div>
<h3 id="note_scorpion" class="orange">さそり鞭</h3>
<div class="notices yellow">
<p>逆鉤または鎖のついた<ruby>鞭<rp>(</rp><rt>むち</rt><rp>)</rp></ruby>、拷問具のひとつ。<br>
註に戻る：　<a href="#scorpion" title="さそり鞭">さそり鞭↑</a></p>
</div>
<h3 id="note_maximinus" class="orange">マクシミヌス帝</h3>
<div class="notices yellow">
<p>この前後でマクシミヌスという名の皇帝は存在しない。あるいは、がレリウス帝の甥で３０５年その副帝となり、のち正帝となったマクシミヌス帝（在３０８年ー３１４年）との混同かもしれない。<br>
註に戻る：　<a href="#maximinus" title="マクシミヌス帝">マクシミヌス帝↑</a></p>
</div>
<h3 id="note_croix" class="orange">〈聖十字架の発見〉</h3>
<div class="notices yellow">
<p>黄金伝説の第６４章、〈聖十字架の発見〉とのことです。<br>
註に戻る：　<a href="#croix" title="〈聖十字架の発見〉">〈聖十字架の発見〉↑</a></p>
</div>
<h3 id="note_rouen" class="orange">ロトマグス</h3>
<div class="notices yellow">
<p><ruby lang="ja">ロトマグス<rp>(</rp><rt lang="la">Rothomagus</rt><rp>)</rp></ruby lang="ja">。現<ruby lang="ja">ルアン<rp>(</rp><rt lang="fr">Rouen</rt><rp>)</rp></ruby lang="ja">市（フランス中北部、セーヌ川下流の港町）の古名。ここに語られているのはルアン近傍の<ruby lang="ja">サント<rp>(</rp><rt lang="fr">Sainte</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>トリニテ<rp>(</rp><rt lang="fr">Trinité</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>デュ<rp>(</rp><rt lang="fr">du</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>モン<rp>(</rp><rt lang="fr">Mont</rt><rp>)</rp></ruby lang="ja">修道院（現在、<ruby lang="ja">サント<rp>(</rp><rt lang="fr">Sainte</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>カテリヌ<rp>(</rp><rt lang="fr">Catherine</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>デュ<rp>(</rp><rt lang="fr">du</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>モン<rp>(</rp><rt lang="fr">Mont</rt><rp>)</rp></ruby lang="ja">修道院）にいた修道士の話で、彼が１０世紀前半にシナイの聖カテリナ修道院からもち帰ったとされる聖女の聖遺物は、たびたび奇跡をこなったので、トリニテ＝オ＝モンは、たちまち西欧における聖カテリナ崇敬の中心地のひとつとなった。<br>
註に戻る：　<a href="#rouen" title="ロトマグス">ロトマグス↑</a></p>
</div>
<h3 id="note_fiancee" class="orange">わが身をキリストに花嫁としてささげた女でございます</h3>
<div class="notices yellow">
<p>伝承によると、カテリナは、皇帝の息子から求婚されたが、鏡にうつった姿から求婚者が家柄、美しさ、富、学識の点で自分にふさわしいくないことを見てとった。ある隠修士からキリストこそいちばんすばらしい花婿であることを教えられ、聖母にキリストの花嫁にしてくださいとたのむと、聖母は、二度彼女にあらわれて洗礼を受けないかぎり、キリストの花嫁になることはできないと教えた。彼女が洗礼を受けると、夢に幼児キリストがあらわれ、彼女の指に婚約指輪をはめたという。<br>
註に戻る：　<a href="#fiancee" title="申しあげておきますが、わたくしは、わが身をキリストに花嫁としてささげた女でございます">申しあげておきますが、わたくしは、わが身をキリストに花嫁としてささげた女でございます↑</a></p>
</div>
<h3 id="note_sinai" class="orange">シナイの山にはこび、うやうやしく葬った</h3>
<div class="notices yellow">
<p>しかし、シナイ山では聖カテリナのこともその墓のことも、まったく知られていなかったと言われる。山麓の有名な聖カテリナ修道院が建てられたのは、６世紀中葉のことである。聖遺物をもっているはずのこの修道院も、聖カテリナ崇敬の発祥地にも中心地にもならなかった。<br>
註に戻る：　<a href="#sinai" title="シナイの山にはこび、うやうやしく葬った">シナイの山にはこび、うやうやしく葬った↑</a></p>
</div>
<h3 id="note_rouen" class="orange">ボエティウス</h3>
<div class="notices yellow">
<p><ruby lang="ja">ボエティウス<rp>(</rp><rt lang="la">Boethius</rt><rp>)</rp></ruby lang="ja">は、古代ローマ末期のイタリアの哲学者、政治家。<br>
ローマ貴族の家系に生まれ、幼くして孤児となり貴族シンマクスに養われる。アテナイに留学し、帰国後は「水晶と象牙で飾られた書斎」で研究生活を送る。この前後に恩人シンマクスの娘と結婚している。時のイタリア支配者、東ゴート王国のテオドリック王に仕官し、貨幣制度の改革などに関わる。次第に高位に昇り、５１０年には西ローマ帝国の執政官となる。５２２年には彼の息子２人も執政官となるほど王の信任を得ていたが、かつての執政官アルビヌスの反逆に与したという嫌疑でパヴィアに投獄され、処刑された。獄中で韻文混じりの散文で『<ruby lang="ja">哲学の慰め<rp>(</rp><rt lang="la">De&#160;consolatione&#160;philosophiae</rt><rp>)</rp></ruby lang="ja">』を書き、慰めを古代哲学に求めている。<br>
ボエティウスの思想の根幹はプラトンとストア派にあり、理性により感情と外界の障害を克服しようとする。彼はアリストテレスの論理学をラテン語に翻訳し、これが中世のアリストテレス研究の端緒となった。また、ニコマコス、エウクレイデス、アルキメデス、プトレマイオスなどの著作も訳出しギリシア哲学・科学の紹介者として中世思想に大きな影響を与えている。<br>
註に戻る：　<a href="#boece" title="ボエティウス">ボエティウス↑</a></p>
</div>
<h3 id="note_jean" class="orange">福音書記者ヨハネ</h3>
<div class="notices yellow">
<p>福音書記者ヨハネの伝説は黄金伝説の<a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#jean9-selon-legende" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#jean9-selon-legende">第９章</a> に語られています。<br>
註に戻る：　<a href="#jean" title="福音書記者ヨハネ">福音書記者ヨハネ↑</a></p>
</div>
<h3 id="note_constantin" class="orange">コンスタンティヌス</h3>
<div class="notices yellow">
<p>ローマ皇帝コンスタンティヌス１世（位３０６年ー３３７年）大帝とよばれる。キリスト教の最初の公認者、その保護・育成につとめ、みずから〈１３人目の使徒〉おもって任じ、第一回ニカイヤ公会議によってアリウス派を保護とした。３３０年都をローマからビザンティウムに移し、これをコンスタンティノポリスと改名。自身はずっと<ruby>常勝太陽神<rp>(</rp><rt>ソル・インヴィクトゥス</rt><rp>)</rp></ruby>の信者であったが、臨終の床で受洗した（黄金伝説の第１２章に参照）。<br>
註に戻る：　<a href="#constantin" title="コンスタンティヌス">コンスタンティヌス↑</a></p>
</div>
<h3 id="note_incarnation" class="orange">託身</h3>
<div class="notices yellow">
<p>神のひとり子が人類救済のため聖霊のはたらきによりマリアの胎内で受肉として隆世したことを<ruby lang="ja">託身<rp>(</rp><rt lang="la">incarnatio</rt><rp>)</rp></ruby lang="ja">と言う。<br>
註に戻る：　<a href="#incarnation" title="託身">託身↑</a></p>
</div>
</div>

<!-- Page 17 -->

<div id="body-inner">
				<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《大殉教者バルバラ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《大殉教者バルバラ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.jpg 1920w"></picture><figcaption>大殉教者バルバラ</figcaption></figure>
<h2 id="barb-selon-legende" class="orange"><ruby style="color:#e6a64d;">黄金伝説<rt style="color:#e6a64d;">レゲンダ・アウレア</rt></ruby><span style="color: #e6a64d;">においての聖バルバラ</span></h2>
<p><a href="#note_nicomedie" title="ニコメディア" id="nicomedie" class="orange">ニコメディア</a>では、<a href="#note_maximien" title="マクシミアヌス大帝" id="maximien" class="orange">マクシミアヌス大帝</a>時代に、富裕な、とても礼儀正しい家族の出の<span style="color: #99713d;">ディアスコロス</span>という名の異教徒がいた。<br>
彼には<span style="color: #994c3d;">バルバラ</span>と呼ばれるとても美しい娘がいた。<br>
父は彼女をとても愛していた。
そのため、男の人一人も彼女を見られないように、彼は彼の作らせたとても高い塔に彼女を閉じ込めさせた。
最も若かい頃から、<span style="color: #994c3d;">バルバラ</span>は地上のことの虚しさを感じることにあたって、天のことの瞑想に力を入れるようになり始めた。<br>
ある日、<ruby>社<rp>(</rp><rt>やしろ</rt><rp>)</rp></ruby>に入って、壁を沿う偶像を見ると、彼女は両親に尋ねた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「これらの人間を表す偶像は何を意味するか」</span></td>
</tr>
</tbody>
</table>
<p>両親は彼女に答えた。  </p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「黙れ。彼らは人間ではなく、しかも神々。彼らは崇拝されたいのだ。」</span></td>
</tr>
</tbody>
</table>
<p><span style="color: #994c3d;">バルバラ</span>は言う。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「昔、彼らはかつて人間だったか」</span></td>
</tr>
</tbody>
</table>
<p>それで彼女にそうだと答えられた。<br>
そしたら、彼女はそれについて昼も夜も自分の中で言っていた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「もし我々の神々が人間だったならば、人間と同じようにして生まれ、人間と同じように死んだ。もし彼らが神だったならば、彼らは生まれないだろうし、死ぬこともないのだろう。なぜなら神が、私にして見える限り、始まったりはしないもの、止んだりもすることの出来るものではないから。」</span></td>
</tr>
</tbody>
</table>
<p>そこで、彼女はこの木や石でのいわれ神々を軽蔑するようになった。
しかし彼女にはまだ真の神の知識がまだ欠いていた。<br>
そうしているうちに、アレクサンドリアには、真の神の存在と偶像の空虚さを証明した<a href="#note_origene" title="オリゲネス" id="origene" class="orange">オリゲネス</a>という名の計り知れない知恵の持ち主がいた噂がニコメディアに広がった。<br>
これを知った<span style="color: #994c3d;">バルバラ</span>は喜びで満たされ、どうやって彼を聞きに行けるかを考えた。
だが、彼女は自分の父親に話す勇気がなかったので、彼女は自分の考えを、オリゲネスに書く考えを採択した。
彼女がこういう言葉でそうした。  </p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="visibility:hidden;">—&#160;</span></td>
<td><span style="color: #df8f20;">その栄光が普遍的に広まっているアレクサンドリアのオリゲネスへ、ニコメディアのバルバラは私。あなた方の召使いが，あなた方が彼女を真実の神の知識へ導くように切望している。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">自分の理性の最初の夜明けから、私はこの知識に到達したいと心の底では最強の希望を感じ、神が、話すことも聞こえることのできない、手の業である画像にはいられないと常に考えていた。又、人間になったことがあって，神として描かれている者たちが，そうにはいられないとも考えた。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">なぜなら、人間が始まって終わるのですが、神はすべての時代の前とすべての時代の後に存在します。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">そして私は，私には未知であるしかもすべてのことを創造したこの神に自分の信頼を置いた。私は彼に愛を捧げ、彼を知ることが出来るように何も惜しまない。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">あなたの才能の名声が私まで届いた。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">それで、尊ぶべき父よ、あなた方が説く神の学識までに私を連れて行ってくれることを私は考えた。ついにあなた方が私の無知の闇を分散させて真の信仰の光までに私を導いてくれることを私は願っている。</span></td>
</tr>
</tbody>
</table>
<p>オリゲネスへ自分の手紙を送った彼女は、涙を零しながら、主に祈って言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「主よ、私があなたのしもべに送った人の足を強めたまえ、私が求めた光が来るように。」</span></td>
</tr>
</tbody>
</table>
<p>使者はアレクサンドリアに到着し，
アレクサンデル大帝の母マメアの宮殿にオリゲネスを見付け、
彼がイエス・キリストの教義を説くことに精一杯だった。<br>
彼は<span style="color: #994c3d;">バルバラ</span>からの手紙を非常に喜んで受け取り、
こんな熱心を呼び起こす神を称賛し、
彼女にこう返信して急いだ。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="visibility:hidden;">—&#160;</span></td>
<td><span style="color: #165493;">「イエス・キリストの名に値しない司祭、又彼の説教師かも知れない、まだアレクサンドリアに在住しているオリゲネから異教徒の種族の、しかも帰化して神の子らとイエス・キリストの種族のバルバラへ。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">私はあなたに教えてやる，あなたが私に聞いているとおり，本当の神とは何かを。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">物質的に一つで、人格的に３人であることを知りたまえ。父と息子と聖霊。この教義を信じる者は、神に到達するために必要なものを持っている。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">あなたの欲望の充実に欠けているものを完成させるためには、信頼性を加えたまえ。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">私の使者に聞いたまえ。彼が神の律法を知らせて、彼が共に持っている聖なる本をあなたに読んで上げることにもする。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">イエス・キリストの名のために偉大な苦しみにさらされることを恐れないでください。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">彼は言っている。〈私のためにこの世で自分の魂を失う者は永遠の命ではその魂を保つだろう〉</span></td>
</tr>
</tbody>
</table>
<p>オリゲネスが<span style="color: #994c3d;">バルバラ</span>と協議するために弟子のいずれかを遣わして、
その人が到着したと言われた際、
彼女は直ちに入るように言った。<br>
神のしもべはイエス・キリストの名で彼女を迎えた。<br>
それで、父親がやって来て、
見知らぬ人を見て、
おびえて言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「この男はどなたで、何をしに来ているのか」</span></td>
</tr>
</tbody>
</table>
<p>アレクサンドリア人は、自分が医学科学の教養を持って、しかも一般の医者たちと違って魂をも癒す教師だと答えた。<br>
<span style="color: #994c3d;">バルバラ</span>の父はそれを聞いて、引き下げて、言葉を交わせることにした。<br>
そして、ヴァレンティヌスと号したキリスト教徒が<span style="color: #994c3d;">バルバラ</span>に宗教の神聖な神秘を説明し、
父親が彼女を置いた同じ塔で洗礼させて、
オリゲネスに送られた本を手渡した。<br>
彼女はこれらを読むことに努力し、
教師がいなかったのに、神秘的な学識ではとても大きいな進歩を遂げた。  </p>
<p>彼女の美しさで、その国のいくつかの貴族の方々が彼女に恋慕したと言われている。
彼らは彼女にお婿を取るよう父親と話をした。<br>
それで、父親が塔に行き、そういうふうに納得させようとしていった。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「娘よ、力のある方が君を思い出して、お嫁にすると言ってくれた。君はどうしたいのか」</span></td>
</tr>
</tbody>
</table>
<p>彼女は父親に怒りの満ちた見つめ方で答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「父親よ、こんな無理にさせないでくれる」</span></td>
</tr>
</tbody>
</table>
<p>彼は彼女から去り、
彼女から離れながら、たくさんの労働者を来させて、
お風呂の館を建てさせ、遠く離れた国へ行った。<br>
<span style="color: #994c3d;">バルバラ</span>は塔から何が作られたかを見に降りて、
北側には２つの窓しかいと見て、
労働者たちに向かって言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「なぜこの２つの窓を作ったのか」</span></td>
</tr>
</tbody>
</table>
<p>彼らは答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「お父さまがそう命じた」。</span></td>
</tr>
</tbody>
</table>
<p>彼女は答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「もう一つの窓を作ってくれ」</span></td>
</tr>
</tbody>
</table>
<p>彼らは答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「お父さまが怒られるのを恐れている」</span></td>
</tr>
</tbody>
</table>
<p>彼女は言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「私が言ったとおりにしてくれれば、私は父に承認することにする。」</span></td>
</tr>
</tbody>
</table>
<p>そこで彼らはもう一つの窓を作った。<br>
<span style="color: #994c3d;">バルバラ</span>は自分の手で、太陽の昇る側に、この建物の中で貴重な十字架を置いた。
そうすると、塔に戻りながら、父親があがめる偶像を見にした。<br>
聖霊の感応に従い、彼女は顔につばを吐いて言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「君たちに同じくなりたまえ、君たちを作って、自分の信頼を君たちに置く人たちよ」</span></td>
</tr>
</tbody>
</table>
<p>建物が完成する後、父親は旅から戻り、３つの窓を見て、労働者たちに向いて言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「なぜ３つの窓を作ったのか」</span></td>
</tr>
</tbody>
</table>
<p>彼らは答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「お娘さまが私たちに命令した。」</span></td>
</tr>
</tbody>
</table>
<p>そこで彼は娘に言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「３つの窓を作る指示をしたのはのあなたか」</span></td>
</tr>
</tbody>
</table>
<p>彼女は答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「そうするのことに十分な理由があったの。３つの窓が二元全体を照明するから」。</span></td>
</tr>
</tbody>
</table>
<p>そして父親は彼と一緒にお風呂の間まで連れて言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「なぜ３つの窓が２つよりも明るくなっているのか」</span></td>
</tr>
</tbody>
</table>
<p>彼女は答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「世界を照明して星の進路を定めるのは３つである。父と子と聖霊。そして、実在として唯一である。」</span></td>
</tr>
</tbody>
</table>
<p>そこで、激怒に満たされた父は彼女を殺しに刀を抜いた。<br>
しかし聖人は神に祈りをささげて、
城壁が少し開いて、
二人の羊飼いが羊を牧草させている山に運ばれた。<br>
父親が彼女の捜索し始めて、この羊飼いへ行き、彼らに娘を見たかと尋ねた。<br>
その内の一人は、父親が彼女がどこにいたのか分からずにいるから怒っているかを見たら、黙った。もう一人が指で彼女を指した。<br>
<span style="color: #994c3d;">聖バルバラ</span>は彼女を裏切った者を呪って、
その場で彼が大理石の立像に変えさせられて、
その羊数匹が<ruby>飛蝗<rp>(</rp><rt>バッタ</rt><rp>)</rp></ruby>に変えさせられた。<br>
が、この話は偽書である。<br>
父親は、彼女を見つけると、彼女を殴りつけ、髪で彼女を引き寄せて、
鎖で彼女を重くしかかった。<br>
彼は彼女を牢獄に閉じ込めて
番人たちをたたせ、
行われたすべてを<a href="#note_marcien" title="マルキアヌス" id="marcien" class="orange">マルキアヌス</a>代理執政官に知らせて行った。<br>
代理執政官は<span style="color: #994c3d;">バルバラ</span>を彼の前に連れて来させてほしいと願った。<br>
彼女を見ると，彼は彼女の偉大な美しさに感銘を受けて言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&#160;</span></td>
<td><span style="color: #165493;">「もしあなたが自分を救おうとしたければ永遠の神々に犠牲をしたまえ、さもないと最高の苦しみで死ぬことになる。」</span></td>
</tr>
</tbody>
</table>
<p>彼女は答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「私は天と地球とそれが入っているすべてを成し遂げた私の主イエス・キリストに自分を犠牲として捧げたいのだ。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">あなたが崇める鬼たちについては、預言者が言われた。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">彼らは口があるが話せない。目があっても見えない。彼らに敬意を表する人々が彼らに似ている。」</span></td>
</tr>
</tbody>
</table>
<p>激怒した代理執政官は、彼女の服を脱がせて遠慮なく牛の頸筋の鞭で打つのを命じた。
それで彼女の全身が血に塗れてから、彼女にどんな苦痛を与えるかを決めるまでに牢獄に連れ戻すようにと命じた。<br>
真夜中に、大きな明快な光が殉教者の彼女を囲むことになった。イエス・キリストは彼女に現れて言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #6c936c;">—&#160;</span></td>
<td><span style="color: #6c936c;">「勇気を出してください 、娘よ。あなたの受難中では、天国と地上では大いなる喜びがあるようとなる。僭主者のおどしを恐れないでくれたまえ。私はすべての悪から守るためにあなたと一緒にいる。」</span></td>
</tr>
</tbody>
</table>
<p><span style="color: #994c3d;">聖バルバラ</span>は主の言葉に極端な喜びを感じ、
朝、再び代理執政官の前に再び来させられ、彼女が前日に殴られたのに一撃の跡が一切残っていないのを見て、言われた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&#160;</span></td>
<td><span style="color: #165493;">「神々がどれだけ貴女に好意的なのか、どれだけ貴女を愛しているかのを見てくれたまえ。彼らが貴女の傷を癒したからだ。」</span></td>
</tr>
</tbody>
</table>
<p><span style="color: #994c3d;">バルバラ</span>は彼に答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「あなたの神様はあなたと同様で耳が聞こえない、目も見えていない 、口も聞けないのであって、どうやって私を癒される出来たのであろうか。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">私を癒したのは，生きている神の子イエス・キリストなのだ。が、あなたは彼を見ない。なぜなら、あなたの心は悪魔によって鍛えられているからだ。」</span></td>
</tr>
</tbody>
</table>
<p>代理執政官がいらいらした獅子のようにふるえて、火のつけた松明で肋骨を焼いて頭をハンマーで撃ってやるのを命じた。<br>
聖人が空を仰ぎて言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「主よ、私はあなたの愛のために苦しんでいるのだとご存知だ。私を見捨てないでくれたまえ。」</span></td>
</tr>
</tbody>
</table>
<p>不信心なる代理執政官が彼女に乳を切られるのを命じた。<br>
それで、彼女は言う。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「ご自分の存在の枠外にこの私を追い出せて、主よ、聖霊を取り除かないでくれたまえ。」</span></td>
</tr>
</tbody>
</table>
<p>そこから、彼は町中に彼女を裸で殴られながらも無理矢理に運ばせれるのを命じた。<br>
そうしたら、彼女は言われた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「私の支えであって、雲で空を覆っている主よ、不信心なる目にさらされないようにこの私の体を覆いでくれたまえ。」</span></td>
</tr>
</tbody>
</table>
<p>そこから天から天使が降りて、彼女に白い寛衣を持って来ることになった。<br>
そしたら、代理執政官が彼女に頭を切るように命じられた。
しかし、彼女の父親が彼女を掴めて山へ連れて行った。
彼女はこの祈りをした。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「すべてのことがあなたに従う主イエスよ、私の殉教を思い起こしてあなたの聖なる名を祈る人たちに裁きの日に罪が許されるよう叶え上げたまえ。」</span></td>
</tr>
</tbody>
</table>
<p>そしたら彼女には天からやって来る声が聞こえてきて答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #6c936c;">—&#160;</span></td>
<td><span style="color: #6c936c;">「私の愛する人よ、来たまえ。天国にある私の父の家に癒したまえ。君が求めているのが君には叶えられている。」</span></td>
</tr>
</tbody>
</table>
<p>すると殉教者が自分の父親本人の手で首が切られた。<br>
彼が山から降りると、天の火の塊が彼に襲い掛かって、彼を喰わせた。
彼から一影も残らなかった。</p>
<p>強力な<a href="#note_saxe" title="ザクセン" id="saxe" class="orange">ザクセン</a>伯爵の男がいた。
彼は自分の敵を捕虜してある塔に誰もが違反者には最も厳しい<ruby>刑<rp>(</rp><rt>けい</rt><rp>)</rp></ruby>を科して、その方に食べさせたり、飲みさせたりと禁じながらも閉じ込めさせた。<br>
その人がそこに数日間いた後、
塔の番人に、うめき声をあげながら、<span style="color: #994c3d;">聖バルバラ</span>のことを考えて、死なないようにパンを少しあたえるように願った。
が、番人はその願いを気にしなかったから、
彼はぐったりと横たわっていたままだった。
番人が彼が死んだと見込んで、
彼が伯爵に悪い匂いが広がる前に死体を取り除く許可を求めた。
そういうわけで死んだと思われているものの首に紐を縛って、
岩のてっぺんから飛ばし降ろした。
地面に当たるとすぐに立ち上がって、
そこにいたみんなが恐怖し、逃げようとした。<br>
彼は彼らを呼び戻して恐れないようにと言った。
そしたら、彼らが彼に近づいてきて，どうやって命を維持できたかと尋ねた。
彼は彼らに答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&#160;</span></td>
<td><span style="color: #165493;">「聖バルバラが全ての困難を凝らすように僕を助けてくれた。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">墜落中で助けてくれたのは彼女だったし、僕は告白せずに聖体を受けずに死ぬことはできないのだ。」</span></td>
</tr>
</tbody>
</table>
<p>なぜこの恵みを得ることが出来たかと尋ねられて、こう答えた。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&#160;</span></td>
<td><span style="color: #165493;">「僕は聖バルバラに気に入って貰うよう一年も彼女の祝日に断食や祈りを惜しまなかった。だから彼女が神様に僕が秘跡を受けずに死ぬがないようにと願い出てくれた。」</span></td>
</tr>
</tbody>
</table>
<p>そしたら、これらの秘跡を受けてからすぐに、息を返した。<br>
また、我々は、ローマ人の王の時代、アタウルフという伯爵がオリエントのそれぞれの州に頭として任命され、ある兵士が若い少女に暴力を振るった疑いされたことがあったと読む。<br>
彼は牢獄で判決を待っていた間、告白を願い出た。
告白担当者が彼が無罪だと見抜いて、<span style="color: #994c3d;">聖バルバラ</span>に自分を奉仕することと彼女の名誉のため巡礼しない限り自分の家に戻らないことを誓うようと励んだ。<br>
女の人が声を大にして判決が言い渡されることを訴えている一方、裁判官たちが出席して被告人を出頭してから、死刑の宣告を下すことにした。
そうすると、誰も知らない方が出て来て、その方が、発言する許可を願い出てから、正当な、反論の余地のない理屈で兵士が無罪で、判決も不公平だと明らかにした。<br>
裁判官たちは彼を放裁させて、
自由に戻った兵士が、<span style="color: #994c3d;">聖バルバラ</span>の奉仕する日々を終えた。
弁護士となった無名の男の人が彼が誰であるか知らないままに消えた。</p>
</div>

<div id="body-inner">
<h3 id="note_nicomedie" class="orange">ニコメディア</h3>
<div class="notices yellow">
<p><a href="https://ja.wikipedia.org/wiki/ニコメディア" title="https://ja.wikipedia.org/wiki/ニコメディア"><ruby lang="ja">ニコメディア<rp>(</rp><rt lang="grc">Νικομήδεια</rt><rp>)</rp></ruby lang="ja"></a>は、<a href="https://ja.wikipedia.org/wiki/ビテュニア" title="https://ja.wikipedia.org/wiki/ビテュニア">ビチニア王国</a>の首都、小アジアの都市です。 今はトルコにあり、<ruby lang="ja">イズミット<rp>(</rp><rt lang="tr">İzmit</rt><rp>)</rp></ruby lang="ja">と呼ばれている。 それは、<a href="https://ja.wikipedia.org/wiki/ディオクレティアヌス" title="https://ja.wikipedia.org/wiki/ディオクレティアヌス">ディオクレティアヌス</a>と<a href="https://ja.wikipedia.org/wiki/コンスタンティヌス1世" title="https://ja.wikipedia.org/wiki/コンスタンティヌス1世">コンスタンティヌス</a>の首都だった。<br>
註に戻る：　<a href="#maximien" title="マクシミアヌス大帝">ニコメディア↑</a></p>
</div>
<h3 id="note_maximien" class="orange">マクシミアヌス大帝</h3>
<div class="notices yellow">
<p><a href="https://ja.wikipedia.org/wiki/マクシミアヌス" title="https://ja.wikipedia.org/wiki/マクシミアヌス">マクシミアヌス</a>。ローマ東帝国皇帝だった<a href="https://ja.wikipedia.org/wiki/ディオクレティアヌス" title="https://ja.wikipedia.org/wiki/ディオクレティアヌス">ディオクレティアヌス</a>と２８６年から３０５年まで共同皇帝。<a href="https://ja.wikipedia.org/wiki/マクセンティウス" title="https://ja.wikipedia.org/wiki/マクセンティウス">マクセンティウス</a>の父上。<br>
註に戻る：　<a href="#nicomedie" title="ニコメディア">マクシミアヌス大帝↑</a></p>
</div>
<h3 id="note_origene" class="orange">オリゲネス</h3>
<div class="notices yellow">
<p><a href="https://ja.wikipedia.org/wiki/オリゲネス" title="https://ja.wikipedia.org/wiki/オリゲネス"><ruby lang="ja">オリゲン<rp>(</rp><rt lang="grc">Ὠριγένης</rt><rp>)</rp></ruby lang="ja"></a>は古代キリスト教の神学者で、１８５年頃アレクサンドリアで生まれ、２５３年頃にティルスで亡くなり、聖人ではなく教父として認められている。<br>
註に戻る：　<a href="#origene" title="オリゲネス">オリゲネス↑</a></p>
</div>
<h3 id="note_marcien" class="orange">マルキアヌス</h3>
<div class="notices yellow">
<p>黄金伝説意外に、この代理執政官の跡は一つもありません。<br>
註に戻る：　<a href="#marcien" title="マルキアヌス">マルキアヌス↑</a></p>
</div>
<h3 id="note_saxe" class="orange">ザクセン</h3>
<div class="notices yellow">
<p>ドイツの一地域で、その境界は歴史を通じて様々であり、ザクセンのパラティネート郡は、神聖ローマ皇帝の公国でした。１０世紀にオットー１世が創始し、現在のザクセン公国の南東のザーレ・ウンシュトルート地方に広がった。<br>
註に戻る：　<a href="#saxe" title="ザクセン">ザクセン↑</a></p>
</div>
</div>

<!-- Page 18 -->

<div id="body-inner">
				<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>福音書記者ヨハネ</figcaption></figure>
<h2 id="jean9-selon-legende" class="orange"><ruby style="color:#e6a64d;">黄金伝説<rt style="color:#e6a64d;">レゲンダ・アウレア</rt></ruby>においての福音書記者ヨハネ</h2>
<p>第９章　福音書記者ヨハネ</p>
<p><a href="#note_nomdejean" title="ヨハネの名" id="nomdejean" class="orange">ヨハネの名</a>は、<ruby lang="ja"><span style="color: #994c3d;">ヨハネス</span><rp>(</rp><rt lang="la"><span style="color: #994c3d;">Johannes</span></rt><rp>)</rp></ruby lang="ja">、<span style="color: #994c3d;">〈<ruby style="color:#994c3d;">主<rp>(</rp><rt style="color:#994c3d;font-size: 70%;letter-spacing: 2px;">しゅ</rt><rp>)</rp></ruby>の恩寵〉</span>のこと、あるいは<span style="color: #994c3d;">〈恩寵をやどした人〉</span>のこと、あるいは<span style="color: #994c3d;">〈あた えられている人〉</span>のこと、あるいは<span style="color: #994c3d;">〈神から贈物をされた人〉</span>のことである。
<span style="color: #994c3d;">ヨハネ</span>という名前のこの四つの解釈のなかに、彼がもっていた神からの四つの特別な贈物をみとめることができる。</p>
<p><span style="color: #994c3d;">第一</span>には、<span style="color: #994c3d;">キリストが聖ヨハネにたいしてもっておられた特別な愛</span>である。<br>
というのは、キリストは、<span style="color: #994c3d;">ヨハネ</span>をほかの弟子たちよりも愛し、彼にたいしては親愛のしるしを他の弟子たちにたいするよも多くお見せになったからである。<br>
彼が主の恩寵と言われ、主の恵みを受けた人とよばれるのは、そのためである。<br>
実際、キリストは、彼をペテロ以上に愛された。<br>
つまり、それは、こころの愛であり、胸襟をひらいた愛であった。<br>
主は、<span style="color: #994c3d;">ヨハネ</span>とペテロとをこころからひとしく愛されけれども、愛のしめしかたがちがっていた。<br>
すなわち、<span style="color: #994c3d;">ヨハネ</span>とはより親密な交わりをもたれ、ペテロにはより外的な恩恵を施されたのである。</p>
<p><span style="color: #994c3d;">第二</span>には、彼の<span style="color: #994c3d;">肉体の清純さ</span>である。<br>
なぜなら、彼は、主によって童貞たるべく選ばれた人間であったからである。<br>
彼が〈恩寵をやどした人〉とよばれるのは、そのためである。<br>
というのは、童貞のもつ恵みが彼のなかにあったからである。<br>
事実また、主は、彼が結婚式をあげようとしたとき、彼をお召しになったのである。</p>
<p><span style="color: #994c3d;">第三</span>には、<span style="color: #994c3d;">神秘の啓示</span>である。<br>
〈あたえられている人〉と言われるのは、そのためである。<br>
というのは、彼には神の最も深奥の秘密についての、すなわち言葉の神性と世界の終末についての認識があたえられていたのである。</p>
<p><span style="color: #994c3d;">第四</span>には、<span style="color: #994c3d;">神が彼におん母をゆだねられたこと</span>である。<br>
〈神から贈物を受けた人〉とよばれるのは、そのためである。<br>
というのは、主が聖母を彼の保護にゆだねられたのは、主が彼におあたえになることのできた最大の贈物だったからである。<br>
彼の生涯を記述したのは、<a href="#note_hoteriche" title="神に永劫に罰せられた富裕な貪欲者と神に選ばれた貧しいラザロ" id="laodiceia" class="orange"><ruby lang="ja">ラオディケイア<rp>(</rp><rt lang="la">Laodiceia</rt><rp>)</rp></ruby lang="ja"></a>の司教ミレトスであった。そして、<a href="#note_isidore" title="イシドルス" id="isidore" class="orange">イシドルス</a>がその著『諸聖人の出自と生涯と死』のなかでそれを集約している。</p>
<h3 class="orange">信仰のためドミティアヌスに迫害される</h3>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島島への流しへの出発》</figcaption></figure>
<p>使徒であり福音書記者であった<span style="color: #994c3d;">ヨハネ</span>は、主の<ruby>愛<rp>(</rp><rt>まな</rt><rp>)</rp></ruby>弟子であり、選ばれて童貞の肉体をもっていた。１２使徒が聖霊降臨のあと世界じゅうに散らばっていったとき、<span style="color: #994c3d;">ヨハネ</span>は、<a href="#note_asie" title="アジア" id="asie" class="orange">アジア</a>に行き、その地に多くの教会を建てた。<br>
<a href="#note_domitien" title="皇帝ドミティアヌス" id="domitien" class="orange">皇帝ドミティアヌス</a>は、それを聞くと、彼を捕えさせ、<a href="#note_porte-latine" title="ラティナ門" id="porte-latine" class="orange">ラティナ門</a>とよばれているローマの門外で煮えたぎった油をみたした桶に投げこむように命じた。<br>
しかし、<span style="color: #994c3d;">聖ヨハネ</span>は、肉の汚れを知らずにこの世の道を歩いてきたとおなじように、火傷ひとつしないで桶から出てきた。<br>
皇帝は、<span style="color: #994c3d;">ヨハネ</span>がなおも説教をやめようとしないのを見て、こんどは<a href="#note_patmos" title="パトモス島" id="patmos" class="orange">パトモス島</a>という遠海の島へ流刑にした。彼は、その島にまったくひとりで住み、ここで『ヨハネの黙示録』を書いた。  </p>
<h3 class="orange">ドゥルシアネの復活</h3>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1920.jpg 1920w"></picture><figcaption>右翼パネル内面の詳細、右側の最左の柱頭、《ドゥルシアネの復活》</figcaption></figure>
<p>その年のうちに、皇帝は、その極悪非道のために試逆され、彼の命令は、元老院によってすべて取り消された。
こうして、不当に流刑の身になっていた<span style="color: #994c3d;">ヨハネ</span>は、たいへんな敬意をもってふたたび<a href="#note_ephese" title="エペソス市" id="ephese" class="orange">エペソス市</a>に迎えられた。<br>
多くの信者たちが駆けよってきて、</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&#160;</span></td>
<td><span style="color: #165493;">「天主の御名においておいでくださったかたに祝福がありますように」</span>と口々に言った。</td>
</tr>
</tbody>
</table>
<p>しかし、彼が町なかに入っていくと、彼の女友達で、彼が帰ってくることをこころから願っていた<a href="#note_drusiane" title="ドゥルシアネ" id="drusiane" class="orange">ドゥルシアネ</a>の死体がはこばれてきた。<br>
そして、いっしょについてきた彼女の両親や寡婦たちや孤児たちは、こう叫んだ。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&#160;</span></td>
<td><span style="color: #165493;">「尊敬すべきヨハネさま、ごらんください、これはドゥルシアネの変わりはてた姿です。彼女は、あなたの戒めと教えにしたがって貧しいわたしたちにいつも食べ物をあたえ、困っているところを助けてくれました。そして、いつもあなたのお帰りを待ちこがれて、</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">〈ああ、死ぬまでにもう一度神の使徒さまにお会いしたい！〉と申しておりました。いまあなたがお帰りになりましたのに、彼女は、もうあなたを見ることができないのです」と。</span></td>
</tr>
</tbody>
</table>
<p><span style="color: #994c3d;">ヨハネ</span>は、担架をそこにおき、死体のひもを解くようにと命じて、</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「ドゥルシアネ、わが主イエス・キリストがあなたの眼をさましてくださいますように。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">さあ、起きあがって、家に帰り、わたしのために食事の用意をしてください」</span>と言った。</td>
</tr>
</tbody>
</table>
<p>すると、ドゥルシアネは、立ちあがって、<span style="color: #994c3d;">ヨハネ</span>から言いつかったことをはたすために、すたこらさっさと家に帰っていった。まるで昼寝から眼をさましたところだというふうにしか見えなかった。</p>
<h3 class="orange">クラトンの洗礼</h3>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《クラトンの洗礼》</figcaption></figure>
<p>翌日のこと、<span style="color: #b3884d;">クラトン</span>という哲学者が、市場で民衆を呼び集めて、この世を軽蔑しなくてはならぬと説き、それを実地にやって見せていた。<br>
彼は、あらかじめふたり兄弟の富裕な青年に全財産を若干の宝石と引きかえに売るように命じておいた。<br>
そして、いまふたりに言いつけて、その宝石を民衆の面前で打ちくだかせた。</p>
<p>たまたまそこを通りかかった<span style="color: #994c3d;">聖ヨハネ</span>は、その哲学者を呼び寄せて、そのような世界蔑視を<span style="color: #994c3d;">三つの理由</span>からこらしめた。</p>
<p><span style="color: #994c3d;">第一</span>に、<span style="color: #994c3d;">人びとはそうした蔑視をほめるけれども、天主はそれをよろこばれないから</span>である。</p>
<p><span style="color: #994c3d;">第二</span>に、<span style="color: #994c3d;">そうした行為によっては罪をつぐなうことができないからである。そのような行為は、無益である。ちょうど病気を治してくれない薬がなんの役にもたたないのとおなじ</span>である。</p>
<p><span style="color: #994c3d;">第三</span>に、キリストがある富裕な青年にむかって<a href="#note_mathieu" title="もし完全になりたいのなら" id="mathieu" class="orange">〈もし完全になりたいのなら、行って持ち物を売り払い、貧しい人々に施しなさい〉</a>とお命じになったように（のきなみ）、<span style="color: #994c3d;">財産を貧しい人びとに施すような世界蔑視こそ功徳のあるものだから</span>である。</p>
<p><span style="color: #b3884d;">クラトン</span>は、それにたいして、</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&#160;</span></td>
<td><span style="color: #b3884d;">「ほんとうに神があなたの先生であり、この財宝が貧しい人たちにわけあたえられることをその神が望んでいるのであれば、わたしが世人の拍手を得るために打ちくだかせたこの宝石をもとどおりにして、神さまをよろこばせてあげることだな」</span>と言った。</td>
</tr>
</tbody>
</table>
<p><span style="color: #994c3d;">聖ヨハネ</span>は、割れた宝石を手にとって祈った。
と、たちまち宝石は、もとどおりになった。<br>
このときから、<span style="color: #b3884d;">クラトン</span>は、キリスト教に改宗した。ふたりの若者も、彼といっしょに改宗し、宝石を売って、その金を貧しい人びとにわけあたえた。  </p>
<h3 class="orange">聖ヨハネによる物質的な豊かさを反駁する説教</h3>
<p>べつのふたりの貴族の青年がこれを見て、彼らの全財産を売り、その金を貧しい人たちに施し、<span style="color: #994c3d;">ヨハネ</span>にしたがった。しかし、ある日、ふたりは、彼らのかつての下僕が高価な衣服を着ているのに会い、自分たちの外套がいかにも粗末なのを見て、すっかり悲しくなった。
<span style="color: #994c3d;">ヨハネ</span>は、これに気づき、ふたりの悲しそうな顔を見ると、海岸から若枝と小石とを拾ってくるように言いつけ、それらを金と宝石とに変えた。<br>
そして、それを町の金細工師と宝石師のところへふたりにもっていかせた。
彼らは、７日後にまた帰ってきて、親方たちがこれほど純粋な金や良質の宝石は見たことがないと言っていたと報告した。<br>
すると、<span style="color: #994c3d;">ヨハネ</span>は、こう言った。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「さあ、出かけていって、あなたたちが売った財産を買いもどしなさい。しかし、そのかわり天国での報酬は、もうもらえませんよ。この世で花を咲かせたら、あの世ではしおれるのです。かりそめの世で富裕になったら、永遠の生命においては物乞いをして歩くのです」</span></td>
</tr>
</tbody>
</table>
<p>そう言って、富をいましめる説教をはじめ、われわれを富にたいする過度の欲望から遠ざけてくれる六つのものを語ってきかせた。</p>
<p><span style="color: #994c3d;">第一に</span>、<span style="color: #994c3d;">聖書</span>である。<br>
使徒は、ふたりに聖書のなかから、<a href="#note_hoteriche" title="神に永劫に罰せられた富裕な貪欲者と神に選ばれた貧しいラザロ" id="hoteriche" class="orange">神に永劫に罰せられた富裕な貪欲者と神に選ばれた貧しいラザロ</a>とのたとえ話を話した。</p>
<p><span style="color: #994c3d;">第二に</span>、<span style="color: #994c3d;">自然</span>である。人間は、富をもたずに生まれてきて、またまるはだかでこの世を去っていくからである。</p>
<p><span style="color: #994c3d;">第三に</span>、<span style="color: #994c3d;">被造物</span>である。だれもが見てわかるように、太陽や月や星や雨や風は、われわれ万人に共有のものであるが、それとおなじように、すべての事物も、人間の共有物であるはずだからである。</p>
<p><span style="color: #994c3d;">第四に</span>、<span style="color: #994c3d;">財をなす</span>である。金持ちは<ruby>金<rp>(</rp><rt>かね</rt><rp>)</rp></ruby>と悪魔の奴隷にすぎない。財産が彼を所有するのであって、彼が財産を所有しているのではない。金持ちは悪魔の奴隷である。というのは、福音書にもあるように、財神マンモンに奉仕することである。</p>
<p><span style="color: #994c3d;">第五に</span>、<span style="color: #994c3d;">不安</span>である。というのは、金持ちは、どうして富を手に入れようかと日夜あくせくし、どのようにして富を保管しようかと戦々恐々としていなければならないからである。</p>
<p><span style="color: #994c3d;">第六に</span>、富から生じる<span style="color: #994c3d;">損失</span>である。<br>
財産は、二つの悪が伴う損失を起こす。一つはこの世での悪としての虚しさであって、ともう一つのは次の世での悪として、永遠の劫罰である。<br>
これらの損失が、永遠的損失として、もう一つの損失の起こさせる。これは今での命での恩寵と将来での命の永遠的栄光である二つの財産の損失である。</p>
<h3 class="orange">若い結婚者の復活</h3>
<p>こうして<span style="color: #994c3d;">聖ヨハネ</span>が富を否定する説教をしているとき、ひとりの死んだ若者が、彼のまえにはこばれてきた。若者は、３０日まえに結婚したばかりであった。<br>
あとに残された彼の妻は、彼の母親や彼の死をいたむ友人たちといっしょに使徒の足もとにひれ伏して、ドゥルシアネをもとどおりにしたように、神の御名においてこの死者の眠りをさましてほしいとたのんだ。<br>
<span style="color: #994c3d;">ヨハネ</span>は、もらい泣きをし、長いあいだ死者のうえに身をかがめて祈っていた。すると、若者は死からよみがえった。<span style="color: #994c3d;">ヨハネ</span>はその若者に命じて、彼の弟子になっているさっきのふたりの青年に、あの世でどのような責苦が彼らを待ちかまえているか、また、彼らがどのような至福を失ってしまったかを話させた。<br>
若者は、ふたりにむかって、地獄の苦しみと天国の歓びとについていろいろの不思議を語ってきかせて、</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「お気の毒千万です。わたしは、あなたがたの天使たちがあなたがたのことを悲しんで涙をながし、悪魔がほくそえんでいるのを見ましたよ」</span>と言い、</td>
</tr>
</tbody>
</table>
<p>さらに、彼らが失った天国の宮殿がめくらむばかりの宝石で建てられ、妙なる光輝にかがやいていて、見るからにおいしそうなご馳走が山と盛られ、永遠につづくありとあらゆる愉しみと歓びとにみちあふれていたという話をした。そのつぎに、地獄で彼らを待ちうけている八つの名状しがたい苦しみについて話した。<br>
それは、歌の文句にもなっているあの八つの苦しみ、すなわち、「雌、闇、責苦、寒さ、火、悪魔の姿、罪の絶望、悲嘆」である。<br>
最後に、死からよみがえった若者は、ふたりの貴族の青年といっしょに使徒の足もとにひれ伏した。<br>
そして、ふたりの青年は、お慈悲をたまわりますようにと懇願した。<br>
そこで、<span style="color: #994c3d;">聖ヨハネ</span>は、</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「３０日間悔い改めの行をし、そのあいだ若枝と小石がもとの自然の姿にかえるように祈りつづけなさい」</span>と言った。</td>
</tr>
</tbody>
</table>
<p>彼らは、命じられたとおりにした。３０日たつと、<span style="color: #994c3d;">ヨハネ</span>は、彼らに、</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「さあ、海岸へ行って、金と宝石をもとの場所にもどしてきなさい」と言った。</span></td>
</tr>
</tbody>
</table>
<p>彼らがそのとおりにすると、なんというふしぎなことであろうか、金と宝石は、もとの若枝と小石とになった。青年たちは、いったん失っていた有徳の恩龍をふたたび受けたのだった。</p>
<h3 class="orange">ディアナの神殿の破壊</h3>
<p><span style="color: #994c3d;">ヨハネ</span>がアジア州全土を説教してまわっていたとき、
いつわりの神々の崇拝者たちは、民衆を煽動して彼をディアナの神殿に引っぱっていき、偽神に供物をささげさせようとした。<br>
しかし、<span style="color: #994c3d;">ヨハネ</span>は、彼らにつぎのような提案をした。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「双方がそれぞれの神に呼びかけることにしましょう。</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">あなたたちは、ディアナにキリストの教会を破壊するようにたのみなさい。ディアナがそれを実現したなら、わたしは、ディアナに供犠をしましょう。わたしは、キリストさまにディアナの神殿を破壊してくださるようにお願いしましょう。キリストさまがそうしてくださったら、あなたがたは、キリストを信仰しなければなりませんよ」</span>と。</td>
</tr>
</tbody>
</table>
<p>民衆は、この提案をたいへんおもしろいとおもい、みんな神殿を出ていった。<span style="color: #994c3d;">ヨハネ</span>は、天主におん力をおしめしくださるようにと祈った。<br>
すると、神殿は倒壊し、いつわりの女神の偶像は、こなごなにくだけた。</p>
<h3 class="orange">毒の杯</h3>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>毒の盃を持つ福音書記者ヨハネ</figcaption></figure>
<p>しかし、偽神の大祭官<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:2#renvoi-aristodeme" title="https://francois-vidit.com/docs/ja/saint-jean/page:2#renvoi-aristodeme" id="aristodeme" class="orange">アリストデムス</a>は、民衆のあいだにもめごとを起こさせ、敵味方にわかれてたがいに戦いの準備をはじめるようにしむけた。そこで、<span style="color: #994c3d;">聖ヨハネ</span>は、アリストデムスにむかって、</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「あなたが怒りを忘れるためにしてほしいとおもうことをなんでもしてあげましょう」</span>と申し入れた。</td>
</tr>
</tbody>
</table>
<p>アリストデムスは、</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&#160;</span></td>
<td><span style="color: #165493;">「あなたに毒を飲んでもらおう。もしその毒があなたになんの害もあたえながったら、わたしは、あなたの神がほんとうの神だと信じよう」</span>と答えた。</td>
</tr>
</tbody>
</table>
<p><span style="color: #994c3d;">ヨハネ</span>が、</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「よろしい。そのとおりにしてください」</span>と言うと</td>
<td>、</td>
</tr>
</tbody>
</table>
<p>アリストデムスは、</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&#160;</span></td>
<td><span style="color: #165493;">「いや、さらに、そのまえにまずほかの者がその毒を飲んで死ぬところをあなたに見ておいてもらうことにしよう。そうしておいたほうが、あなたにいっそう気おくれさせる効果があるからな」</span>と答え、</td>
</tr>
</tbody>
</table>
<p>代理執政官のところに行って、死刑の宣告を受けた囚人をふたりもらい受けてきて、民衆の面前でその毒を飲ませた。<br>
囚人たちはたちどころに死んだ。<br>
つづいて、<span style="color: #994c3d;">聖ヨハネ</span>は、その杯を受けとり、杯のうえで十字を切って、毒をすっかり飲みほした。しかし、彼にはなんの害も起こらなかった。<br>
民衆は、それを見て、神をほめたたえた。<br>
けれども、アリストデムスは、</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&#160;</span></td>
<td><span style="color: #165493;">「まだわたしには疑わしい。しかし、毒を飲んで死んだふたりの者をあなたが生きかえらせることができたら、すべての疑いをすててあなたの神を信じよう」</span>と言った。</td>
</tr>
</tbody>
</table>
<p><span style="color: #994c3d;">聖ヨハネ</span>は、自分の外衣をアリストデムスに渡した。</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「上衣をわたしによこすのは、どういうことかね」</span>と、アリストデムスはたずねた。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「いまにあなたは不信仰を棄てるでしょう」</span></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&#160;</span></td>
<td><span style="color: #165493;">「あなたの上衣がわたしに信仰心を起こさせるというのかね」</span></td>
</tr>
</tbody>
</table>
<p><span style="color: #994c3d;">ヨハネ</span>は、答えた。  </p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&#160;</span></td>
<td><span style="color: #df8f20;">「さあ、死んだふたりの身体にこの上衣をかけなさい。そしてこう言うのです、</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">〈あなたがたがキリストの御名においてよみがえるように、キリストの使徒がわたしをあなたがたのところにつかわされたのです〉、と」</span></td>
</tr>
</tbody>
</table>
<p>アリストデムスは、言われたとおりにした。すると、死者たちは、息を吹きかえした。<br>
こうして、アリストデムスも、代理執政官も、一家総ぐるみキリスト教を信仰するようになった。<span style="color: #994c3d;">ヨハネ</span>は、彼らにキリストの御名において洗礼をさずけた。彼らは、教会を建てて、使徒にささげた。</p>
</div>

<div id="body-inner">
<h2 id="notes" class="orange">　註釈</h2>
<h3 id="note_nomdejean" class="orange">ヨハネの名</h3>
<div class="notices yellow">
<p>ヘブライ語でのヨハネの名の意義について、<a href="/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean">「〈ヨハネ〉という名、施設との繋がり、語源」</a>にご参照。<br>
註に戻る：　<a href="#nomdejean" title="ヨハネの名">ヨハネの名 ↑</a></p>
</div>
<h3 id="note_laodiceia" class="orange">ラオディケイア</h3>
<div class="notices yellow">
<p><a href="https://ja.wikipedia.org/wiki/ラオディキア" title="https://ja.wikipedia.org/wiki/ラオディキア"><ruby lang="ja">ラオディケイア<rp>(</rp><rt lang="la">Laodiceia</rt><rp>)</rp></ruby lang="ja"></a>は、地小アジアの<a href="https://ja.wikipedia.org/wiki/フリギア" title="https://ja.wikipedia.org/wiki/フリギア"><ruby lang="ja">フリギア<rp>(</rp><rt lang="la">Phrygia</rt><rp>)</rp></ruby lang="ja">地方</a>の古代都市。<br>
古代名が同じながら、現在の<a href="https://ja.wikipedia.org/wiki/ラタキア" title="https://ja.wikipedia.org/wiki/ラタキア"><ruby lang="ja">ラタキア<rp>(</rp><rt lang="la">Latakia</rt><rp>)</rp></ruby lang="ja"></a>ではありませんので、ご注意ください。<br>
註に戻る：　<a href="#laodiceia" title="ラオディケイア">ラオディケイア ↑</a></p>
</div>
<h3 id="note_isidore" class="orange">イシドルス</h3>
<div class="notices yellow">
<p>〈セビリヤの〉イシドルス（５６０頃~６３６年）。聖人（祝４・４）、教会博士、セビリヤ大司教。<br>
大教皇グレゴリウス一世に協力して西ゴート族の改宗に努力、また該博な百科全書知識（主著『語源考』２０巻がその集約）によって創成期のヨーロッパ中世文化に指導的な影響をあたえた。<br>
註に戻る：　<a href="#isidore" title="イシドルス">イシドルス ↑</a></p>
</div>
<h3 id="note_asie" class="orange">アジア</h3>
<div class="notices yellow">
<p>これはローマ帝国の属州名で、小アジア地方すなわちミュシア、リュディア、カリアおよびプリュギアの大半をさす。<br>
註に戻る：　<a href="#asie" title="アジア">アジア ↑</a></p>
</div>
<h3 id="note_domitien" class="orange">皇帝ドミティアヌス</h3>
<div class="notices yellow">
<p><a href="https://ja.wikipedia.org/wiki/ドミティアヌス" title="https://ja.wikipedia.org/wiki/ドミティアヌス">皇帝<ruby lang="ja">ドミティアヌス<rp>(</rp><rt lang="la">Domitianus</rt><rp>)</rp></ruby lang="ja"></a>はローマ帝国の第１１代皇帝である。在位８１年から９６年。フラウィウス朝最後の皇帝であり、キリスト教はの大迫害者となったと記憶されており。<br>
註に戻る：　<a href="#domitien" title="皇帝ドミティアヌス">皇帝ドミティアヌス ↑</a></p>
</div>
<h3 id="note_porte-latine" class="orange">ラティナ門</h3>
<div class="notices yellow">
<p>カラカラ浴場から南東にのびるラティナ街道にある門、サン・ジョヴァンニ・ア・ポルタ・ラティナ
教会（ラティナ門の聖ヨハネ、の意）がある。<br>
註に戻る：　<a href="#porte-latine" title="ラティナ門">ラティナ門 ↑</a></p>
</div>
<h3 id="note_patmos" class="orange">パトモス島</h3>
<div class="notices yellow">
<p><a href="https://ja.wikipedia.org/wiki/パトモス島" title="https://ja.wikipedia.org/wiki/パトモス島"><ruby lang="ja">パトモス<rp>(</rp><rt lang="la">Patmos</rt><rp>)</rp></ruby lang="ja">島</a>はトルコ沿岸部から程近いエーゲ海に浮かぶギリシャの小島。<a href="https://ja.wikipedia.org/wiki/ドデカネス諸島" title="https://ja.wikipedia.org/wiki/ドデカネス諸島">ドデカネス諸島</a>に含まれる。<br>
註に戻る：　<a href="#patmos" title="パトモス島">パトモス島 ↑</a></p>
</div>
<h3 id="note_ephese" class="orange">エペソス市</h3>
<div class="notices yellow">
<p><a href="https://ja.wikipedia.org/wiki/エフェソス" title="https://ja.wikipedia.org/wiki/エフェソス"><ruby lang="ja">エペソス<rp>(</rp><rt lang="la">Ephesos</rt><rp>)</rp></ruby lang="ja">市</a>はトルコ西部の小アジアの古代都市で、現在のイズミル県のセルチュク近郊に位置している。<a href="https://ja.wikipedia.org/wiki/アルテミス" title="https://ja.wikipedia.org/wiki/アルテミス">ディアナ</a>崇拝で知られたギリシア人都市でもあった。<br>
註に戻る：　<a href="#ephese" title="エペソス市">エペソス市 ↑</a></p>
</div>
<h3 id="note_drusiane" class="orange">ドゥルシアネ</h3>
<div class="notices yellow">
<p>黄金伝説では、<ruby lang="ja">ドゥルシアネ<rp>(</rp><rt lang="la">Drusiane</rt><rp>)</rp></ruby lang="ja">はエペソス住人としてしか表れませんが、〈ドゥルシアネとカリマッコス物語〉という新約聖書外典である『ヨハネ行伝』では、アンドロニックの妻として、悪人のカリマッコスの愛に攻められて、神に死で開放されることを念願して神から敵われたことが語られています。<br>
註に戻る：　<a href="#drusiane" title="ドゥルシアネ">ドゥルシアネ ↑</a></p>
</div>
<h3 id="note_mathieu" class="orange">もし完全になりたいのなら</h3>
<div class="notices yellow">
<p>この引用文は、マタイによる福音の第１９章第２１節一節を指す。<br>
<sup>２１</sup> 「イエスは言われた。〈もし完全になりたいのなら、行って持ち物を売り払い、貧しい人々に施しなさい。そうすれば、天に富を積むことになる。それから、わたしに従いなさい〉。」</p>
<p>補充として、完全文：<br>
<sup>１６</sup> 「さて、一人の男がイエスに近寄って来て言った。〈先生、永遠の命を得るには、どんな善いことをすればよいのでしょうか〉。<br>
<sup>１７</sup> イエスは言われた。〈なぜ、善いことについて、わたしに尋ねるのか。善い方はおひとりである。もし命を得たいのなら、掟を守りなさい〉。<br>
<sup>１８</sup> 男が〈どの掟ですか〉と尋ねると、イエスは言われた。〈『殺すな、姦淫するな、盗むな、偽証するな、<br>
<sup>１９</sup> 父母を敬え、また、隣人を自分のように愛しなさい』〉。<br>
<sup>２０</sup> そこで、この青年は言った。〈そういうことはみな守ってきました。まだ何か欠けているでしょうか〉。<br>
<sup>２１</sup> イエスは言われた。〈もし完全になりたいのなら、行って持ち物を売り払い、貧しい人々に施しなさい。そうすれば、天に富を積むことになる。それから、わたしに従いなさい〉。<br>
<sup>２２</sup> 青年はこの言葉を聞き、悲しみながら立ち去った。たくさんの財産を持っていたからである。<br>
<sup>２３</sup> イエスは弟子たちに言われた。〈はっきり言っておく。金持ちが天の国に入るのは難しい。<br>
<sup>２４</sup> 重ねて言うが、金持ちが神の国に入るよりも、らくだが針の穴を通る方がまだ易しい。」<br>
註に戻る：　<a href="#mathieu" title="もし完全になりたいのなら">もし完全になりたいのなら ↑</a></p>
</div>
<h3 id="note_hoteriche" class="orange">神に永劫に罰せられた富裕な貪欲者と神に選ばれた貧しいラザロ</h3>
<div class="notices yellow">
<p>この引用文は、マタイによる福音の第１９章第２１節一節を指す。<br>
<sup>１９</sup> 「ある金持ちがいた。いつも紫の衣や柔らかい麻布を着て、毎日ぜいたくに遊び暮らしていた。<br>
<sup>２０</sup> この金持ちの門前に、ラザロというできものだらけの貧しい人が横たわり、<br>
<sup>２１</sup> その食卓から落ちる物で腹を満たしたいものだと思っていた。犬もやって来ては、そのできものをなめた。<br>
<sup>２２</sup> やがて、この貧しい人は死んで、天使たちによって宴席にいるアブラハムのすぐそばに連れて行かれた。金持ちも死んで葬られた。<br>
<sup>２３</sup> そして、金持ちは陰府でさいなまれながら目を上げると、宴席でアブラハムとそのすぐそばにいるラザロとが、はるかかなたに見えた。<br>
<sup>２４</sup> そこで、大声で言った。『父アブラハムよ、わたしを憐れんでください。ラザロをよこして、指先を水に浸し、わたしの舌を冷やさせてください。わたしはこの炎の中でもだえ苦しんでいます』。<br>
<sup>２５</sup> しかし、アブラハムは言った。『子よ、思い出してみるがよい。お前は生きている間に良いものをもらっていたが、ラザロは反対に悪いものをもらっていた。今は、ここで彼は慰められ、お前はもだえ苦しむのだ』。」<br>
この話はヨハネにもう少し詳しく語られている。<a href="https://www.bible.or.jp/read/vers_search.html" title="https://www.bible.or.jp/read/vers_search.html">ヨハネによる福音の第１１章を参照</a><br>
註に戻る：　<a href="#mathieu" title="もし完全になりたいのなら">神に永劫に罰せられた富裕な貪欲者と神に選ばれた貧しいラザロ ↑</a></p>
</div>
<h3 id="note_eusebe" class="orange">エウセビオス</h3>
<div class="notices yellow">
<p>カイサリアの司教（２６３頃~３３９年）。オリゲネスの弟子。アリウス論争にあいし三位一体論で聖子従属説をとった。<br>
コンスタンティヌス大帝にいたるまでの教会の歩みを書いたその『教会史』一〇巻は、いまは散佚した源史料からのおよびただしい引用をふくみ、初代キリスト教時代の貴重な文献であり、〈教会史の父〉と称せられる。<br>
また『ギリシア人と異邦人の年代記』は、３２５年までの古代諸民族の世界史概説であり、他に多くの護教書、聖書釈義、聖地地理などの著作がある。<br>
註に戻る：　<a href="#eusebe" title="エウセビオス">エウセビオス ↑</a></p>
</div>
<h3 id="note_saint-clement" class="orange">聖クレメンス</h3>
<div class="notices yellow">
<p>アレクサンドリアのクレメンス〉とよばれ、アテネで生まれ、アレクサンドリアで活躍した教会著述家（没年２１５以前）。<br>
つぎに述べられる物語は、その著『どのような富者が救われるか』から。<br>
なお、本文では、〈聖〉が冠せられているが、ローマ教会で彼が聖列にくわえられたという事実はなく、また司祭職についたこともないらしい。<br>
註に戻る：　<a href="#porte-latine" title="ラティナ門">聖クレメンス ↑</a></p>
</div>
</div>

<!-- Page 19 -->

<div id="body-inner">
				<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島への流しへの出発》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島への流しへの出発》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島への流しへの出発》</figcaption></figure>
<h2 id="jean-selon-legende-2" class="orange"><ruby style="color:#e6a64d;">黄金伝説<rt style="color:#e6a64d;">レゲンダ・アウレア</rt></ruby>においての福音書記者ヨハネ</h2>
<p>第６５章　ラティナ門外の聖ヨハネ</p>
<p>使徒にして福音史家でもあるヨハネは、エヘソスで伝道活動に従事していたとき、同地の総督に捕えられ、いつわりの神々に供物をささげよと命じられた。<br>
が、命令にしたがおうとしなかったので、獄に投じられた。総督は、皇帝ドミティアヌスに報告書を送り、そのなかで、ヨハネのことを神殿の冒漬者神々の侮蔑者、十字架にかけられた男に仕えるやからのひとりであると決めつけた。<br>
ドミティアヌスは、ヨハネをローマにつれてくるようにと命じた。さて、ヨハネがローマに到着すると、笑いものにするために頭を丸坊主に剃りあげたうえ、ラティナ門とよばれる市門の外に引きだし、油がいっぱい煮えたぎっている釜に入れ、さらに下から火をどんどん焚きつけた。<br>
ところが、ヨハネは、文字どおり平気の平左で、火傷ひとつしないで釜から出てきた。<br>
キリスト教徒たちは、その後この場所に教会を建て、この日をヨハネの殉教記念日のように祝うのである。ドミティアヌス大帝は、こんな拷問ぐらいでキリストの福音を宣べることをやめるような男ではないと見てとり、聖ヨハネをパトモス島へ流刑に処した。</p>
<h3 id="note_saint-clement" class="orange">聖クレメンス</h3>
<div class="notices yellow">
<p>。
註に戻る：　<a href="#porte-latine" title="ラティナ門">↑</a></p>
</div>
</div>

<!-- Page 20 -->

<div id="body-inner">
				<h2 class="orange"><ruby style="color:#e6a64d;">黄金伝説<rt style="color:#e6a64d;">レゲンダ・アウレア</rt></ruby>においての福音書記者ヨハネ</h2>
<p>第６５章　ラティナ門外の聖ヨハネ</p>
<p>使徒にして福音史家でもあるヨハネは、エヘソスで伝道活動に従事していたとき、同地の総督に捕えられ、いつわりの神々に供物をささげよと命じられた。<br>
が、命令にしたがおうとしなかったので、獄に投じられた。総督は、皇帝ドミティアヌスに報告書を送り、そのなかで、ヨハネのことを神殿の冒漬者神々の侮蔑者、十字架にかけられた男に仕えるやからのひとりであると決めつけた。<br>
ドミティアヌスは、ヨハネをローマにつれてくるようにと命じた。さて、ヨハネがローマに到着すると、笑いものにするために頭を丸坊主に剃りあげたうえ、ラティナ門とよばれる市門の外に引きだし、油がいっぱい煮えたぎっている釜に入れ、さらに下から火をどんどん焚きつけた。<br>
ところが、ヨハネは、文字どおり平気の平左で、火傷ひとつしないで釜から出てきた。<br>
キリスト教徒たちは、その後この場所に教会を建て、この日をヨハネの殉教記念日のように祝うのである。ドミティアヌス帝は、こんな拷問ぐらいでキリストの福音を宣べることをやめるような男ではないと見てとり、聖ヨハネをパトモス島（第一巻）へ流刑に処した。</p>
<h3 id="note_saint-clement" class="orange">聖クレメンス</h3>
<div class="notices yellow">
<p>神の王座と天的宮廷の幻影、王座での生きているものと子羊。
註に戻る：　<a href="#porte-latine" title="ラティナ門">↑</a></p>
</div>
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