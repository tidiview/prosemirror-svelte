<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import { createSingleLineEditor } from './state'
  import { EditorView } from "prosemirror-view"
  import { EditorState } from "prosemirror-state"

  const dispatch = createEventDispatcher()

  /** @type string */
  export let className = "ui-editor"

  /** @type EditorState */
  export let editorState = createSingleLineEditor()

  /** @type string */
  export let placeholder = ''

  /** Reference to the editor view
   *  @type EditorView|null */
  export let view = null

  /** Debounce change events (set to zero for immediate updates) */
  export let debounceChangeEventsInterval = 50

  /** Reference to the editor component
   *  @type HTMLDivElement */
  export let editor = null

  /** Focus the content-editable div */
  export function focus() {
    view && view.focus()
  }

  /** Blur the content-editable div */
  export function blur() {
    editor && editor.blur()
  }

  /** Tracks the timeout id of the last time the change event was dispatched */
  let dispatchLastEditTimeout

  /** Tracks whether changes to editor state were not yet dispatched */
  let isDirty = false

  $: if (view && editorState && !isDirty) {
    view.updateState(editorState) // necessary to keep the DOM in sync with the editor state on external updates
  }

  /** Tracks whether the editor is empty (i.e. has a content size of 0) */
  let editorIsEmpty
  $: editorIsEmpty = editorState ? editorState.doc.content.size === 0
    || (editorState.doc.textContent === "" && editorState.doc.content.size < 3) : true

  /** Dispatches a change event and resets whether the editor state is dirty */
  const dispatchChangeEvent = () => {
    if (isDirty) {
      dispatch('change', {editorState})
      isDirty = false
    }
  }

  /**
   * Captures custom events from plugins and dispatches them with a new event type (based on event.detail.type)
   * @param event {CustomEvent}
   */
  const onCustomEvent = event => {
    if (event.detail) {
      const {type, ...detail} = event.detail
      dispatch(type || 'custom', detail)
    }
  }

  onMount(() => {
    view = new EditorView({mount: editor}, {
      state: editorState,
      dispatchTransaction: (transaction) => {
        editorState = view.state.apply(transaction)

        const contentHasChanged = !editorState.doc.eq(view.state.doc)

        if (contentHasChanged) {
          isDirty = true
          if (debounceChangeEventsInterval > 0) {
            if (dispatchLastEditTimeout) clearTimeout(dispatchLastEditTimeout)
            dispatchLastEditTimeout = setTimeout(dispatchChangeEvent, 50)
          } else {
            setTimeout(dispatchChangeEvent, 0)
          }
        }

        view.updateState(editorState)

        dispatch('transaction', {view, editorState, isDirty, contentHasChanged})
      },
    })
  })

  onDestroy(() => {
    view.destroy()
  })

</script>

<div class={className}
     class:ProseMirror={true}
     class:editor_empty={editorIsEmpty}
     data-placeholder={placeholder}
     bind:this={editor}
     on:focus
     on:blur
     on:keydown
     on:custom={onCustomEvent}
></div>

