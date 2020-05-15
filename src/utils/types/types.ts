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

export interface Tags {
  items: [string];
}

export interface HTMLFromMarkdown {
  childMarkdownRemark: {
    html: object
  }
};

export interface BlogPostItem {
  slug: string;
  title: string;
  body: HTMLFromMarkdown;
  heroImage: ContentfulImage;
  excerpt: {
    excerpt: string;
  }
  category: [Tags];
  createdAt: string;
  updatedAt: string;
};

export interface ProjectItem {
  title: string;
  slug: string;
  excerpt: {
    excerpt: string;
  }
  body: HTMLFromMarkdown;
  heroImage: ContentfulImage;
  initialStartDate: string;
  completionDate: string;
  sourceCodeUrl: string;
  demoUrl: string;
  category: [Tags];
};

export interface CompanyItem {
  companyName: string;
  employmentStartDate: string;
  companyUrl: string;
  position: {
    position: string;
  }
  slug: string;
  logo: ContentfulImage;
};
