
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaCodepen
} from 'react-icons/fa';

export const SOCIAL_NETWORK_PROFILE_MAP = {
  twitter: {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/nkongurai",
  },
  linkedin: {
    name: "Linkedin",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/naruthkongurai",
  },
  github: {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://www.github.com/naruthk",
  },
  codepen: {
    name: "CodePen",
    icon: <FaCodepen />,
    url: "https://www.codepen.io/naruthk"
  }
};

export const ARTICLE_SHARE_INFO_MAP = {
  facebook: {
    url: `https://www.facebook.com/sharer/sharer.php?u=`,
    icon: <FaFacebook />
  },
  twitter: {
    url: `https://twitter.com/intent/tweet?url=`,
    icon: <FaTwitter />
  }
};
