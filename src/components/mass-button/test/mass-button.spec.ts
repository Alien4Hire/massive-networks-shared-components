import { newSpecPage } from '@stencil/core/testing';
import { MassButton } from '../mass-button';

describe('mass-button', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [MassButton],
      html: `<mass-button></mass-button>`,
    });
    expect(page.root).toEqualHtml(`
      <mass-button>
        <mock:shadow-root>
          <button class="default medium">
            <p><slot /></p>
          </button>
        </mock:shadow-root>
      </mass-button>
    `);
  });
  

  it('should accept type property', async () => {
    const page = await newSpecPage({
      components: [MassButton],
      html: `<mass-button type="dark"></mass-button>`,
    });
    expect(page.rootInstance.type).toBe('dark');
  });

  it('should render with is-rounded property', async () => {
    const page = await newSpecPage({
      components: [MassButton],
      html: `<mass-button is-rounded></mass-button>`,
    });
    const button = page.root.shadowRoot.querySelector('button');
    expect(button.className.includes('rounded')).toBe(true);
  });

  it('should render with is-disabled property', async () => {
    const page = await newSpecPage({
      components: [MassButton],
      html: `<mass-button is-disabled></mass-button>`,
    });
    const button = page.root.shadowRoot.querySelector('button');
    expect(button.hasAttribute('disabled')).toBe(true);
  });

  it('should render with isDropdown property', async () => {
    const page = await newSpecPage({
      components: [MassButton],
      html: `<mass-button is-dropdown></mass-button>`,
    });
    const button = page.root.shadowRoot.querySelector('button');
    expect(button.className.includes('dropdown')).toBe(true);
  });

  it('should accept iconName property', async () => {
    const page = await newSpecPage({
      components: [MassButton],
      html: `<mass-button icon-name="test-icon"></mass-button>`,
    });
    expect(page.rootInstance.iconName).toBe('test-icon');
  });

  it('should accept size property', async () => {
    const page = await newSpecPage({
      components: [MassButton],
      html: `<mass-button size="large"></mass-button>`,
    });
    expect(page.rootInstance.size).toBe('large');
  });

  it('should handle massClick event', async () => {
    const page = await newSpecPage({
      components: [MassButton],
      html: `<mass-button></mass-button>`,
    });

    const clickEventSpy = jest.fn();
    page.root.addEventListener('massClick', clickEventSpy);

    const button = page.root.shadowRoot.querySelector('button');
    button.dispatchEvent(new Event('click'));

    expect(clickEventSpy).toHaveBeenCalled();
  });
});
