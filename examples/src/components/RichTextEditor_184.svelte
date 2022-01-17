<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:152 JA:121 -->

<article>

<p><time datetime="2018-08-07">2018 <abbr title="August">Aug.</abbr> <abbr title="the seventh">7<sup>th</sup></abbr></time></p>

<h1 class="green">Meeting of King Chilperic and Priscus according to Gregory of Tours in <cite>History of the Franks</cite></h1>

<div class="notices green">
<p>This excerpt from Book <abbr title="six">VI/</abbr> chapter 5 of the <a href="https://en.wikipedia.org/wiki/Gregory_of_Tours#History_of_the_Franks" title="https://en.wikipedia.org/wiki/Gregory_of_Tours#History_of_the_Franks"><cite><ruby lang="en">History of the Franks<rp>(</rp><rt lang="la">Historia Francorum</rt><rp>)</rp></ruby></cite></a> by <a href="https://en.wikipedia.org/wiki/Gregory_of_Tours" title="https://en.wikipedia.org/wiki/Gregory_of_Tours">Gregory of Tours</a> relates the meeting of <a href="https://en.wikipedia.org/wiki/Chilperic_I" title="https://en.wikipedia.org/wiki/Chilperic_I">King Chilperic <abbr title="the first">I<sup>st</sup></abbr></a> and one of his subjects of the Jewish religion named Priscus as witnessed by the author.</p>
<p>The story is presented as a kind of spiritual warfare without concession despite the very different conditions of the protagonists.<br>
Priscus does not take anything away from his faith, thus allowing us to perceive his faith, its irreducibility in relation to Christianity.<br>
We find ourselves surprised, destabilized, we who, without realizing it, easily imagine the Middle Ages as univocally Christian.<br>
Priscus reminds us of the liveliness, the originality, the singularity of the Jewish faith of which another witness could for example be <a href="https://en.wikipedia.org/wiki/Rashi" title="https://en.wikipedia.org/wiki/Rashi">Rachi of Troyes</a>.<br>
Fascinating!</p>
</div>

<h2>text of the meeting of Chilperic <abbr title="the first">I<sup>st</sup></abbr> and Priscus</h2>

