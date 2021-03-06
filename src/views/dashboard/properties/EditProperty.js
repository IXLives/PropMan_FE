import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import PropertyForm from '../../../components/Properties/PropertyForm';
// Redux
import {
  editProperty,
  getProperty,
  getProperties
} from '../../../store/actions';

export default function EditProperty({ id }) {
  // setup dispatch to dispatch the action
  const dispatch = useDispatch();

  // when form is submitted dispatch edit action
  const submitFn = property => {
    dispatch(editProperty(id, property)).then(() => {
      dispatch(getProperties());
      navigate('/dashboard/properties');
    });
  };

  // grab the property from redux state
  const property = useSelector(state => state.propReducer.property);

  // grab isGettingProperty bool from state
  const isGettingProperty = useSelector(
    state => state.propReducer.isGettingProperty
  );
  // grab isUpdatingProperty bool from state
  const isSubmitting = useSelector(
    state => state.propReducer.isUpdatingProperty
  );

  // initialValues for the edit form
  const propertyFields = {
    name: property.name,
    street_address: property.street_address,
    rent: property.rent,
    city: property.city,
    state: property.state,
    zip: property.zip,
    occupied: property.occupied
  };

  // get the property by id when component mounts
  useEffect(() => {
    dispatch(getProperty(id));
  }, [dispatch, id]);

  return (
    <div className="properties">
      <PropertyForm
        loading={isGettingProperty}
        isSubmitting={isSubmitting}
        initialValues={propertyFields}
        submit={submitFn}
      />
    </div>
  );
}

EditProperty.defaultProps = {
  id: undefined
};

EditProperty.propTypes = {
  id: PropTypes.string
};
