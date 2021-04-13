<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 20 -->

<article>
  
  <hgroup>
    <h2 id="mise-en-relation" class="yellow">different texts at the origin of the scenes represented in the <cite><ruby style="color:#555;" lang="en">Triptych of John The Baptist and John The Evangelist<rp>(</rp><rt style="color:#999;" lang="nl">Triptiek van Johannes de Doper en Johannes de Evangelist</rt><rp>)</rp></ruby></cite></h2>


      <h3 class="yellow">Excerpt of the text of <cite>The Revelation</cite> related to its representation of John in Patmos on the left shutter by Hans Memling</h3>
  </hgroup>

    <h3 id="apocalypse" class="yellow">Excerpt from the text of <cite>The Revelation</cite> from chapters 4 to 12</h3>


      <p class="puce">Back to: <a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:10#description-right-shutter">Overview of the right inner shutter: John bears witness to <cite>The Revelation</cite> in Patmos. ↩</a></p>


      <hr>
      <p>out</p>
      <p class="no-puce">Chapter 4</p>
        <ol class="doc">
          <li value="01">Then, in my vision, I saw a door open in heaven and heard the same voice speaking to me, the voice like a trumpet, saying,
            <p class="conversation">
              “Come up here: I will show you what is to take place in the future.”
            </p>
          </li>
        </ol>

      <hr>

        <blockquote id="apocalypse-4-2" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_4">
          <ol class="doc">
            <li value="02">Immediately I was in the <span style="color: #e6a64d;">Spirit</span>. Behold, there was a <span style="color: #e6a64d;">throne</span> set in <span style="color: #e6a64d;">heaven</span>, and <span style="color: #e6a64d;">one</span> sitting on the throne</li>
            <li value="03">that looked like a jasper stone and a sardius. There was a <span style="color: #e6a64d;">rainbow</span> around the throne, like an emerald to look at.</li>
            <li value="04">Around the throne were twenty-four thrones. On the thrones were <span style="color: #e6a64d;">twenty-four elders</span> sitting, dressed in white garments, with crowns of gold on their heads.</li>
            <li value="05">Out of the throne proceed lightnings, sounds, and thunders. There were seven lamps of fire burning before his throne, which are the seven Spirits of God.</li>
            <li value="06">Before the throne was something like a sea of glass, similar to crystal. In the midst of the throne, and around the throne were four living creatures full of eyes before and behind.»</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:10#renvoi-apocalypse-4-2">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:10#image-apocalypse-4-2">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-4-7" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_4">
          <ol class="doc">
            <li value="07">The first creature was like a <span style="color: #e6a64d;">lion</span>, and the second creature like a <span style="color: #e6a64d;">calf</span>, and the third creature had a <span style="color: #e6a64d;">face like a man</span>, and the fourth was like a <span style="color: #e6a64d;">flying eagle</span>.</li>
            <li value="08">
              <p>The four living creatures, each one of them having <span style="color: #e6a64d;">six wings</span>, are full of eyes around and within. They have no rest day and night, saying,</p>
              <p class="conversation">
                “Holy, holy, holy is the Lord God, the Almighty, who was and who is and who is to come!”
              </p>
            </li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:10#renvoi-apocalypse-4-7">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:10#image-apocalypse-4-2">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>
<p>out</p>
          <ol class="doc">
            <li value="9">Every time the living creatures glorified and honoured and gave thanks to the One sitting on the throne, who lives for ever and ever,</li>
            <li value="10">the twenty-four elders prostrated themselves before him to worship the One who lives for ever and ever, and threw down their crowns in front of the throne, saying:</li>
            <li value="11">
              <p class="conversation">
                «You are worthy, our Lord and God, to receive glory and honour and power, for you made the whole universe; by your will, when it did not exist, it was created.»
              </p>
            </li>
          </ol>

      <hr>

        <p class="no-puce">chapter 5</p>
        <blockquote id="apocalypse-5-1" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_5">
          <ol class="doc">
            <li value="01">I saw, in the right hand of him who sat on the throne, a <span style="color: #e6a64d;">book</span> written inside and outside, sealed shut with <span style="color: #e6a64d;">seven seals</span>.</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:10#renvoi-apocalypse-5-1">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:10#image-apocalypse-4-2">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>
