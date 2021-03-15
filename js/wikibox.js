(function () {
  const wikibox = document.querySelector(".wikibox");

  if (wikibox) {
    const panelContainer = document.querySelector(".panel-container");
    const numberOfPanels = panelContainer.querySelectorAll(".panel").length;
    const wikiboxWidth = wikibox.getBoundingClientRect().width;
    const minLeftPosition = 0;
    // ignore the initial panel
    const maxLeftPosition = -((numberOfPanels - 1) * wikiboxWidth);

    let panelContainerPosition = 0;

    wikibox.addEventListener("click", (event) => {
      if (
        event.target.id === "button-next" &&
        panelContainerPosition > maxLeftPosition
      ) {
        panelContainerPosition = panelContainerPosition - wikiboxWidth;
        panelContainer.style.left = `${panelContainerPosition}px`;
      } else if (
        event.target.id === "button-previous" &&
        panelContainerPosition < minLeftPosition
      ) {
        panelContainerPosition = panelContainerPosition + wikiboxWidth;
        panelContainer.style.left = `${panelContainerPosition}px`;
      }
    });
  }
})();
