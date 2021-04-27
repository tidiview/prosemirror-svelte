<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<hgroup>
<h1 class="red">Arachnée</h1>
<h2 class="red">au Grand Trianon</h2>
</hgroup>

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
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee_700x520.jpg 700w"></picture><figcaption>Minerve au premier plan <q cite="#arachnee">tenant à la main sa navette du mont Cytore, Elle en frappe trois, quatre fois au front</q> Arachnée la Méonienne, au centre</figcaption></figure>

<div class="notices red">
<p>Au <a href="https://fr.wikipedia.org/wiki/Grand_Trianon" title="https://fr.wikipedia.org/wiki/Grand_Trianon">Grand Trianon</a>, dans le Salon des Seigneurs, se trouve un tableau peint par <a href="https://fr.wikipedia.org/wiki/René-Antoine_Houasse" title="https://fr.wikipedia.org/wiki/René-Antoine HOUASSE">René-Antoine HOUASSE</a>, <cite>Minerve et Arachnée</cite>.</p>
<p>Il raconte la terrible fin d'<a href="https://fr.wikipedia.org/wiki/Arachné" title="https://fr.wikipedia.org/wiki/Arachnée">Arachnée</a>, femme de Méonie, qui se trouve au centre et est représentée se défendant.</p>
<p>Elle se trouve frappée par <a href="https://fr.wikipedia.org/wiki/Minerve_(mythologie)" title="https://fr.wikipedia.org/wiki/Minerve_(mythologie)">Minerve</a>, ici déesse de l'art de tisser qui apparaît au premier plan, parce qu'elle refusait de lui reconnaître toute supériorité du fait de sa seule divinité.</p>
<p>Sa vie durant, elle n'a en effet eu de cesse de lui disputer l'excellence de cet art, ainsi que le raconte <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a> dans le livre <abbr title="six">VI</abbr> des <a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)"><cite>Métamorphoses</cite></a>.</p>
<p>En voici le texte ci-dessous.</p>
</div>

<h2 id="arachnee" class="red">Arachnée selon le texte du livre <abbr title="six">VI</abbr> des <cite>Métamorphoses</cite></h2>

