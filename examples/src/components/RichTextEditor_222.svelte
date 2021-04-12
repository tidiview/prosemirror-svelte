<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 20 -->

<article>

<hgroup>
<h2 id="mise-en-relation" class="yellow">différents textes à l'origine des scènes représentées dans le <cite><ruby style="color:#555;" lang="fr">Triptyque de Jean le Baptiste et de Jean l'Évangéliste<rp>(</rp><rt style="color:#999;" lang="nl">Triptiek van Johannes de Doper en Johannes de Evangelist</rt><rp>)</rp></ruby></cite></h2>
  <h3 id="apocalypse" class="yellow">Extrait du texte de <cite>L'Apocalypse</cite> relatif à la représentation de Jean à Patmos sur le volet gauche par Hans Memling</h3>
</hgroup>

    <h4 id="apocalypse" class="yellow">Extrait du texte de <cite>L'Apocalypse</cite> du chapître 4 à 12</h4>


<p>out</p>
        <ol class="doc">
          <li>Chapître 4</li>
          <li value="01">Après cela, j’ai vu: et voici qu’il y avait une porte ouverte dans le ciel. Et la voix que j’avais entendue, pareille au son d’une trompette, me parlait en disant:
            <p class="conversation">
              «Monte jusqu’ici, et je te ferai voir ce qui doit ensuite advenir.»
            </p>
          </li>
        </ol>

      <hr>

        <ol class="doc">
          <li value="02">je fus saisi en <span style="color: #e6a64d;">esprit</span>.
          Voici qu’un <span style="color: #e6a64d;">trône</span> était là dans le <span style="color: #e6a64d;">ciel</span>, et sur le trône siégeait <span style="color: #e6a64d;">quelqu’un</span>.</li>
          <li value="03">Celui qui siège a l’aspect d’une pierre de jaspe ou de cornaline;
          il y a, tout autour du trône, <span style="color: #e6a64d;">un arc-en-ciel</span>, avec des reflets d’émeraude.</li>
          <li value="04">Tout autour de ce trône, vingt-quatre trônes, où siègent <span style="color: #e6a64d;">vingt-quatre anciens</span> portant des vêtements blancs et, sur leurs têtes, des couronnes d’or.</li>
          <li value="05">Et du trône sortent des éclairs, des fracas, des coups de tonnerre, et sept torches enflammées brûlent devant le trône:
          ce sont les sept esprits de dieu.</li>
          <li value="06">Devant le trône, il y a comme une mer, aussi transparente que du cristal.</li>
        </ol>

      <hr>

        <ol class="doc">
          <li value="07">Le premier vivant ressemble à un <span style="color: #e6a64d;">lion</span>, le deuxième vivant ressemble à un <span style="color: #e6a64d;">jeune taureau</span>, le troisième vivant a comme un <span style="color: #e6a64d;">visage d’homme</span>, le quatrième vivant ressemble à un <span style="color: #e6a64d;">aigle</span> en plein vol.</li>
          <li value="08">
            Les quatre vivants ont chacun <span style="color: #e6a64d;">six ailes</span>, avec des yeux innombrables tout autour et au-dedans.
            Jour et nuit, ils ne cessent de dire:
            <p class="conversation">
              “Saint! saint! saint, le seigneur dieu, le souverain de l’univers, celui qui était, qui est et qui vient.”
            </p>
          </li>
        </ol>

      <hr>
<p>out</p>
          <ol class="doc">
            <li value="9">Lorsque les Vivants rendent gloire, honneur et action de grâce à celui qui siège sur le Trône, lui qui vit pour les siècles des siècles,</li>
            <li value="10">les vingt-quatre Anciens se jettent devant Celui qui siège sur le Trône, ils se prosternent face à celui qui vit pour les siècles des siècles; ils lancent leur couronne devant le Trône en disant:</li>
            <li value="11">
              <p class="conversation">
                “Tu es digne, Seigneur notre Dieu, de recevoir la gloire, l’honneur et la puissance. C’est toi qui créas l’univer ; tu as voulu qu’il soit: il fut créé.”
              </p>
            </li>
          </ol>

      <hr>
