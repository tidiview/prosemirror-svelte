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
    <h2 class="yellow">a major work by Hans Memling</h2>
    <section><article>
      <h3 class="yellow">the triptych of the Old St. John's Hospital in Bruges since the 15<sup>th</sup> century</h3>
      <section><article>
        <div class="notices yellow">
          <p>The triptych has been conceived and realised for the master altar of the new apse of the church of the Old St. John's Hospital of Bruges (in Flemish: Brugge) built in <time datetime="1473">1473</time>-<time datetime="1474">74</time>, where it still stands.</p>
          <p>The frame bears the inscription «<ruby lang="la">WORK<rp>(</rp><rt lang="fr">OPVs</rt><rp>)</rp>&nbsp;rp>(</rp><rt lang="fr"></rt><rp>)</rp>OF&nbsp;HANS<rp>(</rp><rt lang="fr">IOHANNIS</rt><rp>)</rp>&nbsp;<rp>(</rp><rt lang="fr"></rt><rp>)</rp>MEMLING<rp>(</rp><rt lang="fr">MEMLING</rt><rp>)</rp></ruby> », the first known signature of the flemish primitive painter of Bruges Hans MEMLING, and also the date: «<time datetime="1479">1479</time>».</p>
          <p>It has a central panel, framed by two panels on the right and left fixed by hinges.</p>
          <p>The characters depicted are a little smaller than life size.</p>
        </div>
      </article></section>
    </article></section>
    
    <section><article>
      <h3 class="yellow">about this article</h3>
      <section><article>
        <h4 class="yellow">objectives of this article</h4>
        <section><article>
          <p>The article we are writing aims to go beyond this first glance:</p>
          <ol>
              <li>we describe in detail the quantities of small scenes that Memling arranged in the landscape by means of <span style="color: #e6a64d;">quality reproductions</span> <a href="#note-1" title="note-1" id="reference-note-1"><sup style="color:#555;">note 1</sup></a>,</li>
              <li>connect them to the sources, whether textual or pictorial, which it is reasonable to assume directly inspired Memling,</li>
              <li>let us reconstruct a narrative that accounts for its coherence as well as its unity,</li>
              <li>let us make available the texts we report on so that our choices can be judged.</li>
            </ol>
            <p>Through this, we should enable the reader to become more familiar with Bruges society in the late 15<sup>th</sup> century, in particular:
            <ul>
              <li>of the Christian wonder of Jacobus de Varagine's <cite>The Golden Legend</cite>,</li>
              <li>from the sensibility of this current of religious reform, called “devotio moderna”,</li>
              <li>of the economic opulence, urban social magnificence of the late 15<sup>th</sup> century Duchy of Burgundy.</li>
            </ul>
            <p>Our aim will have been achieved if the reader finds himself in a position to <span style="color: #e6a64d;">measure and thus deepen his own perception</span> of a work which we believe deserves to hold the attention <span style="color: #e6a64d;">so great is the brilliance of its presence</span>.</p>
        </article></section>
      </article></section>

      <section><article>
      <h4 class="yellow">outline of this article</h4>
        <section><article>
          <p>In the following pages, we present the different aspects of this work:</p>
          <ol>
            <li>first by a <a href="#presentation-photographic" title="presentation-photographic" id="renvoi-presentation-photographique" class="yellow">photographic presentation of the work in its exhibition space</a>, the new apse of the hospital church,</li>
            <li>then by a <a href="/docs/en/bruges/hopital-saint-jean/saint-jean/page:2#description" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:2#description" class="yellow">detailed description of what it represents</a>,</li>
            <li>finally by the <a href="/docs/en/bruges/hopital-saint-jean/sint-jean/page:16#mise-en-relation" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:16#mise-en-relation" id="renvoi-mise-en-relation" class="yellow">relating the various elements of the image to the various texts</a> on which it is reasonable to assume that the painter himself relied in order to conceive his representation of religious subjects.</li>
          </ol>
        </article></section>
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
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-640.jpg" title="Hans Memling, “Triptych of John the Baptist and John the Evangelist”, view of the exhibition space from the entrance of the church of the Old St. John's Hospital, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans Memling, “Triptych of John the Baptist and John the Evangelist”, view of the exhibition space from the entrance of the church of the Old St. John's Hospital, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1920.jpg 1920w"></picture><figcaption>View of the exhibition space from the entrance of the church of the Old St. John's Hospital</figcaption>
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
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, view of the exhibition space from inside the church of Saint John's Hospital, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, view of the exhibition space from inside the church of Saint John's Hospital, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1920.jpg 1920w"></picture><figcaption>View of the exhibition space from inside the church of the St. John's Hospital</figcaption>
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
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist” from the apse of the church of Old St. John's Hospital, Memling Museum, Hospital St. John, Bruges" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist” from the apse of the church of Old St. John's Hospital, Memling Museum, Hospital St. John, Bruges" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1920.jpg 1920w"></picture><figcaption>View of the exhibition space from the apse of the church of the Old St. John's Hospital</figcaption>
    </figure>
  </article></section>

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
            “<a href="#devotion-moderne" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:4#devotion-moderne" class="yellow">devotio moderna</a>”
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
            <a href="#cath-selon-legende" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:16#cath-selon-legende" class="yellow">catherine of alexandria according to <cite>The Golden Legend</cite></a>
          </li>
          <li>
            <a href="#barbe-selon-legende" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:17#barbe-selon-legende" class="yellow">barbara the great martyr according to <cite>The Golden Legend</cite></a>
          </li>
          <li>
            <a href="#jean-selon-legende" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:18#jean-selon-legende" class="yellow">john the evangelist according to <cite>The Golden Legend</cite> chapter 9</a>
          </li>
          <li>
            <a href="#jean-selon-legende-2" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:19#jean-selon-legende-2" class="yellow">john the evangelist according to <cite>The Golden Legend</cite> chapter 65</a>
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
      <h3 id="table-des-matieres" class="yellow">references of this article</h3>
      <section><article>
        <p>For this article we are indebted to reference works, especially those of <a href="#de-vos-1" id="renvoi-de-vos-1" class="yellow">Dirk DE VOS, "Hans Memling - The Complete Works"</a> and <a href="#de-vos-2" id="renvoi-de-vos-2" class="yellow">"Hans Memling"</a>.</p>
      </article></section>

      <section><article>
        <h4 id="de-vos" class="yellow">references of the books cited by Dirk DE VOS:</h4>
        <section><article>
          <ul>
            <li>in french:
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
                  <td>Title</td>
                  <td>Published in</td>
                  <td>ISBN-10</td>
                  </tr>
                  <tr>
                  <td>Hans Memling: l'œuvre complète</td>
                  <td><time datetime="1994">1994</time></td>
                  <td>2-226-06992-5</td>
                  </tr>
                  <tr>
                  <td>Hans Memling: catalogue</td>
                  <td><time datetime="1994">1994</time></td>
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
                  <th><span hidden>hidden</span></th>
                  <th><span hidden>hidden</span></th>
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
                  <td><time datetime="1994">1994</time></td>
                  <td>0810936496</td>
                  </tr>
                  <tr>
                  <td>Hans Memling: Catalogue</td>
                  <td><time datetime="1994">1994</time></td>
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
                    <th><span hidden>hidden</span></th>
                    <th><span hidden>hidden</span></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>Title</td>
                    <td>Published in</td>
                    <td>ISBN-10</td>
                    </tr>
                    <tr>
                    <td>Hans Memling au Louvre (exposition, Musée du Louvre, Salle de la Chapelle, aile Sully, <time datetime="1995-05-18">18 Mai</time>-<time datetime="1995-08-14">14 Août 1995</time>)</td>
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
        <p>the reproductions of the work that we make available to the public are, to our knowledge, the best that currently available exist outside of professional works: they required a great deal of efforts from us due to the low intensity and yellow of the lighting in the exhibition space of the Memling Museum in Bruges at the time this article was first written (<time datetime="2018">2018</time>).</p>
        <footer>
          <p><a href="#renvoi-note-1" title="renvoi note-1">↑ retour au texte</a></p>
        </footer>
      </article></section>
    </article></section>
  </aside>

  <!-- Page 2 --><hr>

  <section><article>
    <h2 id="description" class="yellow">description of the work</h2>
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

    <section><article>
      <p>We first describe what <span style="color: #e6a64d;">the work represents</span> and for that we follow <span style="color: #e6a64d;">the path of the gaze</span>, starting with the <span style="color: #e6a64d;">main scene</span>.</p>
    </article></section>

    <section><article>
      <h3 id="couronnement" class="yellow">coronation of the virgin</h3>

      <section><article>
        <p>In the center, <span style="color: #e6a64d;">virgin Mary</span> thrones on a gold seat in front of a clothed cloth and under a red velvet baldaquin.</p>
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
      <h3 class="yellow">jesus child</h3>

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


    <!-- Page 3 --><hr>


    <section><article>
      <h3 id="catherine-d-alexandrie" class="yellow">catherine of Alexandria</h3>
      <section><article>
        <h4 class="yellow">catherine of Alexandria in the scene of then central panel</h4>
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
          <p><a href="https://en.wikipedia.org/wiki/Catherine_of_Alexandria" title="https://en.wikipedia.org/wiki/Catherine_of_Alexandria" id="catherine-d-alexandrie-2" class="yellow">Catherine of Alexandria</a> was, since the end of the 13<sup style="color:#555;">th</sup> century, a very popular saint whose legend, reported by <a href="https://en.wikipedia.org/wiki/Jacobus_da_Varagine" title="https://en.wikipedia.org/wiki/Jacobus_da_Varagine" class="yellow">Jacobus da Varagine</a> in <span style="color: #e6a64d;">chapter 168</span> of <a href="https://en.wikipedia.org/wiki/Golden_Legend" title="https://en.wikipedia.org/wiki/Golden_Legend" class="yellow"><cite>The Golden Legend</cite></a>, entitled <a href="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:16" title="https://francois-vidit.com/docs/fr/saint-jean/page:16" class="yellow">“Saint Catherine”</a>, is fascinating.</p>
          
            <p class="puce">read: <a href="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:6" title="https://francois-vidit.com/docs/fr/saint-jean/page:6" class="yellow">text of the <cite>Legend of Catherine of Alexandria</cite> according to chapter 168 of <cite>The Golden Legend</cite></a>.</p>
          
          <p>It is quite likely that Memling relied on this text.</p>
          <p>Although modern historians believe that Catherine of Alexandria has not really existed <sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">note 1</a></sup> and her cult was removed from the general calendar of the catholic church in <time datetime="1970">1970</time> <sup id="fnref1:2"><a href="#fn:2" class="footnote-ref">note 2</a></sup>.</p>
        </article></section>
      </article></section>

      <section><article>
        <h4 class="yellow">catherine of alexandria, her legend in the 15<sup>th</sup> century</h4>
        <section><article>
          <p>According to her legend, <span style="color: #e6a64d;">Catherine</span> is a <span style="color: #e6a64d;">patrician</span> known for her <span style="color: #e6a64d;">exceptional education</span> and her <span style="color: #e6a64d;">great beauty</span></p>
          <p>She may have lived in Alexandria in the 3<sup style="color:#555;">rd</sup> or 4<sup style="color:#555;">th</sup> centuries.</p>
          <p>She <span style="color: #e6a64d;">defies</span> the roman emperor of the time, <a href="https://en.wikipedia.org/wiki/Maxentius" title="https://en.wikipedia.org/wiki/Maxentius" class="yellow">Maxentius</a>, who then threatened christians with public abjuration.</p>
          <p>Maxence is surprised by this extraordinary woman, who offends and humiliates him by the relevance of her conversation.</p>
          <p>He struggles to maintain his dignity and, defeated at the end of a long spiritual battle full of twists and turns, proposes to her to marry him.</p>
          <p>Catherine, in the name of her faith, refused and chose to undergo martyrdom.</p>
          <p>At the time of his execution, Jesus' own voice would then have been heard from heaven to tell him:</p>
          <blockquote cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:17#barbe-selon-legende">
            <span style="color: #e6a64d;">«Come, my beloved, my beautiful one!»</span>
          </blockquote>
          <p>Due to the presence of Saint Catherine, the triptych has sometimes been called <span style="color: #e6a64d;">“the mystical marriage of Saint Catherine”</span> <sup id="fnref1:5"><a href="#fn:5" class="footnote-ref">note 3</a></sup>.</p>
        </article></section>
      </article></section>
    </article></section>
      
    <section><article>
      <h3 id="les-deux-jean" class="yellow">the two john</h3>
      <section><article>
        <h4 id="jean-le-baptiste-2" class="yellow">two twins: john the baptist, john the evangelist</h4>
        <section><article>
          <p>But more than Catherine of Alexandria, <span style="color: #e6a64d;">two men</span> are the main characters of the work:</p>
          <ol>
            <li>the many details that tell their two legends throughout the interior of the triptych <span style="color: #999;">(central panelm, right and left shutters)</span>,</li>
            <li>both are called <span style="color: #e6a64d;">"John"</span>, which, in a hollow way, materializes in the work <span style="color: #e6a64d;">the commissioning institution</span>, <span style="color: #e6a64d;">St. John's Hospital in Bruges</span> and justifies the current official name, <span style="color: #e6a64d;"><cite>Triptych of John the Baptist and John the Evangelist</cite></span>.</li>
          </ol>
          <p>they stand as <span style="color: #e6a64d;">twins</span>, standing, right and left, on either side of the virgin, framed, on the back.</p>
        </article></section>
      </article></section>

      <section><article>
        <h4 id="jean-le-baptiste-2" class="yellow">john the baptist</h4>
        <section><article>
          <p>On the back, on the left, the presence of a <span style="color: #e6a64d;">white lamb</span> allows us to identify <span style="color: #e6a64d;">the man wearing the</span> magnificent <span style="color: #e6a64d;">purple tunic</span> as <a href="https://en.wikipedia.org/wiki/John_the_Baptist" title="https://en.wikipedia.org/wiki/John_the_Baptist" id="jean-le-baptiste" class="yellow">John the Baptist</a>.</p>
          <p>The lamb recalls the word that John the Baptist spoke to his disciples to <span style="color #e6a64d;">announce</span> the coming of <span style="color: #e6a64d;">Jesus into the world</span> <span style="color: #999;">(John chapter 1 verse 29)</span>:
          <blockquote cite="https://en.wikisource.org/wiki/Bible_(World_English)/John#1:29" >
            <span style="color: #e6a64d;">«<ruby style="color:#e6a64d;" lang="en">This is&nbsp;the&nbsp;lamb&nbsp;of&nbsp;god<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="la">Ecce&nbsp;agnus&nbsp;dei</rt><rp>)</rp></ruby>»</span>.
          </blockquote>
          <p>In fact, John also refers with his right arm to the child Jesus.</p>
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
        <section><article>
          <p>The lamb is a new symbol of the christian faith.</p>
          <p>In contrast to the ancient hebraic faith, where, in order to please god, animals had to be sacrificed to him, christianity affirms that <span style="color: #e6a64d;">the only true sacrifice that pleases god</span> is that which <span style="color: #e6a64d;">the believer makes of himself</span>, in imitation of Jesus and in reference to this word of the prophet <a href="https://en.wikipedia.org/wiki/Isaiah" title="https://en.wikipedia.org/wiki/Isaiah" id="isaie" class="yellow">Isaiah</a> <span style="color: #999;">(Isaiah, chapter 53 verset 7)</span>:</p>
          <blockquote cite="https://en.wikisource.org/wiki/Bible_(World_English)/Isaiah#53:7">
            <span style="color: #e6a64d;">«afflicted he didn't open his mouth. As a <strong>lamb</strong> that is led to the slaughter»</span>.
          </blockquote>
          <p>Under his purple tunic is <span style="color: #e6a64d;">another tunic</span>, light brown, which the text tells us is <span style="color: #e6a64d;">camel hair</span> <span style="color: #999;">(Mark chapter 1 verse 6)</span>, imitating the hair garment of the prophet <a href="https://en.wikipedia.org/wiki/Elijah" title="https://en.wikipedia.org/wiki/Elijah" id="elie" class="yellow">Elijah</a> <span style="color: #999;">(2 Kings chapter 1 verse 8)</span>.</p>
          <p>This same hair garment also refers to an episode of Genesis <span style="color: #999;">(Genesis chapter 27 verses 1 to 40)</span> during which <a href="https://en.wikipedia.org/wiki/Jacob" title="https://en.wikipedia.org/wiki/Jacob" id="jacob" class="yellow">Jacob</a>, on the advice of his mother <a href="https://en.wikipedia.org/wiki/Rebecca" title="https://en.wikipedia.org/wiki/Rebecca" id="rebecca" class="yellow">Rebecca</a>, poses as his brother <a href="https://en.wikipedia.org/wiki/Esau" title="https://en.wikipedia.org/wiki/Esau" id="esau" class="yellow">Esau</a> who is very <span style="color: #e6a64d;">hairy</span>, with his blind father, <a href="https://en.wikipedia.org/wiki/Isaac" title="https://en.wikipedia.org/wiki/Isaac" id="isaac" class="yellow">Isaac</a>, by wearing <span style="color: #e6a64d;">a hair garment</span>.</p>
          <p>His cunning allows him to be unduly blessed and thus become the sole heir in Esau's place. This tunic is also a sign of domination of animality, and in the case of John the Baptist, the camel being an animal that allows to cross the desert, of domination of animality by asceticism.</p>
        </article></section>
      </article></section>

      <section><article>
        <h4 id="jean-l-evangeliste-3" class="yellow">john the evangelist</h4>
        <section><article>
          <p>On the other side, on the right, <span style="color: #e6a64d;">another man</span> standing, dressed like a priest, in <span style="color: #e6a64d;">red</span>, makes with his right hand the sign of the cross on <span style="color: #e6a64d;">a cup</span>, in which there is <span style="color: #e6a64d;">a serpent</span>: it is <a href="https://en.wikipedia.org/wiki/John_the_Apostle" title="https://en.wikipedia.org/wiki/John_the_Apostle" id="jean-l-evangeliste-4" class="yellow">John the Evangelist</a>.</p>
        </article></section>
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
          <section><article>      
          <p>We recognize <a href="https://en.wikipedia.org/wiki/John_the_Apostle" title="https://en.wikipedia.org/wiki/John_the_Apostle" id="jean-l-evangeliste" class="yellow">John the Evangelist</a> as an episode of the <a href="https://en.wikipedia.org/wiki/Golden_Legend" title="https://en.wikipedia.org/wiki/Golden_Legend" id="legende-doree-2" class="yellow"><cite>The Golden Legend</cite></a> <span style="color: #999;">(chapter 9)</span>, which we report <a href="#aristodeme" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" id="renvoi-aristodeme" class="yellow">here</a>.</p>
          <p>John faces <span style="color: #e6a64d;">Aristodemus</span>, priest of the temple of Diana in Asia <span style="color: #999;">(probably Ephesus)</span>, who publicly challenges him to <span style="color: #e6a64d;">drink</span> a <span style="color: #e6a64d;">poisoned cup</span>.</p>
          <p>The later makes, as Memling represents him, the <span style="color: #e6a64d;">sign of the cross</span>, drinks the cup but the poison does him no harm.</p>
          <p>The <span style="color: #e6a64d;">serpent</span> also refers to a word that Jesus addressed to <a href="https://en.wikipedia.org/wiki/Nicodemus" title="https://en.wikipedia.org/wiki/Nicodemus" id="nicodeme" class="yellow">Nicodemus</a> <span style="color: #999;">(John chapter 3 verses 14 to 15)</span>:</p>
          <blockquote cite="https://en.wikisource.org/wiki/Bible_(World_English)/John#Chapter_3">
            <span style="color: #e6a64d;">“As Moses lifted up the serpent in the wilderness, even so must the Son of Man be lifted up, that whoever believes in him should not perish, but have eternal life.”</span>.
          </blockquote>
        </article></section>
      </article></section>
      
      <section><article>
        <h4 id="le-nom-de-jean" class="yellow">the name «john», its link with the institution, its etymology</h4>
        <section><article>
          <h5 class="yellow">the etymology of the name «John» in Hebrew</h5>
          <section><article>
            <p>The etymology of the first name "John" comes from the hebrew <span style="color: #e6a64d;">«</span><ruby style="color:#e6a64d;" lang="fr">Yo<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">יו</rt><rp>)</rp>kha<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">ח</rt><rp>)</rp>nan<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">נן</rt><rp>)</rp></ruby><span style="color: #e6a64d;">»</span>, whose pronunciation is:</p>
            <p><audio controls="1" title="prononciation de Yokhanan en hébreu"><source src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/prononciation-yokhanan.mp3" type="audio/mpeg">Your browser does not support the audio tag.</audio></p>
            <p>which literally means <span style="color: #e6a64d;">«</span><ruby style="color:#e6a64d;" lang="fr">god<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">Yo</rt><rp>)</rp></ruby><span style="color: #e6a64d;">»</span> is <span style="color: #e6a64d;">«</span><ruby style="color:#e6a64d;" lang="fr">grace<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">khanan</rt><rp>)</rp></ruby><span style="color: #e6a64d;">»</span> or <span style="color: #e6a64d;">«</span><ruby style="color:#e6a64d;" lang="fr">mercy<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">khanan</rt><rp>)</rp></ruby><span style="color: #e6a64d;">»</span>.</p>
            <p>As «god» also means in hebrew «what is», it also means <span style="color: #e6a64d;">«the one who is»</span> <span style="color: #e6a64d;">«grace»</span> or <span style="color: #e6a64d;">«mercy»</span>.</p>
            <p>Although <span style="color: #e6a64d;">this first name</span> was used by several minor figures in the history of the hebrew people, it <span style="color: #e6a64d;">only became</span> very <span style="color: #e6a64d;">popular</span> after the appearance of christianity <span style="color: #e6a64d;">in the christian world</span>, following the very important role each of them played, roles that we will soon detail.</p>
          </article></section>
        </article></section>
      </article></section>
    </article></section>

    <section><article>
      <h3 id="barbe" class="yellow">barbara the great martyr</h3>
      <section><article>
        <h4 class="yellow">barbara the great martyr in the scene of the central panel</h4>
        <section><article>
          <p>On the other side of virgin Mary, on the front right, <span style="color: #e6a64d;">another woman</span>, dressed in <span style="color: #e6a64d;">a magnificent green wool tunic</span> as only Bruges produced in the 15<sup style="color:#555;">th</sup> century, <span style="color: #e6a64d;">reads</span>.</p>
          <p>Her presence corresponds to that of <a href="#catherine-d-alexandrie" class="yellow">Catherine of Alexandria</a> on the front of the other side.</p>
          <p>Behind her, <span style="color: #e6a64d;">a white stone tabernacle tower</span> tells us that it is <a href="https://en.wikipedia.org/wiki/Saint_Barbara" title="https://en.wikipedia.org/wiki/Saint_Barbara" id="barbe-la-grande-martyre" class="yellow">Barbara the great Martyr</a> <sup id="fnref1:3"><a href="#fn:3" class="footnote-ref">note 4</a></sup>.</p>
          <p>As with <a href="#catherine-d-alexandrie" class="yellow">Catherine of Alexandria</a>, modern historians doubt the reality of her existence and her name has also been removed from the general calendar <sup id="fnref2:2"><a href="#fn:2" class="footnote-ref">note 2</a></sup>.</p>
        </article></section>
    
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
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.jpg 1920w"></picture><figcaption>Barbara the great Martyr</figcaption>
        <</figure>>
      </article></section>

      <section><article>
        <h4 class="yellow">Barbara the great Martyr, its historical reality</h4>
        <section><article>
          <p>As with <a href="#catherine-d-alexandria" class="yellow">Catherine of Alexandria</a>, modern historians doubt the reality of her existence and her name has also been removed from the general calendar <sup id="fnref2: 2"><a href="#fn:2" class="footnote-ref">note 2</a></sup>; the text Memling relied on to represent her is also not part of <a href="https://en.wikipedia.org/wiki/Golden_Legend" title="https://en.wikipedia.org/wiki/Golden_Legend" id="legende-doree-2" class="yellow"><cite>The Golden Legend</cite></a> but, like other texts, was added to it later.</p>
          <p class="puce">read: <a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:7" title="https://francois-vidit.com/docs/en/saint-jean/page:7" class="yellow">text of the <cite>Legend of Beard the Great Martyr</cite> added to <cite>The Golden Legend</cite></a>.</p>
        </article></section>
      </article></section>

      <section><article>
        <h4 class="yellow">Barbara the great Martyr, her legend in the 15<sup>th</sup>.</h4>
        <section><article>
          <p>According to his legend, Barbara lives in <a href="https://en.wikipedia.org/wiki/Nicomedia" title="https://en.wikipedia.org/wiki/Nicomedia" id="nicomedie" class="yellow">Nicomedia</a>, capital of the former province of <a href="https://en.wikipedia.org/wiki/Bithynia" title="https://en.wikipedia.org/wiki/Bithynia" id="bithynie" class="yellow">Bithynia</a>, which is located in the north of present-day Turkey and overlooks the Black Sea.
          Barbara has the defect of being beautiful..., so beautiful, that when he was very young, <span style="color: #e6a64d;">his father emprisoned her in a tower</span>!</p>
          <p>The text teaches us that Barbara then feels <span style="color: #e6a64d;">«the nothingness of earthly things»</span> and begins to worry about <span style="color: #e6a64d;">«heavenly things»</span>.
          Although it was forbidden in her time, she gradually turned away from the roman gods and secretly wrote to the most famous christian of <a href="https://en.wikipedia.org/wiki/Alexandria" title="https://en.wikipedia.org/wiki/Alexandria" id="alexandrie" class="yellow">Alexandria</a> in Egypt, <a href="https://en.wikipedia.org/wiki/Origen" title="https://en.wikipedia.org/wiki/Origen" class="yellow">Origen</a>.
          The latter replied, fortifying her in her nascent faith, visiting her and secretly giving her the <span style="color: #e6a64d;">baptism</span>.</p>
          <p>Publicly <span style="color: #e6a64d;">denounced</span> later for refusing to sacrifice to the gods, she was martyred.
          Jesus' voice would then have been heard from heaven:</p>
          <blockquote cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:17#barbe-selon-legende">
            <span style="color: #e6a64d;">«Come, my beloved; rest in my father's house in heaven»</span>.
          </blockquote>
          <p>His own father cuts off her head.</p>
        </article></section>
      </article></section>

      <section><article>
        <h4 class="yellow">the host through the tower of Barbara the great Martyr</h4>
        <section><article>
          <p>Through the intertwining of the tower, <span style="color: #e6a64d;">a host</span> appears in <span style="color: #e6a64d;">a glass cylinder</span> mounted on a golden crescent moon.</p>
        </article></section>
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
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-840.jpg 840w"></picture><figcaption>detail of the central panel, a host appears through the intertwining of its tower, a host appears in a glass cylinder mounted on a golden crescent moon</figcaption>
        </figure>
        <section><article>
          <p>The <span style="color: #e6a64d;">host</span> is one of the attributes of the saint; it is also a link with the rest of the panel that reveals other aspects of it in the form of a <span style="color: #e6a64d;">«sacred conversation»</span>.</p>
        </article></section>
      </article></section>
    </article></section>


    <!-- Page 4 --><hr>


    <section><article>
      <h3 id="conversation" class="yellow">a sacred conversation</h3>
      <section><article>
        <h4 class="yellow">sacred conversation in the central panel scene</h4>
        <section><article>

          <section><article>
            <p>To <a href="https://fr.wikipedia.org/wiki/Marie_(mère_de_Jésus)" title="https://fr.wikipedia.org/wiki/Marie_(mère_de_Jésus)" id="marie-mere-de-jesus" class="yellow">Mary</a>'s coronation, the presence <span style="color: #e6a64d;">two</span> by <span style="color: #e6a64d;">two</span> of <a href="#catherine-d-alexandrie" title="Catherine d'Alexandrie" class="yellow">Catherine of Alexandria</a> and <a href="#barbe" class="yellow">Barbara the great Martyr</a>, <a href="#jean-le-baptiste-2" title="Jean le Baptiste" id="jean-le-baptiste-3" class="yellow">John the Baptist</a> and <a href="#jean-l-evangeliste-3" title="John the Evangelist" id="jean-l-evangeliste-4" class="yellow">John the Evangelist</a> adds a «<ruby style="color:#e6a64d;" lang="en">sacred conversation<rp>(</rp><rt style="font-size: 70%;letter-spacing: 1px;color:#e6a64d;" lang="it">sacra&nbsp;conversazione</rt><rp>)</rp></ruby>», that is, a <span style="color: #e6a64d;">meeting of saints</span> around the Virgin.</p>
          </article></section>
          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, a sacred conversation, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, a sacred conversation, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1920.jpg 1920w"></picture><figcaption>detail of the central panel, a sacred conversation</figcaption>
          </figure>
        </article></section>
      </article></section>

      <section><article>
        <h4 class="yellow">the two altar servers in the scene of the central panel</h4>
        <section><article>
          <p>This spirit of <span style="color: #e6a64d;">communion</span> is reinforced by the presence:</p>
          <ul>
            <li>on the left of the Virgin of <span style="color: #e6a64d;">a altar server</span> who plays a small <span style="color: #e6a64d;">organ</span> seated,</li>
            <li>and on the right of <span style="color: #e6a64d;">another</span> kneeling who presents her with <span style="color: #e6a64d;">a book</span>.</li>
          </ul>
        </article></section>
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
      </article></section>
    </article></section>

    <section><article>
      <h3 id="devotion-moderne" class="yellow">Sacred conversation, a remarkable expression of “devotio moderna”</h3>
      <section><article>
        <h4 class="yellow">symmetry, simplicity, distinction in the arrangement of the protagonists</h4>
        <section><article>
          <h5 class="yellow">symmetry, simplicity</h5>
          <section><article>
            <p>The symmetry and simplicity of the positions in relation to each other in the width matches the shape of the tryptic.</p>
          </article></section>

          <h5 class="yellow">distinction</h5>
          <section><article>
            <p>The height and depth organize themselves around the <span style="color: #e6a64d;">distinction between men and women</span>: on the <span style="color: #e6a64d;">front</span> below, <span style="color: #e6a64d;">two women</span>, on the <span style="color: #e6a64d;">back</span> in the upper part, <span style="color: #e6a64d;">two men</span>.</p>
            <p>The <span style="color: #e6a64d;">unfathomability</span> and <span style="color: #e6a64d;">mystery</span> in depth and height responds to the <span style="color: #e6a64d;">symmetry</span> and <span style="color: #e6a64d;">simplicity</span> of the width positions</p>
          </article></section>
        </article></section>
      </article></section>

      <section><article>
        <h4 class="yellow">similarities of physiognomies, variety of ages represented</h4>
        <section><article>
          <p>The characters depicted appear to be from <span style="color: #e6a64d;">the same family</span> and are <span style="color: #e6a64d;">of all ages</span>:</p>
          <ul>
            <li>newborn,</li>
            <li>small child,</li>
            <li>child,</li>
            <li>teenager,</li>
            <li>young man,</li>
            <li>woman,</li>
            <li>mother,</li>
            <li>man,</li>
            <li>mature man and woman.</li>
          </ul>
          <p>The <span style="color: #e6a64d;">similarity</span> of the physiognomies and the <span style="color: #e6a64d;">variety</span> of ages <span style="color: #e6a64d;">unifies</span> the whole.</p>
        </article></section>
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
      </article></section>

      <section><article>
        <h4 class="yellow">“devotio moderna”, a movement to reform the Christian faith in Flemish society in the 15<sup>th</sup> century</h4>
        <section><article>
          <p>We believe that this <span style="color: #e6a64d;">balance</span> is a remarkable feature of the 15<sup>th<sup> century Flemish society in which Memling lived.</p>
          <p>The very important Christian faith reform movement of this period, which historians call <a href="https://en.wikipedia.org/wiki/Devotio_Moderna" title="https://en.wikipedia.org/wiki/Devotio_Moderna" id="devotio-moderna" class="yellow">“devotio moderna”</a>, illuminates that familiar simple transparency of represented space. </p>
        </article></section>
        <footer>
          <p class="puce">for more information: <a href="#note-devotion-modern" title="note presentation of the "modern devotion" movement" id="renvoi-devotion-modern" class="yellow">“devotio moderna” as a historical religious movement of the 15<sup>th</sup> century</a></p>
        </footer>
      </article></section>

      <section><article>
        <h4 id="devotion-moderne" class="yellow">“devotio moderna”</h4>
        <section><article>
          <section><article>
            <p>In Flanders, at the time of Memling, for a book of Christian piety, <span style="color: #e6a64d;"><a href="https://en.wikipedia.org/wiki/Geert_Groote" title="https://en.wikipedia.org/wiki/Geert_Groote" id="imitation-de-jesus-christ" class="yellow">“<ruby>The&nbsp;imitation<rp>(</rp><rt>De&nbsp;imitatione</rt><rp>)</rp>&nbsp;<rp>(</rp><rt>&nbsp;</rt><rp>)</rp>of<rp>(</rp><rt>&nbsp;</rt><rp>)</rp>&nbsp;<rp>(</rp><rt>&nbsp;</rt><rp>)</rp>Jesus&nbsp;Christ<rp>(</rp><rt>Christi</rt><rp>)</rp></ruby>”</a></span>, is a huge publishing success <sup id="fnref1:4"><a href="#fn:4" class="footnote-ref">note 1</a></sup> .</p>
          </article></section>

          <section><article>
            <h5 class="yellow">text from <cite>The Imitation of Jesus Christ</cite></h5>
            <header>
              <p>One can read <sup id="fnref1:5"><a href="#fn:4" class="footnote-ref">note 2</a></sup>:</p>
            </header>
            <article>
              <ol class="doc">
                <li value="1">Man rises above the earth on two wings, <span style="color: #b37319;">simplicity</span> and <span style="color: #b37319;">purity</span>.</li>
                <li>Simplicity must be in <span style="color: #b37319;">intention</span>, and purity in <span style="color: #b37319;">affection</span>.</li>
                <li>Simplicity <span style="color: #9c6416;">seeks</span> God, purity <span style="color: #9c6416;">finds</span> him and <span style="color: #9c6416;">taste</span> him.</li>
                <li>No good work will be difficult for you if you are free of any disturbed affection.</li>
                <li value="5">If you only want what God wants and what is useful to the others, you will enjoy <span style="color: #9c6416;">inner freedom</span>.</li>
                <li>If your heart was right, then any creature would be a <span style="color: #9c6416;">mirror of life</span> to you and a <span style="color: #9c6416;">book filled with holy instructions</span>.</li>
                <li>There is no creature so small and so vile that would not present some <span style="color: #9c6416;">image of the goodness of God</span>.</li>
                <li>If you had enough <span style="color: #9c6416;">innocence</span> and <span style="color: #9c6416;">purity</span>, you would see everything <span style="color: #9c6416;">without impediments</span>.</li>
                <li>A pure heart penetrates heaven and hell.</li>
                <li value="10">Anyone judges of things from the outside according to what he is within himself.</li>
                <li>If there is some joy in the world, the pure heart owns it.
                And if there are anxieties and tribulations, above all they are known from bad conscience.</li>
                <li value="13">As the iron put on fire loses its rust and becomes blazing, so the one who gives himself unreservedly to God remains his languor and changes into a new man.</li>
              </ol>
            </article>
          </article></section>

          <section><article>
            <p>In the scene depicted by Memling, the sacred conversation functions in the terms of the text quoted above as a <q><span style="color: #e6a64d;">book filled with holy instructions</span></q> simple, pure, in accordance with the architectural plan.</p>
          </article></section>
        </article></section>
      </article></section>
    </article></section>
    
    <section><article>
      <h3 id="dispositif-architectural" class="yellow">architectural plan</h3>
      <section><article>
        <h4 class="yellow">the “devotio moderna”, mode of relationship between the protagonists of the represented scene and spectators</h4>
        <section><article>
          <p>The arrangement of the places represented, the apse of a church, allows the architectural device to function also in relation to the spectators of the triptych.</p>
          <p>We who look at the painting find ourselves de facto in the space of the painting, part of the sacred conversation, in the presence of the protagonists of the scene represented, in this relationship of simple, transparent, familiar otherness.</p>
          <p>From this point of view, Memling's work functions as <span style="color: #e6a64d;">a mirror of life</span>:</p>
          <ul>
            <li>On the one hand the viewers of the triptych, whether they were patients at St John's Hospital in Memling's time or us today <span style="color: #e6a64d;">“<em>conversing</em>”</span> with the figures depicted,</li>
            <li>on the other these <span style="color: #e6a64d;">“<em>act</em>”</span> here and now, as Bruges men and women of <time datetime="1479">1479</time> or visitors to the Memling Museum of the 21<sup>st</sup> century.</li>
          </ul>
        </article></section>
      </article></section>

      <section><article>
        <h4 class="yellow">devotio moderna, crystallisation of the marvellous of Bruges in the 15<sup>th</sup> century</h4>
        <section><article>
          <p>Finally, the exemplary arrangement of a representation in which the figures are adorned with the finest sartorial achievements of fifteenth</sup> century Bruges, crystallises the sense of <em>wonder</em>.</p>
          <p><span style="color: #e6a64d;">spiritual simplicity, evidence, ideality also produce</span> in a continuous <em>way</em> <span style="color: #e6a64d;">material sophistication and opulence</span>.</p>
          <p><a href="/docs/en/bruges/hopital-saint-jean/saint-jean/page:1#de-vos" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:1#de-vos" id="renvoi-de-vos-2" class="yellow">Dirk DE VOS</a> mentions:</p>
          <blockquote>
            <span style="color: #e6a64d;">“a world of virgins clad in gold brocade, silk and ermine, golden crowns and rare precious stones”</span> where <span style="color: #e6a64d;">"the infant Jesus beckons"</span> to the sick in an <span style="color: #e6a64d;">"atmosphere imbued with profound serenity"</span>.
          </blockquote>
          <p>In fact, in Bruges in the 15<sup>th</sup> century, simplicity and the obvious knew no bounds, leading <em>wonderfully</em> to the divine.</p>
        </article></section>
      </article></section>

      <section><article>
        <h4 class="yellow">the influence of Van Eyck on the architectural plan</h4>
        <section><article>
          <p>Memling is undoubtedly guided by this work by <a href="https://en.wikipedia.org/wiki/Jan_van_Eyck" title="https://en.wikipedia.org/wiki/Jan_van_Eyck" id="jan-van-eyck" class="yellow">Jan VAN EYCK</a> painted in <time datetime="1436">1436</time>, which he knows and will admire in the <a href="https://en.wikipedia.org/wiki/St._Donatian's_Cathedral" title="https://en.wikipedia.org/wiki/St._Donatian%27s_Cathedral" id="cathedrale-saint-donatien" class="yellow">St. Donatian Cathedral</a>: <a href="https://en.wikipedia.org/wiki/Virgin_and_Child_with_Canon_van_der_Paele" title="https://en.wikipedia.org/wiki/Virgin_and_Child_with_Canon_van_der_Paele" id="van-der-paele" class="yellow">“<ruby lang="en">Virgin&nbsp;and&nbsp;Child&nbsp;with&nbsp;Canon&nbsp;van&nbsp;der&nbsp;Paele<rp>(</rp><rt lang="nl">Madonna&nbsp;met&nbsp;kanunnik&nbsp;Joris&nbsp;van&nbsp;der&nbsp;Paele</rt><rp>)</rp></ruby>”</a>.</p>
        </article></section>
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
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1920.jpg 1920w"></picture><figcaption>Jan VAN EYCK, <ruby lang="en">Virgin and Child with Canon van der Paele<rp>(</rp><rt style="color:#999;font-size: 70%;letter-spacing: 2px;" lang="nl">Madonna met kanunnik Joris van der Paele</rt><rp>)</rp></ruby>, Musée Groeninge, Bruges</figcaption>
        </figure>
      </article></section>

      <section><article>
        <h4 class="yellow">Memling's innovation on the architectural plan compared to Van Eyck</h4>
        <section><article>
          <p>As in many of his other works, Memling removes to the apse <span style="color: #e6a64d;">walls</span>, <span style="color: #e6a64d;">windows</span> and makes <span style="color: #e6a64d;">the view to the outside continuous</span>.</p>
        </article></section>
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
        <section><article>
          <p>Six columns marbled with red and brown are arranged in a semi-circle on a tile and doubled on the outside by a second semi-circle of fasciculated dark grey pilasters.
          Their bases are connected by the edge line of the paving which shows a polygon on the ground.</p>
          <p>The thin vertical openings between the columns overlook a <span style="color: #e6a64d;">visually continuous landscape with ruins and buildings</span>, open to the distant, horizon and infinite.</p>
        </article></section>
      </article></section>

      <aside>
        <h3 id="note">Notes:</h3>
        <section><article>
          <h4 id="note-devotion-moderne">“devotio moderna”</h4>
          <section><article>
            <div class="notices yellow">
            <p>Born a little further north in the present Netherlands, in the Utrecht region at the end of the 14<sup style="color:#e6a64d;">th</sup> and beginning of the 15<sup style="color:#e6a64d;">th</sup> century, “<dfn>devotio moderna</dfn>” or modern devotion was initiated by a man, <a href="https://en.wikipedia.org/wiki/Geert_Groote" title="https://en.wikipedia.org/wiki/Geert_Groote" id="gerard-groote" class="yellow">Geert Groote</a>, who criticized the piety of his time, judging it too austere and too far from the world.
            In reaction, he exhorted the believer to let Christ dwell in the depths of his heart.
            According to him, this presence of Christ is intended to produce simplicity.
            The believer can then exercise an action in conformity with the virtue to which faith calls him, in a natural way, where he is.</p>
            </div>
            <footer>
              <p class="puce">back to the text: <a href="#renvoi-devotion-moderne" title="renvoi mouvement «dévotio moderna»">A detailed presentation of this movement can be found in note ↩</a></p>
            </footer>
          </article></section>

          <hr>

          <section><article>
            <div class="footnotes">
              <ol>
                <li id="fn:4">
                  <p>We follow the references given in Wikipedia's article (french edition) «l'Imitation de Jésus-Christ» (date: <time datetime="2018-08-21">2018 August 21<sup>st</sup></time>), namely:</p>
                  <p class="puce">Yann Sordet, Un succès de librairie européen: l'Imitatio Christi (<time datetime="1470">1470</time>-<time datetime="1850">1850</time>), Paris, Bibliothèque Mazarine; Editions des cendres, <time datetime="2012">2012</time>, 195 p. (ISBN 979-10-90853-01-0), p. 11.</p>
                  <p>According to specialists, its author is a monk: <a href="https://en.wikipedia.org/wiki/Thomas_à_Kempis" title="https://en.wikipedia.org/wiki/Thomas_%C3%A0_Kempis">Thomas A KEMPIS</a>.</p>
                </li>
              </ol>
            </div>
            <footer>
              <p class="puce"><a href="#fnref1:4" rev="footnote" class="footnote-backref">back to text ↩</a></p>
            </footer>
          </article></section>

          <hr>

          <section><article>
            <div class="footnotes">
              <ol start="2">
                <li id="fn:5">
                  <p>source:</p>
                  <p><cite href="https://fr.wikipedia.org/wiki/Thomas_a_Kempis#cite_ref-5">L'imitation de notre Seigneur Jésus Christ</cite>, trans. by F. de Lamennais, Éd. Arts et Métiers graphiques, Paris, <time datetime="1946">1946</time>, pp. 59-60, II, 4, 1-2 (part II, chapter 4, paragraphs 1 and 2).</p>
                  <p>original translation from us.</p></li>
                  </ul>
              </li>
              </ol>
            </div>
            <footer>
              <p class="puce"><a href="#fnref1:5" rev="footnote" class="footnote-backref">back to text  ↩</a></p>
            </footer>
          </article></section>
        </article></section>
      </aside>
    </article></section>


    <!-- Page 5 --><hr>

    <section><article>
      <h3 id="organisation-du-recit" class="yellow">organisation of the pictorial narrative around the legends of John the Baptist, John the Evangelist and the Old St John's Hospital</h3>
      <section><article>
        <h4 class="yellow">a number of small scenes</h4>
        <section><article>
          <p>The narrative is structured around a number of <span style="color: #e6a64d;">small scenes</span>
          <ul>
            <li>depicting <span style="color: #e6a64d;">the two legends</span>,
              <ul>
                <li>of John the Baptist</li>
                <li>and John the Evangelist</li>
              </ul>
            </li>
            <li>and representing the <span style="color: #e6a64d;">Crane's square</span> of Bruges linked to the St. John's Hospital.</li>
          </ul>
        </article></section>
      </article></section>

      <section><article>
        <h4 class="yellow">the narrative begins with the capitals of columns</h4>
        <section><article>
          <p>The two legends begin spatially with the <span style="color: #e6a64d;">sculpted scenes</span> above each saint in the <span style="color: #e6a64d;">column capitals</span>.</p>
        </article></section>
        <figure>
          <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-280.webp 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-380.webp 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-480.webp 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-640.webp 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-840.webp 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1280.webp 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1600.webp 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, details of the central panel, from left to right: the four capitals, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, details of the central panel, from left to right: the four capitals, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-280.jpg 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-380.jpg 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-480.jpg 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-640.jpg 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-840.jpg 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1280.jpg 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1600.jpg 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1920.jpg 1920w"></picture><figcaption>details of the central panel, from left to right: the four capitals</figcaption>
        </figure>
      </article></section>

      <section><article>
        <h4 class="yellow">the narrative continues with small scenes in the distance</h4>
        <section><article>
          <p>This manner of ordering the composition, which is found in many of Memling's other works, takes up the layout techniques of illumination <sup id="fnref1:6"><a href="#fn:6" class="footnote-ref">note 1</a></sup>: the various scenes are tiered up to a very high placed horizon.</p>
          <p>Small <span style="color: #e6a64d;">scenes</span> take place in the distant <span style="color: #e6a64d;">within the various framings</span> operated by the columns.</p>
        </article></section>
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
      </article></section>

      <section><article>
        <h4 class="yellow">the narrative concludes with each of the two inner shutters</h4>
        <section><article>
          <p>The narrative of the two legends then continues in each of the two inner panels.</p>
        </article></section>
        <figure>
          <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-280.webp 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-380.webp 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-480.webp 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.webp 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-840.webp 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1280.webp 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1600.webp 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, the right and left inner shutters: in the foreground on the left one, John the Baptist beheaded by Herod's order, on the right one, John the Evangelist in Patmos, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, the right and left inner shutters: in the foreground on the left one, John the Baptist beheaded by Herod's order, on the right one, John the Evangelist in Patmos, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-280.jpg 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-380.jpg 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-480.jpg 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.jpg 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-840.jpg 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1280.jpg 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1600.jpg 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1920.jpg 1920w"></picture><figcaption>the right and left inner shutters: in the foreground of the left one, John the Baptist beheaded by Herod's order, on the right one, John the Evangelist in Patmos</figcaption>
        </figure>
        <section><article>
          <p>On each shutter, an episode forms <span style="color: #e6a64d;">a main scene in the foreground</span>, completed in the narrative by <span style="color: #e6a64d;">small scenes in the distance</span>.</p>
          <ul>
            <li>on the left inner shutter, <span style="color: #e6a64d;">John the Baptist</span> has just been beheaded by <span style="color: #e6a64d;">Herod</span>'s order,</li>
            <li>on the right inner shutter, <span style="color: #e6a64d;">John the Evangelist</span> receives the «unveiling» of the text of <cite>The Revelation</cite> in <span style="color: #e6a64d;">Patmos</span>.</li>
          </ul>
        </article></section>
      </article></section>

      <section><article>
        <h4 class="yellow">Crane's square, symbolises the St. John hospital</h4>
        <section><article>
          <p>The view from the <ruby style="color:#e6a64d;" lang="en">Crane's&nbsp;square<rp>(</rp><rt style="color: #e6a64d;font-size: 70%;letter-spacing: 1px;" lang="nl">Kraanplaats</rt><rp>)</rp></ruby> and <span style="color: #e6a64d;">St. John's Church</span>, in the background to the right of the drapery of honour behind the virgin, behind John the Evangelist refers directly to the <span style="color: #e6a64d;">religious</span> leaders of the hospital <span style="color: #e6a64d;">sponsors of the work</span> and to the <span style="color: #e6a64d;">history</span> of the commissioning institution.</p>
        </article></section>
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
        <section><article>
          <p><span style="color: #e6a64d;">Two brothers from the hospital</span> are represented <span style="color: #e6a64d;">measuring the imported bordeaux wine</span> arriving in Bruges.</p>
          <p>This reminds us that the hospital was entrusted by the city around <time datetime="1300">1300</time> with a <span style="color: #e6a64d;">communal charge</span>, the <span style="color: #e6a64d;">«right to gauge»</span> from which the institution had its income.</p>
        </article></section>
      </article></section>

      <hr>

      <aside>
        <article>
          <section><article>
          <div class="footnotes">
          <ol>
            <li id="fn:6">
              <p>«at the time when the artist settled in Bruges, the city was one of the main centres of production of illuminated books in the burgundian Netherlands (...)</p>
              <p>Memling included a miniaturist among his Bruges relations: <a href="https://en.wikipedia.org/wiki/Willem_Vrelant" title="https://en.wikipedia.org/wiki/Willem_Vrelant">Willem Vrelant</a>.
              At the head of the city's most prolific pharmacy, Vrelant was, like Memling, an immigrant.</p>
              <p>Originally from Utrecht, he was mentioned in the Bruges booksellers' guild from <time datetime="1454">1454</time> until his death in <time datetime="1481">1481</time>.
              Both living in Sint-Jorisstraat, Vrelant and Memling were almost neighbours (...)</p>
              <p>From the point of view of a visually convincing spatial representation, the relationship between the two figures in the foreground and the rest of the table (... an) inconsistency governs the relationship between the main figure and the wood in the intermediate plane (...)</p>
              <p>From one work to another, we find the same cumulative layering of the different zones of the landscape up to a horizon placed very high (...) in Vrelant's work»</p>
          </li>
          </ol>
          </div>
          <footer>
            <p>source: book by Philippe LORENTZ referenced in <a href="/docs/en/bruges/hopital-saint-jean/saint-jean#lorentz" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean#lorentz" id="renvoi-lorentz-2" class="yellow">bibliography</a>.</p>
          </footer>
          </article></section>
          <footer>
            <p><a href="#fnref1:6" rev="footnote" class="footnote-backref">back to text ↩</a></p>
          </footer>
        </article>
      </aside>
    </article></section>

    <!-- Page 6 --><hr>

  <section><article>
    <h3 id="legendes" class="yellow">scenes from the legends of John the Baptist and John the Evangelist according to <cite>The Golden Legend</cite></h3>
    
    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, the right and left inner shutters: in the foreground on the left, John the Baptist beheaded by Herod's order, on the right, John the Evangelist in Patmos, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, the right and left inner shutters: in the foreground on the left, John the Baptist beheaded by Herod's order, on the right, John the Evangelist in Patmos, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1920.jpg 1920w"></picture><figcaption>the right and left inner shutters: in the foreground on the left, John the Baptist beheaded by Herod's order, on the right, John the Evangelist in Patmos</figcaption>
    </figure>

    <section><article>
      <h4 id="legende-de-jean-le-baptiste" class="yellow">scenes from <cite>the legend of John the Baptist</cite> according to <cite>The Golden Legend</cite></h4>
      <section><article>
        <p>We follow here each of <span style="color: #e6a64d;">two stories</span> on which Memling probably based himself as <a href="https://en.wikipedia.org/wiki/Jacobus_da_Varagine" title="https://en.wikipedia.org/wiki/Jacobus_da_Varagine" id="jacques-de-voragine" class="yellow">Jacobus da Varagine</a> reports them in <a href="https://en.wikipedia.org/wiki/Golden_Legend" title="https://en.wikipedia.org/wiki/Golden_Legend" id="legende-doree" class="yellow"><cite>The Golden Legend</cite></a>.</p>
      </article></section>

      <section><article>
        <p>As, in the scenes Memling painted, these texts are faithfully represented, we invite those who would like to feel more deeply the relationship of the triptych to the various texts to read them directly:</p>
        <ul>
          <li>read: <a href="https:/francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:18" title="https://francois-vidit.com/docs/en/saint-jean/page:18" class="yellow"> text of the <cite>Legend of John the Baptist</cite> from chapter 9 of <cite>The Golden Legend</cite></a>,</li>
          <li>read: <a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:19" title="https://francois-vidit.com/docs/en/saintjean/page:19" class="yellow">text of the <cite>Legend of John the Evangelist before the Latin Gate</cite> from chapter 65 of <cite>The Golden Legend</cite></a>.</li>
        </ul>
      </article></section>
    </article></section>

    <section><article>
      <h4 id="legende-de-jean-le-baptiste" class="yellow">scenes from <cite>the legend of John the Baptist</cite> according to <cite>The Golden Legend</cite></h4>
        <section><article>
          <p>We begin with John the Baptist who, in chronology, precedes John the Evangelist.</p>
          <p>In the upper left corner of the background of the central panel and on the left inner shutter appear scenes of his <span style="color: #e6a64d;">life</span> and <span style="color: #e6a64d;">martyrdom</span>.</p>
        </article></section>
        <figure>
          <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-280.webp 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-380.webp 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-480.webp 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-640.webp 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-840.webp 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1280.webp 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1600.webp 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, details of the central panel, “opening to the distance of the left half”: scenes from the legend of John the Baptist, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, details of the central panel, “opening to the distance of the left half”: scenes from the legend of John the Baptist, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-280.jpg 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-380.jpg 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-480.jpg 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-640.jpg 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-840.jpg 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1280.jpg 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1600.jpg 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1920.jpg 1920w"></picture><figcaption>details of the central panel, “opening to the distance of the left half”: scenes from the legend of John the Baptist</figcaption>
        </figure>

        <section><article>
          <h5 class="yellow">John the Baptist according to historical documents</h5>
          <section><article>
            <p>Historically, John is described as a Jewish <span style="color: #e6a64d;">preacher</span> in <a href="https://en.wikipedia.org/wiki/Galilee" title="https://en.wikipedia.org/wiki/Galilee" id="galilee" class="yellow">Galilee</a> of this time of <a href="https://en.wikipedia.org/wiki/Historical_Jesus" title="https://en.wikipedia.org/wiki/Historical_Jesus" id="jesus-de-nazareth" class="yellow">Jesus of Nazareth</a> according to the testimony of <a href="https://en.wikipedia.org/wiki/Josephus" title="https://en.wikipedia.org/wiki/Josephus" id="flavius-josephe" class="yellow">Flavius Josephus</a>, a 1<sup style="color:#555;">st</sup> century roman jewish historian (<span style="color: #999;"><a href="https://en.wikipedia.org/wiki/Antiquities_of_the_Jews" title="https://en.wikipedia.org/wiki/Antiquities_of_the_Jews" id="antiquites-judaiques" class="yellow">“Jewish Antiquities”</a>, book XVIII, chapter 5, paragraph 118).</span></p>
            <p>Galilee at that time was a province of the roman empire that experienced many revolts.</p>
            <p>Its population, mainly Jewish, is very religious;
            the biblical writings announce the coming of an envoy of god whose action will enable the jewish people to recover their independence and religious organization, in particular to rebuild <a href="https://en.wikipedia.org/wiki/Solomon's_Temple" title="https://en.wikipedia.org/wiki/Solomon'%27's_Temple" id="temple-de-salomon" class="yellow">
            Solomon's temple</a> in Jerusalem.</p>
          </article></section>
        </article></section>

        <section><article>
          <h5 class="yellow">John the Baptist according to the texts of the Christian faith</h5>
          <section><article>
            <p>In terms of christian faith, <span style="color: #e6a64d;"></span>John is, according to Luke's gospel <span style="color: #999;">(chapter 1 verses 5 to 25)</span>, <span style="color: #e6a64d;">the son of</span> <a href="https://en.wikipedia.org/wiki/Zechariah_(priest)" title="https://en.wikipedia.org/wiki/Zechariah_(priest)" id="zaccharie" class="yellow">Zechariah</a>, an old jewish priest from the galilean countryside to whom god himself announces by <a href="https://en.wikipedia.org/wiki/Gabriel" title="https://en.wikipedia.org/wiki/Gabriel" id="archange-gabriel" class="yellow">the archangel Gabriel</a> the birth of John when he was chosen by chance to go to Jerusalem and prays in the temple.</p>
          </article></section>

          <section><article>
            <h6 class="yellow">Scene of Gabriel's appearance to Zechariah on the left capital</h6>
            <section><article>
              <p>That's how Memling represents him on the left capital.</p>
            </article></section>
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
            <section><article>
              <p>The text indicates that because of that Zechariah loses his ability to speak.</p>
            </article></section>
          </article></section>

          <section><article>
            <h6 class="yellow">Scene of the birth of John on the right capital</h6>

            <section><article>
              <p>His birth is represented on the capital placed on the right.</p>
            </article></section>

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
          </article></section>

          <section><article>
            <h6 class="yellow">Choice of the name of John by Zechariah</h6>

            <section><article>
              <section><article>
                <p>The name of this son, «John», is also one of the issues in the story <span style="color: #999;">(Luke chapter 1 verses 59 to 63)</span>:</p>
              </article></section>
              <section><article>
                <blockquote cite="https://en.wikisource.org/wiki/Bible_(World_English)/Luke#1:59">
                  <section><article>
                    <p>«It happened on the eighth day, that they came to circumcise the child; and they would have called him Zechariah, after the name of the father. His mother answered,</p>
                    <p class="conversation"><span style="color: #e6a64d;">“Not so; but he will be called John.”</span></p>
                    <p>They said to her,</p>
                    <p class="conversation"><span style="color: #e6a64d;">“There is no one among your relatives who is called by this name!”</span></p>
                    <p>They made signs to his father, what he would have him called.</p>
                    <p>Zechariah asked for a writing tablet, and wrote,</p>
                    <p class="conversation"><span style="color: #e6a64d;">“His name is John.”</span>»</p>
                  </article></section>
                </blockquote>
              <section><article>
                <p>From the point of view of faith, <span style="color: #e6a64d;">John the Baptist</span> therefore <span style="color: #e6a64d;">comes into the world according to god's will</span>.</p>
              </article></section>
            </article></section>
          </article></section>

          <!-- Page 7 --><hr>


          <section><article>
            <h6 class="yellow">Scene of the asceticism of John in the distance of the central panel</h6>

            <section><article>
              <p>He then leads an exemplary life as an ascetic «in the desert» <span style="color: #999;">(Luke chapter 1 verse 80)</span>.</p>
              <p>Memling transposes this scene into the forest.</p></p>
            </article></section>

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
          </article></section>

          <section><article>
            <h6 class="yellow">Scene of the apostolate of John in the distance of the central panel</h6>

            <section><article>
              <p>We also see him «proclaiming a baptism of conversion for the forgiveness of sins» <span style="color: #999;">(Luke chapter 3 verse 3)</span>.</p>
            </article></section>

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

            <section><article>
              <p>John innovates in the judaism of his time:</p>
              <p>he advocates the forgiveness of sins no longer through the sacrifice of animals in the temple by cremation, but by <span style="color: #e6a64d;">«baptism»</span>, that is, according to the etymology of the word, <span style="color: #e6a64d;">«immersion»</span> in water.</p>
            </article></section>
          </article></section>

          <section><article>
            <h6 class="yellow">Scene of John the Baptist baptizing Jesus on the banks of the Jordan River in the far left inner shutter</h6>
            
            <section><article>
              <p>According to the biblical writings, he <span style="color: #e6a64d;">announces the coming of god's envoy</span> in the person of <a href="https://en.wikipedia.org/wiki/Historical_Jesus" title="https://en.wikipedia.org/wiki/Historical_Jesus" class="yellow">Jesus of Nazareth</a>, one of his contemporaries.</p>
              <p>He recognizes it by a baptism in the waters of the <a href="https://en.wikipedia.org/wiki/Jordan_River" title="https://en.wikipedia.org/wiki/Jordan_River" id="jourdain" class="yellow">Jordan</a>: this scene appears at the top of the left inner shutter.</p>
            </article></section>

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

            <section><article>
              <p>On the other bank, <span style="color: #e6a64d;">John the Baptist</span> presents Jesus with the words <span style="color: #e6a64d;">«</span><ruby style="color:#e6a64d;" lang="en">This is the lamb of god<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="la">Ecce&nbsp;agnus&nbsp;dei</rt><rp>)</rp></ruby><span style="color: #e6a64d;">»</span> to his first two disciples <a href="https://en.wikipedia.org/wiki/Andrew_the_Apostle" title="https://en.wikipedia.org/wiki/Andrew_the_Apostle" id="andre" class="yellow">Andrew</a> and <a href="https://en.wikipedia.org/wiki/John_the_Apostle" title="https://en.wikipedia.org/wiki/John_the_Apostle" id="jean-l-apotre" class="yellow">John the Apostle</a>; they join him.</p>
            </article></section>
          </article></section>

          <section><article>
            <h6 class="yellow">Scene of the arrest of John in the distance of the central panel</h6>

            <section><article>
              <p>From that point on, his story turns to tragedy.</p>
              <p>The tetrarch of Galilee and Perea, <a href="https://en.wikipedia.org/wiki/Herod_Antipas" title="https://en.wikipedia.org/wiki/Herod_Antipas" id="herode-antipas" class="yellow">Herod Antipas</a> married «<a href="https://en.wikipedia.org/wiki/Herod_II" title="https://en.wikipedia.org/wiki/Herod_II" id="herode-boethos" class="yellow">his brother Philip's wife</a> (<a href="https://en.wikipedia.org/wiki/Herodias" title="https://en.wikipedia.org/wiki/Herodias" id="herodiade">Herodias</a>)» <span style="color: #999;">(Mark chapter 6, verse 17)</span>;</p>
              <p>As the jewish faith regards any marriage with his brother's wife as <span style="color: #e6a64d;">«defiling»</span> and <span style="color: #e6a64d;">forbids</span> it <span style="color: #999;">(Leviticus chapter 18 verse 16; chapter 20 verse 21)</span>, John publicly condemns it.</p>
              <p><span style="color: #e6a64d;">Herod feared</span> that this would provoke «<span style="color: #e6a64d;">a revolt</span>, the crowd seeming ready to follow all the advice of this man.</p>
              <p>He therefore prefers to take him before any trouble occurs because of him, rather than to have to repent later if a movement takes place» <span style="color: #999;">(“Jewish Antiquities”, Book XVIII, chapter 5, paragraph 118)</span> <sup id="fnref1:2"><a href="#fn:2" class="footnote-ref">note 1</a></sup>.</p>
              <p>In the event of unrest caused by John's supporters, Herod had to answer to the roman authorities, who could dismiss him:</p>
              <p>he gives <span style="color: #e6a64d;">“the order to arrest John”</span> <span style="color: #999;">(Mark chapter 6, verse 17)</span>.</p>
            </article></section>

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

            <section><article>
              <p>On the central panel above the white lamb, <span style="color: #e6a64d;">John was forcibly taken</span> to the prison on the left side of the current city of <a href="https://en.wikipedia.org/wiki/Machaerus" title="https://en.wikipedia.org/wiki/Machaerus" id="macheronte" class="yellow"><ruby style="color:#e6a64d;" lang="en">Machaerus<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="la">μάχαιρα</rt><rp>)</rp></ruby></a>, whose ethymology in ancient greek means «sword» and which is located in present-day Jordan.</p>
            </article></section>

          </article></section>


          <hr>

          <aside>
            <article>
              <div class="footnotes">
            <ol>
              <li id="fn:2">
                for information, this quote is in the past, We're transposing it to the present.
            </li>
            </ol>
            </div>
              <footer>
                <p><a href="#fnref1:2" rev="footnote" class="footnote-backref">back to text ↩</a></p>
              </footer>
            </article>
          </aside>

          <!-- Page 8 --><hr>


            <section><article>
              <h6 class="yellow">Overview of the left inner shutter</h6>

              <section><article>
                <p>The action continues on the left inner shutter.</p>
              </article></section>

              <figure>
                <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-280.webp 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-380.webp 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-480.webp 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-640.webp 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-840.webp 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1280.webp 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1600.webp 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, view of the left inner shutter, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, view of the left inner shutter, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-280.jpg 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-380.jpg 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-480.jpg 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-640.jpg 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-840.jpg 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1280.jpg 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1600.jpg 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1920.jpg 1920w"></picture><figcaption>the left inner shutter</figcaption>
              </figure>
            </article></section>

            <section><article>
              <h6 class="yellow">Scene of Salome's dance in Herod's palace, inside left shutter</h6>

              <section><article>
                <p>To succeed in making John die without causing any troubles among his supporters, <span style="color: #e6a64d;">Herod imagined a staging</span>:</p>
                <p>«on his birthday», he organized «a dinner for his dignitaries, for the chiefs of the army and for the notables of Galilee.</p>
                <p>Herodiade <a href="https://en.wikipedia.org/wiki/Salome" title="https://en.wikipedia.org/wiki/Salome" id="salome" class="yellow">Salome</a>'s daughter» makes «her entrance» and dances.</p>
                <p>The <span style="color: #e6a64d;">"Dance of Salome"</span> takes place in a room in the tower of Herod's palace at the upper left of the left shutter, the wall of which Memling gutted to show the scene.</p>
                <p>Above, statues set in niches represent a naked man between two naked women, pagan figures who allude to Herod's adulterous behaviour.</p>
                <p>Overhead, statues set in niches depict a naked man between two naked women, pagan figures: they qualify the adulterous nature of the place and Herod's behavior.</p>
              </article></section>

              <figure>
                <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-280.webp 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-380.webp 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-480.webp 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-640.webp 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-840.webp 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1280.webp 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1600.webp 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the left inner shutter, “Salome's Dance”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the left inner shutter, “Salome's Dance”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-280.jpg 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-380.jpg 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-480.jpg 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-640.jpg 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-840.jpg 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1280.jpg 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1600.jpg 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1920.jpg 1920w"></picture><figcaption>detail of the left inner shutter, “Salome's Dance”</figcaption>
              </figure>

              <section><article>
                <section><article>
                  <p>Herod looks as if he liked his dance and, <span style="color: #e6a64d;">to avoid responsibility for John's death, says</span>: <span style="color: #999;">(Mark, chapter 6, verses 22 to 25)</span></p>
                </article></section>
                <section><article>
                  <blockquote cite="https://en.wikisource.org/wiki/Bible_(World_English)/Mark#6:22">
                    <ol class="doc">
                      <li value="22">
                        <p class="conversation">
                          «“<span style="color: #e6a64d;">Ask me whatever you want</span>, and I will give it to you”.
                        </p>
                      </li>
                      <li value="23">
                        <p>He swore to her,</p>
                        <p class="conversation">
                          “Whatever you shall ask of me, I will give you, up to half of my kingdom.”
                        </p>
                      </li>
                      <li value="24">
                        <p>Salome went out, and said to her mother,</p>
                        <p class="conversation">
                          <span style="color: #e6a64d;">“What shall I ask?”</span>»
                        </p>
                        <p>Herodias said,</p>
                        <p class="conversation">
                          «<span style="color: #e6a64d;">“The head of John, the one who baptises”</span>.
                        </p>
                      </li>
                      <li value="25">
                        <p>She came in immediately with haste to the king, and asked,</p>
                        <p class="conversation">
                          <span style="color: #e6a64d;">“I want you to give me right now the head of John the one who baptises on a platter.”</span>.
                        </p>
                      </li>
                    </ol>
                  </blockquote>
                </article></section>
                <section><article>
                  <p>Thus Herod can appear to put John to death against his will.</p>
                  <p>The proof that this whole story is indeed a smokescreen designed to allow John to be put to death without provoking a revolt by John's supporters is, as Jacobus da Varagine explains, that if Salome asks Herod <span style="color: #e6a64d;">«the death of her father <a href="https://en.wikipedia.org/wiki/Herod_II" title="https://en.wikipedia.org/wiki/Herod_II" id="herode-boethos-2" class="yellow">Philip</a> or her mother <a href="https://en.wikipedia.org/wiki/Herodias" title="https://en.wikipedia.org/wiki/Herodias" id="herodiade-2" class="yellow">Herodias</a>»</span>, Herod cannot consent to it <span style="color: #999;">(<cite>The Golden Legend</cite> chapter 121, paragraph I. <sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">note 1</a></sup> )</span>.</p>
                  <p>The only purpose of the smokescreen is indeed to avoid placing the responsibility for John's killing on Herod by falsely presenting him in the eyes of history as acceding to this request against his will.</p>
                </article></section>
              </article></section>
            </article></section>

            <section><article>
              <h6 class="yellow">Scene of the beheading of John in the courtyard of Herod's palace, from the inner left shutter</h6>

              <section><article>
                <p>So history is accomplishing itself, tragically.</p>
                <p>A guard is going to «behead John in the prison» <span style="color: #999;">(Mark, chapter 6, verse 28)</span>.</p>
              </article></section>
              
              <figure>
                <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-280.webp 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-380.webp 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-480.webp 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-640.webp 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-840.webp 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1280.webp 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1600.webp 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the left inner shutter, “Decollation of John the Baptist”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the left inner shutter, “Decollation of John the Baptist”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-280.jpg 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-380.jpg 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-480.jpg 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-640.jpg 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-840.jpg 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1280.jpg 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1600.jpg 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1920.jpg 1920w"></picture><figcaption>detail of the left inner shutter, “Decollation of John the Baptist”</figcaption>
              </figure>
            </article></section>
          </article>

          <hr>

          <aside>
            <article>
              <div class="footnotes">
              <ol>
                <li id="fn:1">
                  <p>words of <a href="https://en.wikipedia.org/wiki/Jerome" title="https://en.wikipedia.org/wiki/Jerome" id="saint-jerome" class="yellow">St. Jerome</a> reported by Jacobus da Varagine.&nbsp;</p>
              </li>
              </ol>
              </div>
              <footer>
                <p><a href="#fnref1:1" rev="footnote" class="footnote-backref">back to text ↩</a></p>
              </footer>
            </article>
          </aside>

          <!-- Page 9 --><hr>

          <article>
          <section><article>
            <h6 class="yellow">Detail of the decollation of John the Baptist, inside left shutter</h6>

            <section><article>
              <p>Memling has enlarged the scene in the foreground of the left shutter: we are in <span style="color: #e6a64d;">the inner courtyard of Herod's palace</span>.</p>
              <p>The execution site in the fortress is connected to the palace by <span style="color: #e6a64d;">a staircase</span> in the background.</p>
              <p><span style="color: #e6a64d;">The executioner</span> is shown from behind laying <span style="color: #e6a64d;">his head in the dish</span> presented to him by a <a href="https://en.wikipedia.org/wiki/Salome" title="https://en.wikipedia.org/wiki/Salome" id="salome-3" class="yellow">Salome</a> barely moved.</p>
            </article></section>
            <figure>
              <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-280.webp 280w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-380.webp 380w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-480.webp 480w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.webp 640w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-840.webp 840w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1280.webp 1280w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1600.webp 1600w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the left inner shutter, “the head of John the Baptist”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the left inner shutter, “the head of John the Baptist”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-280.jpg 280w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-380.jpg 380w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-480.jpg 480w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.jpg 640w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-840.jpg 840w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1280.jpg 1280w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1600.jpg 1600w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1920.jpg 1920w"></picture><figcaption>detail of the left inner shutter, “the head of John the Baptist”</figcaption>
            </figure>

            <section><article>
              <p>To the left of the executioner depicted from behind are the two disciples <a href="https://en.wikipedia.org/wiki/Andrew_the_Apostle" title="https://en.wikipedia.org/wiki/Andrew_the_Apostle" id="andre-2" class="yellow">Andre</a> and <a href="https://en.wikipedia.org/wiki/John_the_Apostle" title="https://en.wikipedia.org/wiki/John_the_Apostle" id="jean-l-apotre-2" class="yello">John the Apostle</a>.</p>
            </article></section>
          </article></section>

          <section><article>
            <h6 class="yellow">Memling's inspiration on Van Der Weyden for the scene of the beheading of John the Baptist, inside left shutter</h6>

            <section><article>
              <p><span style="color: #e6a64d;">The executioner</span> is represented from behind placing <span style="color: #e6a64d;">the head in the plate</span> presented to him by a barely moved <a href="https://en.wikipedia.org/wiki/Salome" title="https://en.wikipedia.org/wiki/Salome" id="salome-3" class="yellow">Salome</a>.</p>
              <p>Art historians have identified in the positions of the executioner and Salome <span style="color: #e6a64d;">a reuse by Memling of a similar scene</span> in a work by his master when he was the assistant of this painter in Brussels, <a href="https://en.wikipedia.org/wiki/Rogier_van_der_Weyden" title="https://en.wikipedia.org/wiki/Rogier_van_der_Weyden" id="rogier-van-der-weyden" class="yellow">Rogier VAN DER WEYDEN</a>.</p>
              <p>This is the left inner shutter of the <span style="color: #e6a64d;"><cite>Tryptic of St. John</cite></span> painted around <time datetime="1450">1450</time>-<time datetime="1455">55</time> in the <a href="https://en.wikipedia.org/wiki/Gemäldegalerie,_Berlin" title="https://en.wikipedia.org/wiki/Gem%C3%A4ldegalerie,_Berlin" id="gemaldegalerie" class="yellow"><ruby lang="en">Painting&nbsp;Gallery<rp>(</rp><rt lang="de">Gemäldegalerie</rt><rp>)</rp></ruby></a> of the <a href="https://en.wikipedia.org/wiki/Berlin_State_Museums" title="https://en.wikipedia.org/wiki/Berlin_State_Museums" id="musees-d-etat-de-berlin" class="yellow"><ruby lang="fr">Berlin&nbsp;State&nbsp;Museums<rp>(</rp><rt lang="de">Staatliche&nbsp;Museen&nbsp;zu&nbsp;Berlin</rt><rp>)</rp></ruby></a> <span style="color: #999;">(inventory reference: 534B)</span>.</p>
            </article></section>

            <figure>
              <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-280.webp 280w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-380.webp 380w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-480.webp 480w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.webp 640w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-840.webp 840w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1280.webp 1280w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1600.webp 1600w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.jpg" title="Rogier VAN DER WEYDEN, “Triptych of saint John”, detail of the left inner shutter, “Decollation of John the Baptist”, Painting Gallery, Berlin State Museums, Berlin" alt="Rogier VAN DER WEYDEN, “Triptych of saint John”, detail of the left inner shutter, “Decollation of John the Baptist”, Painting Gallery, Berlin State Museums, Berlin" class="class-40-img" ean="" le="" baptistesizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-280.jpg 280w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-380.jpg 380w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-480.jpg 480w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.jpg 640w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-840.jpg 840w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1280.jpg 1280w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1600.jpg 1600w,
              https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1920.jpg 1920w"></picture><figcaption>Rogier VAN DER WEYDEN, “Triptych of saint John”, detail of the left inner shutter, “Decollation of John the Baptist”, Painting Gallery, Berlin State Museums</figcaption>
            </figure>
          </article></section>

          <section><article>
            <h6 class="yellow">Scene of the burial and cremation of the body of John the Baptist in the background, inner central panel</h6>
            <section><article>
              <p>Mark's narrative continues: <span style="color: #e6a64d;"><q>When John's disciples heard this, they came and took his body and laid it in a tomb</q></span> <span style="color: #999;">(Mark, chapter 6, verse 29)</span>.</p>
              <p>According to tradition, this one was taken away from the territories controlled by Herod Antipas, to the West Bank in <ruby style="color: #e6a64d;" lang="en">Sebastee<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="grc">Σεβαστή</rt><rp>)</rp></ruby>, the actual village of <a href="https://en.wikipedia.org/wiki/Sebastia,_Nablus" title="https://en.wikipedia.org/wiki/Sebastia,_Nablus" id="sebastia" class="yellow"><ruby lang="en">Sebastia<rp>(</rp><rt lang="ar">سبسطية</rt><rp>)</rp></ruby></a> and buried with the prophets <a href="https://en.wikipedia.org/wiki/Elisha" title="https://en.wikipedia.org/wiki/Elisha" class="yellow">Elisha</a> and <a href="https://en.wikipedia.org/wiki/Obadiah" title="https://en.wikipedia.org/wiki/Obadiah" id="abdias" class="yellow">Abdias</a>.</p>

              <p>On the left of the central panel, on the right, behind John the Baptist, Memling has made this last scene of his legend appear.</p>
              <p>As his miracles kept occurring at John's burial site, to combat the nascent Christian faith, <a href="https://en.wikipedia.org/wiki/Julian_(emperor)" title="https://en.wikipedia.org/wiki/Julian_(emperor)" id="julien-l-apostat" class="yellow">Roman Emperor Julian the Apostate</a> ordered the body to be dug up, burned, and his ashes scattered across the fields.</p>
            </article></section>

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
          </article></section>

          <section><article>
            <h6 class="yellow">Detail of the wall in which the head of John the Baptist is hidden, inner central panel</h6>
            <section><article>
              <p>His head appears lower down in <span style="color: #e6a64d;">the opening of the wall</span>, behind <span style="color: #e6a64d;">a stone</span>.</p>


              <p>But things do not go as planned.</p>
              <p>According to legend, the head was buried separately by <span style="color: #e6a64d;">a potter from the city of Emesse</span>, the present <a href="https://en.wikipedia.org/wiki/Homs" title="https://en.wikipedia.org/wiki/Homs" id="homs" class="yellow"><ruby lang="en">Homs<rp>(</rp><rt lang="ar">حمص</rt><rp>)</rp></ruby></a> in Syria, and then is thought to have appeared to Saint Marcellus who discovered it by following a star <span style="color: #999;">(<cite>The Golden Legend</cite> chapter 121, paragraph III.)</span>.</p>
              <p>So his head appears further down in <span style="color: #e6a64d;">the opening in the wall</span>, behind <span style="color: #e6a64d;">a stone</span>.</p>
            </article></section>

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
            
            <section><article>
              <p>Thus ends the account of the legend of John the Baptist according to <cite>The Golden Legend</cite>.</p>
            </article></section>
          </article></section>
        </article></section>
      </article></section>


      <hr>

      <aside>
      <article>
        <div class="footnotes">
        <ol>
          <li id="fn:1">
            <dfn>Saint Marcellus of Apamea</dfn> in Syria (died in <time datetime="389">389</time>). Magistrate of the city, in the year <time datetime="375">375</time>, he left his wife and children, and devoted himself to a monastic life, was elected bishop of Apamea, Syria. He died murdered by the heathens while watching over the destruction of a temple of idols according to an edict of Emperor Theodosius. Celebrated on <time datetime="08-14">August 14<sup>th</sup></time>.
        </li>
        </ol>
        </div>
        <footer>
          <p><a href="#fnref1:1" rev="footnote" class="footnote-backref">back to text ↩</a></p>
        </footer>
      </article>
      </aside>

      <!-- Page 10 --><hr>


      <section><article>
        <h4 class="yellow" id="légende-de-jean-l’évangéliste">scenes from the legend of John the Evangelist according to <cite>The Golden Legend</cite> and <cite>The Revelation</cite></h4>

        <section><article>
          <p>On the central panel in the upper part on the right of the background appear some scenes of the legend of John the Evangelist.</p>
        </article></section>

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
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1920.jpg 1920w"></picture><figcaption>detail of the central panel, “opening on the distance of the right half of the central panel: scenes from the legend of John the Evangelist”</figcaption>
        </figure>

        <section><article>
          <h5 class="yellow">details on John the Evangelist according to <cite>The Golden Legend</cite> and <cite>The Revelation</cite></h5>

          <section><article>
            <p>Unlike John the Baptist, historically <span style="color: #e6a64d;">there is no historical document</span> other than those of the Christian faith.</p>
            <p>According to these documents and modern specialists, <span style="color: #e6a64d;">John the Evangelist can designate</span>:</p>
            <ol>
              <li><a href="https://en.wikipedia.org/wiki/John_the_Apostle" title="https://en.wikipedia.org/wiki/John_the_Apostle" id="jean-l-apotre" class="yellow">John the «Apostle»</a> who appears in the gospels of Mark, Luke, Matthew and the Acts of the Apostles,</li>
              <li><a href="https://en.wikipedia.org/wiki/Gospel_of_John" title="https://en.wikipedia.org/wiki/Gospel_of_John" id="disciple-que-jesus-aimait" class="yellow">the disciple whom Jesus loved</a> to write the gospel called «of John»,</li>
              <li><a href="https://en.wikipedia.org/wiki/John_of_Patmos" title="https://en.wikipedia.org/wiki/John_of_Patmos" id="jean-de-patmos" class="yellow">John «of Patmos»</a> writer of the text of <cite>The Revelation</cite>.</li>
            </ol>
            <p>We summarize the differences that distinguish these characters below.</p>
          </article></section>
        </article></section>

        <section><article>
          <h5 id="jean-l-apotre-2" class="yellow">John the “Apostle”</h5>

          <section><article>
            <ul>
              <li><p><a href="#aristodeme" title="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:8#aristodeme" id="jean-l-apotre-3" class="yellow">John «the Apostle»</a> is <span style="color: #e6a64d;">one of the two «sons of <a href="https://en.wikipedia.org/wiki/Zebedee" title="https://en.wikipedia.org/wiki/Zebedee" id="zebedee" class="yellow">Zebedee</a>»</span> <span style="color: #999;">(Mark chapter 3 verses 16 to 19, Matthew chapter 10 verses 2 to 5 and Luke chapter 6 verses 13 to 16)</span>.</li>
              <li>His brother is <a href="https://fr.wikipedia.org/wiki/Jacques_de_Zébédée" title="https://fr.wikipedia.org/wiki/https://fr.wikipedia.org/wiki/Jacques_de_Zébédée" id="jacques-le-majeur" class="yellow">James, known as «the Greater»</a>.</li>
              <li>Jesus called them the <span style="color: #e6a64d;">«sons of thunder»</span> <span style="color: #999;">(Mark chapter 3 verse 17)</span>.</li>
              <li>Like his brother and two other apostles, <a href="https://en.wikipedia.org/wiki/Saint_Peter" title="https://en.wikipedia.org/wiki/Saint_Peter" id="simon-pierre" class="yellow">Simon Peter</a> and <a href="https://en.wikipedia.org/wiki/Andrew_the_Apostle" title="https://en.wikipedia.org/wiki/Andrew_the_Apostle" id="simon-pierre" class="yellow">Andrew</a>, he is <span style="color: #e6a64d;">one of the fishermen of Lake Tiberias</span> who abandoned his nets to follow Jesus.</li>
              <li>From there, he witnessed:
                <ul>
                  <li>the <a href="https://fr.wikipedia.org/wiki/Transfiguration_(christianisme)" title="https://fr.wikipedia.org/wiki/Transfiguration_(christianisme)" id="transfiguration" class="yellow">transfiguration of Jesus</a> <span style="color: #999;">(Mark chapter 9 verse 2, Matthew chapter 17 verse 1 and Luke chapter 9 verse 28)</span>,</li>
                  <li>the <a href="https://en.wikipedia.org/wiki/Healing_the_mother_of_Peter%27s_wife" title="https://en.wikipedia.org/wiki/Healing_the_mother_of_Peter%27s_wife" id="guerison-de-la-belle-mere-de-pierre" class="yellow">healing of Simon Peter's mother-in-law</a> <span style="color: #999;">(Mark chapter 1 verse 29)</span>,</li>
                  <li>the <a href="https://en.wikipedia.org/wiki/Raising_of_Jairus%27_daughter" title="https://en.wikipedia.org/wiki/Raising_of_Jairus%27_daughter" id="fille-de-jaire" class="yellow">healing of Jairus' daughter</a> the ruler of the synagogue <span style="color: #999;">(Mark chapter 5 verse 37 and Luke chapter 8 verse 51)</span>,</li>
                  <li>was present with his brother when Jesus was tempted to renounce in the <a href="https://en.wikipedia.org/wiki/Agony_in_the_Garden" title="https://en.wikipedia.org/wiki/Agony_in_the_Garden" id="agonie-dans-le-jardin-des-oliviers" class="yellow">Garden of Gethsemane</a> <span style="color: #999;">(Mark chapter 13 verse 3)</span>, but he fell asleep <span style="color: #999;">(Mark chapter 14 verse 33)</span>.</li>
                </ul>
              </li>
            </ul>
          </article></section>
        </article></section>

        <section><article>
          <h5 id="disciple-que-jesus-aimait-2" class="yellow">the disciple whom jesus loved</h5>

          <section><article>
            <ul>
              <li>
                <p><a href="https://en.wikipedia.org/wiki/Gospel_of_John" title="https://en.wikipedia.org/wiki/Gospel_of_John" id="disciple-que-jesus-aimait-3" class="yellow">The disciple whom Jesus loved</a> appears at the end of the gospel called «of John» <span style="color: #999;">(John chapter 21 verse 20; verses 24 to 25)</span>:</p>
                <blockquote cite="https://en.wikisource.org/wiki/Bible_(World_English)/John#21:20">
                  “Then Peter, turning around, saw a disciple following. <span style="color: #e6a64d;"><em>This was the disciple whom Jesus sincerely loved</em></span>.”
                </blockquote>
                <p><span style="color: #999;">(…)</span></p>
                <blockquote cite="https://en.wikisource.org/wiki/Bible_(World_English)/John#21:24">
                  “This is <span style="color: #e6a64d;">the disciple who testifies</span> about these things</span>, and <span style="color: #e6a64d;">wrote these things.”
                </blockquote>
                <p>There is nothing in the text that allows us to call him «John», so the designation “Gospel of John” cannot be right: it should be the “Gospel of the disciple whom Jesus loved”.</p>
                <p>He is quite an extraordinary character: he is a disciple of Jesus among others with whom every reader can identify, he is loved by Jesus himself and therefore finds himself closer to him than anyone else.</p>
                <p>He does not hesitate, just after the previous excerpt, to give his opinion <span style="color: #999;">(John chapter 21 verse 25)</span>:</p>
                <blockquote cite="https://en.wikisource.org/wiki/Bible_(World_English)/John#21:25">
                  “There are also many other things which Jesus did, which if they would all be written, <span style="color: #e6a64d;"><span style="text-decoration: underline;">I</span></span> suppose that even the world itself wouldn't have room for the books that would be written.”
                </blockquote>
              </li>
              <li>
                <p>Jesus himself, on the occasion of a question from Peter, expresses a wish for his destiny at the Last Supper <span style="color: #999;">(John chapter 21 verses 21 to 23)</span>:</p>
                <blockquote cite="https://en.wikisource.org/wiki/Bible_(World_English)/John#21:21">
                <p>Peter seeing this disciple, said to Jesus,</p>
                <p class="conversation">
                  “Lord, what about this man?”
                </p>
                <p>Jesus said to him,</p>
                <p class="conversation">
                  “If I desire that he stay until I come, what is that to you?”
                </p>
              </blockquote>
            </li>
            <li>
              <p>It is also him who <q cite="https://en.wikisource.org/wiki/Bible_(World_English)/John#21:20">had also leaned on Jesus' breast</q>, he asks him who will betray him <span style="color: #999;">(John chapter 13 verses 23 to 26)</span>.</p>
            </li>
            <li>
              <p>At the crucifixion, Jesus entrusted his own mother to him, saying <span style="color: #999;">(John chapter 19 verses 26 to 27)</span>:</p>
              <blockquote cite="https://en.wikisource.org/wiki/Bible_(World_English)/John#19:26">
              <p class="conversation">
                “Woman, behold your son!”,
              </p>
              <p>Then he said to the disciple,</p>
              <p class="conversation">
                “Behold your mother!”.
              </p>
              </blockquote>
              </li>
              <li>
                <p>When Mary Magdalene discovered the empty tomb, she ran to tell the «beloved disciple» and Peter; he was the first to reach the tomb <span style="color: #999;">(John chapter 20 verses 2 to 8)</span>.</p>
              </li>
              <li>
                <p>He was the first to recognize Jesus at Lake Tiberias after his resurrection <span style="color: #999;">(John chapter 21 verse 7)</span>.</p>
              </li>
            </ul>
          </article></section>
        </article></section>

        <section><article>
          <h5 id="jean-de-patmos-2" class="yellow">john of patmos</h5>
          <section><article>
              <ul>
                <li><p><a href="https://en.wikipedia.org/wiki/John_of_Patmos" title="https://en.wikipedia.org/wiki/John_of_Patmos" id="jean-de-patmos-3" class="yellow">John of Patmos</a> appears at the beginning of the text of <cite>The Revelation</cite> which presents him as <span style="color: #999;">(<cite>The Revelation</cite> chapter 1 verses 1 to 9)</span>:</p>
                <p class="conversation">
                  a <q style="color: #e6a64d;quotes: '«' '»'" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#1:1">servant</q> <span style="color: #e6a64d;">to whom god</span> <span style="color: #999;">(…)</span> <q style="color: #e6a64d;quotes: '«' '»'" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#1:1">sent and made known by his angel</q> <span style="color: #999;">(…)</span> <q style="color: #e6a64d;quotes: '«' '»'" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#1:1">the things which must happen soon</q> <span style="color: #999;">(…)</span> <q style="color: #e6a64d;quotes: '«' '»'" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#1:1">to the seven churches in Asia Minor</q>.
                </li>
              </ul>
          </article></section>
        </article></section>

        <section><article>
          <h5 id="jean-de-patmos-2" class="yellow">john the evangelist in relation to <cite>The Golden Legend</cite></h5>

          <section><article>
            <section><article>
              <p>The representation of John the Evangelist broadly follows the account established by Jacobus da Varagine in <span style="color: #e6a64d;">Chapters 9</span> and <span style="color: #e6a64d;">65</span> of <cite>The Golden Legend</cite>.</p>
            </article></section>
            <section><article>
              <ul>
                <li>read: <a href="https:/francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:18" title="https://francois-vidit.com/docs/en/saint-jean/page:18" class="yellow"> text of the <cite>Legend of John the Baptist</cite> from chapter 9 of <cite>The Golden Legend</cite></a>,</li>
                <li>read: <a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:19" title="https://francois-vidit.com/docs/en/saintjean/page:19" class="yellow">text of the <cite>Legend of John the Evangelist before the Latin Gate</cite> from chapter 65 of <cite>The Golden Legend</cite></a>.</li>
              </ul>
            </article></section>
          </article></section>
        </article></section>

        <section><article>
          <h5 id="jean-a-la-porte-latine" class="yellow">john the evangelist scalded by order of emperor domitian in front of the latin gate in rome and departure for exile in the island of patmos</h5>

          <section><article>
            <section><article>
              <p>The narrative starts on the central panel <span style="color: #999;">(chapter 65)</span> <sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">note 1</a></sup>:</p>
            </article></section>
            <section><article>
              <ol class="doc">
                <li>«<span style="color: #e6a64d;">John</span> was preaching at Ephesus when he was arrested by the proconsul and invited to sacrifice to the gods.</li>
                <li>As he refused, he was thrown into prison; a letter was then sent to the <span style="color: #e6a64d;">Emperor Domitian</span> designating him as a sacrilegious magician, contender of the gods and worshipper of the Crucified.</li>
                <li>By order of Domitian, John was then taken to Rome where, after having derisively cut his hair, in front of the <span style="color: #e6a64d;">gate</span> of the city called «<span style="color: #e6a64d;">Latin</span>», he was flogged and thrown into a cauldron of boiling oil under which a fiery fire was burning».</li>
              </ol>
            </article></section>
          </article></section>

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

          <section><article>
            <section><article>
              <ol class="doc">
                <li>«But John felt no pain and came out completely unscathed, not burnt but anointed.
                In this view, Domitian was stunned and feared to put him to death.
                So, in this place, Christians have built a church, and today is solemnly celebrated as that of John's martyrdom.».</li>
              </ol>
            </article></section>
            <section><article>
              <p>The representation of Memling shows on the horizon on the left, this <span style="color: #e6a64d;">church</span>, on the right, the <span style="color: #e6a64d;">Colosseum of Rome</span> and the <span style="color: #e6a64d;">Latin Gate</span>.</p>
            </article></section>
            <section><article>
              <ol class="doc">
                <li>«The emperor, realizing that he was not renouncing preaching, exiled him to <span style="color: #e6a64d;">the island of Patmos</span>», <span style="color: #999;">(the departure for Patmos appears in the middle: some men board a boat)</span> «where, in solitude, he wrote <span style="color: #e6a64d;"><cite>The Revelation</cite>» <span style="color: #999;"></span>(chapter 9)</span>.</li>
              </ol>
            </article></section>
          </article></section>
        </article></section>

        <section><article>
          <h5 id="description-right-shutter" class="yellow">Overview of the right inner shutter: John bears witness to <cite>The Revelation</cite> in Patmos.</h5>

          <section><article>
            <p>The right inner shutter is entirely dedicated to the visions John had in Patmos <sup id="fnref1:2"><a href="#fn:2" class="footnote-ref">note 2</a></sup>.</p>
            <p>Memling's representation is particularly noteworthy because while there are many representations of <cite>The Revelation</cite> as a succession of paintings, in contrast there are very few that assume a unity of the space of representation.</p>
            <p>And for good reason: the narrative of John of Patmos presents a remarkable complexity.</p>
            <p>And yet Memling succeeds in the tour-de-force of making the space of representation as credible, supernaturally complex as the narrative.</p>
          </article></section>

          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “John the Evangelist in Patmos”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “John the Evangelist in Patmos”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “John the Evangelist in Patmos”<br><q cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse" style="quotes:'«' '';">Immediately I was in the Spirit. Behold, there was a throne set in heaven</q> (…) Before the throne was something like a sea of glass, similar to crystal», <cite>The Revelation</cite>, excerpts of chapters 4 to 12.</figcaption>
          </figure>

          <section><article>
            <p>Memling represents the apostle, sitting on a circular rock, the island of Patmos in the middle of the Aegean Sea.</p>
            <p>He holds a feather and a penknife in his hand, and on his knees one can see a notebook.
            John is represented when he has not yet even begun to write, <span style="color: #e6a64d;">in the blink of an eye</span>, at the very moment when he is seized by the <span style="color: #e6a64d;">«Apocalypse»</span>, which in ancient Greek means <span style="color: #e6a64d;">«unveiling»</span> and has been translated into <span style="color: #e6a64d;">«revelation»</span>: these visions appear above him in the sky, on the water and on the nearby land on all the rest of the shutter.</p>
          </article></section>
        </article></section>

        <section><article>
          <p>We choose to follow John's own way to tell <sup id="fnref1:3"><a href="#fn:3" class="footnote-ref">note 3</a></sup> the unveiling in the text <span style="color: #999;">(<cite>The Revelation</cite> chapter 4 verse 2 and verse 6)</span>, which begins at the top left of the shutter: this way it is possible to compare the text with Memling's representation of it.</p>
        </article></section>

        <section><article>
          <p class="puce">read: <a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse">text excerpt of <cite>The Revelation</cite> related to the representation of John in Patmos on the left inner shutter by Hans Memling</a>.</p>
        </article></section>

        <section><article>
          <h5 class="yellow">Vision of the throne of god, the heavenly court and the lamb - <cite>The Revelation</cite>, chapters 4 verse 2 to chapter 6 verse 1</h5>

          <section><article>
            <header>
              <ol class="doc">
                <li>chapter 4</li>
              </ol>
            </header>

            <blockquote id="renvoi-apocalypse-4-2" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-4-2">
              <ol class="doc">
                <li value="02">Immediately I was in the <span style="color: #e6a64d;">Spirit</span>. Behold, there was a <span style="color: #e6a64d;">throne</span> set in <span style="color: #e6a64d;">heaven</span>, and <span style="color: #e6a64d;">one</span> sitting on the throne</li>
                <li value="03">that looked like a jasper stone and a sardius. There was a <span style="color: #e6a64d;">rainbow</span> around the throne, like an emerald to look at.</li>
                <li value="04">Around the throne were twenty-four thrones. On the thrones were <span style="color: #e6a64d;">twenty-four elders</span> sitting, dressed in white garments, with crowns of gold on their heads.</li>
                <li value="05">Out of the throne proceed lightnings, sounds, and thunders. There were seven lamps of fire burning before his throne, which are the seven Spirits of God.</li>
                <li value="06">Before the throne was something like a sea of glass, similar to crystal. In the midst of the throne, and around the throne were four living creatures full of eyes before and behind.»</li>
              </ol>
            </blockquote>
          </article></section>

          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-640.jpg" id="image-apocalypse-4-2" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “vision of the throne set in heaven, of the heavenly court, and of the lamb”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “vision of the throne set in heaven, of the heavenly court, and of the lamb”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “vision of the throne set in heaven, of the heavenly court, and of the lamb”.<br><q cite="#renvoi-apocalypse-4-2" style="quotes:'«' '';">There was a rainbow around the throne</q> (…) <q cite="#renvoi-apocalypse-4-7" style="quotes:'' '';">the four living creatures</q> (…) <q cite="#renvoi-apocalypse-5-1" style="quotes:'' '';">a book written inside and outside, sealed shut with seven seals</q> (…) <q cite="#renvoi-apocalypse-5-6" style="quotes:'' '»';">the elders</q>, <cite>The Revelation</cite>, chapter 4 verses 2 to 8, chapter 5 verse 1, 6 to 7.</figcaption>
          </figure>

          <section><article>
            <section><article>
              <blockquote id="renvoi-apocalypse-4-7" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-4-7">
                <ol class="doc">
                  <li value="07">The first creature was like a <span style="color: #e6a64d;">lion</span>, and the second creature like a <span style="color: #e6a64d;">calf</span>, and the third creature had a <span style="color: #e6a64d;">face like a man</span>, and the fourth was like a <span style="color: #e6a64d;">flying eagle</span>.</li>
                  <li value="08">
                    <p>The four living creatures, each one of them having <span style="color: #e6a64d;">six wings</span>, are full of eyes around and within. They have no rest day and night, saying,</p>
                    <p class="conversation">
                      “Holy, holy, holy is the Lord God, the Almighty, who was and who is and who is to come!”.
                    </p>
                  </li>
                </ol>
              </blockquote>
              <footer>
                <ol class="doc">
                  <li><span style="color: #999;">(…)</span></li>
                </ol>
              </footer>
            </article></section>
            <section><article>
              <blockquote id="renvoi-apocalypse-5-1" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-5-1">
                <ol class="doc">
                  <li>chapter 5</li>
                  <li value="01">I saw, in the right hand of him who sat on the throne, a <span style="color: #e6a64d;">book</span> written inside and outside, sealed shut with <span style="color: #e6a64d;">seven seals</span>.</li>
                </ol>
              </blockquote>
              <footer>
                <ol class="doc">
                  <li><span style="color: #999;">(…)</span></li>
                </ol>
              </footer>
            </article></section>
            <section><article>
              <blockquote id="renvoi-apocalypse-5-6" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-5-6">
                <ol class="doc">
                  <li value="06">I saw in the midst of the throne and of the four living creatures, and in the midst of the elders, a <span style="color: #e6a64d;">Lamb</span> standing, as though it had been slain, having seven horns, and seven eyes, which are the seven Spirits of God, sent out into all the earth.</li>
                  <li value="07">Then he came, and he took it out of the right hand of him who sat on the throne.</li>
                </ol>
              </blockquote>
            </article></section>
          </article></section>
        </article></section>

        <hr>

        <aside>
          <article>
            <div class="footnotes">
              <ol>
                <li id="fn:1">
                  <p>the quotation that follows is past; for information, e transpose it here to present.</p>
              </li>
              </ol>
            </div>
            <footer>
              <p><a href="#fnref1:1" rev="footnote" class="footnote-backref">back to text ↩</a></p>
            </footer>
          </article>
          <article>
            <div class="footnotes">
              <ol start="2">
                <li id="fn:2">
                  read: <a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse">text excerpt of <cite>The Revelation</cite> related to the representation of John in Patmos on the left inner shutter by Hans Memling</a>.</p>
              </li>
              </ol>
            </div>
            <footer>
              <p><a href="#fnref1:2" rev="footnote" class="footnote-backref">back to text ↩</a></p>
            </footer>
          </article>
          <article>
            <div class="footnotes">
              <ol start="3">
                <li id="fn:3">
                  <p>The text of <cite>The Revelation</cite> is addressed to the "seven churches that are in Asia Minor" according to <cite>The Revelation</cite> chapter 1 verse 4:</p>
                  <ol>
                    <li>"Ephesus,</li>
                    <li>Smyrna,</li>
                    <li>Pergamos,</li>
                    <li>Thyatira,</li>
                    <li>Sardis,</li>
                    <li>Philadelphia</li>
                    <li>and Laodicea".</li>
                  </ol>
                  <p>In the symbolic language of the Jewish scriptures, it exhorts them to a transcendent reality that will enable them to overcome not only persecutions, whether Roman or Jewish, but also their own inadequacies, as <cite>The Revelation</cite> chapter 2 verse 3 shows, through new hope in Christ at the end of time.</p>
              </li>
              </ol>
            </div>
            <footer>
              <p><a href="#fnref1:3" rev="footnote" class="footnote-backref">back to text ↩</a></p>
            </footer>
          </article>
        </aside>

          <!-- Page 11 --><hr>

        <section><article>
          <h5 class="yellow">The Four Horsemen of <cite>The Revelation</cite></h5>
          <section><article>

            <section><article>
              <h6 class="yellow">first seal: the white horse - <cite>The Revelation</cite>, chapter 6 verse 2</h6>
              <section><article>
                <section><article>
                  <p>The narrative continues between the rainbow and John.</p>
                </article></section>

                <section><article>
                  <blockquote id="renvoi-apocalypse-6-1" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-6-1">
                    <ol class="doc">
                      <li>chapter 6</li>
                      <li value="01">
                        <p>I saw that the Lamb opened one of the seven seals, and I heard one of the four living creatures saying, as with a voice of thunder,</p>
                        <p class="conversation">
                          “Come and see!”
                        </p>
                      </li>
                      <li value="02">And behold, a <span style="color: #e6a64d;">white horse</span>, and he who sat on it had a <span style="color: #e6a64d;">bow</span>. A <span style="color: #e6a64d;">crown</span> was given to him, and he came forth conquering, and to conquer.</li>
                    </ol>
                  </blockquote>
                </article></section>
              </article></section>

              <figure>
                <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-280.webp 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-380.webp 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-480.webp 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-640.webp 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-840.webp 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1280.webp 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1600.webp 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-640.jpg" id="image-apocalypse-6-1" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the white horse”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the white horse”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-280.jpg 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-380.jpg 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-480.jpg 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-640.jpg 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-840.jpg 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1280.jpg 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1600.jpg 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “the white horse”<br>
                  <q cite="#renvoi-apocalypse-6-1" style="quotes:'«' '»';">And behold, a white horse, and he who sat on it had a bow. A crown was given to him, and he came forth conquering, and to conquer</q>, <cite>The Revelation</cite>, chapter 6 verse 2.</figcaption>
              </figure>
            </article></section>

            <section><article>
              <h6 class="yellow">second seal: the fiery red horse - <cite>The Revelation</cite>, chapter 6 verses 3 to 4</h6>

              <section><article>
                <blockquote id="renvoi-apocalypse-6-3" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-6-3">
                  <ol class="doc">
                    <li value="03"><p>When he opened the second seal, I heard the second living creature saying,</p>
                      <p class="conversation">
                        “Come!”
                      </p>
                    </li>
                    <li value="04">Another came forth, a <span style="color: #e6a64d;">red horse</span>. To him who sat on it was given power to take peace from the earth, and that they should kill one another. There was given to him a great <span style="color: #e6a64d;">sword</span>.</li>
                  </ol>
                </blockquote>
              </article></section>

              <figure>
                <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-280.webp 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-380.webp 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-480.webp 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-640.webp 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-840.webp 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1280.webp 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1600.webp 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-640.jpg" id="image-apocalypse-6-3" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the black horsee feu”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the black horsee feu”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-280.jpg 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-380.jpg 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-480.jpg 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-640.jpg 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-840.jpg 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1280.jpg 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1600.jpg 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “the fiery red horse”<br>
                <q cite="#renvoi-apocalypse-6-3" style="quotes:'«' '»';">To him who sat on it was given power to take peace from the earth, and that they should kill one another. There was given to him a great sword</q>, <cite>The Revelation</cite>, chapter 6 verses 3 to 4.</figcaption>
              </figure>
            </article></section>
            
            <section><article>
              <h6 class="yellow">third seal: the black horse - <cite>The Revelation</cite>, chapter 6 verses 5 to 6</h6>

              <section><article>
                <blockquote id="renvoi-apocalypse-6-5" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-6-5">
                  <ol class="doc">
                    <li value="05">
                      <p>When he opened the third seal, I heard the third living creature saying,</p>
                      <p class="conversation">
                        “Come and see!”
                      </p>
                      <p>And behold, a <span style="color: #e6a64d;">black horse</span>, and he who sat on it had a <span style="color: #e6a64d;">balance</span> in his hand.</p>
                    </li>
                    <li value="06">
                    <p>I heard a voice in the midst of the four living creatures saying,</p>
                      <p class="conversation">
                        “Achoenix of wheat for a denarius, and three choenix of barley for a denarius! Don't damage the oil and the wine!”
                      </p>
                    </li>
                  </ol>
                </blockquote>
              </article></section>

              <figure>
                <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-280.webp 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-380.webp 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-480.webp 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-640.webp 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-840.webp 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1280.webp 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1600.webp 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-640.jpg" id="image-apocalypse-6-5" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the black horse”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the black horse”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-280.jpg 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-380.jpg 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-480.jpg 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-640.jpg 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-840.jpg 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1280.jpg 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1600.jpg 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “the black horse”.<br><q cite="#renvoi-apocalypse-6-5" style="quotes:'«' '»';">he who sat on it had a balance in his hand</q>, <cite>The Revelation</cite> chapter 6 verse 5.</figcaption>
              </figure>
            </article></section>
            
            <section><article>
              <h6 class="yellow">fourth seal: the greenish horse - <cite>The Revelation</cite>, chapter 6 verses 7 to 8</h6>

              <section><article>
                <blockquote id="renvoi-apocalypse-6-7" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-6-7">
                  <ol class="doc">
                    <li value="07">
                      When he opened the fourth seal, I heard the fourth living creature saying,
                    <p class="conversation">
                      “Come and see!”
                    </p>
                    </li>
                    <li value="08">And behold, a <span style="color: #e6a64d;">pale horse</span>, and he who sat on it, his name was <span style="color: #e6a64d;">Death</span>. <span style="color: #e6a64d;">Hades</span> followed with him.</li>
                    <li>Authority over one fourth of the earth, to kill with the sword, with famine, with death, and by the wild animals of the earth was given to him.</li>
                  </ol>
                </blockquote>
              </article></section>

              <figure>
                <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-280.webp 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-380.webp 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-480.webp 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-640.webp 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-840.webp 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1280.webp 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1600.webp 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-640.jpg" id="image-apocalypse-6-7" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the black horse, Death, Hades”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the black horse, Death, Hades”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-280.jpg 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-380.jpg 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-480.jpg 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-640.jpg 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-840.jpg 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1280.jpg 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1600.jpg 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “the black horse, Death”.<br><q cite="#renvoi-apocalypse-6-7" style="quotes:'«' '»';">his name was Death. Hades followed with him</q>, <cite>The Revelation</cite> chapter 6 verse 8.</figcaption>
              </figure>
            </article></section>
            
            <section><article>
              <h6 class="yellow">landscape around the four horsemen - <cite>The Revelation</cite>, chapter 6 verses 14 to 17</h6>

              <section><article>
                <blockquote id="renvoi-apocalypse-6-14" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-6-14">
                  <ol class="doc">
                    <li value="14">The sky was removed like a scroll when it is rolled up. Every mountain and island were moved out of their places.</li>
                    <li value="15"><span style="color: #e6a64d;">The kings of the earth, the princes, the commanding officers, the rich, the strong, and every slave and free person, hid themselves in the caves and in the rocks of the mountains</span>.</li>
                    <li value="16">
                      <p>They told the mountains and the rocks,</p>
                      <p class="conversation">
                        “Fall on us, and hide us from the face of him who sits on the throne, and from the wrath of the Lamb,
                      </p>
                    </li>
                    <li value="17">
                      <p class="conversation">
                        for the great day of his wrath has come; and who is able to stand?”
                      </p>
                    </li>
                  </ol>
                </blockquote>
              </article></section>

              <figure>
                <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-280.webp 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-380.webp 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-480.webp 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.webp 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-840.webp 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1280.webp 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1600.webp 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.jpg" id="image-apocalypse-6-14" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “landscape around the four horsemen”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “landscape around the four horsemen”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-280.jpg 280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-380.jpg 380w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-480.jpg 480w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.jpg 640w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-840.jpg 840w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1280.jpg 1280w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1600.jpg 1600w,
                https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “landscape around the four horsemen”.<br><q cite="#renvoi-apocalypse-6-14" style="quotes:'«' '»';">Every mountain and island were moved out of their places</q> - <cite>The Revelation</cite>, chapter 6 verses 14 to 17.</figcaption>
              </figure>
            </article></section>
          </article></section>
        </article></section>

        <!-- Page 12 --><hr>

        <section><article>
          <h5 class="yellow">the angels of the seventh seal - <cite>The Revelation</cite>, chapter 8 verses 1 to 2</h5>

          <section><article>
            <blockquote id="renvoi-apocalypse-8-1" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-8-1">
              <ol class="doc">
                <li>chapter 8</li>
                <li value="01">When he opened the seventh seal, there was silence in heaven for about half an hour.</li>
                <li value="02">I saw the <span style="color: #e6a64d;">seven angels</span> who stand before God, and <span style="color: #e6a64d;">seven trumpets</span> were given to them.</li>
              </ol>
            </blockquote>
          </article></section>

          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-640.jpg" id="image-apocalypse-8-1" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the angels of the seventh seal”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the angels of the seventh seal”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “the angels of the seventh seal”.<br><q cite="#renvoi-apocalypse-8-1" style="quotes:'«' '»';">who stand before God, and seven trumpets were given to them</q>, <cite>The Revelation</cite>, chapter 8 verse 2.</figcaption>
          </figure>
        </article></section>

        <section><article>
          <h5 class="yellow">the angel of the altar - <cite>The Revelation</cite>, chapter 8 verses 3 to 5</h5>

          <section><article>
            <blockquote id="renvoi-apocalypse-8-3" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-8-3">
              <ol class="doc">
                <li value="03">Another angel came and stood over the altar, having a <span style="color: #e6a64d;">golden censer</span>. Much incense was given to him, that he should add it to the prayers of all the saints on the <span style="color: #e6a64d;">golden altar</span> which was before the throne.</li>
              </ol>
            </blockquote>
          </article></section>

          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-640.jpg" id="image-apocalypse-8-3" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the angel of the altar”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the angel of the altar”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “the angel of the altar”.<br>«having a golden censer», <cite>The Revelation</cite>, <q cite="#renvoi-apocalypse-8-3" style="quotes:'' '';">chapter 8 verse 3</q>.</figcaption>
          </figure>

          <section><article>
            <blockquote id="renvoi-apocalypse-8-4" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-8-4">
              <ol class="doc">
                <li value="04">The smoke of the incense, with the prayers of the saints, went up before God out of the angel's hand.</li>
                <li value="05">The angel took the censer, and he filled it with the fire of the altar, and threw it on the earth. There followed thunders, sounds, lightnings, and an earthquake.</li>
              </ol>
            </blockquote>
          </article></section>
        </article></section>

        <section><article>
          <h5 class="yellow">fall of the great burning mountain - <cite>The Revelation</cite>, chapter 8 verses 6 to 9</h5>

          <section><article>
            <blockquote id="renvoi-apocalypse-8-6" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-8-6">
              <ol class="doc">
                <li value="06">The seven angels who had the seven trumpets prepared themselves to sound.</li>
                <li value="07">The first sounded, and there followed hail and fire, mixed with blood, and they were thrown to the earth.One third of the earth was burnt up, and one third of the trees were burnt up, and all green grass was burnt up.</li>
                <li value="08">The second angel sounded, and something like a <span style="color: #e6a64d;">great burning mountain</span> was thrown into the sea. One third of the sea became blood,</li>
                <li value="09">and one third of the living creatures which were in the sea died. <span style="color: #e6a64d;">One third of the ships were destroyed</span>.</li>
              </ol>
            </blockquote>
          </article></section>

          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-640.jpg" id="image-apocalypse-8-4" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, fall of “a great burning mountain was thrown into the sea”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, fall of “a great burning mountain was thrown into the sea”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, fall of “a great burning mountain was thrown into the sea”.<br>«One third of the ships were destroyed», <cite>The Revelation</cite>, <q cite="#renvoi-apocalypse-8-6" style="quotes:'' '';">chapter 8 verse 8</q>.</figcaption>
          </figure>
        </article></section>

        <section><article>
          <h5 class="yellow">the fall of the "wormwood" star - <cite>The Revelation</cite>, chapter 8 verses 10 to 12</h5>

          <section><article>
            <blockquote id="renvoi-apocalypse-8-10" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-8-10">
              <ol class="doc">
                <li value="10">The third angel sounded, and a <span style="color: #e6a64d;">great star fell from the sky, burning like a torch</span>, and it fell on one third of the rivers, and on the springs of the waters.</li>
              </ol>
            </blockquote>
          </article></section>

          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-640.jpg" id="image-apocalypse-8-10" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the fall of the star called «Wormwood»”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the fall of the star called «Wormwood»”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “the fall of the star called «Wormwood»”.<br>«a great star fell from the sky, burning like a torch» (…) «One third of the waters became wormwood. Many people died from the waters, because they were made bitter», <cite>The Revelation</cite>, <q cite="#renvoi-apocalypse-8-11" style="quotes:'' '';">chapter verse </q>.</figcaption>
          </figure>

          <section><article>
            <blockquote id="renvoi-apocalypse-8-11" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-8-11">
              <ol class="doc">
                <li value="11">The name of the star is called «<span style="color: #e6a64d;">wormwood</span>». One third of the waters became wormwood. Many people died from the waters, because they were made bitter.</li>
                <li value="12">The fourth angel sounded, and one third of the sun was struck, and one third of the moon, and one third of the stars; so that one third of them would be darkened, and the day wouldn't shine for one third of it, and the night in the same way.</li>
              </ol>
            </blockquote>
          </article></section>
        </article></section>

        <section><article>
          <h5 class="yellow">the flight of the eagle - <cite>The Revelation</cite>, chapter 8 verse 13</h5>
          <section><article>
            <blockquote id="renvoi-apocalypse-8-13" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-8-13">
              <ol class="doc">
                <li value="13"><p>I saw, and I heard an <span style="color: #e6a64d;">eagle</span>, flying in mid heaven, saying with a loud voice,</p>
                  <p class="conversation">
                    “Woe! Woe! Woe for those who dwell on the earth, because of the other voices of the trumpets of the three angels, who are yet to sound!”.
                  </p>
                </li>
              </ol>
            </blockquote>
          </article></section>
          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-640.jpg" id="image-apocalypse-8-13" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the flight of the eagle”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the flight of the eagle”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “the flight of the eagle”.<br><q cite="#renvoi-apocalypse-8-13" style="quotes:'«' '»';">in mid heaven</q>, <cite>The Revelation</cite>, chapter 8 verse 13.</figcaption>
          </figure>
        </article></section>
      

        <!-- Page 13 --><hr>


        <section><article>
          <h5 class="yellow">the locusts' exit to the earth - <cite>The Revelation</cite>, chapter 9</h5>

          <section><article>
            <blockquote id="renvoi-apocalypse-9-1" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-9-1">
              <ol class="doc">
                <li>chapter 9</li>
                <li value="01">The fifth angel sounded, and I saw a star from the sky which had fallen to the earth. The key to the pit of the <span style="color: #e6a64d;">abyss</span> was given to him.</li>
                <li value="02">He opened the pit of the abyss, and smoke went up out of the pit, like the <span style="color: #e6a64d;">smoke from a burning furnace</span>. The sun and the air were darkened because of the smoke from the pit,</li>
                <li value="03">Then out of the smoke came forth <span style="color: #e6a64d;">locusts</span> on the earth, and power was given to them, as the scorpions of the earth have power.</li>
              </ol>
            </blockquote>
          </article></section>
            
          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-640.jpg" id="image-apocalypse-9-1" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the sortie of locusts onto the earth”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the sortie of locusts onto the earth”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “the sortie of locusts onto the earth”.<br><q cite="#renvoi-apocalypse-9-1" style="quotes:'«' '»';">power was given to them</q>, <cite>The Revelation</cite>, chapter 9 verse 1.</figcaption>
          </figure>

          <section><article>
            <blockquote id="renvoi-apocalypse-9-4" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-9-4">
              <ol class="doc">
                <li value="04">They were told that they should not hurt the grass of the earth, neither any green thing, neither any tree, but only those people who don't have God's seal on their foreheads.</li>
                <li value="05">They were given power not to kill them, but to torment them for five months. Their torment was like the torment of a scorpion, when it strikes a person.</li>
                <li value="06">In those days people will seek death, and will in no way find it. They will desire to die, and death will flee from them.</li>
                <li value="07">The shapes of the <span style="color: #e6a64d;">locusts</span> were like horses prepared for war. On their heads were something like golden crowns, and their faces were like people's faces,</li>
                <li value="08">They had hair like women's hair, and their teeth were like those of lions.</li>
                <li value="09">They had breastplates, like breastplates of iron. The sound of their wings was like the sound of chariots, or of many horses rushing to war.</li>
                <li value="10">They have tails like those of scorpions, and stings. In their tails they have power to harm men for five months.</li>
                <li>Their tails were like scorpions' tails, with stings,</li>
                <li value="11">They have over them as king the angel of the abyss. His name in Hebrew is “Abaddon”, but in Greek, he has the name “Apollyon” (which means: Destructor).</li>
              </ol>
            </blockquote>
          </article></section>
        </article></section>

        <section><article>
          <h5 class="yellow">the angel descended from heaven - <cite>The Revelation</cite>, chapter 10 verses 1 to 3</h5>

          <section><article>
            <blockquote id="renvoi-apocalypse-10-1" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-10-1">
              <ol class="doc">
                <li>chapter 10</li>
                <li value="01">I saw a mighty <span style="color: #e6a64d;">angel</span> coming down out of the sky, clothed with a <span style="color: #e6a64d;">cloud</span>. A <span style="color: #e6a64d;">rainbow</span> was on his head. His face was like the sun, and his feet like <span style="color: #e6a64d;">pillars of fire</span>.</li>
                <li value="02">He had in his hand a little open <span style="color: #e6a64d;">book</span>.</li>
                <li>He set his right foot on the sea, and his left on the land.</li>
                <li value="03">He cried with a loud voice, as a lion roars.</li>
                <li>When he cried, the seven thunders uttered their voices.</li>
              </ol>
            </blockquote>
          </article></section>

          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-640.jpg" id="image-apocalypse-10-1" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the angel coming down from heaven”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “the angel coming down from heaven”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “the angel coming down from heaven”<br><q cite="#renvoi-apocalypse-10-1" style="quotes:'«' '»';">I saw a mighty angel coming down out of the sky, clothed with a cloud. A rainbow was on his head. His face was like the sun, and his feet like pillars of fire</q>, <cite>The Revelation</cite>, chapter 10 verses 1 to 3.</figcaption>
          </figure>
        </article></section>

        <section><article>
          <h5 class="yellow">The heaven of Revelation - <cite>The Revelation</cite>, chapter 10 verses 3 to 6</h5>

          <section><article>
            <blockquote id="renvoi-apocalypse-10-4" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-10-4">
              <ol class="doc">
                <li value="04"><p>When the seven thunders sounded, I was about to write; but I heard a voice from the sky saying,</p>
                  <p class="conversation">
                    “Seal up the things which the seven thunders said, and don't write them.”
                  </p>
                </li>
                <li value="05">The angel who I saw standing on the sea and on the land lifted up his right hand to the sky,</li>
                <li value="06">and swore by him who lives forever and ever, who created heaven and the things that are in it, the earth and the things that are in it, and the sea and the things that are in it, that there will no longer be delay.
                </li>
              </ol>
            </blockquote>
          </article></section>

          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-640.jpg" id="image-apocalypse-10-4" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “The heaven of Revelation”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “The heaven of Revelation”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “The heaven of Revelation”.<br><q cite="#renvoi-apocalypse-10-4" style="quotes:'«' '»';">the seven thunders sounded</q>, <cite>The Revelation</cite>, chapter 12.</figcaption>
          </figure>
        </article></section>

        <section><article>
          <h5 class="yellow">the woman and the dragon - <cite>The Revelation</cite>, chapter 12 verses 1 to 4</h5>

          <section><article>
            <blockquote id="renvoi-apocalypse-12-1" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-12-1">
              <ol class="doc">
                <li>chapter 12</li>
                <li value="01">A great sign was seen in heaven: a <span style="color: #e6a64d;">woman</span> clothed with the sun, and the moon under her feet, and on her head a crown of twelve stars.</li>
                <li value="02">She was with child. She cried out in pain, laboring to give birth.</li>
                <li value="03">Another sign was seen in heaven. Behold, a great <span style="color: #e6a64d;">red dragon</span>, having seven heads and ten horns, and on his heads seven crowns.</li>
                <li value="04">His tail drew one third of the stars of the sky, and threw them to the earth. The dragon stood before the woman who was about to give birth, so that when she gave birth he might devour her child.</li>
              </ol>
            </blockquote>
          </article></section>

          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-640.jpg" id="image-apocalypse-12-1" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “The woman and the dragon”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “The woman and the dragon”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “The woman and the dragon”.<br><q cite="#renvoi-apocalypse-12-1" style="quotes:'«' '»';">The dragon stood before the woman who was about to give birth, so that when she gave birth he might devour her child</q>, <cite>The Revelation</cite>, chapter 12 verses 1 to 4.</figcaption>
          </figure>
        </article></section>

        <section><article>
          <h5 class="yellow">battle of saint michael, the dragon and their angels: fall of the dragon and his angels - <cite>The Revelation</cite>, chapter 12 verses 5 to 9</h5>

          <section><article>
            <blockquote id="renvoi-apocalypse-12-5" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-12-5">
              <ol class="doc">
                <li value="05">She gave birth to a son, a male child, who is to rule all the nations with a rod of iron. Her child was caught up to God, and to his throne.</li>
                <li value="06">The woman fled into the wilderness, where she has a place prepared by God, that there they may nourish her one thousand two hundred sixty days.</li>
                <li value="07">There was war in the sky. Michael and his angels made war on the dragon. The dragon and his angels made war.</li>
                <li>The dragon fought back with his angels,</li>
                <li value="08">They didn't prevail, neither was a place found for him any more in heaven.</li>
                <li value="09">The great dragon was thrown down, the old serpent, he who is called the devil and Satan, the deceiver of the whole world. He was thrown down to the earth, and his angels were thrown down with him.</li>
              </ol>
            </blockquote>
          </article></section>

          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-640.jpg" id="image-apocalypse-12-5" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “fight of saint Michael, of the dragon and of their angels: fall of the dragon and his angels”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “fight of saint Michael, of the dragon and of their angels: fall of the dragon and his angels”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “fight of saint Michael, of the dragon and of their angels: fall of the dragon and his angels”.<br><q cite="#renvoi-apocalypse-12-5" style="quotes:'«' '»';">He was thrown down to the earth, and his angels were thrown down with him</q>, <cite>The Revelation</cite>, chapter 12 verses 5 to 9.</figcaption>
          </figure>
        </article></section>
      

        <!-- Page 14 --><hr>

      
        <section><article>
          <h5 class="yellow">the woman receives two great eagle's wings to escape the dragon - <cite>The Revelation</cite>, chapter 12 verses 10 to 14</h5>
          <section><article>
            <blockquote id="renvoi-apocalypse-12-10" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse-12-10">
              <ol class="doc">
                <li value="10">
                  <p>I heard a loud voice in heaven, saying,</p>
                  <p class="conversation">«Now is come the salvation, the power, and the Kingdom of our God, and the authority of his Christ; for the accuser of our brothers has been thrown down, who accuses them before our God day and night,</p>
                </li>
                <li>
                  <p class="conversation">now that the accuser, who accused our brothers day and night before our god, has been brought down.</p>
                </li>
                <li value="11">
                  <p class="conversation">They overcame him because of the Lamb's blood, and because of the word of their testimony. They didn't love their life, even to death.</p>
                </li>
                <li value="12">
                  <p class="conversation">Therefore rejoice, heavens, and you who dwell in them.</p>
                </li>
                <li>
                  <p class="conversation">Woe to the earth and to the sea, because the devil has gone down to you, having great wrath, knowing that he has but a short time.»</p>
                </li>
                <li value="13">When the <span style="color: #e6a64d;">dragon</span> saw that he was thrown down to the earth, he persecuted the <span style="color: #e6a64d;">woman</span> who gave birth to the male child,</li>
                <li value="14">Two <span style="color: #e6a64d;">wings of the great eagle</span> were given to the woman, that she might fly into the wilderness to her place, so that she might be nourished for a time, and times, and half a time, from the face of the serpent.</li>
              </ol>
            </blockquote>
          </article></section>

          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.jpg" id="image-apocalypse-12-10" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “Two wings of the great eagle were given to the woman”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the right inner shutter, “Two wings of the great eagle were given to the woman”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1920.jpg 1920w"></picture><figcaption>detail of the right inner shutter, “Two wings of the great eagle were given to the woman”.<br><q cite="#renvoi-apocalypse-12-10" style="quotes:'«' '»';">that she might fly into the wilderness to her place</q>, <cite>The Revelation</cite>, chapter 12 verses 10 to 14.</figcaption>
          </figure>
        </article></section>

        <section><article>
          <h5 class="yellow">End of the visions of John on Patmos, continuation of the account of the legend of John the Evangelist according to chapter 9 of <cite>The Golden Legend</cite></h5>
          <section><article>
            <p>From the point of view of the narrative constructed by Memling, the visions of <cite>The Revelation</cite> end here.</p>
            <p>The life of John the Evangelist continues, after Patmos, on the central panel, according to <cite>The Legend of John the Evangelist</cite> as told in chapter 9 of <cite>The Golden Legend</cite>.</p>
          </article></section>
          <footer>
            <p class="puce">Read <a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:18">text of the <cite>Legend of John the Baptist</cite> from chapter 9 of <cite>The Golden Legend</cite></a></p>
          </footer>
        </article></section>

        <section><article>
          <h5 class="yellow">resurrection of Drusiana - <cite>The Golden Legend</cite>, chapter 9</h5>

          <section><article>
            <p>The narrative of the legend of John the Evangelist continues on the inner central panel, in the far right</p>
            <p>According to <cite>The Golden Legend</cite>, John then returns to Ephesus, where he resurrects Drusiana as Memling depicts him on a capital:</p>
          </article></section>

          <blockquote id="renvoi-drusiane" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:18#drusiane">
            <p class="conversation"><span style="color: #df8f20;">— «Drusiana, my Lord God Jesus Christ ariseth thee;</span> <span style="color: #df8f20;">Drusiana arise, and go into thy house, and make ready for me some refection.»</span></p>
            <p>Anon she arose and went in to her house for to do the commandment of <span style="color: #994c3d;">St. John</span>, and the people made three hours long a great noise and cry, saying there is but one God, and that is he whom <span style="color: #994c3d;">St. John</span> preacheth.</p>
          </blockquote>

          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-640.jpg" id="image-drusiane" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “resurrection of Drusiana”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “resurrection of Drusiana”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1920.jpg 1920w"></picture><figcaption>detail of the central panel, column capital, “resurrection of Drusiana”<br><q cite="#renvoi-drusiane" style="quotes:'«' '»';">Anon she arose and went in to her house</q>, <cite>The Golden Legend</cite>, chapter 9.</figcaption>
          </figure>
        </article></section>

        <section><article>
          <h5 class="yellow">capital of the miracle of the poison cup - <cite>The Golden Legend</cite>, chapter 9</h5>

          <blockquote id="renvoi-poison" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:18#poison">
            <p class="conversation">«If you want me to believe in your God, I will give you a drink of poison and if he does not hurt you, your lord will appear as the true God.»</p>
          </blockquote>

          <section><article>
            <p>He drinks the poisoned cup without suffering the slightest harm.</p>
          </article></section>

          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-640.jpg" id="image-poison" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “capital of the miracle of the poisoned cup”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “capital of the miracle of the poisoned cup”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1920.jpg 1920w"></picture><figcaption>detail of the central panel, column capital, “capital of the miracle of the poisoned cup”<br><q cite="#renvoi-poison" style="quotes:'«' '»';">If you want me to believe in your God, I will give you a drink of poison and if he does not hurt you, your lord will appear as the true God.</q>, <cite>The Golden Legend</cite>, chapter 9.</figcaption>
          </figure>
        </article></section>

        <section><article>
          <h5 class="yellow">Crato's baptism - <cite>The Golden Legend</cite>, chapter 9</h5>
          
          <section><article>
            <p>At the very back, that also shows <a href="https://en.wikipedia.org/wiki/Colosseum">the Colosseum</a>, John the Evangelist baptizes the converted philosopher Crato in the small domed building.</p>
          </article></section>

          <blockquote id="renvoi-crato" cite="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:18#crato">
            <p class="conversation">
              <span style="color: #df8f20;">— «Go and throw it on the dead body by saying:</span></p>
              <p><span style="color: #df8f20;">“The apostle of Christ sent me to you for you to resurface in the name of Christ”».</span>
            </p>
            <p>The priest executed and the dead resurrected immediately.</p>
            <p>So the apostle named in the name of Christ the priest and the proconsul, who converged with their entire family and then built a church in honor of <span style="color: #994c3d;">St. John</span>.</p>
          </blockquote>
          
          <section><article>
            <p>That small domed building of the very back can also be that <q cite="#renvoi-crato">church in honor of St. John</q></p>
          </article></section>

          <figure>
            <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-280.webp 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-380.webp 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-480.webp 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.webp 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-840.webp 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1280.webp 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1600.webp 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.jpg" id="#image-crato" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “baptisma of Crato”, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, column capital, “baptisma of Crato”, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-280.jpg 280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-380.jpg 380w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-480.jpg 480w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.jpg 640w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-840.jpg 840w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1280.jpg 1280w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1600.jpg 1600w,
            https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1920.jpg 1920w"></picture><figcaption>detail of the central panel, column capital, “baptisma of Crato”<br><q cite="#renvoi-crato" style="quotes:'«' '»';">the apostle named in the name of Christ the priest and the proconsul, who converged with their entire family and then built a church in honor of St. John.</q>, <cite>The Golden Legend</cite>, chapter 9.</figcaption>
          </figure>
        </article></section>
      </article></section>
      

      <!-- Page 15 --><hr>

      <section><article>
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
        <h3 id="position-fermee" class="yellow">presentation of donors: the closed tryptich</h3>

        <section><article>
          <section><article>
            <p>The reverse sides of the shutters are decorated with portraits of the donors kneeling and accompanied by their standing patron saints.</p>
            <p>They are represented in shallow niches.</p>
            <p>All have been identified</p>
          </article></section>

          <section><article>
            <section><article>
              <p>We recognize, from left to right:</p>
              <p>On the left shutter, from the left:</p>
              <ul>
                <li>Standing, <span style="color: #e6a64d;">St. Agnes</span>, recognizable by the lamb below on the left side,</li>
                <li>Kneeling in front, <span style="color: #e6a64d;">Agnès CASEMBROOD</span> kneeling.</li>
              </ul>
            </article></section>
            <section><article>
              <p>to the right of the left shutter:</p>
              <ul>
                <li>Standing, <span style="color: #e6a64d;">St. Clare</span> carries the thurible,</li>
                <li>Protects Sister <span style="color: #e6a64d;">Claire VAN HULSEN</span>, kneeling in front.</li>
              </ul>
            </article></section>
            <section><article>
                <p>On the right pane, from the left:</p>
                <ul>
                  <li>Standing, <span style="color: #e6a64d;">Saint James the Great of Compostela</span> dressed as a pilgrim,</li>
                  <li>Known in front, <span style="color: #e6a64d;">Jacob DE KEUNINC</span></li>
                </ul>
            </article></section>
            <section><article>
              <p>to the right of the right-hand pane:</p>
              <ul>
                <li><span style="color: #e6a64d;">St. Anthony Abbot</span>, who is recognizable by his crook and the piglet,</li>
                <li>patron of <span style="color: #e6a64d;">Antoine SEGHERS</span>, master of the hospital.</li>
              </ul>
            </article></section>
          </article></section>

          <section><article>
            <p>The triptych was probably commanded before <time datetime="1475">1475</time>, since it was in that year that Antoine SEGHERS died.</p>
            <p>It was placed above the master altar in <time datetime="1479">1479</time>.</p>
          </article></section>
        </article></section>
      </article></section>
    </article></section>
  </article></section>

  <!-- Page 16 -->

  <!-- Page 17 -->

  <!-- Page 18 -->

  <!-- Page 19 -->

  <!-- Page 20 -->

  </article></section>
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