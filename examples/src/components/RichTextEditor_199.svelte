<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<hgroup>
<h1 class="green">Saint Remigius</h1>
<h2 class="green">according to <cite>Legenda Aurea</cite></h2>
</hgroup>

<div class="notices green">
<p>The Baptism of the King of the Franks, <i>Clovis</i> in french, or “Clodovechus” from Latin by <i>Saint Remi</i> in French or <i>sanctus Remigius</i> in Latin in historical documents is told by Jacobus da Varagine in chapter 16 of <cite>Legenda Aurea</cite>, which can be said to be the main Christian book in the Middle Ages.</p>
</div>

<article>
<h2 id="chapter-16-st-remigius" class="green">Text of chapter 16 of <cite>Legenda Aurea</cite>: St. Remigius</h2>

<h3 id="first-the-interpretation-of-his-name" class="green">first the interpretation of his name</h3>

<p><mark>Remigius</mark> is said of remi, that is to say feeding, and geos, that is earth, as who saith feeding the earthly people with doctrine, or of geon, that is a wrestler, for he was a pastor and a wrestler.</p>
<p>He fed his flock with the word of preaching, with suffrages of praying, and with example of conversation.
There is three manner of armour
that is for the defence, the shield, for to fight, the sword, for his salvation and health, the habergeon and helm.</p>
<p>He wrestled against the devil with the shield of faith, with the sword of the word of God, and with the helmet of hope.</p>
<p>Ignatius Archbishop of Rheims wrote his life.</p>

<h3 id="life-of-st-remigius" class="green">life of St. Remigius</h3>

<p><mark>Remigius</mark>, an holy doctor, and confessor glorious of our Lord, was tofore his birth provided of our Lord, and foreseen of a holy hermit.</p>
<p>When the persecution of the Vandals had almost wasted and destroyed nigh all the country of the Francks,
there was a man recluse, holy and virtuous, which had lost his sight, which oft prayed to our Lord for peace and welfare of the church of Gaule.</p>
<p>He had on a time a vision, and him seemed an angel came to him and said:</p>
<p class="conversation" style="color: #3d8b3d;">“Know thou that the woman that thou knowest named Aline shall bring forth a son
that shall be named Remigius,
which shall deliver all the country from this persecution.”</p>
<p>And when he awoke he came to the house of this Aline and told to her his vision,
and she would not believe it
because of her age.</p>
<p>The recluse said:</p>
<p class="conversation" style="color: #3d8b3d;">“It shall be so as I have said, and when thou hast given thy child suck, thou shalt give to me of thy milk, to put upon mine eyes, and therewith I shall be whole and recover my sight again.”</p>
<p>And like as he said all these things happened.
And the woman had a child named <mark>Remigius</mark>, which when he came to the age of discretion, he fled the world, and entered into a reclusage.
And sith after, for the great renown of his holy life, when he had been twenty-two years therein he was elect and chosen to be Archbishop of Rheims.
He was so debonair that little birds came and ate on his table and took meat at his hand.</p>

<h3 id="the-miracle-of-the-wine" class="green">the miracle of the wine</h3>

<p>It happed on a day that he was lodged in an house of a good woman
which had but a little wine in her tonnel or vessel, and <mark>St. Remigius</mark> went in to the cellar and made the sign of the cross upon the ton, and prayed a while.
Anon the ton was so full that it leapt over, by the merits of the good saint.</p>

<h3 id="the-conversion-of-king-clovis" class="green">the conversion of king Clovis</h3>

<p>Now it happed that Clovis the king of Franks, which was a paynim,
might not be converted for any preaching that his wife might do, which was a christian woman,
unto the time that a great host of Alemans swooped on him.
Then by the admonishment of his wife he made a vow that if the God that his wife worshipped would give him victory, he would be baptized at his returning from the battle.</p>
<p>Thus, as he demanded, he vanquished the battle,
and after came to Rheims to <mark>St. Remigius</mark> and prayed him that he would christen him.</p>
<p>And when <mark>St. Remigius</mark> baptized him he had no chrisom ready,
then <span style="color: #3d8b3d;">a dove descended from heaven which brought the chrisom in an ampull
of which the king was anointed</span>
and this ampull is kept in the church of <mark>St. Remigius</mark> at Rheims, of which the kings of France be anointed when they be crowned.</p>

<h3 id="the-wayward-bishop" class="green">the wayward bishop</h3>

<p><mark>St. Remigius</mark> had a niece which was married to a clerk named Genebaldus,
which by devotion left his wife for to enter into religion.
Then <mark>St. Remigius</mark> saw that the see of Rheims was over great, and ordained a see of a bishopric at Laon and made Genebald first bishop of that place.</p>
<p>When Genebald was bishop his wife came thither to see him, and he remembered of the privily that they were wont to have together, and lay on a night with her,
and engendered on her a child.</p>
<p>When his wife knew that she was great and let him have knowledge thereof,
and when he wist that it was a son, <span style="color: #3d8b3d;">he commanded that it should be named Thief,
because he had engendered it by theft</span>.</p>
<p>After for to quench the suspicion and the words of the people, he suffered that his wife should come to him as she did before,
and anon after she conceived a daughter, whom
<span style="color: #3d8b3d;">he commanded
to name a fox's whelp</span>,</p>
<p>and after came to <mark>St. Remigius</mark> and confessed him of his sin, and took the stole off his neck and would leave his bishopric,
but <mark>St. Remigius</mark>, after he had confessed him, comforted him, and gave him penance,
and shut him in a little cell seven years long,
and gave to him bread and water,
and in the meanwhile he governed the church himself.
At the end of seven years an angel came to the prison, and said to him that
he had done well his penance,
and bade him go out of the prison.
To whom he said:</p>
<p class="conversation" style="color: #3d8b3d;">“I may not go out,
for my lord St. Remigius hath closed the door and sealed it.”</p>
<p>And the angel said to him:</p>
<p class="conversation" style="color: #3d8b3d;">“Know thou that the door of heaven is opened to thee; I shall open this door without breaking of the seal which St. Remigius hath sealed.”</p>
<p>And anon the door was opened.
Then Genebald fell down in the midst of the door in manner of a cross, and said:</p>
<p class="conversation" style="color: #3d8b3d;">“If our Lord Jesu Christ came hither I shall not go out but if St. Remigius, which shut and closed me herein, come and bring me out.”</p>
<p>And then the angel went anon and fetched <mark>St. Remigius</mark> and brought him to Laon, and he delivered him out of prison, and remised him and set him again in his see there,
where he lived after, all the days of his life, holily.
After his death, Thief his son was made bishop after him, which is also a saint in heaven,
and at the last <mark>St. Remigius</mark>, after that God had shown many miracles for him, he departed out of this life unto everlasting joy the year of the incarnation of our Lord five hundred.</p>
</div>

<footer>
  <p><span style="color: #3d8b3d;">Jacobus da Varagine, <cite>Legenda Aurea</cite>, chapter 16.</span></p>
</footer>
</article>
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