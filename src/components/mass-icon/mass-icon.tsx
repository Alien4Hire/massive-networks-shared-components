import { Component, Host, Prop, h, Element, Watch, State } from '@stencil/core';
// import * as iconList from './icon-list/icon-list';
import GithubIcon from './icons/github.svg';
@Component({
  tag: 'mass-icon',
  styleUrl: 'mass-icon.scss',
  shadow: true,
})
export class Icon {
  @Element() hostElement: HTMLElement;

  /**
   * The name of the icon, in lower_snake_case.
   *
   * This is the name of the icon as it appears in the Material Symbols library in Google Fonts.
   *
   * Example: Chevron Right (chevron_right) https://fonts.google.com/icons?selected=Material+Symbols+Outlined:chevron_right:FILL@0;wght@400;GRAD@0;opsz@24
   */
  @Prop() iconName!: string;

  @Watch('iconName')
  /**
   * Validates the iconName attribute.
   *
   * Throws an error if the iconName attribute is not a string, is an empty string, or is not in lower_snake_case.
   *
   * @param newValue | string
   * @returns void
   */
  validateIconName(newValue: string): void {
    const errorMessage = `${this.hostElement.tagName}: iconName must be a non-empty string in lower_snake_case.`;

    const isValid = this.isNonEmptyString(newValue) && this.isLowerSnakeCaseString(newValue);
    if (!isValid) {
      throw new Error(errorMessage);
    }
  }

  /**
   * Validates whether the value is a non-empty string.
   *
   * @param newValue | string
   * @returns boolean | true if the value is a non-empty string, false if the value is not a string or is an empty string
   */
  isNonEmptyString(newValue: string): boolean {
    return typeof newValue === 'string' && newValue.trim() !== '';
  }

  /**
   * Validates whether the value is a string in lower_snake_case.
   *
   * @param newValue | string
   * @returns boolean | true if the value is a string in lower_snake_case, false if the value is not a string in lower_snake_case
   */
  isLowerSnakeCaseString(newValue: string): boolean {
    return typeof newValue === 'string' && RegExp(/^[a-z0-9]+(?:_[a-z0-9]+)*$/).test(newValue);
  }

  /**
   * The alt text that should be announced to screen readers and other assistive technology.
   *
   * Used in the `aria-label` attribute of the icon.
   *
   * Works with the `isPresentational` prop.
   */
  @Prop() altText: string;

  /**
   * Determines whether the icon should be announced to screen readers and other assistive technology.
   *
   * Defaults to true.
   *
   * Works with the `altText` prop.
   *
   * If true, sets the `role="presentation"` attribute on the icon and the `aria-label` attribute to undefined. The icon will not be announced.
   * If false, sets the `role` attribute to undefined and the `aria-label` attribute to the value of the `altText` prop. The icon will be announced using the value of iconAltText prop.
   */
  @Prop() isPresentational: boolean = true;

  @Watch('isPresentational')
  /**
   * Requires the altText prop if isPresentational is false.
   *
   * Throws an error if isPresentational is false and altText prop is not non-empty string.
   */
  conditionallyRequireAltText(newValue: string): void {
    const errorMessage = `${this.hostElement.tagName}: altText must be a non-empty string if isPresentational is false.`;

    const isValid = !this.isPresentational && this.isNonEmptyString(newValue);
    if (!isValid) {
      throw new Error(errorMessage);
    }
  }

  /**
   * Lifecycle method called when the component is first connected to the DOM (similar to React componentDidMount).
   *
   * https://stenciljs.com/docs/component-lifecycle#componentwillload
   */
  async componentWillLoad() {
    const baseUrl = 'https://maps.massivenetworks.com/images/';
    try {
      const IconSVGList = {
        github: GithubIcon,
      };
      const urlList = {
        fiber: `${baseUrl}fiber.png`,
        wireless: `${baseUrl}wireless.png`,
        ethernet: `${baseUrl}ethernet.png`,
        coax: `${baseUrl}coax.png`,
        markerPurple: 'http://maps.google.com/mapfiles/kml/paddle/blu-circle-lv.png',
        markerGreen: 'http://maps.google.com/mapfiles/kml/paddle/grn-circle-lv.png',
        markerOrange: 'http://maps.google.com/mapfiles/kml/paddle/ylw-circle-lv.png',
        markerRed: 'http://maps.google.com/mapfiles/kml/paddle/red-circle-lv.png',
        markerWhite: `${baseUrl}wht-circle-lv.png`,
        wifi: `${baseUrl}wifi.png`,
        formLogo: `https://res.cloudinary.com/dghsmwkfq/image/upload/v1702289962/aykvrxst0co4fmupzhx1.png`,
      };
      this.svgContent = IconSVGList[this.iconName];
      this.url = urlList[this.iconName];
      console.log(this.url, urlList[this.iconName])
      console.log(this.iconName)
      if (!this.svgContent && !this.url) {
        this.validateIconName(this.iconName);
        !this.isPresentational && this.conditionallyRequireAltText(this.altText);
      }
    } catch (error) {
      console.warn(`Failed to load SVG for icon: ${this.iconName}`, error);
    }
  }

