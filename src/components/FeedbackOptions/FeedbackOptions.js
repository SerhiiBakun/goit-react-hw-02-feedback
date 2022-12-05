import { Button, ButtonWraper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionNames = Object.keys(options).map(option => {
    return option.charAt(0).toUpperCase() + option.slice(1);
  });

  return (
    <ButtonWraper>
      <Button type="button" onClick={onLeaveFeedback}>
        {optionNames[0]}
      </Button>
      <Button type="button" onClick={onLeaveFeedback}>
        {optionNames[1]}
      </Button>
      <Button type="button" onClick={onLeaveFeedback}>
        {optionNames[2]}
      </Button>
    </ButtonWraper>
  );
};
