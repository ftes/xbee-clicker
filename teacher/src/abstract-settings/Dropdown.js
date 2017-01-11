import React, { PropTypes } from 'react'
import { FormControl } from 'react-bootstrap'

const Dropdown = ({ settingsKey, settings, options, onChange,
  editKeyPrefix }) => (
  <FormControl
    componentClass='select'
    value={settings[settingsKey]}
    onChange={(event) =>
      onChange(editKeyPrefix, settingsKey, event.target.value)}
  >
    {options.map(o =>
      <option value={o} key={o}>{o}</option>
    )}
  </FormControl>
)

Dropdown.propTypes = {
  settingsKey: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  editKeyPrefix: PropTypes.string.isRequired,
}

export default Dropdown