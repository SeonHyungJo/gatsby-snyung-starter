const path = require('path')

const PostTemplate = path.resolve(`src/components/Post.jsx`)
const TagTemplate = path.resolve(`src/pages/category.jsx`)

// Setting Post per page
const postsPerPage = 5

/**
 * @author sseon
 * @param actons : function
 * @param graphql : function
 * @summary Create Pages
 */
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 100)
            html
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
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    // Create Tag Page
    createTagPages(createPage, posts)

    // Create Post Page
    createPostPages(createPage, graphql)
    // Create Article Page
    createArticlePages(createPage, graphql)

    return posts
  })
}

/**
 * @author sseon
 * @param createPage : function
 * @param graphql : graphql function
 * @summary Create Post Page
 */
const createPostPages = (createPage, graphql) => {
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { category: { eq: "post" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 100)
            html
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
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    CreateCommonPage(createPage, posts, `posts`)

    return posts
  })
}

/**
 * @author sseon
 * @param createPage : function
 * @param graphql : graphql function
 * @summary Create Article Page
 */
const createArticlePages = (createPage, graphql) => {
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { category: { eq: "article" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 100)
            html
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
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    CreateCommonPage(createPage, posts, `articles`)

    return posts
  })
}

/**
 * @author sseon
 * @param createPage : function
 * @param edges : tag list
 * @summary Create Tag Page
 */
const createTagPages = (createPage, edges) => {
  const posts = {}

  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!posts[tag]) {
          posts[tag] = []
        }
        posts[tag].push(node)
      })
    }
  })

  createPage({
    path: '/category',
    component: TagTemplate,
    context: {
      posts
    }
  })

  Object.keys(posts).forEach(tagName => {
    const post = posts[tagName]

    createPage({
      path: `/category/${tagName}`,
      component: TagTemplate,
      context: {
        posts,
        post,
        tag: tagName
      }
    })
  })
}

/**
 * @author sseon
 * @param createPage : function
 * @param posts : post list
 * @param pageName : page name
 * @summary Create Page and Page List
 */
const CreateCommonPage = (createPage, posts, pageName) => {
  const numPages = Math.ceil(posts.length / postsPerPage)

  // Create article-list pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/${pageName}` : `/${pageName}/${i + 1}`,
      component: path.resolve(`src/pages/${pageName}.jsx`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        prev: i === 1 ? '' : i,
        next: i + 2,
        numPages
      }
    })
  })

  // Create pages for each markdown file.
  posts.forEach(({ node }, index) => {
    const prev = index === 0 ? null : posts[index - 1].node
    const next = index === posts.length - 1 ? null : posts[index + 1].node

    createPage({
      path: node.frontmatter.path,
      component: PostTemplate,
      context: {
        prev,
        next
      }
    })
  })
}
