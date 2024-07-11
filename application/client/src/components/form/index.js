import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Formik, Form as FormikForm } from 'formik';
import { useHistory } from 'react-router-dom';

import { Routes, FormSchema } from '../../constants';
import { handleSubmission } from '../../utils';

import { Card } from '../generic';
import { DataForm } from './DataForm';
import { Greeter } from './Greeter';
import { SubmissionInfo } from './SubmissionInfo';
import { Summary } from './Summary';

const Form = ({ initialValues = null, isDisabled }) => {
  const history = useHistory();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const formValues = initialValues ? initialValues : {
    greeting: '',
  };

  const handleSubmit = async (values) => {
    setSubmitLoading(true);
    const modifiedValues = handleSubmission(values);

    if (values.file) {
      if (modifiedValues.greeting === '') {
        modifiedValues.greeting = 'Image Uploaded Successfully';
      }
      const formData = new FormData();
      formData.append('image', values.file);

      const uploadResponse = await fetch(`https://demo-alpha-api-management.azure-api.net/server/v1/images`, {
        method: 'POST',
        body: formData,
      });

      const { imagePath, error } = await uploadResponse.json();
      if (error) {
        setSubmitError(error.message || 'Failed to upload image');
        setSubmitLoading(false);
        return;
      }
    }

    const response = await fetch(`https://demo-alpha-api-management.azure-api.net/server/v1/greeting`, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(modifiedValues),
    });

    setSubmitLoading(false);
    if (response.ok) {
      const { id, greeting, error } = await response.json();
      if (error) {
        setSubmitError(error.message || 'Failed to submit the form');
      } else {
        history.push(Routes.Confirmation, { id, greeting });
      }
    } else {
      setSubmitError(response.statusText || 'Server error');
    }
  };

  return (
    <RenderForm
      formValues={formValues}
      isDisabled={isDisabled}
      submitLoading={submitLoading}
      submitError={submitError}
      handleSubmit={handleSubmit}
    />
  );
};

const RenderForm = ({ formValues, isDisabled, submitLoading, submitError, handleSubmit }) => {
  return (
    <Grid item xs={12} sm={isDisabled ? 12 : 11} md={isDisabled ? 12 : 10} lg={isDisabled ? 12 : 8} xl={isDisabled ? 12 : 6}>
      {isDisabled && formValues && (
        <Box pl={2} pr={2} pb={3}>
          <SubmissionInfo id={formValues.id} latest_greeting={formValues.greeting} />
        </Box>
      )}

      {!isDisabled && (
        <Box pt={4} pb={4} pl={2} pr={2}>
          <Summary />
        </Box>
      )}

      <Box pl={2} pr={2}>
        <Card>
          <Formik
            initialValues={formValues}
            validationSchema={FormSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
          >
            <FormikForm>
              <Grid container spacing={2}>
                {!isDisabled && <Greeter submitLoading={submitLoading} submitError={submitError} />}
              </Grid>
            </FormikForm>
          </Formik>
        </Card>
      </Box>

      <DataForm />
    </Grid>
  );
};

export { Form };
