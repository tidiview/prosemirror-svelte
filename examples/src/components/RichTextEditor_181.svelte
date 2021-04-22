<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<p><time datetime="2020-04-12">12<sup>th</sup> Mar. 2020</time></p>

<h1><a href="/blog/en/phedre" rel="bookmark"><cite>Phedre</cite></a></h1>

<div class="notices yellow">
<p>In this part of the dialogue <cite>Phedre</cite> (246a-248c), Plato describes the nature of the soul as a power composed by a celestial winged chariot that leaves its home to participate in the heavenly march.</p>
<p>Souls strive to reach the vault of heaven to contemplate from its back, truth, justice, science and wisdom.</p>
<p>Many, wounded by the tumult, do not reach the summit.</p>
<p>But once the revolution is over, each soul returns to its home to feed the horses with what it has been given to contemplate... before setting out again.</p>
</div>

<div id="translation-text-rousi">
<style>#translation-text-rousi tr td:first-child {color: #b3b3b3;text-align: right;vertical-align: top;padding-top: 0.8rem;}</style>
<table>
<thead>
  <tr>
  <th></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td style="vertical-align: top;"><sup>246A</sup></td>
  <td>Concerning the immortality of the soul</span> this is enough; but about its form we must speak in the following manner. <br>To tell what it really is would be a matter for utterly superhuman and long discourse, but it is within human power to describe it briefly in a figure; <br>let us therefore speak in that way. <br>We will liken the <span style="color:#a4660e;">soul</span> to <span style="color:#a4660e;">the composite nature of a pair of winged horses and a charioteer</td>
  </tr>
  <tr>
  <td style="vertical-align: top;"><sup>246B</sup></td>
  <td>Now <span style="color:#df8a13;">the horses and charioteers of the gods are all good and of good descent</span>, but <span style="color:#df8a13;">those of other races are mixed</span>; <br>and first the charioteer of the human <span style="color:#df8a13;">soul</span> drives a pair, and secondly one of the horses is noble and of noble breed, but the other quite the opposite in breed and character. Therefore in our case the driving is necessarily difficult and troublesome. <br>Now we must try to tell why a <span style="color:#df8a13;">living being</span> is called <span style="color:#df8a13;">mortal</span> or <span style="color:#df8a13;">immortal</span>.</td>
  </tr>
  <tr>
  <td style="vertical-align: top;"><sup>246C</sup></td>
  <td><span style="color:#df8a13;">Soul</span>, considered collectively, has the care of all that which is <span style="color:#df8a13;">soulless</span>, <br>and it traverses the whole heaven, appearing sometimes in one form and sometimes in another; <br>now when it is perfect and fully <span style="color:#a4660e;">winged</span>, it mounts upward and governs the whole world; <br>but the <span style="color:#df8a13;">soul</span> which has lost its <span style="color:#a4660e;">wings</span> is borne along until it gets hold of something solid, <br>when it settles down, <br>taking upon itself an earthly <span style="color:#13aadd;">body</span>, which seems to be self-moving, because of the power of the <span style="color:#df8a13;">soul</span> within it; <br>and the whole, compounded of <span style="color:#df8a13;">soul</span> and <span style="color:#13aadd;">body</span>, is called a living being, and is further designated as mortal. <br>It is not immortal by any reasonable supposition, <br>but we, though we have never seen or rightly conceived a god,</td>
  </tr>
  <tr>
  <td style="vertical-align: top;"><sup>246D</sup></td>
  <td>imagine an immortal being which has both a <span style="color:#df8a13;">soul</span> and a <span style="color:#13aadd;">body</span> which are united for all time. <br>Let that, however, and our words concerning it, be as is pleasing to God; <br>we will now consider the reason why the <span style="color:#df8a13;">soul</span> loses its <span style="color:#a4660e;">wings</span>. <br>It is something like this. <br>The natural function of the <span style="color:#a4660e;">wing</span> is to soar upwards and carry that which is heavy up to the place where dwells the race of the gods. <br>More than any other thing that pertains to the <span style="color:#13aadd;">body</span> it partakes of the nature of the divine.</td>
  </tr>
  <tr>
  <td style="vertical-align: top;"><sup>246E</sup></td>
  <td>But the divine is beauty, wisdom, goodness, and all such qualities; <br>by these then the <span style="color:#a4660e;">wings</span> of the <span style="color:#df8a13;">soul</span> are nourished and grow, but by the opposite qualities, <br>such as vileness and evil, they are wasted away and destroyed. <br>Now the great leader in heaven, Zeus, driving a <span style="color:#a4660e;">winged</span> chariot, <br>goes first, arranging all things and caring for all things. <br>He is followed by an army of gods and spirits, arrayed in eleven squadrons;</td>
  </tr>
  <tr>
  <td style="vertical-align: top;"><sup>247A</sup></td>
  <td>Hestia alone remains in the house of the gods. <br>Of the rest, those who are included among the twelve great gods and are accounted leaders, are assigned each to his place in the army. <br>There are many blessed sights and many ways hither and thither within the heaven, <br>along which the blessed gods go to and fro attending each to his own duties; <br>and whoever wishes, and is able, follows, <br>for jealousy is excluded from the celestial band.</td>
  </tr>
  <tr>
  <td style="vertical-align: top;"><sup>247B</sup></td>
  <td>But when they go to a feast and a banquet, <br>they proceed steeply upward to the top of the vault of heaven, <br>where the chariots of the gods, whose well matched horses obey the rein, advance easily, <br>but the others with difficulty; <br>for the horse of evil nature <br>weighs the chariot down, making it heavy and pulling toward the earth the charioteer whose horse is not well trained. <br>There the utmost toil and struggle await the <span style="color:#df8a13;">soul</span>.</td>
  </tr>
  <tr>
  <td style="vertical-align: top;"><sup>247C</sup></td>
  <td>For those that are called immortal, when they reach the top, pass outside <br>and take their place on the outer surface of the heaven, <br>and when they have taken their stand, the revolution carries them round <br>and they behold the things outside of the heaven. <br>But the region above the heaven was never worthily sung by any earthly poet, nor will it ever be. <br>It is, however, as I shall tell; for I must dare to speak the truth, <br>especially as truth is my theme. <br>For the colorless, formless, and intangible truly existing essence, with which all true knowledge is concerned, holds this region and is visible only to the mind, the pilot of the <span style="color:#df8a13;">soul</span>.</td>
  </tr>
  <tr>
  <td style="vertical-align: top;"><sup>247D</sup></td>
  <td>Now the divine intelligence, since it is nurtured on mind and pure knowledge, and the intelligence of every <span style="color:#df8a13;">soul</span> which is capable of receiving that which befits it, rejoices in seeing reality for a space of time and by gazing upon truth is nourished and made happy until the revolution brings it again to the same place. <br>In the revolution it beholds absolute justice, temperance, and knowledge, not such knowledge as has a beginning and varies as it is associated with one or another of the things we call realities, but that which abides in the real eternal absolute; <br>and in the same way it beholds and feeds upon the other eternal verities, after which, passing down again within the heaven, it goes home, <br>and there the charioteer puts up the horses at the manger and feeds them with ambrosia and then gives them nectar to drink.</td>
  </tr>
  <tr>
  <td style="vertical-align: top;"><sup>248A</sup></td>
  <td>«Such is the life of the gods; <br>but of the other <span style="color:#df8a13;">souls</span>, <br>that which best follows after God and is most like him, raises the head of the charioteer up into the outer region and is carried round in the revolution, <br>troubled by the horses and hardly beholding the realities; <br>and another sometimes rises <br>and sometimes sinks, <br>and, because its horses are unruly, <br>it sees some things <br>and fails to see others. <br>The other <span style="color:#df8a13;">souls</span> follow after, all yearning for the upper region but unable to reach it, and are carried round beneath, <br>trampling upon and colliding with one another, each striving to pass its neighbor.</td>
  </tr>
  <tr>
  <td style="vertical-align: top;"><sup>248B</sup></td>
  <td>So there is the greatest confusion and sweat of rivalry, wherein many are lamed, and many <span style="color:#a4660e;">wings</span> are broken through the incompetence of the drivers; <br>and after much toil they all go away without gaining a view of reality, <br>and when they have gone away they feed upon opinion. <br>But the reason of the great eagerness to see where the <span style="color:#df8a13;">«plain of truth»</span> is,</td>
  </tr>
  <tr>
  <td style="vertical-align: top;"><sup>248C</sup></td>
  <td>lies in the fact that the fitting pasturage for the best part of the <span style="color:#df8a13;">soul</span> is in the meadow there, and the <span style="color:#a4660e;">wing</span> on which the <span style="color:#df8a13;">soul</td>
  </tr>
</tbody>
</table>

<footer>
  <p><span style="color: #df8a13;">Plato, <cite>Phedre</cite>, 246A-248C</span></p>
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