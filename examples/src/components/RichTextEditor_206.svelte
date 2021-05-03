<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:142 FR:175 -->
  <article>
  
  <h1 class="red">Saint Michael according to <cite>The Golden Legend</cite></h1>

    <div class="notices red">
    <p>In the Christian Europe of the Middle Ages, <cite>The Golden Legend</cite> also called <cite>Legenda Aurea</cite> from latin is known as the most read book after the Bible.</p>
    <p>It was written in Latin from <time datetime="1261">1261</time> to <time datetime="1266">1266</time> by a Dominican monk from Northern Italy, a chronicles compilor and also known as the <abbr title="eighth">8<sup>th</sup></abbr> Archbishop of Genoa, Jacobus da Varagine.</p>
    <p>Presenting this book, even in a rudimentary way, is not easy, but to say things, there is no mistake to write that by compiling several existing documents like 150 lives of martyrs or some saints or groups of saints, by incorporating in the pre-existing pagan calendar the annual liturgical calendar of the Catholic Church, by unifying it, using also, of this opportunity to explain the main events of Christ's and the Virgin's lives from the Gospels, this text actually constructed a Christian mythology that has deeply permeated all areas of the society of its time, including, for example, its topology…</p>
    <p>As written in the preface to his book <cite>Christian Mythology: feasts, rites and myths of the Middle Ages</cite>, medievalist Philippe WALTER, <q>remembrance endured would appear in rites, traditions from the savage memory before the arrival of Christianity</q>, one can consider this text because it appears in the underlying way of the Church's repressed back elements, as both fascinating and particularly worthy of interest.</p>
    <p>Here, of course, I present below only a very small part, the only chapter 145, because it is given in the work as the origin of Mont Saint-Michel as a place of pilgrimage.</p>
    <p>Appear the archangel Michael, the Bull, and many other things… It is also surprising that the narrative develops without stopping and imperceptibly from the Archangel to a narrative of faith in angels.</p>
    <p>Between the existence that we can't measure and the one we perceive, this text should evoke various thoughts, independently of questions about believing or not believing, and therefore I urge to read it if possible until the end without fear of the strong religious colour of the time.</p>
    </div>

  <article>
      <h2 id="chap145">Text of Chapter 145 of <cite>The Golden Legend</cite> presenting archangel Michael</h2>

      <h3 id="name" class="red">The Name of <abbr title="Saint">St.</abbr> Michael</h3>

      <p>“<mark>Michael</mark>” is expounded sometimes as “Who, [is] like God?” And oft-times, as <abbr title="Saint">St.</abbr> Gregory saith, when a thing of marvellous virtue is done, <mark>Michael</mark> is sent forth, so that he, by the deed and the name, be given to understand that none may do that God may do, and therefore be attributed to him many things of marvellous virtue.</p>
      <p>For like as Daniel witnesseth, he shall arise and address in the time of Antichrist against him, and shall stand as a defender and keeper for them that be chosen.</p>
      <p>He also fought with the dragon and his angels, and casting them out of heaven, had a great victory.</p>
      <p>He also had a great plea and altercation with the devil for the body of Moses, because he would not show it; for the children of Israel should have adored and worshipped it.</p>
      <p>He received the souls of saints and brought them into the paradise of exultation and joy.</p>
      <p>He was prince of the synagogue of the Jews, but now he is established of our Lord, prince of the church of Jesus Christ.</p>
      <p>And as it is said, he made the plagues of Egypt, he departed and divided the Red Sea, he led the people of Israel by the desert and set them in the land of promission, he is had among the company of holy angels as bannerer.</p>
      <p>And bearing the sign of our Lord, he shall slay by the commandment of God, right puissantly, Antichrist that shall be in the Mount of Olivet.
      And dead men shall arise at the voice of this same archangel.
      And he shall show at the day of judgment the cross, the spear, the nails and the crown of thorns of JesusChrist.</p>
      <p>The holy solemnity of <mark><abbr title="Saint">St.</abbr> Michael</mark> is said, appearing, dedication, victory and memory.</p>


      <h3 id="apparitions" class="red">The Apparitions of <abbr title="Saint">St.</abbr> Michael</h3>

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
      And when this was done <mark><abbr title="Saint">St.</abbr> Michael</mark> appeared to the bishop, saying: Know ye that this man is so hurt by my will.
      I am <mark>Michael</mark> the archangel, which will that this place be worshipped in earth, and will have it surely kept.
      And therefore I have proved that I am keeper of this place by the demonstrance and showing of this thing.</p>
      <p>And then anon the bishop and they of the city went with procession unto that place, and durst not enter into it, but made their prayers withoutforth.</p>


      <h4 id="mont-tombe" class="red">The Apparition at Mount Tumba</h4>

      <p>The second apparition was in the year of our Lord <time datetime="710">seven hundred and ten</time>, in a place which was named Tumba, by the seaside, six miles from the city of Apricens. <mark><abbr title="Saint">St.</abbr> Michael</mark> appeared to the bishop of that city and commanded him to do make a church in the foresaid place, like as it was made in the mount of Gargan, and in like wise should hallow the memory of <mark><abbr title="Saint">St.</abbr> Michael</mark> there.</p>
      <p>And the bishop doubted in what place it should be made.
      And <mark><abbr title="Saint">St.</abbr> Michael</mark> said to him in the place where he should find a bull hid of thieves.
      And yet he doubted of the largeness of the place, and <mark><abbr title="Saint">St.</abbr> Michael</mark> appeared to him, and said that he should make it of the brede that he should find that the bull had trodden and traced with his feet.</p>
      <p>And there were two rocks which no man's power might remove.
      Then <mark><abbr title="Saint">St.</abbr> Michael</mark> appeared to a man and commanded him that he should go to that same place and take away the two rocks.</p>
      <p>And when he came, he removed the two rocks as lightly as they had weighed nothing.</p>
      <p>And when the church was edified there, <mark>Michael</mark> set a piece of stone of marble there, upon which he stood, and a part of the pall that he had laid on the altar of that other church he brought thither to this church. </p>
      <p>And because they had great penury and need of water, they made, by the admonishment of the angel, a hole in a stone of marble, and anon there flowed out so much water that unto this day they be sustained by the benefit thereof. And this apparition is solemnly hallowed the seventeenth kalends of November in that place.</p>
      <p>And there happed in the same place a miracle worthy to be put in remembrance.
      This mountain is environed about with the sea-ocean, but on <mark><abbr title="Saint">St.</abbr> Michael</mark>'s day it avoideth twice and giveth way to the people.</p>
      <p>And as a great company of people went to the church, it happed that a woman great with child, nigh her time of deliverance, was in the company, and when they returned, the waves and water came with great force, so that the company for dread fled to the rivage.</p>
      <p>And the woman great with child might not flee, but was taken and wrapped in the floods of the sea, but <mark><abbr title="Saint">St.</abbr> Michael</mark> kept the wife all whole, and she was delivered and childed among the waves in the middle of the sea.</p>
      <p>And she took the child between her arms and gave it suck, and after, when the sea was withdrawn, she went a-land all whole with her child.</p>


      <h4 id="chateau-saint-ange" class="red">The Apparition of Castle Angel</h4>

      <p>The third apparition happed in the time of Gregory the pope.</p>
      <p>For when the said pope had established the litanies for the pestilence that was that time, and prayed devoutly for the people, he saw upon the castle which was said sometime, “The memory of Adrian, the angel of God, which wiped and made clean a bloody sword, and put it into a sheath.” And thereby he understood that his prayers were heard.</p>
      <p>Then he did do make there a church in the honour of <mark><abbr title="Saint">St.</abbr> Michael</mark>, and that castle is yet named the Castle Angel.</p>
      <p>And yet another apparition was in the Mount of Gargan when he appeared and gave victory to them of Syponte, which is hallowed the eighth ides of July.</p>


      <h4 id="de-hierarchia" class="red">The apparition in the Gerarchies</h4>

      <p>The fourth apparition is that which is in the “Gerarchy” of the same angels.</p>
      <p>For the first apparition is said “Epiphany,” that is, the apparition of sovereigns, the second is said “Hyperphania,” that is, the mean apparition, and that other is said “Hypophania,” that is, the most low apparition.</p>
      <p>And “Gerarchia” is said of <i>gerar</i>, that is, holy, and of <i>archos</i>, that is, a prince, and so “Gerarchia” is to say a holy principate, and every Gerarchia containeth three orders of angels.</p>
      <ol>
        <li>
          <p>For the sovereign Gerarchia after the assignation of <abbr title="Saint">St.</abbr> Denis containeth</p>
          <ol>
            <li>Cherubim, </li>
            <li>Seraphim, </li>
            <li>and the thrones: </li>
          </ol>
        </li>
        <li>
          <p>the middle containeth</p>
          <ol>
            <li>the dominations, </li>
            <li>the virtues, </li>
            <li>and the potestates; </li>
          </ol>
        </li>
        <li>
          <p>and the last containeth </p>
          <ol>
            <li>the principates, </li>
            <li>angels, </li>
            <li>and archangels.</li>
          </ol>
        </li>
      </ol>
      <p>And the ordinance and disposition of them may be seen by semblable and like in earthly principates.</p>
      <p>For of the ministers that be about a king, some work immediately about the person of the king, as </p>
        <ul>
          <li>cubiculers, </li>
          <li>counsellors, </li>
          <li>and the assistants, </li>
        </ul>
      <p>and they be like unto the order of the first Gerarchia.</p>
      <p>Some there be that have the rule of the realm, some in one province, some in another, as </p>
        <ul>
          <li>be lieutenants, </li>
          <li>captains of chivalry, </li>
          <li>and judges, </li>
        </ul>
      <p>and they be like unto the second Gerarchia.</p>
      <p>And others be assigned to particular offices in the divers parts of the realm, as </p>
        <ul>
          <li>mayors, </li>
          <li>sheriffs, </li>
          <li>bailiffs, </li>
        </ul>
      <p>and such other less offices, and these be like to the orders of the third Gerarchia.</p>
      <p>The three orders of the first Gerarchia be taken inasmuch as they assist God and be converted to him.</p>
      <p>And thereto be three things necessary, that is to wit: </p>
        <ol>
          <li>
            <p>sovereign love, and that is as touching the order of Seraphim, which be said fiery; </p>
          </li>
          <li>
            <p>perfect knowledge, that is touching Cherubim, which is as much to say as “plenitude of science”; </p>
          </li>
          <li>
            <p>and perpetual fruition or usance, as touching the thrones which be said sitting, for God sitteth and resteth in them.</p>
          </li>
        </ol>
      <p>The three orders of the middle Gerarchia be taken and had inasmuch as they dominate and govern the university of people in common.</p>
      <p>This seigniory and this governing is in three things.</p>
        <ol>
          <li>
            <p>The first [is] in seigniory and commanding, and that appertaineth to the order of domination, which seignioreth above others that be lower, and addresseth them in all the ministries divine, and commandeth to them all things.
            And that saith Zechariah, in the fifth chapter, that one angel saith to another: </p>
            <p class="conversation">“Run and speak to the child.” </p>
          </li>
          <li>
            <p>Secondly, in doing, and this appertaineth to the order of virtues, to whom nothing ne is impossible to execute which that is commanded to them, for to them is given power to do all things difficult which be pertaining to divine mystery, and therefore it is attributed to them to do miracles.</p>
          </li>
          <li>
            <p>Thirdly, in constraining, for to constrain the impediments and destourbles, and this appertaineth to the order of the potestates.
            And this is signified in Tobit, where Raphael bound the devil in the overest desert.</p>
          </li>
        </ol>
      <p>The three orders of the last Gerarchia be taken after that they have government and limited.</p>
        <ol>
          <li>
            <p>Some of them seigniory and govern in one province, and that be they of the order of the principates, like as the prince of Persia seignioreth upon the Persians, like as it is read in Daniel in the tenth chapter.</p>
          </li>
          <li>
            <p>And some be deputed to the governance of a multitude of a city, and they be said archangels, and the other be committed to the governance of one person, and they be said angels, and be said to show the small things and little, because that their service and ministry is limited unto one man.</p>
          </li>
          <li>
            <p>Archangels be said more and greater, for the weal of a multitude is better and more worthy than the weal of one man.</p>
          </li>
        </ol>
      <p>In the assignation of the orders of the first Gerarchia, Gregory accordeth with Dionysius, and Bernard also, which is taken about their fruition, which is in burning love as touching to Seraphim, in profound cognition as to Cherubim, and in perpetual retention as touching the thrones.</p>
      <p>But they discord in the assignation of the middle and last two orders, that is, principates and virtues.</p>
      <p>Gregory and Bernard have another consideration, that is to wit.
      that the middle Gerarchia is in his seigniory or prelacy, and the last is taken in his pity or ministration.</p>
      <p>The prelacy in angels is treble.</p>
        <ol>
          <li>For angels dominate over spirits angelic, and they be said dominations, </li>
          <li>and they dominate also over good works, and they be said principates, </li>
          <li>and they dominate over devils, and they be said potestates, </li>
        </ol>
      <p>and the order and the degrees of their dignity appeareth in these things.</p>
      <p>The ministry of them is threefold.</p<
        <ol>
          <li>Some standeth in working, </li>
          <li>some in teaching, </li>
          <li>and in teaching, some more and some less.</li>
        </ol>
      <p>The first appertaineth to virtues, the second to archangels, and the third to angels.</p>

      <h4 id="infirme" class="red">The Apparition to The Man Who Could Not Eat Or Drink</h4>

      <p>The fifth apparition is it which is read in the History Tripartite.
      There is a place beside Constantinople whereas sometime the goddess Vesta was worshipped, but now there is builded a church in the honour of <mark><abbr title="Saint">St.</abbr> Michael</mark>, and is named <mark>Michael</mark>'s place.</p>
      <p>There a man that was named Aquiline was taken with a right great fever, moved of red colour, and the physicians gave to him, so burning in an ague, a drink, which anon he vomited out at his mouth, and what he ate or drank always he vomited and casted out, so that he was nigh dead, and did him to be borne to that place, and supposed well there to be soon dead or healed.</p>
      <p>And then <mark><abbr title="Saint">St.</abbr> Michael</mark> appeared to him and said to him that he should make a confection of honey and wine and pepper, and whatsomever he ate he should wet therein, and so should he have plein [full] health.</p>
      <p>Which thing he did, and anon he was delivered from his malady, how well that after the judgment of the physicians that drink or medicine was contrary to them that be choleric.</p>
      This is had in the History Tripartite.</p>

