<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- Page 17 JA:220 EN:215 -->

<article>

<hgroup>
<h2 id="mise-en-relation" class="yellow">différents textes à l'origine des scènes représentées dans le <cite><ruby style="color:#555;" lang="fr">Triptyque de Jean le Baptiste et de Jean l'Évangéliste<rp>(</rp><rt style="color:#999;" lang="nl">Triptiek van Johannes de Doper en Johannes de Evangelist</rt><rp>)</rp></ruby></cite></h2>
  <h3 id="barbe-selon-legende" class="yellow"><cite>Légende de Barbe la Grande Martyre</cite> selon le texte ajouté à <cite>La Légende dorée</cite></h3>
</hgroup>

  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Barbe la Grande Martyre, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Barbe la Grande Martyre, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" width="640" height="1138" loading="eager" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.jpg 1920w"></picture><figcaption>Barbe la Grande Martyre</figcaption>
  </figure>
  
    <h4>Texte ajouté à <cite>La Légende dorée</cite>: <cite>légende de Barbe la Grande Martyre</cite></h4>

      <p>Il y avait à <a href="#note_nicomedie" title="Nicomédie" id="nicomedie" class="yellow">Nicomédie</a>, du temps de l'empereur <a href="#note_maximien" title="Maximien" id="maximien" class="yellow">Maximien</a>, un païen du nom de <span style=color: #99713d;">Dioscore</span>, qui était d'une famille très distinguée et qui possédait de grandes richsses.</p>
      <p>Il avait une fille d'une grande beauté, qui se nommait <span style="color: #994c3d;">Barbe</span>.</p>
      <p>Son père l'aimait beaucoup;
      et afin que nul homme ne pût la voir, il la renferma dans une tour très-haute qu'il fit élever.</p>
      <p>Dès son plus jeune âge, <span style="color: #994c3d;">Barbe</span>, sentant le néant des choses terrestres, commença à s'appliquer à la méditation des choses du ciel.</p>
      <p>Étant une fois entrée dans un temple, et voyant le long des murailles les statues des idoles, elle demanda à ses parents:</p>
        <p class="conversation"><span style="color: #df8f20;">— Qu'est-ce que signifient ces images de personnes humaines?</span></p>
      <p>Ses parents lui répondirent:</p>
        <p class="conversation"><span style="color: #b3884d;">— Tais-toi; ce ne sont pas des hommes, mais des dieux, et ils veulent être adorés.</span></p>
      <p><span style="color: #994c3d;">Barbe</span> dit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Autrefois furent-ils des hommes?</span></p>
      <p>Et on lui répondit qu'oui.</p>
      <p>Et elle réfléchissait là-dessus le jour et la nuit, se disant en elle-même:</p>
        <p class="conversation"><span style="color: #df8f20;">— Si nos dieux ont été des hommes, ils sont donc nés comme des hommes, ils sont morts comme des hommes; s'ils étaient dieux, ils ne seraient point nés et ils ne seraient point morts; car la Divinité, à ce qu'il me semble, ne commence point et ne peut cesser.</span></p>
      <p>Elle en vint donc à mépriser ces prétendus dieux de bois ou de pierre;
      mais il lui manquait encore la connaissance du vrai Dieu.</p>
      <p>Sur ces entrefaites, la renommée se répandit à Nicomédie qu'il y avait à Alexandrie un homme d'une sagesse prodigieuse, nommé <a href="#note_origene" title="Origène" id="origene" class="yellow">Origène</a>, qui démontrait l'existence du vrai Dieu et la vanité des idoles.</p>
      <p>En apprenant cela, <span style="color: #94c3d;">Barbe</span> fut remplie de joie, et elle songeait comment elle pourrait faire pour aller l'entendre;
      mais elle n'osa pas en parler à son père, et elle adopta l'idée d'écrire à Origène;
      ce qu'elle fit en ces termes:</p>
        <p class="conversation">— À Origène d'Alexandrie, dont la gloire est universellement répandue, moi, Barbe, de Nicomédie.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Dès la première lueur de ma raison, j'ai éprouvé dans tout mon cœur le plus vif désir d'arriver à cette connaissance, et j'ai toujours pensé que la Divinité ne pouvait être dans des images, œuvre de nos mains, incapables de parler et d'entendre.</span></p>
        <p class="conversation"><span style="color: #df8f20;">J'ai pensé aussi que ceux qui avaient été des hommes, et qu'on représentait comme des dieux, ne pouvaient pas l'être; car l'homme commence et finit, mais Dieu est avant tous les temps et après tous les temps.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Et j'ai mis ma confiance en ce Dieu qui m'est inconnu, mais qui a créé toutes choses; je lui ai voué mon amour, et je n'épargnerai rien pour arriver à le connaître.</span></p>
        <p class="conversation"><span style="color: #df8f20;">La renommée de tes talents est venue jusqu'à moi, et j'ai pensé, père vénérable, que tu m'amènerais à la science de ce Dieu que tu prêches.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Et j'espère que tu dissiperas les ténèbres de mon ignorance et que tu me conduiras à la lumière de la vraie foi.</span></p>
      <p>Ayant envoyé sa lettre à Origène, elle pria le Seigneur en versant des larmes et en disant:</p>
        <p class="conversation"><span style="color: #df8f20;">— Seigneur, affermissez le pied de celui que j'ai envoyé à votre serviteur, afin que la lumière que j'ai réclamée m'arrive.</span></p>
      <p>Le messager arriva à Alexandrie,
      et il trouva Origène dans le palais de la mère de l'empereur Alexandre, Mamée,
      et il était occupé à prêcher la doctrine de Jésus-Christ.</p>
      <p>Il reçut avec grande joie la lettre de <span style="color: #994c3d;">Barbe</span>,
      et il loua Dieu de ce qu'il suscitait une pareille ferveur,
      et il s'empressa de lui répondre ainsi:</p>
        <p class="conversation">— Origène, indigne prêtre de Jésus-Christ, et peut-être son prédicateur, demeurant encore à Alexandrie, à Barbe, de la race des gentils, mais par adoption de la race des enfants de Dieu et de Jésus-Christ.</span></p>
        <p class="conversation"><span style="color: #165493;">Je vais t'enseigner, ainsi que tu me le demandes, quel est le vrai Dieu.</span></p>
        <p class="conversation"><span style="color: #165493;">Sache qu'il est un en substance et trois en personnes: le Père, le Fils et le Saint-Esprit.</span></p>
        <p class="conversation"><span style="color: #165493;">Celui qui croit en cette doctrine a ce qu'il faut pour parvenir à Dieu.</span></p>
        <p class="conversation"><span style="color: #165493;">Ajoutes-y donc créance pour compléter ce qui manque à la plénitude de ton désir; consulte mon envoyé, il t'informera de la loi de Dieu et il te lira les livres saints qu'il porte avec lui.</span></p>
        <p class="conversation"><span style="color: #165493;">Ne redoute pas d'être exposée à de grands tourments pour le nom de Jésus-Christ.</span></p>
        <p class="conversation"><span style="color: #165493;">Il a dit: “Celui qui perd pour moi son âme en ce monde, la gardera dans la vie éternelle”.</span></p>
      <p>Origène envoya un de ses disciples pour conférer avec <span style="color: #994c3d;">Barbe</span>,</p>
      <p>et quand on lui dit qu'il était arrivé,
      elle dit aussitôt de le faire entrer.</p>
      <p>Le serviteur de Dieu la salua au nom de Jésus-Christ.</p>
      <p>Et voilà que son père survint,
      et, voyant un inconnu,
      il s'effraya et il dit:</p>
        <p class="conversation"><span style="color: #b3884d;">— Quel est cet homme et que vient-il faire?</span></p>
      <p>L'Alexandrin répondit qu'il était instruit de la science de la médecine, et 'il avait un maître qui, contre l'usage des médecins, guérissait aussi les âmes.</p>
      <p>Le père de <span style="color: #994c3d;">Barbe</span>, entendant cela, se retira et les laissa converser.</p>
      <p>Et le chrétien, qui se nommait Valentin, expliqua à <span style="color: #994c3d;">Barbe</span> les mystères sacrés de la religion,
      et il la baptisa dans cette même tour où son père l'avait mise,
      et il lui remit les livres envoyés par Origène.</p>
      <p>Elle s'appliqua beaucoup à les lire,
      et elle fit, quoique sans maître, de très grands progrès dans la science des choses divines.</p>
      <p>On dit qu'à cause de sa beauté des nobles du pays s'éprirent d'amour pour elle,
      et ils parlèrent à son père afin qu'elle prit un époux.</p>
      <p>Et son père, allant la trouver dans la tour, cherchait à l'y décider, en disant:</p>
        <p class="conversation"><span style="color: #b3884d;">— Ma fille, des personnages puissants se sont souvenus de toi, et m'ont dit qu'ils te prendraient en mariage; qu'est-ce que tu veux faire?</span></p>
      <p>Elle répondit à son père en le regardant avec courroux:</p>
        <p class="conversation"><span style="color: #df8f20;">— Ne me force pas à agir ainsi, mon père.</span></p>
      <p>II la quitta,
      et, se séparant d'elle, il fit venir un grand nombre d'ouvriers,
      et il leur ordonna de construire une maison de bains, et il s'en alla dans un pays éloigné.</p>
      <p><span style="color: #994c3d;">Barbe</span> descendit de la tour pour voir ce que l'on avait fait,
      et elle vit que du côté du nord il n'y avait que deux fenêtres,
      et elle dit aux ouvriers:</p>
        <p class="conversation"><span style="color: #df8f20;">— Pourquoi avez-vous fait ces deux fenêtres?</span></p>
      <p class="conversation">Et ils répondirent:</p>
        <p class="conversation"><span style="color: #df8f20;">— Votre père l'a ainsi commandé.</span></p>
      <p>Elle répondit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Faites-moi une autre fenêtre.</span></p>
      <p>Et ils répliquèrent:</p>
        <p class="conversation"><span style="color: #df8f20;">— Nous craignons que votre père ne s'irrite contre nous.</span></p>
      <p>Elle leur dit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Faites ce que je vous dis, et j'amènerai mon père à donner son approbation.</span></p>
      <p>Ils firent donc une autre fenêtre.</p>
      <p><span style="color: #994c3d;">Barbe</span> plaça de sa propre main, du côté de l'orient, dans cet édifice, une croix précieuse;
      et, remontant dans la tour, elle vit les idoles qu'adorait son père.</p>
      <p>Obéissant à l'inspiration de l'Esprit saint, elle leur cracha à la figure et elle dit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Qu'ils deviennent semblables à vous, ceux qui vous font et ceux qui mettent en vous leur confiance.</span></p>
      <p>Quand la bâtisse fut finie, son père revint de son voyage, et lorsqu'il vit les trois fenêtres, il dit aux ouvriers:</p>
        <p class="conversation"><span style="color: #b3884d;">— Pourquoi avez-vous fait trois fenêtres?</span></p>
      <p>Ils répondiren</p>
        <p class="conversation"><span style="color: #df8f20;">— Votre fille nous l'a ordonné.</span></p>
      <p>Il dit alors à sa fille:</p>
        <p class="conversation"><span style="color: #df8f20;">— Est-ce toi qui as commandé de faire trois fenêtres?</span></p>
      <p>Elle répondit:</p>
        <p class="conversation"><span style="color: #df8f20;">— J'ai eu de bonnes raisons pour agir ainsi; car trois fenêtres illuminent l'homme entier.</span></p>
      <p>Et son père la mena avec lui dans la salle des bains, et lui dit:</p>
        <p class="conversation"><span style="color: #b3884d;">— Pourquoi trois fenêtres éclairent-elles plus que deux?</span></p>
      <p>Elle répondi</p>
        <p class="conversation"><span style="color: #df8f20;">— Il y en a trois qui illuminent le monde et qui règlent le cours des étoiles: le Père, le Fils et le Saint-Esprit, et ils sont un en essence.</span></p>
      <p>Alors son père, rempli de fureur, tira son épée pour la tuer.</p>
      <p>Mais la sainte fit sa prière à Dieu,
      et les murailles s'entr'ouvrirent,
      et elle fut transportée sur une montagne où étaient deux bergers qui faisaient paître leurs brebis.</p>
      <p>Son père se mit à sa recherche, et il alla vers ces bergers et il leur demanda s'ils avaient vu sa fille.</p>
      <p>L'un d'eux, voyant combien le père était irrité parce qu'il ne savait point où elle était, se tut; l'autre l'indiqua du doigt.</p>
      <p><span style="color: #994c3d;">Sainte Barbe</span> maudit celui qui l'avait trahie,
      et sur-le-champ il fut changé en statue de marbre,
      et ses brebis furent métamorphosées en sauterelles;
      mais ce récit est apocryphe.</p>
      <p>Son père, la trouvant, la battit, la traina par les cheveux
      et la chargea de chaînes.</p>
      <p>Il l'enferma dans un cachot
      et y mit des gardes,
      et il s'en alla prévenir de tout ce qui s'était passé le proconsul <a href="#note_marcien" title="Marcien" id="marcien" class="yellow">Marcien</a>.</p>
      <p>Le proconsul voulut que <span style="color: #994c3d;">Barbe</span> fût amenée devant lui.</p>
      <p>Quand il la vit, il fut frappé de sa grande beauté, et il lui dit:</p>
        <p class="conversation"><span style="color: #165493;">— Si tu veux te sauver, sacrifie aux dieux immortels, ou tu mourras dans les plus grands tourments.</span></p>
      <p>Elle répondit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Je veux m'offrir en sacrifice à mon Dieu Jésus-Christ, qui a fait le ciel et la terre et tout ce qui y est contenu.</span></p>
        <p class="conversation"><span style="color: #df8f20;">Quant aux démons que tu adores, le prophète a dit:</span></p>
        <p class="conversation"><span style="color: #df8f20;">Ils ont une bouche et ne parlent point; ils ont des yeux et ne voient point; ceux qui leur rendent hommage leur ressembleront.</span></p>
      <p>Le proconsul, furieux, ordonna de la dépouiller et de la frapper sans ménagement à coups de nerf de boeuf;
      et quand tout son corps fut en sang, il prescrivit de la ramener en prison, jusqu'à ce qu'il eût décidé quel tourment il lui infligerait.</p>
      <p>Au milieu de la nuit, une grande clarté entoura la martyre, et Jésus-Christ lui apparut et lui dit:</p>
        <p class="conversation"><span style="color: #6c936c;">— Prends courage, ma fille; il y aura grande joie dans le ciel et sur la terre lors de ta passion; ne redoute point les menaces du tyran; je suis avec toi pour te préserver de tous maux.</span></p>
      <p><span style="color: #994c3d;">Sainte Barbe</span> ressentit une joie extrême des paroles du Seigneur,
      et le matin elle reparut devant le proconsul, qui, voyant qu'il ne restait sur elle nulle trace des coups qu'elle avait reçus la veille, lui dit:</p>
        <p class="conversation"><span style="color: #165493;">— Vois combien les dieux te sont favorables et combíen ils t'aiment, puisqu'ils ont guéri tes plaies.</span></p>
      <p><span style="color: #994c3d;">Barbe</span> lui répliqua:</p>
        <p class="conversation"><span style="color: #df8f20;">— Tes dieux sont comme toi, sourds, aveugles et muets; comment auraient-ils pu me guérir?</span></p>
        <p><span style="color: #df8f20;">Celui qui m'a guérie, c'est Jésus-Christ, le Fils du Dieu vivant; mais tu ne le vois pas, parce que ton cœur est endurci par le diable.</span></p>
      <p>Le proconsul, frémissant comme un lion irrité, ordonna qu'on lui brûlat les côtes avec des torches allumées et qu'on lui frappât la tête à coups de marteau.</p>
      <p>La sainte, regardant le ciel, dit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Vous savez, Seigneur, que je souffre pour l'amour de vous; ne m'abandonnez pas.</span></p>
      <p>L'impie proconsul commanda qu'on lui coupat les mamelles;
      et elle dit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Ne me rejetez pas hors de votre présence, Seigneur, et ne m'otez pas l'Esprit saint.</span></p>
      <p>Il prescrivit ensuite qu'on la menât nue dans la ville, en la frappant;
      et elle dit:</p>
        <p class="conversation"><span style="color: #df8f20;">— Seigneur, vous qui êtes mon soutien et qui couvrez le ciel de nuages, couvrez mon corps, afin qu'il ne soit pas exposé aux regards des impies.</span></p>
      <p>Et il descendit du ciel un ange qui lui apporta une tunique blanche.</p>
      <p>Le proconsul ordonna alors qu'on lui coupât la tête;
      mais son père se saisit d'elle et la mena dans la montagne,
      et elle fit cette prière:</p>
      <p class="conversation"><span style="color: #df8f20;">— Seigneur Jésus, à qui toutes choses obéissent, accordez que ceux qui invoqueront votre saint nom en se souvenant de mon martyre, trouvent leurs péchés mis en oubli au jour du jugement.</span></p>
      <p>Et elle entendit une voix qui venait du ciel et qui répondit:</p>
      <p class="conversation"><span style="color: #6c936c;">— Viens, ma bien-aimée; repose-toi dans la demeure de mon père qui est dans le ciel; ce que tu demandes t'est accordé.</span></p>
      <p>Et la martyre eut la tête tranchée des mains de son propre père.
      Et lorsqu'il redescendit de la montagne, le feu du ciel tomba sur lui et le consuma,
      et il ne resta pas même vestige de lui.</p>
      <p>Il y eut un homme puissant, un comte de <a href="#note_saxe" title="Saxe" id="saxe" class="yellow">Saxe</a>,
      qui fit prisonnier son ennemi et qui l'enferma dans une tour, en défendant, sous les peines les plus grndes, que personne lui donnat à boire ni à manger.</p>
      <p>Après qu'il y fut resté quelques jours,
      il pria, en gémissant, le gardien de la tour, de lui donner, pour l'amour de <span style="color: #994c3d;">sainte Barbe</span>, un peu de pain, afin qu'il ne mourat pas;
      le gardien ne fit pas attention à ses plaintes,
      et il gisait par terre défaillant;
      le gardien le crut mort,
      et demanda au comte la permission d'enlever le cadavre avant qu'il répandit une mauvaise odeur;
      on attacha donc une corde au cou de celui que l'on croyait mort,
      et on le précipita du haut du rocher;
      aussitôt qu'il eût touché le sol il se releva,
      et tous ceux qui étaient présents s'enfuirent, saisis de crainte.</p>
      <p>Il les rappela et leur dit de ne point avoir peur;
      et ils s'approchèrent de lui, et ils demandèrent comment il avait pu soutenir son existence,
      et il leur répondit:</p>
      <p class="conversation"><span style="color: #165493;">— Sainte Barbe m'a assisté dans toutes mes peines;</span></p>
      <p class="conversation"><span style="color: #165493;">c'est elle qui m'a soutenu dans ma chute, et je ne peux mourir avant de m'être confessé et d'être muni de la sainte communion,</span></p>
      <p>Interrogé pourquoi il avait obtenu cette grâce, il répondit:</p>
      <p class="conversation"><span style="color: #165493;">— Je n'ai manqué aucune année de jeûner et de prier le jour de la fête de sainte Barbe pour lui faire bonheur, et c'est pourquoi elle a demandé à Dieu que je ne mourusse pas sans avoir reçu les sacrements.</span></p>
      <p>Et dès qu'il les eut reçus, il expira.</p>
      <p>Nous lisons aussi que du temps du roi des Romains, Adolphe, un comte fut mis à la tête du gouvernement des provinces de l'Orient, et un soldat fut accusé d'avoir fait violence à une jeune fille.</p>
      <p>Tandis qu'il était en prison, attendant son jugement, il demanda à se confesser,
      et son confesseur ayant reconnu qu'il était innocent, l'engagea à se vouer au service de <span style="color: #994c3d;">sainte Barbe</span>, et à promettre de ne pas revenir chez lui avant d'avoir fait un pèlerinage en son honneur.</p>
      <p>La femme réclamait à grands cris un jugement, et les juges s'étant réunis et ayant fait comparaître devant eux l'accusé, le condamnèrent à mort;
      alors il se présenta quelqu'un que personne ne connaissait, et qui, ayant demandé la parole, prouva, par des raisons pertinentes et irrécusables, que le soldat n'était point coupable et que la sentence était injuste.</p>
      <p>Et les juges le révoquèrent;
      et le soldat, rendu à la liberté , finit ses jours au service de <span style="color: #994c3d;">sainte Barbe</span>,
      et l'inconnu qui lui avait servi d'avocat disparut sans qu'on sût qui il était.</p>


