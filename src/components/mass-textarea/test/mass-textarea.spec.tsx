import { newSpecPage } from '@stencil/core/testing';
import { MassTextarea } from '../mass-textarea';

describe('mass-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MassTextarea],
      html: `<mass-textarea></mass-textarea>`,
    });
    expect(page.root).toEqualHtml(`
    <mass-textarea>
      <mock:shadow-root>
        <textarea class="my-textarea" id="my-textarea" name="my-textarea" value="" placeholder="" minlength="0" maxlength="250"></textarea>
      </mock:shadow-root>
    </mass-textarea>
    `);
  });

  it('should accept placeholder property', async () => {
    const page = await newSpecPage({
      components: [MassTextarea],
      html: `<mass-textarea placeholder="Enter text..."></mass-textarea>`,
    });
    expect(page.rootInstance.placeholder).toBe('Enter text...');
  });

  it('should handle change event', async () => {
    const page = await newSpecPage({
      components: [MassTextarea],
      html: `<mass-textarea></mass-textarea>`,
    });

    const changeEventSpy = jest.fn();
    page.root.addEventListener('massChange', changeEventSpy);

    const textarea = page.root.shadowRoot.querySelector('textarea');
    textarea.value = 'new value';
    textarea.dispatchEvent(new Event('input'));

    expect(changeEventSpy).toHaveBeenCalled();
  });
});
