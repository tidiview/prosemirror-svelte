<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 1 -->

<article>
<h1 class="blue"><ruby style="color:#555;" lang="en">Apotheosis of Hercules<rt style="color:#999;" lang="fr">Apothéose d'Hercule</rt></ruby></h1>

  <figure><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-1920.jpg 1920w"><img src="/user/sites/docs/pages/01.home/02.versailles/01.https://francois-vidit.compalais/01.hercule/01.hercule_1/hercule-focus_700x562.jpg" alt="François Lemoyne, « The Apotheosis of Hercules », Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « The Apotheosis of Hercules », Salon d'Hercule (Hercules Room) of the Palace of Versailles" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus_700x562.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/01.hercule_1/hercule-focus-840.jpg 840w"></picture><figcaption>Apotheosis of Hercules</figcaption></figure>

<div class="notices blue">
<p>In <time datetime="1736-09-26">1736, on September 26<sup>th</sup></time>, King <a href="https://en.wikipedia.org/wiki/Louis_XV_of_France" title="https://en.wikipedia.org/wiki/Louis XV of France">Louis XV</a> inaugurated at the Palais de Versailles the work of the painter <a href="https://en.wikipedia.org/wiki/François_Lemoyne" title="https://en.wikipedia.org/wiki/François_Lemoyne">François LEMOYNE</a>, newly created for the <a href="https://en.wikipedia.org/wiki/Salon_d'Hercule" title="https://en.wikipedia.org/wiki/Salon d'Hercule">Salon of Hercules</a>, <cite>The Apotheosis of Hercules</cite> and reproduced above.</p>
<p>On this occasion, the gazette <a href="https://en.wikipedia.org/wiki/Mercure_de_France" title="https://en.wikipedia.org/wiki/Mercure_de_France"><cite>Le Mercure de France</cite></a> published an exceptional text because probably written by the painter himself which tells us about the conditions that presided over this work and also of the detail of its composition.</p>
<p>It is this text that is reproduced below.</p>
<p>This painter's work is exceptional for many reasons and especially to be one of his last.</p>
<p>Indeed, the artist decided to put an end to his days shortly after achieving it, by suiciding of several strokes of sword, in his apartment in Paris on <time datetime="1737-06-04">June 4th, 1737</time>.</p>
</div>

<aside>
<div class="notices green">
  <p>In order to facilitate the comprehension of the text, links have been established between it and the parts of the work designated: a click on the word refers to the part of the work represented and also reversely, a click on a part of the work refers to the word of the text in reference.</p>
</div>

<div class="notices green">
  <dl>
  <dt>to display the perimeter in your browser:</dt>
  <dd>It is possible to reveal the perimeter of the part of the image designated in the text using to read this page a browser based on Chrome. However, as Chrome contains a tracker and reports all your browsing to the Google company, we advise you to use the excellent browser <a href="https://www.srware.net/en/software_srware_iron_download.php" title="https://www.srware.net/en/software_srware_iron_download.php">SRWare Iron</a> based on Chrome but which do not contain the tracker component. For android based mobiles, the SRWare Iron application can be found <a href="https://play.google.com/store/apps/details?hl=en" title="https://play.google.com/store/apps/details?id=org.iron.srware&amp;hl=en" id="org.iron.srware">here...</a>.</dd>
  </dl>
</div>
</aside>

<h2 id="ceiling-of-a-salon-of-the-château-de-versailles-preceding-that-o" class="blue">Ceiling of a Salon of the Château de Versailles, preceding that of the Chapel of the King, called the Grand Salon de Marbre.</h2>

<p>For more than two years we have been working at <cite>Le Mercure de France</cite>,
we have always had special attention to celebrate Fine Arts;</p>
<p>but we have never had such a wonderful opportunity that the one that is presenting today,
And we thought we did nothing for their glory, if we were negligent in talking about the great book of oil painting that has just been discovered to the eyes of the public;</p>
<p>an exceptional event, which is to most illustrate our School in this century, and serve as a Monument to Posterity, to prove the progress of Painting in France, under the reign of Louis XV.</p>
<p><span style="color: #28a1c5;"><cite>The Apotheosis of Hercules</cite></span> makes the Subject of this immense and beautiful composition.</p>
<p><span style="color: #28a1c5;">François Le Moine</span>, from Paris, Professor of the Royal Academy of Painting and Sculpture, Student of Mr. Galoche, Professor of the same Academy, worked in the order of the King for four years, under the direction of the Duke of Antin, Pair of France, Chevalier of His Majesty's Orders, Governor of the Orléanais, Minister of State, and Director General of the King's Buildings, enlightened Protector of the Arts, and always attentive to what can contribute to their advancement.</p>
<p>Wednesday, <time datetime="1736-09-26">September the 26<sup>th</sup></time>, the day for the appearance of this great Work, the Salon was, until the time the King crossed it to go to Mass;</p>
<p>Her Majesty accompanied by the Lords, Cardinal of Fleury and other Ministers, followed by a large crowd came from afar;</p>
<p>stopped there for a long time, and more on the return of Mass;
The King examined in detail the order in general, the differens groups in particular, the Drawing, the colours the wonderful effect of the whole.</p>
<p>Her Majesty whose delicacy of taste is known, and his love for Painting and for all Fine Arts,
after having extremely praised the genius and beauty of Mr Le Moine,
appointed him immediately his First Painter, with applause from the entire Court, and an infinite number of spectators whom curiosity had attracted to Versailles,
whose contribution does not diminish, it even increases every day to the same degree of the point, which is to be seen of such a well execution of such a great composition;</p>
<p>because to say it, the biggest part of the great Gallery, painted by the illustrious Le Brun, is not almost so big that half the one that gives occasion to this Article.</p>
</div>

<!-- Page 2 -->


<p><span style="color: #28a1c5;">Below the description of it.</span></p>
<p>This ceiling is 64 feet long, out of 4 wide, and eight and a half feet of indentation area from corniche to top.</p>
<p>The Figures in the attica have ten to eleven feet of proportion;</p>
<p>One can count in the entire Work up to 142 Figures,
included about thirty, feigned stuccos.</p>
<p>One can see 62 at a glance by discovering the main Group.</p>
<p><span style="color: #28a1c5;">The whole Work rolls on this thought:</span></p>
<p>The Love of Virtue elevates man above himself and makes him superior to the most difficult and perilous work;
the obstacles vanish in the view of the interests of his King and his Fatherland,
supported by honour and driven by loyalty,
he reaches by his actions to immortality.</p>
<p><span style="color: #28a1c5;"><cite>The Apotheosis of Hercules</cite> appears well suited to develop this thought:</span>
This Hero was busy during his life only to immortalize himself through virtuous and heroic actions;</p>
<p>and Jupiter of which he had been the image on earth, crown his work in Heaven by immortality.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-640.jpg" alt="François Lemoyne, « Hercules presented to Jupiter by the Love of Virtue », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « Hercules presented to Jupiter by the Love of Virtue », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" usemap="#img_hercule1" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule1-1920.jpg 1920w"></picture>
  <figcaption><q cite="#hercule">Hercules
  presented to Jupiter by the Love of Virtue</q></figcaption>
  <map name="img_hercule1" id="img_hercule1"><area id="area_hercule" alt="Hercules" title="Hercules" href="#hercule" shape="poly" coords="534,636,537,609,519,589,508,580,517,565,532,576,550,595,549,576,561,571,582,541,573,534,574,523,579,507,591,501,609,507,612,522,622,525,633,556,645,576,643,597,637,606,625,624,660,651,654,667,640,666,621,645,615,655,619,675,606,672,595,679,588,664,562,648"><area id="area_jupiter" alt="Jupiter" title="Jupiter" href="#jupiter" shape="poly" coords="280,520,285,502,285,492,298,492,312,474,321,474,316,463,303,475,285,466,270,453,258,451,280,444,291,454,300,454,312,442,330,438,330,429,336,424,342,414,354,414,366,427,366,438,358,445,364,450,387,466,408,471,436,478,445,486,435,487,424,498,423,513,417,520,394,517,375,523,364,532,358,543,357,550,334,538,313,534,297,529"><area id="area_amourdelavertu" alt="Love of Virtue" title="Love of Virtue" href="#amourdelavertu" shape="poly" coords="522,631,514,634,502,634,489,627,477,613,459,613,448,597,453,577,444,568,430,574,411,579,405,570,417,553,429,547,442,547,451,553,457,547,448,540,448,525,459,519,469,517,478,523,478,540,480,549,489,546,495,534,513,531,522,532,529,541,526,555,514,558,505,570,504,583,510,594,511,609,517,624"><area id="area_geniesdelamour" alt="Geniuses of the same Love" title="Geniuses of the same Love" href="#geniesdelamour" shape="poly" coords="519,760,504,774,492,771,481,760,478,750,462,738,453,718,433,709,435,690,445,702,453,699,454,685,448,675,439,681,426,681,427,697,432,721,427,729,418,715,412,693,406,682,403,694,397,700,393,691,387,700,384,679,390,661,394,654,385,646,364,634,361,618,369,610,375,621,382,625,390,622,384,609,390,601,402,600,406,612,418,598,429,598,439,603,435,613,447,621,456,624,460,631,471,631,481,633,486,640,474,639,465,642,468,651,475,648,484,651,490,654,484,660,481,667,487,673,495,684,504,693,490,696,474,697,465,703,474,712,480,715,489,724,496,726,504,735,513,741,517,747"><area id="area_lesmonstresetlesvices" alt="Monsters and Vices" title="Monsters and Vices" href="#lesmonstresetlesvices" shape="poly" coords="591,700,591,714,598,721,610,724,616,714,622,732,610,738,600,745,591,750,585,757,574,769,568,778,558,784,547,778,558,768,550,762,559,754,537,754,525,759,516,768,510,781,511,796,519,801,522,810,516,829,510,846,507,859,510,868,517,871,528,865,534,855,537,865,543,876,558,898,568,895,591,907,598,915,594,925,583,933,580,916,571,907,538,910,531,903,534,889,526,883,516,892,511,912,516,921,528,919,543,934,556,933,555,948,541,957,528,967,519,981,519,996,522,1018,531,1036,541,1039,552,1044,565,1051,591,1054,600,1057,612,1065,630,1069,649,1069,675,1077,694,1075,712,1060,724,1053,735,1042,741,1035,735,1026,741,1002,732,1030,723,1027,717,1039,706,1051,681,1057,684,1042,685,1032,678,1021,664,1020,652,1033,655,1017,666,997,655,972,648,960,660,963,670,955,679,955,694,960,711,960,727,958,721,975,723,993,727,1005,741,993,744,984,762,984,771,982,769,994,763,1005,768,1014,774,1018,781,1021,781,1029,768,1029,775,1041,789,1048,805,1050,810,1039,811,1029,826,1035,843,1039,862,1044,880,1060,894,1095,907,1086,894,1056,877,1029,867,1026,852,1023,858,1012,870,1011,879,1008,865,993,847,981,829,966,817,949,820,940,807,925,787,913,772,910,775,897,772,883,763,873,750,885,735,901,721,909,717,888,720,877,717,865,720,852,733,840,738,825,735,811,733,798,724,807,715,817,708,829,696,828,687,819,691,804,684,789,702,786,708,775,718,774,697,760,688,769,676,769,663,772,660,783,652,787,640,784,648,771,648,753,646,735,634,733,628,741,618,741,624,721,624,711,615,702,606,711,597,705"><area id="area_hebe" alt="Hebe" title="Hebe" href="#hebe" shape="poly" coords="163,561,174,537,187,526,180,517,187,492,181,481,181,460,193,444,184,447,183,436,205,405,214,403,219,402,216,394,225,385,235,385,243,390,250,397,243,403,241,409,232,412,234,421,235,429,241,435,259,441,268,439,286,442,289,447,279,448,268,448,261,453,262,457,259,466,255,475,252,487,253,507,253,514,247,519,235,520,222,522,214,532,214,544,216,553,207,552,199,546,189,547,181,553,174,559"><area id="area_hymen" alt="Hymen" title="Hymen" href="#hymen" shape="poly" coords="183,436,189,421,205,400,210,405,214,402,211,396,217,387,229,381,240,387,247,393,243,400,235,408,229,414,241,430,250,426,250,420,267,417,277,409,288,396,313,396,328,385,343,381,348,372,357,372,360,361,373,346,339,352,337,334,348,324,331,315,325,324,322,339,328,348,322,360,303,363,298,340,288,328,273,321,259,315,247,307,237,316,228,321,205,313,183,300,172,303,181,318,190,330,204,340,208,348,201,364,202,378,192,373,177,381,168,390,163,399,172,408,181,400,184,408,177,418,169,412,154,418,147,423,151,430,133,445,127,454,136,457,153,444,163,436,174,439"></map></figure>

