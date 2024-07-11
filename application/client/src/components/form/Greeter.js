import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Field, useFormikContext } from 'formik';

import { Divider } from '../generic';
import { RenderSelectField } from '../fields';
import { Button } from '../generic';

const Greeter = ({ isDisabled, submitLoading, submitError }) => {
  const { values, setFieldValue } = useFormikContext();
  const [localFile, setLocalFile] = useState(null);

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>

        {/* Title */}
        <Grid item xs={12}>
          <Typography variant="subtitle1">Select your favorite greeting</Typography>
          <Divider />
        </Grid>

        {/* Greeting */}
        <Grid item xs={12} md={6}>
          <Field
            name="greeting"
            component={RenderSelectField}
            label="* Favorite Greeting"
            disabled={isDisabled}
            options={[
              { value: 'Aloha', label: 'Aloha' },
              { value: 'Bonjour', label: 'Bonjour' },
              { value: 'Greetings and salutations', label: 'Greetings and salutations' },
              { value: 'Hello', label: 'Hello' },
              { value: 'Howdy', label: 'Howdy' },
              { value: 'Konichiwa', label: 'Konichiwa' },
            ]}
          />
          or upload an image
        </Grid>
        <Grid item xs={12} md={8}>
          <input
            id="file"
            name="greetingImage"
            type="file"
            onChange={(event) => {
              setLocalFile(event.target.files[0]);
              setFieldValue('file', event.currentTarget.files[0]);
            }}
            accept="image/*"
          />
        </Grid>

        {/* Submit */}
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid item xs={8}>
              <Button
                type="submit"
                loading={submitLoading}
                disabled={localFile === null && values.greeting === ''}
                size="large"
                text="Submit"
              />

              {/* Submit Error */}
              {submitError && (
                <Box pt="1rem">
                  <Typography variant="body1" color="error">{submitError}</Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { Greeter };