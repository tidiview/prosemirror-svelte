<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 cloass="yellow">Phaethon</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon_700x556.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon_700x556.jpg" alt="Apollo, god of the Sun, in the Apollo Pond of the Gardens of Palace of Versailles" title="Apollo, god of the Sun, in the Apollo Pond of the Gardens of Palace of Versailles" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-380.jpg 380w, 
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-480.jpg 480w, 
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon_700x556.jpg 700w"></picture><figcaption>The Chariot of the Sun, driven by Apollo, is coming out of Ocean at dawn</figcaption></figure>
<div class="notices yellow">
<p><a href="https://en.wikipedia.org/wiki/Louis_XIV_of_France" title="https://en.wikipedia.org/wiki/Louis XIV of France">Louis XIV</a> is also called the “Sun King”.<br>
In the “<a href="https://www.amazon.com/Memoires-Instruction-Dauphin-Louis-XIV/dp/0029301300" title="https://www.amazon.com/Memoires-Instruction-Dauphin-Louis-XIV/dp/0029301300">Memoires for the instruction of the Dolphin</a>”, he himself explained the reasons that led him, young, alone, to make this choice naturally.<br>
At the <a href="https://en.wikipedia.org/wiki/Palace_of_Versailles" title="https://en.wikipedia.org/wiki/Palace of Versailles">Palace of Versailles</a>, the sun is visible in many forms.<br>
Among them, several places reveal the figure of <a href="https://en.wikipedia.org/wiki/Apollo" title="https://en.wikipedia.org/wiki/Apollo">Apollo</a>, God of the Sun, which evokes the grandeur of the Roman Empire, particularly those of the first baroque fests that took place in Versailles, such as the group of the Chariot of the Sun carried out by <a href="https://en.wikipedia.org/wiki/Jean-Baptiste_Tuby" title="https://en.wikipedia.org/wiki/Jean-Baptiste Tuby">Jean-Baptiste TUBY</a> between 1668 and 1671 in the center of the <a href="https://en.wikipedia.org/wiki/Bassin_d'Apollo" title="https://en.wikipedia.org/wiki/Bassin d'Apollon">Pond of Apollo</a> in the <a href="https://en.wikipedia.org/wiki/Gardens_of_Versailles" title="https://en.wikipedia.org/wiki/Gardens of Versailles">Gardens</a>.<br>
The text below tells the tragic death of Apollo's strange son, <a href="https://en.wikipedia.org/wiki/Phaethon" title="https://en.wikipedia.org/wiki/Phaethon">Phaethon</a>, as it appears in the “<a href="https://en.wikipedia.org/wiki/Metamorphoses" title="https://en.wikipedia.org/wiki/Metamorphoses">Metamorphoses</a>” of the Latin-speaking Roman Empire writer <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid">Ovid</a>, whom Louis XIV knew intimately for having apointed the writer <a href="https://en.wikipedia.org/wiki/Jean_Racine" title="https://en.wikipedia.org/wiki/Jean Racine">Jean Racine</a> of a particular reading of that work in the evening.<br>
This is the opportunity to approach the meaning of the figure of this star to Louis XIV as described by this text.</p>
</div>
<h2 class="yellow">Phaethon according to “The Metamorphoses”</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>1</sup></td>
<td>The palace of the Sun towered up with raised columns, bright with glittering gold, and gleaming bronze like fire.<br>
Shining ivory crowned the roofs, and the twin doors radiated light from polished silver.</td></tr>
<tr><td><sup>5</sup></td>
<td>The work of art was finer than the material: on the doors Mulciber had engraved the waters that surround the earth’s centre, the earthly globe, and the overarching sky.<br>
The dark blue sea contains the gods, melodious Triton,</td></tr>
<tr><td><sup>10</sup></td>
<td>shifting Proteus, Aegaeon crushing two huge whales together, his arms across their backs, and Doris with her daughters, some seen swimming, some sitting on rocks drying their sea-green hair, some riding the backs of fish.<br>
They are neither all alike, nor all different, just as sisters should be.<br>
The land shows men and towns, woods and creatures,</td></tr>
<tr><td><sup>15</sup></td>
<td>rivers and nymphs and other rural gods.<br>
Above them was an image of the glowing sky, with six signs of the zodiac on the right hand door and the same number on the left.</td></tr>
</tbody>
</table>
<h3 class="yellow">Phaethon</h3>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td></td>
<td>As soon as Clymene’s son had climbed the steep path there,</td></tr>
<tr><td><sup>20</sup></td>
<td>and entered the house of this parent of whose relationship to himself he was uncertain, he immediately made his way into his father’s presence, but stopped some way off, unable to bear his light too close.<br>
Wearing a purple robe, Phoebus sat on a throne shining with bright emeralds.</td></tr>
<tr><td><sup>25</sup></td>
<td>To right and left stood the Day, Month, and Year, the Century and the equally spaced Hours.<br>
Young Spring stood there circled with a crown of flowers, naked Summer wore a garland of ears of corn, Autumn was stained by the trodden grapes, and</td></tr>
<tr><td><sup>30</sup></td>
<td>icy Winter had white, bristling hair.<br>
The Sun, seated in the middle of them, looked at the boy, who was fearful of the strangeness of it all, with eyes that see everything, and said « What reason brings you here?<br>
What do you look for on these heights, Phaethon, son that no father need deny? »</td></tr>
<tr><td><sup>35</sup></td>
<td>Phaethon replied « Universal light of the great world, Phoebus, father, if you let me use that name, if Clymene is not hiding some fault behind false pretence, give me proof father, so they will believe I am your true offspring, and take away this uncertainty from my mind! »</td></tr>
<tr><td><sup>40</sup></td>
<td>He spoke, and his father removed the crown of glittering rays from his head and ordered him to come nearer.<br>
Embracing him, he said « It is not to be denied you are worthy to be mine, and Clymene has told you the truth of your birth.</td></tr>
<tr><td><sup>45</sup></td>
<td>So that you can banish doubt, ask for any favour, so that I can grant it to you.<br>
May the Stygian lake, that my eyes have never seen, by which the gods swear, witness my promise. »<br>
Hardly had he settled back properly in his seat when the boy asked for his father’s chariot and the right to control his wing-footed horses for a day.<br>
His father regretted his oath.<br>
Three times, and then a fourth,</td></tr>
<tr><td><sup>50</sup></td>
<td>shaking his bright head, he said « Your words show mine were rash; if only it were right to retract my promise!<br>
I confess my boy I would only refuse you this one thing.<br>
It is right to dissuade you.<br>
What you want is unsafe.<br>
Phaethon you ask too great a favour, and one that is unfitting for your strength and boyish years.</td></tr>
<tr><td><sup>55</sup></td>
<td>Your fate is mortal: it is not mortal what you ask.<br>
Unknowingly you aspire to more than the gods can share.<br>
Though each deity can please themselves, within what is allowed,</td></tr>
<tr><td><sup>60</sup></td>
<td>no one except myself has the power to occupy the chariot of fire.<br>
Even the lord of mighty Olympus, who hurls terrifying lightning-bolts from his right hand, cannot drive this team, and who is greater than Jupiter? »<br>
« The first part of the track is steep, and one that my fresh horses at dawn can hardly climb.</td></tr>
<tr><td><sup>65</sup></td>
<td>In mid-heaven it is highest, where to look down on earth and sea often alarms even me, and makes my heart tremble with awesome fear.<br>
The last part of the track is downwards and needs sure control.<br>
Then even Tethys herself, who receives me in her submissive waves, is accustomed to fear that I might dive headlong.</td></tr>
<tr><td><sup>70</sup></td>
<td>Moreover the rushing sky is constantly turning, and drags along the remote stars, and whirls them in rapid orbits.<br>
I move the opposite way, and its momentum does not overcome me as it does all other things, and I ride contrary to its swift rotation.<br>
Suppose you are given the chariot.</td></tr>
<tr><td><sup>75</sup></td>
<td>What will you do? Will you be able to counter the turning poles so that the swiftness of the skies does not carry you away?<br>
Perhaps you conceive in imagination that there are groves there and cities of the gods and temples with rich gifts.<br>
The way runs through ambush, and apparitions of wild beasts!<br>
Even if you keep your course, and do not steer awry,</td></tr>
<tr><td><sup>80</sup></td>
<td>you must still avoid the horns of Taurus the Bull, Sagittarius the Haemonian Archer, raging Leo and the Lion’s jaw, Scorpio’s cruel pincers sweeping out to encircle you from one side, and Cancer’s crab-claws reaching out from the other.<br>
You will not easily rule those proud horses,</td></tr>
<tr><td><sup>85</sup></td>
<td>breathing out through mouth and nostrils the fires burning in their chests.<br>
They scarcely tolerate my control when their fierce spirits are hot, and their necks resist the reins.<br>
Beware my boy, that I am not the source of a gift fatal to you, while something can still be done to set right your request! »</td></tr>
<tr><td><sup>90</sup></td>
<td>« No doubt, since you ask for a certain sign to give you confidence in being born of my blood, I give you that sure sign by fearing for you, and show myself a father by fatherly anxiety.<br>
Look at me.<br>
If only you could look into my heart, and see a father’s concern from within!<br>
Finally,</td></tr>
<tr><td><sup>95</sup></td><td>look around you, at the riches the world holds, and ask for anything from all of the good things in earth, sea, and sky.<br>
I can refuse you nothing.<br>
Only this one thing I take exception to, which would truly be a punishment and not an honour.<br>
Phaethon, you ask for punishment as your reward!</td></tr>
<tr><td><sup>100</sup></td>
<td>Why do you unknowingly throw your coaxing arms around my neck?<br>
Have no doubt!<br>
Whatever you ask will be given, I have sworn it by the Stygian streams, but make a wiser choice! »<br>
The warning ended, but Phaethon still rejected his words, and pressed his purpose, blazing with desire to drive the chariot.</td></tr>
<tr><td><sup>105</sup></td>
<td>So, as he had the right, his father led the youth to the high chariot, Vulcan’s work.<br>
It had an axle of gold, and a gold chariot pole, wheels with golden rims, and circles of silver spokes.</td></tr>
<tr><td><sup>110</sup></td>
<td>Along the yoke chrysolites and gemstones, set in order, glowed with brilliance reflecting Phoebus’s own light.<br>
Now while brave Phaethon is gazing in wonder at the workmanship, see, Aurora, awake in the glowing east, opens wide her bright doors, and her rose-filled courts.<br>
The stars, whose ranks are shepherded by Lucifer the morning star, vanish, and he, last of all,</td></tr>
<tr><td><sup>115</sup></td>
<td>leaves his station in the sky.<br>
When Titan saw his setting, as the earth and skies were reddening, and just as the crescent of the vanishing moon faded, he ordered the swift Hours to yoke his horses.<br>
The goddesses quickly obeyed his command, and led the team,</td></tr>
<tr><td><sup>120</sup></td>
<td>sated with ambrosial food and breathing fire, out of the tall stables, and put on their ringing harness.<br>
Then the father rubbed his son’s face with a sacred ointment, and made it proof against consuming flames, and placed his rays amongst his hair, and foreseeing tragedy,</td></tr>
<tr><td><sup>125</sup></td>
<td>and fetching up sighs from his troubled heart, said « If you can at least obey your father’s promptings, spare the whip, boy, and rein them in more strongly!<br>
They run swiftly of their own accord.<br>
It is a hard task to check their eagerness.<br>
And do not please yourself, taking a path straight through the five zones of heaven!</td></tr>
<tr><td><sup>130</sup></td>
<td>The track runs obliquely in a wide curve, and bounded by the three central regions, avoids the southern pole and the Arctic north.<br>
This is your road, you will clearly see my wheel-marks, and so that heaven and earth receive equal warmth,</td></tr>
<tr><td><sup>135</sup></td>
<td>do not sink down too far or heave the chariot into the upper air! Too high and you will scorch the roof of heaven: too low, the earth.<br>
The middle way is safest.<br>
Nor must you swerve too far right towards writhing Serpens, nor lead your wheels too far left towards sunken Ara.</td></tr>
<tr><td><sup>140</sup></td>
<td>Hold your way between them!<br>
I leave the rest to Fortune, I pray she helps you, and takes better care of you than you do yourself.<br>
While I have been speaking, dewy night has touched her limit on Hesperus’s far western shore.<br>
We have no time for freedom!<br>
We are needed: Aurora, the dawn, shines, and the shadows are gone.</td></tr>
<tr><td><sup>145</sup></td>
<td>PSeize the reins in your hand, or if your mind can be changed, take my counsel, do not take my horses!<br>
While you can, while you still stand on solid ground, before unknowingly you take to the chariot you have unluckily chosen, let me light the world, while you watch in safety!</td></tr>
</tbody>
</table>
<h3 class="yellow">the flight of Phaethon</h3>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup><sup>150</sup></td>
<td>The boy has already taken possession of the fleet chariot, and stands proudly, and joyfully, takes the light reins in his hands, and thanks his unwilling father.<br>
Meanwhile the sun’s swift horses, Pyroïs, Eoüs, Aethon, and the fourth, Phlegon, fill the air with fiery whinnying,</td></tr>
<tr><td><sup>155</sup></td>
<td>and strike the bars with their hooves. When Tethys, ignorant of her grandson’s fate, pushed back the gate, and gave them access to the wide heavens, rushing out, they tore through the mists in the way with their hooves</td></tr>
<tr><td><sup>160</sup></td>
<td>and, lifted by their wings, overtook the East winds rising from the same region.<br>
But the weight was lighter than the horses of the Sun could feel, and the yoke was free of its accustomed load.</td></tr>
<tr><td><sup>165</sup></td>
<td>Just as curved-sided boats rock in the waves without their proper ballast, and being too light are unstable at sea, so the chariot, free of its usual burden, leaps in the air and rushes into the heights as though it were empty.<br>
As soon as they feel this the team of four run wild and leave the beaten track, no longer running in their pre-ordained course.<br>
He was terrified,</td></tr>
<tr><td><sup>170</sup></td>
<td>unable to handle the reins entrusted to him, not knowing where the track was, nor, if he had known, how to control the team.<br>
Then for the first time the chill stars of the Great and Little Bears,</td></tr>
<tr><td><sup>175</sup></td>
<td>grew hot, and tried in vain to douse themselves in forbidden waters.<br>
And the Dragon, Draco, that is nearest to the frozen pole, never formidable before and sluggish with the cold, now glowed with heat, and took to seething with new fury.<br>
They say that you Bootës also fled in confusion, slow as you are and hampered by the Plough.</td></tr>
<tr><td><sup>180</sup></td>
<td>When the unlucky Phaethon looked down from the heights of the sky at the earth far, far below he grew pale and his knees quaked with sudden fear, and his eyes were robbed of shadow by the excess light.<br>
Now he would rather he had never touched his father’s horses, and regrets knowing his true parentage and possessing what he asked for.<br>
Now he wants only to be called Merops’s son, as he is driven along</td></tr>
<tr><td><sup>185</sup></td>
<td>like a ship in a northern gale, whose master lets go the ropes, and leaves her to prayer and the gods.<br>
What can he do?<br>
Much of the sky is now behind his back, but more is before his eyes. Measuring both in his mind, he looks ahead to the west he is not fated to reach</td></tr>
<tr><td><sup>190</sup></td>
<td>and at times back to the east.<br>
Dazed he is ignorant how to act, and can neither grasp the reins nor has the power to loose them, nor can he change course by calling the horses by name.<br>
Also, alarmed, he sees the marvellous forms of huge creatures everywhere in the glowing sky.<br>
There is a place where Scorpio bends his pincers in twin arcs,</td></tr>
<tr><td><sup>195</sup></td>
<td>and, with his tail and his curving arms stretched out to both sides, spreads his body and limbs over two star signs.<br>
When the boy saw this monster drenched with black and poisonous venom threatening to wound him with its arched sting,</td></tr>
<tr><td><sup>200</sup></td>
<td>robbed of his wits by chilling horror, he dropped the reins.<br>
When the horses feel the reins lying across their backs, after he has thrown them down, they veer off course</td></tr>
<tr><td><sup>205</sup></td>
<td>and run unchecked through unknown regions of the air.<br>
Wherever their momentum takes them there they run, lawlessly, striking against the fixed stars in deep space and hurrying the chariot along remote tracks.<br>
Now they climb to the heights of heaven, now rush headlong down its precipitous slope, sweeping a course nearer to the earth.<br>
The Moon, amazed, sees her brother’s horses running below her own, and the boiling clouds smoke.</td></tr>
<tr><td><sup>210</sup></td>
<td>The earth bursts into flame, in the highest regions first, opens in deep fissures and all its moisture dries up.<br>
The meadows turn white, the trees are consumed with all their leaves, and the scorched corn makes its own destruction.<br>
But I am bemoaning the lesser things.</td></tr>
<tr><td><sup>215</sup></td>
<td>Great cities are destroyed with all their walls, and the flames reduce whole nations with all their peoples to ashes.<br>
The woodlands burn, with the hills.<br>
Mount Athos is on fire, Cilician Taurus, Tmolus, Oete and Ida, dry now once covered with fountains, and Helicon home of the Muses, and Haemus not yet linked with King Oeagrius’s name.</td></tr>
<tr><td><sup>220</sup></td>
<td>Etna blazes with immense redoubled flames, the twin peaks of Parnassus, Eryx, Cynthus, Othrys, Rhodope fated at last to lose its snow, Mimas and Dindyma, Mycale and Cithaeron, ancient in rites.<br>
Its chilly climate cannot save Scythia.</td></tr>
<tr><td><sup>225</sup></td>
<td>The Caucasus burn, and Ossa along with Pindus, and Olympos greater than either, and the lofty Alps and cloud-capped Apennines.</td></tr>
<tr><td><sup>230</sup></td>
<td>Then, truly, Phaethon sees the whole earth on fire.<br>
He cannot bear the violent heat, and he breathes the air as if from a deep furnace. He feels his chariot glowing white.<br>
He can no longer stand the ash and sparks flung out, and is enveloped in dense, hot smoke.<br>
He does not know where he is, or where he is going, swept along by the will of the winged horses.</td></tr>
<tr><td><sup>235</sup></td>
<td>It was then, so they believe, that the Ethiopians acquired their dark colour, since the blood was drawn to the surface of their bodies. Then Libya became a desert, the heat drying up her moisture.<br>
Then the nymphs with dishevelled hair wept bitterly for their lakes and fountains. Boeotia searches for Dirce’s rills,</td></tr>
<tr><td><sup>240</sup></td>
<td>Argos for Amymone’s fountain, Corinth for the Pirenian spring.<br>
Nor are the rivers safe because of their wide banks.<br>
The Don turns to steam in mid-water, and old Peneus, and Mysian Caicus and swift-flowing Ismenus, Arcadian Erymanthus,</td></tr>
<tr><td><sup>245</sup></td>
<td>Xanthus destined to burn again, golden Lycormas and Maeander playing in its watery curves, Thracian Melas and Laconian Eurotas.<br>
Babylonian Euphrates burns.<br>
Orontes burns and quick Thermodon, Ganges, Phasis, and Danube.</td></tr>
<tr><td><sup>250</sup></td>
<td>Alpheus boils.<br>
Spercheos’s banks are on fire.<br>
The gold that the River Tagus carries is molten with the fires, and the swans for whose singing Maeonia’s riverbanks are famous, are scorched in Caÿster’s midst.<br>
The Nile fled in terror to the ends of the earth,</td></tr>
<tr><td><sup>255</sup></td>
<td>and hid its head that remains hidden.<br>
Its seven mouths are empty and dust-filled, seven channels without a stream.<br>
The same fate parches the Thracian rivers, Hebrus and Strymon, and the western rivers, Rhine, Rhone, Po and the Tiber who had been promised universal power.</td></tr>
<tr><td><sup>260</sup></td>
<td>Everywhere the ground breaks apart, light penetrates through the cracks down into Tartarus, and terrifies the king of the underworld and his queen.<br>
The sea contracts and what was a moment ago wide sea is a parched expanse of sand.<br>
Mountains emerge from the water, and add to the scattered Cyclades.<br>
The fish dive deep, and the dolphins</td></tr>
<tr><td><sup>265</sup></td>
<td>no longer dare to rise arcing above the water, as they have done, into the air.<br>
The lifeless bodies of seals float face upwards on the deep.<br>
They even say that Nereus himself, and Doris and her daughters drifted through warm caves.<br>
Three times Neptune tried to lift his fierce face and arms above the waters. Three times he could not endure the burning air.</td></tr>
<tr><td><sup>275</sup></td>
<td>Nevertheless, kindly Earth, surrounded as she was by sea, between the open waters and the dwindling streams that had buried themselves in their mother’s dark womb, lifted her smothered face.<br>
Putting her hand to her brow, and shaking everything with her mighty tremors, she sank back a little lower than she used to be, and spoke in a faint voice « If this pleases you, if I have deserved it,</td></tr>
<tr><td><sup>280</sup></td>
<td>Ô king of the gods, why delay your lightning bolts?<br>
If it is right for me to die through the power of fire, let me die by your fire and let the doer of it lessen the pain of the deed!<br>
I can hardly open my lips to say these words (the heat was choking her).<br>
Look at my scorched hair and the ashes in my eyes, the ashes over my face!</td></tr>
<tr><td><sup>285</sup></td>
<td>Is this the honour and reward you give me for my fruitfulness and service, for carrying wounds from the curved plough and the hoe, for being worked throughout the year, providing herbage and tender grazing for the flocks, produce for the human race and incense to minister to you gods?</td></tr>
<tr><td><sup>290</sup></td>
<td>Even if you find me deserving of ruin, what have the waves done, why does your brother deserve this?<br>
Why are the waters that were his share by lot diminished and so much further from the sky?<br>
If neither regard for me or for your brother moves you pity at least your own heavens!</td></tr>
<tr><td><sup>295</sup></td>
<td>Look around you on either side: both the poles are steaming!<br>
If the fire should melt them, your own palace will fall!<br>
Atlas himself is suffering, and can barely hold up the white-hot sky on his shoulders!<br>
If the sea and the land and the kingdom of the heavens are destroyed, we are lost in ancient chaos!</td></tr>
<tr><td><sup>300</sup></td>
<td>Save whatever is left from the flames, and think of our common interest! »<br>
So the Earth spoke, and unable to tolerate the heat any longer or speak any further, she withdrew her face into her depths closer to the caverns of the dead.<br>
But the all-powerful father of the gods climbs to the highest summit of heaven, from where he spreads his clouds over the wide earth, from where he moves the thunder and hurls his quivering lightning bolts, calling on the gods,</td></tr>
<tr><td><sup>305</sup></td>
<td>especially on him who had handed over the sun chariot, to witness that, unless he himself helps, the whole world will be overtaken by a ruinous fate.<br>
Now he has no clouds to cover the earth,</td></tr>
<tr><td><sup>310</sup></td>
<td>or rain to shower from the sky.<br>
He thundered, and balancing a lightning bolt in his right hand threw it from eye-level at the charioteer, removing him, at the same moment, from the chariot and from life,</td></tr>
<tr><td><sup>315</sup></td>
<td>extinguishing fire with fierce fire.<br>
Thrown into confusion the horses, lurching in different directions, wrench their necks from the yoke and throw off the broken harness.<br>
Here the reins lie, there the axle torn from the pole, there the spokes of shattered wheels, and the fragments of the wrecked chariot are flung far and wide.</td></tr>
<tr><td><sup>320</sup></td>
<td>But Phaethon, flames ravaging his glowing hair, is hurled headlong, leaving a long trail in the air, as sometimes a star does in the clear sky, appearing to fall although it does not fall.<br>
Far from his own country, in a distant part of the world, the river god Eridanus takes him from the air, and bathes his smoke-blackened face.</td></tr>
<tr><td><sup>325</sup></td>
<td>There the Italian nymphs consign his body, still smoking from that triple-forked flame, to the earth, and they also carve a verse in the rock:<br>
HERE PHAETHON LIES WHO THE SUN’S JOURNEY MADE<br>
DARED ALL THOUGH HE BY WEAKNESS WAS BETRAYED<br>
Now the father, pitiful, ill with grief,</td></tr>
<tr><td><sup>330</sup></td>
<td>hid his face, and, if we can believe it, a whole day went by without the sun.<br>
But the fires gave light, so there was something beneficial amongst all that evil.<br>
But Clymene, having uttered whatever can be uttered at such misfortune, grieving and frantic and tearing her breast,</td></tr>
<tr><td><sup>335</sup></td>
<td>wandered over the whole earth first looking for her son’s limbs, and then failing that his bones.<br>
She found his bones already buried however, beside the riverbank in a foreign country.<br>
Falling to the ground she bathed with tears the name she could read on the cold stone and warmed it against her naked breast.</td></tr>
<tr><td><sup>340</sup></td>
<td>The Heliads, her daughters and the Sun’s, cry no less, and offer their empty tribute of tears to the dead, and, beating their breasts with their hands, they call for their brother night and day, and lie down on his tomb, though he cannot hear their pitiful sighs.<br>
Four times the moon had joined her crescent horns to form her bright disc.</td></tr>
<tr><td><sup>345</sup></td>
<td>They by habit, since use creates habit, devoted themselves to mourning.<br>
Then Phaethüsa, the eldest sister, when she tried to throw herself to the ground, complained that her ankles had stiffened, and when radiant Lampetia tried to come near her she was suddenly rooted to the spot.<br>
A third sister attempting to tear at her hair pulled out leaves.</td></tr>
<tr><td><sup>350</sup></td>
<td>One cried out in pain that her legs were sheathed in wood, another that her arms had become long branches.<br>
While they wondered at this, bark closed round their thighs and by degrees over their waists, breasts, shoulders, and hands,</td></tr>
<tr><td><sup>355</sup></td>
<td>and all that was left free were their mouths calling for their mother.<br>
What can their mother do but go here and there as the impulse takes her, pressing her lips to theirs where she can? It is no good.<br>
She tries to pull the bark from their bodies and break off new branches with her hands,</td></tr>
<tr><td><sup>360</sup></td>
<td>but drops of blood are left behind like wounds.<br>
« Stop, mother, please » cries out whichever one she hurts, « Please stop: It is my body in the tree you are tearing.<br>
Now, farewell. » and the bark closed over her with her last words.<br>
Their tears still flow, and hardened by the sun, fall as</td></tr>
<tr><td><sup>365</sup></td><td>amber from the virgin branches, to be taken by the bright river and sent onwards to adorn Roman brides.</td></tr>
</tbody>
</table>
<p><span style="color: #df8a13;">Ovid, “The Metamorphoses”, Book 6, verses 1 and followings.</span></p>
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