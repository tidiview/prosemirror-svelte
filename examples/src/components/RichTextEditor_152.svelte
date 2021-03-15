<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<p><span>11</span><sup> </sup><i class="fa fa-calendar-o fa-2x"></i></p>
<p>Fév.</p>
<p><span>2020</span></p>
<div class="notices green">
<p>Cet extrait du Chapître 5 du Livre VI de l' “Histoire des Francs” de Grégoire de Tours relate la rencontre du roi Chilpéric et d'un de ses sujets de religion juive nommé Priscus telle qu'en a été témoin l'auteur. </p>
</div>

<div class="notices green">
<p>Le récit se présente comme une sorte de combat spirituel sans concession malgré la très grande différence des conditions des protagonistes.<br>
Priscus ne rabat rien, ce faisant nous permet de percevoir sa foi, l'irréductabilité de celle-ci par rapport au christianisme.<br>
Nous nous trouvons surpris, déstabilisés, nous qui sans nous en rendre compte, imaginons facilement le Moyen-Âge comme univoquement chrétien.<br>
Priscus nous rappelle la vivacité, l'originalité, la singularité de la foi  juive dont un autre témoin pourrait par exemple être Rachi de Troyes.<br>
Passionnant!</p>
</div>
<h2 class="green">rencontre de Chilpéric et Priscus</h2>
<p><span style="color: #3d8b3d;">chapître 5</span></p>
<p>Alors le <span style="color: #3d778a;">roi Chilperic</span>, qui séjournait encore dans la <a href="#note_villa" title="villa" id="villa" class="green">susdite villa</a>, ordonne de mettre en mouvement ses équipages et se dispose à venir à Paris.<br>
Tandis que je m'approchais déjà de lui pour lui dire adieu arriva un <span style="color: #3d638a;">certain Juif nommé Priscus</span> qui était son familier parce qu'il achetait pour lui des marchandises.</p>
<p>Le <span style="color: #3d778a;">roi</span> lui ayant passé la main doucement dans la chevelure s'adressa à moi pour me dire:<br>
<span style="color: #3d778a;">«Viens, évêque de Dieu, et impose lui la main».</span></p>
<p>Comme cet <span style="color: #3d638a;">homme</span> refusait, le <span style="color: #3d778a;">roi</span> s'écria:<br>
<span style="color: #3d778a;">«Ô intelligence dure et race toujours incrédule, qui n'admet pas que le Fils de Dieu lui a été promis par la voix des prophètes, qui n'admet pas que les mystères de l'Église étaient déjà figurés dans ses propres sacrifices».</span></p>
<p>À ces mots le <span style="color: #3d638a;">Juif</span> s'écria:<br>
<span style="color: #3d638a;">«Dieu n'a pas contracté mariage, il n'est pas chargé de postérité et il ne souffre pas que personne partage son royaume, lui qui dit par la bouche de Moïse:<br>
“Voyez, voyez, je suis le Seigneur et en dehors de moi il n'y a pas de Dieu.<br>
C'est moi qui tuerai et qui ferai vivre;<br>
je frapperai et c'est moi qui guérirai”</span> <a href="#note_deuteronome" title="Deuteronome, XXXII, 39" id="deuteronome" class="green"><sup>(1)</sup></a>.</p>
<p>À cela le <span style="color: #3d778a;">roi</span> répliqua:<br>
<span style="color: #3d778a;">«Dieu a enfanté de son sein spirituel un fils éternel qui n'est ni plus jeune d'âge que lui, ni moindre en puissance.<br>
C'est de lui qu'il a dit lui-même:<br>
“Je t'ai enfanté de mon sein avant l'aurore” <a href="#note_engendre" title="Je t'ai enfanté de mon sein avant l'aurore" id="engendre" class="green"><sup>(2)</sup></a>.<br>
Or ce fils qui est né avant les siècles, il l'a envoyé au cours de ces derniers siècles dans le monde à titre de guérisseur, comme le déclare ton prophète:<br>
“Il a envoyé son Verbe et il les a guéris” <a href="#note_verbe" title="Il a envoyé son Verbe et il les a guéris" id="verbe" class="green"><sup>(3)</sup></a>.<br>
Quant à prétendre comme toi qu'il ne saurait engendrer lui-même;<br>
écoute ton prophète parler sous la dictée du Seigneur:<br>
“Pourquoi moi, qui fais enfanter les autres, ne pourrais-je également enfanter?” <a href="#note_enfanter" title="... ne pourrais-je également enfanter?" id="enfanter" class="green"><sup>(4)</sup></a>.<br>
Ces paroles il les a dites à propos du peuple qui renaît en lui par la foi».</span></p>
<p>À cela le <span style="color: #3d638a;">Juif</span> répliqua:<br>
<span style="color: #3d638a;">«Comment Dieu a-t-il pu devenir un homme, naître d'une femme, être exposé à des coups et condamné à mort?».</span></p>
<p>Sur quoi le <span style="color: #3d778a;">roi</span> s'étant tu, <span style="color: #503d8a;">je</span> m'interposai au milieu d'eux et dis:<br>
<span style="color: #503d8a;">«Si Dieu, fils de Dieu, s'est fait homme la cause en a résidé non pas dans son besoin, mais dans le nôtre, car il n'avait pu racheter l'homme captif du péché et réduit par le diable à l'esclavage qu'en prenant la nature humaine.<br>
C'est en empruntant des témoignages non pas aux évangiles, ni à l'apôtre auxquels tu ne crois pas, mais à tes livres que je te transpercerai de la pointe de ta propre épée comme on raconte que fit David jadis quand il égorgea Goliath.<br>
Écoute donc ton prophète dire que Dieu devait devenir homme:<br>
“Il est à la fois Dieu et homme, et qui l'a connu?” <a href="#note_ecoute" title="Dieu devait devenir homme" id="ecoute" class="green"><sup>(5)</sup></a>.<br>
Il dit ailleurs:<br>
“C'est lui qui est notre Dieu et l'on n'en reconnaîtra pas d'autre que lui;<br>
il a trouvé tout le chemin de la science et il l'a donnée à Jacob son serviteur et à Israël son bien-aimé.<br>
Après cela il a apparu sur la terre et il a conversé avec les hommes” <a href="#note_luinotredieu" title="Dieu devait devenir homme" id="luinotredieu" class="green"><sup>(6)</sup></a>.<br>
Quant à sa naissance d'une vierge, écoute également ce que dit ton prophète:<br>
“Voici qu'une vierge concevra dans son sein et elle enfantera un fils et il sera appelé du nom d'Emmanuel, qui signifie: Dieu avec nous” <a href="#note_vierge" title="Quant à sa naissance d'une vierge" id="vierge" class="green"><sup>(7)</sup></a>.<br>
Pour ce qui est des coups qu'il a dû subir, des clous dont il a été percé et des autres outrages encore qu'il a dû endurer et qui lui ont été infligés, c'est un autre prophète qui en a parlé:<br>
“Ils ont percé mes mains et mes pieds; ils ont partagé entre eux mes vêtements etc...” <a href="#note_perce" title="Ils ont percé mes mains et mes pieds; ils ont partagé entre eux mes vêtements" id="perce" class="green"><sup>(8)</sup></a>.<br>
Et il dit plus loin:<br>
“Ils m'ont donné pour ma nourriture du fiel et dans ma soif ils m'ont abreuvé de vinaigre” <a href="#note_fiel" title="Ils m'ont donné pour ma nourriture du fiel et dans ma soif ils m'ont abreuvé de vinaigre" id="fiel" class="green"><sup>(9)</sup></a>.<br>
Et c'est le même David qui a déclaré qu'il a ramené dans son royaume par le gibet même de la croix le monde déchu et soumis à la domination du diable:<br>
“Le Seigneur, dit-il, a régné par le bois.<br>
Non pas qu'il ne régnât pas auparavant chez le Père, mais il a reçu un nouveau royaume pour régner sur le peuple qu'il avait délivré de l'esclavage du diable” <a href="#note_parlebois" title="Le Seigneur a régné par le bois" id="parlebois" class="green"><sup>(10)</sup></a>».</span></p>
<p>À cela le <span style="color: #3d638a;">Juif</span> répliqua:<br>
<span style="color: #3d638a;">«Quel besoin Dieu avait-il de souffrir toutes ces choses?».</span></p>
<p><span style="color: #503d8a;">Je</span> lui répondis:<br>
<span style="color: #503d8a;">«Je t'ai déjà dit que Dieu a créé l'homme innocent, mais que celui-ci, circonvenu par la ruse du serpent, a désobéi au précepte;<br>
et c'est pourquoi chassé de la demeure du paradis, il a été livré aux peines de ce monde;<br>
mais par la mort du Christ, fils unique de Dieu, il a été réconcilié avec Dieu le Père».</span></p>
<p>Le <span style="color: #3d638a;">Juif</span> dit:<br>
<span style="color: #3d638a;">«Dieu ne pouvait-il envoyer des prophètes ou des apôtres pour le ramener dans la voie du salut sans s'humilier lui-même en s'incarnant».</span></p>
<p>À cela <span style="color: #503d8a;">je</span> répondis:<br>
<span style="color: #503d8a;">«Depuis le commencement le genre humain a toujours péché sans que jamais l'ait effrayé ni l'inondation du déluge, ni l'incendie de Sodome, ni les plaies d'Égypte, ni le partage miraculeux des eaux de la mer et du Jourdain, il a toujours résisté à la loi de Dieu, et non seulement il n'a pas cru, mais encore il a tué ceux-là même qui prêchaient la pénitence.<br>
Aussi s'il n'était pas descendu lui-même pour racheter, aucun autre n'eût pu le faire.<br>
Nés de nouveau grâce à sa nativité, lavés par le baptême, guéris par sa blessure, redressés par sa résurrection, nous avons été glorifiés par son ascension.<br>
Du reste c'est ton prophète qui a dit qu'il viendrait pour remédier à nos maladies:<br>
“Nous avons été guéris par sa meurtrissure” <a href="#note_meurtrissure" title="Nous avons été guéris par sa meurtrissure" id="meurtrissure" class="green"><sup>(11)</sup></a>.<br>
Et ailleurs il dit:<br>
“Comme une brebis il a été mené à la tuerie et de
même qu'un agneau reste muet devant celui qui le tond, il n'a pas ouvert la bouche” <a href="#note_commeunebrebis" title="Comme une brebis il a été mené à la tuerie" id="commeunebrebis" class="green"><sup>(12)</sup></a>.<br>
C'est dans l'humiliation que sa condamnation a été arrachée.
Qui a raconté son origine?<br>
“Seigneur des armées est son nom” <a href="#note_armees" title="Seigneur des armées est son nom" id="armees" class="green"><sup>(13)</sup></a>.<br>
C'est de lui que ce Jacob de qui tu te vantes de descendre a dit en bénissant son fils Judas comme s'il parlait au Christ lui-même, fils de Dieu:<br>
“Les fils de ton père t'adoreront, lionceau Juda.<br>
C'est d'un germe, mon fils, que tu es sorti.<br>
Tu t'es couché et tu as dormi comme un lion, comme un lionceau.<br>
Qui l'a réveillé?<br>
Ses yeux sont plus beaux que le vin et ses dents plus blanches que le lait” <a href="#note_lionceau" title="Les fils de ton père t'adoreront, lionceau Juda" id="lionceau" class="green"><sup>(14)</sup></a>.<br>
Qui le réveillera, dit-il, et bien que (le Christ) lui-même ait dit:<br>
“J'ai le pouvoir de quitter la vie et j'ai le pouvoir de la reprendre” <a href="#note_reprendre" title="J'ai le pouvoir de quitter la vie..." id="reprendre" class="green"><sup>(15)</sup></a>,<br>
cependant Paul a déclaré:<br>
“Celui qui ne croira pas que Dieu l'a ressuscité des morts ne pourra être sauvé” <a href="#note_ressuciter" title="... que Dieu l'a ressuscité des morts ne pourra être sauvé" id="ressuciter" class="green"><sup>(16)</sup></a>.</span></p>
<p>Tandis que nous disions ces choses et d'autres encore, le <span style="color: #3d638a;">malheureux</span> ne fut point du tout touché par la foi.</p>
<p>Alors devant son silence le <span style="color: #3d778a;">roi</span> qui voyait qu'<span style="color: #3d638a;">il</span> n'avait pas été touché par ces sermons, se tourne vers <span style="color: #503d8a;">moi</span> et demande à prendre congé après avoir reçu une bénédiction.</p>
<p><span style="color: #3d778a;">Il</span> s'exprima ainsi:<br>
<span style="color: #3d778a;">«Je te dirai, ô évêque, ce que Jacob a dit à l'ange qui lui parlait:<br>
“Je ne te laisserai pas partir si tu ne me bénis pas”  <a href="#note_benir" title="J'ai le pouvoir de quitter la vie..." id="benir" class="green"><sup>(17)</sup></a>.<br>
Et en disant ces mots, il se fait présenter de l'eau pour les mains.</span></p>
<p>Les ablutions achevées, la prière faite, on reçut du pain, puis ayant rendu grâce à Dieu, <span style="color: #503d8a;">j</span>'en pris moi-même et en offris au <span style="color: #3d778a;">roi</span>, et après avoir bu du vin pur, nous nous séparâmes en nous disant adieu.</p>
<p>Ensuite le <span style="color: #3d778a;">roi</span>, étant monté à cheval, rentra à Paris avec sa femme et sa fille ainsi que toute sa suite.</p>
<h3 class="green">Notes</h3>
<h4 id="note_villa" class="green">villa</h4>
<div class="notices green">
<p>Dans le texte en latin “Novigentum” probablement sur le site de l'actuelle ville de Nogent-sur-Marne.<br>
Retour au texte <a href="#villa" title="villa">“séjournait encore dans la susdite villa” ↑</a></p>
</div>
<h4 id="note_deuteronome" class="green">voyez, je suis le Seigneur</h4>
<div class="notices green">
<p>Deuteronome, XXXII, 39: “Voyez-le, maintenant, c’est moi, et moi seul; pas d’autre dieu que moi; c’est moi qui fais mourir et vivre, si j’ai frappé, c’est moi qui guéris, et personne ne délivre de ma main”.
<a href="#deuteronome" title="Deuteronome, XXXII, 39">(1) ↑</a></p>
</div>
<h4 id="note_engendre" class="green">je t'ai enfanté de mon sein avant l'aurore</h4>
<div class="notices green">
<p>Cette citation est un emprunt fait à la traduction par la Vulgate du Psaume CIX, 3 qui n’existe pas dans le texte original hébreu.
<a href="#engendre" title="Je t'ai enfanté de mon sein avant l'aurore">(2) ↑</a></p>
</div>
<h4 id="note_verbe" class="green">Il a envoyé son Verbe et il les a guéris</h4>
<div class="notices green">
<p>Livre des Psaumes, CVII, 20.<br>
“il envoie sa parole, il les guérit, il arrache leur vie à la fosse”.
<a href="#verbe" title="Il a envoyé son Verbe et il les a guéris">(3) ↑</a></p>
</div>
<h4 id="note_enfanter" class="green">pourquoi moi, qui fais enfanter les autres, ne pourrais-je également enfanter?</h4>
<div class="notices green">
<p>L'interprétation du texte biblique par Grégoire de Tours est contestable.
Isaïe, LXVI, 9: “Est-ce que moi, j’ouvrirais un passage à la vie, et je ne ferais pas enfanter? – dit le Seigneur. Moi qui fais enfanter, je fermerais le passage de la vie? – dit ton Dieu.”.
<a href="#enfanter" title="... ne pourrais-je également enfanter?">(4) ↑</a></p>
</div>
<h4 id="note_ecoute" class="green">dieu devait devenir homme</h4>
<div class="notices green">
<p>R. Buchner (“Zehn Bacher Geschichten”, II, p. 10, note 1, rapproche cette allusion d'un verset de Jérémie (XVII, 9) que Grégoire aurait emprunté à un texte autre que celui de la Vulgate.
verset de Jérémie XVII, 9: “Rien n’est plus faux que le cœur de l’homme, il est incurable. Qui peut le connaître?”.
<a href="#ecoute" title="Dieu devait devenir homme">(5) ↑</a></p>
</div>
<h4 id="note_luinotredieu" class="green">c'est lui qui est notre Dieu</h4>
<div class="notices green">
<p>Baruch, III, 36-38:<br>
“36 C’est lui qui est notre Dieu: aucun autre ne lui est comparable.<br>
37 Il a découvert les chemins du savoir, et il les a confiés à Jacob, son serviteur, à Israël, son bien-aimé.<br>
38 Ainsi, la Sagesse est apparue sur la terre, elle a vécu parmi les hommes”.
<a href="#luinotredieu" title="Dieu devait devenir homme">(6) ↑</a></p>
</div>
<h4 id="note_vierge" class="green">quant à sa naissance d'une vierge</h4>
<div class="notices green">
<p>Isaie, VII, 14. Ce verset a été reproduit par Saint Matthieu (I, 23-24), qui complète le texte du prophète par les mots: “C’est-à-dire Dieu avec nous”.
<a href="#vierge" title="Quant à sa naissance d'une vierge">(7) ↑</a></p>
</div>
<h4 id="note_perce" class="green">ils ont percé mes mains et mes pieds; ils ont partagé entre eux mes vêtements</h4>
<div class="notices green">
<p>Psaumes, XXI, 17, 19:<br>
17, 2<sup>nde</sup> partie: “Ils me percent les mains et les pieds;”.
19: “Ils partagent entre eux mes habits et tirent au sort mon vêtement.”.
<a href="#perce" title="Ils ont percé mes mains et mes pieds; ils ont partagé entre eux mes vêtements">(8) ↑</a></p>
</div>
<h4 id="note_fiel" class="green">ils m'ont donné pour ma nourriture du fiel et dans ma soif ils m'ont abreuvé de vinaigre</h4>
<div class="notices green">
<p>Psaumes, LXVIII, 22: “À mon pain, ils ont mêlé du poison; quand j'avais soif, ils m'ont donné du vinaigre”.
<a href="#fiel" title="Ils m'ont donné pour ma nourriture du fiel et dans ma soif ils m'ont abreuvé de vinaigre">(9) ↑</a></p>
</div>
<h4 id="note_parlebois" class="green">le Seigneur a régné par le bois</h4>
<div class="notices green">
<p>Selon Buchner (“Zehn Bacher Geschichten”, II, p. 11, n. 7), ces mots seraient une interpolation chrétienne qui n'aurait pas été acceptée par les auteurs de la Vulgate.
<a href="#parlebois" title="Le Seigneur a régné par le bois">(10) ↑</a></p>
</div>
<h4 id="note_meurtrissure" class="green">nous avons été guéris par sa meurtrissure</h4>
<div class="notices green">
<p>Isaïe, LIII, 5: “Or, c’est à cause de nos révoltes qu’il a été transpercé, à cause de nos fautes qu’il a été broyé. Le châtiment qui nous donne la paix a pesé sur lui: par ses blessures, nous sommes guéris”.
<a href="#meurtrissure" title="Nous avons été guéris par sa meurtrissure">(11) ↑</a></p>
</div>
<h4 id="note_commeunebrebis" class="green">comme une brebis il a été mené à la tuerie</h4>
<div class="notices green">
<p>Isaïe, LIII, 7: “Maltraité, il s’humilie, il n’ouvre pas la bouche: comme un agneau conduit à l’abattoir, comme une brebis muette devant les tondeurs, il n’ouvre pas la bouche”.
<a href="#commeunebrebis" title="Comme une brebis il a été mené à la tuerie">(12) ↑</a></p>
</div>
<h4 id="note_armees" class="green">seigneur des armées est son nom</h4>
<div class="notices green">
<p>Isaïe, LIV, 5: “Car ton époux, c’est Celui qui t’a faite, son nom est «Le Seigneur de l’univers». Ton rédempteur, c’est le Saint d’Israël, il s’appelle «Dieu de toute la terre»”.
<a href="#armees" title="Seigneur des armées est son nom">(13) ↑</a></p>
</div>
<h4 id="note_lionceau" class="green">les fils de ton père t'adoreront, lionceau Juda</h4>
<div class="notices green">
<p>Grégoire de Tours s'inspire dans sa réplique de la Génèse sans reproduire littéralement le texte.</p>
</div>
<div class="notices green">
<p>Génèse XLIX, 8-12: “08 Juda, à toi, tes frères rendront hommage, ta main fera plier la nuque de tes ennemis et les fils de ton père se prosterneront devant toi.<br>
09 Juda est un jeune lion. Tu remontes du carnage, mon fils. Il s’est accroupi, il s’est couché comme un lion ; ce fauve, qui le fera lever?<br>
10 Le sceptre royal n’échappera pas à Juda, ni le bâton de commandement, à sa descendance, jusqu’à ce que vienne celui à qui le pouvoir appartient, à qui les peuples obéiront”.
<a href="#lionceau" title="Les fils de ton père t'adoreront, lionceau Juda">(14) ↑</a></p>
</div>
<h4 id="note_reprendre" class="green">j'ai le pouvoir de quitter la vie et j'ai le pouvoir de la reprendre</h4>
<div class="notices green">
<p>Cette version diffère quelque peu du texte actuel de ce passage de l'évangile de Jean.<br>
Jean, X, 18: “Nul ne peut me l’enlever: je la donne de moi-même. J’ai le pouvoir de la donner, j’ai aussi le pouvoir de la recevoir de nouveau: voilà le commandement que j’ai reçu de mon Père”.
<a href="#reprendre" title="J'ai le pouvoir de quitter la vie...">(15) ↑</a></p>
</div>
<h4 id="note_ressuciter" class="green">celui qui ne croira pas que Dieu l'a ressuscité des morts ne pourra être sauvé</h4>
<div class="notices green">
<p>Épître aux Romains, X, 9. Le texte de la Vulgate est un peu différent:<br>
“En effet, si de ta bouche, tu affirmes que Jésus est Seigneur, si, dans ton cœur, tu crois que Dieu l’a ressuscité d’entre les morts, alors tu seras sauvé”.
<a href="#ressuciter" title="... que Dieu l'a ressuscité des morts ne pourra être sauvé">(16) ↑</a></p>
</div>
<h4 id="note_benir" class="green">je ne te laisserai pas partir si tu ne me bénis pas</h4>
<div class="notices green">
<p>Génèse, XXXII, 25-27: “25 Jacob resta seul. Or, quelqu’un lutta avec lui jusqu’au lever de l’aurore.<br>
26 L’homme, voyant qu’il ne pouvait rien contre lui, le frappa au creux de la hanche, et la hanche de Jacob se démit pendant ce combat.<br>
27 L’homme dit: «Lâche-moi, car l’aurore s’est levée.» Jacob répondit: «Je ne te lâcherai que si tu me bénis».”
<a href="#benir" title="J'ai le pouvoir de quitter la vie">(17) ↑</a></p>
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