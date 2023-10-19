import { Component, Host, Prop, h, Watch, Element } from '@stencil/core';

@Component({
  tag: 'mass-image',
  styleUrl: 'mass-image.scss',
  shadow: true
})
export class MassImage {

  @Element() hostElement: HTMLElement;

  /**
   * Image source, can be a URL or a local image.
   * @param {string} src
   */
  @Prop() src!: string;

  /**
   * Specifies the shape of the image.
   * 
   * Defaults to 'square'.
   * 
   * @param {string} shape - round | square | rounded
   */
  @Prop() shape: string = 'square';

  /**
   * If true, an overlay will darken the image.
   * 
   * Defaults to false.
   * 
   * @param {boolean} overlay
   */
  @Prop() overlay: boolean = false;

  @Watch("shape")
  /**
   * Validates whether the provided shape is an allowed value.
   * 
   * Throws an error if shape is not an allowable value.
   * 
   * @param newValue | string
   * @returns void
   */
  validateShape(newValue: string): void {
    const errorMessage = `${this.hostElement.tagName}: shape must be either round, square, or rounded.`;
    const allowableValues = ["round", "square", "rounded"];

    const isValid = allowableValues.includes(newValue);

    if (!isValid) {
      throw new Error(errorMessage);
    }
  }

  componentWillLoad(): void {
    this.validateShape(this.shape);
  }

  render() {
    const imageClasses = {
      round: 'img-round',
      square: 'img-square',
      rounded: 'img-rounded'
    };
    const displayedSrc = this.src || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/jbQeagAAAAASUVORK5CYII=";

    return (
      <Host>
        <div class={`image-container ${this.overlay ? 'image-overlay' : ''}`}>
          <img src={displayedSrc} alt="" class={imageClasses[this.shape]} />
        </div>
      </Host>
    );
  }
}
