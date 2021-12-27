import React from "react";

export default function Video(props) {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
     <video
       loop
       muted
       autoplay
       playsinline
       src="${props.src}"
       class="${props.className}"
     />,
   ` }}></div> )
}