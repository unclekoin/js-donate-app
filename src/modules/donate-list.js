import { Settings as set } from "../core/constants/settings";

export class DonateList {
  #donates;
  #container;
  #donateList;

  constructor(donates) {
    this.#donates = donates;
    this.#container = document.createElement('div');
    this.#container.className = 'donates-container';
    this.#donateList = document.createElement('div');
    this.#donateList.className = 'donates-container__donates';
  }

  #createDonate(date, amount) {
    const donate = document.createElement('div');
    donate.className = 'donate-item';
    donate.textContent = `${date} - `;

    const bold = document.createElement('b');
    bold.textContent = `${amount}${set.currency}`;
    donate.append(bold);

    return donate;
  }

  updateDonates(updatedDonates) {
    this.#donateList.innerHTML = '';
    updatedDonates.forEach(({ date, amount }) => {
      this.#donateList.append(this.#createDonate(date, amount));
    })
  }

  render() {
    const title = document.createElement('h2');
    title.className = 'donates-container__title';
    title.textContent = 'Donates List';

    this.updateDonates(this.#donates);

    this.#container.append(title, this.#donateList);
    return this.#container;
  }
}
