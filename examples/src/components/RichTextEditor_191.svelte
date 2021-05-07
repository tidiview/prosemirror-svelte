<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:160 JA:128  -->
<article>

<hgroup>
<h1 class="red">Latona</h1>
<h2 class="red">in the gardens of the Palace of Versailles</h2>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone_700x525.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone_700x525.jpg" alt="The Latona Fountain in the Garden of the Palace of Versailles" title="The Latona Fountain in the Garden of the Palace of Versailles" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone_700x525.jpg 700w"></picture><figcaption>Lycian peasants transformed into mud-pool animals by Latona's anger<br><q cite="#latona">The curse as soon as uttered took effect, and every one of them began to swim beneath the water, and to leap and plunge deep in the pool</q>, <cite>The Metamorphoses</cite>, Book <abbr title="six">VI</abbr>, verses 333 to 381.</figcaption>
</figure>

<div class="notices red">
<p class="conversation">«one has to go straight to the top of Latona and make a break to consider Latona and the Lezards, the ramps, <ruby lang="en">the&nbsp;Royal&nbsp;Alley<rt lang="fr" style="color:#b52b27;font-size: 60%;">l&#39Allée&nbsp;Royale</rt></ruby>, <ruby lang="en">the&nbsp;Apollo<rt lang="fr" style="color:#b52b27;font-size: 60%;">l&#39Apollon</rt></ruby>, the canal then turn around back to see the Parterre and the château.»</p>
<p>As <a href="https://en.wikipedia.org/wiki/Louis_XIV_of_France" title="https://en.wikipedia.org/wiki/Louis XIV of France">Louis <abbr title="the fourteenth">XIV</abbr></a> wrote in his “<ruby lang="en">Way<rp>(</rp><rt lang="fr">Manière</rt><rp>)</rp></ruby> <ruby lang="en">to<rp>(</rp><rt lang="fr">de</rt><rp>)</rp></ruby> <ruby lang="en">present<rp>(</rp><rt lang="fr">montrer</rt><rp>)</rp></ruby> <ruby lang="en">the<rp>(</rp><rt lang="fr">les</rt><rp>)</rp></ruby> <ruby lang="en">Gardens<rp>(</rp><rt lang="fr">jardins</rt><rp>)</rp></ruby> <ruby lang="en">of<rp>(</rp><rt lang="fr">de</rt><rp>)</rp></ruby> <ruby lang="en">Versailles<rp>(</rp><rt lang="fr">Versailles</rt><rp>)</rp></ruby>”, from the palace western facade, along its central axe, after the <ruby lang="en">the<rp>(</rp><rt lang="fr">le</rt><rp>)</rp></ruby> <ruby lang="en">Ornamental&nbsp;Pool<rp>(</rp><rt lang="fr">&nbsp;Parterre&nbsp;d&#39Eau</rt><rp>)</rp></ruby>, enjoying the opening change of the horizon line, <ruby lang="en">the<rp>(</rp><rt lang="fr">le</rt><rp>)</rp></ruby> <ruby lang="en">Latona&nbsp;Fountain&nbsp;and&nbsp;Parterre<rp>(</rp><rt lang="fr">Bassin&nbsp;et&nbsp;le&nbsp;Parterre&nbsp;de&nbsp;Latone</rt><rp>)</rp></ruby> appears。</p>
<p>Here is a fountain inspired by the opposition between <a href="https://en.wikipedia.org/wiki/Leto" title="https://en.wikipedia.org/wiki/Leto">Latona</a>, that was to give birth, despite the persecution of goddess <a href="https://en.wikipedia.org/wiki/Juno_(mythology)" title="https://en.wikipedia.org/wiki/Juno_(mythology)">Juno</a>, to twins, <a href="https://en.wikipedia.org/wiki/Apollo" title="https://en.wikipedia.org/wiki/Apollo">Apollo</a>, god of the sun, <a href="https://en.wikipedia.org/wiki/Diana_(mythology)" title="https://en.wikipedia.org/wiki/Diana_(mythology)">Diana</a>, goddess of the moon and the <a href="https://en.wikipedia.org/wiki/Lycia" title="https://en.wikipedia.org/wiki/Lycia">Lycian</a> peasants.</p>
<p>With the text written by <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid">Ovid</a> in <a href="https://en.wikipedia.org/wiki/Metamorphoses" title="https://en.wikipedia.org/wiki/Metamorphoses"><cite>The Metamorphoses</cite></a>, this opposition should probably comes closer to us.</p>
</div>

<h2 id="latona" class="red">Latona according to text of Book <abbr title="six">VI</abbr> of the <cite>The Metamorphoses</cite></h2>

<ol class="doc">
  <li value="333">There <mark>Latona</mark>, as she leaned<li>
  <li>against a palm-tree—and against the tree<li>
  <li>most sacred to Minerva, brought forth twins,<li>
  <li>although their harsh step-mother, Juno, strove<li>
  <li>to interfere.—And from the island forced<li>
  <li>to fly by jealous Juno, on her breast<li>
  <li>she bore her children, twin Divinities.</li>

  <li class="top-space">At last, outwearied with the toil, and parched<li>
  <li>with thirst—long-wandering in those heated days<li>
  <li>over the arid land of Lycia, where<li>
  <li>was bred the dire Chimaera— at the time<li>
  <li>her parching breasts were drained, she saw this pool<li>
  <li>of crystal water, shimmering in the vale.</li>

  <li class="top-space">Some countrymen were there to gather reeds,<li>
  <li>and useful osiers, and the bulrush, found<li>
  <li>with sedge in fenny pools. To them approached<li>
  <li><mark>Latona</mark>, and she knelt upon the merge<li>
  <li>to cool her thirst, with some refreshing water.<li>
  <li>But those clowns forbade her and the goddess cried,<li>
  <li>as they so wickedly opposed her need:</li>

  <li class="top-space"><p class="conversation">“Why do you so resist my bitter thirst?</p><li>
  <li><p class="conversation">The use of water is the sacred right</p><li>
  <li><p class="conversation">of all mankind, for Nature has not made</p><li>
  <li><p class="conversation">the sun and air and water, for the sole</p><li>
  <li><p class="conversation">estate of any creature; and to Her</p><li>
  <li><p class="conversation">kind bounty I appeal, although of you</p><li>
  <li><p class="conversation">I humbly beg the use of it. Not here</p><li>
  <li><p class="conversation">do I intend to bathe my wearied limbs.</p><li>
  <li><p class="conversation">I only wish to quench an urgent thirst,</p><li>
  <li><p class="conversation">for, even as I speak, my cracking lips</p><li>
  <li><p class="conversation">and mouth so parched, almost deny me words.</p><li>
  <li><p class="conversation">A drink of water will be like a draught</p><li>
  <li><p class="conversation">of nectar, giving life; and I shall owe</p><li>
  <li><p class="conversation">to you the bounty and my life renewed.—</p><li>
  <li><p class="conversation">ah, let these tender infants, whose weak arms</p><li>
  <li><p class="conversation">implore you from my bosom, but incline</p><li>
  <li><p class="conversation">your hearts to pity!”</p> And just as she spoke,<li>
  <li>it chanced the children did stretch out their arms<li>
  <li>and who would not be touched to hear such words,<li>
  <li>as spoken by this goddess, and refuse?</li>

  <li class="top-space">But still those clowns persisted in their wrong<li>
  <li>against the goddess; for they hindered her,<li>
  <li>and threatened with their foul, abusive tongues<li>
  <li>to frighten her away—and, worse than all,<li>
  <li>they even muddied with their hands and feet<li>
  <li>the clear pool; forcing the vile, slimy dregs<li>
  <li>up from the bottom, in a spiteful way,<li>
  <li>by jumping up and down.—Enraged at this,<li>
  <li>she felt no further thirst, nor would she deign<li>
  <li>to supplicate again; but, feeling all<li>
  <li>the outraged majesty of her high state,<li>
  <li>she raised her hands to Heaven, and exclaimed,<li>
  <li><p class="conversation">“Forever may you live in that mud-pool!”</p><li>

  <li class="top-space">The curse as soon as uttered took effect,<li>
  <li>and every one of them began to swim<li>
  <li>beneath the water, and to leap and plunge<li>
  <li>deep in the pool.—Now, up they raise their heads,<li>
  <li>now swim upon the surface, now they squat<li>
  <li>themselves around the marshy margent, now<li>
  <li>they plump again down to the chilly deeps.<li>
  <li>And, ever and again, with croaking throats,<li>
  <li>indulge offensive strife upon the banks,<li>
  <li>or even under water, boom abuse.</li>

  <li class="top-space">Their ugly voices cause their bloated necks<li>
  <li>to puff out; and their widened jaws are made<li>
  <li>still wider in the venting of their spleen.</li>

  <li class="top-space">Their backs, so closely fastened to their heads,<li>
  <li>make them appear as if their shrunken necks<li>
  <li>have been cut off. Their backbones are dark green;<li>
  <li>white are their bellies, now their largest part.—</li>

  <li class="top-space">Forever since that time, the foolish frogs<li>
  <li value="381">muddy their own pools, where they leap and dive.</li>
</ol>

<footer>
  <p><span style="color: #b52b27;">Ovid, <cite>The Metamorphoses</cite>, Book <abbr title="six">VI</abbr>, verses 333 to 381.</span></p>
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