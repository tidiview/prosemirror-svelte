<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<hgroup>
<h1 class="green">Diana</h1>
<h2 class="green">at the Chateau de Chenonceau</h2>
</hgroup>

<figure>
  <picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane_700x1050.webp 700w" type="image/webp"><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane_700x1050.jpg 700w"><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus_700x1050.webp 700w"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus_700x798.jpg" alt="School of Primaticcio, “Portrait of Diana of Poitiers”, Château de Chenonceau" title="School of Primaticcio, “Portrait of Diana of Poitiers”, Château de Chenonceau" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus_700x798.jpg 700w"></picture><figcaption>Diana of Poitiers represented in Diana, goddess of Hunting<br><q cite="#acteon">They say Diana the Quiver-bearer’s anger was not appeased, until his life had ended in innumerable wounds.</q></figcaption>
</figure>

<div class="notices green">
  <p>This portrait is a work that <a href="https://en.wikipedia.org/wiki/Francesco_Primaticcio" title="https://en.wikipedia.org/wiki/Francesco_Primaticcio">Primaticcio</a>, painter from Bologna in Italy, invited to come to France by King <a href="https://en.wikipedia.org/wiki/Francis_I_of_France" title="https://en.wikipedia.org/wiki/Francis_I_of_France">Francis <abbr title="the first">I<abbr></a> then become almost minister of Culture, has painted, in <time datetime="1556">1556</time>, in the <a href="https://en.wikipedia.org/wiki/Château_de_Chenonceau" title="https://en.wikipedia.org/wiki/Château_de_Chenonceau">Château de Chenonceau</a>.</p>
  <p>In French, the same person is named « Le Primatice ».</p>
  <p>This image represents the favorite of king <a href="https://en.wikipedia.org/wiki/Henry_II_of_France" title="https://en.wikipedia.org/wiki/Henry_II_of_France">Henri <abbr title="the second">II<abbr> of France</a>, son that succeded to Francis <abbr title="the first">I<abbr>, <a href="https://en.wikipedia.org/wiki/Diane_de_Poitiers" title="https://en.wikipedia.org/wiki/Diane_de_Poitiers">Diana de Poitiers</a>.</p>
  <p>Then, at the cour of the king of France, she was famous to be of an exceptional beauty.</p>
  <p>At that time, there was a trend for « parallel portrait »; here, the person is not represented directly for herself but through the goddess of hunting known for having the same name, <a href="https://en.wikipedia.org/wiki/Diana_(mythology)" title="https://en.wikipedia.org/wiki/Diana_(mythology)">Diana</a>.</p>
  <p>At the origin of this parallel portrait, underneath, a tale in which appears Diana goddess of hunting, written by a writer who lived at the time of the Roman Empire, <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid">Ovide</a> in <a href="https://en.wikipedia.org/wiki/Metamorphoses" title="https://en.wikipedia.org/wiki/Metamorphoses"><cite>The Metamorphoses</cite></a>.</p>
  <p>May this tale of the adventures of the goddess of hunting and Actæon bepleasant to you!</p>
</div>

<article>
<h2 id="acteon" class="green">Actæon according to text of Book <abbr title="three">III</abbr> of <cite>The Metamorphoses</cite></h2>

