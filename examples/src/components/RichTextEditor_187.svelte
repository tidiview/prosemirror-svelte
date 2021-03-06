<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:155 JA:124 -->

<article>

<h1><cite>The Mona Lisa</cite> according to Giorgio Vasari</h1>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.jpg" title="Portrait of Lisa Gerardini, spouse of Francesco del Giocondo said «Mona Lisa, la Gioconda» or «the Joconde»" alt="Portrait of Lisa Gerardini, spouse of Francesco del Giocondo said «Mona Lisa, la Gioconda» or «the Joconde»" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.jpg 1920w"></picture><figcaption>Portrait of Lisa Gerardini, spouse of Francesco del Giocondo said «Mona Lisa, la Gioconda» from italian and «la Joconde» from french.</figcaption>
</figure>

<div class="notices green">
<p>The description of <a href="https://en.wikipedia.org/wiki/Mona_Lisa" title="https://en.wikipedia.org/wiki/Mona_Lisa"><cite>the Mona Lisa</cite></a> presented below was written by <a href="https://en.wikipedia.org/wiki/Giorgio_Vasari" title="https://en.wikipedia.org/wiki/Giorgio_Vasari">Giorgio Vasari</a> and published in Florence first in <time datetime="1550">1550</time>, then reviewed and extended in <time datetime="1568">1568</time>.</p>
<p>These are the two best known, oldests and most reliables of these to date. As such, it has influenced most of the subsequent descriptions.</p>
<p>Vasari describes a painting that he himself has not seen because the painting is then in Fontainebleau where Vasari never went.</p>
<p>Both descriptions tells us about the reputation of the work: it was performed in Florence around <time datetime="1503">1503</time>, <a href="https://en.wikipedia.org/wiki/Leonardo_da_Vinci" title="https://en.wikipedia.org/wiki/Leonardo_da_Vinci">Leonardo da Vinci</a> worked there for <time datetime="P4Y">4 years</time>, it represents Francesco Del Giocondo's wife, referred to as “M[ad]on[n]a Lisa”, “Madame Lise”.</p>
<p>But moreover, it allows us to get what was making its value in the eyes of Vasari.</p>
</div>

<article>

<h2 class="yellow"><cite>The Mona Lisa</cite> according to text of <time datetime="1550">1550</time> edition of Giorgio Vasari's <cite>Lives of the Painters, Sculptors and Architects</cite></h2>

<p>Leonardo da Vinci undertook the portrait of his wife <mark>Mona Lisa</mark> for Francesco del Giocondo.
And after struggling for four years, he left it unfinished.
This work is now in the possession of King François of France at Fontainebleau.</p>
<p>In this head, whoever wanted to see how easily art knows how to imitate nature, <span style="color: #3d8b3d;">could easily understand it, for there was a counterfeit of all the finest details that could be painted with finesse.</span></p>
<p>For the eyes had that luster, that water that one always sees in the living.</p>
<p>And around them were all those bluish roses, the eyelashes, which cannot be done without the greatest finesse.</p>
<p>The eyebrows, for having made there the way in which the hairs arise from the flesh, sometimes thicker, sometimes sparser, and the way in which they curve according to the pores of the skin. All this could not be more natural.</p>
<p>The nose, with its beautiful openings, pink and tender, seemed to be alive.</p>
<p>The mouth was that slit, with the limits united by the red of the lips to the incarnation of the face, which did not appear to be colour but truly flesh.</p>
<p>In the hollow of the bosom, anyone who looked very carefully could see the pulse beating, and it can truly be said that this work was painted in such a way as to make any valiant artist tremble and fear.</p>
<p>He used this artifice again, <span style="color: #3d8b3d;"><mark>Mona Lisa</mark> being very beautiful, that while he was portraying her, he had her played or sung and continually had recourse to jesters to keep her cheerful, in order to chase away the melancholy that painting is wont to give to portraits when they are made.</span>.</p>
<p><span style="color: #3d8b3d;">And in Leonardo's was such a pleasant smile, that it was work more divine than human to see, and was held to be a marvel, for that which life does not present itself otherwise.</span></P>

<footer>
  <p><a href="https://en.wikipedia.org/wiki/Giorgio_Vasari" title="https://en.wikipedia.org/wiki/Giorgio_Vasari" class="green">Giorgio Vasari</a><span style="color: #3d8b3d;">, <cite>Lives of the Painters, Sculptors and Architects</cite>, Book <abbr title="two">II</abbr>, part 3, pages 570 to 571.</span></p>
</footer>

</article>

<article>

<h2 id="vasari" class="yellow"><cite>The Mona Lisa</cite> according to text of <time datetime="1568">1568</time> edition of Giorgio Vasari's <cite>Lives of the Painters, Sculptors and Architects</cite></h2>

<p>Leonardo undertook to execute, for Francesco del Giocondo, the portrait of <mark>Mona Lisa</mark>, his wife, and after he had lingered over it for four years, he left it unfinished;
“and the work is today in the possession of King Francis of France, at Fontainebleau.</p>
<p>Anyone wishing to see <span style="color: #3d8b3d;">the degree to which art could imitate nature could readily perceive this from the head;  since therein are counterfeited all those minutenesses that with subtlety are able to be painted</span>:
seeing that the eyes had that lustre and moistness which are always seen in the living creature,
and around them were the lashes and all those rosy and pearly tints that demand the greatest delicacy of execution.</p>
<p>The eyebrows, through his having shown the manner in which the hairs spring from the flesh, here more close and here more scanty, and curve according to the pores of the flesh, could not be more natural.</p>
<p>The nose, with its beautiful nostrils, rosy and tender, appeared to be alive.</p>
<p>The mouth with its opening, and with its ends united by the red of the lips to the flesh-tints of the face, seemed, in truth, to be not colours but flesh.</p>
<p>In the pit of the throat, if one gazed upon it intently, could be seen the beating of the pulse:
and indeed it may be said that it was painted in such a manner as to make every brave artificer, be he who he may, tremble and lose courage.</p>
<p>He employed also this device: <span style="color: #3d8b3d;"><mark>Mona Lisa</mark> being very beautiful, while he was painting her portrait, he retained those who played or sang, and continually jested, who would make her to remain merry, in order to take away that melancholy which painters are often wont to give to their portraits</span>.</p>
<p><span style="color: #3d8b3d;">And in this work of Leonardo there was a smile so pleasing, that it was a thing more divine than human to behold, and it was held to be something marvelous, in that it was not other than alive</span>.</p>

<footer>
  <p><a href="https://en.wikipedia.org/wiki/Giorgio_Vasari" title="https://en.wikipedia.org/wiki/Giorgio_Vasari" class="green">Giorgio Vasari</a><span style="color: #3d8b3d;">, <cite>Lives of the Painters, Sculptors and Architects</cite>, Book <abbr title="four">IV</abbr>.</span></p>
</footer>

</article>

<aside>
  <p></p>
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