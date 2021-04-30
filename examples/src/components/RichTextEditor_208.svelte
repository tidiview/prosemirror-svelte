<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 1 -->

<article>

<hgroup>
<h1 class="green"><ruby style="color:#555;" lang="en"><abbr title="Saint">St.</abbr> Ursula Shrine<rt style="color:#999;" lang="nl">Het Ursulaschrijn</rt></ruby></h1>
<h2 class="green"><abbr title="Saint">St.</abbr> John's Hospital Memling Museum of Bruges</h2>
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
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1920.webp 1920w" type="image/webp"><img src="/https://francois-vidit.comuser/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1_700x1037.jpg" title="Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1_700x1037.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1920.jpg 1920w"></picture><figcaption><abbr title="Saint">St.</abbr> Ursula Shrine, overview</figcaption>
</figure>

<div class="notices green">
  <p>The <cite>Saint Ursula's Shrine</cite> is a <a href="https://en.wikipedia.org/wiki/Chasse_(casket) title="Chasse_(casket)">shrine</a> intended to preserve the relics of the Eleven Thousand Virgins and a number of saints, as well as some memorabilia brought back from the Holy Land, of which the painter <a href="https://en.wikipedia.org/wiki/Hans_Memling" title="Hans Memling">Hans Memling</a> decorated the four sides with a set of paintings, and six medallions on the roof.</p>
  <p>The paintings tell the story of <a href="https://en.wikipedia.org/wiki/Saint_Ursula" title="Saint Ursula"><abbr title="Saint">St.</abbr> Ursula</a>. It is one of the great compositions of the painter miniaturist. The work dates from <time datetime="1489">1489</time>. The shrine was designed and was preserved for <a href="https://en.wikipedia.org/wiki/Old_St._John's_Hospital" title="Old_St._John's_Hospital"><abbr title="Saint">St.</abbr> John's Hospital Memling Museum</a>, of <a href="https://en.wikipedia.org/wiki/Bruges" title="Bruges">Bruges</a>.</p>
  <p>Memling follows step by step the narrative <a href="https://en.wikipedia.org/wiki/Golden_Legend" title="Golden Legend"><cite>Legenda Aurea</cite></a> by <a href="https://en.wikipedia.org/wiki/Jacobus_de_Varagine" title="Jacobus de Varagine">Jacobus de Varagine</a>, a translation of which appeared in <time datetime="1478">1478</time></sup>.</p>
  <p>In the following article, we directly contrast the text of <cite>Legenda Aurea</cite> with representations by Hans Memling. We believe that in this way their quality will only become more striking.</p> <p>The following article is a direct comparison of the text of <cite>Legenda Aurea</cite> and Hans Memling's representations.</p>
</div>

<h2 id="the-eleven-thousand-virgins" class="green">the Eleven Thousand Virgins</h2>

<p>The passion of eleven thousand virgins was hallowed in this manner.<br>
In Britain was a christian king named Notus or Maurus, which engendered a daughter named Ursula.
This daughter shone full of marvellous honesty, wisdom, and beauty, and her fame and renomee was borne all about.
And the king of England which then was right mighty, and subdued many nations to his empire, heard the renomee of her, and said that he would be well happy if this virgin might be coupled to his son by marriage.
And the young man had great desire and will to have her.
And there was a solemn embassy to the father of Ursula, and promised great promises, and said many fair words for to have her; and also made many menaces if they returned vainly to their lord.
And then the king of Britain began to be much anxious, because that she that was ennobled in the faith of Jesu Christ should be wedded to him that adored idols, because that he wist well she would not consent in no manner, and also because he doubted much the cruelty of the king.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule_700x395.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-1280.webp 1280w" type="image/webp"><img src="/https://francois-vidit.comuser/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule_700x395.jpg" title="“Arrival at Koln”, “Arrival at Basel”, “Arrival at Rome”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" alt="“Arrival at Koln”, “Arrival at Basel”, “Arrival at Rome”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule_700x395.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-1280.jpg 1280w"></picture><figcaption>“Arrival at Koln”, “Arrival at Basel”, “Arrival at Rome”</figcaption>
</figure>

