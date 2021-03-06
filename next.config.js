const readingTime = require('reading-time')
const mdxPrism = require('mdx-prism')
const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-slug'),
    require('remark-code-titles'),
    require('./utils/title-style')
  ],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: (mdxContent) => ({
      wordCount: mdxContent.split(/\s+/gu).length,
      readingTime: readingTime(mdxContent)
    })
  }
})({
  experimental: {
    modern: true
  },
  redirects: () => [
    {
      source: '/resume',
      destination: '/resume.pdf',
      permanent: true
    },
    {
      source: '/blog',
      destination: '/',
      permanent: false
    },
    {
      source: '/dashboard',
      destination: '/',
      permanent: false
    },
    {
      source: '/newsletter',
      destination: '/',
      permanent: false
    }
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    return config
  }
})
