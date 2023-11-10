import { Component, Element, Host, Prop, Watch, h, Event, EventEmitter } from '@stencil/core';
import { isStringAllowed, isStringNonEmpty, throwIfInvalid } from '../../utils/validators';

@Component({
  tag: 'mass-text-field',
  styleUrl: 'mass-text-field.scss',
  shadow: true
})

export class TextField {

  /**
   * Reference to the host element for use within the class.
   */
  @Element() hostElement: HTMLElement;

  /**
   * The id of the input. 
   * 
   * Pairs the label with the input field. 
   * Must be unique on the page.
   * 
   * Required.
   * 
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#id
   */
  @Prop({reflect: true}) inputId!: string;

  @Event() valueChange: EventEmitter<string>;

  handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
  }

   /**
   * Validates the inputId attribute.
   * 
   * Throws an error if the inputId attribute is not a string or is an empty string.
   */
  @Watch("inputId")
  watchInputId(newValue: string): void {
    throwIfInvalid(isStringNonEmpty,  {value: newValue}, `${this.hostElement.tagName}: inputId must be a non-empty string.`);
  }

  /**
   * Lifecycle method called when the component is first connected to the DOM (similar to React componentDidMount).
   * 
   * https://stenciljs.com/docs/component-lifecycle#componentwillload
   */
  componentWillLoad(): void {
    throwIfInvalid(
      isStringNonEmpty, 
      {
        value: this.inputId
      }, 
      `${this.hostElement.tagName}: inputId must be a non-empty string.`
    );
    throwIfInvalid(
      isStringNonEmpty, 
      {
        value: this.labelText
      }, 
      `${this.hostElement.tagName}: labelText must be a non-empty string.`
    );
    throwIfInvalid(
      isStringAllowed, 
      {
        value: this.inputType, 
        allowedValues: ["text", "email", "password", "search", "tel", "url"]
      }, 
      `${this.hostElement.tagName}: inputType must be one of: text | email | password | search | tel | url`
    )
  }

  /**
   * The text that appears in the field's label. 
   * 
   * Required.
   */
  @Prop() labelText!: string;

  /**
   * Validates the labelText attribute.
   * 
   * Throws an error if the labelText attribute is not a string or is an empty string.
   * @param newValue | string
   * @returns boolean | 
   */
   @Watch("labelText")
   watchLabelText(newValue: string): void {
    throwIfInvalid(
      isStringNonEmpty, 
      {
        value: newValue
      }, 
      `${this.hostElement.tagName}: labelText must be a non-empty string.`
    );
   }

  /**
   * The placeholder text that should appear in the field.
   * 
   * This should **never** be used as a substitute for a label. 
   * Use this only as a hint for the user. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholders_are_not_accessible
   * 
   * Use `labelText` to specify the field's label.
   * 
   * Defaults to undefined.
   * 
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder
   */
  @Prop() placeholderText: string | undefined = undefined;

  /**
   * The type of the input field. 
   * 
   * Defaults to "text".
   * 
   * Possible values: "text" | "email" | "password" | "search" | "tel" | "url"
   * 
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type
   */
  @Prop() inputType: string = "text";

  @Watch("inputType")
  watchInputType(newValue: string): void {
    throwIfInvalid(
      isStringAllowed, 
      {
        value: newValue, 
        allowedValues: ["text", "email", "password", "search", "tel", "url"]
      }, 
      `${this.hostElement.tagName}: inputType must be one of: text | email | password | search | tel | url`
    )
  }

  /**
   * The value of the field passed from the parent component (if any).
   * 
   * Defaults to an empty string.
   */
  @Prop({reflect: true}) value: string = "";

  /**
   * The disabled state of the field.
   * 
   * Defaults to false.
   * 
   * If true, the field will be disabled.
   * 
   * If false, the field will be enabled.
   */
  @Prop() isDisabled: boolean = false;

  /**
   * The validation state of the field.
   * 
   * Possible values: undefined | true | false
   * 
   * Defaults to undefined.
   * 
   * If undefined, the field will have default styling.
   * 
   * If true, the field will be styled as valid.
   * 
   * If false, the field will be styled as invalid.
   */
  @Prop() isValid: undefined | boolean = undefined;

  @Watch("isValid")
  watchIsValid() {
    this.getAriaDescribedBy();
    this.getAriaErrorMessage();
    this.getAriaInvalid();
  }
  /**
   * Whether the field is required or not for form submission.
   * 
   * Defaults to false.
   * 
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#required
   */
  @Prop() isRequired: boolean = false;

  /**
   * The minimum input length for the field.
   * 
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
   */
  @Prop() minLength: number;

  /**
   * The maximum input length for the field.
   * 
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
   */
  @Prop() maxLength: number;

  /**
   * The validation pattern for the field.
   * 
   * Regexp string.
   * 
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
   */
  @Prop() pattern: string;

  /**
   * Help text for the field.
   * 
   * If provided, will be displayed below the field.
   * If undefined or an empty string, will not be displayed.
   * 
   */
  @Prop() helpText: string;

  /**
   * Error text for the field.
   * 
   * If provided, and if isValid is false, will be displayed below the field.
   * 
   */
  @Prop() errorText: string;

  /**
   * Success text for the field.
   * 
   * If provided, and if isValid is true, will be displayed below the field.
   * 
   */
  @Prop() successText: string;

  @Prop() labelPosition: 'top' | 'left' = 'top';

  private helpId: string = `${this.inputId}-help`;
  private errorId: string = `${this.inputId}-error`;
  private successId: string = `${this.inputId}-success`;

  /**
   * Gets space-separated list of ids of elements that describe this element.
   * 
   * Used within the describedby attribute.
   * 
   * @returns string | undefined
   */
  getAriaDescribedBy(): string | undefined {
    let ariaDescribedBy = [];

    if (this.isValid === false && !!this.errorText) {
      ariaDescribedBy = [...ariaDescribedBy, this.errorId];
    }

    if (this.isValid === true && !!this.successText) {
      ariaDescribedBy = [...ariaDescribedBy, this.successId];
    }
    
    if(!!this.helpText === true) {
      ariaDescribedBy = [...ariaDescribedBy, this.helpId];
    }

    if (ariaDescribedBy.length === 0) {
      return undefined;
    }
    return ariaDescribedBy.join(" ");
  }
  /**
   * Gets space-separated list of ids of elements that describe this element.
   * 
   * Used within the aria-errormessage attribute.
   * 
   * @returns string | undefined
   */
  getAriaErrorMessage(): string | undefined {
    return this.isValid === false && !!this.errorText ? this.errorId : undefined;
  }
  /**
   * Gets string value to set for aria-invalid attribute.
   * 
   * Used within the aria-invalid attribute.
   * 
   * @returns string | undefined
   */
  getAriaInvalid(): string | undefined {
    return this.isValid === false ? "true" : undefined;
  }

  /**
   * Renders the component HTML.
   * 
   * @returns JSX Element
   */
  render() {
    return (
      <Host>
        <div class={`position-${this.labelPosition}`}>
          <label
            class={`${this.isDisabled &&  "disabled"}`}
            htmlFor={this.inputId}>
            {this.labelText}
            {this.isRequired && <abbr title="Required">*</abbr>}
          </label>
          <input
            aria-describedby={this.getAriaDescribedBy()}
            aria-invalid={this.getAriaInvalid()}
            aria-errormessage={this.getAriaErrorMessage()}
            disabled={this.isDisabled}
            id={this.inputId}
            maxLength={this.minLength}
            minLength={this.maxLength}
            name={this.inputId}
            type={this.inputType}
            pattern={this.pattern}
            placeholder={this.placeholderText}
            required={this.isRequired}
            value={this.value}
            onInput={(event) => this.handleInputChange(event)}
          />
        </div>
        {!!this.helpText === true && <span id={this.helpId} class="help-text">{this.helpText}</span>}
        {this.isValid === false && !!this.errorText && 
          <span id={this.errorId} class="error-text">
            <mass-icon 
              iconName="warning" 
              iconStyle="rounded" 
              fill={1} 
              color="semantic-negative-03"></mass-icon>
            {this.errorText}
          </span>
        }
        {this.isValid === true && !!this.successText && 
          <span id={this.successId} class="success-text">
            <mass-icon 
            iconName="check_circle" 
            iconStyle="rounded" 
            fill={1} 
            color="semantic-positive-03"></mass-icon>
            {this.successText}
          </span>
        }
      </Host>
    );
  }
}