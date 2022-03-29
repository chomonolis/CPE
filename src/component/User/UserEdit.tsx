import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Box,
  Stack,
} from '@mui/material';

import { CreateUserInput, UserType } from '../../API';

import useUser from '../../hook/User.hook';
import registerMui from '../../utils/registerMui';
import CustomizedSnackbar from '../CustomizedSnackbar';

type FormInputs = {
  name: string;
  type: CreateUserInput['type'];
};

type Props = {
  createFlag: boolean;
  setCreatedUserId?: React.Dispatch<React.SetStateAction<string>>;
};

const UserEdit = (props: Props) => {
  const [update, setUpdate] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);
  const { register, handleSubmit, control } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      type: UserType.EMPTY,
    },
  });
  const { createUser } = useUser();

  const onSubmit = async (data: FormInputs) => {
    try {
      setUpdate(true);
      if (props.createFlag) {
        const r = await createUser(data.name, data.type);
        if (r && props.setCreatedUserId) {
          props.setCreatedUserId(r.id);
        }
        setUpdate(false);
        setComplete(true);
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
            <Stack spacing={2} sx={{ width: '100%' }}>
              <CustomizedSnackbar
                msg="更新しています"
                serverity="info"
                open={update}
                setOpen={setUpdate}
              />
              <CustomizedSnackbar
                msg="更新が正常に完了しました"
                serverity="success"
                open={complete}
                setOpen={setComplete}
              />
            </Stack>
          </Box>
        </form>
      )}
    </>
  );
};

export default UserEdit;
