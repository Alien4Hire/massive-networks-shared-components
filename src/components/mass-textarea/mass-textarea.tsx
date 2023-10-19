import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';
import '../mass-icon/mass-icon';

@Component({
  tag: 'mass-textarea',
  styleUrl: 'mass-textarea.scss',
  shadow: true,
})
export class MassTextarea {

  /**
   * input for placeholder text
   */
  @Prop() placeholder: string = '';

  /**
   * title of input
   */
  @Prop() label: string = '';

  /**
   * custom id for text area
   */
  @Prop() textareaId: string = 'my-textarea';

  /**
   * Is disabled state
   */
  @Prop() isDisabled: boolean = false;

  /**
   * Is Error state
   */
  @Prop() isError: boolean = false;

  /**
   * Text for the error message
   */
  @Prop() errorMsg: string = "Error explanation text";

  /**
   * Min Length of text box
   */
  @Prop() minLength: number = 0;

  /**
   * Max Length of text box
   */
  @Prop() maxLength: number = 250;

    /**
   * Is text box required
   */
  @Prop() isRequired: boolean = false;

    /**
   * Value of text box
   */
  @Prop() value: string = '';

  /**
   * Handle on change and value
   */
  @Event() massChange: EventEmitter;


  renderError() {
    if (this.isError) {
      return (
        <div class="error-container">
          <mass-icon iconName="warning" fill={1} isPresentational={false} iconStyle="rounded" color="semantic-negative-03" />
          <span>{this.errorMsg}</span>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <Host>
        {this.label && (
          <label htmlfor={this.textareaId}>{this.label}</label>
        )}
        <textarea
          class={{"my-textarea": true, "textarea-error": this.isError}}
          id={this.textareaId}
          name={this.textareaId}
          value={this.value}
          onInput={(event) => this.massChange.emit(event)}
          disabled={this.isDisabled}
          placeholder={this.placeholder}
          minLength={this.minLength}
          maxLength={this.maxLength}
          required={this.isRequired}
        />
        {this.renderError()}
      </Host>
    );
  }
}
