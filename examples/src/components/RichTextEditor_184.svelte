<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div class="list-blog-date">
<p><span>7</span><sup>th </sup><i class="fa fa-calendar-o fa-2x"></i></p>
<p>Aug.</p>
<p><span>2018</span></p>
</div>
<h1 lang="en"><a href="/blog/en/priscus" rel="bookmark">Meeting of King Chilperic and Priscus according to Gregory of Tours</a></h1>

<div class="notices green">
<p>This excerpt from book 6 chapter 5 of the History of the Franks by Gregory of Tours relates the meeting of King Chilperic and one of his subjects of the Jewish religion named Priscus as witnessed by the author. </p>
</div>

<div class="notices green">
<p>The story is presented as a kind of spiritual warfare without concession despite the very different conditions of the protagonists.<br>
Priscus does not take anything away from his faith, thus allowing us to perceive his faith, its irreducibility in relation to Christianity.<br>
We find ourselves surprised, destabilized, we who, without realizing it, easily imagine the Middle Ages as univocally Christian.<br>
Priscus reminds us of the liveliness, the originality, the singularity of the Jewish faith of which another witness could for example be Rachi of Troyes.<br>
Fascinating!</p>
</div>
<h2>Meeting of Chilperic I<sup>st</sup> and Priscus</h2>
<p>5 - While king Chilperic was still at <a href="#note_villa" title="villa" id="villa" class="green">the villa mentioned above</a> he directed his baggage to be moved and made arrangements to go to Paris.
And when I went to see him to say good­by, a certain Jew named Priscus came in who was on friendly terms with him and helped him buy costly articles.
The king took him by the hair in a gentle way and said to me:
«Come, bishop of God, and lay your hands on him».
But he struggled and the king said to him:
«O obstinate­minded and ever disbelieving race, which does not recognize the Son of God promised to it by the voices of its prophets and does not recognize the mysteries of the church prefigured in its own sacrifices».
To these words the Jew replied:
«God never married nor was blessed with offspring nor allowed any one to share his power, but he said by the mouth of Moses: 'See, see that I am the Lord and except me there is no God. I shall kill and I shall make alive; I shall wound and I shall heal».
To that the king replied:
«God has given birth from his spiritual womb to an eternal son who is neither younger than himnor less in power».
He said himself (Borrowing done for translation by the Vulgate of Psalm Cx, 3. Does not exist in the Hebrew text):
«I gave you my breast before dawn.»
This son, who was born before centuries, has sent him over the last centuries into the world as healer, as your prophet (Psalms Book, CVII (Vulgate CVI), 20) declares:
«He sent his Word and cured them».
As claiming as you do that he cannot generate himself;
Listen to your prophet speak under the dictation of the Lord (Isaiah, LXVI, 9. The interpretation of the biblical text by Gregory of Tours is questionable.):
«Why could not I, who make the others give birth, also give birth?».
These words he said them about the people who reborn in him by faith.
To that the Jew replied:
«How could God become a man, be born of a woman, be exposed to beatings and sentenced to death?».
On what the king keeping quiet, I interposed in the middle of them and said:
«If God, the son of God, has made himself human the cause of it has been not in his need, but in ours, for he could not redeem the captive man from sin and reduced by the devil to slavery only by taking human nature.
It is by taking testimonies not to the gospels, nor to the apostle to whom you do not believe, but to your books that I will pierce you with the tip of your own sword as one tells David once did when he slit Goliath's throat.
Therefore listen to your prophet saying that God had to become a man (R. Buchner (Zehn Bacher Geschichten, II, p. 10, note 1), bring this allusion to a Jerémie verse (XVII, 9), that Gregory borrowed from a text other than that of the Vulgate:
«He is both God and man, and who knew him?».
He said elsewhere (Baruch, III, 36-38):
«He is the one who is our God, and we will not recognize any other than him;»
He found the whole path of science and gave it to Jacob his servant and to Israel his beloved.
After that he appeared on the earth and he talked with the men.
As for his birth from a virgin, listen also to what your prophet (Isaie, VII, 14) says. This verse was reproduced by St. Matthiew (I, 23-24), which completes the text of the prophete with words: «That is God with us»):
«Now a virgin will conceive in her womb and she will bring a son and he will be called Emmanuel, which means: God with us».
With regard to the beatings he had to suffer, nails that he had been punctured and other outrages that he had to endure and were inflicted upon him, another prophet who spoke about it (Psalms, XXII, 17, 19):
«They pierced my hands and feet; they shared my clothes with each other etc… »
And he says further (Psalmes, LXIX, 22.):
«They gave me fiel and in my thirst they watered me with vinegar».
And it was the same David who said that he brought in his kingdom by the very gibbet of the cross the fallen world and subjected to the devil's domination:
«The Lord, he said (according to Buchner, op. cit., II. 11, n. 7), these words would be a Christian Interpolation which would not have been accepted by the authors of the Vulgate).
Not that he did not rule before the Father, but he received a new kingdom to reign on the people he had issued from the slavery of the devil».
To that the Jew replied:
«What need God had to suffer all these things?».
I told him:
«I have already told you that God has created the innocent man, but that he, circled by the ruse of the snake, disobeyed the precept;
And that's why hunted from the rest of heaven, he was handed over to the sorrow of this world;
but by the death of Christ, the only son of God, he was reconciled with God the Father».
The Jew says:
«God could not send prophets or apostles to bring him back into the path of salvation without humiliating himself by incarnating himself».
To that I replied:
«From the beginning the human race has always sinned without ever having frightened nor by the flood of the deluge, the fire of Sodom, neither the wounds of Egypt nor the miraculous division of the waters of the sea and the Jordan, he has always resisted God's law, and not just he didn't believe, but still he killed those who were preaching penance.
Also if he had not come down himself to buy back, no other could have done so.
Born again thanks to his nativity, washed by baptism, healed by his wound, recovered by his resurrection, we were glorified by his ascension.
Moreover, it was your prophet who said that he would come to remedy our diseases (Isaiah, LIII, 5):
«We have been cured by his brutality».
And elsewhere he says (Isaiah, LIII, 7):
«Like a sheep it has been led to the killing and
even if a lamb remains silent in front of the one who taps it, he has not opened his mouth».
It was in humiliation that his conviction was torn.
Who told his origin?
«Lord of Armies is his name (Isaiah, LIV, 4)».
It is from him that this Jacob of whom you are wandering to
come from said by blessing his son Judas as if he spoke of Christ himself, son of God (Gregory of Tours is inspired in his replica of Genese (XLIX, 8-12) without literally reproducing the text):
«Your father's sons will adore you, Lion cub Juda».
It's from a germ, my son, that you came out.
You put yourself to bed and you have slept like a lion, like a lion cub.
Who woke him up?
His eyes are more beautiful than wine and his teeth whiter than milk.
Who will wake him, he says, and even though (Christ) himself said (Saint John, X, 18):
«I have the power to leave life and have the power to take it back»,
However Paul declared (Epistle to the Romans, X, 9. The text of the Vulgate is a little different:
«If you confess from your mouth Jesus as Lord and if you believe in your heart that God resurrected him from the dead, you shall be saved»:
«The one who will not believe that God has risen him from the dead cannot be saved».
Although I said this and more, the wretched man felt no remorse and refused to believe.
Then when he was silent and the king saw that he was not conscience stricken because of my words, he turned to me and asked to receive my blessing that he might depart He said:
«I will say to you, bishop, what Jacob said to the angel, for he said to him, ' I will not let you go until you bless me».
So saying he ordered water brought for our hands.
After washing them we prayed, and taking bread I thanked God and took it myself and offered it to the king, and after a draught of wine I said farewell and left.
And the king mounted his horse and returned to Paris with his wife and daughter and all his household.</p>
<h3 class="green">Notes</h3>
<h4 id="note_villa" class="green">the villa mentioned above</h4>
<div class="notices green">
<p>In the text in latin “Novigentum” probably on the site of the present town of Nogent-sur-Marne.  </p>
<ul>
<li>Return to text <a href="#villa" title="villa">“the villa mentioned above” ↑</a></li>
</ul>
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