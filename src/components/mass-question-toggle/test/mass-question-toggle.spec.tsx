import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { QuestionToggle } from '../mass-question-toggle';

describe('question-toggle', () => {
  xit('root has the radiogroup role', async () => {
    const page = await newSpecPage({
      components: [QuestionToggle],
      template: () => (
        <mass-question-toggle
          iconName="emoji_people"
          label="Group Label"
          labelId="group-label"
          optionsGroupName="group-name"
          optionOneId="no-radio"
          optionOneLabel="No"
          optionOneValue="no"
          optionTwoId="yes-radio"
          optionTwoLabel="Yes"
          optionTwoValue="yes"
        ></mass-question-toggle>
      ),
    });
    expect(page.root).toEqualAttribute('role', 'radiogroup');
  });
  it('root emits massChange with value no, when option 1 radio takes change event', async () => {
    const page = await newSpecPage({
      components: [QuestionToggle],
      template: () => (
        <mass-question-toggle
          iconName="emoji_people"
          label="Group Label"
          labelId="group-label"
          optionsGroupName="group-name"
          optionOneId="no-radio"
          optionOneLabel="No"
          optionOneValue="no"
          optionTwoId="yes-radio"
          optionTwoLabel="Yes"
          optionTwoValue="yes"
        ></mass-question-toggle>
      ),
    });
    const spy = jest.fn();
    page.root.addEventListener('massChange', spy);

    const optionNo = page.root.shadowRoot.querySelector('input[value="no"]');
    optionNo.dispatchEvent(new Event('change'));

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { value: 'no' },
      }),
    );
  });
  it('root emits massChange with value yes, when option 2 radio takes change event', async () => {
    const page = await newSpecPage({
      components: [QuestionToggle],
      template: () => (
        <mass-question-toggle
          iconName="emoji_people"
          label="Group Label"
          labelId="group-label"
          optionsGroupName="group-name"
          optionOneId="no-radio"
          optionOneLabel="No"
          optionOneValue="no"
          optionTwoId="yes-radio"
          optionTwoLabel="Yes"
          optionTwoValue="yes"
        ></mass-question-toggle>
      ),
    });
    const spy = jest.fn();
    page.root.addEventListener('massChange', spy);

    const optionYes = page.root.shadowRoot.querySelector('input[value="yes"]');
    optionYes.dispatchEvent(new Event('change'));

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { value: 'yes' },
      }),
    );
  });
});
