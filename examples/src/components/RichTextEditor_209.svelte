<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- Page 1 JA:145 FR:178 -->

<article>

<hgroup>
<h1 class="green"><ruby style="color:#555;" lang="en">Diptych of Maarten van Nieuwenhove<rt style="color:#999;" lang="nl">Diptiek van Maarten van Nieuwenhove</rt></ruby></h1>
<h2 class="green"><abbr title="Saint">St.</abbr> John's Hospital Memling Museum of Bruges</h2>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/https://francois-vidit.compages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-840.jpg" title="“Diptych of Maarten van Nieuwenhove”, overall view of the place of exposition, Hans Memling Museum, Old St. John's Hospital of Bruges (Brugge)" alt="“Diptych of Maarten van Nieuwenhove”, overall view of the place of exposition, Hans Memling Museum, Old St. John's Hospital of Bruges (Brugge)" class="class-40-img" width="839" height="556" loading="eager" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-1920.jpg 1920w"></picture><figcaption>“Diptych of Maarten van Nieuwenhove”, overall view of the place of exposition, Hans Memling Museum, Old St. John's Hospital of Bruges (Brugge)</figcaption>
</figure>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/https://francois-vidit.compages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-840.jpg" title="“Diptych of Maarten van Nieuwenhove”, overall view of the exposition disposal, Hans Memling Museum, Old St. John's Hospital of Bruges (Brugge)" alt="“Diptych of Maarten van Nieuwenhove”, overall view of the exposition disposal, Hans Memling Museum, Old St. John's Hospital of Bruges (Brugge)" class="class-diane-img" width="840" height="473" loading="lazy" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-1920.jpg 1920w"></picture><figcaption>“Diptych of Maarten van Nieuwenhove”, overall view of the exposition disposal</figcaption>
</figure>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/https://francois-vidit.compages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-840.jpg" title="“Diptych of Maarten van Nieuwenhove”, overall view" alt="“Diptych of Maarten van Nieuwenhove”, overall view" class="class-70-img" width="840" height="467" loading="lazy" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-1920.jpg1920w"></picture><figcaption><cite>Diptych of Maarten van Nieuwenhove</cite>, overall view</figcaption>
</figure>

<!-- Page 2 -->

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/https://francois-vidit.compages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-840.jpg" title="“Diptych of Maarten van Nieuwenhove”, Hans Memling Museum, Old St. John's Hospital of Bruges (Brugge)" alt="“Diptych of Maarten van Nieuwenhove”, Hans Memling Museum, Old St. John's Hospital of Bruges (Brugge)" class="class-70-img" width="840" height="577" loading="lazy" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-1920.jpg 1920w"></picture><figcaption>“Diptych of Maarten van Nieuwenhove”</figcaption>
</figure>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/https://francois-vidit.compages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-840.jpg" title="“Virgin and Child”, left panel of the “Diptych of Maarten van Nieuwenhove”, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" alt="“Virgin and Child”, left panel of the “Diptych of Maarten van Nieuwenhove”, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" class="class-40-img" width="840" height="1063" loading="lazy" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-1920.jpg 1920w"></picture><figcaption>“Virgin and Child”, left panel of the “Diptych of Maarten van Nieuwenhove”</figcaption>
</figure>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/https://francois-vidit.compages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-840.jpg" title="“Portrait of Maarten van Nieuwenhove”, right panel of the “Diptych of Maarten van Nieuwenhove”, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" alt="“Portrait of Maarten van Nieuwenhove”, right panel of the “Diptych of Maarten van Nieuwenhove”, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" class="class-40-img" width="840" height="1091" loading="lazy" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-1920.jpg 1920w"></picture><figcaption>“Portrait of Maarten van Nieuwenhove”, right panel of the <cite>Diptych of Maarten van Nieuwenhove</cite></figcaption>
</figure>


<!-- Page 3 -->


<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/https://francois-vidit.compages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-840.jpg" title="“Coat of arms of the van Nieuwenhove family”, “The mirror behind the Virgin”, details of left panel of the “Diptych of Maarten van Nieuwenhove”, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" alt="“Coat of arms of the van Nieuwenhove family”, “The mirror behind the Virgin”, details of left panel of the “Diptych of Maarten van Nieuwenhove”, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" class="class-40-img" width="840" height="1272" loading="lazy" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-1920.jpg 1920w"></picture><figcaption>“Coat of arms of the van Nieuwenhove family”, “The mirror behind the Virgin”, details of left panel of the “Diptych of Maarten van Nieuwenhove”</figcaption>
</figure>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/https://francois-vidit.compages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-840.jpg" title="“St. Martin giving his coat to a poor”, “Landcape on Minnewater”, details of right panel of the “Diptych of Maarten van Nieuwenhove”, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" alt="“St. Martin giving his coat to a poor”, “Landcape on Minnewater”, details of right panel of the “Diptych of Maarten van Nieuwenhove”, Hans Memling Museum, Old St. John's Hospital, Bruges (Brugge)" class="class-40-img" width="840" height="1114" loading="lazy" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-1920.jpg 1920w"></picture><figcaption>“<abbr title="Saint">St.</abbr> Martin giving his coat to a poor”, “Landcape on Minnewater”, details of right panel of the <cite>Diptych of Maarten van Nieuwenhove</cite></figcaption>
</figure>

<footer>
  <p>Hans MEMLING,  <cite>Diptych of Maarten van Nieuwenhove</cite></p>
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