<!-- page 2 -->

      <h3 id="victoire-michel" class="red">The Victories of <abbr title="Saint">St.</abbr> Michael</h3>

      <p>Secondly, this solemnity of <mark><abbr title="Saint">St.</abbr> Michael</mark> is said victory, and the victory of <mark><abbr title="Saint">St.</abbr> Michael</mark> is manifold.
      And also of other angels.</p>

      <h4 id="victoire-sipontus" class="red"> The Victory of the Christians of Sipontus</h4>
      
      <p>The first is that <mark><abbr title="Saint">St.</abbr> Michael</mark> gave to them of Syponte in this manner.</p>
      <p>After a certain time that the place was found, they of Naples were yet paynims [pagans], and ordained their host for to fight against them of Syponte and Benevento.</p>
      <p>And by the counsel of the bishop, the Christian men took truce for three days that they might fast those three days and require their patron <mark><abbr title="Saint">St.</abbr> Michael</mark> unto their aid and help.</p>
      <p>In the third night the holy <mark><abbr title="Saint">St.</abbr> Michael</mark> appeared to the said bishop and said that their prayers were heard, and promised them to have victory, and commanded them to run on their enemies at the fourth hour of the day without more tarrying.</p>
      <p>And when they ran against them the mountain of Gargan began strongly to tremble and a great tempest arose, so that lightning flew about and a dark cloud covered the mountain, so that six hundred of their adversaries died of the fiery arrows which came from the air.</p>
      <p>And all the residue of them that were not slain left their idolatry and submitted them anon to the Christian faith.</p>

      <h4 id="victoire-lucifer" class="red"><abbr title="Saint">St.</abbr> Michael’s Victory over Lucifer</h4>
      
      <p>The second victory of <mark><abbr title="Saint">St.</abbr> Michael</mark> was when he put out of heaven the dragon Lucifer with all his followers.</p>
      <p>Of which is said in the Apocalypse: </p>
      <p class="conversation">Factum est prelium magnum, </p>
      <p class="conversation">[“A great battle was made,” Revelation 12].</p>
      <p>For when Lucifer coveted to be like to God, the archangel which bare the banner of the celestial host, came and chased Lucifer out of heaven with all them that followed him, and hath inclosed them in dark air unto the day of doom.</p>
      <p>For they be not suffered to dwell in heaven, neither in the upper part of the air, because that place is clear and delectable, ne yet to be in earth with us, to the end that they should not overmuch tempt ne torment us.</p>
      <p>But they be in the air between heaven and earth, so that when they look upward they may behold the joy that they have lost, and have thereof great sorrow, and when they look downward they may see the men mount up to heaven from whence they fell.</p>
      <p>Notwithstanding, by the divine dispensation they descend oft unto us in earth, as like it hath been showed to some holy men.
      They fly about us as flies, they be innumerable, and like flies they fill the air without number.</p>
      <p>Whereof saith Haymo: </p>
      <p class="conversation">“As the philosophers said, and doctors have opinion, this air is also full of devils and of wicked spirits as the sunbeams be full of small motes, which is small dust or powder.”</p>
      <p>And how well that they be so many, nevertheless after the sentence of Origen, their power ne strength is but right little, and that we may overcome them here.
      And if any of them be overcome of any holy man, he may never after tempt a man of that vice of which he is overcome.</p>

      <h4 id="victoire-anges" class="red">The Daily Victories of Angels on Our Behalf</h4>
      
      <p>The third victory is that angels have every day of the devils when they fight for us against them, and deliver us from their temptations.
      And they deliver us in three manners.</p>
      <ul>
        <li>
          <p><span style="color: #b52b27;">First</span>,
          in refraining the power of the devil, like as it is said (Apocalypsis vicesimo [Revelation 20]), of the angel that bound the devil and sent him into abysm, that is the pit of hell; and Tobit, which saith that the angel Raphael bound the devil in the outerest desert.</p>
          <p>And this binding is none other thing but the refraining of his puissance and might.</p>
        </li>
        <li>
          <p><span style="color: #b52b27;">Secondly</span>,
          he delivereth us in refraining our covetise, the which thing is in Genesis xxxii. chap[ter], there where he saith that the angel took the sinew of Jacob, and anon it dried up.</p>
        </li>
        <li>
          <p><span style="color: #b52b27;">Thirdly</span>,
          in impressing in our hearts the memory of the passion of our Lord, this is signified Apocalypsis vii, where it is said, </p>
          <p class="conversation">“Ne will ye not grieve ne noye [harm] in the earth ne in the sea, ne the trees, till we have marked them.” </p>
          <p>Ezechiel saith, </p>
          <p class="conversation">“The sign of Thau [i.e. τ] be in the foreheads of the people.” </p>
          <p>Thau is made like a headless cross, and they that be marked therewith dread not the angel smiting, whereof is said: </p>
          <p class="conversation">“Upon whom ye see Thau, slay them not.”</p>
        </li>
      </ul>

      <h4 id="victoire-antechrist" class="red"><mark><abbr title="Saint">St.</abbr> Michael</mark>’s Final Victory over the Antichrist</h4>
      
      <p>The fourth victory is that the archangel Michael shall have of Antichrist when he shall slay him.</p>
      <p>Then <mark>Michael</mark>, the great prince, shall arise, as it is said Danielis xii.: </p>
      <p class="conversation">“He shall arise for them that be chosen as a helper and a protector, and shall strongly stand against Antichrist.” </p>
      <p>And after, as the Gloss saith: </p>
      <p class="conversation">“Antichrist shall feign him to be dead, and shall hide him three days,” </p>
      <p>and after, </p>
      <p class="conversation">he shall appear saying that he is risen from death to life, and the devils shall bear him by art magic, and shall mount up into the air, and all the people shall marvel and worship him.</p>
      <p class="conversation">And at the last he shall mount up on the Mount of Olivet, and when he shall be in a pavilion, in his siege [seat], entered into that place where our Lord ascended, <mark>Michael</mark> shall come and shall slay him.</p>
      <p>Of which victory is understood, after St. Gregory, that which is said in the Apocalypse.</p<
      <p class="conversation">The battle is made in heaven.</p>
      <p>This word of the treble battle in heaven is </p>
      <ol>
        <li>expounded of the battle that he had with Lucifer when he expulsed him out of heaven, </li>
        <li>and of the battle that he had with the devils that torment us, </li>
        <li> and of the one that we just saw.</li>
      </ol>

      <h3 id="dedicace" class="red">Dedication</h3>
      
      <p>And of this last solemnity is said dedication, because on this day the said place in the Mount Gargan was dedicate and hallowed of him by revelation.</p>
      <p>For when they of Syponte were returned from the occision of their adversaries, and had so noble victory, yet doubted they to enter into the said place and hallow it to the archangel.</p>
      <p>Then the bishop went and asked counsel of Pope Pelagius, and he answered: </p>
      <p class="conversation">If the church ought to be dedicated, that ought to be on that day that the victory was done, and if it please otherwise to <mark><abbr title="Saint">St.</abbr> Michael</mark>, men ought to require his will thereof.</p>
      <p>And then the pope, the bishop, and the men of the city, fasted <time datetime="P3D">three days</time>, and <mark><abbr title="Saint">St.</abbr> Michael</mark> appeared to the bishop and said: </p>
      <p class="conversation">It is no need to you to dedicate and hallow that I have hallowed, </p>
      <p>and commanded that he should enter into that place the next day with the people, and should frequent it with prayers, and they should feel that he should be a special patron to them.</p>
      <p>And he gave to them a sign of consecration – that was that they should go up thereto by a postern towards the east, and they should find there the steps of a man impressed in a marble stone.</p>
      <p>Then the bishop on the morn, and much great people, came to the place and entered in, and found a great cave and three altars of which two were set toward the south, and the third toward the east much honourably, and was covered all about with a red mantle.</p>
      <p>And when the solemnities of the masses were done, and the people had taken holy communion, all returned to their proper places, and the bishop left there priests and clerks for to sing and say goodly the divine office.
      And within the said church sourdeth clear water and sweet, which the common people drinketh and be healed thereby of many diverse maladies.</p>
      <p>And when the pope heard these things he established to hallow this day in the honour of <mark><abbr title="Saint">St.</abbr> Michael</mark> and of all the holy angels, and to be kept holy through all the world.</p>