<p>out</p>
        <ol class="doc">
          <li value="2">Then I saw a powerful angel who called with a loud voice
            <p class="conversation">
              “Who is worthy to open the scroll and break its seals?”
            </p>
          </li>
          <li value="3">But there was no one, in heaven or on the earth or under the earth, who was able to open the scroll and read it.</li>
          <li value="4">I wept bitterly because nobody could be found to open the scroll and read it,</li>
          <li value="5">but one of the elders said to me
            <p class="conversation">
              “Do not weep. Look, the Lion of the tribe of Judah, the Root of David, has triumphed, and so he will open the scroll and its seven seals.”
            </p>
          </li>
        </ol>

      <hr>

        <blockquote id="apocalypse-5-6" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_5">
          <ol class="doc">
            <li value="06">I saw in the midst of the throne and of the four living creatures, and in the midst of the elders, a <span style="color: #e6a64d;">Lamb</span> standing, as though it had been slain, having seven horns, and seven eyes, which are the seven Spirits of God, sent out into all the earth.</li>
            <li value="07">Then he came, and he took it out of the right hand of him who sat on the throne.</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:10#renvoi-apocalypse-5-6">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:10#image-apocalypse-4-2">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>
<p>out</p>
          <ol class="doc">
            <li value="8">and when he took it, the four living creatures prostrated themselves before him and with them the twenty-four elders; each one of them was holding a harp and had a golden bowl full of incense which are the prayers of the saints.</li>
            <li value="9">They sang a new hymn:
              <p>
                You are worthy to take the scroll and to break its seals, because you were sacrificed, and with your blood you bought people for God of every race, language, people and nation.
              </p>
            </li>
            <li value="10">
              <p class="conversation">
                and made them a line of kings and priests for God, to rule the world.
              </p>
            </li>
            <li value="11">In my vision, I heard the sound of an immense number of angels gathered round the throne and the living creatures and the elders; there were ten thousand times ten thousand of them and thousands upon thousands,</li>
            <li value="12">
              <p class="conversation">
                loudly chanting: Worthy is the Lamb that was sacrificed to receive power, riches, wisdom, strength, honour, glory and blessing.
              </p>
            <li value="13">Then I heard all the living things in creation -- everything that lives in heaven, and on earth, and under the earth, and in the sea, crying:
              <p class="conversation">
                “To the One seated on the throne and to the Lamb, be all praise, honour, glory and power, for ever and ever.”
              </p>
            </li>
            <li value="14">And the four living creatures said,
              <p class="conversation">
                “Amen”
              </p>
            and the elders prostrated themselves to worship.</li>
          </ol>

      <hr>

          <p class="no-puce">chapter 6</p>
        <blockquote id="apocalypse-6-1" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_6">
          <ol class="doc">
            <li value="01">
              <p>I saw that the Lamb opened one of the seven seals, and I heard one of the four living creatures saying, as with a voice of thunder,</p>
              <p class="conversation">
                “Come and see!”
              </p>
            </li>
            <li value="02">And behold, a <span style="color: #e6a64d;">white horse</span>, and he who sat on it had a <span style="color: #e6a64d;">bow</span>. A <span style="color: #e6a64d;">crown</span> was given to him, and he came forth conquering, and to conquer.</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:10#renvoi-apocalypse-6-1">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:11#image-apocalypse-6-1">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-6-3" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_6">
          <ol class="doc">
            <li value="03"><p>When he opened the second seal, I heard the second living creature saying,</p>
              <p class="conversation">
                “Come!”
              </p>
            </li>
            <li value="04">Another came forth, a <span style="color: #e6a64d;">red horse</span>. To him who sat on it was given power to take peace from the earth, and that they should kill one another. There was given to him a great <span style="color: #e6a64d;">sword</span>.</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:11#renvoi-apocalypse-6-3">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:11#image-apocalypse-6-3">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-6-5" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_6">
          <ol class="doc">
            <li value="05">
              <p>When he opened the third seal, I heard the third living creature saying,</p>
              <p class="conversation">
                “Come and see!”
              </p>
              <p>And behold, a <span style="color: #e6a64d;">black horse</span>, and he who sat on it had a <span style="color: #e6a64d;"balance</span> in his hand.</p>
            </li>
            <li value="06">
              <p>I heard a voice in the midst of the four living creatures saying,</p>
              <p class="conversation">
                “Achoenix of wheat for a denarius, and three choenix of barley for a denarius! Don't damage the oil and the wine!”
              </p>
            </li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:11#renvoi-apocalypse-6-5">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:11#image-apocalypse-6-5">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-6-7" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_6">
            <ol class="doc">
              <li value="07">
                When he opened the fourth seal, I heard the fourth living creature saying,
                <p class="conversation">
                  “Come and see!”
                </p>
              </li>
              <li value="08">And behold, a <span style="color: #e6a64d;">pale horse</span>, and he who sat on it, his name was <span style="color: #e6a64d;">Death</span>.<span style="color: #e6a64d;">Hades</span> followed with him.</li>
              <li>Authority over one fourth of the earth, to kill with the sword, with famine, with death, and by the wild animals of the earth was given to him.</li>
            </ol>
            <footer>
              <ul>
                <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:11#renvoi-apocalypse-6-7">Back to related text ↩</a></p></li>
                <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:11#image-apocalypse-6-7">Back to related image ↩</a></p></li>
              </ul>
            </footer>
          </blockquote>

      <hr>
