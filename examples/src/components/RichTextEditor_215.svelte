<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 17 -->

<article>
  <section><article>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg" title="Hans MEMLING, "Triptych of John the Baptist and John the Evangelist", detail of the central panel, Catherine of Alexandria, Hans Memling Museum, Old St John's Hospital, Bruges" alt="Hans MEMLING, "Triptych of John the Baptist and John the Evangelist", detail of the central panel, Catherine of Alexandria, Hans Memling Museum, Old St John's Hospital, Bruges" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.jpg 1920w"></picture><figcaption>Barbara the great martyr, detail of the central panel.</figcaption>
      </figure>

      <h3 id="st-barbara-following-the-golden-legend" class="yellow"><cite>Legend of Barbara the Great Martyr</cite> according to the text added to <cite>The Golden Legend</cite></h3>
      <section><article>
        <h4>Text added to <cite>The Golden Legend</cite>: <cite>legend of Barbara the Great Martyr</cite></h4>
        <section><article>
          <p>There was in <a href="#note_nicomedie" title="Nicomedy" id="nicomedie" class="yellow">Nicomedia</a>, at the time of Emperor <a href="#note_maximien" title="Maximian" id="maximien" class="yellow">Maximian</a>, a pagan named <span style="color: #99713d;">Dioscorus</span> who was from a very distinguished family with great wealth.</p>
          <p>He had a daughter of great beauty, who called <span style="color: #994c3d;">Barbara</span>.</p>
          <p>Her father loved her very much;
          And so that no man could see her, he put her in a very high tower that he raised.</p>
          <p>From his earliest age, <span style="color: #994c3d;">Barbara</span>, feeling the void of earthly things, began to apply to the meditation of things from heaven.</p>
          <p>After entering a temple, and seeing along the walls the statues of idols, she asked her parents:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— «What do these images of human beings mean?»</span>
          </p>
          <p>Her parents answered her:</p>
          <p class="conversation">
            <span style="color: #b3884d;">— «Shut down; they are not human beings, but gods, and they want to be adored.»</span>
          </p>
          <p><span style="color: #994c3d;">Barbara</span> says:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— «Were they human beings once?»</span>
          </p>
          <p>And she was answered that yes.</p>
          <p>And she was reflecting on this day and night, saying herself:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— «If our gods were human beings, they were born like human beings, they died like human beings; if they were gods, they would not be born and they would not be dead; because the Divinity, to it looks like to me, does not start and cannot stop.»</span>
          </p>
          <p>So she came to despise those supposed gods of wood or stone;
          but he still lacked knowledge of the true God.</p>
          <p>In the meantime, the renown spread to Nicomedia that there was in Alexandria a man of immeasurable wisdom, named <a href="#note_origene" title="Origen" id="origene" class="yellow">Origen</a>, who demonstrated the existence of true God and the vanity of idols.</p>
          <p>In learning this, <span style="color: #994c3d;">Barbara</span> was filled with joy, and she looked at how she could go to hear it.</p>
          <p>but she did not dare to talk to her father, and she adopted the idea of writing to Origen;
          what she did with the words:</p>
          <p class="conversation">
            <p><span style="color: #df8f20;">«To Origen of Alexandria, whose glory is universally widespread, I, Barbara, of Nicomedia.</span></p>
            <p><span style="color: #df8f20;">From the very first dawn of my reason, I felt in all my heart the strongest desire to arrive to this knowledge, and I always thought that the Divinity could not be in images, work of our hands, that cannot speak nor hear.</span></p>
            <p><span style="color: #df8f20;">I also thought that those who had been human beings, and were represented as gods, could not be; because human being begins and ends, but God is before all times and after all times.</span></p>
            <p><span style="color: #df8f20;">And I put my confidence in this God who is unknown to me, but who created all things; I devoted my love to him, and I will spare nothing to get to know him.</span></p>
            <p><span style="color: #df8f20;">The fame of your talents came to me, and I thought, that you, venerable father, would take me to the science of this God you preach.</span></p>
            <p><span style="color: #df8f20;">And I hope you will disperse the darkness of my ignorance and that you will conduct me in the light of true faith.»</span>
          </p>
          <p>Having sent his letter to Origen, she prayed to the Lord weeping tears and saying:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— «Lord, strengthen the foot of the one that I sent to your servant, so that the light I have asked for comes.»</span>
          </p>
          <p>The messenger arrived in Alexandria,
          and he found Origen in the palace of the mother of Emperor Alexander, Mamaea,
          and he was busy preaching the doctrine of Jesus Christ.</p>
          <p>He received with great joy the letter from <span style="color: #994c3d;">Barbara</span>,</p>
          <p>and he praised God for that he would be arousing such enthusiasm,
          and rushed to answer her:</p>
          <p class="conversation">
            <p><span style="color: #165493;">«Origen, unworthy priest of Jesus Christ, and perhaps his preacher, still remaining in Alexandria, to Barbara, of the race of Gentiles, but by adoption of the race of the children of God and Jesus Christ.</span></p>
            <p><span style="color: #165493;">I will teach you, as you ask me, what is the real God.</span></p>
            <p><span style="color: #165493;">Know that it is one in substance and three in persons: the Father, the Son and the Holy Spirit.</span></p>
            <p><span style="color: #165493;">Whoever believes in this doctrine has what he needs to reach God.</span></p>
            <p><span style="color: #165493;">So add up to it credibility to complete what is lacking in your desire; see my envoy, he will inform you of law of God and he will read you the holy books he carries with him.</span></p>
            <p><span style="color: #165493;">Do not fear being exposed to great torments for the name of Jesus Christ.</span></p>
            <p><span style="color: #165493;">He said: “The one who loses for me his soul in this world shall keep it in eternal life”.»</span>
          </p>
          <p>Origen sent one of his disciples to confer with <span style="color: #994c3d;">Barbara</span>,
          and when she was told that he had arrived,
          she immediately said to have him to enter.</p>
          <p>The servant of God greeted her in the name of Jesus Christ.</p>
          <p>And now his father came,
          and seeing a stranger,
          he became scared and he said:</p>
          <p class="conversation">
            <span style="color: #b3884d;">— «What is this man and what is he doing?»</span>
          </p>
          <p>The Alexandrine replied that he was educated about the science of medicine, and that he had a master who, against the usage of doctors, also healed souls.</p>
          <p>The father of <span style="color: #994c3d;">Barbara</span>, hearing that, withdrew and let them talk.</p>
          <p>And the christian, who called himself Valentin, explained to <span style="color: #994c3d;">Barbara</span> the sacred mysteries of religion,
          and he baptized her in that same tower where his father had put her,
          and handed over the books sent by Origen.</p>
          <p>She applied much to read them,
          and she did, albeit without master, great progress in the science of divine things.</p>
          <p>Some says that because of her beauty some nobles of that country falled in love for her,
          and they talked to her father so that she took a husband.</p>
          <p>And his father, going to the tower, sought to decide it, saying:</p>
          <p class="conversation">
            <span style="color: #b3884d;">— «My daughter, powerful figures remembered you, and told me that they would take you into marriage; what do you want to do?»</span>
          </p>
          <p>She answered her father by looking at him with anger:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— «Don't force me to do this, my father».</span>
          </p>
          <p>He left her,
          and getting away from her, he brought a large number of workers,
          and he ordered them to build a bathroom house, and he went to a far away country.</p>
          <p><span style="color: #994c3d;">Barbara</span> got down from the tower to see what has been done,
          and she saw that on the north side there were only two windows,
          and she told the workers:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— «Why did you make these two windows?»</span>
          </p>
          <p>And they answered:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— «Your father ordered it so.»</span>
          </p>
          <p>She replied:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— «Make another window for me.»</span>
          </p>
          <p>And they responded:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— «We fear that your father get annoyed at us.»</span>
          </p>
          <p>She says:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— «Do what I tell you, and I will bring my father to give his approval.»</span>
          </p>
          <p>So they made another window.</p>
          <p><span style="color: #994c3d;">Barbara</span> put with her own hand on the side of the orient, in this building, a precious cross;
          and, going back to the tower, she saw the idols that her father loved.</p>
          <p>Obeying to the inspiration of the Holy Spirit, she spit in their face and said:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— «Shall they become similar to you, those who make you and those who put their trust into you.»</span>
          </p>
          <p>When the building got finished, his father returned from his trip, and when he saw the three windows, he told the workers:</p>
          <p class="conversation">
            <span style="color: #b3884d;">— «Why did you make three windows?»</span>
          </p>
          <p>They replied:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— «Your daughter ordered us.»</span>
          </p>
          <p>He then told his daughter:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— «Who did you order to make three windows?»</span>
          </p>
          <p>She replied:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— «I have had good reasons for doing so; because three windows illuminate the whole human being.»</span>
          </p>
          <p>And his father brought him with him in the bathroom, and told him:</p>
          <p class="conversation">
            <span style="color: #b3884d;">— «Why do three windows shed more light than two?»</span>
          </p>
          <p>She replied:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— «There are three that illuminate the world and set the course of stars: the Father, the Son and the Holy Spirit, and they are one in essence.»</span>
          </p>
          <p>So his father, full of fury, pulled his sword to kill her.</p>
          <p>But the Saint did her prayer to God,
          and the walls opened,
          and she was carried on a mountain where two shepherds were having their sheep grazing.</p>
          <p>His father began her search, and he went to these shepherds and asked them if they had seen his daughter.</p>
          <p>One of them, seeing how angry the father was because he did not know where she was, kept quiet; the other pointed her with his finger.</p>
          <p><span style="color: #994c3d;">St. Barbara</span> cursed the one who betrayed her,
          and on the spot he was changed into a marble statue,
          and his sheep were converted into grasshoppers;
          but this story is apocryphal.</p>
          <p>His father, found her, beat her, pulled her by hair
          and attached her with chains.</p>
          <p>He locked up in a dungeon
          and put guards there,
          and he went away to warn Proconsul <a href="#note_marcien" title="Marcian" id="marcien" class="yellow">Marcian</a> for all that happened.</p>
          <p>The proconsul wanted <span style="color: #994c3d;">Barbara</span> to be brought before him.
          When he saw him, he was struck by her great beauty, and he told her:</p>
          <p class="conversation">
            <span style="color: #165493;">— If you want to save yourself, sacrifice to the immortal gods, or you will die in the greatest torments.</span>
          </p>
          <p>She replied:</p>
          <p class="conversation">
            <p><span style="color: #df8f20;">— I want to offer myself in sacrifice to my God Jesus Christ, who has done heaven and earth and all that is contained therein.</span></p>
            <p><span style="color: #df8f20;">As for the demons you love, the prophet said:</span></p>
            <p><span style="color: #df8f20;">They have a mouth but do not speak; they have eyes but do not see; those who pay tribute to them will look like them.</span></p>
          </p>
          <p>The proconsul, furious, ordered to strip her and beat her indiscriminately with beef nerve.</p>
          <p>And when all her body was in blood, he ordered to bring her back to prison until she had decided what torment he would inflict on her.</p>
          <p>In the middle of the night, great clarity wrapped the martyr, and　Jesus Christ appeared and told her:</p>
          <p class="conversation">
            <span style="color: #6c936c;">— Take courage, my daughter; there will be great joy in heaven and on earth during your passion; do not fear the threats of the tyrant; I'm with you to preserve all evils.</span>
          </p>
          <p><span style="color: #994c3d;">St. Barbara</span> felt a great joy in the words of the Lord,
          and in the morning she reappeared in front of the proconsul, who, seeing that there was no trace of the blows she had received the day before, told her:</p>
          <p class="conversation">
            <span style="color: #165493;">— See how much the gods are in favour of you and they love you, because they have healed your wounds.</span>
          </p>
          <p><span style="color: #994c3d;">Barbara</span> replied to him:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— Your gods are like you, deaf, blind and mute; how could they have healed me? </span></p>
            <p><span style="color: #df8f20;">The one who healed me is Jesus Christ, the Son of the living God; But you don't see it, because your heart is hardened by the devil.</span>
          </p>
          <p>The proconsul, quivering like a infuriated lion, ordered that she has her ribs burned with the torches and her head beatten with a hammer.</p>
          <p>The Saint, looking at the sky, says:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— You know, Lord, that I am suffering for your love; don't leave me now.</span>
          </p>
          <p>The impious proconsul commanded that she had her udders cut;
          and she says:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— Do not reject me out of your presence, Lord, and shall not deprive me of the Holy Spirit.</span>
          </p>
          <p>He then ordered that she would be taken naked thrue the city, beattening her;
          and she says:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— Lord, you who are my support and covers the sky of clouds, cover my body, so that it is not exposed in the eyes of impiouses.</span>
          </p>
          <p>And he descended from heaven a angel who brought him a white tunic.</p>
          <p>The proconsul ordered that she had her head cut;
          but his father seizes her and led her to the mountain,
          and she made that prayer:</p>
          <p class="conversation">
            <span style="color: #df8f20;">— Lord Jesus, to whom all things obey, grant that those who invoke your holy name by remembering my martyrdom, finds their sins forgetten on the day of judgment.</span>
          </p>
          <p>And she heard a voice that came from heaven and who replied:</p>
          <p class="conversation">
            <span style="color: #6c936c;">— «Come, my beloved; rest in the home of my father who is in heaven;  what you are asking for has been given to you.</span>
          </p>
          <p>And the martyr had the head cut off by the hands of her own father.</p>
          <p>And when he came down from the mountain, the fire of heaven fell on him and consumed him,
          and not even a vestige of him remained.</p>
          <p>There was a powerful man, a Count of <a href="#note_saxe" title="Saxony" id="saxe" class="yellow">Saxony</a>,</p>
          <p>who made his enemy prisoner and locked it in a tower, defending, under the greatest penalties, that no one would give him to drink or eat.</p>
          <p>After he stayed there a few days,</p>
          <p>he prayed, moaning, the guardian of the tower, to give him, for the love of <span style="color: #994c3d;">St. Barbara</span>, a little bread, so that he would not die;
          the guard did not pay attention to his complaints,
          and he was lying felting faint;
          the guardian believed him dead,
          and asked the Count for permission to remove the corpse before he spread a bad smell;
          So they tied a rope to the neck of the one that was believed to be dead,
          and we rushed it down from the top of the rock.</p>
          <p>as soon as he hit the ground he stood up,
          and all those who were there escaped, seized of fear.</p>
          <p>He called them back and told them not to be afraid;
          And they came closer to him, and they asked how he could support his existence,
          and he answered them:</p>
          <p class="conversation">
            <p><span style="color: #165493;">— St. Barbara assisted me in all my sorrows; </span></p>
            <p><span style="color: #165493;">it was her who supported me in my fall, and I cannot die before I confessed myself and be received the holy communion,</span></p>
          </p>
          <p>Asked why he had obtained this grace, he answered:</p>
          <p class="conversation">
            <span style="color: #165493;">— I never missed a year of fasting and praying on the day of St. Barbara's fest to make her happy, and that is why she asked God that I wouldn't die without having received the sacraments.</span>
          </p>
          <p>And as soon as he received them, he breathed out.</p>
          <p>We also read that at the time of the king of the Romans, Adolphe, a count has been put at the head of the government of the provinces of Orient, and a soldier was accused of having made violence against a young girl.</p>
          <p>While he was in prison, waiting for his judgment, he asked to confess,
          and his confessor acknowledged that he was innocent, he had to go to the service of <span style="color: #994c3d;">St. Barbara</span>, and promised not to return home until he had made a pilgrimage in his honour.</p>
          <p>The woman was claiming out for a judgment, and the judges had come together and brought the accused before them, sentenced him to death;
          Then he introduced someone who no one knew, and who, having asked to speak, proved, for relevant and undeniable reasons, that the soldier was not guilty and that the sentence was unfair.</p>
          <p>And the judges revocked him;
          and the soldier, let back to freedom, ended his days in the service of <span style="color: #994c3d;">St. Barbara</span>,</p>
          <p>and the unknown man who served him as lawyer disappeared without nobody knew who he was.</p>
        </article></section>
      </article></section>


      <hr>

      <aside>
        <section><article>
          <h3 id="note_nicomedie" class="yellow">Nicomedy</h3>
          <div class="notices yellow">
            <p><dfn><a href="https://en.wikipedia.org/wiki/Nicomedy" title="https://en.wikipedia.org/wiki/Nicomedy"><ruby lang="en">Nicomedy<rp>(</rp><rt lang="grc">Νικομήδεια</rt><rp>)</rp></ruby></a></dfn> is a city in Asia Minor, capital of the kingdom of <a href="https://en.wikipedia.org/wiki/Bithynie" title="https://en.wikipedia.org/wiki/Bithynie">Bithynia</a>. Today it is located in Turkey and is called Izmit. It was the capital of the emperors <a href="https://en.wikipedia.org/wiki/Dioclétien" title="https://en.wikipedia.org/wiki/Dioclétien">Diocletian</a> and <a href="https://en.wikipedia.org/wiki/Constantin_Ier_(empereur_romain)" title="https://en.wikipedia.org/wiki/Constantin_Ier_(empereur_romain)">Constantine</a>.</p>
          </div>
          <footer>
            <p>back to note: <a href="#nicomedie" title="Nicomedy">Nicomedy↑</a></p>
          </footer>
        </article></section>
        <section><article>
          <h3 id="note_maximien" class="yellow">Maximian</h3>
          <div class="notices yellow">
            <p><dfn>Maximian</dfn> is also called <a href="https://en.wikipedia.org/wiki/Maximian_Hercule" title="https://en.wikipedia.org/wiki/Maximian_Hercule">Maximian Hercules</a>. Coemperor of the Roman Empire from <time datetime="286">286</time> to <time datetime="305">305</time> with <a href="https://en.wikipedia.org/wiki/Dioclétien" title="https://en.wikipedia.org/wiki/Dioclétien">Diocletian</a> for the East. Father of <a href="https://en.wikipedia.org/wiki/Maxence_(empereur_romain)" title="https://en.wikipedia.org/wiki/Maxence_(empereur_romain)">Maxentius</a>.</p>
          </div>
          <footer>
            <p>back to note: <a href="#maximien" title="Maximian">Maximian↑</a></p>
          </footer>
        </article></section>
        <section><article>
          <h3 id="note_origene" class="yellow">Origen</h3>
          <div class="notices yellow">
            <p><dfn><a href="https://en.wikipedia.org/wiki/Origen" title="https://en.wikipedia.org/wiki/Origen"><ruby lang="en">Origen<rp>(</rp><rt lang="grc">Ὠριγένης</rt><rp>)</rp></ruby></a></dfn> is a christian theologian, recognized Father of the Church but not a saint, born in Alexandria around <time datetime="185">185</time> and died in Tyre around <time datetime="253">253</time>.</p>
          </div>
          <footer>
            <p>back to note: <a href="#origene" title="Origen">Origen↑</a></p>
          </footer>
        </article></section>
        <section><article>
          <h3 id="note_marcien" class="yellow">Marcian</h3>
          <div class="notices yellow">
            <p>No trace of this proconsul apart from <cite>The Golden Legend</cite>.</p>
          </div>
          <footer>
            <p>back to note: <a href="#marcien" title="Marcian">Marcian↑</a></p>
          </footer>
        </article></section>
        <section><article>
          <h3 id="note_saxe" class="yellow">Saxony</h3>
          <div class="notices yellow">
            <p><dfn>Saxony</dfn> is a region of Germany whose boundaries have varied throughout history; the Palatinate County of Saxony was a principality of the Holy Roman Empire. Founded by Emperor Otto I<sup>st</sup> in the 10<sup>th</sup> century, it extended over what is now the Saale-Unstrut region in the south-east of the Duchy of Saxony.</p>
          </div>
          <footer>
            <p>back to note: <a href="#saxe" title="Saxony">Saxony↑</a></p>
          </footer>
        </article></section>
      </aside>
    </article></section>
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