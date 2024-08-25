import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import MarkdownContent from './Posts/article.md'
import '../localshirt.css'
import greenLogo from '../assets/green_logo.svg'

type MarkdownProps = {
    source: string;
  };

const BlogPost = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(MarkdownContent);
        const content = await response.text();
        setMarkdownContent(content);
      } catch (error) {
        console.error('Erreur lors de la récupération du fichier Markdown', error);
      }
    };

    fetchMarkdownContent();
  }, []);

  type CodeBlockProps = {
    value: string;
  };
  
  const CodeBlock: React.FC<CodeBlockProps> = ({ value }) => {
    return <pre className="custom-code">{value}</pre>;
  };

  const renderers = {
    code: CodeBlock,
  };

  return (
    <div className='localshirt-text'>
      <img src={greenLogo} alt="LOGO" className="top-left-logo" />
      <ReactMarkdown components={{
    h1(props) {
      const {node, ...rest} = props;
      return <h1 className='localshirt-title' {...rest} />
    },
    br(props) {
      const {node, ...rest} = props;
      return <div className='localshirt-separator'/>
    },
    code(props) { // not using the CSS file here because it doesn't work for some reason
      const {node, ...rest} = props;
      return <code style={{
        backgroundColor: '#99af8c',
        color: '#333',
        fontFamily: 'Courier New',
        fontSize: '14px',
        padding: '3px',
      }} {...rest} />
    },
  }}
      children={markdownContent} />
    </div>
  );
};

export default BlogPost;