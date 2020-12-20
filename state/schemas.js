import { Schema } from 'prosemirror-model';
import { nodes, marks } from 'prosemirror-schema-basic';
import { null_to_empty } from 'svelte/internal';

/**
 * Schema to represent a single line of plain text
 * @type {Schema}
 */
export const singleLineSchema = new Schema({
  nodes: {
    doc: {content: "text*"},
    text: {inline: true}
  }
});

/**
 * Schema to represent multiple lines of plain text
 * @type {Schema}
 */
export const multiLineSchema = new Schema({
  nodes: {
    doc: {
      content: "paragraph+"
    },
    paragraph: {
      content: "text*",
      parseDOM: [{tag: "p"}],
      toDOM: () => ["p", 0]
    },
    text: {
      inline: true
    }
  }
});

/**
 * Schema to represent rich text
 * @type {Schema}
 */
export const richTextSchema = new Schema({
  nodes,
  marks
});

/**
 * Schema to extend rich text, including HTML ruby tag
 * @type {Schema}
 */
export const ExtendedrichTextSchema = new Schema({
  nodes: {
    doc: {content: "block+"},
    paragraph: {
      content: "inline*",
      group: "block",
      toDOM() { return ["p", 0] },
      parseDOM: [{tag: "p"}]
    },
    rubylang: {
      content: "(text* | leaf | pronunciationlang*)+",
      group: "inline",
      inline: true,
      attrs: {lang: {default: {}}},
      toDOM(node) { {return ["ruby", {lang: node.attrs.lang}, 0]} },
      parseDOM: [{tag: "ruby[lang]", getAttrs(dom) { return {lang: dom.lang} }}],
    },
    ruby: {
      content: "(text* | leaf | pronunciation*)+",
      group: "inline",
      inline: true,
      toDOM() { {return ["ruby", 0]} },
      parseDOM: [{tag: "ruby"}],
    },
    pronunciationlang: {
      content: "text*",
      inline: true,
      attrs: {lang: {default: ""}},
      toDOM(node) { return ["rt", {lang: node.attrs.lang}, 0] },
      parseDOM: [{tag: "rt[lang]", getAttrs(dom) { return {lang: dom.lang} }}]
    },
    pronunciation: {
      content: "text*",
      inline: true,
      toDOM() { return ["rt", 0] },
      parseDOM: [{tag: "rt"}]
    },
    leaf: {
      content: "text*",
      inline: true,
      isolating: true,
      isLeaf: true,
      toDOM() { return ["rp", 0] },
      parseDOM: [{tag: "rp", ignore: true}]
    },
    text: {
      inline: true,
      group: "inline"
    }
  },
  marks/* : {
    lang: {
      toDOM(node) { {return ["ruby", {lang: node.attrs.lang}, 0]} },
      parseDOM: [{tag: "ruby", getAttrs(dom) { return {lang: dom.lang} }}]
    }
  }, */
});