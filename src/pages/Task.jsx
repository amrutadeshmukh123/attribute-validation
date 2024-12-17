import { useForm } from 'react-hook-form';
import './validation.css';
import toast, { Toaster } from 'react-hot-toast';

export default function Validation(){

    const{ register,
        handleSubmit,
        formState:{errors},
        reset } = useForm()

    const formSubmit=(s)=>{
        console.log(s)
    }

    return(
        <>
         <Toaster
      position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>

        
        <div className="container">
            <form>
                <div className="title">
                    <h2>Patient Registration Form</h2>
                </div>
                <div className="input-field">
                    <p>Patient Name:</p>
                    <input type="text" 
                     {
                        ...register('fullname',{
                            required:'Patient name enter.'
                        })
                    }
                    ></input>
                    <div className="error-div">
                        {
                            errors.fullname &&
                            <span>{errors.fullname.message}</span>
                        }
                    </div>
                </div><div className="input-field">
                    <p>Patient Age:</p>
                    <input type="number"
                    {...register('age',{
                        required:'Patient age is requred'
                       })
                     }
                    >
                    </input>
                    <div className="error-div">
                        {
                            errors.age &&
                            <span>{errors.age.message}</span>
                        }
                    </div>
                </div>
                <div className="input-field">
                    <p>Date of Birth:</p>
                    <input type="date" 
                    {...register('dob',{
                        required:'Patient Date of birth required'
                    })}
                    
                    ></input>
                    <div className="error-div">
                         {
                            errors.dob &&
                            <span>{errors.dob.message}</span>
                         }
                    </div>
                </div>
                <div className="input-field"  >
                    <p>Gender:</p>
                     <div className="gender-element">
                     <div className="gender-field">
                     <input
                        type="radio"
                        value='Male'
                        name='gender'
                        id='male'
                        {...register('gender',{
                            required:'Patient gender is required'
                        })}
                      ></input>
                       <label htmlFor='male'>Male</label>
                     </div>
                     <div className="gender-field">
                     <input
                        type="radio"
                        value='Female'
                        name='gender'
                        id='female'
                        {...register('gender',{
                            required:'Patient gender is required'
                        })}
                      ></input>
                       <label htmlFor='female'>Female</label>
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
                    <p>Marital Status:</p>
                     <div className="marital-element">
                     <div className="marital-field">
                     <input
                        type="radio"
                        value='Single'
                        name='marital'
                        id='single'
                        {...register('marital',{
                            required:'Patient marital status is required'
                        })}
                      ></input>
                       <label htmlFor='single'>Single</label>
                     </div>
                     <div className="marital-field">
                     <input
                        type="radio"
                        value='Married'
                        name='marital'
                        id='married'
                        {...register('marital',{
                            required:'Patient marital status is required'
                        })}
                      ></input>
                       <label htmlFor='married'>Married</label>
                     </div>
                     </div>
                    <div className="error-div">
                        {
                            errors.marital && 
                            <span>{errors.marital.errors}</span>
                        }
                    </div>
                </div>
                <div className="input-field">
                    <p>Mobile No:</p>
                    
                    <input type="number"
                     placeholder='+91-0000000000'
                     {...register('mobile',{
                        required:'Mobile number is required'
                     })}
                    
                    ></input>
                    <div className="error-div">
                        {
                            errors.mobile && 
                            <span>{errors.mobile.message}</span>
                        }
                    </div>
                </div>
                <div className="input-field">
                    <p>Email Id:</p>
                    <input type="email" 
                    {...register('eid',{
                        required:'Patient Email id required.',
                        pattern:{
                            value:/^\S+@\S+$/i,
                            message:'Invalid email address'
                        }
                    })}
                    
                    ></input>
                    <div className="error-div">
                        {errors.eid &&
                         <span>{errors.eid.message}</span>
                         }
                    </div>
                </div>
              …</div>
                <div className="input-field">
                    <p> Confirm email Id:</p>
                    <input type="email" 
                    {...register('ceid',{
                        required:'Patient confirm Email id .',
                        pattern:{
                            value:/^\S+@\S+$/i,
                            message:'Invalid email address'
                        }
                    })}
                    ></input>
                    <div className="error-div">
                        {
                            errors.ceid &&
                            <span>{errors.ceid.message}</span>
                        }
                    </div>
                </div>
                <div className="input-field">
                    <p>Address:</p>
                    <input type="text"
                    {...register('add',{
                        required:'Address is required.'
                    })} 
                    
                    ></input>
                    <div className="error-div">
                        {
                            errors.add && 
                            <span>{errors.add.message}</span>
                        }
                    </div>
                </div>
                <div className="input-field">
                    <p>Insurance Name</p>
                    <input type="text"
                    
                    ></input>
                    </div>
                <div className="input-field">
                <p>Past medical history:</p>
                 <select 
                 {...register('pmh',{
                    required:'select your Medical history'     
                 })}
                 >
                    <option value="">Selected</option>
                    <option value="">Anemia</option>
                    <option value="">Asthma</option>
                    <option value="">Bronchitis</option>
                    <option value="">Chickenpox</option>
                    <option value="">Fever</option>
                    <option value="">Viral infection</option>
                    <option value="">Diabetes</option>
                    <option value="">Cancer</option>
                 </select>
                 <div className="error-div">
                        {
                            errors.pmh && 
                            <span>{errors.pmh.message}</span>
                        }
                    </div>
            </div>
            <div className="input-field">
                    <p></p>
                    <input type="checkbox" 
                      {...register('check',{
                        required:'select the check box.'
                      })}
                    
                    ></input>
                    <label>Accept Terms & conditions. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est dolores reprehenderit omnis esse porro amet, animi aut odio molestiae nisi molestias excepturi ex, sit quaerat quos vel impedit deleniti. </label>
            …<div className="error-div">
                        {
                            errors.check &&
                            <span>{errors.check.message}</span>
                        }
                    </div>
                </div>
                <div className="button-field">
                    <button type='submit'>Register</button>
                </div>
                
            </form>
        </div>
        </>
    )
}