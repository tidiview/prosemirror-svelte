<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div class="list-blog-date">
<p><span>12</span><sup>th </sup><i class="fa fa-calendar-o fa-2x"></i></p>
<p>Feb.</p>
<p><span>2020</span></p>
</div>
<h1 class="blue"><a href="/blog/en/diotime/page:1" rel="bookmark">Love according to Diotime</a></h1>
<div class="notices blue">
<p>In Plato's "Banquet", a few people gathered for a social gathering exchange views on the meaning of <ruby lang="fr">love<rp>(</rp><rt lang="grc">Érôs</rt><rp>)</rp></ruby>.<br>
It is there that <a href="/blog/en/eros#note_socrate" title="Socrate" id="socrate">Socrates</a> declares that as a young man, the "philosophy of Love" was taught to him by <a href="/blog/en/eros#note_diotime" title="Diotime" id="diotime">Diotime</a>, priestess and prophet.<br>
Below, Socrates asks Diotime several questions about love.</p>
</div>
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
<td></td>
<td>【SOCRATE】</td>
<td><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span> — What is his father, I said, and what is his mother ?</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><sup>203b</sup></td>
<td>【DIOTIME】</td>
<td>— It's a pretty long story," she replied. I'll tell you about it, though.</td>
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
<td>Moreover, it is halfway between knowledge and ignorance. <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></td>
</tr>
</tbody>
</table>
</div>
<div class="blog-item-footer">
<p><span>2</span> min.</p>
</div>

<div class="list-blog-padding lang-font" lang="en">
    
<h2 class="blue">Notes</h2>
<h3 id="note_socrate" class="blue">Socrates</h3>
<div class="notices blue">
<p><a href="/blog/en/eros#socrate" title="Socrate" id="note_socrate"><ruby lang="fr">Socrate<rp>(</rp><rt lang="grc">Σωκράτης</rt><rp>)</rp></ruby></a> is a philosopher of Greek antiquity but Socrates himself did not write, so here he is a character in the work of his disciple, the philosopher Plato. <a href="/blog/en/eros#socrate" title="Socrate">Back to note ↑</a></p>
</div>
<h3 id="note_diotime" class="blue">Diotime</h3>
<div class="notices blue">
<p>There is no other source mentioning <a href="/blog/en/eros#diotime" title="Diotime" id="note_diotime"><ruby lang="fr">Diotime<rp>(</rp><rt lang="grc">Διοτίμα</rt><rp>)</rp></ruby></a>'s name outside the Banquet, where she appears as a priestess and prophetess from the city of Mantue. With Diotime, it is philosophy that enters the dialogue which, in Luc Brisson's words, "opens up a new dimension, that of the intelligible". Socrates says of her that she "taught him about love".<br>
Its name means "honored by Zeus" or "honoring Zeus".<br>
Mantue, which was considered to be his birthplace, was a city of Arcadia, an ancient Greek city, located on the Peloponnesus Peninsula. The name of Mantuea is similar to the word mántis, which means "the diviner" in ancient Greek. <a href="/blog/en/eros#diotime" title="Diotime">Back to note ↑</a></p>
</div>
<h3 id="note_poros" class="blue">Poros</h3>
<div class="notices blue">
<p><a href="/blog/en/eros#poros" title="Poros"><ruby lang="fr">Poros<rp>(</rp><rt lang="grc">Πόρος</rt><rp>)</rp></ruby></a>, en grec, signifie «passage», d'où «ressource», «expédient». <a href="/blog/en/eros#poros" title="Poros">Back to note ↑</a></p>
</div>
<h3 id="note_penia" class="blue">Penia</h3>
<div class="notices blue">
<p><a href="/blog/en/eros#penia" title="Penia"><ruby lang="fr">Penia<rp>(</rp><rt lang="grc">Πενία</rt><rp>)</rp></ruby></a>, that is, in Greek, Poverty. <a href="/blog/en/eros#penia" title="Penia">Back to note ↑</a></p>
</div>
<h3 id="note_nectar" class="blue">nectar</h3>
<div class="notices blue">
<p>Le <a href="/blog/en/eros#nectar" title="nectar" id="note_nectar">nectar</a> is the drink of the gods, the source of their immortality. <a href="/blog/en/eros#nectar" title="nectar">Back to note ↑</a></p>
</div>
<h3 id="note_philosopher" class="blue">philosopher</h3>
<div class="notices blue">
<p><a href="/blog/en/eros#philosopher" title="Philosopher" id="note_philosopher">Philosopher</a>, that is also literally to "love wisdom". <a href="/blog/en/eros#philosopher" title="Philosopher">Back to note ↑</a></p>
</div>

    </div>
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