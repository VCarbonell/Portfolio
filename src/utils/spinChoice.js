const spinChoice = () => {
  const allChoices = document.querySelectorAll('.choices');
  let result;
  const selector = document.querySelector('.selector');
  const selectorPos = selector.getBoundingClientRect();

  allChoices.forEach((choice) => {
    const choicePos = choice.getBoundingClientRect();
    if (!result) {
      result = choice;
    } else {
      const resultPos = result.getBoundingClientRect();
      if (choicePos.bottom < resultPos.bottom && choicePos.top > selectorPos.top) {
        result = choice;
      }
    }
  });
  return (result.innerHTML);
};

export default spinChoice;
