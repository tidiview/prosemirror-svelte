<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="red">Arachnée</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee_700x520.webp 700w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/02.versailles/03.trianon/01.arachnee/arachnee_700x520.jpg" alt="Peinture de René-Antoine HOUASSE, “Minerve et Tirésias”, Grand Trianon, Versailles" title="Peinture de René-Antoine HOUASSE, “Minerve et Tirésias”, Grand Trianon, Versailles" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee_700x520.jpg 700w"></picture><figcaption>Minerve au premier plan porte des coups à Arachnée la Méonienne, au centre</figcaption></figure>
<div class="notices red">
<p>Au <a href="https://fr.wikipedia.org/wiki/Grand_Trianon" title="https://fr.wikipedia.org/wiki/Grand_Trianon">Grand Trianon</a>, dans le Salon des Seigneurs, se trouve un tableau peint par <a href="https://fr.wikipedia.org/wiki/René-Antoine_Houasse" title="https://fr.wikipedia.org/wiki/René-Antoine HOUASSE">René-Antoine HOUASSE</a>, «Minerve et Arachnée».<br>
Il raconte la terrible fin d'<a href="https://fr.wikipedia.org/wiki/Arachné" title="https://fr.wikipedia.org/wiki/Arachnée">Arachnée</a>, femme de Méonie, qui se trouve au centre et est représentée se défendant.<br>
Elle se trouve frappée par <a href="https://fr.wikipedia.org/wiki/Minerve_(mythologie)" title="https://fr.wikipedia.org/wiki/Minerve_(mythologie)">Minerve</a>, ici déesse de l'art de tisser qui apparaît au premier plan, parce qu'elle refusait de lui reconnaître toute supériorité du fait de sa seule divinité.<br>
Sa vie durant, elle n'a en effet eu de cesse de lui disputer l'excellence de cet art, ainsi que le raconte <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a> dans le livre VI des <a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)">Métamorphoses</a>.<br>
En voici le texte ci-dessous.</p>
</div>
<h2 class="red">Arachnée selon Arachnée “Les Métamorphoses” </h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>1</sup></td>
<td>Tritonia avait prêté l'oreille à ces récits des Aonides,<br>
Apprécié leurs chants ainsi que leur juste colère.<br>
Elle pense alors: «Louer ne suffit pas; je veux moi aussi des louanges<br>
Et ne tolérerai pas que l'on bafoue ma divine puissance impunément.»</td></tr>
<tr><td><sup>5 </sup></td>
<td>lle décide de perdre Arachné la Méonienne<br>
Qui ne s'incline pas, lui a-t-on rapporté, devant son art<br>
Du tissage. Celle-ci ne s'est illustrée ni par son rang<br>
Ni par ses origines mais par cet art; son père, Idmon de Colophon,<br>
Teignait la laine en la trempant dans la pourpre de Phocée;</td></tr>
<tr><td><sup>10</sup></td>
<td>Elle a perdu sa mère qui, comme son mari,<br>
Était issue du peuple. Or, elle s'est appliquée à se faire<br>
Un nom prestigieux dans les villes lydiennes quoique,<br>
De famille modeste, elle habitât la modeste Hypèpes.<br>
Pour voir ses ouvrages admirables, souvent</td></tr>
<tr><td><sup>15</sup></td>
<td>Les nymphes du Tmolus ont délaissé leurs vignes,<br>
Les nymphes du Pactoles ont délaissé leurs eaux.<br>
Elles aimaient non seulement contempler les vêtements finis<br>
Mais aussi la voir faire, tant elle réalisait avec grâce :<br>
La voir mettre en pelote la laine non encore travaillée,</td></tr>
<tr><td><sup>20</sup></td>
<td>La voir du doigt lisser son ouvrage et tirer longuement sur les flocons<br>
De laine pour les assouplir, les rendant aussi doux que nuages,<br>
La voir légèrement tourner du pouce le délicat fuseau,<br>
La voir broder; on y reconnaissait l'élève de Pallas.<br>
Or, elle nie cela et, refusant l'idée d'une enseignante aussi illustre,</td></tr>
<tr><td><sup>25</sup></td>
<td>Elle a dit: <br>
«<cite>Qu'elle se mesure à moi; si je perds, je me soumettrai.</cite>»<br>
Pallas se déguise en vieille femme, met de faux cheveux blancs<br>
À ses temps et son corps faible d'appuie même sur une canne.<br>
Puis, elle s'adresse à elle en ces termes: <br>
«<cite>Le grand âge n'a pas<br>
Que des côtés désagréables; la vieillesse apporte l'expérience.</cite></td></tr>
<tr><td><sup>30</sup></td>
<td><cite>Ne rejette pas mes conseils: tu peux vouloir la réputation<br>
D'être, parmi les mortelles, celle qui tisse le mieux la laine;<br>
Mais cède devant une déesse, étourdie, et demande pardon,<br>
D'une voix suppliante, pour tes propos; si tu la prie, elle pardonnera.</cite>»<br>
La regardant de travers, Arachné laisse le tissu commencé</td></tr>
<tr><td><sup>35</sup></td>
<td>Et, retenant sa main avec peine, le visage marqué par la colère,<br>
C'est ainsi qu'elle répond à Pallas méconnaissable:<br>
«<cite>Tu n'as plus ta tête; ta vieillesse prolongée t'a profondément amoindrie;<br>
Il n'est pas bon de vivre trop longtemps. Si tu as une bru,<br>
Si tu as une fille, qu'elles écoutent de tels discours.</cite></td></tr>
<tr><td><sup>40</sup></td>
<td><cite>Je n'ai que faire de tes conseils; ne crois pas que tes objurations<br>
Me soient de quelque utilité: je ne changerai pas d'avis.<br>
Pourquoi ne vient-elle pas? Pourquoi évite-t-elle l'affrontement?</cite>»<br>
Alors la déesse dit: <br>«<cite>La voici</cite>», <br>et elle se défait de son aspect<br>
De vieille, et Pallas apparaît. Nymphes et Mygdoniennes</td></tr>
<tr><td><sup>45</sup></td>
<td>Révèrent sa puissance: seule, la jeune fille n'a pas peur.<br>
Pourtant elle a rougi et la rougeur qui, malgré elle, a marqué<br>
Son visage, s'est aussitôt estompée, de même que le ciel<br>
Se colore de pourpre dès que l'aurore se met en marche<br>
Et, au lever du soleil, redevient très rapidement blanc.</td></tr>
<tr><td><sup>50</sup></td>
<td>Elle s'obstine dons son projet et ce désir stupidede remporter<br>
La palme la fait courir à sa perte; car la fille de Jupiter<br>
Ne se dérobe pas, ne conseille plus rien et ne diffère plus la joute.<br>
Sans retard, toutes deux installent, à l'opposée l'une de l'autre,<br>
Deux métiers à tisser et y tendent les minces fils de la chaîne;</td></tr>
<tr><td><sup>55</sup></td>
<td>Une traverse en relie les montants, un roseau en sépare les fils,<br>
De fines navettes y font courir la trame<br>
Que les doigts ordonnent et poussent le long de la chaîne<br>
Et que viennent frapper les dents qui composent le peigne.<br>
Elles se hâtent toutes deux et, manches retroussées jusqu'au buste,</td></tr>
<tr><td><sup>60</sup></td>
<td>Leurs bras s'activent avec habileté et une ardeur qui trompe la fatigue.<br>
Le tissage s'élabore à partir de la pourpre macérée dans des chaudrons<br>
Tyriens, ainsi que de subtiles teintes aux nuances très proches,<br>
Semblables à l'arc dont la courbe immense, quand la pluie<br>
Frappe les rayons du soleil, s'étire dans tout le ciel :</td></tr>
<tr><td><sup>65</sup></td>
<td>Bien que mille couleurs chatoyantes y scintillent,<br>
Leur transition échappe aux yeux du spectateur car elles se confondent<br>
À leur point de jonction alors qu'elles sont distinctes à leurs extrémités.<br>
Un fil d'or souple se même ici à la trame<br>
Et vient broder sur le tissu des scènes d'autrefois.</td></tr>
<tr><td><sup>70</sup></td>
<td>Pallas dépeint le rocher de Mars, sur les hauteurs d'Athènes,<br>
Et le débat de jadis au sujet du nom de cette terre.<br>
Les douze dieux du ciel, autour de Jupiter siègent sur trônes élevés,<br>
Avec une solennité auguste; chacun des dieux est représenté<br>
Avec ses attributs distinctifs: le portrait de Jupiter est d'un roi.</td></tr>
<tr><td><sup>75</sup></td>
<td>Le dieu des eaux est montré debout, frappant d'âpres rochers<br>
De son long trident et, de la brèche ainsi ouverte,<br>
Faisant jaillir une mer, enjeu par lequel il revendique la ville.<br>
Pallas se donne un bouclier, une lance à la pointe aigüe,<br>
Pose un casque sur sa tête, protège sa poitrine par une égide</td></tr>
<tr><td><sup>80</sup></td>
<td>Et dessine la terre, frappée de sa lance,<br>
Donnant naissance à l'olivier adulte chargé de fruits,<br>
Devant les dieux saisis d'admiration: la Victoire termine son ouvrage.<br>
Toutefois, pour que celle qui prétend à sa gloire comprenne par l'exemple<br>
Quelle récompense elle peut attendre d'une si folle audace,</td></tr>
<tr><td><sup>85</sup></td>
<td>Elle ajoute aux quatre coins quatre défis lancés,<br>
Éclatants de couleur mais de petites dimensions par rapport au premier.<br>
Dans l'un des angles, il y a le Rhodope de Thrace et l'Hémus,<br>
Aujourd'hui monts glacés, naguère êtres humains<br>
Qui usurpèrent les noms des plus grands dieux.</td></tr>
<tr><td><sup>90</sup></td>
<td>Un autre retrace la mère des Pygmées le destin pathétique :<br>
Junon releva le défi, la condamna à être grue<br>
Et à déclarer la guerre à son propre peuple.<br>
Est aussi dépeinte Antigone qui avait un jour oser se comparer<br>
À l'épouse de Jupiter le Grand, et que la royale Junon</td></tr>
<tr><td><sup>95</sup></td>
<td>Transforma en oiseau: ni Ilion ni son père Laomédon<br>
Ne purent l'empêcher: blanche cigogne recouverte de plumes,<br>
Elle s'applaudit en claquant du bec.<br>
Dans le tout dernier se trouve Cyniras privé de ses enfants;<br>
On peut le voir embrasser les marches du temple,</td></tr>
<tr><td><sup>100</sup></td>
<td>À savoir les corps de ses filles, et, allongé sur la pierre, pleurer.<br>
Des rameaux d'olivier, emblème de la paix, forment une bordure :<br>
Façon de terminer l'ouvrage par son arbre préféré.<br>
La Méonnienne dessine Europe abusée par un simulacre<br>
De taureau; on croirait voir un vrai taureau, une vraie mer.</td></tr>
<tr><td><sup>105</sup></td>
<td>La jeune fille semble regarder la terre qu'elle laisse,<br>
Appeler ses compagnes et, de crainte d'être touchée<br>
Par la vague agressive, relever ses pieds avec appréhension.<br>
Arachné montre encore Astérie aux prises avec un aigle<br>
Qui la domine, Léda étendue sous les ailes d'un cygne;</td></tr>
<tr><td><sup>110</sup></td>
<td>Elle y ajoute Jupiter caché sous l'aspect d'un satyre<br>
Et faisant deux jumeaux à la splendide fille de Nyctée,<br>
Puis, sous les traits d'Amphitryon te prenant, reine de Tirynthe,<br>
Et pluie d'or pour tromper Danaé, flamme pour Égine,<br>
Berger pour Mnémosyne, serpent moucheté pour la fille de Déo.</td></tr>
<tr><td><sup>115</sup></td>
<td>Elle te montre aussi, Neptune, changé en farouche taureau<br>
Pour la vierge d'Éolie, sous l'apparence d'Énipée quand tu engendras<br>
Les Aloïdes, ou du bélier quand tu séduisis la fille de Bisalte.<br>
Cheval, tu fis jouir la très généreuse mère des moissons,<br>
Celle aux cheveux dorés; oiseau, celle à la chevelure de serpents,</td></tr>
<tr><td><sup>120</sup></td>
<td>La mère du cheval ailé; dauphin, tu fis jouir Mélantho.<br>
Chacun des personnages, chacun des lieux est parfaitement<br>
Représenté: il y a là Phœbus sous les traits d'un paysan,<br>
Revêtu tantôt des plumes d'un épervier, tantôt d'une peau de lion,<br>
ou encore berger pour séduire Issa, fille de Macarée;<br>
Puis Liber déguisé en grappe de raisin pour abuser Érigoné,</td></tr>
<tr><td><sup>125</sup></td>
<td>Puis Saturne en cheval pour engendrer Chiron au corps double.<br>
Le bord de la toile, entouré d'une légère frange,<br>
Comporte des entrelacs de fleurs et de branches de lierre.<br>
Ni Pallas, ni l'Envie ne pourraient critiquer cet ouvrage;<br>
La blonde guerrière, tout au dépit de cette réussite,<br>
Déchire le tissu coloré et ses adultères divins</td></tr>
<tr><td><sup>130</sup></td>
<td>Et, tenant à la main sa navette du mont Cytore,<br>
Elle en frappe trois, quatre fois au front la fille d'Idmon, Arachné.<br>
La malheureuse ne le supporte pas et, fièrement, entoure son cou<br>
D'un lacet. La voyant pendue, Pallas allège sa souffrance<br>
En disant: <br>
«<cite>Vis donc, mais reste pendue, impudente,</cite></td></tr>
<tr><td><sup>140</sup></td>
<td><cite>Et que ce châtiment s'exerce - pour que ton avenir soit sans espoir -<br>
Sur toute ta race jusqu'à tes plus loins descendants.</cite>»<br>
Après quoi, en partant, elle l'arrose d'une décoction de plantes<br>
Créée par Hécate; aussitôt, touchés par ce funeste onguent,<br>
Ses cheveux tombent et avec eux, son nez et ses oreilles,</td></tr>
<tr><td><sup>145</sup></td>
<td>Sa tête se rapetisse, son corps tout entier se réduit;<br>
Des pattes grêles se fixent sur les côtés en guise de jambes,<br>
Elle n'a plus qu'un ventre: mais elle continue à produire du fil</td></tr>
<tr><td><sup>149</sup></td>
<td>Et c'est une araignée qui poursuit comme autrefois sa toile.</td></tr>
</tbody>
</table>
<p><span style="color: #b52b27;">Ovide, “les Métamorphoses”, Livre 6, vers 1 à 149.</span>  </p>
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