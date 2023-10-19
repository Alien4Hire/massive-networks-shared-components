import { newSpecPage } from '@stencil/core/testing';
import { Notification } from '../mass-notification';

const componentUnderTest = 'mass-notification';

async function renderWithInvalidProps(components: Array<unknown>, html: string) {
  return await newSpecPage({
    components,
    html,
  })
};

describe('notification', () => {

  describe('headingLevel prop', () => {
    afterEach(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve);
      });
    });
    
    it("When headingLevel is a valid number, then I expect the component to render with a heading tag matching the heading level", async () => {
      const page = await newSpecPage({
        components: [Notification],
        html: `<mass-notification heading-level=1, heading-text="Title" icon-name="gas_meter" alt-text="This should be read by a screen reader"></mass-notification>`
      })

      await expect(page.root).toEqualHtml(`
      <mass-notification heading-level="1," heading-text="Title" icon-name="gas_meter" alt-text="This should be read by a screen reader">
       <mock:shadow-root>
         <aside class="low notification">
           <div class="notification-icon">
             <mass-icon color="neutral-100-black" fill="1" iconname="gas_meter" alttext="This should be read by a screen reader"></mass-icon>
           </div>
           <div class="notification-content">
             <h1 class="notification-header">
               Title
             </h1>
             <div class="notification-body">
               <slot></slot>
             </div>
           </div>
         </aside>
        </mock:shadow-root>
      </mass-notification>
    `);
    })

    it("When headingLevel is a number less than 1, then I expect the component NOT to render, and I expect it to throw an error", async () => {
      const page = renderWithInvalidProps(
        [Notification],
        `<mass-notification heading-level=0, heading-text="Title" icon-name="gas_meter"></mass-notification>`
      );
  
      await expect(page).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: headingLevel must be a number between 1 and 6.`);
    })
  
    it("When headingLevel is a number greater than 6, then I expect the component NOT to render, and I expect it to throw an error", async () => {
      const page = renderWithInvalidProps(
        [Notification],
        `<mass-notification heading-level=7, heading-text="Title" icon-name="gas_meter"></mass-notification>`
      );
  
      await expect(page).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: headingLevel must be a number between 1 and 6.`)
    })
  
    it("When headingLevel is not a number, then I expect the component NOT to render, and I expect it to throw an error", async () => {
      const page = renderWithInvalidProps(
        [Notification],
        `<mass-notification heading-level='h1', heading-text="Title" icon-name="gas_meter"></mass-notification>`
      );
  
      await expect(page).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: headingLevel must be a number between 1 and 6.`)
    })
  
    it("When headingLevel is an empty string, then I expect the component NOT to render, and I expect it to throw an error", async () => {
      const page = renderWithInvalidProps(
        [Notification],
        `<mass-notification heading-level='', heading-text="Title" icon-name="gas_meter"></mass-notification>`
      );
  
      await expect(page).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: headingLevel must be a number between 1 and 6.`)
    })
  })

  describe('headingText prop', () => {
    it("When headingText is a valid string, then I expect the component to render with the headingText as the title.", async () => {
      const page = await newSpecPage({
        components: [Notification],
        html: `<mass-notification heading-level=1, heading-text="Title" icon-name="gas_meter" alt-text="This should be read by a screen reader"></mass-notification>`
      })

      expect(page.root).toEqualHtml(`
      <mass-notification heading-level="1," heading-text="Title" icon-name="gas_meter" alt-text="This should be read by a screen reader">
       <mock:shadow-root>
         <aside class="low notification">
           <div class="notification-icon">
             <mass-icon color="neutral-100-black" fill="1" iconname="gas_meter" alttext="This should be read by a screen reader"></mass-icon>
           </div>
           <div class="notification-content">
             <h1 class="notification-header">
               Title
             </h1>
             <div class="notification-body">
               <slot></slot>
             </div>
           </div>
         </aside>
        </mock:shadow-root>
      </mass-notification>
    `);
    });

    it("When headingText is an empty string, then I expect the component NOT to render, and I expect it to throw an error.", async () => {
      const page = renderWithInvalidProps(
        [Notification],
        `<mass-notification heading-level=1, heading-text="" icon-name="gas_meter"></mass-notification>`
      );
  
      await expect(page).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: headingText must be a non empty string.`);
    });
  })
  
  describe('priority prop', () => {
    it("When priority is a valid value, then I expect the component to render with the provided value", async () => {
      const page = await newSpecPage({
        components: [Notification],
        html: `<mass-notification priority="medium" heading-level=1, heading-text="Title" icon-name="gas_meter" alt-text="This should be read by a screen reader"></mass-notification>`
      })

      expect(page.root).toEqualHtml(`
      <mass-notification priority="medium" heading-level="1," heading-text="Title" icon-name="gas_meter" alt-text="This should be read by a screen reader">
       <mock:shadow-root>
         <aside class="medium notification">
           <div class="notification-icon">
             <mass-icon color="semantic-warning-03" fill="1" iconname="gas_meter" alttext="This should be read by a screen reader"></mass-icon>
           </div>
           <div class="notification-content">
             <h1 class="notification-header">
               Title
             </h1>
             <div class="notification-body">
               <slot></slot>
             </div>
           </div>
         </aside>
        </mock:shadow-root>
      </mass-notification>
    `);
    });

    it("When priority is an empty string, then I expect the component to render with the default value applied.", async () => {
      const page = await newSpecPage({
        components: [Notification],
        html: `<mass-notification heading-level=1, heading-text="Title" icon-name="gas_meter" alt-text="This should be read by a screen reader"></mass-notification>`
      })

      expect(page.root).toEqualHtml(`
      <mass-notification heading-level="1," heading-text="Title" icon-name="gas_meter" alt-text="This should be read by a screen reader">
       <mock:shadow-root>
         <aside class="low notification">
           <div class="notification-icon">
             <mass-icon color="neutral-100-black" fill="1" iconname="gas_meter" alttext="This should be read by a screen reader"></mass-icon>
           </div>
           <div class="notification-content">
             <h1 class="notification-header">
               Title
             </h1>
             <div class="notification-body">
               <slot></slot>
             </div>
           </div>
         </aside>
        </mock:shadow-root>
      </mass-notification>
    `);
    })

    it("When priority is an invalid value, then I expect the component NOT to render, and I expect it to throw an error", async () => {
      const page = renderWithInvalidProps(
        [Notification],
        `<mass-notification priority="urgent" heading-level=1, heading-text="Title" icon-name="gas_meter"></mass-notification>`
      );
  
      await expect(page).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: priority must be either low, medium, or high.`);
    })
  })

  describe('altText prop', () => {

    it("When altText is a valid value, then I expect the component to render with the alt text attached to the icon.", async () => {
      const page = await newSpecPage({
        components: [Notification],
        html: `<mass-notification alt-text="This should be read by a screen reader" priority="medium" heading-level=1, heading-text="Title" icon-name="gas_meter"></mass-notification>`
      })
  
      expect(page.root).toEqualHtml(`
      <mass-notification alt-text="This should be read by a screen reader" priority="medium" heading-level="1," heading-text="Title" icon-name="gas_meter">
       <mock:shadow-root>
         <aside class="medium notification">
           <div class="notification-icon">
             <mass-icon alttext="This should be read by a screen reader" color="semantic-warning-03" fill="1" iconname="gas_meter"></mass-icon>
           </div>
           <div class="notification-content">
             <h1 class="notification-header">
               Title
             </h1>
             <div class="notification-body">
               <slot></slot>
             </div>
           </div>
         </aside>
        </mock:shadow-root>
      </mass-notification>
    `);
    })

    it("When altText is an empty string, then I expect the component NOT to render, and I expect it to throw an error", async () => {
      const page = renderWithInvalidProps(
        [Notification],
        `<mass-notification priority="low" heading-level=1, heading-text="Title" icon-name="gas_meter" alt-text=""></mass-notification>`
      );
  
      await expect(page).rejects.toThrowError(`${componentUnderTest.toUpperCase()}: altText must be a non empty string.`);
    })
    
  })
});

