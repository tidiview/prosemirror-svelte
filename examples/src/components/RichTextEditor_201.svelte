<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="yellow">Adonis</h1>
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
<div class="notices yellow">
<p>There is a little text at the origin of this representation of “The Death of Adonis” painted by <a href="https://en.wikipedia.org/wiki/Jean_Monier" title="https://en.wikipedia.org/wiki/Jean MONIER">Jean Monier</a> and exposed on the second storey of the Château de <a href="https://en.wikipedia.org/wiki/Château_de_Cheverny" title="https://en.wikipedia.org/wiki/Château_de_Cheverny">Cheverny</a>.<br>
It has been written by a latin writter that lived during the roman empire, <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid">Ovid</a>, and is part of Book 10 of his most famous work, “<a href="https://en.wikipedia.org/wiki/Metamorphoses" title="https://en.wikipedia.org/wiki/Metamorphoses">The Metamorphoses</a>”.<br>
It tells the tragic end of <a href="https://en.wikipedia.org/wiki/Adonis" title="https://en.wikipedia.org/wiki/Adonis">Adonis</a>, lover of <a href="https://en.wikipedia.org/wiki/Venus_(mythology)" title="https://en.wikipedia.org/wiki/Venus">Venus</a>.<br>
Here it is below.</p>
</div>
<h2 class="yellow">Adonis according to “The Metamorphoses”</h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
<sup>708</sup>
She warned him, and made her way through the air, drawn by harnessed swans, but his courage defied the warning.<br>
<sup>710</sup>
By chance, his dogs, following a well-marked trail, roused a wild boar from its lair, and as it prepared to rush from the trees, Cinyras’s grandson caught it a glancing blow.<br>
Immediately the fierce boar dislodged the blood-stained spear, with its crooked snout, and chased the youth, who was scared and running hard.<br>
<sup>715</sup>
It sank its tusk into his groin, and flung him, dying, on the yellow sand.<br>
Cytherea, carried in her light chariot through the midst of the heavens, by her swans’ swiftness, had not yet reached Cyprus: she heard from afar the groans of the dying boy,<br>
<sup>720</sup>
and turned the white birds towards him.<br>
When, from the heights, she saw the lifeless body, lying in its own blood, she leapt down, tearing her clothes, and tearing at her hair, as well, and beat at her breasts with fierce hands, complaining to the fates.<br>
<sup>725</sup>
« And yet not everything is in your power » she said.<br>
« Adonis, there shall be an everlasting token of my grief, and every year an imitation of your death will complete a re-enactment of my mourning.<br>
But your blood will be changed into a flower.<br>
<sup>730</sup>
Persephone, you were allowed to alter a woman’s body, Menthe’s, to fragrant mint: shall the transformation of my hero, of the blood of Cinyras, be grudged to me? »<br>
So saying, she sprinkled the blood with odorous nectar: and, at the touch, it swelled up, as bubbles emerge in yellow mud.<br>
<sup>735</sup>
In less than an hour, a flower, of the colour of blood, was created such as pomegranates carry, that hide their seeds under a tough rind.<br>
<sup>739</sup>
But enjoyment of it is brief; for, lightly clinging, and too easily fallen, <sup>739</sup> the winds deflower it, which are likewise responsible for its name, windflower: anemone. <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
<p><span style="color: #df8a13;">Ovid, “The Metamorphoses”, Book 10, 708 and following</span></p>
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