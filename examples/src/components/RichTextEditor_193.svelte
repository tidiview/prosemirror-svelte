<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

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
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/01.arachnee/arachnee_700x520.jpg 700w"></picture><figcaption>Minerva at first ground beats Arachne the Meonian in the center</figcaption>
</figure>

<div class="notices red">
<p>At the <a href="https://en.wikipedia.org/wiki/Grand_Trianon" title="https://en.wikipedia.org/wiki/Grand_Trianon">Grand Trianon</a>, in the Salon des Seigneurs, is a painting painted by <a href="https://en.wikipedia.org/wiki/René-Antoine_Houasse" title="https://en.wikipedia.org/wiki/René-Antoine_Houasse">René-Antoine HOUASSE</a>, <cite>>Minerva and Arachne</cite>>.</p>
<p>It tells the beating of <a href="https://en.wikipedia.org/wiki/Minerva" title="https://en.wikipedia.org/wiki/Minerva">Arachne</a>, woman of Meonia that refused to loose against <a href="https://en.wikipedia.org/wiki/Arachne" title="https://en.wikipedia.org/wiki/Arachne">Minerva</a>, here goddess of weaving, as <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid">Ovid</a> tells in Book VI of the <a href="https://en.wikipedia.org/wiki/Metamorphoses" title="https://en.wikipedia.org/wiki/Metamorphoses">Metamorphosis</a>.</p>
<p>Below is the referencing text.</p>
</div>

<h2 class="red">Arachne according to <cite>The Metamorphoses</cite></h2>

