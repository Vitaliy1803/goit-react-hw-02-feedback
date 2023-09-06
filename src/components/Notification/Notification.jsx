import PropTypes from 'prop-types';

const Notification = ({ massage }) => {
  return (
    <div>
      <h2>{massage}</h2>
    </div>
  );
};

Notification.propTypes = {
  massage: PropTypes.string.isRequired,
};

export default Notification;
