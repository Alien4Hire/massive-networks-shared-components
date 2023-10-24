import { Component, Prop, Event, EventEmitter, Host, h, State, Watch } from '@stencil/core';

@Component({
  tag: 'mass-button',
  styleUrl: 'mass-button.scss',
  shadow: true,
})
export class MassButton {

  /**
   * Select theme of button, color, hover color
   */
  @Prop() type: string = "default";

  /**
   * If true, will have a border-radius of 4px, else will have rounded edges
   */
  @Prop() isRounded: boolean = false;

  /**
   * If true, button will be disabled
   */
  @Prop() isDisabled: boolean = false;

  /**
   * If true, button will have a dropdown icon
   */
  @Prop() isDropdown: boolean = false;

  /**
   * Name of the icon to be displayed on the left side of the button
   */
  @Prop() iconName: string = "";
  @Watch('iconName')
  handleVisibilityChange(newValue: string) {
    this._iconName = newValue;
  }

  /**
   * select size of button small | medium | large
   */
  @Prop() size: string = 'medium';

  /**
   * Event emitted when the button is clicked
   */
  @Event() massClick: EventEmitter;

  @State() hover: boolean = false;
  @State() _iconName: string = this.iconName;

  handleClick(event: Event) {
    this.massClick.emit(event);
  }

  handleEnterHover() {
    this.hover = true
  }

  handleLeaveHover() {
    this.hover = false
  }

  render() {

    const textColor = {
      default: this.hover ? "neutral-90" : "neutral-00-white",
      dark: this.hover ? "neutral-00-white" : "neutral-90",
      github: "neutral-00-white",
      green: this.hover ? "neutral-00-white" : "neutral-90",
      red: this.hover ? "neutral-00-white" : "neutral-90",
    }
    const Rounded = this.isRounded ? "rounded" : "";
    const Dropdown = this.isDropdown ? "dropdown" : "";
    return (
      <Host>
        <button
        onMouseEnter={() => this.handleEnterHover()} 
        onMouseLeave={() => this.handleLeaveHover()} 
        class={`${this.type} ${this.size} ${Rounded} ${Dropdown}`} 
        disabled={this.isDisabled}
        onClick={this.handleClick.bind(this)}>
          {this._iconName && <mass-icon iconName={this.isDropdown ? "expand_more" : this._iconName} fill={1} isPresentational={true} iconStyle="rounded" color={textColor[this.type]} />}
          <p><slot /></p>
        </button>
      </Host>
    );
  }
}
