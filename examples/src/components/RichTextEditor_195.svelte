<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="green">Iris and Morpheus</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.jpg" title="Painting of René-Antoine HOUASSE, «Iris and Morpheus», Grand Trianon, Palace of Versailles" alt="Painting of René-Antoine HOUASSE, «Iris and Morpheus», Grand Trianon, Palace of Versailles" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.jpg 700w"></picture><figcaption>Iris, messenger of Juno, enters in the cave of Sleep</figcaption><map name="iris" id="iris"><area title="Iris" alt="Iris" id="area_iris" href="#iris" shape="poly" coords="50, 599, 69, 555, 109, 529, 166, 502, 167, 448, 218, 398, 262, 303, 316, 297, 360, 247, 354, 220, 334, 229, 326, 255, 262, 279, 248, 231, 251, 202, 242, 188, 220, 194, 202, 107, 170, 176, 143, 153, 116, 163, 32, 108, 29, 131, 53, 184, 87, 223, 103, 292, 81, 327, 77, 360, 57, 374, 52, 391, 60, 397, 69, 398, 71, 414, 60, 428, 47, 418, 28, 421, 18, 432, 19, 476, 37, 495, 33, 517, 43, 533, 61, 530, 54, 540, 40, 542, 32, 571, 33, 602"><area title="God of Sleep" alt="God of Sleep" id="area_morpheus" href="#morpheus" shape="poly" coords="195, 661, 277, 634, 324, 631, 347, 645, 366, 712, 375, 718, 420, 675, 433, 655, 521, 641, 542, 621, 571, 614, 600, 593, 630, 607, 683, 592, 680, 573, 657, 567, 622, 567, 611, 552, 583, 540, 579, 512, 590, 497, 580, 481, 513, 452, 481, 453, 473, 466, 476, 515, 389, 469, 267, 447, 273, 473, 330, 503, 378, 512, 405, 529, 435, 563, 387, 546, 343, 548, 301, 556, 259, 545, 254, 555, 279, 575, 296, 597, 237, 624, 198, 630, 185, 645"></map></figure>
<div class="notices green">
<p>In the Salon de Famille de Louis-Philippe of the <a href="https://en.wikipedia.org/wiki/Grand_Trianon" title="https://en.wikipedia.org/wiki/Grand Trianon">Grand Trianon</a> in Versailles a painting from <a href="https://en.wikipedia.org/wiki/René-Antoine_Houasse" title="https://en.wikipedia.org/wiki/René-Antoine Houasse">René-Antoine Houasse</a>, “Morpheus awakening as Iris draws near” (also “Iris and Morpheus”) can be seen.<br>
Based on a part of Book XI of <a href="https://en.wikipedia.org/wiki/Metamorphoses" title="https://en.wikipedia.org/wiki/Metamorphoses">The Metamorphoses</a> written by <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid">Ovid</a>, it represents the particular moment when <a href="https://en.wikipedia.org/wiki/Iris_(mythology)" title="https://en.wikipedia.org/wiki/Iris_(mythology)">Iris</a>, messager of <a href="https://en.wikipedia.org/wiki/Juno_(mythology)" title="https://en.wikipedia.org/wiki/Juno_(mythology)">Juno</a> enters the cave of <a href="https://en.wikipedia.org/wiki/Hypnos" title="https://en.wikipedia.org/wiki/Hypnos">the Sleep</a> to order to him to make <a href="https://en.wikipedia.org/wiki/Alcyone" title="https://en.wikipedia.org/wiki/Alcyone">Alcynoe</a> dream. </p>
</div>
<h2 id="iris-1" class="green">Iris according to “The Metamorphoses”</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>583</sup></td>
<td>but Juno could not long accept as hers<br>
these supplications on behalf of one<br>
then dead; and that she might persuade Halcyone<br>
to turn her death-polluted hands away<br>
from hallowed altars, Juno said in haste,<br>
“O, Iris, best of all my messengers,<br>
go quickly to the dreadful court of Sleep,<br>
and in my name command him to despatch<br>
a dream in the shape of Ceyx, who is dead,<br>
and tell Halcyone the woeful truth.”</td></tr>
<tr><td></td>
<td>So she commanded.—Iris instantly<br>
assumed a garment of a thousand tints;<br>
and as she marked the high skies with her arch,<br>
went swiftly thence as ordered, to the place<br>
where Sleep was then concealed beneath a rock.</td></tr>
<tr><td></td>
<td>Near the Cimmerian Land there is a cave,<br>
with a long entrance, in a hallowed mountain,<br>
the home of slothful Sleep. To that dark cave<br>
the Sun, when rising or in middle skies,<br>
or setting, never can approach with light.</td></tr>
<tr><td></td>
<td>There dense fogs, mingled with the dark, exhale<br>
darkness from the black soil—and all that place<br>
is shadowed in a deep mysterious gloom.<br>
No wakeful bird with visage crested high<br>
calls forth the morning's beauty in clear notes;<br>
nor do the watchful dogs, more watchful geese,</td></tr>
<tr><td><sup>600</sup></td>
<td>nor wild beasts, cattle, nor the waving trees,<br>
make sound or whisper; and the human voice<br>
is never heard there—silent Rest is there.<br>
But, from the bottom of a rock beneath,<br>
Lethean waters of a stream ooze forth,<br>
sounds of a rivulet, which trickle with<br>
soft murmuring amid the pebbles and<br>
invite soft sleep. Before the cavern doors<br>
most fertile poppies and a wealth of herbs<br>
bloom in abundance, from the juice of which<br>
the humid night-hours gather sleep and spread<br>
it over darkened Earth. No door is in<br>
that cavern-home and not a hinge's noise<br>
nor guarding porter's voice disturbs the calm.</td></tr>
<tr><td></td>
<td>But in the middle is a resting-couch,<br>
raised high on night-black ebony and soft<br>
with feathered cushions, all jet black, concealed<br>
by a rich coverlet as dark as night,<br>
on which the god of sleep, dissolved in sloth<br>
lies with unmoving limbs. Around him there<br>
in all directions, unsubstantial dreams<br>
recline in imitation of all shapes—<br>
as many as the uncounted ears of corn<br>
at harvest—as the myriad leaves of trees—<br>
or tiny sand grains spread upon the shore.<br>
As soon as Iris entered that dread gloom,<br>
she pushed aside the visions in her way<br>
with her fair glowing hands; and instantly,<br>
that sacred cavern of the god of Sleep<br>
was all illuminated with the glow<br>
and splendor of her garment.—Out of himself<br>
the god with difficulty lifted up<br>
his lanquid eyes. From this small sign of life<br>
relapsing many times to languid sloth,<br>
while nodding, with his chin he struck his breast<br>
again and again. At last he roused himself<br>
from gloom and slumber; and, while raised upon<br>
his elbow, he enquired of Iris why<br>
she came to him.—He knew her by her name.<br>
She answered him,<br>
“O, Sleep, divine repose<br>
of all things! Gentlest of the deities!<br>
Peace to the troubled mind, from which you drive<br>
the cares of life, restorer of men's strength<br>
when wearied with the toils of day, command<br>
a vision that shall seem the actual form<br>
of royal Ceyx to visit Trachin famed<br>
for Hercules and tell Halcyone<br>
his death by shipwreck. It is Juno's wish.”</tr></td>
<tr><td><<sup>630</sup></td>
<td>Iris departed after this was said.<br>
For she no longer could endure the effect<br>
of slumber-vapor; and as soon as she<br>
knew sleep was creeping over her tired limbs<br>
she flew from there—and she departed by<br>
the rainbow, over which she came before.</td></tr>
</tbody>
</table>
<p><span style="color: #3d8b3d;">Ovid, “The Metamorphoses”, Book XI, verses 583 and followings.</span></p>
<div class="notices green">
<h4 id="note" class="blue">Note:</h4>
<p>The work of <a href="https://en.wikipedia.org/wiki/René-Antoine_Houasse" title="https://en.wikipedia.org/wiki/René-Antoine Houasse">René-Antoine Houasse</a> has been named in the XVII<sup style="color:#3d8b3d;">th</sup> century «Iris et Morphée».<br>
We keep this denomination for identification, while the scene represented shows more likely <a href="https://en.wikipedia.org/wiki/Iris_(mythology)" title="https://en.wikipedia.org/wiki/Iris_(mythology)">Iris</a> and <a href="https://en.wikipedia.org/wiki/Hypnos" title="https://en.wikipedia.org/wiki/Hypnos">the Sleep</a>, also known as Hypnos. Morpheus is his son.<br>
After receiving Iris's order, his father appoints him to go and carry out Iris's mission, as the rest of the story shows.</p>
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