<p>And she, that was divinely inspired, did so much to her father that she consented to the marriage by such a condition, that for to solace her he should send to her father ten virgins, and to herself, and to those ten other virgins, he should send to each a thousand virgins, and should give to her space of three years for to dedicate her virginity, and the young man should be baptized, and in these three years he should be informed in the faith sufficiently, so that by wise counsel, and by virtue of the condition made, he should withdraw from her his courage.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2_700x1071.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1920.webp 1920w" type="image/webp"><img src="/https://francois-vidit.comuser/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2_700x1071.jpg" title="“St. Ursula, protectress”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" alt="“St. Ursula, protectress”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2_700x1071.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1920.jpg 1920w"></picture><figcaption>“<abbr title="Saint">St.</abbr> Ursula, protectress”</figcaption>
</figure>

<p>But this youngling received this condition gladly, and hasted his father and was baptized and commanded all that Ursula had required should be done.
And the father of the virgin ordained that his daughter, whom he most loved, and the others that had need of the comfort of men and service, ordained in their company good men for to serve them.</p>
<p>Then virgins came from all parts, and men came for to see this great company, and many bishops came for to go with them in their pilgrimage, among whom was Pantulus, bishop of Basle, which went with them to Rome, and returned from thence with them and received martyrdom.
S. Gerasine, queen of Sicily, which had made of her husband that was a cruel tyrant a meek lamb, and was sister of Maurice the bishop, and of Daria, mother of S. Ursula, to whom the father of S. Ursula had signified by secret letters.
She, by the inspiration of God, put herself in the way with her four daughters, Babilla, Juliana, Victoria and Aurea, and her little son Adrian, which, for love of his sisters, went in the same pilgrimage, and left all in the hands of his own son, and came into Britain, and sailed over sea into England.</p>

<!-- Page 2 -->

<p>And by the counsel of this queen the virgins were gathered together from divers realms, and she was leader of them, and at the last she suffered martyrdom with them.
And then, the condition made, all things were made ready.
Then the queen showed her counsel to the knights of her company, and made them all to swear this new chivalry; and then began they to make divers plays and games of battle, as to run here and there, and feigned many manner of plays.
And for all that they left not their purpose, and sometimes they returned from this play at midday and sometimes unnethe at evensong time.
And the barons and great lords assembled them to see the fair games and disports, and all had joy and pleasure in beholding them, and also marvel.</p>
<p>And at the last, when Ursula had converted all these virgins unto the faith of Christ, they went all to the sea, and in the space of a day, they sailed over the sea, having so good wind that they arrived at a port of Gaul, named Tielle, and from thence came to Cologne, where an angel of our Lord appeared to Ursula, and told her that they should return again, the whole number to that place, and there receive the crown of martyrdom.</p>

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
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1920.webp 1920w" type="image/webp"><img src="/https://francois-vidit.comuser/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3_700x1047.jpg" title="“Arrival at Koln”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" alt="“Arrival at Koln”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3_700x1047.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1920.jpg 1920w"></picture><figcaption>“Arrival at Koln”</figcaption>
</figure>

<p>And from thence, by the monition of the angel, they went towards Rome.
And when they came to Basle they left there their ships and went to Rome afoot.</p>

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
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1920.webp 1920w" type="image/webp"><img src="/https://francois-vidit.comuser/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4_700x1063.jpg" title="“Arrival at Basel”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" alt="“Arrival at Basel”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4_700x1063.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1920.jpg 1920w"></picture><figcaption>“Arrival at Basel”<br><q cite="#les-onze-milles-vierges">they left there their ships and went to Rome afoot.</q></figcaption>
</figure>

