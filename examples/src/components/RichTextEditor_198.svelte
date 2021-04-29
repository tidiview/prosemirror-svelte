<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<h1 class="green">The Remi according to Cesar</h1>

<div class="notices green">
<p>The <cite>Commentaries on the Gallic War</cite>, which is said to have been written by Julius Caesar himself, count as a written historical document concerning the past of France as one of the oldest.</p>
<p>There would be much to say about this exceptional work, but here it is not so much the whole work as the short part, first half of Book <abbr title="two">II</abbr>, where the tribe of the Remi, at the origins of the name of the current Reims, appears, that keeps our attention.</p>
<p>The extract of the text below is limited to this and to the «Battle of the Aisne river».</p>
<p>The <a href="#1chap" title="Chapter 1, Turmoil in Belgium">first</a> and <a href="#2chap" title="Chapter 2, Measures of Caesar">second chapter</a> describe the resulting situation of the progression of the Roman army in Gaul.</p>
<p>During the <a href="#3chap" title="Chapter 3, The Remi are declaring themselves for the Romans">third chapter</a>, the chiefs of the Remi think fowards and send to Caesar a delegation to ally with Rome.</p>
<p>From the <a href="#4chap" title="Chapter 4, Enumeration of enemy forces">quarth chapter</a>, is the «<a href="#8chap" title="Chapter 8, Battle of the Aisne">Battle of the Aisne river</a>» that sees the victory of the roman army.</p>
<p>The Remi were to be rewarded notabily by the recognition of Reims as capital city of roman province of Second Belgium.</p>
</div>

<article>
<h2 id="commentaries-on-the-gallic-war-book-2" class="green"><cite>Commentaries on the Gallic War</cite>, Book <abbr title="two">II</abbr></h2>

<h3 class="green">Turmoil in Belgium</h3>

<h4 id="1chap" class="green">Chapter 1</h4>

<ol class="doc">
  <li value="1">While <mark>Caesar</mark> was in winter quarters in Hither Gaul, frequent reports were brought to him, and he was also informed by letters from Labienus, that all the Belgae, who we have said are a third part of Gaul, were entering into a confederacy against the Roman people, and giving hostages to one another;</li>
  <li value="2">that the reasons of the confederacy were these-first, because they feared that, after all [Celtic] Gaul was subdued, our army would be led against them;</li>
  <li value="3">secondly, because they were instigated by several of the Gauls; some of whom as [on the one hand] they had been unwilling that the Germans should remain any longer in Gaul, so [on the other] they were dissatisfied that the army of the Roman people should pass the winter in it, and settle there;</li>
  <li value="4">and others of them, from a natural instability and fickleness of disposition, were anxious for a revolution; [the Belgae were instigated] by several, also, because the government in Gaul was generally seized upon by the more powerful persons and by those who had the means of hiring troops, and they could less easily effect this object under our dominion.</li>
</ol>

<h3 id="2chap" class="green">Measures of Caesar</h3>

<h4 id="2chap" class="green">Chapter 2</h4>

<ol class="doc">
  <li value="1">Alarmed by these tidings and letters, <mark>Caesar</mark> levied two new legions in Hither Gaul, and, at the beginning of summer, sent Quintus Pedius, his legate, to conduct them further into Gaul.</li>
  <li value="2">He, himself, as soon as there began to be plenty of forage, came to the army.</li>
  <li value="3">He gives a commission to the Senones and the other Gauls who were neighbors of the Belgae, to learn what is going on among them [i.e. the Belgae], and inform him of these matters.</li>
  <li value="4">These all uniformly reported that troops were being raised, and that an army was being collected in one place.</li>
  <li value="5">Then, indeed, he thought that he ought not to hesitate about proceeding toward them, and having provided supplies, moves his camp, and in about fifteen days arrives at the territories of the Belgae.</li>
</ol>

<h3 class="green">The Remi are declaring themselves for the Romans</h3>

<h4 id="3chap" class="green">Chapter 3</h4>