<p>out</p>
        <ol class="doc">
          <li value="9">
          When he broke the fifth seal, I saw underneath the altar the souls of all the people who had been killed on account of the Word of God, for witnessing to it.</li>
          <li value="10">They shouted in a loud voice:
            <p class="conversation">
              “Holy, true Master, how much longer will you wait before you pass sentence and take vengeance for our death on the inhabitants of the earth?”
            </p>
          </li>
          <li value="11">Each of them was given a white robe, and they were told to be patient a little longer, until the roll was completed of their fellow-servants and brothers who were still to be killed as they had been.</li>
          <li value="12">In my vision, when he broke the sixth seal, there was a violent earthquake and the sun went as black as coarse sackcloth; the moon turned red as blood all over,</li>
          <li value="13">and the stars of the sky fell onto the earth like figs dropping from a fig tree when a high wind shakes it;</li>
        </ol>

      <hr>

        <blockquote id="apocalypse-6-14" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_6">
          <ol class="doc">
            <li value="14">The sky was removed like a scroll when it is rolled up. Every mountain and island were moved out of their places.</li>
            <li value="15"><span style="color: #e6a64d;">The kings of the earth, the princes, the commanding officers, the rich, the strong, and every slave and free person, hid themselves in the caves and in the rocks of the mountains</span>.</li>
            <li value="16">
              <p>They told the mountains and the rocks,</p>
              <p class="conversation">
                “Fall on us, and hide us from the face of him who sits on the throne, and from the wrath of the Lamb,
              </p>
            </li>
            <li value="17">
              <p class="conversation">
                for the great day of his wrath has come; and who is able to stand?”
              </p>
            </li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:11#renvoi-apocalypse-6-14">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:11#image-apocalypse-6-14">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>
