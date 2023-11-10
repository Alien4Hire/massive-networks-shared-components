import { Component, Element, Prop, h, Host, Watch, EventEmitter, Event } from '@stencil/core';
import { isStringNonEmpty, throwIfInvalid } from '../../utils/validators';

import '../mass-icon/mass-icon';

@Component({
  tag: 'mass-select-field',
  styleUrl: 'mass-select-field.scss',
  shadow: true,
})
export class SelectField {
  @Element() hostElement: HTMLElement;

  /**
   * ID of the select field being used.
   */
  @Prop() inputId!: string;

  @Event() valueChange: EventEmitter<string>;

  handleSelectChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.valueChange.emit(select.value);
  }

  /**
   * Validates the inputId attribute.
   *
   * Throws an error if the inputId attribute is not a string or is an empty string.
   */
  @Watch('inputId')
  watchInputId(newValue: string): void {
    throwIfInvalid(isStringNonEmpty, { value: newValue }, `${this.hostElement.tagName}: inputId must be a non-empty string.`);
  }

  /**
   * Label of the select field being used.
   */
  @Prop() label!: string;

  @Prop() labelPosition: 'top' | 'left' = 'top';

  /**
   * Validates the label attribute.
   *
   * Throws an error if the label attribute is not a string or is an empty string.
   */
  @Watch('label')
  watchLabel(newValue: string): void {
    throwIfInvalid(isStringNonEmpty, { value: newValue }, `${this.hostElement.tagName}: label must be a non-empty string.`);
  }

  componentWillRender(): void {
    throwIfInvalid(
      isStringNonEmpty,
      {
        value: this.inputId,
      },
      `${this.hostElement.tagName}: inputId must be a non-empty string.`,
    );

    throwIfInvalid(
      isStringNonEmpty,
      {
        value: this.label,
      },
      `${this.hostElement.tagName}: label must be a non-empty string.`,
    );

    this.validateOptions(this.options);
  }

  /**
   * User's list of options to be rendered in the select field
   */
  @Prop() options!: string | Array<{ name: string; value: string }>;

  /**
   * User's sanitized custom options for the select field
   */
  _options: Array<{ name: string; value: string }>;

  /**
   * Validates the lauserSelectOptions array.
   *
   * Throws an error if the array is empty
   */
  @Watch('options')
  validateOptions(newValue: string | Array<{ name: string; value: string }>): void {
    const isOptionsString = typeof this.options === 'string';
    //console.log('isOptionsString: ', isOptionsString);
    isOptionsString && throwIfInvalid(isStringNonEmpty, { value: newValue }, `${this.hostElement.tagName}: options must be non-empty.`);
    //console.log('options: ', this.options);
    //console.log('newValue: ', newValue);
    //console.log('jsonparse: ', JSON.parse(this.options as string));
    this._options = isOptionsString ? JSON.parse(this.options as string) : newValue;
    //console.log('this._options (inside validate): ', this._options);
    this._options.forEach(option => {
      throwIfInvalid(this.doesObjectConformToSchema, { object: option, schema: { name: '', value: '' } }, `${this.hostElement.tagName}: options not formatted properly.`);
    });
  }

  /**
   * Validates whether the value is an object that conforms to a schema.
   *
   * @param {object} options | object containing the object to be validated and the schema to validate against
   * @returns {boolean} | true if the object contains all the keys in the schema, false otherwise
   */
  doesObjectConformToSchema = (options: { object: Object; schema: Object }): boolean => {
    const { object, schema } = { ...options };
    const objectKeys = Object.keys(object);
    const schemaKeys = Object.keys(schema);
    return objectKeys.every(key => schemaKeys.includes(key));
  };

  doesStringDeserializeToArrayOfExpectedObjects = (options: { value: string; schema: Object }) => {
    const { value, schema } = { ...options };
    const parsedValue = JSON.parse(value);
    return Array.isArray(parsedValue) && parsedValue.every(value => this.doesObjectConformToSchema({ object: value, schema }));
  };

  /**
   * Light or Dark version of select field being used.
   */
  @Prop() type: string;

  /**
   * Variable to control wether an error message and icon are displayed.g
   */
  @Prop() hasError: boolean;

  /**
   * Error message to be displayed for the select field being used.
   */
  @Prop() errorMessage: string;

  /**
   * Variable to control the disabled state of the select field being used.
   */
  @Prop() isDisabled: boolean;

  /**
   * Render function for the error message and icon under the select field.
   */
  renderError() {
    if (this.hasError) {
      return (
        <div class="error-container">
          <span class="error-message">
            <mass-icon iconName="report_problem" iconStyle="rounded" color="semantic-negative-03" />
            {this.hasError} {this.errorMessage}
          </span>
        </div>
      );
    }

    return null;
  }

  /**
   * Agreggates class names based on incoming property values, to be applied at the time of render.
   */
  getClassList(): string {
    let classList = this.type;
    if (this.isDisabled) classList = [classList, 'disabled'].join(' ');
    if (this.hasError) classList = [classList, 'error'].join(' ');

    return classList;
  }

  render() {
    return (
      <Host>
        <div class={`position-${this.labelPosition}`}>
          <label htmlFor={this.inputId} class={this.getClassList()}>
            {this.label}
          </label>
          <div class="select-container">
            <select id={this.inputId} class={this.getClassList()} name={this.inputId} disabled={this.isDisabled} onChange={(event) => this.handleSelectChange(event)}>
              {this._options.map(elem => (
                <option value={elem.name}>{elem.value}</option>
              ))}
            </select>
          </div>
          {this.renderError()}
        </div>
      </Host>
    );
  }
}
