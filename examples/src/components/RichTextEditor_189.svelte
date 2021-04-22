<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>
<h1 class="green"><ruby style="color:#555;">Vendôme&nbsp;<wbr>Square<rt style="color:#999;font-size:0.95rem;">place&nbsp;<wbr>Vendôme</rt></ruby></h1>

<figure><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome_700x507.webp 700w" type="image/webp"><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus_700x415.webp 700w" type="image/webp"><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome_700x507.jpg https://francois-vidit.com700w"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus_700x415.jpg" alt="La Place Vendôme à Paris, en 1734" title="La Place Vendôme à Paris, en 1734" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus_700x415.jpg 700w"></picture><figcaption><ruby lang="en">Vendôme&nbsp;Square<rt style="color:#999;" lang="fr">place&nbsp;Vendôme</rt></ruby> in Paris according to the <ruby lang="en">Turgot&nbsp;Plan<rt style="color:#999;" lang="fr">Plan&nbsp;de&nbsp;Turgot</rt></ruby> in <time datetime="1734">1734</time></figcaption></figure>

<h2 class="green">Vendôme Square in the Paris of the 17<sup style="color:#3d8b3d;">th</sup> century</h2>

<div class="notices green">
<p>The <a href="https://en.wikipedia.org/wiki/Place_Vendôme" title="https://en.wikipedia.org/wiki/Place_Vendôme"><ruby>Vendôme&nbsp;Square<rp>(</rp><rt>place&nbsp;Vendôme</rt><rp>)</rp></ruby></a> had a very different face before the opening of the <a href="https://en.wikipedia.org/wiki/Rue_de_Rivoli" title="https://en.wikipedia.org/wiki/Rue_de_Rivoli"><ruby>Rivoli&nbsp;Street<rp>(</rp><rt>rue&nbsp;de&nbsp;Rivoli</rt><rp>)</rp></ruby></a> made in only <time datetime="1801">1801</time>.</p>
</div>

<p>The square was first constructed in a square form.</p>
<p>This form is considered too rigid; in <time datetime="1700">1700</time>, part of the facades was torn down and then rebuilt, in 1701, in the present octagonal form. They are the work of the architect <a href="https://en.wikipedia.org/wiki/Jules_Hardouin-Mansart" title="https://en.wikipedia.org/wiki/Jules_Hardouin-Mansart">Jules-Hardouin MANSART</a>.</p>
<p>Looking closely at the <time datetime="1734">1734</time> <a href="https://en.wikipedia.org/wiki/Turgot_map_of_Paris" title="https://en.wikipedia.org/wiki/Turgot_map_of_Paris">Turgot Plan</a>, the place appears to be much calmer than actually:</p>
<ul>
  <li>on the <a href="https://en.wikipedia.org/wiki/Tuileries_Garden" title="https://en.wikipedia.org/wiki/Tuileries_Garden">Tuileries</a> side, The <a href="https://www.google.fr/maps/place/Rue de Castiglione, 75001 Paris/@48.8659408,2.3257194,17z/data=!3m1!4b1!4m8!1m2!2m1!1scastiglione street paris!3m4!1s0x47e66e2de4cf6571:0xad54eb95ed09a09!8m2!3d48.8659408!4d2.3279081" title="https://www.google.fr/maps/place/Rue+de+Castiglione,+75001+Paris/@48.8659408,2.3257194,17z/data=!3m1!4b1!4m8!1m2!2m1!1scastiglione+street+paris!3m4!1s0x47e66e2de4cf6571:0xad54eb95ed09a09!8m2!3d48.8659408!4d2.3279081"><ruby>Castiglione&nbsp;Street<rp>(</rp><rt>rue&nbsp;de&nbsp;Castiglione</rt><rp>)</rp></ruby></a> (<a href="#castiglione">fig. 1</a>),</li>
  <li>on the <a href="https://en.wikipedia.org/wiki/Paris_Opera" title="https://en.wikipedia.org/wiki/Paris_Opera">Opéra</a> side, the <a href="https://en.wikipedia.org/wiki/Rue_de_la_Paix,_Paris" title="https://en.wikipedia.org/wiki/Rue_de_la_Paix,_Paris"><ruby>Paix&nbsp;Street<rp>(</rp><rt>rue&nbsp;de&nbsp;la&nbsp;Paix</rt><rp>)</rp></ruby></a> (<a href="#paix">fig. 2</a>),
  has not yet been pierced.</li>
</ul>

<figure><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione_700x507.webp 700w" type="image/webp"><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione_700x507.jpg 700w"><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus_669x484.webp 669w"><img id="castiglione" src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus_700x415.jpg" alt="La Place Vendôme à Paris, côté rue Castiglione, en 1734" title="La Place Vendôme à Paris, côté rue Castiglione, en 1734" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus_669x484.jpg 669w"></picture><figcaption>fig. 1: Prior to the puncture of <ruby lang="en">Castiglione&nbsp;Street<rt style="color:#999;" lang="fr">rue&nbsp;de&nbsp;Castiglione</rt></ruby>, access from <ruby lang="en">Saint-Honoré&nbsp;Street<rt style="color:#999;" lang="fr">rue&nbsp;Saint-Honoré</rt></ruby> (<time datetime="1734">1734</time>)</figcaption></figure>