<p>out</p>
        <ol class="doc">
          <li>Chapître 5</li>
          <li value="1">J’ai vu, dans la main droite de celui qui siège sur le Trône, un livre en forme de rouleau, écrit au-dedans et à l’extérieur, scellé de sept sceaux.</li>
          <li value="2">Puis j’ai vu un ange plein de force, qui proclamait d’une voix puissante:
            <p class="conversation">
              “Qui donc est digne d’ouvrir le Livre et d’en briser les sceaux?”
            </p>
          </li>
          <li value="3">Mais personne, au ciel, sur terre ou sous la terre, ne pouvait ouvrir le Livre et regarder.</li>
          <li value="4">Je pleurais beaucoup, parce que personne n’avait été trouvé digne d’ouvrir le Livre et de regarder.</li>
          <li value="5">Mais l’un des Anciens me dit:
            <p class="conversation">
              “Ne pleure pas. Voilà qu’il a remporté la victoire, le lion de la tribu de Juda, le rejeton de David: il ouvrira le Livre aux sept sceaux.”
            </p>
          </li>
        </ol>

      <hr>

        <ol class="doc">
          <li value="06">Et j’ai vu, entre le Trône, les quatre Vivants et les Anciens, un Agneau debout, comme égorgé; ses cornes étaient au nombre de sept, ainsi que ses yeux, qui sont les sept esprits de Dieu envoyés sur toute la terre.</li>
          <li value="07">Il s’avança et prit le Livre dans la main droite de celui qui siégeait sur le Trône.</li>
        </ol>

      <hr>
<p>out</p>
          <ol class="doc">
            <li value="8">Quand l’Agneau eut pris le Livre, les quatre Vivants et les vingt-quatre Anciens se jetèrent à ses pieds. Ils tenaient chacun une cithare et des coupes d’or pleines de parfums qui sont les prières des saints.</li>
            <li value="9">Ils chantaient ce cantique nouveau:
              <p>
                “Tu es digne, de prendre le Livre et d’en ouvrir les sceaux, car tu fus immolé, rachetant pour Dieu, par ton sang, des gens de toute tribu, langue, peuple et nation.
              </p>
            </li>
            <li value="10">
              <p class="conversation">
                Pour notre Dieu, tu en as fait un royaume et des prêtres: ils régneront sur la terre.”
              </p>
            </li>
            <li value="11">Alors j’ai vu: et j’entendis la voix d’une multitude d’anges qui entouraient le Trône, les Vivants et les Anciens; ils étaient des myriades de myriades, par milliers de milliers.</li>
            <li value="12">Ils disaient d’une voix forte:
              <p class="conversation">
                “Il est digne, l’Agneau immolé, de recevoir puissance et richesse, sagesse et force, honneur, gloire et louange.”
              </p>
            </li>
            <li value="13">Toute créature dans le ciel et sur la terre, sous la terre et sur la mer, et tous les êtres qui s’y trouvent, je les entendis proclamer:
              <p class="conversation">
                “À celui qui siège sur le Trône, et à l’Agneau, la louange et l’honneur, la gloire et la souveraineté pour les siècles des siècles.”
              </p>
            </li>
            <li value="14">Et les quatre Vivants disaient:
              <p class="conversation">
                “Amen!”
              </p>
            et les Anciens, se jetant devant le Trône, se prosternèrent.
          </li>
        </ol>

      <hr>

        <ol class="doc">
            <li>chapître 6</li>
            <li value="01">
              Alors j’ai vu: quand l’agneau ouvrit l’un des sept sceaux, j’entendis l’un des quatre vivants dire d’une voix de tonnerre:
              <p class="conversation">
                “Viens!”
              </p>
            </li>
            <li value="02">Alors j’ai vu: et voici un <span style="color: #e6a64d;">cheval blanc</span>; celui qui le montait tenait un <span style="color: #e6a64d;">arc</span>, une <span style="color: #e6a64d;">couronne</span> lui fut donnée, et il sortit vainqueur, pour vaincre à nouveau.</li>
          </ol>

      <hr>

        <ol class="doc">
          <li value="03">Et quand il ouvrit le deuxième sceau, j’entendis le deuxième vivant qui disait:
            <p class="conversation">
              “Viens!”
            </p>
          </li>
          <li value="04">Alors sortit un autre <span style="color: #e6a64d;">cheval</span>, <span style="color: #e6a64d;">rouge feu</span>; à celui qui le montait il fut donné d’enlever la paix à la terre, pour que les gens s’entretuent, et une grande <span style="color: #e6a64d;">épée</span> lui fut donnée.</li>
        </ol>

      <hr>

        <ol class="doc">
          <li value="05">
            Et quand il ouvrit le troisième sceau, j’entendis le troisième vivant qui disait:
            <p class="conversation">
              “Viens!”
            </p>
          Alors j’ai vu: et voici un <span style="color: #e6a64d;">cheval noir</span>; celui qui le montait tenait à la main une <span style="color: #e6a64d;">balance</span>.
          </li>
          <li value="06">
          Et j'entendis comme une voix au milieu des quatre vivants; elle disait:
            <p class="conversation">
              “Un denier, la mesure de blé! Un denier, les trois mesures d’orge! Ne fraude pas sur l’huile et sur le vin!”
            </p>
          </li>
        </ol>

      <hr>

        <ol class="doc">
          <li value="07">
          <li value="07">Et quand il ouvrit le quatrième sceau, j’entendis la voix du quatrième vivant qui disait:
          <p class="conversation">
            “Viens!”
          </p>
          </li>
          <li value="08">Alors j’ai vu: et voici un <span style="color: #e6a64d;">cheval verdâtre</span>; celui qui le montait se nomme <span style="color: #e6a64d;">la mort</span>, et le <span style="color: #e6a64d;">séjour des morts</span> l’accompagnait.</li>
          <li>Et il leur fut donné pouvoir sur un quart de la terre pour tuer par le glaive, par la famine et par la peste, et par les fauves de la terre.</li>
          <li><span style="color: #999;">(…)</span></li>
        </ol>

      <hr>