<ol class="doc">
  <li value="1">As he arrived there unexpectedly and sooner than any one anticipated, <mark>the Remi</mark>, who are the nearest of the Belgae to [Celtic] Gaul, sent to him Iccius and Andecombogius, [two of] the principal persons of the state, as their embassadors:</li>
  <li value="2">to tell him that they surrendered themselves and all their possessions to the protection and disposal of the Roman people: and that they had neither combined with the rest of the Belgae, nor entered into any confederacy against the Roman people:</li>
  <li value="3">and were prepared to give hostages, to obey his commands, to receive him into their towns, and to aid him with corn and other things;</li>
  <li value="4">that all the rest of the Belgae were in arms; and that the Germans, who dwell on this side of the Rhine, had joined themselves to them; and that so great was the infatuation of them all, that they could not restrain even the Suessiones, their own brethren and kinsmen, who enjoy the same rights, and the, same laws, and who have one government and one magistracy [in common] with themselves, from uniting with them.</li>
</ol>

<h3 class="green">Enumeration of enemy forces</h3>

<h4 id="4chap" class="green">Chapter 4</h4>

<ol class="doc">
  <li value="1">When <mark>Caesar</mark> inquired of them what states were in arms, how powerful they were, and what they could do, in war, he received the following information: that the greater part of the Belgae were sprung from the Germans, and that having crossed the Rhine at an early period, they had settled there, on account of the fertility of the country, and had driven out the Gauls who inhabited those regions;</li>
  <li value="2">and that they were the only people who, in the memory of our fathers, when all Gaul was overrun, had prevented the Teutones and the Cimbri from entering their territories;<a href="#1chap" title="Chapter 1, Turmoil in Belgium">1</a></li>
  <li value="3">the effect of which was, that, from the recollection of those events, they assumed to themselves great authority and haughtiness in military matters.</li>
  <li value="4">The Remi said, that they had known accurately every thing respecting their number, because being united to them by neighborhood and by alliances, they had learned what number each state had in the general council of the Belgae promised for that war.</li>
  <li value="5">That the Bellovaci were the most powerful among them in valor, influence, and the number of men; that these could muster 100,000 armed men, [and had] promised 60,000 picked men out of that number, and demanded for themselves the command of the whole war.</li>
  <li value="6">That the Suessiones were their nearest neighbors and possessed a very extensive and fertile country;</li>
  <li value="7">that among them, even in our own memory, Diviciacus, the most powerful man of all Gaul, had been king; who had held the government of a great part of these regions, as well as of Britain; that their king at present was Galba; that the direction of the whole war was conferred by the consent of all, upon him, on account of his integrity and prudence; that they had twelve towns; that they had promised 50,000 armed men;</li>
  <li value="8">and that the Nervii, who are reckoned the most warlike among them, and are situated at a very great distance, [had promised] as many;</li>
  <li value="9">the Atrebates 15,000; the Ambiani, 10,000; the Morini, 25,000; the Menapii, 9,000; the Caleti, 10,000; the Veliocasses and the Viromandui as many; the Aduatuci 19,000;</li>
  <li value="10">that the Condrusi, the Eburones, the Caeraesi, the Paemani, who are called by the common name of Germans [had promised], they thought, to the number of 40,000.</li>
</ol>

<h3 class="green">Diviciacus attacks the Bellovaci. Caesar crosses the Aisne</h3>

<h4 id="5chap" class="green">Chapter 5</h4>

<ol class="doc">
  <li value="1"><mark>Caesar</mark>, having encouraged <mark>the Remi</mark>, and addressed them courteously, ordered the whole senate to assemble before him, and the children of their chief men to be brought to him as hostages; all which commands they punctually performed by the day [appointed].</li>
  <li value="2">He, addressing himself to Diviciacus, the Aeduan, with great earnestness, points out how much it concerns the republic and their common security, that the forces of the enemy should be divided, so that it might not be necessary to engage with so large a number at one time.</li>
  <li value="3">[He asserts] that this might be affected if the Aedui would lead their forces into the territories of the Bellovaci, and begin to lay waste their country. With these instructions he dismissed him from his presence.</li>
  <li value="4">After he perceived that all the forces of the Belgae, which had been collected in one place, were approaching toward him, and learned from the scouts whom he had sent out, and [also] from <mark>the Remi</mark>, that they were then not far distant, he hastened to lead his army over the Aisne, which is on the borders of <mark>the Remi</mark>, and there pitched his camp.</li>
  <li value="5">This position fortified one side of his camp by the banks of the river, rendered the country which lay in his rear secure from the enemy, and furthermore insured that provisions might without danger be brought to him by <mark>the Remi</mark> and the rest of the states.</li>
  <li value="6">Over that river was a bridge: there he places a guard; and on the other side of the river he leaves Quintus Titurius Sabinus, his legate, with six cohorts. He orders him to fortify a camp with a rampart twelve feet in height, and a trench eighteen feet in breadth.</li>
