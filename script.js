"use strict";

const creditCards = [];
const url = "https://webapps.tekstac.com/WebAPI/CreditCardsXMLServlet";

const status = document.getElementById("status");
const report = document.getElementById("report");
const retrieveButton = document.getElementById("retrieveButton");

function getText(element, tagNames) {
  const child = Array.from(element.children).find((item) =>
    tagNames.includes(item.tagName.toLowerCase())
  );

  return child ? child.textContent.trim() : "Not available";
}

function displayReport() {
  const table = document.createElement("table");

  table.innerHTML = `
    <tr>
      <th>Card Name</th>
      <th>Card Type</th>
      <th>Credit Limit</th>
      <th>Expiry Date</th>
    </tr>
  `;

  creditCards.forEach((card) => {
    const row = table.insertRow();

    row.insertCell().textContent = card.name;
    row.insertCell().textContent = card.type;
    row.insertCell().textContent = card.limit;
    row.insertCell().textContent = card.expiryDate;
  });

  report.replaceChildren(table);
  status.textContent = "Report generated successfully!!!";
}

function retrieveCreditCards() {
  const request = new XMLHttpRequest();

  request.open("GET", url, true);

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      const xml = request.responseXML;
      const cards = Array.from(xml.getElementsByTagName("creditcard"));

      creditCards.length = 0;

      cards.forEach((card) => {
        creditCards.push({
          name: getText(card, ["cardname", "name"]),
          type: getText(card, ["cardtype", "type"]),
          limit: getText(card, ["cardlimit", "creditlimit", "limit"]),
          expiryDate: getText(card, ["expirydate", "expiry"])
        });
      });

      if (creditCards.length === 16) {
        status.textContent = "Data retrieved successfully.";
        displayReport();
      } else {
        status.textContent = `Expected 16 records, but received ${creditCards.length}.`;
      }
    }
  };

  request.onerror = function () {
    status.textContent = "Unable to retrieve data.";
  };

  request.send();
}

retrieveButton.addEventListener("click", retrieveCreditCards);
