import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import T from 'prop-types';
import routes from '../../routes';
import questionsActions from '../../redux/questions/questionsActions';
import styles from './Button.module.css';

const Button = ({ lable, onReset }) => {
  const proTestThemeLSData = localStorage.getItem('proTestTheme');
  let proTestTheme = '';
  if (proTestThemeLSData) {
    proTestTheme = JSON.parse(proTestThemeLSData);
  }

  return (
    <Link
      to={
        proTestTheme === 'Теория тестирования'
          ? routes.DASHBOARD_PAGE
          : routes.MAIN_PAGE
      }
      className={styles.link}
      onClick={proTestTheme === 'Теория тестирования' ? () => null : onReset}
    >
      {lable}
    </Link>
  );
};

Button.propTypes = {
  lable: T.string.isRequired,
  onReset: T.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onReset: () => dispatch(questionsActions.resetQuestions()),
});

export default connect(null, mapDispatchToProps)(Button);
