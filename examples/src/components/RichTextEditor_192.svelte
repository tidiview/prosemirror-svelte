<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:161 JA:129  -->
<article>

<hgroup>
<h1 cloass="yellow">Phaethon</h1>
<h2 class="yellow">in the gardens of Versailles</h2>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon_700x556.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon_700x556.jpg" alt="Apollo, god of the Sun, in the Apollo Pond of the Gardens of Palace of Versailles" title="Apollo, god of the Sun, in the Apollo Pond of the Gardens of Palace of Versailles" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-380.jpg 380w, 
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-480.jpg 480w, 
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/02.phaeton/apollon_700x556.jpg 700w"></picture><figcaption>The Chariot of the Sun, driven by Apollo, coming out of Ocean at dawn<br><q cite="#phaeton">It had an axle of gold, and a gold chariot pole, wheels with golden rims, and circles of silver spokes.</q>, <cite>The Metamorphoses</cite> Book <abbr title="two">II</abbr>, verse 106</figcaption>
</figure>

<div class="notices yellow">
<p><a href="https://en.wikipedia.org/wiki/Louis_XIV_of_France" title="https://en.wikipedia.org/wiki/Louis XIV of France">Louis <abbr title="the fourteenth">XIV</abbr></a> is also called the “Sun King”.</p>
<p>In the <a href="https://www.amazon.com/Memoires-Instruction-Dauphin-Louis-XIV/dp/0029301300" title="https://www.amazon.com/Memoires-Instruction-Dauphin-Louis-XIV/dp/0029301300"><cite>Memoires for the instruction of the Dauphin</cite></a>, he himself explained the reasons that led him, young, alone, to make this choice naturally.</p>
<p>At the <a href="https://en.wikipedia.org/wiki/Palace_of_Versailles" title="https://en.wikipedia.org/wiki/Palace of Versailles">Palace of Versailles</a>, the sun is visible in many forms.</p>
<p>Among them, several places reveal the figure of <a href="https://en.wikipedia.org/wiki/Apollo" title="https://en.wikipedia.org/wiki/Apollo">Apollo</a>, God of the Sun, which evokes the grandeur of the Roman Empire, particularly those of the first baroque fests that took place in Versailles, such as the group of the Chariot of the Sun carried out by <a href="https://en.wikipedia.org/wiki/Jean-Baptiste_Tuby" title="https://en.wikipedia.org/wiki/Jean-Baptiste Tuby">Jean-Baptiste TUBY</a> between <time datetime="1668">1668</time> and <time datetime="1671">1671</time> in the center of the <a href="https://en.wikipedia.org/wiki/Bassin_d'Apollo" title="https://en.wikipedia.org/wiki/Bassin d'Apollon">Pond of Apollo</a> in the <a href="https://en.wikipedia.org/wiki/Gardens_of_Versailles" title="https://en.wikipedia.org/wiki/Gardens of Versailles">Gardens</a>.</p>
<p>The text below tells the tragic death of Apollo's strange son, <a href="https://en.wikipedia.org/wiki/Phaethon" title="https://en.wikipedia.org/wiki/Phaethon">Phaethon</a>, as it appears in <a href="https://en.wikipedia.org/wiki/Metamorphoses" title="https://en.wikipedia.org/wiki/Metamorphoses"><cite>The Metamorphoses</cite></a> of the Latin-speaking Roman Empire writer <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid">Ovid</a>, whom Louis XIV knew intimately for having apointed the writer <a href="https://en.wikipedia.org/wiki/Jean_Racine" title="https://en.wikipedia.org/wiki/Jean Racine">Jean Racine</a> of a particular reading of that work in the evening.</p>
<p>This is the opportunity to approach the meaning of the figure of this star to Louis <abbr title="the fourteenth">XIV</abbr> as described by this text.</p>
</div>

<h2 id="phaeton" class="yellow">Phaethon according to text of book <abbr title="two">II</abbr> of <cite>The Metamorphoses</cite></h2>

