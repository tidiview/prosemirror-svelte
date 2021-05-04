<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:172 ANG:203  -->
<article>

<hgroup>
<h1 class="green">ミカエルとの名</h1>
<h2 class="green">神に似たるものは誰か</h2>
</hgroup>

<div class="notices green">
<p>大天使の「<a href="https://ja.wikipedia.org/wiki/ミカエル" title="https://ja.wikipedia.org/wiki/ミカエル"><ruby>ミカエル<rp>(</rp><rt>Michael</rt><rp>)</rp></ruby></a>」と<a href="https://ja.wikipedia.org/wiki/モン・サン＝ミシェル" title="https://ja.wikipedia.org/wiki/モン・サン＝ミシェル"><ruby>モン<rp>(</rp><rt>Mont</rt><rp>)</rp>・<rp>(</rp><rt></rt><rp>)</rp>サン<rp>(</rp><rt>Saint</rt><rp>)</rp>＝<rp>(</rp><rt>-</rt><rp>)</rp>ミシェル<rp>(</rp><rt>Michel</rt><rp>)</rp></ruby></a>の「<ruby>ミシェル<rp>(</rp><rt>Michel</rt><rp>)</rp></ruby>」は発音でも、よく似ています。</p>
<p>ここでは、相互関係を明らかにします。</p>
</div>

<h2 class="green">大天使の名について</h2>

<h3 class="green">明治維新時代の日本カトリック教徒たちには、「大天使ミシェル」でした</h3>