<ol class="doc">
  <li value="1">All this Minerva heard; and she approved</li>
  <li>their songs and their resentment; but her heart</li>
  <li>was brooding thus,
    <p class="conversation">“It is an easy thing<br>
      to praise another, I should do as they:<br>
      no creature of the earth should ever slight<br>
      the majesty that dwells in me,—without<br>
      just retribution.”</p>
    —So her thought was turned</li>
  <li>upon the fortune of <mark>Arachne</mark> — proud,</li>
  <li>who would not ever yield to her the praise</li>
  <li>won by the art of deftly weaving wool,</li>
  <li>a girl who had not fame for place of birth,</li>
  <li>nor fame for birth, but only fame for skill!</li>
  <li>For it was well known that her father dwelt</li>
  <li>in Colophon; where, at his humble trade,</li>
  <li>he dyed in Phocean purples, fleecy wool.</li>
  <li>Her mother, also of the lower class,</li>
  <li>had died. <mark>Arachne</mark> in a mountain town</li>
  <li>by skill had grown so famous in the Land</li>
  <li>of Lydia, that unnumbered curious nymphs</li>
  <li>eager to witness her dexterity,</li>
  <li>deserted the lush vineyards of Timolus;</li>
  <li>or even left the cool and flowing streams</li>
  <li>of bright Pactolus, to admire the cloth,</li>
  <li>or to observe her deftly spinning wool.</li>
  <li>So graceful was her motion then,—if she</li>
  <li>was twisting the coarse wool in little balls,</li>
  <li>or if she teased it with her finger-tips,</li>
  <li>or if she softened the fine fleece, drawn forth</li>
  <li>in misty films, or if she twirled the smooth</li>
  <li>round spindle with her energetic thumb,</li>
  <li>or if with needle she embroidered cloth;—</li>
  <li>in all her motions one might well perceive</li>
  <li>how much Minerva had instructed her:</li>
  <li>but this she ever would deny, displeased</li>
  <li>to share her fame; and said,
    <p class="conversation">“Let her contend<br>
      in art with me; and if her skill prevails,<br>
      I then will forfeit all!”</p>
  </li>
  <li>Minerva heard,</li>
  <li>and came to her, disguised with long grey hair,</li>
  <li>and with a staff to steady her weak limbs.</li>
  <li>She seemed a feeble woman, very old,</li>
  <li>and quavered as she said,
    <p class="conversation">“Old age is not<br>
    the cause of every ill; experience comes<br>
    with lengthened years; and, therefore, you should not<br>
    despise my words. It is no harm in you<br>
    to long for praise of mortals, when<br>
    your nimble hands are spinning the soft wool,—<br>
    but you should not deny Minerva's art—<br>
    and you should pray that she may pardon you,<br>
    for she will grant you pardon if you ask.”</p>
  </li>
  <li><mark>Arachne</mark>, scowling with an evil face.</li>
  <li>Looked at the goddess, as she dropped her thread.</li>
  <li>She hardly could restrain her threatening hand,</li>
  <li>and, trembling in her anger, she replied</li>
  <li>to you, disguised Minerva:</li>
  <li><p class="conversation">“Silly fool,—<br>
    worn out and witless in your palsied age,<br>
    a great age is your great misfortune!— Let<br>
    your daughter and your son's wife—if the Gods<br>
    have blessed you—let them profit by your words;<br>
    within myself, my knowledge is contained<br>
    sufficient; you need not believe that your<br>
    advice does any good; for I am quite<br>
    unchanged in my opinion. Get you gone,—<br>
    advise your goddess to come here herself,<br>
    and not avoid the contest!”</p></li>
  <li>Instantly,</li>
  <li>the goddess said,
    <p class="conversation">“Minerva comes to you!”</p>
  </li>
  <li>And with those brief words, put aside the shape</li>
  <li>of the old woman, and revealed herself,</li>
  <li>Minerva, goddess.</li>
  <li>All the other Nymphs</li>
  <li>and matrons of Mygdonia worshiped her;</li>
  <li>but not <mark>Arachne</mark>, who defiant stood;—</li>
  <li>although at first she flushed up—then went pale—</li>
  <li>then blushed again, reluctant.—So, at first,</li>
  <li>the sky suffuses, as Aurora moves,</li>
  <li>and, quickly when the glorious sun comes up,</li>
  <li>pales into white.</li>
  <li>She even rushed upon</li>
  <li>her own destruction, for she would not give</li>
  <li>from her desire to gain the victory.</li>
  <li>Nor did the daughter of almighty Jove</li>
  <li>decline: disdaining to delay with words,</li>
  <li>she hesitated not.</li>
  <li>And both, at once,</li>
  <li>selected their positions, stretched their webs</li>
  <li>with finest warp, and separated warp with sley.</li>
  <li>The woof was next inserted in the web</li>
  <li>by means of the sharp shuttles, which</li>
  <li>their nimble fingers pushed along, so drawn</li>
  <li>within the warp, and so the teeth notched in</li>
  <li>the moving sley might strike them.—Both, in haste,</li>
  <li>girded their garments to their breasts and moved</li>
  <li>their skilful arms, beguiling their fatigue</li>
  <li>in eager action.</li>
  <li>Myriad tints appeared</li>
  <li>besides the Tyrian purple—royal dye,</li>
  <li>extracted in brass vessels.—As the bow,</li>
  <li>that spans new glory in the curving sky,</li>
  <li>its glittering rays reflected in the rain,</li>
  <li>spreads out a multitude of blended tints,</li>
  <li>in scintillating beauty to the sight</li>
  <li>of all who gaze upon it; — so the threads,</li>
  <li>inwoven, mingled in a thousand tints,</li>
  <li>harmonious and contrasting; shot with gold:</li>
  <li>and there, depicted in those shining webs,</li>
  <li>were shown the histories of ancient days:—</li>
  <li>Minerva worked the Athenian Hill of Mars,</li>
  <li>where ancient Cecrops built his citadel,</li>
  <li>and showed the old contention for the name</li>
  <li>it should be given.—Twelve celestial Gods</li>
  <li>surrounded Jupiter, on lofty thrones;</li>
  <li>and all their features were so nicely drawn,</li>
  <li>that each could be distinguished.—Jupiter</li>
  <li>appeared as monarch of those judging Gods.</li>
  <li>There Neptune, guardian of the sea, was shown</li>
  <li>contending with Minerva. As he struck</li>
  <li>the Rock with his long trident, a wild horse</li>
  <li>sprang forth which he bequeathed to man. He claimed</li>
  <li>his right to name the city for that gift.</li>
  <li>And then she wove a portrait of herself,</li>
  <li>bearing a shield, and in her hand a lance,</li>
  <li>sharp-pointed, and a helmet on her head—</li>
  <li>her breast well-guarded by her Aegis: there</li>
  <li>she struck her spear into the fertile earth,</li>
  <li>from which a branch of olive seemed to sprout,</li>
  <li>pale with new clustered fruits.—And those twelve Gods,</li>
  <li>appeared to judge, that olive as a gift</li>
  <li>surpassed the horse which Neptune gave to man.</li>
  <li>And, so <mark>Arachne</mark>, rival of her fame,</li>
  <li>might learn the folly of her mad attempt,</li>
  <li>from the great deeds of ancient histories,</li>
  <li>and what award presumption must expect,</li>
  <li>Minerva wove four corners with life scenes</li>
  <li>of contest, brightly colored, but of size</li>
  <li>diminutive.</li>
</ol>

<footer>
  <p><span style="color: #b52b27;">Ovid, <cite>The Metamorphoses</cite>, Book VI, verses 1 and followings.</span></p>
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