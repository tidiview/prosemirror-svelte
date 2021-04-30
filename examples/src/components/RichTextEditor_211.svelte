<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<div id="aboutmainblock">
<div class="pure-g about-div">
<div id="about_photo" class="block pure-u-4-7 size-4-7 responsive-container">

<figure>
  <picture><source media="(min-width: 959px)" sizes="43vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-280.webp 280w,
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
  <img src="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-840.jpg" alt="in front of the Mont-Saint-Michel in 2013" title="François VIDIT in front of the Mont-Saint-Michel in 2013" class="verticalcenter" sizes="100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-840.jpg 840w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-1920.jpg 1920w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-2240.jpg 2240w"></picture><figcaption>8 years ago.</figcaption>
</figure>

</div>
<div id="about_name" class="block pure-u-3-7">

<hgroup>
<h1><span title="Given Name" style="color:#000e5f;letter-spacing: 0px;word-break:keep-all;" lang="fr">François</span> <span style="color:#000e5f;letter-spacing: 0px;word-break:keep-all;" title="Family Name" lang="fr">VIDIT</span></h1>
<h2>guide-interpreter of Paris</h2>
</hgroup>

<p><span title="Prénom">François</span>, as given name, is pronunced: <span title="pronunciation of given name « François »">[fʁɑ̃.swɑ]</span></p>

<p><audio controls="1" title="audio pronunciation of given name « François »"  id="audio0"><source src="https://francois-vidit.com/user/sites/profile/pages/01.home/02.nom/Francois.mp3" type="audio/mpeg">Your browser does not support the audio tag.</audio></p>

<p><span title="Nom">VIDIT</span>, here family name, is pronunced: <span title="pronunciation of family name « VIDIT »">[vidi]</span></p>

<p><audio controls="1" title="audio pronunciation of family name « VIDIT »"  id="audio1"><source src="https://francois-vidit.com/user/sites/profile/pages/01.home/02.nom/VIDIT.mp3" type="audio/mpeg">Your browser does not support the audio tag.</audio></p>

<p><span style="color:#000e5f">François VIDIT is </span> <span title="Profession" style="color:#000e5f">japanese guide-interpreter<span style="color:#000e5f"> in </span></span><span style="color:#000e5f" lang="fr">Paris</span><span style="color:#000e5f">. For more than <time datetime="P20Y">20 years</time>, he is receiving work under various forms, from touristical guiding, intercultural councelling, consecutive interpretation, to translation.</span></p>

</div>
</div>

<div class="pure-g about-div">
<div id="about_age" class="block pure-u-1-6 size-1-6" style="border-style: none;padding-top: 0px;margin-bottom: 0px;">      
</div>

<div id="about_parisien" class="block pure-u-5-6">

<h2>A Parisian that has connected in Tōkiō</h2>

<p>Like his parents, He is parisian.</p>
<p>He has discovered japanese culture with the <a href="https://en.wikipedia.org/wiki/Go_(game)" title="https://en.wikipedia.org/wiki/Go_(game)">go game</a> and He started to learn its language as an autodidact, aged of seventeen.</p>
<p>After his degree at the <a href="https://www.google.com/maps/place/E.N.S.A.P.L.V : École Nationale Supérieure d'Architecture de Paris La Villette/@48.8936163,2.378878,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66dd283e5884d:0x9d97e01a0a060349!8m2!3d48.8936128!4d2.3810667" title="https://www.google.com/maps/place/E.N.S.A.P.L.V.">National Architecture School of Paris-La Villette</a>, He left to Japan.</p>
<p>He joined a company of conception and realisation of commercial networks for luxury brands in the largest japanese cities in the prestigious area of <a href="http://www.garde-intl.com/" title="http://www.garde-intl.com/">Aoyama</a> in <a id="fnref1:1" href="#fn:1">Tōkiō</a>.</p>
<p>On return to France, He changed profession and became guide-interpreter.</p>

<aside>
  <p id="fn:1"><i>Tōkiō</i>: This orthograph is rare, but it's the official french transgraphy dating from the end of the nineteenth century: it's still in use at the French Ambassy in Tōkiō. English transgraphy: Tokyo.</p>
  <footer>
    <p class="puce"><a href="#fnref1:1">back to text ↩</a></p>
  </footer>
</aside>

</div>
</div>

<div class="pure-g about-div">
<div id="about_guider" class="block pure-u-3-4">

<h2>to guide, it's to share !</h2>

<p>It's to confront to different faces, experience the solemn character of encounter, to find oneself out of habits, and by there feel in oneself a new humanity coming forward, intimately and misteriously.</p>
<p>From there, to be lucky to find oneself ceaselessly rid of number of prejudices, ceaselessly more universal to the encounter of humanity and world.</p>
</div>
                            
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
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.webp 840w" type="image/webp">
  <source sizes="97vw, 100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.webp 840w" type="image/webp">
  <source media="(min-width: 959px)" sizes="19vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.jpg 840w">
  <source media="(min-width: 767px)" sizes="80vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.jpg 840w">
  <img src="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.jpg" alt="autoportrait, 1995" title="autoportrait of François VIDIT, 1995" class="verticalcenter" sizes="97vw, 100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.jpg 840w"></picture><figcaption>By autoportrait, 25 years ago.</figcaption>
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
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.webp 840w" type="image/webp">
  <source media="(min-width: 767px)" sizes="80vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.webp 840w" type="image/webp">
  <source sizes="97vw, 100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.webp 840w" type="image/webp">
  <source media="(min-width: 959px)" sizes="25vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.jpg 840w">
  <source media="(min-width: 767px)" sizes="80vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.jpg https://francois-vidit.com840w">
  <img src="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.jpg" alt="aquarel, 2003" title="François VIDIT's aquarel, 2003" class="verticalcenter" sizes="97vw, 100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.jpg 840w"></picture><figcaption>By watercolor, 17 years ago.</figcaption>
