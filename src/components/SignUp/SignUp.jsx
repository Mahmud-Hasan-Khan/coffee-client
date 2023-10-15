import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);


    const handleSignUp = (e) => {

        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // new user created
                const createdAt = result.user?.metadata?.creationTime;
                const newUser = { email, createdAt: createdAt };
                fetch('https://coffee-store-server-600ex1t85-mahmud-hasans-projects.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Registration successful & data added to server successfully',
                                showConfirmButton: false,
                                timer: 1500
                            }
                            )
                        }
                    })
            })
            .catch(error => {
                console.error(error);
            })

    }


    return (
        <div className='w-screen h-screen py-10 bg-[#00AEEF]'>

            <div className='flex justify-center items-center' >
                <div className='flex flex-col px-6 rounded-e-md sm:p-10 shadow-2xl bg-base-100 text-gray-900 relative' data-aos="fade-down">
                    <h1 className='text-3xl font-bold text-white bg-[#00AEEF] absolute top-4 left-0 px-2 rounded-e-xl'>Welcome To</h1>
                    <div className='mt-10 md:mt-0 md:mb-2 text-center'>
                        <h1 className='my-3 text-4xl font-bold text-[#00AEEF]'>Sign Up</h1>
                    </div>
                    <form
                        onSubmit={handleSignUp}
                        noValidate=''
                        action=''
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    name="email"
                                    id='email'
                                    required
                                    placeholder='Enter Your Email Address'
                                    className='w-full px-3 py-3 border rounded-md border-gray-300 focus:outline-[#00AEEF] bg-base-100 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>

                            <div>
                                <label htmlFor='password' className='block text-sm mb-2 '>
                                    Password
                                </label>
                                <div className="relative input border rounded-md border-gray-300  focus:outline-[#00AEEF] flex justify-items-start items-center">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='*******'
                                        name="password"
                                        id='password'
                                        required
                                        className='w-full px-3 py-2 focus:outline-[#fff] bg-base-100'
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type='submit' className='bg-[#00AEEF] w-full rounded-md py-3 text-white'>Sign Up</button>
                        </div>
                        {/* <div className="divider">OR</div>
                        <div onClick={handleGoogleLogin}
                            className='flex justify-center items-center space-x-2 border p-2 border-gray-300 border-rounded rounded-md cursor-pointer bg-[#4081ec] text-white'
                        >
                            <FcGoogle className='bg-white rounded-full' size={32} />
                            <p className='text-center'>Continue with Google</p>
                        </div> */}
                    </form>
                    <p className='px-6 mt-2 text-sm font-medium text-center text-gray-400'>
                        Already have an account?
                        <Link
                            to='/signIn'
                            className='text-[#00aeef] hover:underline font-semibold ml-1'
                        >
                            SignIn Now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;