<p>out</p>
        <ol class="doc">
          <li value="9">Et quand il ouvrit le cinquième sceau, je vis sous l’autel les âmes de ceux qui furent égorgés à cause de la parole de Dieu et du témoignage qu’ils avaient porté.</li>
          <li value="10">Ils crièrent d’une voix forte: «Jusques à quand, Maître saint et vrai,resteras-tu sans juger, sans venger notre sang sur les habitants de la terre ?»</li>
          <li value="11">Et il fut donné à chacun une robe blanche, et il leur fut dit de patienter encore quelque temps, jusqu’à ce que soient au complet leurs compagnons de service, leurs frères, qui allaient être tués comme eux.</li>
          <li value="12">Alors j’ai vu: quand il ouvrit le sixième sceau, il y eut un grand tremblement de terre, le soleil devint noir comme une étoffe de crin, et la lune entière, comme du sang,</li>
          <li value="13">et les étoiles du ciel tombèrent sur la terre comme lorsqu’un figuier secoué par grand vent jette ses fruits.</li>
        </ol>

      <hr>

        <ol class="doc">
          <li value="14">Le ciel se retira comme un livre qu’on referme; toutes les montagnes et les îles furent déplacées.</li>
          <li value="15"><span style="color: #e6a64d;">Les rois de la terre et les grands, les chefs d’armée, les riches et les puissants, tous les esclaves et les hommes libres allèrent se cacher dans les cavernes et les rochers des montagnes</span>.</li>
          <li value="16"><p>Et ils disaient aux montagnes et aux rochers:</p>
          <p class="conversation">
            “Tombez sur nous, et cachez-nous du regard de celui qui siège sur le trône et aussi de la colère de l’agneau.”
          </p>
          </li>
          <li value="17">
          <p class="conversation">
            Car il est venu, le grand jour de leur colère, et qui pourrait tenir?»
          </p>
          </li>
        </ol>

      <hr>
