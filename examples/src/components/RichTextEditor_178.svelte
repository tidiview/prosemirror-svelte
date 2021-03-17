<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 1 -->

<div id="body-inner">
<h1 class="green"><ruby style="color:#555;" lang="fr">Diptyque de Maarten van Nieuwenhove<rt style="color:#999;" lang="nl">Diptiek van Maarten van Nieuwenhove</rt></ruby></h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-840.jpg" title="“Diptyque de Maarten van Nieuwenhove”, vue d'ensemble du lieu d'exposition, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Diptyque de Maarten van Nieuwenhove”, vue d'ensemble du lieu d'exposition, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin0-1920.jpg 1920w"></picture><figcaption>“Diptyque de Maarten van Nieuwenhove”, vue d'ensemble du lieu d'exposition, Musée Memling de l'Hôpital Saint-Jean de Bruges</figcaption></figure>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-840.jpg" title="“Diptyque de Maarten van Nieuwenhove”, vue d'ensemble du dispositif d'exposition, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Diptyque de Maarten van Nieuwenhove”, vue d'ensemble du dispositif d'exposition, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin1-1920.jpg 1920w"></picture><figcaption>“Diptyque de Maarten van Nieuwenhove”, vue d'ensemble du dispositif d'exposition</figcaption></figure>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-840.jpg" title="“Diptyque de Maarten van Nieuwenhove”, vue générale, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Diptyque de Maarten van Nieuwenhove”, vue générale, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/01.martin_1/martin2-1920.jpg1920w"></picture><figcaption>“Diptyque de Maarten van Nieuwenhove”, vue générale</figcaption></figure>
</div>

<!-- Page 2 --><hr>

<div id="body-inner">
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-840.jpg" title="“Diptyque de Maarten van Nieuwenhove”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Diptyque de Maarten van Nieuwenhove”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin3-1920.jpg 1920w"></picture><figcaption>“Diptyque de Maarten van Nieuwenhove”</figcaption></figure>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-840.jpg" title="“Vierge à l'enfant”, panneau de gauche du “Diptyque de Maarten van Nieuwenhove”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Vierge à l'enfant”, panneau de gauche du “Diptyque de Maarten van Nieuwenhove”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin4-1920.jpg 1920w"></picture><figcaption>“Vierge à l'enfant”, panneau de gauche</figcaption></figure>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-840.jpg" title="“Vierge à l'enfant”, panneau de gauche du “Diptyque de Maarten van Nieuwenhove”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Vierge à l'enfant”, panneau de gauche du “Diptyque de Maarten van Nieuwenhove”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/02.martin_2/martin5-1920.jpg 1920w"></picture><figcaption>“Portrait de Maarten van Nieuwenhove”, panneau de droite</figcaption></figure>
</div>

<!-- Page 3 --><hr>

<div id="body-inner">
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-840.jpg" title="“Blason de la famille van Nieuwenhove”, “Mirroir derrière la Vierge”, détails du panneau de gauche “Vierge à l'enfant” du “Diptyque de Maarten van Nieuwenhove”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Blason de la famille van Nieuwenhove”, “Mirroir derrière la Vierge”, détails du panneau de gauche “Vierge à l'enfant” du “Diptyque de Maarten van Nieuwenhove”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin7-1920.jpg 1920w"></picture><figcaption>“Blason de la famille van Nieuwenhove”, “Mirroir derrière la Vierge”, détails du panneau de gauche “Vierge à l'enfant”</figcaption></figure>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-700x489.webp 700w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-700x489.jpg" title="“Saint Martin donne la moitié de son manteau à un pauvre”, “Vue sur Minnewater”, détails du panneau de droite “Portrait de Maarten van Nieuwenhove”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Saint Martin donne la moitié de son manteau à un pauvre”, “Vue sur Minnewater”, détails du panneau de droite “Portrait de Maarten van Nieuwenhove”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-700x489.jpg 700w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/03.martin/03.martin_3/martin6-1920.jpg 1920w"></picture><figcaption>“Saint Martin donne la moitié de son manteau à un pauvre”, “Vue sur Minnewater”, détails du panneau de droite “Portrait de Maarten van Nieuwenhove”</figcaption></figure>
<p><span style="color: #3d8b3d;">Hans MEMLING, “Diptyque de Maarten van Nieuwenhove”</span></p>
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