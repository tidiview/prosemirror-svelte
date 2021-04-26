<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<p><time datetime="2020-02-11">11 Fév. 2020</time></p>

<div class="notices green">
<p>Cet extrait du Chapître 5 du Livre <abbr title="sixième">VI</abbr> de l' <cite>Histoire des Francs</cite> de <a href="https://fr.wikipedia.org/wiki/Grégoire_de_Tours" title="https://fr.wikipedia.org/wiki/Grégoire_de_Tours">Grégoire de Tours</a> relate la rencontre du roi <a href="https://fr.wikipedia.org/wiki/Chilpéric_Ier_(roi_des_Francs)" title="https://fr.wikipedia.org/wiki/Chilpéric_Ier_(roi_des_Francs)">Chilpéric</a> et d'un de ses sujets de religion juive nommé Priscus telle qu'en a été témoin l'auteur. </p>
</div>

<div class="notices green">
<p>Le récit se présente comme une sorte de combat spirituel sans concession malgré la très grande différence des conditions des protagonistes.</p>
<p>Priscus ne rabat rien, ce faisant nous permet de percevoir sa foi, l'irréductabilité de celle-ci par rapport au christianisme.</p>
<p>Nous nous trouvons surpris, déstabilisés, nous qui sans nous en rendre compte, imaginons facilement le Moyen-Âge comme univoquement chrétien.</p>
<p>Priscus nous rappelle la vivacité, l'originalité, la singularité de la foi  juive dont un autre témoin pourrait par exemple être <a href="https://fr.wikipedia.org/wiki/Rachi" title="https://fr.wikipedia.org/wiki/Rachi">Rachi de Troyes</a>.</p>
<p>Passionnant!</p>
</div>

<h2 class="green">rencontre de Chilpéric et Priscus</h2>

