import { Component, Host, Prop, h, Watch, Element } from '@stencil/core';


@Component({
  tag: 'mass-notification',
  styleUrl: 'mass-notification.scss',
  shadow: true
})
export class Notification {

  /**
   * Reference to the host element for purposes of using standard DOM methods and events.
   */
  @Element() hostElement: HTMLElement;

  /**
   * Sets the heading level for the <h*> tag.
   * @param {number} headingLevel - A number between 1 - 6
   */
  @Prop() headingLevel!: number;

  @Watch("headingLevel")
  /**
   * Validates that the heading level is a number between 1 and 6.
   * 
   * Throws an error if the number is out of range.
   * @param newValue | number
   * @returns void
   */
  validateHeadingLevel(newValue: number): void {
    const errorMessage = `${this.hostElement.tagName}: headingLevel must be a number between 1 and 6.`;

    const isValid = typeof newValue === 'number' && (newValue >= 1 && newValue <= 6);
    if (!isValid) {
        throw new Error(errorMessage);
    }
  }

  /**
   * Sets the text for the heading in the notification.
   * @param {string} headingText
   */
  @Prop() headingText!: string;

  @Watch("headingText")
  /**
   * Validates that the heading text is a non empty string.
   * 
   * Throws an error if the value is an empty string.
   * @param newValue | string
   * @returns void
   */
  validateHeadingText(newValue: string): void {
    const errorMessage = `${this.hostElement.tagName}: headingText must be a non empty string.`;

    const isValid = typeof newValue === 'string' && (newValue.length > 0);
    if (!isValid) {
        throw new Error(errorMessage);
    }
  }

  /**
   * Sets the icon to be displayed with the notification.
   * @param {string} iconName
   */
  @Prop() iconName!: string;

  @Watch("iconName")
  /**
   * Validates whether the value is a string in lower_snake_case.
   *
   * @param newValue | string
   * @returns boolean | true if the value is a string in lower_snake_case, false if the value is not a string in lower_snake_case
   */
  isLowerSnakeCaseString(newValue: string): boolean {
    return typeof newValue === 'string' && !!newValue.match(/^[a-z0-9]+(?:_[a-z0-9]+)*$/);
  }

  /**
   * Sets the priority level for the notification.
   * 
   * Defaults to 'low'.
   * 
   * @param {string} priority - low | medium | high
   */
  @Prop() priority: string = "low";

  @Watch("priority")
  /**
   * Validates whether the provided priority is an allowed value.
   * 
   * Throws an error if priority is not an allowable value.
   * 
   * @param newValue | string
   * @returns void
   */
  validatePriorityLevel(newValue: string): void {
    const errorMessage = `${this.hostElement.tagName}: priority must be either low, medium, or high.`;
    const allowableValues = ["low", "medium", "high"];

    const isValid = allowableValues.includes(newValue);

    if (!isValid) {
      throw new Error(errorMessage);
    }
  }

  /**
   * The alt text that should be announced to screen readers and other assistive technology.
   *
   * Used in the `aria-label` attribute of the icon.
   *
   * Works with the `isPresentational` prop.
   */
  @Prop() altText!: string;

  @Watch("altText")
  /**
   * Validates that the alt text is a non empty string.
   * 
   * Throws an error if the value is an empty string.
   * @param newValue | string
   * @returns void
   */
  validateAltText(newValue: string): void {
    const errorMessage = `${this.hostElement.tagName}: altText must be a non empty string.`;

    const isValid = typeof newValue === 'string' && (newValue.length > 0);
    if (!isValid) {
        throw new Error(errorMessage);
    }
  }

  /**
   * Lifecycle method called when the component is first connected to the DOM (similar to React componentDidMount).
   *
   * https://stenciljs.com/docs/component-lifecycle#componentwillload
   */
  componentWillLoad(): void {
    this.validateHeadingLevel(this.headingLevel);
    this.validateHeadingText(this.headingText);
    this.isLowerSnakeCaseString(this.iconName);
    this.validatePriorityLevel(this.priority);
    this.validateAltText(this.altText);
  }

  /**
   * Map of priority levels to icon color as specified by the design system.
   * For generating the color string to pass to the <mass-icon> component.
   */
  private iconColorPriorityMap =  {
    "low": "neutral-100-black",
    "medium": "semantic-warning-03",
    "high": "semantic-negative-03"
  };

  /**
   * Returns string of classes to be applied to the notification.
   * 
   * @returns string
   */
  setPriorityClass() {
    return `notification ${this.priority}`;
  };

  /**
   * Returns the class to provide for mass-icon to determine the icon color.
   * 
   * @returns string - Class name for the icon color.
   */
  setIconColor() {
    return `${this.iconColorPriorityMap[this.priority]}`;
  }

  /**
   * Dynamically generate heading level based on headingLevel prop.
   * 
   * @returns String - String representation of heading tag to be used in the notification.
   */
  getHeadingLevel() {
    return `h${this.headingLevel}`;
  }

  render() {
    const DynamicHeading = this.getHeadingLevel();
    return (
      <Host>
        <aside class={this.setPriorityClass()}>
          <div class="notification-icon">
            <mass-icon
              altText={this.altText}
              color={this.setIconColor()}
              fill={1}
              iconName={this.iconName}
              isPresentational={false}
            ></mass-icon>
          </div>
          <div class="notification-content">
              <DynamicHeading class="notification-header">{this.headingText}</DynamicHeading>
            <div class="notification-body">
              <slot>
              </slot>
            </div>
          </div>
        </aside>
      </Host>
    );
  }
}