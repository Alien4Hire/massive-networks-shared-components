import { newSpecPage } from '@stencil/core/testing';
import { CheckboxGroup } from '../mass-checkbox-group';

describe('mass-checkbox-group', () => {

  describe('label prop', () => {
    it('When I specify no props for the component, then I expect it to render a checkbox and label with default values', async () => {
      const page = await newSpecPage({
        components: [CheckboxGroup],
        html: `<mass-checkbox-group label="Label"></mass-checkbox-group>`,
      });

      expect(page.root.shadowRoot.querySelector('.checkbox-wrapper')).not.toBeNull();
      expect(page.root.shadowRoot.querySelector('.checkbox-title').textContent).toBe('Label');
    });

    it('When I supply a value for the label, then I expect the component to render with that value in the label element', async () => {
      const page = await newSpecPage({
        components: [CheckboxGroup],
        html: `<mass-checkbox-group label="Custom Label"></mass-checkbox-group>`,
      });

      expect(page.root.shadowRoot.querySelector('.checkbox-title').textContent).toBe('Custom Label');
    });
  });

  describe('interaction', () => {
    it('handles checkbox click correctly', async () => {
      const page = await newSpecPage({
        components: [CheckboxGroup],
        html: `<mass-checkbox-group checked={false} text="Option 1"></mass-checkbox-group>`,
      });

      await page.waitForChanges();

      let checkbox = page.root.shadowRoot.querySelector('input[type="checkbox"]') as HTMLInputElement;

      checkbox.click();
      await page.waitForChanges();

      checkbox = page.root.shadowRoot.querySelector('input[type="checkbox"]') as HTMLInputElement;
      expect(checkbox.checked).toBe(true);
    });

    it('emits massChange event on checkbox state change', async () => {
      const page = await newSpecPage({
        components: [CheckboxGroup],
        html: `<mass-checkbox-group></mass-checkbox-group>`,
      });

      const checkboxGroup = page.rootInstance;
      const spy = jest.spyOn(checkboxGroup.massChange, 'emit');
      checkboxGroup.handleChange({ target: { checked: true } }, 0);
      expect(spy).toHaveBeenCalledWith({ target: { checked: true } });
    });
  });

  describe('error handling', () => {
    it('shows error when isError is true', async () => {
      const page = await newSpecPage({
        components: [CheckboxGroup],
        html: `<mass-checkbox-group is-error error-msg="Error Explanation Text"></mass-checkbox-group>`,
      });

      expect(page.root.shadowRoot.querySelector('.error-wrapper')).not.toBeNull();
      expect(page.root.shadowRoot.querySelector('.error-text').textContent).toBe('Error Explanation Text');
    });

    it('shows custom error message when provided', async () => {
      const page = await newSpecPage({
        components: [CheckboxGroup],
        html: `<mass-checkbox-group is-error error-msg="Custom Error Message"></mass-checkbox-group>`,
      });

      expect(page.root.shadowRoot.querySelector('.error-text').textContent).toBe('Custom Error Message');
    });
  });
  describe('isDisabled prop', () => {
    it('should disable the checkbox when isDisabled is true, click it to confirm', async () => {
      const page = await newSpecPage({
        components: [CheckboxGroup],
        html: `<mass-checkbox-group is-disabled></mass-checkbox-group>`,
      });

      await page.waitForChanges();

      let checkbox = page.root.shadowRoot.querySelector('input[type="checkbox"]') as HTMLInputElement;
      expect(checkbox.disabled).toBe(true);

      checkbox.click();
      await page.waitForChanges();

      checkbox = page.root.shadowRoot.querySelector('input[type="checkbox"]') as HTMLInputElement;
      expect(checkbox.checked).toBe(false);
    });

    it('should not disable the checkbox when isDisabled is false', async () => {
      const page = await newSpecPage({
        components: [CheckboxGroup],
        html: `<mass-checkbox-group></mass-checkbox-group>`,
      });

      await page.waitForChanges();

      const checkbox = page.root.shadowRoot.querySelector('input[type="checkbox"]') as HTMLInputElement;
      expect(checkbox.disabled).toBe(false);
    });
  });
});
