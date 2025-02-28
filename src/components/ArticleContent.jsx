import React from "react";
import { MdPerson } from "react-icons/md";
import DOMPurify from "dompurify";
import PropTypes from "prop-types";
import "quill/dist/quill.snow.css";
import "./quill-costom.css";
import { Helmet } from "react-helmet"; // Import Helmet from react-helmet

const ArticleContent = React.memo(({ articleData }) => {
  const formattedContent = articleData.content.replace(
    /href="([^"]+)"/g,
    (match, url) => {
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        return `href="https://${url}"`;
      }
      return match;
    }
  );

  // Sanitasi konten dengan DOMPurify
  const sanitizedContent = DOMPurify.sanitize(formattedContent, {
    ALLOWED_TAGS: [
      "h1",
      "h2",
      "h3",
      "p",
      "br",
      "strong",
      "em",
      "ul",
      "ol",
      "li",
      "a",
      "img",
      "sup",
      "sub",
      "s",
      "u",
    ],
    ALLOWED_ATTR: [
      "href",
      "rel",
      "target",
      "class",
      "style",
      "src",
      "data-list",
    ],
  });

  return (
    <div className="article-content flex flex-col items-start gap-6 lg:gap-12 self-stretch">
      <Helmet>
        {/* Additional meta tags for the article content */}
        <meta property="og:image" content={articleData.image} />
        <meta property="og:description" content={articleData.content.substring(0, 160)} />
      </Helmet>
      <img
        src={articleData.image}
        alt={articleData.title}
        className="w-full h-[215.031px] lg:h-[689px]"
      />
      <div className="article-author flex flex-col lg:flex-row lg:justify-between lg:items-start lg:self-stretch gap-6 lg:gap-0">
        <div className="author flex flex-col items-start gap-3">
          <p className="text-base">Author</p>
          <div className="icon-detail flex items-center gap-3">
            <div className="icon text-white flex size-9 p-3 justify-center items-center rounded-lg bg-neutral-3">
              <MdPerson size={24} />
            </div>
            <div className="author-date flex flex-col items-start gap-1">
              <p className="text-bold text-base">{articleData.User.name}</p>
              <p className="text-sm text-neutral-3">
                {new Date(articleData.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
        <div
          className="article-content lg:w-[600px] flex flex-col items-start gap-0 self-stretch text-justify"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        ></div>
        <div className="author flex flex-col items-start gap-3 xs:hidden w-[157.594px]"></div>
      </div>
    </div>
  );
});

ArticleContent.propTypes = {
  articleData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    User: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};