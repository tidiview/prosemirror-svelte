<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 18 -->

<article>
  <section><article>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, John the Evangelist, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, John the Evangelist, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>John the Evangelist</figcaption>
      </figure>

      <h3 class="yellow" id="st-john-the-evangelist-according-to-the-golden-legend">John the Evangelist according to chapter 9 of <cite>The Golden Legend</cite></h3>
      <section><article>
        <h4>Text of Chapter 9. of <cite>The Golden Legend</cite>: <cite>Legend of John the Evangelist</cite></h4>

        <section><article>
          <section><article>
            <p>The <a href="#note_nomdejean" title="name of John" id="nomdejean" class="yellow">name of John</a>, <span style="color: #994c3d;">Johannes</span>, is expounded <span style="color: #994c3d;">«the grace of God»</span>, or <span style="color: #994c3d;">«he in whom grace is»</span>, or <span style="color: #994c3d;">«to whom it is given of our Lord»</span>,
            and therefore been understood four privileges that be in the blessed <span style="color: #994c3d;">St. John</span>.</p>
            <p>The <span style="color: #994c3d;">first</span> was the <span style="color: #994c3d;">noble love of the Christ</span>, for he loved him more than the other and showed to him of greater love,
            and therefore he is said the grace of God,
            also as gracious God.</p>
            <p>And to him he was more gracious than to Peter,
            for he loved him much, but he is love of courage and of sign, and this that is of signs is double.</p>
            <p>That one is for to show familiarity and that other is in giving benefices.</p>
            <p>As to the first he loved that one and the other equally, as to the second he loved more <span style="color: #994c3d;">John</span>, and as to the third, he loved more Peter.</p>
            <p>The <span style="color: #994c3d;">second</span> was <span style="color: #994c3d;">purity of flesh</span>
            when he was chosen virgin of God,
            and therefore it is said in what is that grace,
            for grace of virginity is in a virgin,
            and when he would marry he was called of God.</p>
            <p>The <span style="color: #994c3d;">third</span> is the <span style="color: #994c3d;">Apocalypse of the secrets</span>,
            therefore it is said to whom grace is given,
            for to him was given to know many secrets and profound, as of the divinity of the Son of God, and of the end of the world.</p>
            <p>The <span style="color: #994c3d;">fourth</span> is the <span style="color: #994c3d;">recommendation of the mother of God</span>,
            which gift of grace was given of our Lord,
            for this gift was given to him when the mother was given to him into keeping.</p>
            <p>And Miletus, Bishop of Laodicea, wrote his life, the which Isidore abridged and set it in the book of nativities of the life and the death of holy fathers.</p>
          </article></section>

          <h5 class="yellow" id="persecuted-for-his-faith-by-domitian">persecuted for his faith by domitian</h5>
          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “Salding of John the Evangelist by order of Emperor Domitian in front of the Latin Gate in Rome and departure for exile in the island of Patmos”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “Salding of John the Evangelist by order of Emperor Domitian in front of the Latin Gate in Rome and departure for exile in the island of Patmos”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1920.jpg 1920w"></picture><figcaption>detail of the central panel, “Salding of John the Evangelist by order of Emperor Domitian in front of the Latin Gate in Rome and departure for exile in the island of Patmos”, <cite>The Golden Legend</cite>, Chapter 9.</figcaption>
          </figure>

          <section><article>
            <p><span style="color: #994c3d;">John</span>, apostle and evangelist, the beloved of the Lord the virgin elected man, departed for Asia when the apostles separated after Pentecost. There he founded many churches.</p>
            <p>In this time Emperor Domitian heard of him, ordered him to be brought to him and made him to be cast into a vat or a ton full of hot oil in front of the Latin Gate,
            of which he issued out, by the help of God, more pure and more fair, without feeling of any more heat or chauffing, than he entered in.</p>
            <p>After this that emperor saw that he ceased not to preach the christian faith, he sent him into exile unto an isle called Patmos, were alone, he wrote <cite>The Apocalypse</cite>.</p>
          </article></section>

          <h5 class="yellow" id="the-raising-of-drusiana">the raising of drusiana</h5>
          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “resurrection of Drusiana”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “resurrection of Drusiana”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1920.jpg 1920w"></picture><figcaption>detail of the central panel, column capital, “resurrection of Drusiana”, <cite>The Golden Legend</cite>, Chapter 9.</figcaption>
          </figure>

          <section><article>
            <p>In this same year was Domitian the emperor, for his evils, put to death, and all that he had done was revoked by the senators and defeated,
            and thus was <span style="color: #994c3d;">St. John</span> brought again from his exile with great honour into Ephesus;
            and all the people of Ephesus came against him singing and saying:</p>
            <p class="conversation">
              <span style="color: #165493;">— «Blessed be he that cometh in the name of our Lord!»</span>
            </p>
            <p>In that way he raised a woman which was named Drusiana, which had much loved <span style="color: #994c3d;">St. John</span> and well kept his commandments.</p>
            <p>And her friends brought her tofore <span style="color: #994c3d;">St. John</span> all weeping and saving to him:</p>
            <p class="conversation">
              <span style="color: #165493;">— Lo! here is Drusiana which much loved thee and did thy commandments, and is dead, and desired nothing so much as thy return, and that she might see thee tofore her death.</span></p>
              <p><span style="color: #165493;">Now thou art come hither and she may not see thee.</span></p>
            </p>
            <p><span style="color: #994c3d;">St. John</span> had great pity on her that was dead, and of the people that wept for her, and commanded that they should set down the bier, and unbind and take away the clothes from her. And when they had so done he said, hearing all, with a loud voice,</p>
            <p id="drusiane" class="conversation">
              <span style="color: #df8f20;">— «Drusiana, my Lord God Jesus Christ ariseth thee;</span> <span style="color: #df8f20;">Drusiana arise, and go into thy house, and make ready for me some refection.»</span></p>
            <p>Anon she arose and went in to her house for to do the commandment of <span style="color: #994c3d;">St. John</span>, and the people made three hours long a great noise and cry, saying there is but one God, and that is he whom <span style="color: #994c3d;">St. John</span> preacheth.</p>
            <footer>
              <ul>
                <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:14#renvoi-drusiane">Back to related text ↩</a></p></li>
                <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:14#image-drusiane">Back to related image ↩</a></p></li>
              </ul>
            </footer>
          </article></section>

          <h5 class="yellow" id="the-baptisma-of-crato">the baptisma of Crato</h5>
          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “baptisma of Crato”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “baptisma of Crato”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-1920.jpg 1920w"></picture><figcaption>detail of the central panel, column capital, “baptisma of Crato”, <cite>The Golden Legend</cite>, Chapter 9.</figcaption>
          </figure>

          <section><article>
            <p>It happed on another day that Crato the philosopher made a great assembly of people in the midst of the city, for to show to them how they ought to despise the world.</p>
            <p>And he had ordained two young men brethren which were much rich, and had made them to sell their patrimony and therewith to buy precious stones, the which these two young men brake in the presence of the people,
            for to show how these precious and great riches of the world be soon destroyed.</p>
            <p>The apostle was going through there; he called the philosopher near him and criticized him for this kind of contempt for the world for <span style="color: #994c3d;">three reasons</span>:</p>
            <p><span style="color: #994c3d;">firstly</span>, <span style="color: #994c3d;">this refusal by the world was rented by men, but rejected by the divine judgment</span>; </p>
            <p><span style="color: #994c3d;">Secondly</span>, <span style="color: #994c3d;">this gesture, which does not serve the vice, is in vain, as is pointless any cure that does not involve a disease</span>.</p>
            <p><span style="color: #994c3d;">Finally</span>, <span style="color: #994c3d;">the contempt of the world is meritorious to the person who distributes his property to the poor</span>, following what the Lord said to a young man: <a href="#note_mathieu" title="If you wish to be perfect" id="mathieu" class="yellow">«If you want to be perfect, go, etc.»</a></p>
            <p>Crato replied:</p>
            <p class="conversation">
              — «If your master is truly God and if he wants the price of these stones to be given to the poor, make them reconstituted: So you can turn to his glory what I did to praise men.»</span>
            </p>
            <p>So <span style="color: #994c3d;">St. John</span> gathered in his hand the fragments of the stones and put himself in prayer;
            the stones were returned to their first state.</p>
            <p>Immediately the philosopher and the two young people began to believe, sold the stones and distributed the prize to the poor.  </p>
            <h5 class="yellow" id="st-johns-sermons-against-material-wealth">st. john's sermons against material wealth</h5>
            <p>On this, in their example, two other young people from good families sold all their property, gave the product to the poor and followed <span style="color: #994c3d;">John</span>.
            But one day, they fired their replete servants of precious magnets, even though they had only one coat and they saddened themselves.</p>
            <p><span style="color: #994c3d;">St. John</span> noticed their sad mine; From the shore of the sea, he made branches and small stones and transformed them into gold and precious stones.</p>
            <p>On the order of the apostle, young people sought, for seven days, from all the experts in gold and precious stones and returned by saying that they had testified never to have seen or so pure or precious stones.</p>
            <p><span style="color: #994c3d;">John</span> then told them:</p>
            <p class="conversation">
              <span style="color: #df8f20;">— «Go and redeem the lands you sold, since you lost the heavenly profit; flower in order to rot, enjoy temporal riches, to beg in eternity.»</span>
            </p>
            <p>And then the apostle began to distil a lot against wealth by showing that six causes must divert us from wanting immodestly.</p>
            <p>The <span style="color: #994c3d;">first</span> is <span style="color: #994c3d;">scripture</span>:</p>
            <p>He told the <a href="#note_hoteriche" title="story of the rich host" id="hoteriche" class="yellow">story of the rich host that the reproach and poor Lazare chose him</a>.</p>
            <p>The <span style="color: #994c3d;">second</span> cause is <span style="color: #994c3d;">nature</span>, because man is born without wealth or clothing and dies without wealth.</p>
            <p>The <span style="color: #994c3d;">third</span> is creation, because the sun, the moon, the stars, the rain, the air are common to all and distribute their benefits in common: similarly, all things should be common to all.</p>
            <p>The <span style="color: #994c3d;">fourth</span> cause is <span style="color: #994c3d;">fortune</span>, because the rich is the slave of money and devil: the slave of money, he does not possess wealth, but is possessed by wealth; slave to devil, the lover of money, according to the Gospel, serves Mammon <span style="color: #999">(Matthew chapter 6, verse 24; Luke chapter 16, verse 13)</span>.</p>
            <p>The <span style="color: #994c3d;">fifth</span> is the <span style="color: #994c3d;">concern</span>, because the rich experience, both day and night, the concern and obsession to acquire and fear of losing. Indeed, they have trouble to acquire and fear to keep.</p>
            <p>The <span style="color: #994c3d;">sixth</span> cause is the <span style="color: #994c3d;">loss</span>:</p>
            <p>it showed that wealth causes a loss that lies in the acquisition of two evils: evil in life present, vanity, and evil in future life, eternal damnation.</p>
            <p>They cause, in eternal perdition, another loss, that of two goods, grace in the present life and eternal glory in future life.</p>
            <h5 class="yellow" id="the-resurrection-of-the-young-married-man">the resurrection of the young married man</h5>
            <p>Now, while <span style="color: #994c3d;">John</span> was in the process of disenfranchising the riches, now we brought the body of a young man who had been married for thirty days.</p>
            <p>Came his mother, his widow and all those who cried him; They threw himself at his feet by imploring him to resurrect the young man in the name of the Lord, as he did for Drusiana.</p>
            <p>So, immediately after having burdened himself in tears and prayers, he revived him and commanded him to tell both disciples what punishment they could incur and what glory they could lose.</p>
            <p>The young man told many things about the glory of heaven and the sentences of hell, which he had seen, and he said:</p>
            <p class="conversation">
              <span style="color: #df8f20;">— «O unfortunate, I saw your angels cry and demons rejoice.»</span>
            </p>
            <p>He told them that they could lose eternal palaces, built of sparkling stones, illuminated with prodigious clarity, abundant in rich banquets, full of delights, glorified by joys and destined to last forever.</p>
            <p>From hell, he presented eight retributions:</p>
            <p>«Towards and darkness, revulsion, cold and burning Regard of demon, remorse, pain».</p>
            <p>So, the risen young man and the two disciples cast himself to the feet of the apostle by asking him mercy.</p>
            <p>The apostle tells them:</p>
            <p class="conversation">
              <span style="color: #df8f20;">— «Make penance for thirty days by praying that branches and stones return to their first nature.»</span>
            </p>
            <p>When it was done, he said:</p>
            <p class="conversation">
              <span style="color: #df8f20;">— «Go carry these branches and stones where you took them.»</span>
            </p>
            <p>When they performed and the branches and stones were found in their first nature, they received all the grace of the virtues they had possessed before.</p>
            <h5 class="yellow" id="the-destruction-of-dianas-temple">the destruction of diana's temple</h5>
            <p><span style="color: #994c3d;">St. John</span> had preached to all of Asia.</p>
            <p>One day, the worms of the idol fomented a popular sedition
            and took him to the temple of Diane to force him to offer a sacrifice.</p>
            <p><span style="color: #994c3d;">John</span> offered them this alternative:  </p>
            <ul>
              <li>or they would succeed in convincing the Church of Christ to invoke Diane
              and then he would offer himself a sacrifice to the idols: </li>
              <li>or he would succeed himself in making them to invoke the Christ to the temple of Diane
              and then they should believe in Christ.</p>
              <p>The majority of the people agreed;
              everyone came out of the temple, the apostle went into prayer and the temple collapsed;
              Diane's statue broke into a thousand pieces.</li>
            </ul>
          </article></section>

          <h5 class="yellow" id="the-cup-of-poison">the cup of poison</h5>
          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, John the Evangelist, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, John the Evangelist, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>John the Evangelist holding a cup of poison, <cite>The Golden Legend</cite>, Chapter 9.</figcaption>
          </figure>

          <section><article>
            <p>So Aristodeme, priest of the idols, gave rise to a strong argument among the people, so that part of this people was preparing to confront the other. The apostle says:</p>
            <p class="conversation">
              <span style="color: #df8f20;">— «What do you want to do? Say it and I'll do what you'll like.»</span>
            </p>
            <p>The other replied:</p>
            <p id="poison" class="conversation">«If you want me to believe in your God, I will give you a drink of poison and if he does not hurt you, your lord will appear as the true God.»</p>
            <p class="conversation">
              <span style="color: #df8f20;">— «Do as you say» said the apostle.</span>
            </p>
            <p>«I want first, say the priest, you'll see people die, for your greatest fear.»</p>
            <p>Aristodema therefore found the proconsul to be entrusted with two men destined for decapitation and, in front of the crowd, gave them poison.</p>
            <p>As soon as they drank her, they gave up the soul.</p>
            <p>So the apostle took the calyx and, by protecting himself by a sign of cross, goal all the poison, which was without any effect.</p>
            <p>All then went to praise God.</p>
            <p>But Aristodeme added:</p>
            <p>«I still have a doubt; But if you resurrect these two dead, I will believe really and without any doubt.»</p>
            <p>The apostle gave him his tunic.</p>
            <p>The other asked: «Why did you give me your tunic?»</p>
            <p class="conversation">
              <span style="color: #df8f20;">— «So that you are confused and give up your false beliefs</span>, retorted the apostle.
            </p>
            <p>Do you really think that your tunic will make me believe?  said the other one.</p>
            <p>The apostle says:</p>
            <p id="crato" class="conversation">
              <span style="color: #df8f20;">— «Go and throw it on the dead body by saying:</span></p>
              <p><span style="color: #df8f20;">“The apostle of Christ sent me to you for you to resurface in the name of Christ”».</span></p>
            </p>
            <p>The priest executed and the dead resurrected immediately.</p>
            <p>So the apostle named in the name of Christ the priest and the proconsul, who converged with their entire family and then built a church in honor of <span style="color: #994c3d;">St. John</span>.</p>
            <footer>
              <ul>
                <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:14#renvoi-poison">Back to related text ↩</a></p></li>
                <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:14#image-poison">Back to related image ↩</a></p></li>
              </ul>
            </footer>
          </article></section>
            <footer>
              <ul>
                <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:14#renvoi-crato">Back to related text ↩</a></p></li>
                <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:14#image-crato">Back to related image ↩</a></p></li>
              </ul>
            </footer>
        </article></section>
      </article></section>

      <hr>

    <aside>
      <h2 id="notes" class="yellow">notes</h2>
        <section><article>
          <h3 id="note_nomdejean" class="yellow">name of John</h3>
          <section><article>
            <div class="notices yellow">
            <p>On the meaning of the name of John in Hebrew, see also: <a href="#le-nom-de-jean" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean">name “john”, its etymology</a>.</p>
            </div>
          </article></section>
          <footer>
            <p>back to the note: <a href="#nomdejean" title="name of John">name of John↑</a></p>
          </footer>
        </article></section>
        
        <section><article>
          <h3 id="note_mathieu" class="yellow">If you wish to be perfect</h3>
          <section><article>
            <p>This quote refers to a passage from the Gospel according to Matthew, chapter 19, verse 21:</p>
            </article></section>
            <section><article>
              <div class="notices yellow">
              <ol class="doc">
                <li value="21">
                  <p class="conversation">
                    “If you wish to be perfect, go and sell your possessions and give the money to the poor, and you will have treasure in heaven; then come, follow me.”
                  </p>
                </li>
              </ol>
              </div>
            </article></section>

            <section><article>
              <section><article>
                <p>In addition, the full text:</p>
              </article></section>
              <section><article>
                <div class="notices yellow">
                <ol class="doc">
                  <li value="16">
                    And now a man came to him and asked:
                    <p class="conversation">
                      “Master, what good deed must I do to possess eternal life?”
                    </p>
                  </li>
                  <li value="17">
                    Jesus said to him:
                    <p class="conversation">
                      “Why do you ask me about what is good? There is one alone who is good. But if you wish to enter into life, keep the commandments.”
                    </p>
                  </li>
                  <li value="18">
                    He said:
                    <p class="conversation">
                      “Which ones?”
                    </p>
                    Jesus replied:
                    <p class="conversation">
                      “These: You shall not kill. You shall not commit adultery. You shall not steal. You shall not give false witness.
                    </p>
                  </li>
                  <li value="19">
                    <p class="conversation">
                      Honour your father and your mother. You shall love your neighbour as yourself.”
                    </p>
                  </li>
                  <li value="20">The young man said to him, “I have kept all these. What more do I need to do?”</li>
                  <li value="21">
                    Jesus said:
                    <p class="conversation">
                      “If you wish to be perfect, go and sell your possessions and give the money to the poor, and you will have treasure in heaven; then come, follow me”.
                    </p>
                  </li>
                  <li value="22">But when the young man heard these words he went away sad, for he was a man of great wealth.</li>
                  <li value="23">
                    Then Jesus said to his disciples:
                    <p class="conversation">
                      “In truth I tell you, it is hard for someone rich to enter the kingdom of Heaven.
                    </p>
                  </li>
                  <li value="24">
                    <p class="conversation">
                      Yes, I tell you again, it is easier for a camel to pass through the eye of a needle than for someone rich to enter the kingdom of Heaven.”»
                    </p>
                  </li>
                </ol>
            </article></section>
          </article></section>
          <footer>
            <p>back to the note: <a href="#mathieu" title="If you wish to be perfect">If you wish to be perfect↑</a></p>
          </footer>
        </article></section>

      <section><article>
        <h3 id="note_hoteriche" class="yellow">story of the rich host</h3>
          <header>
            <p>This passage refers to the gospel according to Luke, chapter 16, verse 19 and following:</p>
          </header>
          <section><article>
            <div class="notices yellow">
            <ol>
              <li value="19">«There was a rich man who used to dress in purple and fine linen and feast magnificently every day.</li>
              <li value="20">And at his gate there used to lie a poor man called Lazarus, covered with sores,</li>
              <li value="21">who longed to fill himself with what fell from the rich man's table. Even dogs came and licked his sores.</li>
              <li value="22">Now it happened that the poor man died and was carried away by the angels into Abraham's embrace. The rich man also died and was buried.</li>
              <li value="23">In his torment in Hades he looked up and saw Abraham a long way off with Lazarus in his embrace.
              </li>
              <li value="24">
                So he cried out:
                <p class="conversation">
                  “Father Abraham, pity me and send Lazarus to dip the tip of his finger in water and cool my tongue, for I am in agony in these flames”.
                </p>
              </li>
              <li value="25">
                – Abraham said:
                <p class="conversation">
                  “My son, remember that during your life you had your fill of good things, just as Lazarus his fill of bad. Now he is being comforted here while you are in agony”.»
                </p>
              </li>
            </ol>
            </div>
          </article></section>
          <footer>
            <p>This story is also told by John, more in detail: see <a href="https://www.catholic.org/bible/book.php?bible_chapter=11" title="https://www.catholic.org/bible/book.php?id=50&amp;bible_chapter=11" id="50">John chapter 11, verses 1 to 46</a></p>
          </footer>
        </article></section>
        <footer>
          <p class="puce">back to text: <a href="#mathieu" title="If you wish to be perfect">story of the rich host ↑</a></p>
        </footer>
      </article></section> 
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