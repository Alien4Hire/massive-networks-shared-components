import { newSpecPage } from '@stencil/core/testing';
import { LeftMenu } from '../mass-leftmenu';

describe('mass-leftmenu', () => {
  it('renders its content correctly', async () => {
    const page = await newSpecPage({
      components: [LeftMenu],
      html: `<mass-leftmenu><ul><li>Item 1</li><li>Item 2</li></ul></mass-leftmenu>`,
    });

    expect(page.root).toEqualHtml(`
      <mass-leftmenu>
        <mock:shadow-root>
          <aside class="left-menu">
            <slot></slot>
          </aside>
        </mock:shadow-root>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </mass-leftmenu>
    `);
  });
});
