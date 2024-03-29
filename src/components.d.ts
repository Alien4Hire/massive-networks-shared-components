/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MapMarker } from "./components/mass-google-map/mass-google-map";
import { MassLegendItemType } from "./components/mass-legend/mass-legend";
import { MassLegendItemType as MassLegendItemType1 } from "./components/mass-legend/mass-legend";
export { MapMarker } from "./components/mass-google-map/mass-google-map";
export { MassLegendItemType } from "./components/mass-legend/mass-legend";
export { MassLegendItemType as MassLegendItemType1 } from "./components/mass-legend/mass-legend";
export namespace Components {
    interface MassButton {
        /**
          * Name of the icon to be displayed on the left side of the button
         */
        "iconName": string;
        /**
          * If true, button will be disabled
         */
        "isDisabled": boolean;
        /**
          * If true, button will have a dropdown icon
         */
        "isDropdown": boolean;
        /**
          * If true, will have a border-radius of 4px, else will have rounded edges
         */
        "isRounded": boolean;
        /**
          * select size of button small | medium | large
         */
        "size": string;
        /**
          * Select theme of button, color, hover color
         */
        "type": string;
    }
    interface MassCheckboxGroup {
        /**
          * Provide custom textbox id string.
         */
        "checkboxId": string;
        /**
          * Indicates whether the checkbox is checked or not. Defaults to false.
         */
        "checked": boolean | boolean[];
        /**
          * The error message to display when isError is true. Defaults to "Error Explanation Text".
         */
        "errorMsg"?: string;
        /**
          * Is field disabled.
         */
        "isDisabled": boolean;
        /**
          * Indicates if there is an error. If true, an error message and icon will be displayed below the checkbox. Defaults to false.
         */
        "isError": boolean;
        /**
          * The label title that will be displayed above the checkbox options. Defaults to "".
         */
        "label": string;
        /**
          * The text that will be displayed beside the checkbox.
         */
        "text": string | string[];
    }
    interface MassGoogleMap {
        "center": { lat: number; lng: number };
        "handleGetQuote"?: (detail: any) => void;
        "legend": MassLegendItemType[];
        "searchResults": MapMarker[];
        "zoom"?: number;
    }
    interface MassIcon {
        /**
          * The alt text that should be announced to screen readers and other assistive technology.  Used in the `aria-label` attribute of the icon.  Works with the `isPresentational` prop.
         */
        "altText": string;
        /**
          * The color of the icon.  Maps to the class names in `/src/common/scss/colors.scss`, which are driven by the names in the Design Tokens defined in Figma.  Used in the `class` attribute of the icon.  Color page in Figma: https://www.figma.com/file/DM0lok3Yv46sK6LiJflDrm/mass-Hydrogen-Design-System?type=design&node-id=273-5&mode=design
         */
        "color": string;
        /**
          * The fill state of the icon. Used in the `font-variation-settings` CSS property set via the icon's `style` attribute.  Defaults to 0 (outlined).  Possible values: 0 (outlined) | 1 (filled)  https://m3.material.io/styles/icons/applying-icons#ebb3ae7d-d274-4a25-9356-436e82084f1f
         */
        "fill": number;
        /**
          * The grade of the icon. Used in the `font-variation-settings` CSS property set via the icon's `style` attribute.  Defaults to 0.  Possible values: -25 to 100.  https://m3.material.io/styles/icons/applying-icons#3ad55207-1cb0-43af-8092-fad2762f69f7
         */
        "grade": number;
        /**
          * The name of the icon, in lower_snake_case.  This is the name of the icon as it appears in the Material Symbols library in Google Fonts.  Example: Chevron Right (chevron_right) https://fonts.google.com/icons?selected=Material+Symbols+Outlined:chevron_right:FILL@0;wght@400;GRAD@0;opsz@24
         */
        "iconName": string;
        /**
          * The style of the icon.  Maps to the font styles in the Material Symbols library in Google Fonts.  Possible values: "rounded" | "sharp" | "outlined"  https://fonts.google.com/icons
         */
        "iconStyle": string;
        /**
          * Determines whether the icon should be announced to screen readers and other assistive technology.  Defaults to true.  Works with the `altText` prop.  If true, sets the `role="presentation"` attribute on the icon and the `aria-label` attribute to undefined. The icon will not be announced. If false, sets the `role` attribute to undefined and the `aria-label` attribute to the value of the `altText` prop. The icon will be announced using the value of iconAltText prop.
         */
        "isPresentational": boolean;
        /**
          * Optical size of the font. Used in the `font-variation-settings` CSS property set via the icon's `style` attribute.  Allows the image to look the same at different font sizes by adjusting the thickness of the lines.  https://m3.material.io/styles/icons/applying-icons#b41cbc01-9b49-4a44-a525-d153d1ea1425
         */
        "opticalSize": number;
        /**
          * Weight of the font. Used in the `font-variation-settings` CSS property set via the `icon's style` attribute.  Possible values: 100-700, increments of 100.  Defaults to 400 (Regular).  100: Thin, 200: Extra Light, 300: Light, 400: Regular, 500: Medium, 600: Semi Bold, 700: Bold  https://m3.material.io/styles/icons/applying-icons#d7f45762-67ac-473d-95b0-9214c791e242
         */
        "weight": number;
    }
    interface MassImage {
        /**
          * If true, an overlay will darken the image.  Defaults to false.
          * @param overlay
         */
        "overlay": boolean;
        /**
          * Specifies the shape of the image.  Defaults to 'square'.
          * @param shape - round | square | rounded
         */
        "shape": string;
        /**
          * Image source, can be a URL or a local image.
          * @param src
         */
        "src": string;
    }
    interface MassLeftmenu {
    }
    interface MassLegend {
        "items": MassLegendItemType1[];
    }
    interface MassModal {
        /**
          * Text for the first button. If null, the button won't render.
         */
        "firstButtonText": string;
        "hide": () => Promise<void>;
        /**
          * State to manage the visibility of the modal
         */
        "isVisible": boolean;
        /**
          * Title of the modal
         */
        "modalTitle": string;
        /**
          * Text for the second button. If null, the button won't render.
         */
        "secondButtonText": string;
        "show": () => Promise<void>;
        "toggleModal": (show: boolean) => Promise<void>;
    }
    interface MassNotification {
        /**
          * The alt text that should be announced to screen readers and other assistive technology.  Used in the `aria-label` attribute of the icon.  Works with the `isPresentational` prop.
         */
        "altText": string;
        /**
          * Sets the heading level for the <h*> tag.
          * @param headingLevel - A number between 1 - 6
         */
        "headingLevel": number;
        /**
          * Sets the text for the heading in the notification.
          * @param headingText
         */
        "headingText": string;
        /**
          * Sets the icon to be displayed with the notification.
          * @param iconName
         */
        "iconName": string;
        /**
          * Sets the priority level for the notification.  Defaults to 'low'.
          * @param priority - low | medium | high
         */
        "priority": string;
    }
    interface MassProgressBar {
        "isVisible": boolean;
        "progress": number;
    }
    interface MassQuestionToggle {
        /**
          * Default value of the selected options radio input
         */
        "defaultValue": string;
        /**
          * Name of icon to present left of the legend text
         */
        "iconName": string;
        /**
          * Label for the radio group
         */
        "label": string;
        /**
          * Id used for the label and labeledBy attribute for the radiogroup
         */
        "labelId": string;
        /**
          * Id of the first options input radio and label
         */
        "optionOneId": string;
        /**
          * Label text of the first option
         */
        "optionOneLabel": string;
        /**
          * Value of the first options input radio when selected
         */
        "optionOneValue": string;
        /**
          * Id of the second options input radio and label
         */
        "optionTwoId": string;
        /**
          * Text of the second options label
         */
        "optionTwoLabel": string;
        /**
          * Value of the second options input radio when selected
         */
        "optionTwoValue": string;
        /**
          * Name used to group the input radio options
         */
        "optionsGroupName": string;
    }
    interface MassSelectField {
        /**
          * Error message to be displayed for the select field being used.
         */
        "errorMessage": string;
        /**
          * Variable to control wether an error message and icon are displayed.g
         */
        "hasError": boolean;
        /**
          * ID of the select field being used.
         */
        "inputId": string;
        /**
          * Variable to control the disabled state of the select field being used.
         */
        "isDisabled": boolean;
        /**
          * Label of the select field being used.
         */
        "label": string;
        "labelPosition": 'top' | 'left';
        /**
          * User's list of options to be rendered in the select field
         */
        "options": string | Array<{ name: string; value: string }>;
        /**
          * Light or Dark version of select field being used.
         */
        "type": string;
    }
    interface MassTextField {
        /**
          * Error text for the field.  If provided, and if isValid is false, will be displayed below the field.
         */
        "errorText": string;
        /**
          * Help text for the field.  If provided, will be displayed below the field. If undefined or an empty string, will not be displayed.
         */
        "helpText": string;
        /**
          * The id of the input.   Pairs the label with the input field.  Must be unique on the page.  Required.  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#id
         */
        "inputId": string;
        /**
          * The type of the input field.   Defaults to "text".  Possible values: "text" | "email" | "password" | "search" | "tel" | "url"  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type
         */
        "inputType": string;
        /**
          * The disabled state of the field.  Defaults to false.  If true, the field will be disabled.  If false, the field will be enabled.
         */
        "isDisabled": boolean;
        /**
          * Whether the field is required or not for form submission.  Defaults to false.  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#required
         */
        "isRequired": boolean;
        /**
          * The validation state of the field.  Possible values: undefined | true | false  Defaults to undefined.  If undefined, the field will have default styling.  If true, the field will be styled as valid.  If false, the field will be styled as invalid.
         */
        "isValid": undefined | boolean;
        "labelPosition": 'top' | 'left';
        /**
          * The text that appears in the field's label.   Required.
         */
        "labelText": string;
        /**
          * The maximum input length for the field.  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
         */
        "maxLength": number;
        /**
          * The minimum input length for the field.  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
         */
        "minLength": number;
        /**
          * The validation pattern for the field.  Regexp string.  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
         */
        "pattern": string;
        /**
          * The placeholder text that should appear in the field.  This should **never** be used as a substitute for a label.  Use this only as a hint for the user. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholders_are_not_accessible  Use `labelText` to specify the field's label.  Defaults to undefined.  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder
         */
        "placeholderText": string | undefined;
        /**
          * Success text for the field.  If provided, and if isValid is true, will be displayed below the field.
         */
        "successText": string;
        /**
          * The value of the field passed from the parent component (if any).  Defaults to an empty string.
         */
        "value": string;
    }
    interface MassTextarea {
        /**
          * Text for the error message
         */
        "errorMsg": string;
        /**
          * Is disabled state
         */
        "isDisabled": boolean;
        /**
          * Is Error state
         */
        "isError": boolean;
        /**
          * Is text box required
         */
        "isRequired": boolean;
        /**
          * title of input
         */
        "label": string;
        /**
          * Max Length of text box
         */
        "maxLength": number;
        /**
          * Min Length of text box
         */
        "minLength": number;
        /**
          * input for placeholder text
         */
        "placeholder": string;
        /**
          * custom id for text area
         */
        "textareaId": string;
        /**
          * Value of text box
         */
        "value": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
export interface MassButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMassButtonElement;
}
export interface MassCheckboxGroupCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMassCheckboxGroupElement;
}
export interface MassModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMassModalElement;
}
export interface MassQuestionToggleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMassQuestionToggleElement;
}
export interface MassSelectFieldCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMassSelectFieldElement;
}
export interface MassTextFieldCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMassTextFieldElement;
}
export interface MassTextareaCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMassTextareaElement;
}
declare global {
    interface HTMLMassButtonElement extends Components.MassButton, HTMLStencilElement {
    }
    var HTMLMassButtonElement: {
        prototype: HTMLMassButtonElement;
        new (): HTMLMassButtonElement;
    };
    interface HTMLMassCheckboxGroupElement extends Components.MassCheckboxGroup, HTMLStencilElement {
    }
    var HTMLMassCheckboxGroupElement: {
        prototype: HTMLMassCheckboxGroupElement;
        new (): HTMLMassCheckboxGroupElement;
    };
    interface HTMLMassGoogleMapElement extends Components.MassGoogleMap, HTMLStencilElement {
    }
    var HTMLMassGoogleMapElement: {
        prototype: HTMLMassGoogleMapElement;
        new (): HTMLMassGoogleMapElement;
    };
    interface HTMLMassIconElement extends Components.MassIcon, HTMLStencilElement {
    }
    var HTMLMassIconElement: {
        prototype: HTMLMassIconElement;
        new (): HTMLMassIconElement;
    };
    interface HTMLMassImageElement extends Components.MassImage, HTMLStencilElement {
    }
    var HTMLMassImageElement: {
        prototype: HTMLMassImageElement;
        new (): HTMLMassImageElement;
    };
    interface HTMLMassLeftmenuElement extends Components.MassLeftmenu, HTMLStencilElement {
    }
    var HTMLMassLeftmenuElement: {
        prototype: HTMLMassLeftmenuElement;
        new (): HTMLMassLeftmenuElement;
    };
    interface HTMLMassLegendElement extends Components.MassLegend, HTMLStencilElement {
    }
    var HTMLMassLegendElement: {
        prototype: HTMLMassLegendElement;
        new (): HTMLMassLegendElement;
    };
    interface HTMLMassModalElement extends Components.MassModal, HTMLStencilElement {
    }
    var HTMLMassModalElement: {
        prototype: HTMLMassModalElement;
        new (): HTMLMassModalElement;
    };
    interface HTMLMassNotificationElement extends Components.MassNotification, HTMLStencilElement {
    }
    var HTMLMassNotificationElement: {
        prototype: HTMLMassNotificationElement;
        new (): HTMLMassNotificationElement;
    };
    interface HTMLMassProgressBarElement extends Components.MassProgressBar, HTMLStencilElement {
    }
    var HTMLMassProgressBarElement: {
        prototype: HTMLMassProgressBarElement;
        new (): HTMLMassProgressBarElement;
    };
    interface HTMLMassQuestionToggleElement extends Components.MassQuestionToggle, HTMLStencilElement {
    }
    var HTMLMassQuestionToggleElement: {
        prototype: HTMLMassQuestionToggleElement;
        new (): HTMLMassQuestionToggleElement;
    };
    interface HTMLMassSelectFieldElement extends Components.MassSelectField, HTMLStencilElement {
    }
    var HTMLMassSelectFieldElement: {
        prototype: HTMLMassSelectFieldElement;
        new (): HTMLMassSelectFieldElement;
    };
    interface HTMLMassTextFieldElement extends Components.MassTextField, HTMLStencilElement {
    }
    var HTMLMassTextFieldElement: {
        prototype: HTMLMassTextFieldElement;
        new (): HTMLMassTextFieldElement;
    };
    interface HTMLMassTextareaElement extends Components.MassTextarea, HTMLStencilElement {
    }
    var HTMLMassTextareaElement: {
        prototype: HTMLMassTextareaElement;
        new (): HTMLMassTextareaElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "mass-button": HTMLMassButtonElement;
        "mass-checkbox-group": HTMLMassCheckboxGroupElement;
        "mass-google-map": HTMLMassGoogleMapElement;
        "mass-icon": HTMLMassIconElement;
        "mass-image": HTMLMassImageElement;
        "mass-leftmenu": HTMLMassLeftmenuElement;
        "mass-legend": HTMLMassLegendElement;
        "mass-modal": HTMLMassModalElement;
        "mass-notification": HTMLMassNotificationElement;
        "mass-progress-bar": HTMLMassProgressBarElement;
        "mass-question-toggle": HTMLMassQuestionToggleElement;
        "mass-select-field": HTMLMassSelectFieldElement;
        "mass-text-field": HTMLMassTextFieldElement;
        "mass-textarea": HTMLMassTextareaElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MassButton {
        /**
          * Name of the icon to be displayed on the left side of the button
         */
        "iconName"?: string;
        /**
          * If true, button will be disabled
         */
        "isDisabled"?: boolean;
        /**
          * If true, button will have a dropdown icon
         */
        "isDropdown"?: boolean;
        /**
          * If true, will have a border-radius of 4px, else will have rounded edges
         */
        "isRounded"?: boolean;
        /**
          * Event emitted when the button is clicked
         */
        "onMassClick"?: (event: MassButtonCustomEvent<any>) => void;
        /**
          * select size of button small | medium | large
         */
        "size"?: string;
        /**
          * Select theme of button, color, hover color
         */
        "type"?: string;
    }
    interface MassCheckboxGroup {
        /**
          * Provide custom textbox id string.
         */
        "checkboxId": string;
        /**
          * Indicates whether the checkbox is checked or not. Defaults to false.
         */
        "checked"?: boolean | boolean[];
        /**
          * The error message to display when isError is true. Defaults to "Error Explanation Text".
         */
        "errorMsg"?: string;
        /**
          * Is field disabled.
         */
        "isDisabled"?: boolean;
        /**
          * Indicates if there is an error. If true, an error message and icon will be displayed below the checkbox. Defaults to false.
         */
        "isError"?: boolean;
        /**
          * The label title that will be displayed above the checkbox options. Defaults to "".
         */
        "label"?: string;
        /**
          * The function to be called when changes are made to the checkbox state.
         */
        "onMassChange"?: (event: MassCheckboxGroupCustomEvent<any>) => void;
        /**
          * The text that will be displayed beside the checkbox.
         */
        "text"?: string | string[];
    }
    interface MassGoogleMap {
        "center"?: { lat: number; lng: number };
        "handleGetQuote"?: (detail: any) => void;
        "legend"?: MassLegendItemType[];
        "searchResults"?: MapMarker[];
        "zoom"?: number;
    }
    interface MassIcon {
        /**
          * The alt text that should be announced to screen readers and other assistive technology.  Used in the `aria-label` attribute of the icon.  Works with the `isPresentational` prop.
         */
        "altText"?: string;
        /**
          * The color of the icon.  Maps to the class names in `/src/common/scss/colors.scss`, which are driven by the names in the Design Tokens defined in Figma.  Used in the `class` attribute of the icon.  Color page in Figma: https://www.figma.com/file/DM0lok3Yv46sK6LiJflDrm/mass-Hydrogen-Design-System?type=design&node-id=273-5&mode=design
         */
        "color"?: string;
        /**
          * The fill state of the icon. Used in the `font-variation-settings` CSS property set via the icon's `style` attribute.  Defaults to 0 (outlined).  Possible values: 0 (outlined) | 1 (filled)  https://m3.material.io/styles/icons/applying-icons#ebb3ae7d-d274-4a25-9356-436e82084f1f
         */
        "fill"?: number;
        /**
          * The grade of the icon. Used in the `font-variation-settings` CSS property set via the icon's `style` attribute.  Defaults to 0.  Possible values: -25 to 100.  https://m3.material.io/styles/icons/applying-icons#3ad55207-1cb0-43af-8092-fad2762f69f7
         */
        "grade"?: number;
        /**
          * The name of the icon, in lower_snake_case.  This is the name of the icon as it appears in the Material Symbols library in Google Fonts.  Example: Chevron Right (chevron_right) https://fonts.google.com/icons?selected=Material+Symbols+Outlined:chevron_right:FILL@0;wght@400;GRAD@0;opsz@24
         */
        "iconName": string;
        /**
          * The style of the icon.  Maps to the font styles in the Material Symbols library in Google Fonts.  Possible values: "rounded" | "sharp" | "outlined"  https://fonts.google.com/icons
         */
        "iconStyle"?: string;
        /**
          * Determines whether the icon should be announced to screen readers and other assistive technology.  Defaults to true.  Works with the `altText` prop.  If true, sets the `role="presentation"` attribute on the icon and the `aria-label` attribute to undefined. The icon will not be announced. If false, sets the `role` attribute to undefined and the `aria-label` attribute to the value of the `altText` prop. The icon will be announced using the value of iconAltText prop.
         */
        "isPresentational"?: boolean;
        /**
          * Optical size of the font. Used in the `font-variation-settings` CSS property set via the icon's `style` attribute.  Allows the image to look the same at different font sizes by adjusting the thickness of the lines.  https://m3.material.io/styles/icons/applying-icons#b41cbc01-9b49-4a44-a525-d153d1ea1425
         */
        "opticalSize"?: number;
        /**
          * Weight of the font. Used in the `font-variation-settings` CSS property set via the `icon's style` attribute.  Possible values: 100-700, increments of 100.  Defaults to 400 (Regular).  100: Thin, 200: Extra Light, 300: Light, 400: Regular, 500: Medium, 600: Semi Bold, 700: Bold  https://m3.material.io/styles/icons/applying-icons#d7f45762-67ac-473d-95b0-9214c791e242
         */
        "weight"?: number;
    }
    interface MassImage {
        /**
          * If true, an overlay will darken the image.  Defaults to false.
          * @param overlay
         */
        "overlay"?: boolean;
        /**
          * Specifies the shape of the image.  Defaults to 'square'.
          * @param shape - round | square | rounded
         */
        "shape"?: string;
        /**
          * Image source, can be a URL or a local image.
          * @param src
         */
        "src": string;
    }
    interface MassLeftmenu {
    }
    interface MassLegend {
        "items"?: MassLegendItemType1[];
    }
    interface MassModal {
        /**
          * Text for the first button. If null, the button won't render.
         */
        "firstButtonText"?: string;
        /**
          * State to manage the visibility of the modal
         */
        "isVisible"?: boolean;
        /**
          * Title of the modal
         */
        "modalTitle"?: string;
        /**
          * Event emitted when the modal is closed
         */
        "onCloseModal"?: (event: MassModalCustomEvent<any>) => void;
        /**
          * Event emitted when the first button is clicked
         */
        "onFirstButtonClicked"?: (event: MassModalCustomEvent<any>) => void;
        /**
          * Event emitted when the second button is clicked
         */
        "onSecondButtonClicked"?: (event: MassModalCustomEvent<any>) => void;
        /**
          * Text for the second button. If null, the button won't render.
         */
        "secondButtonText"?: string;
    }
    interface MassNotification {
        /**
          * The alt text that should be announced to screen readers and other assistive technology.  Used in the `aria-label` attribute of the icon.  Works with the `isPresentational` prop.
         */
        "altText": string;
        /**
          * Sets the heading level for the <h*> tag.
          * @param headingLevel - A number between 1 - 6
         */
        "headingLevel": number;
        /**
          * Sets the text for the heading in the notification.
          * @param headingText
         */
        "headingText": string;
        /**
          * Sets the icon to be displayed with the notification.
          * @param iconName
         */
        "iconName": string;
        /**
          * Sets the priority level for the notification.  Defaults to 'low'.
          * @param priority - low | medium | high
         */
        "priority"?: string;
    }
    interface MassProgressBar {
        "isVisible"?: boolean;
        "progress"?: number;
    }
    interface MassQuestionToggle {
        /**
          * Default value of the selected options radio input
         */
        "defaultValue"?: string;
        /**
          * Name of icon to present left of the legend text
         */
        "iconName": string;
        /**
          * Label for the radio group
         */
        "label": string;
        /**
          * Id used for the label and labeledBy attribute for the radiogroup
         */
        "labelId": string;
        /**
          * Dom event emitted when an option is selected
         */
        "onMassChange"?: (event: MassQuestionToggleCustomEvent<{ value: string }>) => void;
        /**
          * Id of the first options input radio and label
         */
        "optionOneId": string;
        /**
          * Label text of the first option
         */
        "optionOneLabel": string;
        /**
          * Value of the first options input radio when selected
         */
        "optionOneValue": string;
        /**
          * Id of the second options input radio and label
         */
        "optionTwoId": string;
        /**
          * Text of the second options label
         */
        "optionTwoLabel": string;
        /**
          * Value of the second options input radio when selected
         */
        "optionTwoValue": string;
        /**
          * Name used to group the input radio options
         */
        "optionsGroupName": string;
    }
    interface MassSelectField {
        /**
          * Error message to be displayed for the select field being used.
         */
        "errorMessage"?: string;
        /**
          * Variable to control wether an error message and icon are displayed.g
         */
        "hasError"?: boolean;
        /**
          * ID of the select field being used.
         */
        "inputId": string;
        /**
          * Variable to control the disabled state of the select field being used.
         */
        "isDisabled"?: boolean;
        /**
          * Label of the select field being used.
         */
        "label": string;
        "labelPosition"?: 'top' | 'left';
        "onValueChange"?: (event: MassSelectFieldCustomEvent<string>) => void;
        /**
          * User's list of options to be rendered in the select field
         */
        "options": string | Array<{ name: string; value: string }>;
        /**
          * Light or Dark version of select field being used.
         */
        "type"?: string;
    }
    interface MassTextField {
        /**
          * Error text for the field.  If provided, and if isValid is false, will be displayed below the field.
         */
        "errorText"?: string;
        /**
          * Help text for the field.  If provided, will be displayed below the field. If undefined or an empty string, will not be displayed.
         */
        "helpText"?: string;
        /**
          * The id of the input.   Pairs the label with the input field.  Must be unique on the page.  Required.  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#id
         */
        "inputId": string;
        /**
          * The type of the input field.   Defaults to "text".  Possible values: "text" | "email" | "password" | "search" | "tel" | "url"  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type
         */
        "inputType"?: string;
        /**
          * The disabled state of the field.  Defaults to false.  If true, the field will be disabled.  If false, the field will be enabled.
         */
        "isDisabled"?: boolean;
        /**
          * Whether the field is required or not for form submission.  Defaults to false.  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#required
         */
        "isRequired"?: boolean;
        /**
          * The validation state of the field.  Possible values: undefined | true | false  Defaults to undefined.  If undefined, the field will have default styling.  If true, the field will be styled as valid.  If false, the field will be styled as invalid.
         */
        "isValid"?: undefined | boolean;
        "labelPosition"?: 'top' | 'left';
        /**
          * The text that appears in the field's label.   Required.
         */
        "labelText": string;
        /**
          * The maximum input length for the field.  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
         */
        "maxLength"?: number;
        /**
          * The minimum input length for the field.  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
         */
        "minLength"?: number;
        "onValueChange"?: (event: MassTextFieldCustomEvent<string>) => void;
        /**
          * The validation pattern for the field.  Regexp string.  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
         */
        "pattern"?: string;
        /**
          * The placeholder text that should appear in the field.  This should **never** be used as a substitute for a label.  Use this only as a hint for the user. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholders_are_not_accessible  Use `labelText` to specify the field's label.  Defaults to undefined.  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder
         */
        "placeholderText"?: string | undefined;
        /**
          * Success text for the field.  If provided, and if isValid is true, will be displayed below the field.
         */
        "successText"?: string;
        /**
          * The value of the field passed from the parent component (if any).  Defaults to an empty string.
         */
        "value"?: string;
    }
    interface MassTextarea {
        /**
          * Text for the error message
         */
        "errorMsg"?: string;
        /**
          * Is disabled state
         */
        "isDisabled"?: boolean;
        /**
          * Is Error state
         */
        "isError"?: boolean;
        /**
          * Is text box required
         */
        "isRequired"?: boolean;
        /**
          * title of input
         */
        "label"?: string;
        /**
          * Max Length of text box
         */
        "maxLength"?: number;
        /**
          * Min Length of text box
         */
        "minLength"?: number;
        /**
          * Handle on change and value
         */
        "onMassChange"?: (event: MassTextareaCustomEvent<any>) => void;
        /**
          * input for placeholder text
         */
        "placeholder"?: string;
        /**
          * custom id for text area
         */
        "textareaId"?: string;
        /**
          * Value of text box
         */
        "value"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "mass-button": MassButton;
        "mass-checkbox-group": MassCheckboxGroup;
        "mass-google-map": MassGoogleMap;
        "mass-icon": MassIcon;
        "mass-image": MassImage;
        "mass-leftmenu": MassLeftmenu;
        "mass-legend": MassLegend;
        "mass-modal": MassModal;
        "mass-notification": MassNotification;
        "mass-progress-bar": MassProgressBar;
        "mass-question-toggle": MassQuestionToggle;
        "mass-select-field": MassSelectField;
        "mass-text-field": MassTextField;
        "mass-textarea": MassTextarea;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mass-button": LocalJSX.MassButton & JSXBase.HTMLAttributes<HTMLMassButtonElement>;
            "mass-checkbox-group": LocalJSX.MassCheckboxGroup & JSXBase.HTMLAttributes<HTMLMassCheckboxGroupElement>;
            "mass-google-map": LocalJSX.MassGoogleMap & JSXBase.HTMLAttributes<HTMLMassGoogleMapElement>;
            "mass-icon": LocalJSX.MassIcon & JSXBase.HTMLAttributes<HTMLMassIconElement>;
            "mass-image": LocalJSX.MassImage & JSXBase.HTMLAttributes<HTMLMassImageElement>;
            "mass-leftmenu": LocalJSX.MassLeftmenu & JSXBase.HTMLAttributes<HTMLMassLeftmenuElement>;
            "mass-legend": LocalJSX.MassLegend & JSXBase.HTMLAttributes<HTMLMassLegendElement>;
            "mass-modal": LocalJSX.MassModal & JSXBase.HTMLAttributes<HTMLMassModalElement>;
            "mass-notification": LocalJSX.MassNotification & JSXBase.HTMLAttributes<HTMLMassNotificationElement>;
            "mass-progress-bar": LocalJSX.MassProgressBar & JSXBase.HTMLAttributes<HTMLMassProgressBarElement>;
            "mass-question-toggle": LocalJSX.MassQuestionToggle & JSXBase.HTMLAttributes<HTMLMassQuestionToggleElement>;
            "mass-select-field": LocalJSX.MassSelectField & JSXBase.HTMLAttributes<HTMLMassSelectFieldElement>;
            "mass-text-field": LocalJSX.MassTextField & JSXBase.HTMLAttributes<HTMLMassTextFieldElement>;
            "mass-textarea": LocalJSX.MassTextarea & JSXBase.HTMLAttributes<HTMLMassTextareaElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
