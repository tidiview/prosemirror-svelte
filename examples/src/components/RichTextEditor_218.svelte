<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- Page 19 EN:213 FR:223 -->

<article>

  <hgroup>
  <h2 id="mise-en-relation" class="yellow"><cite><ruby lang="ja" style="color:#555;">洗礼者<wbr>ヨハネと<wbr>福音書記者<wbr>ヨハネの<wbr>三連画<rp>(</rp><rt lang="nl" style="color:#999;">Triptiek van Johannes de Doper en Johannes de Evangelist</rt><rp>)</rp></ruby></cite>に表わされている場面の元にある様々な文書</h2>
    <h3 class="yellow"><cite><ruby style="color:#e6a64d;">黄金伝説<rp>(</rp><rt style="color:#e6a64d;">レゲンダ・アウレア</rt><rp>)</rp></ruby></cite>においての<cite>福音書記者ヨハネの伝説</cite></h3>
  </hgroup>

	<figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.jpg" title="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島への流しへの出発》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" alt="ハンス・メムリンク筆《洗礼者ヨハネと福音書記者ヨハネの三連画》、中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島への流しへの出発》、メムリンク美術館、聖ヨハネ施療院、ブルージュ（ブルッヘ）" class="class-40-img" width="640" height="1174" loading="eager" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1920.jpg 1920w"></picture><figcaption>中央パネルの詳細、《ローマにあるラティナ門前にドミティアヌス大帝の命令によっての熱湯に浸せられる福音書記者ヨハネとパトモス島への流しへの出発》</figcaption>
  </figure>


      <h4 id="porte-latine"><cite><ruby style="color:#e6a64d;">黄金伝説<rt style="color:#e6a64d;">レゲンダ・アウレア</rt></ruby></cite>においての第６５章　ラティナ門外の福音書記者ヨハネ</h4>

        <p>使徒にして福音史家でもあるヨハネは、エヘソスで伝道活動に従事していたとき、同地の総督に捕えられ、いつわりの神々に供物をささげよと命じられた。</p>
        <p>が、命令にしたがおうとしなかったので、獄に投じられた。総督は、皇帝ドミティアヌスに報告書を送り、そのなかで、ヨハネのことを神殿の冒漬者神々の侮蔑者、十字架にかけられた男に仕えるやからのひとりであると決めつけた。</p>
        <p>ドミティアヌスは、ヨハネをローマにつれてくるようにと命じた。さて、ヨハネがローマに到着すると、笑いものにするために頭を丸坊主に剃りあげたうえ、ラティナ門とよばれる市門の外に引きだし、油がいっぱい煮えたぎっている釜に入れ、さらに下から火をどんどん焚きつけた。</p>
        <p>ところが、ヨハネは、文字どおり平気の平左で、火傷ひとつしないで釜から出てきた。</p>
        <p>キリスト教徒たちは、その後この場所に教会を建て、この日をヨハネの殉教記念日のように祝うのである。ドミティアヌス帝は、こんな拷問ぐらいでキリストの福音を宣べることをやめるような男ではないと見てとり、聖ヨハネをパトモス島（第一巻）へ流刑に処した。</p>



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