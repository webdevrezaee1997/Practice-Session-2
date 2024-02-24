import React, { useState } from 'react';

const ToDo = () => {
  const [paragraphs, setParagraphs] = useState([
    { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ab dolorem quas possimus, perferendis obcaecati iusto maiores voluptatum nam eligendi quia nobis debitis exercitationem consectetur?', isRejected: false, isLineThrough: false },
    { id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ab dolorem quas possimus, perferendis obcaecati iusto maiores voluptatum nam eligendi quia nobis debitis exercitationem consectetur?', isRejected: false, isLineThrough: false },
  ]);

  const handleReject = (vl) => {
    alert('the text gonna be removed');
    setParagraphs(paragraphs.map(paragraph => paragraph.id === vl ? { ...paragraph, isRejected: true } : paragraph));
  };

  const handleDownload = (vl) => {
    alert('the text gonna be lined through');
    setParagraphs(paragraphs.map(paragraph => paragraph.id === vl ? { ...paragraph, isLineThrough: true } : paragraph));
  };

  return (
    <div style={{ width: '900px' }} className="container position-relative">
      {paragraphs.map(paragraph => (
        <div
          key={paragraph.id}
          style={{ opacity: paragraph.isRejected ? '0.3' : '0.85' }}
          className={`bg-warning position-relative mt-1 rounded ${paragraph.isRejected ? 'd-none' : ''}`}
        >
          <button
            onClick={() => handleReject(paragraph.id)}
            className="btn btn-outline-danger mx-1 rounded p-2 mt-1 mb-1"
          >
            Reject
          </button>
          <button
            onClick={() => handleDownload(paragraph.id)}
            style={{ right: '0px' }}
            className="btn btn-outline-success mt-1 mb-1 rounded p-2 position-absolute mx-1"
          >
            Change text style
          </button>
          <p className={`p-2 ${paragraph.isLineThrough ? 'text-decoration-line-through' : ''}`}>
            {paragraph.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ToDo;