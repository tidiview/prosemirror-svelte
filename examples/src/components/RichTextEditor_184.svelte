<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<p><time datetime="2018-08-07">7<sup>th</sup> Aug. 2018</time></p>


<h1 lang="en"><a href="/blog/en/priscus">Meeting of King Chilperic and Priscus according to Gregory of Tours in <cite>History of the Franks</cite></a></h1>

<div class="notices green">
<p>This excerpt from Book <abbr title="six">VI/<abbr> chapter 5 of the <a href="https://en.wikipedia.org/wiki/Gregory_of_Tours#History_of_the_Franks" title="https://en.wikipedia.org/wiki/Gregory_of_Tours#History_of_the_Franks"><cite><ruby lang="en">History of the Franks<rp>(</rp><rt lang="la">Historia Francorum</rt><rp>)</rp></ruby></cite></a> by <a href="https://en.wikipedia.org/wiki/Gregory_of_Tours" title="https://en.wikipedia.org/wiki/Gregory_of_Tours">Gregory of Tours</a> relates the meeting of <a href="https://en.wikipedia.org/wiki/Chilperic_I" title="https://en.wikipedia.org/wiki/Chilperic_I">King Chilperic <abbr title="the first">I<sup>st</sup></abbr></a> and one of his subjects of the Jewish religion named Priscus as witnessed by the author.</p>
</div>

<div class="notices green">
<p>The story is presented as a kind of spiritual warfare without concession despite the very different conditions of the protagonists.<br>
Priscus does not take anything away from his faith, thus allowing us to perceive his faith, its irreducibility in relation to Christianity.<br>
We find ourselves surprised, destabilized, we who, without realizing it, easily imagine the Middle Ages as univocally Christian.<br>
Priscus reminds us of the liveliness, the originality, the singularity of the Jewish faith of which another witness could for example be <a href="https://en.wikipedia.org/wiki/Rashi" title="https://en.wikipedia.org/wiki/Rashi">Rachi of Troyes</a>.<br>
Fascinating!</p>
</div>

<h2>Meeting of Chilperic <abbr title="the first">I<sup>st</sup></abbr> and Priscus</h2>