<p><span style="color: #28a1c5;">This is the general idea of the subject.</span></p>
<p><a href="#area_hercule" title="Hercules" id="hercule"><mark>Hercules</mark></a>
presented to <a href="#area_jupiter" title="Jupiter" id="jupiter">Jupiter</a> by the <a href="#area_amourdelavertu" title="Love of Virtue" id="amourdelavertu">Love of Virtue</a>,
is pulled in a Chariot by the <a href="#area_geniesdelamour" title="Geniuses of the same Love" id="geniesdelamour">Geniuses of the same Love</a>.</p>
<p><a href="#area_lesmonstresetlesvices" title="Monsters and Vices" id="lesmonstresetlesvices">Monsters and Vices</a>
tamed by the value of this Hero, cannot support his glory are overthrown
and rush by making unnecessary efforts to bring it to bear.</p>
<p>Jupiter introduces him to <a href="#area_hebe" title="Hebe" id="hebe">Hebe</a>, Goddess of Youth, led by the <a href="#area_hymen" title="Hymen" id="hymen">Hymen</a>.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-640.jpg" alt="François Lemoyne, « Apollo invites the nine Sisters », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « Apollo invites the nine Sisters », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" usemap="#img_hercule2" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule2-1920.jpg 1920w"></picture>
  <figcaption>Apollo invites <q cite="#apollon">the nine Sisters to celebrate the high feats, and the apotheosis of</q> Hercules</figcaption>
  <map name="img_hercule2" id="img_hercule2"><area id="area_apollon" alt="Apollo" title="Apollo" href="#apollon" shape="poly" coords="483,520,496,505,514,505,508,494,519,484,523,469,508,473,496,472,490,463,475,469,466,458,472,452,466,445,472,433,492,437,483,421,484,409,493,407,501,421,510,428,520,428,552,437,559,430,570,427,579,430,586,439,583,448,576,454,565,460,571,469,583,479,592,467,604,472,597,488,609,505,603,517,613,533,631,543,624,548,601,543,601,535,583,520,583,530,571,529,556,514,541,511,525,511,510,512,504,517,495,521"><area id="area_lesneufsoeurs" alt="the nine Sisters" title="the nine Sisters" href="#lesneufsoeurs" shape="poly" coords="339,758,339,738,361,722,373,725,387,705,414,653,402,653,409,636,424,642,438,632,451,629,469,608,475,608,478,603,471,585,475,573,490,566,501,569,508,576,508,591,514,597,522,590,523,578,519,566,511,564,517,554,532,560,538,557,541,548,550,542,564,542,573,551,567,564,579,563,591,563,595,572,592,593,601,593,609,599,618,596,618,573,627,563,637,563,642,572,640,587,651,591,655,578,673,570,663,566,664,551,676,543,688,548,691,569,715,564,724,567,733,566,736,554,750,549,754,557,751,566,745,572,739,588,730,594,718,596,721,608,729,615,736,608,753,618,762,629,757,638,736,639,753,656,775,671,789,665,799,677,804,678,805,665,804,644,796,632,796,605,802,617,811,618,811,629,841,647,850,650,850,633,841,620,843,608,832,606,825,611,819,590,826,578,840,578,859,590,865,579,879,569,865,557,862,545,840,549,823,552,801,551,795,542,792,533,769,520,754,521,733,520,726,512,736,511,748,511,757,506,760,500,744,482,720,481,709,476,711,460,721,454,732,452,741,458,747,449,772,449,786,454,802,446,810,449,822,443,838,443,862,452,862,464,853,478,846,491,835,497,853,494,865,497,859,503,874,500,877,511,885,520,886,532,889,542,895,527,909,533,910,542,907,551,915,557,924,563,934,557,958,548,955,693,943,702,916,695,895,696,852,707,853,719,849,729,832,731,802,722,789,695,775,689,769,678,775,672,754,657,742,660,724,653,712,645,699,651,687,656,670,660,658,662,645,659,631,665,619,668,642,677,651,686,657,701,657,714,670,716,694,728,694,737,673,729,679,737,688,744,708,749,691,759,664,749,664,759,634,756,610,755,597,761,586,779,576,785,570,762,547,750,550,734,555,722,547,714,525,720,501,744,487,744,502,720,502,707,493,720,475,720,457,728,448,722,441,711,424,711,421,722,409,735,418,743,394,755,388,746,373,749,355,753"><area id="area_letempledelamemoire" alt="the Temple of Memory" title="the Temple of Memory" href="#letempledelamemoire" shape="poly" coords="229,448,225,433,234,410,246,407,253,398,240,386,241,371,253,364,306,346,312,356,333,349,358,343,378,340,400,343,418,347,445,361,453,346,487,355,525,374,522,382,508,400,513,412,508,421,496,419,492,410,478,407,483,424,490,434,483,437,471,431,469,446,469,455,472,466,484,466,493,469,505,469,520,469,519,485,511,494,508,503,496,500,477,497,466,500,445,506,433,515,433,524,420,529,411,518,394,521,385,521,382,512,370,505,357,508,352,500,342,503,327,503,316,503,304,503,303,493,288,490,276,487,264,484,253,484,249,470,241,455"></map></figure>

<p><span style="color: #28a1c5;">On the opposite side</span>
is <a href="#area_apollon" title="Apollo" id="apollon">Apollo</a>,
which invites <a href="#area_lesneufsoeurs" title="the nine Sisters" id="lesneufsoeurs">the nine Sisters</a> to celebrate the high feats, and the Apotheosis of the new God.</p>
<p>Behind Apollo is <a href="#area_letempledelamemoire" title="the Temple of Memory" id="letempledelamemoire">the Temple of Memory</a>.</p>
<p><span style="color: #28a1c5;">Above the Corniche</span>,
reigns around an Attica that encircles the Subject,
it is drawn up in the middle of enhanced Golden Cartels,
accompanied by the main works of <mark>Hercules</mark> feigned of Sculpture of white marble.</p>
<p>In the corners of the Attica,
are four Virtues on Pedestals and feigned the same way.</p>
<p>These Virtues are Force, Your Constancy, Value, Justice,
which specifically refers to the character of <mark>Hercules</mark>.</p>
<p><span style="color: #28a1c5;">For the rest, the composition is distributed in nine Groups.</span></p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-640.jpg" alt="François Lemoyne, « under a Curtain supported by the Satellites of Jupiter », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « under a Curtain supported by the Satellites of Jupiter », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" usemap="#img_hercule3" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/02.hercule_2/hercule3-1920.jpg 1920w"></picture>
  <figcaption><q cite="#lessatellitesdejupiter">Under a Curtain supported by the Satellites of Jupiter</q></figcaption>
  <map name="img_hercule3" id="img_hercule3"><area id="area_lessatellitesdejupiter" alt="the Satellites of Jupiter" title="the Satellites of Jupiter" href="#lessatellitesdejupiter" shape="poly" coords="445,579,424,579,424,559,430,552,447,550,456,567,466,567,487,556,517,528,510,520,502,517,499,495,508,481,520,481,531,475,540,478,547,483,558,478,546,487,534,486,538,502,537,511,546,513,556,513,571,520,592,547,592,556,588,564,570,561,553,556,549,543,541,532,532,535,522,535,517,546,511,553,504,561,493,567,478,568,598,699,610,705,616,716,625,720,642,728,655,741,660,753,667,765,673,771,676,789,675,804,682,810,688,801,684,774,685,750,697,728,696,714,705,723,706,728,721,729,724,735,744,744,739,732,736,720,724,711,715,698,715,684,726,693,730,696,733,684,741,677,745,662,747,650,739,636,741,624,747,615,741,603,748,598,753,588,753,574,741,567,748,531,757,531,765,543,763,552,772,564,783,570,784,579,789,588,802,585,813,576,825,577,834,583,838,585,846,598,858,610,873,618,886,626,904,644,919,644,924,635,910,632,901,620,888,615,874,600,867,583,879,582,889,586,898,589,904,603,918,583,910,573,913,559,904,540,889,535,880,516,868,505,844,495,831,495,817,487,802,480,784,480,772,475,765,468,769,465,784,462,795,453,796,436,807,426,807,414,796,418,784,433,771,441,754,444,741,453,732,459,721,457,720,444,706,433,691,438,687,447,691,465,702,468,711,474,712,483,706,492,700,504,700,516,697,525,700,535,694,547,691,561,682,573,690,556,699,558,708,555,717,540,727,537,748,531,741,567,727,574,717,582,714,594,711,603,705,610,705,607,691,616,690,606,687,589,687,582,676,585,673,595,672,609,676,623,663,626,652,632,651,647,642,654,639,666,625,666,619,675,612,678,609,689,598,699,480,570,459,576,459,576,459,576,459,576,459,576,459,576,459,576"><area id="area_junon" alt="Juno" title="Juno" href="#junon" shape="poly" coords="438,768,450,740,472,723,486,729,474,732,457,740,447,759,450,771,457,764,469,753,480,747,492,746,504,744,504,735,502,722,508,705,522,699,538,710,541,731,532,740,531,753,543,768,556,782,571,783,588,786,606,800,618,810,628,822,639,836,640,854,639,870,624,875,613,876,604,887,595,894,586,879,589,866,579,851,564,845,550,848,541,855,535,870,525,869,513,866,502,857,504,837,498,830,502,813,511,807,523,800,526,795,514,788,496,785,469,782,456,773,448,771,436,771"><area id="area_laigle" alt="the Eagle" title="the Eagle" href="#laigle" shape="poly" coords="417,971,379,947,376,936,370,942,360,932,360,945,330,945,339,963,321,966,304,956,277,966,270,953,264,960,255,950,232,962,220,947,207,924,201,900,208,885,223,896,237,905,247,899,253,873,261,858,280,854,295,858,286,863,283,876,280,890,291,894,304,894,315,885,325,881,339,882,358,887,372,894,385,899,396,903,408,918,421,933,426,950,424,960"><area id="area_ganimede" alt="Ganymede" title="Ganymede" href="#ganimede" shape="poly" coords="255,861,262,854,270,848,273,831,276,818,267,807,270,798,276,792,267,785,262,777,240,773,232,782,228,795,225,806,226,821,228,836,228,843,237,846,232,854,243,852"></map>
