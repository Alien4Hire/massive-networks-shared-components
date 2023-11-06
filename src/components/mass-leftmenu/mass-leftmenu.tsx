import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'mass-leftmenu',
  styleUrl: 'mass-leftmenu.scss',
  shadow: true,
})
export class LeftMenu {
  /**
   * Reference to the host element for purposes of using standard DOM methods and events.
   */
  @Element() hostElement: HTMLElement;

  render() {
    return (
      <Host>
        <aside class="left-menu">
          <slot></slot>
        </aside>
      </Host>
    );
  }
}
