<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
  <article>
    <h1 class="red">Saint Michael according to <cite>the Golden Legend</cite></h1>
    <div class="notices red">

    <p>In the Christian Europe of the Middle Ages, <cite>The Golden Legend</cite> also called Legenda Aurea is known as the most read book after the Bible.</p>
    <p>It was written in Latin from <time datetime="1261">1261</time> to <time datetime="1266">1266</time> by a Dominican monk from Northern Italy, a chronicles compilor and also known as the 8<sup>th</sup> Archbishop of Genoa, Jacobus da Varagine.</p>
    <p>Presenting this book, even in a rudimentary way, is not easy, but to say things, there is no mistake to write that by compiling several existing documents like 150 lives of martyrs or some saints or groups of saints, by incorporating in the pre-existing pagan calendar the annual liturgical calendar of the Catholic Church, by unifying it, using also, of this opportunity to explain the main events of Christ's and the Virgin's lives from the Gospels, this text actually constructed a Christian mythology that has deeply permeated all areas of the society of its time, including, for example, its topology…</p>
    <p>As written in the preface to his book <cite>Christian Mythology: feasts, rites and myths of the Middle Ages</cite>, medievalist Philippe WALTER, <q>remembrance endured would appear in rites, traditions from the savage memory before the arrival of Christianity</q>, one can consider this text because it appears in the underlying way of the Church's repressed back elements, as both fascinating and particularly worthy of interest.</p>
    <p>Here, of course, I present below only a very small part, the only chapter 145, because it is given in the work as the origin of Mont Saint-Michel as a place of pilgrimage.</p>
    <p>Appear the <mark>archangel Michael</mark>, the Bull, and many other things… It is also surprising that the narrative develops without stopping and imperceptibly from the Archangel to a narrative of faith in angels.</p>
    <p>Between the existence that we can't measure and the one we perceive, this text should evoke various thoughts, independently of questions about believing or not believing, and therefore I urge to read it if possible until the end without fear of the strong religious colour of the time.</p>
    </div>
  </article>

  <article>
      <h2 id="chap145">Text of Chapter 145 of <cite>The Golden Legend</cite> presenting archangel Michael</h2>

      <h3 id="name" class="red">The Name of St. Michael</h3>

      <p>“<mark>Michael</mark>” is expounded sometimes as “Who, [is] like God?” And oft-times, as St. Gregory saith, when a thing of marvellous virtue is done, <mark>Michael</mark> is sent forth, so that he, by the deed and the name, be given to understand that none may do that God may do, and therefore be attributed to him many things of marvellous virtue.</p>
      <p>For like as Daniel witnesseth, he shall arise and address in the time of Antichrist against him, and shall stand as a defender and keeper for them that be chosen.</p>
      <p>He also fought with the dragon and his angels, and casting them out of heaven, had a great victory.</p>
      <p>He also had a great plea and altercation with the devil for the body of Moses, because he would not show it; for the children of Israel should have adored and worshipped it.</p>
      <p>He received the souls of saints and brought them into the paradise of exultation and joy.</p>
      <p>He was prince of the synagogue of the Jews, but now he is established of our Lord, prince of the church of Jesus Christ.</p>
      <p>And as it is said, he made the plagues of Egypt, he departed and divided the Red Sea, he led the people of Israel by the desert and set them in the land of promission, he is had among the company of holy angels as bannerer.</p>
      <p>And bearing the sign of our Lord, he shall slay by the commandment of God, right puissantly, Antichrist that shall be in the Mount of Olivet.
      And dead men shall arise at the voice of this same archangel.
      And he shall show at the day of judgment the cross, the spear, the nails and the crown of thorns of JesusChrist.</p>
      <p>The holy solemnity of <mark>St. Michael</mark> is said, appearing, dedication, victory and memory.</p>


      <h3 id="apparitions" class="red">The Apparitions of St. Michael</h3>

      <h4 id="garganus" class="red">The Apparition of Garganus and the Bull</h4>

      <p>The apparition of this angel is manifold.
      The first is when he appeared in the Mount of Gargan.
      This mountain is in Naples, which is named Gargan and is by the city named Syponte.
      And in the year of our Lord three hundred and ninety, was in the same city of Syponte a man which was named Garganus, which, after some books, had taken that name of the mountain, or else the mountain took the name of the man.</p>
      <p>And he was right rich, and had a great multitude of sheep and beasts, and as they pastured about the sides of the mountains it happed that a bull left the other beasts, and went upon high on the mountain and returned not home again with the other beasts.
      Then this rich man, the owner, took a great multitude of servants, and did do seek this bull all about, and at the last he was founden on high on the mountain by the entry of a hole or a cave.
      And then the master was wroth [angry] because he had strayed alone from other beasts, and made one of his servants to shoot an arrow at him.
      And anon the arrow returned with the wind and smote him that had shot it.</p>
      <p>Wherewith they of the city were troubled with this thing, and went to the bishop and inquired of him what was to be done in this thing, that was so wonderful.
      And then he commanded them to fast three days and to pray unto God.
      And when this was done <mark>St. Michael</mark> appeared to the bishop, saying: Know ye that this man is so hurt by my will.
      I am <mark>Michael</mark> the archangel, which will that this place be worshipped in earth, and will have it surely kept.
      And therefore I have proved that I am keeper of this place by the demonstrance and showing of this thing.</p>
      <p>And then anon the bishop and they of the city went with procession unto that place, and durst not enter into it, but made their prayers withoutforth.</p>


      <h4 id="mont-tombe" class="red">The Apparition at Mount Tumba</h4>

      <p>The second apparition was in the year of our Lord seven hundred and ten, in a place which was named Tumba, by the seaside, six miles from the city of Apricens. <mark>St. Michael</mark> appeared to the bishop of that city and commanded him to do make a church in the foresaid place, like as it was made in the mount of Gargan, and in like wise should hallow the memory of <mark>St. Michael</mark> there.</p>
      <p>And the bishop doubted in what place it should be made.
      And <mark>St. Michael</mark> said to him in the place where he should find a bull hid of thieves.
      And yet he doubted of the largeness of the place, and <mark>St. Michael</mark> appeared to him, and said that he should make it of the brede that he should find that the bull had trodden and traced with his feet.</p>
      <p>And there were two rocks which no man's power might remove.
      Then <mark>St. Michael</mark> appeared to a man and commanded him that he should go to that same place and take away the two rocks.
      And when he came, he removed the two rocks as lightly as they had weighed nothing.</p>
      <p>And when the church was edified there, <mark>Michael</mark> set a piece of stone of marble there, upon which he stood, and a part of the pall that he had laid on the altar of that other church he brought thither to this church. And because they had great penury and need of water, they made, by the admonishment of the angel, a hole in a stone of marble, and anon there flowed out so much water that unto this day they be sustained by the benefit thereof. And this apparition is solemnly hallowed the seventeenth kalends of November in that place.</p>
      <p>And there happed in the same place a miracle worthy to be put in remembrance.
      This mountain is environed about with the sea-ocean, but on <mark>St. Michael</mark>'s day it avoideth twice and giveth way to the people.
      And as a great company of people went to the church, it happed that a woman great with child, nigh her time of deliverance, was in the company, and when they returned, the waves and water came with great force, so that the company for dread fled to the rivage.
      And the woman great with child might not flee, but was taken and wrapped in the floods of the sea, but <mark>St. Michael</mark> kept the wife all whole, and she was delivered and childed among the waves in the middle of the sea.
      And she took the child between her arms and gave it suck, and after, when the sea was withdrawn, she went a-land all whole with her child.</p>


      <h4 id="chateau-saint-ange" class="red">The Apparition of Castle Angel</h4>

      <p>The third apparition happed in the time of Gregory the pope.
      For when the said pope had established the litanies for the pestilence that was that time, and prayed devoutly for the people, he saw upon the castle which was said sometime, “The memory of Adrian, the angel of God, which wiped and made clean a bloody sword, and put it into a sheath.” And thereby he understood that his prayers were heard.
      Then he did do make there a church in the honour of <mark>St. Michael</mark>, and that castle is yet named the Castle Angel.</p>
      <p>And yet another apparition was in the Mount of Gargan when he appeared and gave victory to them of Syponte, which is hallowed the eighth ides of July.</p>


      <h4 id="de-hierarchia" class="red">The apparition in the Gerarchies</h4>

      <p>The fourth apparition is that which is in the “Gerarchy” of the same angels.
      For the first apparition is said “Epiphany,” that is, the apparition of sovereigns, the second is said “Hyperphania,” that is, the mean apparition, and that other is said “Hypophania,” that is, the most low apparition.
      And “Gerarchia” is said of gerar, that is, holy, and of archos, that is, a prince, and so “Gerarchia” is to say a holy principate, and every Gerarchia containeth three orders of angels.</p>
      <p>For the sovereign Gerarchia after the assignation of St. Denis containeth Cherubim, Seraphim, and the thrones: the middle containeth the dominations, the virtues, and the potestates; and the last containeth the principates, angels, and archangels.
      And the ordinance and disposition of them may be seen by semblable and like in earthly principates.
      For of the ministers that be about a king, some work immediately about the person of the king, as cubiculers, counsellors, and the assistants, and they be like unto the order of the first Gerarchia.
      Some there be that have the rule of the realm, some in one province, some in another, as be lieutenants, captains of chivalry, and judges, and they be like unto the second Gerarchia.
      And others be assigned to particular offices in the divers parts of the realm, as mayors, sheriffs, bailiffs, and such other less offices, and these be like to the orders of the third Gerarchia.</p>
      <p>The three orders of the first Gerarchia be taken inasmuch as they assist God and be converted to him.
      And thereto be three things necessary, that is to wit: sovereign love, and that is as touching the order of Seraphim, which be said fiery; perfect knowledge, that is touching Cherubim, which is as much to say as “plenitude of science”; and perpetual fruition or usance, as touching the thrones which be said sitting, for God sitteth and resteth in them.</p>
      <p>The three orders of the middle Gerarchia be taken and had inasmuch as they dominate and govern the university of people in common.
      This seigniory and this governing is in three things.
      The first [is] in seigniory and commanding, and that appertaineth to the order of domination, which seignioreth above others that be lower, and addresseth them in all the ministries divine, and commandeth to them all things.
      And that saith Zechariah, in the fifth chapter, that one angel saith to another: “Run and speak to the child.” Secondly, in doing, and this appertaineth to the order of virtues, to whom nothing ne is impossible to execute which that is commanded to them, for to them is given power to do all things difficult which be pertaining to divine mystery, and therefore it is attributed to them to do miracles.
      Thirdly, in constraining, for to constrain the impediments and destourbles, and this appertaineth to the order of the potestates.
      And this is signified in Tobit, where Raphael bound the devil in the overest desert.</p>
      <p>The three orders of the last Gerarchia be taken after that they have government and limited.
      Some of them seigniory and govern in one province, and that be they of the order of the principates, like as the prince of Persia seignioreth upon the Persians, like as it is read in Daniel in the tenth chapter.
      And some be deputed to the governance of a multitude of a city, and they be said archangels, and the other be committed to the governance of one person, and they be said angels, and be said to show the small things and little, because that their service and ministry is limited unto one man.
      Archangels be said more and greater, for the weal of a multitude is better and more worthy than the weal of one man.</p>
      <p>In the assignation of the orders of the first Gerarchia, Gregory accordeth with Dionysius, and Bernard also, which is taken about their fruition, which is in burning love as touching to Seraphim, in profound cognition as to Cherubim, and in perpetual retention as touching the thrones.
      But they discord in the assignation of the middle and last two orders, that is, principates and virtues.
      Gregory and Bernard have another consideration, that is to wit.
      that the middle Gerarchia is in his seigniory or prelacy, and the last is taken in his pity or ministration.
      The prelacy in angels is treble.
      For angels dominate over spirits angelic, and they be said dominations, and they dominate also over good works, and they be said principates, and they dominate over devils, and they be said potestates, and the order and the degrees of their dignity appeareth in these things.
      The ministry of them is threefold.
      Some standeth in working, some in teaching, and in teaching, some more and some less.
      The first appertaineth to virtues, the second to archangels, and the third to angels.</p>


      <h4 id="infirme" class="red">The Apparition to The Man Who Could Not Eat Or Drink</h4>

      <p>The fifth apparition is it which is read in the History Tripartite.
      There is a place beside Constantinople whereas sometime the goddess Vesta was worshipped, but now there is builded a church in the honour of <mark>St. Michael</mark>, and is named <mark>Michael</mark>'s place.
      There a man that was named Aquiline was taken with a right great fever, moved of red colour, and the physicians gave to him, so burning in an ague, a drink, which anon he vomited out at his mouth, and what he ate or drank always he vomited and casted out, so that he was nigh dead, and did him to be borne to that place, and supposed well there to be soon dead or healed.
      And then <mark>St. Michael</mark> appeared to him and said to him that he should make a confection of honey and wine and pepper, and whatsomever he ate he should wet therein, and so should he have plein [full] health.
      Which thing he did, and anon he was delivered from his malady, how well that after the judgment of the physicians that drink or medicine was contrary to them that be choleric.
      This is had in the History Tripartite.</p>

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