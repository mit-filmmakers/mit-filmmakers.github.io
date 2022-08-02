import { GatsbyNode } from "gatsby";
import { createRemoteFileNode } from "gatsby-source-filesystem";
import { resolve } from "path";
import slugify from "slugify";

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  actions.createTypes(`
    type NotionPage implements Node {
      coverImage: String,
      image: File @link(from: "fields.localFile"),
      title: String!
    }
  `)
}

export const createPages: GatsbyNode['createPages'] = async ({actions, graphql}) => {
  const {data} = await graphql(`
  query EventID {
    notionDatabase(title: {eq: "Events"}){
      childrenNotionPage{
        id
        title
      }
    }
  }
  `) as {data: {notionDatabase: {childrenNotionPage: {id: string, title: string}[]}}}
  data.notionDatabase.childrenNotionPage.forEach( ({id, title}) => {
    actions.createPage({
      path: `events/${slugify(title)}`,
      component: resolve("./src/templates/event.tsx"),
      context: {id: id}
    })
  })
}

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (
    node.internal.type === "NotionPage" &&
    node.coverImage
  ) {
    const fileNode = await createRemoteFileNode({
      url: node.coverImage as string, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      getCache,
    })

    // if the file was created, extend the node with "localFile"
    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id })
    }
  }
}
