const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  createPostPages(createPage, graphql, 'post')
  createPostPages(createPage, graphql, 'article')
}

const createPostPages = (createPage, graphql, categoryName) => {
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { category: { eq: "${categoryName}" } } }
      ) {
        edges {
          node {
            rawMarkdownBody
            id
            timeToRead
            frontmatter {
              date(formatString: "YYYY/MM/DD")
              path
              tags
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) Promise.reject(result.errors)

    const posts = result.data.allMarkdownRemark.edges

    CreateCommonPage(createPage, posts, categoryName)
  })
}

const CreateCommonPage = (createPage, posts, pageName) => {
  const postsPerPage = 5
  const maxPageNum = Math.ceil(posts.length / postsPerPage)

  const PostTemplate = path.resolve(`src/template/blog-post/index.jsx`)
  const pagesComponent = path.resolve(`src/template/post-list/index.jsx`)

  Array.from({ length: maxPageNum }).forEach((_, i) => {
    const pagePath = i === 0 ? '' : i
    const path = `/${pageName}/${pagePath}`

    const next = i === maxPageNum - 1 ? '' : i + 1;
    const prev = i === 0 ? '' : i === 1 ? 0 : i - 1

    createPage({
      path,
      component: pagesComponent,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        prev,
        next,
        maxPageNum,
        categoryName: pageName
      }
    })
  })

  // blog - post, blog - article pages
  if (posts.length > 0) {
    posts.forEach(({ node }, index) => {
      const prev = index === 0 ? null : posts[index - 1].node
      const next = index === posts.length - 1 ? null : posts[index + 1].node

      createPage({
        path: node.frontmatter.path,
        component: PostTemplate,
        context: {
          prev,
          next,
          limit: postsPerPage,
        }
      })
    })
  }
}