</figure>

<p><span style="color: #28a1c5;">In the first</span>, under a Curtain supported by <a href="#area_lessatellitesdejupiter" title="the Satellites of Jupiter" id="lessatellitesdejupiter">the Satellites of Jupiter</a>,
this God on a throne
is intend him for spouse;</p>
<p><a href="#area_junon" title="Juno" id="junon">Juno</a> who crossed <mark>Hercules</mark> during her life,
seems to approve this change,
ingenious figure that proves that the Virtue always overcomes Jealousy and Envy.</p>
<p>at the feet of Jupiter,
one sees <a href="#area_laigle" title="the Eagle" id="laigle">the Eagle</a> repository of lightning;</p>
<p><a href="#area_ganimede" title="Ganymede" id="ganimede">Ganymede</a> is next to Hebe,
looks with pleasure at the happiness of this Goddess.</p>

<!-- Page 3 -->


<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-640.jpg" alt="François Lemoyne, « Cupid looking with a clever eye and contemptuous of the Love of Virtue », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « Cupid looking with a clever eye and contemptuous of the Love of Virtue », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" usemap="#img_hercule4" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule4-1920.jpg 1920w"></picture>
  <figcaption>Cupid <q cite="#cupidon">looking with a clever eye and contemptuous of the Love of Virtue</q></figcaption>
  <map name="img_hercule4" id="img_hercule4"><area id="area_bacchus" alt="Bacchus" title="Bacchus" href="#bacchus" shape="poly" coords="370,436,376,430,369,413,385,422,378,410,382,398,388,391,400,388,406,383,414,385,418,395,420,410,411,416,405,425,412,428,420,425,427,421,435,428,430,439,430,449,429,461,424,475,417,487,415,496,417,503,415,512,420,520,427,526,433,520,429,511,429,499,438,482,445,476,447,466,456,458,459,448,468,445,478,440,487,436,496,434,505,439,513,445,519,448,519,457,526,457,535,457,544,455,552,454,559,448,552,440,540,442,528,437,516,424,507,418,502,409,493,404,484,409,478,416,481,406,477,397,471,404,466,389,459,377,454,376,457,370,454,361,450,352,439,349,432,355,430,362,424,370,421,371,411,367,400,367,399,374,388,376,382,382,369,394,367,404,367,422"><area id="area_dieupan" alt="God Pan" title="God Pan" href="#dieupan" shape="poly" coords="337,449,346,434,354,421,361,416,364,398,364,407,364,428,370,434,376,428,384,424,384,418,376,410,382,404,385,392,391,386,399,388,409,383,417,388,418,397,417,409,412,418,414,428,421,422,435,428,429,440,429,457,423,472,417,482,411,461,403,469,397,479,393,494,381,502,369,509,364,500,352,500,345,511,334,503,327,494,316,493,321,481,319,469,325,457"><area id="area_deuxsylvains" alt="Two Sylvains" title="Two Sylvains" href="#deuxsylvains" shape="poly" coords="190,416,202,418,219,422,235,421,250,424,261,433,268,422,274,418,285,416,295,413,297,425,303,433,310,416,321,422,330,433,334,445,342,448,343,434,352,424,358,418,363,403,361,388,366,380,376,379,387,362,387,341,369,310,358,322,369,344,360,358,351,356,349,352,337,349,330,338,327,329,316,320,303,323,297,337,298,349,310,359,319,368,316,388,304,394,294,400,286,410,273,412,256,409,249,398,258,395,261,385,264,376,262,364,247,364,235,362,225,370,211,373,195,377,184,388,181,400,184,409"><area id="area_amphitrite" alt="Amphitrite" title="Amphitrite" href="#amphitrite" shape="poly" coords="289,196,279,202,270,224,283,229,295,239,292,248,282,253,295,259,298,272,301,280,306,287,313,286,324,290,334,296,343,296,346,304,354,307,364,302,373,301,381,305,391,304,391,292,387,281,373,277,366,266,360,266,358,262,354,257,354,253,345,241,339,238,339,229,336,212,328,203,327,199,333,193,333,182,330,175,316,173,306,184,298,194"><area id="area_mercure" alt="Mercury" title="Mercury" href="#mercure" shape="poly" coords="145,290,156,290,160,275,175,257,201,250,208,245,208,232,210,218,217,226,229,224,240,229,244,218,240,194,253,193,261,194,267,205,271,212,271,226,286,230,283,220,289,217,295,223,295,211,288,202,283,193,274,188,271,179,268,170,277,169,288,164,286,155,276,145,271,139,262,137,256,146,264,148,261,157,250,158,240,154,229,154,220,158,202,155,205,146,216,148,210,133,199,130,187,134,183,148,190,146,187,155,177,163,166,175,168,187,154,181,139,181,138,202,147,211,162,211,162,223,151,229,151,241,160,239,163,226,171,218,177,223,184,218,180,233,168,236,165,253,148,271,157,263,142,278"><area id="area_venus" alt="Venus" title="Venus" href="#venus" shape="poly" coords="322,646,312,644,310,629,307,629,294,634,279,632,274,635,267,641,271,650,255,646,249,635,235,623,243,614,259,614,255,601,261,593,258,583,253,583,258,568,255,551,255,536,259,526,268,515,271,499,277,490,285,490,292,490,288,481,288,467,297,461,310,460,318,470,321,482,318,494,327,499,334,505,336,517,345,517,340,526,342,536,352,538,348,539,348,547,358,551,358,560,367,569,372,581,370,592,357,599,342,608,325,623"><area id="area_lestroisgraces" alt="the Three Graces" title="the Three Graces" href="#lestroisgraces" shape="poly" coords="255,602,244,601,241,589,231,590,225,580,216,581,207,587,207,590,186,584,169,583,156,587,147,596,139,590,120,595,106,608,103,625,93,626,87,614,33,610,18,614,9,617,0,608,0,553,6,562,12,566,18,559,25,550,22,539,25,526,31,518,42,517,52,523,55,532,61,539,69,545,73,557,72,568,76,578,90,577,100,574,114,574,106,565,100,551,103,539,111,530,117,520,126,514,130,502,141,499,135,491,138,482,144,475,151,473,159,473,168,479,171,491,169,502,166,505,169,511,172,514,178,505,181,494,184,484,192,476,195,472,192,463,186,454,189,443,201,436,208,442,214,451,214,460,219,464,223,457,235,457,247,455,255,446,261,440,268,433,267,422,276,416,291,415,298,422,304,430,310,434,307,442,300,449,289,458,279,452,274,442,268,457,261,463,252,470,259,475,267,478,273,467,277,476,285,476,274,491,271,500,264,511,261,526,259,539,256,551,249,557,246,566,244,577,246,589"><area id="area_cupidon" alt="Cupid" title="Cupid" href="#cupidon" shape="poly" coords="396,604,403,593,409,584,415,550,406,544,403,557,400,547,388,532,396,529,411,536,411,526,406,514,394,509,387,514,379,512,370,517,370,514,366,511,366,505,355,503,349,512,358,521,367,527,366,535,357,541,348,538,346,545,357,548,364,550,370,553,375,560,373,571,375,580,381,590,385,601"><area id="area_pandore" alt="Pandora" title="Pandora" href="#pandore" shape="poly" coords="444,602,453,596,457,581,454,577,462,571,466,562,474,554,478,556,481,551,469,545,463,533,465,520,472,514,481,514,489,518,495,526,502,532,514,532,526,538,534,547,540,553,538,560,541,568,549,577,549,586,556,595,559,602,552,608,549,610,540,610,537,619,532,614,523,605,516,611,510,617,502,608,495,598,487,589,478,584,469,589,466,598,466,608,466,613,460,611,454,608,448,613"><area id="area_diane" alt="Diana" title="Diana" href="#diane" shape="poly" coords="562,602,558,593,550,587,550,577,543,569,540,560,544,553,537,547,544,541,549,541,544,535,535,532,538,529,532,523,540,515,541,505,547,499,555,499,555,494,549,490,543,484,541,473,546,475,549,466,558,463,568,467,576,473,573,487,576,494,583,499,586,502,591,503,600,497,609,496,610,497,606,500,610,502,619,497,622,500,615,508,604,509,612,514,622,517,624,524,633,530,643,532,655,526,657,515,658,503,664,493,672,490,667,497,663,505,661,517,661,532,661,539,657,548,652,557,657,566,658,574,661,587,663,599,660,614,657,622,651,628,648,629,645,637,637,634,634,643,624,638,621,640,619,647,609,647,603,644,606,635,598,628,589,625,583,619,577,623,568,625,561,619,552,614,559,608"><area id="area_comus" alt="Comus" title="Comus" href="#comus" shape="poly" coords="507,616,499,607,493,596,486,589,478,583,469,589,468,598,468,613,456,610,451,614,444,604,451,598,459,583,453,580,451,569,442,565,429,560,421,565,417,572,415,580,409,586,402,592,399,599,394,608,394,617,394,626,393,637,394,647,397,658,403,664,406,671,411,679,414,682,423,680,432,674,442,674,445,677,453,674,457,674,465,676,472,671,477,671,484,677,492,679,496,685,504,689,508,697,520,695,517,683,525,682,522,670,516,671,511,658,505,644,499,632,490,625,495,616,502,617"></map>
</figure>