<p><span style="color: #3d8b3d;">chapître 5</span></p>
<p>Alors le <span style="color: #3d778a;">roi Chilperic</span>, qui séjournait encore dans la <a href="#note_villa" title="villa" id="villa" class="green">susdite villa</a>, ordonne de mettre en mouvement ses équipages et se dispose à venir à Paris.</p>
<p>Tandis que je m'approchais déjà de lui pour lui dire adieu arriva un <span style="color: #3d638a;">certain Juif nommé Priscus</span> qui était son familier parce qu'il achetait pour lui des marchandises.</p>
<p>Le <span style="color: #3d778a;">roi</span> lui ayant passé la main doucement dans la chevelure s'adressa à moi pour me dire:</p>
<p class="conversation"><span style="color: #3d778a;">«Viens, évêque de Dieu, et impose lui la main».</span></p>
<p>Comme cet <span style="color: #3d638a;">homme</span> refusait, le <span style="color: #3d778a;">roi</span> s'écria:</p>
<p class="conversation"><span style="color: #3d778a;">«Ô intelligence dure et race toujours incrédule, qui n'admet pas que le Fils de Dieu lui a été promis par la voix des prophètes, qui n'admet pas que les mystères de l'Église étaient déjà figurés dans ses propres sacrifices».</span></p>
<p>À ces mots le <span style="color: #3d638a;">Juif</span> s'écria:</p>
<p class="conversation"><span style="color: #3d638a;">«Dieu n'a pas contracté mariage, il n'est pas chargé de postérité et il ne souffre pas que personne partage son royaume, lui qui dit par la bouche de Moïse:</p>
<p class="conversation">“Voyez, voyez, je suis le Seigneur et en dehors de moi il n'y a pas de Dieu.</p>
<p class="conversation">C'est moi qui tuerai et qui ferai vivre;</p>
<p class="conversation">je frapperai et c'est moi qui guérirai”</span> <a href="#note_deuteronome" title="Deuteronome, XXXII, 39" id="deuteronome" class="green">(1)</a>.</p>
<p class="conversation">À cela le <span style="color: #3d778a;">roi</span> répliqua:</p>
<p class="conversation"><span style="color: #3d778a;">«Dieu a enfanté de son sein spirituel un fils éternel qui n'est ni plus jeune d'âge que lui, ni moindre en puissance.</p>
<p class="conversation">C'est de lui qu'il a dit lui-même:</p>
<p class="conversation">“Je t'ai enfanté de mon sein avant l'aurore” <a href="#note_engendre" title="Je t'ai enfanté de mon sein avant l'aurore" id="engendre" class="green">(2)</a>.</p>
<p class="conversation">Or ce fils qui est né avant les siècles, il l'a envoyé au cours de ces derniers siècles dans le monde à titre de guérisseur, comme le déclare ton prophète:</p>
<p class="conversation">“Il a envoyé son Verbe et il les a guéris” <a href="#note_verbe" title="Il a envoyé son Verbe et il les a guéris" id="verbe" class="green">(3)</a>.</p>
<p class="conversation">Quant à prétendre comme toi qu'il ne saurait engendrer lui-même;</p>
<p class="conversation">écoute ton prophète parler sous la dictée du Seigneur:</p>
<p class="conversation">“Pourquoi moi, qui fais enfanter les autres, ne pourrais-je également enfanter?” <a href="#note_enfanter" title="... ne pourrais-je également enfanter?" id="enfanter" class="green">(4)</a>.</p>
<p class="conversation">Ces paroles il les a dites à propos du peuple qui renaît en lui par la foi».</span></p>
<p>À cela le <span style="color: #3d638a;">Juif</span> répliqua:</p>
<p class="conversation"><span style="color: #3d638a;">«Comment Dieu a-t-il pu devenir un homme, naître d'une femme, être exposé à des coups et condamné à mort?».</span></p>
<p>Sur quoi le <span style="color: #3d778a;">roi</span> s'étant tu, <span style="color: #503d8a;">je</span> m'interposai au milieu d'eux et dis:</p>
<p class="conversation"><span style="color: #503d8a;">«Si Dieu, fils de Dieu, s'est fait homme la cause en a résidé non pas dans son besoin, mais dans le nôtre, car il n'avait pu racheter l'homme captif du péché et réduit par le diable à l'esclavage qu'en prenant la nature humaine.</p>
<p class="conversation">C'est en empruntant des témoignages non pas aux évangiles, ni à l'apôtre auxquels tu ne crois pas, mais à tes livres que je te transpercerai de la pointe de ta propre épée comme on raconte que fit David jadis quand il égorgea Goliath.</p>
<p class="conversation">Écoute donc ton prophète dire que Dieu devait devenir homme:</p>
<p class="conversation">“Il est à la fois Dieu et homme, et qui l'a connu?” <a href="#note_ecoute" title="Dieu devait devenir homme" id="ecoute" class="green">(5)</a>.</p>
<p class="conversation">Il dit ailleurs:</p>
<p class="conversation">“C'est lui qui est notre Dieu et l'on n'en reconnaîtra pas d'autre que lui;</p>
<p class="conversation">il a trouvé tout le chemin de la science et il l'a donnée à Jacob son serviteur et à Israël son bien-aimé.</p>
<p class="conversation">Après cela il a apparu sur la terre et il a conversé avec les hommes” <a href="#note_luinotredieu" title="Dieu devait devenir homme" id="luinotredieu" class="green">(6)</a>.</p>
<p class="conversation">Quant à sa naissance d'une vierge, écoute également ce que dit ton prophète:</p>
<p class="conversation">“Voici qu'une vierge concevra dans son sein et elle enfantera un fils et il sera appelé du nom d'Emmanuel, qui signifie: Dieu avec nous” <a href="#note_vierge" title="Quant à sa naissance d'une vierge" id="vierge" class="green">(7)</a>.</p>
<p class="conversation">Pour ce qui est des coups qu'il a dû subir, des clous dont il a été percé et des autres outrages encore qu'il a dû endurer et qui lui ont été infligés, c'est un autre prophète qui en a parlé:</p>
<p class="conversation">“Ils ont percé mes mains et mes pieds; ils ont partagé entre eux mes vêtements etc...” <a href="#note_perce" title="Ils ont percé mes mains et mes pieds; ils ont partagé entre eux mes vêtements" id="perce" class="green">(8)</a>.</p>
<p class="conversation">Et il dit plus loin:</p>
<p class="conversation">“Ils m'ont donné pour ma nourriture du fiel et dans ma soif ils m'ont abreuvé de vinaigre” <a href="#note_fiel" title="Ils m'ont donné pour ma nourriture du fiel et dans ma soif ils m'ont abreuvé de vinaigre" id="fiel" class="green">(9)</a>.</p>
<p class="conversation">Et c'est le même David qui a déclaré qu'il a ramené dans son royaume par le gibet même de la croix le monde déchu et soumis à la domination du diable:</p>
<p class="conversation">“Le Seigneur, dit-il, a régné par le bois.</p>
<p class="conversation">Non pas qu'il ne régnât pas auparavant chez le Père, mais il a reçu un nouveau royaume pour régner sur le peuple qu'il avait délivré de l'esclavage du diable” <a href="#note_parlebois" title="Le Seigneur a régné par le bois" id="parlebois" class="green">(10)</a>».</span></p>
<p>À cela le <span style="color: #3d638a;">Juif</span> répliqua:</p>
<p class="conversation"><span style="color: #3d638a;">«Quel besoin Dieu avait-il de souffrir toutes ces choses?».</span></p>
<p><span style="color: #503d8a;">Je</span> lui répondis:</p>
<p class="conversation"><span style="color: #503d8a;">«Je t'ai déjà dit que Dieu a créé l'homme innocent, mais que celui-ci, circonvenu par la ruse du serpent, a désobéi au précepte;</p>
<p class="conversation">et c'est pourquoi chassé de la demeure du paradis, il a été livré aux peines de ce monde;</p>
<p class="conversation">mais par la mort du Christ, fils unique de Dieu, il a été réconcilié avec Dieu le Père».</span></p>
<p>Le <span style="color: #3d638a;">Juif</span> dit:</p>
<p class="conversation"><span style="color: #3d638a;">«Dieu ne pouvait-il envoyer des prophètes ou des apôtres pour le ramener dans la voie du salut sans s'humilier lui-même en s'incarnant».</span></p>
<p>À cela <span style="color: #503d8a;">je</span> répondis:</p>
<p class="conversation"><span style="color: #503d8a;">«Depuis le commencement le genre humain a toujours péché sans que jamais l'ait effrayé ni l'inondation du déluge, ni l'incendie de Sodome, ni les plaies d'Égypte, ni le partage miraculeux des eaux de la mer et du Jourdain, il a toujours résisté à la loi de Dieu, et non seulement il n'a pas cru, mais encore il a tué ceux-là même qui prêchaient la pénitence.</p>
<p class="conversation">Aussi s'il n'était pas descendu lui-même pour racheter, aucun autre n'eût pu le faire.</p>
<p class="conversation">Nés de nouveau grâce à sa nativité, lavés par le baptême, guéris par sa blessure, redressés par sa résurrection, nous avons été glorifiés par son ascension.</p>
<p class="conversation">Du reste c'est ton prophète qui a dit qu'il viendrait pour remédier à nos maladies:</p>
<p class="conversation">“Nous avons été guéris par sa meurtrissure” <a href="#note_meurtrissure" title="Nous avons été guéris par sa meurtrissure" id="meurtrissure" class="green">(11)</a>.</p>
<p class="conversation">Et ailleurs il dit:</p>
<p class="conversation">“Comme une brebis il a été mené à la tuerie et de
même qu'un agneau reste muet devant celui qui le tond, il n'a pas ouvert la bouche” <a href="#note_commeunebrebis" title="Comme une brebis il a été mené à la tuerie" id="commeunebrebis" class="green">(12)</a>.</p>
<p class="conversation">C'est dans l'humiliation que sa condamnation a été arrachée.
Qui a raconté son origine?</p>
<p class="conversation">“Seigneur des armées est son nom” <a href="#note_armees" title="Seigneur des armées est son nom" id="armees" class="green">(13)</a>.</p>
<p class="conversation">C'est de lui que ce Jacob de qui tu te vantes de descendre a dit en bénissant son fils Judas comme s'il parlait au Christ lui-même, fils de Dieu:</p>
<p class="conversation">“Les fils de ton père t'adoreront, lionceau Juda.</p>
<p class="conversation">C'est d'un germe, mon fils, que tu es sorti.</p>
<p class="conversation">Tu t'es couché et tu as dormi comme un lion, comme un lionceau.</p>
<p class="conversation">Qui l'a réveillé?</p>
<p class="conversation">Ses yeux sont plus beaux que le vin et ses dents plus blanches que le lait” <a href="#note_lionceau" title="Les fils de ton père t'adoreront, lionceau Juda" id="lionceau" class="green">(14)</a>.</p>
<p class="conversation">Qui le réveillera, dit-il, et bien que (le Christ) lui-même ait dit:</p>
<p class="conversation">“J'ai le pouvoir de quitter la vie et j'ai le pouvoir de la reprendre” <a href="#note_reprendre" title="J'ai le pouvoir de quitter la vie..." id="reprendre" class="green">(15)</a>,</p>
<p class="conversation">cependant Paul a déclaré:</p>
<p class="conversation">“Celui qui ne croira pas que Dieu l'a ressuscité des morts ne pourra être sauvé” <a href="#note_ressuciter" title="... que Dieu l'a ressuscité des morts ne pourra être sauvé" id="ressuciter" class="green">(16)</a>.</span></p>
<p>Tandis que nous disions ces choses et d'autres encore, le <span style="color: #3d638a;">malheureux</span> ne fut point du tout touché par la foi.</p>
<p>Alors devant son silence le <span style="color: #3d778a;">roi</span> qui voyait qu'<span style="color: #3d638a;">il</span> n'avait pas été touché par ces sermons, se tourne vers <span style="color: #503d8a;">moi</span> et demande à prendre congé après avoir reçu une bénédiction.</p>
<p><span style="color: #3d778a;">Il</span> s'exprima ainsi:</p>
<p class="conversation"><span style="color: #3d778a;">«Je te dirai, ô évêque, ce que Jacob a dit à l'ange qui lui parlait:</p>
<p class="conversation">“Je ne te laisserai pas partir si tu ne me bénis pas”  <a href="#note_benir" title="J'ai le pouvoir de quitter la vie..." id="benir" class="green">(17)</a>.</p>
<p>Et en disant ces mots, il se fait présenter de l'eau pour les mains.</span></p>
<p>Les ablutions achevées, la prière faite, on reçut du pain, puis ayant rendu grâce à Dieu, <span style="color: #503d8a;">j</span>'en pris moi-même et en offris au <span style="color: #3d778a;">roi</span>, et après avoir bu du vin pur, nous nous séparâmes en nous disant adieu.</p>
<p>Ensuite le <span style="color: #3d778a;">roi</span>, étant monté à cheval, rentra à Paris avec sa femme et sa fille ainsi que toute sa suite.</p>

