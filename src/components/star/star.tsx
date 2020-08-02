import * as React from 'react';

interface Props {
  ratingValue: number;
  onRatingCheck: (ratingValue: number) => void;
  isChecked: boolean;
}

const Star: React.FunctionComponent<Props> = (props: Props) => {
  const {
    ratingValue,
    onRatingCheck,
    isChecked
  } = props;

  return (
    <React.Fragment>
      <input
        className="rating__input"
        id={`star-${ratingValue}`}
        type="radio"
        name="rating"
        value={`${ratingValue}`}
        onChange={() => onRatingCheck(ratingValue)}
        checked={isChecked}
      />

      <label
        className="rating__label"
        htmlFor={`star-${ratingValue}`}
      >
        Rating {`${ratingValue}`}
      </label>
    </React.Fragment>
  );
};

export default Star;