<p><span style="color: #28a1c5;">2<sup style="color:#28a1c5">nd</sup> Group</span>.</p>
<p>On the right of Jupiter,
<a href="#area_bacchus" title="Bacchus" id="bacchus">Bacchus</a> seated and leaned on <a href="#area_dieupan" title="God Pan" id="dieupan">God Pan</a>,
consider contentedly the triumph of <mark>Hercules</mark>.</p>
<p>Bacchus is accompanied by <a href="#area_deuxsylvains" title="two Sylvains" id="deuxsylvains">two Sylvains</a>, one of whom ties his Thyrse, and the other some grapes,
above appears <a href="#area_amphitrite" title="Amphitrite" id="amphitrite">Amphitrite</a>, and <a href="#area_mercure" title="Mercury" id="mercure">Mercury</a> the Messenger of the Gods ready to execute Jupiter orders.</p>
<p>Below Bacchus one sees <a href="#area_venus" title="Venus" id="venus">Venus</a> with <a href="#area_lestroisgraces" title="the Three Graces" id="lestroisgraces">the Three Graces</a>,
They are applauding themselves  for contributing to make Hebe amiable;</p>
<p>one of the Graces holds a Crown that she seems to intend to him,
<a href="#area_cupidon" title="Cupid" id="cupidon">Cupid</a> who is next to his mother,
looking with a clever eye and contemptuous of the Love of Virtue.</p>
<p>At the feet of Bacchus,
and a little bit down,
<a href="#area_pandore" title="Pandora" id="pandore">Pandora</a> and <a href="#area_diane" title="Diana" id="diane">Diana</a> seem to invite <a href="#area_comus" title="Comus" id="comus">Comus</a>, the Banquets God, to get ready for the Feast:
This God wears a pike surrounded by a swag of flowers.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-640.jpg" alt="François Lemoyne, « Mars watching the fall of Monsters and Vices », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « Mars watching the fall of Monsters and Vices », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" usemap="#img_hercule5" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule5-1920.jpg 1920w"></picture>
  <figcaption><q cite="#mars">Mars watching the fall of Monsters and Vices</q></figcaption>
  <map name="img_hercule5" id="img_hercule5"><area id="area_mars" alt="Mars" title="Mars" href="#mars" shape="poly" coords="399,387,393,393,384,394,373,381,376,390,367,388,358,393,348,391,343,378,339,366,343,355,351,364,358,357,364,351,366,342,363,331,363,318,360,309,357,300,361,289,366,279,355,265,355,253,361,244,369,241,379,240,391,231,394,225,403,219,418,216,423,202,430,198,444,198,432,199,435,205,442,211,444,214,450,219,448,222,444,222,441,229,442,240,448,247,454,256,454,259,462,268,466,280,454,285,451,295,457,301,453,310,450,310,439,315,427,322,415,330,406,342,399,358,396,372"><area id="area_vulcain" alt="Vulcan" title="Vulcan" href="#vulcain" shape="poly" coords="334,396,343,378,337,366,343,357,351,361,363,352,366,340,363,331,364,319,357,300,363,282,355,276,349,265,334,256,336,253,330,247,328,243,312,243,307,253,312,268,310,271,300,271,288,276,280,285,268,286,255,285,243,277,238,276,228,276,220,280,223,288,231,291,240,289,247,294,256,298,267,303,267,307,261,313,258,316,243,315,240,318,231,328,232,339,237,349,237,360,241,367,246,375,256,378,255,391,255,406,265,418,280,423,289,420,300,414,307,409,304,400,295,388,304,387,315,394,324,397,328,397"><area id="area_plusieursamours" alt="Several Loves" title="Several Loves" href="#plusieursamours" shape="poly" coords="178,447,171,427,162,426,162,415,150,417,142,412,130,414,126,400,114,394,115,378,126,381,123,364,108,367,106,357,109,345,112,336,102,328,91,328,88,319,88,307,87,297,90,286,81,271,70,270,72,265,66,265,58,271,43,268,33,271,42,256,37,246,45,243,52,243,55,238,48,229,54,219,61,213,70,214,78,210,78,199,85,198,94,195,99,202,94,210,99,217,103,225,111,231,115,241,126,243,132,247,132,250,118,249,111,253,109,256,96,258,93,267,81,271,90,286,99,289,106,291,108,301,117,304,126,309,133,309,139,295,147,289,150,279,148,268,156,262,160,253,166,247,166,237,174,235,184,243,183,250,192,247,196,253,207,262,207,265,195,258,189,261,178,261,174,273,172,283,163,288,160,295,148,298,133,310,144,319,148,325,157,319,166,316,171,304,181,304,181,291,190,285,202,289,208,306,205,319,211,333,216,348,222,363,217,373,208,366,201,358,201,372,199,382,193,388,190,397,196,406,205,412,211,424,222,432,231,423,237,415,238,426,238,436,238,451,237,459,229,444,220,442,207,445,196,438,184,424,186,438,186,447"><area id="area_deuxrenommees" alt="Two Fames" title="Two Fames" href="#deuxrenommees" shape="poly" coords="198,540,216,540,231,522,246,520,253,516,285,516,294,517,298,523,312,523,310,514,318,513,325,507,342,504,346,511,351,498,367,499,388,495,379,486,370,481,387,483,396,477,402,469,414,484,423,483,436,480,451,475,439,475,427,474,418,472,412,462,421,456,430,454,447,460,450,457,478,469,489,468,489,457,514,448,526,448,537,454,541,453,540,442,520,430,513,436,502,433,505,432,513,435,508,426,511,415,508,406,501,411,498,420,493,429,484,432,480,417,496,418,496,415,475,414,465,399,465,397,481,394,489,385,478,376,468,379,477,373,480,366,475,354,466,345,459,360,448,363,436,363,439,351,450,342,451,331,447,322,456,315,448,304,439,315,421,328,408,342,400,357,399,381,397,393,397,396,387,397,385,390,375,390,367,393,366,400,370,406,364,414,354,405,345,399,333,396,322,394,303,384,301,397,306,409,312,418,321,423,316,436,313,447,309,454,309,460,295,459,291,459,289,448,277,441,267,444,262,453,262,465,270,472,271,477,261,475,249,472,237,478,226,487,216,499,204,517"></map>
</figure>

<p><span style="color: #28a1c5;">3<sup style="color:#28a1c5">rd</sup> Group</span>.</p>
<p>Below Pandore and Diane,
and on the front of the Group,
one sees <a href="#area_mars" title="Mars" id="mars">Mars</a> watching the fall of Monsters and Vices,
that only Virtue, and not Force, strucks down at this time.
<a href="#area_vulcain" title="Vulcan" id="vulcain">Vulcan</a>, whose works are devoted to this God,
is next to him;</p>
<p><a href="#area_plusieursamours" title="Several Loves" id="plusieursamours">Several Loves</a> on the right of these Deities,
and hold Precious Weapons,
for the sake of the value of <mark>Hercules</mark>.</p>
<p>Lower,
<a href="#area_deuxrenommees" title="Two Fames" id="deuxrenommees">Two Fames</a> go down to announce the Earth what happens in Heaven in favour of <mark>Hercules</mark>.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-640.jpg" alt="François Lemoyne, « Envy, Anger, Hatred, Discord and other Vices are precipitated from Heaven », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « Envy, Anger, Hatred, Discord and other Vices are precipitated from Heaven », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" usemap="#img_hercule6" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/03.hercule_3/hercule6-1920.jpg 1920w"></picture>
  <figcaption>Envy, Anger, Hatred, Discord and other Vices <q cite="#envie">are precipitated from Heaven</q></figcaption>
  <map name="img_hercule6" id="img_hercule6"><area id="area_envie" alt="Envy" title="Envy" href="#envie" shape="poly" coords="247,448,250,459,258,463,267,460,274,454,279,456,273,468,262,477,247,478,237,481,225,486,214,489,196,484,181,484,184,472,169,466,159,468,136,474,127,484,126,498,127,508,133,514,135,525,126,537,118,546,108,559,94,574,96,592,102,597,115,589,132,583,148,564,174,556,159,555,178,547,177,538,192,523,202,513,232,502,240,501,255,505,262,496,271,501,280,501,289,496,297,484,286,466,291,453,283,444,270,451,258,459,250,454"><area id="area_colere" alt="Anger" title="Anger" href="#colere" shape="poly" coords="133,583,127,595,136,637,153,643,163,657,175,667,180,676,190,682,202,672,213,663,222,655,229,640,232,642,238,637,238,621,237,612,226,618,219,607,223,598,235,592,253,594,271,595,274,615,282,621,301,634,312,646,316,660,328,682,333,685,331,663,324,633,316,616,295,598,276,585,252,574,249,564,249,555,258,549,267,544,283,556,288,556,285,541,277,525,270,513,258,502,253,507,241,499,202,513,180,535,177,546,160,552,175,556,148,564"><area id="area_haine" alt="Hatred" title="Hatred" href="#haine" shape="poly" coords="246,645,244,658,232,684,247,694,240,718,228,729,231,744,225,750,214,739,204,732,195,736,180,732,160,720,166,709,156,708,144,715,138,708,127,717,133,727,145,736,160,745,162,754,174,757,193,759,208,757,243,747,253,750,273,766,294,772,337,772,348,769,351,760,354,751,336,733,349,733,355,724,370,720,373,696,367,681,387,664,388,651,381,637,393,633,396,613,387,600,375,595,355,600,378,585,378,573,372,556,360,547,348,537,334,552,321,553,309,559,301,577,286,558,264,543,249,555,250,576,274,583,318,618,333,664,331,684,313,655,307,636,271,612,252,615,249,631"><area id="area_discorde" alt="Discord" title="Discord" href="#discorde" shape="poly" coords="177,676,169,687,153,694,156,669,150,658,139,660,106,645,105,634,114,625,108,615,87,624,78,643,79,652,91,654,108,676,126,681,118,691,94,696,84,708,63,715,51,769,55,787,69,802,79,807,99,828,108,831,123,832,139,853,163,865,178,876,187,874,198,889,213,895,229,894,250,886,261,888,285,871,295,865,288,861,309,826,285,862,276,853,261,870,232,870,213,870,223,861,229,847,228,832,219,826,204,829,202,813,226,801,223,781,213,757,183,757,162,756,162,747,135,730,127,717,138,709,145,717,154,708,168,711,160,720,181,732,192,738,205,733,226,747,232,742,228,726,217,723,219,715,228,711,228,700,238,690,234,684,244,660,252,616,271,612,270,597,237,591,223,595,219,606,228,616,237,612,237,637,231,640,223,651,190,681,183,675"><area id="area_autresvices" alt="other Vices" title="other Vices" href="#autresvices" shape="poly" coords="289,772,292,780,312,778,298,789,288,822,298,828,316,822,318,811,331,819,342,816,348,822,336,843,334,853,340,862,336,870,330,877,334,895,345,901,357,909,366,906,376,892,376,886,388,897,394,906,411,913,427,924,436,940,438,961,447,987,451,994,465,984,460,942,454,912,450,913,420,885,417,867,414,855,429,883,436,898,435,888,442,894,447,885,442,868,445,858,432,846,433,835,424,826,417,808,424,802,427,793,421,780,423,760,421,748,411,744,399,751,382,739,385,726,387,706,381,691,369,691,460,687,481,682,487,696,490,708,507,712,526,717,529,727,549,735,555,750,558,760,570,756,574,766,579,778,592,789,601,793,613,790,625,787,624,778,640,772,649,774,666,760,645,748,631,762,628,772,613,777,594,756,591,742,601,745,610,742,594,733,588,723,594,720,583,712,591,705,597,706,603,699,612,694,609,678,598,667,585,666,573,679,568,685,561,678,555,669,543,679,535,690,523,687,511,690,529,673,538,666,544,654,553,651,567,654,579,651,598,652,607,643,622,640,624,625,612,618,598,622,597,631,583,633,556,627,543,628,547,621,543,607,529,604,513,606,508,621,508,633,505,639,490,637,477,646,459,661,460,687,370,691,369,720,357,721,349,732,334,732,352,751,348,768,342,769"></map>
</figure>

<p><span style="color: #28a1c5;">4<sup style="color:#28a1c5">th</sup> Group</span>.</p>
<p>At the bottom of the <mark>Hercules</mark>,
<a href="#area_envie" title="Envy" id="envie">Envy</a>, <a href="#area_colere" title="Anger" id="colere">Anger</a>, <a href="#area_haine" title="Hatred" id="haine">Hatred</a>, <a href="#area_discorde" title="Discord" id="discorde">Discord</a> and <a href="#area_autresvices" title="other Vices" id="autresvices">other Vices</a>, of whom the new God triumphed, are precipitated from Heaven,
Envy alone is still the closest to the Hero,
She threatens him,
and her fury seems to give it up only reluctantly,
to make known that this Monster is the most dangerous and fierce of all vices, and the only one whose rage extends beyond death.</p>

