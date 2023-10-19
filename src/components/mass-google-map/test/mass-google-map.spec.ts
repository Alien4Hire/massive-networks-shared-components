import { newSpecPage } from '@stencil/core/testing';
import { GoogleMap } from '../mass-google-map';

describe('google-map', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GoogleMap],
      html: `<mass-google-map></mass-google-map>`,
    });
    expect(page.root).toEqualHtml(`
      <mass-google-map>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mass-google-map>
    `);
  });
});