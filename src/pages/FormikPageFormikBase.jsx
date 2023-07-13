import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
export const FormikPageFormikBase = () => {
	const init = {
		name: '',
		email: '',
		cash: '',
		country: '',
		terms: '',
	}
	return (
		// tailwind
		<div className='bg-darkMain min-h-screen flex justify-center items-center'>
			<Formik
				initialValues={init}
				onSubmit={values => {
					console.log(values)
					toast.success(`Дякую ${values.name}`)
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.max(15, 'Name must be 15 charecters or less...')
						.required('Name is required'),
					email: Yup.string()
						.email('Invalid email, try again')
						.required('Email is required'),
					cash: Yup.number()
						.max(999, 'Max value must 999 or less')
						.required('Cash is required'),
					country: Yup.string().required('Country is required'),
				})}
			>
				<Form className='text-white border-2 border-white/80 px-6 py-12 rounded-md flex flex-col gap-4'>
					<div>
						<label className='block mb-2'>Name:</label>
						<Field
							className='text-black px-2 py-[1px] rounded-sm'
							type='text'
							name='name'
						/>
						<ErrorMessage
							className='text-red-500'
							name='name'
							component='div'
						/>
					</div>
					<div>
						<label className='block mb-2'>Email:</label>
						<Field
							className='text-black px-2 py-[1px] rounded-sm'
							type='text'
							name='email'
						/>
						<ErrorMessage
							className='text-red-500'
							name='email'
							component='div'
						/>
					</div>
					<div>
						<label className='block mb-2'>Cash:</label>
						<Field
							className='text-black px-2 py-[1px] rounded-sm'
							type='number'
							name='cash'
						/>
						<ErrorMessage
							className='text-red-500'
							name='cash'
							component='div'
						/>
					</div>
					<div>
						<label className='block mb-2'>Country:</label>
						<Field className='text-black' as='select' name='country'>
							<option value=''>----</option>
							<option value='Ukraine'>Ukraine</option>
							<option value='USA'>USA</option>
							<option value='United Kingdom'>United Kingdom</option>
						</Field>
						<ErrorMessage
							className='text-red-500'
							name='country'
							component='div'
						/>
					</div>
					<div>
						<input
							id='terms'
							className='px-2 py-[1px] mr-2 rounded-sm'
							type='checkbox'
							name='terms'
							placeholder='Enter your value'
						/>
						<label className=' mb-2' htmlFor='terms'>
							Terms of privacy:
						</label>
					</div>
					<button className='bg-white/80 text-black px-2 py-2 rounded-md hover:bg-white/50'>
						Donate
					</button>
				</Form>
			</Formik>
		</div>
	)
}
