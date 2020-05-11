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

export interface BlogPostItem {
  slug: string;
  title: string;
  content: {
    json: object;
  };
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
  isActive: boolean;
  initialStartDate: string;
  completionDate: string;
  category: [Tags];
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
