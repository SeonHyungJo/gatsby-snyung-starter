const path = require('path');

/**
 * Tag Page 생성
 * Tag만 넘기도록 구성하지 왜 edges를 전부 넘겼지?
 */
const createTagPages = (createPage, edges) => {
  const tagTemplate = path.resolve(`src/templates/tags.js`);
  const posts = {};

  edges
    .forEach(({ node }) => {
      if (node.frontmatter.tags) {
        node.frontmatter.tags
          .forEach(tag => {
            if (!posts[tag]) {
              posts[tag] = [];
            }
            posts[tag].push(node);
          });
      }
    });

  createPage({
    path: '/tags',
    component: tagTemplate,
    context: {
      posts
    }
  });

  Object.keys(posts)
    .forEach(tagName => {
      const post = posts[tagName];
      createPage({
        path: `/tags/${tagName}`,
        component: tagTemplate,
        context: {
          posts,
          post,
          tag: tagName
        }
      })
    });
};

/**
 * Post Page 생성 
 */
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
      filter: { frontmatter :{ category :{ eq: "post"}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
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
  }`)
  .then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges;

    // Create Tag Pages
    createTagPages(createPage, posts);

    // Create blog-list pages
    // 한페이지에 보일 게시물수
    const postsPerPage = 5
    // 페이지수
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/posts` : `/posts/${i + 1}`,
        component: path.resolve(`src/templates/post-list.js`),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          prev: i === 1 ? '' : i, //페이지 이동을 위해서 추가
          next: i + 2,  //페이지 이동을 위해서 추가
          numPages
        },
      })
    })

    // Create pages for each markdown file.
    posts.forEach(({ node }, index) => {
      const prev = index === 0 ? null : posts[index - 1].node;
      const next = index === posts.length - 1 ? null : posts[index + 1].node;

      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev,
          next
        }
      });
    });

    return posts;
  })
};
