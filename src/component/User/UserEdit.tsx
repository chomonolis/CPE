import { useForm, Controller } from 'react-hook-form';
import { API, graphqlOperation } from 'aws-amplify';

import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Box,
} from '@mui/material';

import { CreateUserInput, UserType } from '../../API';
import { createUser } from '../../graphql/mutations';

import registerMui from '../../utils/registerMui';

type FormInputs = {
  name: string;
  type: CreateUserInput['type'];
};

type Props = {
  createFlag: boolean;
};

const UserEdit = (props: Props) => {
  const { register, handleSubmit, control } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      type: UserType.EMPTY,
    },
  });

  const onSubmit = async (data: FormInputs) => {
    try {
      if (props.createFlag) {
        await API.graphql(graphqlOperation(createUser, { input: data }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {props.createFlag && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', flexFlow: 'column', maxWidth: '500px' }}>
            <TextField
              label="Name"
              type="string"
              InputLabelProps={{ shrink: true }}
              {...registerMui(
                register('name', {
                  required: true,
                  maxLength: 30,
                })
              )}
            />
            <Controller
              name="type"
              rules={{}}
              control={control}
              render={({ field }) => {
                return (
                  <FormControl>
                    <FormLabel>Type</FormLabel>
                    <RadioGroup
                      defaultValue="EMPTY"
                      row
                      name={field.name}
                      onChange={field.onChange}
                      {...field.ref}
                    >
                      <FormControlLabel
                        value={UserType.ADMIN}
                        control={<Radio />}
                        label="Admin"
                        disabled
                      />
                      <FormControlLabel
                        value={UserType.GENERAL}
                        control={<Radio />}
                        label="General"
                        disabled
                      />
                      <FormControlLabel
                        value={UserType.EMPTY}
                        control={<Radio />}
                        label="Empty"
                      />
                    </RadioGroup>
                  </FormControl>
                );
              }}
            />

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      )}
    </>
  );
};

export default UserEdit;