</article>

<hr>

<aside>

    <h3 id="note_nicomedie" class="yellow">Nicomédie</h3>
    <div class="notices yellow">
      <p><a href="https://fr.wikipedia.org/wiki/Nicomédie" title="https://fr.wikipedia.org/wiki/Nicomédie"><ruby lang="fr">Nicomédie<rp>(</rp><rt lang="grc">Νικομήδεια</rt><rp>)</rp></ruby></a> est une ville d'Asie Mineure, capitale du royaume de <a href="https://fr.wikipedia.org/wiki/Bithynie" title="https://fr.wikipedia.org/wiki/Bithynie">Bithynie</a>. Elle se trouve aujourd’hui en Turquie et est appelée Izmit. Elle fut la capitale des empereurs <a href="https://fr.wikipedia.org/wiki/Dioclétien" title="https://fr.wikipedia.org/wiki/Dioclétien">Dioclétien</a> et <a href="https://fr.wikipedia.org/wiki/Constantin_Ier_(empereur_romain)" title="https://fr.wikipedia.org/wiki/Constantin_Ier_(empereur_romain)">Constantin</a>.</p>
    </div>
    <footer>
      <p>retour au texte: <a href="#maximien" title="Maximien">Nicomédie↑</a></p>
    </footer>


    <h3 id="note_maximien" class="yellow">Maximien</h3>
    <div class="notices yellow">
      <p><a href="https://fr.wikipedia.org/wiki/Maximien_Hercule" title="https://fr.wikipedia.org/wiki/Maximien_Hercule">Maximien Hercule</a>. Coempereur de l'empire romain de 286 à 305 avec <a href="https://fr.wikipedia.org/wiki/Dioclétien" title="https://fr.wikipedia.org/wiki/Dioclétien">Dioclétien</a> pour l'orient. Père de <a href="https://fr.wikipedia.org/wiki/Maxence_(empereur_romain)" title="https://fr.wikipedia.org/wiki/Maxence_(empereur_romain)">Maxence</a>.</p>
    </div>
    <footer>
      <p>retour au texte: <a href="#nicomedie" title="Nicomédie">Maximien↑</a></p>
    </footer>


    <h3 id="note_origene" class="yellow">Origène</h3>
    <div class="notices yellow">
      <p><a href="https://fr.wikipedia.org/wiki/Origène" title="https://fr.wikipedia.org/wiki/Origène"><ruby lang="fr">Origène<rp>(</rp><rt lang="grc">Ὠριγένης</rt><rp>)</rp></ruby></a> est un théologien chrétien, reconnu Père de l'Église mais non saint, né à Alexandrie vers 185 et mort à Tyr vers 253.</p>
    </div>
    <footer>
      <p>retour au texte: <a href="#origene" title="Origène">Origène↑</a></p>
    </footer>


    <h3 id="note_marcien" class="yellow">Marcien</h3>
    <div class="notices yellow">
      <p>Aucune trace de ce proconsul hors <cite>La Légende Dorée</cite>.</p>
    </div>
    <footer>
      <p>retour au texte: <a href="#marcien" title="Marcien">Marcien↑</a></p>
    </footer>


    <h3 id="note_saxe" class="yellow">Saxe</h3>
    <div class="notices yellow">
      <p>Région d'Allemagne dont la délimitation a varié au cours de l'histoire; le Comté palatin de Saxe était une principauté du Saint-Empire romain germanique. Fondée par l'empereur Otton Ier au xe siècle, elle s'étendait sur l'actuelle région de Saale-Unstrut dans le sud-est du duché de Saxe.</p>
    </div>
    <footer>
      <p>retour au texte: <a href="#saxe" title="Saxe">Saxe↑</a></p>
    </footer>

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