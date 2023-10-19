import { newSpecPage } from '@stencil/core/testing';
import { MassImage } from '../mass-image';

describe('mass-image', () => {

  describe('src prop', () => {
    it('renders with the default src if not provided', async () => {
      const page = await newSpecPage({
        components: [MassImage],
        html: `<mass-image></mass-image>`,
      });

      const imgElement = page.root.shadowRoot.querySelector('img');
      expect(imgElement.getAttribute('src')).toBe('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/jbQeagAAAAASUVORK5CYII=');
    });

    it('renders with the provided src', async () => {
      const page = await newSpecPage({
        components: [MassImage],
        html: `<mass-image src="https://via.placeholder.com/150"></mass-image>`,
      });

      const imgElement = page.root.shadowRoot.querySelector('img');
      expect(imgElement.getAttribute('src')).toBe('https://via.placeholder.com/150');
    });
  });

  describe('shape prop', () => {
    it('renders with default square shape', async () => {
      const page = await newSpecPage({
        components: [MassImage],
        html: `<mass-image></mass-image>`,
      });

      const imgElement = page.root.shadowRoot.querySelector('img');
      expect(imgElement.classList.contains('img-square')).toBe(true);
    });

    it('renders with round shape when provided', async () => {
      const page = await newSpecPage({
        components: [MassImage],
        html: `<mass-image shape="round"></mass-image>`,
      });

      const imgElement = page.root.shadowRoot.querySelector('img');
      expect(imgElement.classList.contains('img-round')).toBe(true);
    });

    it('renders with rounded shape when provided', async () => {
      const page = await newSpecPage({
        components: [MassImage],
        html: `<mass-image shape="rounded"></mass-image>`,
      });

      const imgElement = page.root.shadowRoot.querySelector('img');
      expect(imgElement.classList.contains('img-rounded')).toBe(true);
    });
  });

  describe('overlay prop', () => {
    it('does not render overlay by default', async () => {
      const page = await newSpecPage({
        components: [MassImage],
        html: `<mass-image></mass-image>`,
      });

      const containerElement = page.root.shadowRoot.querySelector('.image-container');
      expect(containerElement.classList.contains('image-overlay')).toBe(false);
    });

    it('renders with overlay when provided', async () => {
      const page = await newSpecPage({
        components: [MassImage],
        html: `<mass-image overlay></mass-image>`,
      });

      const containerElement = page.root.shadowRoot.querySelector('.image-container');
      expect(containerElement.classList.contains('image-overlay')).toBe(true);
    });
  });

});

