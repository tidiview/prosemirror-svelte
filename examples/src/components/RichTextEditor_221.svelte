<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 16 -->

<article>
  <hgroup>
  <h2 id="mise-en-relation" class="yellow"><cite><ruby lang="ja" style="color:#555;">洗礼者<wbr>ヨハネと<wbr>福音書記者<wbr>ヨハネの<wbr>三連画<rp>(</rp><rt lang="nl" style="color:#999;">Triptiek van Johannes de Doper en Johannes de Evangelist</rt><rp>)</rp></ruby></cite>に表わされている場面の元にある様々な文書</h2>
    <h3 id="cath-selon-legende" class="yellow"><cite><ruby style="color:#e6a64d;">黄金伝説<rp>(</rp><rt style="color:#e6a64d;">レゲンダ・アウレア</rt><rp>)</rp></ruby></cite><span style="color: #e6a64d;">においての<cite>アレクサンドリアのカテリナの伝説</cite></span></h3>

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
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《アレクサンドリアのカタリナ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《アレクサンドリアのカタリナ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.jpg 1920w"></picture><figcaption>アレクサンドリアのカタリナ</figcaption>
  </figure>


      <h4 id="cath-selon-legende" class="yellow"><ruby style="color:#e6a64d;">黄金伝説<rp>(</rp><rt style="color:#e6a64d;">レゲンダ・アウレア</rt><rp>)</rp></ruby><span style="color: #e6a64d;">の第１６６章においてのアレクサンドリアのカテリナ</span>の文書</h4>

        <p>カテリナは、コストスという王の娘で、<a href="#note_artsliberaux" title="七学芸" id="artsliberaux" class="yellow">七学芸</a>の教育を熱心に受けた。</p>
        <p>そのころ、<a href="#note_maxentius" title="皇帝マクセンティウス" id="maxentius" class="yellow">皇帝マクセンティウス</a>は、富める者も貧しい者もアレクサンドリアに呼び集めて、偽神たちに香をささげさせた。これには、供香に応じようとしないキリスト教徒を断罪してやろうという狙いもあったのである。</p>
        <p>このとき十八歳であったカテリナは、大勢の召使いとありあまるほどの富にかこまれて、宮殿でひとりで暮らしていた。</p>
        <p>ある日、動物たちの<ruby>咆え<rp>(</rp><rt>ほ</rt><rp>)</rp></ruby>声と人びとの歌声が聞こえたので、すぐ使いの者をやって、なにごとが起こったのかをたずねさせた。</p>
        <p>彼女は、ことの次第を知ると、数人の者をつれて宮殿を出て、十字のしるしで武装し、現場におもむいた。</p>
        <p>見ると、多くのキリスト教徒が死の恐怖におののきながら供香に引きたてられていくところであった。</p>
        <p>これに大きな心痛をおぼえたカテリナは、大胆にも皇帝のまえにすすみ出ると、こう言った。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　陛下、もしあなたが天にまします造り<ruby style="color:#df8f20;display: inline-flex;flex-direction: column-reverse;text-align: center;">主<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;display: inline;line-height: 0;">ぬし</rt><rp>)</rp></ruby>をおみとめになって、偽神たちを<ruby style="color:#df8f20;display: inline-flex;flex-direction: column-reverse;text-align: center;">拝<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;display: inline;line-height: 0;">おが</rt><rp>)</rp></ruby>むことをおやめくださいますならば、これは、陛下の高いご身分にふさわしいことでありますし、理性も、そうした陛下にこころからご挨拶申しあげることをわたくしに命じるでありましょう</span></p>
        </blockquote>
        <p>そして、神殿の入口に立ったまま、三段論法のさまざまな結論を駆使してあるときは寓意的、比喩的に、またあるときは弁証法的、神秘論的に皇帝と多くのテーマについて議論をたたかわせた。</p>
        <p>それが終わると、ふつうの言葉にもどって、</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　わたくしは、以上のことをまるで哲学者にむかって言うように陛下にご説明申しあげました。</span></p>
          <p><span style="color: #df8f20;">さて、おたずねいたしますが、陛下はどうしてなんの益もないのに多くの人びとを呼び集めて、石の像に供香させるというような愚かな真似をなさるのでございますか。</span></p>
          <p><span style="color: #df8f20;">たかが職人の手で建てられたにすぎないこの神殿を立派だとおもい、風のまえの<ruby style="color:#df8f20;display: inline-flex;flex-direction: column-reverse;text-align: center">塵<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;;display: inline;line-height: 0;">ちり</rt><rp>)</rp></ruby>にも似た神殿のきらびやかな装飾を美しいとお考えになるのでしたら、天を仰ぎ、地と海とそこにある<ruby style="color:#df8f20;">森<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">しん</rt><rp>)</rp>羅<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">ら</rt><rp>)</rp>万<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">ばん</rt><rp>)</rp>象<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">しょう</rt><rp>)</rp></ruby>をごらんなさい。</span></p>
          <p><span style="color: #df8f20;">太陽と月と星のような天の装飾におどろきなさい。</span></p>
          <p><span style="color: #df8f20;">そして、創世の日から世の終わりのときまで昼も夜も西にむかって走り、また東にもどって、けっして倦むことのない彼らの奉仕ぶりにお気づきなさい。</span></p>
          <p><span style="color: #df8f20;">これをとくとごらんになりましたら、このような奉仕を受けておられる力あるおん者がどなたであるかを問い、よく理解しようとつとめなさい。</span></p>
          <p><span style="color: #df8f20;">けれども、主があなたのこころに認識の光をあたえてくださって、あなたが主をみとめ、主に比肩できるような者はだれもいないということがおわかりになりましたら、主をあがめ、主をたたえなくてはなりません。</span></p>
          <p><span style="color: #df8f20;">と申しますのは、主は、あらゆる神々のなかの神であり、すべての主のなかの主であられるのですから</span></p>
        </blockquote>
        <p>さらにカテリナが神のおん子のご<a href="#note_incarnation" title="託身" id="incarnation" class="yellow"><ruby>託<rp>(</rp><rt>たく</rt><rp>)</rp>身<rp>(</rp><rt>しん</rt><rp>)</rp></ruby></a>についてたくみに説明すると、皇帝は、すっかり面くらって、言葉をかえすこともできなかった。</p>
        <p>しかし、やっとのことで落ち着きをとりもどすと、こう言った。</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　婦人よ、しばらく待ってもらいたい。まずはこの供香を終わりまでやらせて、それがすんだら、そなたの問いに答えることにしよう</span></p>
        </blockquote>
        <p>皇帝は、カテリナを自分の宮殿に案内して、だいじにもてなすようにと命じた。
        というのは、彼女の聡明さと容姿の美しさにすっかり参ってしまったのである。</p>
        <p>やがて宮殿にもどってくると、皇帝は、カテリナに言った。</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　われわれは、そなたの雄弁な言葉を聞き、そなたの聡明さに感嘆いたした。</span></p>
          <p><span style="color: #b3884d;">けれども、神々に供香させることにかまけていたので、すべてを理解することはできなかった。</span></p>
          <p><span style="color: #b3884d;">そこで、まず手はじめにそなたの家柄を聞かせてもらおう</span></p>
        </blockquote>
        <p>乙女は答えた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　〈みずからをほめても、けなしてもならない〉と書かれています。</span></p>
          <p><span style="color: #df8f20;">そんなことをするのは、むなしい名声にうごかされる愚かな人びとだけです。</span></p>
          <p><span style="color: #df8f20;">ですから、わたくしが自分の<ruby style="color:#df8f20;">出<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">しゅつ</rt><rp>)</rp>自<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">じ</rt><rp>)</rp></ruby>を申しあげますのは、<ruby style="color:#df8f20;">自<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">うぬ</rt><rp>)</rp>惚<rp>(</rp><rt style="color:#df8f20;font-size: 70%;letter-spacing: 2px;">ぼれ</rt><rp>)</rp></ruby>や虚栄からではなく、謙虚でありたいとおもうからでございます。</span></p>
          <p><span style="color: #df8f20;">わたくしは、コストス王のひとり娘でございます。けれども、王家に生まれ、七学芸もしっかり学びはしましたが、これらの学問もそれほどありがたいものとはおもわず、もっぱら主イエス・キリストに帰依してまいりました。</span></p>
          <p><span style="color: #df8f20;">あなたがあがめておいでの神々は、あなたをもほかの人びとをも助けることができません。</span></p>
          <p><span style="color: #df8f20;">ただの石の像を拝んでいらっしゃるあなたがたは、ほんとうにお気の毒です。あなたがたの神々は、あなたがたが困ったときに助けをもとめても、そばにはいらっしゃいませんし、悲しいときにも助けに来てはくださいません。危険なときにも守ってはくださいません！</span></p>
        </blockquote>
        <p>王は言った。</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　そなたの言うことが正しいとすれば、世の人びとは、みんな間違っていて、そなただけが真実を語っていることになるのかな。</span></p>
          <p><span style="color: #b3884d;">しかし、どんな発言も、ふたりか三人の証人によって裏書きされることが必要だから、よしんばそなたが天使か天の諸力のひとつだとしても、このままでは、だれもそなたの言うことを信じるわけにはいくまい。</span></p>
          <p><span style="color: #b3884d;">なにしろ、そなたひとりでは、かよわい一女人にすぎぬからな</span></p>
        </blockquote>
        <p>カテリナは答えた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　陛下、どうか怒りのとりこになられませぬように。</span></p>
          <p><span style="color: #df8f20;">賢者のこころは、怒りの感情にうごかされるようなことがあってはなりませぬ。</span></p>
          <p><span style="color: #df8f20;">それゆえ、〈精神で支配する者こそ、王者であって、肉体で支配する者は、奴隷にすぎぬ〉と詩人も言っております</span></p>
        </blockquote>
        <p>皇帝は言った。</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　どうやら、才女ぶりをひけらかしてわれわれのこころをとらえ、哲学者の言葉など引用して長広舌をふるうのが、そなたの手くだのようだな</span></p>
        </blockquote>
        <p>皇帝は、カテリナの聡明さにはとうてい太刀打ちできぬと知ると、ひそかに国じゅうの文法学と雄弁術の大家に書面を送り、すぐさまアレクサンドリアの市庁に参集せよと命じ、首尾よくこの口達者な乙女をうち負かした者には莫大な褒賞をとらせようと約束した。</p>
        <p>こうして各地から、世俗の学識にかけては万人にすぐれた５０人の大家たちが集まってきた。</p>
        <p>彼らは、津々浦々からわれわれを招集されたのはどのような理由からでありましょうかとたずねた。</p>
        <p>皇帝は答えた。</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　無類の判断力と聡明さをほこるひとりの乙女が、われわれのもとにおるのだが、この女は、なみいる賢者たちに論争でうち勝って、われわれの神々はすべて悪霊であると主張しているのだ。</span></p>
          <p><span style="color: #b3884d;">あなたがたが彼女をうち負かしてくれたら、故郷に<ruby style="color:#b3884d;">錦<rp>(</rp><rt style="color:#b3884d;font-size: 70%;letter-spacing: 2px;">にしき</rt><rp>)</rp></ruby>をかざることができよう</span></p>
        </blockquote>
        <p>すると、学者たちのひとりは、声をあらげてこう言った。</p>
        <blockquote>
          <p><span style="color: #165493;">—　おお、このようなくだらぬ論戦のために世界じゅうの学者を遠くはなれたところからお呼び寄せになるとは、陛下のご決断も、いささか大袈裟すぎはしませぬか。</span></p>
          <p><span style="color: #165493;">たかが乙女のひとりぐらい、わたしどもの学生のなかのごく下っぱの学生でもわけなくやりこめることができますものを</span></p>
        </blockquote>
        <p>王は言った。</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　拷問にかけて力ずくで神々に供香させることはできよう。</span></p>
          <p><span style="color: #b3884d;">しかし、あなたがたと論争をさせて、<ruby style="color:#b3884d;">完<rp>(</rp><rt style="color:#b3884d;font-size: 70%;letter-spacing: 2px;">かん</rt><rp>)</rp>膚<rp>(</rp><rt style="color:#b3884d;font-size: 70%;letter-spacing: 2px;">ぷ</rt><rp>)</rp></ruby>になさまでにあの女の鼻をへし折ってやったほうがおもしろい、とわたしはおもったのだ</span></p>
        </blockquote>
        <p>学者たちは言った。</p>
        <blockquote>
          <p><span style="color: #165493;">—　その娘をわれわれのまえにつれてこさせてください。神々を冒瀆したことをみとめさせ、大学者というものにはじめて会ったと言わせてやりますよ</span></p>
        </blockquote>
        <p>カテリナは、どんな論争が待ちうけているかを聞くと、身もこころも主にゆだねた。</p>
        <p>すると、主の<ruby>御<rp>(</rp><rt>み</rt><rp>)</rp>使<rp>(</rp><rt>つか</rt><rp>)</rp></ruby>いがあらわれて、びくびくしていてはなりませんと忠告し、けっして学者たちにうち負かされることはありません、逆に学者たちを回心させ、ともに殉教の棕櫚を受けることになるでしょう、と告げた。</p>
        <p>さて、彼女は、学者たちのまえにつれていかれると、皇帝にむかってこう言った。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　陛下は、五十人の学者たちをひとりの乙女と論争させ、この人たちが勝ったら莫大な褒賞をあたえると約束なさっていますが、わたくしにはなんのご褒美も約束しないで戦えとおっしゃいます。これは、不公平というものではありませんか。</span></p>
          <p><span style="color: #df8f20;">けれども、主イエス・キリストがわたくしの褒賞でございます。イエス・キリストこそは、主のために戦うすべての人間の希望であり、栄冠なのです</span></p>
        </blockquote>
        <p>すると、学者たちは神ともあろう者が人間になったり、苦しみを受けたりするのはありえないことだと言った。カテリナは、そのようなことは異教徒の人たちでさえ予言しています、と指摘した。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　プラトンは、神は満月のように完全な円をなしていることもあれば、三日月のように弧になっていることもあると述べておりますし、<a href="#note_sybille" title="シビュラ" id="sybille" class="yellow">シビュラ</a>は、〈高い木につるされた神は、さいわいである〉と言っているではありませんか</span></p>
        </blockquote>
        <p>カテリナは、このような調子で堂々と学者たちと渡りあい、明確な論拠をあげて彼らをやりこめたので、さすがの学者たちも、舌を巻いてだまりこみ、だれひとりとして返す言葉を知らなかった。</p>
        <p>皇帝は、烈火のように怒って、たかが女ひとりにだらしなくもうち負かされてしまった学者たちにはげしい難詰の言葉をあびせた。</p>
        <p>すると、みんなの師匠格にあたる<ruby>碩<rp>(</rp><rt>せき</rt><rp>)</rp>学<rp>(</rp><rt>がく</rt><rp>)</rp></ruby>が言った。</p>
        <blockquote>
          <p><span style="color: #165493;">—　陛下もご存じでいらっしゃいますように、かってわたしたちと論争をして、たちどころにうち負かされなかったような相手は、ひとりもございませんでした。けれども、この乙女の口から語っているのは、神の<ruby style="color:#165493;">御<rp>(</rp><rt style="color:#165493;font-size: 70%;letter-spacing: 2px;">み</rt><rp>)</rp>霊<rp>(</rp><rt style="color:#165493;font-size: 70%;letter-spacing: 2px;">たま</rt><rp>)</rp></ruby>です。</span></p>
          <p><span style="color: #165493;">わたしたちは、こころから感服し、これ以上キリストを否定するようなことは言えなくなってしまいました。</span></p>
          <p><span style="color: #165493;">ですから、わたしたちがこれまであがめてきた神々のほうがすぐれていることを陛下がおしめしくださいませんでしたら、ここにきっぱりと申しあげますが、わたしたちは、ひとり残らずキリスト教に改宗いたそうと存じます</span></p>
        </blockquote>
        <p>僭主は、この言葉を聞くや、かんかんに怒って、このへぼ学者どもを<ruby>町<rp>(</rp><rt>まち</rt><rp>)</rp>中<rp>(</rp><rt>なか</rt><rp>)</rp></ruby>で焼き殺してしまえと<ruby>下<rp>(</rp><rt>げ</rt><rp>)</rp>知<rp>(</rp><rt>ち</rt><rp>)</rp></ruby>した。</p>
        <p>しかし、カテリナは、彼らを力づけ、毅然として殉教にむかうのですとさとし、信仰の道を熱心に説いた。</p>
        <p>彼らは、洗礼を受けずに死んでいくことを悲しんだ。それで、カテリナはこう言った。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　怖れることはありません。あなたがたは、みずからの血でもって洗礼と栄冠を受けるのですから</span></p>
        </blockquote>
        <p>こうして学者たちは、十字のしるしでみずからを祝福したのち、火に投げこまれ、たましいを神にゆだねた。</p>
        <p>けれども、彼らの頭髪も衣服も、すこしも炎に焼けなかった…</p>
        <p>キリスト信者たちは、彼らの遺体をねんごろに埋葬した。一方、僭主は、カテリナにむかって言った。</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　けだかい乙女よ、そなたの若さをだいじにするがよい。わたしの宮殿で王妃につぐ地位をあたえよう。そして、そなたの像を作らせて、町のまん中に立て、みんなに女神として拝ませよう</span></p>
        </blockquote>
        <p>乙女は答えた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　考えるだけでも罪ぶかいようなことをおっしゃらないでくださいませ。</span></p>
          <p><span style="color: #df8f20;">申しあげておきますが、<a href="#note_fiancee" title="申しあげておきますが、わたくしは、わが身をキリストに花嫁としてささげた女でございます" id="fiancee" class="yellow">わたくしは、わが身をキリストに花嫁としてささげた女でございます</a>。</span></p>
          <p><span style="color: #df8f20;">キリストこそ、わたくしの栄誉、わたくしの愛であり、またわたくしの甘味な喜びなのです。</span></p>
          <p><span style="color: #df8f20;">どんな甘言や責苦も、この愛からわたくしを引きはなすことはできません</span></p>
        </blockquote>
        <p>激怒した皇帝は、彼女を身ぐるみはだかにし、<a href="#note_scorpion" title="さそり鞭" id="scorpion" class="yellow">さそり鞭</a>で打たせたのち、暗い牢獄にとじこめた。</p>
        <p>彼女は、ここで食事もなしに１２日間うち棄てておかれた。</p>
        <p>さて、王がよんどころない要件で国外に出かけたすきに、
        カテリナに並々ならぬ好意を寄せていた王妃は、ポルピュリウスという親衛隊長といっしょに彼女がとじこめられている牢獄にやってきた。</p>
        <p>王妃が入っていくと、獄房は、<ruby>皓<rp>(</rp><rt>こう</rt><rp>)</rp>々<rp>(</rp><rt>こう</rt><rp>)</rp></ruby>たる輝きに照らされ、天使たちがカテリナの傷の手当てをしていた。</p>
        <p>カテリナは、皇后を見ると、天の喜びを説きはじめ、彼女をキリスト教に改宗させ、いずれは殉教の栄冠を手に入れられるでしょうと預言した。</p>
        <p>こうしてふたりは、夜ふけまで延々と語りあった。</p>
        <p>この話をずっと聞いていたポルピュリウスは、いきなりカテリナの足もとに身を投げると、二百名の騎士たちともども信仰の道に入った。</p>
        <p>ところで、僭主は、十二日間食事をあたえてはならぬと厳命しておいたので、キリストは、天から一羽の白い鳩をカテリナのもとにつかわされ、鳩は、天上の食べもので彼女をやしなった。</p>
        <p>その後、主おんみずから大勢の天使たちと乙女たちをつれて、カテリナのもとにあらわれてこう言われた。</p>
        <blockquote>
          <p><span style="color: #7070c2;">—&#160;</span></td>
        <td><span style="color: #7070c2;">「娘よ、わたしは、その名のためにあなたが苦しい戦いをひき受けてくれたあなたの造り主である。ひるんではならない。</span></p>
          <p><span style="color: #7070c2;">わたしは、あなたとともにいるのだから</span></p>
        </blockquote>
        <p>主が去られたあと、旅から帰った皇帝は、彼女を引いてくるようにと命じた。
        しかし、長い絶食で<ruby>憔<rp>(</rp><rt>しよう</rt><rp>)</rp>悴<rp>(</rp><rt>すい</rt><rp>)</rp></ruby>しきっているものとおもったのに、カテリナは、以前よりもずっと美しくなっていた。</p>
        <p>皇帝は、牢獄のなかで彼女に食事をあたえた者がいるにちがいないとにらみ、牢の番人どもを拷問にかけよと命じた。</p>
        <p>そこでカテリナは言った。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　わたくしは、どんな人間からも食事をもらっていません。主キリストが、御使いによってわたくしをやしなってくださったのです</span></p>
        </blockquote>
        <p>皇帝は言った。</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　いいかな、わたしの言うことをよくこころに留めて、いいかげんな返事をしないようにしてもらいたい。</span></p>
          <p><span style="color: #b3884d;">わたしは、そなたを召使い女にほしいと言っておるのではない。権勢ならぶ者のない、あでやかな<ruby style="color:#b3884d;">妃<rp>(</rp><rt style="color:#b3884d;font-size: 70%;letter-spacing: 2px;">きさき</rt><rp>)</rp></ruby>としてわたしの帝国に君臨してもらおうと申しておるのだ</span></p>
        </blockquote>
        <p>カテリナは答えた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　陛下もわたくしの言葉をしかとお聞きくださるようお願い申しあげます。そして、よくご勘考のうえ正しい判断をくだしてお決めくださいませ。力づよく、不滅で、栄光にみち、あでやかなおん者か、それとも無力で、死すべき、いやしい、みにくい人間か、わたくしは、このどちらを選ぶのがよいでしょうか</span></p>
        </blockquote>
        <p>皇帝は、憤然として言った。</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　神々に供香をして生きながらえるか、特別にむごい責苦を受けて死ぬか、このふたつにひとつを選ぶがよい</span></p>
        </blockquote>
        <p>カテリナは言った。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　考えつくどんな責苦でもいますぐ考えだしてくださいませわたくしは、かつて主おんみずからがわたくしのためにご自身を犠牲になさいましたように、一刻もはやくわたくしの肉と血を主にささげたいと切願しているのでございます。主こそ、わたくしの神、わたくしのいとしい人、わたくしの牧者にして花婿なのですから</span></p>
        </blockquote>
        <p>そのとき、ある裁判官が怒り狂っている皇帝に、鉄の<ruby>鋸<rp>(</rp><rt>のこぎり</rt><rp>)</rp></ruby>をつけ、するどくとがった釘を打ちならべた車輪を四つ三日のあいだにこしらえさせなさい、このすごい責め道具に彼女の肉体を切りきざませるのです、ほかのキリスト教徒もこういうむごたらしい死にざまを見たら震えあがりましょう、と献策した。</p>
        <p>そこで皇帝は、刑車を作らせた。</p>
        <p>その車のふたつの車輪は、他のふたつの車輪と反対の方向にまわるようにし、最初のふたつが下のほうに動き、残りのふたつはこれとは逆に上にむかって動く。</p>
        <p>四つの車輪をこういうふうに配置して同時にうごかすと、乙女のからだは八つ裂きにされる仕掛けになっていた。</p>
        <p>聖カテリナは、主の<ruby>御<rp>(</rp><rt>み</rt><rp>)</rp>名<rp>(</rp><rt>な</rt><rp>)</rp></ruby>の栄光のために、また見物に集まった人びとを回心させるためにどうかこの刑車を破壊してください、と主にお願いした。</p>
        <p>すると、主の御使いがあらわれて、刑車をこっぱみじんに破砕したので、飛びちった破片に当たって四千人もの異教徒が死んだ。</p>
        <p>王妃は、それまではそっと身をかくして高いところからこれを眺めていたが、すぐさま下に駆けおりてきて、皇帝にむかってこの眼をおおう残忍さをなじった。</p>
        <p>王は、これを聞いて激怒し、皇后が神々に供香することをこばんだので、まず皇后の乳房を<ruby>挟<rp>(</rp><rt>えぐ</rt><rp>)</rp></ruby>りとってから首を<ruby>刎<rp>(</rp><rt>は</rt><rp>)</rp></ruby>ねよと命じた。</p>
        <p>殉教の場所につれていかれるとき、皇后はカテリナにむかって、どうかわたしのために神さまに祈ってくださいとたのんだ。</p>
        <p>カテリナは、答えて言った。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　神のいつくしみを受けられた王妃さま、怖れることはございません。あなたは、今日はかない王国のかわりに永遠の王国を手に入れ、うつしみの良人と別れて、天の花婿とひとつになられるのですから</span></p>
        </blockquote>
        <p>王妃は、カテリナの言葉になぐさめられた。</p>
        <p>そこで刑吏たちは、彼女を町のそとにつれていって、槍の穂先で乳房を挟りだしたのち、首を刎ねた。</p>
        <p>ポルピュリウスは、王妃の遺体を盗みだしてきて、てあつく葬った。</p>
        <p>翌日、王妃の遺体の捜索がはじまった。</p>
        <p>僭主は、このことにかんして嫌疑のかかっている多くの人びとを拷問にかけよという命令を出した。
        すると、ポルピュリウスがすすみでて、大きな声で臆せずに言った。</p>
        <blockquote>
          <p><span style="color: #93836c;">—　キリストの<ruby style="color:#93836c;">仕<rp>(</rp><rt style="color:#93836c;font-size: 70%;letter-spacing: 2px;">つか</rt><rp>)</rp></ruby>え<ruby style="color:#93836c;">仕女<rp>(</rp><rt style="color:#93836c;font-size: 70%;letter-spacing: 2px;">め</rt><rp>)</rp></ruby>であった皇后さまを葬りましたのは、このわたしです。かく言うわたしも、キリスト教に入信いたしました</span></p>
        </blockquote>
        <p>マクセンティウスは、これを聞くと、われを忘れて猛獣のような声で唸った。</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　なんということになってしまったのか。わたしは、頼る者もなく、みんなから憐れまれる身の上になってしまった。</span></p>
          <p><span style="color: #b3884d;">ポルピュリウスよ、わたしのたましいの番人であり、わたしの心労のただひとりのなぐさめ手であったおまえまで、キリストにたらしこまれたのか！</span></p>
        </blockquote>
        <p>皇帝は、この泣きごとをまわりにいる親衛兵たちにむかって言ったのだが、彼らはこう言った。</p>
        <blockquote>
          <p><span style="color: #936c93;">—　わたしたちも、キリストの信者でございます</span></p>
        </blockquote>
        <p>皇帝は、すっかり逆上して、ポルピュリウスといっしょにこいつらも斬首し、死体を犬どもに投げあたえよと下知した。</p>
        <p>そのあと、こんどはカテリナを呼ばせて、</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　そなたは、魔術を使って王妃を死に追いやってしまった。それでも、正気にもどるというのであれば、わたしの宮廷の第一人者にしてやろう。</span></p>
          <p><span style="color: #b3884d;">今日のうちに神々に香を供えるがよい。応じなければ、首を刎ねられるであろう</span></p>
        </blockquote>
        <p>カテリナは答えた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　どうなりと、お決めになったことを実行なさってくださいませ。どんな拷苦にも耐える覚悟ができております</span></p>
        </blockquote>
        <p>こうして、打ち首にするという宣告がくだされた。</p>
        <p>彼女は、仕置き場へ連行されると、眼を天に凝らして祈りはじめた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　おお、すべての信じる者の期待にして救いであるおん者、すべての乙女らのほまれであり誇りであるおん者、めでたき王、主イエスさま、お願いでございます。わたくしの受難の日をこころから祝い、臨終のさいや危急のときにわたくしの名を呼ぶ人たちの願いが、どうか聖寵によってかなえられますように</span></p>
        </blockquote>
        <p>すると、ひとつの声がとどいた。</p>
        <blockquote>
          <p><span style="color: #6c936c;">—　わたしのいとし子、わたしの花嫁、来るがよい。</span></p>
          <p><span style="color: #6c936c;">天国の門は、あなたに開かれている。</span></p>
          <p><span style="color: #6c936c;">あなたの祝日をこころをこめて祝うすべての人たちに、あなたが願った聖寵をあたえると約束しよう</span></p>
        </blockquote>
        <p>それから刑吏たちは、彼女の首を打ち落とした。
        すると、彼女のからだから、血のかわりに乳がながれだした。</p>
        <p>天使たちは、遺体を抱きあげ、そこから歩いて二十日以上もかかる<a href="#note_sinai" title="シナイの山にはこび、うやうやしく葬った" id="sinai" class="yellow">シナイの山にはこび、うやうやしく葬った</a>。</p>
        <p>彼女の聖遺骨からは、病めるすべての人たちを癒やす霊験あらたかな香油がたえずながれでている。</p>
        <p><span style="color: #df8f20;">聖カテリナ</span>が殉教したのは、主の紀元<time datetime="310">３１０年</time>ごろ帝位についた<a href="#note_maximinus" title="マクシミヌス帝" id="maximinus" class="yellow">暴君マクセンティウス帝またはマクシミヌス帝</a>のときであった。</p>
        <p>マクセンティウスがこの犯罪や、彼がおかしたその他の罪業のために罰をくだされた話は、<a href="#note_croix" title="〈聖十字架の発見〉" id="croix" class="yellow">〈聖十字架の発見〉の章</a>に述べられている。</p>
        <p>話によると、<a href="#note_rouen" title="ロトマグス" id="rouen" class="yellow">ロトマグス</a>のある修道士は、シナイの山に行き、７年のあいだ<span style="color: #df8f20;">聖女カテリナ</span>に仕えた。</p>
        <p>あるとき、ご遺体のかけらでもいただきとうございます、と聖女に熱心に祈願していると、突然聖女の指の一部がぼきりと手から落ちた。</p>
        <p>彼は、この神の<ruby>賜<rp>(</rp><rt>たま</rt><rp>)</rp>物<rp>(</rp><rt>もの</rt><rp>)</rp></ruby>をよろこんで押しいただき、故郷の修道院へもって帰った。</p>
        <p>また、べつの話によると、ある男がいて、<span style="color: #df8f20;">聖カテリナ</span>にこころから帰依し、なんども聖女の名を呼んで加護をもとめたことがあった。
        ところが、年月がたつうちに最初の熱意がさめ、帰依の気持もうすらいで、もう聖女に代願をもとめなくなった。</p>
        <p>あるとき、身を投げて祈っていると、たくさんの乙女たちがそばを通りすぎていくのが見えた。</p>
        <p>なかにひときわ明るくかがやくひとりの乙女がいた。
        その乙女は、彼のそばまで来ると、頭からヴェールをおろし、顔が見えないようにして通りすぎていった。</p>
        <p>彼は、彼女のかがやく容姿にこころをうばわれて、あのかたはだれですかとたずねた。</p>
        <p>すると、乙女たちのひとりが答えた。</p>
        <p><span style="color: #577575;">「あれは、あなたがむかしよくご存じのカテリナ聖女さまです。しかし、あなたは、いまではあのかたのことなんか忘れておいでなので、あのように顔をかくして、あかの他人のように通りすぎていかれたようです</span></p>
        <p>ここでわれわれは、<span style="color: #df8f20;">聖カテリナ</span>が<span style="color: #936c93;">五つの点</span>で衆にぬきんでた乙女であることに留意しなくてはならない。</p>
        <p>その五つの点とは、まず<span style="color: #936c93;">学識</span>、つぎに<span style="color: #936c93;">雄弁</span>、第三に<span style="color: #936c93;">毅然たる態度</span>、第四に<span style="color: #936c93;">純潔</span>、最後に<span style="color: #936c93;">聖品の高さ</span>である。</p>
        <p><span style="color: #936c93;">まず</span>、<span style="color: #df8f20;">聖カテリナ</span>は、<span style="color: #936c93;">知恵</span>の点でずばぬけていた。</p>
        <p>というのは、あらゆる種類の哲学に精通していたからである。</p>
        <p>ところで、哲学ないし世界知というものは、<span style="color: #6c8993;">理論学</span>と<span style="color: #6c8993;">実践学</span>と<span style="color: #6c8993;">論理学</span>とにわかれる。</p>
        <p><span style="color: #6c8993;">理論学</span>は、さらに<span style="color: #93896c;">認識論</span>と<span style="color: #93896c;">自然学</span>と<span style="color: #93896c;">数学</span>の<span style="color: #93896c;">三つ</span>にわかれるとされる。</p>
        <p><span style="color: #df8f20;">聖カテリナ</span>は、<span style="color: #936c93;">神にかんする事柄の認識</span>においてすぐれた知見をもっていた。</p>
        <p>このことは、とりわけあの五十人の学者たちとの論戦において実証された。</p>
        <p>彼女は、ただひとりの神だけが真実の神であり、それ以外の神々はすべて偽神にすぎぬことを学者たちに論証してみせたのである。</p>
        <p>また、それより<span style="color: #936c93;">低い次元の事柄の認識においては自然学的知見</span>ももっていた。</p>
        <p>さきにも見たように、とりわけ皇帝との問答にそれがしめされた。</p>
        <p>さらに、あらゆる地上のものをさげすむことにおいて数学的英知をもそなえていた。</p>
        <p>というのは、数学は、<a href="#note_boece" title="ボエティウス" id="boece" class="yellow">ボエティウス</a>によれば、形あるすべてのものを物質をぬきにして抽象的に考察する学問だからである。</p>
        <p><span style="color: #df8f20;">聖カテリナ</span>が自分のこころを地上の物質にたいするあらゆる執着から引きはなしたのは、数学的英知をもっていたことのあらわれであった。</p>
        <p><span style="color: #577575;">「わたくしは、コストス王のひとり娘でございます。けれども、王家に生まれ......」</span>
        と皇帝の下問に答えるくだりが、それである。</p>
        <p>彼女は、とりわけ王妃にむかってこの数学的英知をしめした。</p>
        <p>というのは、この物質の世界をさげすみ、地上の王国を棄てて永遠の王国をもとめることを皇后にすすめたからである。</p>
        <p>つぎに、<span style="color: #93896c;">実践学</span>も、三つにわかれる。</p>
        <p><span style="color: #93896c;">倫理学</span>と<span style="color: #93896c;">経済学</span>と<span style="color: #93896c;">公民学もしくは政治学</span>との三つである。</p>
        <p>倫理学は、いかにして道義をまなび、徳を身につけるかを教え、人間形成に役だつ学問である。</p>
        <p>経済学は、いかにして一家の暮らしを立てるかを教え、家長のために役だつ。</p>
        <p>政治学は、都市と市民と国家をいかに統治するかを教え、都市の支配者たちに役だつ。</p>
        <p><span style="color: #df8f20;">聖カテリナ</span>は、これら三つの学問を身につけていた。</p>
        <p>彼女にはあらゆる良風美俗がそなわっていたから、倫理学を身につけていた。</p>
        <p>父王から受けついだ大きな所帯をたくみにとりしきったから、経済学にも<ruby>造<rp>(</rp><rt>ぞう</rt><rp>)</rp>詣<rp>(</rp><rt>けい</rt><rp>)</rp></ruby>があった。
        さらに、皇帝に賢明な教えを垂れたから、政治学にも通じていた。</p>
        <p>論理学も、三つにわけられる。</p>
        <p>推論と弁証と<ruby>詭<rp>(</rp><rt>き</rt><rp>)</rp>弁<rp>(</rp><rt>べん</rt><rp>)</rp></ruby>である。</p>
        <p>推論は、哲学者のためのもの、弁証は、雄弁家と弁証家のためのもの、詭弁は、ソフィストのためのものである。</p>
        <p><span style="color: #df8f20;">聖カテリナ</span>は、これら三つのものもそなえていた。</p>
        <p>というのは、さきにも書かれているように、
        <span style="color: #577575;">「三段論法のさまざまな結論を駆使してあるときは寓意的、比喩的に、またあるときは弁証法的、神秘論的に皇帝と多くのテーマについて議論をたたかわせた」</span>からである。</p>
        <p><span style="color: #936c93;">第二</span>に、<span style="color: #df8f20;">聖女カテリナ</span>の<span style="color: #936c93;">雄弁</span>は、賛嘆すべきものがあった。</p>
        <p>彼女の話からもうかがえるように、教えを説くときはじつに雄弁であったからである。</p>
        <p>その話しぶりは、弁明するのにもたいへんたくみであった。</p>
        <p>皇帝にむかって、
        <span style="color: #577575;">「陛下は、たかが職人の手で建てられたにすぎないこの神殿を立派だとおもっていらっしゃいます」</span>
        と言ったとき、それを実証してみせた。</p>
        <p>また、彼女の話しぶりは、魅力にもあふれていて、人びとのこころを引きつけた。</p>
        <p>ポルピュリウスと王妃がそうであった。</p>
        <p>ふたりは、彼女の話の甘味さによって信仰にみちびかれたのである。</p>
        <p>彼女はまた、人を説得する力をももっていた。</p>
        <p>彼女の弁舌によって説得された五十人の学者たちの例が、その証左である。</p>
        <p>第三<span style="color: #936c93;">
        </span>は、彼女の<span style="color: #936c93;">毅然たる態度</span>である。</p>
        <p>というのは、彼女は、どんな<ruby>脅<rp>(</rp><rt>おど</rt><rp>)</rp></ruby>しにもめげず、平然としていたからである。
        だから、皇帝が脅しをかけたときも、
        <span style="color: #577575;">「考えつくどんな責苦でもいますぐ考えだしてくださいませ。
        わたくしは、一刻もはやくわたくしの肉と血を主にささげたいと切願しているのでございます」</span>
        とも、「どうなりと、お決めになったことを実行なさってくださいませ。
        <span style="color: #577575;">どんな拷苦にも耐える覚悟ができております」</span>
        とも言ってのけたのである。</p>
        <p>さらに、彼女は、どんな贈りものも受けとらず、毅然としていた。  というのは、皇帝が
        <span style="color: #577575;">「わたしの宮廷で皇后につぐ地位をあたえよう」</span>
        と約束したとき、
        <span style="color: #577575;">「考えるだけでも罪ぶかいようなことをおっしゃらないでくださいませ」</span>
        とはねつけたからである。</p>
        <p>彼女はまた、どんな責苦にたいしても毅然としていて、それにうち勝った。</p>
        <p>彼女が牢獄に入れられたときや、刑車に乗せられようとしたときの態度が、それを雄弁に語っている。</p>
        <p><span style="color: #936c93;">四番目</span>は、彼女の<span style="color: #936c93;">乙女としての純潔</span>である。</p>
        <p>というのは、彼女は、純潔を汚されかねないような状況にあっても、純潔を守りつづけたからである。</p>
        <p>およそ純潔を失いかねない状況は、五つある。</p>
        <ul>
          <li><span style="color: #936c93;">心身をなまくらにする莫大な資産</span>、</li>
          <li><span style="color: #936c93;">われわれを誘惑する機会</span>、</li>
          <li><span style="color: #936c93;">遊び好きにさせる若さ</span>、</li>
          <li><span style="color: #936c93;">人を放縦にする自由</span>、</li>
          <li><span style="color: #936c93;">心をそそる美しさ</span>
          の五つがそれである。</li>
        </ul>
        <p>この五つの条件がみなそろっていたにもかかわらず、<span style="color: #df8f20;">カテリナ</span>は、純潔を守った。</p>
        <ul>
          <li>彼女は、富裕な両親が残してくれたありあまるほどの富のなかで暮らしていた。</li>
          <li>みずから女主人として<ruby>四<rp>(</rp><rt>し</rt><rp>)</rp>六<rp>(</rp><rt>ろく</rt><rp>)</rp>時<rp>(</rp><rt>じ</rt><rp>)</rp>中<rp>(</rp><rt>ちゅう</rt><rp>)</rp></ruby>召使いたちといっしょにいたのだから、機会はいくらでもあった。</li>
          <li>彼女は、若かったし、おまけに自由な身そらでもあった。</li>
          <li>というのは、宮殿から出ることもなく、ひとりきりで、自由な生活をしていたからである。</li>
        </ul>
        <p>この四つのことについては、上述のように、</p>
        <p><span style="color: #577575;">「このとき十八歳であったカテリナは、大勢の召使いとありあまるほどの富にかこまれて、宮殿でひとりで暮らしていた」</span>
        とあることからもわかる。</p>
        <p>彼女はまた、美しかった。
        聖伝にも、<span style="color: #577575;">「彼女は、やさしく、美しかった。
        そのすばらしい、たおやかな美しさのためにだれの眼にも愛くるしく見えた」</span>と書かれている。</p>
        <p><span style="color: #936c93;">第五</span>は、彼女の<span style="color: #936c93;">聖品の高さ</span>である。</p>
        <p>というのは、ある種の聖人たちは、死にあたって特別な聖寵にあずかった。</p>
        <p>たとえば、</p>
        <ul>
          <li><a href="#note_jean" title="福音書記者ヨハネ" id="jean" class="yellow">福音書記者ヨハネ</a>にあったような主のご出現、</li>
          <li>聖ニコラウスのばあいのような香油の流出<span style="color: #ccc;">（黄金伝説・第３章）</span>、</li>
          <li>聖パウロにみられた乳の流出<span style="color: #ccc;">（黄金伝説・第８５章）</span>、</li>
          <li>聖クレメンスのばあいにあったように、主が墓を用意してくださること<span style="color: #ccc;">（黄金伝説・第１６４章）</span>、</li>
          <li>聖女マルガレタが彼女を記念する日を祝う人たちのために祈ったときのように、その願いが神に聞きとどけられることなどがそれである<span style="color: #ccc;">（黄金伝説・第８８章）</span>。</li>
        </ul>
        <p>その聖伝に見られたように、<span style="color: #df8f20;">聖カテリナ</span>は、一身でこれらすべての聖寵にあずかったから、その聖品の高さがわかろうと言うものである。</p>
        <p>ところで、最後にひとつの問題がある。</p>
        <p>というのは、<span style="color: #df8f20;">聖カテリナ</span>を殉教させたのは皇帝マクセンティウスであったか、それともマクシミヌス帝であったかという点で説がわかれているのである。</p>
        <p><span style="color: #df8f20;">聖カテリナ</span>が受難したころの皇帝と言うと、つぎの三人である。</p>
        <ul>
          <li>父のあとを継いで帝位についた<a href="#note_constantin" title="コンスタンティヌス" id="constantin" class="yellow">コンスタンティヌス</a>。</li>
          <li>マクシミアヌス帝の子で、ローマで近衛兵たちによって<ruby>正帝<rp>(</rp><rt>アウグストウス</rt><rp>)</rp></ruby>に祭りあげられたマクセンティウス。</li>
          <li>東の<ruby>副帝<rp>(</rp><rt>カエサル</rt><rp>)</rp></ruby>であったマクシミヌス。</li>
        </ul>
        <p>この三人のうち、年代記によると、マクセンティウスは、ローマでキリスト教徒を迫害し、マクシミヌスは、東方で暴虐をほしいままにしたという。</p>
        <p>だとすると、<span style="color: #df8f20;">聖カテリナ</span>を殉教に追いやったのはマクシミヌスであって、これをマクセンティウスとしたのは写本家のミスであるとする説が正しいのであろう。</p>



