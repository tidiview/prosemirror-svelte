<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 16 -->

<article>

  <hgroup>
  <h2 id="mise-en-relation" class="yellow">différents textes à l'origine des scènes représentées dans le <cite><ruby style="color:#555;" lang="fr">Triptyque de Jean le Baptiste et de Jean l'Évangéliste<rp>(</rp><rt style="color:#999;" lang="nl">Triptiek van Johannes de Doper en Johannes de Evangelist</rt><rp>)</rp></ruby></cite></h2>
    <h3 id="cath-selon-legende" class="yellow"><cite>Légende de Catherine d'Alexandrie</cite> selon le chapître 166 de <cite>La Légende dorée</cite></h3>
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
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Catherine d'Alexandrie, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Catherine d'Alexandrie, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.jpg 1920w"></picture><figcaption>Catherine d'Alexandrie</figcaption>
    </figure>

      <h4>Texte du chapître 166 de <cite>La Légende dorée</cite>: <cite>Légende de Catherine d'Alexandrie</cite></h4>

        <p>Catherine, fille du roi Costus, fut instruite en tous les <a href="#note_artsliberaux" title="les sept arts libéraux" id="artsliberaux" class="yellow">arts libéraux</a>.</p>
        <p>Un jour, l'empereur <a href="#note_maxentius" title="Maxence" id="maxentius" class="yello">Maxence</a> convoqua à Alexandrie tous les habitants, aussi bien les riches que les pauvres, afin qu'ils pratiquent l'immolation aux idoles et pour pouvoirainsi punir les chrétiens qui refuseraient d'immoler.</p>
        <p>Catherine, âgée de dix-huit ans, qui se trouvait seule dans un palais rempli de richesses et d'esclaves, entendit le mugissement de divers animaux et les chants de jubilation.
        Elle ordonna à un messager d'aller promptement s'informer de ce qui se passait.</p>
        <p>Quand elle l'eut appris, elle s'entoura de quelques personnes, se protégea par un signe de croix, sortit du palais et s'approcha.</p>
        <p>Là, elle vit de nombreux chrétiens poussés à sacrifier par crainte de la mort.</p>
        <p>Frappée au cœur par une forte douleur, elle s'avança avec audace vers l'empereur et lui dit:</p>
        <p class="conversation"><span style="color: #df8f20;">— La dignité de ton ordre et la voie de la raison me conseilleraient de te présenter mes salutations, si tu reconnaissais le Créateur des cieux et si tu détournais ton esprit des dieux.</span></p>
        <p>Et, debout devant la porte du temple, elle disputa longuement avec l'empereur, en utilisant les diverses démonstrations des syllogismes, en utilisant l'allégorie, la métonymie, en parlant de claire et mystique façon.</p>
        <p>Ensuite, revenant au langage commun, elle dit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Je me suis efforcée de m'adresser à toi comme à un savant.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Pourquoi donc as-tu rassemblé en vain cette foule en vue l'honorer la stupidité des idoles?</span></p>
        <p class="conversation"><span style="color: #df8f20;">Tu admires ce temple fait de la main des artisans, tu admires des ornements précieux qui seront comme de la poussière face au vent.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Admire plutôt le ciel et la terre, la mer et tout ce qu'elle contient.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Admire les ornements des cieux: le soleil, la lune et les étoiles.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Admire leur docilité: depuis le commencement du monde jusqu'à sa fin, ils courent nuit et jour vers l'Occident, pour revenir, infatigablement, vers l'Orient.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Et quand tu auras observé tout cela, interroge-toi et apprends qui est plus puissant qu'eux.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Quand tu auras compris, par le don de sa grâce, de qui il s'agit, et que tu ne pourras trouver personne qui lui soit analogue, alors, adore-le, glorifie-le, car il est le Dieu des dieux, le Seigneur des dominateurs.</span></p>
        <p>Et quand elle eut savamment et longuement disputé de <a href="#note_incarnation" title="l'Incarnation" id="incarnation" class="yellow">l’Incarnation du Fils</a>, l'empereur, stupéfié, ne sut que répondre.</p>
        <p>Enfin, il revint à lui et lui dit:</p>
        <p class="conversation"><span style="color: #b3884d;">— Femme, laisse-nous achever le sacrifice et ensuite, nous te rendrons réponse.</span></p>
        <p>Il ordonna alors de l'emmener visiter le palais et de la recevoir avec le plus grand soin, parce qu'il admirait beaucoup sa sagesse et la beauté de son corps.</p>
        <p>En effet, elle était très jolie et, par sa beauté incroyable, elle paraissait admirable aux yeux de tous.</p>
        <p>L'empereur revint au palais et dit à Catherine:</p>
        <p class="conversation"><span style="color: #b3884d;">— Nous avons entendu ton éloquence et admiré ta sagesse,</span></p>
        <p class="conversation"><span style="color: #b3884d;">mais, occupés à sacrifier aux dieux, nous n'avons pu comprendre pleinement toutes tes paroles.</span></p>
        <p class="conversation"><span style="color: #b3884d;">Maintenant, pour reprendre au début, nous te demandons de quelle famille tu viens.</span></p>
        <p>La sainte répondit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Il est écrit: “Ne te vante pas, ni ne te méprise toi-même.”</span></p>
        <p class="conversation"><span style="color: #df8f20;">C'est ce que font les sots que tourmente la vaine gloire.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Cependant je déclare mon origine familiale, poussée non par l'enflure de la vanité, mais par l'amour de la vérité.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Je suis Catherine, fille du roi Costus; bien que née dans la pourpre et assez bien instruite dans les savoirs libéraux, pourtant j'ai méprisé tout cela pour me réfugier auprès du Seigneur Jésus-Christ.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Les dieux que tu honores ne peuvent t'aider ni toi, ni les autres.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Ils sont bien malheureux, les adorateurs de telles divinités qui, appelées en cas de nécessité, font défaut, qui n'apportent aucun secours dans les tourments, qui ne procurent aucune défense au milieu des périls!</span></p>
        <p>Le roi lui répondit:</p>
        <p class="conversation"><span style="color: #b3884d;">— S'il en est comme tu le dis, alors le monde entier est dans l'erreur et tu es la seule à dire vrai, alors que toute parole doit être confirmée par la bouche de deux ou trois témoins.</span></p>
        <p class="conversation"><span style="color: #b3884d;">Même si tu étais un ange, même si tu étais une vertu céleste, personne n'aurait alors l'obligation de te croire.</span></p>
        <p class="conversation"><span style="color: #b3884d;">Et on doit te croire d'autant moins que tu te trouves être une fragile femme.</span></p>
        <p>Elle rétorqua:</p>
        <p class="conversation"><span style="color: #df8f20;">— Je t'en conjure, empereur, ne te laisse pas vaincre par ta fureur.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Un funeste trouble ne doit pas envahir l'âme du sage.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Et comme le poète le dit: “Si tu gouvernes par l'esprit, tu es un roi; si tu gouvernes par le corps, tu es un esclave.”</span></p>
        <p>L'empereur dit alors:</p>
        <p class="conversation"><span style="color: #b3884d;">— À ce que je vois, tu t'apprêtes à nous embobiner par ton astuce pernicieuse, en t'efforçant de faire ces longs discours appuyés sur les exemples des philosophes.</span></p>
        <p>Mais l'empereur, constatant qu'il ne pourrait trouver de parade à sa sagesse, s'empressa de convoquer secrètement par lettres au prétoire d'Alexandrie tous les grammairiens et rhéteurs: ils obtiendraient d'immenses récompenses s'ils triomphaient par leurs raisonnements de la vierge argumentatrice.</p>
        <p>On amena donc, de diverses provinces, cinquante orateurs,
        qui l'emportaient sur tous les mortels en toute science de ce monde.</p>
        <p>Quand ils demandèrent pourquoi ils avaient été appelés de lieux aussi éloignés,
        l'empereur leur dit:</p>
        <p class="conversation"><span style="color: #b3884d;">— Il y a auprès de nous une jeune fille incomparable de bon sens et de sagesse, qui réfute tous les savants et affirme que nos dieux sont des démons.</span></p>
        <p class="conversation"><span style="color: #b3884d;">Si vous arrivez à l'emporter sur elle, vous rentrerez chez vous avec de grands honneurs.</span></p>
        <p>En entendant cela, l'un d'eux, indigné, répondit d'une voix pleine de colère:</p>
        <p class="conversation"><span style="color: #165493;">— Belle décision pour un empereur!</span></p>
        <p class="conversation"><span style="color: #165493;">Pour un différend avec une seule jeune fille, il a fait venir de pays lointains les savants de ce monde, alors qu'un seul de nos jeunes élèves pourrait très aisément la confondre!</span></p>
        <p>Le roi répondit:</p>
        <p class="conversation"><span style="color: #b3884d;">— Je pouvais certes la contraindre par la force à sacrifier,</span></p>
        <p class="conversation"><span style="color: #b3884d;">mais j'ai jugé meilleur de la confondre totalement à l'aide de vos arguments.</span></p>
        <p>Alors les autres lui dirent:</p>
        <p class="conversation"><span style="color: #165493;">— Qu'on nous amène cette jeune fille et que, convaincue de sa témérité, elle reconnaisse qu'elle n'avait pas encore rencontré de savants.</span></p>
        <p>Mais cette vierge, quand elle eut pris connaissance de la dispute à venir, se recommanda tout entière à Dieu;
        et voici qu'un ange du Seigneur apparut et lui conseilla de résister avec constance, en affirmant que non seulement elle ne pourrait pas être vaincue par ses adversaires, mais qu'en outre, elle les convertirait et les guiderait vers la palme du martyre.</p>
        <p>Alors, quand elle fut conduite devant les orateurs, elle dit à l'empereur:</p>
        <p class="conversation"><span style="color: #df8f20;">— Par quelle décision peux-tu placer une seule jeune fille devant cinquante orateurs à qui, en outre, tu as promis salaire en cas de victoire, alors que tu m'obliges à combattre sans espoir de récompense?</span></p>
        <p class="conversation"><span style="color: #df8f20;">Pourtant, ma récompense sera le Seigneur Jésus-Christ, qui est l'espérance et la couronne de ceux qui combattent pour lui.</span></p>
        <p>Mais quand les orateurs dirent qu'il était impossible que Dieu se fasse homme et qu'il souffre, la vierge montra que la chose avait été predite même par les païens:</p>
        <p class="conversation"><span style="color: #df8f20;">— En effet Platon a affirmé que Dieu était une figure circulaire coupée par une sécante. La <a href="#note_sybille" title="la Sibylle" id="sybille" class="yellow">Sibylle</a> a dit aussi: “Heureux est ce Dieu suspendu à du bois”.</span></p>
        <p>La vierge disputa donc avec beaucoup de sagesse contre les orateurs et confondit les dieux par des raisons évidentes; les orateurs en furent stupéfiés et, ne trouvant quoi répondre, ils devinrent totalement muets.</p>
        <p>Alors l'empereur, rempli d'une grande colère à leur egard, commença à leur adresser des reproches: pourquoi se laissaient-ils si honteusement vaincre par une seule jeune fille!</p>
        <p>Alors l'un d'eux, qui était leur maître dit:</p>
        <p class="conversation"><span style="color: #165493;">— Tu sais, empereur, que jamais personne n'a pu paraître devant nous sans être immédiatement vaincu.</span></p>
        <p class="conversation"><span style="color: #165493;">Mais cette jeune fille, en qui parle l'Esprit de Dieu, nous a frappés d'admiration, au point que dire quoi que ce soit contre le Christ est pour nous une tâche tout à fait impossible ou très redoutable.</span></p>
        <p class="conversation"><span style="color: #165493;">C'est pourquoi nous déclarons fermement, empereur, qu'à moins que tu ne produises une argumentation plus convaincante sur les dieux que nous avons honorés jusqu'à présent, nous nous convertissons tous au Christ.</span></p>
        <p>À ces mots le tyran, enflammé par une violente colère, ordonna de les faire tous brûler au milieu de la cité.</p>
        <p>La vierge les réconforta, leur donna de la constance pour le martyre et les instruisit soigneusement dans la foi.</p>
        <p>Et quand ils se lamentèrent de mourir sans baptême, la vierge leur répondit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Ne craignez rien, car le sang répandu vous sera compté comme baptême et comme couronne.</span></p>
        <p>Après qu'ils se furent protégés par le signe de croix, ils furent jetés dans les flammes et ils rendirent leur âme au Seigneur,
        sans que leurs cheveux ni leurs vêtements fussent aucunement atteints par le feu...</p>
        <p>Quand ils eurent été ensevelis par les chrétiens, le tyran dit à la vierge:</p>
        <p class="conversation"><span style="color: #b3884d;">— Généreuse vierge, pense à ta jeunesse et tu recevras le second rang après la reine dans mon palais et, grâce à une statue de toi érigée au milieu de la cité, tu seras adorée par tous comme une déesse.</span></p>
        <p>Elle dit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Cesse de tenir de tels propos, qu'il est criminel de simplement envisager par la pensée.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Je me suis donnée comme <a href="#note_fiancee" title="Je le déclare, je suis une femme qui a dédié son corps comme fiancée au Christ" id="fiancee" class="yellow">épouse au Christ</a>.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Il est ma gloire, il est mon amour, il est ma douceur et mon affection.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Ni les caresses ni les tourments ne pourront m'éloigner de l'amour que j'ai pour lui.</span></p>
        <p>Alors, rempli de fureur, l'empereur ordonna qu'elle soit dévêtue, frappée à coups de croc de fer,
        et, une fois déchirée, jetée dans une prison obscure pour y être torturée par la faim durant douze jours.</p>
        <p>Le roi, pour certaines affaires urgentes, dut quitter la région.</p>
        <p>La reine, vivement éprise du général des armées, nommé Porphyre, se rendit vers minuit dans la prison de la vierge.</p>
        <p>Quand elle y entra, elle vit que la prison resplendissait d'une incroyable clarté et que des anges pansaient les blessures de la vierge.</p>
        <p>La vierge commença à lui prêcher les joies éternelles, la convertit à la foi et lui prédit la couronne du martyre et ainsi, ils poursuivirent leur entretien jusqu'au milieu de la nuit.</p>
        <p>Porphyre, qui avait entendu tout cela, se jeta aux pieds de la vierge et reçut la foi en même temps que deux cents soldats.</p>
        <p>Et, comme le tyran avait ordonné qu'elle soit laissée sans nourriture durant douze jours,
        le Christ, pendant tout ce temps, envoyant du ciel une colombe blanche, la nourrissait d'un aliment céleste.</p>
        <p>Puis le Seigneur lui apparut au milieu d'une foule d'anges et de vierges et lui dit:</p>
        <p class="conversation"><span style="color: #7070c2;">— Reconnais, ma fille, ton Créateur pour le nom de qui tu as subi un dur combat.</span></p>
        <p class="conversation"><span style="color: #7070c2;">Sois constante, car je suis avec toi.</span></p>
        <p>À son retour, l'empereur se la fit amener
        et constata aussi qu'elle était tout aussi florissante qu'il pensait la trouver exténuée par un tel jeûne.</p>
        <p>Il crut donc que quelqu'un l'avait nourrie en prison et, rempli de fureur, il fit torturer les gardiens.</p>
        <p>Mais Catherine lui dit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Je n'ai pas reçu de nourriture de main d'homme: c'est le Christ qui m'a nourrie par l'intermédiaire de son ange.</span></p>
        <p>L'empereur dit alors:</p>
        <p class="conversation"><span style="color: #b3884d;">— Recueille en ton cœur, je t'en prie, mes conseils et ne réponds pas par des paroles ambiguës.</span></p>
        <p class="conversation"><span style="color: #b3884d;">Nous ne désirons pas t'avoir comme esclave: reine puissante et choisie pour ta beauté, tu triompheras en mon royaume.</span></p>
        <p>La vierge rétorqua:</p>
        <p class="conversation"><span style="color: #df8f20;">— Fais attention, toi aussi, je t'en supplie, et après un jugement délibéré, au terme d'une décision véridique, décide qui je dois choisir: un être puissant, éternel, glorieux et beau, ou bien un être faible, mortel, bas et laid.</span></p>
        <p>Alors, l'empereur, indigné, lui dit:</p>
        <p class="conversation"><span style="color: #b3884d;">— Choisis, pour ton sort, de deux choses l'une: ou de sacrifier pour vivre, ou de subir des tourments raffinés pour périr.</span></p>
        <p>Catherine lui répondit: </p>
        <p class="conversation"><span style="color: #df8f20;">— Quels que soient les tourments que tu peux imaginer, ne les diffère pas, car je veux offrir ma chair et mon sang au Christ, comme il s'est offert pour moi. Car il est mon Dieu, mon amour, mon berger et mon époux unique.</span></p>
        <p>Alors un préfet conseilla au roi furieux de faire préparer dans les trois jours quatre roues entourées de scies de fer et de clous très pointus, en sorte que ce terrible supplice découpe la vierge et que l'exemple de cette mort atroce effraye les autres chrétiens.</p>
        <p>Les dispositions suivantes furent prises:
        deux roues tournaient dans un sens et deux autres dans un sens contraire,
        celles de dessous tiraient en déchirant et celles de dessus, qui s'opposaient à ce mouvement, repoussaient en broyant.</p>
        <p>Alors la sainte vierge pria le Seigneur de détruire cette machine pour l'exaltation de son propre nom et pour la conversion du peuple qui l'entourait.</p>
        <p>Et voilà qu'un ange du Seigneur frappa et brisa cette meule avec tant de force qu'il tua quatre mille païens.</p>
        <p>La reine, qui regardait la scène d'un lieu élevé et qui, jusque-là, s'était cachée, descendit aussitôt et reprocha très durement à l'empereur cette si grande cruauté.</p>
        <p>Mais le roi, rempli de fureur, après qu'elle eut refusé avec hauteur de sacrifier, lui fit arracher les seins, puis trancher la tête.</p>
        <p>Conduite au martyre, elle demanda à Catherine de prier le Seigneur pour elle.</p>
        <p>La sainte répondit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Ne crains rien, reine aimée de Dieu, car aujourd'hui, tu obtiendras le royaume éternel en échange d'un royaume transitoire, et, à la place d'un époux mortel, tu en obtiendras un immortel.</span></p>
        <p>Alors la reine, affermie,
        demanda aux tortionnaires de ne pas différer ce qui leur avait été ordonné.</p>
        <p>Ces serviteurs la conduisirent hors de la cité, lui arrachèrent les seins avec des fers de lance et, ensuite, lui coupèrent la tête.</p>
        <p>Porphyre prit son corps et l'ensevelit.</p>
        <p>Le lendemain, comme on cherchait le corps de la reine
        et que le tyran faisait traîner au supplice beaucoup de gens à cause de cette disparition, Porphyre s'avança tout à coup au milieu de la place
        et s'écria:</p>
        <p class="conversation"><span style="color: #93836c;">— C'est moi qui ai enseveli la servante du Christ, qui m'a donné foi dans le Christ.</span></p>
        <p>Alors Maxence, rendu fou, poussa un rugissement terrible et s'écria:</p>
        <p class="conversation"><span style="color: #b3884d;">— Ah, que je suis malheureux et digne de pitié!</span></p>
        <p class="conversation"><span style="color: #b3884d;">Voilà que Porphyre, qui était l'unique gardien de mon âme et la consolation de toutes mes peines, m'a trahi!</span></p>
        <p>Et, quand il rapporta cela à ses soldats, ces derniers répondirent aussitôt:</p>
        <p class="conversation"><span style="color: #936c93;">— Nous aussi, nous sommes chrétiens et nous sommes prêts à mourir.</span></p>
        <p>Alors l'empereur, ivre de fureur, ordonna que tous soient décapités en compagnie de Porphyre et que leurs corps soient jetés aux chiens.</p>
        <p>Ensuite, il fit appeler Catherine et lui dit:</p>
        <p class="conversation"><span style="color: #b3884d;">— Bien que tu aies fait mourir la reine par ton art de la magie, pourtant, si tu te repens, tu seras la première dans mon palais.</span></p>
        <p class="conversation"><span style="color: #b3884d;">Aujourd'hui donc, ou bien tu offriras des sacrifices aux dieux, ou bien tu perdras ta tête.</span></p>
        <p>Elle répondit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Fais tout ce que tu as décidé, car tu me trouveras prête à tout subir.</span></p>
        <p>Il donna alors sa sentence sur le sort de Catherine et ordonna qu'elle soit décapitée.</p>
        <p>Quand elle fut conduite sur le lieu d'exécution, elle leva les yeux vers le ciel et fit cette prière:</p>
        <p class="conversation"><span style="color: #df8f20;">— Ô toi, espérance et salut des croyants, toi, beauté et gloire des vierges, Jésus, bon roi, je t'en supplie: que tous ceux qui garderont mémoire de ma passion et m'invoqueront, soit au moment du départ de leur âme, soit en cas de nécessité, obtiennent l'effet de ta protection.</span></p>
        <p>Une voix se fit entendre qui lui disait:</p>
        <p class="conversation"><span style="color: #6c936c;">— Viens, ma bien-aimée, ma belle!</span></p>
        <p class="conversation"><span style="color: #6c936c;">Voilà: la porte du ciel t’est ouverte.</span></p>
        <p class="conversation"><span style="color: #6c936c;">Et, en effet, à ceux qui auront célébré ta passion, je promets, du ciel, les secours demandés.</span></p>
        <p>Puis, quand elle fut décapitée,
        en guise de sang, du lait sortit de son corps.</p>
        <p>Alors des anges prirent son corps, <a href="#note_sinai" title="l'emportèrent jusqu'au mont Sinaï et l'ensevelirent là" id="note_sinai" class="yellow">l'emportèrent</a> depuis ce lieu <a href="#note_sinai" title="l'emportèrent jusqu'au mont Sinaï et l'ensevelirent là" class="yello">jusqu'au mont Sinaï</a>, à plus de vingt journées de voyage, et <a href="#note_sinai" title="l'emportèrent jusqu'au mont Sinaï et l'ensevelirent là" class="yllow">l'ensevelirent là</a> avec beaucoup d'honneurs.</p>
        <p>De ses ossements s'écoule sans cesse de l'huile qui guérit les corps de tous les malades.</p>
        <p>Elle souffrit sous le tyran Maxence ou <a href="#note_maximinus" title="Maximin" id="maximinus" class="yellow">Maximin</a>, qui commença à régner vers <time datetime="310">l'an du Seigneur 310</time>.</p>
        <p>On peut trouver dans le récit sur l'Inventin de la Croix la façon dont Maxence fut puni pour ce crime et pour les autres qu'il avait commis.</p>
        <p>On rapporte qu'un moine de <a href="#note_rouen" title="Rothomagus" id="rouen" class="yellow">Rothomagus</a> se rendit au mont Sinaï et qu'il demeura là pendant sept ans en se vouant au service de <span style="color: #df8f20;">sainte Catherine</span>.</p>
        <p>Comme il lui demandait avec beaucoup d'ardeur de mériter de posséder quelque fragment de son corps, aussitôt une phalange se détacha d'un de ses doigts.</p>
        <p>Tout heureux, il reçut ce don de Dieu et l'emporta vers son monastère.</p>
        <p>On raconte aussi qu'un homme s'était voué à <span style="color: #df8f20;">sainte Catherine</span> et l'invoquait souvent pour être secouru;
        mais, avec le cours du temps, il se relâcha par négligence, perdit sa dévotion d'esprit et cessa de l'invoquer.</p>
        <p>Un jour qu'il était en prière, il vit passer devant lui une foule de vierges, dont l'une paraissait plus resplendissante que les autres.</p>
        <p>Mais quand elle approcha de lui, elle se cacha le visage et, ainsi joilée, passa devant lui.</p>
        <p>Comme il admirait fort son éclat
        et demandait qui elle était, l'une des vierges lui répondit:</p>
        <p><span style="color: #577575;">«C'est Catherine, que tu connaissais bien jadis;
        elle est passée devant toi avec la face voilée, parce qu'elle t'était désormais inconnue.»</span></p>
        <p>Il faut relever que <span style="color: #df8f20;">sainte Catherine</span> manifeste son caractère admirable par cinq qualités:
        <span style="color: #936c93;">la sagesse</span>, <span style="color: #936c93;">l'éloquence</span>, <span style="color: #936c93;">la constance</span>, <span style="color: #936c93;">la pureté de sa chasteté</span>, <span style="color: #936c93;">le privilège de sa dignité</span>.</p>
        <p>En <span style="color: #936c93;">premier lieu</span>, elle manifeste son caractère admirable par sa <span style="color: #936c93;">sagesse</span>.</p>
        <p>En elle, en effet, on trouve toutes les sortes de philosophie.
        Car la philosophie ou sagesse se divise en <span style="color: #6c8993;">philosophies théorique</span>, <span style="color: #6c8993;">pratique</span> et <span style="color: #6c8993;">logique</span>.</p>
        <p>Pour certains, la <span style="color: #6c8993;">philosophie théorique</span> se divise en <span style="color: #93896c;">trois philosophies</span>: <span style="color: #93896c;">intellectuelle</span>, <span style="color: #93896c;">naturelle</span> et <span style="color: #93896c;">mathématique</span>.</p>
        <p><span style="color: #df8f20;">Sainte Catherine</span> a joui de <span style="color: #93896c;">la sagesse intellectuelle dans la connaissance des choses divines</span>,
        dont elle fit usage surtout dans la dispute contre les rhéteurs, leur prouvant qu'il n'existait qu'un seul Dieu véritable,
        et les convainquant que les autres dieux étaient de faux dieux.</p>
        <p>Deuxièmement, elle a joui de <span style="color: #93896c;">la sagesse naturelle dans la connaissance de tous les êtres inférieurs</span>, dont elle fit usage dans la dispute contre l'empereur, comme on l'a vu au même lieu.</p>
        <p>Troisièmement, elle a joui de <span style="color: #936c93;">la sagesse mathématique</span>, en méprisant les choses terrestres, car, selon <a href="#note_boece" title="Boèce" id="boece" class="yellow">Boèce</a>, cette science considère les formes sans la matière.</p>
        <p><span style="color: #df8f20;">Sainte Catherine</span> a oui de cette science quand elle a tiré son esprit de tout attachement matériel.</p>
        <p>Elle a manifesté la possession de cette sagesse quand elle a répondu à l'empereur qui l'interrogeait:</p>
        <p><span style="color: #577575;">«Je suis Catherine, fille du roi Costus;
        bien que née dans la pourpre, etc.»</span></p>
        <p>Elle a surtout usé de cette sagesse avec la reine,
        qu'elle a poussée au rejet du monde, au mépris de soi et au désir du Royaume.  </p>
        <p>La <span style="color: #93896c;">philosophie pratique</span> se divise en trois:
        les <span style="color: #93896c;">philosophies éthique</span>, <span style="color: #93896c;">économique</span> et <span style="color: #93896c;">publique ou politique</span>.
        La première enseigne comment réformer ses mœurs, s'orner de vertus, et elle s'adresse à tous.</p>
        <p>La deuxième enseigne la bonne direction de la famille et s'adresse aux pères de famille.</p>
        <p>La troisième apprend à bien gouverner les villes, les peuples et l'État.</p>
        <p><span style="color: #df8f20;">Sainte Catherine</span> a joui aussi de cette triple science:
        elle a joui de la première quand elle a su se conduire avec toute l'honnêteté possible de ses mœurs.</p>
        <p>Elle a joui de la deuxième quand elle a dirigé de louable façon la maison nombreuse qui lui avait été laissée.</p>
        <p>Elle a joui de la troisième quand elle a donné un sage enseignement à l'empereur.</p>
        <p>La <span style="color: #93896c;">philosophie logique</span> se divise en trois:
        les <span style="color: #93896c;">logiques démonstrative</span>, <span style="color: #93896c;">rhétorique</span> et <span style="color: #93896c;">sophistique</span>.</p>
        <p>La première s'adresse aux philosophes, la deuxième aux rhéteurs et dialecticiens, la troisième aux sophistes.
        Elle semble avoir joui de cette triple science,
        puisqu'on dit d'elle:</p>
        <p><span style="color: #577575;">Elle disputa longuement avec l'empereur, en utilisant les diverses démonstrations des syllogismes, en utilisant l'allégorie, la métonymie, en parlant de claire et mystique façon.»</span></p>
        <p>En <span style="color: #936c93;">deuxième lieu</span>, elle fut admirable d'<span style="color: #936c93;">éloquence</span>.</p>
        <p>Elle a joui, en effet, d'une éloquence qui était très abondante dans la prédication,
        comme on le voit dans ses sermons, très claire dans la démonstration rationnelle,
        comme on le voit dans ses paroles à l'empereur:</p>
        <p>«Tu admires ce temple fait de la main des artisans, etc.»</p>
        <p>Son éloquence fut aussi très douce dans la persuasion,
        comme le montre son action sur Porphyre et sur la reine,
        qu'elle attira vers la foi par la douceur de son discours,
        et très efficace dans la conviction,
        comme le montre son action sur les rhéteurs,
        qu'elle sut si puissamment convaincre.</p>
        <p>En <span style="color: #936c93;">troisième lieu</span>, elle fut admirable de <span style="color: #936c93;">constance</span>.</p>
        <p>Elle se montra en effet très constante devant les menaces,
        puisqu'elle les méprisa, en répondant ainsi à l'empereur qui la menaçait:</p>
        <p><span style="color: #577575;">«Quels que soient les tourments que tu peux imaginer,
        ne les diffère pas,
        car je veux offrir ma chair et mon sang au Christ»</span>,</p>
        <p>et</p>
        <p><span style="color: #577575;">«Fais tout ce que tu as décidé,
        car tu me trouveras prête à tout subir»</span>.</p>
        <p>Deuxièmement, elle rejeta les dons qu'on lui faisait
        et quand l'empereur lui promit qu'elle tiendrait le second rang au palais,
        elle répondit:</p>
        <p><span style="color: #577575;">«Cesse de tenir de tels propos,
        qu'il est criminel de simplement envisager par la pensée, etc.»</span></p>
        <p>Troisièmement, elle surmonta les supplices infligés,
        comme on l'a vu quand elle fut placée en prison, puis sur la roue.</p>
        <p>En <span style="color: #936c93;">quatrième lieu</span>, elle fut admirable par la <span style="color: #936c93;">pureté de sa chasteté</span>.</p>
        <p>En effet, elle conserva sa chasteté en des circonstances où, d'habitude, la chasteté faiblit.</p>
        <p>Il y a en effet cinq circonstances
        où la chasteté faiblit: </p>
        <ul>
        <li><span style="color: #93896c;">l'abondance qui amollit</span>, </li>
        <li><span style="color: #93896c;">l'occasion qui suggère</span>, </li>
        <li><span style="color: #93896c;">la jeunesse qui enflamme</span>, </li>
        <li><span style="color: #93896c;">la liberté qui relâche</span>, </li>
        <li><span style="color: #93896c;">la beauté qui provoque</span>.  </li>
        </ul>
        <p>Or, en ces cinq circonstances, <span style="color: #df8f20;">sainte Catherine</span> conserva sa chasteté.  </p>
        <ul>
        <li>En effet en ayant hérité de parents aussi riches, elle jouissait d'une très grande abondance.  </li>
        <li>Maîtresse d'elle-même et vivant tout le jour parmi ses serviteurs, elle jouissait d'occasions.  </li>
        <li>Elle jouissait aussi de sa jeunesse et de sa liberté, </li>
        <li>car elle demeurait seule et libre dans son palais.</li>
        </ul>
        <p>Sur ces quatre circonstances, il a été dit, plus haut:</p>
        <p>«Catherine, âgée de dix-huit ans, se trouvait seule dans un palais rempli de richesses et d'esclaves.»</p>
        <p>Elle jouissait aussi de la beauté,
        puisqu'on a dit qu'
        «elle était très jolie
        et, par sa beauté incroyable, elle paraissait admirable aux yeux de tous».</p>
        <p>En <span style="color: #936c93;">cinquième lieu</span>, elle fut admirable par le <span style="color: #936c93;">privilège de sa dignité</span>.</p>
        <p>En effet,
        certains privilèges particuliers se manifestent chez quelques saints au moment de leur mort: </p>
        <ul>
        <li>la visite du Christ pour <a href="#note_jean" title="福音書記者ヨハネ" id="jean" class="yellow">Jean l'Évangéliste</a>, </li>
        <li>l'écoulement d'huile pour saint Nicolas <span style="color: #ccc;">(chapître 19 de <cite>La Légende Dorée</cite></span>, </li>
        <li>le ruissellement de lait pour saint Paul, </li>
        <li>la préparation du tombeau pour saint Clément <span style="color: #ccc;">(chapître 20 de <cite>La Légende Dorée</cite>)</span>, </li>
        <li>l'efficacité des demandes d'intercession pour sainte Marguerite <span style="color: #ccc;">(chapître 88 de <cite>La Légende Dorée</cite>)</span>, quand elle pria pour ceux qui entretiendraient sa mémoire.</li>
        </ul>
        <p>Or tous ces privilèges se trouvèrent réunis en <span style="color: #df8f20;">sainte Catherine</span>, comme le montre sa légende.</p>
        <p>On remarque une hésitation chez certains auteurs:
        fut-elle martyrisée sous Maxence ou sous Maximin?</p>
        <p>À cette époque trois hommes gouvernaient l'Empire: </p>
        <ul>
        <li>Constantin, qui avait recueilli l'Empire par succession de son père; </li>
        <li>Maxence, fils de Maximin, nommé Auguste par les soldats prétoriens de Rome; </li>
        <li>et Maximin, qui obtint l'autorité de César en Orient.</li>
        </ul>
        <p>D'après les chroniques, Maxence exerçait sa tyrannie contre les chrétiens à Rome et Maximin en Orient.</p>
        <p>Il semble donc à certains auteurs que c'est par l'erreur d'un copiste que Maxence a été mis à la place de Maximin.</p>



</article>

<hr>

<aside>

    <h3 id="note_rouen" class="yellow">Rothomagus</h3>
    <div class="notices yellow">
    <p><dfn>Rothomagus</dfn> est l'ancien nom de Rouen. S'y trouvait un monastère appelé à l'origine «Sainte-Trinité-du-Mont», aujourd'hui «Sainte-Catherine-du-Mont».</p
    </div>
    <footer><p>retour au texte: <a href="#rouen" title="Rothomagus">Rothomagus↑</a></p></footer>


    <h3 id="note_jean" class="yellow">Jean l'Évangéliste</h3>
    <div class="notices yellow">
    <p>Voir le <a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#jean9-selon-legende" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#jean9-selon-legende">chapître 18</a> de <cite>La Légende Dorée</cite>.</p>
    </div>
    <footer><p>retour au texte: <a href="#jean" title="福音書記者ヨハネ">Jean l'Évangéliste↑</a></p></footer>


    <h3 id="note_artsliberaux" class="yellow">Les sept arts libéraux</h3>
    <div class="notices yellow">
    <p>Dans les écoles moyennes et secondaires de la période médiévale, outre la théologie, sept arts libéraux ont été imposés comme matières d'enseignement général. comprenant trois enseignements (grammaire, rhétorique, droit de la défense) et quatre apprentissages (arithmétique, géométrie, astronomie, mathématiques).</p>
    </div>
    <footer><p>renvoi au texte: <a href="#artsliberaux" title="les sept arts libéraux">les sept arts libéraux↑</a></p></footer>


    <h3 id="note_maxentius" class="yellow">Maxence</h3>
    <div class="notices yellow">
    <p>Empereur romain (285 - 305 - 305 - 308) Il a été nommé vice-empereur (César) par Dioclétien, puis empereur d'occident (Auguste), persécuteur de chrétiens (303) puis démissionnaire. Il revînt pour aider son fils, Maxence, à lever une armée, et entra ensuite en conflit avec les uns avec les autres, s'est enfui à Galia (France), où il se confronte avec son beau-fils, Constantin, puis se suicide.</p>
    </div>
    <footer><p>renvoi au texte: <a href="#maxentius" title="Maxence">Maxence↑</a></p></footer>


    <h3 id="note_sybille" class="yellow">la Sibylle↑</h3>
    <div class="notices yellow">
    <p>Elle était une ancienne prophétesse païenne. On dit qu'il y en une ou dix. Le plus ancien est le Sibylle à Elytrie, en Asie Mineure, mais c'est le Sibyla de Cumes (une cité antique à l'ouest de Naples). Elle a écrit son oracle en neuf volumes, l'a vendu au roi de Rome, et ce "Livre de Sibylle" a été conservé dans le temple de Jupiter jusqu'à ce qu'il soit brûlé dans un incendie sur la colline Pictor au 1er siècle avant J-C. "L'Oracle de Sibylle", qui a été inclus dans le copus des textes apocryphes de l'Ancien puis du Nouveau Testament, est un faux document juif qui a été écrit en Egypte vers le deuxième siècle avant J-C, et qui inclut des altérations et des insertions chrétiennes plus tard.</p>
    </div>
    <footer><p>renvoi au texte: <a href="#sybille" title="la Sibylle">la Sibylle↑</a></p></footer>


    <h3 id="note_maximinus" class="yellow">Maximin</h3>
    <div class="notices yellow">
    <p>Il n'y avait pas d'empereur nommé Maximinus à cette époque. On peut aussi la confondre avec l'empereur Maximinus, neveu de l'empereur Relius, devenu vice-empereur en 305 et empereur du Trône impérial plus tard (308-314).</p>
    <p>renvoi au texte: <a href="#maximinus" title="Maximin">Maximin↑</a></p>
    </div>
    <h3 id="note_rouen" class="yellow">Rothomagus</h3>
    <div class="notices yellow">
    <p>Rothomagus. Ancien nom de la ville actuelle de Rouen. L'histoire d'un moine qui vivait dans le monastère de Sainte-Trinité-du-Mont près de Rouen (aujourd'hui monastère Sainte-Catherine-du-Mont), et la relique sacrée de la prêtresse, qui serait revenue du monastère de Sainte-Catherine au Sinaï au début du 10e siècle, et qui suscita quelques miracles, ont fait de Trinite-Aux-Mont l'un des cœurs du culte de sainte Catherin en Europe occidentale.</p>
    </div>
    <footer><p>renvoi au texte: <a href="#rouen" title="Rothomagus">Rothomagus↑</a></p></footer>


    <h3 id="note_fiancee" class="yellow">Je le déclare, je suis une femme qui a dédié son corps comme fiancée au Christ</h3>
    <div class="notices yellow">
    <p>Selon la tradition, Catherine, qui lui a été proposée par le fils de l'empereur, a vu du miroir que le prétendant ne lui convenait pas en termes de famille, de beauté, de richesse et d'apprentissage. Un ermite lui a enseigné que le Christ était le meilleur marié et qu'elle devait épouser le Christ, et elle a enseigné qu'elle ne pouvait être l'épouse du Christ à moins qu'elle ne soit vue deux fois et baptisée. Quand elle fut baptisée, le Christ nourrisson apparut dans son rêve et mit une bague de fiançailles sur son doigt.</p>
    </div>
    <footer>
      <p>renvoi au texte: <a href="#fiancee" title="Je le déclare, je suis une femme qui a dédié son corps comme fiancée au Christ">Je le déclare, je suis une femme qui a dédié son corps comme fiancée au Christ↑</a></p>
    </footer>


    <h3 id="note_sinai" class="yellow">le mont Sinaï et le culte de sainte Catherine</h3>
    <div class="notices yellow">
    <p>Cependant, on dit que le mont Sinaï ne connaissait pas du tout Sainte-Catherine et sa tombe. Le célèbre monastère Sainte-Catherine au pied de la montagne a été construit au milieu du sixième siècle. Ce monastère, qui était supposé avoir la relique, n'était ni le lieu de naissance ni le centre du culte de sainte Catherine.</p>
    </div>
    <footer><p>renvoi au texte: <a href="#sinai" title="l'emportèrent jusqu'au mont Sinaï et l'ensevelirent là">l'emportèrent jusqu'au mont Sinaï et l'ensevelirent là↑</a></p></footer>


    <h3 id="note_boece" class="yellow">Boèce</h3>
    <div class="notices yellow">
    <p>Boèce est un philosophe et homme d'État italien qui vivait dans la Rome antique tardive.</p>
    <p>Né dans la famille des nobles romaines, il est devenu orphelin à un jeune âge et a été élevé par l'aristocrate Shinmacus.</p>
    <p>Il a étudié à Athènes, et après son retour, il a passé ses études dans "un studio décoré de cristal et d'ivoire".
    Vers cette époque, il épousa la fille de son bienfaiteur, Shinmacus. Il était alors le souverain de l'Italie, le roi Théodoric du Royaume du Goth oriental, et a participé à la réforme du système monétaire. Il s'élève peu à peu à un rang supérieur et devient administrateur de l'Empire romain occidental en 510. En 522, ses deux fils ont aussi gagné la confiance du roi pour devenir administrateur, mais ont été emprisonnés et exécutés à Pavie, soupçonnés d'avoir été impliqués dans la rébellion par l'ancien administrateur, Albinus.</p>
    <p>Il a écrit "Consolation de philosophie" en prose avec la rime en prison et a cherché le réconfort de la philosophie ancienne.</p>
    <p>Les idées de Boèce reposent sur Platon et les Stoïciens, qui tentent par raison de surmonter les obstacles émotionnels et externes. Il traduisit la logique d'Aristote en latin, qui fut le début de l'étude médiévale d'Aristote. Il a également traduit des oeuvres littéraires comme Nicomaques, Euclide, Archimède et Ptoléemé, qui ont eu une grande influence sur la philosophie médiévale en tant qu'introduction à la philosophie et à la science grecques.</p>
    </div>
    <footer><p>renvoi au texte: <a href="#boece" title="Boèce">Boèce↑</a></p></footer>


    <h3 id="note_constantin" class="yellow">Constantin</h3>
    <div class="notices yellow">
    <p>Empereur Romain appelé Constantin Ier le Grand. Il a été la première personne à oeuvrer officiellement à la protection et à la formation reconnue de la religion chrétienne et s'est nommé "le 13ème apôtre" pour protéger l'Arianisme par le premier Conseil de Nicée. En 330, il déménagea la capitale de Rome à Byzance et la changea en Constantinople. Il avait toujours été croyant en Sol Invictus, mais il s'est converti sur son lit de mort <span style="color: #ccc;">(voir chapitre 12 de la Légende d'Or)</span>.</p>
    </div>
    <footer><p>renvoi au texte: <a href="#constantin" title="Constantin">Constantin↑</a></p></footer>


    <h3 id="note_incarnation" class="yellow">l'Incarnation</h3>
    <div class="notices yellow">
    <p>Est appelé incarnation le fait que pour sauver l'humanité vienne dans le monde l'unique enfant de Dieu en recevant chair dans les entrailles de Marie du travail de l'Esprit Saint.</p>
    </div>
    <footer><p>renvoi au texte: <a href="#incarnation" title="l'Incarnation">l'Incarnation↑</a></p></footer>

</aside>
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