<p>out</p>
      <p class="no-puce">chapter 7</p>
        <ol class="doc">
          <li value="1">Next I saw four angels, standing at the four corners of the earth, holding back the four winds of the world to keep them from blowing over the land or the sea or any tree.</li>
          <li value="2">Then I saw another angel rising where the sun rises, carrying the seal of the living God; he called in a powerful voice to the four angels whose duty was to devastate land and sea,</li>
          <li value="3">
            <p class="conversation">
              “Wait before you do any damage on land or at sea or to the trees, until we have put the seal on the foreheads of the servants of our God.”
            </p>
          </li>
          <li value="4">And I heard how many had been sealed: a hundred and forty-four thousand, out of all the tribes of Israel.</li>
          <li value="5">From the tribe of Judah, twelve thousand had been sealed; from the tribe of Reuben, twelve thousand; from the tribe of Gad, twelve thousand;</li>
          <li value="6">from the tribe of Asher, twelve thousand; from the tribe of Naphtali, twelve thousand; from the tribe of Manasseh, twelve thousand;</li>
          <li value="7">from the tribe of Simeon, twelve thousand; from the tribe of Levi, twelve thousand; from the tribe of Issachar, twelve thousand;</li>
          <li value="8">from the tribe of Zebulun, twelve thousand; and from the tribe of Benjamin, twelve thousand had been sealed.</li>
          <li value="9">After that I saw that there was a huge number, impossible for anyone to count, of people from every nation, race, tribe and language; they were standing in front of the throne and in front of the Lamb, dressed in white robes and holding palms in their hands.</li>
          <li value="10">They shouted in a loud voice:
            <p class="conversation">
              “Salvation to our God, who sits on the throne, and to the Lamb!”
            </p>
          </li>
          <li value="11">And all the angels who were standing in a circle round the throne, surrounding the elders and the four living creatures, prostrated themselves before the throne, and touched the ground with their foreheads, worshipping God.</li>
          <li value="12">with these words:
            <p class="conversation">
              “Amen. Praise and glory and wisdom, thanksgiving and honour and power and strength to our God for ever and ever. Amen.”
            </p>
          </li>
          <li value="13">One of the elders then spoke and asked me:
            <p class="conversation">
              “Who are these people, dressed in white robes, and where have they come from?”
            </p>
          </li>
          <li value="14">I answered him:
            <p class="conversation">
              “You can tell me, sir.”
            </p>
            Then he said:
            <p class="conversation">
              “These are the people who have been through the great trial; they have washed their robes white again in the blood of the Lamb.”
            </p>
          </li>
          <li value="15">
            <p class="conversation">
              “That is why they are standing in front of God's throne and serving him day and night in his sanctuary; and the One who sits on the throne will spread his tent over them.
            </p>
          </li>
          <li value="16">
            <p class="conversation">
              They will never hunger or thirst again; sun and scorching wind will never plague them,
            </p>
          </li>
          <li value="17">
            <p class="conversation">
              because the Lamb who is at the heart of the throne will be their shepherd and will guide them to springs of living water; and God will wipe away all tears from their eyes.”
            </p>
          </li>
        </ol>

      <hr>

      <p class="no-puce">chapter 8</p>
        <blockquote id="apocalypse-8-1" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_8">
          <ol class="doc">
            <li value="01">When he opened the seventh seal, there was silence in heaven for about half an hour.</li>
            <li value="02">I saw the <span style="color: #e6a64d;">seven angels</span> who stand before God, and <span style="color: #e6a64d;">seven trumpets</span> were given to them.</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:12#renvoi-apocalypse-8-1">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-8-1">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-8-3" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_8">
          <ol class="doc">
            <li value="03">Another angel came and stood over the altar, having a <span style="color: #e6a64d;">golden censer</span>. Much incense was given to him, that he should add it to the prayers of all the saints on the <span style="color: #e6a64d;">golden altar</span> which was before the throne.</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:12#renvoi-apocalypse-8-3">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-8-3">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-8-4" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_8">
          <ol class="doc">
            <li value="04">The smoke of the incense, with the prayers of the saints, went up before God out of the angel's hand.</li>
            <li value="05">The angel took the censer, and he filled it with the fire of the altar, and threw it on the earth. There followed thunders, sounds, lightnings, and an earthquake.</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:12#renvoi-apocalypse-8-4">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-8-4">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-8-6" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_8">
          <ol class="doc">
            <li value="06">The seven angels who had the seven trumpets prepared themselves to sound.</li>
            <li value="07">The first sounded, and there followed hail and fire, mixed with blood, and they were thrown to the earth.One third of the earth was burnt up, and one third of the trees were burnt up, and all green grass was burnt up.</li>
            <li value="08">The second angel sounded, and something like a <span style="color: #e6a64d;">great burning mountain</span> was thrown into the sea. One third of the sea became blood,</li>
            <li value="09">and one third of the living creatures which were in the sea died. O<span style="color: #e6a64d;">ne third of the ships were destroyed</span>.</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:12#renvoi-apocalypse-8-6">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-8-4">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-8-10" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_8">
          <ol class="doc">
            <li value="10">The third angel sounded, and a <span style="color: #e6a64d;">great star fell from the sky, burning like a torch</span>, and it fell on one third of the rivers, and on the springs of the waters.</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:12#renvoi-apocalypse-8-10">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-8-10">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-8-11" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_8">
          <ol class="doc">
            <li value="11">The name of the star is called «<span style="color: #e6a64d;">wormwood</span>». One third of the waters became wormwood. Many people died from the waters, because they were made bitter.</li>
            <li value="12">The fourth angel sounded, and one third of the sun was struck, and one third of the moon, and one third of the stars; so that one third of them would be darkened, and the day wouldn't shine for one third of it, and the night in the same way.</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:12#renvoi-apocalypse-8-11">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-8-10">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-8-13" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_8">
          <ol class="doc">
            <li value="13"><p>I saw, and I heard an <span style="color: #e6a64d;">eagle</span>, flying in mid heaven, saying with a loud voice,</p>
              <p class="conversation">
                “Woe! Woe! Woe for those who dwell on the earth, because of the other voices of the trumpets of the three angels, who are yet to sound!”.
              </p>
            </li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:12#renvoi-apocalypse-8-13">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-8-13">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

      <p class="no-puce">chapter 9</p>
        <blockquote id="apocalypse-9-1" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_9">
          <ol class="doc">
            <li value="01">The fifth angel sounded, and I saw a star from the sky which had fallen to the earth. The key to the pit of the <span style="color: #e6a64d;">abyss</span> was given to him.</li>
            <li value="02">He opened the pit of the abyss, and smoke went up out of the pit, like the <span style="color: #e6a64d;">smoke from a burning furnace</span>. The sun and the air were darkened because of the smoke from the pit,</li>
            <li value="03">Then out of the smoke came forth <span style="color: #e6a64d;">locusts</span> on the earth, and power was given to them, as the scorpions of the earth have power.</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:10#renvoi-apocalypse-9-1">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:12#image-apocalypse-9-1">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-9-4" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_9">
          <ol class="doc">
            <li value="04">They were told that they should not hurt the grass of the earth, neither any green thing, neither any tree, but only those people who don't have God's seal on their foreheads.</li>
            <li value="05">They were given power not to kill them, but to torment them for five months. Their torment was like the torment of a scorpion, when it strikes a person.</li>
            <li value="06">In those days people will seek death, and will in no way find it. They will desire to die, and death will flee from them.</li>
            <li value="07">The shapes of the <span style="color: #e6a64d;">locusts</span> were like horses prepared for war. On their heads were something like golden crowns, and their faces were like people's faces,</li>
            <li value="08">They had hair like women's hair, and their teeth were like those of lions.</li>
            <li value="09">They had breastplates, like breastplates of iron. The sound of their wings was like the sound of chariots, or of many horses rushing to war.</li>
            <li value="10">They have tails like those of scorpions, and stings. In their tails they have power to harm men for five months.</li>
            <li>Their tails were like scorpions' tails, with stings,</li>
            <li value="11">They have over them as king the angel of the abyss. His name in Hebrew is “Abaddon”, but in Greek, he has the name “Apollyon” (which means: Destructor).</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:13#renvoi-apocalypse-9-4">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:13#image-apocalypse-9-1">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>
