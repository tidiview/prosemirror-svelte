<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="yellow">Autres sources</h1>
<h2 id="daniel-dn-12-1-3" class="yellow">Livre de Daniel, chapître 12, verset 1 à 3 [Dn 12, 1-3]</h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
<sup>01</sup> En ce temps-là se lèvera <strong>Michel</strong>, le chef des anges, celui qui se tient auprès des fils de ton peuple. Car ce sera un temps de détresse comme il n’y en a jamais eu depuis que les nations existent, jusqu’à ce temps-ci. Mais en ce temps-ci, ton peuple sera délivré, tous ceux qui se trouveront inscrits dans le Livre.<br>
<sup>02</sup> Beaucoup de gens qui dormaient dans la poussière de la terre s’éveilleront, les uns pour la vie éternelle, les autres pour la honte et la déchéance éternelles.<br>
<sup>03</sup> Ceux qui ont l’intelligence resplendiront comme la splendeur du firmament, et ceux qui sont des maîtres de justice pour la multitude brilleront comme les étoiles pour toujours et à jamais. <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
<p><br></p>
<h2 id="daniel-dn-10" class="yellow">Livre de Daniel, chapître 10 [Dn 10]</h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
<sup>01</sup> La troisième année du règne de Cyrus, roi de Perse, une parole fut révélée à Daniel, surnommé Beltassar: parole vraie et grand combat. Il comprit la parole: la compréhension lui vint dans une vision.<br>
<sup>02</sup> En ces jours-là, moi, Daniel, je portai le deuil pendant trois semaines entières.<br>
<sup>03</sup> Je ne mangeai pas de nourriture agréable; ni viande ni vin ne passèrent par ma bouche, je m’abstins de tout parfum jusqu’au terme de ces trois semaines.<br>
<sup>04</sup> Et le vingt-quatrième jour du premier mois, étant au bord du grand fleuve, le Tigre,<br>
<sup>05</sup> je levai les yeux et regardai. Voici: il y avait un homme vêtu de lin, qui portait une ceinture d’or pur autour des reins<br>
<sup>06</sup> son corps était comme de la chrysolithe, son visage comme un éclair, ses yeux comme des torches de feu, ses bras et ses jambes avaient l’éclat du bronze poli, et le son de ses paroles était comme la rumeur d’une multitude.<br>
<sup>07</sup> Moi seul, Daniel, je vis cette apparition. Les hommes qui étaient avec moi ne voyaient pas l’apparition, mais une grande terreur s’abattit sur eux, et ils s’enfuirent pour se cacher.<br>
<sup>08</sup> Je demeurai donc seul et regardai cette apparition impressionnante. J’étais sans force aucune, mes traits bouleversés se décomposèrent, ma force m’abandonna.<br>
<sup>09</sup> J’entendis le bruit de ses paroles, et lorsque je l’entendis, je fus pris de torpeur et tombai face contre terre.<br>
<sup>10</sup> Alors une main me toucha et me redressa sur les genoux et les paumes de mes mains.<br>
<sup>11</sup> Il me dit: «Daniel, homme aimé de Dieu, comprends les paroles que je vais te dire, mets-toi debout. Oui, maintenant j’ai été envoyé vers toi.» Tandis qu’il me parlait, je me mis debout en tremblant.<br>
<sup>12</sup> Il me dit: «N’aie pas peur, Daniel. Dès le premier jour où tu as eu à cœur de comprendre et de t’humilier devant ton Dieu, tes paroles ont été entendues: c’est à cause de tes paroles que je suis venu.<br>
<sup>13</sup> L’ange du royaume de Perse m’a résisté pendant vingt et un jours, mais <strong>Michel</strong>, l’un des premiers anges, est venu à mon aide. Moi, je l’ai laissé avec l’ange des rois de Perse.<br>
<sup>14</sup> Alors, je suis venu pour t’expliquer ce qui arrivera à ton peuple à la fin des jours. Voici une nouvelle vision pour ces jours-là.»<br>
<sup>15</sup> Tandis qu’il me parlait, je me prosternai à terre en silence.<br>
<sup>16</sup> Voici comme une forme de fils d’homme qui me toucha les lèvres. J’ouvris la bouche et parlai. Je dis à celui qui était devant moi: «Mon seigneur, à cause de l’apparition, l’angoisse me submerge et ma force m’abandonne.<br>
<sup>17</sup> Comment le serviteur de mon seigneur pourra-t-il parler avec toi, mon seigneur, alors que je n’ai plus de force, et qu’il ne me reste pas de souffle?»<br>
<sup>18</sup> Celui qui avait l’apparence d’un homme me toucha de nouveau et me réconforta.<br>
<sup>19</sup> Il me dit: «N’aie pas peur, homme aimé de Dieu! La paix soit avec toi! Sois très fort!» Tandis qu’il parlait, je repris des forces et di: «Que mon seigneur parle, car tu m’as rendu la force.»<br>
<sup>20</sup> Il dit: «Sais-tu pourquoi je suis venu vers toi? Maintenant, je vais retourner combattre l’ange de la Perse. À l’issue de ce combat, l’ange de la Grèce viendra.<br>
<sup>21</sup> Personne ne me prête main-forte contre ceux-ci, sauf Michel, votre ange. Mais je t’annonce ce qui est inscrit dans le livre de vérité. <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
<p><br></p>
<h2 id="épître-de-jude-verset-9" class="yellow">Épître de Jude, verset 9 [Jd 1,9]</h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
<sup>09</sup> Or <strong>l’archange Michel</strong>, discutant avec le démon dans la querelle au sujet du corps de Moïse, n’osa pas porter contre lui un jugement qui l’outrage; il lui dit seulement: Que le Seigneur te blâme! <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
<h2 id="1th-chapître-4-verset-16" class="yellow">Première Épître aux Thessalonissiens, chapître 4 verset 16 [1Th. 4-6]</h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
<sup>16</sup> Au signal donné par la voix de <strong>l’archange</strong>, et par la trompette divine, le Seigneur lui-même descendra du ciel, et ceux qui sont morts dans le Christ ressusciteront d’abord <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
<p><br></p>
<p><span style="color: #df8a13;">Traduction liturgique de l'Ancien Testament</span></p>
</div>
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