<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 16 -->

<article>

    <hgroup>
    <h2 id="mise-en-relation" class="yellow">different texts at the origin of the scenes represented in the <cite><ruby style="color:#555;" lang="en">Triptych of John The Baptist and John The Evangelist<rp>(</rp><rt style="color:#999;" lang="nl">Triptiek van Johannes de Doper en Johannes de Evangelist</rt><rp>)</rp></ruby></cite></h2>
      <h3 id="cath-selon-legende" class="yellow"><cite>Legend of Catherine of Alexandria</cite> according to chapter 166 of <cite>The Golden Legend</cite></h3>
    </hgroup>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg" title="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, Catherine of Alexandria, Memling Museum, Hospital St. John, Bruges (Brugge)" alt="Hans MEMLING, “Triptych of John the Baptist and John the Evangelist”, detail of the central panel, Catherine of Alexandria, Memling Museum, Hospital St. John, Bruges (Brugge)" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.jpg 1920w"></picture><figcaption>Catherine of Alexandria, detail of the central panel.</figcaption>
      </figure>

        <h4>Text of chapter 166 of <cite>The Golden Legend</cite>: legend of Catherine of Alexandria</h4>

          <p>Here followeth the Life of St. Catherine, virgin and martyr, and first of her name.</p>
          <p>CATHERINE is said of catha, that is all, and ruina that is falling, for all the edifice of the devil fell all from her.
          For the edifice of pride fell from her by humility that she had, and the edifice of fleshly desire fell from her by her virginity, and worldly covetise, for that she despised all worldly things.</p>
          <p>Or Catherine may be said as, a little chain, for she made a chain of good works by which she mounted into heaven, and this chain or ladder had four grees or steps which be: innocence of work, cleanness of body, despising of vanity and saying of truth, which the prophet putteth by order where he saith: Quis ascendet in montem domini? Innocens manibus.</p>
          <p>Who shall ascend into the mountain of our Lord? that is heaven, and he answereth: The innocent of his hands, he that is clean in his heart, he that hath not taken in vain his soul, and he that hath not sworn in fraud and deceit to his neighbour.</p>
          <p>And it appeareth in her legend how these four degrees were in her.</p>
          <p>Catherine, by descent of line, was of the noble lineage of the emperors of Rome as it shall be declared more plainly hereafter by a notable chronicle, whose most blessed life and conversation wrote the solemn doctor Athanasius, which knew her lineage and her life, for he was one of her masters in her tender age ere she was converted to the christian faith.</p>
          <p>And after, the said Athanasius, by her preaching and marvellous work of our Lord, was converted also, which, after her martyrdom, was made bishop of Alexandria, and a glorious pillar of the church by the grace of God and merits of St. Catherine.</p>
          <p>And as we find by credible chronicles, in the time of Diocletian and Maximian was great and cruel tyranny showed in all the world, as well to christian men as to paynims, so that many that were subject to Rome put away the yoke of servage and rebelled openly against the empire.</p>
          <p>Among whom the realm of Armenia was one that withstood most the tribute of the Romans, wherefore they of Rome deputed a noble man of dignity named Constantius, which was tofore others a valiant man in arms, discreet and virtuous.</p>
          <p>The which lord, after he came in to Armenia, anon subdued them by his discreet prudence, and deserved to have the love and favour of his enemies, in so much that he was desired to marry the daughter of the king which was sole heir of the realm, and he consented and married her.</p>
          <p>And soon after the king her father died, and then Constantius was enhanced and crowned king, which soon after had a son by his wife named Costus, at the birth of whom his mother died.</p>
          <p>After the death of whom Constantius returned to Rome to see the emperor, and to know how his lordships were governed in those parts, and in the meantime tidings came to Rome how that Great Britain, which now is called England, rebelled against the empire.</p>
          <p>Wherefore, by the advice of the consulate, it was concluded that Constantius, king of Armenia, should go into Britain to subdue them; which addressed him thither, and in short time after he entered into the land, by his prowess and wisdom he appeased the realm and subdued it again to the empire of Rome.
          And also he was so acceptable to the king of Britain, named Coel, that he married his daughter Helen, which afterward found the holy cross, and in short time he gat on her Constantine, which after was emperor.</p>
          <p>And then soon after died Constantius.</p>
          <p>And Constantine, after the death of King Coel, by his mother was crowned king of Britain.</p>
          <p>And Costus, the first son of Constantius, wedded the king's daughter of Cyprus, which was heir, of whom, as shall be hereafter said, was engendered St. Catherine, which came of the lineage of Constantius.</p>
          <p>Now followeth the Life of St. Catherine.</p>
          <p>In the year of our Lord two hundred, reigned in Cyprus a noble and prudent king named Costus, which was a noble and seemly man, rich and of good conditions, and had to his wife a queen like to himself in virtuous governance, which lived together prosperously, but after the law of paynims, and worshipped idols.</p>
          <p>This king, because he loved renomee and would have his name spread through the world, he founded a city in which he edified a temple of his false gods, and named that city after his name Costi, which after, to increase his fame, the people named it Fama Costi, and yet unto this day is called Famagosta; in which city he and the queen lived in great wealth and prosperity.</p>
          <p>And like as the fair rose springeth among the briars and thorns, right so between these two paynims was brought forth this blessed tS. Catherine.</p>
          <p>And when this holy virgin was born she was so fair of visage and so well formed Catherine in her members that all the people enjoyed in her beauty, and when she came to seven years of age,anon after she was set to school, where she profited much more than any other of her age, and was informed in the arts liberal, wherein she drank plenteously of the well of wisdom, for she was chosen to be a teacher and informer of everlasting wisdom.</p>
          <p>The king Costus her father had so great joy of the great towardness and wisdom of his daughter, that he let ordain a tower in his palace, with divers studies and chambers, in which she might be at her pleasure and also at her will, and also he ordained for to wait on her seven the best masters and wisest in conning that might be gotten in those parts.</p>
          <p>And within a while they that came to teach her, they after that, learned of her and became her disciples.</p>
          <p>And when this virgin came to the age of fourteen years, her father king Costus died, and then she was left as queen and heir after him, and then the estates of the land came to this young lady, Catherine, and desired her to make a parliament in which she might be crowned and receive the homage of her subjects, and that such rule might be set in her beginning, that peace and prospenty might ensue in her realm.</p>
          <p>And this young maid granted to them their asking.</p>
          <p>And when the parliament was assembled and the young queen crowned with great solemnity, and she sitting on a day in her parliament, and her mother by her, with all the lords each in his place, a lord arose by the assent of her mother, the other lords, and the commons, and kneeled down tofore her, saying these words: Right high and mighty princess, and our most sovereign lady, please if you to wit that I am commanded by the queen your mother, by all the lords and commons of this your realm, to require your highness that it may please you to grant to them that they might provide some noble knight or prince to marry you, to the end that he might rule and defend your realm and subjects, like as your father did before you, and also that of you might proceed noble lineage which after you may reign upon us, which thing we most desire, and hereof we desire your good answer.</p>
          <p>This young queen Catherine, hearing this request, was abashed and troubled in her courage how she might answer to content her mother, the lords, and her subjects, and to keep herself chaste, for she had concluded to keep her virginity, and rather to suffer death than to defile it.</p>
          <p>And then with a sad cheer and meek look she answered in this wise: Cousin, I have well understood your request, and thank my mother, the lords, and my subjects of the great love that they all have to me and to my realm, and as touching my marriage, I trust verily there may be no peril, considering the great wisdom of my lady my mother, and of the lords, with the good obeisance of the commons, trusting in their good continuance.</p>
          <p>Wherefore we need not to seek a stranger for to rule us and our realm, for with your good assistance and aid we hope to rule, govern, and keep this our realm in good justice, peace, and rest, in like wise as the king my father held you in.</p>
          <p>Wherefore at this time I pray you to be content and to cease of this matter, and let us proceed to such matters as be requisite for the rule, governance and universal weal of this realm.</p>
          <p>And when this young queen Catherine had achieved her answer, the queen her mother, and all the lords, were abashed of her of words and wist not what to say, for they considered well by her words that she had no will to be married.</p>
          <p>And then there arose and stood up a duke, which was her uncle, and with due reverence said to her in this wise: My sovereign lady, saving your high and noble discretion, this answer is full heavy to my lady your mother, and to us all your humble liegemen, without ye take better advice to your noble courage.</p>
          <p>Wherefore I shall move to you of four notable things that the great God hath endowed you with before all other creatures that we know, which things ought to cause you to take a lord to your husband, to the end that the plenteous gifts of nature and grace may spring of you by generation, which may succeed by right line to reign upon us, to the great comfort and joy of all your people and subjects, and the contrary should turn to great sorrow and heaviness.</p>
          <p>Now, good uncle, said she, what be these four notable things that so ye repute in us? Madame, said he, the first is this, that we be ascertained that ye be come of the most noble blood in the world.</p>
          <p>The second, that ye be a great inheritor, and the greatest that liveth of woman to our knowledge.
          The third is, that ye in science, conning, and wisdom pass all other, and the fourth is, in bodily shape and beauty there is none like to you.</p>
          <p>Wherefore, madame, us think that these four notable things must needs constrain you to incline to our request.
          Then said this young Queen Catherine with a sad countenance: Now, uncle, sith God and nature have wrought so great virtues in us, we be so much more bound to love and to please him, and we thank him humbly of his great and large gifts.</p>
          <p>But sith ye desire so much that we should consent to be married, we let you plainly wit that like as ye have described us, so will we describe him that we will have to Catherine our lord and husband, and if ye can get such an one we will agree to take him with all our heart.</p>
          <p>For he that shall be lord of mine heart and mine husband shall have the four notable things in him over all measure; so farforthly that all creatures shall have need of him, and he needeth of none.</p>
          <p>And he that shall be my lord must be of so noble blood that all men shall do to him worship, and therewith so great a lord that I shall never think that I made him a king, and so rich that he pass all others in riches.</p>
          <p>And so full of beauty that angels have joy to behold him, and so pure that his mother be a virgin.</p>
          <p>And so meek and benign that he can gladly forgive all offences done unto him.</p>
          <p>Now I have described to you him that I will have and desire to my lord and to my husband, go ye and seek him, and if ye can find such an one, I will be his wife with all mine heart, if he vouchsafe to have me.</p>
          <p>And finally, but if ye find such an one I shall never take none, and take this for a final answer.</p>
          <p>And with this she cast down her eyes meekly and held her still.</p>
          <p>And when the queen her mother and the lords heard this, they made great sorrow and heaviness, for they saw well that there was no remedy in that matter.</p>
          <p>Then said her mother to her with an angry voice: Alas, daughter, is this your great wisdom that is talked so far? Much sorrow be ye like to do me and all yours.</p>
          <p>Alas! who saw ever woman forge to her such a husband with such virtues as ye do? For such one as ye have devised, there was never none, ne never shall be, and therefore, daughter, Ieave this folly, and do as your noble elders have done tofore you.</p>
          <p>And then said this young Queen Catherine unto her mother, with a piteous sighing: Madam, I wot well by very reason that there is one much better than I can devise him, and but be by his grace find me, I shall never have joy.</p>
          <p>For I feel by great reason that there is a way that we be clean out of, and we be in darkness, and till the light of grace come we may not see the clear way, and when it pleaseth him to come he shall avoid all darkness of the clouds of ignorance, and show him clearly to me whom my heart so fervently desireth and loveth.</p>
          <p>And if it so be that he list not that I find him, yet reason commandeth me to keep whole that is unhurt, wherefore I beseech you meekly, my lady mother, that ye ne none other move me more of this matter, for I promise you plainly that for to die therefore I shall never have other husband but only him that I have described, to whom I shall truly keep me with all the pure love of mine heart. And with this she arose, and her mother and all the lords of the parliament, with great sorrow and lamentation, and taking their leave, departed.</p>
          <p>And this noble young Catherine went to her palace, whose heart was set afire upon this husband that she had devised, that she could do nothing, but all her mind and intent was set on him, and continually mused how she might find him, but she could not find the means, how well he was nigh to her heart that she sought.</p>
          <p>For he had kindled a burning love which could never after be quenched for no pain ne tribulation, as it appeared in her passion.</p>
          <p>But now I leave this young queen in her contemplation, and shall say you as far as God will give me grace, how that our Lord by his special miracle, called her unto baptism in a special manner, such as hath not been heard of before ne sith, and also how she was visibly married to our Lord, in showing to her sovereign tokens of singular love.</p>
          <p>Then, beside Alexandria, a certain space of miles, dwelled a holy father, a hermit in desert named Adrian, which had served our Lord continually by the space of thirty years in great penance.</p>
          <p>And on a day as he walked before his cell being in his holy meditations, there came against him the most reverent lady that ever any earthly creature might behold, and when this holy man beheld her high estate and excellent beauty, which was above nature, he was sore abashed and so much astonished, that he fell down as he had been dead.</p>
          <p>Then this blessed lady, seeing this, called him by his name goodly and said: Brother Adrian, dread ye nothing, for I am come to you for your good honour and profit.</p>
          <p>And with that she took him up meekly, comforting him, and said in this wise: Adrian, ye must go in a message for me into the city of Alexandria, and to the palace of the queen Catherine, and say to her that the lady saluteth her whose son she hath chosen to her lord and husband, sitting in her parliament with her mother and lords about her, where she had a great confiict and battle to keep her virginity, and say to her that this same lord whom she chose is my son, that am a pure virgin, and he desireth her beauty and loveth her chastity among all the virgins on the earth.</p>
          <p>I command her, without tarrying, that she come with thee alone unto this palace, whereas she shall be new clothed, and then shall she see him, and have him to her everlasting spouse.</p>
          <p>Then Adrian hearing this said dreadfully in this wise: Ah! blessed lady, how shall I do this message? for I know not the city ne the way thither, and who am I, though I knew it, to do such a message to the queen? For her meiny will not suffer me to come to her presence, and though I come to her she will not believe me, but put me in duresse as I were a faitour.</p>
          <p>Adrian, said this blessed lady, dread ye not, for that my son hath begun in her must be performed, for she is a chosen vessel of special grace before all women that live, but go forth and ye shall find no letting, and enter into her chamber, for the angel of my lord shall lead you thither, and bring you both hither safely.</p>
          <p>Then he, meekly obeying, went forth into Alexandria and entered into the palace, and found doors and closures opening against him, and so passed from chamber to chamber till he came into her secret study, whereas none came but herself alone.</p>
          <p>And there he found her in her holy contemplation, and did to her his message like as ye have heard, according to his charge.</p>
          <p>And when this blessed virgin Catherine had heard his message and understood by certain tokens that he came for to fetch her to him whom she so fervently desired, anon she arose forgetting her estate and meiny, and followed this old man through her palace and the city of Alexandria, unknown of any person, and so into desert.</p>
          <p>In which way as they walked she demanded of him many a high question, and he answered to her sufficiently in all her demands and informed her in the faith, and she benignly received his doctrine.</p>
          <p>And as they thus went in the desert this holy man nad lost his way, and wist not where he was and was all confused in himself, and said secretly: Alas I fear me I am deceived, and that this be an illusion.</p>
          <p>Alas! shall this virgin here be perished among these wild beasts? Now blessed Iady, help me that almost am in despair, and save this maiden that hath forsa':en for your love all that she had, and hath obeyed your commandment.</p>
          <p>And as he thus sorrowed, the blessed virgin Catherine apperceived and demanded him what him ailed, and why he sorrowed, and he said: For you, because I cannot find my cell, ne wot not where I am.</p>
          <p>Father, said she, dread ye not, for trust ye verily, that that good lady which sent you for me, shall not suffer us to perish in this wilderness, and then she said to him: What monastery is yonder that I see, which is so rich and fair to behold? And he demanded of her where she saw it, and she said: Yonder in the east, and then he wiped his eyes and saw the most glorious monastery that ever he saw, whereof he was full of joy, and said to her: Now blessed be God that hath endowed you with so perfect faith, for there is that place wherein ye shall receive so great worship and joy, that there was never none like, save only our blessed Lady, Christ's own mother, queen of all queens.</p>
          <p>Now, good Father Adrian, hie you fast that we were there, for there is all my desire and joy.</p>
          <p>And soon after they approached that glorious place, and when they came to the gate, there met them a glorious company, all clothed in white and with chaplets of white lilies on their heads, whose beauty was so great and bright that the virgin Catherine ne the old man might not behold them, but all ravished fell down in great dread.</p>
          <p>Then one more excellent than another spake first, and said to this virgin: Catherine, stand up our dear sister, for ye be right welcome, and led her farther in till they came to the second gate where another more glorious company they came to the second gate where another more glorious company met her, all clothed in purple, with fresh chaplets of red roses on their heads.</p>
          <p>And the holy virgin seeing them, fell down for reverence and dread, and they, benignly comforting her, took her up and said to her: Dread ye nothing, our dear sister, for there was never none more heartily welcome to our sovereign lord than ye be, and to us all, for ye shall receive our clothing ard our crown with so great honour, that all saints shall joy in you; Come forth, for the Lord abideth desiring you.</p>
          <p>And then this blessed virgin Catherine with trembling joy passed forth with them, like as she that was ravished with so marvellous joy that she could not speak, and when she was entered into the body of the church she heard a melody of marvellous sweetness, which passed all hearts to think it, and there they beheld a royal queen standing in her estate with a great multitude of angels and saints, whose beauty and riches might no heart think, ne no pen write, for it exceedeth every man's mind.</p>
          <p>Then the noble company of martyrs with the fellowship of virgins, which led the virgin Catherine, fell down flat tofore this royal empress with sovereign reverence, saying in this wise: Our most sovereign Lady Queen of heaven, Lady of all the world, Empress of hell, Mother of Almighty God, King of bliss, to whose commandment obey all heavenly creatures and earthly, liketh it you that we here present to you our dear sister, whose name is written in the Book of Life, beseeching your benign grace to receive her as your daughter chosen and humble handmaid, for to accomplish the work which our blessed Lord hath begun in her. And with that our blessed Lady said: Bring ye my daughter and when the holy virgin heard our Lady speak, she was so much replenished with heavenly joy that she lay as she had been dead.</p>
          <p>Then the holy company took her up and brought her tofore our blessed Lady, to whom she said: My dear daughter ye be welcome to me, and ye be strong and of good comfort, for ye be specially chosen of my son to be honoured.</p>
          <p>Remember ye not how sitting in your parliament ye described to you a husband, whereas ye had a great conflict and battle in defending your chastity? And then this holy Catherine kneeling with most humble reverence and dread said: O most blessed Lady; blessed be ye among all women; I remember how I chose that Lord which then was full far from my knowledge, but now blessed Lady, by his mighty mercy and your special grace he hath opened the eyes of my blind conscience and ignorance, so that now I see the clear way of truth, and humbly beseech you most blessed Lady, that I may have him whom my heart loveth and desireth above all things, without whom I may not live.</p>
          <p>And with these words her spirits were so fast closed that she lay as she had been dead, and then our Lady in conforting her said: My dear daughter, it shall be as ye desire, but yet ye lack one thing that ye must receive ere ye come to the presence of my son; ye must be clothed with the sacrament of baptism, wherefore come on my daughter for all things are provided.</p>
          <p>For there was a font solemnly apparelled with all things requisite unto baptism.</p>
          <p>And then our blessed Lady called Adrian the old father to her and said: Brother, this office longeth to you for ye be a priest, therefore baptize ye my daughter but change not her name, for Catherine shall she be named and I shall be her godmother.</p>
          <p>And then this holy man Adrian baptized her, and after, our Lady said to her: Now mine own daughter be glad and joyful, for ye lack no thing that longeth to the wife of a heavenly spouse, and now I shall bring you to my Lord my son which abideth for you.</p>
          <p>And so our Lady led her forth unto the quire door whereas she saw our Saviour Jesu Christ with a great multitude of angels, whose beauty is impossible to be thought or written of earthly creature, of whose sight this blessed virgin was I fulfilled with so great sweetness that it cannot be expressed. To whom our blessed Lady benignly said: Most sovereign honour, joy and glory be to you, King of bliss, my Lord, my God and my son, Lo! I have brought here unto your blessed presence your humble servant and ancille Catherine, which for your love hath refused all earthly things, and hath at my sending obeyed to come hither, hoping and trusting to receive that I promised to her.</p>
          <p>Then our Blessed Lord took up, his mother and said: Mother, that which pleaseth you, pleaseth me, and your desire is mine, for I desire that she be knit to me by marriage among all the virgins of the earth.</p>
          <p>And said to her Catherine, come hither to me.</p>
          <p>And as soon as she heard him name her name, so great a sweetness entered into her soul that she was all ravished, and therewith our Lord gave to her a new strength which passed nature, and said to her: Come my spouse, and give to me your hand.</p>
          <p>And there our Lord espoused her in joining himself to her by spiritual marriage, promising ever to keep her in all her life in this world, and after this life to reign perpetually in his bliss, and in token of this set a ring on her finger, which he commanded her to keep in remembrance of this, and said: Dread ye not, my dear spouse, I shall not depart from you, but always comfort and strengthen you.</p>
          <p>Then said this new spouse: O blessed Lord, I thank you with all mine heart of all your great mercies, beseeching you to make me digne and worthy to be thy servant and handmaid, and to please you whom my heart loveth and desireth above all things.</p>
          <p>And thus this glorious marriage was made, whereof all the celestial court joyed and sang this verse in heaven: Sponsus amat sponsam, salvator visitat illam, with so great melody that no heart may express ne think it.</p>
          <p>This was a glorious and singular marriage to which was never none like before in earth, wherefore this glorious virgin, Catherine, ought to be honoured, lauded, and praised among all the virgins that ever were in earth.</p>
          <p>And then our blessed Lord, after this marriage, said unto the blessed Catherine: Now the time is come that I must depart into the place that I came from, wherefore what that ye will desire I am ready to grant to you, and after my departing ye must abide here with old Adrian ten days, till ye be perfectly informed in all my laws and will.</p>
          <p>And when ye shall be come home ye shall find your mother dead, but dread ye not, for ye were never missed there in all this time, for I have ordained there one in your stead, that all men ween it were yourself, and when ye come home, she that is there in your stead shall void.</p>
          <p>Now fare well, my dear spouse.</p>
          <p>And then she cried with a full piteous voice: Ah! my sovereign Lord God and all the joy of my soul, have ye ever mine on me.</p>
          <p>And with that he blessed her and vanished away from her sight.
          And then for sorrow of his departing she fell in a swoon so that she lay still a large hour without any life, and then was Adrian a sorry man, and cried upon her so long that at the last she came to herself and revived and lift up her eyes and saw nothing about her save an old cell, and the old man Adrian by her, weeping.</p>
          <p>For all the royalty was voided, both monastery and palace, and all the comfortable sights that she had seen, and specially he which was cause of all her joy and comfort; and then she sorrowed, l mourned, and wept unto the time that she saw the ring on her finger, and for joy thereof yet she swooned, and after she kissed it a thousand sithes with many a piteous tear, and then Adrian comforted her the best wise he could with many a blessed exhortation.</p>
          <p>And the blessed virgin Catherine took all his comforts and obeyed him as to her father, and dwelled with him the time that our Lord had assigned her till she was sufficiently taught all that was needful to her.</p>
          <p>And then she went home to her palace and governed her holily in converting many creatures to the christian faith of Jesu Christ, on whom all her joy was wholly set, and ever he was in her mind, and so dwelled still in her palace, never idle, but ever continued in the service of our Lord, full of charity, where awhile I let her dwell fulfilled of virtues and grace, as the dear and singular spouse of Almighty God.</p>
          <p>And then in this meantime Maxentius, that was then emperor, and vicious to God's law and cruel tyrant, considered the noble and royal city of Alexandria, and came thither and assembled all the people, rich and poor, for to make sacrifice to the idols, and the christian men that would not make sacrifice he let slay.</p>
          <p>And this holy virgin was at that time eighteen years of age, dwelling in her palace full of riches and of servants, alone, without parents and kin, and heard the braying and noise of beasts, and the joy that they made and sung, and marvelled what it might be, and sent one of her servants hastily to inquire what it was.</p>
          <p>And when she knew it, she took some of the people of her palace and garnished her with the sign oi the cross and went thither, and found there many christian men to be led to do sacrifice for fear of death.</p>
          <p>Then was she strongly troubled for sorrow, and went forth hardily to the emperor, and said in this wise: 　
          <span style="color: #e6a64d;">The dignity of thine order and the way of reason have moved me to salute thee, if thou know the creator and maker of heaven, and wouldst revoke thy courage from the worshipping of false gods.</span> 　
          And then she disputed of many things with Cæsar tofore the gates of the temple.</p>
          <p>And then she began to say: I have set my cure to say these things to thee as to a wise man, wherefore hast thou now assembled this multitude of people thus in vain for to adore the folly of the idols.</p>
          <p>Hast thou marvel of this temple that is made with man's hands? Wonderest thou on the precious ornaments which be as dust tofore the wind? Thou shouldst rather marvel thee of heaven, and of the earth, and of all the things that be therein, and of the sun, the moon, the stars, and of the planets that have been since the beginning of the world, and shall be as long as it shall please God; and marvel thee of the ornaments of heaven, that is to say, the sun, moon, stars, and planets, how they move from the orient to the occident and never be weary, and when thou shalt have knowledge of all these things, and hast apperceived it, demand after, who is most mightyof all, and when thou knowest him that is sovereign and maker of all things, to whom none is semblable ne like, then adore him and glorify, for he is God of gods, and Lord of lords.</p>
          <p>And when she had disputed of many things of the Incarnation of the Son of God much wisely, the emperor was much abashed and could not answer to her, but at the last when he was come to himself, he said to her: O thou woman, suffer us to finish our sacrifice, and after, we shall give thee an answer.
          Then commanded he that she should be led to his palace and to be kept with great diligence, and marvelled much of her great prudence and of her great beauty, for she was right fair to behold, unto the people.</p>
          <p>And after this the emperor came to the palace, and said to Catherine: We have heard thy fair speech and be marvellously abashed of thy wisdom, but we be so occupied in the sacrifices that we may not entend to understand all things. And we demand thee, first, of what lineage art thou? And the holy virgin Catherine said: Praise not thyself over much, ne blame thyself also, for so do fools that travail in vain glory.</p>
          <p>Nevertheless, I shall acknowledge to thee my lineage, not for any avaunting but by humility.</p>
          <p>I am Catherine, daughter of Costus the king, and howbeit that I was born in purple, and am informed in the arts liberal, yet have I despised all things and have given me wholly to our Lord Jesu Christ, and the gods that thou worshippest may not help thee ne none other.</p>
          <p>O ye cursed adorers of such gods, for when they be called in need they help not, in tribulation they succour not, and in perils they defend not.</p>
          <p>And the king said: If it be so as thou sayest, all the earth erreth and thou only sayest truth, and every word ought to be confirmed by the mouth of two or three witnesses.</p>
          <p>If thou wert an angel or a celestial virtue, yet thou oughtest not to be believed when thou art but one frail woman. To whom she said: O emperor, I beseech thee be not overcome with woodness, for in the courage of a wise man is no trouble, for the wise man saith: If thou governest thyself by good courage thou shalt be a king, and if thou governest thee otherwise thou shalt be a servant.</p>
          <p>And thou, as I see, ordainest to embrace us in thy mortal subtlety when thou labourest to draw us by the ensamples of the philosophers.</p>
          <p>And when the emperor saw that in no manner he could resist her wisdom, he sent secretly by letters for all the great grammarians and rhetoricians that they should come hastily to his pretorium to Alexandria, and he should give to them great gifts if they might surmount a maiden well bespoken.</p>
          <p>And then were there brought from divers provinces fifty masters which surmounted all mortal men in worldly wisdom.
          And then demanded they for what cause they were called from so far parts, and the emperor answered and said: We have a maiden, none comparable to her in wit and wisdom, which confoundeth all wise men, and she saith that our gods be devils, and if ye surmount them by honour I shall send you again into your country with joy.</p>
          <p>And one of them had hereof despite, and said by disdain: This is a worthy counsel of an emperor, that for one maid, young and frail, he hath done assemble so many sages, and from so far countries, and one of our clerks or scholars may overcome her.</p>
          <p>And the king said to them: I may well by strength constrain her to sacrifice, but I had liefer that she were overcome by your arguments.</p>
          <p>Then said they: Let her be brought tofore us, and when she shall be overcome by folly she may know that she never saw wise man.</p>
          <p>And when the virgin knew the strife of the disputation that she abode, she commended her all unto our Lord, and an angel came to her and said that she should keep her firmly for she should not be vanquished, but she should surmount them and send them to martyrdom.</p>
          <p>And when she was brought tofore the masters and orators she said to the emperor: What judgment is this to set fifty orators and masters against one maid, and to promise to them great rewards for their victory, and compellest me to dispute with them without hope of any reward? And God Jesu Christ, which is very guerdon of them that strive for him, shall be only with me, and he shall be my reward, for he is the hope and crown of them that fight for him.</p>
          <p>And when the masters had said that it was impossible that God was made man, ne that he had suffered death, the virgin showed to them that the paynims had said it tofore that he was made.</p>
          <p>For Plato said God to be all round and to be slain, and Sibyl said thus, that the ilke God should be blessed and happy that should hang on the cross.
          And when the virgin right wisely disputed with the masters, and that she had confounded their gods by open reasons, they were abashed and wist not what to say, but were all still.</p>
          <p>And the emperor was replenished with felony against them, and began to blame them because they were overcome so foully of one maid.</p>
          <p>And then one that was master above all the others said to the emperor: Know thou, sir emperor, that never was there any that might stand against us but that anon he was overcome.</p>
          <p>But this maid in whom the spirit of God speaketh hath so converted us that we cannot say anything against Jesu Christ, ne we may not, ne dare not.</p>
          <p>Wherefore, sir emperor, we acknowledge that but if thou mayest bring forth a more provable sentence of them that we have worshipped hitherto, that all we be converted to Jesu Christ.</p>
          <p>And when the tyrant heard this thing he was esprised with great woodness, and commanded that they all should be burnt in the midst of the city.</p>
          <p>And the holy virgin comforted them and made them constant to martyrdom, and informed them diligently in the faith, and because they doubted that they should die without baptism, the virgin said to them: Doubt ye nothing, for the effusion of your blood shall be reputed to you for baptism, and garnish you with the sign of the cross, and ye shall be crowned in heaven.</p>
          <p>And when they were cast into the flames of fire they rendered their souls unto God, and neither hair ne clothes of them had none harm ne were hurt by the fire.</p>
          <p>And when the christian men had buried them, the tyrant spake unto the virgin and said: Ah! right noble lady virgin, have pity of thy youth, and thou shalt be chief in my palace next the queen, and thine image shall be set up in the midst of the city, and shall be adored of all the people as a goddess.</p>
          <p>To whom the virgin said: Leave to say such things, for it is evil to think it.</p>
          <p>I am given and married to Jesu Christ, he is my spouse, he is my glory, he is my love, and he is my sweetness, there may no fair words ne no torments call me from him.</p>
          <p>And then he being full of woodness, commanded that she should be despoiled naked and beaten with scorpions, and so beaten to be put in a dark prison, and there was tormented by hunger by the space of twelve days.</p>
          <p>And the emperor went out of the country for certain causes, and the queen was esprised with great love of the virgin, and went by night to the prison with Porphyry, the prince of knights, and when the queen entered, she saw the prison shining by great clearness, and angels anointing the wounds of the holy virgin Catherine.</p>
          <p>And then St. Catherine began to preach to the queen the joys of Paradise and converted her to the faith, and said to her that she would receive the crown of martyrdom, and thus spake they together till midnight.</p>
          <p>And when Porphyry had heard all that she had said, he fell down to her feet and received the faith of Jesu Christ, with two hundred knights.</p>
          <p>And because the tyrant had commanded that she should be twelve days without meat and drink, Jesu Christ sent to her a white dove which fed her with meat celestial.</p>
          <p>And after this, Jesu Christ appeared to her with a great multitude of angels and virgins, and said to her: Daughter, know thy maker, for whom thou hast emprised this travailous battle; be thou constant, for I am with thee.</p>
          <p>And when the emperor was returned, he commanded her to be brought tofore him, and when he saw her so shining, whom he supposed to have been tormented bv great famine and fasting, and supposed that some had fed her in prison, he was fulfilled with fury and commanded to torment the keepers of the prison, and she said to him: Verily, I took never sith meat of man, but Jesu Christ hath fed me by his angel.</p>
          <p>I pray thee, said the emperor, set at thine heart this that I admonish thee, and answer not by doubtable words.</p>
          <p>We will not hold thee as a chamberer, but thou shalt triumph as a queen in my realm, in beauty enhanced.</p>
          <p>To whom the blessed virgin Catherine said: Understand, I pray thee, and judge truly, whom ought I better to choose of these two, or the king puissant, perdurable, glorious and fair, or one sick, unsteadfast, not noble, and foul? And then the emperor having disdain, and angry by felony, spake: Of these two choose thee one, or do sacrifice and live, or suffer divers torments and perish.</p>
          <p>And she said: Tarry not to do what torments thou wilt, for I desire to offer to God my blood and my flesh like as he offered for me; he is my God, my father, my friend and mine only spouse.</p>
          <p>And then a master warned and advised the king, being wood for anger, that he should make four wheels of iron, environed with sharp razors, cutting so that she might be horribly all detrenched and cut in that torment, so that he might fear the other christian people by ensample of that cruel torment.</p>
          <p>And then was ordained that two wheels should turn against the other two by great force, so that they should break all that should be between the wheels, and then the blessed virgin prayed our Lord that he would break these engines to the praising of his name, and for to convert the people that were there.</p>
          <p>And anon as this blessed virgin was set in this torment, the angel of our Lord brake the wheels by so great force that it slew four thousand paynims.</p>
          <p>And the queen, that beheld these things, came from above and had hid herself till then, descending anon and began to blame the emperor of so great cruelty, and then the king was replenished with woodness when he saw that the queen despised to do sacrifice, and did do first rend off her paps, and after smite off her head.</p>
          <p>And as she wasled unto martyrdom, she prayed Catherine to pray God for her, and she said to her: Ne doubt thee nothing, well-beloved of God; for this day thou shalt have the realm perdurable for this transitory realm, and an immortal spouse for a mortal.</p>
          <p>And she was constant and firm in the faith, and bade the tormentors do as was to them commanded.</p>
          <p>And then the sergeants brought her out of the city and erased off her paps with tongs of iron, and after smote off her head, whose body Porphyry took away and buried it.</p>
          <p>The next day following was demanded where the holy body of the queen was, and the emperor bade that many should be put to torment for to know where the body was.</p>
          <p>Porphyry came then tofore them all, and cried, saying: I am he that buried the body of the ancille and servant of Jesu Christ, and have received the faith of God.</p>
          <p>And then Maxentius began to roar and bray as a mad man, and cried, saying: O! wretched and caitiff, lo! Porphyry, which was the only keeper of my soul and comfort of all mine evils, is deceived; which thing he told to his knights, to whom they said: And we also be christian and be ready for to suffer death for Jesu Christ.</p>
          <p>And then the emperor, drunken in woodness, commanded that all should be beheaded and that their bodies should be cast to dogs, and then called he Catherine and said to her: Howbeit that thou hast made the queen for to die by thine art magic, if thou repent thee thou shalt be first and chief in my palace, for thou shalt this day do sacrifice or thou shalt lose thine head.</p>
          <p>And she said to him: Do all that thou hast thought; I am ready to suffer all.</p>
          <p>And then he gave sentence against her, and commanded to smite off her head.</p>
          <p>And when she was brought to the place ordained thereto, she lift up her eyes to heaven praying, and said: O ! Jesu Christ, hope of and help of them that believe in thee! O beauty and glory of virgins! Good king, I beseech and pray thee that whosomever shall remember my passion, be it at his death or in any other necessity, and call me, that he may have by thy mercy the effect of his request and prayer.</p>
          <p>And then came a voice to her, saying: Come unto me, my fair love and my spouse; lo! behold the gate of heaven is open to thee, and also to them that shall hallow thy passion, I promise the comfort of heaven of that they require.</p>
          <p>And when she was beheaded there issued out of her body milk instead of blood, and angels took the body and bare it unto the Mount of Sinai, more than twenty journeys from thence, and buried it there honourably, and continually oil runneth out of her bones which healeth all maladies and sicknesses, and she suffered death under Maxentius the tyrant, about the year of our Lord three hundred.</p>
          <p>How Maxentius was punished for this felony and for others, it is contained in the history of the invention of the holy cross, but forasmuch as it was not known long after where this holy body was become, there was great sorrow and lamentation among christian men, saying: Alas ! the most clear light of our faith, of wisdom, and the temple of the Holy Ghost, is gone from us, and besought God devoutly that it might please him to show to them this holy relic, which after came to knowledge in this manner.</p>
          <p>In the desert about the Mount of Sinai there were many christian hermits which were inflamed with great devotion toward this holy virgin St. Catherine, wherefore by common assent they ordained a chapel in which this holy virgin should specially remembered, which chapel was by the Mount of Sinai, not far from the hill, fast by the place whereas our Lord appeared in the bush to Moses.</p>
          <p>In which place the holy hermits lived in great abstinence and devotion a glorious life.</p>
          <p>To whom on a time the angel of God appeared and said: God hath beholden your effectual devotion from heaven, therefore he hath granted to you this grace that by you shall be found and known the holy body of the glorious virgin St. Catherine, to his sovereign honour and glory.</p>
          <p>And therefore arise ye up and follow me, and though it so be that ye see me not, yet the shadow of the palm that I bear in mine hand shall never depart from your sight.</p>
          <p>And then these hermits went forth and followed the angel till they came to the place where unnethe any creature might enter for straitness of the way and sharpness of the rocks; and when they came to the top of the hill they saw not the angel, but they saw evidently the shadow of the palm, that it seemed all the place had been shadowed by the leaves of the palm, by which they came unto the place where the body had lain one hundred and thirty years in a stone.</p>
          <p>And her flesh was dried up for length of time, but the bones were so compact and pure that they seemed to be kept by the cure of angels.</p>
          <p>Then they took up with great joy and reverence this holy body and bare it down into the chapel which they had made, and this was done by great miracle, for the place where she lay in was so steep, thick, strait, and so dangerous, that it seemed to man's reason impossible to come thereto.
          And these holy men, after they had brought this body with solemnity, ordained the feast of the invention of this holy body should be solemnised, which is yet there kept and is about the time of the Invention of the Holy Cross. Which place is greatly honoured, and our Lord showeth there many miracles, and out of the bones floweth out oil largely, by which many maladies be guerished.</p>
          <p>And it is said that tofore the body was found that a monk went to the Mount of Sinai and dwelled there by the space of seven years much devoutly in the service of St. Catherine, and on a time as he prayed with great devotion that he might have something of her body, suddenly there came a joint of one of her fingers of her hand, which gift he took joyfully of our Lord.</p>
          <p>It is read also that there was a man much devout to St. Catherine and oft called on her to his and, and by length of time he fell in foul thought, and lost the devotion that he had to the saint, and ceased to pray to her; and as he was on a time in prayer he saw a great multitude of virgins passing by him, among whom there was one more resplendissent than the other, and when she approached him she covered her visage and passed tofore him, her face covered.</p>
          <p>And he marvelled much of the beauty of her, and demanded what she was, and one of the virgins said that it was Catherine whom thou wert wont for to know, and because thou knowest ne rememberest her not, she passed tofore thee with face covered and without knowledge.</p>
          <p>It is to be noted that this blessed virgin St. Catherine seemeth and appeareth marvellous in five things: first, in wisdom, secondly, in eloquence, thirdly, in constancy, fourthly, in cleanness of chastity, and fifthly, in privilege of dignity.</p>
          <p>First she appeared marvellous in wisdom, in her was all manner of philosophy.</p>
          <p>Philosophy is divided in three, in theory, in practice, and in logic.</p>
          <p>Theory is divided in three, that is intellectual, natural, and mathematical.</p>
          <p>The blessed Catherine had science intellectual in knowledge of things divine, of which she used against the masters, to whom she proved to be but one very God only, and convanquished all the false gods.</p>
          <p>Secondly, she had science natural of which she used in disputing against the emperor.</p>
          <p>Thirdly, she had science mathematical, that is a science that be holdeth the forms and the manner of things, and this science had she in despising the earthly things, for she withdrew her heart from all earthly matter.</p>
          <p>She showed to have this science when she answered to the emperor, when he demanded who she was, and said: I am Catherine, daughter of king Costus, and how she had been nourished in purple.</p>
          <p>And hereof used she when she enharded the queen to despise the world and herself, and to desire the reign perdurable.
          The practice is divided in three manners, in ethic, economic, and politic.</p>
          <p>The first teacheth to inform manners and adorn him with virtues, and that appertaineth to all men.</p>
          <p>The second teacheth to rule and govern well his meiny, and that appertaineth to them that have men to govern.</p>
          <p>The third appertaineth to the governors of cities, for she teacheth to govern the peoples, the cities, and the commons.
          And these three sciences had the blessed Catherine.</p>
          <p>First, she had in herself all honesty of manners; secondly, she ruled her meiny laudably, which was left to her, thirdly, she informed wisely the emperor.</p>
          <p>Logic is divided in three, in demonstrative, in probable, and in sophistical.</p>
          <p>The first pertaineth to philosophers, the second to rhetors and logicians, and the third to sophisters, and these three sciences had Catherine in her, for she disputed with the emperor.</p>
          <p>Secondly, she was marvellous in eloquence, for she had fair speech in Catherine preaching as it appeared in her predications, she was right sharp in rendering reason, as when she answered to the emperor, she had sweet words in drawing the people to the faith, as it appeared in Porphyry and the queen, whom she drew to the christian faith by sweetness of her fair speech.</p>
          <p>She had right virtuous word in overcoming, as it appeared in the masters whom she vanquished so puissantly.</p>
          <p>Thirdly, she was marvellous in constancy, for she was most constant against the threatenings and menaces, for she despised them all and answered to the emperor: Tarry not to do the torments that thou hast purposed, for I desire to offer to God my blood, and make an end of that thou hast conceived in thy courage, I am ready to suffer all.</p>
          <p>Secondly, she was firm when great gifts were offered to her, for she refused all, and said to the emperor when he promised to hold her as second lady in his palace, and she said: I.eave to say such things, it is felonous to think it.</p>
          <p>Thirdly, she was constant in the torments that were done to her.</p>
          <p>Fourthly, she was constant in cleanness of chastity, for she kept chastity among those things that chastity is wont to perish.</p>
          <p>For there be five things in which chastity may perish, that is in pleasance of riches, convenable opportunity, flowering youth, freedom without constraint, and sovereign beauty.
          And among all these things the blessed Catherine kept her chastity, for she had great plenty of riches as she that was heir of rich parents; she had convenable leisure to do her will, as she that was lady of herself, and conversed all day among her servants which were young of age; she had freedom without any that governed her in her palace, and of these four it is said before, and she had beauty, so much that every man marvelled of her beauty.</p>
          <p>Fifthly, she was marvellous in privilege of dignity, for certain special privileges were in some saints when they died, like as:  </p>
          <ul>
          <li>the visitation of Jesu Christ was in St. John the Evangelist,</li>
          <li>the flowing of oil in St. Nicholas,</li>
          <li>the effusion of milk for blood that was in St. Paul,</li>
          <li>the preparation of the sepulchre that was in St. Clement,</li>
          <li>and the hearing and granting of the petitions that was in tS. Margaret, when she prayed for them remembering her memory.</p>
          <p>All these things together were in this blessed virgin St. Catherine as it appeareth in her legend.</p>
          <p>Then let us devoutly worship this holy virgin and humbly pray her to be our advocatrice in all our needs bodily and ghostly, that by the merits of her prayers we may after this short and transitory life come unto the everlasting bliss and joy in heaven whereas is life perdurable.</p>
          <p>Quod ipse præstare dignetur qui cum patre et spiritu sancto vivit et regnat deus per omnia secula seculorum.</p>



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