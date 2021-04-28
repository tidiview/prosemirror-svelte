<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<p><time datetime="2020-02-12">12<sup>th</sup> Feb. 2020</time></p>


<h1 class="blue"><a href="/blog/en/diotime/page:1">Love according to Diotime</a></h1>

<div class="notices blue">
  <p>In Plato's <cite>Banquet</cite>, a few people gathered for a social gathering exchange views on the meaning of <ruby lang="fr">love<rp>(</rp><rt lang="grc">Érôs</rt><rp>)</rp></ruby>.</p>
  <p>It is there that <a href="/blog/en/eros#note_socrate" title="Socrate" id="socrate">Socrates</a> declares that as a young man, the "philosophy of Love" was taught to him by <a href="/blog/en/eros#note_diotime" title="Diotime" id="diotime">Diotime</a>, priestess and prophet.</p>
  <p>Below, Socrates asks Diotime several questions about love.</p>
</div>


<h2 class=blue>Love according to the character of Diotime in Plato's <citeBanquet</cite></h2>

<div id="translation-text-rousi">
  <table>
  <thead>
  <tr>
  <th><span hidden="">hidden</span></th>
  <th><span hidden="">hidden</span></th>
  <th><span hidden="">hidden</span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><sup>203a</sup></td>
  <td>【SOCRATE】</td>
  <td>— What is his father, I said, and what is his mother?</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td></td>
  </tr>
  <tr>
  <td><sup>203b</sup></td>
  <td>【<mark>DIOTIME</mark>】</td>
  <td>— It's a pretty long story, she replied. I'll tell you about it, though.</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td>It should be known that, on the day when Aphrodite was born, the gods feasted: among them was Mètis' son, <a id="poros" href="/blog/ja/eros#note_poros">Poros</a>.</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td>Now, when the banquet was over, <a id="penia" href="/blog/ja/eros#note_penia">Penia</a>, arrived, who had come to beg as it is natural on a day of feast, and was standing on the doorstep.</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td>Now Poros, who had gotten drunk on  <a id="nectar" href="/blog/ja/eros#note_nectar">nectar</a>, for wine did not yet exist at that time, dragged himself into Zeus' garden and, overwhelmed by drunkenness, fell asleep there.</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td></td>
  </tr>
  <tr>
  <td><sup>203c</sup></td>
  <td></td>
  <td>Then Penia, in her shortage, had the project to have a child made by Poros; she lay next to him and became pregnant with Eros.</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td>If Eros became the next one to Aphrodite and her servant, it is because he was born during the celebrations given in honour of the birth of the goddess; and if at the same time he is by nature in love with beauty, it is because Aphrodite is beautiful.</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td>Because he is the son of Poros and Penia, Eros is in the following condition.</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td></td>
  </tr>
  <tr>
  <td><sup>203d</sup></td>
  <td></td>
  <td>First, it is still poor, and it is far from being delicate and beautiful, as most people believe. On the contrary, he is rough, unclean, barefoot and has no shelter, always lying on the ground and rough, sleeping under the stars on the doorstep and on the side of the road, because, since he takes after his mother, he shares the poverty he has.</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td>Like his father, on the other hand, he is on the lookout for what is beautiful and what is good, he is manly, determined, ardent, he is a formidable hunter; he never ceases to weave tricks, he is passionate about knowledge and fertile in expedients, he spends all his time <a id="philosopher" href="/blog/ja/eros#note_philosopher">philosophizing</a>, he is a formidable wizard, a magician and an expert.</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td></td>
  </tr>
  <tr>
  <td><sup>203e</sup></td>
  <td></td>
  <td>It should be added that by nature it is neither immortal nor mortal.</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td>In the space of a single day, sometimes it is in bloom, full of life, sometimes it is dying; then it comes back to life when its expedients succeed by virtue of the nature it takes from its father;</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td>but what his expedients constantly provide him escapes him; so Eros is never in poverty or opulence.</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td>Moreover, it is halfway between knowledge and ignorance.</td>
  </tr>
  </tbody>
  </table>
