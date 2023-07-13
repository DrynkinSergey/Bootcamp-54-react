import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

export const FormikPageUpgrade = () => {
	const dispatch = useDispatch()
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			cash: '',
			country: '',
			terms: '',
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.max(15, 'Name must be 15 charecters or less...')
				.required('Name is required'),
			email: Yup.string()
				.email('Invalid email, try again')
				.required('Email is required'),
			cash: Yup.number()
				.max(999, 'Max value must 999 or less')
				.required('Cash is required'),
		}),

		onSubmit: values => {
			console.log(values)
			dispatch({ type: 'FORMIK', payload: values })
			toast.success(`Дякую ${values.name}`)
		},
	})
	return (
		// tailwind
		<div className='bg-darkMain min-h-screen flex justify-center items-center'>
			<form
				onSubmit={formik.handleSubmit}
				className='text-white border-2 border-white/80 px-6 py-12 rounded-md flex flex-col gap-4'
			>
				<div>
					<label
						className={`block mb-2 ${
							formik.errors.name && formik.touched.name ? 'text-red-500' : ''
						}`}
					>
						{formik.errors.name && formik.touched.name
							? formik.errors.name
							: 'Name'}
					</label>
					<input
						className='text-black px-2 py-[1px] rounded-sm'
						type='text'
						name='name'
						{...formik.getFieldProps('name')}
						placeholder='Enter your name...'
					/>
					{/* {formik.errors.name ? <div >{formik.errors.name}</div> : null} */}
				</div>
				<div>
					<label
						className={`block mb-2 ${
							formik.errors.name && formik.touched.name ? 'text-red-500' : ''
						}`}
					>
						{formik.errors.email && formik.touched.email
							? formik.errors.email
							: 'Email'}
					</label>
					<input
						className='text-black px-2 py-[1px] rounded-sm'
						type='text'
						name='email'
						{...formik.getFieldProps('email')}
						placeholder='Enter your email...'
					/>
				</div>
				<div>
					<label
						className={`block mb-2 ${
							formik.errors.cash && formik.touched.cash ? 'text-red-500' : ''
						}`}
					>
						{formik.errors.cash && formik.touched.cash
							? formik.errors.cash
							: 'Cash'}
					</label>
					<input
						className='text-black px-2 py-[1px] rounded-sm'
						type='number'
						{...formik.getFieldProps('cash')}
						name='cash'
						placeholder='Enter your value'
					/>
				</div>
				<div>
					<label className='block mb-2'>Country:</label>

					<select
						name='country'
						onChange={formik.handleChange}
						value={formik.values.country}
						className='text-black w-full'
					>
						<option value='Ukraine'>Ukraine</option>
						<option value='USA'>USA</option>
						<option value='United Kingdom'>United Kingdom</option>
					</select>
				</div>
				<div>
					<input
						onChange={formik.handleChange}
						id='terms'
						className='px-2 py-[1px] mr-2 rounded-sm'
						type='checkbox'
						value={formik.values.terms}
						name='terms'
						placeholder='Enter your value'
					/>
					<label className=' mb-2' htmlFor='terms'>
						Terms of privacy:
					</label>
				</div>
				<button
					type='submit'
					className='bg-white/80 text-black px-2 py-2 rounded-md hover:bg-white/50'
				>
					Donate
				</button>
			</form>
		</div>
	)
}