<p>out</p>
        <ol class="doc">
          <li value="12">That was the first of the disasters; there are still two more to come.</li>
          <li value="13">The sixth angel blew his trumpet, and I heard a single voice issuing from the four horns of the golden altar in God's presence.</li>
          <li value="14">It spoke to the sixth angel with the trumpet, and said:
            <p class="conversation">
              “Release the four angels that are chained up at the great river Euphrates.”
            </p>
          </li>
          <li value="15">These four angels had been ready for this hour of this day of this month of this year, and ready to destroy a third of the human race.</li>
          <li value="16">I learnt how many there were in their army: twice ten thousand times ten thousand mounted men.</li>
          <li value="17">In my vision I saw the horses, and the riders with their breastplates of flame colour, hyacinth-blue and sulphur-yellow; the horses had lions' heads, and fire, smoke and sulphur were coming from their mouths.</li>
          <li value="18">It was by these three plagues, the fire, the smoke and the sulphur coming from their mouths, that the one third of the human race was killed.</li>
          <li value="19">All the horses' power was in their mouths and their tails: their tails were like snakes, and had heads which inflicted wounds.</li>
          <li value="20">But the rest of the human race, who escaped death by these plagues, refused either to abandon their own handiwork or to stop worshipping devils, the idols made of gold, silver, bronze, stone and wood that can neither see nor hear nor move.</li>
          <li value="21">Nor did they give up their murdering, or witchcraft, or fornication or stealing.</li>
        </ol>

      <hr>

      <p class="no-puce">chapter 10</p>
        <blockquote id="apocalypse-10-1" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_10">
          <ol class="doc">
            <li value="01">I saw a mighty <span style="color: #e6a64d;">angel</span> coming down out of the sky, clothed with a <span style="color: #e6a64d;">cloud</span>. A <span style="color: #e6a64d;">rainbow</span> was on his head. His face was like the sun, and his feet like <span style="color: #e6a64d;">pillars of fire</span>.</li>
            <li value="02">He had in his hand a little open <span style="color: #e6a64d;">book</span>.</li>
            <li>He set his right foot on the sea, and his left on the land.</li>
            <li value="03">He cried with a loud voice, as a lion roars.</li>
            <li>When he cried, the seven thunders uttered their voices.</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:13#renvoi-apocalypse-10-1">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:13#image-apocalypse-10-1">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-10-4" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_10">
          <ol class="doc">
            <li value="04"><p>When the seven thunders sounded, I was about to write; but I heard a voice from the sky saying,</p>
              <p class="conversation">
                “Seal up the things which the seven thunders said, and don't write them.”
              </p>
            </li>
            <li value="05">The angel who I saw standing on the sea and on the land lifted up his right hand to the sky,</li>
            <li value="06">and swore by him who lives forever and ever, who created heaven and the things that are in it, the earth and the things that are in it, and the sea and the things that are in it, that there will no longer be delay.
            </li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:13#renvoi-apocalypse-10-4">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:13#image-apocalypse-10-4">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>
