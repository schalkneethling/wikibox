(function () {
  const wikibox = document.querySelector(".wikibox");
  const panelContainer = document.querySelector(".panel-container");
  const panels = panelContainer.querySelectorAll(".panel");
  const numberOfPanels = panels.length;
  const wikiboxWidth = wikibox.getBoundingClientRect().width;
  const startLeftPosition = 0;
  // ignore the initial panel
  const endLeftPosition = -((numberOfPanels - 1) * wikiboxWidth);

  let currentPanel = panelContainer.querySelector(".panel:first-child");
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

  function handleTransition(panel) {
    panel.addEventListener("transitionend", () => {
      panel.classList.remove("transparent");
    });
  }

  if (wikibox) {
    wikibox.addEventListener("click", (event) => {
      currentPanel.classList.add("transparent");
      handleTransition(currentPanel);

      if (
        event.target.id === "button-next" &&
        panelContainerPosition > endLeftPosition
      ) {
        panelContainerPosition = panelContainerPosition - wikiboxWidth;
        panelContainer.style.left = `${panelContainerPosition}px`;
        currentPanel = currentPanel.nextElementSibling;
      } else if (
        event.target.id === "button-previous" &&
        panelContainerPosition < startLeftPosition
      ) {
        panelContainerPosition = panelContainerPosition + wikiboxWidth;
        panelContainer.style.left = `${panelContainerPosition}px`;
        currentPanel = currentPanel.previousElementSibling;
      }
      togglePagination();
    });
  }
})();
