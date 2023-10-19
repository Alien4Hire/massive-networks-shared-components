import { Component, Host, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'mass-question-toggle',
  styleUrl: 'mass-question-toggle.scss',
  shadow: true,
})
export class QuestionToggle {
  /**
   * Default value of the selected options radio input
   */
  @Prop() defaultValue: string;

  /**
   * Name of icon to present left of the legend text
   */
  @Prop() iconName!: string;

  /**
   * Label for the radio group
   */
  @Prop() label!: string;

  /**
   * Id used for the label and labeledBy attribute for the radiogroup
   */
  @Prop() labelId!: string;

  /**
   * Name used to group the input radio options
   */
  @Prop() optionsGroupName!: string;

  /**
   * Label text of the first option
   */
  @Prop() optionOneLabel!: string;

  /**
   * Value of the first options input radio when selected
   */
  @Prop() optionOneValue!: string;

  /**
   * Id of the first options input radio and label
   */
  @Prop() optionOneId!: string;

  /**
   * Text of the second options label
   */
  @Prop() optionTwoLabel!: string;

  /**
   * Value of the second options input radio when selected
   */
  @Prop() optionTwoValue!: string;

  /**
   * Id of the second options input radio and label
   */
  @Prop() optionTwoId!: string;

  /**
   * Dom event emitted when an option is selected
   */
  @Event() massChange: EventEmitter<{ value: string }>;

  optionChangeHandler(value: string) {
    this.massChange.emit({ value });
  }

  render() {
    return (
      <Host>
        <fieldset class="mass-qt_container">
          <div class="mass-qt_icon-legend-container">
            <div class="mass-qt_icon">
              <mass-icon iconName={this.iconName} color="$color-neutral-90" />
            </div>
            <legend class="mass-qt_legend">{this.label}</legend>
          </div>
          <div class="mass-qt_input-container">
            <input
              type="radio"
              id={this.optionOneId}
              name={this.optionsGroupName}
              value={this.optionOneValue}
              onChange={() => this.optionChangeHandler(this.optionOneValue)}
              checked={this.defaultValue === this.optionOneValue}
              class="mass-qt_input"
            />
            <label htmlFor={this.optionOneId} class="mass-qt_input-label">
              {this.optionOneLabel}
            </label>

            <input
              type="radio"
              id={this.optionTwoId}
              name={this.optionsGroupName}
              value={this.optionTwoValue}
              onChange={() => this.optionChangeHandler(this.optionTwoValue)}
              checked={this.defaultValue === this.optionTwoValue}
              class="mass-qt_input"
            />
            <label htmlFor={this.optionTwoId} class="mass-qt_input-label">
              {this.optionTwoLabel}
            </label>
          </div>
        </fieldset>
      </Host>
    );
  }
}
