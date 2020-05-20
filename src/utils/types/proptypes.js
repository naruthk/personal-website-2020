import PropTypes from "prop-types";

export const LocationPropTypes = PropTypes.shape({
  pathname: PropTypes.string,
});

export const SinglePagePropTypes = PropTypes.shape({
  id: PropTypes.string,
  updatedAt: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.objectOf({
    json: PropTypes.json,
  }),
});

export const ContentfulImagePropTypes = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  fixed: {
    src: PropTypes.string,
    width: PropTypes.integer,
  },
  fluid: {
    src: PropTypes.string,
    width: PropTypes.integer,
  },
});

export const TransformerMarkdownPropTypes = PropTypes.shape({
  childMarkdownRemark: {
    html: PropTypes.node,
  },
});

export const ExcerptPropTypes = PropTypes.shape({
  excerpt: PropTypes.string,
});

export const TagPropTypes = PropTypes.string;

export const BlogItem = PropTypes.shape({
  slug: PropTypes.string,
  title: PropTypes.string,
  body: TransformerMarkdownPropTypes,
  heroImage: ContentfulImagePropTypes,
  excerpt: ExcerptPropTypes,
  category: PropTypes.arrayOf(TagPropTypes),
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
});

export const ProjectItem = PropTypes.shape({
  slug: PropTypes.string,
  title: PropTypes.string,
  body: TransformerMarkdownPropTypes,
  heroImage: ContentfulImagePropTypes,
  excerpt: ExcerptPropTypes,
  category: PropTypes.arrayOf(TagPropTypes),
  initialStartDate: PropTypes.string,
  completionDate: PropTypes.string,
  sourceCodeUrl: PropTypes.string,
  demoUrl: PropTypes.string,
});