<!-- Page 4 -->


<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-640.jpg" alt="François Lemoyne, « Neptune looks with joy, Pluto appears to be diverting his looks », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « Neptune looks with joy, Pluto appears to be diverting his looks », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" usemap="#img_hercule7" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule7-1920.jpg 1920w"></picture>
  <figcaption>Neptune <q cite="#neptune">looks with joy</q>, Pluto <q cite="#pluton">appears to be diverting his looks</q></figcaption>
  <map name="img_hercule7" id="img_hercule7"><area id="area_cibele" alt="Cibele" title="Cibele" href="#cibele" shape="poly" coords="129,751,136,744,153,741,169,748,184,754,196,771,201,759,210,756,213,744,226,747,235,744,235,735,231,727,238,723,249,718,256,709,256,697,271,693,279,685,288,687,307,720,324,714,319,697,327,691,327,681,342,696,357,696,372,703,358,687,343,670,337,657,319,652,309,642,309,633,303,625,295,624,301,615,306,607,309,598,306,585,289,577,279,580,270,589,267,600,267,613,267,618,255,612,244,615,238,619,226,612,213,610,202,610,178,612,166,607,160,622,168,625,175,621,190,621,199,625,208,628,216,622,223,630,216,633,207,633,196,637,183,637,169,637,160,634,151,643,138,645,123,655,114,666,105,678,102,694,108,723,117,733,124,741"><area id="area_unamour" alt="A playing Love" title="A playing Love" href="#unamour" shape="poly" coords="366,705,379,705,372,685,372,672,381,670,387,678,390,673,387,663,376,660,375,649,384,648,387,633,385,615,378,600,370,591,372,580,361,573,366,568,360,561,361,556,354,558,349,556,345,562,334,562,322,568,316,565,310,573,306,573,306,582,321,588,315,595,325,601,328,613,336,619,334,631,339,649,339,663,345,675,351,682,358,693"><area id="area_minerve" alt="Minerva" title="Minerva" href="#minerve" shape="poly" coords="171,400,178,385,190,373,208,375,223,376,241,385,255,396,262,397,267,393,268,381,277,369,283,367,300,355,310,354,354,316,358,322,316,355,316,360,310,366,304,366,292,378,298,385,304,393,304,403,312,408,319,403,330,399,339,402,345,397,352,405,357,414,354,423,349,430,340,433,331,435,321,430,309,432,309,444,289,469,273,481,261,472,247,474,246,468,234,462,235,447,231,432,222,420,213,412,204,420,192,415,180,414"><area id="area_ceres" alt="Ceres" title="Ceres" href="#ceres" shape="poly" coords="177,582,181,580,187,585,201,577,211,576,219,580,216,567,222,552,232,543,243,538,252,541,252,532,258,531,262,528,274,528,268,535,259,546,252,553,244,564,243,571,250,571,258,567,264,559,271,556,277,552,286,552,294,556,300,561,307,565,318,565,324,570,331,565,339,562,337,558,340,550,337,546,340,538,339,532,346,519,351,508,355,495,357,486,352,477,357,469,358,459,355,445,345,442,334,447,328,460,328,471,322,481,306,483,303,481,307,480,315,478,309,469,298,469,289,477,276,483,261,474,247,475,234,483,228,493,225,492,216,496,207,511,202,526,196,550,198,564,190,573"><area id="area_neptune" alt="Neptune" title="Neptune" href="#neptune" shape="poly" coords="462,841,478,858,489,847,493,829,510,802,510,819,510,840,520,846,540,837,553,844,556,861,565,868,573,876,586,867,607,861,616,847,627,843,627,829,627,810,625,801,622,799,624,790,690,772,697,778,729,774,726,768,705,768,738,754,696,762,712,754,687,759,678,765,622,780,609,775,603,766,610,757,603,742,606,735,619,736,631,727,633,718,631,700,621,691,601,694,594,702,591,691,579,688,549,703,526,709,520,694,507,694,474,658,462,652,450,657,445,670,450,721,457,742,439,757,429,756,423,766,435,772,450,771,460,786,466,774,478,786,480,805,475,825"><area id="area_pluton" alt="Pluto" title="Pluto" href="#pluton" shape="poly" coords="564,868,559,886,564,897,573,900,570,909,531,895,528,904,543,907,535,916,520,922,519,940,519,958,531,973,514,988,513,997,532,1015,544,1017,553,1006,579,1008,588,1000,601,1005,619,1005,619,1026,642,1024,651,1012,652,1002,655,988,660,976,654,964,664,999,676,1015,694,1021,699,1014,678,975,679,954,727,967,732,975,769,984,739,967,739,964,768,979,739,954,726,958,678,940,682,933,676,922,675,907,664,894,666,882,673,874,687,871,696,864,696,853,700,853,700,849,712,847,715,832,711,819,696,811,679,808,669,813,669,816,655,808,637,807,627,813,627,841,616,846,607,861,585,865,574,876"></map>
</figure>

<p><span style="color: #28a1c5;">5<sup style="color:#28a1c5">th</sup> Group</span>.</p>
<p>On the front and behind the Chariot of <mark>Hercules</mark>,
<a href="#area_cibele" title="Cibele" id="cibele">Cibele</a> is in his finish by creneaux and dragged by Lions;</p>
<p><a href="#area_unamour" title="A playing Love" id="unamour">A playing Love</a> relieves her of the weight of her Crown.</p>
<p>Above in a depressed plane,
one sees <a href="#area_minerve" title="Minerva" id="minerve">Minerva</a> and <a href="#area_ceres" title="Ceres" id="ceres">Ceres</a> with their personal attributes,
<a href="#area_neptune" title="Neptune" id="neptune">Neptune</a> and <a href="#area_pluton" title="Pluto" id="pluton">Pluto</a> are next to Cibele;</p>
<p>the God of the Sea looks with joy at the glory of the new God,
and Pluto, whose this Hero braved the Empire, appears to be diverting his looks, do not applause to his triumph.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-640.jpg" alt="François Lemoyne, « Zephyrus and Flora, accompanied by the Air Geniuses, play with a swag », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « Zephyrus and Flora, accompanied by the Air Geniuses, play with a swag », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" usemap="#img_hercule8" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule8-1920.jpg 1920w"></picture>
  <figcaption>Zephyrus and Flora, accompanied by the Air Geniuses, <q cite="#zephyretflore">play with a swag</q></figcaption>
  <map name="img_hercule8" id="img_hercule8"><area id="area_eole" alt="Aeolus" title="Aeolus" href="#eole" shape="poly" coords="384,982,399,981,396,954,406,924,421,921,436,921,439,912,454,907,460,903,468,903,453,892,453,883,465,882,454,870,465,861,489,859,493,861,495,847,496,844,486,814,478,802,477,789,472,786,478,783,471,774,477,774,465,762,462,763,448,759,435,763,426,771,424,786,435,789,426,792,367,787,357,777,375,766,384,768,379,759,351,775,345,772,325,780,324,789,321,789,325,802,337,798,337,813,352,865,351,876,346,879,334,879,333,891,348,897,360,889,382,894,382,925,387,948,381,969"><area id="area_zephyretflore" alt="Zephyrus and Flora" title="Zephyrus and Flora" href="#zephyretflore" shape="poly" coords="529,1083,528,1074,511,1060,511,1045,525,1041,523,1023,513,1017,493,1011,493,1008,516,1005,525,996,522,990,528,943,534,931,546,930,553,925,541,916,565,892,556,886,534,901,532,886,556,885,565,892,571,880,592,870,606,873,610,859,607,850,624,847,613,837,603,837,591,844,597,852,588,859,580,865,556,868,550,858,553,850,558,837,562,838,567,831,583,831,583,814,580,801,592,801,592,790,604,790,616,801,613,811,603,817,604,837,613,837,624,847,610,858,607,873,621,868,621,853,630,838,645,826,649,849,658,843,663,856,651,885,654,888,660,880,676,883,687,892,687,901,684,909,691,913,700,928,696,939,679,943,670,958,663,972,657,984,646,991,634,996,627,1005,627,1014,630,1023,628,1036,613,1036,609,1045,594,1047,585,1051,589,1059,585,1071,585,1075,573,1078,565,1084,556,1080,543,1086"><area id="area_geniesdelair" alt="Air Geniuses" title="Air Geniuses" href="#geniesdelair" shape="poly" coords="390,1030,391,1039,402,1038,415,1041,411,1026,421,1020,430,1020,439,1011,447,1021,460,1011,469,996,484,996,490,988,508,990,517,990,523,988,528,945,535,931,553,925,543,915,564,892,573,880,589,868,604,873,610,861,609,850,621,850,613,835,606,834,591,843,597,850,582,862,556,867,556,883,534,901,534,885,555,883,556,867,543,865,547,859,549,843,534,829,516,832,510,849,511,867,508,868,498,859,487,859,466,856,454,870,466,880,453,883,453,891,468,903,442,910,436,921,420,934,417,943,424,952,432,951,426,976,436,973,429,990,432,999,417,1003,403,1023"><area id="area_rosee" alt="Dew" title="Dew" href="#rosee" shape="poly" coords="571,1159,586,1164,615,1170,624,1177,651,1173,661,1183,643,1222,649,1228,645,1242,649,1251,652,1258,661,1261,672,1233,682,1216,693,1188,702,1185,711,1177,721,1185,736,1185,736,1171,744,1156,756,1165,756,1159,744,1143,742,1131,757,1131,769,1120,771,1102,765,1092,754,1084,748,1092,745,1101,736,1108,733,1105,735,1101,736,1096,733,1092,733,1080,739,1066,742,1039,727,1021,711,1003,699,985,696,966,691,969,691,984,687,979,684,982,688,1000,682,996,687,1018,694,1029,685,1024,690,1039,696,1048,694,1059,691,1074,691,1077,681,1081,670,1086,660,1095,649,1098,648,1089,637,1086,637,1075,628,1068,619,1062,609,1065,607,1071,595,1075,600,1081,600,1089,615,1098,619,1116,601,1117,598,1123,583,1119,564,1125"><area id="area_lesamours" alt="Loves" title="Loves" href="#lesamours" shape="poly" coords="688,1030,687,1026,691,1024,687,1017,681,996,688,1002,684,987,697,982,702,991,742,1039,750,1038,748,1023,757,1018,763,1003,768,996,771,1012,778,1006,795,1005,793,994,786,990,790,982,795,982,805,994,802,1008,807,1012,813,1003,838,981,840,969,816,966,820,963,829,966,835,958,835,949,838,946,846,954,856,955,859,952,867,960,883,961,888,949,895,946,900,957,904,963,910,978,924,981,927,979,921,963,924,960,931,940,930,924,939,912,936,900,925,892,910,901,892,901,885,895,874,891,865,903,867,913,868,918,865,921,855,916,840,918,829,916,828,913,813,919,802,928,801,919,790,916,777,925,777,939,780,946,769,951,768,955,765,960,753,961,750,972,751,976,739,982,738,972,724,966,717,976,712,985,703,993,697,981,678,994,667,991,655,987,645,993,643,1003,649,1011,654,1014,652,1017,648,1023,640,1017,631,1020,630,1042,642,1041,646,1032,648,1051,646,1062,654,1069,664,1068,654,1072,646,1080,646,1089,651,1096,660,1095,664,1080,673,1075,681,1074,687,1065,678,1053,676,1041"><area id="area_nymphesdelapluie" alt="Nymphs of rain" title="Nymphs of rain" href="#nymphesdelapluie" shape="poly" coords="864,1264,871,1264,861,1254,868,1252,864,1240,870,1233,855,1222,855,1216,862,1203,861,1188,853,1183,862,1183,873,1177,877,1165,873,1152,861,1150,852,1153,843,1167,828,1171,823,1180,832,1162,831,1149,832,1134,841,1126,852,1123,859,1110,858,1101,850,1093,838,1098,835,1102,826,1096,813,1098,793,1104,780,1108,762,1123,744,1129,742,1141,762,1164,774,1167,783,1182,790,1201,796,1203,799,1219,810,1215,822,1216,835,1224,838,1236,841,1245,850,1249"><area id="area_morphee" alt="Morpheus" title="Morpheus" href="#morphee" shape="poly" coords="406,1249,385,1233,387,1222,405,1222,417,1198,421,1198,420,1194,438,1177,450,1174,459,1153,475,1143,484,1144,492,1137,499,1141,508,1134,516,1132,522,1132,531,1131,538,1134,547,1150,549,1161,564,1164,583,1174,597,1195,603,1198,610,1222,613,1228,618,1245,612,1261,616,1276,633,1294,637,1296,649,1308,646,1311,643,1317,631,1314,618,1306,610,1296,610,1293,586,1273,582,1251,564,1279,550,1288,552,1278,541,1266,540,1242,535,1234,519,1242,523,1257,519,1258,516,1264,522,1272,505,1273,498,1263,501,1242,507,1234,490,1242,481,1248,469,1248,451,1257,432,1257,424,1248"><area id="area_songes" alt="Dreams" title="Dreams" href="#songes" shape="poly" coords="718,1323,706,1326,697,1320,691,1311,685,1302,678,1302,679,1308,672,1315,658,1302,657,1296,651,1296,642,1299,630,1291,616,1278,610,1261,616,1243,613,1230,603,1200,583,1176,562,1162,547,1161,538,1134,529,1132,513,1132,499,1141,489,1135,483,1144,472,1144,460,1152,453,1162,433,1147,430,1155,418,1147,414,1155,403,1153,393,1153,390,1165,379,1159,367,1162,357,1162,355,1152,361,1152,355,1143,360,1134,345,1132,331,1128,321,1132,316,1137,312,1131,294,1140,274,1131,264,1137,246,1138,244,1123,253,1117,256,1120,259,1117,268,1114,267,1110,255,1108,276,1099,294,1114,301,1104,313,1098,322,1098,328,1102,339,1099,348,1093,337,1083,324,1080,331,1071,342,1063,363,1060,364,1077,373,1075,384,1071,394,1077,403,1084,397,1098,388,1108,381,1110,376,1117,367,1114,361,1116,361,1123,373,1126,381,1131,391,1129,399,1131,405,1119,414,1111,411,1098,418,1089,429,1084,426,1080,430,1077,429,1069,445,1062,460,1068,463,1086,471,1086,480,1083,493,1071,508,1080,510,1089,513,1104,511,1116,513,1132,529,1132,538,1134,549,1161,562,1162,583,1176,603,1200,613,1231,624,1233,631,1222,643,1222,652,1228,649,1240,651,1257,661,1260,679,1252,690,1255,696,1261,690,1276,697,1284,702,1294,708,1312"><area id="area_geniedeleternite" alt="Genius of Eternity" title="Genius of Eternity" href="#geniedeleternite" shape="poly" coords="483,663,499,646,508,628,502,637,516,618,522,609,528,618,529,627,544,622,550,609,549,604,538,601,543,598,538,597,541,594,550,595,559,589,559,579,553,570,543,567,532,568,528,577,528,583,522,585,517,576,513,565,510,568,507,550,522,540,529,525,529,508,525,498,513,495,504,498,496,505,489,513,484,523,484,534,487,543,492,549,496,556,507,549,505,544,514,540,520,531,525,522,525,513,523,504,514,501,505,502,499,508,495,516,490,525,492,528,492,534,496,543,505,543,507,549,496,556,496,571,499,576,493,586,487,595,481,604,472,621,474,634,478,642,478,660,0"><area id="area_saturne" alt="Saturn" title="Saturn" href="#saturne" shape="poly" coords="595,790,604,789,612,793,619,798,621,778,618,766,609,748,603,739,606,732,613,727,628,735,646,729,664,711,667,714,676,705,684,706,681,699,723,699,717,693,684,691,676,687,660,697,651,706,637,711,631,709,636,700,658,697,667,691,640,694,642,664,625,670,607,685,595,688,595,682,603,676,604,664,600,652,589,645,579,646,571,655,571,658,567,658,573,637,573,625,544,624,526,631,508,636,463,675,504,682,517,678,526,676,526,679,516,688,508,699,480,699,490,732,498,745,511,756,529,759,516,753,505,742,496,724,495,714,504,720,516,718,526,727,535,727,547,735,547,753,546,768,556,780,564,777,568,757,573,750,576,741,579,739,588,744,594,748,592,762,589,777"></map>