<aside>

<h3 class="green">Notes</h3>

<h4 id="note_villa" class="green note">villa</h4>
<div class="notices green">
  <p>Dans le texte en latin “Novigentum” probablement sur le site de l'actuelle ville de Nogent-sur-Marne.</p>
</div>
<footer>
  <p class="puce">retour au texte <a href="#villa" title="villa">“séjournait encore dans la susdite villa” ↩</a></p>
</footer>

<h4 id="note_deuteronome" class="green note">voyez, je suis le Seigneur</h4>
<div class="notices green">
  <p>Deuteronome, XXXII, 39: “Voyez-le, maintenant, c’est moi, et moi seul; pas d’autre dieu que moi; c’est moi qui fais mourir et vivre, si j’ai frappé, c’est moi qui guéris, et personne ne délivre de ma main”.</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#engendre" title="Je t'ai enfanté de mon sein avant l'aurore">(1) ↩</p>
</footer>

<p><a href="#deuteronome" title="Deuteronome, XXXII, 39">(1) ↩</a></p>

<h4 id="note_engendre" class="green note">je t'ai enfanté de mon sein avant l'aurore</h4>
<div class="notices green">
  <p>Cette citation est un emprunt fait à la traduction par la Vulgate du Psaume CIX, 3 qui n’existe pas dans le texte original hébreu.</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#engendre" title="Je t'ai enfanté de mon sein avant l'aurore">(2) ↩</a></p>
