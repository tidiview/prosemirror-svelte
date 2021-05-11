<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:164 JA:132  -->
<article>

<hgroup>
<h1 class="green">Iris and Morpheus</h1>
<h2 class="green">at the Grand Trianon</h2>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.jpg" title="Painting of René-Antoine HOUASSE, «Iris and Morpheus», Grand Trianon, Palace of Versailles" alt="Painting of René-Antoine HOUASSE, «Iris and Morpheus», Grand Trianon, Palace of Versailles" class="class-diane-img" width="700" height="951" loading="eager" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/03.iris/iris_700x951.jpg 700w"></picture><figcaption>Iris, messenger of Juno, enters in the cave of Sleep,<br><q cite="#iris-1">and instantly, that sacred cavern of the god of Sleep was all illuminated with the glow and splendor of her garment</q>, <cite>The Metamorphoses</cite>, Book <abbr title="eleven">XI</abbr>, verse 616.</figcaption><map name="iris" id="iris"><area title="Iris" alt="Iris" id="area_iris" href="#iris" shape="poly" coords="50, 599, 69, 555, 109, 529, 166, 502, 167, 448, 218, 398, 262, 303, 316, 297, 360, 247, 354, 220, 334, 229, 326, 255, 262, 279, 248, 231, 251, 202, 242, 188, 220, 194, 202, 107, 170, 176, 143, 153, 116, 163, 32, 108, 29, 131, 53, 184, 87, 223, 103, 292, 81, 327, 77, 360, 57, 374, 52, 391, 60, 397, 69, 398, 71, 414, 60, 428, 47, 418, 28, 421, 18, 432, 19, 476, 37, 495, 33, 517, 43, 533, 61, 530, 54, 540, 40, 542, 32, 571, 33, 602"><area title="God of Sleep" alt="God of Sleep" id="area_morpheus" href="#morpheus" shape="poly" coords="195, 661, 277, 634, 324, 631, 347, 645, 366, 712, 375, 718, 420, 675, 433, 655, 521, 641, 542, 621, 571, 614, 600, 593, 630, 607, 683, 592, 680, 573, 657, 567, 622, 567, 611, 552, 583, 540, 579, 512, 590, 497, 580, 481, 513, 452, 481, 453, 473, 466, 476, 515, 389, 469, 267, 447, 273, 473, 330, 503, 378, 512, 405, 529, 435, 563, 387, 546, 343, 548, 301, 556, 259, 545, 254, 555, 279, 575, 296, 597, 237, 624, 198, 630, 185, 645"></map>
</figure>

  <div class="notices green">
  <p>In the Salon de Famille de Louis-Philippe of the <a href="https://en.wikipedia.org/wiki/Grand_Trianon" title="https://en.wikipedia.org/wiki/Grand Trianon">Grand Trianon</a> in Versailles a painting from <a href="https://en.wikipedia.org/wiki/René-Antoine_Houasse" title="https://en.wikipedia.org/wiki/René-Antoine Houasse">René-Antoine Houasse</a>, <cite>Morpheus awakening as Iris draws near</cite> (also <cite>Iris and Morpheus</cite>) can be seen.</p>
  <p>Based on a part of Book <abbr title="eleven">XI</abbr> of <a href="https://en.wikipedia.org/wiki/Metamorphoses" title="https://en.wikipedia.org/wiki/Metamorphoses">The Metamorphoses</a> written by <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid">Ovid</a>, it represents the particular moment when <a href="https://en.wikipedia.org/wiki/Iris_(mythology)" title="https://en.wikipedia.org/wiki/Iris_(mythology)">Iris</a>, messager of <a href="https://en.wikipedia.org/wiki/Juno_(mythology)" title="https://en.wikipedia.org/wiki/Juno_(mythology)">Juno</a> enters the cave of <a href="https://en.wikipedia.org/wiki/Hypnos" title="https://en.wikipedia.org/wiki/Hypnos">the Sleep</a> to order to him to make <a href="https://en.wikipedia.org/wiki/Alcyone" title="https://en.wikipedia.org/wiki/Alcyone">Alcynoe</a> dream.</p>
  </div>

<h2 id="iris-1" class="green">Iris according to text of Book <abbr title="eleven">XI</abbr> of <cite>The Metamorphoses</cite></h2>

