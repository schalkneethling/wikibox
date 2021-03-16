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
    panel.addEventListener("animationend", () => {
      panel.classList.remove("transition-out");
      panel.classList.toggle("hidden");
      panel.nextElementSibling.classList.remove("transition-in");
    });
  }

  if (wikibox) {
    wikibox.addEventListener("click", (event) => {
      currentPanel.classList.add("transition-out");
      currentPanel.nextElementSibling.classList.remove("hidden");
      currentPanel.nextElementSibling.classList.add("transition-in");
      handleTransition(currentPanel);

      if (
        event.target.id === "button-next" &&
        panelContainerPosition > endLeftPosition
      ) {
        currentPanel = currentPanel.nextElementSibling;
      } else if (
        event.target.id === "button-previous" &&
        panelContainerPosition < startLeftPosition
      ) {
        currentPanel = currentPanel.previousElementSibling;
      }
      togglePagination();
    });
  }
})();
