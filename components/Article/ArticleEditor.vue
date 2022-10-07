<template>
  <div>
    <div v-if="editor" class="mt-5">
      <div class="flex flex-wrap gap-2">
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex w-32 items-center justify-between rounded-md bg-white px-4 text-sm font-medium text-gray-700 shadow hover:bg-gray-100"
              style="height: 30px"
            >
              {{ currentHeading() }}
              <Icon
                class="-mr-1 ml-2 h-5 w-5"
                name="material-symbols:keyboard-arrow-down-rounded"
              />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute left-0 z-10 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <MenuItem>
                <a
                  :class="[
                    editor.isActive('heading', { level: 1 })
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900',
                    'block cursor-pointer select-none px-4 py-2 text-lg font-bold'
                  ]"
                  @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                  >大標題</a
                >
              </MenuItem>
              <MenuItem>
                <a
                  :class="[
                    editor.isActive('heading', { level: 2 })
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900',
                    'text-md block cursor-pointer select-none px-4 py-2 font-medium'
                  ]"
                  @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                  >副標題</a
                >
              </MenuItem>
              <MenuItem>
                <a
                  :class="[
                    editor.isActive('heading', { level: 3 })
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900',
                    'block cursor-pointer select-none px-4 py-2 text-sm font-medium'
                  ]"
                  @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                  >標題</a
                >
              </MenuItem>
              <MenuItem>
                <a
                  :class="[
                    editor.isActive('heading', { level: 4 }) || !editor.isActive('heading')
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900',
                    'block cursor-pointer select-none px-4 py-2 text-xs'
                  ]"
                  @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
                  >一般文字</a
                >
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex w-36 items-center justify-between rounded-md bg-white px-4 text-sm font-medium text-gray-700 shadow hover:bg-gray-100"
              style="height: 30px"
            >
              {{ currentFont() }}
              <Icon
                class="-mr-1 ml-2 h-5 w-5"
                name="material-symbols:keyboard-arrow-down-rounded"
              />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute left-0 z-10 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <MenuItem>
                <a
                  :class="[
                    !editor.isActive('textStyle')
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900',
                    'block cursor-pointer select-none px-4 py-2 font-sans'
                  ]"
                  @click="editor.chain().focus().unsetFontFamily().run()"
                  >Noto Sans</a
                >
              </MenuItem>
              <MenuItem>
                <a
                  :class="[
                    editor.isActive('textStyle', { fontFamily: 'serif' })
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900',
                    'block cursor-pointer select-none px-4 py-2 font-serif'
                  ]"
                  @click="editor.chain().focus().setFontFamily('serif').run()"
                  >Noto Serif</a
                >
              </MenuItem>
              <MenuItem>
                <a
                  :class="[
                    editor.isActive('textStyle', { fontFamily: 'Inter' })
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900',
                    'font-inter block cursor-pointer select-none px-4 py-2'
                  ]"
                  @click="editor.chain().focus().setFontFamily('Inter').run()"
                  >Inter</a
                >
              </MenuItem>
              <MenuItem>
                <a
                  :class="[
                    editor.isActive('textStyle', {
                      fontFamily: 'Comic Sans MS, Comic Sans'
                    })
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900',
                    'font-comic block cursor-pointer select-none px-4 py-2'
                  ]"
                  @click="editor.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run()"
                  >Comic Sans</a
                >
              </MenuItem>
              <MenuItem>
                <a
                  :class="[
                    editor.isActive('textStyle', { fontFamily: 'monospace' })
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900',
                    'block cursor-pointer select-none px-4 py-2 font-mono'
                  ]"
                  @click="editor.chain().focus().setFontFamily('monospace').run()"
                  >Monospace</a
                >
              </MenuItem>
              <MenuItem>
                <a
                  :class="[
                    editor.isActive('textStyle', { fontFamily: 'cursive' })
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900',
                    'font-cursive block cursor-pointer select-none px-4 py-2'
                  ]"
                  @click="editor.chain().focus().setFontFamily('cursive').run()"
                  >Cursive</a
                >
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
        <button
          type="button"
          :class="{
            'bg-green-100 shadow-none hover:bg-green-100': editor.isActive('bold')
          }"
          class="inline-flex items-center justify-center rounded bg-white align-middle shadow transition-all duration-300 hover:bg-gray-200"
          style="width: 30px; height: 30px"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <Icon
            size="20"
            :class="editor.isActive('bold') ? 'text-emerald-500' : 'text-gray-600'"
            name="material-symbols:format-bold-rounded"
          />
        </button>
        <button
          type="button"
          :class="{
            'bg-green-100 shadow-none hover:bg-green-100': editor.isActive('italic')
          }"
          class="inline-flex items-center justify-center rounded bg-white align-middle shadow transition-all duration-300 hover:bg-gray-200"
          style="width: 30px; height: 30px"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <Icon
            size="20"
            :class="editor.isActive('italic') ? 'text-emerald-500' : 'text-gray-600'"
            name="material-symbols:format-italic-rounded"
          />
        </button>
        <button
          type="button"
          :class="{
            'bg-green-100 shadow-none hover:bg-green-100': editor.isActive('underline')
          }"
          class="inline-flex items-center justify-center rounded bg-white align-middle shadow transition-all duration-300 hover:bg-gray-200"
          style="width: 30px; height: 30px"
          @click="editor.chain().focus().toggleUnderline().run()"
        >
          <Icon
            size="20"
            :class="editor.isActive('underline') ? 'text-emerald-500' : 'text-gray-600'"
            name="material-symbols:format-underlined-rounded"
          />
        </button>
        <button
          type="button"
          :class="{
            'bg-green-100 shadow-none hover:bg-green-100': editor.isActive('strike')
          }"
          class="inline-flex items-center justify-center rounded bg-white align-middle shadow transition-all duration-300 hover:bg-gray-200"
          style="width: 30px; height: 30px"
          @click="editor.chain().focus().toggleStrike().run()"
        >
          <Icon
            size="20"
            :class="editor.isActive('strike') ? 'text-emerald-500' : 'text-gray-600'"
            name="material-symbols:format-strikethrough-rounded"
          />
        </button>
        <button
          type="button"
          :class="{
            'bg-green-100 shadow-none hover:bg-green-100': editor.isActive({
              textAlign: 'left'
            })
          }"
          class="inline-flex items-center justify-center rounded bg-white align-middle shadow transition-all duration-300 hover:bg-gray-200"
          style="width: 30px; height: 30px"
          @click="editor.chain().focus().setTextAlign('left').run()"
        >
          <Icon
            size="18"
            :class="editor.isActive({ textAlign: 'left' }) ? 'text-emerald-500' : 'text-gray-600'"
            name="material-symbols:format-align-left-rounded"
          />
        </button>
        <button
          type="button"
          :class="{
            'bg-green-100 shadow-none hover:bg-green-100': editor.isActive({
              textAlign: 'center'
            })
          }"
          class="inline-flex items-center justify-center rounded bg-white align-middle shadow transition-all duration-300 hover:bg-gray-200"
          style="width: 30px; height: 30px"
          @click="editor.chain().focus().setTextAlign('center').run()"
        >
          <Icon
            size="18"
            :class="editor.isActive({ textAlign: 'center' }) ? 'text-emerald-500' : 'text-gray-600'"
            name="material-symbols:format-align-center-rounded"
          />
        </button>
        <button
          type="button"
          :class="{
            'bg-green-100 shadow-none hover:bg-green-100': editor.isActive({
              textAlign: 'right'
            })
          }"
          class="inline-flex items-center justify-center rounded bg-white align-middle shadow transition-all duration-300 hover:bg-gray-200"
          style="width: 30px; height: 30px"
          @click="editor.chain().focus().setTextAlign('right').run()"
        >
          <Icon
            size="18"
            :class="editor.isActive({ textAlign: 'right' }) ? 'text-emerald-500' : 'text-gray-600'"
            name="material-symbols:format-align-right-rounded"
          />
        </button>
        <button
          type="button"
          :class="{
            'bg-green-100 shadow-none hover:bg-green-100': editor.isActive('code')
          }"
          class="inline-flex items-center justify-center rounded bg-white align-middle shadow transition-all duration-300 hover:bg-gray-200"
          style="width: 30px; height: 30px"
          @click="editor.chain().focus().toggleCode().run()"
        >
          <Icon
            size="20"
            :class="editor.isActive('code') ? 'text-emerald-500' : 'text-gray-600'"
            name="material-symbols:code-rounded"
          />
        </button>
        <button
          type="button"
          :class="{
            'bg-green-100 shadow-none hover:bg-green-100': editor.isActive('blockquote')
          }"
          class="inline-flex items-center justify-center rounded bg-white align-middle shadow transition-all duration-300 hover:bg-gray-200"
          style="width: 30px; height: 30px"
          @click="editor.chain().focus().toggleBlockquote().run()"
        >
          <Icon
            size="20"
            :class="editor.isActive('blockquote') ? 'text-emerald-500' : 'text-gray-600'"
            name="material-symbols:format-quote-rounded"
          />
        </button>
        <button
          type="button"
          :class="{
            'bg-green-100 shadow-none hover:bg-green-100': editor.isActive('bulletList')
          }"
          class="inline-flex items-center justify-center rounded bg-white align-middle shadow transition-all duration-300 hover:bg-gray-200"
          style="width: 30px; height: 30px"
          @click="editor.chain().focus().toggleBulletList().run()"
        >
          <Icon
            size="20"
            :class="editor.isActive('bulletList') ? 'text-emerald-500' : 'text-gray-600'"
            name="material-symbols:format-list-bulleted-rounded"
          />
        </button>
        <button
          type="button"
          :class="{
            'bg-green-100 shadow-none hover:bg-green-100': editor.isActive('orderedList')
          }"
          class="inline-flex items-center justify-center rounded bg-white align-middle shadow transition-all duration-300 hover:bg-gray-200"
          style="width: 30px; height: 30px"
          @click="editor.chain().focus().toggleOrderedList().run()"
        >
          <Icon
            size="20"
            :class="editor.isActive('orderedList') ? 'text-emerald-500' : 'text-gray-600'"
            name="material-symbols:format-list-numbered-rounded"
          />
        </button>
        <button
          type="button"
          :class="{
            'bg-green-100 shadow-none hover:bg-green-100': editor.isActive('codeBlock')
          }"
          class="inline-flex items-center justify-center rounded bg-white align-middle shadow transition-all duration-300 hover:bg-gray-200"
          style="width: 30px; height: 30px"
          @click="editor.chain().focus().toggleCodeBlock().run()"
        >
          <Icon
            size="20"
            :class="editor.isActive('codeBlock') ? 'text-emerald-500' : 'text-gray-600'"
            name="material-symbols:code-blocks-outline-rounded"
          />
        </button>
      </div>
    </div>
    <editor-content
      id="full-editor"
      class="mt-2 rounded-md bg-white p-3 shadow"
      style="min-height: 400px"
      :editor="editor"
    />
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
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
  modelValue: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'update:summary'])

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
        history: true,
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
    content: props.modelValue,
    editorProps: {
      attributes: {
        class: 'focus:outline-none border-b border-b-gray-300 py-1'
      }
    },
    onUpdate: () => {
      const articleContent = editor.value.getHTML()
      const articleSummary = editor.value.getText().replace(/\n/g, ' ').substring(0, 300)
      emit('update:modelValue', articleContent)
      emit('update:summary', articleSummary)
    }
  })
})

