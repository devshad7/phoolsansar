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
        return <div>Error page</div>;
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