<!-- page 3 -->

      <h3 id="memoire-saint-michel" class="red">Memory: Laud, Praise, and Honour</h3>
      
      <p>Fourthly, this solemnity is said the Memory of <mark><abbr title="Saint">St.</abbr> Michael</mark>, how well that we all solemnise this feast in the honour of all the archangels of our Lord.</p>
      <p>We do the memory and the honours generally, and it appertaineth, and is behoveful to us, to give to them laud, praising, and honour, by manifold reasons expert, that is to wit, </p>
      <ul>
        <li>for they be our keepers, </li>
        <li>our ministers, </li>
        <li>our brethren, </li>
        <li>our neighbours, </li>
        <li>the bearers of our souls into heaven, </li>
        <li>and representers of our prayers unto God, </li>
        <li>right noble knights of the king of heaven, </li>
        <li>and perdurable comforters of them that be in heaviness and tribulations.</li>
      </ul>

      <h4 id="anges-gardiens" class="red">Because They Be Our Keepers</h4>
      
      <p>And first we ought to honour them for they be our keepers, wherefore we ought to worship them.</p>
      <p>To every man be given two angels, one evil, or to stir him to ill, and one good, to keep him.</p>
      <p>The good angels be deputed to the keeping of men in their birth, and after the nativity also, and be always with them when they be full grown. And in these three estates is an angel necessary to a man.</p>
      <ul>
        <li>
          <p>For when he is yet little in the womb he may be dead and be damned.</p>
        </li>
        <li>
          <p>When he is out of the womb before he be grown, he may be let from baptism, </p>
        </li>
        <li>
          <p>and when he is grown he may be drawn to divers sins.</p>
        </li>
      </ul>
      <p>The devil deceiveth them that be grown, by fallacy and by hearkening.
      He flattereth them by delices and blandishes, and oppresseth virtue by violence.</p>
      <p>Therefore it is need that a good angel be deputed to the keeping of a man to the end that he address and induce man against the fallacy, that he exhort, and summon him to do good against fiattering and blandishes, and that he defend him from oppression against violence.</p>
      <p>And the profit of the keeping of the angel to a man may be assigned in four manners.</p>
      <p>The first, that the soul may profit in the weal and good of grace, and this doth the angel to the soul in three manners.</p>
      <ul>
        <li>
          <p>And the first is in to removing all letting [all hindrances] to do well and good, and that is signified in Exodi duodecimo, where the angel smote all the first begotten of Egypt </p>
        </li>
        <li>
          <p>Secondly, in awaking or exciting from sloth and that is signified Zachariæ quarto: </p>
          <p class="conversation">“The angel of the Lord hath aroused me as a man that is waked out of his sleep.” </p>
        </li>
        <li>
          <p>Thirdly, in leading a man in the way of penance and bringing again, and this is signified in Tobit, in the fifth chapter in the angel that led him and brought him again.</p>
        </li>
      </ul>
      <p>The second profit that the angel doth, is that he fall not into sin, and this doth the angel in three manners.</p>
      <ul>
        <li>
          <p>First, in letting [preventing] the evil to be done that it be not done, and this is signified in the book of Numbers in the twenty-second chapter. For Balaam, which went for to curse Israel, was let of the angel.</p>
        </li>
        <li>
          <p>Secondly, in blaming the sin past, that man depart from it, and that is signified in the book of Judges in the second chapter, how the angels blamed the children of Israel for breaking of the law, wherefor they wept.</p>
        </li>
        <li>
          <p>Thirdly in bringing strength for to take away the sin present, and this is signified in Lot, when he was led out by force, he, his wife, and his daughters from the city of Sodom, that is to wit, from the customance of sin.</p>
        </li>
      </ul>
      <p>The third effect and profit is that if he fall, that he arise anon again, and this doth the angel in three manners.</p>
      <ul>
        <li>
          <p>First, in moving a man to contrition, and this is signified in Tobit, in the twelfth chapter, where, as he taught Tobias to anoint the eyes of his father with gall, that is to understand, contrition of the heart anointeth the eyes of the heart.</p>
        </li>
        <li>
          <p>Secondly, in purging lips by confession, and that this is signified in Isaiah, the fifth chapter, where the angel purged the lips of Isaiah.</p>
        </li>
        <li>
          <p>Thirdly, in enjoying to satisfaction, and that is signified in Luke, fifteenth chapter, that saith that greater joy is in heaven of a sinner doing penance than of ninety-nine rightful men which need no penance.</p>
        </li>
      </ul>
      <p>The fourth profit is that man fall not so oft into sin as the devil inciteth him thereto, and this doth he in three manners, that is to wit, </p>
      <ul>
        <li>
          <p>in refraining the puissance and might of the devil, </p>
        </li>
        <li>
          <p>in affeebling the covetise and desire of sin, </p>
        </li>
        <li>
          <p>and in imprinting in our minds the passion of our Lord Jesu Christ, of which things it is said tofore.</p>
        </li>
      </ul>

      <h4 id="anges-servants">Because They Be Our Administrators</h4>
      
      <p>We ought to honour them, secondly, for they be our administrators, </p>
      <p>like as the apostle saith, ad Hebreos x, </p>
      <p class="conversation">“They be spirits of administration, all spirits be sent for us.”</p>
      <ol>
        <li>
          <p>The superiors be sent to the moyens [middling ones], </p>
        </li>
        <li>
          <p>the moyens be sent to the lowest, </p>
        </li>
        <li>
          <p>and the lowest be sent to us, </p>
        </li>
      </ol>
      <p>and this sending cometh of the divine bounty.</p>
      <ol>
        <li>
          <p>And in this sending appeareth how much the divine bounty appertaineth to the love of our health.</p>
        </li>
        <li>
          <p>Secondly, of the charity of the angel; for this sending appertaineth that it be of ardent charity specially to desire the health of others, wherefore Isaiah saith, </p>
          <p class="conversation">“Lo! I am here Lord, send me forth.” </p>
          <p>And the angels may help us because they see that we have need of them, and may well overcome the evil spirits and angels, and therefore the law of charity angelic requireth that they be sent to us.</p>
        </li>
        <li>
          <p>Thirdly, this sending is needful to the need of man, </p>
          <ol>
            <li>
              <p>for they be sent to inflame our affection to love, wherefore, in sign hereof, it is read that they were sent in a fiery chair.</p>
            </li>
            <li>
              <p>Secondly, they be sent to enlumine to understanding unto knowledge, and this is signified Apocalypsis x.
              in the angel which had a book open in his hand.</p>
            </li>
            <li>
              <p>Thirdly, they be sent for to strengthen in us all our perfection unto the end, and that is signified I Regum xix, where the angel brought to Elijah a loaf of bread baked under ashes and a vessel of water, and he ate and walked in the strength of that meat unto the mount of God, Oreb.</p>
            </li>
          </ol>
        </li>
      </ol>

      <h4 id="anges-freres">Because They Be Our Brethren and Our Neighbours</h4>
      
      <p>Thirdly, they ought to be honoured for they be our brethren and our neighbours, for all they that be chosen be taken to the orders of angels, </p>
      <ol>
        <li>the some unto the overest, </li>
        <li>and some to the lowest, </li>
        <li>and some to the middle, </li>
      </ol>
      <p>for the diversity of their merits.
      And howbeit that the Blessed Virgin be above all, like as St. Gregory showeth in his homily.
      For he saith:</p>
      <ol>
        <li>
          <ol>
            <li>
              <p class="conversation">There be some that take the small things, but yet they leave not to show it to the brethren, and they run in the number of Angels.</p>
            </li>
            <li>
              <p class="conversation">And there be they that may take the sovereignties of the secrets celestial and show it to others, and these be [with] the Archangels celestial.</p>
            </li>
            <li>
              <p>And [there] be they that make marvellous signs and works puissantly, and these be they that with Virtues work.</p>
            </li>
          </ol>
        </li>
        <li>
          <ol>
            <li>
              <p>And some there be that chase away the wicked spirits by the virtue of prayer and by strength of their power received of God, and these have their merits with the Potestates.</p>
            </li>
            <li>
              <p>And there be some that by their virtues mount above the merits of them that be chosen, and dominate over the brethren, and sort their merit with the Principates.</p>
            </li>
            <li>
              <p>And there be some that overcome and dominate over all vices in themselves, and they by right be called of the world, gods among men (like as God said to Moses, </p>
              <p class="conversation">“Lo! I have established the god of Pharaoh”) </p>
              <p>and these be with the Dominations.</p>
            </li>
          </ol>
        </li>
        <li>
          <ol>
            <li>
              <p>And there be some that sit in the thrones like presidents and examine the works and deeds of others, by whom when Holy Church is governed, all they that be chosen be judged, and these be with the Thrones.</p>
            </li>
            <li>
              <p>And [there] be they that with the charity and love of God and their neighbour before others be full, and these by their merits have taken their sort in the number of Cherubim, for cherubim is said “the plenitude of science,” and as Paul saith, the plenitude of the law is love and charity.</p>
            </li>
            <li>
              <p>And there be they that, embraced in the burning love of supernal contemplation, wish only to be in the desire of their maker.
              They desire nothing of this world, but only be fed in the love of the Lord perdurable, they eschew all earthly things, and overpass by thought all temporal things.
              They love, they burn, and rest in that burning love, they burn in loving and be inflamed in speaking, and all that ever they touch in any manner by word, they make them anon to burn in the love of God.
              And where shall these take their sort but among the number of Seraphim?</p>
            </li>
          </ol>
        </li>
      </ol>
      <p>Hæc Gregorius; this saith St. Gregory.</p>

      <h4 id="anges-guides">Because They Be Bearers of Our Souls Into Paradise</h4>

      <p>Fourthly, they ought to be honoured because that they be bearers of our souls into Paradise, and this do they in three manners.</p>
      <ol>
        <li>
          <p>The first, in making ready the way, as Malachi saith in the third chapter, </p>
          <p class="conversation">“Lo! here I send mine angel which shall make ready thy way tofore thy face.”</p>
        </li>
        <li>
          <p>Secondly, in bearing them to heaven by the way made ready, like as it is said in Exodus the four and twentieth chapter, </p>
          <p class="conversation">“I send to thee mine angel which shall keep thee in thy way, and shall bring thee to the land which I have promised to thy fathers.”</p>
        </li>
        <li>
          <p>Thirdly, in setting them in heaven, and hereof saith Luke, cap. xvi, <p class="conversation">“It was done when the beggar died, his soul was borne of angels into Abraham's bosom.”</p>
        </li>
      </ol>
      
      <h4 id="anges-intercesseurs">Because They Be Representers of Our Souls Tofore God</h4>
      
      <p>Fifthly, they ought to be honoured because they be representers of our souls tofore God, and this representation is in three manners.</p>
      <ol>
        <li>
          <p>First, they represent our prayers tofore God, and this saith Tobit the xii chapter, </p>
          <p class="conversation">“When thou prayedest with tears and buryedest the dead men, I offered thy prayer to our Lord.”</p>
        </li>
        <li>
          <p>Secondly, they allege [mitigate]for us tofore our Lord, and hereof saith Job, the xxxiii chapter, </p>
          <p class="conversation">“If there were an angel speaking for him and said one of a thousand, that he show the equity of the man, our Lord should have mercy and pity on him.”</p>
          <p>Also Zechariah primo, </p>
          <p class="conversation">“And the angel of our Lord answered and said: ‘O Lord of all strengths, shalt not thou have pity of Jerusalem and of the cities of Judah to whom thou art wroth? This is the seventieth year.’”</p>
        </li>
        <li>
          <p>Thirdly, they show the sentence of God, as it is said in Daniel that the angel Gabriel flying said, </p>
          <p class="conversation">“Sith [since] the beginning of the prayers the word issued out,” that is to wit, the sentence of God, and I am come for to show it to thee, for thou art a man of desires.”</p>
        </li>
      </ol>
      <p>Of these three things saith Bernard upon the Canticles.</p>
      <p class="conversation">“The angel seeketh moyen between the love and the lover in offering the desires and bringing gifts, and moveth her and pleaseth him.”</p>

      <h4 id="anges-chevaliers">Because They Be Right Noble Knights</h4>
      
      <p>Sixthly, they ought to be honoured, for they be the right noble knights of the king perdurable, after that Job saith in the twenty-fifth chapter, </p>
      <p class="conversation">“Is not this the noble number of his knights?”</p>
      <p>For as we see in the knights of some king, </p>
      <ol>
        <li>
          <p>that some of them dwell always in the hall of the king, and accompany the king, and sing honour and solace to the king, </p>
        </li>
        <li>
          <p>and some others keep the cities and castles of the king, </p>
        </li>
        <li>
          <p>and others fight against the enemies of the king, thus is it of the knights of Christ.</p>
        </li>
      </ol>
      <ol>
        <li>
          <p>Some be in the hall royal, that is to say in the heaven imperial, and accompany always the king of kings, and sing always songs and gladness to his honour and glory, saying, </p>
          <p class="conversation">“Sanctus, sanctus, sanctus, blessing, and clearness, and wisdom.”</p>
        </li>
        <li>
          <p>And the others keep the cities, the towns, the castles, and the faubourgs [suburbs], they be deputed to the keeping of us, keeping the state of virgins, of continents, of married people, and the castles of religion.
          Whereof Isaiah saith, </p>
          <p class="conversation">“Upon the walls of Jerusalem I have established keepers.”</p>
        </li>
        <li>
          <p>Others there be that fight and vanquish the enemies of God, of whom it is said in the Apocalypse, </p>
          <p class="conversation">“There is a battle made in heaven,” </p>
          <p>that is, after some exposition in the church militant, <mark>Michael</mark> and his angels fought with the dragon.</p>
        </li>
      </ol>

      <h4 id="anges-consolateurs">Because They Be Comforters of Them that Be in Tribulation</h4>
      
      <p>The seventh and the last they ought to be honoured, because they be comforters of them that be in tribulation, and hereof saith Zechariah in the first chapter, </p>
      <p class="conversation">“The angel that spake to me good words were words of comfort.” </p>
      <p>And this do they in three manners.</p>
      <ol>
        <li>
          <p>First, in comforting and strengthening, Danielis decimo.
          For whereas Daniel fell, the angel of our Lord touched him and said, </p>
          <p class="conversation">“Be not afeard ne dread thee nothing, peace be to thee, comfort thyself and be boystous.”</p>
        </li>
        <li>
          <p>Secondly, in keeping from impatience, and this saith David, </p>
          <p class="conversation">“He hath commanded his angels to keep thee in all thy ways.”</p>
        </li>
        <li>
          <p>Thirdly, in refreshing and lessing that tribulation, and that is signified in Daniel, the third chapter, there whereas the angel of our Lord descended in the furnace with three children, and made the middle of the furnace as it had been a wind blowing with a soft dew.</p>
        </li>
      </ol>

<footer>
  <p class="red">Jacobus da Varagine, <cite>The Golden Legend</cite>, chapter 145.</p>
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