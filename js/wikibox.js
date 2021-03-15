(function () {
  const wikibox = document.querySelector(".wikibox");
  const panelContainer = document.querySelector(".panel-container");
  const numberOfPanels = panelContainer.querySelectorAll(".panel").length;
  const wikiboxWidth = wikibox.getBoundingClientRect().width;
  const startLeftPosition = 0;
  // ignore the initial panel
  const endLeftPosition = -((numberOfPanels - 1) * wikiboxWidth);

  let panelContainerPosition = 0;

  function togglePagination() {
    const buttonNext = document.getElementById("button-next");
    const buttonPrevious = document.getElementById("button-previous");

    if (panelContainerPosition === startLeftPosition) {
      buttonPrevious.classList.add("hidden");
    } else {
      buttonPrevious.classList.remove("hidden");
    }

    if (panelContainerPosition === endLeftPosition) {
      buttonNext.classList.add("hidden");
    } else {
      buttonNext.classList.remove("hidden");
    }
  }

  if (wikibox) {
    wikibox.addEventListener("click", (event) => {
      if (
        event.target.id === "button-next" &&
        panelContainerPosition > endLeftPosition
      ) {
        panelContainerPosition = panelContainerPosition - wikiboxWidth;
        panelContainer.style.left = `${panelContainerPosition}px`;
      } else if (
        event.target.id === "button-previous" &&
        panelContainerPosition < startLeftPosition
      ) {
        panelContainerPosition = panelContainerPosition + wikiboxWidth;
        panelContainer.style.left = `${panelContainerPosition}px`;
      }
      togglePagination();
    });
  }
})();