<p>明治維新の日本では、新政府が<a href="https://ja.wikipedia.org/wiki/信仰の自由" title="https://ja.wikipedia.org/wiki/信仰の自由">信仰の自由</a>を認めて、カトリック教会のローマ教皇庁はフランスに本部を置く<a href="https://ja.wikipedia.org/wiki/パリ外国宣教会" title="https://ja.wikipedia.org/wiki/パリ外国宣教会"><ruby>パリ外国宣教会<rp>(</rp><rt>Missions&#160;Étrangères&#160;de&#160;Paris</rt><rp>)</rp></ruby></a>に日本への宣教師派遣を依頼したため、カトリック教徒たちには、フランス語なりの発音である「大天使<ruby>ミシェル<rp>(</rp><rt>Michel</rt><rp>)</rp></ruby>」として知られました。</p>

<h3 class="green">新共同訳によって、正式に公に「大天使ミカエル」となりました</h3>

<p>２０世紀後半以降、近代以降の<a href="https://ja.wikipedia.org/wiki/エキュメニズム" title="https://ja.wikipedia.org/wiki/エキュメニズム"><ruby>教会一致運動<rp>(</rp><rt>エキュメニズム</rt><rp>)</rp></ruby></a>の流れに沿って、それまで異なる聖書を用いてきたカトリック教会とプロテスタント諸派世界各国で共同して聖書の翻訳に取り組んだ。</p>
<p>日本でもこの流れを受けて超教派のメンバーからなる翻訳委員会が結成され、まず1978年に共同訳聖書（新約のみ）を世に問うた。</p>
<p>しかし、共同訳聖書は「イエスス」「パウロス」などの固有名詞の原音表記主義や、翻訳が意訳すぎて従来親しまれた言葉が消えてしまったなどのために評判がよくなく、あまり受け入れられなかったため、新たな共同訳聖書の翻訳が行われた。</p>
<p>これが新共同訳聖書である。</p>
<p>その中では、大天使は英語の発音に属する「大天使<ruby>ミカエル<rp>(</rp><rt>Michael</rt><rp>)</rp></ruby>」として呼ばれるようとなりました。</p>

<h3 class="green">ヘブライ語での大天使ミカエルの発音とその意味とは</h3>

<h4 id="sens-en-hébreu" class="green">ヘブライ語での意味</h4>

<p>時代によって、呼び名が異なってきましたが、指されているものは今も昔も一緒です。</p>
<p>元々は聖書の原文であるヘブライ語での大天使の名は「 <ruby><rb><span style="background:#f1f9f1;color:#3d8b3d;" lang="he">מיכאל</span></rb><rt><span style="background:#f1f9f1;color:#3d8b3d;" lang="ja">ミッハエル</span></rt></ruby> 」となっています。</p>

<h4 class="green">ヘブライ語での発音</h4>

<p>ここでは、カタカナでの音の書き直しは、<a href="https://ja.wikipedia.org/wiki/国際音声記号" title="https://ja.wikipedia.org/wiki/国際音声記号">国際音声記号</a>で「Mîḵā’ēl」との発音に値することは、なかなか適するのはないため、次のヘブライ語での発音の録音を用意しました。</p>

<p class="no-puce"><audio controls="1" title="ヘブライ語での מיכאל の発音" alt="ヘブライ語での מיכאל の発音"><source src="https://francois-vidit.com/user/sites/docs/pages/01.home/05.mont-saint-michel/01.arch-michel/01.nom/prononciation_mihael.mp3" type="audio/mpeg">あなたのブラウザーは <code>audio</code> 要素に対応していません。</audio></p>

<h2 class="green">「神に似たるものは誰か」との意味の名</h2>

<h3 class="green">分析</h3>

<p>「<ruby><rb><span style="background:#f1f9f1;color:#3d8b3d;">מיכאל</span></rb><rt><span style="background:#f1f9f1;color:#3d8b3d;">ミッハエル</span></rt></ruby>」とのヘブライ語を分析しますと：</p>
<p>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:50px;float:left;text-align:center;">mî</span>
  <span style="background:#fff;min-width:10px;float:left;">&nbsp</span>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:60px;float:left;text-align:center;">ḵā’</span>
  <span style="background:#fff;min-width:60px;float:left;">&nbsp</span>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:50px;float:left;text-align:center;">ēl</span>
</p>
<p>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:50px;float:left;text-align:center;">誰か</span>
  <span style="background:#fff;min-width:10px;float:left;">&nbsp</span>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:60px;float:left;text-align:center;">似たる</span>
  <span style="background:#fff;min-width:10px;float:left;">&nbsp</span>
  <span style="background:#fff;min-width:40px;float:left;">もの</span>
  <span style="background:#fff;min-width:10px;float:left;">&nbsp</span>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:50px;float:left;text-align:center;">神</span>
  <span style="background:#fff;min-width:10px;float:left;">&nbsp</span>
  <span style="background:#fff;min-width:40px;float:left;">に</span>
</p>
<p>逆順に直して、「神に似たるものは誰か」との意味になります！</p>
<p>異常に恐ろしい天使だと断言できます。</p>

<h2 class="green">大天使ミカエル山、 モン・サン＝ミシェル</h2>

<h3 class="green">大天使ミカエル山</h3>

<p>「<ruby>モン<rp>(</rp><rt>Mont</rt><rp>)</rp>・<rp>(</rp><rt></rt><rp>)</rp>サン<rp>(</rp><rt>Saint</rt><rp>)</rp>＝<rp>(</rp><rt>-</rt><rp>)</rp>ミシェル<rp>(</rp><rt>Michel</rt><rp>)</rp></ruby>」を分析しますと：</p>
<p>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:50px;float:left;text-align:center;">Mont</span>
  <span style="background:#fff;min-width:20px;float:left;">&nbsp</span>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:50px;float:left;text-align:center;">Saint</span>
  <span style="background:#fff;min-width:20px;float:left;text-align:center;">-</span>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:70px;float:left;text-align:center;">Michel</span>
</p>
<p>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:50px;float:left;text-align:center;">山</span>
  <span style="background:#fff;min-width:20px;float:left;text-align:center;">・</span>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:50px;float:left;text-align:center;">聖なる</span>
  <span style="background:#fff;min-width:20px;float:left;text-align:center;">＝</span>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:70px;float:left;text-align:center;">ミシェル</span>
</p>
<p><span style="color: #3d8b3d;">「<span style="background:#f1f9f1;color:#3d8b3d;">聖ミカエル</span>の<span style="background:#f1f9f1;color:#3d8b3d;">山</span>」</span>との意味になります！</p>

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