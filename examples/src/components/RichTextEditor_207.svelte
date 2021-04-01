<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
  <!-- Page 1 -->

<article>
  <h1 class="yellow"><ruby style="color:#555;" lang="en">Triptych of John The Baptist and John The Evangelist<rt style="color:#999;" lang="nl">Triptiek van Johannes de Doper en Johannes de Evangelist</rt></ruby></h1>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-640.jpg" title="Hans Memling, “Triptych of John the Baptist and John the Evangelist”, the triptych opened, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans Memling, “Triptych of John the Baptist and John the Evangelist”, the triptych opened, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1920.jpg 1920w"></picture><figcaption>the triptych opened</figcaption>
  </figure>
  
  <section><article>
    <h2 class="yellow">une œuvre majeure d'Hans Memling</h2>
    <section><article>
      <h3 class="yellow">le triptyque de l'hôpital Saint-Jean de Bruges depuis le XV<sup>ème</sup> siècle</h3>
      <section><article>
        <div class="notices yellow">
          <p>The triptych has been conceived and realised for the master altar of the new apse of the church of the Old St. John Hospital of Bruges (in Flemish: Brugge) built in 1473-74, where it still stands.</p>
          <p>The frame bears the inscription « <ruby lang="la">WORK<rp>(</rp><rt lang="fr">OPVs</rt><rp>)</rp>&nbsp;<rp>(</rp><rt lang="fr"></rt><rp>)</rp>OF&nbsp;HANS<rp>(</rp><rt lang="fr">IOHANNIS</rt><rp>)</rp>&nbsp;<rp>(</rp><rt lang="fr"></rt><rp>)</rp>MEMLING<rp>(</rp><rt lang="fr">MEMLING</rt><rp>)</rp></ruby> », the first known signature of the flemish primitive painter of Bruges Hans MEMLING, and also the date: «1479».</p>
          <p>It has a central panel, framed by two panels on the right and left fixed by hinges.</p>
          <p>The characters depicted are a little smaller than life size.</p>
          <p>these fews pages aim at presenting its different aspects to allow a deeper understanding:</p>
        </div>
      </article></section>
    </article></section>
    
    <section><article>
      <h3 class="yellow">à propos de cet article</h3>
      <section><article>
        <h4 class="yellow">objectifs de cet article</h4>
        <section><article>
          <p>L'article que nous rédigeons se donne pour objectif de dépasser ce premier regard:</p>
          <ol>
            <li>first, by a photographic presentation of the triptych in its exhibition space,</li>
            <li>then thrue a description of what it represents,</li>
            <li>finally by relating the different elements of the image with the different texts at the origin of the represented scenes.</li>
          </ol>
        </article></section>
      </article></section>
    </article></section>
  </article></section>

  <hr>
  
  <section><article>
    <h3 id="a-propos-de-cet-article" class="yellow">about this article<a class="anchorjs-link " href="#a-propos-de-cet-article" aria-label="Anchor" data-anchorjs-icon="" style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"></a></h3>
      <h4 class="yellow">objectifs de cet article</h4>
      <section><article>
        <div class="notices yellow">
          <p>To produce this article, we are indebted to reference works, particularly those of <a href="#de-vos-1" id="renvoi-de-vos-1" class="yellow">Dirk DE VOS, “Hans Memling - The Complete Work”</a> and <a href="#de-vos-2" id="renvoi-de-vos-2" class="yellow">“Hans Memling”</a>.</p>
          <p>However, our aim is not to produce an interpretation of the work here, but rather <span style="color: #e6a64d;">a description</span> and through it to make available the elements that make it possible to grasp it: <span style="color: #e6a64d;">quality reproductions</span> <a href="#note-1" title="note-1" id="renvoi-note-1"><sup style="color:#555;">1</sup></a> , <span style="color: #e6a64d;">the main sources of the work</span>, whether textual or pictorial, which today, even in the case of specialised paper works available, for example, in libraries, is too often done only by reference or implied.</p>
          <p>Our goal will have been achieved if the reader is in a position to <span style="color: #e6a64d;">measure and thus deepen his or her own perception</span> of a work that we think deserves attention <span style="color: #e6a64d;">as much as is great the radiance of its presence</span>.</p>
        </div>
      </article></section>
    </article></section>
  </article></section>


  <hr>

  <section><article>
    <h2 id="presentation-photographique" class="yellow">photographic presentation of the work in its exhibition space</h2>
    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-640.jpg" title="Hans Memling, “Triptych of John the Baptist and John the Evangelist”, view of the exhibition space from the entrance of the church of the Old St. John Hospital, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans Memling, “Triptych of John the Baptist and John the Evangelist”, view of the exhibition space from the entrance of the church of the Old St. John Hospital, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1920.jpg 1920w"></picture><figcaption>View of the exhibition space from the entrance of the church of the Old St. John Hospital</figcaption>
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
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, view of the exhibition space from the entrance of the church of the Old St. John Hospital, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, view of the exhibition space from the entrance of the church of the Old St. John Hospital, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1920.jpg 1920w"></picture><figcaption>View of the exhibition space from the entrance of the church of the Old St. John Hospital</figcaption>
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
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, Memling Museum, Hospital St. John, Bruges" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, Memling Museum, Hospital St. John, Bruges" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1920.jpg 1920w"></picture><figcaption></figcaption>
    </figure>
  </article></section>
</article>

<hr>

<nav>
  <h3 id="table-des-matieres" class="yellow">table of contents</h3>
  <ol>
    <li>
      <a href="#presentation-photographique" title="photographic presentation" class="yellow">photographic presentation of the work in its exhibition space</a>
    </li>
    <li>
      <a href="#description" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:2#description" class="yellow">description of the work</a>
      <ul>
        <li>
          <a href="#couronnement" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:2#couronnement" class="yellow">coronation of the virgin</a>
        </li>
        <li>
          <a href="#catherine-d-alexandrie" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:3#catherine-d-alexandrie" class="yellow">catherine of alexandria</a>
        </li>
        <li>
          <a href="#les-deux-jean" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:3#les-deux-jean" class="yellow">the two john</a>
          <ul>
            <li>
              <a href="#jean-le-baptiste-2" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:3#jean-le-baptiste-2" class="yellow">john the baptist</a>
            </li>
            <li>
              <a href="#jean-l-evangeliste-3" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:3#jean-l-evangeliste-3" class="yellow">john the evangelist</a>
            </li>
            <li>
              <a href="#le-nom-de-jean" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean" class="yellow">the name "john", its link with the institution, its etymology</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#barbe" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:3#barbe" class="yellow">barbara the great martyr</a>
        </li>
        <li>
          <a href="#conversation" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:4#conversation" class="yellow">a sacred conversation</a>
        </li>
        <li>
          <a href="#devotion-moderne" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:4#devotion-moderne" class="yellow">modern devotion</a>
        </li>
        <li>
          <a href="#dispositif-architectural" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:4#dispositif-architectural" class="yellow">architectural structure</a>
        </li>
        <li>
          <a href="#organisation-du-recit" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:5#organisation-du-recit" class="yellow">structure of the narrative</a>
        </li>
        <li>
          <a href="#legendes" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:6#legendes" class="yellow">legends of john the baptist and john the evangelist</a>
          <ul>
            <li>
              <a href="#legende-de-jean-le-baptiste" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:6#legende-de-jean-le-baptiste" class="yellow">legend of john the baptist</a>
            </li>
            <li>
              <a href="#legende-de-jean-l-evangeliste" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:10#legende-de-jean-l-evangeliste" class="yellow">legend of john the evangelist</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#position-fermee" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:15#position-fermee" class="yellow">presentation of donors: the closed tryptich</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#mise-en-relation" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:16#mise-en-relation" class="yellow">different texts at the origin of the scenes represented</a>
      <ul>
        <li>
          <a href="#cath-selon-legende" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:16#cath-selon-legende" class="yellow">catherine of alexandria according to the Golden Legend</a>
        </li>
        <li>
          <a href="#barbe-selon-legende" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:17#barbe-selon-legende" class="yellow">barbara the great martyr according to the Golden Legend</a>
        </li>
        <li>
          <a href="#jean-selon-legende" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:18#jean-selon-legende" class="yellow">john the evangelist according to the Golden Legend chapter 9</a>
        </li>
        <li>
          <a href="#jean-selon-legende-2" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:19#jean-selon-legende-2" class="yellow">john the evangelist according to the Golden Legend chapter 65</a>
        </li>
        <li>
          <a href="#apocalypse" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse" class="yellow">vision of the throne of the god and the heavenly court: the living on the throne and the lamb</a>
        </li>
      </ul>
    </li>
  </ol>
</nav>

<hr>

<aside>
  <section><article>
    <h3 id="table-des-matieres" class="yellow">table des matières</h3>
    <div id="body-inner">
    <div class="notices yellow">
    <h4 id="de-vos" class="yellow">references of the books cited by Dirk DE VOS:</h4>
    <section><article>
      <ul>
        <li>in french:
          <pre id="de-vos-1">
            <table>
              <thead>
              <tr>
              <th><span hidden="">hidden</span></th>
              <th><span hidden="">hidden</span></th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td>Title</td>
              <td>Published in</td>
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
          </pre>
        </li>
        <li>in english:
          <pre id="de-vos-2">
            <table>
              <thead>
              <tr>
              <th><span hidden="">hidden</span></th>
              <th><span hidden="">hidden</span></th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td>Title</td>
              <td>Published in</td>
              <td>ISBN-10</td>
              </tr>
              <tr>
              <td>Hans Memling: The Complete Works</td>
              <td>1994</td>
              <td>0810936496</td>
              </tr>
              <tr>
              <td>Hans Memling: Catalogue</td>
              <td>1994</td>
              <td>9055440299</td>
              </tr>
              </tbody>
            </table>
          </pre>
        </li>
      </ul>
    </article></section>
      <footer>
        <p><a href="#renvoi-de-vos-1" title="renvoi-de-vos-1">↑ back to this page</a> <a href="#renvoi-de-vos-2" title="renvoi-de-vos-2">↑ back to page 2</a></p>
      </footer>
    </article></section>

    <section><article>
      <h4 id="lorentz" class="yellow">references of the book quoted by Philippe LORENTZ:</h4>
      <section><article>
        <div class="notices yellow">
          <ul>
            <li>in french:
              <pre id="lorents-1">
                <table>
                  <thead>
                  <tr>
                  <th><span hidden="">hidden</span></th>
                  <th><span hidden="">hidden</span></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td>Title</td>
                  <td>Published in</td>
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
            </li>
          </ul>
        </div>
      </article></section>
      <footer>
        <p><a href="#renvoi-lorentz-1" title="renvoi-de-vos-1">↑ back to this page</a> <a href="#renvoi-lorentz-2" title="renvoi-lorentz-2">↑ back to page 3</a></p>
      </footer>
    </article></section>

    <hr>

    <section><article>
      <header>
        <p><a href="#renvoi-note-1" title="renvoi note-1" id="note-1">note:</a></p>
      </header>
      <p>the reproductions of the work that we make available to the public are, to our knowledge, the best that currently available exist outside of professional works: they required a great deal of efforts from us due to the low intensity and yellow of the lighting in the exhibition space of the Memling Museum in Bruges at the time this article was written (<time datetime="2018">2018</time>).</p>
      <footer>
        <p><a href="#renvoi-note-1" title="renvoi note-1">↑ retour au texte</a></p>
      </footer>
    </article></section>
  </article></section>
</aside>

<!-- Page 2 --><hr>

<article>
  <h2 id="description" class="yellow">description of the work</h2>
  <section><article>
    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, View of the opened triptych, Memling Museum, Hospital St. John, Bruges" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, View of the opened triptych, Memling Museum, Hospital St. John, Bruges" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1920.jpg 1920w"></picture><figcaption>the opened triptych</figcaption>
    </figure>

    <article><section>
      <p>We first describe what <span style="color: #e6a64d;">the work represents</span> and for that we follow <span style="color: #e6a64d;">the path of the gaze</span>, starting with the <span style="color: #e6a64d;">main scene</span>.</p>
    </article></section>

    <h3 id="couronnement" class="yellow">coronation of the virgin</h3>
    <section><article>

      <section><article>
        <p>In the center, <span style="color: #e6a64d;">virgin Mary</span> thrones on a gold seat in front of a clothed cloth and under a red velvet baldaquin. </p>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “Virgin and child”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, détail du panneau central, la “Vierge et l'enfant Jésus”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1920.jpg 1920w"></picture><figcaption>detail of the central panel, “Virgin and child”</figcaption>
      </figure>

      <section><article>
        <p>She <span style="color: #e6a64d;">is crowned “Queen of heaven” by two small dark blue angels</span> flying above her.</p>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “Madonna and child”, Memling Museum, Hospital St. John, Bruges" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “Madonna and child”, Memling Museum, Hospital St. John, Bruges" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1920.jpg 1920w"></picture><figcaption>detail of the central panel, “Madonna and child”</figcaption>
      </figure>
    </article></section>

    <section><article>
      <h3 class="yellow">l'enfant Jésus</h3>

      <section><article>
        <p>On his knees, <span style="color: #e6a64d;">Jesus child</span>, seatted, hold a apple with his left hand, and move from his right hand <span style="color: #e6a64d;">a ring</span> to the finger of <span style="color: #e6a64d;">a woman</span>, placed futher down and left of her, on the front.</p>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “Coronation of the virgin”, Memling Museum, Hospital St. John, Bruges" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “Coronation of the virgin”, Memling Museum, Hospital St. John, Bruges" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1920.jpg 1920w"></picture><figcaption>detail of the central panel, “Coronation of the virgin”</figcaption>
      </figure>
    </article></section>
  <section><article>
</article>


<!-- Page 3 --><hr>