<p>The access is only by:</p>
<ul>
  <li>the <a href="https://en.wikipedia.org/wiki/Rue_Saint-Honoré" title="https://en.wikipedia.org/wiki/Rue_Saint-Honoré"><ruby>Saint-Honoré&nbsp;Street<rp>(</rp><rt>rue&nbsp;Saint-Honoré</rt><rp>)</rp></ruby></a> on the <a href="https://en.wikipedia.org/wiki/Tuileries_Garden" title="https://en.wikipedia.org/wiki/Tuileries_Garden">Tuileries</a> side (<a href="#castiglione">fig. 1</a> above),</li>
  <li>and the <a href="https://www.google.fr/maps/place/Rue des Capucines, Paris/@48.8689074,2.3272296,17z/data=!3m1!4b1!4m8!1m2!2m1!1scapucines street paris!3m4!1s0x47e66e31789d3efd:0x1c0b307ea31b237e!8m2!3d48.8689074!4d2.3294183" title="https://www.google.fr/maps/place/Rue+des+Capucines,+Paris/@48.8689074,2.3272296,17z/data=!3m1!4b1!4m8!1m2!2m1!1scapucines+street+paris!3m4!1s0x47e66e31789d3efd:0x1c0b307ea31b237e!8m2!3d48.8689074!4d2.3294183"><ruby>Capucines&nbsp;Street<rp>(</rp><rt>rue&nbsp;des&nbsp;Capucines</rt><rp>)</rp></ruby></a> on the <a href="https://en.wikipedia.org/wiki/Paris_Opera" title="https://en.wikipedia.org/wiki/Paris_Opera">Opéra</a> side (<a href="#paix">fig. 2</a> below).  </li>
</ul>

<figure><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix_700x507.webp 700w" type="image/webp"><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix_700x507.jpg 700w"><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus_700x447.webp 700w"><img id="paix" src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus_700x415.jpg" alt="La Place Vendôme à Paris, côté rue de la Paix, en 1734" title="La Place Vendôme à Paris, côté rue de la Paix, en 1734" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus_700x447.jpg 700w"></picture><figcaption>fig. 2: Prior to the puncture of <ruby lang="en">Paix&nbsp;Street<rt style="color:#999;" lang="fr">rue&nbsp;de&nbsp;la&nbsp;Paix</rt></ruby>, access from <ruby lang="en">Capucines&nbsp;Street<rt style="color:#999;" lang="fr">rue&nbsp;des&nbsp;Capucines</rt></ruby></figcaption></figure>

<p>It could not be passed through as since the 19<sup>th</sup> century.</p>
<p>On the <a href="https://en.wikipedia.org/wiki/Paris_Opera" title="https://en.wikipedia.org/wiki/Paris_Opera"><ruby>Opera<rp>(</rp><rt>Opéra</rt><rp>)</rp></ruby></a> side, at the location of the current <a href="https://en.wikipedia.org/wiki/Rue_de_la_Paix,_Paris" title="https://en.wikipedia.org/wiki/Rue_de_la_Paix,_Paris"><ruby>Paix&nbsp;Street<rp>(</rp><rt>rue&nbsp;de&nbsp;la&nbsp;Paix</rt><rp>)</rp></ruby></a>, was the <a href="https://www.google.fr/maps/place/3 Rue de la Paix, 75002 Paris/@48.8686382,2.3282652,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e31a48a6115:0xf23e0c7b6c50cd93!8m2!3d48.8686382!4d2.3304539" title="https://www.google.fr/maps/place/3+Rue+de+la+Paix,+75002+Paris/@48.8686382,2.3282652,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e31a48a6115:0xf23e0c7b6c50cd93!8m2!3d48.8686382!4d2.3304539"><ruby>convent&nbsp;of&nbsp;the&nbsp;Capucines<rp>(</rp><rt>couvent&nbsp;des&nbsp;Capucines</rt><rp>)</rp></ruby></a> (<a href="#couvent">fig. 3</a>).</p>

<figure><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent_700x411.webp 700w" type="image/webp"><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent_700x411.jpg 700w"><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus_700x447.webp 700w"><img id="couvent" src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus_700x411.jpg" alt="Le second couvent des Capucines, Place Vendôme à Paris, 1705" title="Le second couvent des Capucines, Place Vendôme à Paris, 1705" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus_700x411.jpg 700w"></picture><figcaption>fig. 3: Prior to the puncture of <ruby lang="en">Paix&nbsp;Street<rt style="color:#999;" lang="fr">rue&nbsp;de&nbsp;la&nbsp;Paix</rt></ruby>, the second <ruby lang="en">Convent&nbsp;of&nbsp;the&nbsp;Capucines<rt style="color:#999;" lang="fr">couvent&nbsp;des&nbsp;Capucines</rt></ruby> dating of <time datetime="1705">1705</time></figcaption></figure>

