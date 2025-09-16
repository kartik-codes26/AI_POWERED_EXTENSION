// This runs on YouTube pages
setTimeout(() => {
  let titleElement = document.querySelector("h1.title");
  if (titleElement) {
    let title = titleElement.innerText;
    console.log("🎬 Video Title:", title);

    // Create a summarize button
    let button = document.createElement("button");
    button.innerText = "Summarize with AI";
    button.style.marginLeft = "10px";
    button.style.padding = "5px 10px";
    button.style.backgroundColor = "#ff0000";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";

    // Insert button after the title
    titleElement.parentNode.insertBefore(button, titleElement.nextSibling);

    button.addEventListener("click", async () => {
      button.innerText = "Summarizing...";
      button.disabled = true;
      try {
        const response = await fetch("http://localhost:5000/api/summarize", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ videoTitle: title }),
        });
        const data = await response.json();
        alert("AI Summary: " + data.summary);
      } catch (error) {
        alert("Error fetching summary: " + error.message);
      }
      button.innerText = "Summarize with AI";
      button.disabled = false;
    });
  }
}, 3000);