<p>At the coming of whom the pope Ciriacus was much glad, because he was born in Britain and had many cousins among them, and he with his clerks received them with all honour.</p>

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
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1920.webp 1920w" type="image/webp"><img src="/https://francois-vidit.comuser/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5_700x1056.jpg" title="“Arrival at Rome”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" alt="“Arrival at Rome”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5_700x1056.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1920.jpg 1920w"></picture><figcaption>“Arrival at Rome”<br><q cite="#les-onze-milles-vierges">At the coming of whom the pope Ciriacus was much glad, because he was born in Britain and had many cousins among them, and he with his clerks received them with all honour.</q></figcaption>
</figure>

<p>And that same night it was showed to the pope that he should receive with them the crown of martyrdom, which thing he hid in himself, and baptized many of them that were not then baptized.
And when he saw time convenable, when he had governed the church one year and eleven weeks, and was the nineteenth pope after Peter, he purposed tofore all the people, and showed to them his purpose, and resigned his office and his dignity.</p>


<!-- Page 3 -->


<p>But all men gainsaid it, and especially the cardinals, which supposed that he trespassed, leaving the glory of the papacy and would go after these foolish virgins, but he would not agree to abide, but ordained an holy man to occupy in his place, which was named Ametus.
And because he left the see apostolic against the will of the clergy, the clerks put out his name of the catalogue of popes.
And all the grace that he had gotten in his time, this holy company of women made him for to leave it.</p>

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
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1920.webp 1920w" type="image/webp"><img src="/https://francois-vidit.comuser/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6_700x379.jpg" title="“Return from Basel”, “Martyr of the Eleven Thousand Virgins”, “Martyr of St. Ursula”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" alt="“Return from Basel”, “Martyr of the Eleven Thousand Virgins”, “Martyr of St. Ursula”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6_700x379.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1920.jpg 1920w"></picture><figcaption>“Return from Basel”, “Martyr of the Eleven Thousand Virgins”, “Martyr of <abbr title="Saint">St.</abbr> Ursula”</figcaption>
</figure>

<p>And then two felon princes of the chivalry of Rome, Maximus and Africanus, saw this great company of virgins, and that many men and women assembled to them, doubted that christian religion should much be increased by them, wherefore they required diligently of their voyage.
And then sent they messengers to Julian, their cousin, prince of the lineage of the Huns, that he should bring his host against them, and should assemble at Cologne, and there behead them because they were christian.
And the blessed Ciriacus issued out of the city of Rome with this blessed company of virgins, and Vincent, priest cardinal, and Jacobus that was come from Britain into Antioch, and had held there seven years the dignity of the bishop, which then had visited the pope, and was gone out of his city and held company with these virgins, when he heard of their coming, and suffered martyrdom with them.
And Maurice, bishop of Levicana, the city, uncle of Babilla and Juliana, and Follarius, bishop of Lucca, with Sulpitius, bishop of Ravenna, which then were come to Rome, put them in the company of these virgins.</p>

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
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1920.webp 1920w" type="image/webp"><img src="/https://francois-vidit.comuser/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7_700x1016.jpg" title="“Return from Basel”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" alt="“Return from Basel”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7_700x1016.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1920.jpg 1920w"></picture><figcaption>“Return from Basel”</figcaption>
</figure>

<p>Ethereus, the husband of Ursula, abiding in Britain, was warned of our Lord by a vision of an angel that he should exhort his mother to be christian.
For his father died the first year that he was christened, and Ethereus, his son, succeeded after him in his reign. And then when these holy virgins returned from Rome with the bishops, Ethereus was warned of our Lord that he should anon arise and go to meet his wife at Cologne, and there receive with her the crown of martyrdom, the which anon obeyed to admonishments divine, and did do baptize his mother and came with her and his little sister Florence, then also baptized, and with the bishop Clement, meeting the holy virgins, and accompanied them unto martyrdom.
And Marculus, bishop of Greece, and his niece Constance, daughter of Dorotheus, king of Constantinople, which was married to the son of a king, but he died tofore the wedding, and she avowed to our Lord her virginity; they were also warned by a vision, and came to Rome and joined them to these virgins unto the martyrdom.</p>
<p>And then all these virgins came with the bishops to Cologne, and found that it was besieged with the Huns. And when the Huns saw them they began to run upon them with a great cry, and araged like wolves on sheep, and slew all this great multitude.
And when they were all beheaded, they came to the blessed Ursula.</p>

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
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1920.webp 1920w" type="image/webp"><img src="/https://francois-vidit.comuser/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8_700x540.jpg" title="“Martyr of the Eleven Thousand Virgins”, “Martyr of St. Ursula”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" alt="“Martyr of the Eleven Thousand Virgins”, “Martyr of St. Ursula”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" class="class-75-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8_700x540.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1920.jpg 1920w"></picture><figcaption>“Martyr of the Eleven Thousand Virgins”, “Martyr of <abbr title="Saint">St.</abbr> Ursula”</figcaption>
</figure>

