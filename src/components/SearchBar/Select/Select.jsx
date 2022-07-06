import React from 'react'
import styles from './Select.module.css'

const Select = ({ value, onChange, title, options }) => {
  return (
    <div className={styles["input-wrapper"]}>
      <span>{title}</span>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(option => <option value={option.value} key={option.value}>{option.name}</option>)}
      </select>
    </div>
  )
}

export default Select