<ol class="doc">
  <li value="583">but Juno could not long accept as hers</li>
  <li>these supplications on behalf of one</li>
  <li>then dead; and that she might persuade Halcyone</li>
  <li>to turn her death-polluted hands away</li>
  <li>
    from hallowed altars, Juno said in haste,
    <p class="conversation">“O, Iris, best of all my messengers,</p>
  </li>
  <li>
    <p class="conversation">go quickly to the dreadful court of Sleep,</p>
  </li>
  <li>
    <p class="conversation">and in my name command him to despatch</p>
  </li>
  <li>
    <p class="conversation">a dream in the shape of Ceyx, who is dead,</p>
  </li>
  <li>
    <p class="conversation">and tell Halcyone the woeful truth.”</p>
  </li>

  <li class="top-space">So she commanded.—Iris instantly</li>
  <li>assumed a garment of a thousand tints;</li>
  <li>and as she marked the high skies with her arch,</li>
  <li>went swiftly thence as ordered, to the place</li>
  <li>where Sleep was then concealed beneath a rock.</li>

  <li class="top-space">Near the Cimmerian Land there is a cave,</li>
  <li>with a long entrance, in a hallowed mountain,</li>
  <li>the home of slothful Sleep. To that dark cave</li>
  <li>the Sun, when rising or in middle skies,</li>
  <li>or setting, never can approach with light.</li>
  <li>There dense fogs, mingled with the dark, exhale</li>
  <li>darkness from the black soil—and all that place</li>
  <li>is shadowed in a deep mysterious gloom.</li>

  <li class="top-space">No wakeful bird with visage crested high</li>
  <li>calls forth the morning's beauty in clear notes;</li>
  <li>nor do the watchful dogs, more watchful geese,</td></tr>
  <li value="600">nor wild beasts, cattle, nor the waving trees,</li>
  <li>make sound or whisper; and the human voice</li>
  <li>is never heard there—silent Rest is there.</li>
  <li>But, from the bottom of a rock beneath,</li>
  <li>Lethean waters of a stream ooze forth,</li>
  <li>sounds of a rivulet, which trickle with</li>
  <li>soft murmuring amid the pebbles and</li>
  <li>invite soft sleep. Before the cavern doors</li>
  <li>most fertile poppies and a wealth of herbs</li>
  <li>bloom in abundance, from the juice of which</li>
  <li>the humid night-hours gather sleep and spread</li>
  <li>it over darkened Earth. No door is in</li>
  <li>that cavern-home and not a hinge's noise</li>
  <li>nor guarding porter's voice disturbs the calm.</li>
  <li>But in the middle is a resting-couch,</li>
  <li>raised high on night-black ebony and soft</li>
  <li>with feathered cushions, all jet black, concealed</li>
  <li>by a rich coverlet as dark as night,</li>
  <li>on which the god of sleep, dissolved in sloth</li>
  <li>lies with unmoving limbs. Around him there</li>
  <li>in all directions, unsubstantial dreams</li>
  <li>recline in imitation of all shapes—</li>
  <li>as many as the uncounted ears of corn</li>
  <li>at harvest—as the myriad leaves of trees—</li>
  <li>or tiny sand grains spread upon the shore.</li>

  <li value="616" class="top-space">As soon as Iris entered that dread gloom,</li>
  <li>she pushed aside the visions in her way</li>
  <li>with her fair glowing hands; and instantly,</li>
  <li>that sacred cavern of the god of Sleep</li>
  <li>was all illuminated with the glow</li>
  <li>and splendor of her garment.—Out of himself</li>
  <li>the god with difficulty lifted up</li>
  <li>his lanquid eyes. From this small sign of life</li>
  <li>relapsing many times to languid sloth,</li>
  <li>while nodding, with his chin he struck his breast</li>
  <li>again and again. At last he roused himself</li>
  <li>from gloom and slumber; and, while raised upon</li>
  <li>his elbow, he enquired of Iris why</li>
  <li>she came to him.—He knew her by her name.</li>

  <li class="top-space">She answered him,
    <p class="conversation">“O, Sleep, divine repose</p>
  </li>
  <li>
    <p class="conversation">of all things! Gentlest of the deities!</p>
  </li>
  <li>
    <p class="conversation">Peace to the troubled mind, from which you drive</p>
  </li>
  <li>
    <p class="conversation">the cares of life, restorer of men's strength</p>
  </li>
  <li>
    <p class="conversation">when wearied with the toils of day, command</p>
  </li>
  <li>
    <p class="conversation">a vision that shall seem the actual form</p>
  </li>
  <li>
    <p class="conversation">of royal Ceyx to visit Trachin famed</p>
  </li>
  <li>
    <p class="conversation">for Hercules and tell Halcyone</p>
  <li>
    <p class="conversation">his death by shipwreck. It is Juno's wish.”</p>
  </li>

  <li value="630" class="top-space">Iris departed after this was said.</li>
  <li>For she no longer could endure the effect</li>
  <li>of slumber-vapor; and as soon as she</li>
  <li>knew sleep was creeping over her tired limbs</li>
  <li>she flew from there—and she departed by</li>
  <li value="632">the rainbow, over which she came before.</li>
</ol>

<footer>
  <p><span style="color: #3d8b3d;">Ovid, <cite>The Metamorphoses</cite>, Book <abbr title="eleven">XI</abbr>, verses 583 to 632.</span></p>
</footer>

<aside>
  <div class="notices green">
  <h4 id="note" class="blue">Note:</h4>
  <p>The work of <a href="https://en.wikipedia.org/wiki/René-Antoine_Houasse" title="https://en.wikipedia.org/wiki/René-Antoine Houasse">René-Antoine Houasse</a> has been named in french in the <abbr title="seventeenth">XVII<sup style="color:#3d8b3d;">th</sup></abbr> century <cite>Iris et Morphée</cite>, presently and offically <cite>Morpheus awakening as Iris draws near</cite>.</p>
  <p>We keep this denomination for identification, while the scene represented shows more likely <a href="https://en.wikipedia.org/wiki/Iris_(mythology)" title="https://en.wikipedia.org/wiki/Iris_(mythology)">Iris</a> and <a href="https://en.wikipedia.org/wiki/Hypnos" title="https://en.wikipedia.org/wiki/Hypnos">the Sleep</a>, also known as Hypnos. Morpheus is his son. It should be <cite>the Sleep awakening as Iris draws near</cite>.</p>
  <p>After receiving Iris's order, his father appoints him to go and carry out Iris's mission, as the rest of the story shows.</p>
  </div>
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