import { Component, Prop, Host, h } from '@stencil/core';

export type MassLegendItemType = {
  name: string;
  color: string;
  title: string;
}

@Component({
  tag: 'mass-legend',
  styleUrl: 'mass-legend.scss',
  shadow: true,
})

export class MassLegend {
  @Prop() items: MassLegendItemType[] = [];
  render() {
    return (
      <Host>
        <div class="legend-container">
          {this.items.map(item => (
            <div class="legend-item">
              <mass-icon iconName={item.name} fill={1} isPresentational={true} iconStyle="rounded" color={item.color} />
              <span class="item-name">{item.title}</span>
            </div>
          ))}
        </div>
      </Host>
    );
  }
}
