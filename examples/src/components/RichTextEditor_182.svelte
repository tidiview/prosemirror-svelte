<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div class="list-blog-date">
<p><span>12</span><sup>th</sup> <i class="fa fa-calendar-o fa-2x"></i></p>
<p>Feb.</p>
<p><span>2020</span></p>
</div>
<h1 lang="en"><a href="/blog/en/marivaux" rel="bookmark">Marivaux, Slave island</a></h1>

<div class="notices red">
<p>In a fantasy antiquity, Iphicrate, a young Athenian nobleman, finds himself thrown on the shore of an island with his servant Harlequin.
The master and the valet were joined by another duo formed by a mistress, Euphrosine, and her next, Cleanthis.
Trivelin welcomes them by explaining the laws of the island: power relations are systematically reversed.
The newly arrived masters and slaves had to exchange their clothes, conditions and even their names.</p>
</div>

<h2>Scene 2</h2>
<div id="translation-text-rousi">
<style>.list-blog-padding #translation-text-rousi tr td:first-child {color: #000;font-size: 1.25rem;text-align: right;vertical-align: top;} tr td {vertical-align: top;}</style>
<table>
<thead>
<tr>
<th style="text-align: right;"><span hidden="">hidden</span></th>
<th><span hidden="">hidden</span></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: right;"></td>
<td></td>
<td><span style="color:#b2b2b2">TRIVELIN, with five or six islanders, arrives leading a lady, EUPHROSINE, and her maid, CLEANTHIS, and sees IPHICRATES about to assault HARLEQUIN.</span></td>
</tr>
<tr>
<td style="text-align: right;">TRIVELIN:</td>
<td>—</td>
<td><span style="color:#b2b2b2">(He disarms him.)</span> Stop! What do you think you're doing?</td>
</tr>
<tr>
<td style="text-align: right;">IPHICRATES:</td>
<td>—</td>
<td>Punishing my slave for his insolence.</td>
</tr>
<tr>
<td style="text-align: right;">TRIVELIN:</td>
<td>—</td>
<td>Your slave? But he's nothing of the kind -I can see we're going to have to work on your vocabulary. <br>(He takes the sword of Iphicrates and gives it to Harlequin.) Take this sword, comrade, it is yours.</td>
</tr>
<tr>
<td style="text-align: right;">HARLEQUIN:</td>
<td>—</td>
<td>And good morning to you too, comrade, how nice to meet you.</td>
</tr>
<tr>
<td style="text-align: right;">TRIVELIN:</td>
<td>—</td>
<td>What do you call yourself?</td>
</tr>
<tr>
<td style="text-align: right;">HARLEQUIN:</td>
<td>—</td>
<td>Are you asking me what my name is?</td>
</tr>
<tr>
<td style="text-align: right;">TRIVELIN:</td>
<td>—</td>
<td>I am, yes.</td>
</tr>
<tr>
<td style="text-align: right;">HARLEQUIN:</td>
<td>—</td>
<td>I haven't got one, comrade.</td>
</tr>
<tr>
<td style="text-align: right;">TRIVELIN:</td>
<td>—</td>
<td>What do you mean, you haven't got a name?</td>
</tr>
<tr>
<td style="text-align: right;">HARLEQUIN:</td>
<td>—</td>
<td>I haven't, comrade; all I've got are the ones he calls me; sometimes he calls me Harlequin, and sometimes Oi, You!</td>
</tr>
<tr>
<td style="text-align: right;">TRIVELIN:</td>
<td>—</td>
<td>Oi! How familiar of him; but we often find employers are careless with proper names. What about him, what does he call himself?</td>
</tr>
<tr>
<td style="text-align: right;">HARLEQUIN:</td>
<td>—</td>
<td>Oh he's got a name alright; this is Monsieur Iphicrates.</td>
</tr>
<tr>
<td style="text-align: right;">TRIVELIN:</td>
<td>—</td>
<td>Right; for now, you'll be swapping names; it's your turn to be M. Iphicrates; and you, you're now called Harlequin, also known as Oi, You.</td>
</tr>
<tr>
<td style="text-align: right;">HARLEQUIN:</td>
<td>—</td>
<td><span style="color:#b2b2b2">(Jumping for joy; to his master.)</span> Oh! oh! what larks! Oi! M. Oi!</td>
</tr>
<tr>
<td style="text-align: right;">TRIVELIN:</td>
<td>—</td>
<td><span style="color:#b2b2b2">(To HARLEQUIN.)</span> Please do try and remember, now that you've got his name, that you haven't been given it to jump you up, but to peg him down.</td>
</tr>
<tr>
<td style="text-align: right;">HARLEQUIN:</td>
<td>—</td>
<td>Oh yes, yes; he needs a good pegging, don't you?</td>
</tr>
<tr>
<td style="text-align: right;">IPHICRATES:</td>
<td>—</td>
<td><span style="color:#b2b2b2">(Looking at HARLEQUIN.)</span> Idiot!</td>
</tr>
<tr>
<td style="text-align: right;">HARLEQUIN:</td>
<td>—</td>
<td>Now tell me, my new-found friend, there he is, being familiar with the names again; is that allowed?</td>
</tr>
<tr>
<td style="text-align: right;">TRIVELIN:</td>
<td>—</td>
<td>At this stage of the game, he can say whatever he likes to you. <br><span style="color:#b2b2b2">(To IPHICRATES.)</span> Harlequin, you're in a very difficult situation, and I'm sure you're angry - with M. Iphicrates, and with me. <br>Don't hold back; let it all out; call him every name under the sun, me as well; that's all allowed, at this stage. <br>But, once we've got through all that, do remember that you're now Harlequin, and this is M. Iphicrates, and you are now to him what he once was to you; those are the rules here; and it's my job, in this particular sector of the Republic, to see that they're enforced.</td>
</tr>
<tr>
<td style="text-align: right;">HARLEQUIN:</td>
<td>—</td>
<td>Nice work if you can get it.</td>
</tr>
<tr>
<td style="text-align: right;">IPHICRATES:</td>
<td>—</td>
<td>Me, slave to that!</td>
</tr>
<tr>
<td style="text-align: right;">TRIVELIN:</td>
<td>—</td>
<td>He did use to be yours.</td>
</tr>
<tr>
<td style="text-align: right;">HARLEQUIN:</td>
<td>—</td>
<td>Sad, isn't it? Don't worry, so long as he's good and obedient, I shall treat him really well.</td>
</tr>
<tr>
<td style="text-align: right;">IPHICRATES:</td>
<td>—</td>
<td>So, I'm allowed to say whatever I like to him, am I?; well, it's not enough; I should also like the use of a large stick.</td>
</tr>
<tr>
<td style="text-align: right;">HARLEQUIN:</td>
<td>—</td>
<td>Comrade, I think he wants to say a few words to my back: I should like to place it under official Republican protection, if I may.</td>
</tr>
<tr>
<td style="text-align: right;">TRIVELIN:</td>
<td>—</td>
<td>You're quite safe.</td>
</tr>
<tr>
<td style="text-align: right;">CLEANTHIS:</td>
<td>—</td>
<td><span style="color:#b2b2b2">(To TRIVELIN.)</span> Your Honour, I'm a slave too, hello - came off the same ship; don't forget me, will you?</td>
</tr>
<tr>
<td style="text-align: right;">TRIVELIN:</td>
<td>—</td>
<td>No I shan't; I had rather guessed your occupation from your outfit - and was about to give you the details of your new situation, when I noticed this gentleman up in arms. <br>I've a few more things still to say to him, if you don't mind. Harlequin!</td>
</tr>
<tr>
<td style="text-align: right;">HARLEQUIN:</td>
<td>—</td>
<td><span style="color:#b2b2b2">(Thinking he's being called.)</span> Eh!...sorry; name; Iphicrates.</td>
</tr>
<tr>
<td style="text-align: right;">TRIVELIN:</td>
<td>—</td>
<td><span style="color:#b2b2b2">(Continuing.)</span> Please try not to lose your temper; you do know where we are, I take it?</td>
</tr>
<tr>
<td style="text-align: right;">HARLEQUIN:</td>
<td>—</td>
<td>Oh yes, in a very nice place.</td>
</tr>
<tr>
<td style="text-align: right;">CLEANTHIS:</td>
<td>—</td>
<td>A very well-run place.</td>
</tr>
<tr>
<td style="text-align: right;">TRIVELIN:</td>
<td>—</td>
<td>Don't interrupt me, please. Thank you. <br>I can tell that you do. <br>When our ancestors, tired of the cruelty of their owners, fled from Greece and came to make their new home here, their memories of their previous lives were very bitter. <br>They had suffered a great deal. <br>So great, that the very first law they passed here was that any Master who ended up stranded here on the Island, whether shipwrecked or merely lost, should be put to death, and that any slaves with them should, consequently, be set free. <br>Vengeance dictated that law; twenty years later, Reason repealed it. <br>And decreed a gentler one in its place. <br>We no longer exact vengeance; we re-educate. <br>It is no longer your necks we seek to break, but your uncivilised hearts; we subject you to slavery, only that you may feel, and know, its horrors; we humiliate you only that you may, condemning us in our pride, grow to repent yours. <br>Your enslavement - or your re-education in the basics of being human - will last three years, at the end of which time you will be allowed home - if your masters are satisfied with your progress; should you, however, show no signs of improvement, you will be detained here, at our pleasure, so as to prevent any new misdemeanours which you might otherwise continue to commit elsewhere, and so as to make your stay more bearable, you'll be married off to one of our citizens. <br>Those are our rules; I trust you'll find their rigour salutary. <br>In fact, thank the lucky stars that led you here: you come to us arrogant, unjust and hard of heart; but no matter how sick you are, we'll endeavour to heal you - you're not so much our prisoners, as our patients. <br>And after only three years of treatment, I promise you, you will be well - by which I mean rational, humane, human - for the rest of your lives.</td>
</tr>
<tr>
<td style="text-align: right;">HARLEQUIN:</td>
<td>—</td>
<td>And all for free, and no pills, no surgery... where else could you get well soon that cheaply?</td>
</tr>
</tbody>
</table>
<p><span style="color: #b52b27;">Marivaux, “Slave island”, Scene 2</span></p>
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