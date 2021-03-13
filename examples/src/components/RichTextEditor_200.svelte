<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="green">Diana</h1>
<figure><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus_700x798.jpg 700w"></picture><figcaption>Diana of Poitiers represented in Diana, goddess of Hunting</figcaption></figure>
<div class="notices green">
<p>This portrait is a work that <a href="https://en.wikipedia.org/wiki/Francesco_Primaticcio" title="https://en.wikipedia.org/wiki/Francesco_Primaticcio">Primaticcio</a>, painter from Bologna in Italy, invited by king <a href="https://en.wikipedia.org/wiki/Francis_I_of_France" title="https://en.wikipedia.org/wiki/Francis_I_of_France">Francis I of France</a> then become almost minister of Culture, has painted, in 1556, in the <a href="https://en.wikipedia.org/wiki/Château_de_Chenonceau" title="https://en.wikipedia.org/wiki/Château_de_Chenonceau">Château de Chenonceau</a>.<br>
In French, the same person is named « Le Primatice ».<br>
This image represents the favorite of king <a href="https://en.wikipedia.org/wiki/Henry_II_of_France" title="https://en.wikipedia.org/wiki/Henry_II_of_France">Henri II of France</a>, son that succeded to Francis I, <a href="https://en.wikipedia.org/wiki/Diane_de_Poitiers" title="https://en.wikipedia.org/wiki/Diane_de_Poitiers">Diana de Poitiers</a>.<br>
Then, at the cour of the king of France, she was famous to be of an exceptional beauty.<br>
At that time, there was a trend for « parallel portrait » ; here, the person is not represented directly for herself but through the goddess of hunting known for having the same name, <a href="https://en.wikipedia.org/wiki/Diana_(mythology)" title="https://en.wikipedia.org/wiki/Diana_(mythology)">Diana</a>.<br>
At the origin of this parllel portrait, underneath, a tale in which appears Diana goddess of hunting, written by a writer who lived at the time of the Roman Empire, <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid">Ovide</a> in the <a href="https://en.wikipedia.org/wiki/Metamorphoses" title="https://en.wikipedia.org/wiki/Metamorphoses">Metamorphoses</a>.<br>
May this tale of the adventures of the goddess of hunting and actæon bepleasant to you!</p>
</div>
<h2 class="green">Actæon according to “The Metamorphoses”</h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
Now Thebes stands, and now you might be seen as happy, in your exile, Cadmus.<br>
<sup>135</sup> You have Mars and Venus as your bride’s parents, and added to this the children of so noble a wife, so many sons and daughters, and dearly loved descendants, your grandchildren, who now are young men.<br>
But in truth we should always wait for a man’s last day, for that time when he has paid his last debt, and we should call no man’s life happy until he is dead.<br>
Actæon, one of your grandsons, was your first reason for grief, in all your happiness, Cadmus.<br>
Strange horns appeared on his forehead, and his hunting dogs sated themselves on the blood of their master.<br>
<sup>140</sup> But if you look carefully, you will find that it was the fault of chance and not wickedness: what wickedness is there in error?<br>
It happened on a mountain, stained with the blood of many creatures, and midday had contracted every shadow and <sup>145</sup> the sun was equidistant from either end of his journey.<br>
Then Actæon, the young Boeotian, with a quiet expression, spoke to his companions in the hunt as they wandered through the solitary wilds ‘Friends, our spears and nets are drenched with the blood of our victims, and the day has been fortunate enough.<br>
<sup>150</sup> When Aurora in her golden chariot brings another day we will resume our purpose.<br>
Now Phoebus is also between the limits of his task, and is splitting open the earth with his heat.<br>
Finish your present task and carry home the netted meshes.’<br>
<sup>155</sup> The men obeyed his order and left off their labour.<br>
There was a valley there called Gargaphie, dense with pine trees and sharp cypresses, sacred to Diana of the high-girded tunic, where, in the depths, there is a wooded cave, not fashioned by art.<br>
But ingenious nature had imitated art.<br>
<sup>160</sup> She had made a natural arch out of native pumice and porous tufa.<br>
On the right, a spring of bright clear water murmured into a widening pool, enclosed by grassy banks.<br>
Here the woodland goddess, weary from the chase, would bathe her virgin limbs in the crystal liquid.<br>
<sup>165</sup> Having reached the place, she gives her spear, quiver and unstrung bow to one of the nymphs, her weapon-bearer.<br>
Another takes her robe over her arm, while two unfasten the sandals on her feet.<br>
Then, more skilful than the rest, Theban Crocale gathers the hair strewn around her neck into a knot, while her own is still loose.<br>
<sup>170</sup> Nephele, Hyale, Rhanis, Psecas and Phiale draw water, and pour it over their mistress out of the deep jars.<br>
<sup>175</sup> While Titania is bathing there, in her accustomed place, Cadmus’s grandson, free of his share of the labour, strays with aimless steps through the strange wood, and enters the sacred grove.<br>
So the fates would have it.<br>
As soon as he reaches the cave mouth dampened by the fountain, the naked nymphs, seeing a man’s face, <sup>180</sup> beat at their breasts and filling the whole wood with their sudden outcry, crowd round Diana to hide her with their bodies.<br>
But the goddess stood head and shoulders above all the others.<br>
<sup>185</sup> Diana’s face, seen there, while she herself was naked, was the colour of clouds stained by the opposing shafts of sun, or Aurora’s brightness.<br>
However, though her band of nymphs gathered in confusion around her, she stood turning to one side, and looking back, and wishing she had her arrows to hand.<br>
She caught up a handful of the water that she did have, and threw it in the man’s face.<br>
<sup>190</sup> And as she sprinkled his hair with the vengeful drops she added these words, harbingers of his coming ruin, ‘Now you may tell, if you can tell that is, of having seen me naked!’ Without more threats, she gave the horns of a mature stag to the head she had sprinkled, <sup>195</sup> lengthening his neck, making his ear-tips pointed, changing feet for hands, long legs for arms, and covering his body with a dappled hide.<br>
And then she added fear.<br>
Autonoë’s brave son flies off, marvelling at such swift speed, within himself.<br>
<sup>200</sup> But when he sees his head and horns reflected for certain in the water, he tries to say ‘Oh, look at me!’ but no voice follows.<br>
He groans: that is his voice, and tears run down his altered face.<br>
<sup>205</sup> Only his mind remains unchanged.<br>
What can he do? Shall he return to his home and the royal palace, or lie hidden in the woods? Shame prevents the one, and fear the other.<br>
While he hesitates his dogs catch sight of him.<br>
First ‘Black-foot’, Melampus, and keen-scented Ichnobates, ‘Tracker’, signal him with baying, Ichnobates out of Crete, Melampus, Sparta.<br>
Then others rush at him swift as the wind, ‘Greedy’, <sup>210</sup> Pamphagus, Dorceus, ‘Gazelle’, Oribasos, ‘Mountaineer’, all out of Arcady: powerful ‘Deerslayer’, Nebrophonos, savage Theron, ‘Whirlwind’, and Laelape, ‘Hunter’.<br>
Then swift-footed Pterelas, ‘Wings’, and trail-scenting Agre, ‘Chaser’, fierce Hylaeus, ‘Woody’, lately gored by a boar, the wolf-born Nape, ‘Valley’, Poemenis, the trusty ‘Shepherd’, and <sup>215</sup> Harpyia, ‘Snatcher’, with her two pups.<br>
There is thin-flanked Sicyonian Ladon, ‘Catcher’, Dromas, ‘Runner’, ‘Grinder’, Canache, Sticte ‘Spot’, Tigris ‘Tigress’, Alce, ‘Strong’, and white-haired Leucon, ‘Whitey’, and black-haired Asbolus, ‘Soot’.<br>
Lacon, ‘Spartan’, follows them, a dog well known for his strength, and strong-running Aëllo, ‘Storm’.<br>
<sup>220</sup> Then Thoos, ‘Swift’, and speedy Lycisce, ‘Wolf’, with her brother Cyprius ‘Cyprian’.<br>
Next ‘Grasper’, Harpalos, with a distinguishing mark of white, in the centre of his black forehead, ‘Black’, Melaneus, and Lachne, ‘Shaggy’, with hairy pelt, Labros, ‘Fury’, and Argiodus, ‘White-tooth’, born of a Cretan sire and Spartan dam, keen-voiced Hylactor, ‘Barker’, <sup>225</sup> and others there is no need to name.<br>
The pack of them, greedy for the prey follow over cliffs and crags, and inaccessible rocks, where the way is hard or there is no way at all.<br>
He runs, over the places where he has often chased, flying, alas, from his own hounds.<br>
He longs to shout <sup>230</sup> ‘I am Actæon! Know your own master!’ but words fail him, the air echoes to the baying.<br>
First ‘Black-hair’, Melanchaetes, wounds his back, then ‘Killer’, Theridamas, and Oresitrophos, the ‘Climber’, clings to his shoulder.<br>
They had set out late but outflanked the route by a shortcut <sup>235</sup> over the mountains.<br>
While they hold their master the whole pack gathers and they sink their teeth in his body till there is no place left to wound him.<br>
He groans and makes a noise, not human, but still not one a deer could make, and fills familiar heights with mournful cries.<br>
<sup>240</sup> And on his knees, like a suppliant begging, he turns his wordless head from side to side, as if he were stretching arms out towards them.<br>
Now his friends, unknowingly, urge the ravening crowd of dogs on with their usual cries, looking out for Actæon, and shouting, in emulation, for absent Actæon <sup>245</sup> (he turning his head at the sound of his name) complaining he is not there, and through his slowness is missing the spectacle offered by their prey.<br>
He might wish to be absent it’s true, but he is here: he might wish to see and not feel the fierce doings of his own hounds.<br>
<sup>250</sup> They surround him on every side, sinking their jaws into his flesh, tearing their master to pieces in the deceptive shape of the deer.<br>
They say Diana the Quiver-bearer’s anger was not appeased, until his life had ended in innumerable wounds.
<span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
<p><span style="color: #3d8b3d;">Ovid, “The Metamorphoses”, Book III</span></p>
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