import './App.css';
import React, { useState } from 'react';
import { marked } from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand,faCompress} from '@fortawesome/free-solid-svg-icons';
function App() {

  const [inputValue, setInputValue] = useState('# Default Heading\n\n## This is a sub-heading...\n ### And here\'s some other cool stuff:\n Heres some code, `<div></div>`, between 2 backticks. \n ```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n\t if (firstLine == \'```\' && lastLine == \'```\') {\n \t \t return multiLineCode \n \t } \n }\n```\nYou can also make text **bold**... whoa! \n Or _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere\'s also [links](https://www.freecodecamp.org), and\n> Block Quotes! \n\n And if you want to get really crazy, even tables:\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let\'s not forget embedded images:\n ' );
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFullscreen = () => {
    setIsExpanded(!isExpanded);
  };
  const [isPreviewExpanded, setIsPreviewExpanded] = useState(false);
  const previewFullscreen = () => {
    setIsPreviewExpanded(!isPreviewExpanded);
  };
  return (
    <div className="App">
      <div id="editor-container" className={isPreviewExpanded? 'preview-expanded' : isExpanded ? 'expanded' : ''}>
        <div   id="topbar">
          <p>Editor</p>
          <FontAwesomeIcon onClick={handleFullscreen} icon={isExpanded ?faCompress:faExpand} className="icon" />
        </div>
        <textarea id="editor"  defaultValue={inputValue} onChange={handleChange} ></textarea>
      </div>
      <div id="preview-container" className={isExpanded ? 'expanded' : isPreviewExpanded? 'preview-expanded' : ''}>
        <div  id="p-topbar">
          <p>Preview</p>
          <FontAwesomeIcon onClick={previewFullscreen}icon={isPreviewExpanded?faCompress:faExpand} className="icon" />
        </div>
        <div id="preview">
          <p dangerouslySetInnerHTML={{ __html: marked(inputValue) }}></p>
        </div>
      </div>
    </div>
  );
}
export default App;
