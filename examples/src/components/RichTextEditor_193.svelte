<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="red">Arachne</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee_700x520.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee_700x520.jpg" alt="Painting of René-Antoine HOUASSE, “Minerve and Arachne”, Grand Trianon, Château de Versailles" title="Painting of René-Antoine HOUASSE, “Minerve and Arachne”, Grand Trianon, Château de Versailles" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee_700x520.jpg 700w"></picture><figcaption>Minerva at first ground beats Arachne the Meonian in the center</figcaption></figure>
<div class="notices red">
<p>At the <a href="https://en.wikipedia.org/wiki/Grand_Trianon" title="https://en.wikipedia.org/wiki/Grand_Trianon">Grand Trianon</a>, in the Salon des Seigneurs, is a painting painted by <a href="https://en.wikipedia.org/wiki/René-Antoine_Houasse" title="https://en.wikipedia.org/wiki/René-Antoine_Houasse">René-Antoine HOUASSE</a>, “Minerva and Arachne”.<br>
It tells the beating of <a href="https://en.wikipedia.org/wiki/Minerva" title="https://en.wikipedia.org/wiki/Minerva">Arachne</a>, woman of Meonia that refused to loose against <a href="https://en.wikipedia.org/wiki/Arachne" title="https://en.wikipedia.org/wiki/Arachne">Minerva</a>, here goddess of weaving, as <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid">Ovid</a> tells in Book VI of the <a href="https://en.wikipedia.org/wiki/Metamorphoses" title="https://en.wikipedia.org/wiki/Metamorphoses">Metamorphosis</a>.<br>
Below is the referencing text.</p>
</div>
<h2 class="red">Arachne</h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
<sup>1</sup>
All this Minerva heard; and she approved<br>
their songs and their resentment; but her heart<br>
was brooding thus, “It is an easy thing<br>
to praise another, I should do as they:<br>
no creature of the earth should ever slight<br>
the majesty that dwells in me,—without<br>
just retribution.”—So her thought was turned<br>
upon the fortune of Arachne — proud,<br>
who would not ever yield to her the praise<br>
won by the art of deftly weaving wool,<br>
a girl who had not fame for place of birth,<br>
nor fame for birth, but only fame for skill!</p>
<p>For it was well known that her father dwelt<br>
in Colophon; where, at his humble trade,<br>
he dyed in Phocean purples, fleecy wool.<br>
Her mother, also of the lower class,<br>
had died. Arachne in a mountain town<br>
by skill had grown so famous in the Land<br>
of Lydia, that unnumbered curious nymphs<br>
eager to witness her dexterity,<br>
deserted the lush vineyards of Timolus;<br>
or even left the cool and flowing streams<br>
of bright Pactolus, to admire the cloth,<br>
or to observe her deftly spinning wool.</p>
<p>So graceful was her motion then,—if she<br>
was twisting the coarse wool in little balls,<br>
or if she teased it with her finger-tips,<br>
or if she softened the fine fleece, drawn forth<br>
in misty films, or if she twirled the smooth<br>
round spindle with her energetic thumb,<br>
or if with needle she embroidered cloth;—</p>
<p>in all her motions one might well perceive<br>
how much Minerva had instructed her:<br>
but this she ever would deny, displeased<br>
to share her fame; and said, “Let her contend<br>
in art with me; and if her skill prevails,<br>
I then will forfeit all!”</p>
<p>Minerva heard,<br>
and came to her, disguised with long grey hair,<br>
and with a staff to steady her weak limbs.<br>
She seemed a feeble woman, very old,<br>
and quavered as she said, “Old age is not<br>
the cause of every ill; experience comes<br>
with lengthened years; and, therefore, you should not<br>
despise my words. It is no harm in you<br>
to long for praise of mortals, when<br>
your nimble hands are spinning the soft wool,—<br>
but you should not deny Minerva's art—<br>
and you should pray that she may pardon you,<br>
for she will grant you pardon if you ask.”</p>
<p>Arachne, scowling with an evil face.<br>
Looked at the goddess, as she dropped her thread.<br>
She hardly could restrain her threatening hand,<br>
and, trembling in her anger, she replied<br>
to you, disguised Minerva:</p>
<p>“Silly fool,—<br>
worn out and witless in your palsied age,<br>
a great age is your great misfortune!— Let<br>
your daughter and your son's wife—if the Gods<br>
have blessed you—let them profit by your words;<br>
within myself, my knowledge is contained<br>
sufficient; you need not believe that your<br>
advice does any good; for I am quite<br>
unchanged in my opinion. Get you gone,—<br>
advise your goddess to come here herself,<br>
and not avoid the contest!”</p>
<p>Instantly,<br>
the goddess said, “Minerva comes to you!”<br>
And with those brief words, put aside the shape<br>
of the old woman, and revealed herself,<br>
Minerva, goddess.</p>
<p>All the other Nymphs<br>
and matrons of Mygdonia worshiped her;<br>
but not Arachne, who defiant stood;—<br>
although at first she flushed up—then went pale—<br>
then blushed again, reluctant.—So, at first,<br>
the sky suffuses, as Aurora moves,<br>
and, quickly when the glorious sun comes up,<br>
pales into white.</p>
<p>She even rushed upon<br>
her own destruction, for she would not give<br>
from her desire to gain the victory.<br>
Nor did the daughter of almighty Jove<br>
decline: disdaining to delay with words,<br>
she hesitated not.</p>
<p>And both, at once,<br>
selected their positions, stretched their webs<br>
with finest warp, and separated warp with sley.<br>
The woof was next inserted in the web<br>
by means of the sharp shuttles, which<br>
their nimble fingers pushed along, so drawn<br>
within the warp, and so the teeth notched in
the moving sley might strike them.—Both, in haste,<br>
girded their garments to their breasts and moved<br>
their skilful arms, beguiling their fatigue<br>
in eager action.</p>
<p>Myriad tints appeared<br>
besides the Tyrian purple—royal dye,<br>
extracted in brass vessels.—As the bow,<br>
that spans new glory in the curving sky,<br>
its glittering rays reflected in the rain,<br>
spreads out a multitude of blended tints,<br>
in scintillating beauty to the sight<br>
of all who gaze upon it; — so the threads,<br>
inwoven, mingled in a thousand tints,<br>
harmonious and contrasting; shot with gold:<br>
and there, depicted in those shining webs,<br>
were shown the histories of ancient days:—</p>
<p>Minerva worked the Athenian Hill of Mars,<br>
where ancient Cecrops built his citadel,<br>
and showed the old contention for the name<br>
it should be given.—Twelve celestial Gods<br>
surrounded Jupiter, on lofty thrones;<br>
and all their features were so nicely drawn,<br>
that each could be distinguished.—Jupiter<br>
appeared as monarch of those judging Gods.</p>
<p>There Neptune, guardian of the sea, was shown<br>
contending with Minerva. As he struck<br>
the Rock with his long trident, a wild horse<br>
sprang forth which he bequeathed to man. He claimed<br>
his right to name the city for that gift.</p>
<p>And then she wove a portrait of herself,<br>
bearing a shield, and in her hand a lance,<br>
sharp-pointed, and a helmet on her head—<br>
her breast well-guarded by her Aegis: there<br>
she struck her spear into the fertile earth,<br>
from which a branch of olive seemed to sprout,<br>
pale with new clustered fruits.—And those twelve Gods,<br>
appeared to judge, that olive as a gift<br>
surpassed the horse which Neptune gave to man.</p>
<p>And, so Arachne, rival of her fame,<br>
might learn the folly of her mad attempt,<br>
from the great deeds of ancient histories,<br>
and what award presumption must expect,<br>
Minerva wove four corners with life scenes<br>
of contest, brightly colored, but of size<br>
diminutive.
<span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span>  </p>
<p><span style="color: #b52b27;">From Ovid, “The Metamorphosis”, Book VI</span></p>
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