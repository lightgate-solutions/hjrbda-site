"use client";

import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
	Bold,
	Heading2,
	Heading3,
	Italic,
	Link2,
	List,
	ListOrdered,
	Quote,
	Redo,
	Undo,
} from "lucide-react";
import { useCallback } from "react";

interface ArticleEditorProps {
	content: string;
	onChange: (content: string) => void;
	placeholder?: string;
}

export function ArticleEditor({
	content,
	onChange,
	placeholder = "Start writing your article...",
}: ArticleEditorProps) {
	const editor = useEditor({
		immediatelyRender: false,
		extensions: [
			StarterKit.configure({
				heading: { levels: [2, 3] },
			}),
			Placeholder.configure({ placeholder }),
			Link.configure({
				openOnClick: false,
				HTMLAttributes: { class: "text-primary underline" },
			}),
		],
		content,
		onUpdate: ({ editor: e }) => onChange(e.getHTML()),
		editorProps: {
			attributes: {
				class:
					"prose prose-sm sm:prose max-w-none focus:outline-none min-h-[300px] px-4 py-3 text-foreground",
			},
		},
	});

	const setLink = useCallback(() => {
		if (!editor) return;
		const previousUrl = editor.getAttributes("link").href;
		const url = window.prompt("URL", previousUrl);
		if (url === null) return;
		if (url === "") {
			editor.chain().focus().extendMarkRange("link").unsetLink().run();
			return;
		}
		editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
	}, [editor]);

	if (!editor) return null;

	return (
		<div className="overflow-hidden rounded-md border bg-background">
			<div className="flex flex-wrap gap-1 border-b bg-muted/30 p-2">
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleBold().run()}
					isActive={editor.isActive("bold")}
					icon={<Bold className="h-4 w-4" />}
					label="Bold"
				/>
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleItalic().run()}
					isActive={editor.isActive("italic")}
					icon={<Italic className="h-4 w-4" />}
					label="Italic"
				/>
				<span className="mx-1 w-px self-stretch bg-border" aria-hidden />
				<ToolbarButton
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 2 }).run()
					}
					isActive={editor.isActive("heading", { level: 2 })}
					icon={<Heading2 className="h-4 w-4" />}
					label="Heading 2"
				/>
				<ToolbarButton
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 3 }).run()
					}
					isActive={editor.isActive("heading", { level: 3 })}
					icon={<Heading3 className="h-4 w-4" />}
					label="Heading 3"
				/>
				<span className="mx-1 w-px self-stretch bg-border" aria-hidden />
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					isActive={editor.isActive("bulletList")}
					icon={<List className="h-4 w-4" />}
					label="Bullet list"
				/>
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					isActive={editor.isActive("orderedList")}
					icon={<ListOrdered className="h-4 w-4" />}
					label="Numbered list"
				/>
				<span className="mx-1 w-px self-stretch bg-border" aria-hidden />
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleBlockquote().run()}
					isActive={editor.isActive("blockquote")}
					icon={<Quote className="h-4 w-4" />}
					label="Quote"
				/>
				<ToolbarButton
					onClick={setLink}
					isActive={editor.isActive("link")}
					icon={<Link2 className="h-4 w-4" />}
					label="Link"
				/>
				<span className="mx-1 w-px self-stretch bg-border" aria-hidden />
				<ToolbarButton
					onClick={() => editor.chain().focus().undo().run()}
					disabled={!editor.can().undo()}
					icon={<Undo className="h-4 w-4" />}
					label="Undo"
				/>
				<ToolbarButton
					onClick={() => editor.chain().focus().redo().run()}
					disabled={!editor.can().redo()}
					icon={<Redo className="h-4 w-4" />}
					label="Redo"
				/>
			</div>
			<EditorContent editor={editor} />
		</div>
	);
}

function ToolbarButton({
	onClick,
	isActive,
	disabled,
	icon,
	label,
}: {
	onClick: () => void;
	isActive?: boolean;
	disabled?: boolean;
	icon: React.ReactNode;
	label: string;
}) {
	return (
		<button
			type="button"
			onMouseDown={(e) => e.preventDefault()}
			onClick={onClick}
			disabled={disabled}
			title={label}
			className={`rounded p-2 transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50 ${isActive ? "bg-muted text-primary" : ""}`}
		>
			{icon}
		</button>
	);
}