  fillSvgContent(svgContent: string) {
    return svgContent.replace(/fill="#000000"/g, `fill="${this.color}"`);
  }
  /**
   * The color of the icon.
   *
   * Maps to the class names in `/src/common/scss/colors.scss`, which are driven by the names in the Design Tokens defined in Figma.
   *
   * Used in the `class` attribute of the icon.
   *
   * Color page in Figma: https://www.figma.com/file/DM0lok3Yv46sK6LiJflDrm/mass-Hydrogen-Design-System?type=design&node-id=273-5&mode=design
   */
  @Prop() color: string = 'neutral-black-100';

  /**
   * The style of the icon.
   *
   * Maps to the font styles in the Material Symbols library in Google Fonts.
   *
   * Possible values: "rounded" | "sharp" | "outlined"
   *
   * https://fonts.google.com/icons
   */
  @Prop() iconStyle: string = 'rounded';

  /**
   * Optical size of the font. Used in the `font-variation-settings` CSS property set via the icon's `style` attribute.
   *
   * Allows the image to look the same at different font sizes by adjusting the thickness of the lines.
   *
   * https://m3.material.io/styles/icons/applying-icons#b41cbc01-9b49-4a44-a525-d153d1ea1425
   */
  @Prop() opticalSize: number = 24;

  /**
   * Weight of the font. Used in the `font-variation-settings` CSS property set via the `icon's style` attribute.
   *
   * Possible values: 100-700, increments of 100.
   *
   * Defaults to 400 (Regular).
   *
   * 100: Thin, 200: Extra Light, 300: Light, 400: Regular, 500: Medium, 600: Semi Bold, 700: Bold
   *
   * https://m3.material.io/styles/icons/applying-icons#d7f45762-67ac-473d-95b0-9214c791e242
   */
  @Prop() weight: number = 400; // 100-700, increments of 100

  /**
   * The fill state of the icon. Used in the `font-variation-settings` CSS property set via the icon's `style` attribute.
   *
   * Defaults to 0 (outlined).
   *
   * Possible values: 0 (outlined) | 1 (filled)
   *
   * https://m3.material.io/styles/icons/applying-icons#ebb3ae7d-d274-4a25-9356-436e82084f1f
   */
  @Prop() fill: number = 0;

  /**
   * The grade of the icon. Used in the `font-variation-settings` CSS property set via the icon's `style` attribute.
   *
   * Defaults to 0.
   *
   * Possible values: -25 to 100.
   *
   * https://m3.material.io/styles/icons/applying-icons#3ad55207-1cb0-43af-8092-fad2762f69f7
   */
  @Prop() grade: number = 0;

  @State() svgContent?: string;
  @State() url?: string;

  /**
   * Generates the class name for the icon style, as specified in Google Fonts.
   *
   * Works with the `iconStyle` and `color` props.
   *
   * https://fonts.google.com/icons
   *
   * @returns string | class name for the icon style
   */
  getIconStyleClass(): string {
    return `material-symbols-${this.iconStyle} ${this.color}`;
  }

  /**
   * Generates the font-variation-settings CSS property for the icon.
   *
   * Works with the `fill`, `weight`, `grade`, and `opticalSize` props.
   *
   * @returns string | font-variation-settings CSS property for the icon
   */
  getFontVariationStyle(): any {
    return {
      fontVariationSettings: `'FILL' ${this.fill ? 1 : 0}, 'wght' ${this.weight}, 'GRAD' ${this.grade}, 'opsz' ${this.opticalSize}`,
    };
  }

  render() {
    if (this.svgContent) {
      return (
        <Host>
          <div innerHTML={this.svgContent}></div>
        </Host>
      );
    }

    if (this.url) {
      console.log('i have url', this.url)
      return (
        <Host>
          <img src={this.url} />
        </Host>
      );
    }

    return (
      <Host>
        <span
          aria-label={!this.isPresentational ? this.altText : undefined}
          class={this.getIconStyleClass()}
          role={this.isPresentational ? 'presentation' : undefined}
          style={this.getFontVariationStyle()}
        >
          {this.iconName}
        </span>
      </Host>
    );
  }
}
