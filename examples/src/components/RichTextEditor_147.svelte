<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- Page 1 FR:180 EN:211 -->

<article>

<div class="pure-g about-div">

<div id="about_photo" class="block pure-u-4-7 size-4-7 responsive-container">
<figure>
  <picture>
  <source media="(min-width: 959px)" sizes="43vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-840.webp 840w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1280.webp 1280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1600.webp 1600w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1920.webp 1920w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-2240.webp 2240w" type="image/webp">
  <source media="(min-width: 767px)" sizes="80vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-840.webp 840w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1280.webp 1280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1600.webp 1600w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1920.webp 1920w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-2240.webp 2240w" type="image/webp">
  <source sizes="100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-840.webp 840w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-1280.webp 1280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-1600.webp 1600w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-1920.webp 1920w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-2240.webp 2240w" type="image/webp">
  <source media="(min-width: 959px)" sizes="43vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-840.jpg 840w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1920.jpg 1920w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-2240.jpg 2240w">
  <source media="(min-width: 767px)" sizes="80vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-840.jpg 840w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1920.jpg 1920w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-2240.jpg 2240w">
  <img src="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-840.jpg" alt="２０１３年、モン＝サン＝ミシェル前" title="２０１３年の時、モン＝サン＝ミシェル前のフランソワ・ヴィディ" class="verticalcenter" width="840" height="560" loading="eager" decoding="async" sizes="100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-840.jpg 840w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-1920.jpg 1920w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-2240.jpg 2240w"></picture>
  <figcaption>８年前。</figcaption>
</figure>
</div>


<div id="about_name" class="block pure-u-3-7">
<hgroup>
<h1>
  <ruby lang="fr">
    <span lang="fr" title="名前" style="color:#000e5f;letter-spacing: 0px;">François</span>
    <rp>（</rp>
    <rt lang="ja"><span lang="ja" title="名前" style="color:#000e5f;">フランソワ</span></rt>
    <rp>）</rp>
  </ruby>
  <wbr> <wbr>
  <ruby lang="fr">
    <span lang="fr" title="名字" style="color:#000e5f;letter-spacing: 0px;">VIDIT</span>
    <rp>（</rp>
    <rt lang="ja"><span lang="ja" title="名字" style="color:#000e5f">ヴィディ</span></rt>
    <rp>）</rp>
  </ruby><wbr>
</h1>
<h2>パリの通訳案内士</h2>
</hgroup>

<p><span title="名前" lang="ja">フランソワ</span>は、名前で、 <span title="名前である François 発音">[fʁɑ̃.swɑ]</span> と<span>発音<wbr>されます。</span></p>
<p><audio controls title="名前である François の発音" id="audio0"><source src="https://francois-vidit.com/user/sites/profile/pages/01.home/02.nom/Francois.mp3" type="audio/mpeg">あなたのブラウザーは <code>audio</code> 要素に対応していません。</audio></p>
<p>そして、名字は、<span lang="ja" title="名字">ヴィディ</span>で、 <span title="名字である VIDIT 発音">[vidi]</span> となります。</p>
<p><audio controls title="名字である VIDIT の発音" id="audio1"><source src="https://francois-vidit.com/user/sites/profile/pages/01.home/02.nom/VIDIT.mp3" type="audio/mpeg">あなたのブラウザーは <code>audio</code> 要素に対応していません。</audio></p>
<p><span lang="ja" style="color:#000e5f">パリ</span><span style="color:#000e5f">在住<wbr>で、<wbr>日仏通訳士<wbr>として、１５年以上、<wbr>通訳案内から、<wbr>逐次通訳各種、<wbr>翻訳まで、<wbr>様々な形でのお仕事も<wbr>させて<wbr>頂いています。</span></p>
</div>
</div>


<div class="pure-g about-div">
<div id="about_age" class="block pure-u-1-6 size-1-6" style="border-style: none;padding-top: 0px;margin-bottom: 0px;">
</div>


<section id="about_parisien">
<div class="block pure-u-5-6">
<h2>東京経由の<wbr>パリジャン</h2>

