import React from "react";

function ArticleImage({ src, alt, className}){
    return(
        <div className={`article-image ${className}`}> 
        <img src={src} alt={alt} />
        </div>
    );
}

export default ArticleImage;