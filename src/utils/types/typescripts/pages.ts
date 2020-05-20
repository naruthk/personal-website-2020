import { CompanyItem, ProjectItem, BlogPostItem } from "./types";

export interface HomePageProps {
  data: {
    allContentfulCompanies: {
      edges: [
        {
          node: CompanyItem;
        }
      ]
    }
    allContentfulProjects: {
      edges: [
        {
          node: ProjectItem;
        }
      ]
    }
    allContentfulBlogPosts: {
      edges: [
        {
          node: BlogPostItem;
        }
      ]
    }
  }
}

export interface BlogPostsPageProps {
  data: {
    allContentfulBlogPosts: {
      edges: [
        {
          node: BlogPostItem;
        }
      ]
    }
  }
};

export interface SingleBlogPostPageProps {
  data: {
    contentfulBlogPosts: BlogPostItem
  }
};

export interface SingleProjectPageProps {
  data: {
    contentfulProjects: ProjectItem
  }
};