<p>フランソワ・ヴィディ は、両親と同じく、 <a href="https://ja.wikipedia.org/wiki/パリジャン" title="https://ja.wikipedia.org/wiki/パリジャン_の第一項目">パリジャン</a> です。</p>
<p>１５歳の時、囲碁が<wbr>きっかけで、日本文化に<wbr>目覚め、独学で<wbr>１７歳の<wbr>時から、日本語を<wbr>勉強し<wbr>始めます。</p>
<p><a href="https://www.google.co.jp/maps/place/E.N.S.A.P.L.V+:+Ecole+Nationale+Supérieure+d'Architecture+de+Paris+La+Villette/@48.8936163,2.378878,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66dd283e5884d:0x9d97e01a0a060349!8m2!3d48.8936128!4d2.3810667" title="https://www.google.co.jp/maps/place/E.N.S.A.P.L.V."><ruby lang="ja">パリ<rt lang="fr" style="font-variant: small-caps;">Paris</rt>＝<rt lang="fr">-</rt>ラ<rt lang="fr" style="font-variant: small-caps;">La</rt>・<rt lang="fr"> </rt>ヴィレット<rt lang="fr" style="font-variant: small-caps;">Villette</rt></ruby><wbr>国立<wbr>建築<wbr>大学</a> を<wbr>卒業後、自力で、渡日<wbr>します。</p>
<p>東京、<a href="https://www.google.com/maps/place/日本,+〒107-0062+東京都港区南青山/@35.66749,139.7151712,15.5z/data=!4m5!3m4!1s0x60188b6254cc464f:0x99773132a4b583e6!8m2!3d35.6653189!4d139.7149995" title="https://www.google.com/maps/place/日本,+〒107-0062+東京都港区南青山">青山</a> で<wbr>日本<wbr>の<wbr>最も<wbr>大きい都市に<wbr>高級ブランド品の<wbr>店舗を<wbr>設計する<wbr><a href="http://www.garde-intl.com/" title="http://www.garde-intl.com/">会社</a>に<wbr>就職します。</p>
<p>その後、フランスに<wbr>戻って、通訳に<wbr>転職<wbr>します。</p>
</div>
</section>

<div class="pure-g about-div">

<section id="about_guider">
<div class="block pure-u-3-4">
<h2>案内することは、<wbr>分かち合うこと！</h2>

<p>異なる顔に<wbr>面したり、出会いの<wbr>貴重さを<wbr>感じられたりすることで、<wbr>自分が<wbr>慣れている<wbr>習慣の<wbr>外側に<wbr>気づけるのです。<wbr>そうすると、<wbr>どこかに、<wbr>自分の中に、<wbr>新しい人間性が<wbr>神秘的に<wbr>芽生えているのを<wbr>感じて、<wbr>自分でも驚きます。</p>
<p>いつの間にか、<wbr>密かに、<wbr>それは新しい世界、<wbr>新しい人間性、<wbr>新しい自分と<wbr>なります。</p>
<p>ガイドの<wbr>仕事を越えて、<wbr>様々な偏見が<wbr>省かれることで、<wbr>自分自身が<wbr>一新され、<wbr>自分に対しても<wbr>世界に対しても、<wbr>より普遍的に<wbr>いられる様に<wbr>なります。</p>
</div>
</section>


<div id="about_autoportrait" class="block pure-u-1-4 size-1-4 responsive-container" style="margin-left: 0px">
<figure>
  <picture><source media="(min-width: 959px)" sizes="19vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.webp 840w" type="image/webp"><source media="(min-width: 767px)" sizes="80vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.webp 840w" type="image/webp"><source sizes="(max-width: 767px) 97vw, 100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.webp 840w" type="image/webp"><source media="(min-width: 959px)" sizes="19vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.jpg 840w"><source media="(min-width: 767px)" sizes="80vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.jpg 840w"><img src="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.jpg" alt="自画像、１９９５年" title="François VIDIT 作の自画像、１９９５年" class="verticalcenter" width="840" height="868" loading="lazy" decoding="async" sizes="(max-width: 767px) 97vw, 100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.jpg 840w"></picture><figcaption>２５年前の自画像で。</figcaption>
</figure>
</div>

</div>

<div class="pure-g about-div">

<div id="about_aquarelle" class="block pure-u-1-3 size-1-3 responsive-container">
<figure>
  <picture><source media="(min-width: 959px)" sizes="25vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.webp 840w" type="image/webp"><source media="(min-width: 767px)" sizes="80vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.webp 840w" type="image/webp"><source sizes="(max-width: 767px) 97vw, 100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.webp 840w" type="image/webp"><source media="(min-width: 959px)" sizes="25vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.jpg 840w"><source media="(min-width: 767px)" sizes="80vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.jpg 840w"><img src="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.jpg" alt="抽象水彩画、２００３年。" title="François VIDIT 作の抽象水彩画、２００３年" class="verticalcenter" width="840" height="592" loading="lazy" decoding="async" sizes="(max-width: 767px) 97vw, 100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.jpg 840w"></picture><figcaption>１７年前の抽象水彩画で。</figcaption>
</figure>
</div>


<section id="about_rireki">
<div class="block pure-u-2-3" style="margin-left: 0px">
<h2>履歴</h2>