</ol>

<h3 class="green">He raised the siege of Bibrax</h3>

<h4 id="6chap" class="green">Chapter 6</h4>

<ol class="doc">
  <li value="1">There was a town of <mark>the Remi</mark>, by name Bibrax, eight miles distant from this camp. This the Belgae on their march began to attack with great vigor. [The assault] was with difficulty sustained for that day.</li>
  <li value="2">The Gauls' mode of besieging is the same as that of the Belgae: when after having drawn a large number of men around the whole of the fortifications, stones have begun to be cast against the wall on all sides, and the wall has been stripped of its defenders, [then], forming a testudo, they advance to the gates and undermine the wall:</li>
  <li value="3">which was easily effected on this occasion; for while so large a number were casting stones and darts, no one was able to maintain his position upon the wall.</li>
  <li value="4">When night had put an end to the assault, Iccius Remus, who was then in command of the town, one of <mark>the Remi</mark>, a man of the highest rank and influence among his people, and one of those who had come to <mark>Caesar</mark> as embassador [to sue] for peace, sends messengers to him, [to report] "That, unless assistance were sent to him he could not hold out any longer."</li>
</ol>

<h4 id="7chap" class="green">Chapter 7</h4>

<ol class="doc">
  <li value="1">Thither, immediately after midnight, <mark>Caesar</mark>, using as guides the same persons who had come to him as messengers from Iccius, sends some Numidian and Cretan archers, and some Balearian slingers</li>
  <li value="2">as a relief to the towns-people, by whose arrival both a desire to resist together with the hope of [making good their] defense, was infused into <mark>the Remi</mark>, and, for the same reason, the hope of gaining the town, abandoned the enemy.</li>
  <li value="3">Therefore, after staying a short time before the town, and laying waste the country of <mark>the Remi</mark>, when all the villages and buildings which they could approach had been burned, they hastened with all their forces to the camp of <mark>Caesar</mark>, and encamped within less than two miles [of it];</li>
  <li value="4">and their camp, as was indicated by the smoke and fires, extended more than eight miles in breadth.</li>
</ol>

<h3 class="green">Battle of the Aisne</h3>

<h4 id="8chap" class="green">Chapter 8</h4>

<ol class="doc">
  <li value="1"><mark>Caesar</mark> at first determined to decline a battle, as well on account of the great number of the enemy as their distinguished reputation for valor:</li>
  <li value="2">daily, however, in cavalry actions, he strove to ascertain by frequent trials, what the enemy could effect by their prowess and what our men would dare.</li>
  <li value="3">When he perceived that our men were not inferior, as the place before the camp was naturally convenient and suitable for marshaling an army (since the hill where the camp was pitched, rising gradually from the plain, extended forward in breadth as far as the space which the marshaled army could occupy, and had steep declines of its side in either direction, and gently sloping in front gradually sank to the plain);</li>
  <li value="4">on either side of that hill he drew a cross trench of about four hundred paces, and at the extremities of that trench built forts, and placed there his military engines, lest, after he had marshaled his army, the enemy, since they were so powerful in point of number, should be able to surround his men in the flank, while fighting.</li>
  <li value="5">After doing this, and leaving in the camp the two legions which he had last raised, that, if there should be any occasion, they might be brought as a reserve, he formed the other six legions in order of battle before the camp. The enemy, likewise, had drawn up their forces which they had brought out of the camp.</li>
</ol>

<h4 id="9chap" class="green">Chapter 9</h4>

<ol class="doc">
  <li value="1">There was a marsh of no great extent between our army and that of the enemy. The latter were waiting to see if our men would pass this; our men, also, were ready in arms to attack them while disordered, if the first attempt to pass should be made by them.</li>
  <li value="2">In the mean time battle was commenced between the two armies by a cavalry action. When neither army began to pass the marsh, <mark>Caesar</mark>, upon the skirmishes of the horse [proving] favorable to our men, led back his forces into the camp.</li>
  <li value="3">The enemy immediately hastened from that place to the river Aisne, which it has been stated, was behind our camp.</li>
  <li value="4">Finding a ford there, they endeavored to lead a part of their forces over it; with the design, that, if they could, they might carry by storm the fort which Quintus Titurius, <mark>Caesar</mark>'s legate, commanded, and might cut off the bridge;</li>
  <li value="5">but, if they could not do that, they should lay waste the lands of <mark>the Remi</mark>, which were of great use to us in carrying on the war, and might hinder our men from foraging.</li>