<ol class="doc">
  <li value="1">The palace of the Sun towered up with raised columns, bright with glittering gold, and gleaming bronze like fire.</li>
  <li>Shining ivory crowned the roofs, and the twin doors radiated light from polished silver.</li>
  <li value="5">The work of art was finer than the material: on the doors Mulciber had engraved the waters that surround the earth’s centre, the earthly globe, and the overarching sky.</li>
  <li>The dark blue sea contains the gods, melodious Triton,</li>
  <li value="10">shifting Proteus, Aegaeon crushing two huge whales together, his arms across their backs, and Doris with her daughters, some seen swimming, some sitting on rocks drying their sea-green hair, some riding the backs of fish.</li>
  <li>They are neither all alike, nor all different, just as sisters should be.</li>
  <li>The land shows men and towns, woods and creatures,</li>
  <li value="15">rivers and nymphs and other rural gods.</li>
  <li>Above them was an image of the glowing sky, with six signs of the zodiac on the right hand door and the same number on the left.</li>
</ol>

<h3 class="yellow">Phaethon</h3>

<ol class="doc">
  <li>As soon as Clymene’s son had climbed the steep path there,</li>
  <li value="20">and entered the house of this parent of whose relationship to himself he was uncertain, he immediately made his way into his father’s presence, but stopped some way off, unable to bear his light too close.</li>
  <li>Wearing a purple robe, Phoebus sat on a throne shining with bright emeralds.</li>
  <li value="25">To right and left stood the Day, Month, and Year, the Century and the equally spaced Hours.</li>
  <li>Young Spring stood there circled with a crown of flowers, naked Summer wore a garland of ears of corn, Autumn was stained by the trodden grapes, and</li>
  <li value="30">icy Winter had white, bristling hair.</li>

  <li class="top-space">
    <p>The Sun, seated in the middle of them, looked at the boy, who was fearful of the strangeness of it all, with eyes that see everything, and said</p>
    <p class="conversation">What reason brings you here?</p>
  </li>
  <li>
    <p class="conversation">What do you look for on these heights, <mark>Phaethon</mark>, son that no father need deny?</p>
  </li>
  <li value="35">
    <p><mark>Phaethon</mark> replied</p>
    <p class="conversation">Universal light of the great world, Phoebus, father, if you let me use that name, if Clymene is not hiding some fault behind false pretence, give me proof father, so they will believe I am your true offspring, and take away this uncertainty from my mind!</p>
  </li>
  <li value="40">He spoke, and his father removed the crown of glittering rays from his head and ordered him to come nearer.</li>

  <li>
    <p>Embracing him, he said</p>
    <p class="conversation">It is not to be denied you are worthy to be mine, and Clymene has told you the truth of your birth.</p>
  </li>
  <li value="45">
    <p class="conversation">So that you can banish doubt, ask for any favour, so that I can grant it to you.</p>
    </li>
  <li>
    <p class="conversation">May the Stygian lake, that my eyes have never seen, by which the gods swear, witness my promise.</p>
  </li>
  <li>Hardly had he settled back properly in his seat when the boy asked for his father’s chariot and the right to control his wing-footed horses for a day.</li>

  <li class="top-space">His father regretted his oath.</li>
  <li>Three times, and then a fourth,</li>

  <li value="50">
    <p>shaking his bright head, he said</p>
    <p class="conversation">Your words show mine were rash; if only it were right to retract my promise!</p>
  </li>
  <li>
    <p class="conversation">I confess my boy I would only refuse you this one thing.</p>
  </li>
  <li>
    <p class="conversation">It is right to dissuade you.</p>
  </li>
  <li>
    <p class="conversation">What you want is unsafe.</p>
  </li>
  <li>
    <p class="conversation"><mark>Phaethon</mark> you ask too great a favour, and one that is unfitting for your strength and boyish years.</p>
  </li>
  <li value="55">
    <p class="conversation">Your fate is mortal: it is not mortal what you ask.</p>
  </li>
  <li>
    <p class="conversation">Unknowingly you aspire to more than the gods can share.</p>
  </li>
  <li>
    <p class="conversation">Though each deity can please themselves, within what is allowed,</p>
  </li>
  <li value="60">
    <p class="conversation">no one except myself has the power to occupy the chariot of fire.</p>
  </li>
  <li>
    <p class="conversation">Even the lord of mighty Olympus, who hurls terrifying lightning-bolts from his right hand, cannot drive this team, and who is greater than Jupiter?</p>
  </li>

  <li class="top-space">
    <p class="conversation">The first part of the track is steep, and one that my fresh horses at dawn can hardly climb.</p>
  </li>
  <li value="65">
    <p class="conversation">In mid-heaven it is highest, where to look down on earth and sea often alarms even me, and makes my heart tremble with awesome fear.</p>
  </li>
  <li>
    <p class="conversation">The last part of the track is downwards and needs sure control.</p>
  </li>
  <li>
    <p class="conversation">Then even Tethys herself, who receives me in her submissive waves, is accustomed to fear that I might dive headlong.</p>
  </li>
  <li value="70">
    <p class="conversation">Moreover the rushing sky is constantly turning, and drags along the remote stars, and whirls them in rapid orbits.</p>
  </li>
  <li>
    <p class="conversation">I move the opposite way, and its momentum does not overcome me as it does all other things, and I ride contrary to its swift rotation.</p>
  </li>
  <li>
    <p class="conversation">Suppose you are given the chariot.</p>
  </li>
  <li value="75">
    <p class="conversation">What will you do? Will you be able to counter the turning poles so that the swiftness of the skies does not carry you away?</p>
  </li>
  <li>
    <p class="conversation">Perhaps you conceive in imagination that there are groves there and cities of the gods and temples with rich gifts.</p>
  </li>
  <li>
    <p class="conversation">The way runs through ambush, and apparitions of wild beasts!</p>
  </li>
  <li>
    <p class="conversation">Even if you keep your course, and do not steer awry,</p>
  </li>
  <li value="80">
    <p class="conversation">you must still avoid the horns of Taurus the Bull, Sagittarius the Haemonian Archer, raging Leo and the Lion’s jaw, Scorpio’s cruel pincers sweeping out to encircle you from one side, and Cancer’s crab-claws reaching out from the other.</p>
  </li>
  <li>
    <p class="conversation">You will not easily rule those proud horses,</p>
  </li>
  <li value="85">
    <p class="conversation">breathing out through mouth and nostrils the fires burning in their chests.</p>
  </li>
  <li>
    <p class="conversation">They scarcely tolerate my control when their fierce spirits are hot, and their necks resist the reins.</p>
  </li>
  <li>
    <p class="conversation">Beware my boy, that I am not the source of a gift fatal to you, while something can still be done to set right your request!</p>
  </li>

  <li value="90" class="top-space">
    <p class="conversation">No doubt, since you ask for a certain sign to give you confidence in being born of my blood, I give you that sure sign by fearing for you, and show myself a father by fatherly anxiety.</p>
  </li>
  <li>
    <p class="conversation">Look at me.</p>
  </li>
  <li>
    <p class="conversation">If only you could look into my heart, and see a father’s concern from within!</p>
  </li>
  <li>
    <p class="conversation">Finally,</p>
  </li>
  <li value="95">
    <p class="conversation">Look around you, at the riches the world holds, and ask for anything from all of the good things in earth, sea, and sky.</p>
  </li>
  <li>
    <p class="conversation">I can refuse you nothing.</p>
  </li>
  <li>
    <p class="conversation">Only this one thing I take exception to, which would truly be a punishment and not an honour.</p>
  </li>
  <li>
    <p class="conversation"><mark>Phaethon</mark>, you ask for punishment as your reward!</p>
  </li>
  <li value="100">
    <p class="conversation">Why do you unknowingly throw your coaxing arms around my neck?</p>
  </li>
  <li>
    <p class="conversation">Have no doubt!</p>
  </li>
  <li>
    <p class="conversation">Whatever you ask will be given, I have sworn it by the Stygian streams, but make a wiser choice!</p>
  </li>

  <li class="top-space">The warning ended, but <mark>Phaethon</mark> still rejected his words, and pressed his purpose, blazing with desire to drive the chariot.</li>
  <li value="105">So, as he had the right, his father led the youth to the high chariot, Vulcan’s work.</li>
  <li>It had an axle of gold, and a gold chariot pole, wheels with golden rims, and circles of silver spokes.</li>
  <li value="110">Along the yoke chrysolites and gemstones, set in order, glowed with brilliance reflecting Phoebus’s own light.</li>

  <li class="top-space">Now while brave <mark>Phaethon</mark> is gazing in wonder at the workmanship, see, Aurora, awake in the glowing east, opens wide her bright doors, and her rose-filled courts.</li>
  <li>The stars, whose ranks are shepherded by Lucifer the morning star, vanish, and he, last of all,</li>
  <li value="115">leaves his station in the sky.</li>

  <li class="top-space">When Titan saw his setting, as the earth and skies were reddening, and just as the crescent of the vanishing moon faded, he ordered the swift Hours to yoke his horses.</li>
  <li>The goddesses quickly obeyed his command, and led the team,</li>
  <li value="120">sated with ambrosial food and breathing fire, out of the tall stables, and put on their ringing harness.</li>
  <li>Then the father rubbed his son’s face with a sacred ointment, and made it proof against consuming flames, and placed his rays amongst his hair, and foreseeing tragedy,</li>
  <li value="125">and fetching up sighs from his troubled heart, said
    <p class="conversation">If you can at least obey your father’s promptings, spare the whip, boy, and rein them in more strongly!</p></li>
  <li>
    <p class="conversation">They run swiftly of their own accord.</p>
  </li>
  <li>
    <p class="conversation">It is a hard task to check their eagerness.</p>
  </li>
  <li>
    <p class="conversation">And do not please yourself, taking a path straight through the five zones of heaven!</p>
  </li>
  <li value="130">
    <p class="conversation">The track runs obliquely in a wide curve, and bounded by the three central regions, avoids the southern pole and the Arctic north.</p>
  </li>
  <li>
    <p class="conversation">This is your road, you will clearly see my wheel-marks, and so that heaven and earth receive equal warmth,</p>
  </li>
  <li value="135">
    <p class="conversation">do not sink down too far or heave the chariot into the upper air! Too high and you will scorch the roof of heaven: too low, the earth.</p>
  </li>
  <li>
    <p class="conversation">The middle way is safest.</p>
  </li>

  <li class="top-space">
    <p class="conversation">Nor must you swerve too far right towards writhing Serpens, nor lead your wheels too far left towards sunken Ara.</p>
  </li>
  <li value="140">
    <p class="conversation">Hold your way between them!</p>
  </li>
  <li>
    <p class="conversation">I leave the rest to Fortune, I pray she helps you, and takes better care of you than you do yourself.</p>
  </li>
  <li>
    <p class="conversation">While I have been speaking, dewy night has touched her limit on Hesperus’s far western shore.</p>
  </li>
  <li>
    <p class="conversation">We have no time for freedom!</p>
  </li>
  <li>
    <p class="conversation">We are needed: Aurora, the dawn, shines, and the shadows are gone.</p>
  </li>
  <li value="145">
    <p class="conversation">Seize the reins in your hand, or if your mind can be changed, take my counsel, do not take my horses!</p>
  </li>
  <li>
    <p class="conversation">While you can, while you still stand on solid ground, before unknowingly you take to the chariot you have unluckily chosen, let me light the world, while you watch in safety!</p>
  </li>
