interface ContentfulImage {
  title: string;
  description: string;
  fixed: {
    src: string;
    width: number;
  };
  fluid: {
    src: string;
    width: number;
  };
};

export interface BlogPost {
  slug: string;
  title: string;
  content: object;
  heroImage: ContentfulImage;
  createdAt: string;
  excerpt: {
    excerpt: string;
  }
  category: [string];
};

export interface BlogPostsPageProps {
  data: {
    allContentfulBlogPosts: {
      edges: [
        {
          node: BlogPost;
        }
      ]
    }
  }
};

export interface ProjectItem {
  title: string;
  isActive: boolean;
  initialStartDate: string;
  completionDate: string;
  category: [string];
  url: URL;
};

export interface CompanyItem {
  companyName: string;
  employmentStartDate: string;
  companyUrl: URL;
  position: {
    position: string;
  }
  slug: string;
  logo: ContentfulImage;
};

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
          node: BlogPost;
        }
      ]
    }
  }
}