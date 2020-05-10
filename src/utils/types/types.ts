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

export interface BlogPost {
  slug: string;
  title: string;
  content: object;
  heroImage: ContentfulImage;
  createdAt: string;
  excerpt: {
    excerpt: string;
  }
  category: [Tags];
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