<p>out</p>
        <ol class="doc">
          <li>chapître 7</li>
          <li value="1"> Après cela, j’ai vu quatre anges debout aux quatre coins de la terre, maîtrisant les quatre vents de la terre, pour empêcher le vent de souffler sur la terre, sur la mer et sur tous les arbres.</li>
          <li value="2">Puis j’ai vu un autre ange qui montait du côté où le soleil se lève, avec le sceau qui imprime la marque du Dieu vivan ; d’une voix forte, il cria aux quatre anges qui avaient reçu le pouvoir de faire du mal à la terre et à la mer :</li>
          <li value="3">«Ne faites pas de mal à la terre, ni à la mer, ni aux arbres, avant que nous ayons marqué du sceau le front des serviteurs de notre Dieu.»</li>
          <li value="4">Et j’entendis le nombre de ceux qui étaient marqués du sceau: ils étaient cent quarante-quatre mille, de toutes les tribus des fils d’Israël.</li>
          <li value="5">De la tribu de Juda, douze mille marqués du sceau; de la tribu de Roubène, douze mille; de la tribu de Gad, douze mille ;</li>
          <li value="6">de la tribu d’Aser, douze mille; de la tribu de Nephtali, douze mille; de la tribu de Manassé, douze mille ;</li>
          <li value="7">de la tribu de Siméon, douze mille; de la tribu de Lévi, douze mille; de la tribu d’Issakar, douze mille ;</li>
          <li value="8">de la tribu de Zabulon, douze mille; de la tribu de Joseph, douze mille; de la tribu de Benjamin, douze mille marqués du sceau.</li>
          <li value="9">Après cela, j’ai vu: et voici une foule immense, que nul ne pouvait dénombrer, une foule de toutes nations, tribus, peuples et langues. Ils se tenaient debout devant le Trône et devant l’Agneau, vêtus de robes blanches, avec des palmes à la main.</li>
          <li value="10">Et ils s’écriaient d’une voix forte: «Le salut appartient à notre Dieu qui siège sur le Trône et à l’Agneau!»</li>
          <li value="11">Tous les anges se tenaient debout autour du Trône, autour des Anciens et des quatre Vivants; se jetant devant le Trône, face contre terre, ils se prosternèrent devant Dieu.</li>
          <li value="12">Et ils disaient: «Amen! Louange, gloire, sagesse et action de grâce, honneur, puissance et force à notre Dieu, pour les siècles des siècles! Amen!»</li>
          <li value="13">L’un des Anciens prit alors la parole et me dit: «Ces gens vêtus de robes blanches, qui sont-ils, et d’où viennent-ils ?»</li>
          <li value="14">Je lui répondis: «Mon seigneur, toi, tu le sais.» Il me dit: «Ceux-là viennent de la grande épreuve; ils ont lavé leurs robes, ils les ont blanchies par le sang de l’Agneau.</li>
          <li value="15">C’est pourquoi ils sont devant le trône de Dieu, et le servent, jour et nuit, dans son sanctuaire. Celui qui siège sur le Trône établira sa demeure chez eux.</li>
          <li value="16">Ils n’auront plus faim, ils n’auront plus soif, ni le soleil ni la chaleur ne les accablera,</li>
          <li value="17">puisque l’Agneau qui se tient au milieu du Trône sera leur pasteur pour les conduire aux sources des eaux de la vie. Et Dieu essuiera toute larme de leurs yeux.»</li>
        </ol>

      <hr>

        <ol class="doc">
          <li>chapître 8</li>
          <li value="01">Quand il ouvrit le septième sceau, il y eut dans le ciel un silence d’environ une demi-heure.</li>
          <li value="02">Et j’ai vu les <span style="color: #e6a64d;">sept anges</span> qui se tiennent devant dieu: il leur fut donné <span style="color: #e6a64d;">sept trompettes</span>.</li>
        </ol>

      <hr>

        <ol class="doc">
          <li value="03">Un autre ange vint se placer près de l’autel; il portait un <span style="color: #e6a64d;">encensoir d’or</span>; il lui fut donné quantité de parfums pour les offrir, avec les prières de tous les saints, sur <span style="color: #e6a64d;">l’autel d’or</span> qui est devant le trône.</li>
        </ol>

      <hr>

        <ol class="doc">
          <li value="04">Et par la main de l’ange monta devant dieu la fumée des parfums, avec les prières des saints.</li>
          <li value="05">Puis l’ange prit l’encensoir et le remplit du feu de l’autel; il le jeta sur la terre: il y eut des coups de tonnerre, des fracas, des éclairs et un tremblement de terre.</li>
          <li value="06">Puis les sept anges qui avaient les sept trompettes se préparèrent à en sonner.</li>
          <li value="07">Le premier sonna de la trompette: il y eut de la grêle et du feu mêlés de sang, qui furent jetés sur la terre, et le tiers de la terre brûla, le tiers des arbres brûlèrent, toute l’herbe verte brûla.</li>
          <li value="08">Le deuxième ange sonna de la trompette: dans la mer fut jetée comme <span style="color: #e6a64d;">une grande montagne embrasée</span>, et le tiers de la mer fut changé en sang;</li>
          <li value="09">dans la mer, le tiers des créatures vivantes mourut, et <span style="color: #e6a64d;">le tiers des bateaux fut détruit</span>.</li>
        </ol>

      <hr>

        <ol class="doc">
          <li value="10">Le troisième ange sonna de la trompette: du ciel tomba <span style="color: #e6a64d;">une grande étoile qui flambait comme une torche</span>; elle tomba sur le tiers des fleuves et sur les sources des eaux.</li>
          <li value="11">L’étoile se nomme “<span style="color: #e6a64d;">absinthe</span>”, et le tiers des eaux devint de l’absinthe: beaucoup de gens moururent à cause des eaux devenues amères.</li>
          <li value="12">Le quatrième ange sonna de la trompette: le tiers du soleil fut frappé, et le tiers de la lune et le tiers des étoiles; ainsi chacun d’entre eux fut obscurci d’un tiers, le jour perdit le tiers de sa clarté et, de même, la nuit.</li>
        </ol>

      <hr>

        <ol class="doc">
          <li value="13"><p>Alors j’ai vu: et j’entendis <span style="color: #e6a64d;">un aigle</span> qui volait en plein ciel, disant d’une voix forte:</p>
          <p class="conversation">
            «Malheur! Malheur! Malheur pour ceux qui habitent la terre, car la trompette, encore, doit retentir quand les trois anges sonneront!»
          </p>
          </li>
        </ol>

      <hr>

        <ol class="doc">
          <li>chapître 9</li>
          <li value="01">Le cinquième ange sonna de la trompette, et j’ai vu une étoile qui était tombée du ciel sur la terre: c’est à elle que fut donnée la clé du <span style="color: #e6a64d;">puits de l’abîme</span>.</li>
          <li value="02">Elle ouvrit le puits de l’abîme, et du puits monta <span style="color: #e6a64d;">une fumée comme celle d’une grande fournaise</span>; le soleil et l’air furent obscurcis par la fumée du puits,</li>
          <li value="03">Et de la fumée sortirent vers la terre des <span style="color: #e6a64d;">sauterelles</span>; un pouvoir leur fut donné, pareil au pouvoir des scorpions de la terre.</li>
          <li value="04">Il leur fut dit de ne pas faire de mal à l’herbe de la terre, ni à la verdure, ni à aucun arbre, mais seulement aux hommes, ceux qui n’ont pas sur le front la marque du sceau de dieu.</li>
          <li value="05">Il leur fut donné, non pas de les tuer, mais de les tourmenter pendant cinq mois d’un tourment comme celui qu’inflige le scorpion quand il pique un homme.</li>
          <li value="06">En ces jours-là, les hommes chercheront la mort et ne la trouveront pas; ils désireront mourir et la mort les fuira.</li>
        </ol>

      <hr>

        <ol class="doc">
          <li value="07">Ces sortes de <span style="color: #e6a64d;">sauterelles</span> ressemblent à des chevaux équipés pour la guerre; elles ont comme des couronnes d’or sur la tête, et un visage comme un visage humain,</li>
          <li value="08">Elles ont des cheveux comme des cheveux de femmes, leurs dents sont comme celles des lions.</li>
          <li value="09">Elles ont des poitrails comme des cuirasses de fer, et le bruit de leurs ailes est comme celui de chars à plusieurs chevaux courant au combat.</li>
          <li value="10">Elles ont des queues comme des scorpions, et des dards venimeux.
          Dans leur queue se trouve le pouvoir de faire du mal aux hommes pendant cinq mois.</li>
          <li value="11">Elles ont comme roi l’ange de l’abîme; il se nomme en hébreu ”Abaddôn” et en grec ”Apollyôn” (c’est-à-dire: Destructeur).</li>
        </ol>

      <hr>