<ol class="year">
  <li>
    <span class="year-width"><time datetime="1999">１９９９年</time></span>　㈶日本国際<wbr>教育<wbr>協会　<a href="http://www.jlpt.jp/" title="http://www.jlpt.jp/">日本語<wbr>能力<wbr>試験<wbr>３級</a><wbr>合格
  </li>
  <li>
    <span class="year-width"><time datetime="1999">２００３年</time></span>　<span title="ジェトロ">日本<wbr>振興<wbr>機構</span>　第８回<wbr>ジェトロ<wbr><a href="http://www.kanken.or.jp/bjt/" title="http://www.kanken.or.jp/bjt/">ビジネス<wbr>日本語<wbr>能力<wbr>テスト合格</a>
  </li>
  <li>
    <span class="year-width"><time datetime="2011">２０１１年</time></span>　<a href="https://www.google.co.jp/maps/place/Université+Toulouse+-+Jean+Jaurès/@43.577998,1.3996184,17z/data=!3m1!4b1!4m5!3m4!1s0x12aeba4c48abb62d:0xaa534804f879cf3b!8m2!3d43.5779941!4d1.4018071" title="https://www.google.co.jp/maps/place/Université+Toulouse+-+Jean+Jaurès">
    <ruby lang="ja">
      トゥールーズ<rp>（</rp><rt lang="fr">Toulouse</rt><rp>）</rp>
      ＝<rp>（</rp><rt lang="fr">-</rt><rp>）</rp>
      ジャン<rp>（</rp><rt lang="fr">Jean</rt><rp>）</rp>
      ・<rp>（</rp><rt lang="fr"> </rt><rp>）</rp>
      ジョレス<rp>（</rp><rt lang="fr">Jaurès</rt><rp>）</rp>
    </ruby>
    大学</a> で、<a href="http://www.entreprises.gouv.fr/tourisme/metiers/guide-conferencier" title="http://www.entreprises.gouv.fr/tourisme/metiers/guide-conferencier">フランス<wbr>通訳<wbr>案内士<wbr>資格</a><wbr>獲得
  </li>
</ol>
</div>
</section>
</div>

<div class="pure-g about-div">
<section id="about_hyoshiki">
<div class="block pure-u-2-3">
<h2>資格</h2>

<p>
  <span style="min-width: 125px;;float: left;">通訳<wbr>案内士<wbr>番号</span><wbr><samp>GC1375538P</samp>
</p>
<p>
  <span style="min-width: 125px;;float: left;">所属<wbr>協会</span><wbr><a id="fnref1:4" href="" title=""><abbr title="Association des Guide-Interprètes de langue Japonaise">AGIJ</abbr></a>
</p>
<p>
  <span style="width: 125px;float: left;">他<wbr>の<wbr>言語</span><wbr>英語<wbr>、<wbr>スペイン語
</p>
<p>
  <span style="width: 125px;float: left;">案内<wbr>範囲</span><wbr><a href="https://www.google.co.jp/maps/place/フランス/@45.8629839,-6.7669772,5z/data=!3m1!4b1!4m5!3m4!1s0xd54a02933785731:0x6bfd3f96c747d9f7!8m2!3d46.227638!4d2.213749" title="https://www.google.co.jp/maps/place/%E3%83%95%E3%83%A9%E3%83%B3%E3%82%B9/@45.8629839,-6.7669772,5z/data=!3m1!4b1!4m5!3m4!1s0xd54a02933785731:0x6bfd3f96c747d9f7!8m2!3d46.227638!4d2.213749">フランス<wbr>全国</a>及び、<a href="https://www.google.co.jp/maps/place/ベルギー+ブルージュ/@51.2605832,3.0820626,11z/data=!3m1!4b1!4m5!3m4!1s0x47c350d0c11e420d:0x1aa2f35ac8834df7!8m2!3d51.209348!4d3.2246995" title="https://www.google.co.jp/maps/place/ベルギー+ブルージュ/">
    <ruby lang="ja">
      ブルージュ
      <rp>（</rp><rt lang="fr" style="letter-spacing: 0.12rem;">Bruges</rt><rp>）</rp>
    </ruby>
  </a>
</p>
<p>
  <span style="width: 125px;float: left;">住所</span><wbr>
  <a href="#map" title="#map">10, 
    <ruby lang="fr">rue
      <rp>（</rp><rt lang="ja" style="letter-spacing: 0.04rem;">ルー</rt><rp>）</rp>
    </ruby> 
    <ruby lang="fr">Théophraste
      <rp>（</rp><rt lang="ja" style="letter-spacing: 0.04rem;">テオフラスト</rt><rp>）</rp>
    </ruby> 
    <ruby lang="fr">
      Renaudot<rp>（</rp><rt lang="ja" style="letter-spacing: 0.04rem;">ルノド</rt><rp>）</rp>
    </ruby> 75015 Paris
  </a>
</p>
<p><span style="width: 120px;float: left;">御<wbr>問い<wbr>合わせ</span>
<wbr><a href="http://www.francois-vidit.com/ja#御問い合わせ" title="https://www.francois-vidit.com/ja#御問い合わせ">こちら</a></p>
</div>
</section>


  <p id="fn:4" class="no-puce"><dfn><i><abbr title="Association des Guide-Interprètes de langue Japonaise">AGIJ</abbr></i></dfn>: <a href="http://www.agij-paris.com/" title="http://www.agij-paris.com/">フランス<wbr>日本語<wbr>通訳協会</a>　<a href="#fnref1:4" title="#fnref1:4">Association des Guide-Interprètes de langue Japonaise&nbsp;↩</a></p>



<div id="about_map" class="block pure-u-1-3 size-1-3 responsive-container" style="margin-left: 0px;">
</div>


</div>
</div>

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