</figure>

</div>

<div id="about_rireki" class="block pure-u-2-3" style="margin-left: 0px">

<h2>Professional cursus</h2>

<ol class="year">
  <li>
    <span class="year-width"><time datetime="1999">1999</time>:</span>&nbspObtention of the Certificate of Japanese-Language Proficency Test <a href="http://www.jlpt.jp/e/index.html" title="http://www.jlpt.jp/e/index.html">Level 3</a> of the Association of International Education, Japan
  </li>
  <li>
    <span class="year-width"><time datetime="2003">2003</time>:</span>&nbspAdmitted to the  <abbr title="eighth">8<sup>th</sup></abbr> <a href="http://www.kanken.or.jp/bjt/english/" title="http://www.kanken.or.jp/bjt/english/">Business Japanese Proficency Test <a id="fnref1:2" href="#fn:2"><abbr title="Japanese Listening and Reading Test">JLRT</abbr></a> <a id="fnref1:3" href="#fn:3"><abbr title="Japanese External Trade Organization">JETRO</abbr></a> 
  </li>
  <li>
    <span class="year-width"><time datetime="2011">2011</time>:</span>&nbspObtention of the title of <a href="http://www.entreprises.gouv.fr/tourisme/metiers/guide-conferencier" title="http://www.entreprises.gouv.fr/tourisme/metiers/guide-conferencier">Guide-Conférencier</a> at the <a href="https://www.google.fr/maps/place/Université Toulouse - Jean Jaurès/@43.5779941,1.3996184,17z/data=!3m1!4b1!4m5!3m4!1s0x12aeba4c48abb62d:0xaa534804f879cf3b!8m2!3d43.5779941!4d1.4018071" title="https://www.google.fr/maps/place/Université+Toulouse+-+Jean+Jaurès">Toulouse-Jean Jaurès University</a>
  </li>
</ol>

<aside>
  <p id="fn:2" class="no-puce"><dfn><i><abbr title="Japanese Listening and Reading Test">JLRT</abbr></i></dfn>: Japanese Listening and Reading Test&nbsp;<a href="#fnref1:2">↩</a></p>
  <p id="fn:3" class="no-puce"><dfn><i><abbr title="Japanese External Trade Organization">JETRO</abbr></i></dfn>: Japanese External Trade Organization&nbsp;<a href="#fnref1:3">↩</a></p>
  </li>
</aside>

<div class="pure-g about-div">
<div id="about_hyoshiki" class="block pure-u-2-3">

<h2>pratical informations</h2>

<p><span style="min-width: 260px;float: left;">profes<wbr>sional regis<wbr>tration number: </span><wbr><samp>GC1375538P</samp></p>
<p><span style="min-width: 260px;float: left;">affilia<wbr>tion: </span><wbr><a id="fnref1:4" href="http://www.agij-paris.com/" title="http://www.agij-paris.com/"><abbr title="Association des Guide-Interprètes de langue Japonaise">AGIJ</abbr></a></p>
<p><span style="width: 260px;float: left;">other spo<wbr>ken lan<wbr>guages: </span><wbr>english, spanish</p>
<p><span style="width: 260px;float: left;">guiding area: </span><wbr><a href="#map_destinations" title="#map_destinations">France</a>, <a href="https://www.google.com/maps/place/France/@45.8629839,-6.7669772,5z/data=!3m1!4b1!4m5!3m4!1s0xd54a02933785731:0x6bfd3f96c747d9f7!8m2!3d46.227638!4d2.213749" title="https://www.google.com/maps/place/France/">Bruges</a> (Belgium)</a></p>
<p>
  <span style="width: 260px;float: left;">address: </span><wbr><a href="https://www.google.com/maps/place/Bruges, Belgique/@51.2605832,3.0820626,11z/data=!3m1!4b1!4m5!3m4!1s0x47c350d0c11e420d:0x1aa2f35ac8834df7!8m2!3d51.209348!4d3.2246995" title="https://www.google.com/maps/place/Bruges,+Belgium">10, rue Théophraste Renaudot 75015 Paris</a>
</p>
<p><span style="width: 260px;float: left;">contact: </span><wbr><a href="http://www.francois-vidit.com/en#contact" title="https://www.francois-vidit.com/en#contact">here</a></p>

<aside>
  <p id="fn:4" class="no-puce"><dfn><i><abbr title="Association des Guide-Interprètes de langue Japonaise">AGIJ</abbr></i></dfn>: Association des Guide-Interprètes de langue Japonaise, french japanese-language speaking licenced guide-interpreters association&nbsp;<a href="#fnref1:4">↩</a></p>
</aside>

</div>
</div>

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