<p><a href="https://en.wikipedia.org/wiki/Madame_de_Pompadour" title="https://en.wikipedia.org/wiki/Madame_de_Pompadour">Madame de Pompadour</a> was buried, as was her mother and sister, in the church.</p>
<p>In front, on the <a href="https://en.wikipedia.org/wiki/Paris_Opera" title="https://en.wikipedia.org/wiki/Paris_Opera">Tuileries</a>' side, another portal, the portal of <a href="https://www.google.fr/maps/place/3 Rue de la Paix, 75002 Paris/@48.8686382,2.3282652,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e31a48a6115:0xf23e0c7b6c50cd93!8m2!3d48.8686382!4d2.3304539" title="https://www.google.fr/maps/place/3+Rue+de+la+Paix,+75002+Paris/@48.8686382,2.3282652,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e31a48a6115:0xf23e0c7b6c50cd93!8m2!3d48.8686382!4d2.3304539"><ruby>convent&nbsp;of&nbsp;the&nbsp;Capucines<rp>(</rp><rt>couvent&nbsp;des&nbsp;Capucines</rt><rp>)</rp></ruby></a> was responding to it (<a href="#feuillants">fig. 4</a>).</p>

<figure><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants_700x419.webp 700w" type="image/webp"><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants_700x419.jpg 700w"><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus_700x438.webp 700w"><img id="feuillants" src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus_700x438.jpg" alt="le portail du couvent des Feuillants, Place Vendôme à Paris, 1754" title="le portail du couvent des Feuillants, Place Vendôme à Paris, 1754" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus_700x438.jpg 700w"></picture><figcaption>fig. 4: Prior to the puncture of <ruby lang="en">Castiglione&nbsp;Street<rt style="color:#999;" lang="fr">rue&nbsp;de&nbsp;Castiglione</rt></ruby>, the portal of <ruby lang="en">convent&nbsp;of&nbsp;the&nbsp;Capucines<rt style="color:#999;" lang="fr">couvent&nbsp;des&nbsp;Capucines</rt></ruby> (1754)</figcaption></figure>

<p>In the center of the square, was erected, since <time datetime="1699">1699</time>, the statue of <a href="https://en.wikipedia.org/wiki/Louis_XIV_of_France" title="https://en.wikipedia.org/wiki/Louis_XIV_of_France">Louis XIV</a> called «Louis le Grand» (<a href="#statue">fig. 5</a>).</p>

<figure><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue_700x1024.webp 700w" type="image/webp"><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue_700x1024.jpg 700w"><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus_700x875.webp 700w"><img id="statue" src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus_700x875.jpg" alt="la statue de Louis Le Grand, Place Vendôme à Paris, 1699" title="la statue de Louis Le Grand, Place Vendôme à Paris, 1699" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus_700x875.jpg 700w"></picture><figcaption>fig. 5: in the middle of the square, the statue of Louis Le Grand (1699)</figcaption></figure>

<p>It is an impressive work by <a href="https://en.wikipedia.org/wiki/François_Girardon" title="https://en.wikipedia.org/wiki/François_Girardon">François GIRARDON</a> , which reaches, with its pedestal, a height of 17m high.</p>
<p>The <a href="https://en.wikipedia.org/wiki/French_Revolution" title="https://en.wikipedia.org/wiki/French_Revolution"><ruby>Revolution<rp>(</rp><rt>Révolution</rt><rp>)</rp></ruby></a> will destroy it but one of the huge feet of the king survived its melt and is exhibited at the Museum of History of the City of Paris, the <a href="https://en.wikipedia.org/wiki/Carnavalet_Museum" title="https://en.wikipedia.org/wiki/Carnavalet_Museum"><ruby>Carnavalet&nbsp;Museum<rp>(</rp><rt>Musée&nbsp;Carnavalet</rt><rp>)</rp></ruby></a>.</p>

<aside>
<div class="notices green">
<p>For more information on the work of <a href="https://en.wikipedia.org/wiki/François_Girardon" title="https://en.wikipedia.org/wiki/François_Girardon">François GIRARDON</a>, consult its <a href="http://www.louvre.fr/en/oeuvre-notices/louis-xiv-horseback" title="http://www.louvre.fr/en/oeuvre-notices/louis-xiv-horseback">reference</a> on the <a href="http://www.louvre.fr/en/oeuvre-notices/louis-xiv-horseback" title="http://www.louvre.fr/en/oeuvre-notices/louis-xiv-horseback">Louvre Museum site</a>.</p>
</div>
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