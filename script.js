      function updateCountdown() {
        const targetDate = new Date("December 31, 2024 23:59:59").getTime();
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff <= 0) {
          document.getElementById("countdown").innerText = "We Are Live!";
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days
          .toString()
          .padStart(2, "0");
        document.getElementById("hours").innerText = hours
          .toString()
          .padStart(2, "0");
        document.getElementById("minutes").innerText = minutes
          .toString()
          .padStart(2, "0");
        document.getElementById("seconds").innerText = seconds
          .toString()
          .padStart(2, "0");
      }

      function addProposito() {
        const input = document.getElementById("newProposito");
        const proposito = input.value.trim();
        if (proposito) {
          const ul = document.getElementById("propositosList");
          const li = document.createElement("li");

          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.onchange = function () {
            markGoal(checkbox);
          };

          li.appendChild(checkbox);
          li.appendChild(document.createTextNode(" " + proposito));
          ul.appendChild(li);

          input.value = "";
        }
      }

      function markGoal(checkbox) {
        const goalItem = checkbox.parentElement;
        if (checkbox.checked) {
          goalItem.style.textDecoration = "line-through";
          goalItem.style.color = "gray";
        } else {
          goalItem.style.textDecoration = "none";
          goalItem.style.color = "white";
        }
      }

      setInterval(updateCountdown, 1000);
