<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<p><time datetime="2020-03-12">12 Mar. 2020</time></p>

<h1 class="yellow"><a href="/blog/fr/phedre">Phèdre</a></h1>

<div class="notices yellow">
<p>Dans cette partie du dialogue Phèdre (246a–248c), Platon décrit la nature de l'âme, comme une puissance composée par un attelage ailé céleste qui quitte sa demeure afin de participer à la marche céleste.</p>
<p>Les âmes s'efforcent d'atteindre la voûte du ciel pour contempler depuis l'envers, la vérité, la justice, la science, la sagesse.</p>
<p>Beaucoup, blessées par le tumulte, ne parviennent au sommet.</p>
<p>Mais la révolution achevée, chaque âme retournent à sa demeure pour nourrir les chevaux de ce qu'il lui a été donné de contempler... avant de repartir.</p>
</div>

<div id="translation-text-rousi">
<style>#translation-text-rousi tr td:first-child {color: #b3b3b3;text-align: right;vertical-align: top;padding-top: 0.8rem;}</style>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><sup>246A</sup></td>
<td>Aussi bien, <span style="color:#df8a13;">sur l'immortalité –de l'âme–</span>, voilà qui suffit. Pour ce qui est de sa forme, voici ce qu'il faut dire.<br>Pour dire quelle sorte de chose c'est, il faudrait un exposé en tout point divin et fort long; mais, dire de quoi elle a l'air, voilà qui n'excède pas les possibilités humaines.<br>Aussi notre discours procédera-t-il de cette façon.<br>«Il faut donc se représenter l'<span style="color:#df8a13;">âme</span> comme <span style="color:#df8a13;">une puissance composée par nature d'un attelage aîlé et d'un cocher</span>.</td>
</tr>
<tr>
<td><sup>246B</sup></td>
<td>Cela étant, <span style="color:#df8a13;">chez les dieux, les chevaux et les cochers sont tous bons et de bonne race</span>, alors que, <span style="color:#df8a13;">pour le reste des vivants, il y a mélange</span>.<br>Chez nous –premier point– celui qui commande est le cocher d'un équipage apparié; de ces deux chevaux, –second point– l'un est beau et bon pour celui qui commande, et d'une race bonne et belle, alors que l'autre est le contraire et d'une race contraire. Dès lors, dans notre cas, c'est quelque chose de difficile et d'ingrat que d'être cocher.<br>«Comment, dans ces conditions, se fait-il que l'<span style="color:#df8a13;">être vivant</span> soit qualifié de <span style="color:#df8a13;">mortel</span> et d'<span style="color:#df8a13;">immortel</span>?<br>Voilà ce qu'il faut tenter d'expliquer.</td>
</tr>
<tr>
<td><sup>246C</sup></td>
<td>Tout ce qui est <span style="color:#df8a13;">âme</span> a charge de tout ce qui est inanimé;<br>or, l'<span style="color:#df8a13;">âme</span> circule à travers la totalité du ciel, venant à y revêtir tantôt une forme tantôt une autre.<br>C'est ainsi que, quand elle est parfaite et ailée, elle chemine dans les hauteurs et administre le monde entier;<br>quand en revanche, elle a perdu ses <span style="color:#a4660e;">ailes</span>, elle est entraînée jusqu'à ce qu'elle se suit agrippée à quelque chose de solide;<br>là, elle établit sa demeure,<br>elle prend un <span style="color:#13aadd;">corps</span> de terre qui semble se mouvoir de sa propre initiative grâce à la puissance qui appartient à l'<span style="color:#df8a13;">âme</span>.<br>Ce qu'on appelle <span style="color:#df8a13;">«vivant»</span>, c'est cet ensemble, une <span style="color:#df8a13;">âme</span> et un <span style="color:#13aadd;">corps</span> fixé à elle, ensemble qui a reçu le nom de <span style="color:#df8a13;">«mortel»</span>.<br>Quant au qualificatif <span style="color:#df8a13;">«immortel»</span>, il n'est aucun discours argumenté qui permette d'en rendre compte rationnellement;<br>il n'en reste pas moins que, sans en avoir une vision ou une connaissance suffisante, nous nous forgeons une représentation du divin:</td>
</tr>
<tr>
<td><sup>246D</sup></td>
<td>c'est un vivant immortel, qui a une <span style="color:#df8a13;">âme</span>, qui a un <span style="color:#13aadd;">corps</span>, tous deux naturellement unis pour toujours.<br>Mais, sur ce point, qu'il en soit et qu'on en parle comme il plaît à la divinité.<br>Et maintenant, comprenons pourquoi l'<span style="color:#df8a13;">âme</span> a perdu ses <span style="color:#a4660e;">ailes</span>, pourquoi elles sont tombées.<br>Voici quelle peut être cette raison,<br>«La nature a donné à l'<span style="color:#a4660e;">aile</span> le pouvoir d'entraîner vers le haut ce qui est pesant, en l'élevant dans les hauteurs où la race des dieux a établi sa demeure;<br>l'<span style="color:#a4660e;">aile</span> est, d'une certaine manière, la réalité corporelle, qui participe le plus au divin.</td>
</tr>
<tr>
<td><sup>246E</sup></td>
<td>Or, le divin est beau, sage, bon et possède toutes les qualités de cet ordre:<br>en tout cas, rien ne contribue davantage que ces qualités à nourrir et à développer ce que l'<span style="color:#df8a13;">âme</span> a d'ailé,<br>tandis que la laideur, le mal et ce qui est le contraire des qualités précédentes dégrade et détruit ce qu'en elle il y a d'ailé.<br>«Voici donc celui qui, dans le ciel, est l'illustre chef de file, Zeus; conduisant son attelage ailé,<br>il s'avance le premier, ordonnant toutes choses dans le détail et pourvoyant à tout.<br>Le suit l'armée des dieux et des démons, rangée en onze sections</td>
</tr>
<tr>
<td><sup>247A</sup></td>
<td>car Hestia reste dans la demeure des dieux, toute seule.<br>Quant aux autres, tous ceux qui, dans ce nombre de douze, ont été établis au rang de chefs de file, chacun vient le rang qui lui a été assigné.<br>Cela étant, c'est un spectacle varié et béaritique qu'offrent les évolutions circulaires auxquelles se livre, dans le ciel, la race des dieux bienheureux,<br>chacun accomplissant la tâche qui est la sienne,<br>suivi par celui qui toujours le souhaite et le peut,<br>car la jalousie n'a pas sa place dans le chœur des dieux.</td>
</tr>
<tr>
<td><sup>247B</sup></td>
<td>Or, chaque fois qu'ils se rendent à un festin, c'est-à-dire à un banquet,<br>ils se mettent à monter vers la voûte qui constitue la limite intérieure du ciel, dans cette montée,<br>dès lors, les attelages des dieux, qui sont équilibrés et faciles à conduire, progressent facilement,<br>alors que les autres ont de la peine à avancer,<br>car le cheval en qui il y a de la malignité rend l'équipage pesant, le tirant vers la terre, et alourdissant la main de celui des cochers qui n'a pas su bien le dresser.<br>«C'est là, sache-le bien, que l'épreuve et le combat suprêmes attendent l'<span style="color:#df8a13;">âme</span>.</td>
</tr>
<tr>
<td><sup>247C</sup></td>
<td>En effet, lorsqu'elles ont atteint la voûte du ciel, ces <span style="color:#df8a13;">âmes</span> qu'on dit immortelles passent à l'extérieur,<br>s'établissent sur le dos du ciel,<br>se laissent emporter par leur révolution circulaire<br>et contemplent les réalités qui se trouvent hors du ciel.<br>«Ce lieu qui se trouve au-dessus du ciel,<br>aucun poète, parmi ceux d'ici-bas, n'a encore chanté d'hymne en son honneur, et aucun ne chantera en son honneur un hymne qui en soit digne.<br>Or, voici ce qu'il en est:<br>car, s'il se présente une occasion où l'on doive dire la vérité,<br>c'est bien lorsqu'on parle de la vérité.<br>Eh bien! l'être qui est sans couleur, sans figure, intangible, qui est réellement, l'être qui ne peut être contemplé que par l'intellect –le pilote de <span style="color:#df8a13;">l'âme</span>–, l'être qui est l'objet de la connaissance vraie, c'est lui qui occupe ce lieu.</td>
</tr>
<tr>
<td><sup>247D</sup></td>
<td>Il s'ensuit que la pensée d'un dieu, qui se nourrit d'intellection et de connaissance sans mélange –et de même la pensée de toute <span style="color:#df8a13;">âme</span> qui se soucie de recevoir l'aliment qui lui convient–, se réjouit, lorsque, après un long moment, elle aperçoit la réalité, et que, dans cette contemplation de la vérité, elle trouve sa nourriture et son délice, jusqu'au moment où la révolution circulaire la ramène au point de départ.<br>Or, pendant qu'elle accomplit cette révolution, elle contemple la justice en soi, elle contemple la sagesse, elle contemple la science, non celle à laquelle s'attache le devenir, ni non plus sans doute celle qui change quand change une de ces choses que, au cours de notre existence actuelle,</td>
</tr>
<tr>
<td><sup>247E</sup></td>
<td>nous qualifions de réelles, mais celle qui s'applique à ce qui est réellement la réalité.<br>Et, quand elle a, de la même façon, contemplé les autres réalités qui sont réellement, quand elle s'en est régalée, elle pénètre de nouveau à l'intérieur du ciel, et revient à sa demeure.<br>Lorsqu'elle est de retour, le cocher installe les chevaux devant leur mangeoire, verse l'ambroisie, puis leur donne à boire le nectar.</td>
</tr>
<tr>
<td><sup>248A</sup></td>
<td>«Voilà quelle est la vie des dieux.<br>Passons aux autres <span style="color:#df8a13;">âmes</span>.<br>Celle qui est la meilleure, parce qu'elle suit le dieu et qu'elle cherche à lui ressembler, a dressé la tête de son cocher vers ce qui se trouve en dehors du ciel et elle a été entraînée dans le mouvement circulaire;<br>mais, troublée par le tumulte de ses chevaux, elle a eu beaucoup de peine à porter les yeux sur les réalités.<br>Cette autre a tantôt levé,<br>tantôt baissé la tête,<br>parce que ses chevaux la gênaient;<br>elle a aperçu certaines realités,<br>mais pas d'autres.<br>Quant au reste des <span style="color:#df8a13;">âmes</span>,<br>comme elles aspirent toutes à s'élever, elles cherchent à suivre, mais impuissantes elles s'enfoncent au cours de leur révolution;</td>
</tr>
<tr>
<td><sup>248B</sup></td>
<td>elles se piétinent, se bousculent, chacune essayant de devancer l'autre.<br>Alors le tumulte, la rivalité et l'effort violent sont à leur comble; et là, à cause de l'impéritie des cochers, beaucoup d'<span style="color:#df8a13;">âmes</span> sont estropiées, beaucoup voient leur plumage gravement endommagé.<br>Mais toutes, recrues de fatigues, s'éloignent sans avoir été initiées à la contemplation de la réalité,<br>et, lorsqu'elles se sont éloignées, elles ont l'opinion pour nourriture.<br>Pourquoi faire un si grand effort pour voir où est la <span style="color:#df8a13;">«plaine de la vérité»</span>?</td>
</tr>
<tr>
<td><sup>248C</sup></td>
<td>Parce que la nourriture qui convient à ce qu'il y a de meilleur dans l'<span style="color:#df8a13;">âme</span> se tire de la prairie qui s'y trouve, et que l'<span style="color:#a4660e;">aile</span>, à quoi l'<span style="color:#df8a13;">âme</span> doit sa légèreté, y prend ce qui la nourrit.</td>
</tr>
</tbody>
</table>
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