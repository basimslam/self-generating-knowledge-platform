import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Markdown (props){
  return (
      <ReactMarkdown>{props.markdown}</ReactMarkdown>
  );
};