</ol>

<h3 class="yellow">the flight of Phaethon</h3>

<ol class="doc">
  <li value="150" class="top-space">The boy has already taken possession of the fleet chariot, and stands proudly, and joyfully, takes the light reins in his hands, and thanks his unwilling father.</li>

  <li class="top-space">Meanwhile the sun’s swift horses, Pyroïs, Eoüs, Aethon, and the fourth, Phlegon, fill the air with fiery whinnying,</li>
  <li value="155">and strike the bars with their hooves. When Tethys, ignorant of her grandson’s fate, pushed back the gate, and gave them access to the wide heavens, rushing out, they tore through the mists in the way with their hooves</li>
  <li value="160">and, lifted by their wings, overtook the East winds rising from the same region.</li>
  <li>But the weight was lighter than the horses of the Sun could feel, and the yoke was free of its accustomed load.</li>
  <li value="165">Just as curved-sided boats rock in the waves without their proper ballast, and being too light are unstable at sea, so the chariot, free of its usual burden, leaps in the air and rushes into the heights as though it were empty.</li>

  <li class="top-space">As soon as they feel this the team of four run wild and leave the beaten track, no longer running in their pre-ordained course.</li>
  <li>He was terrified,</li>
  <li value="170">unable to handle the reins entrusted to him, not knowing where the track was, nor, if he had known, how to control the team.</li>
  <li>Then for the first time the chill stars of the Great and Little Bears,</li>
  <li value="175">grew hot, and tried in vain to douse themselves in forbidden waters.</li>
  <li>And the Dragon, Draco, that is nearest to the frozen pole, never formidable before and sluggish with the cold, now glowed with heat, and took to seething with new fury.</li>
  <li>They say that you Bootës also fled in confusion, slow as you are and hampered by the Plough.</li>

  <li value="180" class="top-space">When the unlucky <mark>Phaethon</mark> looked down from the heights of the sky at the earth far, far below he grew pale and his knees quaked with sudden fear, and his eyes were robbed of shadow by the excess light.</li>
  <li>Now he would rather he had never touched his father’s horses, and regrets knowing his true parentage and possessing what he asked for.</li>
  <li>Now he wants only to be called Merops’s son, as he is driven along</li>
  <li value="185">like a ship in a northern gale, whose master lets go the ropes, and leaves her to prayer and the gods.</li>
  <li>What can he do?</li>
  <li>Much of the sky is now behind his back, but more is before his eyes. Measuring both in his mind, he looks ahead to the west he is not fated to reach</li>
  <li value="190">and at times back to the east.</li>
  <li>Dazed he is ignorant how to act, and can neither grasp the reins nor has the power to loose them, nor can he change course by calling the horses by name.</li>
  <li>Also, alarmed, he sees the marvellous forms of huge creatures everywhere in the glowing sky.</li>
  <li>There is a place where Scorpio bends his pincers in twin arcs,</li>
  <li value="195">and, with his tail and his curving arms stretched out to both sides, spreads his body and limbs over two star signs.</li>
  <li>When the boy saw this monster drenched with black and poisonous venom threatening to wound him with its arched sting,</li>
  <li value="200">robbed of his wits by chilling horror, he dropped the reins.</li>

  <li class="top-space">When the horses feel the reins lying across their backs, after he has thrown them down, they veer off course</li>
  <li value="205">and run unchecked through unknown regions of the air.</li>
  <li>Wherever their momentum takes them there they run, lawlessly, striking against the fixed stars in deep space and hurrying the chariot along remote tracks.</li>
  <li>Now they climb to the heights of heaven, now rush headlong down its precipitous slope, sweeping a course nearer to the earth.</li>
  <li>The Moon, amazed, sees her brother’s horses running below her own, and the boiling clouds smoke.</li>
  <li value="210">The earth bursts into flame, in the highest regions first, opens in deep fissures and all its moisture dries up.</li>
  <li>The meadows turn white, the trees are consumed with all their leaves, and the scorched corn makes its own destruction.</li>
  <li>But I am bemoaning the lesser things.</li>
  <li value="215">Great cities are destroyed with all their walls, and the flames reduce whole nations with all their peoples to ashes.</li>
  <li>The woodlands burn, with the hills.</li>
  <li>Mount Athos is on fire, Cilician Taurus, Tmolus, Oete and Ida, dry now once covered with fountains, and Helicon home of the Muses, and Haemus not yet linked with King Oeagrius’s name.</li>
  <li value="220">Etna blazes with immense redoubled flames, the twin peaks of Parnassus, Eryx, Cynthus, Othrys, Rhodope fated at last to lose its snow, Mimas and Dindyma, Mycale and Cithaeron, ancient in rites.</li>
  <li>Its chilly climate cannot save Scythia.</li>
  <li value="225">The Caucasus burn, and Ossa along with Pindus, and Olympos greater than either, and the lofty Alps and cloud-capped Apennines.</li>

  <li value="230" class="top-space">Then, truly, <mark>Phaethon</mark> sees the whole earth on fire.</li>
  <li>He cannot bear the violent heat, and he breathes the air as if from a deep furnace. He feels his chariot glowing white.</li>
  <li>He can no longer stand the ash and sparks flung out, and is enveloped in dense, hot smoke.</li>
  <li>He does not know where he is, or where he is going, swept along by the will of the winged horses.</li>

  <li value="235" class="top-space">It was then, so they believe, that the Ethiopians acquired their dark colour, since the blood was drawn to the surface of their bodies. Then Libya became a desert, the heat drying up her moisture.</li>
  <li>Then the nymphs with dishevelled hair wept bitterly for their lakes and fountains. Boeotia searches for Dirce’s rills,</li>
  <li value="240">Argos for Amymone’s fountain, Corinth for the Pirenian spring.</li>
  <li>Nor are the rivers safe because of their wide banks.</li>
  <li>The Don turns to steam in mid-water, and old Peneus, and Mysian Caicus and swift-flowing Ismenus, Arcadian Erymanthus,</li>
  <li value="245">Xanthus destined to burn again, golden Lycormas and Maeander playing in its watery curves, Thracian Melas and Laconian Eurotas.</li>
  <li>Babylonian Euphrates burns.</li>
  <li>Orontes burns and quick Thermodon, Ganges, Phasis, and Danube.</li>
  <li value="250">Alpheus boils.</li>
  <li>Spercheos’s banks are on fire.</li>
  <li>The gold that the River Tagus carries is molten with the fires, and the swans for whose singing Maeonia’s riverbanks are famous, are scorched in Caÿster’s midst.</li>
  <li>The Nile fled in terror to the ends of the earth,</li>
  <li value="255">and hid its head that remains hidden.</li>
  <li>Its seven mouths are empty and dust-filled, seven channels without a stream.</li>

  <li class="top-space">The same fate parches the Thracian rivers, Hebrus and Strymon, and the western rivers, Rhine, Rhone, Po and the Tiber who had been promised universal power.</li>
  <li value="260">Everywhere the ground breaks apart, light penetrates through the cracks down into Tartarus, and terrifies the king of the underworld and his queen.</li>
  <li>The sea contracts and what was a moment ago wide sea is a parched expanse of sand.</li>
  <li>Mountains emerge from the water, and add to the scattered Cyclades.</li>
  <li>The fish dive deep, and the dolphins</li>
  <li value="265">no longer dare to rise arcing above the water, as they have done, into the air.</li>
  <li>The lifeless bodies of seals float face upwards on the deep.</li>
  <li>They even say that Nereus himself, and Doris and her daughters drifted through warm caves.</li>
  <li>Three times Neptune tried to lift his fierce face and arms above the waters. Three times he could not endure the burning air.</li>

  <li value="275" class="top-space">Nevertheless, kindly Earth, surrounded as she was by sea, between the open waters and the dwindling streams that had buried themselves in their mother’s dark womb, lifted her smothered face.</li>
  <li>
    <p>Putting her hand to her brow, and shaking everything with her mighty tremors, she sank back a little lower than she used to be, and spoke in a faint voice</p>
    <p class="conversation">If this pleases you, if I have deserved it,</p>
  </li>
  <li value="280">
    <p class="conversation">Ô king of the gods, why delay your lightning bolts?</p>
  </li>
  <li>
    <p class="conversation">If it is right for me to die through the power of fire, let me die by your fire and let the doer of it lessen the pain of the deed!</p>
  </li>
  <li>
    <p class="conversation">I can hardly open my lips to say these words (the heat was choking her).</p>
  </li>
  <li>
    <p class="conversation">Look at my scorched hair and the ashes in my eyes, the ashes over my face!</p>
  </li>
  <li value="285">
    <p class="conversation">Is this the honour and reward you give me for my fruitfulness and service, for carrying wounds from the curved plough and the hoe, for being worked throughout the year, providing herbage and tender grazing for the flocks, produce for the human race and incense to minister to you gods?</p>
  </li>

  <li value="290" class="top-space">
    <p class="conversation">Even if you find me deserving of ruin, what have the waves done, why does your brother deserve this?</p>
  </li>
  <li>
    <p class="conversation">Why are the waters that were his share by lot diminished and so much further from the sky?</p>
  </li>
  <li>
    <p class="conversation">If neither regard for me or for your brother moves you pity at least your own heavens!</p>
  </li>
  <li value="295">
    <p class="conversation">Look around you on either side: both the poles are steaming!</p>
  </li>
  <li>
    <p class="conversation">If the fire should melt them, your own palace will fall!</p>
  </li>
  <li>
    <p class="conversation">Atlas himself is suffering, and can barely hold up the white-hot sky on his shoulders!</p>
  </li>
  <li>
    <p class="conversation">If the sea and the land and the kingdom of the heavens are destroyed, we are lost in ancient chaos!</p>
  </li>
  <li value="300">
    <p class="conversation">Save whatever is left from the flames, and think of our common interest!</p>
  </li>

  <li class="top-space">So the Earth spoke, and unable to tolerate the heat any longer or speak any further, she withdrew her face into her depths closer to the caverns of the dead.</li>
  <li>But the all-powerful father of the gods climbs to the highest summit of heaven, from where he spreads his clouds over the wide earth, from where he moves the thunder and hurls his quivering lightning bolts, calling on the gods,</li>
  <li value="305">especially on him who had handed over the sun chariot, to witness that, unless he himself helps, the whole world will be overtaken by a ruinous fate.</li>
  <li>Now he has no clouds to cover the earth,</li>
  <li value="310">or rain to shower from the sky.</li>
  <li>He thundered, and balancing a lightning bolt in his right hand threw it from eye-level at the charioteer, removing him, at the same moment, from the chariot and from life,</li>
  <li value="315">extinguishing fire with fierce fire.</li>
  <li>Thrown into confusion the horses, lurching in different directions, wrench their necks from the yoke and throw off the broken harness.</li>
  <li>Here the reins lie, there the axle torn from the pole, there the spokes of shattered wheels, and the fragments of the wrecked chariot are flung far and wide.</li>

  <li value="320" class="top-space">But <mark>Phaethon</mark>, flames ravaging his glowing hair, is hurled headlong, leaving a long trail in the air, as sometimes a star does in the clear sky, appearing to fall although it does not fall.</li>
  <li>Far from his own country, in a distant part of the world, the river god Eridanus takes him from the air, and bathes his smoke-blackened face.</li>
  <li value="325">There the Italian nymphs consign his body, still smoking from that triple-forked flame, to the earth, and they also carve a verse in the rock:</li>
  <li>
    <p class="conversation">HERE PHAETHON LIES WHO THE SUN’S JOURNEY MADE</p>
  </li>
  <li>
    <p class="conversation">DARED ALL THOUGH HE BY WEAKNESS WAS BETRAYED</p>
  </li>

  <li class="top-space">Now the father, pitiful, ill with grief,</li>
  <li value="330">hid his face, and, if we can believe it, a whole day went by without the sun.</li>
  <li>But the fires gave light, so there was something beneficial amongst all that evil.</li>
  <li>But Clymene, having uttered whatever can be uttered at such misfortune, grieving and frantic and tearing her breast,</li>
  <li value="335">wandered over the whole earth first looking for her son’s limbs, and then failing that his bones.</li>
  <li>She found his bones already buried however, beside the riverbank in a foreign country.</li>
  <li>Falling to the ground she bathed with tears the name she could read on the cold stone and warmed it against her naked breast.</li>
  <li value="340">The Heliads, her daughters and the Sun’s, cry no less, and offer their empty tribute of tears to the dead, and, beating their breasts with their hands, they call for their brother night and day, and lie down on his tomb, though he cannot hear their pitiful sighs.</li>

  <li class="top-space">Four times the moon had joined her crescent horns to form her bright disc.</li>
  <li value="345">They by habit, since use creates habit, devoted themselves to mourning.</li>
  <li>Then Phaethüsa, the eldest sister, when she tried to throw herself to the ground, complained that her ankles had stiffened, and when radiant Lampetia tried to come near her she was suddenly rooted to the spot.</li>
  <li>A third sister attempting to tear at her hair pulled out leaves.</li>
  <li value="350">One cried out in pain that her legs were sheathed in wood, another that her arms had become long branches.</li>
  <li>While they wondered at this, bark closed round their thighs and by degrees over their waists, breasts, shoulders, and hands,</li>
  <li value="355">and all that was left free were their mouths calling for their mother.</li>
  <li>What can their mother do but go here and there as the impulse takes her, pressing her lips to theirs where she can? It is no good.</li>
  <li>She tries to pull the bark from their bodies and break off new branches with her hands,</li>
  <li value="360">but drops of blood are left behind like wounds.</li>
  <li>
    <p class="conversation">Stop, mother, please</p> cries out whichever one she hurts,</p>
  </li>
  <li>
    <p class="conversation">Please stop: It is my body in the tree you are tearing.</p>
  </li>
  <li>
    <p class="conversation">Now, farewell.</p>
    <p>and the bark closed over her with her last words.</p>
  </li>
  <li>Their tears still flow, and hardened by the sun, fall as</li>
  <li value="365">mber from the virgin branches, to be taken by the bright river and sent onwards to adorn Roman brides.</li>
</ol>

<footer>
  <p><span style="color: #df8a13;">Ovid, <cite>The Metamorphoses</cite>, Book <abbr title="two">II</abbr>, verses 1 to 365.</span></p>
</footer>

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