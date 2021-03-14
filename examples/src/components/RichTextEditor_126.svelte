<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="green"><ruby style="color:#555;">ヴァンドーム広場<rt style="color:#999;font-size:0.95rem;">place&#160;Vendôme</rt></ruby></h1>
<figure><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome_700x507.webp 700w" type="image/webp"></source><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus_700x415.webp 700w" type="image/webp"></source><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome_700x507.jpg 700w"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus_700x415.jpg" alt="１７３４年でのパリにあるヴァンドーム広場" title="１７３４年でのパリにあるヴァンドーム広場" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus_700x415.jpg 700w"></picture><figcaption>１７３４年での<ruby lang="ja">テュルゴの地図<rt lang="fr" style="color:#999;">Plan de Turgot</rt></ruby>によるパリにある<ruby lang="ja">ヴァンドーム広場<rt lang="fr" style="color:#999;">place Vendôme</rt></ruby></figcaption></figure>
<h2 class="green">１７世紀でのヴァンドーム広場</h2>
<div class="notices green">
<p><a href="https://www.google.com/maps/place/Rue de Rivoli, Paris, フランス/@48.8644156,2.3276843,17z/data=!4m5!3m4!1s0x47e66e21852883b7:0x88f8c24b3bea7b50!8m2!3d48.860463!4d2.3422219" title="https://www.google.com/maps/place/Rue+de+Rivoli,+Paris,+フランス/@48.8644156,2.3276843,17z/data=!4m5!3m4!1s0x47e66e21852883b7:0x88f8c24b3bea7b50!8m2!3d48.860463!4d2.3422219"><ruby lang="ja">リヴォリ通り<rp>(</rp><rt lang="fr">rue&#160;de&#160;Rivoli</rt><rp>)</rp></ruby lang="ja"></a>が１８０１年に開かれる前に、<a href="https://ja.wikipedia.org/wiki/ヴァンドーム広場" title="https://ja.wikipedia.org/wiki/ヴァンドーム広場">ヴァンドーム広場</a>は今とはとても違う顔でした。</p>
</div>
<p>広場は、まず、正方形で建設されました。<br>
しかし、この形が固すぎると見なされたため、１７００年に、正面の一部が壊され、そして、１７０１年からすぐ、現在の八角形で再建されました。</p>
<p>１７３４年に作られた<a href="http://edb.kulib.kyoto-u.ac.jp/exhibit/f28/f28cont.html" title="http://edb.kulib.kyoto-u.ac.jp/exhibit/f28/f28cont.html"><ruby lang="ja">テュルゴーの地図<rp>(</rp><rt lang="fr">plan&#160;de&#160;Turgot</rt><rp>)</rp></ruby lang="ja"></a>を細かく見ようとすると：</p>
<ul>
<li><a href="https://www.google.com/maps/place/チュイルリー庭園/@48.8634916,2.3253056,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e2c30000001:0xc219db09e1bfefc7!8m2!3d48.8634916!4d2.3274943" title="https://www.google.com/maps/place/チュイルリー庭園/@48.8634916,2.3253056,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e2c30000001:0xc219db09e1bfefc7!8m2!3d48.8634916!4d2.3274943"><ruby lang="ja">テュイルリー<rp>(</rp><rt lang="fr">Tuileries</rt><rp>)</rp></ruby lang="ja"></a>側、<a href="https://www.google.jp/maps/place/Rue de Castiglione, 75001 Paris/@48.8659408,2.3257194,17z/data=!3m1!4b1!4m8!1m2!2m1!1z44Kr44K544OG44Kj44Oq44Kq44O844OM!3m4!1s0x47e66e2de4cf6571:0xad54eb95ed09a09!8m2!3d48.8659408!4d2.3279081?hl=ja" title="https://www.google.jp/maps/place/Rue+de+Castiglione,+75001+Paris/@48.8659408,2.3257194,17z/data=!3m1!4b1!4m8!1m2!2m1!1z44Kr44K544OG44Kj44Oq44Kq44O844OM!3m4!1s0x47e66e2de4cf6571:0xad54eb95ed09a09!8m2!3d48.8659408!4d2.3279081?hl=ja"><ruby lang="ja">カスティグリオーヌ通り<rp>(</rp><rt lang="fr">rue&#160;de&#160;Castiglione</rt><rp>)</rp></ruby lang="ja"></a>(<a href="#castiglione">図 １</a>)、</li>
<li><a href="https://ja.wikipedia.org/wiki/テュイルリー宮殿" title="https://ja.wikipedia.org/wiki/テュイルリー宮殿"><ruby lang="ja">オペラ<rp>(</rp><rt lang="fr">Opéra</rt><rp>)</rp></ruby lang="ja"></a>側、<a href="https://www.google.co.jp/maps/place/1 Rue de la Paix, 75002 Paris, フランス/@48.8685708,2.3280719,17z/data=!3m1!4b1!4m8!1m2!2m1!1z44G66YCa44KK44CA77yR55Wq5Zyw!3m4!1s0x47e66e31bb649637:0xc231c2c26c37df78!8m2!3d48.8685708!4d2.3302606?hl=ja" title="https://www.google.co.jp/maps/place/1+Rue+de+la+Paix,+75002+Paris,+%E3%83%95%E3%83%A9%E3%83%B3%E3%82%B9/@48.8685708,2.3280719,17z/data=!3m1!4b1!4m8!1m2!2m1!1z44G66YCa44KK44CA77yR55Wq5Zyw!3m4!1s0x47e66e31bb649637:0xc231c2c26c37df78!8m2!3d48.8685708!4d2.3302606?hl=ja"><ruby lang="ja">ペ通り<rp>(</rp><rt lang="fr">rue&#160;de&#160;la&#160;Paix</rt><rp>)</rp></ruby lang="ja"></a>(<a href="#paix">図 ２</a>)、<br>
まだ切り開かれてはいませんので、広場は一層静かに見えています。</li>
</ul>
<figure id="castiglione"><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione_700x507.webp 700w" type="image/webp"></source><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione_700x507.jpg 700w"></source><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus_669x484.webp 669w"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus_700x415.jpg" alt="１７３４年で、カスティグリオーヌ通り側の、パリにあるヴァンドーム広場" title="１７３４年で、カスティグリオーヌ通り側の、パリにあるヴァンドーム広場" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus_669x484.jpg 669w"></picture><figcaption>図 １：<ruby lang="ja">カスティグリオーヌ通り<rt lang="fr" style="color:#999;">rue de Castiglione</rt></ruby>の切り開き前、<ruby lang="ja">サントノーレ通り<rt lang="fr" style="color:#999;">rue Saint-Honoré</rt></ruby>からの出入り（１７３４年）</figcaption></figure>
<p>広場への出入りは：</p>
<ul>
<li><a href="https://www.google.com/maps/place/チュイルリー庭園/@48.8634916,2.3253056,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e2c30000001:0xc219db09e1bfefc7!8m2!3d48.8634916!4d2.3274943" title="https://www.google.com/maps/place/チュイルリー庭園/@48.8634916,2.3253056,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e2c30000001:0xc219db09e1bfefc7!8m2!3d48.8634916!4d2.3274943"><ruby lang="ja">テュイルリー<rp>(</rp><rt lang="fr">Tuileries</rt><rp>)</rp></ruby lang="ja"></a>側では、<a href="https://ja.wikipedia.org/wiki/サントノーレ通り" title="https://ja.wikipedia.org/wiki/サントノーレ通り"><ruby lang="ja">サントノーレ通り<rp>(</rp><rt lang="fr">rue&#160;Saint-Honoré</rt><rp>)</rp></ruby lang="ja"></a>（<a href="#castiglione">図 １</a>、この上),</li>
<li><a href="https://ja.wikipedia.org/wiki/テュイルリー宮殿" title="https://ja.wikipedia.org/wiki/テュイルリー宮殿"><ruby lang="ja">オペラ<rp>(</rp><rt lang="fr">Opéra</rt><rp>)</rp></ruby lang="ja"></a>側では、<a href="https://www.google.co.jp/maps/place/Rue de la Paix, 75002 Paris, フランス/@48.8695761,2.3306583,18z/data=!3m1!4b1!4m5!3m4!1s0x47e66e3101dcc2bb:0x2bc3eaa1f0003cb9!8m2!3d48.8695761!4d2.3315269?hl=ja" title="https://www.google.co.jp/maps/place/Rue+de+la+Paix,+75002+Paris,+フランス/@48.8695761,2.3306583,18z/data=!3m1!4b1!4m5!3m4!1s0x47e66e3101dcc2bb:0x2bc3eaa1f0003cb9!8m2!3d48.8695761!4d2.3315269?hl=ja"><ruby lang="ja">カプシーヌ通り<rp>(</rp><rt lang="fr">rue&#160;des&#160;Capucines</rt><rp>)</rp></ruby lang="ja"></a>（<a href="#paix">図 ２</a>、この下）、<br>
からしか出来ていません。</li>
</ul>
<figure id="paix"><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix_700x507.webp 700w" type="image/webp"></source><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix_700x507.jpg 700w"></source><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus_700x447.webp 700w"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus_700x415.jpg" alt="１７３４年で、ラ・ペ通り側の、パリにあるヴァンドーム広場" title="１７３４年で、ラ・ペ通り側の、パリにあるヴァンドーム広場" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus_700x447.jpg 700w"></picture><figcaption>図 ２：<ruby lang="ja">ペ通り<rt lang="fr" style="color:#999;">rue de la Paix</rt></ruby>の切り開き前、<ruby lang="ja">カプシーヌ通り<rt lang="fr" style="color:#999;">rue des Capucines</rt></ruby>からの出入り（１７３４年）</figcaption></figure>
<p>ですから、広場は、１９世紀とは違って、通過するものではありませんでした。</p>
<p><a href="https://ja.wikipedia.org/wiki/テュイルリー宮殿" title="https://ja.wikipedia.org/wiki/テュイルリー宮殿"><ruby lang="ja">オペラ<rp>(</rp><rt lang="fr">Opéra</rt><rp>)</rp></ruby lang="ja"></a>側では、現在<a href="https://www.google.co.jp/maps/place/1 Rue de la Paix, 75002 Paris, フランス/@48.8685708,2.3280719,17z/data=!3m1!4b1!4m8!1m2!2m1!1z44G66YCa44KK44CA77yR55Wq5Zyw!3m4!1s0x47e66e31bb649637:0xc231c2c26c37df78!8m2!3d48.8685708!4d2.3302606?hl=ja" title="https://www.google.co.jp/maps/place/1+Rue+de+la+Paix,+75002+Paris,+%E3%83%95%E3%83%A9%E3%83%B3%E3%82%B9/@48.8685708,2.3280719,17z/data=!3m1!4b1!4m8!1m2!2m1!1z44G66YCa44KK44CA77yR55Wq5Zyw!3m4!1s0x47e66e31bb649637:0xc231c2c26c37df78!8m2!3d48.8685708!4d2.3302606?hl=ja"><ruby lang="ja">ペ通り<rp>(</rp><rt lang="fr">rue&#160;de&#160;la&#160;Paix</rt><rp>)</rp></ruby lang="ja"></a>の位置に、<a href="https://www.google.co.jp/maps/place/3 Rue de la Paix, 75002 Paris, フランス/@48.8686382,2.3282652,17z/data=!3m1!4b1!4m8!1m2!2m1!1z44Oa6YCa44KK44CAM-eVquWcsA!3m4!1s0x47e66e31a48a6115:0xf23e0c7b6c50cd93!8m2!3d48.8686382!4d2.3304539?hl=ja" title="https://www.google.co.jp/maps/place/3+Rue+de+la+Paix,+75002+Paris,+フランス/@48.8686382,2.3282652,17z/data=!3m1!4b1!4m8!1m2!2m1!1z44Oa6YCa44KK44CAM-eVquWcsA!3m4!1s0x47e66e31a48a6115:0xf23e0c7b6c50cd93!8m2!3d48.8686382!4d2.3304539?hl=ja"><ruby lang="ja">カプシーヌ修道院<rp>(</rp><rt lang="fr">couvent&#160;des&#160;Capucines</rt><rp>)</rp></ruby lang="ja"></a>（<a href="#couvent">図 ３</a>）がありました。</p>
<figure id="couvent"><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent_700x411.webp 700w" type="image/webp"></source><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent_700x411.jpg 700w"></source><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus_700x447.webp 700w"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus_700x411.jpg" alt="2番目のカプシーヌ修道院、パリにあるヴァンドーム広場、１７０５年" title="2番目のカプシーヌ修道院、パリにあるヴァンドーム広場、１７０５年" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus_700x411.jpg 700w"></picture><figcaption>図 ３：<ruby lang="ja">ペ通り<rt lang="fr" style="color:#999;">rue de la Paix</rt></ruby>の切り開き前、二番目の<ruby lang="ja">カプシーヌ修道院<rt lang="fr" style="color:#999;">couvent des Capucines</rt></ruby>（１７０５年）</figcaption></figure>
<p>そこの教会に、<a href="https://ja.wikipedia.org/wiki/ポンパドゥール夫人" title="https://ja.wikipedia.org/wiki/ポンパドゥール夫人"><ruby lang="ja">ポンパドゥール夫人<rp>(</rp><rt lang="fr">Madame&#160;de&#160;Pompadour</rt><rp>)</rp></ruby lang="ja"></a>と、その妹とお母さまも、葬られることになりました。</p>
<p>広場の真向こう、<a href="https://ja.wikipedia.org/wiki/テュイルリー宮殿" title="https://ja.wikipedia.org/wiki/テュイルリー宮殿"><ruby lang="ja">テュイルリー<rp>(</rp><rt lang="fr">Tuileries</rt><rp>)</rp></ruby lang="ja"></a>側では、もう一つの大門がそれに答えていました。<br>
それは、別の大門、<ruby lang="ja">フイヤン修道院<rp>(</rp><rt lang="fr">couvent&#160;des&#160;Feuillants</rt><rp>)</rp></ruby lang="ja">大門（<a href="#feuillants">図 ４</a>）でした。</p>
<figure id="feuillants"><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants_700x419.webp 700w" type="image/webp"></source><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants_700x419.jpg 700w"></source><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus_700x438.webp 700w"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus_700x438.jpg" alt="フイヤン修道院、、パリにあるヴァンドーム広場、１７５４年" title="フイヤン修道院、、パリにあるヴァンドーム広場、１７５４年" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus_700x438.jpg 700w"></picture><figcaption>図 ４：<ruby lang="ja">カスティグリオーヌ通り<rt lang="fr" style="color:#999;">rue de Castiglione</rt></ruby>の切り開き前、<ruby lang="ja">フイヤン修道院<rt lang="fr" style="color:#999;">couvent des Feuillants</rt></ruby>の大門（１７５４年）</figcaption></figure>
<p>広場の真ん中に、『<ruby lang="ja">ルイ大王<rp>(</rp><rt lang="fr">Louis&#160;le&#160;Grand</rt><rp>)</rp></ruby lang="ja">』といわれる <a href="http://www.louvre.fr/jp/oeuvre-notices/《ルイ14世騎馬像》" title="http://www.louvre.fr/jp/oeuvre-notices/《ルイ14世騎馬像》"><ruby lang="ja">ルイ１４世<rp>(</rp><rt lang="fr">Louis&#160;XIV</rt><rp>)</rp></ruby lang="ja"></a>の銅騎馬像が、１６９９年からすでに立っています（<a href="#statue">図 ５</a>）。 </p>
<figure id="statue"><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue_700x1024.webp 700w" type="image/webp"></source><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue_700x1024.jpg 700w"></source><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus_700x875.webp 700w"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus_700x875.jpg" alt="大王ルイ銅像、パリにあるヴァンドーム広場、１６９９年" title="大王ルイ銅像、パリにあるヴァンドーム広場、１６９９年" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus_700x875.jpg 700w"></picture><figcaption>図 ５：広場の真ん中、<ruby lang="ja">ルイ大王<rt lang="fr" style="color:#999;">Louis le Grand</rt></ruby>銅像（１６９９年）</figcaption></figure>
<p><a href="http://www.louvre.fr/jp/oeuvre-notices/《ルイ14世騎馬像》" title="http://www.louvre.fr/jp/oeuvre-notices/《ルイ14世騎馬像》"><ruby lang="ja">フランソワ・ジラルドン<rp>(</rp><rt lang="fr">François&#160;GIRARDON</rt><rp>)</rp></ruby lang="ja"></a>作の印象的な作品です。台座を含むと高さは、１７㍍に達成していました。</p>
<p><a href="https://ja.wikipedia.org/wiki/フランス革命" title="https://ja.wikipedia.org/wiki/フランス革命">フランス革命</a>が破壊させたが、王のでか足の一つは鋳造に生き残ることが出来て、パリ市立歴史博物館である<a href="https://ja.wikipedia.org/wiki/カルナヴァレ博物館" title="https://ja.wikipedia.org/wiki/カルナヴァレ博物館"><ruby lang="ja">カルナヴァレ博物館<rp>(</rp><rt lang="fr">Musée&#160;Carnavalet</rt><rp>)</rp></ruby lang="ja"></a>に展示されています。</p>
<div class="notices green">
<p><a href="http://www.louvre.fr/jp/oeuvre-notices/《ルイ14世騎馬像》" title="http://www.louvre.fr/jp/oeuvre-notices/《ルイ14世騎馬像》"><ruby>フランソワ<rp>(</rp><rt>François</rt><rp>)</rp>・<rp>(</rp><rt></rt><rp>)</rp>ジラルドン<rp>(</rp><rt>GIRARDON</rt><rp>)</rp></ruby></a>の作品について、さらに詳しい情報は、<a href="http://www.louvre.fr/jp/oeuvre-notices/《ルイ14世騎馬像》" title="http://www.louvre.fr/jp/oeuvre-notices/《ルイ14世騎馬像》"><ruby>ルーブル美術館<rp>(</rp><rt>Musée&#160;du&#160;Louvre</rt><rp>)</rp></ruby></a>の作品<a href="http://www.louvre.fr/jp/oeuvre-notices/《ルイ14世騎馬像》" title="http://www.louvre.fr/jp/oeuvre-notices/《ルイ14世騎馬像》">ページー</a>まで。</p>
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