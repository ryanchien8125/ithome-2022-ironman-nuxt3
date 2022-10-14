<template>
  <div>
    <editor-content style="min-height: 400px" :editor="editor" />
  </div>
</template>

<script setup>
import { Editor, EditorContent } from '@tiptap/vue-3'
import { StarterKit } from '@tiptap/starter-kit'
import { TextStyle } from '@tiptap/extension-text-style'
import { FontFamily } from '@tiptap/extension-font-family'
import { TextAlign } from '@tiptap/extension-text-align'
import { Placeholder } from '@tiptap/extension-placeholder'
import { Underline } from '@tiptap/extension-underline'
import { Link } from '@tiptap/extension-link'
import { Image } from '@tiptap/extension-image'
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight/lib/core'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)

const props = defineProps({
  content: {
    type: String,
    required: true
  }
})

const editor = ref()

onMounted(() => {
  editor.value = new Editor({
    extensions: [
      Underline,
      Link,
      Image,
      TextStyle,
      FontFamily,
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      StarterKit.configure({
        history: false,
        codeBlock: false,
        heading: {
          levels: [1, 2, 3]
        },
        blockquote: true,
        bulletList: true,
        orderedList: true
      }),
      Placeholder.configure({
        placeholder: '請輸入文章內容...'
      }),
      CodeBlockLowlight.configure({
        lowlight
      })
    ],
    content: props.content,
    editable: false
  })
})

onBeforeUnmount(() => {
  editor.value.destroy()
})
</script>

<style scoped lang="postcss">
:deep {
  .ProseMirror {
    color: #213547;
    font-family: Quotes, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  .ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
  }
  .ProseMirror > * + * {
    margin-top: 0.75em;
  }
  .ProseMirror blockquote {
    padding-left: 1rem;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 0.3rem;
    background-color: rgba(13, 13, 13, 0.05);
    border-left: 4px solid rgba(13, 13, 13, 0.3);
  }
  .ProseMirror ul {
    padding: 0 2rem;
    list-style-type: disc;
  }
  .ProseMirror ol {
    padding: 0 2rem;
    list-style-type: decimal;
  }
  .ProseMirror h1 {
    line-height: 40px;
    font-size: 28px;
  }
  .ProseMirror h2 {
    line-height: 32px;
    font-size: 24px;
  }
  .ProseMirror h3 {
    line-height: 28px;
    font-size: 20px;
  }
  .ProseMirror p {
    font-size: 16px;
    line-height: 1.7;
    margin: 0;
  }
  .ProseMirror a {
    color: #10b981;
    cursor: pointer;
    text-decoration: inherit;
  }
  .ProseMirror code {
    font-size: 0.9em;
    padding: 0.25em;
    background-color: #f1f1f1;
    color: #476582;
    box-decoration-break: clone;

    padding: 0.15em 0.5em;
    border-radius: 4px;
  }
  .ProseMirror img {
    max-width: 100%;
    height: auto;
  }
  .ProseMirror pre {
    background: #0d0d0d;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
  }
  .ProseMirror pre code {
    color: inherit;
    padding: 0;
    background: none;
    font-size: 0.8rem;
  }
  .ProseMirror pre .hljs-comment,
  .ProseMirror pre .hljs-quote {
    color: #616161;
  }
  .ProseMirror pre .hljs-variable,
  .ProseMirror pre .hljs-template-variable,
  .ProseMirror pre .hljs-attribute,
  .ProseMirror pre .hljs-tag,
  .ProseMirror pre .hljs-name,
  .ProseMirror pre .hljs-regexp,
  .ProseMirror pre .hljs-link,
  .ProseMirror pre .hljs-name,
  .ProseMirror pre .hljs-selector-id,
  .ProseMirror pre .hljs-selector-class {
    color: #f98181;
  }
  .ProseMirror pre .hljs-number,
  .ProseMirror pre .hljs-meta,
  .ProseMirror pre .hljs-built_in,
  .ProseMirror pre .hljs-builtin-name,
  .ProseMirror pre .hljs-literal,
  .ProseMirror pre .hljs-type,
  .ProseMirror pre .hljs-params {
    color: #fbbc88;
  }
  .ProseMirror pre .hljs-string,
  .ProseMirror pre .hljs-symbol,
  .ProseMirror pre .hljs-bullet {
    color: #b9f18d;
  }
  .ProseMirror pre .hljs-title,
  .ProseMirror pre .hljs-section {
    color: #faf594;
  }
  .ProseMirror pre .hljs-keyword,
  .ProseMirror pre .hljs-selector-tag {
    color: #70cff8;
  }
  .ProseMirror pre .hljs-emphasis {
    font-style: italic;
  }
  .ProseMirror pre .hljs-strong {
    font-weight: 700;
  }
}
</style>
