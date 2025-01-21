import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';

export const options = {
    renderNode: {
        // Headings
        [BLOCKS.HEADING_1]: (node, children) => (
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-300 mt-6 mb-4">
                {children}
            </h1>
        ),
        [BLOCKS.HEADING_2]: (node, children) => (
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-300 mt-4">
                {children}
            </h2>
        ),
        [BLOCKS.HEADING_3]: (node, children) => (
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-400 mt-4">
                {children}
            </h3>
        ),
        [BLOCKS.HEADING_4]: (node, children) => (
            <h4 className="text-xl font-medium text-gray-800 dark:text-gray-500 mt-3">
                {children}
            </h4>
        ),

        // Paragraph
        [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className="text-base text-gray-600 dark:text-gray-400 mt-2 mb-4 leading-relaxed">
                {children}
            </p>
        ),

        // Blockquote
        [BLOCKS.QUOTE]: (node, children) => (
            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800 dark:text-gray-400 mt-4">
                {children}
            </blockquote>
        ),

        // Ordered List
        [BLOCKS.OL_LIST]: (node, children) => (
            <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 mt-2">
                {children}
            </ol>
        ),

        // Unordered List
        [BLOCKS.UL_LIST]: (node, children) => (
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2">
                {children}
            </ul>
        ),

        // List Items
        [BLOCKS.LIST_ITEM]: (node, children) => (
            <li className="ml-4">{children}</li>
        ),

        // Images
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { file, title } = node.data.target.fields;
            const imageUrl = file.url;
            const imageAlt = title || 'Contentful Image';

            return (
                <div className="mt-4">
                    <Image
                        src={`https:${imageUrl}`}
                        alt={title || 'Contentful Image'}
                        width={800}
                        height={600}
                        className="rounded-lg mx-auto mt-4 mb-4 w-full max-w-4xl"
                        priority={false}
                    />
                </div>
            );
        },

        // Hyperlinks
        [INLINES.HYPERLINK]: (node, children) => {
            const { uri } = node.data;
            return (
                <Link
                    href={uri}
                    className="text-blue-600 underline hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </Link>
            );
        },

        // Bold Text
        [BLOCKS.TEXT]: (node, children) => {
            if (node.marks?.some((mark) => mark.type === 'bold')) {
                return <strong className="font-bold">{children}</strong>;
            }
            return children;
        },

        // Inline Images or Custom Renderers
        [INLINES.EMBEDDED_ENTRY]: (node) => {
            // Handle custom inline content like inline embedded entries
            return (
                <span className="bg-gray-100 p-1 rounded-md text-gray-800 dark:text-gray-400">
                    Inline Content Placeholder
                </span>
            );
        },
    },
};
