import { Schema } from 'prosemirror-model';
import { nodes, marks } from 'prosemirror-schema-basic';

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
  nodes,
  marks: {
    ruby: {
      toDOM() { return ["ruby", 0] },
      parseDOM: [{tag: "ruby"}]
    },
    rp: {
      toDOM() { return ["rp", 0] },
      parseDOM: [{tag: "rp"}]
    },
    rt: {
      toDOM() { return ["rt", 0] },
      parseDOM: [{tag: "rt"}]
    },
  },
});