</article>

<hr>

<aside>

    <h3 id="note_artsliberaux" class="yellow">七学芸</h3>
    <div class="notices yellow">
    <p>中世の中等、高等程度の学校では、神学以外に一般教養科目として七教養学が課せられ、これは、三学（文法、修辞、弁護法）と四学（算術、幾何、天文、数学）から成っていた。</p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#artsliberaux" title="七学芸">七学芸↑</a></p>
    </footer>


    <h3 id="note_maxentius" class="yellow">皇帝マクセンティウス</h3>
    <div class="notices yellow">
    <p>ローマ皇帝（位<time datetime="285">２８５年</time>ー<time datetime="305">３０５年</time>、<time datetime="305">３０５年</time>ー<time datetime="308">３０８年</time>）。ディオクレティアヌスによって副帝（カエサル）、ついで西の正帝（アウグストゥス）に任じられる、ともにキリスト教徒を迫害（<time datetime="303">３０３年</time>）、ともに退位。その子マクセンティウスの挙兵を助けふたたび活動、のち不和になってガリア（フランス）に逃げ、女婿コンスタンティウスと争って自殺した。</p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#maxentius" title="皇帝マクセンティウス">皇帝マクセンティウス↑</a></p>
    </footer>


    <h3 id="note_sybille" class="yellow">シビュラ</h3>
    <div class="notices yellow">
    <p>異教的古代の女託宣者。その数はひとりとも十人とも言われる。最も古いのは、小アジアのエリュトライにいたシビュラであるが、ここに言われるのは、クマエ（ナポリの西にあった古い町）のシビュラである。彼女は、その託宣を９巻の本に書いてローマの王に売りつけ、この「シビュラの書」は、前一世紀のかピトール丘の火災で焼失するまでそこのユピテル神殿に秘蔵されていた。旧約偽典および新訳外典に入れられる『シビュラの託宣』は、前２世紀ごろエジプトで成立したユダヤ教的偽作文書で、それに後代にキリスト教的改変ないし挿入をくわえたもの。</p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#sybille" title="シビュラ">シビュラ↑</a></p>
    </footer>


    <h3 id="note_scorpion" class="yellow">さそり鞭</h3>
    <div class="notices yellow">
    <p>逆鉤または鎖のついた<ruby>鞭<rp>(</rp><rt>むち</rt><rp>)</rp></ruby>、拷問具のひとつ。</p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#scorpion" title="さそり鞭">さそり鞭↑</a></p>
    </footer>


    <h3 id="note_maximinus" class="yellow">マクシミヌス帝</h3>
    <div class="notices yellow">
    <p>この前後でマクシミヌスという名の皇帝は存在しない。あるいは、がレリウス帝の甥で３０５年その副帝となり、のち正帝となったマクシミヌス帝（在<time datetime="308">３０８年</time>ー<time datetime="314">３１４年</time>）との混同かもしれない。</p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#maximinus" title="マクシミヌス帝">マクシミヌス帝↑</a></p>
    </footer>


    <h3 id="note_croix" class="yellow">〈聖十字架の発見〉</h3>
    <div class="notices yellow">
    <p>黄金伝説の第６４章、〈聖十字架の発見〉とのことです。</p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#croix" title="〈聖十字架の発見〉">〈聖十字架の発見〉↑</a></p>
    </footer>


    <h3 id="note_rouen" class="yellow">ロトマグス</h3>
    <div class="notices yellow">
    <p><ruby lang="ja">ロトマグス<rp>(</rp><rt lang="la">Rothomagus</rt><rp>)</rp></ruby lang="ja">。現<ruby lang="ja">ルアン<rp>(</rp><rt lang="fr">Rouen</rt><rp>)</rp></ruby lang="ja">市（フランス中北部、セーヌ川下流の港町）の古名。ここに語られているのはルアン近傍の<ruby lang="ja">サント<rp>(</rp><rt lang="fr">Sainte</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>トリニテ<rp>(</rp><rt lang="fr">Trinité</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>デュ<rp>(</rp><rt lang="fr">du</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>モン<rp>(</rp><rt lang="fr">Mont</rt><rp>)</rp></ruby lang="ja">修道院（現在、<ruby lang="ja">サント<rp>(</rp><rt lang="fr">Sainte</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>カテリヌ<rp>(</rp><rt lang="fr">Catherine</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>デュ<rp>(</rp><rt lang="fr">du</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>モン<rp>(</rp><rt lang="fr">Mont</rt><rp>)</rp></ruby lang="ja">修道院）にいた修道士の話で、彼が１０世紀前半にシナイの聖カテリナ修道院からもち帰ったとされる聖女の聖遺物は、たびたび奇跡をこなったので、トリニテ＝オ＝モンは、たちまち西欧における聖カテリナ崇敬の中心地のひとつとなった。</p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#rouen" title="ロトマグス">ロトマグス↑</a></p>
    </footer>


    <h3 id="note_fiancee" class="yellow">わが身をキリストに花嫁としてささげた女でございます</h3>
    <div class="notices yellow">
    <p>伝承によると、カテリナは、皇帝の息子から求婚されたが、鏡にうつった姿から求婚者が家柄、美しさ、富、学識の点で自分にふさわしいくないことを見てとった。ある隠修士からキリストこそいちばんすばらしい花婿であることを教えられ、聖母にキリストの花嫁にしてくださいとたのむと、聖母は、二度彼女にあらわれて洗礼を受けないかぎり、キリストの花嫁になることはできないと教えた。彼女が洗礼を受けると、夢に幼児キリストがあらわれ、彼女の指に婚約指輪をはめたという。</p>
    <p>文書へ戻る：　<a href="#fiancee" title="申しあげておきますが、わたくしは、わが身をキリストに花嫁としてささげた女でございます">申しあげておきますが、わたくしは、わが身をキリストに花嫁としてささげた女でございます↑</a></p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#fiancee" title="わが身をキリストに花嫁としてささげた女でございます">わが身をキリストに花嫁としてささげた女でございます↑</a></p>
    </footer>


    <h3 id="note_sinai" class="yellow">シナイの山にはこび、うやうやしく葬った</h3>
    <div class="notices yellow">
    <p>しかし、シナイ山では聖カテリナのこともその墓のことも、まったく知られていなかったと言われる。山麓の有名な聖カテリナ修道院が建てられたのは、６世紀中葉のことである。聖遺物をもっているはずのこの修道院も、聖カテリナ崇敬の発祥地にも中心地にもならなかった。</p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#sinai" title="シナイの山にはこび、うやうやしく葬った">シナイの山にはこび、うやうやしく葬った↑</a></p>
    </footer>


    <h3 id="note_rouen" class="yellow">ボエティウス</h3>
    <div class="notices yellow">
    <p><ruby lang="ja">ボエティウス<rp>(</rp><rt lang="la">Boethius</rt><rp>)</rp></ruby lang="ja">は、古代ローマ末期のイタリアの哲学者、政治家。</p>
    <p>ローマ貴族の家系に生まれ、幼くして孤児となり貴族シンマクスに養われる。アテナイに留学し、帰国後は「水晶と象牙で飾られた書斎」で研究生活を送る。この前後に恩人シンマクスの娘と結婚している。時のイタリア支配者、東ゴート王国のテオドリック王に仕官し、貨幣制度の改革などに関わる。次第に高位に昇り、<time datetime="510">５１０年<time>には西ローマ帝国の執政官となる。<time datetime="522">５２２年<time>には彼の息子ニ人も執政官となるほど王の信任を得ていたが、かつての執政官アルビヌスの反逆に与したという嫌疑でパヴィアに投獄され、処刑された。獄中で韻文混じりの散文で『<ruby lang="ja">哲学の慰め<rp>(</rp><rt lang="la">De&#160;consolatione&#160;philosophiae</rt><rp>)</rp></ruby lang="ja">』を書き、慰めを古代哲学に求めている。</p>
    <p>ボエティウスの思想の根幹はプラトンとストア派にあり、理性により感情と外界の障害を克服しようとする。彼はアリストテレスの論理学をラテン語に翻訳し、これが中世のアリストテレス研究の端緒となった。また、ニコマコス、エウクレイデス、アルキメデス、プトレマイオスなどの著作も訳出しギリシア哲学・科学の紹介者として中世思想に大きな影響を与えている。</p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#boece" title="ボエティウス">ボエティウス↑</a></p>
    </footer>


    <h3 id="note_jean" class="yellow">福音書記者ヨハネ</h3>
    <div class="notices yellow">
    <p>福音書記者ヨハネの伝説は黄金伝説の<a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#jean9-selon-legende" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#jean9-selon-legende">第９章</a> に語られています。</p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#jean" title="福音書記者ヨハネ">福音書記者ヨハネ↑</a></p>
    </footer>


    <h3 id="note_constantin" class="yellow">コンスタンティヌス</h3>
    <div class="notices yellow">
    <p>ローマ皇帝コンスタンティヌス一世（位<time datetime="306">３０６年<time>ー<time datetime="337">３３７年<time>）大帝とよばれる。キリスト教の最初の公認者、その保護・育成につとめ、みずから〈十三人目の使徒〉おもって任じ、第一回ニカイヤ公会議によってアリウス派を保護とした。<time datetime="330">３３０年<time>都をローマからビザンティウムに移し、これをコンスタンティノポリスと改名。自身はずっと<ruby>常勝太陽神<rp>(</rp><rt>ソル・インヴィクトゥス</rt><rp>)</rp></ruby>の信者であったが、臨終の床で受洗した（黄金伝説の第１２章に参照）。</p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#constantin" title="コンスタンティヌス">コンスタンティヌス↑</a></p>
    </footer>


    <h3 id="note_incarnation" class="yellow">託身</h3>
    <div class="notices yellow">
    <p>神のひとり子が人類救済のため聖霊のはたらきによりマリアの胎内で受肉として隆世したことを<ruby lang="ja">託身<rp>(</rp><rt lang="la">incarnatio</rt><rp>)</rp></ruby lang="ja">と言う。</p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#incarnation" title="託身">託身↑</a></p>
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