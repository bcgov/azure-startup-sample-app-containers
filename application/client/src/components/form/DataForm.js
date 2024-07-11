import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Formik, Form as FormikForm, FieldArray } from 'formik';
import { dateToString, timeTo24hString } from '../../utils';
import { Card } from '../generic';
import { Divider } from '../generic';

class CustomDataForm extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch(`https://demo-alpha-api-management.azure-api.net/server/v1/greeting`, {
      method: 'GET',
      crossDomain: true,
      headers: { 'Accept': 'application/json', 'Content-type': 'application/json' },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then(({ greetingItems }) => {
        this.setState({ data: greetingItems });
      })
      .catch((err) => console.error(err));
  }

  render() {
    if (!this.state.data) {
      return 'loading...';
    }

    return (
      <Grid container>
        {this.state.data.length > 0 && (
          <Box pt={4} pb={4} pl={2} pr={2}>
            <Card>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Previous greeting selections</Typography>
                <Divider />
                <Formik initialValues={this.state.data}>
                  <FormikForm>
                    <FieldArray
                      name="latest_greetings"
                      render={arrayHelpers => (
                        <table>
                          <tbody>
                            {this.state.data.map((greeting_entry, index) => (
                              <tr key={index}>
                                <td>{dateToString(new Date(greeting_entry.createdAt).toLocaleDateString())}</td>
                                <td>{timeTo24hString(new Date(greeting_entry.createdAt).toLocaleString())}</td>
                                <td>{greeting_entry.greeting}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    />
                  </FormikForm>
                </Formik>
              </Grid>
            </Card>
          </Box>
        )}
      </Grid>
    );
  }
}

export const DataForm = CustomDataForm;