</div>


<footer>
  <p>Extract from Plato, <cite>Banquet</cite>, from paragraphs 203a to 203e.</p>
  <p><time datetime="P2M">2 min</time>.</p>
</footer>


<aside>

<h3 class="blue">Notes</h3>

  <h4 id="note_socrate" class="blue note">Socrates</h4>

  <div class="notices blue">
    <p><a href="/blog/en/eros#socrate" title="Socrate" id="note_socrate"><ruby lang="fr">Socrate<rp>(</rp><rt lang="grc">Σωκράτης</rt><rp>)</rp></ruby></a> is a philosopher of Greek antiquity but Socrates himself did not write, so here he is a character in the work of his disciple, the philosopher Plato.</p>
  </div>
  <footer>
    <p class="puce"><a href="/blog/en/eros#socrate" title="Socrate">back to text ↩</a></p>
  </footer>

  <h4 id="note_diotime" class="blue note">Diotime</h4>

  <div class="notices blue">
    <p>There is no other source mentioning <a href="/blog/en/eros#diotime" title="Diotime" id="note_diotime"><ruby lang="fr">Diotime<rp>(</rp><rt lang="grc">Διοτίμα</rt><rp>)</rp></ruby></a>'s name outside the Banquet, where she appears as a priestess and prophetess from the city of Mantue. With Diotime, it is philosophy that enters the dialogue which, in Luc Brisson's words, "opens up a new dimension, that of the intelligible". Socrates says of her that she "taught him about love".</p>
    <p>Its name means "honored by Zeus" or "honoring Zeus".</p>
    <p>Mantue, which was considered to be his birthplace, was a city of Arcadia, an ancient Greek city, located on the Peloponnesus Peninsula. The name of Mantuea is similar to the word mántis, which means "the diviner" in ancient Greek.</p>
  </div>
  <footer>
    <p class="puce"><a href="/blog/en/eros#diotime" title="Diotime">back to text ↩</a></p>
  </footer>

  <h4 id="note_poros" class="blue note">Poros</h4>

  <div class="notices blue">
    <p><a href="/blog/en/eros#poros" title="Poros"><ruby lang="en">Poros<rp>(</rp><rt lang="grc">Πόρος</rt><rp>)</rp></ruby></a>, in Greek, means "passage", hence "resource", "expedient".</p>
  </div>
  <footer>
    <p class="puce"><a href="/blog/en/eros#poros" title="Poros">back to text ↩</a></p>
  </footer>

  
  <h4 id="note_penia" class="blue note">Penia</h4>

  <div class="notices blue">
    <p><a href="/blog/en/eros#penia" title="Penia"><ruby lang="fr">Penia<rp>(</rp><rt lang="grc">Πενία</rt><rp>)</rp></ruby></a>, that is, in Greek, Poverty.</p>
  </div>
  <footer>
    <p class="puce"><a href="/blog/en/eros#penia" title="Penia">back to text ↩</a></p>
  </footer>

  <h4 id="note_nectar" class="blue note">nectar</h4>

  <div class="notices blue">
    <p>Le <a href="/blog/en/eros#nectar" title="nectar" id="note_nectar">nectar</a> is the drink of the gods, the source of their immortality.</p>
  </div>
  <footer>
    <p class="puce"><a href="/blog/en/eros#nectar" title="nectar">back to text ↩</a></p>
  </footer>

  <h4 id="note_philosopher" class="blue note">philosopher</h4>

  <div class="notices blue">
    <p><a href="/blog/en/eros#philosopher" title="Philosophize" id="note_philosopher">Philosophize</a>, that is also literally to "love wisdom".</p>
  </div>
  <footer>
    <p class="puce"><a href="/blog/en/eros#philosopher" title="Philosophize">back to text ↩</a></p>
  </footer>

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