<p>chapter 5</p>
<p>While king Chilperic was still at <a href="#note_villa" title="villa" id="villa" class="green">the villa mentioned above</a> he directed his baggage to be moved and made arrangements to go to Paris.</p>
<p>And when I went to see him to say good­by, a certain Jew named Priscus came in who was on friendly terms with him and helped him buy costly articles.</p>
<p>The king took him by the hair in a gentle way and said to me:</p>
<p class="conversation">«Come, bishop of God, and lay your hands on him».</p>
<p>But he struggled and the king said to him:</p>
<p class="conversation">«O obstinate­minded and ever disbelieving race, which does not recognize the Son of God promised to it by the voices of its prophets and does not recognize the mysteries of the church prefigured in its own sacrifices».</p>
<p>To these words the Jew replied:</p>
<p class="conversation">«God never married nor was blessed with offspring nor allowed any one to share his power, but he said by the mouth of Moses: <a href="#note_deuteronome" title="Deuteronome, XXXII, 39" id="deuteronome" class="green">'See, see that I am the Lord and except me there is no God</a>.</p>
<p class="conversation"><a href="#note_deuteronome" title="Deuteronome, XXXII, 39" class="green">I shall kill and I shall make alive;</a></p>
<p class="conversation"><a href="#note_deuteronome" title="Deuteronome, XXXII, 39" class="green">I shall wound and I shall heal».</a></p>
<p class="conversation">To that the king replied:</p>
<p class="conversation">«God has given birth from his spiritual womb to an eternal son who is neither younger than him nor less in power».</p>
<p class="conversation">He said himself <span style="color: #999">(Borrowing done for translation by the Vulgate of Psalm <abbr title="sixty">CX</abbr>, verse 3. Does not exist in the Hebrew text)</span>:</p>
<p class="conversation"><a href="#note_engendre" title="I gave you my breast before dawn" id="engendre" class="green">«I gave you my breast before dawn.»</a></p>
<p class="conversation">This son, who was born before centuries, has sent him over the last centuries into the world as healer, as your prophet (Psalms Book, <abbr title="fifty-seven">CVII</abbr> <span style="color: #999">(Vulgate CVI, 20)</span> declares:</p>
<p class="conversation"><a href="#note_verbe" title="Il a envoyé son Verbe et il les a guéris" id="verbe" class="green">«He sent his Word and cured them.»</a></p>
<p class="conversation">As claiming as you do that he cannot generate himself;</p>
<p class="conversation">Listen to your prophet speak under the dictation of the Lord <span style="color: #999">(Isaiah, <abbr title="sixty six">LXVI</abbr>, 9. The interpretation of the biblical text by Gregory of Tours is questionable.)</span>:</p>
<p class="conversation"><a href="#note_enfanter" title="Why could not I, who make the others give birth, also give birth?" id="enfanter" class="green">«Why could not I, who make the others give birth, also give birth?»</a>.</p>
<p class="conversation">These words he said them about the people who reborn in him by faith.</p>
<p>To that the Jew replied:</p>
<p class="conversation">«How could God become a man, be born of a woman, be exposed to beatings and sentenced to death?».</p>
<p>On what the king keeping quiet, I interposed in the middle of them and said:</p>
<p class="conversation">«If God, the son of God, has made himself human the cause of it has been not in his need, but in ours, for he could not redeem the captive man from sin and reduced by the devil to slavery only by taking human nature.</p>
<p class="conversation">It is by taking testimonies not to the gospels, nor to the apostle to whom you do not believe, but to your books that I will pierce you with the tip of your own sword as one tells David once did when he slit Goliath's throat.</p>
<p class="conversation">Therefore listen to your prophet saying that God had to become a man <span style="color: #999">(R. Buchner (Zehn Bacher Geschichten, II, p. 10, note 1)</span>, bring this allusion to a Jeremie <span style="color: #999">(<abbr title="seventeen">XVII</abbr>, verse 9)</span>, that Gregory borrowed from a text other than that of the Vulgate:</p>
<p class="conversation"><a href="#note_ecoute" title="Dieu devait devenir homme" id="ecoute" class="green">«He is both God and man, and who knew him?»</a>.</p>
<p>He said elsewhere <span style="color: #999">(Baruch, <abbr title="three">III</abbr>, verses 36 to 38)</span>:</p>
<p class="conversation"><a href="#note_luinotredieu" title="He is the one who is our God" id="luinotredieu" class="green">«He is the one who is our God, and we will not recognize any other than him;»</a></p>
<p class="conversation"><a href="#note_luinotredieu" title="He is the one who is our God" class="green">He found the whole path of science and gave it to Jacob his servant and to Israel his beloved.</a></p>
<p class="conversation"><a href="#note_luinotredieu" title="He is the one who is our God" class="green">After that he appeared on the earth and he talked with the men.</a></p>
<p class="conversation">As for his birth from a virgin, listen also to what your prophet <span style="color: #999">(Isaie, VII, 14 says. This verse was reproduced by St. Matthiew (chapter <abbr title="one">I</abbr>, verses 23 and 24), which completes the text of the prophete with words: «That is God with us»)</span>:</p>
<p class="conversation"><a href="#note_vierge" title=ow a virgin will conceive in her womb" id="vierge" class="green">«Now a virgin will conceive in her womb and she will bring a son and he will be called Emmanuel, which means: God with us».</a></p>
<p class="conversation">With regard to the beatings he had to suffer, nails that he had been punctured and other outrages that he had to endure and were inflicted upon him, another prophet who spoke about it <span style="color: #999">(Psalms, <abbr title="twenty two">XXII</abbr>, verses 17, 19)</span>:</p>
<p class="conversation"><a href="#note_perce" title="Ils ont percé mes mains et mes pieds; ils ont partagé entre eux mes vêtements" id="perce" class="green">«They pierced my hands and feet; they shared my clothes with each other etc… »</a>
And he says further <span style="color: #999">(Psalmes, <abbr title="sixty nine">LXIX</abbr>, 22.)</span>:</p>
<p class="conversation"><a href="#note_fiel" title="They gave me fiel and in my thirst they watered me with vinegar" id="fiel" class="green">«They gave me fiel and in my thirst they watered me with vinegar»</a>.</p>
<p class="conversation">And it was the same David who said that he brought in his kingdom by the very gibbet of the cross the fallen world and subjected to the devil's domination:
<a href="#note_parlebois" title="The Lord reigned by wood" id="parlebois" class="green">«The Lord, he said <span style="color: #999">(according to Buchner, </abbr title="opus citatum">op. cit.</abbr>, <abbr title="two">II</abbr> 11, <abbr title="note">n.</abbr> 7), these words would be a Christian Interpolation which would not have been accepted by the authors of the Vulgate)</span>.</a></p>
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
<p class="conversation"><a href="#note_meurtrissure" title="Nous avons été guéris par sa meurtrissure" id="meurtrissure" class="green">«We have been cured by his brutality»</a>.</p>
<p class="conversation">And elsewhere he says <span style="color: #999">(Isaiah, <abbr title="fifty three">LIII</abbr>, 7)</span>:</p>
<p class="conversation"><a href="#note_commeunebrebis" title="Like a sheep it has been led to the killing" id="commeunebrebis" class="green">«Like a sheep it has been led to the killing and
even if a lamb remains silent in front of the one who taps it, he has not opened his mouth»</a>.</p>
<p class="conversation">It was in humiliation that his conviction was torn.</p>
<p class="conversation">Who told his origin?</p>
<p class="conversation"><a href="#note_armees" title="Seigneur des armées est son nom" id="armees" class="green">«Lord of Armies is his name <span style="color: #999">(Isaiah, <abbr title="fifty four">LIV</abbr>, 4)</span>»</a>.</p>
<p class="conversation">It is from him that this Jacob of whom you are wandering to
come from said by blessing his son Judas as if he spoke of Christ himself, son of God (Gregory of Tours is inspired in his replica of Genese <span style="color: #999">(<abbr title="forty nine">XLIX</abbr>, verses 8 to 12 without literally reproducing the text)</span>:</p>
<p class="conversation"><a href="#note_lionceau" title="Your father's sons will adore you, Lion cub Juda" id="lionceau" class="green">«Your father's sons will adore you, Lion cub Juda»</a>.</p>
<p class="conversation"><a href="#note_lionceau" title="Your father's sons will adore you, Lion cub Juda" class="green">It's from a germ, my son, that you came out.</a></p>
<p class="conversation"><a href="#note_lionceau" title="Your father's sons will adore you, Lion cub Juda" class="green">You put yourself to bed and you have slept like a lion, like a lion cub.</a></p>
<p class="conversation"><a href="#note_lionceau" title="Your father's sons will adore you, Lion cub Juda" class="green">Who woke him up?</a></p>
<p class="conversation"><a href="#note_lionceau" title="Your father's sons will adore you, Lion cub Juda" class="green">His eyes are more beautiful than wine and his teeth whiter than milk.</a></p>
<p class="conversation">Who will wake him, he says, and even though <span style="color: #999">(Christ)</span> himself said <span style="color: #999">(St. John, <abbr title="ten">X</abbr>, 18)</span>:</p>
<p class="conversation"><a href="#note_reprendre" title="I have the power to leave life..." id="reprendre" class="green">«I have the power to leave life and have the power to take it back»</a>,
However Paul declared <span style="color: #999">(Epistle to the Romans, <abbr title="ten">X</abbr>, 9. The text of the Vulgate is a little different)</span>:</p>
<p class="conversation"><a href="#note_ressuciter" title="... que Dieu l'a ressuscité des morts ne pourra être sauvé" id="ressuciter" class="green">«If you confess from your mouth Jesus as Lord and if you believe in your heart that God resurrected him from the dead, you shall be saved»</a>:</p>
<p class="conversation">«The one who will not believe that God has risen him from the dead cannot be saved».</p>

<p>Although I said this and more, the wretched man felt no remorse and refused to believe.</p>
<p>Then when he was silent and the king saw that he was not conscience stricken because of my words, he turned to me and asked to receive my blessing that he might depart He said:</p>
<p class="conversation">«I will say to you, bishop, what Jacob said to the angel, for he said to him, <a href="#note_benir" title="I will not let you go until you bless me" id="benir" class="green">“I will not let you go until you bless me”</a>».</p>
<p>So saying he ordered water brought for our hands.</p>
<p>After washing them we prayed, and taking bread I thanked God and took it myself and offered it to the king, and after a draught of wine I said farewell and left.
And the king mounted his horse and returned to Paris with his wife and daughter and all his household.</p>

<footer>
  <p><span style="color: #3d8b3d;">Gregory of Tours, <cite>History of the Franks</cite>, Book <abbr title="six">VI</abbr> chapter 5.</span></p>
<footer>

<aside>

<h3 class="green">Notes</h3>

<h4 id="note_villa" class="green note">the villa mentioned above</h4>

<div class="notices green">
  <p>In the text in latin “Novigentum” probably on the site of the present town of Nogent-sur-Marne.</p>
</div>
<footer>
  <p class="puce">back to text <a href="#villa" title="villa">“the villa mentioned above” ↩</a></p>
</footer>

<h4 id="note_deuteronome" class="green note">voyez, je suis le Seigneur</h4>
<div class="notices green">
  <p>Deuteronome, chapître <abbr title="trente-deux">XXXII</abbr>, verset 39:</p>
  <ol class="doc">
    <li value="39">“See now that I, I alone, am he,</li>
    <li>and there is no god besides me.</li>
    <li>It is I who bring both death and life,</li>
    <li>I who inflict wounds and heal them,</li>
    <li>and from my hand no one can deliver.”.</li>
  </ol>
</div>
<footer>
  <p class="puce"><a href="#deuteronome" title="Deuteronome, XXXII, 39">back to text&nbsp↩</a></p>
</footer>

<h4 id="note_engendre" class="green note">je t'ai enfanté de mon sein avant l'aurore</h4>
<div class="notices green">
  <p>This quote is a borrowing from the Vulgate translation of Psalm 109, verse 3, which does not exist in the original Hebrew text.</p>
</div>
<footer>
  <p class="puce"><a href="#engendre" title="I gave you my breast before dawn">back to text&nbsp↩</a></p>
</footer>

<h4 id="note_verbe" class="green note">Il a envoyé son Verbe et il les a guéris</h4>
<div class="notices green">
  <p>Livre des Psaumes, <abbr title="cent-sept">CVII</abbr>, verset 20.</p>
  <p id="20" class="single-li">Sent forth his word to heal them, and snatched them from the grave.</p>
</div>
<footer>
  <p class="puce"><a href="#verbe" title="Il a envoyé son Verbe et il les a guéris">back to text&nbsp↩</a></p>
</footer>

<h4 id="note_enfanter" class="green note">pourquoi moi, qui fais enfanter les autres, ne pourrais-je également enfanter?</h4>
<div class="notices green">
  <p>Gregory of Tours' interpretation of the biblical text is questionable.</p>
  <p>Isaïe, chapître <abbr title="cent-quatorze">LXVI</abbr>, verset 9: “Shall I bring a mother to the point of birth, and yet not let her child be born? says the Lord. Or shall I who bring to birth yet close her womb? says your God.”.</p>
</div>
<footer>
  <p class="puce"><a href="#enfanter" title="Why could not I, who make the others give birth, also give birth?">back to text&nbsp↩</a></p>
</footer>

<h4 id="note_ecoute" class="green note">dieu devait devenir homme</h4>
<div class="notices green">
  <p><abbr title="Rudolf">R.</abbr> Buchner relates in “Zehn Bacher Geschichten”, <abbr title="page">p.</abbr>&nbsp10, note 1, this allusion to a verse in Jeremiah, chapter 17, verse 9, which Gregory is said to have borrowed from a text other than the Vulgate:</p>
  <p id="9" class="single-li">“More tortuous than anything is the human heart, beyond remedy; who can understand it?”.</p>
</div>
<footer>
  <p class="puce"><a href="#ecoute" title="Dieu devait devenir homme">back to text&nbsp↩</a></p>
</footer>

<h4 id="note_luinotredieu" class="green note">c'est lui qui est notre Dieu</h4>
<div class="notices green">
  <p>Baruch, chapître <abbr title="trois">III</abbr>, versets 36 à 38:</p>
  <ol class="doc">
    <li value="36">“Such is our God;</li>
    <li>no other is to be compared to him:</li>
    <li value="37">He has uncovered the whole way of understanding,</li>
    <li>and has given her to Jacob, his servant,</li>
    <li>to Israel, his beloved.</li>
    <li value="38">Thus she has appeared on earth,</li>
    <li>is at home with mortals.”</li>
  </ol>
</div>
<footer>
  <p class="puce"><a href="#luinotredieu" title="Dieu devait devenir homme">back to text&nbsp↩</a></p>
</footer>

<h4 id="note_vierge" class="green note">quant à sa naissance d'une vierge</h4>
<div class="notices green">
  <p>Isaie, <abbr title="sept">VII</abbr>, 14.</p>
  <p>
    This verse has been reproduced by Saint Matthew chapter one, verses 23 and 24, which completes the prophet's text with the words:</p>
  <p class="conversation">““Behold, the virgin shall be with child and bear a son, and they shall name him Emmanuel, which means “God is with us.”</p>
</div>
<footer>
<p class="puce"><a href="#vierge" title=ow a virgin will conceive in her womb">back to text&nbsp↩</a></p>
</footer>

<h4 id="note_perce" class="green note">ils ont percé mes mains et mes pieds; ils ont partagé entre eux mes vêtements</h4>
<div class="notices green">
  <p>Psaumes, chapître <abbr title="vingt et un">XXI</abbr>, verset 17 (seconde partie), 19:</p>
  <ol class="doc">
    <li value="17">They have pierced my hands and my feet</li>
    <li value="19">they divide my garments among them;</li>
    <li>for my clothing they cast lots.”</li>
  </ol>
</div>
<footer>
  <p class="puce"><a href="#perce" title="Ils ont percé mes mains et mes pieds; ils ont partagé entre eux mes vêtements">back to text&nbsp↩</a></p>
</footer>

<h4 id="note_fiel" class="green note">ils m'ont donné pour ma nourriture du fiel et dans ma soif ils m'ont abreuvé de vinaigre</h4>
<div class="notices green">
  <p>Psaumes, <abbr title="soixante-huit">LXVIII</abbr>, verset 22:</p>
  <p id="22" class="single-li">God will crush the heads of his enemies,
  the hairy scalp of the one who walks in sin.</p>
</div>
<footer>
  <p class="puce"><a href="#fiel" title="They gave me fiel and in my thirst they watered me with vinegar">back to text&nbsp↩</a></p>
</footer>

<h4 id="note_parlebois" class="green note">le Seigneur a régné par le bois</h4>
<div class="notices green">
  <p>According to <abbr title="Rudolf">R.</abbr> Buchner, “Zehn Bacher Geschichten”, <abbr title="two">II</abbr>, <abbr title="page">p.<abbr>&nbsp11, note 7), these words would be a Christian interpolation which would not have been accepted by the authors of the Vulgate.</p>
</div>
<footer>
  <p class="puce"><a href="#parlebois" title="The Lord reigned by wood">back to text&nbsp↩</a></p>
</footer>

<h4 id="note_meurtrissure" class="green note">nous avons été guéris par sa meurtrissure</h4>
<div class="notices green">
  <p>Isaïe, chapître <abbr title="cinquante-trois">LIII</abbr>, verset 5:</p>
  <p id="5" class="single-li">But he was pierced for our sins, crushed for our iniquity. He bore the punishment that makes us whole, by his wounds we were healed.</p>
</div>
<footer>
  <p class="puce"><a href="#meurtrissure" title="Nous avons été guéris par sa meurtrissure">back to text&nbsp↩</a></p>
</footer>


<h4 id="note_commeunebrebis" class="green note">comme une brebis il a été mené à la tuerie</h4>
<div class="notices green">
  <p>Isaïe, chapître <abbr title="cinquante-trois">LIII</abbr>, verset 7:</p>
  <p id="7" class="single-li">Though harshly treated, he submitted and did not open his mouth; Like a lamb led to slaughter or a sheep silent before shearers, he did not open his mouth.</p>
</div>
<footer>
   <p class="puce"><a href="#commeunebrebis" title="Like a sheep it has been led to the killing">back to text&nbsp↩</a></p>
</footer>

<h4 id="note_armees" class="green note">seigneur des armées est son nom</h4>
<div class="notices green">
  <p>Isaïe, chapître <abbr title="cinquante-quatre">LIV</abbr>, verset 5:</p>
  <p id="5" class="single-li">For your husband is your Maker; the Lord of hosts is his name, Your redeemer, the Holy One of Israel, called God of all the earth.</p>
</div>
<footer>
  <p class="puce"><a href="#armees" title="Seigneur des armées est son nom">back to text&nbsp↩</a></p>
</footer>

<h4 id="note_lionceau" class="green note">les fils de ton père t'adoreront, lionceau Juda</h4>
<div class="notices green">
  <p>Gregory of Tours is inspired in his replica of Genesis without literally reproducing the text.</p>
  <p>Génèse, chapître <abbr title="quarante-quatre">XLIX</abbr>, versets 8 à 10:</p>
  <ol class="doc">
    <li value="8">“You, Judah, shall your brothers praise</li>
    <li>—your hand on the neck of your enemies;</li>
    <li>the sons of your father shall bow down to you.</li>
    <li value="9">Judah is a lion’s cub,</li>
    <li>you have grown up on prey, my son.</li>
    <li>He crouches, lies down like a lion,</li>
    <li>like a lioness—who would dare rouse him?</li>
    <li value="10">The scepter shall never depart from Judah,</li>
    <li>or the mace from between his feet,</li>
    <li>Until tribute comes to him,</li>
    <li>and he receives the people’s obedience.”</li>
  </ol>
</div>
<footer>
  <p class="puce"><a href="#lionceau" title="Your father's sons will adore you, Lion cub Juda">back to text&nbsp↩</a></p>
</footer>


<h4 id="note_reprendre" class="green note">j'ai le pouvoir de quitter la vie et j'ai le pouvoir de la reprendre</h4>
<div class="notices green">
  <p>Cette version diffère quelque peu du texte actuel de ce passage de l'évangile de Jean.</p>
  <p>Jean, chapître <abbr title="dix">X</abbr>, verset 18:</p>
  <p id="18" class="single-li">No one takes it from me, but I lay it down on my own. I have power to lay it down, and power to take it up again. This command I have received from my Father.”</p>
</div>
<footer>
  <p class="puce"><a href="#reprendre" title="I have the power to leave life...">back to text&nbsp↩</a></p>
</footer>

<h4 id="note_ressuciter" class="green note">celui qui ne croira pas que Dieu l'a ressuscité des morts ne pourra être sauvé</h4>
<div class="notices green">
  <p>Épître aux Romains, paragraphe <abbr title="dix">X</abbr>, verset 9.</p>
  <p>This version differs somewhat from the actual text of this passage in John's gospel:</p>
  <p id="9" class="single-li">for, if you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.</p>
</div>
<footer>
  <p class="puce"><a href="#ressuciter" title="... que Dieu l'a ressuscité des morts ne pourra être sauvé">back to text&nbsp↩</a></p>
</footer>

<h4 id="note_benir" class="green note">je ne te laisserai pas partir si tu ne me bénis pas</h4>
<div class="notices green">
  <p>Génèse, chapître <abbr title="trente-deux">XXXII</abbr>,  versets 25 à 27:</p>
  <ol class="doc">
    <li value="25">Jacob was left there alone. Then a man wrestled with him until the break of dawn.</li>
    <li value="26">When the man saw that he could not prevail over him, he struck Jacob’s hip at its socket, so that Jacob’s socket was dislocated as he wrestled with him.</li>
    <li value="27"The man then said,
      <p class="conversation">“Let me go, for it is daybreak.”</p>
      <p> But Jacob said,</p>
      <p class="conversation">“I will not let you go until you bless me.”</p>
    </li>
  </ol>
</div>
<footer>
  <p class="puce"><a href="#benir" title="I will not let you go until you bless me">back to text&nbsp↩</a></p>
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