<style>

  :global(body) {
    --ui-color-placeholder: #AAAAAA;
  }

  :global(.ProseMirror) {
    position: relative;
  }

  :global(.ProseMirror) {
    word-wrap: break-word;
    white-space: pre-wrap;
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;
  }

  /* :global(.ProseMirror) pre {
    white-space: pre-wrap;
  }

  :global(.ProseMirror) li {
    position: relative;
  } */

  :global(.ProseMirror-hideselection *::selection) {
    background: transparent;
  }

  :global(.ProseMirror-hideselection *::-moz-selection) {
    background: transparent;
  }

  :global(.ProseMirror-hideselection) {
    caret-color: transparent;
  }

  :global(.ProseMirror-selectednode) {
    outline: 2px solid #8cf;
  }

  /* Make sure li selections wrap around markers */

  :global(li.ProseMirror-selectednode) {
    outline: none;
  }

  :global(li.ProseMirror-selectednode:after) {
    content: "";
    position: absolute;
    left: -32px;
    right: -2px;
    top: -2px;
    bottom: -2px;
    border: 2px solid #8cf;
    pointer-events: none;
  }

  :global(.ProseMirror .empty-node::before) {
    position: absolute;
    color: #aaa;
    cursor: text;
  }

  :global(.ProseMirror .empty-node:hover::before) {
    color: #777;
  }

  :global(.ProseMirror.editor_empty::before) {
    position: absolute;
    content: attr(data-placeholder);
    pointer-events: none;
    color: var(--ui-color-placeholder);
  }

  :global(.conversation) {
    margin-block-end: 1em;
    margin-block-start: 1em;
    margin-inline-end: 16px;
    margin-inline-start: 16px;
  }

  :global(.conversation:last-child) {
    margin-block-end: 1em;
  }

  :global(ol.doc li[value]::marker) {
    display: list-item;
  }

  :global(ol.doc li[value]) {
    list-style-type:decimal;
  }

  :global(ol.doc li) {
    list-style-type:none;
  }

  :global(ol.doc li p, ol.doc li p.conversation) {
    margin-block-start: 0px;
    margin-block-end: 0px;
  }

  :global(ol.doc-special li::marker) {
    content: none;
  }
  
  :global(ol.doc-special li[data-id]::marker) {
    content: attr(data-id) ". ";
  }

  :global(ol.doc-three-rows) {
    padding-inline-start: 0px;
  }

  :global(ol.doc-three-rows li) {
    margin-top: 1em;
    margin-block-end: 1em;
    margin-block-start: 1em;
    margin-inline-start: 163px;
  }

  :global(ol.doc-three-rows li[data-id]::before) {
    content: attr(data-id) ". ";
    position: absolute;
    left: 1em;
    padding-top: 2px;
    padding-bottom: 2px;
  }

  :global(ol.doc-three-rows li[data-name]::marker) {
    content: attr(data-name);
    width: 100px;
    font-variant-numeric: normal;
  }

  :global(ol.doc-three-rows li::marker) {
    content: none;
  }

  :global(ol.year li p:first-child) {
    text-indent: -44px;
    margin-top: 1em;
    margin-block-end: 1em;
    margin-block-start: 1em;
  }

  :global(ol.year li) {
    list-style-type: none;
  }

  :global(span.year-width) {
    width: 44px;
  }

  :global(.puce) {
    display: list-item;
    list-style-type: disc;
    margin-top: 1em;
    margin-block-end: 1em;
    margin-block-start: 1em;
    margin-inline-start: 40px;   
  }

  :global(p.puce::marker) {
    display: list-item;
  }

  :global(p.puce:last-child) {
    margin-top: 1em;
    margin-bottom: 1em;
    margin-block-end: 1em;
  }

  :global(p.puce:first-child) {
    margin-top: 1em;
    margin-bottom: 1em;
    margin-block-end: 1em;
  }

  :global(.no-puce) {
    margin-top: 1em;
    margin-block-end: 1em;
    margin-block-start: 1em;
    margin-inline-start: 40px;
  }

  :global(p.no-puce:last-child) {
    margin-top: 1em;
    margin-bottom: 1em;
    margin-block-end: 1em;
  }

  :global(p.no-puce:first-child) {
    margin-top: 1em;
    margin-bottom: 1em;
    margin-block-end: 1em;
  }
  
  :global(p.single-li) {
    display: list-item;
    list-style-type: none;
    margin-top: 1em;
    margin-block-end: 1em;
    margin-block-start: 0px;
    margin-inline-start: 40px;
  }
  
  :global(p.single-li::marker) {
    content: attr(data-id) ". "
  }


  :global(h4.note) {
    display: list-item;
    counter-increment: h4;
    margin-top: 1em;
    margin-block-end: 0em;
    margin-block-start: 0em;
    margin-inline-start: 30px;
    padding-inline-start: 10px;

  }

  :global(h4::marker) {
    display: list-item;
    content: counter(h4);
  }

  :global(h3) {
    counter-reset: h4;
  }

  :global(address) {
    display: inline;
  }

  :global(.top-space) {
    margin-top: 1em;
  }

  :global(img) {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
</style>
