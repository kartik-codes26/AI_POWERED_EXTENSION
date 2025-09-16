/* global chrome */

import React, { useState, useEffect } from "react";

function App() {
  const [videoTitle, setVideoTitle] = useState("");

  useEffect(() => {
    if (typeof chrome !== 'undefined' && chrome.tabs && chrome.scripting) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            func: () => document.querySelector("h1.title")?.innerText,
          },
          (results) => {
            if (results && results[0]) {
              setVideoTitle(results[0].result || "No video title found");
            }
          }
        );
      });
    }
  }, []);

  return (
    <div style={{ padding: "10px", fontFamily: "Arial" }}>
      <h2>YouTube AI Enhancer</h2>
      <p><strong>Video Title:</strong> {videoTitle}</p>
      <button onClick={async () => {
        try {
          const response = await fetch('http://localhost:5000/api/summarize', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ videoTitle }),
          });
          const data = await response.json();
          alert('Summary: ' + data.summary);
        } catch (error) {
          alert('Error fetching summary: ' + error.message);
        }
      }}>
        Summarize
      </button>
    </div>
  );
}

export default App;
