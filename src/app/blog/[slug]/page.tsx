import React from 'react';
import Head from 'next/head';
import { MDXRemote as MD } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { getPostBySlug, mdxOptions } from '@/utils/mdx-utils';
import Layout from '@/app/layout';
import SEO from '@/components/SEO';
import CustomLink from '@/components/CustomLink';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
} as any;

export async function getData({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(slug);
  return post;
}

export default async function Post({ params }: { params: any }) {
  const post = await getData({ params });
  return (
    <Layout>
      <SEO title={post.data.title} description={post.data.description} />
      <div>
        {post.data && post.source && (
          <div>
            <title>{post.data.title}</title>

            <h1>{post.data.title}</h1>
            <h2>{post.data.date}</h2>
            {/*<MD {...post.mdxSource} components={components} />*/}
            <MDXRemote
              source={post.source}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypePrism],
                  format: 'mdx',
                },
                scope: post.data,
              }}
              components={components}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}