<p>out</p>
        <ol class="doc">
          <li value="12">Le premier «Malheur!» est passé; voici que deux «Malheur!» vont encore arriver.</li>
          <li value="13">Le sixième ange sonna de la trompette, et j’entendis une voix venant des quatre cornes de l’autel d’or qui est devant Dieu;</li>
          <li value="14">elle disait au sixième ange qui avait la trompette: «Libère les quatre anges qui sont enchaînés au bord de l’Euphrate, le grand fleuve.»</li>
          <li value="15">Alors furent libérés les quatre anges qui étaient prêts pour cette heure, ce jour, ce mois, cette année, afin de tuer le tiers de l’humanité.</li>
          <li value="16">Les troupes de cavalerie comptaient deux myriades de myriades: j’ai entendu ce nombre.</li>
          <li value="17">Ainsi, dans ma vision, j’ai vu les chevaux et ceux qui les montaient: ils ont des cuirasses couleur de feu, d’hyacinthe et de soufre; les têtes des chevaux sont comme des têtes de lion; de leurs bouches sortent du feu, de la fumée et du soufre.</li>
          <li value="18">Le tiers de l’humanité fut tué par ces trois fléaux, le feu, la fumée et le soufre qui sortaient de leurs bouches.</li>
          <li value="19">Car le pouvoir des chevaux se trouve dans leurs bouches, et aussi dans leurs queues. En effet, celles-ci sont semblables à des serpents, et elles ont des têtes qui font du mal.</li>
          <li value="20">Et le reste des hommes, ceux qui n’avaient pas été tués par ces fléaux, ne se sont pas convertis, ne renonçant pas aux œuvres de leurs mains; ils n’ont pas cessé de se prosterner devant les démons, les idoles d’or, d’argent, de bronze, de pierre et de bois, qui ne peuvent pas voir, ni entendre, ni marcher.</li>
          <li value="21">Ils ne se sont pas convertis, ne renonçant ni à leurs meurtres, ni à leurs sortilèges, ni à leur débauche, ni à leurs vols.</li>
        </ol>

      <hr>

        <ol class="doc">
          <li>chapître 10</li>
          <li value="01">Et j’ai vu un autre <span style="color: #e6a64d;">ange</span>, plein de force, descendre du ciel, ayant <span style="color: #e6a64d;">une nuée pour manteau</span>, et sur la tête <span style="color: #e6a64d;">un arc-en-ciel</span>; son visage était comme <span style="color: #e6a64d;">le soleil</span>, et ses jambes comme <span style="color: #e6a64d;">des colonnes de feu</span>.</li>
          <li value="02">Il tenait à la main <span style="color: #e6a64d;">un petit livre ouvert</span>.</li>
          <li>Il posa le pied droit sur la mer, et le gauche sur la terre;</li>
        </ol>

      <hr>

        <ol class="doc">
          <li value="03">il cria d’une voix forte, comme un lion qui rugit.
          Et quand il cria, les sept tonnerres parlèrent, faisant résonner leur voix.</li>
          <li value="04"><p>Et quand les sept tonnerres eurent parlé, j’allais me mettre à écrire; mais j’entendis une voix venant du ciel qui disait:</p>
          <blockquote>
            “Ce que viennent de dire les sept tonnerres, garde-le scellé, ne l’écris pas!”
          </blockquote>
          </li>
          <li value="05">Et l’ange que j’avais vu debout sur la mer et sur la terre leva la main droite vers le ciel;</li>
          <li value="06"><p>il fit un serment par celui qui est vivant pour les siècles des siècles, celui qui a créé le ciel et tout ce qu’il contient, la terre et tout ce qu’elle contient, la mer et tout ce qu’elle contient. Il déclara:</p>
          <blockquote>
            “Du temps, il n’y en aura plus!”
          </blockquote>
          </li>
        </ol>

      <hr>
