import { useForm } from 'react-hook-form';
import './Home-page.css';

export default function HomePage() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    const password = watch('password');

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="title">
                        <h2>Admission Form</h2>
                    </div>
                    <div className="input-field">
                        <p>FullName</p>
                        <input
                            type="text"
                            {...register('fullname', {
                                required: 'Your name is required !!'
                            })}
                        />
                        <div className="error-div">
                            {errors.fullname && <span>{errors.fullname.message}</span>}
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Email Address</p>
                        <input
                            type="email"
                            {...register('username', {
                                required: 'Your email address is required !!',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email address,please check !!'
                                }
                            })}
                        />
                        <div className="error-div">
                            {
                                errors.username && <span>{errors.username.message}</span>
                            }
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Course Name</p>
                        <select
                            {...register('role', {
                                required: 'Please select your course name first !!'
                            })}
                        >
                            <option value="" selected>Select course name</option>
                            <option value="B.Tech">B.Tech</option>
                            <option value="BCA">BCA</option>
                            <option value="Bachelor of engeneering">Bachelor of engeneering</option>
                            <option value="Bachelor of science">Bachelor of science</option>
                            <option value="Master of science">Master of science</option>
                        </select>
                        <div className="error-div">
                            {
                                errors.role &&
                                <span>{errors.role.message}</span>
                            }
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Gender</p>
                        <div className="gender">
                            <div className="sub-field">
                                <input
                                    type="radio"
                                    value='Male'
                                    name='gender'
                                    id='male'
                                    {...register('gender', {
                                        required: 'Choose your gender first !!'
                                    })}
                                />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div className="sub-field">
                                <input
                                    type="radio"
                                    value='Female'
                                    name='gender'
                                    id='female'
                                    {...register('gender', {
                                        required: 'Choose your gender first !!'
                                    })}
                                />
                                <label htmlFor="female">Female</label>
                            </div>
                        </div>
                        <div className="error-div">
                            {
                                errors.gender &&
                                <span>{errors.gender.message}</span>
                            }
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Your Age</p>
                        <input
                            type="number"
                            {...register('age', {
                                required: 'Your age is required !!',
                                min: {
                                    value: 18,
                                    message: 'Your age must be above 18 !!'
                                }
                            })}
                        />
                        <div className="error-div">
                            {
                                errors.age && <span>{errors.age.message}</span>
                            }
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Password</p>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'Password is required !!'
                            })}
                        />
                        <div className="error-div">
                            {
                                errors.password && <span>{errors.password.message}</span>
                            }
                        </div>
                    </div>
                    <div className="input-field">
                        <p>Confirm Password</p>
                        <input
                            type="password"
                            {...register('cnf', {
                                required: 'Please match your password !!',
                                validate:(value)=>
                                    value===password || "Password doesn't match !!"
                            })}
                        />
                        <div className="error-div">
                            {
                                errors.cnf && <span>{errors.cnf.message}</span>
                            }
                        </div>
                    </div>
                    <div className="input-field">
                        <input
                            type="checkbox"
                            id='condition'
                            {...register('terms',{
                                required:'you must accept terms and conditions !!'
                            })}
                        />
                        <label htmlFor='condition'> I have read the form and I accept terms conditions.</label>
                        <div className="error-div">
                        {
                                errors.terms && <span>{errors.terms.message}</span>
                            }
                        </div>
                    </div>
                    <div className="button-field">
                        <button type='submit'>Submit Form</button>
                    </div>
                </form>
            </div>

        </>
    )
}