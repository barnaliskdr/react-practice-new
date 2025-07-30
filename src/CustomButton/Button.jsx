import React from 'react'
import { Button } from 'primereact/button';


const MyButton = ({variant , size, children, ...rest}) => {

  const variantClasses = {
    primary: 'p-button-primary',
    secondary: 'p-button-secondary',
    danger: 'p-button-danger',
  }

  const sizeClasses = {
    sm: 'px-2 py-1',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
  }

  const classNames = `${sizeClasses[size]}` 
  const severities = `${variant}`
  console.log(classNames);
  console.log(severities);

  return (
    <div>
      <Button className={classNames} severity="success" {...rest}>{children}</Button>
    </div>
  )
}

export default MyButton;
