<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="red">Latona</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone_700x525.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone_700x525.jpg" alt="The Latona Fountain in the Garden of the Palace of Versailles" title="The Latona Fountain in the Garden of the Palace of Versailles" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone_700x525.jpg 700w"></picture><figcaption>Lycian peasants transformed into mud-pool animals by Latona's anger</figcaption></figure>
<div class="notices red">
<p><cite style="font-size:1.2rem;text-align: center;">« one has to go straight to the top of Latona and make a break to consider Latona and the Lezards, the ramps, <ruby lang="en">the&nbsp;Royal&nbsp;Alley<rt lang="fr" style="color:#b52b27;font-size: 60%;">l&#39Allée&nbsp;Royale</rt></ruby>, <ruby lang="en">the&nbsp;Apollo<rt lang="fr" style="color:#b52b27;font-size: 60%;">l&#39Apollon</rt></ruby>, the canal then turn around back to see the Parterre and the château. »</cite>
As <a href="https://en.wikipedia.org/wiki/Louis_XIV_of_France" title="https://en.wikipedia.org/wiki/Louis XIV of France">Louis XIV</a> wrote in his “<ruby lang="en">Way<rp>(</rp><rt lang="fr">Manière</rt><rp>)</rp></ruby> <ruby lang="en">to<rp>(</rp><rt lang="fr">de</rt><rp>)</rp></ruby> <ruby lang="en">present<rp>(</rp><rt lang="fr">montrer</rt><rp>)</rp></ruby> <ruby lang="en">the<rp>(</rp><rt lang="fr">les</rt><rp>)</rp></ruby> <ruby lang="en">Gardens<rp>(</rp><rt lang="fr">jardins</rt><rp>)</rp></ruby> <ruby lang="en">of<rp>(</rp><rt lang="fr">de</rt><rp>)</rp></ruby> <ruby lang="en">Versailles<rp>(</rp><rt lang="fr">Versailles</rt><rp>)</rp></ruby>”, from the palace western facade, along its central axe, after the <ruby lang="en">the<rp>(</rp><rt lang="fr">le</rt><rp>)</rp></ruby> <ruby lang="en">Ornamental&nbsp;Pool<rp>(</rp><rt lang="fr">&nbsp;Parterre&nbsp;d&#39Eau</rt><rp>)</rp></ruby>, enjoying the opening change of the horizon line, <ruby lang="en">the<rp>(</rp><rt lang="fr">le</rt><rp>)</rp></ruby> <ruby lang="en">Latona&nbsp;Fountain&nbsp;and&nbsp;Parterre<rp>(</rp><rt lang="fr">Bassin&nbsp;et&nbsp;le&nbsp;Parterre&nbsp;de&nbsp;Latone</rt><rp>)</rp></ruby> appears。<br>
Here is a fountain inspired by the opposition between <a href="https://en.wikipedia.org/wiki/Leto" title="https://en.wikipedia.org/wiki/Leto">Latona</a>, that was to give birth, despite the persecution of goddess <a href="https://en.wikipedia.org/wiki/Juno_(mythology)" title="https://en.wikipedia.org/wiki/Juno_(mythology)">Juno</a>, to twins, <a href="https://en.wikipedia.org/wiki/Apollo" title="https://en.wikipedia.org/wiki/Apollo">Apollo</a>, god of the sun, <a href="https://en.wikipedia.org/wiki/Diana_(mythology)" title="https://en.wikipedia.org/wiki/Diana_(mythology)">Diana</a>, goddess of the moon and the <a href="https://en.wikipedia.org/wiki/Lycia" title="https://en.wikipedia.org/wiki/Lycia">Lycian</a> peasants.<br>
With the text written by <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid">Ovid</a> in “<a href="https://en.wikipedia.org/wiki/Metamorphoses" title="https://en.wikipedia.org/wiki/Metamorphoses">The Metamorphoses</a>”, this opposition should probably comes closer to us.</p>
</div>
<h2 class="red">Latona according to “The Metamorphoses”</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>333</sup></td>
<td>There Latona, as she leaned<br>
against a palm-tree—and against the tree<br>
most sacred to Minerva, brought forth twins,<br>
although their harsh step-mother, Juno, strove<br>
to interfere.—And from the island forced<br>
to fly by jealous Juno, on her breast<br>
she bore her children, twin Divinities.</td></tr>
<tr><td></td><td>At last, outwearied with the toil, and parched<br>
with thirst—long-wandering in those heated days<br>
over the arid land of Lycia, where<br>
was bred the dire Chimaera— at the time<br>
her parching breasts were drained, she saw this pool<br>
of crystal water, shimmering in the vale.</td></tr>
<tr><td></td><td>Some countrymen were there to gather reeds,<br>
and useful osiers, and the bulrush, found<br>
with sedge in fenny pools. To them approached<br>
Latona, and she knelt upon the merge<br>
to cool her thirst, with some refreshing water.<br>
But those clowns forbade her and the goddess cried,<br>
as they so wickedly opposed her need:</td></tr>
<tr><td></td><td>“Why do you so resist my bitter thirst?<br>
The use of water is the sacred right<br>
of all mankind, for Nature has not made<br>
the sun and air and water, for the sole<br>
estate of any creature; and to Her<br>
kind bounty I appeal, although of you<br>
I humbly beg the use of it. Not here<br>
do I intend to bathe my wearied limbs.<br>
I only wish to quench an urgent thirst,<br>
for, even as I speak, my cracking lips<br>
and mouth so parched, almost deny me words.<br>
A drink of water will be like a draught<br>
of nectar, giving life; and I shall owe<br>
to you the bounty and my life renewed.—<br>
ah, let these tender infants, whose weak arms<br>
implore you from my bosom, but incline<br>
your hearts to pity!” And just as she spoke,<br>
it chanced the children did stretch out their arms<br>
and who would not be touched to hear such words,<br>
as spoken by this goddess, and refuse?</td></tr>
<tr><td></td><td>But still those clowns persisted in their wrong<br>
against the goddess; for they hindered her,<br>
and threatened with their foul, abusive tongues<br>
to frighten her away—and, worse than all,<br>
they even muddied with their hands and feet<br>
the clear pool; forcing the vile, slimy dregs<br>
up from the bottom, in a spiteful way,<br>
by jumping up and down.—Enraged at this,<br>
she felt no further thirst, nor would she deign<br>
to supplicate again; but, feeling all<br>
the outraged majesty of her high state,<br>
she raised her hands to Heaven, and exclaimed,<br>
“Forever may you live in that mud-pool!”</td></tr>
<tr><td></td><td>The curse as soon as uttered took effect,<br>
and every one of them began to swim<br>
beneath the water, and to leap and plunge<br>
deep in the pool.—Now, up they raise their heads,<br>
now swim upon the surface, now they squat<br>
themselves around the marshy margent, now<br>
they plump again down to the chilly deeps.<br>
And, ever and again, with croaking throats,<br>
indulge offensive strife upon the banks,<br>
or even under water, boom abuse.</td></tr>
<tr><td></td><td>Their ugly voices cause their bloated necks<br>
to puff out; and their widened jaws are made<br>
still wider in the venting of their spleen.</td></tr>
<tr><td></td><td>Their backs, so closely fastened to their heads,<br>
make them appear as if their shrunken necks<br>
have been cut off. Their backbones are dark green;<br>
white are their bellies, now their largest part.—</td></tr>
<tr><td></td><td>Forever since that time, the foolish frogs<br>
muddy their own pools, where they leap and dive.</td></tr>
</tbody>
</table><p><span style="color: #b52b27;">Ovid, “The Metamorphoses”, Book VI, verses 333 and followings.</span></p>
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