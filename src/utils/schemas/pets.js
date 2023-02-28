import * as Yup from 'yup';

export const petsSchema = Yup.object().shape({
  name: Yup.string().min(2).max(16).required(),
  birthday: Yup.date()
    .default(() => new Date())
    .required(),
  breed: Yup.string().min(2).max(16).required(),
  petImage: Yup.string().required(),
  comments: Yup.string().min(2).max(120),
});