onBeforeUnmount(() => {
  editor.value.destroy()
})

const currentFont = () => {
  if (!editor.value.isActive('textStyle')) {
    return 'Noto Sans'
  } else if (editor.value.isActive('textStyle', { fontFamily: 'Inter' })) {
    return 'Inter'
  } else if (
    editor.value.isActive('textStyle', {
      fontFamily: 'Comic Sans MS, Comic Sans'
    })
  ) {
    return 'Comic Sans'
  } else if (editor.value.isActive('textStyle', { fontFamily: 'serif' })) {
    return 'Noto Serif'
  } else if (editor.value.isActive('textStyle', { fontFamily: 'monospace' })) {
    return 'Monospace'
  } else if (editor.value.isActive('textStyle', { fontFamily: 'cursive' })) {
    return 'Cursive'
  }
  return 'Font'
}
const currentHeading = () => {
  if (editor.value.isActive('heading', { level: 1 })) {
    return '大標題'
  } else if (editor.value.isActive('heading', { level: 2 })) {
    return '副標題'
  } else if (editor.value.isActive('heading', { level: 3 })) {
    return '標題'
  } else if (editor.value.isActive('heading', { level: 4 }) || !editor.value.isActive('heading')) {
    return '內文'
  }
}
</script>

<style>
.ProseMirror {
  color: #1f2937;
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
  font-size: 1.5rem;
  font-weight: bold;
}
.ProseMirror h2 {
  font-size: 1.2rem;
  font-weight: bold;
}
.ProseMirror h3 {
  font-size: 1.1rem;
  font-weight: bold;
}
.ProseMirror p {
  font-size: 1.1rem;
  margin: 0;
}
.ProseMirror a {
  color: #10b981;
  cursor: pointer;
  text-decoration: underline;
}
.ProseMirror code {
  font-size: 0.9rem;
  padding: 0.25em;
  border-radius: 0.25em;
  background-color: #f9fafb;
  color: #4b5563;
  box-decoration-break: clone;
}
.ProseMirror img {
  max-width: 100%;
  height: auto;
}
.ProseMirror img.ProseMirror-selectednode {
  outline: 2px solid #6ee7b7;
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
</style>
