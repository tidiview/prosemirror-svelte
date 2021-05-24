<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON, fromJSON, ExtendedThreerichTextSchema } from "../../../state";

  const json = `{
  "doc": {
    "type": "doc",
    "content": [
      {
        "type": "article",
        "content": [
          {
            "type": "header",
            "content": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "time",
                    "attrs": {
                      "datetime": "2016-06-04"
                    },
                    "content": [
                      {
                        "type": "text",
                        "text": "２０１６年６月４日"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 1,
              "id": "",
              "classes": "red"
            },
            "content": [
              {
                "type": "text",
                "text": "自家製"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "この中国古代の文書で、「家」から「自分」を考えるのだとしているのが特徴。"
              }
            ]
          },
          {
            "type": "sectionid",
            "attrs": {
              "id": "iehamotomoto"
            },
            "content": [
              {
                "type": "heading",
                "attrs": {
                  "level": 2,
                  "id": "",
                  "classes": "red"
                },
                "content": [
                  {
                    "type": "text",
                    "text": "自家製の文書"
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "家はもともと"
                  },
                  {
                    "type": "ruby",
                    "content": [
                      {
                        "type": "text",
                        "text": "斉"
                      },
                      {
                        "type": "text",
                        "marks": [
                          {
                            "type": "rt"
                          }
                        ],
                        "text": "ととの"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "text": "っているのだ。"
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "わが身の"
                  },
                  {
                    "type": "ruby",
                    "content": [
                      {
                        "type": "text",
                        "text": "好"
                      },
                      {
                        "type": "text",
                        "marks": [
                          {
                            "type": "rt"
                          }
                        ],
                        "text": "こうお"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "text": "が"
                  },
                  {
                    "type": "ruby",
                    "content": [
                      {
                        "type": "text",
                        "text": "偏"
                      },
                      {
                        "type": "text",
                        "marks": [
                          {
                            "type": "rt"
                          }
                        ],
                        "text": "かたよ"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "text": "っているから斉わないだけのことだ。"
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "国はもともと治まっているのだ。"
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "わが身の"
                  },
                  {
                    "type": "ruby",
                    "content": [
                      {
                        "type": "text",
                        "text": "好"
                      },
                      {
                        "type": "text",
                        "marks": [
                          {
                            "type": "rt"
                          }
                        ],
                        "text": "こうお"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "text": "が偏っているから治まらないだけのことだ。"
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "天下はもともと泰平なのだ。"
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "わが身の"
                  },
                  {
                    "type": "ruby",
                    "content": [
                      {
                        "type": "text",
                        "text": "好"
                      },
                      {
                        "type": "text",
                        "marks": [
                          {
                            "type": "rt"
                          }
                        ],
                        "text": "こうお"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "text": "が"
                  },
                  {
                    "type": "ruby",
                    "content": [
                      {
                        "type": "text",
                        "text": "偏"
                      },
                      {
                        "type": "text",
                        "marks": [
                          {
                            "type": "rt"
                          }
                        ],
                        "text": "かたよ"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "text": "っているから泰平でないだけのことだ。"
                  }
                ]
              },
              {
                "type": "article",
                "content": [
                  {
                    "type": "footer",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "小島毅、「"
                          },
                          {
                            "type": "text",
                            "marks": [
                              {
                                "type": "link",
                                "attrs": {
                                  "href": "https://www.amazon.co.jp/朱子学と陽明学-ちくま学芸文庫-小島-毅/dp/4480095691",
                                  "title": "https://www.amazon.co.jp/朱子学と陽明学-ちくま学芸文庫-小島-毅/dp/4480095691"
                                }
                              },
                              {
                                "type": "cite"
                              }
                            ],
                            "text": "朱子学と陽明学"
                          },
                          {
                            "type": "text",
                            "text": "」、１２２貢。"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "selection": {
    "type": "text",
    "anchor": 248,
    "head": 248
  }
}`;

  let focusEditor;
  let showEditorState = true;
  let editorState = fromJSON(json, ExtendedThreerichTextSchema, plugins = [
      ...corePlugins,
      ...richTextPlugins,
      ...plugins] );

  function handleChange(event) {
    editorState = event.detail.editorState;
  }

  function clearEditor(event) {
    editorState = clear(editorState);
    focusEditor();
  }

  function resetEditor(event) {
    editorState = createExtendedThreeRichTextEditor(json);
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