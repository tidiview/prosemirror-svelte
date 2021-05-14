<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:155 JA:109 -->

<article>

<p>2020 <abbr title="march">Mar.</abbr>, <abbr title="the twelveth"><time datetime="2020-04-12">12<sup>th</sup><abbr></time></p>

<h1>On the nature of the soul according to <cite>Phedre</cite></h1>

<div class="notices yellow">
<p>In this part of the dialogue <cite>Phedre</cite> (246a-248c), <a href="https://en.wikipedia.org/wiki/Plato" title="https://fr.wikipedia.org/wiki/Platon">Plato</a> describes the nature of the soul as a power composed by a celestial winged chariot that leaves its home to participate in the heavenly march.</p>
<p>Souls strive to reach the vault of heaven to contemplate from its back, truth, justice, science and wisdom.</p>
<p>Many, wounded by the tumult, do not reach the summit.</p>
<p>But once the revolution is over, each soul returns to its home to feed the horses with what it has been given to contemplate... before setting out again.</p>
</div>

<ol class="doc-special">
  <li id="246a">Concerning the immortality of the soul</span> this is enough; but about its form we must speak in the following manner.</li>
  <li>To tell what it really is would be a matter for utterly superhuman and long discourse, but it is within human power to describe it briefly in a figure;</li>
  <li>let us therefore speak in that way.</li>
  <li>We will liken the <span style="color:#a4660e;">soul</span> to <span style="color:#a4660e;">the composite nature of a pair of winged horses and a charioteer</li>
  <tr>
  <li id="246b">Now <span style="color:#df8a13;">the horses and charioteers of the gods are all good and of good descent</span>, but <span style="color:#df8a13;">those of other races are mixed</span>;</li>
  <li>and first the charioteer of the human <span style="color:#df8a13;">soul</span> drives a pair, and secondly one of the horses is noble and of noble breed, but the other quite the opposite in breed and character. Therefore in our case the driving is necessarily difficult and troublesome.</li>
  <li>Now we must try to tell why a <span style="color:#df8a13;">living being</span> is called <span style="color:#df8a13;">mortal</span> or <span style="color:#df8a13;">immortal</span>.</li>
  <tr>
  <li id="246c"><span style="color:#df8a13;">Soul</span>, considered collectively, has the care of all that which is <span style="color:#df8a13;">soulless</span>,</li>
  <li>and it traverses the whole heaven, appearing sometimes in one form and sometimes in another;</li>
  <li>now when it is perfect and fully <span style="color:#a4660e;">winged</span>, it mounts upward and governs the whole world;</li>
  <li>but the <span style="color:#df8a13;">soul</span> which has lost its <span style="color:#a4660e;">wings</span> is borne along until it gets hold of something solid,</li>
  <li>when it settles down,</li>
  <li>taking upon itself an earthly <span style="color:#13aadd;">body</span>, which seems to be self-moving, because of the power of the <span style="color:#df8a13;">soul</span> within it;</li>
  <li>and the whole, compounded of <span style="color:#df8a13;">soul</span> and <span style="color:#13aadd;">body</span>, is called a living being, and is further designated as mortal.</li>
  <li>It is not immortal by any reasonable supposition,</li>
  <li>but we, though we have never seen or rightly conceived a god,</li>
  <tr>
  <li id="246d">imagine an immortal being which has both a <span style="color:#df8a13;">soul</span> and a <span style="color:#13aadd;">body</span> which are united for all time.</li>
  <li>Let that, however, and our words concerning it, be as is pleasing to God;</li>
  <li>we will now consider the reason why the <span style="color:#df8a13;">soul</span> loses its <span style="color:#a4660e;">wings</span>.</li>
  <li>It is something like this.</li>
  <li>The natural function of the <span style="color:#a4660e;">wing</span> is to soar upwards and carry that which is heavy up to the place where dwells the race of the gods.</li>
  <li>More than any other thing that pertains to the <span style="color:#13aadd;">body</span> it partakes of the nature of the divine.</li>
  <tr>
  <li id="246e">But the divine is beauty, wisdom, goodness, and all such qualities;</li>
  <li>by these then the <span style="color:#a4660e;">wings</span> of the <span style="color:#df8a13;">soul</span> are nourished and grow, but by the opposite qualities,</li>
  <li>such as vileness and evil, they are wasted away and destroyed.</li>
  <li>Now the great leader in heaven, Zeus, driving a <span style="color:#a4660e;">winged</span> chariot,</li>
  <li>goes first, arranging all things and caring for all things.</li>
  <li>He is followed by an army of gods and spirits, arrayed in eleven squadrons;</li>
  <tr>
  <li id="247a">Hestia alone remains in the house of the gods.</li>
  <li>Of the rest, those who are included among the twelve great gods and are accounted leaders, are assigned each to his place in the army.</li>
  <li>There are many blessed sights and many ways hither and thither within the heaven,</li>
  <li>along which the blessed gods go to and fro attending each to his own duties;</li>
  <li>and whoever wishes, and is able, follows,</li>
  <li>for jealousy is excluded from the celestial band.</li>
  <tr>
  <li id="247b">But when they go to a feast and a banquet,</li>
  <li>they proceed steeply upward to the top of the vault of heaven,</li>
  <li>where the chariots of the gods, whose well matched horses obey the rein, advance easily,</li>
  <li>but the others with difficulty;</li>
  <li>for the horse of evil nature</li>
  <li>weighs the chariot down, making it heavy and pulling toward the earth the charioteer whose horse is not well trained.</li>
  <li>There the utmost toil and struggle await the <span style="color:#df8a13;">soul</span>.</li>
  <tr>
  <li id="247c">For those that are called immortal, when they reach the top, pass outside</li>
  <li>and take their place on the outer surface of the heaven,</li>
  <li>and when they have taken their stand, the revolution carries them round</li>
  <li>and they behold the things outside of the heaven.</li>
  <li>But the region above the heaven was never worthily sung by any earthly poet, nor will it ever be.</li>
  <li>It is, however, as I shall tell; for I must dare to speak the truth,</li>
  <li>especially as truth is my theme.</li>
  <li>For the colorless, formless, and intangible truly existing essence, with which all true knowledge is concerned, holds this region and is visible only to the mind, the pilot of the <span style="color:#df8a13;">soul</span>.</li>
  <tr>
  <li id="247d">Now the divine intelligence, since it is nurtured on mind and pure knowledge, and the intelligence of every <span style="color:#df8a13;">soul</span> which is capable of receiving that which befits it, rejoices in seeing reality for a space of time and by gazing upon truth is nourished and made happy until the revolution brings it again to the same place.</li>
  <li>In the revolution it beholds absolute justice, temperance, and knowledge, not such knowledge as has a beginning and varies as it is associated with one or another of the things we call realities, but that which abides in the real eternal absolute;</li>
  <li>and in the same way it beholds and feeds upon the other eternal verities, after which, passing down again within the heaven, it goes home,</li>
  <li>and there the charioteer puts up the horses at the manger and feeds them with ambrosia and then gives them nectar to drink.</li>
  <tr>
  <li id="248a">«Such is the life of the gods;</li>
  <li>but of the other <span style="color:#df8a13;">souls</span>,</li>
  <li>that which best follows after God and is most like him, raises the head of the charioteer up into the outer region and is carried round in the revolution,</li>
  <li>troubled by the horses and hardly beholding the realities;</li>
  <li>and another sometimes rises</li>
  <li>and sometimes sinks,</li>
  <li>and, because its horses are unruly,</li>
  <li>it sees some things</li>
  <li>and fails to see others.</li>
  <li>The other <span style="color:#df8a13;">souls</span> follow after, all yearning for the upper region but unable to reach it, and are carried round beneath,</li>
  <li>trampling upon and colliding with one another, each striving to pass its neighbor.</li>
  <tr>
  <li id="248b">So there is the greatest confusion and sweat of rivalry, wherein many are lamed, and many <span style="color:#a4660e;">wings</span> are broken through the incompetence of the drivers;</li>
  <li>and after much toil they all go away without gaining a view of reality,</li>
  <li>and when they have gone away they feed upon opinion.</li>
  <li>But the reason of the great eagerness to see where the <span style="color:#df8a13;">«plain of truth»</span> is,</li>
  <tr>
  <li id="248c">lies in the fact that the fitting pasturage for the best part of the <span style="color:#df8a13;">soul</span> is in the meadow there, and the <span style="color:#a4660e;">wing</span> on which the <span style="color:#df8a13;">soul</li>
</ol>

<footer>
  <p><span style="color: #df8a13;">Plato, <cite>Phedre</cite>, paragraphs 246a to 248c</span></p>
  <p><time datetime="P5M30">5 min. 30''</time></p>
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