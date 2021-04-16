(() => {
      counter = 0;
      const button_showInfo = document.querySelector("#showInfo");
      const button_showWarning = document.querySelector("#showWarning");
      const button_showSucces = document.querySelector("#showSucces");
      const button_showDanger = document.querySelector("#showDanger");

      button_showInfo.addEventListener("click", (e) => {
            const notification__info = createNotification("info", counter);
            document
                  .querySelector(".notifications")
                  .appendChild(notification__info);
            counter++;
            setTimeout(() => {
                  document
                        .querySelector(".notifications")
                        .removeChild(notification__info);
            }, 1500);
      });

      button_showWarning.addEventListener("click", (e) => {
            const notification__info = createNotification("warning", counter);
            document
                  .querySelector(".notifications")
                  .appendChild(notification__info);
            counter++;
            setTimeout(() => {
                  document
                        .querySelector(".notifications")
                        .removeChild(notification__info);
            }, 5000);
      });

      button_showSucces.addEventListener("click", (e) => {
            const notification__info = createNotification("success", counter);
            document
                  .querySelector(".notifications")
                  .appendChild(notification__info);
            counter++;
            setTimeout(() => {
                  document
                        .querySelector(".notifications")
                        .removeChild(notification__info);
            }, 5000);
      });

      button_showDanger.addEventListener("click", (e) => {
            const notification__info = createNotification("danger", counter);
            document
                  .querySelector(".notifications")
                  .appendChild(notification__info);
            counter++;
            setTimeout(() => {
                  document
                        .querySelector(".notifications")
                        .removeChild(notification__info);
            }, 5000);
      });
})();

function createNotification(type, id) {
      const notification = document.createElement("div");
      const button_close = document.createElement("div");
      notification.classList = "toast " + type;
      notification.id = id;

      notification.innerHTML = `
                <div class="toast__icon">
                    <i class="gg-info"></i>
                </div>

                <div class="toast__message">
                    <h3>Info</h3>
                    <p>Informacion del sistema</p>
                </div>
                `;

      button_close.classList = "icon__close";
      button_close.id = id;
      button_close.innerHTML = `<i  id="${id}" class="gg-close" onClick=removeNotification></i>`;
      button_close.addEventListener("click", removeNotification);

      notification.appendChild(button_close);

      return notification;
}

function removeNotification(e) {
      const notification = document.getElementById(e.target.id);
      document.querySelector(".notifications").removeChild(notification);
}