</figure>

<p><span style="color: #28a1c5;">6<sup style="color:#28a1c5">th</sup> Group</span>.</p>
<p>One sees <a href="#area_eole" title="Aeolus" id="eole">Aeolus</a>, God of the Winds;</p>
<p>beside him are <a href="#area_zephyretflore" title="Zephyrus and Flora" id="zephyretflore">Zephyrus and Flora</a>, accompanied by the <a href="#area_geniesdelair" title="Air Geniuses" id="geniesdelair">Air Geniuses</a>;</p>
<p>these tender deities whose sighs create the Flowers,
play with a swag formed and matched by the <a href="#area_lesamours" title="Loves" id="lesamours">Loves</a>.</p>
<p><a href="#area_rosee" title="Dew" id="rosee">Dew</a> is on the front,
she leans her Urn over the clouds
where are the <a href="#area_nymphesdelapluie" title="Nymphs of rain" id="nymphesdelapluie">Nymphs of rain</a>;</p>
<p>below <a href="#area_morphee" title="Morpheus" id="morphee">Morpheus</a> is sleeping,
<a href="#area_songes" title="Dreams" id="songes">Dreams</a>, whose flap are formed by clouds, spread poppies on him.</p>
<p>Above Aeolus, and in remoteness
we see the <a href="#area_geniedeleternite" title="Genius of Eternity" id="geniedeleternite">Genius of Eternity</a>,
holding his symbol represented by a Serpent in circle,
He shows it to <a href="#area_saturne" title="Saturn" id="saturne">Saturn</a>
and seems to insult his Scythe, which can nothing with Virtue.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-640.jpg" alt="François Lemoyne, « Iris appears on her Arc », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « Iris appears on her Arc », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" usemap="#img_hercule9" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/04.hercule_4/hercule9-1920.jpg 1920w"></picture>
  <figcaption><q cite="#iris">Iris appears on her Arc</q></figcaption>
  <map name="img_hercule9" id="img_hercule9"><area id="area_iris" alt="Iris" title="Iris" href="#iris" shape="poly" coords="541,863,532,809,517,765,502,734,480,698,468,690,451,665,423,633,393,608,390,588,385,591,376,582,387,579,381,573,379,561,384,539,405,549,420,560,432,572,441,570,451,563,457,558,463,560,469,555,466,545,466,534,475,525,484,521,492,521,499,527,502,534,498,548,505,539,511,540,517,533,510,519,504,515,478,509,489,504,498,502,511,502,523,513,537,531,537,534,528,554,529,561,523,567,538,584,550,591,555,587,570,594,576,608,577,618,571,629,559,636,550,626,540,614,528,611,529,624,537,636,547,653,549,671,556,681,559,692,568,701,564,713,576,741,591,776,598,807,603,845,607,867,586,864,565,875,553,866"><area id="area_aurore" alt="the Dawn" title="the Dawn" href="#aurore" shape="poly" coords="360,806,354,810,339,795,331,785,321,782,321,774,313,761,309,771,298,774,295,789,280,800,268,791,261,783,264,773,268,765,264,753,264,749,250,741,246,744,237,747,226,750,219,740,219,722,226,716,232,717,237,705,244,701,253,689,258,675,258,662,267,656,271,656,268,650,270,641,277,633,285,635,283,629,286,624,294,621,300,633,289,636,297,644,294,657,291,659,301,665,309,671,319,671,327,681,330,687,349,696,360,704,363,720,370,726,381,734,376,746,375,756,376,770,369,783,354,785,354,795"><area id="area_etoiles" alt="several personified Stars" title="several personified Stars" href="#etoiles" shape="poly" coords="352,650,348,651,345,639,334,636,331,645,336,651,340,653,333,662,339,675,334,689,343,693,352,698,366,708,364,720,375,725,381,735,379,744,375,749,376,761,375,771,370,779,376,779,387,785,390,791,397,786,403,791,417,789,426,786,435,789,441,798,453,795,457,785,468,785,475,788,487,789,493,779,493,768,495,759,493,747,489,737,493,732,496,722,489,708,478,702,472,710,468,719,468,731,459,734,462,728,460,719,454,713,456,707,453,698,442,702,442,710,439,719,427,714,423,704,408,696,400,692,408,692,417,692,409,680,397,672,388,677,382,669,375,671,369,674,363,671,363,659,358,653"></map>
</figure>

<p><span style="color: #28a1c5;">7<sup style="color:#28a1c5">th</sup> Group</span>.</p>
<p>Going straight towards the Angle, <a href="#area_iris" title="Iris" id="iris">Iris</a> appears on her Arc,
she throws a look on the heavenly Feast;</p>
<p>under the Rainbow appears <a href="#area_aurore" title="the Dawn" id="aurore">the Dawn</a> with <a href="#area_etoiles" title="several personified Stars" id="etoiles">several personified Stars</a>.</p>

<!-- Page 5 -->


