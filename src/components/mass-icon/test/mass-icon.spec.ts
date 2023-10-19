import { newSpecPage } from '@stencil/core/testing';
import { Icon } from '../mass-icon';

const componentSelector = '[class*=material-symbols]';

describe('icon', () => {

  describe('iconName prop', () => {
    afterEach(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve);
      });
    });

    it('When iconName is a valid string, then I expect the component to render with the icon name in the text node of the span element.', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<mass-icon icon-name="arrow_right"></mass-icon>`,
      });

      const expectedText = 'arrow_right';
      const componentElement = page.root.shadowRoot.querySelector(componentSelector);
      
      expect(componentElement.innerHTML).toBe(expectedText);
    });
  });

  describe('isPresentational and altText props', () => {

    it('When isPresentational is true, then I expect the component to render with the role attribute set to "presentation" and with the aria-label attribute set to undefined.', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<mass-icon icon-name="arrow_right" is-presentational="true"></mass-icon>`,
      });

      const expectedRole = 'presentation';
      const componentElement = page.root.shadowRoot.querySelector(componentSelector);

      expect(componentElement.getAttribute('role')).toBe(expectedRole);
      expect(componentElement.getAttribute('aria-label')).toBeNull();
    });

    it('When isPresentational is false, and altText is a non-empty string, then I expect the component to render with the role attribute undefined, and with the aria-label attribute set to the value of altText.', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<mass-icon icon-name="arrow_right" is-presentational="false" alt-text="Right Arrow"></mass-icon>`,
      });

      const expectedAltText = 'Right Arrow';
      const componentElement = page.root.shadowRoot.querySelector(componentSelector);

      expect(componentElement.getAttribute('role')).toBeNull();
      expect(componentElement.getAttribute('aria-label')).toBe(expectedAltText);
    });
  });

  describe('fill, grade, opticalSize, and weight props', () => {

    it('When fill, grade, opticalSize, and weight are undefined, and all other props are valid, then I expect the component to render with the default values for fill, weight, grade, and opticalSize.', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<mass-icon icon-name="arrow_right"></mass-icon>`,
      });

      const expectedFill = 0;
      const expectedGrade = 0;
      const expectedOpticalSize = 24;
      const expectedWeight = 400;
      const expectedStyle = `font-variation-settings: 'FILL' ${expectedFill}, 'wght' ${expectedWeight}, 'GRAD' ${expectedGrade}, 'opsz' ${expectedOpticalSize};`;
      const componentElement = page.root.shadowRoot.querySelector(componentSelector);

      expect(componentElement.getAttribute('style')).toBe(expectedStyle);
    });

    it('When fill is specified, and grade, opticalSize, and weight are undefined, and all other props are valid, then I expect the component to render with the specified value for fill, and the default values for weight, grade, and opticalSize.', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<mass-icon icon-name="arrow_right" fill="1"></mass-icon>`,
      });

      const expectedFill = 1;
      const expectedGrade = 0;
      const expectedOpticalSize = 24;
      const expectedWeight = 400;
      const expectedStyle = `font-variation-settings: 'FILL' ${expectedFill}, 'wght' ${expectedWeight}, 'GRAD' ${expectedGrade}, 'opsz' ${expectedOpticalSize};`;
      const componentElement = page.root.shadowRoot.querySelector(componentSelector);

      expect(componentElement.getAttribute('style')).toBe(expectedStyle);
    });

    it('When grade is specified, and fill, opticalSize, and weight are undefined, and all other props are valid, then I expect the component to render with the specifid value for grade, and the default values for weight, fill, and opticalSize.', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<mass-icon icon-name="arrow_right" grade="50"></mass-icon>`,
      });

      const expectedFill = 0;
      const expectedGrade = 50;
      const expectedOpticalSize = 24;
      const expectedWeight = 400;
      const expectedStyle = `font-variation-settings: 'FILL' ${expectedFill}, 'wght' ${expectedWeight}, 'GRAD' ${expectedGrade}, 'opsz' ${expectedOpticalSize};`;
      const componentElement = page.root.shadowRoot.querySelector(componentSelector);

      expect(componentElement.getAttribute('style')).toBe(expectedStyle);
    });

    it('When opticalSize is specified, and fill, grade, and weight are undefined, and all other props are valid, then I expect the component to render with the specifid value for opticalSize, and the default values for weight, fill, and grade.', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<mass-icon icon-name="arrow_right" optical-size="64"></mass-icon>`,
      });

      const expectedFill = 0;
      const expectedGrade = 0;
      const expectedOpticalSize = 64;
      const expectedWeight = 400;
      const expectedStyle = `font-variation-settings: 'FILL' ${expectedFill}, 'wght' ${expectedWeight}, 'GRAD' ${expectedGrade}, 'opsz' ${expectedOpticalSize};`;
      const componentElement = page.root.shadowRoot.querySelector(componentSelector);

      expect(componentElement.getAttribute('style')).toBe(expectedStyle);
    });

    it('When weight is specified, and fill, opticalSize, and grade are undefined, and all other props are valid, then I expect the component to render with the specifid value for weight, and the default values for grade, fill, and opticalSize.', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<mass-icon icon-name="arrow_right" weight="700"></mass-icon>`,
      });

      const expectedFill = 0;
      const expectedGrade = 0;
      const expectedOpticalSize = 24;
      const expectedWeight = 700;
      const expectedStyle = `font-variation-settings: 'FILL' ${expectedFill}, 'wght' ${expectedWeight}, 'GRAD' ${expectedGrade}, 'opsz' ${expectedOpticalSize};`;
      const componentElement = page.root.shadowRoot.querySelector(componentSelector);

      expect(componentElement.getAttribute('style')).toBe(expectedStyle);
    });
  });
});