<p>The prince of them, seeing her beauty so marvellous, was abashed, and began to comfort her upon the death of the virgins, and promised to her to take her to his wife.
And when she had refused him and despised him at all, he shot at her an arrow, and pierced her through the body, and so accomplished her martyrdom.
And one of the virgins, which was named Cordula, was sore afeared, and hid herself all that night in a ship, but on the morn she suffered death by her free will, and took the crown of martyrdom.
And because her feast was not held with the other virgins, she appeared long after to a recluse, and commanded him that the next day following the feast of the virgins, her feast should be remembered.
They suffered death the year of our Lord two hundred and thirty-eight.
But some hold opinion that the reason of the time showeth that they suffered not death in that time, for Sicily ne Constantinople were then no realms, but it is supposed that they suffered death long time after, when Constans was emperor, and that the Huns and Goths enforced them against christian men in the time of the emperor Marcian, that reigned in the year of our Lord four hundred and fifty-two.</p>

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
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1920.webp 1920w" type="image/webp"><img src="/https://francois-vidit.comuser/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9_700x1050.jpg" title="“Virgin and child and donatresses”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" alt="“Virgin and child and donatresses”, Shrine de St. Ursula, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9_700x1050.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1920.jpg 1920w"></picture><figcaption>“Virgin and child and donatresses”</figcaption>
</figure>

<p>There was an abbot that impetred of the abbess of the place where these holy virgins rest in Cologne, a body of one of these virgins, and promised that he would set it in his church in a fair shrine of silver, but when he had it, he kept it a year upon the altar in a chest of tree.
And in a night as the abbot sang matins, the said virgin descended from the altar bodily, and inclined honourably tofore the altar, and went through the choir, seeing all the monks which, were thereof sore abashed, and then the abbot ran and found it all void and nothing therein.
Then the abbot went to Cologne and told to the abbess all the thing by order.
Then went they to the place where they had taken the body, and found the same there again.
And then the abbot required pardon, and prayed the abbess that he might have again the same body or another, promising right certainly to make hastily a precious shrine, but he could none have in no manner.</p>
<p>There was a religious monk which had great devotion to these holy virgins, and it happed that he was on a day sick, and saw a right fair and noble virgin appear to him, and demanded him if he knew her.
And he was amarvelled of this vision, and said he knew her not. And she said: I am one of the virgins to whom thou hast such great devotion, and thereof thou shalt have a reward.
If thou say eleven thousand paternosters for the love and honour of us, we shall come unto thine aid and comfort at the hour of thy death, and then she vanished away.
And he accomplished her request as soon as he might, and anon after he did do call his abbot, and did him to be annealed or anointed.
And as they anointed him he cried suddenly: Make ye place to the holy virgins, and go out of the way that they may come to me.
And when the abbot demanded him what it was, and what he meant, he told to him by order the promise of the virgin. Then all they withdrew them a little after, and soon came again and found him departed out of this world unto our Lord.
Then let us devoutly give laud and praising unto the blessed Trinity and pray him that by the merits of this great multitude of martyrs he will forgive and pardon us of our sins, that after this life we may come unto this holy company in heaven.</p>

<footer>
  <p><span style="color: #3d8b3d;">Jacobus de Varagine, <cite>Legenda Aurea</cite>, Chapter 158 “the Eleven Thousand Virgins”.</span></p>
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