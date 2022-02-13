<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:168 JA:136  -->

<article>

<hgroup>
<h1 class="green">Saint Remigius</h1>
<h2 class="green">according to <cite>Legenda Aurea</cite></h2>
</hgroup>

<section id="chapître-143-saint-remi">
<h2 class="green">saint Remi selon le texte du chapître 143 <cite>La légende Dorée</cite></h2>

<section id="seconde-interprétation-de-son-nom">
<h3 class="green">second the interpretation of his name</h3>

<p><span style="color: #3d8b3d;">Remigius</span> is said of “remige” that is « a rower » or the head of a boat.<br />
Or it is said of remis, which be instruments by which the ship is rowed and conducted, and of gyon, that is to say wrestling.
He governed the church and kept it from peril of wreck, and brought it to the port of heaven.
And for the church he wrestled against the assaults of the devil.</p>
</section>

<section id="clotilde-et-ses-enfants">
<h3 class="green">Clotilde and her children</h3>

<p>Some says <mark>Remigius</mark> converted to the faith the king and the people of France.</p>
<p>The king had a wife named Clotilde, which was christian, and she enforced her much to convert her husband to the christian faith, but she might not.</p>
<p>And when she had a child 
she would have christened him, but the king defended it to her.
And she rested not till at the last the king granted that it should be christian, and after that it was christened, it died anon.
Then said the king:</p>
<p class="conversation"><span style="color: #3d8b3d;">«Now it appeareth well that Christ is a vile God,
for because he may not keep him
which in his faith should have been enhanced in my kingdom after me.»</span></p>
<p>And she said to him:</p>
<p class="conversation"><span style="color: #3d8b3d;">«Now feel I well that I am loved of my God because he hath received the first fruit of my womb;
he hath enhanced to a better kingdom my son, and to reign perpetually without end, which is much better than thy kingdom is.»</span></p>
<p>And soon after she conceived again, and had a fair son, whom with great prayers she baptized as she did the first,
but anon after, he was sick, so that they had no hope of his life.</p>
<p>And then the king said to his wife:</p>
<p class="conversation"><span style="color: #3d8b3d;">«Certainly this is a feeble god which may not conserve, ne keep none that is baptized in his name,
and if thou hadst a thousand and didst them to be baptized, all should perish.</span></p>
<p class="conversation"><span style="color: #3d8b3d;">Yet nevertheless the child revived and was whole, so that he reigned after his father,»</span></p>
<p>and the faithful queen enforced her to bring her husband to the faith, but he refused it in all manners.</p>
<section>
<h3 id="le-meunier-fâché" class="green">the angry miller</h3>
<p>It is said in that other feast which is after the Epiphany, how the king was converted to the faith.
And the foresaid king Clovis, when he was christened, said that he would give to <mark>saint Remigius</mark>, for to endow his church,
as much land as he might go about whilst he slept at mid-day,
and so it was done.</p>
<pBut there was a man which had a mill within the circuit which <mark>saint Remigius</mark> had closed.
And as <mark>saint Remigius</mark> went about it the milner put him out with great indignation and great despite.</p>
<p>And <mark>saint Remigius</mark> said to him:</p>
<p class="conversation"><span style="color: #3d8b3d;">«Friend, have no disdain and let it not be too hard if we have also this mill with that other.»</span></p>
<p>Nevertheless the milner put him out,
and anon the wheel of the mill began to turn contrary,
and then the milner cried after <mark>Remigius</mark>and shout:</p>
<p class="conversation"><span style="color: #3d8b3d;">«Servant of God,
come and let us have the mill together!»</span></p>
<p>And <mark>Remigius</mark> said:</p>
<p class="conversation"><span style="color: #3d8b3d;">«Nay, it shall neither be mine nor thine».</span>,</p>
<p>and anon the earth opened and swallowed in all the mill.</p>
</section>

<section id="remi-prédit-une-famine">
<h3 class="green">St. Remigius prophesies a famine</h3>

<p><mark>Remigius</mark> knew by the spirit of prophecy and by the will of God, that a great famine should come, and assembled in a town great plenty of wheat.
And the drunken villains of the town mocked and scorned him of his providence, and set the garners a fire.
And when he knew it he came thither,
and because he was cold for age and his last time approached fast, he sat down by the fire and warmed him, and said with a peaceable heart:</p>
<p class="conversation"><span style="color: #3d8b3d;">«The fire is always good.
Nevertheless they that made that fire, and all the men of their lineage, were broken in their members and the women gouty.»</span></p>
<p>And this endured in the same town unto the time of Charles, which chased and made them go their way, and so disperpled them.</p>
</section>

<section id="la-translation-de-son-corps">
<h3 class="green">the translation of his body</h3>

<p>And it is to be known that the feast of <mark>saint Remigius</mark> that is hallowed in January, is the feast of his blessed death and disposition, and this is the feast of the translation of his blessed body.</p>
<p>For when, after his death, the holy body should have been brought to the church of St. Timothy and Apollinarius with the shrine, and came nigh unto the church of St. Christopher, it began to weigh so much that they might not move it from thence in no manner.</p>
<p>At the last they prayed our Lord that he would vouchsafe to show them if it were his will that the body should be buried in that church, whereas no relics rest.
And then anon they took up the body lightly enough
and buried him there honourably.</p>
<p>And many miracles were there showed, so that they enlarged and made the church more ample and large.
And then they made an oratory behind the altar, and would have dolven for to have laid the body in that oratory, but they could not move it in no manner.
Then they watched, and prayed unto our Lord, and at midnight they fell all asleep,
and on the morn they found the sepulchre with the body in the place, which angels had borne thither while they slept.</p>
<p>And this was the kalends of October which afterwards by long time on the same day,
it was translated into a feretre or shrine of silver.</p>
<p>He flourished about the year of our Lord <time datetime="0490">four hundred and ninety</time>.</p>
</section>

<footer>
  <p>Saint Remigius, chapter 147 of <cite>Legenda Aurea</cite></p>
</footer>
</section>

</section>

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