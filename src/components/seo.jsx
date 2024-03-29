import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import useSiteMetadata from "../hooks/use-site-metadata";

function SEO({ title, description, lang, meta, metaImage, pathName }) {
  const siteMetadata = useSiteMetadata();

  const metaDescription = description || siteMetadata.description;
  const image =
    metaImage && metaImage.src && `${siteMetadata.siteUrl}${metaImage.src}`;
  const canonical = pathName && `${siteMetadata.siteUrl}${pathName}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate="%s"
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `google-site-verification`,
          content: "0voIRM1BitryT-MtpQBe5GZdg0olx-6_SDt35T-DKec",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
                {
                  name: "twitter:image",
                  content: image,
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  metaImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathName: PropTypes.string,
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  metaImage: null,
  description: ``,
  pathName: "",
};

export default SEO;
