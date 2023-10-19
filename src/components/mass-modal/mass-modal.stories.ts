import { html } from 'lit-html';

export default {
  title: 'Components/mass-modal',
  component: 'mass-modal',
  argTypes: {
    modalTitle: { control: 'text' },
    firstButtonText: { control: 'text' },
    secondButtonText: { control: 'text' },
    isVisible: { control: 'boolean' }
  }
};

const Template = (args) => {
  console.log(args)
  return html`
    <button @click=${() => {
      const modal = document.querySelector('mass-modal');
      if (modal && modal.show) modal.show();
    }}>
      Launch Modal
    </button>
    <mass-modal 
      .modalTitle="${args.modalTitle}" 
      .firstButtonText="${args.firstButtonText}" 
      .secondButtonText="${args.secondButtonText}"
      .isVisible="${args.isVisible}"
    >
      This is the content of the modal.
    </mass-modal>
  `;
};

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  modalTitle: "Default Modal Title",
  isVisible: true
};

export const ModalWithOneButton = Template.bind({});
ModalWithOneButton.args = {
  modalTitle: "Modal with One Button",
  firstButtonText: "Click Me",
  isVisible: true
};

export const ModalWithTwoButtons = Template.bind({});
ModalWithTwoButtons.args = {
  modalTitle: "Modal with Two Buttons",
  firstButtonText: "First Button",
  secondButtonText: "Back",
  isVisible: true
};

export const ModalWithoutButtons = Template.bind({});
ModalWithoutButtons.args = {
  modalTitle: "Modal Without Buttons",
  isVisible: true
};
