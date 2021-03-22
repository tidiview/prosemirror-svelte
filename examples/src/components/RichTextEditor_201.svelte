<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<h1 class="yellow">Adonis</h1>

<section>
  <figure><picture><source sizes="(max-width: 767px) 98vw, 52vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis_700x676.webp 700w" type="image/webp"><img src="/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane_700x1050.jpg" alt="Jean MONIER, “The Death of Adonis”" title="Jean MONIER, “The Death of Adonis”" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis_700x676.jpg 700w"></picture><figcaption>Venus looks at Adonis dying killed by a wild boar</figcaption></figure>
</section>

<section>
  <article>
    <div class="notices yellow">
    <p>There is a little text at the origin of this representation of <cite>The Death of Adonis</cite> painted by <a href="https://en.wikipedia.org/wiki/Jean_Monier" title="https://en.wikipedia.org/wiki/Jean MONIER">Jean Monier</a> during the 1640's and exposed on the second storey of the <a href="https://en.wikipedia.org/wiki/Château_de_Cheverny" title="https://en.wikipedia.org/wiki/Château_de_Cheverny">Château de Cheverny</a>.</p>
    <p>It has been written by a latin writter that lived during the roman empire, <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid">Ovid</a>, and is part of Book 10 of his most famous work, <a href="https://en.wikipedia.org/wiki/Metamorphoses" title="https://en.wikipedia.org/wiki/Metamorphoses"><cite>The Metamorphoses</cite></a>.</p>
    <p>It tells the tragic end of <a href="https://en.wikipedia.org/wiki/Adonis" title="https://en.wikipedia.org/wiki/Adonis">Adonis</a>, lover of <a href="https://en.wikipedia.org/wiki/Venus_(mythology)" title="https://en.wikipedia.org/wiki/Venus">Venus</a>.</p>
    <p>Here it is below.</p>
    </div>
  </article>
</section>

<section>
  <article>
    <section>
    <h2 class="yellow">Adonis according to <cite>The Metamorphoses</cite></h2>
      <ol>
      <li value="708">
      She warned him, and made her way through the air, drawn by harnessed swans, but his courage defied the warning.</li>
      <li value="710">
      By chance, his dogs, following a well-marked trail, roused a wild boar from its lair, and as it prepared to rush from the trees, Cinyras’s grandson caught it a glancing blow.</li>
      <li>Immediately the fierce boar dislodged the blood-stained spear, with its crooked snout, and chased the youth, who was scared and running hard.</li>
      <li value="715">
      It sank its tusk into his groin, and flung him, dying, on the yellow sand.</li>
      <li>Cytherea, carried in her light chariot through the midst of the heavens, by her swans’ swiftness, had not yet reached Cyprus: she heard from afar the groans of the dying boy,</li>
      <li value="720">
      and turned the white birds towards him.</li>
      <li>When, from the heights, she saw the lifeless body, lying in its own blood, she leapt down, tearing her clothes, and tearing at her hair, as well, and beat at her breasts with fierce hands, complaining to the fates.</li>
      <li value="725">
      « And yet not everything is in your power » she said.</li>
      <li>« Adonis, there shall be an everlasting token of my grief, and every year an imitation of your death will complete a re-enactment of my mourning.</li>
      <li>But your blood will be changed into a flower.</li>
      <li value="730">
      Persephone, you were allowed to alter a woman’s body, Menthe’s, to fragrant mint: shall the transformation of my hero, of the blood of Cinyras, be grudged to me? »</li>
      <li>So saying, she sprinkled the blood with odorous nectar: and, at the touch, it swelled up, as bubbles emerge in yellow mud.</li>
      <li value="735">
      In less than an hour, a flower, of the colour of blood, was created such as pomegranates carry, that hide their seeds under a tough rind.</li>
      <li>But enjoyment of it is brief; for, lightly clinging, and too easily fallen,</li>
      <li value="739"> the winds deflower it, which are likewise responsible for its name, windflower: anemone.</li>
      </ol>
    </section>
    <section>
      <p style="color: #df8a13;">Ovid, <cite>The Metamorphoses</cite>, Book 10, 708 and following</p>
    </section>
  </article>
</section>
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