<p>out</p>
        <ol class="doc">
          <li value="07">Dans les jours où retentira la voix du septième ange, quand il sonnera de la trompette, alors se trouvera accompli le mystère de Dieu, selon la bonne nouvelle qu’il a annoncée à ses serviteurs les prophètes.»</li>
          <li value="08">Et la voix que j’avais entendue, venant du ciel, me parla de nouveau et me dit: «Va prendre le livre ouvert dans la main de l’ange qui se tient debout sur la mer et sur la terre.»</li>
          <li value="09">Je m’avançai vers l’ange pour lui demander de me donner le petit livre. Il me dit: «Prends, et dévore-le; il remplira tes entrailles d’amertume, mais dans ta bouche il sera doux comme le miel.»</li>
          <li value="10">Je pris le petit livre de la main de l’ange, et je le dévorai. Dans ma bouche il était doux comme le miel, mais, quand je l’eus mangé, il remplit mes entrailles d’amertume.</li>
          <li value="11">Alors on me dit: «Il te faut de nouveau prophétiser sur un grand nombre de peuples, de nations, de langues et de rois.»</li>
        </ol>

      <hr>
<p>out</p>
        <ol class="doc">
          <li>chapître 11</li>
          <li value="1">Puis il me fut donné un roseau, une sorte de règle, avec cette parole: «Lève-toi, mesure le sanctuaire de Dieu, l’autel et ceux qui s’y prosternent.</li>
          <li value="2">Mais la cour au-dehors du Sanctuaire, tiens-la en dehors, ne la mesure pas, car elle a été donnée aux nations: elles fouleront aux pieds la Ville sainte pendant quarante-deux mois.</li>
          <li value="3">Et je donnerai à mes deux témoins de prophétiser, vêtus de toile à sac, pendant mille deux cent soixante jours.»</li>
          <li value="4">Ce sont eux les deux oliviers, les deux chandeliers, qui se tiennent devant le Seigneur de la terre.</li>
          <li value="5">Si quelqu’un veut leur faire du mal, un feu jaillit de leur bouche et dévore leurs ennemis; oui, celui qui voudra leur faire du mal, c’est ainsi qu’il doit mourir.</li>
          <li value="6">Ces deux témoins ont le pouvoir de fermer le ciel, pour que la pluie ne tombe pas pendant les jours de leur prophétie. Ils ont aussi le pouvoir de changer l’eau en sang et de frapper la terre de toutes sortes de fléaux, aussi souvent qu’ils le voudront.</li>
          <li value="7">Mais, quand ils auront achevé leur témoignage, la Bête qui monte de l’abîme leur fera la guerre, les vaincra et les fera mourir.</li>
          <li value="8">Leurs cadavres restent sur la place de la grande ville, qu’on appelle, au sens figuré, Sodome et l’Égypte, là où leur Seigneur aussi a été crucifié</li>
          <li value="9">De tous les peuples, tribus, langues et nations, on vient regarder leurs cadavres pendant trois jours et demi, sans qu’il soit permis de les mettre au tombeau.</li>
          <li value="10">Les habitants de la terre s’en réjouissent, ils sont dans la joie, ils échangent des présents; ces deux prophètes, en effet, avaient causé bien du tourment aux habitants de la terre.</li>
          <li value="11">Mais, après ces trois jours et demi, un souffle de vie venu de Dieu entra en eux: ils se dressèrent sur leurs pieds, et une grande crainte tomba sur ceux qui les regardaient.</li>
          <li value="12">Alors les deux témoins entendirent une voix forte venant du ciel, qui leur disait: «Montez jusqu’ici!» Et ils montèrent au ciel dans la nuée, sous le regard de leurs ennemis.</li>
          <li value="13">Et à cette heure-là, il y eut un grand tremblement de terre: le dixième de la ville s’écroula, et dans le tremblement de terre sept mille personnes furent tuées. Les survivants furent saisis de crainte et rendirent gloire au Dieu du ciel.</li>
          <li value="14">Le deuxième «Malheur!» est passé; voici que le troisième «Malheur!» vient sans tarder.</li>
          <li value="15">Le septième ange sonna de la trompette. Il y eut dans le ciel des voix fortes qui disaient: «Il est advenu sur le monde, le règne de notre Seigneur et de son Christ. C’est un règne pour les siècles des siècles.»</li>
          <li value="16">Et les vingt-quatre Anciens qui siègent sur leurs trônes en présence de Dieu, se jetant face contre terre, se prosternèrent devant Dieu</li>
          <li value="17">en disant: «À toi, nous rendons grâce, Seigneur Dieu, Souverain de l’univers, toi qui es, toi qui étais! Tu as saisi ta grande puissance et pris possession de ton règne.</li>
          <li value="18">Les nations s’étaient mises en colère; alors, ta colère est venue et le temps du jugement pour les morts, le temps de récompenser tes serviteurs, les prophètes et les saints, ceux qui craignent ton nom, les petits et les grands, le temps de détruire ceux qui détruisent la terre.»</li>
          <li value="19">Le sanctuaire de Dieu, qui est dans le ciel, s’ouvrit, et l’arche de son Alliance apparut dans le Sanctuaire; et il y eut des éclairs, des fracas, des coups de tonnerre, un tremblement de terre et une forte grêle.</li>
        </ol>

      <hr>

        <ol class="doc">
          <li>chapître 12</li>
          <li value="01">Un grand signe apparut dans le ciel: <span style="color: #e6a64d;">une femme</span>, ayant le soleil pour manteau, la lune sous les pieds, et sur la tête une couronne de douze étoiles.</li>
          <li value="02">Elle est enceinte, elle crie, dans les douleurs et la torture d’un enfantement.</li>
          <li value="03">Un autre signe apparut dans le ciel: <span style="color: #e6a64d;">un grand dragon</span>, rouge feu, avec sept têtes et dix cornes, et, sur chacune des sept têtes, un diadème.</li>
          <li value="04">Sa queue, entraînant le tiers des étoiles du ciel, les précipita sur la terre. Le dragon vint se poster devant la femme qui allait enfanter, afin de dévorer l’enfant dès sa naissance.</li>
        </ol>

      <hr>

        <ol class="doc">
          <li value="05">Or, elle mit au monde un fils, un enfant mâle, celui qui sera le berger de toutes les nations, les conduisant avec un sceptre de fer. L’enfant fut enlevé jusqu’auprès de dieu et de son trône,</li>
          <li value="06">et la femme s’enfuit au désert, où dieu lui a préparé une place, pour qu’elle y soit nourrie pendant mille deux cent soixante jours.</li>
          <li value="07">Il y eut alors un combat dans le ciel: Michel, avec ses anges, dut combattre le dragon.
          Le dragon, lui aussi, combattait avec ses anges,</li>
          <li value="08">mais il ne fut pas le plus fort; pour eux désormais, nulle place dans le ciel.</li>
          <li value="09">Oui, il fut rejeté, le grand dragon, le serpent des origines, celui qu’on nomme diable et Satan, le séducteur du monde entier.
          Il fut jeté sur la terre, et ses anges furent jetés avec lui.</li>
        </ol>

      <hr>

        <ol class="doc">
          <li value="10">Alors j’entendis dans le ciel une voix forte, qui proclamait: «Maintenant voici le salut, la puissance et le règne de notre dieu, voici le pouvoir de son christ!</li>
          <li>Car il est rejeté, l’accusateur de nos frères, lui qui les accusait, jour et nuit, devant notre dieu.</li>
          <li value="11">Eux-mêmes l’ont vaincu par le sang de l’agneau, par la parole dont ils furent les témoins; détachés de leur propre vie, ils sont allés jusqu’à mourir.</li>
          <li value="12">Cieux, soyez donc dans la joie, et vous qui avez aux cieux votre demeure!</li>
          <li>Malheur à la terre et à la mer: le diable est descendu vers vous, plein d’une grande fureur; il sait qu’il lui reste peu de temps.»</li>
          <li value="13">Et quand le <span style="color: #e6a64d;">dragon</span> vit qu’il était jeté sur la terre, il se mit à poursuivre la <span style="color: #e6a64d;">femme</span> qui avait mis au monde l’enfant mâle.</li>
          <li value="14">Alors furent données à la femme les <span style="color: #e6a64d;">deux ailes du grand aigle</span> pour qu’elle s’envole au désert, à la place où elle doit être nourrie pour un temps, deux temps et la moitié d’un temps, loin de la présence du Serpent.</li>
        </ol>

      <hr>
<p>out</p>
        <ol class="doc">
          <li value="15">Puis, de sa gueule, le Serpent projeta derrière la Femme de l’eau comme un fleuve, pour qu’elle soit emportée par ce fleuve.</li>
          <li value="16">Mais la terre vint au secours de la Femme: la terre ouvrit la bouche et engloutit le fleuve projeté par la gueule du Dragon.</li>
          <li value="17">Alors le Dragon se mit en colère contre la Femme, il partit faire la guerre au reste de sa descendance, ceux qui observent les commandements de Dieu et gardent le témoignage de Jésus.</li>
          <li value="18">Et il se posta sur le sable au bord de la mer.</li>
        </ol>

      <hr>

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