<p>chapter 5</p>
<p>While king Chilperic was still at <a href="#note_villa" title="villa" id="villa" class="green">the villa mentioned above</a> he directed his baggage to be moved and made arrangements to go to Paris.</p>
<p>And when I went to see him to say good­by, a certain Jew named Priscus came in who was on friendly terms with him and helped him buy costly articles.</p>
<p>The king took him by the hair in a gentle way and said to me:</p>
<p class="conversation">«Come, bishop of God, and lay your hands on him».</p>
<p>But he struggled and the king said to him:</p>
<p class="conversation">«O obstinate­minded and ever disbelieving race, which does not recognize the Son of God promised to it by the voices of its prophets and does not recognize the mysteries of the church prefigured in its own sacrifices».</p>
<p>To these words the Jew replied:</p>
<p class="conversation">«God never married nor was blessed with offspring nor allowed any one to share his power, but he said by the mouth of Moses: 'See, see that I am the Lord and except me there is no God. I shall kill and I shall make alive; I shall wound and I shall heal».</p>
<p>To that the king replied:</p>
<p class="conversation">«God has given birth from his spiritual womb to an eternal son who is neither younger than him nor less in power».</p>
<p class="conversation">He said himself <span style="color: #999">(Borrowing done for translation by the Vulgate of Psalm <abbr title="sixty">CX</abbr>, verse 3. Does not exist in the Hebrew text)</span>:</p>
<p class="conversation">«I gave you my breast before dawn.»</p>
<p class="conversation">This son, who was born before centuries, has sent him over the last centuries into the world as healer, as your prophet (Psalms Book, <abbr title="fifty-seven">CVII</abbr> <span style="color: #999">(Vulgate CVI, 20)</span> declares:</p>
<p class="conversation">«He sent his Word and cured them».</p>
<p class="conversation">As claiming as you do that he cannot generate himself;</p>
<p class="conversation">Listen to your prophet speak under the dictation of the Lord <span style="color: #999">(Isaiah, <abbr title="sixty six">LXVI</abbr>, 9. The interpretation of the biblical text by Gregory of Tours is questionable.)</span>:</p>
<p class="conversation">«Why could not I, who make the others give birth, also give birth?».</p>
<p class="conversation">These words he said them about the people who reborn in him by faith.</p>
<p>To that the Jew replied:</p>
<p class="conversation">«How could God become a man, be born of a woman, be exposed to beatings and sentenced to death?».</p>
<p>On what the king keeping quiet, I interposed in the middle of them and said:</p>
<p class="conversation">«If God, the son of God, has made himself human the cause of it has been not in his need, but in ours, for he could not redeem the captive man from sin and reduced by the devil to slavery only by taking human nature.</p>
<p class="conversation">It is by taking testimonies not to the gospels, nor to the apostle to whom you do not believe, but to your books that I will pierce you with the tip of your own sword as one tells David once did when he slit Goliath's throat.</p>
<p class="conversation">Therefore listen to your prophet saying that God had to become a man <span style="color: #999">(R. Buchner (Zehn Bacher Geschichten, II, p. 10, note 1)</span>, bring this allusion to a Jeremie <span style="color: #999">(<abbr title="seventeen">XVII</abbr>, verse 9)</span>, that Gregory borrowed from a text other than that of the Vulgate:</p>
<p class="conversation">«He is both God and man, and who knew him?».</p>
<p>He said elsewhere <span style="color: #999">(Baruch, <abbr title="three">III</abbr>, verses 36 to 38)</span>:</p>
<p class="conversation">«He is the one who is our God, and we will not recognize any other than him;»</p>
<p class="conversation">He found the whole path of science and gave it to Jacob his servant and to Israel his beloved.</p>
<p class="conversation">After that he appeared on the earth and he talked with the men.</p>
<p class="conversation">As for his birth from a virgin, listen also to what your prophet <span style="color: #999">(Isaie, VII, 14 says. This verse was reproduced by St. Matthiew (chapter <abbr title="one">I</abbr>, verses 23 and 24), which completes the text of the prophete with words: «That is God with us»)</span>:</p>
<p class="conversation">«Now a virgin will conceive in her womb and she will bring a son and he will be called Emmanuel, which means: God with us».</p>
<p class="conversation">With regard to the beatings he had to suffer, nails that he had been punctured and other outrages that he had to endure and were inflicted upon him, another prophet who spoke about it <span style="color: #999">(Psalms, <abbr title="twenty two">XXII</abbr>, verses 17, 19)</span>:</p>
<p class="conversation">«They pierced my hands and feet; they shared my clothes with each other etc… »
And he says further <span style="color: #999">(Psalmes, <abbr title="sixty nine">LXIX</abbr>, 22.)</span>:</p>
<p class="conversation">«They gave me fiel and in my thirst they watered me with vinegar».</p>
<p class="conversation">And it was the same David who said that he brought in his kingdom by the very gibbet of the cross the fallen world and subjected to the devil's domination:
«The Lord, he said <span style="color: #999">(according to Buchner, </abbr title="opus citatum">op. cit.</abbr>, <abbr title="two">II</abbr> 11, <abbr title="note">n.</abbr> 7), these words would be a Christian Interpolation which would not have been accepted by the authors of the Vulgate)</span>.</p>
<p class="conversation">Not that he did not rule before the Father, but he received a new kingdom to reign on the people he had issued from the slavery of the devil».</p>
<p>To that the Jew replied:</p>
<p class="conversation">«What need God had to suffer all these things?».</p>
<p>I told him:</p>
<p class="conversation">«I have already told you that God has created the innocent man, but that he, circled by the ruse of the snake, disobeyed the precept;</p>
<p class="conversation">And that's why hunted from the rest of heaven, he was handed over to the sorrow of this world;</p>
<p class="conversation">but by the death of Christ, the only son of God, he was reconciled with God the Father».</p>
<p>The Jew says:</p>
<p class="conversation">«God could not send prophets or apostles to bring him back into the path of salvation without humiliating himself by incarnating himself».</p>
<p>To that I replied:</p>
<p class="conversation">«From the beginning the human race has always sinned without ever having frightened nor by the flood of the deluge, the fire of Sodom, neither the wounds of Egypt nor the miraculous division of the waters of the sea and the Jordan, he has always resisted God's law, and not just he didn't believe, but still he killed those who were preaching penance.</p>
<p class="conversation">Also if he had not come down himself to buy back, no other could have done so.</p>
<p class="conversation">Born again thanks to his nativity, washed by baptism, healed by his wound, recovered by his resurrection, we were glorified by his ascension.</p>
<p class="conversation">Moreover, it was your prophet who said that he would come to remedy our diseases <span style="color: #999">(Isaiah, <abbr title="fifty three">LIII</abbr>, 5)</span>:</p>
<p class="conversation">«We have been cured by his brutality».</p>
<p class="conversation">And elsewhere he says <span style="color: #999">(Isaiah, <abbr title="fifty three">LIII</abbr>, 7)</span>:</p>
<p class="conversation">«Like a sheep it has been led to the killing and
even if a lamb remains silent in front of the one who taps it, he has not opened his mouth».</p>
<p class="conversation">It was in humiliation that his conviction was torn.</p>
<p class="conversation">Who told his origin?</p>
<p class="conversation">«Lord of Armies is his name <span style="color: #999">(Isaiah, <abbr title="fifty four">LIV</abbr>, 4)</span>».</p>
<p class="conversation">It is from him that this Jacob of whom you are wandering to
come from said by blessing his son Judas as if he spoke of Christ himself, son of God (Gregory of Tours is inspired in his replica of Genese <span style="color: #999">(<abbr title="forty nine">XLIX</abbr>, verses 8 to 12 without literally reproducing the text)</span>:</p>
<p class="conversation">«Your father's sons will adore you, Lion cub Juda».</p>
<p class="conversation">It's from a germ, my son, that you came out.</p>
<p class="conversation">You put yourself to bed and you have slept like a lion, like a lion cub.</p>
<p class="conversation">Who woke him up?</p>
<p class="conversation">His eyes are more beautiful than wine and his teeth whiter than milk.</p>
<p class="conversation">Who will wake him, he says, and even though <span style="color: #999">(Christ)</span> himself said <span style="color: #999">(St. John, <abbr title="ten">X</abbr>, 18)</span>:</p>
<p class="conversation">«I have the power to leave life and have the power to take it back»,
However Paul declared <span style="color: #999">(Epistle to the Romans, <abbr title="ten">X</abbr>, 9. The text of the Vulgate is a little different)</span>:</p>
<p class="conversation">«If you confess from your mouth Jesus as Lord and if you believe in your heart that God resurrected him from the dead, you shall be saved»:</p>
<p class="conversation">«The one who will not believe that God has risen him from the dead cannot be saved».</p>

<p>Although I said this and more, the wretched man felt no remorse and refused to believe.</p>
<p>Then when he was silent and the king saw that he was not conscience stricken because of my words, he turned to me and asked to receive my blessing that he might depart He said:</p>
<p class="conversation">«I will say to you, bishop, what Jacob said to the angel, for he said to him, “I will not let you go until you bless me”».</p>
<p>So saying he ordered water brought for our hands.</p>
<p>After washing them we prayed, and taking bread I thanked God and took it myself and offered it to the king, and after a draught of wine I said farewell and left.
And the king mounted his horse and returned to Paris with his wife and daughter and all his household.</p>

<footer>
  <p><span style="color: #3d8b3d;">Gregory of Tours, <cite>History of the Franks</cite>, Book <abbr title="six">VI</abbr> chapter 5.</span></p>
<footer>

<aside>
<h3 class="green">Notes</h3>

<h4 id="note_villa" class="green">the villa mentioned above</h4>

<div class="notices green">
  <p>In the text in latin “Novigentum” probably on the site of the present town of Nogent-sur-Marne.</p>
</div>
<footer>
  <p class="puce">back to text <a href="#villa" title="villa">“the villa mentioned above” ↩</a></p>
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