</ol>

<h4 id="10chap" class="green">Chapter 10</h4>

<ol class="doc">
  <li value="1"><mark>Caesar</mark>, being apprized of this by Titurius, leads all his cavalry and light-armed Numidians, slingers and archers, over the bridge, and hastens toward them.</li>
  <li value="2">There was a severe struggle in that place. Our men, attacking in the river the disordered enemy, slew a great part of them.</li>
  <li value="3">By the immense number of their missiles they drove back the rest, who, in a most courageous manner were attempting to pass over their bodies, and surrounded with their cavalry, and cut to pieces those who had first crossed the river.</li>
  <li value="4">The enemy, when they perceived that their hopes had deceived them both with regard to their taking the town by storm and also their passing the river, and did not see our men advance to a more disadvantageous place for the purpose of fighting, and when provisions began to fail them, having called a council, determined that it was best for each to return to his country, and resolved to assemble from all quarters to defend those into whose territories the Romans should first march an army; that they might contend in their own rather than in a foreign country, and might enjoy the stores of provision which they possessed at home.</li>
  <li value="5">Together with other causes, this consideration also led them to that resolution, viz: that they had learned that Diviciacus and the Aedui were approaching the territories of the Bellovaci. And it was impossible to persuade the latter to stay any longer, or to deter them from conveying succor to their own people.</li>
</ol>

<h4 id="11chap" class="green">Chapter 11</h4>

<ol class="doc">
  <li value="1">That matter being determined on, marching out of their camp at the second watch, with great noise and confusion, in no fixed order, nor under any command, since each sought for himself the foremost place in the journey, and hastened to reach home, they made their departure appear very like a flight.</li>
  <li value="2"><mark>Caesar</mark>, immediately learning this through his scouts, [but] fearing an ambuscade, because he had not yet discovered for what reason they were departing, kept his army and cavalry within the camp.</li>
  <li value="3">At daybreak, the intelligence having been confirmed by the scouts, he sent forward his cavalry to harass their rear; and gave the command of it to two of his legates, Quintus Pedius, and Lucius Aurunculeius Cotta. He ordered Titus Labienus, another of his legates, to follow them closely with three legions.</li>
  <li value="4">These, attacking their rear, and pursuing them for many miles, slew a great number of them as they were fleeing; while those in the rear with whom they had come up, halted, and bravely sustained the attack of our soldiers;</li>
  <li value="5">the van, because they appeared to be removed from danger, and were not restrained by any necessity or command, as soon as the noise was heard, broke their ranks, and, to a man, rested their safety in flight.</li>
  <li value="6">Thus without any risk [to themselves] our men killed as great a number of them as the length of the day allowed; and at sunset desisted from the pursuit, and betook themselves into the camp, as they had been commanded.</li>
</ol>

<h4 id="12chap" class="green">Chapter 12</h4>

<ol class="doc">
  <li value="1">On the day following, before the enemy could recover from their terror and flight, <mark>Caesar</mark> led his army into the territories of the Suessiones, which are next to <mark>the Remi</mark>, and having accomplished a long march, hastens to the town named Noviodunum.</li>
  <li value="2">Having attempted to take it by storm on his march, because he heard that it was destitute of [sufficient] defenders, he was not able to carry it by assault, on account of the breadth of the ditch and the height of the wall, though few were defending it.</li>
  <li value="3">Therefore, having fortified the camp, he began to bring up the vineae, and to provide whatever things were necessary for the storm.</li>
  <li value="4">In the mean time the whole body of the Suessiones, after their flight, came the next night into the town.</li>
  <li value="5">The vineae having been quickly brought up against the town, a mound thrown up, and towers built, the Gauls, amazed by the greatness of the works, such as they had neither seen nor heard of before, and struck also by the dispatch of the Romans, send embassadors to <mark>Caesar</mark> respecting a surrender, and succeed in consequence of <mark>the Remi</mark> requesting that they [the Suessiones] might be spared.</li>
</ol>

<footer>
<p><span style="color: #3d8b3d;">Julius Caesar, <cite>Commentaries on the Gallic War</cite>, Book <abbr title="two">II</abbr>, chapters 1 to 12.</span></p>
</footer>

</article>
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