<p>out</p>
        <ol class="doc">
          <li value="07">
            <p class="conversation">
              at the time when the seventh angel is heard sounding his trumpet, the mystery of God will be fulfilled, just as he announced in the gospel to his servants the prophets.”
            </p>
          </li>
          <li value="08">Then I heard the voice I had heard from heaven speaking to me again.
            <p class="conversation">
              “Go”,
            </p>
          it said,
            <p class="conversation">
              “and take that open scroll from the hand of the angel standing on sea and land.”
            </p>
          </li>
          <li value="09">I went to the angel and asked him to give me the small scroll, and he said,
            <p class="conversation">
              “Take it and eat it; it will turn your stomach sour, but it will taste as sweet as honey.”
            </p>
          </li>
          <li value="10">So I took it out of the angel's hand, and I ate it and it tasted sweet as honey, but when I had eaten it my stomach turned sour.</li>
          <li value="11">Then I was told,
            <p class="conversation">
              “You are to prophesy again, this time against many different nations and countries and languages and kings.”
            </p>
          </li>
        </ol>

      <hr>
<p>out</p>
      <p class="no-puce">chapter 11</p>
        <ol class="doc">
          <li value="1">Then I was given a long cane like a measuring rod, and I was told,
            <p class="conversation">
              “Get up and measure God's sanctuary, and the altar, and the people who worship there;
            </p>
          </li>
          <li value="2">
            <p class="conversation">
              but exclude the outer court and do not measure it, because it has been handed over to gentiles -- they will trample on the holy city for forty-two months.
            </p>
          </li>
          <li value="3">
            <p class="conversation">
              But I shall send my two witnesses to prophesy for twelve hundred and sixty days, wearing sackcloth.
            </p>
          </li>
          <li value="4">
            <p class="conversation">
              These are the two olive trees and the two lamps in attendance on the Lord of the world.
            </p>
          </li>
          <li value="5">
            <p class="conversation">
              Fire comes from their mouths and consumes their enemies if anyone tries to harm them; and anyone who tries to harm them will certainly be killed in this way.
            </p>
          </li>
          <li value="6">
            <p class="conversation">
              They have the power to lock up the sky so that it does not rain as long as they are prophesying; they have the power to turn water into blood and strike the whole world with any plague as often as they like.
            </p>
          </li>
          <li value="7">
            <p class="conversation">
              When they have completed their witnessing, the beast that comes out of the Abyss is going to make war on them and overcome them and kill them.
            </p>
          </li>
          <li value="8">
            <p class="conversation">
              Their corpses lie in the main street of the great city known by the symbolic names Sodom and Egypt, in which their Lord was crucified.
            </p>
          </li>
          <li value="9">
            <p class="conversation">
              People of every race, tribe, language and nation stare at their corpses, for three-and-a-half days, not letting them be buried,
            </p>
          </li>
          <li value="10">
            <p class="conversation">
              and the people of the world are glad about it and celebrate the event by giving presents to each other, because these two prophets have been a plague to the people of the world.”
            </p>
          </li>
          <li value="11">After the three-and-a-half days, God breathed life into them and they stood up on their feet, and everybody who saw it happen was terrified;</li>
          <li value="12">then I heard a loud voice from heaven say to them,
            <p class="conversation">
              “Come up here,”
            </p>
          and while their enemies were watching, they went up to heaven in a cloud.</li>
          <li value="13">Immediately, there was a violent earthquake, and a tenth of the city collapsed; seven thousand persons were killed in the earthquake, and the survivors, overcome with fear, could only praise the God of heaven.</li>
          <li value="14">That was the second of the disasters; the third is to come quickly after it.</li>
          <li value=15">Then the seventh angel blew his trumpet, and voices could be heard shouting in heaven, calling,
            <p class="conversation">
              “The kingdom of the world has become the kingdom of our Lord and his Christ, and he will reign for ever and ever.”
            </p>
          </li>
          <li value="16">The twenty-four elders, enthroned in the presence of God, prostrated themselves and touched the ground with their foreheads worshipping God</li>
          <li value="17">with these words,
            <p class="conversation">
              “We give thanks to you, Almighty Lord God, He who is, He who was, for assuming your great power and beginning your reign.
            </p>
          </li>
          <li value="18">
            <p class="conversation">
              The nations were in uproar and now the time has come for your retribution, and for the dead to be judged, and for your servants the prophets, for the saints and for those who fear your name, small and great alike, to be rewarded. The time has come to destroy those who are destroying the earth.”
            </p>
          </li>
          <li value="19">Then the sanctuary of God in heaven opened, and the ark of the covenant could be seen inside it. Then came flashes of lightning, peals of thunder and an earthquake and violent hail.</li>
        </ol>

      <hr>

        <p class="no-puce">chapter 12</p>
        <blockquote id="apocalypse-12-1" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_12">
          <ol class="doc">
            <li value="01">A great sign was seen in heaven: a <span style="color: #e6a64d;">woman</span> clothed with the sun, and the moon under her feet, and on her head a crown of twelve stars.</li>
            <li value="02">She was with child. She cried out in pain, laboring to give birth.</li>
            <li value="03">Another sign was seen in heaven. Behold, a great <span style="color: #e6a64d;">red dragon</span>, having seven heads and ten horns, and on his heads seven crowns.</li>
            <li value="04">His tail drew one third of the stars of the sky, and threw them to the earth. The dragon stood before the woman who was about to give birth, so that when she gave birth he might devour her child.</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:13#renvoi-apocalypse-12-1">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:13#image-apocalypse-12-1">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-12-5" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_12">
          <ol class="doc">
            <li value="05">She gave birth to a son, a male child, who is to rule all the nations with a rod of iron. Her child was caught up to God, and to his throne.</li>
            <li value="06">The woman fled into the wilderness, where she has a place prepared by God, that there they may nourish her one thousand two hundred sixty days.</li>
            <li value="07">There was war in the sky. Michael and his angels made war on the dragon. The dragon and his angels made war.</li>
            <li>The dragon fought back with his angels,</li>
            <li value="08">They didn't prevail, neither was a place found for him any more in heaven.</li>
            <li value="09">The great dragon was thrown down, the old serpent, he who is called the devil and Satan, the deceiver of the whole world. He was thrown down to the earth, and his angels were thrown down with him.</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:13#renvoi-apocalypse-12-5">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:13#image-apocalypse-12-5">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>

        <blockquote id="apocalypse-12-10" cite="https://en.wikisource.org/wiki/Bible_(World_English)/Revelation#Chapter_12">
          <ol class="doc">
            <li value="10">
              <p>I heard a loud voice in heaven, saying,</p>
              <p class="conversation">«Now is come the salvation, the power, and the Kingdom of our God, and the authority of his Christ; for the accuser of our brothers has been thrown down, who accuses them before our God day and night,</p>
            </li>
            <li>
              <p class="conversation">now that the accuser, who accused our brothers day and night before our god, has been brought down.</p>
            </li>
            <li value="11">
              <p class="conversation">They overcame him because of the Lamb's blood, and because of the word of their testimony. They didn't love their life, even to death.</p>
            </li>
            <li value="12">
              <p class="conversation">Therefore rejoice, heavens, and you who dwell in them.</p>
            </li>
            <li>
              <p class="conversation">Woe to the earth and to the sea, because the devil has gone down to you, having great wrath, knowing that he has but a short time.»</p>
            </li>
            <li value="13">When the <span style="color: #e6a64d;">dragon</span> saw that he was thrown down to the earth, he persecuted the <span style="color: #e6a64d;">woman</span> who gave birth to the male child,</li>
            <li value="14">Two <span style="color: #e6a64d;">wings of the great eagle</span> were given to the woman, that she might fly into the wilderness to her place, so that she might be nourished for a time, and times, and half a time, from the face of the serpent.</li>
          </ol>
        <footer>
          <ul>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:14#renvoi-apocalypse-12-10">Back to related text ↩</a></p></li>
            <li><p><a href="https://francois-vidit.com/docs/en/bruges/hopital-saint-jean/saint-jean/page:14#image-apocalypse-12-10">Back to related image ↩</a></p></li>
          </ul>
        </footer>
        </blockquote>

      <hr>
<p>out</p>
        <ol class="doc">
          <li value="15">So the serpent vomited water from his mouth, like a river, after the woman, to sweep her away in the current,</li>
          <li value="16">but the earth came to her rescue; it opened its mouth and swallowed the river spewed from the dragon's mouth.</li>
          <li value="17">Then the dragon was enraged with the woman and went away to make war on the rest of her children, who obey God's commandments and have in themselves the witness of Jesus.</li>
          <li value="18">And I took my stand on the seashore.</li>
        </ol>

      <hr>


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