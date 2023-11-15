import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mass-progress-bar',
  styleUrl: 'mass-progress-bar.scss',
  shadow: true,
})
export class MassProgressBar {
  @Prop() progress: number = 0;
  @Prop() isVisible: boolean = false; 

  render() {
    if (!this.isVisible) {
      return null;
    }

    return (
      <div class="progress-container">
        <div class="progress-bar" style={{ width: `${this.progress}%` }}></div>
        <div class="circle">
          {this.progress}%
        </div>
        <div class="spinner"></div>
      </div>
    );
  }
}