<ol class="doc">
  <li value="131">Now Thebes stands, and now you might be seen as happy, in your exile, Cadmus.</li>
  <li value="135">You have Mars and Venus as your bride’s parents, and added to this the children of so noble a wife, so many sons and daughters, and dearly loved descendants, your grandchildren, who now are young men.</li>
  <li>But in truth we should always wait for a man’s last day, for that time when he has paid his last debt, and we should call no man’s life happy until he is dead.</li>

  <li class="top-space"><mark>Actæon</mark>, one of your grandsons, was your first reason for grief, in all your happiness, Cadmus.</li>
  <li>Strange horns appeared on his forehead, and his hunting dogs sated themselves on the blood of their master.</li>
  <li value="140">But if you look carefully, you will find that it was the fault of chance and not wickedness: what wickedness is there in error?</li>
  <li>It happened on a mountain, stained with the blood of many creatures, and midday had contracted every shadow and </li>
  <li value="145">the sun was equidistant from either end of his journey.</li>
  <li>
    Then <mark>Actæon</mark>, the young Boeotian, with a quiet expression, spoke to his companions in the hunt as they wandered through the solitary wilds
    <p class="conversation">‘Friends, our spears and nets are drenched with the blood of our victims, and the day has been fortunate enough.</p>
  </li>
  <li value="150">
    <p class="conversation">When Aurora in her golden chariot brings another day we will resume our purpose.</p>
  </li>
  <li>
    <p class="conversation">Now Phoebus is also between the limits of his task, and is splitting open the earth with his heat.</p>
  </li>
  <li>
    <p class="conversation">Finish your present task and carry home the netted meshes.’</p>
  </li>
  <li value="155">The men obeyed his order and left off their labour.</li>

  <li class="top-space">There was a valley there called Gargaphie, dense with pine trees and sharp cypresses, sacred to <mark>Diana</mark> of the high-girded tunic, where, in the depths, there is a wooded cave, not fashioned by art.</li>
  <li>But ingenious nature had imitated art.</li>
  <li value="160">She had made a natural arch out of native pumice and porous tufa.</li>
  <li>On the right, a spring of bright clear water murmured into a widening pool, enclosed by grassy banks.</li>
  <li>Here the woodland goddess, weary from the chase, would bathe her virgin limbs in the crystal liquid.</li>

  <li value="165" class="top-space">Having reached the place, she gives her spear, quiver and unstrung bow to one of the nymphs, her weapon-bearer.</li>
  <li>Another takes her robe over her arm, while two unfasten the sandals on her feet.</li>
  <li>Then, more skilful than the rest, Theban Crocale gathers the hair strewn around her neck into a knot, while her own is still loose.</li>
  <li value="170">Nephele, Hyale, Rhanis, Psecas and Phiale draw water, and pour it over their mistress out of the deep jars.</li>

  <li value="175" class="top-space">While Titania is bathing there, in her accustomed place, Cadmus’s grandson, free of his share of the labour, strays with aimless steps through the strange wood, and enters the sacred grove.</li>
  <li>So the fates would have it.</li>
  <li>As soon as he reaches the cave mouth dampened by the fountain, the naked nymphs, seeing a man’s face, </li>
  <li value="180">beat at their breasts and filling the whole wood with their sudden outcry, crowd round <mark>Diana</mark> to hide her with their bodies.</li>
  <li>But the goddess stood head and shoulders above all the others.</li>
  <li value="185"><mark>Diana</mark>’s face, seen there, while she herself was naked, was the colour of clouds stained by the opposing shafts of sun, or Aurora’s brightness.</li>

  <li class="top-space">However, though her band of nymphs gathered in confusion around her, she stood turning to one side, and looking back, and wishing she had her arrows to hand.</li>
  <li>She caught up a handful of the water that she did have, and threw it in the man’s face.</li>
  <li value="190">
    And as she sprinkled his hair with the vengeful drops she added these words, harbingers of his coming ruin,
    <p class="conversation">‘Now you may tell, if you can tell that is, of having seen me naked!’</p>
    Without more threats, she gave the horns of a mature stag to the head she had sprinkled,
  </li>
  <li value="195">lengthening his neck, making his ear-tips pointed, changing feet for hands, long legs for arms, and covering his body with a dappled hide.</li>
  <li>And then she added fear.</li>
  <li>Autonoë’s brave son flies off, marvelling at such swift speed, within himself.</li>
  <li value="200">
    But when he sees his head and horns reflected for certain in the water, he tries to say
    <p class="conversation">‘Oh, look at me!’</p>
    but no voice follows.
  </li>
  <li>He groans: that is his voice, and tears run down his altered face.</li>
  <li value="205">Only his mind remains unchanged.</li>
  <li>What can he do? Shall he return to his home and the royal palace, or lie hidden in the woods? Shame prevents the one, and fear the other.</li>

  <li class="top-space">While he hesitates his dogs catch sight of him.</li>
  <li>First ‘Black-foot’, Melampus, and keen-scented Ichnobates, ‘Tracker’, signal him with baying, Ichnobates out of Crete, Melampus, Sparta.</li>
  <li>Then others rush at him swift as the wind, ‘Greedy’, </li>
  <li value="210">Pamphagus, Dorceus, ‘Gazelle’, Oribasos, ‘Mountaineer’, all out of Arcady: powerful ‘Deerslayer’, Nebrophonos, savage Theron, ‘Whirlwind’, and Laelape, ‘Hunter’.</li>

  <li class="top-space">Then swift-footed Pterelas, ‘Wings’, and trail-scenting Agre, ‘Chaser’, fierce Hylaeus, ‘Woody’, lately gored by a boar, the wolf-born Nape, ‘Valley’, Poemenis, the trusty ‘Shepherd’, and </li>
  <li value="215">Harpyia, ‘Snatcher’, with her two pups.</li>
  <li>There is thin-flanked Sicyonian Ladon, ‘Catcher’, Dromas, ‘Runner’, ‘Grinder’, Canache, Sticte ‘Spot’, Tigris ‘Tigress’, Alce, ‘Strong’, and white-haired Leucon, ‘Whitey’, and black-haired Asbolus, ‘Soot’.</li>

  <li class="top-space">Lacon, ‘Spartan’, follows them, a dog well known for his strength, and strong-running Aëllo, ‘Storm’.</li>
  <li value="220">Then Thoos, ‘Swift’, and speedy Lycisce, ‘Wolf’, with her brother Cyprius ‘Cyprian’.</li>
  <li>Next ‘Grasper’, Harpalos, with a distinguishing mark of white, in the centre of his black forehead, ‘Black’, Melaneus, and Lachne, ‘Shaggy’, with hairy pelt, Labros, ‘Fury’, and Argiodus, ‘White-tooth’, born of a Cretan sire and Spartan dam, keen-voiced Hylactor, ‘Barker’, </li>
  <li value="225">and others there is no need to name.</li>
  <li>The pack of them, greedy for the prey follow over cliffs and crags, and inaccessible rocks, where the way is hard or there is no way at all.</li>
  <li>He runs, over the places where he has often chased, flying, alas, from his own hounds.</li>
  <li>He longs to shout </li>
  <li value="230"><p class="conversation">I am <mark>Actæon</mark>! Know your own master!</p> but words fail him, the air echoes to the baying.</li>

  <li class="top-space">First ‘Black-hair’, Melanchaetes, wounds his back, then ‘Killer’, Theridamas, and Oresitrophos, the ‘Climber’, clings to his shoulder.</li>
  <li>They had set out late but outflanked the route by a shortcut </li>
  <li value="235">over the mountains.</li>
  <li>While they hold their master the whole pack gathers and they sink their teeth in his body till there is no place left to wound him.</li>
  <li>He groans and makes a noise, not human, but still not one a deer could make, and fills familiar heights with mournful cries.</li>
  <li value="240">And on his knees, like a suppliant begging, he turns his wordless head from side to side, as if he were stretching arms out towards them.</li>

  <li class="top-space">Now his friends, unknowingly, urge the ravening crowd of dogs on with their usual cries, looking out for <mark>Actæon</mark>, and shouting, in emulation, for absent <mark>Actæon</mark> </li>
  <li value="245">(he turning his head at the sound of his name) complaining he is not there, and through his slowness is missing the spectacle offered by their prey.</li>
  <li>He might wish to be absent it’s true, but he is here: he might wish to see and not feel the fierce doings of his own hounds.</li>
  <li value="250">They surround him on every side, sinking their jaws into his flesh, tearing their master to pieces in the deceptive shape of the deer.</li>
  <li value="252"><span style="color: #3d8b3d;">They say <mark>Diana</mark> the Quiver-bearer’s anger was not appeased, until his life had ended in innumerable wounds.</span></li>
</ol>

<footer>
  <p style="color: #3d8b3d;">Ovid, <cite>The Metamorphoses</cite>, Book <abbr title="three">III</abbr>, verses 134 to 252.</p>
</footer>

</article>

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