</footer>

<h4 id="note_verbe" class="green note">Il a envoyé son Verbe et il les a guéris</h4>
<div class="notices green">
  <p>Livre des Psaumes, <abbr title="cinquante-sept">CVII</abbr>, 20.</p>
  <p>“il envoie sa parole, il les guérit, il arrache leur vie à la fosse”.</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#verbe" title="Il a envoyé son Verbe et il les a guéris">(3) ↩</a></p>
</footer>

<h4 id="note_enfanter" class="green note">pourquoi moi, qui fais enfanter les autres, ne pourrais-je également enfanter?</h4>
<div class="notices green">
  <p>L'interprétation du texte biblique par Grégoire de Tours est contestable.</p>
  <p>Isaïe, <abbr title="soixante-quatre">LXVI</abbr>, 9: “Est-ce que moi, j’ouvrirais un passage à la vie, et je ne ferais pas enfanter? – dit le Seigneur. Moi qui fais enfanter, je fermerais le passage de la vie? – dit ton Dieu.”.</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#enfanter" title="... ne pourrais-je également enfanter?">(4) ↩</a></p>
</footer>

<h4 id="note_ecoute" class="green note">dieu devait devenir homme</h4>
<div class="notices green">
  <p>R. Buchner (“Zehn Bacher Geschichten”, <abbr title="deux">II</abbr>, p. 10, note 1, rapproche cette allusion d'un verset de Jérémie (<abbr title="dix-sept">XVII</abbr>, 9) que Grégoire aurait emprunté à un texte autre que celui de la Vulgate.</p>
  <p>verset de Jérémie <abbr title="dix-sept">XVII</abbr>, 9: “Rien n’est plus faux que le cœur de l’homme, il est incurable. Qui peut le connaître?”.</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#ecoute" title="Dieu devait devenir homme">(5) ↩</a></p>
</footer>

<h4 id="note_luinotredieu" class="green note">c'est lui qui est notre Dieu</h4>
<div class="notices green">
  <p>Baruch, <abbr title="trois">III</abbr>, 36-38:</p>
  <p>“36 C’est lui qui est notre Dieu: aucun autre ne lui est comparable.</p>
  <p>37 Il a découvert les chemins du savoir, et il les a confiés à Jacob, son serviteur, à Israël, son bien-aimé.</p>
  <p>38 Ainsi, la Sagesse est apparue sur la terre, elle a vécu parmi les hommes”.</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#luinotredieu" title="Dieu devait devenir homme">(6) ↩</a></p>
</footer>

<h4 id="note_vierge" class="green note">quant à sa naissance d'une vierge</h4>
<div class="notices green">
  <p>Isaie, <abbr title="sept">VII</abbr>, 14. Ce verset a été reproduit par Saint Matthieu (<abbr title="un">I</abbr>, 23-24), qui complète le texte du prophète par les mots:</p>
  <p class="conversation">“C’est-à-dire Dieu avec nous”.</p>
</div>
<footer>
<p class="puce">retour au texte: <a href="#vierge" title="Quant à sa naissance d'une vierge">(7) ↩</a></p>
</footer>

<h4 id="note_perce" class="green note">ils ont percé mes mains et mes pieds; ils ont partagé entre eux mes vêtements</h4>
<div class="notices green">
  <p>Psaumes, <abbr title="vingt et un">XXI</abbr>, vers 17 (seconde partie), 19:</p>
  <ol class="doc">
    <li value="17">Ils me percent les mains et les pieds;</li>
    <li value="19">Ils partagent entre eux mes habits et tirent au sort mon vêtement.”</li>
  </ol>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#perce" title="Ils ont percé mes mains et mes pieds; ils ont partagé entre eux mes vêtements">(8) ↩</a></p>
</footer>

<h4 id="note_fiel" class="green note">ils m'ont donné pour ma nourriture du fiel et dans ma soif ils m'ont abreuvé de vinaigre</h4>
<div class="notices green">
  <p>Psaumes, <abbr title="soixante-huit">LXVIII</abbr>, vers 22:</p>
   <p id="22" class="single-li">À mon pain, ils ont mêlé du poison; quand j'avais soif, ils m'ont donné du vinaigre.</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#fiel" title="Ils m'ont donné pour ma nourriture du fiel et dans ma soif ils m'ont abreuvé de vinaigre">(9) ↩</a></p>
</footer>

<h4 id="note_parlebois" class="green note">le Seigneur a régné par le bois</h4>
<div class="notices green">
  <p>Selon Buchner (“Zehn Bacher Geschichten”, <abbr title="deux">II</abbr>, p. 11, n. 7), ces mots seraient une interpolation chrétienne qui n'aurait pas été acceptée par les auteurs de la Vulgate.</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#parlebois" title="Le Seigneur a régné par le bois">(10) ↩</a></p>
</footer>

<h4 id="note_meurtrissure" class="green note">nous avons été guéris par sa meurtrissure</h4>
<div class="notices green">
  <p>Isaïe, <abbr title="cinquante-trois">LIII</abbr>, vers 5:</p>
  <ol class="doc">
    <li value="5">“Or, c’est à cause de nos révoltes qu’il a été transpercé, à cause de nos fautes qu’il a été broyé. Le châtiment qui nous donne la paix a pesé sur lui: par ses blessures, nous sommes guéris”.</li>
  </ol>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#meurtrissure" title="Nous avons été guéris par sa meurtrissure">(11) ↩</a></p>
</footer>


<h4 id="note_commeunebrebis" class="green note">comme une brebis il a été mené à la tuerie</h4>
<div class="notices green">
  <p>Isaïe, <abbr title="cinquante-trois">LIII</abbr>, 7: “Maltraité, il s’humilie, il n’ouvre pas la bouche: comme un agneau conduit à l’abattoir, comme une brebis muette devant les tondeurs, il n’ouvre pas la bouche”.
</div>
<footer>
   <p class="puce">retour au texte: <a href="#commeunebrebis" title="Comme une brebis il a été mené à la tuerie">(12) ↩</a></p>
</footer>

<h4 id="note_armees" class="green note">seigneur des armées est son nom</h4>
<div class="notices green">
  <p>Isaïe, <abbr title="cinquante-quatre">LIV</abbr>, 5: “Car ton époux, c’est Celui qui t’a faite, son nom est «Le Seigneur de l’univers». Ton rédempteur, c’est le Saint d’Israël, il s’appelle «Dieu de toute la terre»”.</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#armees" title="Seigneur des armées est son nom">(13) ↩</a></p>
</footer>

<h4 id="note_lionceau" class="green note">les fils de ton père t'adoreront, lionceau Juda</h4>
<div class="notices green">
  <p>Grégoire de Tours s'inspire dans sa réplique de la Génèse sans reproduire littéralement le texte.</p>
  <p>Génèse <abbr title="quarante-quatre">XLIX</abbr>, 8-12:</p>
  <p>“08 Juda, à toi, tes frères rendront hommage, ta main fera plier la nuque de tes ennemis et les fils de ton père se prosterneront devant toi.</p>
  <p>09 Juda est un jeune lion. Tu remontes du carnage, mon fils. Il s’est accroupi, il s’est couché comme un lion ; ce fauve, qui le fera lever?</p>
  <p>10 Le sceptre royal n’échappera pas à Juda, ni le bâton de commandement, à sa descendance, jusqu’à ce que vienne celui à qui le pouvoir appartient, à qui les peuples obéiront”.</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#lionceau" title="Les fils de ton père t'adoreront, lionceau Juda">(14) ↩</a></p>
</footer>


<h4 id="note_reprendre" class="green note">j'ai le pouvoir de quitter la vie et j'ai le pouvoir de la reprendre</h4>
<div class="notices green">
  <p>Cette version diffère quelque peu du texte actuel de ce passage de l'évangile de Jean.</p>
  <p>Jean, <abbr title="dix">X</abbr>, 18: “Nul ne peut me l’enlever: je la donne de moi-même. J’ai le pouvoir de la donner, j’ai aussi le pouvoir de la recevoir de nouveau: voilà le commandement que j’ai reçu de mon Père”.</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#reprendre" title="J'ai le pouvoir de quitter la vie...">(15) ↩</a></p>
</footer>

<h4 id="note_ressuciter" class="green note">celui qui ne croira pas que Dieu l'a ressuscité des morts ne pourra être sauvé</h4>
<div class="notices green">
  <p>Épître aux Romains, <abbr title="dix">X</abbr>, 9. Le texte de la Vulgate est un peu différent:</p>
  <p>“En effet, si de ta bouche, tu affirmes que Jésus est Seigneur, si, dans ton cœur, tu crois que Dieu l’a ressuscité d’entre les morts, alors tu seras sauvé”.</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#ressuciter" title="... que Dieu l'a ressuscité des morts ne pourra être sauvé">(16) ↩</a></p>
</footer>

<h4 id="note_benir" class="green note">je ne te laisserai pas partir si tu ne me bénis pas</h4>
<div class="notices green">
  <p>Génèse, <abbr title="trente-deux">XXXII</abbr>, 25-27: “25 Jacob resta seul. Or, quelqu’un lutta avec lui jusqu’au lever de l’aurore.</p>
  <p>26 L’homme, voyant qu’il ne pouvait rien contre lui, le frappa au creux de la hanche, et la hanche de Jacob se démit pendant ce combat.</p>
  <p>27 L’homme dit: «Lâche-moi, car l’aurore s’est levée.» Jacob répondit: «Je ne te lâcherai que si tu me bénis».”</p>
</div>
<footer>
  <p class="puce">retour au texte: <a href="#benir" title="J'ai le pouvoir de quitter la vie">(17) ↩</a></p>
</footer>

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