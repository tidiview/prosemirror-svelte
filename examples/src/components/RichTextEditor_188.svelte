<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<h1 class="green">The Mona Lisa according to Theophile Gautier</h1>

<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.webp 1920w" type="image/webp"><img src="/user/sites/docs/pages/01.https://francois-vidit.comhome/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.jpg" title="Portrait of Lisa Gerardini, spouse of Francesco del Giocondo said «Mona Lisa, la Gioconda» or «the Joconde»" alt="Portrait of Lisa Gerardini, spouse of Francesco del Giocondo said «Mona Lisa, la Gioconda» or «the Joconde»" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.jpg 1920w" id="zephyr_et_flore"></picture><figcaption>Portrait of Lisa Gerardini, spouse of Francesco del Giocondo said «Mona Lisa, la Gioconda» or «the Joconde»</figcaption></figure>

<div class="notices green">
<p>The description of the <a href="https://en.wikipedia.org/wiki/Mona_Lisa" title="https://en.wikipedia.org/wiki/Mona_Lisa">Mona Lisa</a> presented below was written by romantic writer <a href="https://en.wikipedia.org/wiki/Théophile_Gautier" title="https://en.wikipedia.org/wiki/Théophile_Gautier">Theophile GAUTIER</a> and published in Paris in 1867.</p>
<p>It is a crucial description for the history of this painting because it both mythologizes and diverts <a href="https://en.wikipedia.org/wiki/Leonardo_da_Vinci" title="https://en.wikipedia.org/wiki/Leonardo_da_Vinci">Leonardo da Vinci</a>'s work in the name of the mystery it seems to embody and influences many of the biased views of the work during the 20<sup>th</sup> century.</p>
<p>We believe that if this description is misogynistic, that this misogyny is neither part of Leonardo da Vinci's work nor part of artistic emotion and that the Mona Lisa would benefit from being rid of Theophile Gautier's chimeras.</p>
</div>

<h2 class="green">The Mona Lisa according to Theophile Gautier</h2>

<p>Our admiration and love for this divine Monna Lisa del Giocondo is not new, and many passions for real people have lasted less time.</p>
<p>We have been writing these lines for about twelve years now, perhaps a little too enthusiastic, but they accurately reflect our impression:</p>
<p class="conversation">«La Joconde!</p>
<p class="conversation"><span style="color: #3d8b3d;">Sphinx of beauty</span> who smiles so mysteriously in frame of Leonardo da Vinci and seems to offer to the admiration of centuries an enigma by them not yet solved, an invincible attraction brings every back to thee!
Oh! indeed. Who has not long hours before that head bathed twilight half tints enveloped in transparent gauze and whose features melodiously drowned in a violet vapor appear like <span style="color: #3d8b3d;">the creation of Dream through the  black gauze of Sleep</span>!</p>
<p class="conversation">From which planet fell in the middle of an landscape of azure that strange being with her glance promising unknown voluptuousness and her expression divinely ironical?</p>
<p class="conversation">Leonardo da Vinci gives to his faces such an imprint of superiority that one feels disturbed in their presence.</p>
<p class="conversation"><span style="color: #3d8b3d;">The lids of her profound eyes hide secrets interdicted the profane; and the curve of her mocking lips suit the gods, who know everything and gently despise human vulgarities.</span></p>
<p class="conversation">What unquieting fixedness, and what superhuman sardonism in those dark sloes, in those lips undulating like the bow of love after it has hurled the arrow.</p>
<p class="conversation"><span style="color: #3d8b3d;">Doesn't it seem that the Joconde is the Isis of a cryptic religion, who believing herself alone, half opens the folds of her veil, even if the imprudent one who surprises her become insane and die for it?</span></p>
<p class="conversation">Never has the feminine ideal been invested with forms more deliciously seductive.</p>
<p class="conversation">Believe that, if Don Juan had met Mona Lisa, he would have spared himself the trouble of writing down the names of three thousand women on his list; 
he would have drawn but one; and the wings of his desire would have refused to carry him further.</p>
<p class="conversation">They would have melted and become deplumed before the black sun of these sloes».</p>
<p>We have seen her very often since then, that adorable Joconde, and our declaration of love does not appear to us too burning.
She is ever there, smiling with a mocking voluptuousness upon her innumerable lovers.</p>
<p><span style="color: #3d8b3d;">Upon her brow reposes that serenity of a woman sure of being eternally beautiful, and who feels herself superior to the ideal of all poets and of all artists.</span></p>
<p>The divine Leonardo took four years to make this portrait, which he could not decide to leave, and which he never considered finished;
during the sessions, musicians performed pieces to brighten up the beautiful model and prevent his charming features from looking bored or tired.</p>
<p>Is it to be regretted that the particular black used by Leonardo, of which he was the inventor, prevailed in the colours of the Monna Lisa and gave them this delicious violetish harmony?</p>
<p>This abstract tonality that is like the colour of the ideal?
We do not think so.</p>
<p>Now, mystery adds itself to charm, and the painting, in its freshness, was perhaps less attractive.</p>

<footer>
  <p><span style="color: #3d8b3d;"><a href="https://en.wikipedia.org/wiki/Théophile_Gautier" title="https://en.wikipedia.org/wiki/Théophile_Gautier" class="green">Théophile Gautier</a>, extract from a guidebook collective work intended for visitors to <time datetime="1867">1867</time> Universal Exhibition of Paris, guidebook by the main French writers and artists</span>, in which <a href="https://en.wikipedia.org/wiki/Alexandre_Dumas" title="https://en.wikipedia.org/wiki/Alexandre_Dumas">Dumas</a>, <a href="https://en.wikipedia.org/wiki/Charles-Augustin_Sainte-Beuve" title="https://en.wikipedia.org/wiki/Charles-Augustin_Sainte-Beuve">Sainte-Beuve</a>, <a href="https://en.wikipedia.org/wiki/Eugène_Viollet-le-Duc" title="https://en.wikipedia.org/wiki/Eugène_Viollet-le-Duc">Viollet-le-Duc</a>, <a href="https://en.wikipedia.org/wiki/George_Sand" title="https://en.wikipedia.org/wiki/George_Sand">George Sand</a>, <a href="https://en.wikipedia.org/wiki/Nadar" title="https://en.wikipedia.org/wiki/Nadar">Nadar</a>... also participated, then reprinted as a book upon the author's death under the title "amateur's Guide to the Louvre Museum".</p>
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