<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- Page 18 EN:2 JA:218 -->

<article>

<hgroup>
<h2 id="mise-en-relation" class="yellow">différents textes à l'origine des scènes représentées dans le <cite><ruby style="color:#555;" lang="fr">Triptyque de Jean le Baptiste et de Jean l'Évangéliste<rp>(</rp><rt style="color:#999;" lang="nl">Triptiek van Johannes de Doper en Johannes de Evangelist</rt><rp>)</rp></ruby></cite></h2>
    <h3 id="jean-selon-legende" class="yellow"><cite>Légende de Jean l'Évangéliste</cite> selon le chapître 9 selon <cite>La Légende dorée</cite></h3>
</hgroup>

  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Jean l'Évangéliste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Jean l'Évangéliste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-60-img" width="640" height="756" loading="eager" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>Jean l'Évangéliste</figcaption>
  </figure>

      <h4>Texte du chapître 9 de <cite>La Légende dorée</cite>: <cite>Légende de Jean l'Évangéliste</cite></h4>

        <p>Le <a href="#note_nomdejean" title="nom de Jean" id="nomdejean" class="yellow">nom de Jean</a>, <span style="color: #994c3d;">Johannes</span>, se comprend comme <span style="color: #994c3d;">«grâce du Seigneur»</span>, ou comme <span tyle="color: #994c3d;">«celui en qui se trouve la grâce»</span>, ou <span style="color: #994c3d;">«celui à qui on a fait un don»</span>, ou encore <span style="color: #994c3d;">«celui qui a reçu une donation de Dieu»</span>.</p>
        <p>Ces quatre significations expriment les quatre privilèges dont a joui <span style="color: #994c3d;">saint Jean</span>.</p>
        <p>Le <span style="color: #994c3d;">premier</span> privilège a consisté dans l'<span style="color: #994c3d;">amour particulier que lui a porté le Christ</span>.</p>
        <p>En effet, le Christ l'a aimé plus que les autres apôtres et lui a montré de plus grands signes d'amour et d'intimité.</p>
        <p>C'est pour cela qu'il est nommé «grâce du Seigneur»: il a plu au Seigneur.</p>
        <p>Dieu semble même l'avoir plus aimé que Pierre.</p>
        <p>Mais on distingue l'amour de cœur et l'amour exprimé.</p>
        <p>Cet amour exprimé se déclare soit dans la manifestation d'une intimité, soit dans la distribution de bienfaits.</p>
        <p>Or, pour ce qui est de l'amour de cœur, Dieu aima également Pierre et <span style="color: #994c3d;">Jean</span>; pour ce qui est de la manifestation de l'intimité, il aima plus <span style="color: #994c3d;">Jean</span> que Pierre, et, pour la distribution des bienfaits, il préféra Pierre.</p>
        <p>Le <span style="color: #994c3d;">deuxième</span> privilège tient à la <span style="color: #994c3d;">pureté de la chair</span>:
        c'est un homme vierge qui fut choisi par le Seigneur;
        voilà pourquoi il est nommé «celui en qui se trouve la grâce».
        Car en lui se trouva la grâce de la pudeur virginale.</p>
        <p>Il fut appelé par le Seigneur au moment où il voulait se marier.</p>
        <p>Le <span style="color: #994c3d;">troisième</span> privilège réside dans la <span style="color: #994c3d;">révélation des secrets</span>.</p>
        <p>C'est ce qui le fait nommer «celui à qui l'on a fait un don».</p>
        <p>Car il lui a été donné de connaître de profonds et nombreux secrets, comme ceux qui concernent la divinité du Verbe et la fin des temps.</p>
        <p>Le <span style="color: #994c3d;">quatrième</span> privilège, c'est d'<span style="color: #994c3d;">avoir reçu la charge de la mère de Dieu</span>.</p>
        <p>C'est ce qui le fait nommer «celui qui a reçu une donation de Dieu».</p>
        <p>Et le Seigneur lui a bien fait une donation considérable en lui confiant la garde de la mère de Dieu <span style="color: #ccc;">(Jean 19, 26-27)</span>.</p>
        <p>L'évêque Milet de Laodicée a rédigé sa Vie, qu'Isidore a abrégée dans son livre «Sur la naissance, la vie et la mort des saints Pères».</p>




      <h4 class="yellow" id="persécutés-pour-sa-foi-par-domitien">persécutés pour sa foi par Domitien</h4>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, “Ébouillantement de Jean l'Évangéliste sur ordre de l'empereur Domitien devant la Porte Latine à Rome et départ en l'exil sur l'île de Patmos”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, “Ébouillantement de Jean l'Évangéliste sur ordre de l'empereur Domitien devant la Porte Latine à Rome et départ en l'exil sur l'île de Patmos”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" width="640" height="1174" loading="lazy" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1920.jpg 1920w"></picture><figcaption>détails du panneau central, “Ébouillantement de Jean l'Évangéliste sur ordre de l'empereur Domitien devant la Porte Latine à Rome et départ en l'exil sur l'île de Patmos”</figcaption>
      </figure>

        <p><span style="color: #994c3d;">Jean</span>, apôtre et évangéliste, le bien-aimé du Seigneur l'homme vierge élu, partit pour l’Asie quand les apôtres séparèrent après la Pentecôte. Il y fonda de nombreuses églises.</p>
        <p>L'empereur Domitien entendit parler de lui, le convoqua et le fit jeter dans une cuve d'huile bouillante, devant la porte Latine.</p>
        <p>Il en sortit aussi indemne qu'il avait été étranger à la corruption de la chair.</p>
        <p>L'empereur, constatant qu'il ne renonçait pas à la prédication, l'exila dans l'île de Patmos où, dans la solitude, il écrivit l’Apocalypse.</p>




      <h4 class="yellow" id="la-résurrection-de-drusiane">la résurrection de Drusiane</h4>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, chapiteau de colonne, “résurrection de Drusiane”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, chapiteau de colonne, “résurrection de Drusiane”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" width="639" height="663" loading="lazy" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1920.jpg 1920w"></picture><figcaption>détail du panneau central, chapiteau de colonne, “résurrection de Drusiane”</figcaption>
      </figure>

        <p>La même année, l'empereur fut tué en châtiment de son extrême cruauté, et le Sénat annula tout ce qu'il avait fait;
        et c'est ainsi qu'il arriva que <span style="color: #994c3d;">saint Jean</span>, qui avait été injustement déporté dans cette île, put revenir à Éphèse avec tous les honneurs.</p>
        <p>Toute une foule vint à sa rencontre en criant:</p>
        <p class="conversation"><span style="color: #165493;">—&#160;</span><span style="color: #165493;">«Béni soit celui qui vient au nom du Seigneur!</span></p>
        <p>Au moment où il entrait dans la ville, on portait en terre Drusiane, qui l'avait beaucoup aimé et qui avait tant souhaité sa venue.</p>
        <p>Les parents de Drusiane, les veuves et les orphelins dirent à <span style="color: #994c3d;">Jean</span>:</p>
        <p class="conversation"><span style="color: #df8f20;">—&#160;</span><span style="color: #165493;">«Vénérable Jean, c'est Drusiane que nous portons en terre, elle qui a toujours suivi tes instructions, qui nous nourrissait et qui, aussi, désirait tant ta venue en répétant:</span></p>
        <p class="conversation"><span style="color: #165493;">“Ah, si je pouvais voir l'apôtre de Dieu avant de mourir!”</span></p>
        <p>Alors <span style="color: #994c3d;">Jean</span> fit déposer le cercueil et découvrir le corps en disant:</p>
        <p class="conversation"><span style="color: #df8f20;">—&#160;</span></td>Drusiane, que mon Seigneur Jésus-Christ te ressuscite!</span></p>
          <p><span style="color: #df8f20;">Lève-toi, va à la maison et prépare-moi à manger!</span></p>
        <p>Elle se leva aussitôt et entreprit d'aller accomplir ce que l'apôtre avait ordonné, comme si elle avait été tirée non pas de la mort mais d'un sommeil.</p>




      <h4 class="yellow" id="le-baptème-de-craton">le baptème de Craton</h4>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, “baptème de Craton”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, “baptème de Craton”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" width="640" height="700" loading="lazy" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “baptème de Craton”</figcaption>
      </figure>

        <p>Le lendemain, le philosophe Craton convoqua le peuple sur la place du marché, afin de lui montrer comment il fallait mépriser le monde.</p>
        <p>Il avait fait acheter des pierres très précieuses par deux frères très riches qui avaient liquidé leur patrimoine à cette fin;
        et, à la vue de tous, il fit briser ces pierres.</p>
        <p>L'apôtre se trouvait passer par là; il appela le philosophe près de lui et lui reprocha ce genre de mépris du monde pour <span style="color: #994c3d;">trois raisons</span>:</p>
        <p><span style="color: #994c3d;">d'abord</span>, <span style="color: #994c3d;">ce refus du monde était loué par les hommes, mais rejeté par le jugement divin</span>;</p>
        <p><span style="color: #994c3d;">ensuite</span>, <span style="color: #994c3d;">ce geste, qui ne soigne pas le vice, est vain, comme est vain tout remède qui ne soigne pas une maladie</span>.</p>
        <p><span style="color: #994c3d;">Enfin</span>, <span style="color: #994c3d;">le mépris du monde est méritoire chez celui qui distribue ses biens aux pauvres</span>, en suivant ce que disait le Seigneur à un jeune homme: <q><a href="#note_mathieu" title="Si tu veux être parfait" id="mathieu" class="yellow">Si tu veux être parfait, va, etc.</a></q></p>
        <p>Craton répondit:</p>
        <p class="conversation">— Si ton maître est véritablement Dieu et s'il veut que le prix de ces pierres soit donné aux pauvres, fais qu'elles soient reconstituées: tu pourras ainsi tourner à sa gloire ce que j'ai fait pour obtenir l'éloge des hommes.</span></p>
        <p>Alors <span style="color: #994c3d;">saint Jean</span> rassembla en sa main les fragments des pierres et se mit en prière;
        les pierres furent restituées à leur état premier.</p>
        <p>Aussitôt le philosophe et les deux jeunes gens se mirent à croire, vendirent les pierres et en distribuèrent le prix aux pauvres.</p>




      <h4 id="sermons-de-saint-jean-contre-la-richesse-matérielle" class="yellow">sermons de saint Jean contre la richese matérielle</h4>

        <p>Là-dessus, à leur exemple, deux autres jeunes gens de bonne famille vendirent tous leurs biens, en donnèrent le produit aux pauvres et suivirent <span style="color: #994c3d;">Jean</span>.</p>
        <p>Mais un jour, ils virent leurs serviteurs resplendissants d'atours précieux, alors qu'eux-mêmes ne disposaient que d'un seul manteau et ils s'en attristèrent.</p>
        <p><span style="color: #994c3d;">Saint Jean</span> remarqua leur triste mine; il fit alors apporter, depuis le rivage de la mer, des branches et des petits cailloux et les transforma en or et en pierres précieuses.</p>
        <p>Sur ordre de l'apôtre, les jeunes gens se mirent en quête, durant sept jours, de tous les experts en or et pierres précieuses et revinrent en disant que ceux-ci avaient témoigné n'avoir jamais vu or si pur, ni pierres si précieuses.</p>
        <p><span style="color: #994c3d;">Jean</span> leur dit alors:</p>
        <p class="conversation"><span style="color: #df8f20;">— Allez et rachetez les terres que vous avez vendues, puisque vous avez perdu le bénéfice céleste; fleurissez afin de pourrir, jouissez des richesses temporelles, afin de mendier dans l'éternité.</span></p>
        <p>Et alors l'apôtre se mit à disserter fort longuement contre les richesses en montrant que six causes doivent nous détourner de les désirer immodérément.</p>
        <p>La <span style="color: #994c3d;">première</span> est l'<span style="color: #994c3d;">Écriture</span>:</p>
        <p>il raconta l'<a href="#note_hoteriche" title="histoire de l'hôte riche" id="hoteriche" class="yellow">histoire de l'hôte riche que le Seigneur réprouva et du pauvre Lazare qu'il choisit</a>.</p>
        <p>La <span style="color: #94c3d;">seconde</span> cause est la nature, car l'homme naît sans richesses ni vêtements et meurt sans richesses.</p>
        <p>La <span style="color: #994c3d;">troisième</span> est la <span style="color: #994c3d;">création</span>, car le soleil, la lune, les étoiles, la pluie, l'air sont communs à tous et distribuent leurs bienfaits en commun: de la même façon, toutes choses devraient être communes à tous.</p>
        <p>La <span style="color: #994c3d;">quatrième cause</span> est la <span style="color: #994c3d;">fortune</span>, parce que le riche se fait l'esclave de l'argent et du diable: esclave de l'argent, il ne possède pas les richesses, mais il est plutôt possédé par les richesses; esclave du diable, l'amoureux de l'argent, selon l'Évangile, sert Mammon (Matthieu 6, 24; Luc 16, 13).</p>
        <p>La <span style="color: #994c3d;">cinquième</span> est le <span style="color: #994c3d;">souci</span>, car les riches éprouvent, de jour comme de nuit, le souci et l'obsession d'acquérir et la crainte de perdre. En effet, ils éprouvent de la peine à acquérir, et de la crainte à conserver.</p>
        <p>La <span style="color: #994c3d;">sixième cause</span> est la <span style="color: #994c3d;">perte</span>:</p>
        <p>il montra que les richesses causent une perte qui réside dans l'acquisition de deux maux: un mal dans la vie présente, la vanité, et un mal dans la vie future, la damnation éternelle.</p>
        <p>Elles causent, dans la perdition éternelle, une autre perte, celle de deux biens, la grâce dans la vie présente et la gloire éternelle dans la vie future.</p>




      <h4 class="yellow" id="la-résurrection-du-jeune-marié">la résurrection du jeune marié</h4>

        <p>Or, pendant que <span style="color: #994c3d;">Jean</span> était en train d'ainsi disserter contre les richesses, voici qu'on apporta le corps d'un jeune homme qui était marié depuis trente jours.</p>
        <p>Arrivèrent sa mère, sa veuve et tous ceux qui le pleuraient; ils se jetèrent à ses pieds en l'implorant de ressusciter le jeune homme au nom du Seigneur, comme il l'avait fait pour Drusiane.</p>
        <p>Alors, aussitôt après s'être longuement abîmé dans les pleurs et les prières, il le ressuscita et lui commanda de raconter aux deux disciples quelle peine ils pouvaient encourir et quelle gloire ils pouvaient perdre.</p>
        <p>Le jeune homme raconta bien des choses sur la gloire du paradis et sur les peines de l'enfer, qu'il avait vues, et il dit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Ô malheureux, j'ai vu vos anges pleurer et les démons se réjouir.</span></p>
        <p>Il leur raconta qu'ils pouvaient perdre des palais éternels, construits d'étincelantes pierres précieuses, illuminés d'une clarté prodigieuse, abondants en riches banquets, pleins de délices, glorifiés par les joies et destinés à durer toujours.</p>
        <p>De l'enfer, il présenta huit supplices ainsi versifiés:</p>
        <p>«Vers et ténèbres, supplice, froid et brûlure Regard du démon, remords, douleur».</p>
        <p>Alors, le jeune homme ressuscité et les deux disciples se jetèrent aux pieds de l'apôtre en lui demandant miséricorde.</p>
        <p>L'apôtre leur dit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Faites pénitence pendant trente jours en priant pour obtenir que les branches et les pierres retournent à leur nature première.</span></p>
        <p>Quand cela fut fait, il leur dit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Allez porter ces branches et ces pierres là où vous les avez prises.</span></p>
        <p>Quand ils se furent exécutés et que les branches et les pierres se furent retrouvées dans leur nature première, ils reçurent toute la grâce des vertus qu'ils avaient possédée auparavant.</p>




      <h4 class="yellow" id="la-destruction-du-temple-de-diane">la destruction du temple de Diane</h4>

        <p>Saint <span style="color: #994c3d;">Jean</span> avait prêché à toute l'Asie.</p>
        <p>Un jour, les adorateurs des idoles fomentèrent une sédition populaire
        et l'emmenèrent au temple de Diane pour l'obliger à offrir un sacrifice.</p>
        <p><span style="color: #994c3d;">Jean</span> leur proposa cette alternative: </p>
        <ul>
        <li>ou bien ils réussiraient à convaincre l'Église du Christ d’invoquer Diane
        et alors il offrirait lui-même un sacrifice aux idoles;</li>
        <li>ou bien il réussirait lui-même à faire invoquer le Christ au temple de Diane
        et alors ils devraient croire au Christ.</li>
        </ul>
        <p>La majorité du peuple en fut d'accord; tout le monde sortit du temple, l'apôtre se mit en prière et le temple s'écroula;
        la statue de Diane se brisa en mille morceaux.</p>




      <h4 class="yellow" id="la-coupe-de-poison">la coupe de poison</h4>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Jean l'Évangéliste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Jean l'Évangéliste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-60-img" width="640" height="392" loading="lazy" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>Jean l'Évangéliste tenant une coupe de poison</figcaption>
      </figure>

        <p>Alors <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#renvoi-aristodeme" title="https://francois-vidit.com/docs/fr/saint-jean/page:3#renvoi-aristodeme" id="aristodeme" class="yellow">Aristodème</a>, prêtre des idoles, fit naître une forte dispute parmi le peuple, si bien qu'une partie de ce peuple se préparait à affronter l'autre. L'apôtr dit alors:</p>
        <p class="conversation"><span style="color: #df8f20;">— Que veux-tu faire? Dis-le et je ferai ce qui te plaira.</span></p>
        <p>L'autre répondit:</p>
        <p class="conversation"><span style="color: #165493;">—&#160;</span><span style="color: #165493;">«Si tu veux que je croie en ton Dieu, je te donnerai à boire du poison et s'il ne te fait aucun mal, ton seigneur apparaîtra comme le vrai Dieu.</span></p>
        <p class="conversation"><span style="color: #df8f20;">— Fais comme tu le dis</span>, dit l'apôtre.</p>
        <p class="conversation"><span style="color: #165493;">—&#160;</span><span style="color: #165493;">«Je veux d'abord</span>, dit le prêtre, <span style="color: #165493;">que tu voies des gens mourir, pour ta plus grande crainte.</span></p>
        <p>Aristodème alla donc trouver le proconsul pour se faire confier deux hommes destinés à la décapitation et,
        devant la foule, leur donna du poison.</p>
        <p>Dès qu'ils l'eurent bu,
        ils rendirent l'âme.</p>
        <p>Alors l'apôtre prit le calice et,
        en se protégeant par un signe de croix,
        but tout le poison, qui fut sans aucun effet.</p>
        <p>Tous se mirent alors à louer Dieu.</p>
        <p>Mais Aristodème ajouta:</p>
        <p class="conversation"><span style="color: #165493;">—&#160;</span><span style="color: #165493;">«J'ai encore un doute; mais si tu ressuscites ces deux morts, je croirai véritablement et sans le moindre doute.</span></p>
        <p>L'apôtre lui donna alors sa tunique. L'autre demanda:</p>
        <p class="conversation"><span style="color: #165493;">—&#160;</span><span style="color: #165493;">«Pourquoi m’as-tu donné ta tunique?</span></p>
        <p class="conversation"><span style="color: #df8f20;">— Pour qu'ainsi tu sois confondu et que tu abandonnes tes fausses croyances</span>, rétorqua l'apôtre.</p>
        <p class="conversation"><span style="color: #165493;">—&#160;</span><span style="color: #165493;">«Penses-tu vraiment que ta tunique me fera croire?» dit l'autre.</span></p>
        <p>L'apôtre dit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Va et jette-la sur le corps des défunts en disant:</span></p>
          <p><span style="color: #df8f20;">“L'apôtre du Christ m'a envoyé vers vous pour que vous ressuscitiez au nom du Christ”.</span></p>
        <p>Le prêtre s'exécuta et les morts ressuscitèrent aussitôt.</p>
        <p>Alors l'apôtre baptisa au nom du Christ le prêtre et le proconsul, qui se convertirent avec toute leur famille et firent ensuite construire une église en l'honneur de <span style="color: #994c3d;">saint Jean</span>.</p>