<ol class="doc">
  <li value="1">Tritonia avait prêté l'oreille à ces récits des Aonides,</li>
  <li>Apprécié leurs chants ainsi que leur juste colère.</li>
  <li>Elle pense alors:
    <p class="conversation">«Louer ne suffit pas; je veux moi aussi des louanges</p>
  </li>
  <li>
    <p class="conversation">Et ne tolérerai pas que l'on bafoue ma divine puissance impunément.»</p>
  </li>
  <li value="5">Elle décide de perdre <mark>Arachnée</mark> la Méonienne</li>
  <li>Qui ne s'incline pas, lui a-t-on rapporté, devant son art</li>
  <li>Du tissage. Celle-ci ne s'est illustrée ni par son rang</li>
  <li>Ni par ses origines mais par cet art; son père, Idmon de Colophon,</li>
  <li>Teignait la laine en la trempant dans la pourpre de Phocée;</li>
  <li value="10">Elle a perdu sa mère qui, comme son mari,</li>
  <li>Était issue du peuple. Or, elle s'est appliquée à se faire</li>
  <li>Un nom prestigieux dans les villes lydiennes quoique,</li>
  <li>De famille modeste, elle habitât la modeste Hypèpes.</li>
  <li>Pour voir ses ouvrages admirables, souvent</li>
  <li value="15">Les nymphes du Tmolus ont délaissé leurs vignes,</li>
  <li>Les nymphes du Pactoles ont délaissé leurs eaux.</li>
  <li>Elles aimaient non seulement contempler les vêtements finis</li>
  <li>Mais aussi la voir faire, tant elle réalisait avec grâce :</li>
  <li>La voir mettre en pelote la laine non encore travaillée,</li>
  <li value="20">La voir du doigt lisser son ouvrage et tirer longuement sur les flocons</li>
  <li>De laine pour les assouplir, les rendant aussi doux que nuages,</li>
  <li>La voir légèrement tourner du pouce le délicat fuseau,</li>
  <li>La voir broder; on y reconnaissait l'élève de Pallas.</li>
  <li>Or, elle nie cela et, refusant l'idée d'une enseignante aussi illustre,</li>
  <li value="25">Elle a dit: </li>
  <li>
    <p class="conversation">«Qu'elle se mesure à moi; si je perds, je me soumettrai.»</p>
  </li>
  <li>Pallas se déguise en vieille femme, met de faux cheveux blancs</li>
  <li>À ses temps et son corps faible d'appuie même sur une canne.</li>
  <li>Puis, elle s'adresse à elle en ces termes: </li>
  <li>
    <p class="conversation">«Le grand âge n'a pas</p>
  </li>
  <li>
    <p class="conversation">Que des côtés désagréables; la vieillesse apporte l'expérience.</p>
  </li>
  <li value="30">
    <p class="conversation">Ne rejette pas mes conseils: tu peux vouloir la réputation</p>
  </li>
  <li>
    <p class="conversation">D'être, parmi les mortelles, celle qui tisse le mieux la laine;</p>
  </li>
  <li>
    <p class="conversation">Mais cède devant une déesse, étourdie, et demande pardon,</p>
  </li>
  <li><p class="conversation">D'une voix suppliante, pour tes propos; si tu la prie, elle pardonnera.»</p>
  </li>
  <li>La regardant de travers, <mark>Arachnée</mark> laisse le tissu commencé</li>
  <li value="35">Et, retenant sa main avec peine, le visage marqué par la colère,</li>
  <li>C'est ainsi qu'elle répond à Pallas méconnaissable:</li>
  <li>
    <p class="conversation">«Tu n'as plus ta tête; ta vieillesse prolongée t'a profondément amoindrie;</p>
  </li>
  <li>
    <p class="conversation">Il n'est pas bon de vivre trop longtemps. Si tu as une bru,</p>
  </li>
  <li>
    <p class="conversation">Si tu as une fille, qu'elles écoutent de tels discours.</p>
  </li>
  <li value="40">
    <p class="conversation">Je n'ai que faire de tes conseils; ne crois pas que tes objurations</p>
  </li>
  <li>
    <p class="conversation">Me soient de quelque utilité: je ne changerai pas d'avis.</p>
  </li>
  <li>
    <p class="conversation">Pourquoi ne vient-elle pas? Pourquoi évite-t-elle l'affrontement?»</p>
  </li>
  <li>Alors la déesse dit:</li>
  <li>
    <p class="conversation">«La voici»,</p>
  </li>
  <li>et elle se défait de son aspect</li>
  <li>De vieille, et Pallas apparaît. Nymphes et Mygdoniennes</li>
  <li value="45">Révèrent sa puissance: seule, la jeune fille n'a pas peur.</li>
  <li>Pourtant elle a rougi et la rougeur qui, malgré elle, a marqué</li>
  <li>Son visage, s'est aussitôt estompée, de même que le ciel</li>
  <li>Se colore de pourpre dès que l'aurore se met en marche</li>
  <li>Et, au lever du soleil, redevient très rapidement blanc.</li>
  <li value="50">Elle s'obstine dons son projet et ce désir stupidede remporter</li>
  <li>La palme la fait courir à sa perte; car la fille de Jupiter</li>
  <li>Ne se dérobe pas, ne conseille plus rien et ne diffère plus la joute.</li>
  <li>Sans retard, toutes deux installent, à l'opposée l'une de l'autre,</li>
  <li>Deux métiers à tisser et y tendent les minces fils de la chaîne;</li>
  <li value="55">Une traverse en relie les montants, un roseau en sépare les fils,</li>
  <li>De fines navettes y font courir la trame</li>
  <li>Que les doigts ordonnent et poussent le long de la chaîne</li>
  <li>Et que viennent frapper les dents qui composent le peigne.</li>
  <li>Elles se hâtent toutes deux et, manches retroussées jusqu'au buste,</li>
  <li value="60">Leurs bras s'activent avec habileté et une ardeur qui trompe la fatigue.</li>
  <li>Le tissage s'élabore à partir de la pourpre macérée dans des chaudrons</li>
  <li>Tyriens, ainsi que de subtiles teintes aux nuances très proches,</li>
  <li>Semblables à l'arc dont la courbe immense, quand la pluie</li>
  <li>Frappe les rayons du soleil, s'étire dans tout le ciel :</li>
  <li value="65">Bien que mille couleurs chatoyantes y scintillent,</li>
  <li>Leur transition échappe aux yeux du spectateur car elles se confondent</li>
  <li>À leur point de jonction alors qu'elles sont distinctes à leurs extrémités.</li>
  <li>Un fil d'or souple se même ici à la trame</li>
  <li>Et vient broder sur le tissu des scènes d'autrefois.</li>
  <li value="70">Pallas dépeint le rocher de Mars, sur les hauteurs d'Athènes,</li>
  <li>Et le débat de jadis au sujet du nom de cette terre.</li>
  <li>Les douze dieux du ciel, autour de Jupiter siègent sur trônes élevés,</li>
  <li>Avec une solennité auguste; chacun des dieux est représenté</li>
  <li>Avec ses attributs distinctifs: le portrait de Jupiter est d'un roi.</li>
  <li value="75">Le dieu des eaux est montré debout, frappant d'âpres rochers</li>
  <li>De son long trident et, de la brèche ainsi ouverte,</li>
  <li>Faisant jaillir une mer, enjeu par lequel il revendique la ville.</li>
  <li>Pallas se donne un bouclier, une lance à la pointe aigüe,</li>
  <li>Pose un casque sur sa tête, protège sa poitrine par une égide</li>
  <li value="80">Et dessine la terre, frappée de sa lance,</li>
  <li>Donnant naissance à l'olivier adulte chargé de fruits,</li>
  <li>Devant les dieux saisis d'admiration: la Victoire termine son ouvrage.</li>
  <li>Toutefois, pour que celle qui prétend à sa gloire comprenne par l'exemple</li>
  <li>Quelle récompense elle peut attendre d'une si folle audace,</li>
  <li value="85">Elle ajoute aux quatre coins quatre défis lancés,</li>
  <li>Éclatants de couleur mais de petites dimensions par rapport au premier.</li>
  <li>Dans l'un des angles, il y a le Rhodope de Thrace et l'Hémus,</li>
  <li>Aujourd'hui monts glacés, naguère êtres humains</li>
  <li>Qui usurpèrent les noms des plus grands dieux.</li>
  <li value="90">Un autre retrace la mère des Pygmées le destin pathétique :</li>
  <li>Junon releva le défi, la condamna à être grue</li>
  <li>Et à déclarer la guerre à son propre peuple.</li>
  <li>Est aussi dépeinte Antigone qui avait un jour oser se comparer</li>
  <li>À l'épouse de Jupiter le Grand, et que la royale Junon</li>
  <li value="95">Transforma en oiseau: ni Ilion ni son père Laomédon</li>
  <li>Ne purent l'empêcher: blanche cigogne recouverte de plumes,</li>
  <li>Elle s'applaudit en claquant du bec.</li>
  <li>Dans le tout dernier se trouve Cyniras privé de ses enfants;</li>
  <li>On peut le voir embrasser les marches du temple,</li>
  <li value="100">À savoir les corps de ses filles, et, allongé sur la pierre, pleurer.</li>
  <li>Des rameaux d'olivier, emblème de la paix, forment une bordure :</li>
  <li>Façon de terminer l'ouvrage par son arbre préféré.</li>
  <li>La Méonnienne dessine Europe abusée par un simulacre</li>
  <li>De taureau; on croirait voir un vrai taureau, une vraie mer.</li>
  <li value="105">La jeune fille semble regarder la terre qu'elle laisse,</li>
  <li>Appeler ses compagnes et, de crainte d'être touchée</li>
  <li>Par la vague agressive, relever ses pieds avec appréhension.</li>
  <li><mark>Arachnée</mark> montre encore Astérie aux prises avec un aigle</li>
  <li>Qui la domine, Léda étendue sous les ailes d'un cygne;</li>
  <li value="110">Elle y ajoute Jupiter caché sous l'aspect d'un satyre</li>
  <li>Et faisant deux jumeaux à la splendide fille de Nyctée,</li>
  <li>Puis, sous les traits d'Amphitryon te prenant, reine de Tirynthe,</li>
  <li>Et pluie d'or pour tromper Danaé, flamme pour Égine,</li>
  <li>Berger pour Mnémosyne, serpent moucheté pour la fille de Déo.</li>
  <li value="115">Elle te montre aussi, Neptune, changé en farouche taureau</li>
  <li>Pour la vierge d'Éolie, sous l'apparence d'Énipée quand tu engendras</li>
  <li>Les Aloïdes, ou du bélier quand tu séduisis la fille de Bisalte.</li>
  <li>Cheval, tu fis jouir la très généreuse mère des moissons,</li>
  <li>Celle aux cheveux dorés; oiseau, celle à la chevelure de serpents,</li>
  <li value="120">La mère du cheval ailé; dauphin, tu fis jouir Mélantho.</li>
  <li>Chacun des personnages, chacun des lieux est parfaitement</li>
  <li>Représenté: il y a là Phœbus sous les traits d'un paysan,</li>
  <li>Revêtu tantôt des plumes d'un épervier, tantôt d'une peau de lion,</li>
  <li>ou encore berger pour séduire Issa, fille de Macarée;</li>
  <li>Puis Liber déguisé en grappe de raisin pour abuser Érigoné,</li>
  <li value="125">Puis Saturne en cheval pour engendrer Chiron au corps double.</li>
  <li>Le bord de la toile, entouré d'une légère frange,</li>
  <li>Comporte des entrelacs de fleurs et de branches de lierre.</li>
  <li>Ni Pallas, ni l'Envie ne pourraient critiquer cet ouvrage;</li>
  <li>La blonde guerrière, tout au dépit de cette réussite,</li>
  <li>Déchire le tissu coloré et ses adultères divins</li>
  <li value="130">Et, tenant à la main sa navette du mont Cytore,</li>
  <li>Elle en frappe trois, quatre fois au front la fille d'Idmon, <mark>Arachnée</mark>.</li>
  <li>La malheureuse ne le supporte pas et, fièrement, entoure son cou</li>
  <li>D'un lacet. La voyant pendue, Pallas allège sa souffrance</li>
  <li>En disant: </li>
  <li>
    <p class="conversation">«Vis donc, mais reste pendue, impudente,</p>
  </li>
  <li value="140">
    <p class="conversation">Et que ce châtiment s'exerce - pour que ton avenir soit sans espoir -</p>
  </li>
  <li>
    <p class="conversation">Sur toute ta race jusqu'à tes plus loins descendants.»</p>
  </li>
  <li>Après quoi, en partant, elle l'arrose d'une décoction de plantes</li>
  <li>Créée par Hécate; aussitôt, touchés par ce funeste onguent,</li>
  <li>Ses cheveux tombent et avec eux, son nez et ses oreilles,</li>
  <li value="145">Sa tête se rapetisse, son corps tout entier se réduit;</li>
  <li>Des pattes grêles se fixent sur les côtés en guise de jambes,</li>
  <li>Elle n'a plus qu'un ventre: mais elle continue à produire du fil</li>
  <li value="148">Et c'est une araignée qui poursuit comme autrefois sa toile.</li>
</ol>

<footer>
  <p><span style="color: #b52b27;">Ovide, <cite>les Métamorphoses</cite>, Livre <abbr title="six">VI</abbr>, vers 1 à 148.</span></p>
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