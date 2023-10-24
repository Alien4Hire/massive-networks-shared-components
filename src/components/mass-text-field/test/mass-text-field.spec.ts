import { newSpecPage } from '@stencil/core/testing';
import { SpecPage } from '@stencil/core/internal';
import { TextField } from '../mass-text-field';

const componentUnderTest = 'mass-text-field';
const inputSelector = 'input';
const labelSelector = 'label';
const divSelector = 'div';
const errorMessageSelector = '.error-text'
const successMessageSelector = '.success-text';
const helpTextSelector = '.help-text';
const requiredSelector = 'label abbr[title]';

/**
 * Helper method to mount a component whose props we expect to be invalid.
 * 
 * This method is used to test the component's required props.
 * 
 * @param components | Array of components to be tested
 * @param html | HTML to be rendered
 * @returns Promise<SpecPage> | Promise that resolves to the SpecPage object returned by newSpecPage
 */
async function renderWithInvalidProps(components: Array<unknown>, html: string) {
  return await newSpecPage({
    components,
    html,
  })
};

async function renderAfterPropsChange(page: SpecPage, rootElement: HTMLElement, attributeName: string, attributeValue: string) {
  rootElement.setAttribute(attributeName, attributeValue);
  await page.waitForChanges();
}

describe(componentUnderTest, () => {
  afterEach(async () => {
    await new Promise((resolve) => {
      setTimeout(resolve);
    });
  });
  describe('required props', () => {
    describe('inputId', () => {
      it('when inputId is a non-empty string, then I expect the component to render with the inputId value in the for/id attribute pair of the label and input, and in the name attribute of the input', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
        });
  
        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const labelElement = page.root.shadowRoot.querySelector(labelSelector);
        const expectedId = "test"
  
        expect(inputElement.getAttribute('id')).toBe(expectedId);
        expect(inputElement.getAttribute('name')).toBe(expectedId);
        expect(labelElement.getAttribute('htmlFor')).toBe(expectedId);
      });
  
      it('when inputId is undefined, then I expect the component not to render as expected, and I expect it to throw an error', async () => {
        const page = renderWithInvalidProps(
          [TextField], 
          `<mass-text-field labelText="This should still fail on inputId"></mass-text-field>`
        );
        expect(page).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: inputId must be a non-empty string`);
      });
  
      it('when inputId is an empty string, then I expect the component not to render as expected, and I expect it to throw an error', async () => {
        const page = renderWithInvalidProps(
          [TextField], 
          `<mass-text-field input-id="" label-text="This should still fail on inputId"></mass-text-field>`
        );
        expect(page).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: inputId must be a non-empty string`);
      });
    });

    describe('labelText', () => {
      it('when labelText is a non-empty string, then I expect the component to render with the labelText value within the slot of the label element', async () => {
        // Setup the component
      const page = await newSpecPage({
        components: [TextField],
        html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
      });
      
      const labelElement = page.root.shadowRoot.querySelector(labelSelector);
      const expectedText = "This is a test";
  
      expect(labelElement.innerHTML).toContain(expectedText);
      });
  
      it('when labelText is undefined, then I expect the component not to render as expected, and I expect it to throw an error', async () => {
        const page = renderWithInvalidProps(
          [TextField], 
          `<mass-text-field input-id="This should still fail on labelText"></mass-text-field>`
        );
        expect(page).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: labelText must be a non-empty string`);
      });
  
      it('when labelText is an empty string, then I expect the component not to render as expected, and I expect it to throw an error', async () => {
        const page = renderWithInvalidProps(
          [TextField], 
          `<mass-text-field input-id="This should still fail on labelText" label-text=""></mass-text-field>`
        );
        expect(page).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: labelText must be a non-empty string`);
      });
    });
    describe('watchers', () => {
      it('when inputId is changed, and inputId is valid, then I expect the component to render with the new inputId value in the for/id attribute pair of the label and input, and in the name attribute of the input', async () => {
        
        // Setup the component
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
        });
        
        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const labelElement = page.root.shadowRoot.querySelector(labelSelector);
        const expectedId = "changed"
  
        // Change the inputId prop
        page.doc.querySelector(componentUnderTest).setAttribute('input-id', 'changed');
  
        // Wait for the component to update
        await page.waitForChanges();
  
        expect(inputElement.getAttribute('id')).toBe(expectedId);
        expect(inputElement.getAttribute('name')).toBe(expectedId);
        expect(labelElement.getAttribute('htmlFor')).toBe(expectedId);
      });
  
      it('when inputId is changed to an empty string, then I expect the component not to render as expected, and I expect it to throw an error', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
        });
        
        const rootElement = page.doc.querySelector(componentUnderTest) as HTMLElement;
  
        // Change the inputId prop
        const throws = renderAfterPropsChange(page, rootElement, 'input-id', '');
  
        expect(throws).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: inputId must be a non-empty string`);
      });
  
      it('when labelText is changed, and labelText is valid, then I expect the component to render with the new labelText value within the slot of the label element', async () => {
        // Setup the component
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
        });
        
        const labelElement = page.root.shadowRoot.querySelector(labelSelector);
        const expectedText = "This changed";
    
        // Change the inputId prop
        page.doc.querySelector(componentUnderTest).setAttribute('label-text', 'This changed');
    
        // Wait for the component to update
        await page.waitForChanges();
    
        expect(labelElement.innerHTML).toContain(expectedText);
      });
  
      it('when labelText is changed to an empty string, then I expect the component not to render as expected, and I expect it to throw an error', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
        });
        
        const rootElement = page.doc.querySelector(componentUnderTest) as HTMLElement;
        
        // Change the labelText prop
        const throws = renderAfterPropsChange(page, rootElement, 'label-text', '');
  
        expect(throws).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: labelText must be a non-empty string`);
      });
    });
  });



  describe('error, success, and help messages', () => {
    describe('no messages', () => {
      it('when isValid is undefined, and errorText is undefined, and successText is undefined, then I expect no error message to be displayed, and I expect no success message to be displayed, and I expect neither the aria-describedby nor the aria-errormessage attributes on the input element to contain the ids of the ', async () => {
        // Setup the component
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
        });
        
        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const errorElement = page.root.shadowRoot.querySelector(errorMessageSelector);
        const successElement = page.root.shadowRoot.querySelector(successMessageSelector);
        
        expect(errorElement).toBeNull();
        expect(successElement).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
        expect(inputElement.getAttribute('aria-errormessage')).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
      });
      it('when isValid is undefined, and errorText is an empty string, and successText is an empty string, then I expect no error message to be displayed, and I expect no success message to be displayed', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test" error-text="" success-text=""></mass-text-field>`,
        });
        
        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const errorElement = page.root.shadowRoot.querySelector(errorMessageSelector);
        const successElement = page.root.shadowRoot.querySelector(successMessageSelector);
        
        expect(errorElement).toBeNull();
        expect(successElement).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
        expect(inputElement.getAttribute('aria-errormessage')).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
      });
      it('when isValid is undefined, and errorText is a valid string, and successText is a valid string, then I expect no error message to be displayed, and I expect no success message to be displayed', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test" error-text="Test error" success-text="Test success"></mass-text-field>`,
        });
        
        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const errorElement = page.root.shadowRoot.querySelector(errorMessageSelector);
        const successElement = page.root.shadowRoot.querySelector(successMessageSelector);
        
        expect(errorElement).toBeNull();
        expect(successElement).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
        expect(inputElement.getAttribute('aria-errormessage')).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
      });
      it('when isValid is false, and errorText is undefined, then I expect no error message to be displayed', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test" is-valid="false"></mass-text-field>`,
        });
        
        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const errorElement = page.root.shadowRoot.querySelector(errorMessageSelector);
        const successElement = page.root.shadowRoot.querySelector(successMessageSelector);
        
        expect(errorElement).toBeNull();
        expect(successElement).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
        expect(inputElement.getAttribute('aria-errormessage')).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
      });
      it('when isValid is false, and errorText is an empty string, then I expect no error message to be displayed', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test" is-valid="false" error-text=""></mass-text-field>`,
        });
        
        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const errorElement = page.root.shadowRoot.querySelector(errorMessageSelector);
        const successElement = page.root.shadowRoot.querySelector(successMessageSelector);
        
        expect(errorElement).toBeNull();
        expect(successElement).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
        expect(inputElement.getAttribute('aria-errormessage')).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
      });
      it('when isValid is true, and successText is undefined, then I expect no success message to be displayed', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test" is-valid="true"></mass-text-field>`,
        });
        
        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const errorElement = page.root.shadowRoot.querySelector(errorMessageSelector);
        const successElement = page.root.shadowRoot.querySelector(successMessageSelector);
        
        expect(errorElement).toBeNull();
        expect(successElement).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
        expect(inputElement.getAttribute('aria-errormessage')).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
      });
      it('when isValid is true, and successText is an empty string, then I expect no success message to be displayed', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test" is-valid="true" success-text=""></mass-text-field>`,
        });
        
        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const errorElement = page.root.shadowRoot.querySelector(errorMessageSelector);
        const successElement = page.root.shadowRoot.querySelector(successMessageSelector);
        
        expect(errorElement).toBeNull();
        expect(successElement).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
        expect(inputElement.getAttribute('aria-errormessage')).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
      });
      it('when helpText is undefined, then I expect no help text to be displayed', async () => {
        // Setup the component
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
        });

        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const helpElement = page.root.shadowRoot.querySelector(helpTextSelector);
        
        expect(helpElement).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
      });
      it('when helpText is an empty string, then I expect no help text to be displayed', async () => {
        // Setup the component
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test" help-text=""></mass-text-field>`,
        });
        
        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const helpElement = page.root.shadowRoot.querySelector(helpTextSelector);
        
        expect(helpElement).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
      });
    });
    describe('success message', () => {
      it('when isValid is true, and successText is defined, then I expect no error message to be displayed, and I expect a success message to be displayed, and I expect the aria-describedby attributes on the input to contain the id of the success element, and I expect the aria-describedby and aria-errormessage attributes on the input not to contain the id of the error text element', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test" is-valid="true" success-text="Test success"></mass-text-field>`,
        });
        
        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const errorElement = page.root.shadowRoot.querySelector(errorMessageSelector);
        const successElement = page.root.shadowRoot.querySelector(successMessageSelector);
        const errorElementId = 'test-error';
        const successElementId = 'test-success';
        const successText = 'Test success';
        
        expect(errorElement).toBeNull();
        expect(successElement.innerHTML).toContain(successText);
        expect(inputElement.getAttribute('aria-errormessage')).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toContain(successElementId);
        expect(inputElement.getAttribute('aria-describedby')).not.toContain(errorElementId);
      });
    });

    describe('error message', () => {
      it('when isValid is false, and errorText is defined, then I expect an error message to be displayed, and I expect no success message to be displayed, and I expect the aria-describedby and aria-errormessage attributes on the input to contain the id of the error text element and not the success text element', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test" is-valid="false" error-text="Test error"></mass-text-field>`,
        });
        
        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const errorElement = page.root.shadowRoot.querySelector(errorMessageSelector);
        const successElement = page.root.shadowRoot.querySelector(successMessageSelector);
        const errorElementId = 'test-error';
        const successElementId = 'test-success';
        const errorText = "Test error";
        
        expect(errorElement.innerHTML).toContain(errorText);
        expect(successElement).toBeNull();
        expect(inputElement.getAttribute('aria-errormessage')).toContain(errorElementId);
        expect(inputElement.getAttribute('aria-describedby')).toContain(errorElementId);
        expect(inputElement.getAttribute('aria-describedby')).not.toContain(successElementId);
      });
    });
    
    describe('help text', () => {
      it('when helpText is defined, then I expect help text to be displayed, and I expect the aria-describedby attribute on the input to contain the id of the help text element', async () => {
        // Setup the component
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test" help-text="Help text"></mass-text-field>`,
        });
        
        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const helpElement = page.root.shadowRoot.querySelector(helpTextSelector);
        const helpElementId = 'test-help';
        const helpText = "Help text";
        
        expect(helpElement.innerHTML).toContain(helpText);
        expect(inputElement.getAttribute('aria-describedby')).toContain(helpElementId);
      });
    });

    describe('watchers', () => {
      it('when isValid is changed, and isValid is true, and successText is undefined, then I expect no success message to be displayed, and I expect the aria-describedby attribute on the input element not to contain the id of the success element, and I expect the aria-invalid attribute on the input element to be undefined', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
        });
        
        const rootElement = page.doc.querySelector(componentUnderTest) as HTMLElement;
        
        // Change the isValid prop
        await renderAfterPropsChange(page, rootElement, 'is-valid', 'true');

        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const errorElement = page.root.shadowRoot.querySelector(errorMessageSelector);
        const successElement = page.root.shadowRoot.querySelector(successMessageSelector);
        
        expect(successElement).toBeNull();
        expect(errorElement).toBeNull();
        expect(inputElement.getAttribute('aria-errormessage')).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
        expect(inputElement.getAttribute('aria-invalid')).toBeNull();
      });
      it('when isValid is changed, and isValid is true, and successText is an empty string, then I expect no success message to be displayed, and I expect the aria-describedby attribute on the input element not to contain the id of the success element', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test" success-text=""></mass-text-field>`,
        });
        
        const rootElement = page.doc.querySelector(componentUnderTest) as HTMLElement;
        
        // Change the isValid prop
        await renderAfterPropsChange(page, rootElement, 'is-valid', 'true');

        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const errorElement = page.root.shadowRoot.querySelector(errorMessageSelector);
        const successElement = page.root.shadowRoot.querySelector(successMessageSelector);
        
        expect(successElement).toBeNull();
        expect(errorElement).toBeNull();
        expect(inputElement.getAttribute('aria-errormessage')).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
        expect(inputElement.getAttribute('aria-invalid')).toBeNull();
      });
      it('when isValid is changed, and isValid is true, and successText is a valid string, then I expect an success message to be displayed, and I expect the aria-describedby attribute on the input element not to contain the id of the success element, and I expect the aria-invalid attribute on the input element to be undefined', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test" success-text="Test success"></mass-text-field>`,
        });
        
        const rootElement = page.doc.querySelector(componentUnderTest) as HTMLElement;
        
        // Change the isValid prop
        await renderAfterPropsChange(page, rootElement, 'is-valid', 'true');

        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const errorElement = page.root.shadowRoot.querySelector(errorMessageSelector);
        const successElement = page.root.shadowRoot.querySelector(successMessageSelector);
        const successText = 'Test success';
        const successElementId = 'test-success';
        
        expect(successElement.innerHTML).toContain(successText);
        expect(errorElement).toBeNull();
        expect(inputElement.getAttribute('aria-errormessage')).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toContain(successElementId);
        expect(inputElement.getAttribute('aria-invalid')).toBeNull();
      });
      it('when isValid is changed, and isValid is false, and errorText is undefined, then I expect no error message to be displayed, and I expect the aria-describedby attribute on the input element not to contain the id of the error element', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
        });
        
        const rootElement = page.doc.querySelector(componentUnderTest) as HTMLElement;
        
        // Change the isValid prop
        await renderAfterPropsChange(page, rootElement, 'is-valid', 'false');

        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const errorElement = page.root.shadowRoot.querySelector(errorMessageSelector);
        const successElement = page.root.shadowRoot.querySelector(successMessageSelector);
        
        expect(successElement).toBeNull();
        expect(errorElement).toBeNull();
        expect(inputElement.getAttribute('aria-errormessage')).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
        expect(inputElement.getAttribute('aria-invalid')).toBe("true");
      });

      it('when isValid is changed, and isValid is false, and errorText is an empty string, then I expect no error message to be displayed, and I expect the aria-describedby attribute on the input element not to contain the id of the error element, and I expect the aria-invalid attribute on the input element to be true', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test" error-text=""></mass-text-field>`,
        });
        
        const rootElement = page.doc.querySelector(componentUnderTest) as HTMLElement;
        
        // Change the isValid prop
        await renderAfterPropsChange(page, rootElement, 'is-valid', 'false');

        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const errorElement = page.root.shadowRoot.querySelector(errorMessageSelector);
        const successElement = page.root.shadowRoot.querySelector(successMessageSelector);
        
        expect(successElement).toBeNull();
        expect(errorElement).toBeNull();
        expect(inputElement.getAttribute('aria-errormessage')).toBeNull();
        expect(inputElement.getAttribute('aria-describedby')).toBeNull();
        expect(inputElement.getAttribute('aria-invalid')).toBe("true");
      });
      it('when isValid is changed, and isValid is false, and errorText is a valid string, then I expect an error message to be displayed, and I expect the aria-describedby and aria-errormessage attributes on the input element not to contain the id of the error element, and I expect the aria-invalid attribute on the input element to be true', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test" error-text="Test error"></mass-text-field>`,
        });
        
        const rootElement = page.doc.querySelector(componentUnderTest) as HTMLElement;
        
        // Change the isValid prop
        await renderAfterPropsChange(page, rootElement, 'is-valid', 'false');

        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const errorElement = page.root.shadowRoot.querySelector(errorMessageSelector);
        const successElement = page.root.shadowRoot.querySelector(successMessageSelector);
        const errorElementId = 'test-error';
        const successElementId = 'test-success';
        const errorText = "Test error";
        
        expect(successElement).toBeNull();
        expect(errorElement.innerHTML).toContain(errorText);
        expect(inputElement.getAttribute('aria-errormessage')).toContain(errorElementId);
        expect(inputElement.getAttribute('aria-describedby')).toContain(errorElementId);
        expect(inputElement.getAttribute('aria-describedby')).not.toContain(successElementId);
        expect(inputElement.getAttribute('aria-invalid')).toBe("true");
      });
    });
  });

  describe('inputType', () => {
    it('when inputType is undefined, then I expect the type attribute on the input element to be text', async () => {
      const page = await newSpecPage({
        components: [TextField],
        html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
      });
      
      const inputElement = page.root.shadowRoot.querySelector(inputSelector);
      const expectedInputType = "text";
  
      expect(inputElement.getAttribute("type")).toContain(expectedInputType);
    });
    it('when inputType is a valid string, then I expect the type attribute on the input element to contain the value of inputType', async () => {
      const page = await newSpecPage({
        components: [TextField],
        html: `<mass-text-field input-id="test" label-text="This is a test" input-type="tel"></mass-text-field>`,
      });
      
      const inputElement = page.root.shadowRoot.querySelector(inputSelector);
      const expectedInputType = "tel";
  
      expect(inputElement.getAttribute("type")).toContain(expectedInputType);
    });
    it('when inputType is an empty string, then I expect the component not to render as expected, and I expect it to throw an error', async () => {
      const page = renderWithInvalidProps(
        [TextField], 
        `<mass-text-field input-id="This should still fail on inputType" label-text="Test label" input-type=""></mass-text-field>`
      );
      expect(page).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: inputType must be one of: text | email | password | search | tel | url`);
    });
    it('when inputType is an invalid string, then I expect the component not to render as expected, and I expect it to throw an error', async () => {
      const page = renderWithInvalidProps(
        [TextField], 
        `<mass-text-field input-id="This should still fail on inputType" label-text="Test label" input-type="fnord"></mass-text-field>`
      );
      expect(page).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: inputType must be one of: text | email | password | search | tel | url`);
    });

    describe('watchers', () => {
      it('when inputType is changed, and inputType is a valid string, then I expect the type attribute on the input element to contain the value of inputType', async () => {
        // Setup the component
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
        });
        
        const inputElement = page.root.shadowRoot.querySelector(inputSelector);
        const expectedInputType = "tel";
    
        // Change the inputId prop
        page.doc.querySelector(componentUnderTest).setAttribute('input-type', 'tel');
    
        // Wait for the component to update
        await page.waitForChanges();
    
        expect(inputElement.getAttribute('type')).toBe(expectedInputType);
      });
      it('when inputType is changed, and inputType is a an empty string, then I expect the component not to render as expected, and I expect it to throw an error', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
        });

        const rootElement = page.doc.querySelector(componentUnderTest) as HTMLElement;

        // Change the inputType prop
        const throws = renderAfterPropsChange(page, rootElement, 'input-type', '');
  
        expect(throws).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: inputType must be one of: text | email | password | search | tel | url`);
      });
      it('when inputType is changed, and inputType is an invalid string, then I expect the component not to render as expected, and I expect it to throw an error', async () => {
        const page = await newSpecPage({
          components: [TextField],
          html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
        });

        const rootElement = page.doc.querySelector(componentUnderTest) as HTMLElement;
        
        // Change the inputType prop
        const throws = renderAfterPropsChange(page, rootElement, 'input-type', 'fnord');
  
        expect(throws).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: inputType must be one of: text | email | password | search | tel | url`);
      });
    });
  });

  describe('isDisabled', () => {
    it('when isDisabled is undefined, then I expect the component to render as enabled', async () => {
        // Setup the component
      const page = await newSpecPage({
        components: [TextField],
        html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
      });

      const inputElement = page.root.shadowRoot.querySelector(inputSelector);
      const labelElement = page.root.shadowRoot.querySelector(labelSelector);
  
      expect(labelElement.getAttribute('class')).toBeNull();
      expect(inputElement.getAttribute('disabled')).toBeNull();
    });
    it('when isDisabled is false, then I expect the component to render as enabled', async () => {
      // Setup the component
      const page = await newSpecPage({
        components: [TextField],
        html: `<mass-text-field input-id="test" label-text="This is a test" is-disabled="false"></mass-text-field>`,
      });

      const inputElement = page.root.shadowRoot.querySelector(inputSelector);
      const labelElement = page.root.shadowRoot.querySelector(labelSelector);
  
      expect(labelElement.getAttribute('class')).toBeNull();
      expect(inputElement.getAttribute('disabled')).toBeNull();
    });
    it('when isDisabled is true, then I expect the component to render as disabled', async () => {
      // Setup the component
      const page = await newSpecPage({
        components: [TextField],
        html: `<mass-text-field input-id="test" label-text="This is a test" is-disabled="true"></mass-text-field>`,
      });

      const inputElement = page.root.shadowRoot.querySelector(inputSelector);
      const labelElement = page.root.shadowRoot.querySelector(labelSelector);
      const disabledClass = "disabled";
  
      expect(labelElement.getAttribute('class')).toBe(disabledClass);
      expect(inputElement.getAttribute('disabled')).not.toBeNull();
    });
  });

  describe('isRequired', () => {
    it('when isRequired is undefined, then I expect the component to render with no annotation in the label indicating that the field is required, and I expect the required attribute on the input element to be null', async () => {
      // Setup the component
    const page = await newSpecPage({
      components: [TextField],
      html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
    });

    const inputElement = page.root.shadowRoot.querySelector(inputSelector);
    const requiredElement = page.root.shadowRoot.querySelector(requiredSelector);

    expect(requiredElement).toBeNull();
    expect(inputElement.getAttribute('required')).toBeNull();
  });
  it('when isRequired is false, then I expect the component to render with no annotation in the label indicating that the field is required, and I expect the required attribute on the input element to be null', async () => {
    // Setup the component
    const page = await newSpecPage({
      components: [TextField],
      html: `<mass-text-field input-id="test" label-text="This is a test" is-required="false"></mass-text-field>`,
    });

    const inputElement = page.root.shadowRoot.querySelector(inputSelector);
    const requiredElement = page.root.shadowRoot.querySelector(requiredSelector);

    expect(requiredElement).toBeNull();
    expect(inputElement.getAttribute('required')).toBeNull();
  });
  it('when isRequired is true, then I expect the component to render with an annotation in the label indicating that the field is required, and I expect the required attribute on the input element to exist', async () => {
    // Setup the component
    const page = await newSpecPage({
      components: [TextField],
      html: `<mass-text-field input-id="test" label-text="This is a test" is-required="true"></mass-text-field>`,
    });

    const inputElement = page.root.shadowRoot.querySelector(inputSelector);
    const requiredElement = page.root.shadowRoot.querySelector(requiredSelector);
    const expectedRequiredText = "*";

    expect(requiredElement.innerHTML).toContain(expectedRequiredText);
    expect(inputElement.getAttribute('required')).not.toBeNull();
  });
  });

  describe('labelPosition', () => {
    it('when labelPosition is "top", then I expect the label to be rendered above the input', async () => {
      const page = await newSpecPage({
        components: [TextField],
        html: `<mass-text-field input-id="test" label-text="This is a test"></mass-text-field>`,
      });

      const divElement = page.root.shadowRoot.querySelector(divSelector);
  
      expect(divElement.getAttribute('class')).toBe('position-top');
    });

    it('when labelPosition is "left", then I expect the label to be rendered left of the input', async () => {
      const page = await newSpecPage({
        components: [TextField],
        html: `<mass-text-field input-id="test" label-text="This is a test" label-position='left'></mass-text-field>`,
      });

      const divElement = page.root.shadowRoot.querySelector(divSelector);
  
      expect(divElement.getAttribute('class')).toBe('position-left');
    });
  });

});