<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-640.jpg" alt="François Lemoyne, « The Muses would undertake to execute the Concert ordered by Apollo », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « The Muses would undertake to execute the Concert ordered by Apollo », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" usemap="#img_hercule10" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule10-1920.jpg 1920w"></picture>
  <figcaption>The Muses <q cite="#lesmuses">would undertake to execute the Concert ordered by Apollo</q></figcaption>
  <map name="img_hercule10" id="img_hercule10"><area id="area_plusieursgenies" alt="several Geniuses" title="several Geniuses" href="#plusieursgenies" shape="poly" coords="123,330,126,322,132,315,126,307,126,304,133,313,136,306,141,315,138,334,141,337,153,333,154,316,159,316,163,315,165,306,172,313,181,312,184,298,178,297,177,292,178,289,180,295,187,294,186,282,207,277,207,294,205,303,208,309,216,307,217,313,222,318,232,319,238,328,246,325,250,315,256,325,265,345,273,342,270,331,273,334,280,328,273,319,267,319,271,310,265,303,267,300,273,304,276,294,273,289,270,288,271,279,262,271,253,280,250,264,240,262,240,268,231,267,223,267,228,264,226,253,214,262,211,261,213,252,211,243,196,246,193,258,199,270,207,276,186,282,175,282,165,285,162,291,159,286,160,280,159,271,150,276,144,286,144,297,154,297,144,295,138,279,129,279,127,268,123,265,126,252,127,238,133,237,127,235,120,256,115,259,117,255,114,249,103,250,100,264,91,267,90,277,100,285,100,297,102,306,109,312,114,325"><area id="area_apollon" alt="Apollo" title="Apollo" href="#apollon" shape="poly" coords="301,439,310,448,334,444,345,454,355,454,363,460,381,474,387,493,390,505,414,517,411,526,417,537,444,543,433,529,427,511,432,501,438,483,433,463,454,447,448,439,438,444,426,453,421,438,417,427,417,415,426,417,436,415,447,406,450,396,442,384,429,378,406,393,409,388,403,378,391,364,369,360,364,354,357,342,364,336,352,310,352,328,342,327,345,343,343,349,327,337,316,351,321,361,307,367,312,381,327,382,334,393,345,399,360,403,355,417,342,421,334,430,325,433,321,427,309,430"><area id="area_geniedesbeauxarts" alt="the Genius of Fine arts" title="the Genius of Fine arts" href="#geniedesbeauxarts" shape="poly" coords="433,499,439,507,451,501,451,492,448,492,457,490,466,499,465,508,454,508,459,514,475,516,483,520,484,534,484,544,496,553,498,564,502,565,510,577,513,561,501,547,496,532,492,516,486,513,484,504,499,510,510,520,526,523,526,513,520,511,501,496,504,492,513,495,540,487,538,478,510,472,492,474,481,481,481,484,474,483,480,469,469,453,453,456,454,469,448,478"><area id="area_lesmuses" alt="The Muses" title="The Muses" href="#lesmuses" shape="poly" coords="16,631,84,633,69,643,112,648,112,630,162,634,162,648,222,652,189,684,199,690,234,676,265,684,267,696,237,738,306,730,343,768,397,807,427,804,415,789,424,768,426,712,462,699,493,708,498,726,522,739,538,715,546,697,526,661,514,657,516,643,529,645,559,630,571,615,618,631,628,643,643,648,664,649,685,657,688,666,693,684,697,693,717,676,717,654,727,651,732,622,723,604,739,583,769,589,786,574,796,592,796,618,804,619,811,586,823,567,819,555,829,535,840,535,832,514,832,481,843,496,850,490,856,486,859,454,853,439,850,420,855,402,838,394,838,375,846,369,855,367,867,372,868,360,856,358,846,358,835,361,834,343,819,343,798,346,784,358,778,370,772,369,759,376,757,358,742,349,723,348,705,361,699,384,684,385,660,388,657,400,663,409,675,414,682,426,685,441,682,453,666,453,646,448,636,465,633,484,633,501,619,496,607,507,603,492,589,484,574,484,564,498,562,514,570,523,591,531,597,544,600,558,595,567,574,555,564,562,547,561,568,577,579,574,604,591,607,603,619,609,618,631,571,615,574,601,526,604,502,598,502,582,505,567,489,558,474,564,463,576,472,586,448,592,439,586,447,579,447,565,432,558,414,562,406,577,400,586,385,585,381,565,391,553,396,543,394,529,382,525,372,526,373,522,385,514,379,502,364,495,346,492,333,502,319,498,307,498,304,508,310,525,285,532,295,526,295,513,291,496,277,490,249,493,247,511,249,523,244,531,238,529,223,537,210,541,201,534,178,537,169,543,160,531,151,540,150,549,142,547,141,556,100,589,70,603,67,597,43,603,30,603"><area id="area_lhistoire" alt="History" title="History" href="#lhistoire" shape="poly" coords="469,819,490,817,501,811,514,820,499,835,505,850,526,853,550,868,562,880,580,880,591,874,594,865,610,859,622,843,634,849,636,864,648,868,660,873,672,874,676,861,687,862,691,873,705,870,726,873,735,864,714,858,700,847,709,829,702,805,690,786,682,777,664,780,649,772,630,780,624,772,627,769,612,745,603,741,597,753,589,721,600,711,597,702,592,705,589,690,580,718,577,745,562,777,559,763,553,750,541,745,526,757,526,774,529,786,534,793,520,796,505,795,486,801"><area id="area_lapeinture" alt="Painting" title="Painting" href="#lapeinture" shape="poly" coords="663,780,684,777,693,789,708,831,699,846,712,858,723,858,732,852,744,852,756,846,772,855,804,846,813,850,823,844,817,832,819,819,807,811,816,801,808,793,807,780,805,763,816,747,813,730,804,717,792,711,793,697,747,631,742,634,736,657,721,673,703,693,682,694,672,703,667,702,663,690,651,678,636,669,621,676,616,696,619,712,633,717,631,727,639,757"></map>
</figure>

<p><span style="color: #28a1c5;">On the top of the 8<sup style="color:#28a1c5">th</sup> group</span>,</p>
<p>one can see the Temple of Memory opened;</p>
<p><a href="#area_plusieursgenies" title="several Geniuses" id="plusieursgenies">several Geniuses</a> are quick to attach Medallions to the memory of Great Men;</p>
<p>Next, <a href="#area_apollon" title="Apollo" id="apollon">Apollo</a> rises on a Cloud with <a href="#area_geniedesbeauxarts" title="the Genius of Fine arts" id="geniedesbeauxarts">the Genius of Fine arts</a>.</p>
<p><a href="#area_lesmuses" title="The Muses" id="lesmuses">The Muses</a> are below,
they would undertake to execute the Concert ordered by Apollo;</p>
<p>in the angle close to the Muses,
<a href="#area_lhistoire" title="History" id="lhistoire">History</a> exhorts <a href="#area_lapeinture" title="Painting" id="lapeinture">Painting</a> to immortalize like she does, the Heroes and their great Actions.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-640.jpg" alt="François Lemoyne, « Silenus with a troupe of Fauns and Infants, form a Bacchic Feast », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « Silenus with a troupe of Fauns and Infants, form a Bacchic Feast », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" usemap="#img_hercule11" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule11-1920.jpg 1920w"></picture>
  <figcaption><q cite="#silene">Silenus with a troupe of Fauns and Infants, form a Bacchic Feast</q></figcaption>
  <map name="img_hercule11" id="img_hercule11"><area id="area_castoretpollux" alt="Constellation de Castor and Pollux" title="Constellation de Castor and Pollux" href="#castoretpollux" shape="poly" coords="522,423,532,425,543,411,553,404,576,399,591,396,595,398,604,395,615,399,618,413,621,416,636,411,643,417,654,425,667,425,675,413,685,422,700,432,675,452,678,459,753,405,745,399,711,422,696,411,691,402,691,384,687,383,693,372,691,358,684,346,672,346,669,355,657,346,651,337,643,350,627,335,609,337,609,353,612,362,612,372,607,359,601,358,592,368,583,343,589,343,597,349,607,341,586,316,556,323,546,314,529,322,525,329,520,328,511,335,501,331,480,350,480,356,466,361,490,372,499,367,499,386,513,386,514,389,499,404,498,413,508,417"><area id="area_silene" alt="Silenus" title="Silenus" href="#silene" shape="poly" coords="672,611,682,606,669,590,663,573,675,588,682,603,693,612,709,611,699,600,688,581,675,572,688,572,690,567,670,564,664,551,669,542,673,543,673,534,678,524,660,524,657,531,661,537,658,546,652,546,645,536,637,537,646,525,645,515,633,509,622,516,622,527,616,533,625,540,639,546,636,551,613,546,613,560,621,569,634,576,634,587,646,597,645,609,657,618"><area id="area_faunesetenfans" alt="a troupe of Fauns and Infants" title="a troupe of Fauns and Infants" href="#faunesetenfans" shape="poly" coords="661,513,667,522,678,525,693,539,703,545,694,558,676,563,684,555,682,545,670,545,664,552,675,564,691,569,706,581,703,569,717,572,723,584,733,585,742,573,736,548,724,540,732,536,732,524,721,513,711,522,708,531,697,524,687,512,673,495,661,513,634,503,621,519,618,530,619,534,639,545,637,549,615,546,613,560,619,567,634,576,627,587,618,593,612,606,597,611,579,600,556,599,547,615,546,629,531,633,531,651,520,660,505,662,492,654,480,645,471,657,462,648,465,630,472,618,478,611,480,597,493,596,499,603,511,603,511,594,526,600,531,614,534,621,547,614,556,599,552,585,556,570,549,563,552,548,564,552,570,545,585,549,582,536,586,518,598,503,604,507,604,495,618,489,630,494,634,503"></map>
</figure>

<p><span style="color: #28a1c5;">9<sup style="color:#28a1c5">th</sup> Group</span>.</p>
<p>On the left and above the Muses,
appears the <a href="#area_castoretpollux" title="Constellation de Castor and Pollux" id="castoretpollux">Constellation de Castor and Pollux</a>.</p>
<p>In the half tint,
<a href="#area_silene" title="Silenus" id="silene">Silenus</a> with <a href="#area_faunesetenfans" title="a troupe of Fauns and Infants" id="faunesetenfans">a troupe of Fauns and Infants</a>, form a Bacchic Feast.</p>
<p><span style="color: #28a1c5;">The Cartels, whose the middles of the corniche are displayed with, represent the work of <mark>Hercules</mark>;</span></p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-640.jpg" alt="François Lemoyne, « Cartel of Cerberus and of Lion of Nemea », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « Cartel of Cerberus and of Lion of Nemea », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" usemap="#img_hercule12" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-1920.jpg 1920w"></picture>
  <figcaption>Cartel of <q cite="#cerbere" style="quotes:'' ''">Cerberus</q> and of the Lion of Nemea</figcaption>
  <map name="img_hercule12" id="img_hercule12"><area id="area_cerbere" alt="Cerberus" title="Cerberus" href="#cerbere" shape="poly" coords="322,339,334,318,343,319,358,315,364,291,361,277,357,279,355,291,345,276,330,273,327,264,334,256,345,256,333,250,339,244,331,235,313,238,298,250,297,259,267,256,250,271,246,292,255,298,259,303,273,300,283,297,292,304,291,313,303,322,309,327,313,330,315,334"><area id="area_lyondenemee" alt="Lion of the Nemea Forest" title="Lion of the Nemea Forest" href="#lyondenemee" shape="poly" coords="495,199,489,220,492,229,496,232,502,237,502,252,507,255,511,253,511,264,519,268,531,255,526,270,535,265,526,279,534,286,537,298,529,312,526,324,537,324,543,318,543,304,549,288,549,277,556,270,568,288,558,301,559,309,553,321,556,325,562,316,570,313,580,316,577,304,571,297,568,288,556,270,558,259,564,246,561,241,550,226,546,229,540,220,537,222,534,214,522,213,516,211,502,211,489,219,493,199,471,192,459,183,457,187,435,180,421,184,417,195,418,202,441,204,459,208,469,207,475,208"></map>
