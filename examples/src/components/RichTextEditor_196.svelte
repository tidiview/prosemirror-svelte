<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="yellow">Flora</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore_700x1152.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore_700x1152.jpg" title="Peinture de Jean JOUVENET, “Flore et Zéphyr”, Grand Trianon, Versailles" alt="Peinture de Jean JOUVENET, “Flore et Zéphyr”, Grand Trianon, Versailles" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/04.flore/flore_700x1152.jpg 700w" id="flore_et_zephyr"></picture><figcaption>Zephyrus is presenting a basket of garlands of flowers to Flora</figcaption></figure>
<div class="notices yellow">
<p>At the <a href="https://en.wikipedia.org/wiki/Grand_Trianon" title="https://en.wikipedia.org/wiki/Grand Trianon">Grand Trianon</a> in Versailles, above the fireplace of the Salon Frais, one can see a painting of <a href="https://en.wikipedia.org/wiki/Jean_Jouvenet" title="https://en.wikipedia.org/wiki/Jean_JOUVENET">Jean JOUVENET</a>, “<a href="/docs/en/versailles/trianon/flore#flore_et_zephyr" title="Flore et Zéphyr"><ruby lang="en">Flora<rp>(</rp><rt lang="fr">Flore</rt><rp>)</rp></ruby> <ruby lang="en">and<rp>(</rp><rt lang="fr">et</rt><rp>)</rp></ruby> <ruby lang="en">Zephyrus<rp>(</rp><rt lang="fr">Zéphyr</rt><rp>)</rp></ruby></a>”.<br>
On the edge of a creek, close to nymphs occupied at their toilet, before an angel who, in an unbelievable atmosphere of spring, <a href="https://en.wikipedia.org/wiki/Anemoi#Zephyrus" title="https://en.wikipedia.org/wiki/Anemoi#Zephyrus">Zephyrus</a>, winged man who represents the breeze of the west, presents a basket of garlands of flowers to <a href="https://en.wikipedia.org/wiki/Flora_(deity)" title="https://en.wikipedia.org/wiki/Flora_(deity)">Flora</a>, goddess of this season.<br>
Documents establish that this painting was commissioned by king <a href="https://en.wikipedia.org/wiki/Louis_XIV_of_France" title="https://en.wikipedia.org/wiki/Louis_XIV_of_France">Louis XIV</a> for this piece from a story that was made by the latin writer <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid"><ruby lang="en">Ovid<rp>(</rp><rt lang="la">Ovidius</rt><rp>)</rp></ruby></a> in a extract from one of his works, “<a href="https://en.wikipedia.org/wiki/Fasti_(poem)" title="https://en.wikipedia.org/wiki/The_Festivals"><ruby lang="en">The&nbsp;Festivals<rp>(</rp><rt lang="la">Fasti</rt><rp>)</rp></ruby></a>”.<br>
The writer, while describing traditional festivals and events related to agriculture or astrology according to the seasons of the <a href="https://en.wikipedia.org/wiki/Roman_calendar" title="https://en.wikipedia.org/wiki/Roman_calendar">roman calendar</a>, introduces an original literary process: in his story, poet, he appeals to the gods, questioning himself as a master priest of calendar of the meaning of things and words.<br>
The text below comes from the 5th book and corresponds to the month of May: Ovid speaks directly to <a href="https://en.wikipedia.org/wiki/Flora_(deity)" title="https://en.wikipedia.org/wiki/Flora_(deity)">Flora</a>.<br>
From <a href="/docs/en/versailles/trianon/flore#183" id="ref_183">183 à 192</a>, he asked her for details on the “<a href="https://en.wikipedia.org/wiki/Floralia" title="https://en.wikipedia.org/wiki/Floralia">Floralia</a>” which took place in her honour by the end of April until early May.<br>
Although this is not directly related with the stage visually represented in the painting, this part allows to capture the mystery and charm of the goddess and the link with the representation given by <a href="https://en.wikipedia.org/wiki/Jean_Jouvenet" title="https://en.wikipedia.org/wiki/Jean_JOUVENET">Jean JOUVENET</a>.<br>
<a href="https://en.wikipedia.org/wiki/Flora_(deity)" title="https://en.wikipedia.org/wiki/Flora_(deity)">Flora</a> presents herself by identifying to <a href="https://en.wikipedia.org/wiki/Chloris" title="https://en.wikipedia.org/wiki/Chloris">Chloris</a>, Nymph of the <a href="https://en.wikipedia.org/wiki/Fortunate_Isles" title="https://en.wikipedia.org/wiki/Fortunate_Isles">Fortunate Isles</a>, whose beauty charmed <a href="https://en.wikipedia.org/wiki/Anemoi#Zephyrus" title="https://en.wikipedia.org/wiki/Anemoi#Zephyrus">Zephyrus</a>.<br>
He abduct her, took her for spouse, and gave her sovereignty over flowers.<br>
In between <a href="/docs/en/versailles/trianon/flore#193" id="ref_193">193 à 222</a>, she appears linked to spring, to beauty, to life, surrounded by <a href="https://en.wikipedia.org/wiki/Horae" title="https://en.wikipedia.org/wiki/Hours">Hours</a> and <a href="https://en.wikipedia.org/wiki/Charites" title="https://en.wikipedia.org/wiki/Graces">Graces</a>.</p>
</div>
<h2 id="flora-and-zephyrus" class="yellow">Flora and Zephyrus</h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
<sup><a href="/docs/en/versailles/trianon/flore#ref_183" id="183">183</a></sup>
Come, Mother of flowers, you that joyful games must celebrate.<br>
The previous month, I had deferred to deal with your fest.<br>
<sup>185</sup>
It begins in April and extends in May: you take two months, the end of one, the beginning of the other.<br>
Since the borders of these months are both yours and come back to you, one as much as the other agrees to sing your praises.<br>
It was in May that the Circus' games comes too and the victor's palm cheered at theater;<br>
<sup>190</sup>
may my poem also go hand in hand with circus shows.<br>
Teach me who you are: the opinion of humans is misleading; you will be the best authority to explain your own name.</p>
<p><sup><a href="/docs/en/versailles/trianon/flore#ref_193" id="193">193</a></sup>
That was my request; Here's the answer of the goddess to my requests (in speaking, her mouth breathed a fresh perfume of roses):</p>
<p><sup>195</sup>
“I was <a href="https://en.wikipedia.org/wiki/Chloris" title="https://en.wikipedia.org/wiki/Chloris">Chloris</a>, me that now is known as <a href="https://en.wikipedia.org/wiki/Flora_(deity)" title="https://en.wikipedia.org/wiki/Flora_(deity)">Flora</a>. A Greek letter of my name was altered by Latin pronunciation.<br>
I was <a href="https://en.wikipedia.org/wiki/Chloris" title="https://en.wikipedia.org/wiki/Chloris">Chloris</a>, Nymph of these <a href="https://en.wikipedia.org/wiki/Fortunate_Isles" title="https://en.wikipedia.org/wiki/Fortunate_Isles">Fortunate Isles</a>, where, they said, the Blessed were living once.<br>
To describe to you how beautiful I was would shock my modesty;<br>
<sup>200</sup>
But it is it that gave to my mother a god for son-in-law.</p>
<p>It was spring, I would wandered: when <a href="https://en.wikipedia.org/wiki/Anemoi#Zephyrus" title="https://en.wikipedia.org/wiki/Anemoi#Zephyrus">Zephyrus</a> noticed me, I lelft; he followed me, I fled: he was the stronger.<br>
Moreover, was this abduction not entirely justified by his brother <a href="https://en.wikipedia.org/wiki/Anemoi#Boreas" title="https://en.wikipedia.org/wiki/Anemoi#Boreas">Boreas</a>, who had also dared to remove the girl of <a href="https://en.wikipedia.org/wiki/Erechtheus" title="https://en.wikipedia.org/wiki/Erechtheus">Erechtheus</a>?</p>
<p><sup>205</sup>
However, <a href="https://en.wikipedia.org/wiki/Anemoi#Zephyrus" title="https://en.wikipedia.org/wiki/Anemoi#Zephyrus">Zephyrus</a> repaired his contempt by giving me the title of spouse, and I have no complaints about my marriage.</p>
<p>I enjoy perpetual spring : always the year is bright, always trees are covered with leaves, the earth of greenery.</p>
<p>Among what I have from my dowry, I have a fertile garden:
<sup>210</sup>
the breeze fertiles it, a spring of crystal water sprays it.<br>
My husband filled it with a multitude of noble flowers and said: “To you, Goddess, the sovereignty over flowers”.<br>
Often I wanted to classify and count their colors, without being able to manage it: there were too many to count.</p>
<p><sup>215</sup>
As soon as the leaves shook winter dew, as soon as the rays heated the multicolores corolles,
The <strong><a href="https://en.wikipedia.org/wiki/Horae" title="https://en.wikipedia.org/wiki/Hours"><span style="color: #df8a13;">Hours</span></a></strong> decorated with their colourful dresses gather and <strong><span style="color: #df8a13;">gather my gifts in their light baskets</span></strong>.<br>
Immediately, the <strong><a href="https://en.wikipedia.org/wiki/Charites" title="https://en.wikipedia.org/wiki/Graces"><span style="color: #df8a13;">Graces</span></a></strong> comes, which <strong><span style="color: #df8a13;">bore the crowns
<sup>220</sup>
and garlands to bind their divine hairs</span></strong>”. <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
<p><span style="color: #df8a13;">Ovid, “The Festivals”, Book V, 183-220</span></p>
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