import { Component, Prop, Event, EventEmitter, h, State, Host } from '@stencil/core';
import '../mass-icon/mass-icon';

@Component({
  tag: 'mass-checkbox-group',
  styleUrl: 'mass-checkbox-group.scss',
  shadow: true,
})
export class CheckboxGroup {
  /**
   * Internal state for the checkbox element
   */
  @State() _checked: boolean[] = [];

  /**
   * Indicates whether the checkbox is checked or not.
   * Defaults to false.
   */
  @Prop() checked: boolean | boolean[] = false;

  /**
   * The text that will be displayed beside the checkbox.
   */
  @Prop() text: string | string[];

  /**
   * The label title that will be displayed above the checkbox options.
   * Defaults to "".
   */
  @Prop() label: string = "";

  /**
   * Provide custom textbox id string.
   */
  @Prop() checkboxId!: string;

  /**
   * Is field disabled.
   */
  @Prop() isDisabled: boolean = false;

  /**
   * Indicates if there is an error.
   * If true, an error message and icon will be displayed below the checkbox.
   * Defaults to false.
   */
  @Prop() isError: boolean = false;

  /**
   * The error message to display when isError is true.
   * Defaults to "Error Explanation Text".
   */
  @Prop() errorMsg?: string;

  /**
   * The function to be called when changes are made to the checkbox state.
   */
  @Event() massChange: EventEmitter;

  componentWillLoad() {
    const checkedArray = Array.isArray(this.checked) ? this.checked : [this.checked];
    this._checked = checkedArray;
  }

  handleChange(event, index) {
    this._checked = [...this._checked.slice(0, index), event.target.checked, ...this._checked.slice(index + 1)];
    this.massChange.emit(this._checked);
  }

  /**
   * Renders the HTML structure of the component.
   *
   * @return void
   */
  render() {
    const texts = Array.isArray(this.text) ? this.text : [this.text];

    return (
      <Host>
        <fieldset class="checkbox-wrapper">
          {this.label && <legend class="checkbox-title title-margin bottom-margin">{this.label}</legend>}
          {texts.map((text, index) => (
            <label class={"checkbox-label" + (index !== texts.length - 1 ? " label-margin-bottom" : "")} htmlfor={`${this.checkboxId}-${index}`}>
              <input
                type="checkbox"
                id={`${this.checkboxId}-${index}`}
                name={`${this.checkboxId}-${index}`}
                class="checkbox-input"
                disabled={this.isDisabled}
                checked={this._checked[index]}
                onChange={(event) => this.handleChange(event, index)}
              />
              <div class="checkbox-holder">
                {this._checked[index] ? (
                  <div class={"checked-icon " + (!this.isDisabled ? "primary-check" : "neutral-disabled")}>
                    <mass-icon iconName="check" iconStyle="rounded" color="neutral-00-white" />
                  </div>
                ) : (
                  <div class={this.isDisabled ? "unchecked-icon-disabled" : "unchecked-icon"}></div>
                )}
              </div>
              <span class="checkbox-text">{text}</span>
            </label>
          ))}
          {this.isError && (
            <div class="error-wrapper">
              <mass-icon iconName="warning" fill={1} isPresentational={false} iconStyle="rounded" color="semantic-negative-03" />
              <span class="error-text">{this.errorMsg}</span>
            </div>
          )}
        </fieldset>
      </Host>
    );
  }
}

