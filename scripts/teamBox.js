// Expects: teams (array), document.body, and buildBoard to be in global scope

function renderTeamBoxContainer(teams) {
  // Remove any previous team boxes
  document.querySelectorAll(".team-box-container").forEach((e) => e.remove());

  // Create a container for the team boxes
  const teamBoxContainer = document.createElement("div");
  teamBoxContainer.className = "team-box-container";

  // Create '-' button
  const minusBtn = document.createElement("button");
  minusBtn.textContent = "−";
  minusBtn.className = "team-btn";
  minusBtn.onclick = () => {
    if (teams.length > 1) {
      teams.pop();
      renderTeamBoxContainer(teams);
    }
  };

  // Create '+' button
  const plusBtn = document.createElement("button");
  plusBtn.textContent = "+";
  plusBtn.className = "team-btn";
  plusBtn.onclick = () => {
    teams.push({ name: `Team ${teams.length + 1}`, score: 0 });
    renderTeamBoxContainer(teams);
  };

  // Add minus button to the left
  teamBoxContainer.appendChild(minusBtn);

  teams.forEach((team, idx) => {
    const box = document.createElement("div");
    box.className = "team-box";

    // Up button
    const upBtn = document.createElement("button");
    upBtn.type = "button";
    upBtn.className = "team-arrow-btn";
    upBtn.innerHTML = "+";
    upBtn.style.backgroundColor = "#23C552";
    upBtn.onclick = () => {
      team.score += 100;
      renderTeamBoxContainer(teams);
    };

    // Down button
    const downBtn = document.createElement("button");
    downBtn.type = "button";
    downBtn.className = "team-arrow-btn";
    downBtn.innerHTML = "-";
    downBtn.style.backgroundColor = "#F84F31";
    downBtn.onclick = () => {
      team.score -= 100;
      renderTeamBoxContainer(teams);
    };

    // Button group container for horizontal layout
    const btnGroup = document.createElement("div");
    btnGroup.style.display = "flex";
    btnGroup.appendChild(downBtn);
    btnGroup.appendChild(upBtn);

    // Team name input
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = team.name;
    nameInput.onchange = (e) => {
      team.name = e.target.value;
    };

    // Team score
    const scoreDiv = document.createElement("div");
    scoreDiv.className = "team-score";
    scoreDiv.textContent = "$" + team.score.toLocaleString();

    // Arrange: upBtn, downBtn (block), input, score
    box.appendChild(btnGroup);
    box.appendChild(nameInput);
    box.appendChild(scoreDiv);
    teamBoxContainer.appendChild(box);
  });
  // Add plus button to the right
  teamBoxContainer.appendChild(plusBtn);

  // Add the container to the body
  document.body.appendChild(teamBoxContainer);
}

// Export for use in index.html
window.renderTeamBoxContainer = renderTeamBoxContainer;
