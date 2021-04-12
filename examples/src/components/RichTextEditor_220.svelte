<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 17 -->

<article>
  <hgroup>
  <h2 id="mise-en-relation" class="yellow"><cite><ruby lang="ja" style="color:#555;">洗礼者<wbr>ヨハネと<wbr>福音書記者<wbr>ヨハネの<wbr>三連画<rp>(</rp><rt lang="nl" style="color:#999;">Triptiek van Johannes de Doper en Johannes de Evangelist</rt><rp>)</rp></ruby></cite>に表わされている場面の元にある様々な文書</h2>
    <h3 id="barb-selon-legende" class="yellow"><ruby style="color:#e6a64d;">黄金伝説<rp>(</rp><rt style="color:#e6a64d;">レゲンダ・アウレア</rt><rp>)</rp></ruby>においての聖バルバラの伝説</h3>
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
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《大殉教者バルバラ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、三連画の中央パネルの詳細、《大殉教者バルバラ》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.jpg 1920w"></picture><figcaption>大殉教者バルバラ</figcaption>
  </figure>

      <h4 id="barb-selon-legende" class="yellow"><ruby style="color:#e6a64d;">黄金伝説<rp>(</rp><rt style="color:#e6a64d;">レゲンダ・アウレア</rt><rp>)</rp></ruby>においての聖バルバラ</h4>

        <p><a href="#note_nicomedie" title="ニコメディア" id="nicomedie" class="yellow">ニコメディア</a>では、<a href="#note_maximien" title="マクシミアヌス大帝" id="maximien" class="yellow">マクシミアヌス大帝</a>時代に、富裕な、とても礼儀正しい家族の出の<span style="color: #99713d;">ディアスコロス</span>という名の異教徒がいた。</p>
        <p>彼には<span style="color: #994c3d;">バルバラ</span>と呼ばれるとても美しい娘がいた。</p>
        <p>父は彼女をとても愛していた。
        そのため、男の人一人も彼女を見られないように、彼は彼の作らせたとても高い塔に彼女を閉じ込めさせた。
        最も若かい頃から、<span style="color: #994c3d;">バルバラ</span>は地上のことの虚しさを感じることにあたって、天のことの瞑想に力を入れるようになり始めた。</p>
        <p>ある日、<ruby>社<rp>(</rp><rt>やしろ</rt><rp>)</rp></ruby>に入って、壁を沿う偶像を見ると、彼女は両親に尋ねた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　これらの人間を表す偶像は何を意味するか</span></p>
        </blockquote>
        <p>両親は彼女に答えた。</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　黙れ。彼らは人間ではなく、しかも神々。彼らは崇拝されたいのだ。</span></p>
        </blockquote>
        <p><span style="color: #994c3d;">バルバラ</span>は言う。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　昔、彼らはかつて人間だったか</span></p>
        </blockquote>
        <p>それで彼女にそうだと答えられた。</p>
        <p>そしたら、彼女はそれについて昼も夜も自分の中で言っていた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　もし我々の神々が人間だったならば、人間と同じようにして生まれ、人間と同じように死んだ。もし彼らが神だったならば、彼らは生まれないだろうし、死ぬこともないのだろう。なぜなら神が、私にして見える限り、始まったりはしないもの、止んだりもすることの出来るものではないから。</span></p>
        </blockquote>
        <p>そこで、彼女はこの木や石でのいわれ神々を軽蔑するようになった。
        しかし彼女にはまだ真の神の知識がまだ欠いていた。</p>
        <p>そうしているうちに、アレクサンドリアには、真の神の存在と偶像の空虚さを証明した<a href="#note_origene" title="オリゲネス" id="origene" class="yellow">オリゲネス</a>という名の計り知れない知恵の持ち主がいた噂がニコメディアに広がった。</p>
        <p>これを知った<span style="color: #994c3d;">バルバラ</span>は喜びで満たされ、どうやって彼を聞きに行けるかを考えた。
        だが、彼女は自分の父親に話す勇気がなかったので、彼女は自分の考えを、オリゲネスに書く考えを採択した。
        彼女がこういう言葉でそうした。</p>
        <blockquote>
          <p><span style="visibility:hidden;">— その栄光が普遍的に広まっているアレクサンドリアのオリゲネスへ、ニコメディアのバルバラは私。あなた方の召使いが，あなた方が彼女を真実の神の知識へ導くように切望している。</span></p>
          <p><span style="color: #df8f20;">自分の理性の最初の夜明けから、私はこの知識に到達したいと心の底では最強の希望を感じ、神が、話すことも聞こえることのできない、手の業である画像にはいられないと常に考えていた。又、人間になったことがあって，神として描かれている者たちが，そうにはいられないとも考えた。</span></p>
          <p><span style="color: #df8f20;">なぜなら、人間が始まって終わるのですが、神はすべての時代の前とすべての時代の後に存在します。</span></p>
          <p><span style="color: #df8f20;">そして私は，私には未知であるしかもすべてのことを創造したこの神に自分の信頼を置いた。私は彼に愛を捧げ、彼を知ることが出来るように何も惜しまない。</span></p>
          <p><span style="color: #df8f20;">あなたの才能の名声が私まで届いた。</span></p>
          <p><span style="color: #df8f20;">それで、尊ぶべき父よ、あなた方が説く神の学識までに私を連れて行ってくれることを私は考えた。ついにあなた方が私の無知の闇を分散させて真の信仰の光までに私を導いてくれることを私は願っている。</span></p>
        </blockquote>
        <p>オリゲネスへ自分の手紙を送った彼女は、涙を零しながら、主に祈って言った。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　主よ、私があなたのしもべに送った人の足を強めたまえ、私が求めた光が来るように。</span></p>
        </blockquote>
        <p>使者はアレクサンドリアに到着し，
        アレクサンデル大帝の母マメアの宮殿にオリゲネスを見付け、
        彼がイエス・キリストの教義を説くことに精一杯だった。</p>
        <p>彼は<span style="color: #994c3d;">バルバラ</span>からの手紙を非常に喜んで受け取り、
        こんな熱心を呼び起こす神を称賛し、
        彼女にこう返信して急いだ。</p>
        <blockquote>
          <p><span style="color: #165493;">「イエス・キリストの名に値しない司祭、又彼の説教師かも知れない、まだアレクサンドリアに在住しているオリゲネから異教徒の種族の、しかも帰化して神の子らとイエス・キリストの種族のバルバラへ。</span></p>
          <p><span style="color: #165493;">私はあなたに教えてやる，あなたが私に聞いているとおり，本当の神とは何かを。</span></p>
          <p><span style="color: #165493;">物質的に一つで、人格的に三人であることを知りたまえ。父と息子と聖霊。この教義を信じる者は、神に到達するために必要なものを持っている。</span></p>
          <p><span style="color: #165493;">あなたの欲望の充実に欠けているものを完成させるためには、信頼性を加えたまえ。</span></p>
          <p><span style="color: #165493;">私の使者に聞いたまえ。彼が神の律法を知らせて、彼が共に持っている聖なる本をあなたに読んで上げることにもする。</span></p>
          <p><span style="color: #165493;">イエス・キリストの名のために偉大な苦しみにさらされることを恐れないでください。</span></p>
          <p><span style="color: #165493;">彼は言っている。〈私のためにこの世で自分の魂を失う者は永遠の命ではその魂を保つだろう〉</span></p>
        </blockquote>
        <p>オリゲネスが<span style="color: #994c3d;">バルバラ</span>と協議するために弟子のいずれかを遣わして、
        その人が到着したと言われた際、
        彼女は直ちに入るように言った。</p>
        <p>神のしもべはイエス・キリストの名で彼女を迎えた。</p>
        <p>それで、父親がやって来て、
        見知らぬ人を見て、
        おびえて言った。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　この男はどなたで、何をしに来ているのか</span></p>
        </blockquote>
        <p>アレクサンドリア人は、自分が医学科学の教養を持って、しかも一般の医者たちと違って魂をも癒す教師だと答えた。</p>
        <p><span style="color: #994c3d;">バルバラ</span>の父はそれを聞いて、引き下げて、言葉を交わせることにした。</p>
        <p>そして、ヴァレンティヌスと号したキリスト教徒が<span style="color: #994c3d;">バルバラ</span>に宗教の神聖な神秘を説明し、
        父親が彼女を置いた同じ塔で洗礼させて、
        オリゲネスに送られた本を手渡した。</p>
        <p>彼女はこれらを読むことに努力し、
        教師がいなかったのに、神秘的な学識ではとても大きいな進歩を遂げた。</p>
        <p>彼女の美しさで、その国のいくつかの貴族の方々が彼女に恋慕したと言われている。
        彼らは彼女にお婿を取るよう父親と話をした。</p>
        <p>それで、父親が塔に行き、そういうふうに納得させようとしていった。</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　娘よ、力のある方が君を思い出して、お嫁にすると言ってくれた。君はどうしたいのか</span></p>
        </blockquote>
        <p>彼女は父親に怒りの満ちた見つめ方で答えた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　父親よ、こんな無理にさせないでくれる</span></p>
        </blockquote>
        <p>彼は彼女から去り、
        彼女から離れながら、たくさんの労働者を来させて、
        お風呂の館を建てさせ、遠く離れた国へ行った。</p>
        <p><span style="color: #994c3d;">バルバラ</span>は塔から何が作られたかを見に降りて、
        北側にはニつの窓しかいと見て、
        労働者たちに向かって言った。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　なぜこのニつの窓を作ったのか</span></p>
        </blockquote>
        <p>彼らは答えた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　お父さまがそう命じた」。</span></p>
        </blockquote>
        <p>彼女は答えた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　もう一つの窓を作ってくれ</span></p>
        </blockquote>
        <p>彼らは答えた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　お父さまが怒られるのを恐れている</span></p>
        </blockquote>
        <p>彼女は言った。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　私が言ったとおりにしてくれれば、私は父に承認することにする。</span></p>
        </blockquote>
        <p>そこで彼らはもう一つの窓を作った。</p>
        <p><span style="color: #994c3d;">バルバラ</span>は自分の手で、太陽の昇る側に、この建物の中で貴重な十字架を置いた。
        そうすると、塔に戻りながら、父親があがめる偶像を見にした。</p>
        <p>聖霊の感応に従い、彼女は顔につばを吐いて言った。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　君たちに同じくなりたまえ、君たちを作って、自分の信頼を君たちに置く人たちよ</span></p>
        </blockquote>
        <p>建物が完成する後、父親は旅から戻り、三つの窓を見て、労働者たちに向いて言った。</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　なぜ三つの窓を作ったのか</span></p>
        </blockquote>
        <p>彼らは答えた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　お娘さまが私たちに命令した。</span></p>
        </blockquote>
        <p>そこで彼は娘に言った。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　三つの窓を作る指示をしたのはのあなたか</span></p>
        </blockquote>
        <p>彼女は答えた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　そうするのことに十分な理由があったの。三つの窓が二元全体を照明するから」。</span></p>
        </blockquote>
        <p>そして父親は彼と一緒にお風呂の間まで連れて言った。</p>
        <blockquote>
          <p><span style="color: #b3884d;">—　なぜ三つの窓がニつよりも明るくなっているのか</span></p>
        </blockquote>
        <p>彼女は答えた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　世界を照明して星の進路を定めるのは三つである。父と子と聖霊。そして、実在として唯一である。</span></p>
        </blockquote>
        <p>そこで、激怒に満たされた父は彼女を殺しに刀を抜いた。</p>
        <p>しかし聖人は神に祈りをささげて、
        城壁が少し開いて、
        二人の羊飼いが羊を牧草させている山に運ばれた。</p>
        <p>父親が彼女の捜索し始めて、この羊飼いへ行き、彼らに娘を見たかと尋ねた。</p>
        <p>その内の一人は、父親が彼女がどこにいたのか分からずにいるから怒っているかを見たら、黙った。もう一人が指で彼女を指した。</p>
        <p><span style="color: #994c3d;">聖バルバラ</span>は彼女を裏切った者を呪って、
        その場で彼が大理石の立像に変えさせられて、
        その羊数匹が<ruby>飛蝗<rp>(</rp><rt>バッタ</rt><rp>)</rp></ruby>に変えさせられた。</p>
        <p>が、この話は偽書である。</p>
        <p>父親は、彼女を見つけると、彼女を殴りつけ、髪で彼女を引き寄せて、
        鎖で彼女を重くしかかった。</p>
        <p>彼は彼女を牢獄に閉じ込めて
        番人たちをたたせ、
        行われたすべてを<a href="#note_marcien" title="マルキアヌス" id="marcien" class="yellow">マルキアヌス</a>代理執政官に知らせて行った。</p>
        <p>代理執政官は<span style="color: #994c3d;">バルバラ</span>を彼の前に連れて来させてほしいと願った。</p>
        <p>彼女を見ると，彼は彼女の偉大な美しさに感銘を受けて言った。</p>
        <blockquote>
          <p><span style="color: #165493;">—　もしあなたが自分を救おうとしたければ永遠の神々に犠牲をしたまえ、さもないと最高の苦しみで死ぬことになる。</span></p>
        </blockquote>
        <p>彼女は答えた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　私は天と地球とそれが入っているすべてを成し遂げた私の主イエス・キリストに自分を犠牲として捧げたいのだ。</span></p>
          <p><span style="color: #df8f20;">あなたが崇める鬼たちについては、預言者が言われた。</span></p>
          <p><span style="color: #df8f20;">彼らは口があるが話せない。目があっても見えない。彼らに敬意を表する人々が彼らに似ている。</span></p>
        </blockquote>
        <p>激怒した代理執政官は、彼女の服を脱がせて遠慮なく牛の頸筋の鞭で打つのを命じた。
        それで彼女の全身が血に塗れてから、彼女にどんな苦痛を与えるかを決めるまでに牢獄に連れ戻すようにと命じた。</p>
        <p>真夜中に、大きな明快な光が殉教者の彼女を囲むことになった。イエス・キリストは彼女に現れて言った。</p>
        <blockquote>
          <p><span style="color: #6c936c;">—&#160;</span></td>
        <td><span style="color: #6c936c;">「勇気を出してください 、娘よ。あなたの受難中では、天国と地上では大いなる喜びがあるようとなる。僭主者のおどしを恐れないでくれたまえ。私はすべての悪から守るためにあなたと一緒にいる。</span></p>
        </blockquote>
        <p><span style="color: #994c3d;">聖バルバラ</span>は主の言葉に極端な喜びを感じ、
        朝、再び代理執政官の前に再び来させられ、彼女が前日に殴られたのに一撃の跡が一切残っていないのを見て、言われた。</p>
        <blockquote>
          <p><span style="color: #165493;">—　神々がどれだけ貴女に好意的なのか、どれだけ貴女を愛しているかのを見てくれたまえ。彼らが貴女の傷を癒したからだ。</span></p>
        </blockquote>
        <p><span style="color: #994c3d;">バルバラ</span>は彼に答えた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　あなたの神様はあなたと同様で耳が聞こえない、目も見えていない 、口も聞けないのであって、どうやって私を癒される出来たのであろうか。</span></p>
          <p><span style="color: #df8f20;">私を癒したのは，生きている神の子イエス・キリストなのだ。が、あなたは彼を見ない。なぜなら、あなたの心は悪魔によって鍛えられているからだ。</span></p>
        </blockquote>
        <p>代理執政官がいらいらした獅子のようにふるえて、火のつけた松明で肋骨を焼いて頭をハンマーで撃ってやるのを命じた。</p>
        <p>聖人が空を仰ぎて言った。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　主よ、私はあなたの愛のために苦しんでいるのだとご存知だ。私を見捨てないでくれたまえ。</span></p>
        </blockquote>
        <p>不信心なる代理執政官が彼女に乳を切られるのを命じた。</p>
        <p>それで、彼女は言う。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　ご自分の存在の枠外にこの私を追い出せて、主よ、聖霊を取り除かないでくれたまえ。</span></p>
        </blockquote>
        <p>そこから、彼は町中に彼女を裸で殴られながらも無理矢理に運ばせれるのを命じた。</p>
        <p>そうしたら、彼女は言われた。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　私の支えであって、雲で空を覆っている主よ、不信心なる目にさらされないようにこの私の体を覆いでくれたまえ。</span></p>
        </blockquote>
        <p>そこから天から天使が降りて、彼女に白い寛衣を持って来ることになった。</p>
        <p>そしたら、代理執政官が彼女に頭を切るように命じられた。
        しかし、彼女の父親が彼女を掴めて山へ連れて行った。
        彼女はこの祈りをした。</p>
        <blockquote>
          <p><span style="color: #df8f20;">—　すべてのことがあなたに従う主イエスよ、私の殉教を思い起こしてあなたの聖なる名を祈る人たちに裁きの日に罪が許されるよう叶え上げたまえ。</span></p>
        </blockquote>
        <p>そしたら彼女には天からやって来る声が聞こえてきて答えた。</p>
        <blockquote>
          <p><span style="color: #6c936c;">—&#160;</span></td>
        <td><span style="color: #6c936c;">「私の愛する人よ、来たまえ。天国にある私の父の家に癒したまえ。君が求めているのが君には叶えられている。</span></p>
        </blockquote>
        <p>すると殉教者が自分の父親本人の手で首が切られた。</p>
        <p>彼が山から降りると、天の火の塊が彼に襲い掛かって、彼を喰わせた。
        彼から一影も残らなかった。</p>
        <p>強力な<a href="#note_saxe" title="ザクセン" id="saxe" class="yellow">ザクセン</a>伯爵の男がいた。
        彼は自分の敵を捕虜してある塔に誰もが違反者には最も厳しい<ruby>刑<rp>(</rp><rt>けい</rt><rp>)</rp></ruby>を科して、その方に食べさせたり、飲みさせたりと禁じながらも閉じ込めさせた。</p>
        <p>その人がそこに数日間いた後、
        塔の番人に、うめき声をあげながら、<span style="color: #994c3d;">聖バルバラ</span>のことを考えて、死なないようにパンを少しあたえるように願った。
        が、番人はその願いを気にしなかったから、
        彼はぐったりと横たわっていたままだった。
        番人が彼が死んだと見込んで、
        彼が伯爵に悪い匂いが広がる前に死体を取り除く許可を求めた。
        そういうわけで死んだと思われているものの首に紐を縛って、
        岩のてっぺんから飛ばし降ろした。
        地面に当たるとすぐに立ち上がって、
        そこにいたみんなが恐怖し、逃げようとした。</p>
        <p>彼は彼らを呼び戻して恐れないようにと言った。
        そしたら、彼らが彼に近づいてきて，どうやって命を維持できたかと尋ねた。
        彼は彼らに答えた。</p>
        <blockquote>
          <p><span style="color: #165493;">—　聖バルバラが全ての困難を凝らすように僕を助けてくれた。</span></p>
          <p><span style="color: #165493;">墜落中で助けてくれたのは彼女だったし、僕は告白せずに聖体を受けずに死ぬことはできないのだ。</span></p>
        </blockquote>
        <p>なぜこの恵みを得ることが出来たかと尋ねられて、こう答えた。</p>
        <blockquote>
          <p><span style="color: #165493;">—　僕は聖バルバラに気に入って貰うよう一年も彼女の祝日に断食や祈りを惜しまなかった。だから彼女が神様に僕が秘跡を受けずに死ぬがないようにと願い出てくれた。</span></p>
        </blockquote>
        <p>そしたら、これらの秘跡を受けてからすぐに、息を返した。</p>
        <p>また、我々は、ローマ人の王の時代、アタウルフという伯爵がオリエントのそれぞれの州に頭として任命され、ある兵士が若い少女に暴力を振るった疑いされたことがあったと読む。</p>
        <p>彼は牢獄で判決を待っていた間、告白を願い出た。
        告白担当者が彼が無罪だと見抜いて、<span style="color: #994c3d;">聖バルバラ</span>に自分を奉仕することと彼女の名誉のため巡礼しない限り自分の家に戻らないことを誓うようと励んだ。</p>
        <p>女の人が声を大にして判決が言い渡されることを訴えている一方、裁判官たちが出席して被告人を出頭してから、死刑の宣告を下すことにした。
        そうすると、誰も知らない方が出て来て、その方が、発言する許可を願い出てから、正当な、反論の余地のない理屈で兵士が無罪で、判決も不公平だと明らかにした。</p>
        <p>裁判官たちは彼を放裁させて、
        自由に戻った兵士が、<span style="color: #994c3d;">聖バルバラ</span>の奉仕する日々を終えた。
        弁護士となった無名の男の人が彼が誰であるか知らないままに消えた。</p>



