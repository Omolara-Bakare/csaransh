import React from "react";
// nodejs library that concatenates classes
import classNames from "../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/classnames./../../../Library/Caches/typescript/2.9/node_modules/@types/classnames";
// nodejs library to set properties for components
import PropTypes from "../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types./../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import cardIconStyle from "assets/jss/material-dashboard-react/components/cardIconStyle.js";

function CardIcon({ ...props }) {
  const { classes, className, children, color, ...rest } = props;
  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[color + "CardHeader"]]: color,
    [className]: className !== undefined
  });
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  );
}

CardIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ])
};

export default withStyles(cardIconStyle)(CardIcon);