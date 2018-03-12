import React from 'react';
import PropTypes from 'prop-types';
import { Navbar as BsNavbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';

import { IdMappingsModal } from '@clickr/common/lib/id-mappings';
import { AskQuestion, Showdown } from '@clickr/common/lib/questions';
import { ShowSettings } from '@clickr/common/lib/show-settings';
import { Button } from '@clickr/common/lib/components';
import { getState as isSyncEnabled } from '@clickr/common/lib/sync';

import Save from '../save/save';
import Load from '../save/load';
import Reset from '../save/reset';
import { zIndex, tabIndex } from '../core/globals';
import SaveQuestions from '../save/save-questions';
import Sync from './sync';

// Component
export const NavbarComponent = ({ showSettings, syncEnabled }) => {
  let input;
  let idMappings;

  return (
    // in front of countdown
    <BsNavbar collapseOnSelect style={{ zIndex: zIndex.navbar }}>
      <BsNavbar.Header>
        <BsNavbar.Brand>Clickr Teacher</BsNavbar.Brand>
        <BsNavbar.Toggle />
      </BsNavbar.Header>
      <BsNavbar.Form pullLeft>
        <AskQuestion />
      </BsNavbar.Form>
      <Nav pullLeft>
        <Showdown Wrapper={NavItem} />
      </Nav>
      <BsNavbar.Collapse>
        <Nav pullRight>
          <ShowSettings Wrapper={NavItem} />
        </Nav>
        {showSettings &&
          <Nav pullRight>
            <SaveQuestions Wrapper={NavItem} />
            <Reset Wrapper={NavItem} />
            <Sync Wrapper={NavItem} enabled={syncEnabled} />
            <Button
              Wrapper={NavItem}
              onClick={() => idMappings.open()}
              faIcon="edit"
              label="ID Mappings"
            />
            <Save Wrapper={NavItem} />
            <Load Wrapper={NavItem} getInput={() => input} />
          </Nav>
        }
      </BsNavbar.Collapse>

      <input type="file" style={{ display: 'none' }} ref={(c) => { input = c; }} />
      <IdMappingsModal ref={(c) => { idMappings = c; }} startTabIndex={tabIndex.idMappings} />
    </BsNavbar>
  );
};

NavbarComponent.propTypes = {
  showSettings: PropTypes.bool.isRequired,
  syncEnabled: PropTypes.bool.isRequired,
};

// Container
const mapStateToProps = state => ({
  syncEnabled: isSyncEnabled(state),
});

export default connect(mapStateToProps)(NavbarComponent);