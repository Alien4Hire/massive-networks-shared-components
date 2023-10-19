import { Component, Prop, Event, EventEmitter, Host, h, Method, State, Watch } from '@stencil/core';

@Component({
  tag: 'mass-modal',
  styleUrl: 'mass-modal.scss',
  shadow: true,
})
export class MassModal {
  
  /**
   * Title of the modal
   */
  @Prop() modalTitle: string = '';

  /**
   * Text for the first button. If null, the button won't render.
   */
  @Prop() firstButtonText: string;

  /**
   * Text for the second button. If null, the button won't render.
   */
  @Prop() secondButtonText: string;

  /**
   * Event emitted when the modal is closed
   */
  @Event() closeModal: EventEmitter;

  /**
   * Event emitted when the first button is clicked
   */
  @Event() firstButtonClicked: EventEmitter;

  /**
   * Event emitted when the second button is clicked
   */
  @Event() secondButtonClicked: EventEmitter;

  /**
   * State to manage the visibility of the modal
   */
  @Prop() isVisible: boolean = false;
  @Watch('isVisible')
  handleVisibilityChange(newValue: boolean) {
    this._isVisible = newValue;
  }

  @State() _isVisible: boolean = this.isVisible;

  @Method()
  async show() {
    this._isVisible = true;
  }

  @Method()
  async hide() {
    this._isVisible = false;
  }

  handleOverlayClick() {
    this.hide();
    this.closeModal.emit();
  }

  handleCloseClick() {
    this.hide();
    this.closeModal.emit();
  }

  handleFirstButtonClick() {
    this.firstButtonClicked.emit();
  }

  handleSecondButtonClick() {
    this.secondButtonClicked.emit();
  }

  @Method()
  async toggleModal(show: boolean) {
    this._isVisible = show;
  }

  render() {
    return this._isVisible ? (
      <Host>
        <div class="overlay" onClick={() => this.handleOverlayClick()}></div>
        <div class="modal">
          <header>
            <h2>{this.modalTitle}</h2>
            <mass-icon iconName="close" onClick={() => this.handleCloseClick()} style={{cursor: 'pointer'}}/>
          </header>
          <section>
            <slot />
          </section>
          <footer>
            {this.secondButtonText && <mass-button type="outline" onClick={() => this.handleSecondButtonClick()}>{this.secondButtonText}</mass-button>}
            {this.firstButtonText && <mass-button onClick={() => this.handleFirstButtonClick()}>{this.firstButtonText}</mass-button>}
          </footer>
        </div>
      </Host>
    ) : null;
  }
}