</article>

<hr>

<aside>

    <h3 id="note_nicomedie" class="yellow">ニコメディア</h3>
    <div class="notices yellow">
    <p><a href="https://ja.wikipedia.org/wiki/ニコメディア" title="https://ja.wikipedia.org/wiki/ニコメディア"><ruby lang="ja">ニコメディア<rp>(</rp><rt lang="grc">Νικομήδεια</rt><rp>)</rp></ruby lang="ja"></a>は、<a href="https://ja.wikipedia.org/wiki/ビテュニア" title="https://ja.wikipedia.org/wiki/ビテュニア">ビチニア王国</a>の首都、小アジアの都市です。 今はトルコにあり、<ruby lang="ja">イズミット<rp>(</rp><rt lang="tr">İzmit</rt><rp>)</rp></ruby lang="ja">と呼ばれている。 それは、<a href="https://ja.wikipedia.org/wiki/ディオクレティアヌス" title="https://ja.wikipedia.org/wiki/ディオクレティアヌス">ディオクレティアヌス</a>と<a href="https://ja.wikipedia.org/wiki/コンスタンティヌス1世" title="https://ja.wikipedia.org/wiki/コンスタンティヌス1世">コンスタンティヌス</a>の首都だった。</p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#maximien" title="マクシミアヌス大帝">ニコメディア↑</a></p>
    </footer>


    <h3 id="note_maximien" class="yellow">マクシミアヌス大帝</h3>
    <div class="notices yellow">
    <p><a href="https://ja.wikipedia.org/wiki/マクシミアヌス" title="https://ja.wikipedia.org/wiki/マクシミアヌス">マクシミアヌス</a>。ローマ東帝国皇帝だった<a href="https://ja.wikipedia.org/wiki/ディオクレティアヌス" title="https://ja.wikipedia.org/wiki/ディオクレティアヌス">ディオクレティアヌス</a>と<time datetime="286">２８６年<time>から<time datetime="305">３０５年<time>まで共同皇帝。<a href="https://ja.wikipedia.org/wiki/マクセンティウス" title="https://ja.wikipedia.org/wiki/マクセンティウス">マクセンティウス</a>の父上。</p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#nicomedie" title="ニコメディア">マクシミアヌス大帝↑</a></p>
    </footer>


    <h3 id="note_origene" class="yellow">オリゲネス</h3>
    <div class="notices yellow">
    <p><a href="https://ja.wikipedia.org/wiki/オリゲネス" title="https://ja.wikipedia.org/wiki/オリゲネス"><ruby lang="ja">オリゲン<rp>(</rp><rt lang="grc">Ὠριγένης</rt><rp>)</rp></ruby lang="ja"></a>は古代キリスト教の神学者で、<time datetime="185">１８５年<time>頃アレクサンドリアで生まれ、<time datetime="253">２５３年<time>頃にティルスで亡くなり、聖人ではなく教父として認められている。</p>
  </div>
    <footer>
      <p>文書へ戻る：　<a href="#origene" title="オリゲネス">オリゲネス↑</a></p>
    </footer>


    <h3 id="note_marcien" class="yellow">マルキアヌス</h3>
  <div class="notices yellow">
  <p>黄金伝説意外に、この代理執政官の跡は一つもありません。</p>
  </div>
    <footer>
      <p>文書へ戻る：　<a href="#marcien" title="マルキアヌス">マルキアヌス↑</a></p>
    </footer>


    <h3 id="note_saxe" class="yellow">ザクセン</h3>
    <div class="notices yellow">
    <p>ドイツの一地域で、その境界は歴史を通じて様々であり、ザクセンのパラティネート郡は、神聖ローマ皇帝の公国でした。１０世紀にオットー１世が創始し、現在のザクセン公国の南東のザーレ・ウンシュトルート地方に広がった。</p>
    </div>
    <footer>
      <p>文書へ戻る：　<a href="#saxe" title="ザクセン">ザクセン↑</a></p>
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