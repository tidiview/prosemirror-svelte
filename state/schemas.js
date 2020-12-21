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
      parseDOM: [{tag: "p"}],
      toDOM() { return ["p", 0] },
    },
    notices: {
      content: "inline*",
      group: "block",
      parseDOM: [{tag: "div.notices p", priority: 60},
                 {tag: "div.notices dl dt", priority: 60}],
      toDOM() { return ["p", {class: "notices"}, 0] },
    },
    blockquote: {
      content: "block+",
      group: "block",
      defining: true,
      parseDOM: [{tag: "blockquote"}],
      toDOM() { return  ["blockquote", 0]},
    },
    noticesblockquotes: {
      content: "notices+",
      group: "block",
      defining: true,
      parseDOM: [{tag: "div.notices dl dd", priority: 60}],
      toDOM() { return  ["blockquote", {class: "notices"}, 0]},
    },
    heading: {
      attrs: {level: {default: 1}},
      content: "inline*",
      group: "block",
      defining: true,
      parseDOM: [{tag: "h1", attrs: {level: 1}},
                 {tag: "h2", attrs: {level: 2}},
                 {tag: "h3", attrs: {level: 3}},
                 {tag: "h4", attrs: {level: 4}},
                 {tag: "h5", attrs: {level: 5}},
                 {tag: "h6", attrs: {level: 6}}],
      toDOM(node) { return ["h" + node.attrs.level, 0] }
    },
    noticesheading: {
      attrs: {level: {default: 1}},
      content: "inline*",
      group: "block",
      defining: true,
      parseDOM: [{tag: "div.notices h1", priority: 60, attrs: {level: 1}},
                 {tag: "div.notices h2", priority: 60, attrs: {level: 2}},
                 {tag: "div.notices h3", priority: 60, attrs: {level: 3}},
                 {tag: "div.notices h4", priority: 60, attrs: {level: 4}},
                 {tag: "div.notices h5", priority: 60, attrs: {level: 5}},
                 {tag: "div.notices h6", priority: 60, attrs: {level: 6}}],
      toDOM(node) { return ["h" + node.attrs.level, 0] }
    },
    rubylang: {
      content: "(text* | leaf | pronunciationlang*)+",
      group: "inline",
      inline: true,
      attrs: {lang: {default: {}}},
      parseDOM: [{tag: "ruby[lang]", getAttrs(dom) { return {lang: dom.lang} }}],
      toDOM(node) { {return ["ruby", {lang: node.attrs.lang}, 0]} },
    },
    ruby: {
      content: "(text* | leaf | pronunciation*)+",
      group: "inline",
      inline: true,
      parseDOM: [{tag: "ruby"}],
      toDOM() { {return ["ruby", 0]} },
    },
    pronunciationlang: {
      content: "text*",
      inline: true,
      attrs: {lang: {default: {}}},
      parseDOM: [{tag: "rt[lang]", getAttrs(dom) { return {lang: dom.lang} }}],
      toDOM(node) { return ["rt", {lang: node.attrs.lang}, 0] },
    },
    pronunciation: {
      content: "text*",
      inline: true,
      parseDOM: [{tag: "rt"}],
      toDOM() { return ["rt", 0] },
    },
    leaf: {
      content: "text*",
      inline: true,
      isolating: true,
      parseDOM: [{tag: "rp", ignore: true}]
    },
    text: {
      inline: true,
      group: "inline"
    },
    figure: {
      content: "(picture figcaption? map?)",
      group: "block",
      draggable: true,
      parseDOM: [{tag: "figure"}],
      toDOM() { {return ["figure", 0]} },
    },
    picture: {
      content: "(source* image)",
      parseDOM: [{tag: "picture"}],
      toDOM() { {return ["picture", 0]} },
    },
    source: {
      attrs: {
        sizes: {default: null},
        srcset: {default: null},
        type: {default: null},
      },
      parseDOM: [{tag: "source", getAttrs(dom) {
        return {
          sizes: dom.getAttribute("sizes"),
          srcset: dom.getAttribute("srcset"),
          type: dom.getAttribute("type"),
        }
      }}],
      toDOM(node) { let {sizes, srcset, type} = node.attrs; return ["source", {sizes, srcset, type}] },
    },
    image: {
      attrs: {
        src: {},
        title: {default: null},
        alt: {default: null},
        usemap: {default: null},
        sizes: {default: null},
        srcset: {default: null},
      },
      parseDOM: [{tag: "img[src]", getAttrs(dom) {
        return {
          src: dom.getAttribute("src"),
          title: dom.getAttribute("title"),
          alt: dom.getAttribute("alt"),
          usemap: dom.getAttribute("usemap"),
          sizes: dom.getAttribute("sizes"),
          srcset: dom.getAttribute("srcset"),
        }
      }}],
      toDOM(node) { let {src, title, alt, usemap, sizes, srcset} = node.attrs; return ["img", {src, title, alt, usemap, sizes, srcset}] },
    },
    figcaption: {
      content: "text*",
      parseDOM: [{tag: "figcaption"}],
      toDOM() { {return ["figcaption", 0]} },
    },
    map: {
      attrs: {
        name: {},
        id: {default: null},
      },
      content: "area+",
      parseDOM: [{tag: "map[name]", getAttrs(dom) {
        return {
          name: dom.getAttribute("name"),
          id: dom.getAttribute("id"),
        }
      }}],
      toDOM(node) { let {name, id} = node.attrs; return ["map", {name, id}] },
    },
    area: {
      attrs: {
        href: {default: null},
        title: {default: null},
        alt: {default: null},
        id: {default: null},
        shape: {default: null},
        coords: {default: null},
      },
      parseDOM: [{tag: "area[href]", getAttrs(dom) {
        return {
          href: dom.getAttribute("href"),
          title: dom.getAttribute("title"),
          alt: dom.getAttribute("alt"),
          id: dom.getAttribute("id"),
          shape: dom.getAttribute("shape"),
          coords: dom.getAttribute("coords"),
        }
      }}],
      toDOM(node) { let {href, title, alt, id, shape,  coords} = node.attrs; return ["area", {href, title, alt, id, shape, coords}] },
    },
    horizontal_rule: {
      group: "block",
      parseDOM: [{tag: "hr"}],
      toDOM() { return ["hr"] }
    },
    hard_break: {
      inline: true,
      group: "inline",
      selectable: false,
      parseDOM: [{tag: "br"}],
      toDOM() { return ["br"]}
    }
  },
  marks: {
    link: {
      attrs: {
        href: {},
        title: {default: null}
      },
      inclusive: false,
      parseDOM: [{tag: "a[href]", getAttrs(dom) {
        return {href: dom.getAttribute("href"), title: dom.getAttribute("title")}
      }}],
      toDOM(node) { let {href, title} = node.attrs; return ["a", {href, title}, 0] }
    },
    strong: {
      parseDOM: [{tag: "strong"}],
      toDOM() { {return ["strong", 0]} },
    },
    sup: {
      parseDOM: [{tag: "sup"}],
      toDOM() { {return ["sup", 0]} },
    },
    spancolor: {
      attrs: {color: {default: {}}},
      parseDOM: [{tag: "span[style]", getAttrs(dom) {
        return {color: dom.style["color"] ? dom.style["color"] : "none"}
      }}],
      toDOM(node) { {return ["span", {"style": "color:" + node.attrs.color}, 0]} },
    },
  },
});