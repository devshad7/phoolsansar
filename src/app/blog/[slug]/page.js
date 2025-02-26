import React from "react";
import { client } from "@/utils/contentful";
import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const page = async ({ params }) => {
    const { slug } = await params;

    const entries = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
    });

    const post = entries.items.length > 0 ? entries.items[0] : null;

    if (!post) {
        return <div>Post not found page</div>;
    }

    return (
        <>
            <Navbar />
            <Blog post={post} />
            <Newsletter />
            <Footer />
        </>
    );
};

export default page;

// SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;

    const entries = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
    });

    const post = entries.items.length > 0 ? entries.items[0].fields : null;

    if (!post) {
        return {
            title: "Post Not Found | Phool Sansar",
            description: "Sorry, the requested post was not found.",
        };
    }

    const { title, description, thumbnail, author, date } = post;
    const url = `https://phoolsansar.com/blog/${slug}`;

    const imageUrl = thumbnail?.fields?.file?.url?.startsWith('https')
        ? thumbnail.fields.file.url
        : `https:${thumbnail.fields.file.url}`;

    return {
        metadataBase: new URL("https://phoolsansar.com"),
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: "Phool Sanar",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: "article",
            article: {
                publishedTime: new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
                authors: [author],
            },
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
        },
        other: {
            "application/ld+json": JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": title,
                "description": description,
                "author": { "@type": "Person", "name": author },
                "datePublished": date,
                "image": imageUrl,
                "url": url,
                "publisher": { "@type": "Organization", "name": "Phool Sansar" },
            }),
        },
    };
}