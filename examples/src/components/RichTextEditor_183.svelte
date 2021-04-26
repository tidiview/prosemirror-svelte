<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<p><time datetime="2019-09-11">11<sup>th</sup> Sep. 2019</time></p>

<h1>first evening of the <cite>Conversations on the Plurality of Worlds</cite></h1>

<div class="notices red">
<p>Published by Fontenelle when astronomy was in vogue after the comet of <time datetime="1681">1681</time>,
the <cite>Conversations on the Plurality of Worlds</cite> are an explanation of the world's different systems.</p>
</div>

<div class="notices red">
<p>To "educate and entertain all together", Fontenelle presents the latest astronomical discoveries in a gallant dialogue.</p>
<p>During six walks in the park of the marquise under a starry sky,
a "Philosopher", that is, according to the definition in the dictionaries of the time, the one "who applies to the study of science, and who seeks to know the effects by their causes and principles", have a conversation with a young Marquise full of spirit,
and makes her dream, of the movements of the stars and the plurality of the inhabited worlds, "possible worlds" he says.</p>
<p>He reveals to her the Copernicus' system still contested at the time which makes the Earth one of many planets, revolving around a Sun that is itself only one star among an infinite number of others similar.</p>
<p>The charm of this short book is due to a clever mix of scientific and metaphysical considerations and gallantry.</p>
<p>Appointed to the Academy of Sciences in <time datetime="1697">1697</time>, Fontenelle updated his work with the most recent discoveries.</p>
<p>The success was exceptional:
thirty-three editions during Fontenelle's lifetime.</p>
<p>But its influence comes above all from its critical power.</p>
<p>For Fontenelle, it is impossible to choose an absolute point of view in the universe:
"We want to judge everything, and we are always in a bad point of view.</p>
<p>To deliver his first lesson, the philosopher uses a long spun metaphor, assimilating nature to the spectacle of the Opera.</p>
<p>The aim was to promote Descartes' mechanistic philosophy, since the Opera was essentially a "machine" show (this is how the mechanical means by which the theatre or opera was produced were described, the effects that gave spectators the illusion of the wonderful. But revealing the "Opera machines" is also to desacralize the universe and demystify an earlier textuality (Aristotle, Plato...).</p>
</div>

<h2>Excerpt from the first chapter: «first evening»</h2>

<p>Thus true philosophers spend their lives not believing what they see, and trying to guess what they do not see, and this condition is not, it seems to me, too much to envy.</p>
<p>On this I always figure that nature is a great show that resembles that of the <a id="renvoi-opera" href="#opera" title="#opera">Opera</a>.</p>
<p>From where you are at the Opera House, you do not see the theatre quite as it is; the decorations and machines have been arranged to make a pleasant effect from a distance, and these wheels and counterweights that make all the movements are hidden from your view.</p>
<p>So don't be embarrassed to guess how all this works.</p>
<p>There may be only a few machinists hidden in the <a id="renvoi-parterre" href="#parterre" title="#parterre">parterre</a>, who are worried about a theft that will have seemed extraordinary to him and who absolutely wants to untangle how this flight was carried out.</p>
<p>You can see that this machinist is quite made like philosophers.</p>
<p>But what makes it more difficult for philosophers is that in the machines that nature presents to us, the strings are perfectly well hidden, and they are so well hidden that we have long been guessing what caused the movements of the universe.</p>
<p>For do you represent all the wise men at the Opera, the Pythagoras, the Plato, the Aristotle, and all those people whose names now make so much noise to our ears; suppose they saw the theft of <a id="renvoi-phaeton" href="#phaeton" title="#phaeton">Phaeton</a> that the winds remove, that they could not discover the strings, and that they did not know how the back of the theatre was arranged.</p>
<p>One of them said: "It is a certain secret virtue that takes Phaeton away".</p>
<p>The other: "Phaeton is composed of certain numbers that make it rise".</p>
<p>The other: "Phaeton has a certain friendship for the top of the theatre; he is not at ease when he is not there".</p>
<p>The other: "Phaeton is not made to fly, but he prefers to fly, than to leave the top of the theatre empty? and a hundred other dreams that I am surprised that have not lost their reputation all over Antiquity.</p>
<p>At the end Descartes, and some other modern ones came, who said: "Phaeton goes up, because he is pulled by ropes, and a heavier weight than he goes down".</p>
<p>Thus we no longer believe that a body moves, if it is not pulled, or rather pushed by another body; we no longer believe that it rises or falls, if not by the effect of a counterweight or a spring; and whoever sees nature as it is, would only see the back of the opera theatre.</p>
<p>In this respect, says the Marquise, philosophy has become quite mechanical? So mechanical, I replied, that I fear that we will soon be ashamed of it.</p>
<p>We want the universe to be large, only what a watch is small, and everything to be driven by regulated movements that depend on the arrangement of the parts.</p>
<p>Admit the truth.</p>
<p>Have you not sometimes had a more sublime idea of the universe, and have you not done him more honor than he deserved?</p>
<p>I've seen people who didn't think so much of him since they met him.</p>
<p>And she replied, "I think much more of her, since I know it looks like a watch.</p>
<p>It is surprising that the order of nature, however admirable it may be, only runs on such simple things".</p>

<aside>
  <h3 class="yellow">Notes:</h3>

  <h4 id="opera" class="yellow note">Opera</h4>
  <p>Opera:  proper name designating the Paris Opera, founded in <time datetime="1669">1669</time>.</p>
  <footer>
    <p class="puce"><a href="#renvoi-opera" title="#renvoi-opera">back to text ↩</a></p>
  <footer>
  
  <h4 id="parterre" class="yellow note">Parterre</h4>
  <p>Parterre: Ground floor of a theatre where the audience was standing and where the seats were cheaper than in the dressing rooms.</p>
  <footer>
    <p class="puce"><a href="#renvoi-parterre" title="#renvoi-parterre">back to text ↩</a></p>
  <footer>

  <h4 id="phaeton" class="yellow note">Lulli's <cite>Phaeton</cite></h4>
  <p><cite>Phaeton</cite>, Quinault's lyrical tragedy in five acts, Lulli's music created at the Opera in <time datetime="1683">1683</time>, and whose success was considerable. Phaeton's flight on the Sun chariot takes place in act III, scene 6.</p>
  <footer>
    <p class="puce"><a href="#renvoi-phaeton" title="#renvoi-phaeton">back to text ↩</a></p>
  <footer>

</aside>

<footer>
<div class="blog-item-footer">
  <p><span style="color: #b52b27;">Fontenelle, <cite>Conversations on the Plurality of Worlds</cite>, Extract of the first evening.</span></p>
<p><time datetime="P4M30S">4 min. 30 sec.</time></p>
</div>
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