<article>
  <section><article>
    <h3 id="catherine-d-alexandrie" class="yellow">catherine d'alexandrie</h3>
    <section><article>
      <h4 class="yellow">catherine d'alexandrie dans la scène du panneau central</h4>
      <section><article>
         <p><span style="color: #e6a64d;">The sword</span> and <span style="color: #e6a64d;">the broken wheel</span> at his feet are <span style="color: #e6a64d;">the instruments of his martyrdom</span>: it is <a href="https://en.wikipedia.org/wiki/Catherine_of_Alexandria" title="https://en.wikipedia.org/wiki/Catherine_of_Alexandria" class="yellow">Catherine of Alexandria</a>.</p>
      </article></section>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, Catherine of Alexandria, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, Catherine of Alexandria, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.jpg 1920w"></picture><figcaption>Catherine of Alexandria</figcaption>
      </figure>
    </article></section>

    <section><article>
      <h4 id="catherine-d-alexandrie" class="yellow">Catherine of Alexandria</h4>
      <section><article>
        <p><a href="https://en.wikipedia.org/wiki/Catherine_of_Alexandria" title="https://en.wikipedia.org/wiki/Catherine_of_Alexandria" id="catherine-d-alexandrie-2" class="yellow">Catherine of Alexandria</a> was, since the end of the 13<sup style="color:#555;">th</sup> century, a very popular saint whose legend, reported by <a href="https://en.wikipedia.org/wiki/Jacobus_da_Varagine" title="https://en.wikipedia.org/wiki/Jacobus_da_Varagine" class="yellow">Jacobus da Varagine</a> in <span style="color: #e6a64d;">chapter 168</span> of the <a href="https://en.wikipedia.org/wiki/Golden_Legend" title="https://en.wikipedia.org/wiki/Golden_Legend" class="yellow">“Golden Legend”</a>, entitled <a href="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:16" title="https://francois-vidit.com/docs/fr/saint-jean/page:16" class="yellow">“Saint Catherine”</a>, is fascinating.</p>
        <ul>
          <li>Read the <a href="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:6" title="https://francois-vidit.com/docs/fr/saint-jean/page:6" class="yellow">text of the Legend of Catherine of Alexandria according to chapter 168 of <cite>the Golden Legend</cite></a>.</li>
        </ul>
        <p>It is quite likely that Memling relied on this text.</p>
        <p>Although modern historians believe that Catherine of Alexandria has not really existed <sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">1</a></sup> and her cult was removed from the general calendar of the catholic church in 1970 <sup id="fnref1:2"><a href="#fn:2" class="footnote-ref">2</a></sup> , according to her legend, <span style="color: #e6a64d;">Catherine</span> is a <span style="color: #e6a64d;">patrician</span> known for her <span style="color: #e6a64d;">exceptional education</span> and her <span style="color: #e6a64d;">great beauty</span>, who lived in Alexandria in the 3<sup style="color:#555;">rd</sup> or 4<sup style="color:#555;">th</sup> centuries.</p>
        <p>She <span style="color: #e6a64d;">defies</span> the roman emperor of the time, <a href="https://en.wikipedia.org/wiki/Maxentius" title="https://en.wikipedia.org/wiki/Maxentius" class="yellow">Maxentius</a>, who then threatened christians with public abjuration.
        Maxentius is surprised to find this exceptional woman in front of him but he takes up the challenge and, defeated at the end of a long spiritual battle full of twists and turns, offers her to marry him.
        Catherine, in the name of her faith, refused and chose to undergo martyrdom.
        At the time of his execution, Jesus' own voice would then have been heard from heaven to tell him:
        <span style="color: #e6a64d;">«Come, my beloved, my beautiful one!»</span></p>
        <p>Due to the presence of Saint Catherine, the triptych has sometimes been called <span style="color: #e6a64d;">“the mystical marriage of Saint Catherine”</span> <sup id="fnref1:5"><a href="#fn:5" class="footnote-ref">3</a></sup> .
        In fact, they are <span style="color: #e6a64d;">two men</span>, who <span style="color: #e6a64d;">are the main characters</span> by the quantity of scenes that tell their story: they stand like <span style="color: #e6a64d;">two twins</span>, standing on either side of the Virgin on their buttocks.</p>
        <h3 id="les-deux-jean" class="yellow">the two john</h3>
        <h4 id="jean-le-baptiste-2" class="yellow">john the baptist</h4>
        <p>On the backside, on the left, the presence of <span style="color: #e6a64d;">the white lamb</span> allows us to identify <span style="color: #e6a64d;">the man wearing the</span> magnificent <span style="color: #e6a64d;">purple tunic</span> as <a href="https://en.wikipedia.org/wiki/John_the_Baptist" title="https://en.wikipedia.org/wiki/John_the_Baptist" id="jean-le-baptiste" class="yellow">John the Baptist</a>.
        This recalls the word he spoke to his disciples to <span style="color: #e6a64d;">announce</span> <span style="color: #e6a64d;">Jesus' coming into the world</span> <span style="color: #999;">(John 1:29)</span>: <span style="color: #e6a64d;">«<ruby style="color:#e6a64d;" lang="en">This is&nbsp;the&nbsp;lamb&nbsp;of&nbsp;god<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="la">Ecce&nbsp;agnus&nbsp;dei</rt><rp>)</rp></ruby>»</span>.
        In fact, John also refers with his right arm to the child Jesus.</p>
      </article></section>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, John the Baptist, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, John the Baptist, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1920.jpg 1920w"></picture><figcaption>John the Baptist</figcaption>
      </figure>
      <p>The lamb is a new symbol of the christian faith.
      In contrast to the ancient hebraic faith, where, in order to please god, animals had to be sacrificed to him, christianity affirms that <span style="color: #e6a64d;">the only true sacrifice that pleases god</span> is that which <span style="color: #e6a64d;">the believer makes of himself</span>, in imitation of Jesus and in reference to this word of the prophet <a href="https://en.wikipedia.org/wiki/Isaiah" title="https://en.wikipedia.org/wiki/Isaiah" id="isaie" class="yellow">Isaiah</a> <span style="color: #999;">(Isaiah, 53-7)</span>:
      <span style="color: #e6a64d;">«Abused, he humbles himself, he does not open his mouth: like <span style="text-decoration: underline;">a lamb</span> leads to the slaughterhouse»</span>.</p>
      <p>Under his purple tunic is <span style="color: #e6a64d;">another tunic</span>, light brown, which the text tells us is <span style="color: #e6a64d;">camel hair</span> <span style="color: #999;">(Mark 1:6)</span>, imitating the hair garment of the prophet <a href="https://en.wikipedia.org/wiki/Elijah" title="https://en.wikipedia.org/wiki/Elijah" id="elie" class="yellow">Elijah</a> <span style="color: #999;">(2 Kings 1:8)</span>.</p>
        <p>This same hair garment also refers to an episode of Genesis <span style="color: #999;">(Genesis 27:1-40)</span> during which <a href="https://en.wikipedia.org/wiki/Jacob" title="https://en.wikipedia.org/wiki/Jacob" id="jacob" class="yellow">Jacob</a>, on the advice of his mother <a href="https://en.wikipedia.org/wiki/Rebecca" title="https://en.wikipedia.org/wiki/Rebecca" id="rebecca" class="yellow">Rebecca</a>, poses as his brother <a href="https://en.wikipedia.org/wiki/Esau" title="https://en.wikipedia.org/wiki/Esau" id="esau" class="yellow">Esau</a> who is very <span style="color: #e6a64d;">hairy</span>, with his blind father, <a href="https://en.wikipedia.org/wiki/Isaac" title="https://en.wikipedia.org/wiki/Isaac" id="isaac" class="yellow">Isaac</a>, by wearing <span style="color: #e6a64d;">a hair garment</span>. His cunning allows him to be unduly blessed and thus become the sole heir in Esau's place. This tunic is also a sign of domination of animality, and in the case of John the Baptist, the camel being an animal that allows to cross the desert, of domination of animality by asceticism.</p>
      <p>On the other side, on the right, <span style="color: #e6a64d;">another man</span> standing, dressed like a priest, in <span style="color: #e6a64d;">red</span>, makes with his right hand the sign of the cross on <span style="color: #e6a64d;">a cup</span>, in which there is <span style="color: #e6a64d;">a serpent</span>: it is <a href="https://en.wikipedia.org/wiki/John_the_Apostle" title="https://en.wikipedia.org/wiki/John_the_Apostle" id="jean-l-evangeliste-4" class="yellow">John the Evangelist</a>.</p>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, Jean l'Évangéliste, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, Jean l'Évangéliste, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>John the Evangelist</figcaption>
      </figure>
      <h4 id="jean-l-evangeliste-3" class="yellow">john the evangelist</h4>
      <p>We recognize <a href="https://en.wikipedia.org/wiki/John_the_Apostle" title="https://en.wikipedia.org/wiki/John_the_Apostle" id="jean-l-evangeliste" class="yellow">John the Evangelist</a> as an episode of the <a href="https://en.wikipedia.org/wiki/Golden_Legend" title="https://en.wikipedia.org/wiki/Golden_Legend" id="legende-doree-2" class="yellow">“Golden Legend”</a> <span style="color: #999;">(chapter 9)</span>, which we report <a href="#aristodeme" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" id="renvoi-aristodeme" class="yellow">here</a>.</p>
      <p>John faces <span style="color: #e6a64d;">Aristodemus</span>, priest of the temple of Diana in Asia <span style="color: #999;">(probably Ephesus)</span>, who publicly challenges him to <span style="color: #e6a64d;">drink</span> a <span style="color: #e6a64d;">poisoned cup</span>.</p>
      <p>The later makes, as Memling represents him, the <span style="color: #e6a64d;">sign of the cross</span>, drinks the cup but the poison does him no harm.</p>
      <p>The <span style="color: #e6a64d;">serpent</span> also refers to a word that Jesus addressed to <a href="https://fr.wikipedia.org/wiki/Nicodème" title="https://fr.wikipedia.org/wiki/Nicodème" id="nicodeme" class="yellow">Nicodemus</a> <span style="color: #999;">(John 3:14)</span> <span style="color: #e6a64d;">«As Moses raised the serpent in the wilderness, so must the son of man be raised up, so that whoever believes may have eternal life in him»</span>.</p>
      <h4 id="le-nom-de-jean" class="yellow">the name «john», its link with the institution, its etymology</h4>
      <p>The many details that tell their two legends throughout the inner expanse of the triptych make them the <span style="color: #e6a64d;">main characters</span>.
      Both are called <span style="color: #e6a64d;">«John»</span>, which, in the hollow, materializes in the work the <span style="color: #e6a64d;">sponsoring institution</span>, <span style="color: #e6a64d;">the <span style="text-decoration: underline;">St. John</span> Hospital of Bruges</span> and justifies the current official name, <span style="color: #e6a64d;">“Triptych of John the Baptist and John the Evangelist”</span>.</p>
      <p>The etymology of the first name "John" comes from the hebrew <span style="color: #e6a64d;">«</span><ruby style="color:#e6a64d;" lang="fr">Yo<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">יו</rt><rp>)</rp>kha<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">ח</rt><rp>)</rp>nan<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">נן</rt><rp>)</rp></ruby><span style="color: #e6a64d;">»</span>, whose pronunciation is:</p>
      <p></p><div style="text-align: center;"><audio controls="1" title="prononciation de Yokhanan en hébreu" alt="here"><source src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/prononciation-yokhanan.mp3">Your browser does not support the audio tag.</audio></div></p>
      <p>which literally means <span style="color: #e6a64d;">«</span><ruby style="color:#e6a64d;" lang="fr">god<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">Yo</rt><rp>)</rp></ruby><span style="color: #e6a64d;">»</span> is <span style="color: #e6a64d;">«</span><ruby style="color:#e6a64d;" lang="fr">grace<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">khanan</rt><rp>)</rp></ruby><span style="color: #e6a64d;">»</span> or <span style="color: #e6a64d;">«</span><ruby style="color:#e6a64d;" lang="fr">mercy<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">khanan</rt><rp>)</rp></ruby><span style="color: #e6a64d;">»</span>.
      As «god» also means in hebrew «what is», it also means <span style="color: #e6a64d;">«the one who is»</span> <span style="color: #e6a64d;">«grace»</span> or <span style="color: #e6a64d;">«mercy»</span>.  <p></p>
      <p>Although <span style="color: #e6a64d;">this first name</span> was used by several minor figures in the history of the hebrew people, it <span style="color: #e6a64d;">only became</span> very <span style="color: #e6a64d;">popular</span> after the appearance of christianity <span style="color: #e6a64d;">in the christian world</span>, following the very important role each of them played, roles that we will soon detail.</p>
      <p>On the other side of virgin Mary, on the front right, <span style="color: #e6a64d;">another woman</span>, dressed in <span style="color: #e6a64d;">a magnificent green wool tunic</span> as only Bruges produced in the 15<sup style="color:#555;">th</sup> century, <span style="color: #e6a64d;">reads</span>.
      Her presence corresponds to that of <a href="#catherine-d-alexandrie" class="yellow">Catherine of Alexandria</a> on the front of the other side.
      Behind her, <span style="color: #e6a64d;">a white stone tabernacle tower</span> tells us that it is <a href="https://en.wikipedia.org/wiki/Saint_Barbara" title="https://en.wikipedia.org/wiki/Saint_Barbara" id="barbe-la-grande-martyre" class="yellow">Barbara the great martyr</a> <sup id="fnref1:3"><a href="#fn:3" class="footnote-ref">4</a></sup> .</p>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, barbara the great martyr, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, barbara the great martyr, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.jpg 1920w"></picture><figcaption>Barbara the great martyr</figcaption>
      </figure>
      <h3 id="barbe" class="yellow">barbara the great martyr</h3>
      <p>As with <a href="#catherine-d-alexandrie" class="yellow">Catherine of Alexandria</a>, modern historians doubt the reality of her existence and her name has also been removed from the general calendar <sup id="fnref2:2"><a href="#fn:2" class="footnote-ref">2</a></sup> ; the text on which Memling based his representation is not part of the <a href="https://en.wikipedia.org/wiki/Golden_Legend" title="https://en.wikipedia.org/wiki/Golden_Legend" id="legende-doree-2" class="yellow">Golden Legend</a> either but, like other texts, was added later.
      We reproduce it in its entirety <a href="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:17" title="https://francois-vidit.com/docs/fr/saint-jean/page:17" class="yellow">here</a>.</p>
      <p>According to his legend, Barbara lives in <a href="https://en.wikipedia.org/wiki/Nicomedia" title="https://en.wikipedia.org/wiki/Nicomedia" id="nicomedie" class="yellow">Nicomedia</a>, capital of the former province of <a href="https://en.wikipedia.org/wiki/Bithynia" title="https://en.wikipedia.org/wiki/Bithynia" id="bithynie" class="yellow">Bithynia</a>, which is located in the north of present-day Turkey and overlooks the Black Sea.
      Barbara has the defect of being beautiful..., so beautiful, that when he was very young, <span style="color: #e6a64d;">his father emprisoned her in a tower</span>!   </p>
      <p>The text teaches us that Barbara then feels <span style="color: #e6a64d;">«the nothingness of earthly things»</span> and begins to worry about <span style="color: #e6a64d;">«heavenly things»</span>.
      Although it was forbidden in her time, she gradually turned away from the roman gods and secretly wrote to the most famous christian of <a href="https://en.wikipedia.org/wiki/Alexandria" title="https://en.wikipedia.org/wiki/Alexandria" id="alexandrie" class="yellow">Alexandria</a> in Egypt, <a href="https://en.wikipedia.org/wiki/Origen" title="https://en.wikipedia.org/wiki/Origen" class="yellow">Origen</a>.
      The latter replied, fortifying her in her nascent faith, visiting her and secretly giving her the <span style="color: #e6a64d;">baptism</span>.  </p>
      <p>Publicly <span style="color: #e6a64d;">denounced</span> later for refusing to sacrifice to the gods, she was martyred.
      Jesus' voice would then have been heard from heaven:
      <span style="color: #e6a64d;">«Come, my beloved; rest in my father's house in heaven»</span>.</p>
      <p>His own father cuts off her head. </p>
      <p>Through the intertwining of the tower, <span style="color: #e6a64d;">a host</span> appears in <span style="color: #e6a64d;">a glass cylinder</span> mounted on a golden crescent moon.</p>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-840.webp 840w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, a host appears in the tabernacle tower, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, a host appears in the tabernacle tower, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-840.jpg 840w"></picture><figcaption>through the intertwining of its tower, a host appears in a glass cylinder mounted on a golden crescent moon</figcaption>
      </figure>
      <p>The <span style="color: #e6a64d;">host</span> is one of the attributes of the saint; it is also a link with the rest of the panel that reveals other aspects of it in the form of a <span style="color: #e6a64d;">«sacred conversation»</span>.</p>
      </div>

  <!-- Page 4 --><hr>

  <div id="body-inner">
  <h3 id="conversation" class="yellow">a sacred conversation</h3>
  <p>To <a href="https://fr.wikipedia.org/wiki/Marie_(mère_de_Jésus)" title="https://fr.wikipedia.org/wiki/Marie_(mère_de_Jésus)" id="marie-mere-de-jesus" class="yellow">Mary</a>'s coronation, the presence <span style="color: #e6a64d;">two</span> by <span style="color: #e6a64d;">two</span> of <a href="#catherine-d-alexandrie" title="Catherine d'Alexandrie" class="yellow">Catherine</a> and <a href="#barbe" class="yellow">Barbara</a>, <a href="#jean-le-baptiste-2" title="Jean le Baptiste" id="jean-le-baptiste-3" class="yellow">John the Baptist</a> and <a href="#jean-l-evangeliste-3" title="Jean l'Évangéliste" id="jean-l-evangeliste-4" class="yellow">John the Evangelist</a> adds a «<ruby style="color:#e6a64d;" lang="en">sacred conversation<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="it">sacra&nbsp;conversazione</rt><rp>)</rp></ruby>», that is, a <span style="color: #e6a64d;">meeting of saints</span> around the Virgin. </p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, view of the central panel, a sacred conversation, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, view of the central panel, a sacred conversation, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1920.jpg 1920w"></picture><figcaption>view of the central panel, a sacred conversation</figcaption>
  </figure>
  <p>This spirit of <span style="color: #e6a64d;">communion</span> is reinforced by the presence on the left of the Virgin of <span style="color: #e6a64d;">a altar server</span> who plays a small <span style="color: #e6a64d;">organ</span> seated, and on the right of <span style="color: #e6a64d;">another</span> kneeling who presents her with <span style="color: #e6a64d;">a book</span>.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, details of the central panel, the two altar servers, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, details of the central panel, the two altar servers, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1920.jpg 1920w"></picture><figcaption>details of the central panel, the two altar servers</figcaption>
  </figure>
  <p>The symmetry and simplicity of the positions in relation to each other in the width matches the shape of the tryptic.</p>
  <p>The height and depth organize themselves around the <span style="color: #e6a64d;">distinction between men and women</span>: on the <span style="color: #e6a64d;">front</span> below, <span style="color: #e6a64d;">two women</span>, on the <span style="color: #e6a64d;">back</span> in the upper part, <span style="color: #e6a64d;">two men</span>.</p>
  <p>The <span style="color: #e6a64d;">unfathomability</span> and <span style="color: #e6a64d;">mystery</span> in depth and height responds to the <span style="color: #e6a64d;">symmetry</span> and <span style="color: #e6a64d;">simplicity</span> of the width positions</p>
  <p>The characters depicted appear to be from <span style="color: #e6a64d;">the same family</span> and are <span style="color: #e6a64d;">of all ages</span>:
  newborn, small child, child, teenager, young man, woman, mother, man, mature man and woman.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, details of the central panel, from left to right: similarities of the physionomy, varieties of the ages represented, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, details of the central panel, from left to right: similarities of the physionomy, varieties of the ages represented, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1920.jpg 1920w"></picture><figcaption>details of the central panel, from left to right: similarities of physionomies, varieties of the ages represented</figcaption>
  </figure>
  <p>The <span style="color: #e6a64d;">similarity</span> of the physiognomies and the <span style="color: #e6a64d;">variety</span> of ages <span style="color: #e6a64d;">unifies</span> the whole.</p>
  <p>We believe that this <span style="color: #e6a64d;">balance</span> is a remarkable feature of the society in which Memling lived and that the very important reform movement of the christian faith of that time, which historians call «<a href="https://en.wikipedia.org/wiki/Devotio_Moderna" title="https://en.wikipedia.org/wiki/Devotio_Moderna" id="devotio-moderna" class="yellow"><ruby lang="fr">modern&nbsp;devotion<rp>(</rp><rt lang="la">devotio&nbsp;moderna</rt><rp>)</rp></ruby></a>», cannot be ignored in order to better understand this point.</p>
  <p><span style="color: #999;">(a detailed historical presentation of "modern devotion" can be found <a href="#note-devotion-moderne" title="note présentation du mouvement «dévotion moderne»" id="renvoi-devotion-moderne" class="yellow">here</a>)</span></p>
  <h3 id="devotion-moderne" class="yellow">modern devotion</h3>
  <p>In Flanders, at the time of Memling, for a book of Christian piety, <span style="color: #e6a64d;"><a href="https://en.wikipedia.org/wiki/Geert_Groote" title="https://en.wikipedia.org/wiki/Geert_Groote" id="imitation-de-jesus-christ" class="yellow">“<ruby>The&nbsp;imitation<rp>(</rp><rt>De&nbsp;imitatione</rt><rp>)</rp>&nbsp;<rp>(</rp><rt>&nbsp;</rt><rp>)</rp>of<rp>(</rp><rt>&nbsp;</rt><rp>)</rp>&nbsp;<rp>(</rp><rt>&nbsp;</rt><rp>)</rp>Jesus&nbsp;Christ<rp>(</rp><rt>Christi</rt><rp>)</rp></ruby>”</a></span>, is a huge publishing success <sup id="fnref1:4"><a href="#fn:4" class="footnote-ref">1</a></sup> .</p>
  <p>One can read:</p>
  <div class="notices yellow">
  <p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="#e6a64d" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
  Man rises above the earth on two wings, <span style="color: #b37319;">simplicity</span> and <span style="color: #b37319;">purity</span>.</p>
  <p>Simplicity must be in <span style="color: #b37319;">intention</span>, and purity in <span style="color: #b37319;">affection</span>.</p>
  <p>Simplicity <span style="color: #9c6416;">seeks</span> God, purity <span style="color: #9c6416;">finds</span> him and <span style="color: #9c6416;">taste</span> him.</p>
  <p>No good work will be difficult for you if you are free of any disturbed affection.</p>
  <p>If you only want what God wants and what is useful to the others, you will enjoy <span style="color: #9c6416;">inner freedom</span>.</p>
  <p>If your heart was right, then any creature would be a <span style="color: #9c6416;">mirror of life</span> to you and a <span style="color: #9c6416;">book filled with holy instructions</span>.</p>
  <p>There is no creature so small and so vile that would not present some <span style="color: #9c6416;">image of the goodness of God</span>.</p>
  <p>If you had enough <span style="color: #9c6416;">innocence</span> and <span style="color: #9c6416;">purity</span>, you would see everything <span style="color: #9c6416;">without impediments</span>.</p>
  <p>A pure heart penetrates heaven and hell.</p>
  <p>Anyone judges of things from the outside according to what he is within himself.</p>
  <p>If there is some joy in the world, the pure heart owns it.
  And if there are anxieties and tribulations, above all they are known from bad conscience.</p>
  <p>As the iron put on fire loses its rust and becomes blazing, so the one who gives himself unreservedly to God remains his languor and changes into a new man.
  <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="#e6a64d" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
  </div>
  <p>In Memling's work, the sacred conversation functions according to these principles, in relation to the spectators as a <span style="color: #e6a64d;">«mirror of life»</span>: on one hand the patients <span style="color: #e6a64d;">«converse»</span> with the represented figures, on the other they <span style="color: #e6a64d;">«appear»</span> here and now, as inhabitants of Bruges of 1479.</p>
  <p>The work functions as also as a <span style="color: #e6a64d;">«book filled with holy instructions»</span>: <span style="color: #e6a64d;">spiritual simplicity and evidence produce</span> in a wonderful and continuous way <span style="color: #e6a64d;">material sophistication and opulence</span>.</p>
  <p><a href="#de-vos" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:1#de-vos" id="renvoi-de-vos-2" class="yellow">Dirk DE VOS</a> evokes: <span style="color: #e6a64d;">«a world of virgins dressed in brocade of gold, silk and ermine, guilded crowns and rare precious stones»</span> where <span style="color: #e6a64d;">«the child Jesus waves»</span> to the sick in an <span style="color: #e6a64d;">«atmosphere of profound serenity»</span>.
  In fact, simplicity and obviousness know no limits and lead to the divine.</p>
  <h3 id="dispositif-architectural" class="yellow">architectural structure</h3>
  <p>Memling is undoubtedly guided by this work by <a href="https://en.wikipedia.org/wiki/Jan_van_Eyck" title="https://en.wikipedia.org/wiki/Jan_van_Eyck" id="jan-van-eyck" class="yellow">Jan VAN EYCK</a> painted in 1436, which he knows and will admire in the <a href="https://en.wikipedia.org/wiki/St._Donatian's_Cathedral" title="https://en.wikipedia.org/wiki/St._Donatian%27s_Cathedral" id="cathedrale-saint-donatien" class="yellow">St. Donatian Cathedral</a>: <a href="https://en.wikipedia.org/wiki/Virgin_and_Child_with_Canon_van_der_Paele" title="https://en.wikipedia.org/wiki/Virgin_and_Child_with_Canon_van_der_Paele" id="van-der-paele" class="yellow">“<ruby lang="en">Virgin&nbsp;and&nbsp;Child&nbsp;with&nbsp;Canon&nbsp;van&nbsp;der&nbsp;Paele<rp>(</rp><rt lang="nl">Madonna&nbsp;met&nbsp;kanunnik&nbsp;Joris&nbsp;van&nbsp;der&nbsp;Paele</rt><rp>)</rp></ruby>”</a>.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-640.jpg" title="Jan VAN EYCK, “Virgin and Child with Canon van der Paele”, Groeninge Museum, Bruges (Brugge)" alt="Jan VAN EYCK, “Virgin and Child with Canon van der Paele”, Groeninge Museum, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1920.jpg 1920w"></picture><figcaption>Jan VAN EYCK, <ruby lang="en">Virgin&nbsp;and&nbsp;Child&nbsp;with&nbsp;Canon&nbsp;van&nbsp;der&nbsp;Paele<rp>(</rp><rt style="color:#999;font-size: 70%;letter-spacing: 2px;" lang="nl">Madonna&nbsp;met&nbsp;kanunnik&nbsp;Joris&nbsp;van&nbsp;der&nbsp;Paele</rt><rp>)</rp></ruby>, Musée Groeninge, Bruges</figcaption>
  </figure>
  <p>As in many of his other works, Memling removes to the apse <span style="color: #e6a64d;">walls</span>, <span style="color: #e6a64d;">windows</span> and makes <span style="color: #e6a64d;">the view to the outside continuous</span>.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, overview of the central panel, coronation of the Virgin, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, overview of the central panel, coronation of the Virgin, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1920.jpg 1920w"></picture><figcaption>overview of the central panel</figcaption>
  </figure>
  <p>Six columns marbled with red and brown are arranged in a semi-circle on a tile and doubled on the outside by a second semi-circle of fasciculated dark grey pilasters.
  Their bases are connected by the edge line of the paving which shows a polygon on the ground.</p>
  <p>The thin vertical openings between the columns overlook a <span style="color: #e6a64d;">visually continuous landscape with ruins and buildings</span>, open to the distant, horizon and infinite.</p>
  </div>

  <div id="body-inner">
  <h3 id="note">Note</h3>
  <h4 id="note-devotion-moderne">modern devotion</h4>
  <div class="notices yellow">
  <p>Born a little further north in the present Netherlands, in the Utrecht region at the end of the 14<sup style="color:#e6a64d;">th</sup> and beginning of the 15<sup style="color:#e6a64d;">th</sup> century, modern devotion was initiated by a man, <a href="https://en.wikipedia.org/wiki/Geert_Groote" title="https://en.wikipedia.org/wiki/Geert_Groote" id="gerard-groote" class="yellow">Geert Groote</a>, who criticized the piety of his time, judging it too austere and too far from the world.
  In reaction, he exhorted the believer to let Christ dwell in the depths of his heart.
  According to him, this presence of Christ is intended to produce simplicity.
  The believer can then exercise an action in conformity with the virtue to which faith calls him, in a natural way, where he is. </p>
  <hr>
  <ul>
  <li>back to the text «<a href="#renvoi-devotion-moderne" title="renvoi mouvement «dévotion moderne»">A detailed presentation of this movement can be found in note ↑</a>»</li>
  </ul>
  </div>
  <div class="footnotes">
  <hr>
  <ol>
  <li id="fn:4">
  <p>We follow the references given in Wikipedia's article (french edition) «l'Imitation de Jésus-Christ» (date: 2018 August 21st), namely:</p>
  <p>・ Yann Sordet, Un succès de librairie européen: l'Imitatio Christi (1470-1850), Paris, Bibliothèque Mazarine; Editions des cendres, 2012, 195 p. (ISBN 979-10-90853-01-0), p. 11.</p>
  <p>According to specialists, its author is a monk: <a href="https://en.wikipedia.org/wiki/Thomas_à_Kempis" title="https://en.wikipedia.org/wiki/Thomas_%C3%A0_Kempis">Thomas A KEMPIS</a>. &nbsp;<a href="#fnref1:4" rev="footnote" class="footnote-backref">↩</a></p>
  </li>
  </ol>
  </div>
  </div>

  <!-- Page 5 --><hr>

  <div id="body-inner">
  <h3 id="organisation-du-recit" class="yellow">structure of the narrative</h3>
  <p>The narrative is structured around a number of <span style="color: #e6a64d;">small scenes</span> depicting <span style="color: #e6a64d;">the two legends</span> of John the Baptist and John the Evangelist and representing the <span style="color: #e6a64d;">Crane's square</span> of Bruges linked to the St. John's Hospital.</p>
  <p>The two legends begin spatially with the <span style="color: #e6a64d;">sculpted scenes</span> above each saint in the <span style="color: #e6a64d;">column capitals</span>. </p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, details of the central panel, from left to right: the 4 capitals, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, details of the central panel, from left to right: the 4 capitals, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1920.jpg 1920w"></picture><figcaption>details of the central panel, from left to right: the 4 capitals</figcaption>
  </figure>
  <p>This way of ordering the composition, which is found in many of Memling's other works, takes up the techniques of page layout of illumination <sup id="fnref1:6"><a href="#fn:6" class="footnote-ref">1</a></sup> : the different scenes are staggered up to a very high placed horizon.</p>
  <p><span style="color: #e6a64d;">Small scenes</span> take place in the distance <span style="color: #e6a64d;">within the different frames</span> operated by the columns.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, details of the central panel, “opening on the horizon”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, details of the central panel, “opening on the horizon”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1920.jpg 1920w"></picture><figcaption>details of the central panel, “opening on the horizon”<br>on the left, scenes from the legend of John the Baptist, on the right, those of John the Evangelist</figcaption>
  </figure>
  <p>The narrative of the two legends then continues in each of the two inner panels.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, the 2 inner panels: in the foreground on the left one, John the Baptist beheaded by Herod's order, on the right one, John the Evangelist in Patmos, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, the 2 inner panels: in the foreground on the left one, John the Baptist beheaded by Herod's order, on the right one, John the Evangelist in Patmos, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1920.jpg 1920w"></picture><figcaption>the 2 inner panels: in the foreground of the left one, John the Baptist beheaded by Herod's order, on the right one, John the Evangelist in Patmos</figcaption>
  </figure>
  <p>On each panel, an episode forms <span style="color: #e6a64d;">a main scene in the foreground</span>, completed in the narrative by <span style="color: #e6a64d;">small scenes in the distance</span>.</p>
  <ul>
  <li>on the left, <span style="color: #e6a64d;">John the Baptist</span> has just been beheaded by <span style="color: #e6a64d;">Herod</span>'s order,</li>
  <li>on the right, <span style="color: #e6a64d;">John the Evangelist</span> receives the «unveiling» of the text of the Apocalypse in <span style="color: #e6a64d;">Patmos</span>.</li>
  </ul>
  <p>The view of the <ruby style="color:#e6a64d;" lang="en">Crane's&nbsp;square<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 1px;" lang="nl">Kraanplaats</rt><rp>)</rp></ruby> and <span style="color: #e6a64d;">the St. John church</span>, in the background to the right of the drapery of honour behind virgin Mary, behind John the Evangelist, refers directly to the <span style="color: #e6a64d;">religious</span> who run the hospital that <span style="color: #e6a64d;">commissioned the work</span> and to <span style="color: #e6a64d;">the history</span> of the institution.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, view of Crane's square and the St. John church, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, détail du panneau central, vue de la place de la Grue et l'église saint-Jean, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1920.jpg 1920w"></picture><figcaption>detail of the central panel, view of Crane's square and the St. John church</figcaption>
  </figure>
  <p><span style="color: #e6a64d;">Two brothers from the hospital</span> are represented <span style="color: #e6a64d;">measuring the imported bordeaux wine</span> arriving in Bruges.</p>
  <p>This reminds us that the hospital was entrusted by the city around 1300 with a <span style="color: #e6a64d;">communal charge</span>, the <span style="color: #e6a64d;">«right to gauge»</span> from which the institution had its income.</p>
  </div>
        
  <div id="body-inner">
  <div class="footnotes">
  <hr>
  <ol>
  <li id="fn:6">
  <p>«at the time when the artist settled in Bruges, the city was one of the main centres of production of illuminated books in the burgundian Netherlands (...)</p>
  <p>Memling included a miniaturist among his Bruges relations: <a href="https://en.wikipedia.org/wiki/Willem_Vrelant" title="https://en.wikipedia.org/wiki/Willem_Vrelant">Willem Vrelant</a>.
  At the head of the city's most prolific pharmacy, Vrelant was, like Memling, an immigrant.</p>
  <p>Originally from Utrecht, he was mentioned in the Bruges booksellers' guild from 1454 until his death in 1481.
  Both living in Sint-Jorisstraat, Vrelant and Memling were almost neighbours (...)</p>
  <p>From the point of view of a visually convincing spatial representation, the relationship between the two figures in the foreground and the rest of the table (... an) inconsistency governs the relationship between the main figure and the wood in the intermediate plane (...)</p>
  <p>From one work to another, we find the same cumulative layering of the different zones of the landscape up to a horizon placed very high (...) in Vrelant's work»</p>
  <p>(quoted from Philippe LORENTZ's book referenced in the <a href="/docs/en/bruges/hopital-saint-jean/saint-jean#lorentz" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean#lorentz" id="renvoi-lorentz-2" class="yellow">bibliography</a>).&nbsp;<a href="#fnref1:6" rev="footnote" class="footnote-backref">↩</a></p>
  </li>
  </ol>
  </div>
  </div>

  <!-- Page 6 --><hr>

  <div id="body-inner">
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, the 2 inner panels: in the foreground on the left, John the Baptist beheaded by Herod's order, on the right, John the Evangelist in Patmos, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, the 2 inner panels: in the foreground on the left, John the Baptist beheaded by Herod's order, on the right, John the Evangelist in Patmos, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1920.jpg 1920w"></picture><figcaption>the 2 inner panels: in the foreground on the left, John the Baptist beheaded by Herod's order, on the right, John the Evangelist in Patmos</figcaption>
  </figure>
  <h3 id="legendes" class="yellow">legends of john the baptist and john the evangelist</h3>
  <p>We follow here each of <span style="color: #e6a64d;">two stories</span> on which Memling probably based himself as <a href="https://en.wikipedia.org/wiki/Jacobus_da_Varagine" title="https://en.wikipedia.org/wiki/Jacobus_da_Varagine" id="jacques-de-voragine" class="yellow">Jacobus da Varagine</a> reports them in the <a href="https://en.wikipedia.org/wiki/Golden_Legend" title="https://en.wikipedia.org/wiki/Golden_Legend" id="legende-doree" class="yellow">Golden Legend</a>.</p>
  <p>For ease of reference, these texts have been placed after the description <a href="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:18" title="https://francois-vidit.com/docs/fr/saint-jean/page:18" class="yellow">here</a> and <a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:19" title="https://francois-vidit.com/docs/ja/saint-jean/page:19" class="yellow">here</a>.</p>
  <h4 id="legende-de-jean-le-baptiste" class="yellow">legend of john the baptist</h4>
  <p>We begin with John the Baptist who, in chronology, precedes John the Evangelist.</p>
  <p>In the upper left corner of the background of the central panel and on the left inner panel appear scenes of his <span style="color: #e6a64d;">life</span> and <span style="color: #e6a64d;">martyrdom</span>.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, details of the central panel, “opening to the distance of the left half”: scenes from the legend of John the Baptist, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, details of the central panel, “opening to the distance of the left half”: scenes from the legend of John the Baptist, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1920.jpg 1920w"></picture><figcaption>details of the central panel, “opening to the distance of the left half”: scenes from the legend of John the Baptist</figcaption>
  </figure>
  <p>Historically, John is described as a Jewish <span style="color: #e6a64d;">preacher</span> in <a href="https://en.wikipedia.org/wiki/Galilee" title="https://en.wikipedia.org/wiki/Galilee" id="galilee" class="yellow">Galilee</a> of this time of <a href="https://en.wikipedia.org/wiki/Historical_Jesus" title="https://en.wikipedia.org/wiki/Historical_Jesus" id="jesus-de-nazareth" class="yellow">Jesus of Nazareth</a> according to the testimony of <a href="https://en.wikipedia.org/wiki/Josephus" title="https://en.wikipedia.org/wiki/Josephus" id="flavius-josephe" class="yellow">Flavius Josephus</a>, a 1<sup style="color:#555;">st</sup> century roman jewish historian (<span style="color: #999;"><a href="https://en.wikipedia.org/wiki/Antiquities_of_the_Jews" title="https://en.wikipedia.org/wiki/Antiquities_of_the_Jews" id="antiquites-judaiques" class="yellow">“Jewish Antiquities”</a>, book XVIII, chap. 5, 118).  </span></p>
  <p>Galilee at that time was a province of the roman empire that experienced many revolts.</p>
  <p>Its population, mainly Jewish, is very religious;
  the biblical writings announce the coming of an envoy of god whose action will enable the jewish people to recover their independence and religious organization, in particular to rebuild <a href="https://en.wikipedia.org/wiki/Solomon's_Temple" title="https://en.wikipedia.org/wiki/Solomon'%27's_Temple" id="temple-de-salomon" class="yellow">
  Solomon's temple</a> in Jerusalem.</p>
  <p>In terms of christian faith, <span style="color: #e6a64d;"></span>John is, according to Luke's gospel <span style="color: #999;">(chapter 1:5-25)</span>, <span style="color: #e6a64d;">the son of</span> <a href="https://en.wikipedia.org/wiki/Zechariah_(priest)" title="https://en.wikipedia.org/wiki/Zechariah_(priest)" id="zaccharie" class="yellow">Zechariah</a>, an old jewish priest from the galilean countryside to whom god himself announces by <a href="https://en.wikipedia.org/wiki/Gabriel" title="https://en.wikipedia.org/wiki/Gabriel" id="archange-gabriel" class="yellow">the archangel Gabriel</a> the birth of John when he was chosen by chance to go to Jerusalem and prays in the temple.</p>
  <p>That's how Memling represents him on the left capital.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “the appearance of the Archangel Gabriel in Zechariah”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “the appearance of the Archangel Gabriel in Zechariah”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1920.jpg 1920w"></picture><figcaption>detail of the central panel, column capital, “the appearance of the Archangel Gabriel in Zechariah”. The archangel announces to him the imminent birth of a son, he loses his ability to speak</figcaption>
  </figure>
  <p>The text indicates that because of that Zechariah loses his ability to speak.</p>
  <p>His birth is represented on the capital placed on the right.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “Birth of John the Baptist”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “Birth of John the Baptist”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1920.jpg 1920w"></picture><figcaption>detail of the central panel, column capital, “Birth of John the Baptist”</figcaption>
  </figure>
  <p>The name of this son, «John», is also one of the issues in the story <span style="color: #999;">(Luke 1:59-63)</span>:</p>
  <p>«On the eighth day they came for the circumcision of the child, and they wanted to call him Zechariah, after his father's name. But his mother spoke up and said:
  <span style="color: #e6a64d;">"No, his name will be John."</span>
  We tell him:
  <span style="color: #e6a64d;">"No one in your family has that name!"</span> <span style="color: #999;">(…)</span>.
  Zechariah had a tablet given to him and wrote on it:
  <span style="color: #e6a64d;">"John is his name."</span>»</p>
  </div>

  <!-- Page 7 --><hr>

  <div id="body-inner">
  <p>From the point of view of faith, <span style="color: #e6a64d;">John the Baptist</span> therefore <span style="color: #e6a64d;">comes into the world according to god's will</span>.</p>
  <p>He then leads an exemplary life as an ascetic «in the desert» <span style="color: #999;">(Luke 1:80)</span>.
  Memling transposes this scene into the forest.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “John the Baptist praying in the forest”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “John the Baptist praying in the forest”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1920.jpg 1920w"></picture><figcaption>detail of the central panel, “John the Baptist praying in the forest”</figcaption>
  </figure>
  <p>We also see him «proclaiming a baptism of conversion for the forgiveness of sins» <span style="color: #999;">(Luke 3:03)</span>.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “John the Baptist proclaiming a baptism of conversion for the forgiveness of sins”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “John the Baptist proclaiming a baptism of conversion for the forgiveness of sins”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1920.jpg 1920w"></picture><figcaption>detail of the central panel, “John the Baptist proclaiming a baptism of conversion for the forgiveness of sins”</figcaption>
  </figure>
  <p>John innovates in the judaism of his time:
  he advocates the forgiveness of sins no longer through the sacrifice of animals in the temple by cremation, but by <span style="color: #e6a64d;">«baptism»</span>, that is, according to the etymology of the word, <span style="color: #e6a64d;">«immersion»</span> in water.</p>
  <p>According to the biblical writings, he <span style="color: #e6a64d;">announces the coming of god's envoy</span> in the person of <a href="https://en.wikipedia.org/wiki/Historical_Jesus" title="https://en.wikipedia.org/wiki/Historical_Jesus" class="yellow">Jesus of Nazareth</a>, one of his contemporaries.</p>
  <p>He recognizes it by a baptism in the waters of the <a href="https://en.wikipedia.org/wiki/Jordan_River" title="https://en.wikipedia.org/wiki/Jordan_River" id="jourdain" class="yellow">Jordan</a>: this scene appears at the top of the left inner panel.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/bapt%C3%A8me-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the inner left panel, “John the Baptist baptizing Jesus on the banks of the Jordan River”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the inner left panel, “John the Baptist baptizing Jesus on the banks of the Jordan River”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1920.jpg 1920w"></picture><figcaption>detail of the inner left panel, “John the Baptist baptizing Jesus on the banks of the Jordan River”</figcaption>
  </figure>
  <p>On the other bank, <span style="color: #e6a64d;">John the Baptist</span> presents Jesus with the words <span style="color: #e6a64d;">«</span><ruby style="color:#e6a64d;" lang="en">This is the lamb of god<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="la">Ecce&nbsp;agnus&nbsp;dei</rt><rp>)</rp></ruby><span style="color: #e6a64d;">»</span> to his first two disciples <a href="https://en.wikipedia.org/wiki/Andrew_the_Apostle" title="https://en.wikipedia.org/wiki/Andrew_the_Apostle" id="andre" class="yellow">Andrew</a> and <a href="https://en.wikipedia.org/wiki/John_the_Apostle" title="https://en.wikipedia.org/wiki/John_the_Apostle" id="jean-l-apotre" class="yellow">John (the Apostle)</a>; they join him.</p>
  <p>From that point on, his story is tragic:
  the tetrarch of Galilee and Perea, <a href="https://en.wikipedia.org/wiki/Herod_Antipas" title="https://en.wikipedia.org/wiki/Herod_Antipas" id="herode-antipas" class="yellow">Herod Antipas</a> married «<a href="https://en.wikipedia.org/wiki/Herod_II" title="https://en.wikipedia.org/wiki/Herod_II" id="herode-boethos" class="yellow">his brother Philip's wife</a> (<a href="https://en.wikipedia.org/wiki/Herodias" title="https://en.wikipedia.org/wiki/Herodias" id="herodiade">Herodias</a>)» <span style="color: #999;">(Mark chapter 6,17)</span>;
  As the jewish faith regards any marriage with his brother's wife as <span style="color: #e6a64d;">«defiling»</span> and <span style="color: #e6a64d;">forbids</span> it <span style="color: #999;">(Leviticus chap. 18:16; chap. 20:21)</span>, John publicly condemns it.</p>
  <p><span style="color: #e6a64d;">Herod feared</span> that this would provoke «<span style="color: #e6a64d;">a revolt</span>, the crowd seeming ready to follow all the advice of this man.
  He therefore prefers to take him before any trouble occurs because of him, rather than to have to repent later if a movement takes place» <span style="color: #999;">(“Jewish Antiquities”, Book XVIII, chap. 5,118)</span> <sup id="fnref1:2"><a href="#fn:2" class="footnote-ref">1</a></sup>.</p>
  <p>In the event of unrest caused by John's supporters, Herod had to answer to the roman authorities, who could dismiss him:</p>
  <p>he gives <span style="color: #e6a64d;">«the order to arrest John»</span> <span style="color: #999;">(Mark chapter 6,17)</span>.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “Arrest of John the Baptist by order of Herod Antipas”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “Arrest of John the Baptist by order of Herod Antipas”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1920.jpg 1920w"></picture><figcaption>detail of the central panel, “Arrest of John the Baptist by order of Herod Antipas”</figcaption>
  </figure>
  <p>On the central panel above the white lamb, <span style="color: #e6a64d;">John was forcibly taken</span> to the prison on the left side of the current city of <a href="https://en.wikipedia.org/wiki/Machaerus" title="https://en.wikipedia.org/wiki/Machaerus" id="macheronte" class="yellow"><ruby style="color:#e6a64d;" lang="en">Machaerus<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="la">μάχαιρα</rt><rp>)</rp></ruby></a>, whose ethymology in ancient greek means «sword» and which is located in present-day Jordan.</p>
  </div>

  <div id="body-inner">
  <div class="footnotes">
  <hr>
  <ol>
  <li id="fn:2">
  <p>for information, this quote is in the past, I'm transposing it to the present.&nbsp;<a href="#fnref1:2" rev="footnote" class="footnote-backref">↩</a></p>
  </li>
  </ol>
  </div>
  </div>

  <!-- Page 8 --><hr>

  <div id="body-inner">
  <p>The action continues on the left inner panel.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, view of the left inner panel, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, view of the left inner panel, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1920.jpg 1920w"></picture><figcaption>the left inner panel</figcaption>
  </figure>
  <p>To succeed in making John die without causing any troubles among his supporters, <span style="color: #e6a64d;">Herod imagined a staging</span>:
  «on his birthday», he organized «a dinner for his dignitaries, for the chiefs of the army and for the notables of Galilee.</p>
  <p>Herodiade <a href="https://en.wikipedia.org/wiki/Salome" title="https://en.wikipedia.org/wiki/Salome" id="salome" class="yellow">Salome</a>'s daughter» makes «her entrance» and dances.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the left inner panel, “Salome's Dance”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the left inner panel, “Salome's Dance”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1920.jpg 1920w"></picture><figcaption>detail of the left inner panel, “Salome's Dance”</figcaption>
  </figure>
  <p>The <span style="color: #e6a64d;">“Salome's Dance”</span> takes place in a tower of the palace in the upper left corner of the left inner panel.
  Above, statues set in niches represent a naked man between two naked women, pagan figures who allude to Herod's adulterous behaviour.</p>
  <p>Herod looks as if he liked his dance and, <span style="color: #e6a64d;">to avoid responsibility for John's death, says</span>:</p>
  <p>«"<span style="color: #e6a64d;">Ask me what you want</span>, and I'll give it to you, even if it's half my kingdom" <span style="color: #999;">(Mark, chap. 6:21-22)</span>.</p>
  <p>Salome goes out «to tell her mother, <span style="color: #e6a64d;">"What am I going to ask for?"</span>» Herodias replied: «<span style="color: #e6a64d;">"The head of John, the one who baptises"</span>. Immediately the girl» hastened «to return to the king, and» made him «this request: <span style="color: #e6a64d;">"I want you to give me immediately on a plate the head of John the Baptist"</span>. <span style="color: #999;">(Mark, chap. 6, 24-29)</span></p>
  <p>The proof that this whole story is indeed a smokescreen is that if Salome asks Herod <span style="color: #e6a64d;">«the death of his father <a href="https://en.wikipedia.org/wiki/Herod_II" title="https://en.wikipedia.org/wiki/Herod_II" id="herode-boethos-2" class="yellow">Philip</a> or her mother <a href="https://en.wikipedia.org/wiki/Herodias" title="https://en.wikipedia.org/wiki/Herodias" id="herodiade-2" class="yellow">Herodias</a>»</span>, Herod cannot consent to it <span style="color: #999;">(Golden Legend chap. 121,I. <sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">1</a></sup> )</span>.  </p>
  <p>A guard is going to «behead John in the prison» <span style="color: #999;">(Mark, chap. 6,22-23)</span>.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the left inner panel, “Decollation of John the Baptist”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the left inner panel, “Decollation of John the Baptist”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1920.jpg 1920w"></picture><figcaption>detail of the left inner panel, “Decollation of John the Baptist”</figcaption>
  </figure>
  <div class="footnotes">
  <hr>
  <ol>
  <li id="fn:1">
  <p>words of <a href="https://en.wikipedia.org/wiki/Jerome" title="https://en.wikipedia.org/wiki/Jerome" id="saint-jerome" class="yellow">St. Jerome</a> reported by Jacobus da Varagine.&nbsp;<a href="#fnref1:1" rev="footnote" class="footnote-backref">↩</a></p>
  </li>
  </ol>
  </div>
  </div>

  <!-- Page 9 --><hr>

  <div id="body-inner">
  <p>Memling enlarged the scene in the foreground of the left panel in the <span style="color: #e6a64d;">inner courtyard</span>, the execution site of the prison, which is accessed by a <span style="color: #e6a64d;">staircase</span> from the palace;
  on the left are the two disciples <a href="https://en.wikipedia.org/wiki/Andrew_the_Apostle" title="https://en.wikipedia.org/wiki/Andrew_the_Apostle" id="andre-2" class="yellow">Andrew</a> and <a href="https://en.wikipedia.org/wiki/John_the_Apostle" title="https://en.wikipedia.org/wiki/John_the_Apostle" id="jean-l-apotre-2" class="yellow">John (the Apostle)</a>.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the left inner panel, “the head of John the Baptist”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the left inner panel, “the head of John the Baptist”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1920.jpg 1920w"></picture><figcaption>detail of the left inner panel, “the head of John the Baptist”</figcaption>
  </figure>
  <p><span style="color: #e6a64d;">The executioner</span> is represented from behind placing <span style="color: #e6a64d;">the head in the plate</span> presented to him by a barely moved <a href="https://en.wikipedia.org/wiki/Salome" title="https://en.wikipedia.org/wiki/Salome" id="salome-3" class="yellow">Salome</a>.</p>
  <p>Art historians have identified in the positions of the executioner and Salome <span style="color: #e6a64d;">a reuse by Memling of a similar scene</span> in a work by his master when he was the assistant of this painter in Brussels, <a href="https://en.wikipedia.org/wiki/Rogier_van_der_Weyden" title="https://en.wikipedia.org/wiki/Rogier_van_der_Weyden" id="rogier-van-der-weyden" class="yellow">Rogier VAN DER WEYDEN</a>.
  This is the left inner panel of the <span style="color: #e6a64d;">“Tryptic of St. John”</span> painted around 1450-55 in the <a href="https://en.wikipedia.org/wiki/Gemäldegalerie,_Berlin" title="https://en.wikipedia.org/wiki/Gem%C3%A4ldegalerie,_Berlin" id="gemaldegalerie" class="yellow"><ruby lang="en">Painting&nbsp;Gallery<rp>(</rp><rt lang="de">Gemäldegalerie</rt><rp>)</rp></ruby></a> of the <a href="https://en.wikipedia.org/wiki/Berlin_State_Museums" title="https://en.wikipedia.org/wiki/Berlin_State_Museums" id="musees-d-etat-de-berlin" class="yellow"><ruby lang="fr">Berlin&nbsp;State&nbsp;Museums<rp>(</rp><rt lang="de">Staatliche&nbsp;Museen&nbsp;zu&nbsp;Berlin</rt><rp>)</rp></ruby></a> <span style="color: #999;">(inv. no. 534B)</span>.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.jpg" title="Rogier VAN DER WEYDEN, “Triptych of saint John”, detail of the left inner panel, “Decollation of John the Baptist”, Painting Gallery, Berlin State Museums, Berlin" alt="Rogier VAN DER WEYDEN, “Triptych of saint John”, detail of the left inner panel, “Decollation of John the Baptist”, Painting Gallery, Berlin State Museums, Berlin" class="class-40-img" ean="" le="" baptistesizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1920.jpg 1920w"></picture><figcaption>Rogier VAN DER WEYDEN, “Triptych of saint John”, detail of the left inner panel, “Decollation of John the Baptist”, Painting Gallery, Berlin State Museums</figcaption>
  </figure>
  <p>Mark's account continues <span style="color: #999;">(Mark, 29)</span>: <span style="color: #e6a64d;">«When John's disciples heard this, they came and took his body and laid it in a tomb»</span>.</p>
  <p>She was reportedly taken far from the territories controlled by Herod Antipas, to the West Bank to <ruby style="color:#e6a64d;" lang="en">Sebastea<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="grc">Σεβαστή</rt><rp>)</rp></ruby>, the current village of <a href="https://en.wikipedia.org/wiki/Sebastia,_Nablus" title="https://en.wikipedia.org/wiki/Sebastia,_Nablus" id="sebastia" class="yellow"><ruby lang="fr">Sebastia<rp>(</rp><rt lang="ar">سبسطية</rt><rp>)</rp></ruby></a>, and buried with the prophets <a href="https://en.wikipedia.org/wiki/Elisha" title="https://en.wikipedia.org/wiki/Elisha" id="elisee" class="yellow">Elisha</a> and <a href="https://en.wikipedia.org/wiki/Obadiah" title="https://en.wikipedia.org/wiki/Obadiah" id="abdias" class="yellow">Obadiah</a>.</p>
  <p>On the left of the central panel, on the right, behind John the Baptist, Memling revealed the last scene of his legend, namely that in order to fight the Christian faith and stop the miracles that were happening at his burial site, <a href="https://en.wikipedia.org/wiki/Julian_(emperor)" title=" https://en.wikipedia.org/wiki/Julian_(emperor)" id="julien-l-apostat" class="yellow">Emperor Julian the Apostate</a> ordered the body to be dug up, burned and scattered across the fields.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “the body of John the Baptist dug up and burned on the order of Emperor Julian the Apostate”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “the body of John the Baptist dug up and burned on the order of Emperor Julian the Apostate”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1920.jpg 1920w"></picture><figcaption>detail of the central panel, “the body of John the Baptist dug up and burned on the order of Emperor Julian the Apostate”</figcaption>
  </figure>
  <p>His head appears lower down in <span style="color: #e6a64d;">the opening of the wall</span>, behind <span style="color: #e6a64d;">a stone</span>.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “the head of John the Baptist in the opening of a wall”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “the head of John the Baptist in the opening of a wall”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1920.jpg 1920w"></picture><figcaption>detail of the central panel, “the head of John the Baptist in the opening of a wall”</figcaption>
  </figure>
  <p>According to legend, the head was buried separately by <span style="color: #e6a64d;">a potter from the city of Emesse</span>, the current <a href="https://en.wikipedia.org/wiki/Homs" title="https://en.wikipedia.org/wiki/Homs" id="homs" class="yellow"><ruby lang="en">Homs<rp>(</rp><rt lang="ar">حمص</rt><rp>)</rp></ruby></a> in Syria, and appeared to Saint Marcellus <sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">1</a></sup> who discovered it by following a star <span style="color: #999;">(Golden Legend chap. 121,III.)</span>.</p>
  <div class="footnotes">
  <hr>
  <ol>
  <li id="fn:1">
  <p>Saint Marcellus of Apamea in Syria (died in 389). Magistrate of the city, in the year 375, he left his wife and children, and devoted himself to a monastic life, was elected bishop of Apamea, Syria. He died murdered by the heathens while watching over the destruction of a temple of idols according to an edict of Emperor Theodosius. Celebrated on August 14th.&nbsp;<a href="#fnref1:1" rev="footnote" class="footnote-backref">↩</a></p>
  </li>
  </ol>
  </div>
  </div>

  <!-- Page 10 --><hr>

  <div id="body-inner">
  <h4 class="yellow" id="legend-of-john-the-evangelist">legend of john the evangelist</h4>
  <p>On the central panel in the upper part on the right of the background appear some scenes of the legend of John the Evangelist.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “opening on the distance of the right half: scenes from the legend of John the Evangelist”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “opening on the distance of the right half: scenes from the legend of John the Evangelist”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1920.jpg 1920w"></picture><figcaption>detail of the central panel, “opening on the distance of the right half: scenes from the legend of John the Evangelist”</figcaption>
  </figure>
  <p>Unlike John the Baptist, historically <span style="color: #e6a64d;">there is no historical document</span> other than those of the Christian faith.</p>
  <p>According to these documents and modern specialists, <span style="color: #e6a64d;">John the Evangelist can designate</span>:</p>
  <ol>
  <li><a href="https://fr.wikipedia.org/wiki/Jean_(apôtre)" title="https://fr.wikipedia.org/wiki/Jean_(apôtre)" id="jean-l-apotre" class="yellow">John the «Apostle»</a> who appears in the gospels of Mark, Luke, Matthew and the Acts of the Apostles,</li>
  <li><a href="https://fr.wikipedia.org/wiki/Évangile_selon_Jean#Le_«_disciple_bien-aimé_»" title="https://fr.wikipedia.org/wiki/Évangile_selon_Jean#Le_«_disciple_bien-aimé_»" id="disciple-que-jesus-aimait" class="yellow">the disciple whom Jesus loved</a> to write the gospel called «of John»,</li>
  <li><a href="https://fr.wikipedia.org/wiki/Jean_de_Patmos" title="https://fr.wikipedia.org/wiki/Jean_de_Patmos" id="jean-de-patmos" class="yellow">John «of Patmos»</a> writer of the Apocalypse.</li>
  </ol>
  <h5 id="jean-l-apotre-2" class="yellow">john the «apostle»</h5>
  <p><a href="#aristodeme" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:8#aristodeme" id="jean-l-apotre-3" class="yellow">John «the Apostle»</a> is <span style="color: #e6a64d;">one of the two «sons of <a href="https://fr.wikipedia.org/wiki/Zébédée" title="https://fr.wikipedia.org/wiki/Zébédée" id="zebedee" class="yellow">Zebedee</a>»</span> <span style="color: #999;">(Mark 3:16-19, Matthew 10:2-5 and Luke 6:13-16)</span>.
  His brother is <a href="https://fr.wikipedia.org/wiki/Jacques_de_Zébédée" title="https://fr.wikipedia.org/wiki/https://fr.wikipedia.org/wiki/Jacques_de_Zébédée" id="jacques-le-majeur" class="yellow">James, known as «the Greater»</a>.
  Jesus called them the <span style="color: #e6a64d;">«sons of thunder»</span> <span style="color: #999;">(Mark 3:17)</span>.
  Like his brother and two other apostles, <a href="https://fr.wikipedia.org/wiki/Pierre_(apôtre)" title="https://fr.wikipedia.org/wiki/Pierre_(apôtre)" id="simon-pierre" class="yellow">Simon Peter</a> and <a href="https://fr.wikipedia.org/wiki/André_(apôtre)" title="https://fr.wikipedia.org/wiki/André_(apôtre)" id="simon-pierre" class="yellow">Andrew</a>, he is <span style="color: #e6a64d;">one of the fishermen of Lake Tiberias</span> who abandoned his nets to follow Jesus.</p>
  <p>From there, he witnessed the <a href="https://fr.wikipedia.org/wiki/Transfiguration_(christianisme)" title="https://fr.wikipedia.org/wiki/Transfiguration_(christianisme)" id="transfiguration" class="yellow">transfiguration of Jesus</a> <span style="color: #999;">(Mark 9.2, Matthew 17.1 and Luke 9.28)</span>, the <a href="https://fr.wikipedia.org/wiki/Guérison_de_la_belle-mère_de_Pierre" title="https://fr.wikipedia.org/wiki/Guérison_de_la_belle-mère_de_Pierre" id="guerison-de-la-belle-mere-de-pierre" class="yellow">healing of Simon Peter's mother-in-law</a> <span style="color: #999;">(Mark 1.29)</span>, the <a href="https://fr.wikipedia.org/wiki/Fille_de_Jaïre" title="https://fr.wikipedia.org/wiki/Fille_de_Jaïre" id="fille-de-jaire" class="yellow">healing of Jairus' daughter</a> the ruler of the synagogue <span style="color: #999;">(Mark 5.37 and Luke 8.51)</span>, was present with his brother when Jesus was tempted to renounce in the <a href="https://fr.wikipedia.org/wiki/Agonie_dans_le_jardin_des_oliviers" title="https://fr.wikipedia.org/wiki/Agonie_dans_le_jardin_des_oliviers" id="agonie-dans-le-jardin-des-oliviers" class="yellow">Garden of Gethsemane</a> <span style="color: #999;">(Mark 13.3)</span>, but he fell asleep <span style="color: #999;">(Mark 14.33)</span>.</p>
  <h5 id="disciple-que-jesus-aimait-2" class="yellow">the disciple whom jesus loved</h5>
  <p><a href="https://fr.wikipedia.org/wiki/Évangile_selon_Jean#Le_«_disciple_bien-aimé_»" title="https://fr.wikipedia.org/wiki/Évangile_selon_Jean#Le_«_disciple_bien-aimé_»" id="disciple-que-jesus-aimait-3" class="yellow">The disciple whom Jesus loved</a> appears at the end of the gospel called «of John» <span style="color: #999;">(John 21:20;24-25)</span>:</p>
  <p>«having turned around, Peter saw, following them, <span style="color: #e6a64d;">the disciple whom Jesus loved</span>. <span style="color: #999;">(…)</span>
  It is <span style="color: #e6a64d;">this disciple who testifies</span> to these things <span style="color: #e6a64d;">and who wrote them</span>».</p>
  <p>There is nothing in the text that allows us to call him «John», so the designation «Gospel of John» cannot be right: it should be the «Gospel of the disciple whom Jesus loved».</p>
  <p>He is an extraordinary character: he is a disciple of Jesus among others with whom every reader can identify, he is loved by Jesus himself and therefore finds himself closer to him than anyone else.</p>
  <p>He does not hesitate, just after the previous excerpt, to give his opinion:</p>
  <p>«There are many other things that Jesus did; and if we had to write each of them, <span style="color: #e6a64d;"><span style="text-decoration: underline;">I</span> think</span> the whole world would not be enough to hold the books we would write» <span style="color: #999;">(John 21:25)</span>.</p>
  <p>Jesus himself, on the occasion of a question from Peter, expresses a wish for his destiny at the Last Supper <span style="color: #999;">(John 21:21-23)</span>:
  «Peter, seeing this disciple, said to Jesus:
  «And what will happen to him, lord?»
  Jesus answered him:
  «If I want him to stay until I come, what do you care?»</p>
  <p>It is also he who «lay on the womb of Jesus», he asks him who will betray him <span style="color: #999;">(John 13:23-26)</span>.</p>
  <p>At the crucifixion, Jesus entrusted his own mother to him, saying: «Woman, behold your son», then to him: «Behold your mother» <span style="color: #999;">(John 19:26-27)</span>.</p>
  <p>When Mary Magdalene discovered the empty tomb, she ran to tell the «beloved disciple» and Peter; he was the first to reach the tomb <span style="color: #999;">(John 20:2-8)</span>.</p>
  <p>He was the first to recognize Jesus at Lake Tiberias after his resurrection <span style="color: #999;">(John 21:7)</span>.</p>
  <h5 id="jean-de-patmos-2" class="yellow">john of patmos</h5>
  <p><a href="https://fr.wikipedia.org/wiki/Jean_de_Patmos" title="https://fr.wikipedia.org/wiki/Jean_de_Patmos" id="jean-de-patmos-3" class="yellow">John of Patmos</a> appears at the beginning of the text of Apocalypse <span style="color: #999;">(Rev 1:1-9)</span> which presents him as a <span style="color: #e6a64d;">«servant» to whom god made known</span> <span style="color: #999;">(…)</span> «by sending his angel»[/color] <span style="color: #999;">(…)</span> «what must soon happen» <span style="color: #999;">(…)</span> «to the seven churches in Asia Minor».</p>
  <h5 id="jean-de-patmos-2" class="yellow">john the evangelist in relation to the golden legend</h5>
  <p>The representation of John the Evangelist broadly follows the account established by Jacobus da Varagine in <span style="color: #e6a64d;">Chapters 9</span> and <span style="color: #e6a64d;">65</span> of the Golden Legend, texts that we reproduce for information <a href="#aristodeme" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:8#aristodeme" class="yellow">here</a>.</p>
  <p>However, unlike Jacobus da Varagine who considers the three John <span style="color: #999;">(John the Apostle, the disciple whom Jesus loved, John of Patmos)</span> as one and the same person, Memling gives a physical appearance to John the Apostle <span style="color: #999;">(left inner panel)</span> in comparison to John the Evangelist.</p>
  <h5 id="jean-a-la-porte-latine" class="yellow">john the evangelist scalded by order of emperor domitian in front of the latin gate in rome and departure for exile in the island of patmos</h5>
  <p>The story starts on the central panel:</p>
  <p>«<span style="color: #e6a64d;">John</span> was preaching at Ephesus when he was arrested by the proconsul and invited to sacrifice to the gods.
  As he refused, he was thrown into prison; a letter was then sent to the <span style="color: #e6a64d;">Emperor Domitian</span> designating him as a sacrilegious magician, contender of the gods and worshipper of the Crucified.
  By order of Domitian, John was then taken to Rome where, after having derisively cut his hair, in front of the <span style="color: #e6a64d;">gate</span> of the city called «<span style="color: #e6a64d;">Latin</span>», he was flogged and thrown into a cauldron of boiling oil under which a fiery fire was burning» <span style="color: #999;">(chap. 65)</span> <sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">1</a></sup> .</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “Salding of John the Evangelist by order of Emperor Domitian in front of the Latin Gate in Rome and departure for exile in the island of Patmos”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, “Salding of John the Evangelist by order of Emperor Domitian in front of the Latin Gate in Rome and departure for exile in the island of Patmos”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1920.jpg 1920w"></picture><figcaption>detail of the central panel, “Salding of John the Evangelist by order of Emperor Domitian in front of the Latin Gate in Rome and departure for exile in the island of Patmos”</figcaption>
  </figure>
  <p>«But John felt no pain and came out completely unscathed, not burnt but anointed.
  In this view, Domitian was stunned and feared to put him to death.
  So, in this place, Christians have built a church, and today is solemnly celebrated as that of John's martyrdom.».</p>
  <p>The representation of Memling shows on the horizon on the left, this <span style="color: #e6a64d;">church</span>, on the right, the <span style="color: #e6a64d;">Colosseum of Rome</span> and the <span style="color: #e6a64d;">Latin Gate</span>.</p>
  <p>«The emperor, realizing that he was not renouncing preaching, exiled him to <span style="color: #e6a64d;">the island of Patmos</span>», <span style="color: #999;">(the departure for Patmos appears in the middle: some men board a boat)</span> «where, in solitude, he wrote the <span style="color: #e6a64d;">Apocalypse» <span style="color: #999;"></span>(chap. 9)</span>.</p>
  <p>The right inner panel is entirely dedicated to the visions John had in Patmos <sup id="fnref1:2"><a href="#fn:2" class="footnote-ref">2</a></sup>.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “John the Evangelist in Patmos”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “John the Evangelist in Patmos”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “John the Evangelist in Patmos”<br>«With that, I fell into ecstasy. 
    I saw a throne standing in heaven (…) In front of the throne was a sea as transparent as crystal» (Apocalypse 4.2;6)</figcaption>
  </figure>
  <p>Memling represents the apostle, sitting on a circular rock, the island of Patmos in the middle of the Aegean Sea.</p>
  <p>He holds a feather and a penknife in his hand, and on his knees one can see a notebook.
  John is represented when he has not yet even begun to write, <span style="color: #e6a64d;">in the blink of an eye</span>, at the very moment when he is seized by the <span style="color: #e6a64d;">«Apocalypse»</span>, which in ancient Greek means <span style="color: #e6a64d;">«unveiling»</span>: these visions appear above him in the sky, on the water and on the nearby land on all the rest of the shutter.  </p>
  <p>We choose to follow John's own way to tell <sup id="fnref1:3"><a href="#fn:3" class="footnote-ref">3</a></sup> the unveiling in the text <span style="color: #999;">(Apocalypse 4:2-6)</span>, which begins at the top left of the panel: this way it is possible to compare the text with Memling's representation of it.</p>
  <p><sup>02</sup>
  «With that, I fell into <span style="color: #e6a64d;">ecstasy</span> and I saw a <span style="color: #e6a64d;">throne</span> standing in <span style="color: #e6a64d;">heaven</span>, and <span style="color: #e6a64d;">the one</span> who was sitting on the throne,</p>
  <p><sup>03</sup>
  and the one sitting there looked like a diamond and a ruby.
  There was a <span style="color: #e6a64d;">rainbow</span> encircling the throne, and this looked like an emerald.</p>
  <p><sup>04</sup>
  Round the throne in a circle were twenty-four thrones, and on them <span style="color: #e6a64d;">twenty-four elders</span> sitting, dressed in white robes with golden crowns on their heads.</p>
  <p><sup>05</sup>
  Flashes of lightning were coming from the throne, and the sound of peals of thunder, and in front of the throne there were seven flaming lamps burning, the seven spirits of god.</p>
  <p><sup>06</sup>
  In front of the throne was a sea as transparent as crystal.» </p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “vision of the throne of god, of the heavenly court, and of the lamb”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “vision of the throne of god, of the heavenly court, and of the lamb”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “vision of the throne of god, of the heavenly court, and of the lamb”</figcaption>
  </figure>
  <p><sup>07</sup>
  The first living creature was like a <span style="color: #e6a64d;">lion</span>, the second like <span style="color: #e6a64d;">a young bull</span>, the third living creature had a <span style="color: #e6a64d;">human face</span>, and the fourth living creature was like a flying <span style="color: #e6a64d;">eagle</span>.</p>
  <p><sup>08</sup>
  Each of the four living creatures had <span style="color: #e6a64d;">six wings</span> and was studded with eyes all the way round as well as inside;
  and day and night they never stopped singing: Holy, Holy, Holy is the lord god, the almighty; who was, and is and is to come.' <span style="color: #999;">(…)</span></p>
  <p><sup>chap.5</sup></p>
  <p><sup>01</sup>
  «I saw that in the right hand of the one sitting on the throne there was a <span style="color: #e6a64d;">scroll</span> that was written on back and front and was sealed with <span style="color: #e6a64d;">seven seals</span>.» <span style="color: #999;">(…)</span></p>
  <p><sup>06</sup>
  «Then I saw, in the middle of the throne with its four living creatures and the circle of the elders, a <span style="color: #e6a64d;">lamb standing</span> that seemed to have been sacrificed; it had seven horns, and it had seven eyes, which are the seven spirits that god has sent out over the whole world.</p>
  <p><sup>07</sup>
  The lamb came forward to take the scroll from the right hand of the one sitting on the throne.» <span style="color: #999;">(…)</span></p>
  <p>The tale continues between the rainbow and John.</p>
  <p><sup>chap.6</sup></p>
  <p><sup>01</sup>
  Then, in my vision, I saw the lamb break one of the seven seals, and I heard one of the four living creatures shout in a voice like thunder, 'Come!'</p>
  </div>

  <div id="body-inner">
  <div class="footnotes">
  <hr>
  <ol>
  <li id="fn:1">
  <p>the quotation that follows is past; for information, I transpose it here to present.&nbsp;<a href="#fnref1:1" rev="footnote" class="footnote-backref">↩</a></p>
  </li>
  <li id="fn:2">
  <p>the extracts of the text of the Apocalypse that refer to the right panel can be found <a href="#apocalypse" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse">here</a>&nbsp;<a href="#fnref1:2" rev="footnote" class="footnote-backref">↩</a></p>
  </li>
  <li id="fn:3">
  <p>The text of Apocalypse is addressed to the "seven churches that are in Asia Minor" ("Ephesus, Smyrna, Pergamos, Thyatira, Sardis, Philadelphia and Laodicea", Apocalypse 1:4) in the symbolic language of the Jewish scriptures.</p>
  <p>It exhorts them to a transcendent reality that will enable them to overcome not only persecutions, whether Roman or Jewish, but also their own inadequacies <span style="color: #999;">(Apocalypse chap. 2-3)</span> through new hope in Christ at the end of time.&nbsp;<a href="#fnref1:3" rev="footnote" class="footnote-backref">↩</a></p>
  </li>
  </ol>
  </div>
  </div>

  <!-- Page 11 --><hr>

  <div id="body-inner">
  <p><sup>chap.6</sup></p>
  <p><sup>02</sup>
  Immediately I saw a <span style="color: #e6a64d;">white horse</span> appear, and its rider was holding a <span style="color: #e6a64d;">bow</span>; he was given a victor's <span style="color: #e6a64d;">crown</span> and he went away, to go from victory to victory.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the black horse”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the black horse”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “the black horse”.</p>
      <p>«its rider was holding a bow; he was given a victor's crown and he went away, to go from victory to victory» (Apocalypse 4.2)</figcaption>
  </figure>
  <p><sup>03</sup>
  When he broke the second seal, I heard the second living creature shout, 'Come!'
  <sup>04</sup>
  And out came another <span style="color: #e6a64d;">horse</span>, <span style="color: #e6a64d;">bright red</span>, and its rider was given this duty: to take away peace from the earth and set people killing each other. He was given a huge <span style="color: #e6a64d;">sword</span>.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the black horsee feu”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the black horsee feu”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “the black horseorse”</p>
      <p>«its rider was given this duty: to take away peace from the earth and set people killing each other. He was given a huge sword» (Apocalypse 4.4)</figcaption>
  </figure>
  <p><sup>05</sup>
  When he broke the third seal, I heard the third living creature shout, 'Come!'
  Immediately I saw a <span style="color: #e6a64d;">black horse</span> appear, and its rider was holding a <span style="color: #e6a64d;">pair of scales</span>;
  <sup>06</sup>
  and I seemed to hear a voice shout from among the four living creatures and say, 'A day's wages for a quart of corn, and a day's wages for three quarts of barley, but do not tamper with the oil or the wine.'</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the black horse”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the black horse”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “the black horse”.<br>«its rider was holding a pair of scales» (Apocalypse 4.5)</figcaption>
  </figure>
  <p><sup>07</sup>
  When he broke the fourth seal, I heard the voice of the fourth living creature shout, 'Come!'
  <sup>08</sup>
  Immediately I saw another <span style="color: #e6a64d;">horse</span> appear, <span style="color: #e6a64d;">deathly pale</span>, and its rider was called <span style="color: #e6a64d;">death</span>, and <span style="color: #e6a64d;">Hades</span> followed at its heels.
  They were given authority over a quarter of the earth, to kill by the sword, by famine, by plague and through wild beasts. <span style="color: #999;">(…)</span></p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the black horse, Death, Hades”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the black horse, Death, Hades”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “the black horse, Death, Hades”.<br>«its rider was called Death, and Hades followed at its heels» (Apocalypse 4.5)</figcaption>
  </figure>
  <p><sup>14</sup>
  the sky disappeared like a scroll rolling up and all the mountains and islands were shaken from their places.</p>
  <p><sup>15</sup>
  <span style="color: #e6a64d;">Then all the kings of the earth, the governors and the commanders, the rich people and the men of influence, the whole population, slaves and citizens, hid in caverns and among the rocks of the mountains.</span>.</p>
  <p><sup>16</sup>
  They said to the mountains and the rocks, 'Fall on us and hide us away from the one who sits on the throne and from the retribution of the Lamb.</p>
  <p><sup>17</sup>
  For the great day of his retribution has come, and who can face it?'</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the black horse”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the black horse”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “the black horse”</figcaption>
  </figure>
  </div>

  <!-- Page 12 --><hr>

  <div id="body-inner">
  <p><sup>chap.8</sup></p>
  <p><sup>01</sup>
  The Lamb then broke the seventh seal, and there was silence in heaven for about half an hour.</p>
  <p><sup>02</sup>
  Next I saw <span style="color: #e6a64d;">seven trumpets</span> being given to the <span style="color: #e6a64d;">seven angels</span> who stand in the presence of god.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the angels of the seventh seal”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the angels of the seventh seal”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “the angels of the seventh seal”</figcaption>
  </figure>
  <p><sup>03</sup>
  Another angel, who had a <span style="color: #e6a64d;">golden censer</span>, came and stood at the altar. A large quantity of incense was given to him to offer with the prayers of all the saints on <span style="color: #e6a64d;">the golden altar</span> that stood in front of the throne;</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the angel of the altar”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the angel of the altar”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “the angel of the altar”</figcaption>
  </figure>
  <p><sup>04</sup>
  and so from the angel's hand the smoke of the incense went up in the presence of god and with it the prayers of the saints.</p>
  <p><sup>05</sup>
  Then the angel took the censer and filled it from the fire of the altar, which he then hurled down onto the earth; immediately there came peals of thunder and flashes of lightning, and the earth shook.</p>
  <p><sup>06</sup>
  The seven angels that had the seven trumpets now made ready to sound them.</p>
  <p><sup>07</sup>
  The first blew his trumpet and, with that, hail and fire, mixed with blood, were hurled on the earth: a third of the earth was burnt up, and a third of all trees, and every blade of grass was burnt.</p>
  <p><sup>08</sup>
  The second angel blew his trumpet, and it was as though <span style="color: #e6a64d;">a great mountain blazing with fire</span> was hurled into the sea: a third of the sea turned into blood,
  <sup>09</sup>
  a third of all the living things in the sea were killed, and <span style="color: #e6a64d;">a third of all ships were destroyed</span>.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “fall of great mountain blazing with fire, a third of all ships destroyed”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “fall of great mountain blazing with fire, a third of all ships destroyed”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “fall of great mountain blazing with fire, a third of all ships destroyed”</figcaption>
  </figure>
  <p><sup>10</sup>
  The third angel blew his trumpet, and <span style="color: #e6a64d;">a huge star fell from the sky, burning like a ball of fire</span>, and it fell on a third of all rivers and on the springs of water;</p>
  <p><sup>11</sup>
  this was the star called «<span style="color: #e6a64d;">wormwood</span>», and a third of all water turned to wormwood, so that many people died; the water had become so bitter.</p>
  <p><sup>12</sup>
  The fourth angel blew his trumpet, and a third of the sun and a third of the moon and a third of the stars were blasted, so that the light went out of a third of them and the day lost a third of its illumination, and likewise the night.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the fall of the star called «Wormwood»”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the fall of the star called «Wormwood»”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “the fall of the star called «Wormwood»”.<br>«a huge star fell from the sky, burning like a ball of fire» (…) «a third of all water turned to wormwood, so that many people died; the water had become so bitter»</figcaption>
  </figure>
  <p><sup>13</sup>
  In my vision, I heard <span style="color: #e6a64d;">an eagle</span>, calling aloud as it flew high overhead, 'Disaster, disaster, disaster, on all the people on earth at the sound of the other three trumpets which the three angels have yet to blow!'.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the flight of the eagle”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the flight of the eagle”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “the flight of the eagle”</figcaption>
  </figure>
  </div>

  <!-- Page 13 --><hr>

  <div id="body-inner">
  <p><sup>chap.9</sup></p>
  <p><sup>01</sup>
  Then the fifth angel blew his trumpet, and I saw a star that had fallen from heaven onto the earth, and the angel was given the key to the shaft leading down to the <span style="color: #e6a64d;">abyss</span>.</p>
  <p><sup>02</sup>
  When he unlocked the shaft of the abyss, smoke rose out of the abyss like the <span style="color: #e6a64d;">smoke from a huge furnace</span> so that the sun and the sky were darkened by the smoke from the abyss,</p>
  <p><sup>03</sup>
  and out of the smoke dropped <span style="color: #e6a64d;">locusts</span> onto the earth: they were given the powers that scorpions have on the earth.</p>
  <p><sup>04</sup>
  they were forbidden to harm any fields or crops or trees and told to attack only those people who were without god's seal on their foreheads.</p>
  <p><sup>05</sup>
  They were not to kill them, but to give them anguish for five months, and the anguish was to be the anguish of a scorpion's sting.</p>
  <p><sup>06</sup>
  When this happens, people will long for death and not find it anywhere; they will want to die and death will evade them.  </p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the sortie of locusts onto the earth”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the sortie of locusts onto the earth”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “the sortie of locusts onto the earth”</figcaption>
  </figure>
  <p><sup>07</sup>
  These <span style="color: #e6a64d;">locusts</span> looked like horses armoured for battle; they had what looked like gold crowns on their heads, and their faces looked human,</p>
  <p><sup>08</sup>
  and their hair was like women's hair, and teeth like lion's teeth.</p>
  <p><sup>09</sup>
  They had body-armour like iron breastplates, and the noise of their wings sounded like the racket of chariots with many horses charging.</p>
  <p><sup>10</sup>
  Their tails were like scorpions' tails, with stings,
  and with their tails they were able to torture people for five months.</p>
  <p><sup>11</sup>
  As their leader they had their emperor, the angel of the abyss, whose name in hebrew is Abaddôn, and in Greek Apollyôn (which means: Destructor). <span style="color: #999;">(…)</span></p>
  <p><sup>chap.10</sup></p>
  <p><sup>01</sup>
  Then I saw another powerful <span style="color: #e6a64d;">angel</span> coming down from heaven, <span style="color: #e6a64d;">wrapped in cloud</span>, with <span style="color: #e6a64d;">a rainbow</span> over his head; his face was like <span style="color: #e6a64d;">the sun</span>, and his legs were <span style="color: #e6a64d;">pillars of fire</span>.</p>
  <p><sup>02</sup>
  In his hand he had <span style="color: #e6a64d;">a small scroll, unrolled</span>; he put his right foot in the sea and his left foot on the land. </p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the angel coming down from heaven”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the angel coming down from heaven”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “the angel coming down from heaven”<br>«Then I saw another powerful angel coming down from heaven, wrapped in cloud, with a rainbow over his head; his face was like the sun, and his legs were pillars of fire» (Apocalypse 10.1-2)</figcaption>
  </figure>
  <p><sup>03</sup>
  and he shouted so loud, it was like a lion roaring.
  At this, the seven claps of thunder made themselves heard</p>
  <p><sup>04</sup>
  and when the seven thunderclaps had sounded, I was preparing to write, when I heard a voice from heaven say to me, 'Keep the words of the seven thunderclaps secret and do not write them down.'</p>
  <p><sup>05</sup>
  Then the angel that I had seen, standing on the sea and the land, raised his right hand to heaven,
  <sup>06</sup>
  and swore by him who lives for ever and ever, and made heaven and all that it contains, and earth and all it contains, and the sea and all it contains, 'The time of waiting is over'; <span style="color: #999;">(…)</span></p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “le ciel de l'Apocalypse”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “le ciel de l'Apocalypse”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “le ciel de l'Apocalypse” (Apocalypse 12)</figcaption>
  </figure>
  <p><sup>chap.12</sup></p>
  <p><sup>01</sup>
  Now a great sign appeared in heaven: <span style="color: #e6a64d;">a woman</span>, robed with the sun, standing on the moon, and on her head a crown of twelve stars.</p>
  <p><sup>02</sup>
  She was pregnant, and in labour, crying aloud in the pangs of childbirth.</p>
  <p><sup>03</sup>
  Then a second sign appeared in the sky: there was <span style="color: #e6a64d;">a huge red dragon</span> with seven heads and ten horns, and each of the seven heads crowned with a coronet.</p>
  <p><sup>04</sup>
  Its tail swept a third of the stars from the sky and hurled them to the ground, and the dragon stopped in front of the woman as she was at the point of giving birth, so that it could eat the child as soon as it was born.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “The woman and the dragon”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “The woman and the dragon”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “The woman and the dragon” (Apocalypse 12.1-5)</figcaption>
  </figure>
  <p><sup>05</sup>
  The woman was delivered of a boy, the son who was to rule all the nations with an iron sceptre, and the child was taken straight up to god and to his throne,
  <sup>06</sup>
  while the woman escaped into the desert, where god had prepared a place for her to be looked after for twelve hundred and sixty days.</p>
  <p><sup>07</sup>
  And now war broke out in heaven, when Michael with his angels attacked the dragon.
  The dragon fought back with his angels,
  <sup>08</sup>
  but they were defeated and driven out of heaven.</p>
  <p><sup>09</sup>
  The great dragon, the primeval serpent, known as the devil or Satan, who had led all the world astray, was hurled down to the earth and his angels were hurled down with him.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “fight of saint Michael, of the dragon and of their angels: fall of the dragon and his angels”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “fight of saint Michael, of the dragon and of their angels: fall of the dragon and his angels”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “fight of saint Michael, of the dragon and of their angels: fall of the dragon and his angels” (Apocalypse 12.7-9)</figcaption>
  </figure>
  </div>

  <!-- Page 14 --><hr>

  <div id="body-inner">
  <p><sup>10</sup>
  Then I heard a voice shout from heaven, 'Salvation and power and empire for ever have been won by our god, and all authority for his Christ,
  now that the accuser, who accused our brothers day and night before our god, has been brought down.</p>
  <p><sup>11</sup>
  They have triumphed over him by the blood of the Lamb and by the word to which they bore witness, because even in the face of death they did not cling to life.</p>
  <p><sup>12</sup>
  So let the heavens rejoice and all who live there;
  but for you, earth and sea, disaster is coming -- because the devil has gone down to you in a rage, knowing that he has little time left.'</p>
  <p><sup>13</sup>
  As soon as the <span style="color: #e6a64d;">dragon</span> found himself hurled down to the earth, he sprang in pursuit of the <span style="color: #e6a64d;">woman</span>, the mother of the male child,</p>
  <p><sup>14</sup>
  but she was given <span style="color: #e6a64d;">a pair of the great eagle's wings</span> to fly away from the serpent into the desert, to the place where she was to be looked after for a time, two times and half a time.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the woman was given a pair of the great eagle's wings to fly away from the serpent”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner panel, “the woman was given a pair of the great eagle's wings to fly away from the serpent”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1920.jpg 1920w"></picture><figcaption>detail of the right inner panel, “the woman was given a pair of the great eagle's wings to fly away from the serpent” (Apocalypse 12:14)</figcaption>
  </figure>
  <p>This is for the visions of the apocalypse. According to the Golden Legend, John returns to Ephesus, where he resurrected Drusiana as Memling depicts him on a capital.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “resurrection of Drusiana”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “resurrection of Drusiana”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1920.jpg 1920w"></picture><figcaption>detail of the central panel, column capital, “resurrection of Drusiana”</figcaption>
  </figure>
  <p>He baptizes the converted philosopher Crato in the small domed building at the very back.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “baptisma of Crato”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “baptisma of Crato”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1920.jpg 1920w"></picture><figcaption>detail of the central panel, column capital, “baptisma of Crato”</figcaption>
  </figure>
  <p>He drinks the poisoned cup without suffering the slightest harm.</p>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “capital of the miracle of the poisoned cup”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “capital of the miracle of the poisoned cup”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1920.jpg 1920w"></picture><figcaption>detail of the central panel, column capital, "capital of the miracle of the poisoned cup"</figcaption>
    </figure>
  </div>

  <!-- Page 15 --><hr>

  <div id="body-inner">
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-1280.webp 1280w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/saint-jean-ferme-840.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, view of the closed triptych, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, view of the closed triptych, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-1280.webp 1280w"></picture><figcaption>the closed triptich</figcaption>
  </figure>
  <h2 id="position-fermee" class="yellow">presentation of donors: the closed tryptich</h2>
  <p>The edges of the shutters decorate the portraits of the kneeling and accompanied donors of their patron saints.
  They are represented in shallow niches.</p>
  <p>They were all identified.</p>
  <p>We recognize, from left to Right:</p>
  <ul>
  <li><span style="color: #e6a64d;">Agnès CASEMBROOD</span> is hung in front of <span style="color: #e6a64d;">Saint Agnes</span>, that can be recongnized by the lamb.  </li>
  <li><span style="color: #e6a64d;">Saint Clare</span>, that holds the censer, protects Sister <span style="color: #e6a64d;">Claire VAN HULSEN</span>.  </li>
  <li><span style="color: #e6a64d;">Jacob OF KEUNINC</span> and <span style="color: #e6a64d;">Saint James the Great of Compostela</span> dressed as a pilgrim,</li>
  <li><span style="color: #e6a64d;">Saint Anthony Abbot</span>, which is recognized by his crozier and piglet, patron of <span style="color: #e6a64d;">Antoine SEGHERS</span>, master of the hospital.</li>
  </ul>
  <p>The triptych was probably commanded before 1475, since it was in that year that Antoine SEGHERS died.</p>
  <p>It was placed above the master altar in 1479.</p>
  </div>

  <!-- Page 16 --><hr>

  <div id="body-inner">
  <h1 id="mise-en-relation" class="yellow">different texts at the origin of the scenes represented</h1>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, Catherine of Alexandria, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, Catherine of Alexandria, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.jpg 1920w"></picture><figcaption>Catherine of Alexandria</figcaption>
  </figure>
  <h2 id="cath-selon-legende" class="yellow">catherine of alexandria following the golden legend</h2>
  <p>Here followeth the Life of S. Catherine, virgin and martyr, and first of her name.</p>
  <p>CATHERINE is said of catha, that is all, and ruina that is falling, for all the edifice of the devil fell all from her.
  For the edifice of pride fell from her by humility that she had, and the edifice of fleshly desire fell from her by her virginity, and worldly covetise, for that she despised all worldly things.</p>
  <p>Or Catherine may be said as, a little chain, for she made a chain of good works by which she mounted into heaven, and this chain or ladder had four grees or steps which be: innocence of work, cleanness of body, despising of vanity and saying of truth, which the prophet putteth by order where he saith: Quis ascendet in montem domini? Innocens manibus.</p>
  <p>Who shall ascend into the mountain of our Lord? that is heaven, and he answereth: The innocent of his hands, he that is clean in his heart, he that hath not taken in vain his soul, and he that hath not sworn in fraud and deceit to his neighbour.</p>
  <p>And it appeareth in her legend how these four degrees were in her.</p>
  <p>Catherine, by descent of line, was of the noble lineage of the emperors of Rome as it shall be declared more plainly hereafter by a notable chronicle, whose most blessed life and conversation wrote the solemn doctor Athanasius, which knew her lineage and her life, for he was one of her masters in her tender age ere she was converted to the christian faith.</p>
  <p>And after, the said Athanasius, by her preaching and marvellous work of our Lord, was converted also, which, after her martyrdom, was made bishop of Alexandria, and a glorious pillar of the church by the grace of God and merits of S. Catherine.</p>
  <p>And as we find by credible chronicles, in the time of Diocletian and Maximian was great and cruel tyranny showed in all the world, as well to christian men as to paynims, so that many that were subject to Rome put away the yoke of servage and rebelled openly against the empire.</p>
  <p>Among whom the realm of Armenia was one that withstood most the tribute of the Romans, wherefore they of Rome deputed a noble man of dignity named Constantius, which was tofore others a valiant man in arms, discreet and virtuous.</p>
  <p>The which lord, after he came in to Armenia, anon subdued them by his discreet prudence, and deserved to have the love and favour of his enemies, in so much that he was desired to marry the daughter of the king which was sole heir of the realm, and he consented and married her.</p>
  <p>And soon after the king her father died, and then Constantius was enhanced and crowned king, which soon after had a son by his wife named Costus, at the birth of whom his mother died.</p>
  <p>After the death of whom Constantius returned to Rome to see the emperor, and to know how his lordships were governed in those parts, and in the meantime tidings came to Rome how that Great Britain, which now is called England, rebelled against the empire.</p>
  <p>Wherefore, by the advice of the consulate, it was concluded that Constantius, king of Armenia, should go into Britain to subdue them; which addressed him thither, and in short time after he entered into the land, by his prowess and wisdom he appeased the realm and subdued it again to the empire of Rome.
  And also he was so acceptable to the king of Britain, named Coel, that he married his daughter Helen, which afterward found the holy cross, and in short time he gat on her Constantine, which after was emperor.</p>
  <p>And then soon after died Constantius.</p>
  <p>And Constantine, after the death of King Coel, by his mother was crowned king of Britain.</p>
  <p>And Costus, the first son of Constantius, wedded the king's daughter of Cyprus, which was heir, of whom, as shall be hereafter said, was engendered S. Catherine, which came of the lineage of Constantius.</p>
  <p>Now followeth the Life of S. Catherine.</p>
  <p>In the year of our Lord two hundred, reigned in Cyprus a noble and prudent king named Costus, which was a noble and seemly man, rich and of good conditions, and had to his wife a queen like to himself in virtuous governance, which lived together prosperously, but after the law of paynims, and worshipped idols.</p>
  <p>This king, because he loved renomee and would have his name spread through the world, he founded a city in which he edified a temple of his false gods, and named that city after his name Costi, which after, to increase his fame, the people named it Fama Costi, and yet unto this day is called Famagosta; in which city he and the queen lived in great wealth and prosperity.</p>
  <p>And like as the fair rose springeth among the briars and thorns, right so between these two paynims was brought forth this blessed S. Catherine.</p>
  <p>And when this holy virgin was born she was so fair of visage and so well formed Catherine in her members that all the people enjoyed in her beauty, and when she came to seven years of age,anon after she was set to school, where she profited much more than any other of her age, and was informed in the arts liberal, wherein she drank plenteously of the well of wisdom, for she was chosen to be a teacher and informer of everlasting wisdom.</p>
  <p>The king Costus her father had so great joy of the great towardness and wisdom of his daughter, that he let ordain a tower in his palace, with divers studies and chambers, in which she might be at her pleasure and also at her will, and also he ordained for to wait on her seven the best masters and wisest in conning that might be gotten in those parts.</p>
  <p>And within a while they that came to teach her, they after that, learned of her and became her disciples.</p>
  <p>And when this virgin came to the age of fourteen years, her father king Costus died, and then she was left as queen and heir after him, and then the estates of the land came to this young lady, Catherine, and desired her to make a parliament in which she might be crowned and receive the homage of her subjects, and that such rule might be set in her beginning, that peace and prospenty might ensue in her realm.</p>
  <p>And this young maid granted to them their asking.</p>
  <p>And when the parliament was assembled and the young queen crowned with great solemnity, and she sitting on a day in her parliament, and her mother by her, with all the lords each in his place, a lord arose by the assent of her mother, the other lords, and the commons, and kneeled down tofore her, saying these words: Right high and mighty princess, and our most sovereign lady, please if you to wit that I am commanded by the queen your mother, by all the lords and commons of this your realm, to require your highness that it may please you to grant to them that they might provide some noble knight or prince to marry you, to the end that he might rule and defend your realm and subjects, like as your father did before you, and also that of you might proceed noble lineage which after you may reign upon us, which thing we most desire, and hereof we desire your good answer.</p>
  <p>This young queen Catherine, hearing this request, was abashed and troubled in her courage how she might answer to content her mother, the lords, and her subjects, and to keep herself chaste, for she had concluded to keep her virginity, and rather to suffer death than to defile it.</p>
  <p>And then with a sad cheer and meek look she answered in this wise: Cousin, I have well understood your request, and thank my mother, the lords, and my subjects of the great love that they all have to me and to my realm, and as touching my marriage, I trust verily there may be no peril, considering the great wisdom of my lady my mother, and of the lords, with the good obeisance of the commons, trusting in their good continuance.</p>
  <p>Wherefore we need not to seek a stranger for to rule us and our realm, for with your good assistance and aid we hope to rule, govern, and keep this our realm in good justice, peace, and rest, in like wise as the king my father held you in.</p>
  <p>Wherefore at this time I pray you to be content and to cease of this matter, and let us proceed to such matters as be requisite for the rule, governance and universal weal of this realm.</p>
  <p>And when this young queen Catherine had achieved her answer, the queen her mother, and all the lords, were abashed of her of words and wist not what to say, for they considered well by her words that she had no will to be married.</p>
  <p>And then there arose and stood up a duke, which was her uncle, and with due reverence said to her in this wise: My sovereign lady, saving your high and noble discretion, this answer is full heavy to my lady your mother, and to us all your humble liegemen, without ye take better advice to your noble courage.</p>
  <p>Wherefore I shall move to you of four notable things that the great God hath endowed you with before all other creatures that we know, which things ought to cause you to take a lord to your husband, to the end that the plenteous gifts of nature and grace may spring of you by generation, which may succeed by right line to reign upon us, to the great comfort and joy of all your people and subjects, and the contrary should turn to great sorrow and heaviness.</p>
  <p>Now, good uncle, said she, what be these four notable things that so ye repute in us? Madame, said he, the first is this, that we be ascertained that ye be come of the most noble blood in the world.</p>
  <p>The second, that ye be a great inheritor, and the greatest that liveth of woman to our knowledge.
  The third is, that ye in science, conning, and wisdom pass all other, and the fourth is, in bodily shape and beauty there is none like to you.</p>
  <p>Wherefore, madame, us think that these four notable things must needs constrain you to incline to our request.
  Then said this young Queen Catherine with a sad countenance: Now, uncle, sith God and nature have wrought so great virtues in us, we be so much more bound to love and to please him, and we thank him humbly of his great and large gifts.</p>
  <p>But sith ye desire so much that we should consent to be married, we let you plainly wit that like as ye have described us, so will we describe him that we will have to Catherine our lord and husband, and if ye can get such an one we will agree to take him with all our heart.</p>
  <p>For he that shall be lord of mine heart and mine husband shall have the four notable things in him over all measure; so farforthly that all creatures shall have need of him, and he needeth of none.</p>
  <p>And he that shall be my lord must be of so noble blood that all men shall do to him worship, and therewith so great a lord that I shall never think that I made him a king, and so rich that he pass all others in riches.</p>
  <p>And so full of beauty that angels have joy to behold him, and so pure that his mother be a virgin.</p>
  <p>And so meek and benign that he can gladly forgive all offences done unto him.</p>
  <p>Now I have described to you him that I will have and desire to my lord and to my husband, go ye and seek him, and if ye can find such an one, I will be his wife with all mine heart, if he vouchsafe to have me.</p>
  <p>And finally, but if ye find such an one I shall never take none, and take this for a final answer.</p>
  <p>And with this she cast down her eyes meekly and held her still.</p>
  <p>And when the queen her mother and the lords heard this, they made great sorrow and heaviness, for they saw well that there was no remedy in that matter.</p>
  <p>Then said her mother to her with an angry voice: Alas, daughter, is this your great wisdom that is talked so far? Much sorrow be ye like to do me and all yours.</p>
  <p>Alas! who saw ever woman forge to her such a husband with such virtues as ye do? For such one as ye have devised, there was never none, ne never shall be, and therefore, daughter, Ieave this folly, and do as your noble elders have done tofore you.</p>
  <p>And then said this young Queen Catherine unto her mother, with a piteous sighing: Madam, I wot well by very reason that there is one much better than I can devise him, and but be by his grace find me, I shall never have joy.</p>
  <p>For I feel by great reason that there is a way that we be clean out of, and we be in darkness, and till the light of grace come we may not see the clear way, and when it pleaseth him to come he shall avoid all darkness of the clouds of ignorance, and show him clearly to me whom my heart so fervently desireth and loveth.</p>
  <p>And if it so be that he list not that I find him, yet reason commandeth me to keep whole that is unhurt, wherefore I beseech you meekly, my lady mother, that ye ne none other move me more of this matter, for I promise you plainly that for to die therefore I shall never have other husband but only him that I have described, to whom I shall truly keep me with all the pure love of mine heart. And with this she arose, and her mother and all the lords of the parliament, with great sorrow and lamentation, and taking their leave, departed.</p>
  <p>And this noble young Catherine went to her palace, whose heart was set afire upon this husband that she had devised, that she could do nothing, but all her mind and intent was set on him, and continually mused how she might find him, but she could not find the means, how well he was nigh to her heart that she sought.</p>
  <p>For he had kindled a burning love which could never after be quenched for no pain ne tribulation, as it appeared in her passion.</p>
  <p>But now I leave this young queen in her contemplation, and shall say you as far as God will give me grace, how that our Lord by his special miracle, called her unto baptism in a special manner, such as hath not been heard of before ne sith, and also how she was visibly married to our Lord, in showing to her sovereign tokens of singular love.</p>
  <p>Then, beside Alexandria, a certain space of miles, dwelled a holy father, a hermit in desert named Adrian, which had served our Lord continually by the space of thirty years in great penance.</p>
  <p>And on a day as he walked before his cell being in his holy meditations, there came against him the most reverent lady that ever any earthly creature might behold, and when this holy man beheld her high estate and excellent beauty, which was above nature, he was sore abashed and so much astonished, that he fell down as he had been dead.</p>
  <p>Then this blessed lady, seeing this, called him by his name goodly and said: Brother Adrian, dread ye nothing, for I am come to you for your good honour and profit.</p>
  <p>And with that she took him up meekly, comforting him, and said in this wise: Adrian, ye must go in a message for me into the city of Alexandria, and to the palace of the queen Catherine, and say to her that the lady saluteth her whose son she hath chosen to her lord and husband, sitting in her parliament with her mother and lords about her, where she had a great confiict and battle to keep her virginity, and say to her that this same lord whom she chose is my son, that am a pure virgin, and he desireth her beauty and loveth her chastity among all the virgins on the earth.</p>
  <p>I command her, without tarrying, that she come with thee alone unto this palace, whereas she shall be new clothed, and then shall she see him, and have him to her everlasting spouse.</p>
  <p>Then Adrian hearing this said dreadfully in this wise: Ah! blessed lady, how shall I do this message? for I know not the city ne the way thither, and who am I, though I knew it, to do such a message to the queen? For her meiny will not suffer me to come to her presence, and though I come to her she will not believe me, but put me in duresse as I were a faitour.</p>
  <p>Adrian, said this blessed lady, dread ye not, for that my son hath begun in her must be performed, for she is a chosen vessel of special grace before all women that live, but go forth and ye shall find no letting, and enter into her chamber, for the angel of my lord shall lead you thither, and bring you both hither safely.</p>
  <p>Then he, meekly obeying, went forth into Alexandria and entered into the palace, and found doors and closures opening against him, and so passed from chamber to chamber till he came into her secret study, whereas none came but herself alone.</p>
  <p>And there he found her in her holy contemplation, and did to her his message like as ye have heard, according to his charge.</p>
  <p>And when this blessed virgin Catherine had heard his message and understood by certain tokens that he came for to fetch her to him whom she so fervently desired, anon she arose forgetting her estate and meiny, and followed this old man through her palace and the city of Alexandria, unknown of any person, and so into desert.</p>
  <p>In which way as they walked she demanded of him many a high question, and he answered to her sufficiently in all her demands and informed her in the faith, and she benignly received his doctrine.</p>
  <p>And as they thus went in the desert this holy man nad lost his way, and wist not where he was and was all confused in himself, and said secretly: Alas I fear me I am deceived, and that this be an illusion.</p>
  <p>Alas! shall this virgin here be perished among these wild beasts? Now blessed Iady, help me that almost am in despair, and save this maiden that hath forsa':en for your love all that she had, and hath obeyed your commandment.</p>
  <p>And as he thus sorrowed, the blessed virgin Catherine apperceived and demanded him what him ailed, and why he sorrowed, and he said: For you, because I cannot find my cell, ne wot not where I am.</p>
  <p>Father, said she, dread ye not, for trust ye verily, that that good lady which sent you for me, shall not suffer us to perish in this wilderness, and then she said to him: What monastery is yonder that I see, which is so rich and fair to behold? And he demanded of her where she saw it, and she said: Yonder in the east, and then he wiped his eyes and saw the most glorious monastery that ever he saw, whereof he was full of joy, and said to her: Now blessed be God that hath endowed you with so perfect faith, for there is that place wherein ye shall receive so great worship and joy, that there was never none like, save only our blessed Lady, Christ's own mother, queen of all queens.</p>
  <p>Now, good Father Adrian, hie you fast that we were there, for there is all my desire and joy.</p>
  <p>And soon after they approached that glorious place, and when they came to the gate, there met them a glorious company, all clothed in white and with chaplets of white lilies on their heads, whose beauty was so great and bright that the virgin Catherine ne the old man might not behold them, but all ravished fell down in great dread.</p>
  <p>Then one more excellent than another spake first, and said to this virgin: Catherine, stand up our dear sister, for ye be right welcome, and led her farther in till they came to the second gate where another more glorious company they came to the second gate where another more glorious company met her, all clothed in purple, with fresh chaplets of red roses on their heads.</p>
  <p>And the holy virgin seeing them, fell down for reverence and dread, and they, benignly comforting her, took her up and said to her: Dread ye nothing, our dear sister, for there was never none more heartily welcome to our sovereign lord than ye be, and to us all, for ye shall receive our clothing ard our crown with so great honour, that all saints shall joy in you; Come forth, for the Lord abideth desiring you.</p>
  <p>And then this blessed virgin Catherine with trembling joy passed forth with them, like as she that was ravished with so marvellous joy that she could not speak, and when she was entered into the body of the church she heard a melody of marvellous sweetness, which passed all hearts to think it, and there they beheld a royal queen standing in her estate with a great multitude of angels and saints, whose beauty and riches might no heart think, ne no pen write, for it exceedeth every man's mind.</p>
  <p>Then the noble company of martyrs with the fellowship of virgins, which led the virgin Catherine, fell down flat tofore this royal empress with sovereign reverence, saying in this wise: Our most sovereign Lady Queen of heaven, Lady of all the world, Empress of hell, Mother of Almighty God, King of bliss, to whose commandment obey all heavenly creatures and earthly, liketh it you that we here present to you our dear sister, whose name is written in the Book of Life, beseeching your benign grace to receive her as your daughter chosen and humble handmaid, for to accomplish the work which our blessed Lord hath begun in her. And with that our blessed Lady said: Bring ye my daughter and when the holy virgin heard our Lady speak, she was so much replenished with heavenly joy that she lay as she had been dead.</p>
  <p>Then the holy company took her up and brought her tofore our blessed Lady, to whom she said: My dear daughter ye be welcome to me, and ye be strong and of good comfort, for ye be specially chosen of my son to be honoured.</p>
  <p>Remember ye not how sitting in your parliament ye described to you a husband, whereas ye had a great conflict and battle in defending your chastity? And then this holy Catherine kneeling with most humble reverence and dread said: O most blessed Lady; blessed be ye among all women; I remember how I chose that Lord which then was full far from my knowledge, but now blessed Lady, by his mighty mercy and your special grace he hath opened the eyes of my blind conscience and ignorance, so that now I see the clear way of truth, and humbly beseech you most blessed Lady, that I may have him whom my heart loveth and desireth above all things, without whom I may not live.</p>
  <p>And with these words her spirits were so fast closed that she lay as she had been dead, and then our Lady in conforting her said: My dear daughter, it shall be as ye desire, but yet ye lack one thing that ye must receive ere ye come to the presence of my son; ye must be clothed with the sacrament of baptism, wherefore come on my daughter for all things are provided.</p>
  <p>For there was a font solemnly apparelled with all things requisite unto baptism.</p>
  <p>And then our blessed Lady called Adrian the old father to her and said: Brother, this office longeth to you for ye be a priest, therefore baptize ye my daughter but change not her name, for Catherine shall she be named and I shall be her godmother.</p>
  <p>And then this holy man Adrian baptized her, and after, our Lady said to her: Now mine own daughter be glad and joyful, for ye lack no thing that longeth to the wife of a heavenly spouse, and now I shall bring you to my Lord my son which abideth for you.</p>
  <p>And so our Lady led her forth unto the quire door whereas she saw our Saviour Jesu Christ with a great multitude of angels, whose beauty is impossible to be thought or written of earthly creature, of whose sight this blessed virgin was I fulfilled with so great sweetness that it cannot be expressed. To whom our blessed Lady benignly said: Most sovereign honour, joy and glory be to you, King of bliss, my Lord, my God and my son, Lo! I have brought here unto your blessed presence your humble servant and ancille Catherine, which for your love hath refused all earthly things, and hath at my sending obeyed to come hither, hoping and trusting to receive that I promised to her.</p>
  <p>Then our Blessed Lord took up, his mother and said: Mother, that which pleaseth you, pleaseth me, and your desire is mine, for I desire that she be knit to me by marriage among all the virgins of the earth.</p>
  <p>And said to her Catherine, come hither to me.</p>
  <p>And as soon as she heard him name her name, so great a sweetness entered into her soul that she was all ravished, and therewith our Lord gave to her a new strength which passed nature, and said to her: Come my spouse, and give to me your hand.</p>
  <p>And there our Lord espoused her in joining himself to her by spiritual marriage, promising ever to keep her in all her life in this world, and after this life to reign perpetually in his bliss, and in token of this set a ring on her finger, which he commanded her to keep in remembrance of this, and said: Dread ye not, my dear spouse, I shall not depart from you, but always comfort and strengthen you.</p>
  <p>Then said this new spouse: O blessed Lord, I thank you with all mine heart of all your great mercies, beseeching you to make me digne and worthy to be thy servant and handmaid, and to please you whom my heart loveth and desireth above all things.</p>
  <p>And thus this glorious marriage was made, whereof all the celestial court joyed and sang this verse in heaven: Sponsus amat sponsam, salvator visitat illam, with so great melody that no heart may express ne think it.</p>
  <p>This was a glorious and singular marriage to which was never none like before in earth, wherefore this glorious virgin, Catherine, ought to be honoured, lauded, and praised among all the virgins that ever were in earth.</p>
  <p>And then our blessed Lord, after this marriage, said unto the blessed Catherine: Now the time is come that I must depart into the place that I came from, wherefore what that ye will desire I am ready to grant to you, and after my departing ye must abide here with old Adrian ten days, till ye be perfectly informed in all my laws and will.</p>
  <p>And when ye shall be come home ye shall find your mother dead, but dread ye not, for ye were never missed there in all this time, for I have ordained there one in your stead, that all men ween it were yourself, and when ye come home, she that is there in your stead shall void.</p>
  <p>Now fare well, my dear spouse.</p>
  <p>And then she cried with a full piteous voice: Ah! my sovereign Lord God and all the joy of my soul, have ye ever mine on me.</p>
  <p>And with that he blessed her and vanished away from her sight.
  And then for sorrow of his departing she fell in a swoon so that she lay still a large hour without any life, and then was Adrian a sorry man, and cried upon her so long that at the last she came to herself and revived and lift up her eyes and saw nothing about her save an old cell, and the old man Adrian by her, weeping.</p>
  <p>For all the royalty was voided, both monastery and palace, and all the comfortable sights that she had seen, and specially he which was cause of all her joy and comfort; and then she sorrowed, l mourned, and wept unto the time that she saw the ring on her finger, and for joy thereof yet she swooned, and after she kissed it a thousand sithes with many a piteous tear, and then Adrian comforted her the best wise he could with many a blessed exhortation.</p>
  <p>And the blessed virgin Catherine took all his comforts and obeyed him as to her father, and dwelled with him the time that our Lord had assigned her till she was sufficiently taught all that was needful to her.</p>
  <p>And then she went home to her palace and governed her holily in converting many creatures to the christian faith of Jesu Christ, on whom all her joy was wholly set, and ever he was in her mind, and so dwelled still in her palace, never idle, but ever continued in the service of our Lord, full of charity, where awhile I let her dwell fulfilled of virtues and grace, as the dear and singular spouse of Almighty God.</p>
  <p>And then in this meantime Maxentius, that was then emperor, and vicious to God's law and cruel tyrant, considered the noble and royal city of Alexandria, and came thither and assembled all the people, rich and poor, for to make sacrifice to the idols, and the christian men that would not make sacrifice he let slay.</p>
  <p>And this holy virgin was at that time eighteen years of age, dwelling in her palace full of riches and of servants, alone, without parents and kin, and heard the braying and noise of beasts, and the joy that they made and sung, and marvelled what it might be, and sent one of her servants hastily to inquire what it was.</p>
  <p>And when she knew it, she took some of the people of her palace and garnished her with the sign oi the cross and went thither, and found there many christian men to be led to do sacrifice for fear of death.</p>
  <p>Then was she strongly troubled for sorrow, and went forth hardily to the emperor, and said in this wise: 　
  <span style="color: #e6a64d;">The dignity of thine order and the way of reason have moved me to salute thee, if thou know the creator and maker of heaven, and wouldst revoke thy courage from the worshipping of false gods.</span> 　
  And then she disputed of many things with Cæsar tofore the gates of the temple.</p>
  <p>And then she began to say: I have set my cure to say these things to thee as to a wise man, wherefore hast thou now assembled this multitude of people thus in vain for to adore the folly of the idols.</p>
  <p>Hast thou marvel of this temple that is made with man's hands? Wonderest thou on the precious ornaments which be as dust tofore the wind? Thou shouldst rather marvel thee of heaven, and of the earth, and of all the things that be therein, and of the sun, the moon, the stars, and of the planets that have been since the beginning of the world, and shall be as long as it shall please God; and marvel thee of the ornaments of heaven, that is to say, the sun, moon, stars, and planets, how they move from the orient to the occident and never be weary, and when thou shalt have knowledge of all these things, and hast apperceived it, demand after, who is most mightyof all, and when thou knowest him that is sovereign and maker of all things, to whom none is semblable ne like, then adore him and glorify, for he is God of gods, and Lord of lords.</p>
  <p>And when she had disputed of many things of the Incarnation of the Son of God much wisely, the emperor was much abashed and could not answer to her, but at the last when he was come to himself, he said to her: O thou woman, suffer us to finish our sacrifice, and after, we shall give thee an answer.
  Then commanded he that she should be led to his palace and to be kept with great diligence, and marvelled much of her great prudence and of her great beauty, for she was right fair to behold, unto the people.</p>
  <p>And after this the emperor came to the palace, and said to Catherine: We have heard thy fair speech and be marvellously abashed of thy wisdom, but we be so occupied in the sacrifices that we may not entend to understand all things. And we demand thee, first, of what lineage art thou? And the holy virgin Catherine said: Praise not thyself over much, ne blame thyself also, for so do fools that travail in vain glory.</p>
  <p>Nevertheless, I shall acknowledge to thee my lineage, not for any avaunting but by humility.</p>
  <p>I am Catherine, daughter of Costus the king, and howbeit that I was born in purple, and am informed in the arts liberal, yet have I despised all things and have given me wholly to our Lord Jesu Christ, and the gods that thou worshippest may not help thee ne none other.</p>
  <p>O ye cursed adorers of such gods, for when they be called in need they help not, in tribulation they succour not, and in perils they defend not.</p>
  <p>And the king said: If it be so as thou sayest, all the earth erreth and thou only sayest truth, and every word ought to be confirmed by the mouth of two or three witnesses.</p>
  <p>If thou wert an angel or a celestial virtue, yet thou oughtest not to be believed when thou art but one frail woman. To whom she said: O emperor, I beseech thee be not overcome with woodness, for in the courage of a wise man is no trouble, for the wise man saith: If thou governest thyself by good courage thou shalt be a king, and if thou governest thee otherwise thou shalt be a servant.</p>
  <p>And thou, as I see, ordainest to embrace us in thy mortal subtlety when thou labourest to draw us by the ensamples of the philosophers.</p>
  <p>And when the emperor saw that in no manner he could resist her wisdom, he sent secretly by letters for all the great grammarians and rhetoricians that they should come hastily to his pretorium to Alexandria, and he should give to them great gifts if they might surmount a maiden well bespoken.</p>
  <p>And then were there brought from divers provinces fifty masters which surmounted all mortal men in worldly wisdom.
  And then demanded they for what cause they were called from so far parts, and the emperor answered and said: We have a maiden, none comparable to her in wit and wisdom, which confoundeth all wise men, and she saith that our gods be devils, and if ye surmount them by honour I shall send you again into your country with joy.</p>
  <p>And one of them had hereof despite, and said by disdain: This is a worthy counsel of an emperor, that for one maid, young and frail, he hath done assemble so many sages, and from so far countries, and one of our clerks or scholars may overcome her.</p>
  <p>And the king said to them: I may well by strength constrain her to sacrifice, but I had liefer that she were overcome by your arguments.</p>
  <p>Then said they: Let her be brought tofore us, and when she shall be overcome by folly she may know that she never saw wise man.</p>
  <p>And when the virgin knew the strife of the disputation that she abode, she commended her all unto our Lord, and an angel came to her and said that she should keep her firmly for she should not be vanquished, but she should surmount them and send them to martyrdom.</p>
  <p>And when she was brought tofore the masters and orators she said to the emperor: What judgment is this to set fifty orators and masters against one maid, and to promise to them great rewards for their victory, and compellest me to dispute with them without hope of any reward? And God Jesu Christ, which is very guerdon of them that strive for him, shall be only with me, and he shall be my reward, for he is the hope and crown of them that fight for him.</p>
  <p>And when the masters had said that it was impossible that God was made man, ne that he had suffered death, the virgin showed to them that the paynims had said it tofore that he was made.</p>
  <p>For Plato said God to be all round and to be slain, and Sibyl said thus, that the ilke God should be blessed and happy that should hang on the cross.
  And when the virgin right wisely disputed with the masters, and that she had confounded their gods by open reasons, they were abashed and wist not what to say, but were all still.</p>
  <p>And the emperor was replenished with felony against them, and began to blame them because they were overcome so foully of one maid.</p>
  <p>And then one that was master above all the others said to the emperor: Know thou, sir emperor, that never was there any that might stand against us but that anon he was overcome.</p>
  <p>But this maid in whom the spirit of God speaketh hath so converted us that we cannot say anything against Jesu Christ, ne we may not, ne dare not.</p>
  <p>Wherefore, sir emperor, we acknowledge that but if thou mayest bring forth a more provable sentence of them that we have worshipped hitherto, that all we be converted to Jesu Christ.</p>
  <p>And when the tyrant heard this thing he was esprised with great woodness, and commanded that they all should be burnt in the midst of the city.</p>
  <p>And the holy virgin comforted them and made them constant to martyrdom, and informed them diligently in the faith, and because they doubted that they should die without baptism, the virgin said to them: Doubt ye nothing, for the effusion of your blood shall be reputed to you for baptism, and garnish you with the sign of the cross, and ye shall be crowned in heaven.</p>
  <p>And when they were cast into the flames of fire they rendered their souls unto God, and neither hair ne clothes of them had none harm ne were hurt by the fire.</p>
  <p>And when the christian men had buried them, the tyrant spake unto the virgin and said: Ah! right noble lady virgin, have pity of thy youth, and thou shalt be chief in my palace next the queen, and thine image shall be set up in the midst of the city, and shall be adored of all the people as a goddess.</p>
  <p>To whom the virgin said: Leave to say such things, for it is evil to think it.</p>
  <p>I am given and married to Jesu Christ, he is my spouse, he is my glory, he is my love, and he is my sweetness, there may no fair words ne no torments call me from him.</p>
  <p>And then he being full of woodness, commanded that she should be despoiled naked and beaten with scorpions, and so beaten to be put in a dark prison, and there was tormented by hunger by the space of twelve days.</p>
  <p>And the emperor went out of the country for certain causes, and the queen was esprised with great love of the virgin, and went by night to the prison with Porphyry, the prince of knights, and when the queen entered, she saw the prison shining by great clearness, and angels anointing the wounds of the holy virgin Catherine.</p>
  <p>And then S. Catherine began to preach to the queen the joys of Paradise and converted her to the faith, and said to her that she would receive the crown of martyrdom, and thus spake they together till midnight.</p>
  <p>And when Porphyry had heard all that she had said, he fell down to her feet and received the faith of Jesu Christ, with two hundred knights.</p>
  <p>And because the tyrant had commanded that she should be twelve days without meat and drink, Jesu Christ sent to her a white dove which fed her with meat celestial.</p>
  <p>And after this, Jesu Christ appeared to her with a great multitude of angels and virgins, and said to her: Daughter, know thy maker, for whom thou hast emprised this travailous battle; be thou constant, for I am with thee.</p>
  <p>And when the emperor was returned, he commanded her to be brought tofore him, and when he saw her so shining, whom he supposed to have been tormented bv great famine and fasting, and supposed that some had fed her in prison, he was fulfilled with fury and commanded to torment the keepers of the prison, and she said to him: Verily, I took never sith meat of man, but Jesu Christ hath fed me by his angel.</p>
  <p>I pray thee, said the emperor, set at thine heart this that I admonish thee, and answer not by doubtable words.</p>
  <p>We will not hold thee as a chamberer, but thou shalt triumph as a queen in my realm, in beauty enhanced.</p>
  <p>To whom the blessed virgin Catherine said: Understand, I pray thee, and judge truly, whom ought I better to choose of these two, or the king puissant, perdurable, glorious and fair, or one sick, unsteadfast, not noble, and foul? And then the emperor having disdain, and angry by felony, spake: Of these two choose thee one, or do sacrifice and live, or suffer divers torments and perish.</p>
  <p>And she said: Tarry not to do what torments thou wilt, for I desire to offer to God my blood and my flesh like as he offered for me; he is my God, my father, my friend and mine only spouse.</p>
  <p>And then a master warned and advised the king, being wood for anger, that he should make four wheels of iron, environed with sharp razors, cutting so that she might be horribly all detrenched and cut in that torment, so that he might fear the other christian people by ensample of that cruel torment.</p>
  <p>And then was ordained that two wheels should turn against the other two by great force, so that they should break all that should be between the wheels, and then the blessed virgin prayed our Lord that he would break these engines to the praising of his name, and for to convert the people that were there.</p>
  <p>And anon as this blessed virgin was set in this torment, the angel of our Lord brake the wheels by so great force that it slew four thousand paynims.</p>
  <p>And the queen, that beheld these things, came from above and had hid herself till then, descending anon and began to blame the emperor of so great cruelty, and then the king was replenished with woodness when he saw that the queen despised to do sacrifice, and did do first rend off her paps, and after smite off her head.</p>
  <p>And as she wasled unto martyrdom, she prayed Catherine to pray God for her, and she said to her: Ne doubt thee nothing, well-beloved of God; for this day thou shalt have the realm perdurable for this transitory realm, and an immortal spouse for a mortal.</p>
  <p>And she was constant and firm in the faith, and bade the tormentors do as was to them commanded.</p>
  <p>And then the sergeants brought her out of the city and erased off her paps with tongs of iron, and after smote off her head, whose body Porphyry took away and buried it.</p>
  <p>The next day following was demanded where the holy body of the queen was, and the emperor bade that many should be put to torment for to know where the body was.</p>
  <p>Porphyry came then tofore them all, and cried, saying: I am he that buried the body of the ancille and servant of Jesu Christ, and have received the faith of God.</p>
  <p>And then Maxentius began to roar and bray as a mad man, and cried, saying: O! wretched and caitiff, lo! Porphyry, which was the only keeper of my soul and comfort of all mine evils, is deceived; which thing he told to his knights, to whom they said: And we also be christian and be ready for to suffer death for Jesu Christ.</p>
  <p>And then the emperor, drunken in woodness, commanded that all should be beheaded and that their bodies should be cast to dogs, and then called he Catherine and said to her: Howbeit that thou hast made the queen for to die by thine art magic, if thou repent thee thou shalt be first and chief in my palace, for thou shalt this day do sacrifice or thou shalt lose thine head.</p>
  <p>And she said to him: Do all that thou hast thought; I am ready to suffer all.</p>
  <p>And then he gave sentence against her, and commanded to smite off her head.</p>
  <p>And when she was brought to the place ordained thereto, she lift up her eyes to heaven praying, and said: O ! Jesu Christ, hope of and help of them that believe in thee! O beauty and glory of virgins! Good king, I beseech and pray thee that whosomever shall remember my passion, be it at his death or in any other necessity, and call me, that he may have by thy mercy the effect of his request and prayer.</p>
  <p>And then came a voice to her, saying: Come unto me, my fair love and my spouse; lo! behold the gate of heaven is open to thee, and also to them that shall hallow thy passion, I promise the comfort of heaven of that they require.</p>
  <p>And when she was beheaded there issued out of her body milk instead of blood, and angels took the body and bare it unto the Mount of Sinai, more than twenty journeys from thence, and buried it there honourably, and continually oil runneth out of her bones which healeth all maladies and sicknesses, and she suffered death under Maxentius the tyrant, about the year of our Lord three hundred.</p>
  <p>How Maxentius was punished for this felony and for others, it is contained in the history of the invention of the holy cross, but forasmuch as it was not known long after where this holy body was become, there was great sorrow and lamentation among christian men, saying: Alas ! the most clear light of our faith, of wisdom, and the temple of the Holy Ghost, is gone from us, and besought God devoutly that it might please him to show to them this holy relic, which after came to knowledge in this manner.</p>
  <p>In the desert about the Mount of Sinai there were many christian hermits which were inflamed with great devotion toward this holy virgin S. Catherine, wherefore by common assent they ordained a chapel in which this holy virgin should specially remembered, which chapel was by the Mount of Sinai, not far from the hill, fast by the place whereas our Lord appeared in the bush to Moses.</p>
  <p>In which place the holy hermits lived in great abstinence and devotion a glorious life.</p>
  <p>To whom on a time the angel of God appeared and said: God hath beholden your effectual devotion from heaven, therefore he hath granted to you this grace that by you shall be found and known the holy body of the glorious virgin S. Catherine, to his sovereign honour and glory.</p>
  <p>And therefore arise ye up and follow me, and though it so be that ye see me not, yet the shadow of the palm that I bear in mine hand shall never depart from your sight.</p>
  <p>And then these hermits went forth and followed the angel till they came to the place where unnethe any creature might enter for straitness of the way and sharpness of the rocks; and when they came to the top of the hill they saw not the angel, but they saw evidently the shadow of the palm, that it seemed all the place had been shadowed by the leaves of the palm, by which they came unto the place where the body had lain one hundred and thirty years in a stone.</p>
  <p>And her flesh was dried up for length of time, but the bones were so compact and pure that they seemed to be kept by the cure of angels.</p>
  <p>Then they took up with great joy and reverence this holy body and bare it down into the chapel which they had made, and this was done by great miracle, for the place where she lay in was so steep, thick, strait, and so dangerous, that it seemed to man's reason impossible to come thereto.
  And these holy men, after they had brought this body with solemnity, ordained the feast of the invention of this holy body should be solemnised, which is yet there kept and is about the time of the Invention of the Holy Cross. Which place is greatly honoured, and our Lord showeth there many miracles, and out of the bones floweth out oil largely, by which many maladies be guerished.</p>
  <p>And it is said that tofore the body was found that a monk went to the Mount of Sinai and dwelled there by the space of seven years much devoutly in the service of S. Catherine, and on a time as he prayed with great devotion that he might have something of her body, suddenly there came a joint of one of her fingers of her hand, which gift he took joyfully of our Lord.</p>
  <p>It is read also that there was a man much devout to S. Catherine and oft called on her to his and, and by length of time he fell in foul thought, and lost the devotion that he had to the saint, and ceased to pray to her; and as he was on a time in prayer he saw a great multitude of virgins passing by him, among whom there was one more resplendissent than the other, and when she approached him she covered her visage and passed tofore him, her face covered.</p>
  <p>And he marvelled much of the beauty of her, and demanded what she was, and one of the virgins said that it was Catherine whom thou wert wont for to know, and because thou knowest ne rememberest her not, she passed tofore thee with face covered and without knowledge.</p>
  <p>It is to be noted that this blessed virgin S. Catherine seemeth and appeareth marvellous in five things: first, in wisdom, secondly, in eloquence, thirdly, in constancy, fourthly, in cleanness of chastity, and fifthly, in privilege of dignity.</p>
  <p>First she appeared marvellous in wisdom, in her was all manner of philosophy.</p>
  <p>Philosophy is divided in three, in theory, in practice, and in logic.</p>
  <p>Theory is divided in three, that is intellectual, natural, and mathematical.</p>
  <p>The blessed Catherine had science intellectual in knowledge of things divine, of which she used against the masters, to whom she proved to be but one very God only, and convanquished all the false gods.</p>
  <p>Secondly, she had science natural of which she used in disputing against the emperor.</p>
  <p>Thirdly, she had science mathematical, that is a science that be holdeth the forms and the manner of things, and this science had she in despising the earthly things, for she withdrew her heart from all earthly matter.</p>
  <p>She showed to have this science when she answered to the emperor, when he demanded who she was, and said: I am Catherine, daughter of king Costus, and how she had been nourished in purple.</p>
  <p>And hereof used she when she enharded the queen to despise the world and herself, and to desire the reign perdurable.
  The practice is divided in three manners, in ethic, economic, and politic.</p>
  <p>The first teacheth to inform manners and adorn him with virtues, and that appertaineth to all men.</p>
  <p>The second teacheth to rule and govern well his meiny, and that appertaineth to them that have men to govern.</p>
  <p>The third appertaineth to the governors of cities, for she teacheth to govern the peoples, the cities, and the commons.
  And these three sciences had the blessed Catherine.</p>
  <p>First, she had in herself all honesty of manners; secondly, she ruled her meiny laudably, which was left to her, thirdly, she informed wisely the emperor.</p>
  <p>Logic is divided in three, in demonstrative, in probable, and in sophistical.</p>
  <p>The first pertaineth to philosophers, the second to rhetors and logicians, and the third to sophisters, and these three sciences had Catherine in her, for she disputed with the emperor.</p>
  <p>Secondly, she was marvellous in eloquence, for she had fair speech in Catherine preaching as it appeared in her predications, she was right sharp in rendering reason, as when she answered to the emperor, she had sweet words in drawing the people to the faith, as it appeared in Porphyry and the queen, whom she drew to the christian faith by sweetness of her fair speech.</p>
  <p>She had right virtuous word in overcoming, as it appeared in the masters whom she vanquished so puissantly.</p>
  <p>Thirdly, she was marvellous in constancy, for she was most constant against the threatenings and menaces, for she despised them all and answered to the emperor: Tarry not to do the torments that thou hast purposed, for I desire to offer to God my blood, and make an end of that thou hast conceived in thy courage, I am ready to suffer all.</p>
  <p>Secondly, she was firm when great gifts were offered to her, for she refused all, and said to the emperor when he promised to hold her as second lady in his palace, and she said: I.eave to say such things, it is felonous to think it.</p>
  <p>Thirdly, she was constant in the torments that were done to her.</p>
  <p>Fourthly, she was constant in cleanness of chastity, for she kept chastity among those things that chastity is wont to perish.</p>
  <p>For there be five things in which chastity may perish, that is in pleasance of riches, convenable opportunity, flowering youth, freedom without constraint, and sovereign beauty.
  And among all these things the blessed Catherine kept her chastity, for she had great plenty of riches as she that was heir of rich parents; she had convenable leisure to do her will, as she that was lady of herself, and conversed all day among her servants which were young of age; she had freedom without any that governed her in her palace, and of these four it is said before, and she had beauty, so much that every man marvelled of her beauty.</p>
  <p>Fifthly, she was marvellous in privilege of dignity, for certain special privileges were in some saints when they died, like as :  </p>
  <ul>
  <li>the visitation of Jesu Christ was in S. John the Evangelist, </li>
  <li>the flowing of oil in S. Nicholas, </li>
  <li>the effusion of milk for blood that was in S. Paul, </li>
  <li>the preparation of the sepulchre that was in S. Clement, </li>
  <li>and the hearing and granting of the petitions that was in S. Margaret, when she prayed for them remembering her memory.</p>
  <p>All these things together were in this blessed virgin S. Catherine as it appeareth in her legend.</p>
  <p>Then let us devoutly worship this holy virgin and humbly pray her to be our advocatrice in all our needs bodily and ghostly, that by the merits of her prayers we may after this short and transitory life come unto the everlasting bliss and joy in heaven whereas is life perdurable.</p>
  <p>Quod ipse præstare dignetur qui cum patre et spiritu sancto vivit et regnat deus per omnia secula seculorum.</li>
  </ul>
  </div>

  <!-- Page 17 --><hr>

  <div id="body-inner">
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, barbara the great martyr, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, barbara the great martyr, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.jpg 1920w"></picture><figcaption>Barbara the great martyr</figcaption>
  </figure>
  <h2 id="st-barbara-following-the-golden-legend" class="yellow">St. Barbara following the Golden Legend</h2>
  <p>There was in <a href="#note_nicomedie" title="Nicomedy" id="nicomedie" class="yellow">Nicomedia</a>, at the time of Emperor <a href="#note_maximien" title="Maximian" id="maximien" class="yellow">Maximian</a>, a pagan named <span style="color: #99713d;">Dioscorus</span> who was from a very distinguished family with great wealth.</p>
  <p>He had a daughter of great beauty, who called <span style="color: #994c3d;">Barbara</span>.</p>
  <p>Her father loved her very much;
  And so that no man could see her, he put her in a very high tower that he raised.</p>
  <p>From his earliest age, <span style="color: #994c3d;">Barbara</span>, feeling the void of earthly things, began to apply to the meditation of things from heaven.</p>
  <p>After entering a temple, and seeing along the walls the statues of idols, she asked her parents:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«What do these images of human beings mean?»</span></td>
  </tr>
  </tbody>
  </table>
  <p>Her parents answered her:  </p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #b3884d;">—&nbsp;</span></td>
  <td><span style="color: #b3884d;">«Shut down; they are not human beings, but gods, and they want to be adored.»</span></td>
  </tr>
  </tbody>
  </table>
  <p><span style="color: #994c3d;">Barbara</span> says:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Were they human beings once?»</span></td>
  </tr>
  </tbody>
  </table>
  <p>And she was answered that yes.</p>
  <p>And she was reflecting on this day and night, saying herself:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«If our gods were human beings, they were born like human beings, they died like human beings; if they were gods, they would not be born and they would not be dead; because the Divinity, to it looks like to me, does not start and cannot stop.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>So she came to despise those supposed gods of wood or stone;
  but he still lacked knowledge of the true God.</p>
  <p>In the meantime, the renown spread to Nicomedia that there was in Alexandria a man of immeasurable wisdom, named <a href="#note_origene" title="Origen" id="origene" class="yellow">Origen</a>, who demonstrated the existence of true God and the vanity of idols.</p>
  <p>In learning this, <span style="color: #994c3d;">Barbara</span> was filled with joy, and she looked at how she could go to hear it.</p>
  <p>but she did not dare to talk to her father, and she adopted the idea of writing to Origen;
  what she did with the words:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="visibility:hidden;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«To Origen of Alexandria, whose glory is universally widespread, I, Barbara, of Nicomedia.</span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #df8f20;">From the very first dawn of my reason, I felt in all my heart the strongest desire to arrive to this knowledge, and I always thought that the Divinity could not be in images, work of our hands, that cannot speak nor hear.</span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #df8f20;">I also thought that those who had been human beings, and were represented as gods, could not be; because human being begins and ends, but God is before all times and after all times.</span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #df8f20;">And I put my confidence in this God who is unknown to me, but who created all things; I devoted my love to him, and I will spare nothing to get to know him.</span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #df8f20;">The fame of your talents came to me, and I thought, that you, venerable father, would take me to the science of this God you preach.</span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #df8f20;">And I hope you will disperse the darkness of my ignorance and that you will conduct me in the light of true faith.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>Having sent his letter to Origen, she prayed to the Lord weeping tears and saying:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Lord, strengthen the foot of the one that I sent to your servant, so that the light I have asked for comes.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>The messenger arrived in Alexandria,
  and he found Origen in the palace of the mother of Emperor Alexander, Mamaea,
  and he was busy preaching the doctrine of Jesus Christ.</p>
  <p>He received with great joy the letter from <span style="color: #994c3d;">Barbara</span>,</p>
  <p>and he praised God for that he would be arousing such enthusiasm,
  and rushed to answer her:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="visibility:hidden;">—&nbsp;</span></td>
  <td><span style="color: #165493;">«Origen, unworthy priest of Jesus Christ, and perhaps his preacher, still remaining in Alexandria, to Barbara, of the race of Gentiles, but by adoption of the race of the children of God and Jesus Christ.</span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #165493;">I will teach you, as you ask me, what is the real God.</span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #165493;">Know that it is one in substance and three in persons: the Father, the Son and the Holy Spirit.</span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #165493;">Whoever believes in this doctrine has what he needs to reach God.</span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #165493;">So add up to it credibility to complete what is lacking in your desire; see my envoy, he will inform you of law of God and he will read you the holy books he carries with him.</span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #165493;">Do not fear being exposed to great torments for the name of Jesus Christ.</span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #165493;">He said: “The one who loses for me his soul in this world shall keep it in eternal life”.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>Origen sent one of his disciples to confer with <span style="color: #994c3d;">Barbara</span>,
  and when she was told that he had arrived,
  she immediately said to have him to enter.</p>
  <p>The servant of God greeted her in the name of Jesus Christ.</p>
  <p>And now his father came,
  and seeing a stranger,
  he became scared and he said:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #b3884d;">—&nbsp;</span></td>
  <td><span style="color: #b3884d;">«What is this man and what is he doing?»</span></td>
  </tr>
  </tbody>
  </table>
  <p>The Alexandrine replied that he was educated about the science of medicine, and that he had a master who, against the usage of doctors, also healed souls.</p>
  <p>The father of <span style="color: #994c3d;">Barbara</span>, hearing that, withdrew and let them talk.</p>
  <p>And the christian, who called himself Valentin, explained to <span style="color: #994c3d;">Barbara</span> the sacred mysteries of religion,
  and he baptized her in that same tower where his father had put her,
  and handed over the books sent by Origen.</p>
  <p>She applied much to read them,
  and she did, albeit without master, great progress in the science of divine things.</p>
  <p>Some says that because of her beauty some nobles of that country falled in love for her,
  and they talked to her father so that she took a husband.</p>
  <p>And his father, going to the tower, sought to decide it, saying:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #b3884d;">—&nbsp;</span></td>
  <td><span style="color: #b3884d;">«My daughter, powerful figures remembered you, and told me that they would take you into marriage; what do you want to do?»</span></td>
  </tr>
  </tbody>
  </table>
  <p>She answered her father by looking at him with anger:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Don't force me to do this, my father».</span></td>
  </tr>
  </tbody>
  </table>
  <p>He left her,
  and getting away from her, he brought a large number of workers,
  and he ordered them to build a bathroom house, and he went to a far away country.</p>
  <p><span style="color: #994c3d;">Barbara</span> got down from the tower to see what has been done,
  and she saw that on the north side there were only two windows,
  and she told the workers:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Why did you make these two windows?»</span></td>
  </tr>
  </tbody>
  </table>
  <p>And they answered:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Your father ordered it so.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>She replied:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Make another window for me.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>And they responded:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«We fear that your father get annoyed at us.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>She says:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Do what I tell you, and I will bring my father to give his approval.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>So they made another window.</p>
  <p><span style="color: #994c3d;">Barbara</span> put with her own hand on the side of the orient, in this building, a precious cross;
  and, going back to the tower, she saw the idols that her father loved.</p>
  <p>Obeying to the inspiration of the Holy Spirit, she spit in their face and said:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Shall they become similar to you, those who make you and those who put their trust into you.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>When the building got finished, his father returned from his trip, and when he saw the three windows, he told the workers:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #b3884d;">—&nbsp;</span></td>
  <td><span style="color: #b3884d;">«Why did you make three windows?»</span></td>
  </tr>
  </tbody>
  </table>
  <p>They replied:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Your daughter ordered us.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>He then told his daughter:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Who did you order to make three windows?»</span></td>
  </tr>
  </tbody>
  </table>
  <p>She replied:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«I have had good reasons for doing so; because three windows illuminate the whole human being.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>And his father brought him with him in the bathroom, and told him:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #b3884d;">—&nbsp;</span></td>
  <td><span style="color: #b3884d;">«Why do three windows shed more light than two?»</span></td>
  </tr>
  </tbody>
  </table>
  <p>She replied:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«There are three that illuminate the world and set the course of stars: the Father, the Son and the Holy Spirit, and they are one in essence.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>So his father, full of fury, pulled his sword to kill her.</p>
  <p>But the Saint did her prayer to God,
  and the walls opened,
  and she was carried on a mountain where two shepherds were having their sheep grazing.</p>
  <p>His father began her search, and he went to these shepherds and asked them if they had seen his daughter.</p>
  <p>One of them, seeing how angry the father was because he did not know where she was, kept quiet; the other pointed her with his finger.</p>
  <p><span style="color: #994c3d;">St. Barbara</span> cursed the one who betrayed her,
  and on the spot he was changed into a marble statue,
  and his sheep were converted into grasshoppers;
  but this story is apocryphal.</p>
  <p>His father, found her, beat her, pulled her by hair
  and attached her with chains.</p>
  <p>He locked up in a dungeon
  and put guards there,
  and he went away to warn Proconsul <a href="#note_marcien" title="Marcian" id="marcien" class="yellow">Marcian</a> for all that happened.</p>
  <p>The proconsul wanted <span style="color: #994c3d;">Barbara</span> to be brought before him.
  When he saw him, he was struck by her great beauty, and he told her:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #165493;">—&nbsp;</span></td>
  <td><span style="color: #165493;">If you want to save yourself, sacrifice to the immortal gods, or you will die in the greatest torments.</span></td>
  </tr>
  </tbody>
  </table>
  <p>She replied:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">I want to offer myself in sacrifice to my God Jesus Christ, who has done heaven and earth and all that is contained therein.</span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #df8f20;">As for the demons you love, the prophet said:</span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #df8f20;">They have a mouth but do not speak; they have eyes but do not see; those who pay tribute to them will look like them.</span></td>
  </tr>
  </tbody>
  </table>
  <p>The proconsul, furious, ordered to strip her and beat her indiscriminately with beef nerve.</p>
  <p>And when all her body was in blood, he ordered to bring her back to prison until she had decided what torment he would inflict on her.</p>
  <p>In the middle of the night, great clarity wrapped the martyr, and　Jesus Christ appeared and told her:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #6c936c;">—&nbsp;</span></td>
  <td><span style="color: #6c936c;">Take courage, my daughter; there will be great joy in heaven and on earth during your passion; do not fear the threats of the tyrant; I'm with you to preserve all evils.</span></td>
  </tr>
  </tbody>
  </table>
  <p><span style="color: #994c3d;">St. Barbara</span> felt a great joy in the words of the Lord,
  and in the morning she reappeared in front of the proconsul, who, seeing that there was no trace of the blows she had received the day before, told her:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #165493;">—&nbsp;</span></td>
  <td><span style="color: #165493;">See how much the gods are in favour of you and they love you, because they have healed your wounds.</span></td>
  </tr>
  </tbody>
  </table>
  <p><span style="color: #994c3d;">Barbara</span> replied to him:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">Your gods are like you, deaf, blind and mute; how could they have healed me? </span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #df8f20;">The one who healed me is Jesus Christ, the Son of the living God; But you don't see it, because your heart is hardened by the devil.</span></td>
  </tr>
  </tbody>
  </table>
  <p>The proconsul, quivering like a infuriated lion, ordered that she has her ribs burned with the torches and her head beatten with a hammer.</p>
  <p>The Saint, looking at the sky, says:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">You know, Lord, that I am suffering for your love; don't leave me now.</span></td>
  </tr>
  </tbody>
  </table>
  <p>The impious proconsul commanded that she had her udders cut;
  and she says:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">Do not reject me out of your presence, Lord, and shall not deprive me of the Holy Spirit.</span></td>
  </tr>
  </tbody>
  </table>
  <p>He then ordered that she would be taken naked thrue the city, beattening her;
  and she says:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">Lord, you who are my support and covers the sky of clouds, cover my body, so that it is not exposed in the eyes of impiouses.</span></td>
  </tr>
  </tbody>
  </table>
  <p>And he descended from heaven a angel who brought him a white tunic.</p>
  <p>The proconsul ordered that she had her head cut;
  but his father seizes her and led her to the mountain,
  and she made that prayer:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">Lord Jesus, to whom all things obey, grant that those who invoke your holy name by remembering my martyrdom, finds their sins forgetten on the day of judgment.</span></td>
  </tr>
  </tbody>
  </table>
  <p>And she heard a voice that came from heaven and who replied:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #6c936c;">—&nbsp;</span></td>
  <td><span style="color: #6c936c;">«Come, my beloved; rest in the home of my father who is in heaven;  what you are asking for has been given to you.</span></td>
  </tr>
  </tbody>
  </table>
  <p>And the martyr had the head cut off by the hands of her own father.</p>
  <p>And when he came down from the mountain, the fire of heaven fell on him and consumed him,
  and not even a vestige of him remained.</p>
  <p>There was a powerful man, a Count of <a href="#note_saxe" title="Saxony" id="saxe" class="yellow">Saxony</a>,</p>
  <p>who made his enemy prisoner and locked it in a tower, defending, under the greatest penalties, that no one would give him to drink or eat.</p>
  <p>After he stayed there a few days,</p>
  <p>he prayed, moaning, the guardian of the tower, to give him, for the love of <span style="color: #994c3d;">St. Barbara</span>, a little bread, so that he would not die;
  the guard did not pay attention to his complaints,
  and he was lying felting faint;
  the guardian believed him dead,
  and asked the Count for permission to remove the corpse before he spread a bad smell;
  So they tied a rope to the neck of the one that was believed to be dead,
  and we rushed it down from the top of the rock.</p>
  <p>as soon as he hit the ground he stood up,
  and all those who were there escaped, seized of fear.</p>
  <p>He called them back and told them not to be afraid;
  And they came closer to him, and they asked how he could support his existence,
  and he answered them:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #165493;">—&nbsp;</span></td>
  <td><span style="color: #165493;">St. Barbara assisted me in all my sorrows; </span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #165493;">it was her who supported me in my fall, and I cannot die before I confessed myself and be received the holy communion,</span></td>
  </tr>
  </tbody>
  </table>
  <p>Asked why he had obtained this grace, he answered:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #165493;">—&nbsp;</span></td>
  <td><span style="color: #165493;">I never missed a year of fasting and praying on the day of St. Barbara's fest to make her happy, and that is why she asked God that I wouldn't die without having received the sacraments.</span></td>
  </tr>
  </tbody>
  </table>
  <p>And as soon as he received them, he breathed out.</p>
  <p>We also read that at the time of the king of the Romans, Adolphe, a count has been put at the head of the government of the provinces of Orient, and a soldier was accused of having made violence against a young girl.</p>
  <p>While he was in prison, waiting for his judgment, he asked to confess,
  and his confessor acknowledged that he was innocent, he had to go to the service of <span style="color: #994c3d;">St. Barbara</span>, and promised not to return home until he had made a pilgrimage in his honour.</p>
  <p>The woman was claiming out for a judgment, and the judges had come together and brought the accused before them, sentenced him to death;
  Then he introduced someone who no one knew, and who, having asked to speak, proved, for relevant and undeniable reasons, that the soldier was not guilty and that the sentence was unfair.</p>
  <p>And the judges revocked him;
  and the soldier, let back to freedom, ended his days in the service of <span style="color: #994c3d;">St. Barbara</span>,</p>
  <p>and the unknown man who served him as lawyer disappeared without nobody knew who he was.</p>
  </div>

  <div id="body-inner">
  <h3 id="note_nicomedie" class="yellow">Nicomedy</h3>
  <div class="notices yellow">
  <p><a href="https://en.wikipedia.org/wiki/Nicomedy" title="https://en.wikipedia.org/wiki/Nicomedy"><ruby lang="en">Nicomedy<rp>(</rp><rt lang="grc">Νικομήδεια</rt><rp>)</rp></ruby></a> is a city in Asia Minor, capital of the kingdom of <a href="https://en.wikipedia.org/wiki/Bithynie" title="https://en.wikipedia.org/wiki/Bithynie">Bithynia</a>. Today it is located in Turkey and is called Izmit. It was the capital of the emperors <a href="https://en.wikipedia.org/wiki/Dioclétien" title="https://en.wikipedia.org/wiki/Dioclétien">Diocletian</a> and <a href="https://en.wikipedia.org/wiki/Constantin_Ier_(empereur_romain)" title="https://en.wikipedia.org/wiki/Constantin_Ier_(empereur_romain)">Constantine</a>.</p>
  <p>back to note: <a href="#maximien" title="Maximian">Nicomedy↑</a></p>
  </div>
  <h3 id="note_maximien" class="yellow">Maximian</h3>
  <div class="notices yellow">
  <p><a href="https://en.wikipedia.org/wiki/Maximian_Hercule" title="https://en.wikipedia.org/wiki/Maximian_Hercule">Maximian Hercules</a>. Coemperor of the Roman Empire from 286 to 305 with <a href="https://en.wikipedia.org/wiki/Dioclétien" title="https://en.wikipedia.org/wiki/Dioclétien">Diocletian</a> for the East. Father of <a href="https://en.wikipedia.org/wiki/Maxence_(empereur_romain)" title="https://en.wikipedia.org/wiki/Maxence_(empereur_romain)">Maxentius</a>.</p>
  <p>back to note: <a href="#nicomedie" title="Nicomedy">Maximian↑</a></p>
  </div>
  <h3 id="note_origene" class="yellow">Origen</h3>
  <div class="notices yellow">
  <p><a href="https://en.wikipedia.org/wiki/Origen" title="https://en.wikipedia.org/wiki/Origen"><ruby lang="en">Origen<rp>(</rp><rt lang="grc">Ὠριγένης</rt><rp>)</rp></ruby></a> is a christian theologian, recognized Father of the Church but not a saint, born in Alexandria around 185 and died in Tyre around 253.</p>
  <p>back to note: <a href="#origene" title="Origen">Origen↑</a></p>
  </div>
  <h3 id="note_marcien" class="yellow">Marcian</h3>
  <div class="notices yellow">
  <p>No trace of this proconsul apart from the Golden Legend.</p>
  <p>back to note: <a href="#marcien" title="Marcian">Marcian↑</a></p>
  </div>
  <h3 id="note_saxe" class="yellow">Saxony</h3>
  <div class="notices yellow">
  <p>A region of Germany whose boundaries have varied throughout history; the Palatinate County of Saxony was a principality of the Holy Roman Empire. Founded by Emperor Otto Ist in the 10th century, it extended over what is now the Saale-Unstrut region in the south-east of the Duchy of Saxony.</p>
  <p>back to note: <a href="#saxe" title="Saxony">Saxony↑</a></p>
  </div>
  </div>

  <!-- Page 18 --><hr>

  <div id="body-inner">
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, Jean l'Évangéliste, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, Jean l'Évangéliste, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>John the Evangelist</figcaption>
  </figure>
  <h2 class="yellow" id="st-john-the-evangelist-according-to-the-golden-legend">St. John the Evangelist according to the Golden Legend</h2>
  <p>Chapter 9. St. John the Evangelist</p>
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
  <h3 class="yellow" id="persecuted-for-his-faith-by-domitian">persecuted for his faith by domitian</h3>
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
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1920.jpg 1920w"></picture><figcaption>detail of the central panel, “Salding of John the Evangelist by order of Emperor Domitian in front of the Latin Gate in Rome and departure for exile in the island of Patmos”</figcaption>
  </figure>
  <p><span style="color: #994c3d;">John</span>, apostle and evangelist, the beloved of the Lord the virgin elected man, departed for Asia when the apostles separated after Pentecost. There he founded many churches.</p>
  <p>In this time Emperor Domitian heard of him, ordered him to be brought to him and made him to be cast into a vat or a ton full of hot oil in front of the Latin Gate,
  of which he issued out, by the help of God, more pure and more fair, without feeling of any more heat or chauffing, than he entered in.</p>
  <p>After this that emperor saw that he ceased not to preach the christian faith, he sent him into exile unto an isle called Patmos, were alone, he wrote the Apocalypse.</p>
  <h3 class="yellow" id="the-raising-of-drusiana">the raising of drusiana</h3>
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
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1920.jpg 1920w"></picture><figcaption>detail of the central panel, column capital, “resurrection of Drusiana”</figcaption>
  </figure>
  <p>In this same year was Domitian the emperor, for his evils, put to death, and all that he had done was revoked by the senators and defeated,
  and thus was <span style="color: #994c3d;">St. John</span> brought again from his exile with great honour into Ephesus;
  and all the people of Ephesus came against him singing and saying:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #165493;">—&nbsp;</span></td>
  <td><span style="color: #165493;">«Blessed be he that cometh in the name of our Lord!» </span></td>
  </tr>
  </tbody>
  </table>
  <p>In that way he raised a woman which was named Drusiana, which had much loved <span style="color: #994c3d;">St. John</span> and well kept his commandments.</p>
  <p>And her friends brought her tofore <span style="color: #994c3d;">St. John</span> all weeping and saving to him:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #165493;">—&nbsp;</span></td>
  <td><span style="color: #165493;">Lo! here is Drusiana which much loved thee and did thy commandments, and is dead, and desired nothing so much as thy return, and that she might see thee tofore her death. </span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #165493;">Now thou art come hither and she may not see thee.</span></td>
  </tr>
  </tbody>
  </table>
  <p><span style="color: #994c3d;">St. John</span> had great pity on her that was dead, and of the people that wept for her, and commanded that they should set down the bier, and unbind and take away the clothes from her. And when they had so done he said, hearing all, with a loud voice,</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Drusiana, my Lord God Jesus Christ ariseth thee;　</span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #df8f20;">Drusiana arise, and go into thy house, and make ready for me some refection.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>Anon she arose and went in to her house for to do the commandment of <span style="color: #994c3d;">St. John</span>, and the people made three hours long a great noise and cry, saying there is but one God, and that is he whom <span style="color: #994c3d;">St. John</span> preacheth.</p>
  <h3 class="yellow" id="the-baptisma-of-crato">the baptisma of Crato</h3>
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
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/craton-1920.jpg 1920w"></picture><figcaption>detail of the central panel, column capital, “baptisma of Crato”</figcaption>
  </figure>
  <p>It happed on another day that Crato the philosopher made a great assembly of people in the midst of the city, for to show to them how they ought to despise the world.</p>
  <p>And he had ordained two young men brethren which were much rich, and had made them to sell their patrimony and therewith to buy precious stones, the which these two young men brake in the presence of the people,
  for to show how these precious and great riches of the world be soon destroyed.</p>
  <p>The apostle was going through there; he called the philosopher near him and criticized him for this kind of contempt for the world for <span style="color: #994c3d;">three reasons</span>:</p>
  <p><span style="color: #994c3d;">firstly</span>, <span style="color: #994c3d;">this refusal by the world was rented by men, but rejected by the divine judgment</span>; </p>
  <p><span style="color: #994c3d;">Secondly</span>, <span style="color: #994c3d;">this gesture, which does not serve the vice, is in vain, as is pointless any cure that does not involve a disease</span>.</p>
  <p><span style="color: #994c3d;">Finally</span>, <span style="color: #994c3d;">the contempt of the world is meritorious to the person who distributes his property to the poor</span>, following what the Lord said to a young man: <a href="#note_mathieu" title="If you wish to be perfect" id="mathieu" class="yellow">«If you want to be perfect, go, etc.»</a></p>
  <p>Craton replied:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #b3884d;">—&nbsp;</span></td>
  <td><span style="color: #b3884d;">«If your master is truly God and if he wants the price of these stones to be given to the poor, make them reconstituted: So you can turn to his glory what I did to praise men.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>So <span style="color: #994c3d;">St. John</span> gathered in his hand the fragments of the stones and put himself in prayer;
  the stones were returned to their first state.</p>
  <p>Immediately the philosopher and the two young people began to believe, sold the stones and distributed the prize to the poor.  </p>
  <h3 class="yellow" id="st-johns-sermons-against-material-wealth">st. john's sermons against material wealth</h3>
  <p>On this, in their example, two other young people from good families sold all their property, gave the product to the poor and followed <span style="color: #994c3d;">John</span>.
  But one day, they fired their replete servants of precious magnets, even though they had only one coat and they saddened themselves.</p>
  <p><span style="color: #994c3d;">St. John</span> noticed their sad mine; From the shore of the sea, he made branches and small stones and transformed them into gold and precious stones.</p>
  <p>On the order of the apostle, young people sought, for seven days, from all the experts in gold and precious stones and returned by saying that they had testified never to have seen or so pure or precious stones.</p>
  <p><span style="color: #994c3d;">John</span> then told them:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Go and redeem the lands you sold, since you lost the heavenly profit; flower in order to rot, enjoy temporal riches, to beg in eternity.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>And then the apostle began to distil a lot against wealth by showing that six causes must divert us from wanting immodestly.</p>
  <p>The <span style="color: #994c3d;">first</span> is <span style="color: #994c3d;">scripture</span>:</p>
  <p>He told the <a href="#note_hoteriche" title="story of the rich host" id="hoteriche" class="yellow">story of the rich host that the reproach and poor Lazare chose him</a>. </p>
  <p>The <span style="color: #994c3d;">second</span> cause is <span style="color: #994c3d;">nature</span>, because man is born without wealth or clothing and dies without wealth. </p>
  <p>The <span style="color: #994c3d;">third</span> is creation, because the sun, the moon, the stars, the rain, the air are common to all and distribute their benefits in common: similarly, all things should be common to all. </p>
  <p>The <span style="color: #994c3d;">fourth</span> cause is <span style="color: #994c3d;">fortune</span>, because the rich is the slave of money and devil: the slave of money, he does not possess wealth, but is possessed by wealth; slave to devil, the lover of money, according to the Gospel, serves Mammon (Matthew 6, 24; Luke 16, 13). </p>
  <p>The <span style="color: #994c3d;">fifth</span> is the <span style="color: #994c3d;">concern</span>, because the rich experience, both day and night, the concern and obsession to acquire and fear of losing. Indeed, they have trouble to acquire and fear to keep. </p>
  <p>The <span style="color: #994c3d;">sixth</span> cause is the <span style="color: #994c3d;">loss</span>:</p>
  <p>it showed that wealth causes a loss that lies in the acquisition of two evils: evil in life present, vanity, and evil in future life, eternal damnation.</p>
  <p>They cause, in eternal perdition, another loss, that of two goods, grace in the present life and eternal glory in future life.</p>
  <h3 class="yellow" id="the-resurrection-of-the-young-married-man">the resurrection of the young married man</h3>
  <p>Now, while <span style="color: #994c3d;">John</span> was in the process of disenfranchising the riches, now we brought the body of a young man who had been married for thirty days.</p>
  <p>Came his mother, his widow and all those who cried him; They threw himself at his feet by imploring him to resurrect the young man in the name of the Lord, as he did for Drusiana.</p>
  <p>So, immediately after having burdened himself in tears and prayers, he revived him and commanded him to tell both disciples what punishment they could incur and what glory they could lose.</p>
  <p>The young man told many things about the glory of heaven and the sentences of hell, which he had seen, and he said:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«O unfortunate, I saw your angels cry and demons rejoice.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>He told them that they could lose eternal palaces, built of sparkling stones, illuminated with prodigious clarity, abundant in rich banquets, full of delights, glorified by joys and destined to last forever.</p>
  <p>From hell, he presented eight retributions:</p>
  <p>«Towards and darkness, revulsion, cold and burning Regard of demon, remorse, pain».</p>
  <p>So, the risen young man and the two disciples cast himself to the feet of the apostle by asking him mercy.</p>
  <p>The apostle tells them:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Make penance for thirty days by praying that branches and stones return to their first nature.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>When it was done, he said:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Go carry these branches and stones where you took them.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>When they performed and the branches and stones were found in their first nature, they received all the grace of the virtues they had possessed before.</p>
  <h3 class="yellow" id="the-destruction-of-dianas-temple">the destruction of diana's temple</h3>
  <p><span style="color: #994c3d;">St. John</span> had preached to all of Asia.</p>
  <p>One day, the worms of the idol fomented a popular sedition
  and took him to the temple of Diane to force him to offer a sacrifice.</p>
  <p><span style="color: #994c3d;">John</span> offered them this alternative:  </p>
  <ul>
  <li>or they would succeed in convincing the Church of Christ to invoke Diane
  and then he would offer himself a sacrifice to the idols:  </li>
  <li>or he would succeed himself in making them to invoke the Christ to the temple of Diane
  and then they should believe in Christ.</p>
  <p>The majority of the people agreed;
  everyone came out of the temple, the apostle went into prayer and the temple collapsed;
  Diane's statue broke into a thousand pieces. </li>
  </ul>
  <h3 class="yellow" id="the-cup-of-poison">the cup of poison</h3>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, Jean l'Évangéliste, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, Jean l'Évangéliste, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>John the Evangelist holding a cup of poison</figcaption>
  </figure>
  <p>So Aristodeme, priest of the idols, gave rise to a strong argument among the people, so that part of this people was preparing to confront the other. The apostle says:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«What do you want to do? Say it and I'll do what you'll like.»</span></td>
  </tr>
  </tbody>
  </table>
  <p>The other replied:</p>
  <p>«If you want me to believe in your God, I will give you a drink of poison and if he does not hurt you, your lord will appear as the true God.»</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Do as you say» said the apostle.</span></td>
  </tr>
  </tbody>
  </table>
  <p>«I want first, say the priest, you'll see people die, for your greatest fear.»</p>
  <p>Aristodema therefore found the proconsul to be entrusted with two men destined for decapitation and, in front of the crowd, gave them poison.</p>
  <p>As soon as they drank her, they gave up the soul.</p>
  <p>So the apostle took the calyx and, by protecting himself by a sign of cross, goal all the poison, which was without any effect.</p>
  <p>All then went to praise God.</p>
  <p>But Aristodeme added:</p>
  <p>«I still have a doubt; But if you resurrect these two dead, I will believe really and without any doubt.»</p>
  <p>The apostle gave him his tunic.</p>
  <p>The other asked: «Why did you give me your tunic?»</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«So that you are confused and give up your false beliefs</span>, retorted the apostle.[/color]</td>
  </tr>
  </tbody>
  </table>
  <p>Do you really think that your tunic will make me believe?  said the other one.</p>
  <p>The apostle says:</p>
  <table>
  <thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><span style="color: #df8f20;">—&nbsp;</span></td>
  <td><span style="color: #df8f20;">«Go and throw it on the dead body by saying: </span></td>
  </tr>
  <tr>
  <td></td>
  <td><span style="color: #df8f20;">“The apostle of Christ sent me to you for you to resurface in the name of Christ”».</span></td>
  </tr>
  </tbody>
  </table>
  <p>The priest executed and the dead resurrected immediately.</p>
  <p>So the apostle named in the name of Christ the priest and the proconsul, who converged with their entire family and then built a church in honor of <span style="color: #994c3d;">St. John</span>.</p>
  </div>

  <div id="body-inner">
  <h2 id="notes" class="yellow">　notes</h2>
  <h3 id="note_nomdejean" class="yellow">name of John</h3>
  <div class="notices yellow">
  <p>On the meaning of the name of John in Hebrew, see also the <a href="#le-nom-de-jean" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean">«name “john”, its link with the institution, its etymology»</a>.</p>
  <p>back to the note: <a href="#nomdejean" title="name of John">name of John↑</a></p>
  </div>
  <h3 id="note_mathieu" class="yellow">If you wish to be perfect</h3>
  <div class="notices yellow">
  <p>This quote refers to a passage from the Gospel according to Matthew, chapter 19, verse 21:</p>
  <p><sup>21</sup> Jesus said, “If you wish to be perfect, go and sell your possessions and give the money to the poor, and you will have treasure in heaven; then come, follow me”.»</p>
  <p>In addition, the full text:</p>
  <p><sup>16</sup> And now a man came to him and asked, “Master, what good deed must I do to possess eternal life?”</p>
  <p><sup>17</sup> Jesus said to him, “Why do you ask me about what is good? There is one alone who is good. But if you wish to enter into life, keep the commandments”.</p>
  <p><sup>18</sup> He said, “Which ones?” Jesus replied, “These: You shall not kill. You shall not commit adultery. You shall not steal. You shall not give false witness.</p>
  <p><sup>19</sup> Honour your father and your mother. You shall love your neighbour as yourself.”</p>
  <p><sup>20</sup> The young man said to him, “I have kept all these. What more do I need to do?”</p>
  <p><sup>21</sup> Jesus said, “If you wish to be perfect, go and sell your possessions and give the money to the poor, and you will have treasure in heaven; then come, follow me”.</p>
  <p><sup>22</sup> But when the young man heard these words he went away sad, for he was a man of great wealth.</p>
  <p><sup>23</sup> Then Jesus said to his disciples, “In truth I tell you, it is hard for someone rich to enter the kingdom of Heaven.</p>
  <p><sup>24</sup> Yes, I tell you again, it is easier for a camel to pass through the eye of a needle than for someone rich to enter the kingdom of Heaven.»</p>
  <p>back to the note: <a href="#mathieu" title="If you wish to be perfect">If you wish to be perfect↑</a></p>
  </div>
  <h3 id="note_hoteriche" class="yellow">story of the rich host</h3>
  <div class="notices yellow">
  <p>This passage refers to the gospel according to Luke, chapter 16, verse 19 and following:</p>
  <p><sup>19</sup> «There was a rich man who used to dress in purple and fine linen and feast magnificently every day.</p>
  <p><sup>20</sup> And at his gate there used to lie a poor man called Lazarus, covered with sores,</p>
  <p><sup>21</sup> who longed to fill himself with what fell from the rich man's table. Even dogs came and licked his sores.</p>
  <p><sup>22</sup> Now it happened that the poor man died and was carried away by the angels into Abraham's embrace. The rich man also died and was buried.</p>
  <p><sup>23</sup> 'In his torment in Hades he looked up and saw Abraham a long way off with Lazarus in his embrace.</p>
  <p><sup>24</sup> So he cried out, “Father Abraham, pity me and send Lazarus to dip the tip of his finger in water and cool my tongue, for I am in agony in these flames”.</p>
  <p><sup>25</sup> – Abraham said, “My son, remember that during your life you had your fill of good things, just as Lazarus his fill of bad. Now he is being comforted here while you are in agony”.»</p>
  <p>This story is also told by John, more in detail: see <a href="https://www.catholic.org/bible/book.php?bible_chapter=11" title="https://www.catholic.org/bible/book.php?id=50&amp;bible_chapter=11" id="50">John chapter 11, verse 1-46</a></p>
  <p>back to the note: <a href="#mathieu" title="If you wish to be perfect">story of the rich host↑</a></p>
  </div>
  </div>

  <!-- Page 19 --><hr>

  <div id="body-inner">
  <h2 id="jean-selon-legende-2" class="yellow">St. John the Evangelist according to the Golden Legend</h2>
  <ol start="65">
  <li>saint John in front of the Latin gate</li>
  </ol>
  <p>John, appetizer and evangelist, preached in Ephese, when he was arrested by the proconsul and invited to sacrifice to the gods.</p>
  <p>As he refused, he was thrown in prison; We send to the Emperor Domitian a letter designating him as a sacrilege magician, contemptuous of the gods and prespeaker of the Crucified.</p>
  <p>By order of Domitian, John was then taken to Rome where, after having derisively cut his hair, in front of the gate of the city called «Latin», he was flogged and thrown into a cauldron of boiling oil under which a fiery fire was burning.</p>
  <p>But John felt no pain and came out completely unscathed, not burnt but anointed.</p>
  <p>In this view, Domitian was stunned and feared to put him to death. So, in this place, Christians have built a church, and today is solemnly celebrated as that of John's martyrdom. As he had not renounced preaching Christ, Domitian ordered to relegate him to the island of Patmos.</p>
  </div>

  <!-- Page 20 --><hr>

  <h2 id="jean-selon-legende-2" class="yellow">St. John the Evangelist according to the Golden Legend</h2>
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