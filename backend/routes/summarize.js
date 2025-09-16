const express = require('express');
const router = express.Router();

// Dummy summarize endpoint - replace with real AI integration
router.post('/summarize', (req, res) => {
  const { videoTitle, transcript } = req.body;

  // For now, just return a dummy summary
  const summary = `Summary for video titled: "${videoTitle || 'Unknown'}". Transcript length: ${transcript ? transcript.length : 0} characters.`;

  res.json({ summary });
});

module.exports = router;