</figure>

<p><span style="color: #28a1c5;">In the first</span>, above the Chimney, one sees on one side <a href="#area_cerbere" title="Cerberus" id="cerbere">Cerberus</a> with his three heads,
and on the other the skin of <a href="#area_lyondenemee" title="Lion of the Nemea Forest" id="lyondenemee">Lion of the Nemea Forest</a>, with the mace, etc.</p>

<!-- Page 6 -->
  
<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/01.palais/01.hercule/05.hercule_5/hercule12-640.jpg" alt="François Lemoyne, « Cartel of the Apples of the Hesperides and of the Centaur Nessus », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « Cartel of the Apples of the Hesperides and of the Centaur Nessus », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" usemap="#img_hercule13" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule13-1920.jpg 1920w"></picture>
  <figcaption>Cartel of the Golden Apples of the Hesperides and of <q cite="#nessus" style="quotes:'' ''">the Centaur Nessus</q></figcaption>
  <map name="img_hercule13" id="img_hercule13"><area id="area_sanglier" alt="the Boar" title="the Boar" href="#sanglier" shape="poly" coords="163,203,175,205,204,206,207,196,222,196,225,182,235,182,235,192,232,197,246,197,256,181,270,185,268,190,279,197,288,200,294,203,306,205,315,202,330,206,328,197,322,187,322,182,315,180,316,176,322,170,318,165,303,168,295,171,295,182,283,189,271,185,258,181,252,175,244,176,235,182,225,182,220,186,207,185,204,189,196,182,186,185,177,191,168,196"><area id="area_nessus" alt="the Centaur Nessus" title="the Centaur Nessus" href="#nessus" shape="poly" coords="510,194,510,201,519,203,529,190,540,191,546,200,561,200,576,169,586,165,585,153,588,147,603,148,607,154,616,158,624,158,634,151,628,130,622,120,612,106,616,108,618,97,622,90,618,78,607,73,592,74,585,83,583,85,574,78,565,79,543,94,531,109,531,120,502,130,514,137,508,147,513,151,508,159,516,162,513,168,516,176,519,181,522,189"></map>
</figure>

<p><span style="color: #28a1c5;">In the Second Cartel</span>, apart from <a href="#area_sanglier" title="The Boar" id="sanglier">the Boar</a> that Hercules brought alive to Euristheus,</p>
<p>One sees the Harpies and the Golden Apples of the Hesperides,
on the other side is <a href="#area_nessus" title="the Centaur Nessus" id="nessus">the Centaur Nessus</a>, etc.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-640.jpg" alt="François Lemoyne, « Cartel of Diomedes », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « Cartel of Diomedes », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" usemap="#img_hercule14" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule14-1920.jpg 1920w"></picture>
  <figcaption>Cartel of Diomedes, <q cite="#diomede">eaten by his own Horses</q></figcaption>
  <map name="img_hercule14" id="img_hercule14"><area id="area_diomede" alt="Diomedes eaten by his own Horses" title="Diomedes eaten by his own Horses" href="#diomede" shape="poly" coords="255,425,277,427,285,419,285,407,375,410,381,416,396,418,396,412,418,412,421,425,432,431,457,421,463,412,543,413,550,428,601,428,598,410,615,406,613,403,624,353,618,364,613,362,610,350,615,335,625,331,634,335,636,329,631,317,636,307,640,308,649,302,663,305,666,319,667,332,684,349,685,383,679,389,661,379,673,409,681,422,660,424,646,398,640,398,645,409,640,424,660,424,682,422,690,400,685,383,684,350,694,346,708,335,715,311,708,292,697,281,682,284,673,292,681,304,682,323,691,314,691,304,681,304,673,290,666,283,654,275,639,275,634,275,621,262,603,251,603,241,585,223,568,223,570,218,550,218,540,221,541,217,529,220,519,227,508,233,504,241,499,242,493,253,484,268,483,257,484,248,475,238,469,218,474,217,454,203,444,203,432,217,429,230,420,236,420,245,426,256,421,262,405,260,391,262,388,265,372,259,352,257,340,263,330,274,324,283,321,275,324,269,340,263,330,256,321,251,309,259,303,278,304,295,313,311,312,317,313,328,321,338,306,367,295,370,276,391,270,410"></map>
</figure>

<p><span style="color: #28a1c5;">On the opposite side of the first Cartel</span>,
<a href="#area_diomede" title="Diomedes eaten by his own Horses" id="diomede">Diomedes eaten by his own Horses</a>, which he fed with human flesh.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-640.jpg" alt="François Lemoyne, « Cartel of Mascot to the Golden Horns and Cacus », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" title="François Lemoyne, « Cartel of Mascot to the Golden Horns and Cacus », detail of The Apotheosis of Hercules, Salon d'Hercule (Hercules Room) of the Palace of Versailles" usemap="#img_hercule15" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/01.palais/01.hercule/06.hercule_6/hercule15-1920.jpg 1920w"></picture>
  <figcaption>Cartel of <q cite="#labiche" style="quotes:'' ''">Mascot to the Golden Horns style="quotes:'' ''" and Cacus</figcaption>
  <map name="img_hercule15" id="img_hercule15"><area id="area_labiche" alt="the Mascot to the Golden Horns" title="the Mascot to the Golden Horns" href="#labiche" shape="poly" coords="284,199,287,211,290,219,283,237,340,241,347,238,353,238,358,241,370,243,373,235,380,229,382,219,389,217,407,220,416,216,427,192,418,195,421,190,415,178,407,183,404,192,406,201,398,208,380,211,386,192,382,178,380,174,391,163,382,154,373,159,364,177,365,187,365,195,361,198,347,189,349,199,338,201,325,213,323,217,311,217,331,190,328,186,325,187,314,180,304,181,298,192,293,199"><area id="area_cacus" alt="Cacus suffocated by Alcide" title="Cacus suffocated by Alcide" href="#cacus" shape="poly" coords="612,237,612,232,602,231,597,228,596,222,612,204,624,181,620,169,609,166,590,174,597,160,599,148,593,138,599,138,602,123,591,112,579,111,576,120,572,121,561,115,551,118,549,123,539,124,534,132,519,145,519,171,542,169,528,181,533,184,528,189,536,189,525,198,533,199,528,208,530,225,518,228,515,241,540,249,558,249,573,238"></map>
</figure>

<p><span style="color: #28a1c5;">The third Cartel</span> represents on one side <a href="#area_labiche" title="the Mascot to the Golden Horns" id="labiche">the Mascot to the Golden Horns</a>, with the Horn of Abundance, and the other <a href="#area_cacus" title="Cacus suffocated by Alcide" id="cacus">Cacus suffocated by Alcide</a>.</p>
<p>All these Cartels are crowned by <span style="color: #28a1c5;">a big swap of oak leaves, supported by the Geniuses of Virtue</span>.</p>
<p>This Swap, feigned of stucco, also-although the figures that surround the Cartels and Virtues, which characterize the actions of <mark>Hercules</mark>,
reigns all along the perimeter of Attica,
which is feigned of white marble, veined with purple brèche panels; (geology term. Black marble, mixed with white and yellow spots, derived from the Pyrenees and other places)</p>
<p>the coronation of hte attica is enhanced by gold,
<span style="color: #28a1c5;">all being hold by the Corniche of the Salon</span>.</p>
<p><span style="color: #28a1c5;">This corniche is laying on twenty pilasters pairs of the most beautiful marbles</span>,
of the four most famous quarries of the Kingdom, with an exquisite choice;</p>
<p>namely, some marble called Dantin, some Vercampan, some Rancé and some white veined,
whose bases and capitals are gilded, as well as the corniche and Door Jambs, etc.</p>
<p>The brilliance of this guilding and of that marble, which combines itself and
gives to itself, so to speak, a mutual help, makes an so amazing than wonderful effect,
and appear to be a trophy to painting, to which they serve as a ornement.</p>


<!-- Page 7 -->


<p><span style="color: #28a1c5;">Two famous paintings by PAOLO VERONESE</span> occupy the two main places of this exhibition;</p>
<p>François Le Moyne, could not have a more worthy and more famous competitor.</p>
<p>The first of these Paintings, 52 feet wide, per 15 high, represents <span style="color: #28a1c5;">the Feast at the Pharisian's home</span>.</p>
<p>It is placed on the chimney, and the other of 11 feet high, 8 feet wide, occupies the top of the chimney.</p>
<p>It represents <span style="color: #28a1c5;">Eliezer who asks Rebecca in marriage</span>, etc.
The edge of this Painting inlaid in marble is supported by two consoles,
all being guilded of melted gold, as well as all the other Ornements of the Chimney,
whose middle is marked by a head of <mark>Hercules</mark>, headed by a muzzle of Lion,
accompanied by two large sheets of ornements;</p>
<p>with two horns of abundance completed at the bottom of the Doorframe by two heads or remains of Lion.</p>
<p><span style="color: #28a1c5;">This Work is the late Antoine Vassé, a gifted sculptor from Toulon.</span></p>
<p>The border, of the big painting of Paolo Veronese, inlaid into marble and hold by four consoles, as guilded as melted gold, is from the same sculptor.</p>
<p><span style="color: #28a1c5;">The border of the Painting of the Chimney, the andirons, etc. are A.I. Verbrec, Academy Sculptor.</span></p>
<p>This is the most accurate and methodical detail we can make, to give an idea of the whole Work to those who are not in a position to see it.</p>
<p>About the relation between the parties to the whole all together, we cannot supplement it through narration, no more than what respect to intelligence, finesse and the sublime of Art, etc,</p>
<p>so far we can ensure that everything has been contribute unanimously to the glory of the Work and the Author,
but it is to the fair and enlightened public to judge the sovereign success in general and in the parties where there could still be something to be desired.</p>
<p>We cannot, however, refuse, emboldened and guided by the sight and the memory of this tedious and laborious work, to praise, with the entire public, the beautiful forms, the brilliant and the tender of the colours, the regularity of the well-fetched subjects, the fine characters, the exact observation of the Costume and conventions,
because nothing is neglected, and
everything is finished as in a easel painting,
not to mention so many sharp and real things that strike and surprise the Viewer;</p>
<p>such as some of the cloud groups
which crosses the figures and make the effect of accidents of unexpected cases,
that characterizes the imitation and makes it admired by Scholars and ignorants.</p>
<p>An observation that many people have made and by which we end this Article,
It's that by standing on the side of the Salon, on the side of the Chapel,
where one sees the two Ceilings, knowing, that the one of the Living room, which serves as Vestibule to the Chapel, which is not painted,
and the one where we represented <cite>the Apotheosis of Hercules</cite>, whose Description has just been read,
and which are at the same height, one sees at a glance, against common opinion,
that the one which is painted, seems much higher than the one that is not, and where one only sees white.</p>
<p>We believe that this oposition and contrast that one can observe here very conveniently in two adjoining salons and high to an equal height deserves special attention from the Connoisseurs.</p>

<footer>
  <p><cite>Le Mercure de France</cite></p>
  <p>Original translation from french. Reproduction possible with quotation.</p>
</footer>
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