/*
This a test component that was added so we have something to run through the pipeline.
It just displays some text.

 */


import { Component, Host, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * Get the text of the name in a string format
   *
   * @private
   * @return string
   */
  private getText(): string {
    return format(this.first, this.middle, this.last);
  }


  /**
   * Renders the HTML from the component
   *
   * @return void
   */
  render() {
    return (
      <Host>
        <h1>Hello, World!</h1> 
        <p>I'm {this.getText()}</p>
      </Host>
    );
  }
}
