import { newSpecPage } from '@stencil/core/testing';
import { MassModal } from '../mass-modal';

describe('mass-modal', () => {
  it('renders when isVisible is true', async () => {
    const page = await newSpecPage({
      components: [MassModal],
      html: `<mass-modal is-visible="true"></mass-modal>`,
    });
    expect(page.root.shadowRoot.querySelector('.overlay')).not.toBeNull();
    expect(page.root.shadowRoot.querySelector('.modal')).not.toBeNull();
  });

  it('does not render when isVisible is false', async () => {
    const page = await newSpecPage({
      components: [MassModal],
      html: `<mass-modal is-visible="false"></mass-modal>`,
    });
    expect(page.root.shadowRoot.querySelector('.overlay')).toBeNull();
    expect(page.root.shadowRoot.querySelector('.modal')).toBeNull();
  });

  it('renders modalTitle', async () => {
    const page = await newSpecPage({
      components: [MassModal],
      html: `<mass-modal modal-title="Test Title" is-visible="true"></mass-modal>`,
    });
    const title = page.root.shadowRoot.querySelector('h2');
    expect(title.textContent).toBe('Test Title');
  });

  it('renders firstButtonText and secondButtonText', async () => {
    const page = await newSpecPage({
      components: [MassModal],
      html: `<mass-modal first-button-text="Second Button" second-button-text="First Button" is-visible="true"></mass-modal>`,
    });
    const secondButton = page.root.shadowRoot.querySelectorAll('mass-button')[1];
    expect(secondButton.textContent).toBe('Second Button');

    const firstButton = page.root.shadowRoot.querySelector('mass-button');
    expect(firstButton.textContent).toBe('First Button');
  });

  it('emits closeModal event when overlay is clicked', async () => {
    const page = await newSpecPage({
      components: [MassModal],
      html: `<mass-modal is-visible="true"></mass-modal>`,
    });

    const closeModalEventSpy = jest.fn();
    page.root.addEventListener('closeModal', closeModalEventSpy);

    const overlay = page.root.shadowRoot.querySelector('.overlay');
    overlay.dispatchEvent(new Event('click'));

    expect(closeModalEventSpy).toHaveBeenCalled();
  });
});