</article>

<hr>

<aside>
  <article>
  <h2 id="notes" class="yellow">notes</h2>

      <h3 id="note_nomdejean" class="yellow">nom de Jean</h3>

        <div class="notices yellow">
        <p>À propos du sens du nom de Jean en hébreu, voir aussi <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean">«le nom “jean”, son lien avec l'institution, son étymologie»</a>.</p>
        </div>

      <footer>
        <p>retour au texte: <a href="#nomdejean" title="nom de Jean">nom de Jean ↑</a></p>
      </footer>

    

      <h3 id="note_mathieu" class="yellow">Si tu veux être parfait</h3>


            <p>Cette citation se rapporte à un passage de l'<cite>Évangile selon Mathieu</cite>, chapître 19, verset 21:</p>


          <div class="notices yellow">
            <ol class="doc">
              <li value="21">“Si tu veux être parfait, va, vends ce que tu possèdes, donne-le aux pauvres, et tu auras un trésor dans les cieux. Puis viens, suis-moi.”</li>
            </ol>
          </div>




          <p>En complément, le texte complet:</p>


          <div class="notices yellow">
          <ol class="doc">
            <li value="16">
              Et voici que quelqu’un s’approcha de Jésus et lui dit:
              <p class="conversation">
                “Maître, que dois-je faire de bon pour avoir la vie éternelle ?”
              </p>
            </li>
            <li value="17">
              Jésus lui dit:
              <p class="conversation">
                “Pourquoi m’interroges-tu sur ce qui est bon? Celui qui est bon, c’est Dieu, et lui seul! Si tu veux entrer dans la vie, observe les commandements.”
              </p>
            </li>
            <li value="18">
              Il lui dit:
              <p class="conversation">
                “Lesquels?”
              </p>
              Jésus reprit:
              <p class="conversation">
                “Tu ne commettras pas de meurtre. Tu ne commettras pas d’adultère. Tu ne commettras pas de vol. Tu ne porteras pas de faux témoignage.
              </p>
            </li>
            <li value="19">
              <p class="conversation">
                “Honore ton père et ta mère. Et aussi: Tu aimeras ton prochain comme toi-même.”
              </p>
            </li>
            <li value="20">
              Le jeune homme lui dit:
              <p class="conversation">
                “Tout cela, je l’ai observé: que me manque-t-il encore?”
              </p>
            </li>
            <li value="21">
              Jésus lui répondit:
              <p class="conversation">
                “Si tu veux être parfait, va, vends ce que tu possèdes, donne-le aux pauvres, et tu auras un trésor dans les cieux. Puis viens, suis-moi.”
              </p>
            </li>
            <li value="22">À ces mots, le jeune homme s’en alla tout triste, car il avait de grands biens.</li>
            <li value="23">
              Et Jésus dit à ses disciples:
              <p class="conversation">
                “Amen, je vous le dis: un riche entrera difficilement dans le royaume des Cieux.”
              </p>
            </li>
            <li value="24">
              Je vous le répète:
              <p class="conversation">
                “il est plus facile à un chameau de passer par un trou d’aiguille qu’à un riche d’entrer dans le royaume des Cieux”.
              </p>
            </li>
          </ol>
          </div>


          <p>Cette histoire apparaît également dans l'<cite>Évangile selon Jean</cite>, plus en détails:</p>
          <p><a href="https://www.aelf.org/bible/Jn/11" title="https://www.aelf.org/bible/Jn/11"><cite>Évangile selon Jean</cite> chapitre 11, verset 1-46</a></p>


      <footer>
        <p>retour au texte: <a href="#mathieu" title="Si tu veux être parfait">Si tu veux être parfait↑</a></p>
      </footer>



      <h3 id="note_hoteriche" class="yellow">histoire de l'hôte riche</h3>

        <header>
            <p>Ce passage se rapporte à l'<cite>Évangile selon Luc</cite>, chapître 16, verset 19 et suivants:</p>
        </header>

          <div class="notices yellow">
            <ol clas="doc">
              <li value="19">«Il y avait un homme riche, vêtu de pourpre et de lin fin, qui faisait chaque jour des festins somptueux.</li>
              <li value="20">Devant son portail gisait un pauvre nommé Lazare, qui était couvert d’ulcères.</li>
              <li value="21">Il aurait bien voulu se rassasier de ce qui tombait de la table du riche; mais les chiens, eux, venaient lécher ses ulcères.</li>
              <li value="22">Or le pauvre mourut, et les anges l’emportèrent auprès d’Abraham. Le riche mourut aussi, et on l’enterra.</li>
              <li value="23">Au séjour des morts, il était en proie à la torture; levant les yeux, il vit Abraham de loin et Lazare tout près de lui.</li>
              <li value="24">
                Alors il cria:
                <p class="conversation">
                  “Père Abraham, prends pitié de moi et envoie Lazare tremper le bout de son doigt dans l’eau pour me rafraîchir la langue, car je souffre terriblement dans cette fournaise.”
                </p>
              </li>
              <li value="25">
                <p class="conversation">
                  – “Mon enfant, répondit Abraham, rappelle-toi: tu as reçu le bonheur pendant ta vie, et Lazare, le malheur pendant la sienne. Maintenant, lui, il trouve ici la consolation, et toi, la souffrance”.
                </p>
              </li>
            </ol>
          </div>

        <footer>
          <p>Cette histoire est également racontée par Jean, plus en détail:</p>
          <p>voir <a href="https://www.aelf.org/bible/Jn/11" title="https://www.aelf.org/bible/Jn/11">Jean chapitre 11, verset 1-46</a>.</p>
        </footer>

      <footer>
        <p>retour au texte: <a href="#mathieu" title="Si tu veux être parfait">histoire de l'hôte riche ↑</a></p>
      </footer>

  </article>
</aside>
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