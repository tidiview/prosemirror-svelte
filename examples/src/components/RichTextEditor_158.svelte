<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<h1 class="green">place Vendôme</h1>
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
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome_700x507.jpg 700w"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus_700x415.jpg" alt="La Place Vendôme à Paris, en 1734" title="La Place Vendôme à Paris, en 1734" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-focus_700x415.jpg 700w"></picture><figcaption>La place Vendôme à Paris d'après le Plan de Turgot en 1734</figcaption></figure>
<h2 class="green">la place Vendôme au XVII<sup style="color:#3d8b3d;">ème</sup> siècle</h2>
<div class="notices green">
<p>La <a href="https://fr.wikipedia.org/wiki/Place_Vendôme" title="https://fr.wikipedia.org/wiki/Place_Vendôme">place Vendôme</a> a connu un visage très différent avant l'ouverture de la <a href="https://fr.wikipedia.org/wiki/Rue_de_Rivoli" title="https://fr.wikipedia.org/wiki/Rue_de_Rivoli">rue de Rivoli</a> (1801). </p>
</div>
<p>La place a d'abord été édifiée selon une forme carrée.<br>
Cette forme est jugée trop rigide; en 1700, une partie des façades est abattue, puis reconstruite, dès 1701, en l'actuelle forme octogonale.  </p>
<p>À regarder de près le <a href="https://fr.wikipedia.org/wiki/Plan_de_Turgot" title="https://fr.wikipedia.org/wiki/Plan_de_Turgot">plan de Turgot</a> de 1734, la place apparaît bien plus calme:</p>
<ul>
<li>côté <a href="https://fr.wikipedia.org/wiki/Jardin_des_Tuileries" title="https://fr.wikipedia.org/wiki/Jardin_des_Tuileries">Tuileries</a>, la <a href="https://fr.wikipedia.org/wiki/Rue_de_Castiglione" title="https://fr.wikipedia.org/wiki/Rue_de_Castiglione">rue de Castiglione</a> (<a href="#castiglione">fig. 1</a>),</li>
<li>côté <a href="https://fr.wikipedia.org/wiki/Opéra_de_Paris" title="https://fr.wikipedia.org/wiki/Opéra_de_Paris">Opéra</a>, la <a href="https://fr.wikipedia.org/wiki/Rue_de_la_Paix_(Paris)" title="https://fr.wikipedia.org/wiki/Rue_de_la_Paix_(Paris)">rue de la Paix</a> (<a href="#paix">fig. 2</a>),
n'ont pas encore été percées.  </li>
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
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-castiglione-focus_669x484.jpg 669w"></picture><figcaption>fig. 1: avant le percement de la rue Castiglione, l'accès depuis la rue Saint-Honoré (1734)</figcaption></figure>
<p>L'accès ne s'effectue que par:</p>
<ul>
<li>la <a href="https://fr.wikipedia.org/wiki/Rue_Saint-Honoré" title="https://fr.wikipedia.org/wiki/Rue_Saint-Honoré">rue Saint-Honoré</a> côté <a href="https://fr.wikipedia.org/wiki/Jardin_des_Tuileries" title="https://fr.wikipedia.org/wiki/Jardin_des_Tuileries">Tuileries</a> (<a href="#castiglione">fig. 1</a> ci-dessus),</li>
<li>et la <a href="https://fr.wikipedia.org/wiki/Rue_des_Capucines_(Paris)" title="https://fr.wikipedia.org/wiki/Rue_des_Capucines_(Paris)">rue des Capucines</a> côté <a href="https://fr.wikipedia.org/wiki/Opéra_de_Paris" title="https://fr.wikipedia.org/wiki/Opéra_de_Paris">Opéra</a> (<a href="#paix">fig. 2</a> ci-dessous).  </li>
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
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-paix-focus_700x447.jpg 700w"></picture><figcaption>fig. 2: avant le percement de la rue de la paix, l'accès depuis la rue des Capucines (1734)</figcaption></figure>
<p>Elle n'était donc pas traversante comme depuis le XIX<sup>ème</sup> siècle.  </p>
<p>Côté <a href="https://fr.wikipedia.org/wiki/Opéra_de_Paris" title="https://fr.wikipedia.org/wiki/Opéra_de_Paris">Opéra</a>, à l'emplacement de l'actuelle <a href="https://fr.wikipedia.org/wiki/Rue_de_la_Paix_(Paris)" title="https://fr.wikipedia.org/wiki/Rue_de_la_Paix_(Paris)">rue de la Paix</a>, se trouvait le <a href="https://fr.wikipedia.org/wiki/Couvent_des_Capucines" title="https://fr.wikipedia.org/wiki/Couvent_des_Capucines">couvent des Capucines</a> (<a href="#couvent">fig. 3</a>).</p>
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
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-couvent-focus_700x411.jpg 700w"></picture><figcaption>fig. 3: avant le percement de la rue de la paix, le second couvent des Capucines (1705)</figcaption></figure>
<p><a href="https://fr.wikipedia.org/wiki/Madame_de_Pompadour" title="https://fr.wikipedia.org/wiki/Madame_de_Pompadour">Madame de Pompadour</a> a été enterrée, ainsi que sa mère et sa sœur, dans l'église.</p>
<p>En face, côté <a href="https://fr.wikipedia.org/wiki/Jardin_des_Tuileries" title="https://fr.wikipedia.org/wiki/Jardin_des_Tuileries">Tuileries</a>, un autre portail, le portail du <a href="https://fr.wikipedia.org/wiki/Couvent_des_Feuillants" title="https://fr.wikipedia.org/wiki/Couvent_des_Feuillants">couvent des Feuillants</a> lui répondait (<a href="#feuillants">fig. 4</a>).</p>
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
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-feuillants-focus_700x438.jpg 700w"></picture><figcaption>fig. 4: avant le percement de la rue de Castiglione, le portail du couvent des Feuillants (1754)</figcaption></figure>
<p>Au centre de la place, se dresse, dès 1699, la statue de <a href="https://fr.wikipedia.org/wiki/Louis_XIV" title="https://fr.wikipedia.org/wiki/Louis_XIV">Louis XIV</a> dite de « Louis Le Grand » (<a href="#statue">fig. 5</a>).</p>
<p>C'est une œuvre impressionnante de <a href="https://fr.wikipedia.org/wiki/François_Girardon" title="https://fr.wikipedia.org/wiki/François_Girardon">François GIRARDON</a> qui atteint, avec son piédestal, une hauteur de 17 m de haut.  </p>
<p>La <a href="https://fr.wikipedia.org/wiki/Révolution_française" title="https://fr.wikipedia.org/wiki/Révolution_française">Révolution</a> la détruira mais un des énormes pieds du roi a survécu à la fonte et est exposé au Musée d'Histoire de la Ville de Paris, le <a href="https://fr.wikipedia.org/wiki/Musée_Carnavalet" title="https://fr.wikipedia.org/wiki/Musée_Carnavalet">Musée Carnavalet</a>.  </p>
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
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/02.vendome/01.place/vendome-statue-focus_700x875.jpg 700w"></picture><figcaption>fig. 5: au centre de la place, la statue de Louis Le Grand (1699)</figcaption></figure>
<div class="notices green">
<p>Pour plus d'information sur l'œuvre de <a href="https://fr.wikipedia.org/wiki/François_Girardon" title="https://fr.wikipedia.org/wiki/François_Girardon">François GIRARDON</a>, consultez la <a href="http://www.louvre.fr/oeuvre-notices/louis-xiv-cheval" title="http://www.louvre.fr/oeuvre-notices/louis-xiv-cheval">notice de l'œuvre</a> sur le site du <a href="http://www.louvre.fr/oeuvre-notices/louis-xiv-cheval" title="http://www.louvre.fr/oeuvre-notices/louis-xiv-cheval">Musée du Louvre</a>.  </p>
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